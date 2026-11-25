import type { ScoreEvidence } from "./types";
import {
  valuationBand,
  valuationPercentileBand,
  yieldBand,
} from "./bands";
import {
  annualRows,
  cagr,
  estimateForPeriod,
} from "./financials";
import type { V2Input } from "./input";
import {
  componentScore,
  evidence,
  finite,
  round,
  safeDiv,
} from "./util";

function historicalCheapness(
  current: number | null | undefined,
  history: Array<number | null>,
): number | null {
  if (!finite(current) || current <= 0) return null;
  const values = history.filter(
    (value): value is number => finite(value) && value > 0,
  );
  if (values.length < 12) return null;
  const below = values.filter((value) => value <= current).length;
  return (1 - below / values.length) * 100;
}

function peerCheapness(
  subject: number | null | undefined,
  peerMedian: number | null | undefined,
): number | null {
  if (!finite(subject) || subject <= 0 || !finite(peerMedian) || peerMedian <= 0) {
    return null;
  }
  const relative = subject / peerMedian;
  return valuationBand(relative, 0.7, 1.7);
}

function pegBand(value: number | null | undefined): number | null {
  if (!finite(value) || value <= 0) return null;
  if (value <= 0.8) return 100;
  if (value <= 1.2) return 85;
  if (value <= 1.5) return 70;
  if (value <= 2) return 50;
  if (value <= 3) return 25;
  return 0;
}

export function valuationScore(input: V2Input) {
  const { data, consensus, peerContext } = input;
  const metrics = data.metrics;
  const history = data.multipleHistory;
  const currentEstimate = estimateForPeriod(consensus, "current");
  const forwardPe =
    data.latestPrice.close != null &&
    currentEstimate?.epsAvg != null &&
    currentEstimate.epsAvg > 0
      ? data.latestPrice.close / currentEstimate.epsAvg
      : null;
  const peCheapness = historicalCheapness(
    metrics.pe,
    history.map((row) => row.pe),
  );
  const evEbitdaCheapness = historicalCheapness(
    metrics.evEbitda,
    history.map((row) => row.evEbitda),
  );
  const evSalesCheapness = historicalCheapness(
    metrics.evSales,
    history.map((row) => row.evSales),
  );
  const pfcfCheapness = historicalCheapness(
    metrics.pfcf,
    history.map((row) => row.pfcf),
  );
  const earningsYield = safeDiv(1, metrics.pe);
  const fcfYield = metrics.fcfYield;
  const ebitdaYield = safeDiv(1, metrics.evEbitda);
  const epsGrowth = currentEstimate?.epsGrowth;
  const peg =
    forwardPe != null && epsGrowth != null && epsGrowth > 0
      ? forwardPe / (epsGrowth * 100)
      : null;
  const revenueGrowth = currentEstimate?.revenueGrowth ?? metrics.revenueGrowthTtm;
  const ebitdaCagr = cagr(annualRows(data), "ebitda", 3);
  const evSalesToGrowth =
    metrics.evSales != null && revenueGrowth != null && revenueGrowth > 0
      ? metrics.evSales / (revenueGrowth * 100)
      : null;
  const evEbitdaToGrowth =
    metrics.evEbitda != null && ebitdaCagr != null && ebitdaCagr > 0
      ? metrics.evEbitda / (ebitdaCagr * 100)
      : null;
  const peerPe = peerContext.median.pe;
  const peerForwardPe = peerContext.median.forwardPe;
  const peerEvEbitda = peerContext.median.evEbitda;
  const peerEvSales = peerContext.median.evSales;
  const peerPfcf = peerContext.median.pfcf;
  const peerPeCheapness = peerCheapness(metrics.pe, peerPe);
  const peerForwardCheapness = peerCheapness(forwardPe, peerForwardPe);
  const peerEvEbitdaCheapness = peerCheapness(metrics.evEbitda, peerEvEbitda);
  const peerEvSalesCheapness = peerCheapness(metrics.evSales, peerEvSales);
  const peerPfcfCheapness = peerCheapness(metrics.pfcf, peerPfcf);

  const historical: ScoreEvidence[] = [
    evidence({
      id: "historical-pe",
      label: "P/E versus own history",
      value: peCheapness == null ? null : round(peCheapness, 0),
      unit: "cheapness percentile",
      period: "5-year monthly history",
      source: "Yahoo Finance / SEC XBRL",
      formula: "Share of historical monthly P/E observations above the current P/E",
      maxPoints: 10,
      score: valuationPercentileBand(peCheapness),
    }),
    evidence({
      id: "historical-ev-ebitda",
      label: "EV/EBITDA versus own history",
      value: evEbitdaCheapness == null ? null : round(evEbitdaCheapness, 0),
      unit: "cheapness percentile",
      period: "5-year monthly history",
      source: "Yahoo Finance / SEC XBRL",
      formula: "Share of historical observations above the current EV/EBITDA",
      maxPoints: 8,
      score: valuationPercentileBand(evEbitdaCheapness),
    }),
    evidence({
      id: "historical-ev-sales",
      label: "EV/Sales versus own history",
      value: evSalesCheapness == null ? null : round(evSalesCheapness, 0),
      unit: "cheapness percentile",
      period: "5-year monthly history",
      source: "Yahoo Finance / SEC XBRL",
      formula: "Share of historical observations above the current EV/Sales",
      maxPoints: 6,
      score: valuationPercentileBand(evSalesCheapness),
    }),
    evidence({
      id: "historical-pfcf",
      label: "P/FCF versus own history",
      value: pfcfCheapness == null ? null : round(pfcfCheapness, 0),
      unit: "cheapness percentile",
      period: "5-year monthly history",
      source: "Yahoo Finance / SEC XBRL",
      formula: "Share of historical observations above the current P/FCF",
      maxPoints: 6,
      score: valuationPercentileBand(pfcfCheapness),
    }),
  ];

  const peer: ScoreEvidence[] = [
    evidence({
      id: "peer-forward-pe",
      label: "Forward P/E versus peers",
      value: peerForwardCheapness == null ? null : round(peerForwardCheapness, 0),
      unit: "score",
      period: "Current fiscal year",
      source: "Yahoo Finance consensus / peer set",
      formula: "Relative forward P/E versus peer median",
      maxPoints: 8,
      score: peerForwardCheapness,
    }),
    evidence({
      id: "peer-pe",
      label: "Trailing P/E versus peers",
      value: peerPeCheapness == null ? null : round(peerPeCheapness, 0),
      unit: "score",
      period: "TTM",
      source: "Yahoo Finance / peer set",
      formula: "Relative trailing P/E versus peer median",
      maxPoints: 6,
      score: peerPeCheapness,
    }),
    evidence({
      id: "peer-ev-ebitda",
      label: "EV/EBITDA versus peers",
      value:
        peerEvEbitdaCheapness == null ? null : round(peerEvEbitdaCheapness, 0),
      unit: "score",
      period: "TTM",
      source: "Yahoo Finance / peer set",
      formula: "Relative EV/EBITDA versus peer median",
      maxPoints: 6,
      score: peerEvEbitdaCheapness,
    }),
    evidence({
      id: "peer-ev-sales",
      label: "EV/Sales versus peers",
      value: peerEvSalesCheapness == null ? null : round(peerEvSalesCheapness, 0),
      unit: "score",
      period: "TTM",
      source: "Yahoo Finance / peer set",
      formula: "Relative EV/Sales versus peer median",
      maxPoints: 4,
      score: peerEvSalesCheapness,
    }),
    evidence({
      id: "peer-pfcf",
      label: "P/FCF versus peers",
      value: peerPfcfCheapness == null ? null : round(peerPfcfCheapness, 0),
      unit: "score",
      period: "TTM",
      source: "Yahoo Finance / peer set",
      formula: "Relative P/FCF versus peer median",
      maxPoints: 6,
      score: peerPfcfCheapness,
    }),
  ];

  const growthAdjusted: ScoreEvidence[] = [
    evidence({
      id: "peg",
      label: "PEG ratio",
      value: peg == null ? null : round(peg, 2),
      unit: "x",
      period: "Forward P/E / current-year EPS growth",
      source: "Yahoo Finance consensus",
      formula: "Forward P/E divided by EPS growth percentage",
      maxPoints: 8,
      score: pegBand(peg),
      reason:
        peg == null
          ? "PEG is not meaningful without positive forward EPS growth."
          : undefined,
    }),
    evidence({
      id: "forward-pe-growth",
      label: "Forward P/E relative to EPS growth",
      value: peg == null ? null : round(peg, 2),
      unit: "x",
      period: "Current fiscal year",
      source: "Yahoo Finance consensus",
      formula: "Forward P/E / forward EPS growth",
      maxPoints: 7,
      score: pegBand(peg),
      reason:
        peg == null
          ? "Forward EPS growth is unavailable or non-positive."
          : undefined,
    }),
    evidence({
      id: "ev-sales-growth",
      label: "EV/Sales relative to revenue growth",
      value: evSalesToGrowth == null ? null : round(evSalesToGrowth, 2),
      unit: "x",
      period: "TTM / current-year growth",
      source: "Yahoo Finance consensus",
      formula: "EV/Sales divided by revenue growth percentage",
      maxPoints: 5,
      score:
        evSalesToGrowth == null
          ? null
          : valuationBand(evSalesToGrowth, 0.05, 0.4),
      reason:
        evSalesToGrowth == null
          ? "Revenue growth is unavailable or non-positive."
          : undefined,
    }),
    evidence({
      id: "ev-ebitda-growth",
      label: "EV/EBITDA relative to EBITDA growth",
      value: evEbitdaToGrowth == null ? null : round(evEbitdaToGrowth, 2),
      unit: "x",
      period: "TTM / 3-year EBITDA CAGR",
      source: "SEC XBRL",
      formula: "EV/EBITDA divided by EBITDA CAGR percentage",
      maxPoints: 5,
      score:
        evEbitdaToGrowth == null
          ? null
          : valuationBand(evEbitdaToGrowth, 0.1, 0.6),
      reason:
        evEbitdaToGrowth == null
          ? "Positive EBITDA CAGR is unavailable."
          : undefined,
    }),
  ];

  const yields: ScoreEvidence[] = [
    evidence({
      id: "earnings-yield",
      label: "Earnings yield",
      value: earningsYield == null ? null : round(earningsYield * 100, 2),
      unit: "%",
      period: "TTM",
      source: "Yahoo Finance / SEC XBRL",
      formula: "1 / trailing P/E",
      maxPoints: 5,
      score: yieldBand(earningsYield),
    }),
    evidence({
      id: "fcf-yield",
      label: "Free-cash-flow yield",
      value: fcfYield == null ? null : round(fcfYield * 100, 2),
      unit: "%",
      period: "TTM",
      source: "SEC XBRL / Yahoo Finance",
      formula: "Free cash flow / market capitalisation",
      maxPoints: 6,
      score: yieldBand(fcfYield),
    }),
    evidence({
      id: "ebitda-yield",
      label: "EBITDA / enterprise value",
      value: ebitdaYield == null ? null : round(ebitdaYield * 100, 2),
      unit: "%",
      period: "TTM",
      source: "SEC XBRL / Yahoo Finance",
      formula: "EBITDA / enterprise value",
      maxPoints: 4,
      score: yieldBand(ebitdaYield),
    }),
  ];

  const evidenceItems = [
    ...historical,
    ...peer,
    ...growthAdjusted,
    ...yields,
  ];
  const available = evidenceItems.filter((item) => item.available);

  return componentScore({
    key: "valuation",
    label: "Valuation",
    weight: 0.25,
    evidence: evidenceItems,
    summary:
      available.length === 0
        ? "Insufficient multiples or history to calculate a valuation score."
        : `Historical, peer-relative, growth-adjusted and cash-yield valuation. ${available.length}/${evidenceItems.length} inputs available.`,
  });
}
