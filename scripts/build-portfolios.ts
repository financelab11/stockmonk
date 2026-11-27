/**
 * Builds the 100+ model portfolios from the existing Stockmonk universe.
 *
 * Inputs:
 *   public/data/screener.json       3,696 companies with metrics and V2 scores
 *   public/data/search-index.json   industry metadata
 *   data/processed/{ticker}/prices.json
 *   data/score-inputs/{ticker}/prices.json
 *   public/data/prices/{benchmark}/1Y.json
 *
 * Outputs:
 *   public/data/portfolios/index.json
 *   public/data/portfolios/{slug}.json
 *
 * Run: pnpm build:portfolios
 */
import fs from "node:fs";
import path from "node:path";
import { PORTFOLIO_SPECS } from "../config/portfolio-specs";
import {
  PORTFOLIO_BENCHMARKS,
  PORTFOLIO_BENCHMARK_GROUP,
} from "../lib/portfolios/categories";
import type {
  PortfolioAllocation,
  PortfolioBenchmarkSeries,
  PortfolioConstituent,
  PortfolioDetail,
  PortfolioIndex,
  PortfolioPeriodMetrics,
  PortfolioReview,
  PortfolioReviewChange,
  PortfolioSeriesPoint,
  PortfolioSpec,
  PortfolioSummary,
  VolatilityLevel,
} from "../lib/portfolios/types";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public", "data");
const OUT = path.join(PUBLIC, "portfolios");
const SCREENER = path.join(PUBLIC, "screener.json");
const SEARCH = path.join(PUBLIC, "search-index.json");
const PRICES = path.join(PUBLIC, "prices");
const PROCESSED = path.join(ROOT, "data", "processed");
const SCORE_INPUTS = path.join(ROOT, "data", "score-inputs");
const METHODOLOGY_VERSION = "portfolio-engine-1.0.0";

type RawRow = {
  ticker: string;
  name: string;
  sector: string;
  group: string;
  archived: boolean;
  research: boolean;
  marketCap: number | null;
  price: number;
  asOf: string;
  return1m: number | null;
  return3m: number | null;
  return6m: number | null;
  return1y: number | null;
  return3y: number | null;
  return5y: number | null;
  pe: number | null;
  pb: number | null;
  evEbitda: number | null;
  dividendYield: number | null;
  roce: number | null;
  roe: number | null;
  operatingMargin: number | null;
  netMargin: number | null;
  fcfMargin: number | null;
  revenueGrowth: number | null;
  netDebtEbitda: number | null;
  priceVs50dma: number | null;
  priceVs200dma: number | null;
  historicalValuation: number | null;
  roicTrend: number | null;
  return1w?: number | null;
  v2Growth: number | null;
  v2Quality: number | null;
  v2Valuation: number | null;
  v2Technical: number | null;
  v2Composite: number | null;
  v2Coverage: number | null;
  v2Status: "complete" | "incomplete" | null;
};

type Row = RawRow & {
  industry: string;
  sectorGics: string;
  score: number;
  compositeScore: number | null;
  coverage: number | null;
  stats: () => PriceStats;
};

type Price = { date: string; close: number; volume: number | null };
type PriceStats = {
  distFrom52wHigh: number | null;
  relativeVolume: number | null;
};

const priceCache = new Map<string, Price[]>();
const statsCache = new Map<string, PriceStats>();
const tickerSetCache = new WeakMap<readonly string[], Set<string>>();
const industryMap = new Map<string, string>();

function allowedTickers(tickers: readonly string[]): Set<string> {
  const cached = tickerSetCache.get(tickers);
  if (cached) return cached;
  const set = new Set(tickers.map((ticker) => ticker.toUpperCase()));
  tickerSetCache.set(tickers, set);
  return set;
}

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function pct(value: number | null | undefined, digits = 1): string {
  if (value == null || !Number.isFinite(value)) return "N/A";
  return `${value >= 0 ? "+" : ""}${(value * 100).toFixed(digits)}%`;
}

function money(value: number | null | undefined): string {
  if (value == null || !Number.isFinite(value)) return "N/A";
  if (value >= 1e12) return `$${(value / 1e12).toFixed(1)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(0)}M`;
  return `$${value.toFixed(0)}`;
}

function gicsSector(sector: string): string {
  switch (sector) {
    case "Technology":
      return "Information Technology";
    case "Financial Services":
    case "Financials":
      return "Financials";
    case "Healthcare":
      return "Health Care";
    case "Consumer Cyclical":
    case "Consumer Discretionary":
      return "Consumer Discretionary";
    case "Consumer Defensive":
    case "Consumer Staples":
      return "Consumer Staples";
    case "Basic Materials":
    case "Materials":
      return "Materials";
    case "Communication Services":
      return "Communication Services";
    case "Industrials":
      return "Industrials";
    case "Energy":
      return "Energy";
    case "Utilities":
      return "Utilities";
    case "Real Estate":
      return "Real Estate";
    default:
      return "Other";
  }
}

function marketCapBucket(value: number | null): string {
  if (value == null) return "Unclassified";
  if (value >= 200e9) return "Mega Cap";
  if (value >= 10e9) return "Large Cap";
  if (value >= 2e9) return "Mid Cap";
  return "Small Cap";
}

function isSecurityExcluded(name: string): boolean {
  return /\b(etf|exchange traded|mutual fund|closed-end|warrant|warrants|preferred stock|depositary shares|notes due|units?)\b/i.test(
    name,
  );
}

function readSeries(ticker: string): Price[] {
  if (priceCache.has(ticker)) return priceCache.get(ticker) ?? [];
  const files = [
    path.join(PRICES, ticker, "1Y.json"),
    path.join(PROCESSED, ticker, "prices.json"),
    path.join(SCORE_INPUTS, ticker, "prices.json"),
  ];
  for (const file of files) {
    const raw = readJson<Array<Record<string, unknown>>>(file);
    if (!Array.isArray(raw) || raw.length < 2) continue;
    const points = raw
      .map((point) => {
        const close = Number(point.c);
        const volume = Number(point.v);
        const date =
          typeof point.d === "string"
            ? point.d
            : typeof point.t === "number"
              ? new Date(point.t * 1000).toISOString().slice(0, 10)
              : null;
        return date && Number.isFinite(close) && close > 0
          ? {
              date,
              close,
              volume: Number.isFinite(volume) && volume > 0 ? volume : null,
            }
          : null;
      })
      .filter((point): point is Price => point != null)
      .sort((a, b) => a.date.localeCompare(b.date));
    if (points.length >= 2) {
      priceCache.set(ticker, points);
      return points;
    }
  }
  priceCache.set(ticker, []);
  return [];
}

function lastYearPrices(ticker: string): Price[] {
  const series = readSeries(ticker);
  if (!series.length) return [];
  const end = new Date(series[series.length - 1].date);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 370);
  const startKey = start.toISOString().slice(0, 10);
  return series.filter((point) => point.date >= startKey);
}

function averageVolume(prices: Price[], days: number): number | null {
  const values = prices
    .slice(-days)
    .map((point) => point.volume)
    .filter((value): value is number => value != null && value > 0);
  if (values.length < Math.min(10, days)) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function priceStats(ticker: string): PriceStats {
  const cached = statsCache.get(ticker);
  if (cached) return cached;
  const prices = lastYearPrices(ticker).slice(-252);
  const fallback = { distFrom52wHigh: null, relativeVolume: null };
  if (prices.length < 30) {
    statsCache.set(ticker, fallback);
    return fallback;
  }
  const high = Math.max(...prices.map((point) => point.close));
  const last = prices[prices.length - 1].close;
  const average20 = averageVolume(prices, 20);
  const average60 = averageVolume(prices, 60);
  const stats = {
    distFrom52wHigh: high > 0 ? last / high - 1 : null,
    relativeVolume:
      average20 != null && average60 != null && average60 > 0
        ? average20 / average60
        : null,
  };
  statsCache.set(ticker, stats);
  return stats;
}

function annualizedVolatility(prices: Price[]): number | null {
  if (prices.length < 30) return null;
  const returns: number[] = [];
  for (let index = 1; index < prices.length; index += 1) {
    returns.push(prices[index].close / prices[index - 1].close - 1);
  }
  if (returns.length < 20) return null;
  const mean = returns.reduce((sum, value) => sum + value, 0) / returns.length;
  const variance =
    returns.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
    (returns.length - 1);
  return Math.sqrt(variance) * Math.sqrt(252);
}

function volatilityLevel(value: number | null): VolatilityLevel {
  if (value == null) return "Medium";
  if (value < 0.18) return "Low";
  if (value < 0.28) return "Medium";
  return "High";
}

function scoreFor(row: RawRow, spec: PortfolioSpec): number {
  const parts = [
    { value: row.v2Growth, weight: spec.weights.growth },
    { value: row.v2Quality, weight: spec.weights.quality },
    { value: row.v2Valuation, weight: spec.weights.valuation },
    { value: row.v2Technical, weight: spec.weights.technical },
  ];
  const available = parts.filter(
    (part): part is { value: number; weight: number } =>
      part.value != null && Number.isFinite(part.value),
  );
  const totalWeight = available.reduce((sum, part) => sum + part.weight, 0);
  if (totalWeight === 0) return 0;
  const score = available.reduce((sum, part) => sum + part.value * part.weight, 0) / totalWeight;
  const penalty = ((100 - totalWeight) / 100) * 6;
  const researchTilt =
    row.research && (spec.primaryCategory === "Fundamental" || spec.primaryCategory === "Thematic")
      ? 1.2
      : 0;
  const dividendTilt =
    spec.strategyType === "Dividend & Income"
      ? Math.min(4, (row.dividendYield ?? 0) * 160)
      : 0;
  return score - penalty + researchTilt + dividendTilt;
}

function compositeScore(row: RawRow, spec: PortfolioSpec): number | null {
  if (row.v2Composite != null) return row.v2Composite;
  const parts = [
    { value: row.v2Growth, weight: spec.weights.growth },
    { value: row.v2Quality, weight: spec.weights.quality },
    { value: row.v2Valuation, weight: spec.weights.valuation },
    { value: row.v2Technical, weight: spec.weights.technical },
  ];
  const available = parts.filter(
    (part): part is { value: number; weight: number } =>
      part.value != null && Number.isFinite(part.value),
  );
  const totalWeight = available.reduce((sum, part) => sum + part.weight, 0);
  if (totalWeight === 0) return null;
  return (
    available.reduce((sum, part) => sum + part.value * part.weight, 0) /
    totalWeight
  );
}

function matches(
  row: Row,
  spec: PortfolioSpec,
  options: { ignoreIndustries?: boolean; ignoreSectors?: boolean } = {},
): boolean {
  const filters = spec.filters;
  if (row.archived || isSecurityExcluded(row.name)) return false;
  if (!Number.isFinite(row.price) || row.price <= 0) return false;
  if (filters.tickers?.length && !allowedTickers(filters.tickers).has(row.ticker))
    return false;
  if (filters.researchOnly && !row.research) return false;
  if (filters.minMarketCap != null && (row.marketCap ?? 0) < filters.minMarketCap)
    return false;
  if (filters.maxMarketCap != null && (row.marketCap ?? 0) > filters.maxMarketCap)
    return false;

  if (!options.ignoreSectors && filters.sectors?.length) {
    if (!filters.sectors.includes(row.sectorGics)) return false;
  }
  if (!options.ignoreIndustries && filters.industries?.length) {
    const haystack = row.industry.toLowerCase();
    if (!filters.industries.some((keyword) => haystack.includes(keyword.toLowerCase())))
      return false;
  }
  if (filters.excludeIndustries?.length) {
    const haystack = row.industry.toLowerCase();
    if (filters.excludeIndustries.some((keyword) => haystack.includes(keyword.toLowerCase())))
      return false;
  }

  const min = (value: number | null, threshold: number | undefined) =>
    threshold == null || (value != null && value >= threshold);
  const max = (value: number | null, threshold: number | undefined) =>
    threshold == null || (value != null && value <= threshold);

  if (!min(row.revenueGrowth, filters.minRevenueGrowth)) return false;
  if (!min(row.roe, filters.minRoe)) return false;
  if (!min(row.roce, filters.minRoce)) return false;
  if (!min(row.fcfMargin, filters.minFcfMargin)) return false;
  if (!max(row.pe, filters.maxPe)) return false;
  if (!max(row.evEbitda, filters.maxEvEbitda)) return false;
  if (!min(row.dividendYield, filters.minDividendYield)) return false;
  if (!max(row.netDebtEbitda, filters.maxNetDebtEbitda)) return false;
  if (!min(row.return1y, filters.minReturn1y)) return false;
  if (!min(row.priceVs50dma, filters.minPriceVs50dma)) return false;
  if (!min(row.priceVs200dma, filters.minPriceVs200dma)) return false;
  if (!min(row.roicTrend, filters.minRoicTrend)) return false;
  if (filters.minRelativeVolume != null || filters.maxDistFrom52wHigh != null) {
    const stats = row.stats();
    if (!min(stats.relativeVolume, filters.minRelativeVolume)) return false;
    if (!max(stats.distFrom52wHigh, filters.maxDistFrom52wHigh)) return false;
  }
  if (
    filters.minCoverage != null &&
    (row.coverage == null || row.coverage < filters.minCoverage)
  )
    return false;
  if (filters.minComposite != null) {
    const composite = row.compositeScore;
    if (composite == null || composite < filters.minComposite) return false;
  }
  return true;
}

function filterRows(spec: PortfolioSpec, rows: Row[]) {
  const required = Math.max(5, Math.min(spec.holdings, 8));
  const softFilters = {
    ...spec.filters,
    minCoverage: undefined,
    minRelativeVolume: undefined,
    maxDistFrom52wHigh: undefined,
    minPriceVs50dma: undefined,
    minPriceVs200dma: undefined,
    minRoicTrend: undefined,
  };
  const attempts: Array<{
    predicate: (row: Row) => boolean;
    relaxed: boolean;
  }> = [
    { predicate: (row) => matches(row, spec), relaxed: false },
    {
      predicate: (row) => matches(row, spec, { ignoreIndustries: true }),
      relaxed: true,
    },
    {
      predicate: (row) =>
        matches(row, spec, { ignoreIndustries: true, ignoreSectors: true }),
      relaxed: true,
    },
    {
      predicate: (row) =>
        matches(
          row,
          { ...spec, filters: { ...spec.filters, minCoverage: undefined } },
          { ignoreIndustries: true, ignoreSectors: true },
        ),
      relaxed: true,
    },
    {
      predicate: (row) =>
        matches(
          row,
          { ...spec, filters: softFilters },
          { ignoreIndustries: true, ignoreSectors: true },
        ),
      relaxed: true,
    },
  ];
  const requiredTickers = spec.filters.requiredTickers?.length
    ? allowedTickers(spec.filters.requiredTickers)
    : null;
  const requiredRows = requiredTickers
    ? rows.filter(
        (row) =>
          requiredTickers.has(row.ticker) &&
          !row.archived &&
          !isSecurityExcluded(row.name) &&
          Number.isFinite(row.price) &&
          row.price > 0,
      )
    : [];
  let broadest: Row[] = [];
  for (const attempt of attempts) {
    const result = rows.filter(attempt.predicate);
    const withRequired = [
      ...result,
      ...requiredRows.filter(
        (row) => !result.some((item) => item.ticker === row.ticker),
      ),
    ];
    if (withRequired.length > broadest.length) broadest = withRequired;
    if (withRequired.length >= required) {
      return { rows: withRequired, relaxed: attempt.relaxed };
    }
  }
  return { rows: broadest, relaxed: true };
}

function selectRows(spec: PortfolioSpec, candidates: Row[]): Row[] {
  const ranked = [...candidates].sort((a, b) => b.score - a.score);
  const requiredTickers = spec.filters.requiredTickers?.length
    ? allowedTickers(spec.filters.requiredTickers)
    : null;
  const selected: Row[] = requiredTickers
    ? ranked.filter((row) => requiredTickers.has(row.ticker))
    : [];
  const chosen = new Set(selected.map((row) => row.ticker));
  const sectorCounts = new Map<string, number>();
  for (const row of selected) {
    sectorCounts.set(
      row.sectorGics,
      (sectorCounts.get(row.sectorGics) ?? 0) + 1,
    );
  }
  const maxSectorCount = Math.max(
    2,
    Math.floor((spec.maxSectorWeight / 100) * spec.holdings),
  );
  for (const row of ranked) {
    if (selected.length >= spec.holdings) break;
    if (chosen.has(row.ticker)) continue;
    const count = sectorCounts.get(row.sectorGics) ?? 0;
    if (count >= maxSectorCount) continue;
    selected.push(row);
    chosen.add(row.ticker);
    sectorCounts.set(row.sectorGics, count + 1);
  }
  if (selected.length < spec.holdings) {
    for (const row of ranked) {
      if (selected.length >= spec.holdings) break;
      if (chosen.has(row.ticker)) continue;
      selected.push(row);
      chosen.add(row.ticker);
    }
  }
  return selected;
}

function rawWeights(
  rows: Row[],
  spec: PortfolioSpec,
  volByTicker: Map<string, number | null>,
): number[] {
  return rows.map((row) => {
    switch (spec.weighting) {
      case "equal":
        return 1;
      case "marketCap":
        return Math.max(1, Math.log10(Math.max(1, row.marketCap ?? 1e9)));
      case "dividend":
        return (
          1 +
          Math.min(0.1, Math.max(0, row.dividendYield ?? 0)) * 20 +
          (row.v2Quality ?? 50) / 100
        );
      case "lowVolatility": {
        const vol = volByTicker.get(row.ticker);
        return 1 / Math.max(0.08, vol ?? 0.3);
      }
      case "score":
      default:
        return Math.max(4, row.score - 30);
    }
  });
}

function cappedWeights(raw: number[], cap: number): number[] {
  const n = raw.length;
  if (!n) return [];
  const capValue = Math.max(cap, 1 / n);
  const values = raw.map((value) => Math.max(value, 1e-9));
  const fixed = new Array<boolean>(n).fill(false);
  const weights = new Array<number>(n).fill(0);
  let remaining = 1;

  for (let guard = 0; guard < n; guard += 1) {
    let freeSum = 0;
    for (let index = 0; index < n; index += 1) {
      if (!fixed[index]) freeSum += values[index];
    }
    let largestIndex = -1;
    let largestWeight = -1;
    for (let index = 0; index < n; index += 1) {
      if (fixed[index]) continue;
      const candidate = (remaining * values[index]) / freeSum;
      if (candidate > largestWeight) {
        largestWeight = candidate;
        largestIndex = index;
      }
    }
    if (largestIndex < 0 || freeSum <= 0) break;
    if (largestWeight <= capValue + 1e-12) {
      for (let index = 0; index < n; index += 1) {
        if (!fixed[index]) weights[index] = (remaining * values[index]) / freeSum;
      }
      remaining = 0;
      break;
    }
    fixed[largestIndex] = true;
    weights[largestIndex] = capValue;
    remaining -= capValue;
  }

  const total = weights.reduce((sum, value) => sum + value, 0);
  if (total <= 0) return raw.map(() => 1 / n);
  const normalized = weights.map((value) => value / total);
  const maxIndex = normalized.indexOf(Math.max(...normalized));
  const sum = normalized.reduce((totalValue, value) => totalValue + value, 0);
  normalized[maxIndex] += 1 - sum;
  return normalized;
}

function roundWeights(weights: number[]): number[] {
  const rounded = weights.map((value) => Math.round(value * 10_000) / 10_000);
  const total = rounded.reduce((sum, value) => sum + value, 0);
  const maxIndex = rounded.indexOf(Math.max(...rounded));
  rounded[maxIndex] =
    Math.round((rounded[maxIndex] + 1 - total) * 10_000) / 10_000;
  return rounded;
}

function buildAllocations(
  constituents: PortfolioConstituent[],
  key: "sector" | "marketCap",
): PortfolioAllocation[] {
  const map = new Map<string, { weight: number; count: number }>();
  for (const item of constituents) {
    const label =
      key === "sector" ? item.sector : marketCapBucket(item.marketCap);
    const current = map.get(label) ?? { weight: 0, count: 0 };
    current.weight += item.weight;
    current.count += 1;
    map.set(label, current);
  }
  return [...map.entries()]
    .map(([label, value]) => ({
      label,
      weight: value.weight,
      count: value.count,
    }))
    .sort((a, b) => b.weight - a.weight);
}

function periodMetrics(
  dates: string[],
  portfolio: number[],
  benchmark: number[],
  days: number,
  label?: string,
): PortfolioPeriodMetrics | null {
  if (dates.length < 2) return null;
  const end = new Date(dates[dates.length - 1]);
  const target = new Date(end);
  target.setUTCDate(target.getUTCDate() - days);
  const targetKey = target.toISOString().slice(0, 10);
  let start = dates.findIndex((date) => date >= targetKey);
  if (start < 0) start = 0;
  if (dates.length - start < 2) return null;
  const startPortfolio = portfolio[start];
  const endPortfolio = portfolio[portfolio.length - 1];
  const startBenchmark = benchmark[start];
  const endBenchmark = benchmark[benchmark.length - 1];
  const portfolioReturn = endPortfolio / startPortfolio - 1;
  const benchmarkReturn = endBenchmark / startBenchmark - 1;
  const dailyReturns: number[] = [];
  for (let index = start + 1; index < portfolio.length; index += 1) {
    dailyReturns.push(portfolio[index] / portfolio[index - 1] - 1);
  }
  const mean =
    dailyReturns.reduce((sum, value) => sum + value, 0) /
    Math.max(1, dailyReturns.length);
  const variance =
    dailyReturns.length > 1
      ? dailyReturns.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
        (dailyReturns.length - 1)
      : 0;
  const volatility = Math.sqrt(variance) * Math.sqrt(252);
  let peak = portfolio[start];
  let maxDrawdown = 0;
  for (let index = start; index < portfolio.length; index += 1) {
    peak = Math.max(peak, portfolio[index]);
    if (peak > 0) maxDrawdown = Math.min(maxDrawdown, portfolio[index] / peak - 1);
  }
  const elapsedDays =
    (new Date(dates[dates.length - 1]).getTime() -
      new Date(dates[start]).getTime()) /
    86_400_000;
  const annualised =
    elapsedDays > 0 ? (1 + portfolioReturn) ** (365 / elapsedDays) - 1 : null;
  const sharpe =
    annualised != null && volatility > 0 ? (annualised - 0.043) / volatility : null;
  return {
    period:
      label ?? (days === 30 ? "1M" : days === 182 ? "6M" : "1Y"),
    portfolioReturn,
    benchmarkReturn,
    excessReturn: portfolioReturn - benchmarkReturn,
    annualisedReturn: annualised,
    volatility,
    maxDrawdown,
    sharpe,
  };
}

function unavailablePerformance() {
  return {
    available: false,
    basis: "Simulated performance unavailable.",
    source: "Yahoo Finance price history via Stockmonk",
    inception: null,
    asOf: null,
    periods: [] as string[],
    series: [] as PortfolioSeriesPoint[],
    metrics: [] as PortfolioPeriodMetrics[],
    benchmarks: [] as PortfolioBenchmarkSeries[],
    volatility: null,
    volatilityLevel: "Medium" as VolatilityLevel,
  };
}

function benchmarkSeriesFor(
  dates: string[],
  portfolio: number[],
  benchmarkId: string,
): PortfolioBenchmarkSeries | null {
  const prices = lastYearPrices(benchmarkId);
  if (prices.length < 2) return null;
  const closeByDate = new Map(prices.map((point) => [point.date, point.close]));
  const values: number[] = [];
  let last = prices[0].close;
  for (const date of dates) {
    const close = closeByDate.get(date);
    if (close != null && close > 0) last = close;
    values.push(last);
  }
  const base = values[0];
  if (!base || base <= 0) return null;
  const normalized = values.map((value) => (value / base) * 100);
  const metrics = [
    periodMetrics(dates, portfolio, normalized, 30),
    periodMetrics(dates, portfolio, normalized, 182),
    periodMetrics(dates, portfolio, normalized, 365),
    periodMetrics(dates, portfolio, normalized, 3650, "MAX"),
  ].filter((item): item is PortfolioPeriodMetrics => item != null);
  const series: PortfolioSeriesPoint[] = [];
  for (let index = 0; index < dates.length; index += 1) {
    if (index % 4 !== 0 && index !== dates.length - 1) continue;
    series.push({
      date: dates[index],
      portfolio: Math.round((portfolio[index] - 100) * 100) / 100,
      benchmark: Math.round((normalized[index] - 100) * 100) / 100,
    });
  }
  return {
    id: benchmarkId,
    name: PORTFOLIO_BENCHMARKS[benchmarkId] ?? benchmarkId,
    series,
    metrics,
  };
}

function buildPerformance(
  constituents: PortfolioConstituent[],
  benchmarkId: string,
  benchmarkIds: string[],
) {
  const benchmark = lastYearPrices(benchmarkId);
  if (benchmark.length < 30) return unavailablePerformance();
  const stockSeries = constituents
    .map((item) => ({
      weight: item.weight,
      prices: new Map(
        lastYearPrices(item.ticker).map((point) => [point.date, point.close]),
      ),
      previous: null as number | null,
    }))
    .filter((item) => item.prices.size > 20);
  if (!stockSeries.length) return unavailablePerformance();
  let portfolioIndex = 100;
  let previousBenchmark: number | null = null;
  const dates: string[] = [];
  const portfolio: number[] = [];
  for (const point of benchmark) {
    const returns: Array<{ weight: number; value: number }> = [];
    for (const stock of stockSeries) {
      const current = stock.prices.get(point.date);
      if (current == null || stock.previous == null || stock.previous <= 0) continue;
      returns.push({
        weight: stock.weight,
        value: current / stock.previous - 1,
      });
    }
    for (const stock of stockSeries) {
      const current = stock.prices.get(point.date);
      if (current != null) stock.previous = current;
    }
    if (previousBenchmark != null && returns.length) {
      const totalWeight = returns.reduce((sum, item) => sum + item.weight, 0);
      const portfolioReturn =
        totalWeight > 0
          ? returns.reduce((sum, item) => sum + item.value * item.weight, 0) /
            totalWeight
          : 0;
      portfolioIndex *= 1 + portfolioReturn;
      dates.push(point.date);
      portfolio.push(portfolioIndex);
    }
    previousBenchmark = point.close;
  }
  if (dates.length < 20) return unavailablePerformance();
  const ids = benchmarkIds.filter(
    (id, index, list) =>
      list.indexOf(id) === index &&
      fs.existsSync(path.join(PRICES, id, "1Y.json")),
  );
  const seriesById = ids
    .map((id) => benchmarkSeriesFor(dates, portfolio, id))
    .filter(
      (item): item is PortfolioBenchmarkSeries => item != null,
    );
  if (!seriesById.length) return unavailablePerformance();
  const primary =
    seriesById.find((item) => item.id === benchmarkId) ?? seriesById[0];
  const oneYear =
    primary.metrics.find((item) => item.period === "1Y") ??
    primary.metrics.at(-1);
  const volatility = oneYear?.volatility ?? null;
  return {
    available: true,
    basis:
      "Simulated from the current constituents at target weights, daily rebalanced, price-only, no dividends or fees. Not live performance.",
    source: "Yahoo Finance price history via Stockmonk",
    inception: dates[0],
    asOf: dates[dates.length - 1],
    periods: primary.metrics.map((item) => item.period),
    series: primary.series,
    metrics: primary.metrics,
    benchmarks: seriesById,
    volatility,
    volatilityLevel: volatilityLevel(volatility),
  };
}

function buildReview(
  spec: PortfolioSpec,
  selected: Row[],
  eligible: Row[],
  asOf: string,
): PortfolioReview {
  const held = new Set(selected.map((row) => row.ticker));
  const selectedScores = selected.map((row) => row.score).sort((a, b) => a - b);
  const median =
    selectedScores.length > 0
      ? selectedScores[Math.floor(selectedScores.length / 2)]
      : 0;
  const additions = eligible
    .filter((row) => !held.has(row.ticker) && row.score > median)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
  const reductions = [...selected]
    .sort((a, b) => a.score - b.score)
    .filter(
      (row) =>
        (row.v2Technical != null && row.v2Technical < 38) ||
        (row.v2Composite != null && row.v2Composite < 42),
    )
    .slice(0, 2);
  const changes: PortfolioReviewChange[] = [];
  for (const row of additions) {
    changes.push({
      action: "Add",
      ticker: row.ticker,
      name: row.name,
      currentWeight: null,
      proposedWeight: 1 / spec.holdings,
      reasons: [
        `Ranked ${eligible.findIndex((item) => item.ticker === row.ticker) + 1} of ${eligible.length} eligible companies.`,
        `Composite score ${compositeScore(row, spec)?.toFixed(1) ?? "N/A"} with ${row.research ? "a full Stockmonk research report" : "quantitative score evidence"}.`,
        `Outside the current ${spec.holdings}-name cap; a candidate for the next review.`,
      ],
    });
  }
  for (const row of reductions) {
    changes.push({
      action: "Reduce",
      ticker: row.ticker,
      name: row.name,
      currentWeight: null,
      proposedWeight: null,
      reasons: [
        `Technical score ${row.v2Technical?.toFixed(1) ?? "N/A"} is below the strategy's trend threshold.`,
        `Composite score ${compositeScore(row, spec)?.toFixed(1) ?? "N/A"}; the name ranks in the bottom of the current basket.`,
        "Proposed trim only; no trade is executed.",
      ],
    });
  }
  return {
    asOf,
    status: changes.length ? "proposed" : "none",
    note:
      "Rules-based review using the latest Stockmonk scores and metrics. Proposals are explainable candidates, not executed trades or recommendations.",
    changes,
  };
}

function horizonFor(spec: PortfolioSpec): string {
  if (spec.strategyType === "Momentum" || spec.strategyType === "Technical") {
    return "1-3 years";
  }
  if (
    spec.primaryCategory === "Defensive" ||
    spec.primaryCategory === "Quality & Dividend"
  ) {
    return "5+ years";
  }
  return "3-5 years";
}

function buildMethodology(spec: PortfolioSpec, relaxed: boolean) {
  const filters = spec.filters;
  const criteria: string[] = [];
  if (filters.researchOnly) criteria.push("Full Stockmonk research report required");
  if (filters.sectors?.length) criteria.push(`Sector: ${filters.sectors.join(", ")}`);
  if (filters.industries?.length)
    criteria.push(`Industry keywords: ${filters.industries.join(", ")}`);
  if (filters.minMarketCap)
    criteria.push(`Market cap at least ${money(filters.minMarketCap)}`);
  if (filters.maxMarketCap)
    criteria.push(`Market cap at most ${money(filters.maxMarketCap)}`);
  if (filters.minRevenueGrowth != null)
    criteria.push(`Revenue growth at least ${pct(filters.minRevenueGrowth)}`);
  if (filters.minFcfMargin != null)
    criteria.push(`FCF margin at least ${pct(filters.minFcfMargin)}`);
  if (filters.minDividendYield != null)
    criteria.push(`Dividend yield at least ${pct(filters.minDividendYield)}`);
  if (filters.maxPe != null) criteria.push(`P/E at most ${filters.maxPe.toFixed(0)}x`);
  if (filters.minCoverage != null)
    criteria.push(`Minimum score coverage ${(filters.minCoverage * 100).toFixed(0)}%`);
  if (filters.minRoicTrend != null)
    criteria.push(`ROIC trend at least ${filters.minRoicTrend.toFixed(2)}`);
  if (filters.minRelativeVolume != null)
    criteria.push(`20-day/60-day relative volume at least ${filters.minRelativeVolume.toFixed(2)}x`);
  if (filters.maxDistFrom52wHigh != null)
    criteria.push(
      `Within ${Math.abs(filters.maxDistFrom52wHigh * 100).toFixed(0)}% of the 52-week closing high`,
    );
  if (filters.tickers?.length)
    criteria.push(
      `Curated theme membership (${filters.tickers.length} eligible US-listed companies)`,
    );

  const weights = `Growth ${spec.weights.growth}% · Quality ${spec.weights.quality}% · Valuation ${spec.weights.valuation}% · Technical ${spec.weights.technical}%`;
  const membership = filters.tickers?.length
    ? `Theme membership is a curated list of ${filters.tickers.length} US-listed companies with direct exposure to the theme. The engine verifies every selected ticker against the coverage universe and does not fill the basket with unrelated sector names.`
    : "";
  const methodology = `Eligible US-listed companies are ranked with the Stockmonk four-factor scores: ${weights}. ${spec.focus} ${membership} The highest-ranked names are selected subject to a ${spec.concentration}% single-stock cap and a ${spec.maxSectorWeight}% sector guide. Weights use ${spec.weighting === "score" ? "score-proportional sizing" : spec.weighting === "marketCap" ? "log market-cap sizing" : spec.weighting === "dividend" ? "a dividend-and-quality tilt" : spec.weighting === "lowVolatility" ? "inverse-volatility sizing" : "equal sizing"}. The portfolio is reviewed ${spec.rebalanceFrequency.toLowerCase()}.`;
  return {
    version: METHODOLOGY_VERSION,
    summary: spec.focus,
    paragraphs: [
      `${spec.name} is constructed only from the existing Stockmonk US coverage universe. Intended investment horizon: ${horizonFor(spec)}. ${relaxed ? "Some secondary screens were widened so the basket could reach its target holding count; theme membership, sector intent and the single-stock cap were preserved." : "Every selected company passed the strategy's sector, size, liquidity and score-coverage screens."}`,
      methodology,
      `No ETF, mutual fund or non-US-listed security is eligible. Missing data is not filled with an estimate. A company without a full research report remains eligible only where the quantitative strategy calls for it, and its constituent card links to score evidence rather than a research report.`,
      `The performance shown is a current-constituent simulation, not a live track record. Rebalancing proposals are generated from the same rules and remain proposed until a future review is executed.`,
    ],
    scoreWeights: spec.weights,
    selectionCriteria: criteria.length ? criteria : ["Broad US-listed coverage with a liquidity and price filter"],
    weighting:
      spec.weighting === "score"
        ? "Score-proportional with a single-stock cap"
        : spec.weighting === "marketCap"
          ? "Log market-cap proportional"
          : spec.weighting === "dividend"
            ? "Dividend and quality tilted"
            : spec.weighting === "lowVolatility"
              ? "Inverse volatility"
              : "Equal weight",
    constraints: [
      `${spec.concentration}% maximum single-stock weight`,
      `${spec.maxSectorWeight}% maximum sector weight`,
      `Minimum ${Math.min(5, spec.holdings)} holdings; target ${spec.holdings}`,
      `${spec.rebalanceFrequency} rebalancing`,
    ],
  };
}

function buildRationale(
  spec: PortfolioSpec,
  constituents: PortfolioConstituent[],
) {
  const top = constituents.slice(0, 5);
  return {
    opportunity: [
      spec.thesis,
      spec.focus,
      `The model holds ${constituents.length} companies and caps any single name at ${spec.concentration}%.`,
    ],
    whyTheseCompanies: top.map(
      (item) =>
        `${item.name} (${item.ticker}) ranks with a ${item.scores.composite?.toFixed(0) ?? "N/A"} composite score, ${pct(item.return1y)} one-year price return and a ${(item.weight * 100).toFixed(1)}% portfolio weight.`,
    ),
    risks: [
      spec.risks,
      "The portfolio is a model, not a personal recommendation. It can underperform its benchmark and may not suit every risk tolerance.",
    ],
    invalidation: [
      "A sustained deterioration in the factor evidence, a broken balance sheet or a loss of the theme's structural driver would invalidate the selection.",
      "A rules-based review can propose changes, but no trade is executed automatically.",
    ],
  };
}

function buildReport(
  spec: PortfolioSpec,
  constituents: PortfolioConstituent[],
  allocations: { sectors: PortfolioAllocation[]; marketCap: PortfolioAllocation[] },
  performance: ReturnType<typeof buildPerformance>,
  review: PortfolioReview,
) {
  const top = constituents.slice(0, 8);
  const oneYear = performance.metrics.find((metric) => metric.period === "1Y");
  return {
    headline: `${spec.name}: ${spec.thesis}`,
    dek: spec.description,
    sections: [
      {
        title: "Investment thesis",
        paragraphs: [
          spec.thesis,
          spec.focus,
          `${spec.name} is one of ${PORTFOLIO_SPECS.length} Stockmonk model portfolios built from the same 3,696-name US coverage universe used by the screener.`,
        ],
      },
      {
        title: "Strategy and construction",
        paragraphs: [
          `The selection score weights Growth ${spec.weights.growth}%, Quality ${spec.weights.quality}%, Valuation ${spec.weights.valuation}% and Technical ${spec.weights.technical}%. ${spec.focus}`,
          `Eligible companies are ranked, selected up to ${spec.holdings} names and sized with a ${spec.concentration}% single-stock cap. The sector guide is ${spec.maxSectorWeight}%.`,
        ],
      },
      {
        title: "Why these holdings",
        paragraphs: top.map(
          (item) =>
            `${item.name} (${item.ticker}) carries a ${item.scores.composite?.toFixed(0) ?? "N/A"} composite score and a ${(item.weight * 100).toFixed(1)}% weight. Growth ${item.scores.growth?.toFixed(0) ?? "N/A"} · Quality ${item.scores.quality?.toFixed(0) ?? "N/A"} · Valuation ${item.scores.valuation?.toFixed(0) ?? "N/A"} · Technical ${item.scores.technical?.toFixed(0) ?? "N/A"}.`,
        ),
      },
      {
        title: "Sector and concentration",
        paragraphs: [
          `The largest sector is ${allocations.sectors[0]?.label ?? "N/A"} at ${((allocations.sectors[0]?.weight ?? 0) * 100).toFixed(1)}%. The top ten holdings are ${(constituents.slice(0, 10).reduce((sum, item) => sum + item.weight, 0) * 100).toFixed(1)}% of the portfolio.`,
          `Market-cap mix: ${allocations.marketCap.map((item) => `${item.label} ${(item.weight * 100).toFixed(0)}%`).join(" · ")}.`,
        ],
      },
      {
        title: "Performance and benchmark",
        paragraphs: [
          performance.available
            ? `The current-constituent simulation returned ${pct(oneYear?.portfolioReturn ?? null)} over one year versus ${pct(oneYear?.benchmarkReturn ?? null)} for ${PORTFOLIO_BENCHMARKS[spec.benchmark] ?? spec.benchmark}. The simulated volatility is ${pct(performance.volatility)}. ${performance.basis}`
            : "Reliable historical performance is not available for this basket. The page shows N/A rather than a fabricated return.",
        ],
      },
      {
        title: "Risks and what would change the thesis",
        paragraphs: [
          spec.risks,
          "The model is rules-based and transparent, but it cannot anticipate every macro, regulatory or company-specific shock. A factor can remain out of favour for years.",
          review.status === "proposed"
            ? `The current review proposes ${review.changes.length} changes. They are candidates for the next rebalance and have not been executed.`
            : "The current review proposes no changes; all holdings still meet the strategy's screening thresholds.",
        ],
      },
    ],
    constituentNotes: top.map((item) => ({
      ticker: item.ticker,
      note: `${item.sector} · ${money(item.marketCap)} market cap · ${(item.weight * 100).toFixed(1)}% weight · ${pct(item.return1y)} 1Y. ${item.research ? "Full Stockmonk research report available." : "Quantitative score evidence available; full research report not published."}`,
    })),
  };
}

function addMonths(date: string, months: number): string {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCMonth(value.getUTCMonth() + months);
  return value.toISOString().slice(0, 10);
}

function main() {
  const rawRows = readJson<RawRow[]>(SCREENER);
  const search = readJson<Array<{ ticker: string; industry: string }>>(SEARCH);
  if (!rawRows || !search) throw new Error("Missing screener or search-index data");
  for (const item of search) industryMap.set(item.ticker, item.industry || "Other");
  const universe = rawRows.map((row) => {
    const composite = compositeScore(row, {
      weights: { growth: 25, quality: 25, valuation: 25, technical: 25 },
    } as PortfolioSpec);
    return {
      ...row,
      industry: industryMap.get(row.ticker) ?? "Other",
      sectorGics: gicsSector(row.sector),
      score: 0,
      compositeScore: composite,
      coverage: row.v2Coverage,
      stats: () => priceStats(row.ticker),
    } satisfies Row;
  });

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  const generatedAt = new Date().toISOString();
  const summaries: PortfolioSummary[] = [];

  for (const spec of PORTFOLIO_SPECS) {
    const filtered = filterRows(spec, universe);
    const ranked = filtered.rows
      .map((row) => ({ ...row, score: scoreFor(row, spec) }))
      .sort((a, b) => b.score - a.score);
    const selected = selectRows(spec, ranked);
    if (selected.length < 5)
      throw new Error(`${spec.slug} selected only ${selected.length} companies`);
    const volByTicker = new Map<string, number | null>();
    for (const row of selected) {
      volByTicker.set(row.ticker, annualizedVolatility(lastYearPrices(row.ticker)));
    }
    const weights = roundWeights(
      cappedWeights(
        rawWeights(selected, spec, volByTicker),
        spec.concentration / 100,
      ),
    );
    const constituents: PortfolioConstituent[] = selected.map((row, index) => ({
      ticker: row.ticker,
      name: row.name,
      sector: row.sectorGics,
      industry: row.industry,
      marketCap: row.marketCap,
      price: row.price,
      weight: weights[index],
      return1y: row.return1y,
      scores: {
        growth: row.v2Growth,
        quality: row.v2Quality,
        valuation: row.v2Valuation,
        technical: row.v2Technical,
        composite: row.compositeScore,
        coverage: row.coverage,
      },
      research: row.research,
      rationale: `${row.research ? "Full research report available. " : "Quantitative evidence only. "}Growth ${row.v2Growth?.toFixed(0) ?? "N/A"} · Quality ${row.v2Quality?.toFixed(0) ?? "N/A"} · Valuation ${row.v2Valuation?.toFixed(0) ?? "N/A"} · Technical ${row.v2Technical?.toFixed(0) ?? "N/A"}.`,
    }));
    const weightSum = constituents.reduce((sum, item) => sum + item.weight, 0);
    if (Math.abs(weightSum - 1) > 0.0002) {
      throw new Error(`${spec.slug} weights sum to ${weightSum}`);
    }
    for (const item of constituents) {
      if (!universe.some((row) => row.ticker === item.ticker))
        throw new Error(`${spec.slug}: ${item.ticker} outside universe`);
      if (isSecurityExcluded(item.name))
        throw new Error(`${spec.slug}: excluded security ${item.ticker}`);
    }
    const benchmarkIds =
      PORTFOLIO_BENCHMARK_GROUP[spec.benchmark] ?? [spec.benchmark, "SPY"];
    const performance = buildPerformance(
      constituents,
      spec.benchmark,
      benchmarkIds,
    );
    const oneYear = performance.metrics.find((metric) => metric.period === "1Y");
    const oneMonth = performance.metrics.find((metric) => metric.period === "1M");
    const sixMonth = performance.metrics.find((metric) => metric.period === "6M");
    const allocations = {
      sectors: buildAllocations(constituents, "sector"),
      marketCap: buildAllocations(constituents, "marketCap"),
    };
    const review = buildReview(spec, selected, ranked, generatedAt.slice(0, 10));
    for (const change of review.changes) {
      const holding = constituents.find(
        (item) => item.ticker === change.ticker,
      );
      if (change.action === "Add") {
        change.proposedWeight =
          Math.round((1 / Math.max(1, spec.holdings)) * 10_000) / 10_000;
      } else if (holding) {
        change.currentWeight = holding.weight;
        change.proposedWeight =
          change.action === "Remove"
            ? 0
            : Math.round(holding.weight * 5_000) / 10_000;
      }
    }
    const methodology = buildMethodology(spec, filtered.relaxed);
    const rationale = buildRationale(spec, constituents);
    const report = buildReport(spec, constituents, allocations, performance, review);
    const benchmarkOptions = performance.benchmarks.map((item) => ({
      id: item.id,
      name: item.name,
    }));

    const summary: PortfolioSummary = {
      slug: spec.slug,
      name: spec.name,
      description: spec.description,
      primaryCategory: spec.primaryCategory,
      strategyType: spec.strategyType,
      tags: spec.tags,
      marketCapFocus: spec.marketCapFocus,
      minimumInvestment: spec.minimumInvestment,
      rebalanceFrequency: spec.rebalanceFrequency,
      holdingsCount: constituents.length,
      volatility: performance.volatilityLevel,
      volatilityValue: performance.volatility,
      return1y: oneYear?.portfolioReturn ?? null,
      return1m: oneMonth?.portfolioReturn ?? null,
      return6m: sixMonth?.portfolioReturn ?? null,
      benchmark: {
        id: spec.benchmark,
        name: PORTFOLIO_BENCHMARKS[spec.benchmark] ?? spec.benchmark,
      },
      performanceBasis: performance.basis,
      performanceAvailable: performance.available,
      createdAt: generatedAt.slice(0, 10),
      updatedAt: generatedAt.slice(0, 10),
      popularity: spec.popularity,
    };
    const detail: PortfolioDetail = {
      ...summary,
      thesis: spec.thesis,
      focus: spec.focus,
      risks: spec.risks,
      horizon: horizonFor(spec),
      methodology,
      rationale,
      constituents,
      allocations: {
        ...allocations,
        top10Weight: constituents
          .slice(0, 10)
          .reduce((sum, item) => sum + item.weight, 0),
      },
      performance,
      benchmarkOptions,
      rebalance: {
        frequency: spec.rebalanceFrequency,
        lastRebalanced: generatedAt.slice(0, 10),
        nextRebalance: addMonths(
          generatedAt.slice(0, 10),
          spec.rebalanceFrequency === "Monthly" ? 1 : 3,
        ),
        events: [
          {
            date: generatedAt.slice(0, 10),
            title: "Initial construction",
            summary: `${constituents.length} companies selected from the ${universe.length}-name Stockmonk universe.`,
          },
        ],
      },
      review,
      report,
    };
    fs.writeFileSync(
      path.join(OUT, `${spec.slug}.json`),
      JSON.stringify(detail),
      "utf8",
    );
    summaries.push(summary);
    console.log(
      `[portfolios] ${spec.slug}: ${constituents.length} holdings, 1Y ${pct(summary.return1y)}, ${summary.volatility} vol${filtered.relaxed ? " (relaxed screen)" : ""}`,
    );
  }

  const index: PortfolioIndex = {
    generatedAt,
    methodologyVersion: METHODOLOGY_VERSION,
    universeSize: universe.length,
    researchUniverseSize: universe.filter((row) => row.research).length,
    portfolios: summaries,
  };
  fs.writeFileSync(
    path.join(OUT, "index.json"),
    JSON.stringify(index),
    "utf8",
  );
  console.log(
    `[portfolios] wrote ${summaries.length} portfolios from ${universe.length} companies (${index.researchUniverseSize} research-covered)`,
  );
}

main();
