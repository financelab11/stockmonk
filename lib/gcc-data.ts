import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { GCC_TICKERS, getGccGroup } from "@/config/gcc-coverage";
import {
  buildFullFactorScores,
  computeCagr,
  latestQuarterYoY,
  rangePosition,
  type FactorScores,
} from "./analytics";
import type { PriceRange } from "./constants";
import {
  consensusSchema,
  rangePricePointSchema,
  tickerDataSchema,
  universeEntrySchema,
  type Consensus,
  type RangePricePoint,
  type SegmentMix,
  type TickerData,
  type UniverseEntry,
} from "./schemas";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public", "data", "gcc");
const PROCESSED_DIR = path.join(ROOT, "data", "gcc", "processed");
const CONSENSUS_DIR = path.join(ROOT, "data", "gcc", "consensus");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

const VALID = new Set(GCC_TICKERS.map((ticker) => ticker.toUpperCase()));

export function isGccTicker(ticker: string): boolean {
  return VALID.has(ticker.toUpperCase());
}

export const getGccUniverse = cache((): UniverseEntry[] => {
  const raw = readJson<unknown[]>(path.join(PUBLIC_DIR, "stocks.json"));
  if (!Array.isArray(raw)) return [];
  return raw
    .map((entry) => universeEntrySchema.safeParse(entry))
    .filter((result) => result.success)
    .map((result) => result.data);
});

export const getGccUniverseByTicker = cache((): Map<string, UniverseEntry> => {
  return new Map(getGccUniverse().map((entry) => [entry.ticker, entry]));
});

export const getGccTicker = cache((rawTicker: string): TickerData | null => {
  const ticker = rawTicker.toUpperCase();
  if (!VALID.has(ticker)) return null;
  const raw = readJson<unknown>(path.join(PROCESSED_DIR, ticker, "data.json"));
  if (!raw) return null;
  const parsed = tickerDataSchema.safeParse(raw);
  return parsed.success ? parsed.data : null;
});

export const getGccConsensus = cache((rawTicker: string): Consensus | null => {
  const ticker = rawTicker.toUpperCase();
  if (!VALID.has(ticker)) return null;
  const raw = readJson<unknown>(path.join(CONSENSUS_DIR, `${ticker}.json`));
  if (!raw) return null;
  const parsed = consensusSchema.safeParse(raw);
  if (!parsed.success) return null;
  const consensus = parsed.data;
  const hasContent =
    consensus.targetMean != null ||
    consensus.analystCount != null ||
    consensus.estimates.length > 0;
  return hasContent ? consensus : null;
});

export const getGccPrices = cache(
  (rawTicker: string, range: PriceRange = "1Y"): RangePricePoint[] => {
    const ticker = rawTicker.toUpperCase();
    if (!VALID.has(ticker)) return [];
    const raw = readJson<unknown[]>(path.join(PUBLIC_DIR, "prices", ticker, `${range}.json`));
    if (!Array.isArray(raw)) return [];
    return raw
      .map((point) => rangePricePointSchema.safeParse(point))
      .filter((result) => result.success)
      .map((result) => result.data);
  },
);

export function fallbackGccSegments(data: TickerData): SegmentMix {
  const annual = [...data.annual].filter((row) => !row.ttm && row.revenue).at(-1);
  const revenue = annual?.revenue ?? data.metrics.revenueTtm ?? 0;
  const reportDate = annual?.reportDate ?? data.updatedAt.slice(0, 10);
  const group = getGccGroup(data.ticker);
  return {
    ticker: data.ticker,
    asOf: reportDate,
    source: {
      name: `${data.name} annual report`,
      url:
        data.website
          ? `https://${data.website.replace(/^https?:\/\//, "")}`
          : `https://stockanalysis.com/quote/${group?.name ?? "gcc"}/${data.ticker}/`,
      date: reportDate,
    },
    segmentLabel: "Reported revenue",
    segments: [{ name: "Consolidated revenue", revenue, share: 1 }],
    geographyLabel: null,
    geography: [],
  };
}

export const getGccCompanies = cache((): TickerData[] => {
  return GCC_TICKERS.map((ticker) => getGccTicker(ticker)).filter(
    (company): company is TickerData => company !== null,
  );
});

export const getGccFactorScores = cache((ticker: string): FactorScores => {
  return buildFullFactorScores(getGccCompanies(), ticker.toUpperCase());
});

export type GccResearchBundle = {
  data: TickerData;
  consensus: Consensus | null;
  segments: SegmentMix | null;
  prices: RangePricePoint[];
  pricesMax: RangePricePoint[];
  factors: FactorScores;
  cagr: number | null;
  latestQYoY: number | null;
  rangePosition: number | null;
};

function buildGccBundle(data: TickerData): GccResearchBundle {
  return {
    data,
    consensus: getGccConsensus(data.ticker),
    segments: fallbackGccSegments(data),
    prices: getGccPrices(data.ticker, "1Y"),
    pricesMax: getGccPrices(data.ticker, "MAX"),
    factors: getGccFactorScores(data.ticker),
    cagr: computeCagr(data.annual),
    latestQYoY: latestQuarterYoY(data),
    rangePosition: rangePosition(
      data.latestPrice.close,
      data.latestPrice.low52,
      data.latestPrice.high52,
    ),
  };
}

export const getGccResearchBundles = cache((limit?: number): GccResearchBundle[] => {
  const companies = getGccCompanies();
  const selected = limit == null ? companies : companies.slice(0, limit);
  return selected.map(buildGccBundle);
});

export const getGccResearchBundle = cache(
  (ticker: string): GccResearchBundle | null => {
    const data = getGccTicker(ticker);
    return data ? buildGccBundle(data) : null;
  },
);

export const getGccPeerBundles = cache((ticker: string): GccResearchBundle[] => {
  const group = getGccGroup(ticker);
  if (!group) return [];
  return group.tickers
    .filter((item) => item !== ticker)
    .map((item) => getGccResearchBundle(item))
    .filter((bundle): bundle is GccResearchBundle => bundle != null)
    .slice(0, 6);
});
