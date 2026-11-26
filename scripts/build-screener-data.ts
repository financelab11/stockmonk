/** Precomputes the five-factor screener rows for the static data layer. */
import fs from "node:fs";
import path from "node:path";
import { SCORE_TICKERS } from "../config/universe";
import {
  consensusSchema,
  rangePricePointSchema,
  tickerDataSchema,
  type Consensus,
  type PricePoint,
  type RangePricePoint,
  type TickerData,
} from "../lib/schemas";
import { buildRangeFiles } from "../lib/metrics";
import {
  FACTOR_CONFIG,
  scoreScreenerEntries,
  screenerEntriesFromBundles,
} from "../lib/screener-model";
import { tickerDir } from "./lib/data-paths";

const ROOT = process.cwd();
const CONSENSUS = path.join(ROOT, "data", "consensus");
const PUBLIC = path.join(ROOT, "public", "data");
const V2_FILE = path.join(PUBLIC, "v2", "scores.json");

type V2Summary = {
  companies: Record<
    string,
    {
      scores: Record<string, { score: number | null }>;
      composite: { score: number | null; status: string; coverage: number };
    }
  >;
};

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function prices(ticker: string, range: string): RangePricePoint[] {
  const publicRaw = readJson<unknown[]>(
    path.join(PUBLIC, "prices", ticker, `${range}.json`),
  );
  if (Array.isArray(publicRaw)) {
    return publicRaw
      .map((point) => rangePricePointSchema.safeParse(point))
      .filter((result) => result.success)
      .map((result) => result.data);
  }
  const processed = readJson<PricePoint[]>(tickerDir(ticker, "prices.json"));
  if (processed?.length) {
    const ranges = buildRangeFiles(processed, ticker);
    return ranges[range] ?? ranges.MAX ?? [];
  }
  return [];
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

  const bundles = SCORE_TICKERS.map((ticker) => {
    const data = readJson<unknown>(tickerDir(ticker, "data.json"));
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

  if (curatedEntries.length !== SCORE_TICKERS.length) {
    console.warn(
      `[screener:data] ${SCORE_TICKERS.length - curatedEntries.length} score names have no processed data yet`,
    );
  }

  const rows = scoreScreenerEntries(curatedEntries);
  const v2 = readJson<V2Summary>(V2_FILE) ?? { companies: {} };
  for (const row of rows) {
    const v2Row = v2.companies[row.ticker];
    row.v2Growth = v2Row?.scores.growth?.score ?? null;
    row.v2Quality = v2Row?.scores.quality?.score ?? null;
    row.v2Valuation = v2Row?.scores.valuation?.score ?? null;
    row.v2Technical = v2Row?.scores.technical?.score ?? null;
    row.v2Composite = v2Row?.composite.score ?? null;
    row.v2Coverage = v2Row?.composite.coverage ?? null;
    row.v2Status =
      v2Row?.composite.status === "complete" ||
      v2Row?.composite.status === "incomplete"
        ? v2Row.composite.status
        : null;
  }
  const v2Rank = new Map(
    [...rows]
      .filter((row) => row.v2Composite != null)
      .sort((a, b) => (b.v2Composite ?? 0) - (a.v2Composite ?? 0))
      .map((row, index) => [row.ticker, index + 1]),
  );
  for (const row of rows) {
    row.rank = v2Rank.get(row.ticker) ?? 0;
  }
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
    `[screener:data] wrote ${rows.length} rows for the ${SCORE_TICKERS.length}-name score universe`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
