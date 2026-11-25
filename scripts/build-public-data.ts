/**
 * Rebuilds the small public directory files from the processed dataset.
 *
 * Run: pnpm build:data
 */
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { ALL_TICKERS, BENCHMARK_TICKER } from "../config/universe";
import { tickerDataSchema, universeEntrySchema } from "../lib/schemas";
import { getArchivedCompany } from "../config/archive";

const ROOT = process.cwd();
const PROCESSED = path.join(ROOT, "data", "processed");
const PUBLIC = path.join(ROOT, "public", "data");
const CONSENSUS = path.join(ROOT, "data", "consensus");
const SEGMENTS = path.join(ROOT, "data", "segments");

function coverageQuality(
  data: ReturnType<typeof tickerDataSchema.parse>,
  ticker: string,
) {
  const available = [
    data.metrics.revenueTtm,
    data.metrics.revenueGrowthTtm,
    data.metrics.epsGrowthTtm,
    data.metrics.operatingMargin,
    data.metrics.pe,
    data.metrics.evEbitda,
    data.metrics.fcfMargin,
    data.metrics.roic,
    data.metrics.netDebt,
    data.latestPrice.marketCap,
    data.metrics.return1y,
  ].filter((value) => value != null).length;
  const score =
    available +
    (existsSync(path.join(CONSENSUS, `${ticker}.json`)) ? 1 : 0) +
    (existsSync(path.join(SEGMENTS, `${ticker}.json`)) ? 1 : 0) +
    (data.annual.length >= 5 ? 1 : 0);
  const label = score >= 14 ? "High" : score >= 11 ? "Moderate" : "Limited";
  return { label, score };
}

async function main() {
  await fs.mkdir(PUBLIC, { recursive: true });

  const entries = [];

  for (const ticker of ALL_TICKERS) {
    if (ticker === BENCHMARK_TICKER) continue;
    try {
      const raw = await fs.readFile(
        path.join(PROCESSED, ticker, "data.json"),
        "utf8",
      );
      const data = tickerDataSchema.parse(JSON.parse(raw));
      const quality = coverageQuality(data, ticker);
      entries.push(
        universeEntrySchema.parse({
          ticker: data.ticker,
          name: data.name,
          sector: data.sector,
          industry: data.industry,
          description: data.description,
          isResearch: data.isResearch,
          currency: data.currency,
          price: data.latestPrice.close,
          changePct: data.latestPrice.changePct,
          marketCap: data.latestPrice.marketCap,
          return1y: data.metrics.return1y,
          revenueTtm: data.metrics.revenueTtm,
          revenueGrowthTtm: data.metrics.revenueGrowthTtm,
          epsGrowthTtm: data.metrics.epsGrowthTtm,
          operatingMargin: data.metrics.operatingMargin,
          pe: data.metrics.pe,
          evEbitda: data.metrics.evEbitda,
          dataQuality: quality.label,
          dataQualityScore: quality.score,
          factorChips: data.factorChips,
          asOf: data.latestPrice.asOf,
          archived: Boolean(getArchivedCompany(data.ticker)),
        }),
      );
    } catch (error) {
      console.warn(
        `[build:data] skipping ${ticker}: ${(error as Error).message}`,
      );
    }
  }

  entries.sort((a, b) => a.ticker.localeCompare(b.ticker));

  const searchIndex = entries.map((entry) => ({
    ticker: entry.ticker,
    name: entry.name,
    sector: entry.sector,
    industry: entry.industry,
    research: entry.isResearch,
  }));

  await fs.writeFile(
    path.join(PUBLIC, "stocks.json"),
    JSON.stringify(entries, null, 2),
    "utf8",
  );
  await fs.writeFile(
    path.join(PUBLIC, "search-index.json"),
    JSON.stringify(searchIndex, null, 2),
    "utf8",
  );

  console.log(
    `[build:data] wrote ${entries.length} companies (${entries.filter((entry) => entry.isResearch).length} research)`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
