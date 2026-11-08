import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { INDIA_TICKERS, getIndiaCoverageGroup } from "@/config/india-coverage";
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
  segmentMixSchema,
  tickerDataSchema,
  universeEntrySchema,
  type Consensus,
  type RangePricePoint,
  type SegmentMix,
  type TickerData,
  type UniverseEntry,
} from "./schemas";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public", "data", "india");
const PROCESSED_DIR = path.join(ROOT, "data", "india", "processed");
const CONSENSUS_DIR = path.join(ROOT, "data", "india", "consensus");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

const VALID = new Set(INDIA_TICKERS.map((ticker) => ticker.toUpperCase()));

export function isIndiaTicker(ticker: string): boolean {
  return VALID.has(ticker.toUpperCase());
}

export const getIndiaUniverse = cache((): UniverseEntry[] => {
  const raw = readJson<unknown[]>(path.join(PUBLIC_DIR, "stocks.json"));
  if (!Array.isArray(raw)) return [];
  return raw
    .map((entry) => universeEntrySchema.safeParse(entry))
    .filter((result) => result.success)
    .map((result) => result.data);
});

export const getIndiaUniverseByTicker = cache((): Map<string, UniverseEntry> => {
  return new Map(getIndiaUniverse().map((entry) => [entry.ticker, entry]));
});

export const getIndiaTicker = cache((rawTicker: string): TickerData | null => {
  const ticker = rawTicker.toUpperCase();
  if (!VALID.has(ticker)) return null;
  const raw = readJson<unknown>(path.join(PROCESSED_DIR, ticker, "data.json"));
  if (!raw) return null;
  const parsed = tickerDataSchema.safeParse(raw);
  return parsed.success ? parsed.data : null;
});

export const getIndiaConsensus = cache((rawTicker: string): Consensus | null => {
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

export const getIndiaPrices = cache(
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

export function fallbackIndiaSegments(data: TickerData): SegmentMix {
  const annual = [...data.annual].filter((row) => !row.ttm && row.revenue).at(-1);
  const revenue = annual?.revenue ?? data.metrics.revenueTtm ?? 0;
  const reportDate = annual?.reportDate ?? data.updatedAt.slice(0, 10);
  return {
    ticker: data.ticker,
    asOf: reportDate,
    source: {
      name: `${data.name} latest annual report`,
      url:
        data.latest10KUrl ??
        `https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=${data.ticker}`,
      date: reportDate,
    },
    segmentLabel: "Reported revenue",
    segments: [{ name: "Consolidated revenue", revenue, share: 1 }],
    geographyLabel: null,
    geography: [],
  };
}

export const getIndiaCompanies = cache((): TickerData[] => {
  return INDIA_TICKERS.map((ticker) => getIndiaTicker(ticker)).filter(
    (company): company is TickerData => company !== null,
  );
});

export const getIndiaFactorScores = cache((ticker: string): FactorScores => {
  return buildFullFactorScores(getIndiaCompanies(), ticker.toUpperCase());
});

export type IndiaResearchBundle = {
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

function buildIndiaBundle(data: TickerData): IndiaResearchBundle {
  return {
    data,
    consensus: getIndiaConsensus(data.ticker),
    segments: fallbackIndiaSegments(data),
    prices: getIndiaPrices(data.ticker, "1Y"),
    pricesMax: getIndiaPrices(data.ticker, "MAX"),
    factors: getIndiaFactorScores(data.ticker),
    cagr: computeCagr(data.annual),
    latestQYoY: latestQuarterYoY(data),
    rangePosition: rangePosition(
      data.latestPrice.close,
      data.latestPrice.low52,
      data.latestPrice.high52,
    ),
  };
}

export const getIndiaResearchBundles = cache((limit?: number): IndiaResearchBundle[] => {
  const companies = getIndiaCompanies();
  const selected = limit == null ? companies : companies.slice(0, limit);
  return selected.map(buildIndiaBundle);
});

export const getIndiaResearchBundle = cache(
  (ticker: string): IndiaResearchBundle | null => {
    const data = getIndiaTicker(ticker);
    return data ? buildIndiaBundle(data) : null;
  },
);

export const getIndiaCoverageGroupFor = (ticker: string) =>
  getIndiaCoverageGroup(ticker.toUpperCase());

export const getIndiaPeerBundles = cache((ticker: string): IndiaResearchBundle[] => {
  const group = getIndiaCoverageGroup(ticker);
  if (!group) return [];
  return group.tickers
    .filter((item) => item !== ticker)
    .map((item) => getIndiaResearchBundle(item))
    .filter((bundle): bundle is IndiaResearchBundle => bundle != null)
    .slice(0, 6);
});
