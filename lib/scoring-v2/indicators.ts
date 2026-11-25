import type { RangePricePoint } from "@/lib/schemas";

export type MacdResult = {
  macd: number;
  signal: number;
  histogram: number;
};

function closes(points: RangePricePoint[]): number[] {
  return points.map((point) => point.c).filter((value) => Number.isFinite(value));
}

export function sma(values: number[], window: number): number | null {
  if (values.length < window || window <= 0) return null;
  const slice = values.slice(-window);
  return slice.reduce((sum, value) => sum + value, 0) / window;
}

export function emaSeries(values: number[], period: number): number[] {
  if (values.length === 0 || period <= 0) return [];
  const multiplier = 2 / (period + 1);
  const result: number[] = [];
  let previous = values[0];
  result.push(previous);
  for (const value of values.slice(1)) {
    previous = (value - previous) * multiplier + previous;
    result.push(previous);
  }
  return result;
}

export function rsi(values: number[], period = 14): number | null {
  if (values.length <= period) return null;
  let gain = 0;
  let loss = 0;
  for (let index = 1; index <= period; index += 1) {
    const change = values[index] - values[index - 1];
    if (change >= 0) gain += change;
    else loss -= change;
  }
  let avgGain = gain / period;
  let avgLoss = loss / period;
  for (let index = period + 1; index < values.length; index += 1) {
    const change = values[index] - values[index - 1];
    const currentGain = change > 0 ? change : 0;
    const currentLoss = change < 0 ? -change : 0;
    avgGain = (avgGain * (period - 1) + currentGain) / period;
    avgLoss = (avgLoss * (period - 1) + currentLoss) / period;
  }
  if (avgLoss === 0) return 100;
  const relativeStrength = avgGain / avgLoss;
  return 100 - 100 / (1 + relativeStrength);
}

export function macd(values: number[]): MacdResult | null {
  if (values.length < 35) return null;
  const ema12 = emaSeries(values, 12);
  const ema26 = emaSeries(values, 26);
  const line = values.map((_, index) => ema12[index] - ema26[index]);
  const signalSeries = emaSeries(line, 9);
  const current = line.at(-1);
  const signal = signalSeries.at(-1);
  if (current == null || signal == null) return null;
  return { macd: current, signal, histogram: current - signal };
}

export function atr(points: RangePricePoint[], period = 14): number | null {
  if (points.length <= period) return null;
  const trueRanges: number[] = [];
  for (let index = 1; index < points.length; index += 1) {
    const current = points[index];
    const previous = points[index - 1];
    trueRanges.push(
      Math.max(
        current.h - current.l,
        Math.abs(current.h - previous.c),
        Math.abs(current.l - previous.c),
      ),
    );
  }
  if (trueRanges.length < period) return null;
  let value =
    trueRanges.slice(0, period).reduce((sum, item) => sum + item, 0) / period;
  for (const range of trueRanges.slice(period)) {
    value = (value * (period - 1) + range) / period;
  }
  return value;
}

export function obvSlope(points: RangePricePoint[], window = 20): number | null {
  if (points.length < window + 1) return null;
  const obv: number[] = [0];
  for (let index = 1; index < points.length; index += 1) {
    const direction =
      points[index].c > points[index - 1].c
        ? 1
        : points[index].c < points[index - 1].c
          ? -1
          : 0;
    obv.push(obv[index - 1] + direction * points[index].v);
  }
  const slice = obv.slice(-window);
  const mean = slice.reduce((sum, value) => sum + value, 0) / slice.length;
  let numerator = 0;
  let denominator = 0;
  for (let index = 0; index < slice.length; index += 1) {
    const x = index - (slice.length - 1) / 2;
    numerator += x * (slice[index] - mean);
    denominator += x * x;
  }
  if (denominator === 0) return null;
  const averageVolume =
    points.slice(-window).reduce((sum, point) => sum + point.v, 0) / window;
  if (averageVolume <= 0) return null;
  return numerator / denominator / averageVolume;
}

export function relativeVolume(
  points: RangePricePoint[],
  window = 50,
): number | null {
  if (points.length < window + 1) return null;
  const history = points.slice(-window - 1, -1);
  const averageVolume =
    history.reduce((sum, point) => sum + point.v, 0) / history.length;
  if (averageVolume <= 0) return null;
  return points.at(-1)!.v / averageVolume;
}

export function dollarVolume(
  points: RangePricePoint[],
  window = 20,
): number | null {
  if (points.length < window) return null;
  const slice = points.slice(-window);
  return (
    slice.reduce((sum, point) => sum + point.c * point.v, 0) / slice.length
  );
}

export function returnOverCalendarDays(
  points: RangePricePoint[],
  days: number,
): number | null {
  if (points.length < 2) return null;
  const last = points.at(-1)!;
  const target = last.t - days * 86_400;
  const start = [...points].reverse().find((point) => point.t <= target);
  if (!start || start.c <= 0) return null;
  return last.c / start.c - 1;
}

export function distanceFromHigh(
  points: RangePricePoint[],
  window = 252,
): number | null {
  if (points.length < 20) return null;
  const slice = points.slice(-window);
  const high = Math.max(...slice.map((point) => point.h));
  if (high <= 0) return null;
  return points.at(-1)!.c / high - 1;
}

export function maSlope(
  values: number[],
  window: number,
  lookback = 20,
): number | null {
  const current = sma(values, window);
  if (current == null || values.length < window + lookback) return null;
  const prior = sma(values.slice(0, -lookback), window);
  if (prior == null || prior === 0) return null;
  return current / prior - 1;
}

export function closesFrom(points: RangePricePoint[]): number[] {
  return closes(points);
}

export function latestPoint(points: RangePricePoint[]): RangePricePoint | null {
  return points.at(-1) ?? null;
}

export function higherHighsLows(
  points: RangePricePoint[],
  window = 20,
): boolean | null {
  if (points.length < window * 2) return null;
  const recent = points.slice(-window);
  const prior = points.slice(-window * 2, -window);
  const recentHigh = Math.max(...recent.map((point) => point.h));
  const priorHigh = Math.max(...prior.map((point) => point.h));
  const recentLow = Math.min(...recent.map((point) => point.l));
  const priorLow = Math.min(...prior.map((point) => point.l));
  return recentHigh > priorHigh && recentLow > priorLow;
}

export function rangeContraction(
  points: RangePricePoint[],
  shortWindow = 10,
  longWindow = 50,
): number | null {
  if (points.length < longWindow) return null;
  const shortAtr = atr(points.slice(-shortWindow - 1), shortWindow);
  const longAtr = atr(points.slice(-longWindow - 1), longWindow);
  if (shortAtr == null || longAtr == null || longAtr === 0) return null;
  return shortAtr / longAtr;
}
