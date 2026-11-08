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

export type FactorKey = "growth" | "quality" | "valuation" | "momentum" | "lowVolatility";

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
  revenueGrowth: number | null;
  netDebtEbitda: number | null;
  priceVs50dma: number | null;
  priceVs200dma: number | null;
  historicalValuation: number | null;
  roicTrend: number | null;
  assetTurnover: number | null;
  composite: number | null;
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
  if (!finite(numerator) || !finite(denominator) || denominator === 0) return null;
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
    values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (values.length - 1);
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
  if (!finite(startValue) || !finite(endValue) || startValue <= 0 || endValue <= 0) {
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

function yoyGrowth(current: number | null, prior: number | null): number | null {
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

function priceOnOrAfter(points: RangePricePoint[], date: string): number | null {
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

function dayReturns(points: RangePricePoint[]): Array<{ date: string; value: number }> {
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
  return dayReturns(points).slice(-tradingDays).map((item) => item.value);
}

function annualizedVolatility(points: RangePricePoint[], tradingDays: number): number | null {
  const values = windowReturns(points, tradingDays);
  if (values.length < 10) return null;
  const sd = standardDeviation(values);
  return sd == null ? null : sd * Math.sqrt(252);
}

function annualizedReturn(points: RangePricePoint[], calendarDays: number): number | null {
  const sorted = [...points].sort((a, b) => a.t - b.t);
  if (sorted.length < 2) return null;
  const latest = sorted[sorted.length - 1];
  const target = latest.t - calendarDays * 86_400;
  const start = sorted.find((point) => point.t >= target) ?? sorted[0];
  if (start.c <= 0) return null;
  return (latest.c / start.c) ** (365 / calendarDays) - 1;
}

function returnOverCalendarDays(points: RangePricePoint[], calendarDays: number): number | null {
  const sorted = [...points].sort((a, b) => a.t - b.t);
  if (sorted.length < 2) return null;
  const latest = sorted[sorted.length - 1];
  const target = latest.t - calendarDays * 86_400;
  const start = sorted.find((point) => point.t >= target) ?? sorted[0];
  if (start.c <= 0) return null;
  return latest.c / start.c - 1;
}

function movingAverage(points: RangePricePoint[], tradingDays: number): number | null {
  const sorted = [...points].sort((a, b) => a.t - b.t).slice(-tradingDays);
  if (sorted.length < Math.min(20, tradingDays)) return null;
  return sorted.reduce((sum, point) => sum + point.c, 0) / sorted.length;
}

function beta(
  points: RangePricePoint[],
  benchmark: RangePricePoint[],
  tradingDays: number,
): number | null {
  const stock = new Map(dayReturns(points).map((item) => [item.date, item.value]));
  const index = new Map(dayReturns(benchmark).map((item) => [item.date, item.value]));
  const dates = [...stock.keys()]
    .filter((date) => index.has(date))
    .sort()
    .slice(-tradingDays);
  if (dates.length < 30) return null;
  const stockReturns = dates.map((date) => stock.get(date) as number);
  const indexReturns = dates.map((date) => index.get(date) as number);
  const stockMean = stockReturns.reduce((sum, value) => sum + value, 0) / stockReturns.length;
  const indexMean = indexReturns.reduce((sum, value) => sum + value, 0) / indexReturns.length;
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
      if (!finite(row.epsActual) || !finite(row.epsEstimate) || row.epsEstimate === 0) {
        return null;
      }
      return (row.epsActual - row.epsEstimate) / Math.abs(row.epsEstimate);
    })
    .filter(finite);
  return average(surprises);
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
  const ev = marketCap != null && debt != null ? marketCap + debt - (cash ?? 0) : marketCap;
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
  const currentFy = consensus?.estimates.find(
    (estimate) => estimate.period === "Current fiscal year",
  );
  const nextFy = consensus?.estimates.find(
    (estimate) => estimate.period === "Next fiscal year",
  );
  const forwardEps = currentFy?.epsAvg ?? null;
  const price = data.latestPrice.close;
  const forwardPeValue = finite(forwardEps) && forwardEps > 0 ? price / forwardEps : null;
  const forwardGrowth = currentFy?.epsGrowth ?? nextFy?.epsGrowth ?? null;
  const roic = data.metrics.roic;
  const roce = safeDiv(operatingIncome, (equity ?? 0) + (debt ?? 0) - (cash ?? 0));
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

  const sortedPrices = [...prices].sort((a, b) => a.t - b.t);
  const lastPrice = sortedPrices.at(-1)?.c ?? null;
  const previousPrice = sortedPrices.at(-2)?.c ?? null;

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
      ? (annual.at(-1)?.roic ?? null) != null && (annual.at(-4)?.roic ?? null) != null
        ? (annual.at(-1)!.roic as number) - (annual.at(-4)!.roic as number)
        : null
      : null;

  const latestInvested = latest
    ? (latest.totalEquity ?? 0) + (latest.totalDebt ?? 0) - (latest.cashAndInvestments ?? 0)
    : null;
  const old = annual.at(-4);
  const oldInvested = old
    ? (old.totalEquity ?? 0) + (old.totalDebt ?? 0) - (old.cashAndInvestments ?? 0)
    : null;
  const incrementalRoic =
    latest && old && latestInvested != null && oldInvested != null && latestInvested - oldInvested > 0
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
        ? (data.metrics.revenueGrowthTtm ?? 0) - (data.metrics.revenueGrowthLatestQ ?? 0)
        : null),
    epsAcceleration: growthAcceleration(quarters, "epsDiluted"),
    forwardRevenueGrowth1: currentFy?.revenueGrowth ?? null,
    forwardRevenueGrowth2: nextFy?.revenueGrowth ?? null,
    forwardEpsGrowth1: currentFy?.epsGrowth ?? null,
    forwardEpsGrowth2: nextFy?.epsGrowth ?? null,

    roe: data.metrics.roe,
    roce,
    roic,
    grossMargin: data.metrics.grossMargin,
    ebitdaMargin: safeDiv(ebitda, revenue),
    ebitMargin: data.metrics.operatingMargin,
    fcfMargin: data.metrics.fcfMargin,
    cfoPat: netIncome != null && netIncome > 0 ? safeDiv(cfo, netIncome) : null,
    accrualRatio:
      averageAssets != null && averageAssets > 0 && netIncome != null && cfo != null
        ? (netIncome - cfo) / averageAssets
        : null,
    debtEquity: safeDiv(debt, equity),
    interestCoverage:
      interest != null && Math.abs(interest) > 0 ? safeDiv(operatingIncome, Math.abs(interest)) : null,
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
    evEbit: ebitda != null && ev != null && operatingIncome != null && operatingIncome > 0
      ? ev / operatingIncome
      : null,
    evSales: data.metrics.evSales,
    pb: safeDiv(marketCap, equity),
    pfcf: data.metrics.pfcf,
    fcfYield: data.metrics.fcfYield,
    earningsYield: data.metrics.pe != null && data.metrics.pe > 0 ? 1 / data.metrics.pe : null,
    peg: forwardPeValue != null && forwardGrowth != null && forwardGrowth > 0
      ? forwardPeValue / (forwardGrowth * 100)
      : null,
    dividendYield: data.latestPrice.dividendYield,
    historicalValuation: historicalValuationPercentile(data, pricesMax),
    buybackYield:
      finite(buybacks) && marketCap != null && marketCap > 0 ? buybacks / marketCap : null,

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
      returnOverCalendarDays(prices, 365) != null &&
      returnOverCalendarDays(prices, 30) != null
        ? (returnOverCalendarDays(prices, 365) as number) -
          (returnOverCalendarDays(prices, 30) as number)
        : null,
    relativeStrength: (() => {
      const stock = returnOverCalendarDays(prices, 365);
      const bench = returnOverCalendarDays(benchmark, 365);
      return stock != null && bench != null ? stock - bench : null;
    })(),
    priceVs50dma: (() => {
      const average = movingAverage(prices, 50);
      return average && average > 0 ? price / average - 1 : null;
    })(),
    priceVs200dma: (() => {
      const average = movingAverage(prices, 200);
      return average && average > 0 ? price / average - 1 : null;
    })(),
    epsRevision30d: consensus?.revisions?.eps30d ?? null,
    epsRevision90d: consensus?.revisions?.eps90d ?? null,
    epsSurprise: epsSurprise(consensus),
    revenueSurprise: null,
    earningsMomentum: forwardGrowth,

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

export const FACTOR_CONFIG: FactorConfig[] = [
  {
    key: "growth",
    label: "Growth",
    shortLabel: "G",
    weight: 0.2,
    description: "Revenue, earnings and cash-flow expansion.",
    parameters: [
      { key: "revenueCagr3y", label: "Revenue CAGR 3Y", weight: 0.1, direction: "higher", unit: "pct", description: "Three-year compound annual revenue growth." },
      { key: "revenueCagr5y", label: "Revenue CAGR 5Y", weight: 0.06, direction: "higher", unit: "pct", description: "Five-year compound annual revenue growth." },
      { key: "ebitdaCagr3y", label: "EBITDA CAGR 3Y", weight: 0.06, direction: "higher", unit: "pct", description: "Three-year compound annual EBITDA growth." },
      { key: "ebitCagr3y", label: "EBIT CAGR 3Y", weight: 0.06, direction: "higher", unit: "pct", description: "Three-year compound annual operating-income growth." },
      { key: "epsCagr3y", label: "EPS CAGR 3Y", weight: 0.12, direction: "higher", unit: "pct", description: "Three-year compound annual diluted EPS growth." },
      { key: "epsCagr5y", label: "EPS CAGR 5Y", weight: 0.06, direction: "higher", unit: "pct", description: "Five-year compound annual diluted EPS growth." },
      { key: "patCagr3y", label: "PAT CAGR 3Y", weight: 0.06, direction: "higher", unit: "pct", description: "Three-year compound annual net-profit growth." },
      { key: "fcfCagr3y", label: "FCF CAGR 3Y", weight: 0.08, direction: "higher", unit: "pct", description: "Three-year compound annual free-cash-flow growth." },
      { key: "revenueAcceleration", label: "Sales acceleration", weight: 0.12, direction: "higher", unit: "pct", description: "Change in year-over-year revenue growth, latest quarter versus prior quarter." },
      { key: "epsAcceleration", label: "EPS acceleration", weight: 0.12, direction: "higher", unit: "pct", description: "Change in year-over-year EPS growth, latest quarter versus prior quarter." },
      { key: "forwardRevenueGrowth1", label: "Forward revenue growth FY1", weight: 0.04, direction: "higher", unit: "pct", description: "Third-party consensus revenue growth for the current fiscal year." },
      { key: "forwardRevenueGrowth2", label: "Forward revenue growth FY2", weight: 0.03, direction: "higher", unit: "pct", description: "Third-party consensus revenue growth for the next fiscal year." },
      { key: "forwardEpsGrowth1", label: "Forward EPS growth FY1", weight: 0.05, direction: "higher", unit: "pct", description: "Third-party consensus EPS growth for the current fiscal year." },
      { key: "forwardEpsGrowth2", label: "Forward EPS growth FY2", weight: 0.04, direction: "higher", unit: "pct", description: "Third-party consensus EPS growth for the next fiscal year." },
    ],
  },
  {
    key: "quality",
    label: "Quality",
    shortLabel: "Q",
    weight: 0.25,
    description: "Profitability, efficiency, cash conversion and financial strength.",
    parameters: [
      { key: "roe", label: "ROE", weight: 0.08, direction: "higher", unit: "pct", description: "Net income divided by shareholders' equity." },
      { key: "roce", label: "ROCE", weight: 0.07, direction: "higher", unit: "pct", description: "Operating income divided by capital employed." },
      { key: "roic", label: "ROIC", weight: 0.1, direction: "higher", unit: "pct", description: "After-tax operating income divided by invested capital." },
      { key: "grossMargin", label: "Gross margin", weight: 0.04, direction: "higher", unit: "pct", description: "Gross profit divided by revenue." },
      { key: "ebitdaMargin", label: "EBITDA margin", weight: 0.05, direction: "higher", unit: "pct", description: "EBITDA divided by revenue." },
      { key: "ebitMargin", label: "EBIT margin", weight: 0.05, direction: "higher", unit: "pct", description: "Operating income divided by revenue." },
      { key: "fcfMargin", label: "FCF margin", weight: 0.07, direction: "higher", unit: "pct", description: "Free cash flow divided by revenue." },
      { key: "cfoPat", label: "CFO / PAT", weight: 0.1, direction: "higher", unit: "x", description: "Operating cash flow divided by net profit." },
      { key: "accrualRatio", label: "Accrual ratio", weight: 0.06, direction: "lower", unit: "pct", description: "Net income less operating cash flow, divided by average assets." },
      { key: "debtEquity", label: "Debt / equity", weight: 0.06, direction: "lower", unit: "x", description: "Total debt divided by shareholders' equity." },
      { key: "interestCoverage", label: "Interest coverage", weight: 0.06, direction: "higher", unit: "x", description: "Operating income divided by interest expense." },
      { key: "netDebtEbitda", label: "Net debt / EBITDA", weight: 0.06, direction: "lower", unit: "x", description: "Net debt divided by EBITDA." },
      { key: "assetTurnover", label: "Asset turnover", weight: 0.04, direction: "higher", unit: "x", description: "Revenue divided by average total assets." },
      { key: "roicTrend", label: "ROIC trend", weight: 0.05, direction: "higher", unit: "pct", description: "Change in ROIC over the last three fiscal years." },
      { key: "roicStability", label: "ROIC stability", weight: 0.04, direction: "lower", unit: "num", description: "Standard deviation of annual ROIC over five years." },
      { key: "marginStability", label: "Margin stability", weight: 0.04, direction: "lower", unit: "num", description: "Standard deviation of annual operating margins over five years." },
      { key: "incrementalRoic", label: "Incremental ROIC", weight: 0.03, direction: "higher", unit: "pct", description: "Change in after-tax operating profit divided by change in invested capital." },
      { key: "roicWaccSpread", label: "ROIC - WACC", weight: 0.04, direction: "higher", unit: "pct", description: "ROIC less an estimated weighted average cost of capital." },
    ],
  },
  {
    key: "valuation",
    label: "Valuation",
    shortLabel: "V",
    weight: 0.2,
    description: "Relative and absolute stock attractiveness.",
    parameters: [
      { key: "pe", label: "P/E", weight: 0.1, direction: "lower", unit: "x", description: "Market capitalisation divided by trailing net income." },
      { key: "forwardPe", label: "Forward P/E", weight: 0.1, direction: "lower", unit: "x", description: "Price divided by current-year consensus EPS." },
      { key: "evEbitda", label: "EV/EBITDA", weight: 0.1, direction: "lower", unit: "x", description: "Enterprise value divided by EBITDA." },
      { key: "evEbit", label: "EV/EBIT", weight: 0.06, direction: "lower", unit: "x", description: "Enterprise value divided by operating income." },
      { key: "evSales", label: "EV/Sales", weight: 0.05, direction: "lower", unit: "x", description: "Enterprise value divided by revenue." },
      { key: "pb", label: "P/B", weight: 0.08, direction: "lower", unit: "x", description: "Market capitalisation divided by book equity." },
      { key: "pfcf", label: "P/FCF", weight: 0.08, direction: "lower", unit: "x", description: "Market capitalisation divided by free cash flow." },
      { key: "fcfYield", label: "FCF yield", weight: 0.1, direction: "higher", unit: "pct", description: "Free cash flow divided by market capitalisation." },
      { key: "earningsYield", label: "Earnings yield", weight: 0.06, direction: "higher", unit: "pct", description: "Trailing EPS divided by price." },
      { key: "peg", label: "PEG", weight: 0.08, direction: "lower", unit: "x", description: "Forward P/E divided by consensus EPS growth." },
      { key: "dividendYield", label: "Dividend yield", weight: 0.04, direction: "higher", unit: "pct", description: "Dividend per share divided by price." },
      { key: "historicalValuation", label: "Historical valuation", weight: 0.05, direction: "higher", unit: "score", description: "Cheapness percentile versus the company's own five-year P/E history." },
      { key: "buybackYield", label: "Buyback yield", weight: 0.05, direction: "higher", unit: "pct", description: "Buybacks divided by market capitalisation." },
    ],
  },
  {
    key: "momentum",
    label: "Momentum",
    shortLabel: "M",
    weight: 0.2,
    description: "Price trends, relative strength and earnings revisions.",
    parameters: [
      { key: "return1m", label: "1M return", weight: 0.06, direction: "higher", unit: "pct", description: "One-month price return." },
      { key: "return3m", label: "3M return", weight: 0.08, direction: "higher", unit: "pct", description: "Three-month price return." },
      { key: "return6m", label: "6M return", weight: 0.08, direction: "higher", unit: "pct", description: "Six-month price return." },
      { key: "return12m", label: "12M return", weight: 0.1, direction: "higher", unit: "pct", description: "Twelve-month price return." },
      { key: "momentum12m1m", label: "12M - 1M momentum", weight: 0.12, direction: "higher", unit: "pct", description: "Twelve-month return excluding the latest month." },
      { key: "relativeStrength", label: "Relative strength", weight: 0.12, direction: "higher", unit: "pct", description: "Twelve-month return less the S&P 500 return." },
      { key: "priceVs50dma", label: "Price vs 50 DMA", weight: 0.08, direction: "higher", unit: "pct", description: "Latest price relative to the 50-day moving average." },
      { key: "priceVs200dma", label: "Price vs 200 DMA", weight: 0.08, direction: "higher", unit: "pct", description: "Latest price relative to the 200-day moving average." },
      { key: "epsRevision30d", label: "EPS revision 30D", weight: 0.1, direction: "higher", unit: "pct", description: "Change in current-year consensus EPS over 30 days." },
      { key: "epsRevision90d", label: "EPS revision 90D", weight: 0.08, direction: "higher", unit: "pct", description: "Change in current-year consensus EPS over 90 days." },
      { key: "epsSurprise", label: "EPS surprise", weight: 0.05, direction: "higher", unit: "pct", description: "Average reported EPS versus consensus estimate over the recent quarters." },
      { key: "earningsMomentum", label: "Earnings momentum", weight: 0.05, direction: "higher", unit: "pct", description: "Forward consensus EPS growth." },
    ],
  },
  {
    key: "lowVolatility",
    label: "Low Volatility",
    shortLabel: "L",
    weight: 0.15,
    description: "Downside risk, price stability and consistency.",
    parameters: [
      { key: "vol30d", label: "30D volatility", weight: 0.06, direction: "lower", unit: "pct", description: "Annualised 30-day price volatility." },
      { key: "vol90d", label: "90D volatility", weight: 0.08, direction: "lower", unit: "pct", description: "Annualised 90-day price volatility." },
      { key: "vol252d", label: "252D volatility", weight: 0.12, direction: "lower", unit: "pct", description: "Annualised 252-day price volatility." },
      { key: "beta1y", label: "Beta 1Y", weight: 0.1, direction: "lower", unit: "num", description: "One-year beta versus the S&P 500." },
      { key: "beta2y", label: "Beta 2Y", weight: 0.1, direction: "lower", unit: "num", description: "Two-year beta versus the S&P 500." },
      { key: "downsideDeviation", label: "Downside deviation", weight: 0.14, direction: "lower", unit: "pct", description: "Annualised volatility of negative daily returns." },
      { key: "maxDrawdown", label: "Max drawdown", weight: 0.12, direction: "higher", unit: "pct", description: "Worst peak-to-trough decline over the last year." },
      { key: "sortino", label: "Sortino ratio", weight: 0.08, direction: "higher", unit: "num", description: "Excess return divided by downside deviation." },
      { key: "sharpe", label: "Sharpe ratio", weight: 0.08, direction: "higher", unit: "num", description: "Excess return divided by total volatility." },
      { key: "var95", label: "95% VaR", weight: 0.06, direction: "higher", unit: "pct", description: "Historical 95% one-day value at risk." },
      { key: "negativeFrequency", label: "Negative days", weight: 0.04, direction: "lower", unit: "pct", description: "Share of trading days with a negative return." },
      { key: "recoveryPeriod", label: "Recovery period", weight: 0.02, direction: "lower", unit: "days", description: "Longest run below a prior peak over the last year." },
    ],
  },
];

function quantile(values: number[], q: number): number {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(sorted.length - 1, Math.max(0, Math.floor((sorted.length - 1) * q)));
  return sorted[index];
}

function winsorized(values: number[]): number[] {
  if (values.length < 5) return values;
  const low = quantile(values, 0.02);
  const high = quantile(values, 0.98);
  return values.map((value) => Math.min(high, Math.max(low, value)));
}

function percentileScore(
  population: number[],
  value: number,
  direction: "higher" | "lower",
): number {
  const sorted = [...population].sort((a, b) => a - b);
  let low = 0;
  let high = sorted.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (sorted[mid] <= value) low = mid + 1;
    else high = mid;
  }
  const percentile = sorted.length ? Math.round((low / sorted.length) * 100) : 50;
  return direction === "higher" ? percentile : 100 - percentile;
}

function factorScore(
  factor: FactorConfig,
  scores: Record<string, ParameterResult>,
): number | null {
  const available = factor.parameters.filter(
    (parameter) => scores[parameter.key]?.score != null,
  );
  if (available.length < 2) return null;
  const totalWeight = available.reduce((sum, parameter) => sum + parameter.weight, 0);
  const weighted = available.reduce(
    (sum, parameter) => sum + (scores[parameter.key].score as number) * parameter.weight,
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

export function buildScreenerRows(
  bundles: ScreenerBundle[],
  benchmark: RangePricePoint[],
): ScreenerRow[] {
  const raw = bundles.map((bundle) => ({
    bundle,
    group: getCoverageGroup(bundle.data.ticker)?.id ?? "other",
    values: computeRawParameters(bundle, benchmark),
  }));

  const rows: ScreenerRow[] = raw.map(({ bundle, group, values }) => {
    const factors = {} as Record<FactorKey, FactorResult>;
    for (const factor of FACTOR_CONFIG) {
      const parameters: Record<string, ParameterResult> = {};
      for (const parameter of factor.parameters) {
        const value = values[parameter.key] ?? null;
        let population = raw
          .filter((item) => item.group === group)
          .map((item) => item.values[parameter.key])
          .filter(finite);
        if (population.length < 8) {
          population = raw
            .map((item) => item.values[parameter.key])
            .filter(finite);
        }
        if (!finite(value) || population.length < 3) {
          parameters[parameter.key] = { value, score: null };
          continue;
        }
        const clipped = winsorized(population);
        const clippedValue = Math.min(
          quantile(population, 0.98),
          Math.max(quantile(population, 0.02), value),
        );
        parameters[parameter.key] = {
          value,
          score: percentileScore(clipped, clippedValue, parameter.direction),
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
    const totalWeight = compositeParts.reduce((sum, part) => sum + part.weight, 0);
    const composite =
      totalWeight > 0
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
          (parameter) => factors[factor.key].parameters[parameter.key]?.value != null,
        ).length,
      0,
    );

    return {
      rank: 0,
      ticker: bundle.data.ticker,
      name: bundle.data.name,
      sector: bundle.data.sector,
      group: getCoverageGroup(bundle.data.ticker)?.name ?? bundle.data.sector,
      marketCap: bundle.data.latestPrice.marketCap,
      price: bundle.data.latestPrice.close,
      asOf: bundle.data.latestPrice.asOf,
      return1d: values.return1d ?? null,
      return1w: values.return1w ?? null,
      return1m: values.return1m ?? null,
      return3m: values.return3m ?? null,
      return6m: values.return6m ?? null,
      return1y: bundle.data.metrics.return1y,
      return3y: values.return3y ?? null,
      return5y: values.return5y ?? null,
      pe: bundle.data.metrics.pe,
      pb: safeDiv(bundle.data.latestPrice.marketCap, ttmOrAnnual(bundle.data, "totalEquity")),
      evEbitda: bundle.data.metrics.evEbitda,
      peg: values.peg ?? null,
      dividendYield: bundle.data.latestPrice.dividendYield,
      roce: values.roce,
      roe: bundle.data.metrics.roe,
      operatingMargin: bundle.data.metrics.operatingMargin,
      netMargin: bundle.data.metrics.netMargin,
      revenueGrowth: bundle.data.metrics.revenueGrowthTtm,
      netDebtEbitda: bundle.data.metrics.netDebtToEbitda,
      priceVs50dma: values.priceVs50dma ?? null,
      priceVs200dma: values.priceVs200dma ?? null,
      historicalValuation: values.historicalValuation ?? null,
      roicTrend: values.roicTrend ?? null,
      assetTurnover: values.assetTurnover ?? null,
      composite,
      band: band(composite),
      coverage: Math.round((availableCount / parameterCount) * 100),
      factors,
    } satisfies ScreenerRow;
  });

  const rawComposites = rows
    .map((row) => row.composite)
    .filter(finite);
  for (const row of rows) {
    if (row.composite != null) {
      row.composite = percentileScore(rawComposites, row.composite, "higher");
      row.band = band(row.composite);
    }
  }

  return rows
    .sort((a, b) => (b.composite ?? -1) - (a.composite ?? -1))
    .map((row, index) => ({ ...row, rank: index + 1 }));
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
