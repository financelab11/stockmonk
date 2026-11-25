import type { RangePricePoint } from "@/lib/schemas";
import type { ScoreEvidence } from "./types";
import {
  atr,
  closesFrom,
  distanceFromHigh,
  dollarVolume,
  higherHighsLows,
  maSlope,
  macd,
  obvSlope,
  rangeContraction,
  relativeVolume,
  returnOverCalendarDays,
  rsi,
  sma,
} from "./indicators";
import type { V2Input } from "./input";
import { componentScore, evidence, round } from "./util";

function upDownVolumeRatio(points: RangePricePoint[], window = 20): number | null {
  if (points.length < window + 1) return null;
  const slice = points.slice(-window - 1);
  let up = 0;
  let down = 0;
  for (let index = 1; index < slice.length; index += 1) {
    if (slice[index].c > slice[index - 1].c) up += slice[index].v;
    else if (slice[index].c < slice[index - 1].c) down += slice[index].v;
  }
  if (down === 0) return up > 0 ? 2 : null;
  return up / down;
}

function excessReturn(
  prices: RangePricePoint[],
  benchmark: RangePricePoint[],
  days: number,
): number | null {
  const stock = returnOverCalendarDays(prices, days);
  const market = returnOverCalendarDays(benchmark, days);
  if (stock == null || market == null) return null;
  return stock - market;
}

function rsiBand(value: number | null): number | null {
  if (value == null) return null;
  if (value >= 55 && value <= 70) return 100;
  if (value >= 45 && value < 55) return 75;
  if (value > 70 && value <= 80) return 60;
  if (value >= 30 && value < 45) return 45;
  if (value > 80) return 40;
  return 20;
}

function excessBand(value: number | null): number | null {
  if (value == null) return null;
  if (value >= 0.2) return 100;
  if (value >= 0.1) return 85;
  if (value >= 0.05) return 70;
  if (value >= 0) return 55;
  if (value >= -0.05) return 40;
  if (value >= -0.1) return 20;
  return 0;
}

function volumeBand(value: number | null): number | null {
  if (value == null) return null;
  if (value >= 1.5) return 100;
  if (value >= 1.2) return 85;
  if (value >= 1) return 65;
  if (value >= 0.8) return 45;
  return 20;
}

function obvBand(value: number | null): number | null {
  if (value == null) return null;
  if (value >= 0.2) return 100;
  if (value >= 0.05) return 80;
  if (value >= 0) return 60;
  if (value >= -0.05) return 40;
  return 20;
}

function liquidityBand(value: number | null): number | null {
  if (value == null) return null;
  if (value >= 100_000_000) return 100;
  if (value >= 50_000_000) return 90;
  if (value >= 20_000_000) return 75;
  if (value >= 5_000_000) return 50;
  if (value >= 1_000_000) return 25;
  return 0;
}

function atrBand(value: number | null): number | null {
  if (value == null) return null;
  if (value >= 0.02 && value <= 0.04) return 100;
  if (value >= 0.01 && value < 0.02) return 80;
  if (value > 0.04 && value <= 0.06) return 70;
  if (value > 0.06 && value <= 0.08) return 45;
  if (value > 0.08) return 20;
  return 60;
}

export function technicalScore(input: V2Input) {
  const { pricesMax, benchmark, sectorBenchmark } = input;
  const closes = closesFrom(pricesMax);
  const current = closes.at(-1) ?? null;
  const ma50 = sma(closes, 50);
  const ma200 = sma(closes, 200);
  const slope200 = maSlope(closes, 200, 20);
  const structure = higherHighsLows(pricesMax);
  const highDistance = distanceFromHigh(pricesMax);
  const spyMa200 = benchmark.length ? sma(closesFrom(benchmark), 200) : null;
  const spyAbove200 =
    benchmark.length && spyMa200 != null
      ? (benchmark.at(-1)?.c ?? 0) > spyMa200
      : null;
  const sectorMa200 = sectorBenchmark.length
    ? sma(closesFrom(sectorBenchmark), 200)
    : null;
  const sectorAbove200 =
    sectorBenchmark.length && sectorMa200 != null
      ? (sectorBenchmark.at(-1)?.c ?? 0) > sectorMa200
      : null;
  const sectorVsSpy3m = excessReturn(sectorBenchmark, benchmark, 91);
  const rs3m = excessReturn(pricesMax, benchmark, 91);
  const rs6m = excessReturn(pricesMax, benchmark, 182);
  const rs12m = excessReturn(pricesMax, benchmark, 365);
  const sectorRs6m = excessReturn(pricesMax, sectorBenchmark, 182);
  const relVolume = relativeVolume(pricesMax, 50);
  const upDown = upDownVolumeRatio(pricesMax, 20);
  const obv = obvSlope(pricesMax, 20);
  const dollar = dollarVolume(pricesMax, 20);
  const contraction = rangeContraction(pricesMax, 10, 50);
  const breakoutLevel =
    pricesMax.length > 21
      ? Math.max(...pricesMax.slice(-21, -1).map((point) => point.h))
      : null;
  const breakout =
    current != null && breakoutLevel != null && breakoutLevel > 0
      ? current / breakoutLevel - 1
      : null;
  const last = pricesMax.at(-1);
  const retest =
    breakout != null &&
    breakout > 0 &&
    last != null &&
    breakoutLevel != null &&
    last.l <= breakoutLevel * 1.02 &&
    last.c > breakoutLevel
      ? 100
      : breakout != null && breakout > 0
        ? 50
        : 20;
  const rsi14 = rsi(closes, 14);
  const macdResult = macd(closes);
  const roc20 = returnOverCalendarDays(pricesMax, 28);
  const atr14 = atr(pricesMax, 14);
  const atrPct =
    atr14 != null && current != null && current > 0 ? atr14 / current : null;

  const market: ScoreEvidence[] = [
    evidence({
      id: "spy-trend",
      label: "S&P 500 above 200-DMA",
      value: spyAbove200 == null ? null : spyAbove200 ? "Yes" : "No",
      unit: "",
      period: "Latest close",
      source: "Yahoo Finance SPY",
      formula: "SPY close > 200-day simple moving average",
      maxPoints: 4,
      score: spyAbove200 == null ? null : spyAbove200 ? 100 : 20,
    }),
    evidence({
      id: "sector-trend",
      label: "Sector ETF above 200-DMA",
      value: sectorAbove200 == null ? null : sectorAbove200 ? "Yes" : "No",
      unit: "",
      period: "Latest close",
      source: "Yahoo Finance sector ETF",
      formula: "Sector ETF close > 200-day simple moving average",
      maxPoints: 3,
      score: sectorAbove200 == null ? null : sectorAbove200 ? 100 : 20,
    }),
    evidence({
      id: "sector-relative",
      label: "Sector 3M excess return vs S&P 500",
      value: sectorVsSpy3m == null ? null : round(sectorVsSpy3m * 100, 1),
      unit: "pp",
      period: "3 months",
      source: "Yahoo Finance",
      formula: "Sector ETF 3M return minus SPY 3M return",
      maxPoints: 3,
      score: excessBand(sectorVsSpy3m),
    }),
  ];

  const trend: ScoreEvidence[] = [
    evidence({
      id: "price-vs-50dma",
      label: "Price above 50-DMA",
      value: current == null || ma50 == null ? null : current > ma50 ? "Yes" : "No",
      unit: "",
      period: "Latest close",
      source: "Yahoo Finance",
      formula: "Close > 50-day SMA",
      maxPoints: 4,
      score: current == null || ma50 == null ? null : current > ma50 ? 100 : 20,
    }),
    evidence({
      id: "price-vs-200dma",
      label: "Price above 200-DMA",
      value:
        current == null || ma200 == null ? null : current > ma200 ? "Yes" : "No",
      unit: "",
      period: "Latest close",
      source: "Yahoo Finance",
      formula: "Close > 200-day SMA",
      maxPoints: 4,
      score: current == null || ma200 == null ? null : current > ma200 ? 100 : 20,
    }),
    evidence({
      id: "50-vs-200",
      label: "50-DMA above 200-DMA",
      value: ma50 == null || ma200 == null ? null : ma50 > ma200 ? "Yes" : "No",
      unit: "",
      period: "Latest close",
      source: "Yahoo Finance",
      formula: "50-day SMA > 200-day SMA",
      maxPoints: 4,
      score: ma50 == null || ma200 == null ? null : ma50 > ma200 ? 100 : 20,
    }),
    evidence({
      id: "200dma-slope",
      label: "200-DMA slope",
      value: slope200 == null ? null : round(slope200 * 100, 2),
      unit: "% over 20 days",
      period: "20 trading days",
      source: "Yahoo Finance",
      formula: "200-day SMA now / 200-day SMA 20 days ago - 1",
      maxPoints: 4,
      score:
        slope200 == null
          ? null
          : slope200 > 0.01
            ? 100
            : slope200 > 0
              ? 75
              : slope200 > -0.01
                ? 45
                : 15,
    }),
    evidence({
      id: "higher-highs-lows",
      label: "Higher highs and higher lows",
      value: structure == null ? null : structure ? "Yes" : "No",
      unit: "",
      period: "20 sessions vs prior 20",
      source: "Yahoo Finance",
      formula: "Recent 20-session high and low both above prior 20-session range",
      maxPoints: 2,
      score: structure == null ? null : structure ? 100 : 25,
    }),
    evidence({
      id: "52w-distance-trend",
      label: "Distance from 52-week high",
      value: highDistance == null ? null : round(highDistance * 100, 1),
      unit: "%",
      period: "Latest close",
      source: "Yahoo Finance",
      formula: "Close / 52-week high - 1",
      maxPoints: 2,
      score:
        highDistance == null
          ? null
          : highDistance >= -0.03
            ? 100
            : highDistance >= -0.08
              ? 80
              : highDistance >= -0.15
                ? 60
                : highDistance >= -0.25
                  ? 40
                  : 15,
    }),
  ];

  const relative: ScoreEvidence[] = [
    evidence({
      id: "rs-3m",
      label: "3M excess return vs SPY",
      value: rs3m == null ? null : round(rs3m * 100, 1),
      unit: "pp",
      period: "3 months",
      source: "Yahoo Finance",
      formula: "Stock 3M return minus SPY 3M return",
      maxPoints: 6,
      score: excessBand(rs3m),
    }),
    evidence({
      id: "rs-6m",
      label: "6M excess return vs SPY",
      value: rs6m == null ? null : round(rs6m * 100, 1),
      unit: "pp",
      period: "6 months",
      source: "Yahoo Finance",
      formula: "Stock 6M return minus SPY 6M return",
      maxPoints: 6,
      score: excessBand(rs6m),
    }),
    evidence({
      id: "rs-12m",
      label: "12M excess return vs SPY",
      value: rs12m == null ? null : round(rs12m * 100, 1),
      unit: "pp",
      period: "12 months",
      source: "Yahoo Finance",
      formula: "Stock 12M return minus SPY 12M return",
      maxPoints: 7,
      score: excessBand(rs12m),
    }),
    evidence({
      id: "sector-rs-6m",
      label: "6M excess return vs sector ETF",
      value: sectorRs6m == null ? null : round(sectorRs6m * 100, 1),
      unit: "pp",
      period: "6 months",
      source: "Yahoo Finance",
      formula: "Stock 6M return minus sector ETF 6M return",
      maxPoints: 6,
      score: excessBand(sectorRs6m),
    }),
  ];

  const volume: ScoreEvidence[] = [
    evidence({
      id: "relative-volume",
      label: "Relative volume",
      value: relVolume == null ? null : round(relVolume, 2),
      unit: "x",
      period: "Latest session vs 50-day average",
      source: "Yahoo Finance",
      formula: "Latest volume / 50-day average volume",
      maxPoints: 5,
      score: volumeBand(relVolume),
    }),
    evidence({
      id: "up-down-volume",
      label: "Up/down volume ratio",
      value: upDown == null ? null : round(upDown, 2),
      unit: "x",
      period: "20 sessions",
      source: "Yahoo Finance",
      formula: "Volume on up days / volume on down days",
      maxPoints: 4,
      score:
        upDown == null
          ? null
          : upDown >= 1.5
            ? 100
            : upDown >= 1.1
              ? 80
              : upDown >= 0.9
                ? 60
                : upDown >= 0.7
                  ? 40
                  : 20,
    }),
    evidence({
      id: "obv",
      label: "On-balance-volume trend",
      value: obv == null ? null : round(obv, 3),
      unit: "normalised slope",
      period: "20 sessions",
      source: "Yahoo Finance",
      formula: "OBV slope / average volume",
      maxPoints: 3,
      score: obvBand(obv),
    }),
    evidence({
      id: "dollar-volume",
      label: "Average daily dollar volume",
      value: dollar == null ? null : Math.round(dollar),
      unit: "USD",
      period: "20 sessions",
      source: "Yahoo Finance",
      formula: "Average close × volume",
      maxPoints: 3,
      score: liquidityBand(dollar),
    }),
  ];

  const base: ScoreEvidence[] = [
    evidence({
      id: "range-contraction",
      label: "ATR contraction",
      value: contraction == null ? null : round(contraction, 2),
      unit: "x",
      period: "10-day vs 50-day ATR",
      source: "Yahoo Finance",
      formula: "10-day ATR / 50-day ATR",
      maxPoints: 5,
      score:
        contraction == null
          ? null
          : contraction <= 0.6
            ? 100
            : contraction <= 0.8
              ? 80
              : contraction <= 1
                ? 60
                : 30,
    }),
    evidence({
      id: "base-distance",
      label: "Distance from 52-week high",
      value: highDistance == null ? null : round(highDistance * 100, 1),
      unit: "%",
      period: "Latest close",
      source: "Yahoo Finance",
      formula: "Close / 52-week high - 1",
      maxPoints: 4,
      score:
        highDistance == null
          ? null
          : highDistance >= -0.03
            ? 100
            : highDistance >= -0.08
              ? 80
              : highDistance >= -0.15
                ? 60
                : highDistance >= -0.25
                  ? 40
                  : 15,
    }),
    evidence({
      id: "breakout",
      label: "Breakout above 20-session high",
      value: breakout == null ? null : round(breakout * 100, 1),
      unit: "% above resistance",
      period: "Latest close",
      source: "Yahoo Finance",
      formula: "Close / prior 20-session high - 1",
      maxPoints: 3,
      score:
        breakout == null
          ? null
          : breakout > 0
            ? 100
            : breakout >= -0.02
              ? 75
              : 30,
    }),
    evidence({
      id: "retest",
      label: "Breakout retest",
      value: retest,
      unit: "score",
      period: "Latest session",
      source: "Yahoo Finance",
      formula: "Close holds above the prior 20-session high after a retest",
      maxPoints: 3,
      score: retest,
    }),
  ];

  const momentum: ScoreEvidence[] = [
    evidence({
      id: "rsi",
      label: "RSI(14)",
      value: rsi14 == null ? null : round(rsi14, 1),
      unit: "index",
      period: "14 sessions",
      source: "Yahoo Finance",
      formula: "Wilder relative strength index",
      maxPoints: 4,
      score: rsiBand(rsi14),
    }),
    evidence({
      id: "macd",
      label: "MACD histogram",
      value:
        macdResult == null || current == null
          ? null
          : round((macdResult.histogram / current) * 100, 2),
      unit: "% of price",
      period: "12/26/9",
      source: "Yahoo Finance",
      formula: "MACD line minus signal line, scaled by price",
      maxPoints: 4,
      score:
        macdResult == null || current == null
          ? null
          : macdResult.histogram / current > 0.01
            ? 100
            : macdResult.histogram > 0
              ? 75
              : macdResult.histogram / current > -0.01
                ? 45
                : 20,
    }),
    evidence({
      id: "roc-20",
      label: "20-session rate of change",
      value: roc20 == null ? null : round(roc20 * 100, 1),
      unit: "%",
      period: "20 sessions",
      source: "Yahoo Finance",
      formula: "Close / close 20 sessions ago - 1",
      maxPoints: 2,
      score:
        roc20 == null
          ? null
          : roc20 > 0.1
            ? 100
            : roc20 > 0.05
              ? 85
              : roc20 > 0
                ? 65
                : roc20 > -0.05
                  ? 40
                  : roc20 > -0.1
                    ? 20
                    : 0,
    }),
  ];

  const entry: ScoreEvidence[] = [
    evidence({
      id: "atr-volatility",
      label: "ATR as % of price",
      value: atrPct == null ? null : round(atrPct * 100, 2),
      unit: "%",
      period: "14 sessions",
      source: "Yahoo Finance",
      formula: "14-day ATR / close",
      maxPoints: 3,
      score: atrBand(atrPct),
    }),
    evidence({
      id: "entry-liquidity",
      label: "Execution liquidity",
      value: dollar == null ? null : Math.round(dollar),
      unit: "USD",
      period: "20 sessions",
      source: "Yahoo Finance",
      formula: "Average daily dollar volume",
      maxPoints: 2,
      score: liquidityBand(dollar),
    }),
  ];

  const evidenceItems = [
    ...market,
    ...trend,
    ...relative,
    ...volume,
    ...base,
    ...momentum,
    ...entry,
  ];
  const available = evidenceItems.filter((item) => item.available);

  return componentScore({
    key: "technical",
    label: "Technical",
    weight: 0.15,
    evidence: evidenceItems,
    summary:
      available.length === 0
        ? "Insufficient price history to calculate a technical score."
        : `Market, trend, relative strength, volume, base, momentum and entry risk. ${available.length}/${evidenceItems.length} inputs available.`,
  });
}
