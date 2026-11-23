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
import {
  FACTOR_CONFIG,
  scoreScreenerEntries,
  screenerEntriesFromBundles,
  type ScreenerRawEntry,
} from "../lib/screener-model";
import { buildUniverseEntries } from "./lib/universe";

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
  const raw =
    readJson<unknown[]>(path.join(PUBLIC, "prices", ticker, `${range}.json`)) ??
    [];
  return raw
    .map((point) => rangePricePointSchema.safeParse(point))
    .filter((result) => result.success)
    .map((result) => result.data);
}

function normalizeTicker(ticker: string): string {
  return ticker.replace(/-/g, ".").toUpperCase();
}

function roundDeep(value: unknown): unknown {
  if (typeof value === "number") {
    if (!Number.isFinite(value)) return null;
    return Math.round(value * 10_000) / 10_000;
  }
  if (Array.isArray(value)) return value.map(roundDeep);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, roundDeep(item)]),
    );
  }
  return value;
}

async function main() {
  const benchmark = prices("SPY", "MAX");
  if (benchmark.length < 30) {
    throw new Error(
      "SPY benchmark prices are missing; run pnpm ingest:benchmark",
    );
  }

  const bundles = RESEARCH_TICKERS.map((ticker) => {
    const data = readJson<unknown>(path.join(PROCESSED, ticker, "data.json"));
    if (!data) return null;
    const parsedData: TickerData = tickerDataSchema.parse(data);
    const consensusRaw = readJson<unknown>(
      path.join(CONSENSUS, `${ticker}.json`),
    );
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

  const curatedEntries = screenerEntriesFromBundles(bundles, benchmark);
  const curatedTickers = new Set<string>();
  for (const ticker of RESEARCH_TICKERS) {
    curatedTickers.add(ticker.toUpperCase());
    curatedTickers.add(normalizeTicker(ticker));
  }

  let universeEntries: ScreenerRawEntry[] = [];
  try {
    universeEntries = await buildUniverseEntries();
  } catch (error) {
    console.warn("[screener:data] universe build skipped:", error);
  }
  const expanded = universeEntries.filter(
    (entry) =>
      !curatedTickers.has(entry.ticker.toUpperCase()) &&
      !curatedTickers.has(normalizeTicker(entry.ticker)),
  );

  // CI builds do not have the gitignored bulk export. Keep the committed
  // expanded snapshot instead of silently shrinking the screener to 229 names.
  const existingFile = path.join(PUBLIC, "screener.json");
  if (expanded.length === 0 && fs.existsSync(existingFile)) {
    try {
      const existing = JSON.parse(
        fs.readFileSync(existingFile, "utf8"),
      ) as unknown[];
      if (existing.length > curatedEntries.length + 100) {
        console.warn(
          "[screener:data] bulk export missing; keeping the committed expanded snapshot",
        );
        return;
      }
    } catch {
      // fall through and rebuild the curated set
    }
  }

  const rows = scoreScreenerEntries([...curatedEntries, ...expanded]);
  const factorKeys: string[] = [];
  for (const factor of FACTOR_CONFIG) {
    for (const parameter of factor.parameters) {
      factorKeys.push(`${factor.key}.${parameter.key}`);
    }
  }
  const factorRows = rows.map((row) => {
    const values: Array<number | null> = [];
    const scores: Array<number | null> = [];
    for (const factor of FACTOR_CONFIG) {
      for (const parameter of factor.parameters) {
        const result = row.factors[factor.key].parameters[parameter.key];
        values.push(
          result?.value == null || !Number.isFinite(result.value)
            ? null
            : Math.round(result.value * 10_000) / 10_000,
        );
        scores.push(result?.score ?? null);
      }
    }
    return [values, scores];
  });
  const coreRows = rows.map((row) => {
    const { factors, ...rest } = row;
    void factors;
    const factorScores = Object.fromEntries(
      FACTOR_CONFIG.map((factor) => [
        factor.key,
        row.factors[factor.key].score,
      ]),
    );
    return roundDeep({ ...rest, factorScores });
  });

  fs.writeFileSync(
    path.join(PUBLIC, "screener.json"),
    JSON.stringify(coreRows, null, 0),
    "utf8",
  );
  fs.writeFileSync(
    path.join(PUBLIC, "screener-factors.json"),
    JSON.stringify({ keys: factorKeys, rows: factorRows }, null, 0),
    "utf8",
  );
  console.log(
    `[screener:data] wrote ${rows.length} rows (${curatedEntries.length} curated, ${expanded.length} expanded)`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
