import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { ALL_TICKERS, BENCHMARK_TICKER, RESEARCH_TICKERS } from "@/config/universe";
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
import type { PriceRange } from "./constants";
import {
  buildFullFactorScores,
  computeCagr,
  latestQuarterYoY,
  rangePosition,
  type FactorScores,
} from "./analytics";
import type { TickerData as TickerDataType } from "./schemas";

function fallbackSegments(data: TickerDataType): SegmentMix {
  const annual = [...data.annual].filter((row) => !row.ttm && row.revenue).at(-1);
  const revenue = annual?.revenue ?? data.metrics.revenueTtm ?? 0;
  const reportDate =
    [...data.quarterly].filter((row) => !row.ttm).at(-1)?.reportDate ??
    data.updatedAt.slice(0, 10);
  const cik = data.cik?.padStart(10, "0");
  return {
    ticker: data.ticker,
    asOf: annual?.reportDate ?? reportDate,
    source: {
      name: `${data.name} latest annual report`,
      url: cik
        ? `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${cik}&type=10-K&dateb=&owner=include&count=40`
        : "https://www.sec.gov/edgar/search/",
      date: annual?.reportDate ?? reportDate,
    },
    segmentLabel: "Reported revenue",
    segments: [{ name: "Consolidated revenue", revenue, share: 1 }],
    geographyLabel: null,
    geography: [],
  };
}

const ROOT = process.cwd();
const PROCESSED_DIR = path.join(ROOT, "data", "processed");
const CONSENSUS_DIR = path.join(ROOT, "data", "consensus");
const SEGMENTS_DIR = path.join(ROOT, "data", "segments");
const PUBLIC_DATA_DIR = path.join(ROOT, "public", "data");

const TICKER_PATTERN = /^[A-Z][A-Z0-9.]{0,6}$/;

function readJson<T>(filePath: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
  } catch {
    return null;
  }
}

function normalizeTicker(ticker: string): string {
  return ticker.trim().toUpperCase();
}

export function isValidTicker(ticker: string): boolean {
  return TICKER_PATTERN.test(ticker) && !ticker.startsWith(".");
}

export const getUniverse = cache((): UniverseEntry[] => {
  const raw = readJson<unknown[]>(path.join(PUBLIC_DATA_DIR, "stocks.json"));
  if (!Array.isArray(raw)) return [];
  return raw
    .map((entry) => universeEntrySchema.safeParse(entry))
    .filter((result) => result.success)
    .map((result) => result.data);
});

export const getUniverseByTicker = cache((): Map<string, UniverseEntry> => {
  return new Map(getUniverse().map((entry) => [entry.ticker, entry]));
});

export const getTicker = cache((rawTicker: string): TickerData | null => {
  const ticker = normalizeTicker(rawTicker);
  if (!isValidTicker(ticker)) return null;
  const raw = readJson<unknown>(path.join(PROCESSED_DIR, ticker, "data.json"));
  if (!raw) return null;
  const parsed = tickerDataSchema.safeParse(raw);
  return parsed.success ? parsed.data : null;
});

export const getConsensus = cache((rawTicker: string): Consensus | null => {
  const ticker = normalizeTicker(rawTicker);
  if (!isValidTicker(ticker)) return null;
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

export const getSegments = cache((rawTicker: string): SegmentMix | null => {
  const ticker = normalizeTicker(rawTicker);
  if (!isValidTicker(ticker)) return null;
  const raw = readJson<unknown>(path.join(SEGMENTS_DIR, `${ticker}.json`));
  if (!raw) return null;
  const parsed = segmentMixSchema.safeParse(raw);
  return parsed.success ? parsed.data : null;
});

export const getPrices = cache(
  (rawTicker: string, range: PriceRange = "1Y"): RangePricePoint[] => {
    const ticker = normalizeTicker(rawTicker);
    if (!isValidTicker(ticker)) return [];
    const raw = readJson<unknown[]>(
      path.join(PUBLIC_DATA_DIR, "prices", ticker, `${range}.json`),
    );
    if (!Array.isArray(raw)) return [];
    return raw
      .map((point) => rangePricePointSchema.safeParse(point))
      .filter((result) => result.success)
      .map((result) => result.data);
  },
);

export const getAllCompanies = cache((): TickerData[] => {
  return ALL_TICKERS.filter((ticker) => ticker !== BENCHMARK_TICKER)
    .map((ticker) => getTicker(ticker))
    .filter((company): company is TickerData => company !== null);
});

export const getFactorScores = cache((ticker: string): FactorScores => {
  return buildFullFactorScores(getAllCompanies(), normalizeTicker(ticker));
});

export const getResearchCompanies = cache((): TickerData[] => {
  return RESEARCH_TICKERS.map((ticker) => getTicker(ticker)).filter(
    (company): company is TickerData => company !== null,
  );
});

export type ResearchBundle = {
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

function buildResearchBundle(data: TickerData): ResearchBundle {
  return {
    data,
    consensus: getConsensus(data.ticker),
    segments: getSegments(data.ticker) ?? fallbackSegments(data),
    prices: getPrices(data.ticker, "1Y"),
    pricesMax: getPrices(data.ticker, "MAX"),
    factors: getFactorScores(data.ticker),
    cagr: computeCagr(data.annual),
    latestQYoY: latestQuarterYoY(data),
    rangePosition: rangePosition(
      data.latestPrice.close,
      data.latestPrice.low52,
      data.latestPrice.high52,
    ),
  };
}

export const getResearchBundles = cache((limit?: number): ResearchBundle[] => {
  const companies =
    limit == null ? getResearchCompanies() : getResearchCompanies().slice(0, limit);
  return companies.map(buildResearchBundle);
});

export const getResearchBundle = cache((ticker: string): ResearchBundle | null => {
  const normalized = normalizeTicker(ticker);
  if (!RESEARCH_TICKERS.includes(normalized as (typeof RESEARCH_TICKERS)[number])) {
    return null;
  }
  const data = getTicker(normalized);
  return data ? buildResearchBundle(data) : null;
});

export type MarketSnapshot = {
  asOf: string | null;
  companyCount: number;
  researchCount: number;
  totalMarketCap: number;
  medianRevenueGrowth: number | null;
  medianOperatingMargin: number | null;
  advancers: number;
  decliners: number;
  averageReturn1y: number | null;
  topMovers: UniverseEntry[];
  sectors: Array<{
    sector: string;
    count: number;
    averageChange: number | null;
    averageReturn1y: number | null;
  }>;
};

function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

export const getMarketSnapshot = cache((): MarketSnapshot => {
  const universe = getUniverse();
  const changes = universe
    .map((entry) => entry.changePct)
    .filter((value): value is number => value != null);
  const returns = universe
    .map((entry) => entry.return1y)
    .filter((value): value is number => value != null);

  const sectorMap = new Map<
    string,
    { changes: number[]; returns: number[]; count: number }
  >();
  for (const entry of universe) {
    const current = sectorMap.get(entry.sector) ?? {
      changes: [],
      returns: [],
      count: 0,
    };
    current.count += 1;
    if (entry.changePct != null) current.changes.push(entry.changePct);
    if (entry.return1y != null) current.returns.push(entry.return1y);
    sectorMap.set(entry.sector, current);
  }

  const sectors = [...sectorMap.entries()]
    .map(([sector, values]) => ({
      sector,
      count: values.count,
      averageChange: values.changes.length
        ? values.changes.reduce((sum, value) => sum + value, 0) / values.changes.length
        : null,
      averageReturn1y: values.returns.length
        ? values.returns.reduce((sum, value) => sum + value, 0) / values.returns.length
        : null,
    }))
    .sort((a, b) => (b.averageChange ?? -Infinity) - (a.averageChange ?? -Infinity));

  return {
    asOf: universe[0]?.asOf ?? null,
    companyCount: universe.length,
    researchCount: universe.filter((entry) => entry.isResearch).length,
    totalMarketCap: universe.reduce(
      (sum, entry) => sum + (entry.marketCap ?? 0),
      0,
    ),
    medianRevenueGrowth: median(
      universe
        .map((entry) => entry.revenueGrowthTtm)
        .filter((value): value is number => value != null),
    ),
    medianOperatingMargin: median(
      universe
        .map((entry) => entry.operatingMargin)
        .filter((value): value is number => value != null),
    ),
    advancers: changes.filter((value) => value > 0).length,
    decliners: changes.filter((value) => value < 0).length,
    averageReturn1y: returns.length
      ? returns.reduce((sum, value) => sum + value, 0) / returns.length
      : null,
    topMovers: [...universe]
      .filter((entry) => entry.changePct != null)
      .sort((a, b) => (b.changePct ?? 0) - (a.changePct ?? 0))
      .slice(0, 4),
    sectors,
  };
});

export type NewsTag =
  | "Earnings Results"
  | "Earnings Preview"
  | "Earnings Call"
  | "Analysis"
  | "Why It Moves"
  | "Macro News"
  | "Broker Note"
  | "Deep-Dive";

export type NewsItem = {
  id: string;
  ticker: string;
  name: string;
  date: string;
  tag: NewsTag;
  title: string;
  summary: string;
  href: string;
  price: number | null;
  changePct: number | null;
  /** Broker or publisher for third-party items. */
  source?: string;
};

export const getNewsfeed = cache((): NewsItem[] => {
  const items: NewsItem[] = [];

  for (const data of getResearchCompanies()) {
    const consensus = getConsensus(data.ticker);
    const segments = getSegments(data.ticker) ?? fallbackSegments(data);
    const latestQYoY = latestQuarterYoY(data);
    const position = rangePosition(
      data.latestPrice.close,
      data.latestPrice.low52,
      data.latestPrice.high52,
    );
    const base = {
      ticker: data.ticker,
      name: data.name,
      price: data.latestPrice.close,
      changePct: data.latestPrice.changePct,
    };
    const latest = [...data.quarterly].filter((row) => !row.ttm).pop();

    if (latest) {
      const yoy = latestQYoY;
      items.push({
        ...base,
        id: `${data.ticker}-earnings-${latest.reportDate}`,
        date: latest.reportDate,
        tag: "Earnings Results",
        title: `${data.ticker} reported ${latest.period} FY${String(latest.fyear).slice(-2)} revenue of ${formatShort(latest.revenue)}`,
        summary:
          yoy != null
            ? `Revenue changed ${(yoy * 100).toFixed(1)}% year over year. Operating margin for the quarter was ${latest.operatingMargin != null ? `${(latest.operatingMargin * 100).toFixed(1)}%` : "not reported"}.`
            : `Operating margin for the quarter was ${latest.operatingMargin != null ? `${(latest.operatingMargin * 100).toFixed(1)}%` : "not reported"}.`,
        href: `/stocks/${data.ticker}#financial-performance`,
      });
    }

    if (consensus) {
      const current = consensus.currentQuarter;
      if (current) {
        items.push({
          ...base,
          id: `${data.ticker}-preview-${consensus.asOf}`,
          date: consensus.asOf,
          tag: "Earnings Preview",
          title: `What analysts expect from ${data.ticker}'s next quarter`,
          summary: `${current.analystCount ?? "The covering"} analysts expect revenue of ${formatShort(current.revenueAvg)}${current.revenueGrowth != null ? `, up ${(current.revenueGrowth * 100).toFixed(1)}%` : ""} and EPS of ${current.epsAvg != null ? `$${current.epsAvg.toFixed(2)}` : "n/a"}. Estimates are third-party and can change.`,
          href: `/stocks/${data.ticker}#analysts`,
        });
      }

      items.push({
        ...base,
        id: `${data.ticker}-consensus-${consensus.asOf}`,
        date: consensus.asOf,
        tag: "Analysis",
        title: `${consensus.analystCount ?? "A group of"} analysts cover ${data.ticker}`,
        summary: `The attributed mean target is ${consensus.targetMean != null ? `$${consensus.targetMean.toFixed(2)}` : "not published"}; this is third-party consensus, not a Stockmonk target.`,
        href: `/stocks/${data.ticker}#analysts`,
      });
    }

    if (data.latestPrice.high52 && data.latestPrice.low52) {
      const rangePct = position ?? 0;
      const moved = data.latestPrice.changePct;
      items.push({
        ...base,
        id: `${data.ticker}-range-${data.latestPrice.asOf}`,
        date: data.latestPrice.asOf,
        tag: moved != null && Math.abs(moved) >= 0.03 ? "Why It Moves" : "Analysis",
        title:
          moved != null && Math.abs(moved) >= 0.03
            ? `${data.ticker} moved ${(moved * 100).toFixed(1)}% in the latest session`
            : `${data.ticker} sits ${Math.round(rangePct * 100)}% of the way up its 52-week range`,
        summary: `The 52-week range is $${data.latestPrice.low52.toFixed(2)} to $${data.latestPrice.high52.toFixed(2)}. The latest close was $${data.latestPrice.close.toFixed(2)}. Price moves are not explanations; use the filings and results for context.`,
        href: `/stocks/${data.ticker}#big-picture`,
      });
    }

    if (segments) {
      const largest = segments.segments[0];
      if (largest) {
        items.push({
          ...base,
          id: `${data.ticker}-segments-${segments.asOf}`,
          date: segments.source.date,
          tag: "Earnings Call",
          title: `${largest.name} is ${(largest.share * 100).toFixed(1)}% of ${data.ticker}'s revenue mix`,
          summary: `The latest 10-K segment disclosure puts ${largest.name} at ${formatShort(largest.revenue)} of annual revenue. The filing is the primary source; the segment label is "${segments.segmentLabel}".`,
          href: `/stocks/${data.ticker}#how-it-makes-money`,
        });
      }
    }

    const growthChip = data.factorChips.find((chip) => chip.key === "growth");
    if (growthChip) {
      items.push({
        ...base,
        id: `${data.ticker}-factors-${data.updatedAt}`,
        date: latest?.reportDate ?? data.latestPrice.asOf,
        tag: "Analysis",
        title: `Where ${data.ticker} sits on the growth screen`,
        summary: growthChip.detail,
        href: `/stocks/${data.ticker}#bottom-line`,
      });
    }
  }

  return items.sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 40);
});

function formatShort(value: number | null): string {
  if (value == null) return "n/a";
  if (Math.abs(value) >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`;
  if (Math.abs(value) >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  return `$${value.toLocaleString("en-US")}`;
}

export const getSearchIndex = cache((): Array<{
  ticker: string;
  name: string;
  sector: string;
  industry: string;
  research: boolean;
}> => {
  const raw = readJson<unknown[]>(path.join(PUBLIC_DATA_DIR, "search-index.json"));
  if (!Array.isArray(raw)) return [];
  return raw as Array<{
    ticker: string;
    name: string;
    sector: string;
    industry: string;
    research: boolean;
  }>;
});

export const getLatestDataDate = cache((): string | null => {
  const dates = getUniverse()
    .map((entry) => entry.asOf)
    .filter((date): date is string => Boolean(date));
  return dates.sort().at(-1) ?? null;
});
