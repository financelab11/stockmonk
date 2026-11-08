/** Builds the India directory and search index from processed records. */
import fs from "node:fs/promises";
import path from "node:path";
import { INDIA_TICKERS, INDIA_COVERAGE_GROUPS } from "../config/india-coverage";
import { buildFactorChips } from "../lib/metrics";
import { tickerDataSchema, universeEntrySchema, type TickerData } from "../lib/schemas";

const PROCESSED = path.join(process.cwd(), "data", "india", "processed");
const PUBLIC = path.join(process.cwd(), "public", "data", "india");

async function readJson<T>(file: string): Promise<T | null> {
  try {
    return JSON.parse(await fs.readFile(file, "utf8")) as T;
  } catch {
    return null;
  }
}

async function main() {
  await fs.mkdir(PUBLIC, { recursive: true });
  const companies: TickerData[] = [];
  for (const ticker of INDIA_TICKERS) {
    const raw = await readJson<unknown>(path.join(PROCESSED, ticker, "data.json"));
    if (!raw) continue;
    companies.push(tickerDataSchema.parse(raw));
  }

  const chips = buildFactorChips(
    companies.map((company) => ({ ticker: company.ticker, metrics: company.metrics })),
    "INR",
  );
  const entries = [];
  const search = [];
  for (const data of companies) {
    data.factorChips = chips[data.ticker] ?? [];
    await fs.writeFile(
      path.join(PROCESSED, data.ticker, "data.json"),
      JSON.stringify(data, null, 2),
      "utf8",
    );
    entries.push(
      universeEntrySchema.parse({
        ticker: data.ticker,
        name: data.name,
        sector: data.sector,
        industry: data.industry,
        description: data.description,
        isResearch: true,
        market: "IN",
        currency: "INR",
        price: data.latestPrice.close,
        changePct: data.latestPrice.changePct,
        marketCap: data.latestPrice.marketCap,
        return1y: data.metrics.return1y,
        revenueTtm: data.metrics.revenueTtm,
        revenueGrowthTtm: data.metrics.revenueGrowthTtm,
        operatingMargin: data.metrics.operatingMargin,
        pe: data.metrics.pe,
        evEbitda: data.metrics.evEbitda,
        factorChips: data.factorChips,
        asOf: data.latestPrice.asOf,
      }),
    );
    search.push({
      ticker: data.ticker,
      name: data.name,
      sector: data.sector,
      industry: data.industry,
      research: true,
    });
  }

  entries.sort((a, b) => (b.marketCap ?? 0) - (a.marketCap ?? 0));
  search.sort((a, b) => a.ticker.localeCompare(b.ticker));
  await fs.writeFile(path.join(PUBLIC, "stocks.json"), JSON.stringify(entries, null, 0), "utf8");
  await fs.writeFile(path.join(PUBLIC, "search-index.json"), JSON.stringify(search, null, 0), "utf8");
  await fs.writeFile(
    path.join(PUBLIC, "universe.json"),
    JSON.stringify(
      {
        groups: INDIA_COVERAGE_GROUPS.map((group) => ({
          id: group.id,
          name: group.name,
          count: group.tickers.length,
        })),
        count: entries.length,
        updatedAt: new Date().toISOString(),
      },
      null,
      2,
    ),
    "utf8",
  );
  console.log(`[india:data] wrote ${entries.length} companies`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
