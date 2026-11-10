/** Builds the GCC directory, search index and factor chips from processed records. */
import fs from "node:fs/promises";
import path from "node:path";
import { GCC_GROUPS, GCC_PUBLISHED_TICKERS, GCC_TICKERS, getGccCurrency } from "../config/gcc-coverage";
import { buildFactorChips } from "../lib/metrics";
import { tickerDataSchema, universeEntrySchema, type TickerData, type UniverseEntry } from "../lib/schemas";

const PROCESSED = path.join(process.cwd(), "data", "gcc", "processed");
const PUBLIC = path.join(process.cwd(), "public", "data", "gcc");

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
  for (const ticker of GCC_TICKERS) {
    const raw = await readJson<unknown>(path.join(PROCESSED, ticker, "data.json"));
    if (!raw) continue;
    const parsed = tickerDataSchema.safeParse({
      ...(raw as Record<string, unknown>),
      quoteCurrency: getGccCurrency(ticker),
    });
    if (parsed.success) companies.push(parsed.data);
  }

  const chips = buildFactorChips(
    companies.map((company) => ({
      ticker: company.ticker,
      metrics: company.metrics,
      currency: company.currency,
    })),
    "USD",
  );

  const entries: UniverseEntry[] = [];
  const search: Array<{ ticker: string; name: string; sector: string; industry: string; research: boolean }> = [];
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
        isResearch: GCC_PUBLISHED_TICKERS.includes(data.ticker),
        market: "GCC",
        currency: data.quoteCurrency ?? data.currency,
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
      research: GCC_PUBLISHED_TICKERS.includes(data.ticker),
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
        count: entries.length,
        asOf: entries.map((entry) => entry.asOf).filter(Boolean).sort().at(-1) ?? null,
        groups: GCC_GROUPS.map((group) => ({
          id: group.id,
          name: group.name,
          count: group.tickers.filter((ticker) =>
            entries.some((entry) => entry.ticker === ticker),
          ).length,
        })),
      },
      null,
      2,
    ),
    "utf8",
  );
  console.log(`[gcc:data] wrote ${entries.length} companies`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
