import type {
  Consensus,
  FinancialRow,
  RangePricePoint,
  SegmentMix,
  TickerData,
  UniverseEntry,
} from "./schemas";

export type FactorScores = {
  growth: number;
  profitability: number;
  cash: number;
  balance: number;
  valuation: number;
};

export type ChartPoint = {
  label: string;
  value: number | null;
  secondary?: number | null;
};

export type PriceSeriesPoint = {
  time: number;
  value: number;
};

function finite(value: number | null | undefined): value is number {
  return value != null && Number.isFinite(value);
}

/** Percent of values at or below `value`, on a 0–100 scale. */
export function percentileRank(values: number[], value: number): number {
  if (!values.length || !Number.isFinite(value)) return 50;
  const sorted = [...values].sort((a, b) => a - b);
  let low = 0;
  let high = sorted.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (sorted[mid] <= value) low = mid + 1;
    else high = mid;
  }
  return Math.round((low / sorted.length) * 100);
}

function average(values: Array<number | null>): number {
  const present = values.filter(finite);
  if (!present.length) return 50;
  return Math.round(present.reduce((sum, value) => sum + value, 0) / present.length);
}

function metricValues(
  entries: UniverseEntry[],
  pick: (entry: UniverseEntry) => number | null | undefined,
): number[] {
  return entries.map(pick).filter(finite);
}

export function buildFactorScores(
  entries: UniverseEntry[],
  ticker: string,
): FactorScores {
  const entry = entries.find((item) => item.ticker === ticker);
  const growthValues = metricValues(entries, (item) => item.revenueGrowthTtm);
  const marginValues = metricValues(entries, (item) => item.operatingMargin);
  const evValues = metricValues(entries, (item) => item.evEbitda);
  const peValues = metricValues(entries, (item) => item.pe);

  if (!entry) {
    return { growth: 50, profitability: 50, cash: 50, balance: 50, valuation: 50 };
  }

  const growth = percentileRank(growthValues, entry.revenueGrowthTtm ?? 0);
  const profitability = percentileRank(marginValues, entry.operatingMargin ?? 0);
  const valuation = average([
    percentileRank(evValues.map((value) => -value), -(entry.evEbitda ?? 0)),
    percentileRank(peValues.map((value) => -value), -(entry.pe ?? 0)),
  ]);

  return {
    growth,
    profitability,
    cash: profitability,
    balance: profitability,
    valuation,
  };
}

/** Richer factor scores using the full processed dataset (all 229 names). */
export function buildFullFactorScores(
  companies: TickerData[],
  ticker: string,
): FactorScores {
  const target = companies.find((company) => company.ticker === ticker);
  if (!target) {
    return { growth: 50, profitability: 50, cash: 50, balance: 50, valuation: 50 };
  }

  const growthValues = companies
    .map((company) => company.metrics.revenueGrowthTtm)
    .filter(finite);
  const epsValues = companies
    .map((company) => company.metrics.epsGrowthTtm)
    .filter(finite);
  const marginValues = companies
    .map((company) => company.metrics.operatingMargin)
    .filter(finite);
  const roicValues = companies.map((company) => company.metrics.roic).filter(finite);
  const fcfValues = companies
    .map((company) => company.metrics.fcfMargin)
    .filter(finite);
  const leverageValues = companies
    .map((company) => company.metrics.netDebtToEbitda)
    .filter(finite);
  const evValues = companies
    .map((company) => company.metrics.evEbitda)
    .filter(finite);
  const peValues = companies.map((company) => company.metrics.pe).filter(finite);

  const metrics = target.metrics;
  const growth = average([
    percentileRank(growthValues, metrics.revenueGrowthTtm ?? 0),
    percentileRank(epsValues, metrics.epsGrowthTtm ?? 0),
  ]);
  const profitability = average([
    percentileRank(marginValues, metrics.operatingMargin ?? 0),
    percentileRank(roicValues, metrics.roic ?? 0),
  ]);
  const cash = percentileRank(fcfValues, metrics.fcfMargin ?? 0);
  const balance = percentileRank(
    leverageValues.map((value) => -value),
    -(metrics.netDebtToEbitda ?? 0),
  );
  const valuation = average([
    percentileRank(evValues.map((value) => -value), -(metrics.evEbitda ?? 0)),
    percentileRank(peValues.map((value) => -value), -(metrics.pe ?? 0)),
  ]);

  return { growth, profitability, cash, balance, valuation };
}

export function computeCagr(annual: FinancialRow[]): number | null {
  const years = annual
    .filter((row) => !row.ttm && finite(row.revenue) && row.revenue > 0)
    .sort((a, b) => a.fyear - b.fyear);
  if (years.length < 2) return null;
  const first = years[0];
  const last = years[years.length - 1];
  const periods = last.fyear - first.fyear;
  if (periods <= 0 || !first.revenue || !last.revenue) return null;
  return Math.pow(last.revenue / first.revenue, 1 / periods) - 1;
}

export function latestQuarterYoY(data: TickerData): number | null {
  const quarters = data.quarterly.filter((row) => !row.ttm && finite(row.revenue));
  const latest = quarters[quarters.length - 1];
  if (!latest) return null;
  const prior = quarters.find(
    (row) => row.period === latest.period && row.fyear === latest.fyear - 1,
  );
  if (!prior || !prior.revenue || !latest.revenue) return null;
  return latest.revenue / prior.revenue - 1;
}

export function quarterlyRevenueSeries(data: TickerData, limit = 10): ChartPoint[] {
  const quarters = data.quarterly.filter((row) => !row.ttm && finite(row.revenue));
  return quarters.slice(-limit).map((row) => {
    const prior = quarters.find(
      (item) => item.period === row.period && item.fyear === row.fyear - 1,
    );
    const yoy =
      prior && prior.revenue && row.revenue ? row.revenue / prior.revenue - 1 : null;
    return {
      label: `${row.period} FY${String(row.fyear).slice(-2)}`,
      value: row.revenue,
      secondary: yoy,
    };
  });
}

export function annualRevenueSeries(data: TickerData, limit = 7): ChartPoint[] {
  return data.annual
    .filter((row) => !row.ttm && finite(row.revenue))
    .sort((a, b) => a.fyear - b.fyear)
    .slice(-limit)
    .map((row) => ({
      label: `FY${String(row.fyear).slice(-2)}`,
      value: row.revenue,
      secondary: row.operatingMargin,
    }));
}

export function annualMarginSeries(data: TickerData, limit = 7): ChartPoint[] {
  return data.annual
    .filter((row) => !row.ttm)
    .sort((a, b) => a.fyear - b.fyear)
    .slice(-limit)
    .map((row) => ({
      label: `FY${String(row.fyear).slice(-2)}`,
      value: row.operatingMargin,
      secondary: row.fcfMargin,
    }));
}

export function annualCashSeries(data: TickerData, limit = 7): ChartPoint[] {
  return data.annual
    .filter((row) => !row.ttm)
    .sort((a, b) => a.fyear - b.fyear)
    .slice(-limit)
    .map((row) => ({
      label: `FY${String(row.fyear).slice(-2)}`,
      value: row.freeCashFlow,
      secondary: row.capex,
    }));
}

export function valuationSeries(data: TickerData, limit = 60): ChartPoint[] {
  const points = data.multipleHistory.filter(
    (row) => finite(row.evEbitda) || finite(row.pe),
  );
  const step = Math.max(1, Math.floor(points.length / limit));
  return points
    .filter((_, index) => index % step === 0)
    .map((row) => ({
      label: row.date,
      value: row.evEbitda,
      secondary: row.pe,
    }));
}

export function priceSeries(points: RangePricePoint[]): PriceSeriesPoint[] {
  return points
    .filter((point) => finite(point.c))
    .map((point) => ({ time: point.t, value: point.c }));
}

export function sparklinePoints(points: RangePricePoint[], width = 120, height = 36): string {
  const series = priceSeries(points);
  if (series.length < 2) return "";
  const values = series.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  return series
    .map((point, index) => {
      const x = (index / (series.length - 1)) * width;
      const y = height - ((point.value - min) / span) * height;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

export function rangePosition(
  price: number | null,
  low: number | null,
  high: number | null,
): number | null {
  if (!finite(price) || !finite(low) || !finite(high) || high <= low) return null;
  return Math.min(1, Math.max(0, (price - low) / (high - low)));
}

export function maxDrawdown(points: RangePricePoint[]): number | null {
  const series = priceSeries(points);
  if (series.length < 2) return null;
  let peak = series[0].value;
  let worst = 0;
  for (const point of series) {
    if (point.value > peak) peak = point.value;
    const drawdown = point.value / peak - 1;
    if (drawdown < worst) worst = drawdown;
  }
  return worst;
}

export function realizedVolatility(points: RangePricePoint[]): number | null {
  const series = priceSeries(points);
  if (series.length < 20) return null;
  const returns: number[] = [];
  for (let index = 1; index < series.length; index += 1) {
    returns.push(Math.log(series[index].value / series[index - 1].value));
  }
  const mean = returns.reduce((sum, value) => sum + value, 0) / returns.length;
  const variance =
    returns.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
    Math.max(1, returns.length - 1);
  return Math.sqrt(variance) * Math.sqrt(252);
}

export function consensusTotal(consensus: Consensus): number {
  if (!consensus.distribution) return 0;
  return Object.values(consensus.distribution).reduce((sum, value) => sum + value, 0);
}

export function consensusImpliedMove(
  consensus: Consensus,
  price: number | null,
): number | null {
  if (!finite(consensus.targetMean) || !finite(price) || price === 0) return null;
  return consensus.targetMean / price - 1;
}

export function segmentConcentration(segments: SegmentMix["segments"]): number | null {
  if (!segments.length) return null;
  return segments.reduce((sum, slice) => sum + slice.share ** 2, 0);
}

export function annualSeriesForMetric(
  data: TickerData,
  metric: "revenue" | "operatingMargin" | "freeCashFlow",
  limit = 7,
): ChartPoint[] {
  return data.annual
    .filter((row) => !row.ttm)
    .sort((a, b) => a.fyear - b.fyear)
    .slice(-limit)
    .map((row) => ({
      label: `FY${String(row.fyear).slice(-2)}`,
      value: row[metric],
    }));
}

export function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}
