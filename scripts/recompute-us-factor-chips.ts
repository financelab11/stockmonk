/**
 * Recomputes factor chips for the US universe from the processed records.
 *
 * Chips are normally written during ingestion. Run this after changing the
 * chip copy or percentile formatting so the committed dataset matches the
 * current `buildFactorChips` implementation.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { ALL_TICKERS, BENCHMARK_TICKER } from "../config/universe";
import { buildFactorChips } from "../lib/metrics";
import { tickerDataSchema, type TickerData } from "../lib/schemas";

const PROCESSED = path.join(process.cwd(), "data", "processed");

async function readJson(file: string): Promise<unknown | null> {
  try {
    return JSON.parse(await fs.readFile(file, "utf8")) as unknown;
  } catch {
    return null;
  }
}

async function main() {
  const companies: TickerData[] = [];
  for (const ticker of ALL_TICKERS) {
    if (ticker === BENCHMARK_TICKER) continue;
    const raw = await readJson(path.join(PROCESSED, ticker, "data.json"));
    if (!raw) continue;
    const parsed = tickerDataSchema.safeParse(raw);
    if (!parsed.success) {
      console.warn(`[chips] ${ticker}: skipped (${parsed.error.issues[0]?.message})`);
      continue;
    }
    companies.push(parsed.data);
  }

  const chips = buildFactorChips(
    companies.map((company) => ({
      ticker: company.ticker,
      metrics: company.metrics,
      currency: company.currency,
    })),
  );

  for (const data of companies) {
    data.factorChips = chips[data.ticker] ?? [];
    await fs.writeFile(
      path.join(PROCESSED, data.ticker, "data.json"),
      JSON.stringify(data, null, 2),
      "utf8",
    );
  }
  console.log(`[chips] refreshed ${companies.length} US records`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
