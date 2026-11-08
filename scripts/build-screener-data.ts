/** Precomputes the five-factor screener rows for the static data layer. */
import fs from "node:fs";
import path from "node:path";
import { RESEARCH_TICKERS } from "../config/universe";
import {
  consensusSchema,
  rangePricePointSchema,
  tickerDataSchema,
  type Consensus,
  type RangePricePoint,
  type TickerData,
} from "../lib/schemas";
import { buildScreenerRows } from "../lib/screener-model";

const ROOT = process.cwd();
const PROCESSED = path.join(ROOT, "data", "processed");
const CONSENSUS = path.join(ROOT, "data", "consensus");
const PUBLIC = path.join(ROOT, "public", "data");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function prices(ticker: string, range: string): RangePricePoint[] {
  const raw = readJson<unknown[]>(path.join(PUBLIC, "prices", ticker, `${range}.json`)) ?? [];
  return raw
    .map((point) => rangePricePointSchema.safeParse(point))
    .filter((result) => result.success)
    .map((result) => result.data);
}

function main() {
  const benchmark = prices("SPY", "MAX");
  if (benchmark.length < 30) {
    throw new Error("SPY benchmark prices are missing; run pnpm ingest:benchmark");
  }

  const bundles = RESEARCH_TICKERS.map((ticker) => {
    const data = readJson<unknown>(path.join(PROCESSED, ticker, "data.json"));
    if (!data) return null;
    const parsedData: TickerData = tickerDataSchema.parse(data);
    const consensusRaw = readJson<unknown>(path.join(CONSENSUS, `${ticker}.json`));
    const consensusParsed = consensusRaw
      ? consensusSchema.safeParse(consensusRaw)
      : null;
    return {
      data: parsedData,
      consensus:
        consensusParsed && consensusParsed.success
          ? (consensusParsed.data as Consensus)
          : null,
      prices: prices(ticker, "1Y"),
      pricesMax: prices(ticker, "MAX"),
    };
  }).filter((bundle): bundle is NonNullable<typeof bundle> => bundle != null);

  const rows = buildScreenerRows(bundles, benchmark);
  fs.writeFileSync(
    path.join(PUBLIC, "screener.json"),
    JSON.stringify(rows, null, 0),
    "utf8",
  );
  console.log(`[screener:data] wrote ${rows.length} rows`);
}

main();
