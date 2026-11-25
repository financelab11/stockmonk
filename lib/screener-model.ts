import { getCoverageGroup } from "@/config/coverage";
import type {
  Consensus,
  FinancialRow,
  RangePricePoint,
  TickerData,
} from "./schemas";

export type ScreenerBundle = {
  data: TickerData;
  consensus: Consensus | null;
  prices: RangePricePoint[];
  pricesMax: RangePricePoint[];
};

export type FactorKey =
  "growth" | "quality" | "valuation" | "momentum" | "lowVolatility";

export type ParameterUnit = "pct" | "x" | "num" | "days" | "score";

export type ParameterConfig = {
  key: string;
  label: string;
  weight: number;
  direction: "higher" | "lower";
  unit: ParameterUnit;
  description: string;
};

export type FactorConfig = {
  key: FactorKey;
  label: string;
  shortLabel: string;
  weight: number;
  description: string;
  parameters: ParameterConfig[];
};

export type ParameterResult = {
  value: number | null;
  score: number | null;
};

export type FactorResult = {
  score: number | null;
  parameters: Record<string, ParameterResult>;
};

export type ScreenerRow = {
  rank: number;
  ticker: string;
  name: string;
  sector: string;
  group: string;
  marketCap: number | null;
  price: number;
  asOf: string;
  return1d: number | null;
  return1w: number | null;
  return1m: number | null;
  return3m: number | null;
  return6m: number | null;
  return1y: number | null;
  return3y: number | null;
  return5y: number | null;
  pe: number | null;
  pb: number | null;
  evEbitda: number | null;
  peg: number | null;
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
  assetTurnover: number | null;
  composite: number | null;
  factorScores: Record<FactorKey, number | null>;
  v2Growth: number | null;
  v2Quality: number | null;
  v2Valuation: number | null;
  v2Technical: number | null;
  v2Composite: number | null;
  v2Coverage: number | null;
  v2Status: "complete" | "incomplete" | null;
  band: string;
  coverage: number;
  factors: Record<FactorKey, FactorResult>;
};

const RISK_FREE = 0.043;
const EQUITY_RISK_PREMIUM = 0.055;
const TAX_RATE = 0.21;

function finite(value: number | null | undefined): value is number {
  return value != null && Number.isFinite(value);
}

function safeDiv(
  numerator: number | null | undefined,
  denominator: number | null | undefined,
): number | null {
  if (!finite(numerator) || !finite(denominator) || denominator === 0)
    return null;
  return numerator / denominator;
}

function average(values: Array<number | null | undefined>): number | null {
  const present = values.filter(finite);
  if (!present.length) return null;
  return present.reduce((sum, value) => sum + value, 0) / present.length;
}

function standardDeviation(values: number[]): number | null {
  if (values.length < 2) return null;
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  const variance =
    values.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
    (values.length - 1);
  return Math.sqrt(variance);
}

function sortAnnual(data: TickerData): FinancialRow[] {
  return [...data.annual]
    .filter((row) => !row.ttm)
    .sort((a, b) => a.fyear - b.fyear);
}

function cagr(
  rows: FinancialRow[],
  field: keyof FinancialRow,
  years: number,
): number | null {
  if (rows.length < 2) return null;
  const latest = rows[rows.length - 1];
  const targetYear = latest.fyear - years;
  const start =
    rows.find((row) => row.fyear === targetYear) ??
    [...rows].reverse().find((row) => row.fyear <= targetYear) ??
    rows[0];
  const startValue = start[field] as number | null;
  const endValue = latest[field] as number | null;
  if (
    !finite(startValue) ||
    !finite(endValue) ||
    startValue <= 0 ||
    endValue <= 0
  ) {
    return null;
  }
  const actualYears = latest.fyear - start.fyear;
  if (actualYears <= 0) return null;
  return (endValue / startValue) ** (1 / actualYears) - 1;
}

function latestAnnual(data: TickerData): FinancialRow | null {
  return sortAnnual(data).at(-1) ?? null;
}

function ttmOrAnnual(
  data: TickerData,
  field: keyof FinancialRow,
): number | null {
  const ttm = data.ttm?.[field] as number | null;
  if (finite(ttm)) return ttm;
  return (latestAnnual(data)?.[field] as number | null) ?? null;
}

function quarterSeries(data: TickerData): FinancialRow[] {
  return [...data.quarterly]
    .filter((row) => !row.ttm)
    .sort((a, b) => a.reportDate.localeCompare(b.reportDate));
}

function yoyGrowth(
  current: number | null,
  prior: number | null,
): number | null {
  if (!finite(current) || !finite(prior) || prior === 0) return null;
  return current / prior - 1;
}

function growthAcceleration(
  rows: FinancialRow[],
  field: keyof FinancialRow,
): number | null {
  if (rows.length < 6) return null;
  const latest = rows[rows.length - 1];
  const previous = rows[rows.length - 2];
  const latestBase = rows[rows.length - 5];
  const previousBase = rows[rows.length - 6];
  const latestGrowth = yoyGrowth(
    latest[field] as number | null,
    latestBase?.[field] as number | null,
  );
  const previousGrowth = yoyGrowth(
    previous[field] as number | null,
    previousBase?.[field] as number | null,
  );
  if (latestGrowth == null || previousGrowth == null) return null;
  return latestGrowth - previousGrowth;
}

function priceOnOrAfter(
  points: RangePricePoint[],
  date: string,
): number | null {
  const sorted = [...points].sort((a, b) => a.t - b.t);
  const target = new Date(`${date}T00:00:00Z`).getTime() / 1000;
  const match = sorted.find((point) => point.t >= target);
  if (match) return match.c;
  return sorted.at(-1)?.c ?? null;
}

function historicalValuationPercentile(
  data: TickerData,
  pricesMax: RangePricePoint[],
): number | null {
  const currentPe = data.metrics.pe;
  if (!finite(currentPe) || currentPe <= 0) return null;
  const rows = sortAnnual(data).slice(-6);
  const history: number[] = [];
  for (const row of rows) {
    if (!finite(row.epsDiluted) || row.epsDiluted <= 0) continue;
    const price = priceOnOrAfter(pricesMax, row.reportDate);
    if (!finite(price)) continue;
    history.push(price / row.epsDiluted);
  }
  if (history.length < 3) return null;
  const below = history.filter((value) => value <= currentPe).length;
  // 100 means the current multiple is at the cheap end of its own history.
  return Math.round((1 - below / history.length) * 100);
}

function dayReturns(
  points: RangePricePoint[],
): Array<{ date: string; value: number }> {
  const sorted = [...points].sort((a, b) => a.t - b.t);
  const out: Array<{ date: string; value: number }> = [];
  for (let index = 1; index < sorted.length; index += 1) {
    const previous = sorted[index - 1].c;
    const current = sorted[index].c;
    if (previous > 0 && current > 0) {
      out.push({
        date: new Date(sorted[index].t * 1000).toISOString().slice(0, 10),
        value: current / previous - 1,
      });
    }
  }
  return out;
}

function windowReturns(
  points: RangePricePoint[],
  tradingDays: number,
): number[] {
  return dayReturns(points)
    .slice(-tradingDays)
    .map((item) => item.value);
}

function annualizedVolatility(
  points: RangePricePoint[],
  tradingDays: number,
): number | null {
  const values = windowReturns(points, tradingDays);
  if (values.length < 10) return null;
  const sd = standardDeviation(values);
  return sd == null ? null : sd * Math.sqrt(252);
}

function annualizedReturn(
  points: RangePricePoint[],
  calendarDays: number,
): number | null {
  const sorted = [...points].sort((a, b) => a.t - b.t);
  if (sorted.length < 2) return null;
  const latest = sorted[sorted.length - 1];
  const target = latest.t - calendarDays * 86_400;
  const start = sorted.find((point) => point.t >= target) ?? sorted[0];
  if (start.c <= 0) return null;
  return (latest.c / start.c) ** (365 / calendarDays) - 1;
}

function returnOverCalendarDays(
  points: RangePricePoint[],
  calendarDays: number,
): number | null {
  const sorted = [...points].sort((a, b) => a.t - b.t);
  if (sorted.length < 2) return null;
  const latest = sorted[sorted.length - 1];
  const target = latest.t - calendarDays * 86_400;
  const start = sorted.find((point) => point.t >= target) ?? sorted[0];
  if (start.c <= 0) return null;
  return latest.c / start.c - 1;
}

function movingAverage(
  points: RangePricePoint[],
  tradingDays: number,
): number | null {
  const sorted = [...points].sort((a, b) => a.t - b.t).slice(-tradingDays);
  if (sorted.length < Math.min(20, tradingDays)) return null;
  return sorted.reduce((sum, point) => sum + point.c, 0) / sorted.length;
}

function beta(
  points: RangePricePoint[],
  benchmark: RangePricePoint[],
  tradingDays: number,
): number | null {
  const stock = new Map(
    dayReturns(points).map((item) => [item.date, item.value]),
  );
  const index = new Map(
    dayReturns(benchmark).map((item) => [item.date, item.value]),
  );
  const dates = [...stock.keys()]
    .filter((date) => index.has(date))
    .sort()
    .slice(-tradingDays);
  if (dates.length < 30) return null;
  const stockReturns = dates.map((date) => stock.get(date) as number);
  const indexReturns = dates.map((date) => index.get(date) as number);
  const stockMean =
    stockReturns.reduce((sum, value) => sum + value, 0) / stockReturns.length;
  const indexMean =
    indexReturns.reduce((sum, value) => sum + value, 0) / indexReturns.length;
  let covariance = 0;
  let variance = 0;
  for (let i = 0; i < dates.length; i += 1) {
    covariance += (stockReturns[i] - stockMean) * (indexReturns[i] - indexMean);
    variance += (indexReturns[i] - indexMean) ** 2;
  }
  if (variance === 0) return null;
  return covariance / variance;
}

function downsideDeviation(points: RangePricePoint[]): number | null {
  const values = windowReturns(points, 252).filter((value) => value < 0);
  if (values.length < 10) return null;
  const sd = standardDeviation(values);
  return sd == null ? null : sd * Math.sqrt(252);
}

function maxDrawdown(points: RangePricePoint[]): number | null {
  const sorted = [...points].sort((a, b) => a.t - b.t);
  if (sorted.length < 2) return null;
  let peak = sorted[0].c;
  let worst = 0;
  for (const point of sorted) {
    peak = Math.max(peak, point.c);
    if (peak > 0) worst = Math.min(worst, point.c / peak - 1);
  }
  return worst;
}

function recoveryPeriod(points: RangePricePoint[]): number | null {
  const sorted = [...points].sort((a, b) => a.t - b.t).slice(-252);
  if (sorted.length < 30) return null;
  let peak = sorted[0].c;
  let current = 0;
  let longest = 0;
  for (const point of sorted) {
    if (point.c >= peak) {
      peak = point.c;
      current = 0;
    } else {
      current += 1;
      longest = Math.max(longest, current);
    }
  }
  return longest;
}

function valueAtRisk(points: RangePricePoint[]): number | null {
  const values = windowReturns(points, 252).sort((a, b) => a - b);
  if (values.length < 20) return null;
  const index = Math.floor(values.length * 0.05);
  return values[index] ?? null;
}

function negativeFrequency(points: RangePricePoint[]): number | null {
  const values = windowReturns(points, 252);
  if (values.length < 20) return null;
  return values.filter((value) => value < 0).length / values.length;
}

function wacc(data: TickerData, beta1y: number | null): number | null {
  const equity = ttmOrAnnual(data, "totalEquity");
  const debt = ttmOrAnnual(data, "totalDebt");
  const interest = ttmOrAnnual(data, "interestExpense");
  if (!finite(equity) || !finite(debt) || equity + debt <= 0) return null;
  const costOfEquity = RISK_FREE + (beta1y ?? 1) * EQUITY_RISK_PREMIUM;
  const costOfDebt =
    finite(interest) && debt > 0 ? Math.abs(interest) / debt : RISK_FREE + 0.02;
  return (
    (equity / (equity + debt)) * costOfEquity +
    (debt / (equity + debt)) * costOfDebt * (1 - TAX_RATE)
  );
}

function epsSurprise(consensus: Consensus | null): number | null {
  if (!consensus) return null;
  const surprises = consensus.history
    .map((row) => {
      if (
        !finite(row.epsActual) ||
        !finite(row.epsEstimate) ||
        row.epsEstimate === 0
      ) {
        return null;
      }
      return (row.epsActual - row.epsEstimate) / Math.abs(row.epsEstimate);
    })
    .filter(finite);
  return average(surprises);
}

export function computePriceParameters(
  prices: RangePricePoint[],
  pricesMax: RangePricePoint[],
  benchmark: RangePricePoint[],
): Record<string, number | null> {
  const beta1y = beta(prices, benchmark, 252);
  const beta2y = beta(pricesMax, benchmark, 504);
  const vol30 = annualizedVolatility(prices, 30);
  const vol90 = annualizedVolatility(prices, 90);
  const vol252 = annualizedVolatility(prices, 252);
  const down = downsideDeviation(prices);
  const annualReturn = annualizedReturn(prices, 365);
  const sortino =
    annualReturn != null && down != null && down > 0
      ? (annualReturn - RISK_FREE) / down
      : null;
  const sharpe =
    annualReturn != null && vol252 != null && vol252 > 0
      ? (annualReturn - RISK_FREE) / vol252
      : null;
  const sortedPrices = [...prices].sort((a, b) => a.t - b.t);
  const lastPrice = sortedPrices.at(-1)?.c ?? null;
  const previousPrice = sortedPrices.at(-2)?.c ?? null;
  const price = lastPrice ?? 0;
  const dma50 = movingAverage(prices, 50);
  const dma200 = movingAverage(prices, 200);
  const stockReturn = returnOverCalendarDays(prices, 365);
  const benchReturn = returnOverCalendarDays(benchmark, 365);

  return {
    return1d:
      lastPrice != null && previousPrice != null && previousPrice > 0
        ? lastPrice / previousPrice - 1
        : null,
    return1w: returnOverCalendarDays(prices, 7),
    return1m: returnOverCalendarDays(prices, 30),
    return3m: returnOverCalendarDays(prices, 91),
    return6m: returnOverCalendarDays(prices, 182),
    return12m: returnOverCalendarDays(prices, 365),
    return3y: returnOverCalendarDays(pricesMax, 1095),
    return5y: returnOverCalendarDays(pricesMax, 1825),
    momentum12m1m:
      stockReturn != null && returnOverCalendarDays(prices, 30) != null
        ? stockReturn - (returnOverCalendarDays(prices, 30) as number)
        : null,
    relativeStrength:
      stockReturn != null && benchReturn != null
        ? stockReturn - benchReturn
        : null,
    priceVs50dma: dma50 && dma50 > 0 ? price / dma50 - 1 : null,
    priceVs200dma: dma200 && dma200 > 0 ? price / dma200 - 1 : null,
    vol30d: vol30,
    vol90d: vol90,
    vol252d: vol252,
    beta1y,
    beta2y,
    downsideDeviation: down,
    maxDrawdown: maxDrawdown(prices),
    sortino,
    sharpe,
    var95: valueAtRisk(prices),
    negativeFrequency: negativeFrequency(prices),
    recoveryPeriod: recoveryPeriod(prices),
  };
}

export function computeRawParameters(
  bundle: ScreenerBundle,
  benchmark: RangePricePoint[],
): Record<string, number | null> {
  const { data, consensus, prices, pricesMax } = bundle;
  const annual = sortAnnual(data);
  const quarters = quarterSeries(data);
  const revenue = ttmOrAnnual(data, "revenue");
  const netIncome = ttmOrAnnual(data, "netIncome");
  const operatingIncome = ttmOrAnnual(data, "operatingIncome");
  const ebitda = ttmOrAnnual(data, "ebitda") ?? operatingIncome;
  const cfo = ttmOrAnnual(data, "cfo");
  const interest = ttmOrAnnual(data, "interestExpense");
  const equity = ttmOrAnnual(data, "totalEquity");
  const debt = ttmOrAnnual(data, "totalDebt");
  const cash = ttmOrAnnual(data, "cashAndInvestments");
  const assets = ttmOrAnnual(data, "totalAssets");
  const marketCap = data.latestPrice.marketCap;
  const ev =
    marketCap != null && debt != null
      ? marketCap + debt - (cash ?? 0)
      : marketCap;
  const priceParameters = computePriceParameters(prices, pricesMax, benchmark);
  const beta1y = priceParameters.beta1y;
  const currentFy = consensus?.estimates.find(
    (estimate) => estimate.period === "Current fiscal year",
  );
  const nextFy = consensus?.estimates.find(
    (estimate) => estimate.period === "Next fiscal year",
  );
  const forwardEps = currentFy?.epsAvg ?? null;
  const price = data.latestPrice.close;
  const forwardPeValue =
    finite(forwardEps) && forwardEps > 0 ? price / forwardEps : null;
  const forwardGrowth = currentFy?.epsGrowth ?? nextFy?.epsGrowth ?? null;
  const roic = data.metrics.roic;
  const investedCapital =
    equity != null && debt != null && cash != null
      ? equity + debt - cash
      : null;
  const roce =
    investedCapital != null && investedCapital > 0
      ? safeDiv(operatingIncome, investedCapital)
      : null;
  const estimatedWacc = wacc(data, beta1y);
  const roicWacc =
    roic != null && estimatedWacc != null ? roic - estimatedWacc : null;
  const latest = annual.at(-1);
  const prior = annual.at(-2);
  const averageAssets =
    latest?.totalAssets != null && prior?.totalAssets != null
      ? (latest.totalAssets + prior.totalAssets) / 2
      : assets;
  const buybacks = ttmOrAnnual(data, "buybacks");

  const roicHistory = annual
    .slice(-5)
    .map((row) => row.roic)
    .filter(finite);
  const marginHistory = annual
    .slice(-5)
    .map((row) => row.operatingMargin)
    .filter(finite);
  const roicTrend =
    annual.length >= 4
      ? (annual.at(-1)?.roic ?? null) != null &&
        (annual.at(-4)?.roic ?? null) != null
        ? (annual.at(-1)!.roic as number) - (annual.at(-4)!.roic as number)
        : null
      : null;

  const latestInvested = latest
    ? (latest.totalEquity ?? 0) +
      (latest.totalDebt ?? 0) -
      (latest.cashAndInvestments ?? 0)
    : null;
  const old = annual.at(-4);
  const oldInvested = old
    ? (old.totalEquity ?? 0) +
      (old.totalDebt ?? 0) -
      (old.cashAndInvestments ?? 0)
    : null;
  const incrementalRoic =
    latest &&
    old &&
    latestInvested != null &&
    oldInvested != null &&
    latestInvested - oldInvested > 0
      ? ((latest.operatingIncome ?? 0) * (1 - TAX_RATE) -
          (old.operatingIncome ?? 0) * (1 - TAX_RATE)) /
        (latestInvested - oldInvested)
      : null;

  return {
    revenueCagr3y: cagr(annual, "revenue", 3),
    revenueCagr5y: cagr(annual, "revenue", 5),
    ebitdaCagr3y: cagr(annual, "ebitda", 3),
    ebitCagr3y: cagr(annual, "operatingIncome", 3),
    epsCagr3y: cagr(annual, "epsDiluted", 3),
    epsCagr5y: cagr(annual, "epsDiluted", 5),
    patCagr3y: cagr(annual, "netIncome", 3),
    fcfCagr3y: cagr(annual, "freeCashFlow", 3),
    revenueAcceleration:
      growthAcceleration(quarters, "revenue") ??
      (annual.length >= 2
        ? (data.metrics.revenueGrowthTtm ?? 0) -
          (data.metrics.revenueGrowthLatestQ ?? 0)
        : null),
    epsAcceleration: growthAcceleration(quarters, "epsDiluted"),
    forwardRevenueGrowth1: currentFy?.revenueGrowth ?? null,
    forwardRevenueGrowth2: nextFy?.revenueGrowth ?? null,
    forwardEpsGrowth1: currentFy?.epsGrowth ?? null,
    forwardEpsGrowth2: nextFy?.epsGrowth ?? null,

    roe: equity != null && equity > 0 ? data.metrics.roe : null,
    roce,
    roic,
    grossMargin: data.metrics.grossMargin,
    ebitdaMargin: safeDiv(ebitda, revenue),
    ebitMargin: data.metrics.operatingMargin,
    fcfMargin: data.metrics.fcfMargin,
    cfoPat: netIncome != null && netIncome > 0 ? safeDiv(cfo, netIncome) : null,
    accrualRatio:
      averageAssets != null &&
      averageAssets > 0 &&
      netIncome != null &&
      cfo != null
        ? (netIncome - cfo) / averageAssets
        : null,
    debtEquity: equity != null && equity > 0 ? safeDiv(debt, equity) : null,
    interestCoverage:
      interest != null && Math.abs(interest) > 0
        ? safeDiv(operatingIncome, Math.abs(interest))
        : null,
    netDebtEbitda: data.metrics.netDebtToEbitda,
    assetTurnover: safeDiv(revenue, averageAssets),
    roicTrend,
    roicStability: standardDeviation(roicHistory),
    marginStability: standardDeviation(marginHistory),
    incrementalRoic,
    roicWaccSpread: roicWacc,

    pe: data.metrics.pe,
    forwardPe: forwardPeValue,
    evEbitda: data.metrics.evEbitda,
    evEbit:
      ebitda != null &&
      ev != null &&
      operatingIncome != null &&
      operatingIncome > 0
        ? ev / operatingIncome
        : null,
    evSales: data.metrics.evSales,
    pb: equity != null && equity > 0 ? safeDiv(marketCap, equity) : null,
    pfcf: data.metrics.pfcf,
    fcfYield: data.metrics.fcfYield,
    earningsYield:
      data.metrics.pe != null && data.metrics.pe > 0
        ? 1 / data.metrics.pe
        : null,
    peg:
      forwardPeValue != null && forwardGrowth != null && forwardGrowth > 0
        ? forwardPeValue / (forwardGrowth * 100)
        : null,
    dividendYield: data.latestPrice.dividendYield,
    historicalValuation: historicalValuationPercentile(data, pricesMax),
    buybackYield:
      finite(buybacks) && marketCap != null && marketCap > 0
        ? buybacks / marketCap
        : null,
    netMargin: data.metrics.netMargin,
    revenueGrowthTtm: data.metrics.revenueGrowthTtm,
    return1y: data.metrics.return1y,

    ...priceParameters,
    epsRevision30d: consensus?.revisions?.eps30d ?? null,
    epsRevision90d: consensus?.revisions?.eps90d ?? null,
    epsSurprise: epsSurprise(consensus),
    revenueSurprise: null,
    earningsMomentum: forwardGrowth,
  };
}

export const FACTOR_CONFIG: FactorConfig[] = [
  {
    key: "growth",
    label: "Growth",
    shortLabel: "G",
    weight: 0.2,
    description: "Revenue, earnings and cash-flow expansion.",
    parameters: [
      {
        key: "revenueCagr3y",
        label: "Revenue CAGR 3Y",
        weight: 0.1,
        direction: "higher",
        unit: "pct",
        description: "Three-year compound annual revenue growth.",
      },
      {
        key: "revenueCagr5y",
        label: "Revenue CAGR 5Y",
        weight: 0.06,
        direction: "higher",
        unit: "pct",
        description: "Five-year compound annual revenue growth.",
      },
      {
        key: "ebitdaCagr3y",
        label: "EBITDA CAGR 3Y",
        weight: 0.06,
        direction: "higher",
        unit: "pct",
        description: "Three-year compound annual EBITDA growth.",
      },
      {
        key: "ebitCagr3y",
        label: "EBIT CAGR 3Y",
        weight: 0.06,
        direction: "higher",
        unit: "pct",
        description: "Three-year compound annual operating-income growth.",
      },
      {
        key: "epsCagr3y",
        label: "EPS CAGR 3Y",
        weight: 0.12,
        direction: "higher",
        unit: "pct",
        description: "Three-year compound annual diluted EPS growth.",
      },
      {
        key: "epsCagr5y",
        label: "EPS CAGR 5Y",
        weight: 0.06,
        direction: "higher",
        unit: "pct",
        description: "Five-year compound annual diluted EPS growth.",
      },
      {
        key: "patCagr3y",
        label: "PAT CAGR 3Y",
        weight: 0.06,
        direction: "higher",
        unit: "pct",
        description: "Three-year compound annual net-profit growth.",
      },
      {
        key: "fcfCagr3y",
        label: "FCF CAGR 3Y",
        weight: 0.08,
        direction: "higher",
        unit: "pct",
        description: "Three-year compound annual free-cash-flow growth.",
      },
      {
        key: "revenueAcceleration",
        label: "Sales acceleration",
        weight: 0.12,
        direction: "higher",
        unit: "pct",
        description:
          "Change in year-over-year revenue growth, latest quarter versus prior quarter.",
      },
      {
        key: "epsAcceleration",
        label: "EPS acceleration",
        weight: 0.12,
        direction: "higher",
        unit: "pct",
        description:
          "Change in year-over-year EPS growth, latest quarter versus prior quarter.",
      },
      {
        key: "forwardRevenueGrowth1",
        label: "Forward revenue growth FY1",
        weight: 0.04,
        direction: "higher",
        unit: "pct",
        description:
          "Third-party consensus revenue growth for the current fiscal year.",
      },
      {
        key: "forwardRevenueGrowth2",
        label: "Forward revenue growth FY2",
        weight: 0.03,
        direction: "higher",
        unit: "pct",
        description:
          "Third-party consensus revenue growth for the next fiscal year.",
      },
      {
        key: "forwardEpsGrowth1",
        label: "Forward EPS growth FY1",
        weight: 0.05,
        direction: "higher",
        unit: "pct",
        description:
          "Third-party consensus EPS growth for the current fiscal year.",
      },
      {
        key: "forwardEpsGrowth2",
        label: "Forward EPS growth FY2",
        weight: 0.04,
        direction: "higher",
        unit: "pct",
        description:
          "Third-party consensus EPS growth for the next fiscal year.",
      },
    ],
  },
  {
    key: "quality",
    label: "Quality",
    shortLabel: "Q",
    weight: 0.25,
    description:
      "Profitability, efficiency, cash conversion and financial strength.",
    parameters: [
      {
        key: "roe",
        label: "ROE",
        weight: 0.08,
        direction: "higher",
        unit: "pct",
        description: "Net income divided by shareholders' equity.",
      },
      {
        key: "roce",
        label: "ROCE",
        weight: 0.07,
        direction: "higher",
        unit: "pct",
        description: "Operating income divided by capital employed.",
      },
      {
        key: "roic",
        label: "ROIC",
        weight: 0.1,
        direction: "higher",
        unit: "pct",
        description: "After-tax operating income divided by invested capital.",
      },
      {
        key: "grossMargin",
        label: "Gross margin",
        weight: 0.04,
        direction: "higher",
        unit: "pct",
        description: "Gross profit divided by revenue.",
      },
      {
        key: "ebitdaMargin",
        label: "EBITDA margin",
        weight: 0.05,
        direction: "higher",
        unit: "pct",
        description: "EBITDA divided by revenue.",
      },
      {
        key: "ebitMargin",
        label: "EBIT margin",
        weight: 0.05,
        direction: "higher",
        unit: "pct",
        description: "Operating income divided by revenue.",
      },
      {
        key: "fcfMargin",
        label: "FCF margin",
        weight: 0.07,
        direction: "higher",
        unit: "pct",
        description: "Free cash flow divided by revenue.",
      },
      {
        key: "cfoPat",
        label: "CFO / PAT",
        weight: 0.1,
        direction: "higher",
        unit: "x",
        description: "Operating cash flow divided by net profit.",
      },
      {
        key: "accrualRatio",
        label: "Accrual ratio",
        weight: 0.06,
        direction: "lower",
        unit: "pct",
        description:
          "Net income less operating cash flow, divided by average assets.",
      },
      {
        key: "debtEquity",
        label: "Debt / equity",
        weight: 0.06,
        direction: "lower",
        unit: "x",
        description: "Total debt divided by shareholders' equity.",
      },
      {
        key: "interestCoverage",
        label: "Interest coverage",
        weight: 0.06,
        direction: "higher",
        unit: "x",
        description: "Operating income divided by interest expense.",
      },
      {
        key: "netDebtEbitda",
        label: "Net debt / EBITDA",
        weight: 0.06,
        direction: "lower",
        unit: "x",
        description: "Net debt divided by EBITDA.",
      },
      {
        key: "assetTurnover",
        label: "Asset turnover",
        weight: 0.04,
        direction: "higher",
        unit: "x",
        description: "Revenue divided by average total assets.",
      },
      {
        key: "roicTrend",
        label: "ROIC trend",
        weight: 0.05,
        direction: "higher",
        unit: "pct",
        description: "Change in ROIC over the last three fiscal years.",
      },
      {
        key: "roicStability",
        label: "ROIC stability",
        weight: 0.04,
        direction: "lower",
        unit: "num",
        description: "Standard deviation of annual ROIC over five years.",
      },
      {
        key: "marginStability",
        label: "Margin stability",
        weight: 0.04,
        direction: "lower",
        unit: "num",
        description:
          "Standard deviation of annual operating margins over five years.",
      },
      {
        key: "incrementalRoic",
        label: "Incremental ROIC",
        weight: 0.03,
        direction: "higher",
        unit: "pct",
        description:
          "Change in after-tax operating profit divided by change in invested capital.",
      },
      {
        key: "roicWaccSpread",
        label: "ROIC - WACC",
        weight: 0.04,
        direction: "higher",
        unit: "pct",
        description: "ROIC less an estimated weighted average cost of capital.",
      },
    ],
  },
  {
    key: "valuation",
    label: "Valuation",
    shortLabel: "V",
    weight: 0.2,
    description: "Relative and absolute stock attractiveness.",
    parameters: [
      {
        key: "pe",
        label: "P/E",
        weight: 0.1,
        direction: "lower",
        unit: "x",
        description: "Market capitalisation divided by trailing net income.",
      },
      {
        key: "forwardPe",
        label: "Forward P/E",
        weight: 0.1,
        direction: "lower",
        unit: "x",
        description: "Price divided by current-year consensus EPS.",
      },
      {
        key: "evEbitda",
        label: "EV/EBITDA",
        weight: 0.1,
        direction: "lower",
        unit: "x",
        description: "Enterprise value divided by EBITDA.",
      },
      {
        key: "evEbit",
        label: "EV/EBIT",
        weight: 0.06,
        direction: "lower",
        unit: "x",
        description: "Enterprise value divided by operating income.",
      },
      {
        key: "evSales",
        label: "EV/Sales",
        weight: 0.05,
        direction: "lower",
        unit: "x",
        description: "Enterprise value divided by revenue.",
      },
      {
        key: "pb",
        label: "P/B",
        weight: 0.08,
        direction: "lower",
        unit: "x",
        description: "Market capitalisation divided by book equity.",
      },
      {
        key: "pfcf",
        label: "P/FCF",
        weight: 0.08,
        direction: "lower",
        unit: "x",
        description: "Market capitalisation divided by free cash flow.",
      },
      {
        key: "fcfYield",
        label: "FCF yield",
        weight: 0.1,
        direction: "higher",
        unit: "pct",
        description: "Free cash flow divided by market capitalisation.",
      },
      {
        key: "earningsYield",
        label: "Earnings yield",
        weight: 0.06,
        direction: "higher",
        unit: "pct",
        description: "Trailing EPS divided by price.",
      },
      {
        key: "peg",
        label: "PEG",
        weight: 0.08,
        direction: "lower",
        unit: "x",
        description: "Forward P/E divided by consensus EPS growth.",
      },
      {
        key: "dividendYield",
        label: "Dividend yield",
        weight: 0.04,
        direction: "higher",
        unit: "pct",
        description: "Dividend per share divided by price.",
      },
      {
        key: "historicalValuation",
        label: "Historical valuation",
        weight: 0.05,
        direction: "higher",
        unit: "score",
        description:
          "Cheapness percentile versus the company's own five-year P/E history.",
      },
      {
        key: "buybackYield",
        label: "Buyback yield",
        weight: 0.05,
        direction: "higher",
        unit: "pct",
        description: "Buybacks divided by market capitalisation.",
      },
    ],
  },
  {
    key: "momentum",
    label: "Momentum",
    shortLabel: "M",
    weight: 0.2,
    description: "Price trends, relative strength and earnings revisions.",
    parameters: [
      {
        key: "return1m",
        label: "1M return",
        weight: 0.06,
        direction: "higher",
        unit: "pct",
        description: "One-month price return.",
      },
      {
        key: "return3m",
        label: "3M return",
        weight: 0.08,
        direction: "higher",
        unit: "pct",
        description: "Three-month price return.",
      },
      {
        key: "return6m",
        label: "6M return",
        weight: 0.08,
        direction: "higher",
        unit: "pct",
        description: "Six-month price return.",
      },
      {
        key: "return12m",
        label: "12M return",
        weight: 0.1,
        direction: "higher",
        unit: "pct",
        description: "Twelve-month price return.",
      },
      {
        key: "momentum12m1m",
        label: "12M - 1M momentum",
        weight: 0.12,
        direction: "higher",
        unit: "pct",
        description: "Twelve-month return excluding the latest month.",
      },
      {
        key: "relativeStrength",
        label: "Relative strength",
        weight: 0.12,
        direction: "higher",
        unit: "pct",
        description: "Twelve-month return less the S&P 500 return.",
      },
      {
        key: "priceVs50dma",
        label: "Price vs 50 DMA",
        weight: 0.08,
        direction: "higher",
        unit: "pct",
        description: "Latest price relative to the 50-day moving average.",
      },
      {
        key: "priceVs200dma",
        label: "Price vs 200 DMA",
        weight: 0.08,
        direction: "higher",
        unit: "pct",
        description: "Latest price relative to the 200-day moving average.",
      },
      {
        key: "epsRevision30d",
        label: "EPS revision 30D",
        weight: 0.1,
        direction: "higher",
        unit: "pct",
        description: "Change in current-year consensus EPS over 30 days.",
      },
      {
        key: "epsRevision90d",
        label: "EPS revision 90D",
        weight: 0.08,
        direction: "higher",
        unit: "pct",
        description: "Change in current-year consensus EPS over 90 days.",
      },
      {
        key: "epsSurprise",
        label: "EPS surprise",
        weight: 0.05,
        direction: "higher",
        unit: "pct",
        description:
          "Average reported EPS versus consensus estimate over the recent quarters.",
      },
      {
        key: "earningsMomentum",
        label: "Earnings momentum",
        weight: 0.05,
        direction: "higher",
        unit: "pct",
        description: "Forward consensus EPS growth.",
      },
    ],
  },
  {
    key: "lowVolatility",
    label: "Low volatility",
    shortLabel: "L",
    weight: 0.15,
    description: "Downside risk, price stability and consistency.",
    parameters: [
      {
        key: "vol30d",
        label: "30D volatility",
        weight: 0.06,
        direction: "lower",
        unit: "pct",
        description: "Annualised 30-day price volatility.",
      },
      {
        key: "vol90d",
        label: "90D volatility",
        weight: 0.08,
        direction: "lower",
        unit: "pct",
        description: "Annualised 90-day price volatility.",
      },
      {
        key: "vol252d",
        label: "252D volatility",
        weight: 0.12,
        direction: "lower",
        unit: "pct",
        description: "Annualised 252-day price volatility.",
      },
      {
        key: "beta1y",
        label: "Beta 1Y",
        weight: 0.1,
        direction: "lower",
        unit: "num",
        description: "One-year beta versus the S&P 500.",
      },
      {
        key: "beta2y",
        label: "Beta 2Y",
        weight: 0.1,
        direction: "lower",
        unit: "num",
        description: "Two-year beta versus the S&P 500.",
      },
      {
        key: "downsideDeviation",
        label: "Downside deviation",
        weight: 0.14,
        direction: "lower",
        unit: "pct",
        description: "Annualised volatility of negative daily returns.",
      },
      {
        key: "maxDrawdown",
        label: "Max drawdown",
        weight: 0.12,
        direction: "higher",
        unit: "pct",
        description: "Worst peak-to-trough decline over the last year.",
      },
      {
        key: "sortino",
        label: "Sortino ratio",
        weight: 0.08,
        direction: "higher",
        unit: "num",
        description: "Excess return divided by downside deviation.",
      },
      {
        key: "sharpe",
        label: "Sharpe ratio",
        weight: 0.08,
        direction: "higher",
        unit: "num",
        description: "Excess return divided by total volatility.",
      },
      {
        key: "var95",
        label: "95% VaR",
        weight: 0.06,
        direction: "higher",
        unit: "pct",
        description: "Historical 95% one-day value at risk.",
      },
      {
        key: "negativeFrequency",
        label: "Negative days",
        weight: 0.04,
        direction: "lower",
        unit: "pct",
        description: "Share of trading days with a negative return.",
      },
      {
        key: "recoveryPeriod",
        label: "Recovery period",
        weight: 0.02,
        direction: "lower",
        unit: "days",
        description: "Longest run below a prior peak over the last year.",
      },
    ],
  },
];

function quantile(values: number[], q: number): number {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(
    sorted.length - 1,
    Math.max(0, Math.floor((sorted.length - 1) * q)),
  );
  return sorted[index];
}

function factorScore(
  factor: FactorConfig,
  scores: Record<string, ParameterResult>,
): number | null {
  const available = factor.parameters.filter(
    (parameter) => scores[parameter.key]?.score != null,
  );
  if (available.length < 2) return null;
  const totalWeight = available.reduce(
    (sum, parameter) => sum + parameter.weight,
    0,
  );
  const weighted = available.reduce(
    (sum, parameter) =>
      sum + (scores[parameter.key].score as number) * parameter.weight,
    0,
  );
  return totalWeight > 0 ? Math.round(weighted / totalWeight) : null;
}

function band(score: number | null): string {
  if (score == null) return "Insufficient data";
  if (score >= 80) return "Top band";
  if (score >= 65) return "Upper band";
  if (score >= 50) return "Middle band";
  if (score >= 35) return "Lower band";
  return "Bottom band";
}

export type ScreenerRawEntry = {
  ticker: string;
  name: string;
  sector: string;
  groupId: string;
  groupName: string;
  marketCap: number | null;
  price: number;
  asOf: string;
  raw: Record<string, number | null>;
};

type Population = { sorted: number[]; low: number; high: number };

function buildPopulation(values: number[]): Population {
  const sorted = [...values].sort((a, b) => a - b);
  if (sorted.length < 5) {
    return { sorted, low: sorted[0] ?? 0, high: sorted.at(-1) ?? 0 };
  }
  const low = quantile(sorted, 0.02);
  const high = quantile(sorted, 0.98);
  return {
    sorted: sorted.map((value) => Math.min(high, Math.max(low, value))),
    low,
    high,
  };
}

function percentileScoreSorted(
  sorted: number[],
  value: number,
  direction: "higher" | "lower",
): number {
  let low = 0;
  let high = sorted.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (sorted[mid] <= value) low = mid + 1;
    else high = mid;
  }
  const percentile = sorted.length
    ? Math.round((low / sorted.length) * 100)
    : 50;
  return direction === "higher" ? percentile : 100 - percentile;
}

/** Scores pre-computed raw entries so thousands of rows share one percentile pass. */
export function scoreScreenerEntries(
  entries: ScreenerRawEntry[],
): ScreenerRow[] {
  const parameterKeys = [
    ...new Set(
      FACTOR_CONFIG.flatMap((factor) =>
        factor.parameters.map((parameter) => parameter.key),
      ),
    ),
  ];
  const globalPopulations = new Map<string, Population>();
  const groupPopulations = new Map<string, Population>();
  const groupIds = [...new Set(entries.map((entry) => entry.groupId))];

  for (const key of parameterKeys) {
    globalPopulations.set(
      key,
      buildPopulation(entries.map((entry) => entry.raw[key]).filter(finite)),
    );
    for (const groupId of groupIds) {
      const values = entries
        .filter((entry) => entry.groupId === groupId)
        .map((entry) => entry.raw[key])
        .filter(finite);
      if (values.length >= 8) {
        groupPopulations.set(`${groupId}|${key}`, buildPopulation(values));
      }
    }
  }

  const rows: ScreenerRow[] = entries.map((entry) => {
    const factors = {} as Record<FactorKey, FactorResult>;
    for (const factor of FACTOR_CONFIG) {
      const parameters: Record<string, ParameterResult> = {};
      for (const parameter of factor.parameters) {
        const value = entry.raw[parameter.key] ?? null;
        const population =
          groupPopulations.get(`${entry.groupId}|${parameter.key}`) ??
          globalPopulations.get(parameter.key);
        parameters[parameter.key] = {
          value,
          score:
            finite(value) && population
              ? percentileScoreSorted(
                  population.sorted,
                  Math.min(population.high, Math.max(population.low, value)),
                  parameter.direction,
                )
              : null,
        };
      }
      factors[factor.key] = {
        score: factorScore(factor, parameters),
        parameters,
      };
    }

    const compositeParts = FACTOR_CONFIG.map((factor) => ({
      weight: factor.weight,
      score: factors[factor.key].score,
    })).filter((part) => part.score != null);
    // A composite needs at least three factors so price-only names cannot
    // outrank fully-covered companies on momentum alone.
    const totalWeight = compositeParts.reduce(
      (sum, part) => sum + part.weight,
      0,
    );
    const composite =
      compositeParts.length >= 3 && totalWeight > 0
        ? Math.round(
            compositeParts.reduce(
              (sum, part) => sum + (part.score as number) * part.weight,
              0,
            ) / totalWeight,
          )
        : null;
    const parameterCount = FACTOR_CONFIG.reduce(
      (sum, factor) => sum + factor.parameters.length,
      0,
    );
    const availableCount = FACTOR_CONFIG.reduce(
      (sum, factor) =>
        sum +
        factor.parameters.filter(
          (parameter) =>
            factors[factor.key].parameters[parameter.key]?.value != null,
        ).length,
      0,
    );
    const raw = entry.raw;

    return {
      rank: 0,
      ticker: entry.ticker,
      name: entry.name,
      sector: entry.sector,
      group: entry.groupName,
      marketCap: entry.marketCap,
      price: entry.price,
      asOf: entry.asOf,
      return1d: raw.return1d ?? null,
      return1w: raw.return1w ?? null,
      return1m: raw.return1m ?? null,
      return3m: raw.return3m ?? null,
      return6m: raw.return6m ?? null,
      return1y: raw.return1y ?? null,
      return3y: raw.return3y ?? null,
      return5y: raw.return5y ?? null,
      pe: raw.pe ?? null,
      pb: raw.pb ?? null,
      evEbitda: raw.evEbitda ?? null,
      peg: raw.peg ?? null,
      dividendYield: raw.dividendYield ?? null,
      roce: raw.roce ?? null,
      roe: raw.roe ?? null,
      operatingMargin: raw.ebitMargin ?? null,
      netMargin: raw.netMargin ?? null,
      fcfMargin: raw.fcfMargin ?? null,
      revenueGrowth: raw.revenueGrowthTtm ?? null,
      netDebtEbitda: raw.netDebtEbitda ?? null,
      priceVs50dma: raw.priceVs50dma ?? null,
      priceVs200dma: raw.priceVs200dma ?? null,
      historicalValuation: raw.historicalValuation ?? null,
      roicTrend: raw.roicTrend ?? null,
      assetTurnover: raw.assetTurnover ?? null,
      composite,
      factorScores: Object.fromEntries(
        FACTOR_CONFIG.map((factor) => [factor.key, factors[factor.key].score]),
      ) as Record<FactorKey, number | null>,
      v2Growth: null,
      v2Quality: null,
      v2Valuation: null,
      v2Technical: null,
      v2Composite: null,
      v2Coverage: null,
      v2Status: null,
      band: band(composite),
      coverage: Math.round((availableCount / parameterCount) * 100),
      factors,
    } satisfies ScreenerRow;
  });

  const composites = buildPopulation(
    rows.map((row) => row.composite).filter(finite),
  );
  for (const row of rows) {
    if (row.composite != null) {
      row.composite = percentileScoreSorted(
        composites.sorted,
        Math.min(composites.high, Math.max(composites.low, row.composite)),
        "higher",
      );
      row.band = band(row.composite);
    }
  }

  return rows
    .sort((a, b) => (b.composite ?? -1) - (a.composite ?? -1))
    .map((row, index) => ({ ...row, rank: index + 1 }));
}

export function screenerEntriesFromBundles(
  bundles: ScreenerBundle[],
  benchmark: RangePricePoint[],
): ScreenerRawEntry[] {
  return bundles.map((bundle) => {
    const coverage = getCoverageGroup(bundle.data.ticker);
    return {
      ticker: bundle.data.ticker,
      name: bundle.data.name,
      sector: bundle.data.sector,
      groupId: coverage?.id ?? "other",
      groupName: coverage?.name ?? bundle.data.sector,
      marketCap: bundle.data.latestPrice.marketCap,
      price: bundle.data.latestPrice.close,
      asOf: bundle.data.latestPrice.asOf,
      raw: computeRawParameters(bundle, benchmark),
    };
  });
}

export function buildScreenerRows(
  bundles: ScreenerBundle[],
  benchmark: RangePricePoint[],
): ScreenerRow[] {
  return scoreScreenerEntries(screenerEntriesFromBundles(bundles, benchmark));
}

export function formatParameterValue(
  value: number | null,
  unit: ParameterUnit,
): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  if (unit === "pct") return `${(value * 100).toFixed(1)}%`;
  if (unit === "x") return `${value.toFixed(1)}x`;
  if (unit === "days") return `${Math.round(value)}d`;
  if (unit === "score") return `${Math.round(value)}`;
  return value.toFixed(2);
}
