import type { ScoreEvidence } from "./types";
import {
  growthBand,
  marginTrendBand,
  reinvestmentBand,
  revisionBand,
  surpriseBand,
  dilutionBand,
} from "./bands";
import {
  annualRows,
  cagr,
  estimateForPeriod,
  growthAcceleration,
  latestQuarterYoY,
  marginTrend,
  reinvestmentRate,
  shareCountChange,
  surpriseStats,
  yoy,
} from "./financials";
import type { V2Input } from "./input";
import { componentScore, evidence, round } from "./util";

function receivablesScore(input: V2Input): number | null {
  const rows = annualRows(input.data);
  if (rows.length < 2) return null;
  const latest = rows.at(-1)!;
  const prior = rows.at(-2)!;
  const revenueGrowth = yoy(latest.revenue, prior.revenue);
  const receivablesGrowth = yoy(latest.receivables, prior.receivables);
  const inventoryGrowth = yoy(latest.inventory, prior.inventory);
  if (revenueGrowth == null) return null;
  const gaps = [receivablesGrowth, inventoryGrowth]
    .filter((value): value is number => value != null)
    .map((growth) => growth - revenueGrowth);
  if (!gaps.length) return null;
  const gap = gaps.reduce((sum, value) => sum + value, 0) / gaps.length;
  if (gap <= 0) return 100;
  if (gap <= 0.05) return 75;
  if (gap <= 0.1) return 45;
  return 10;
}

export function growthScore(input: V2Input) {
  const { data, consensus, peerContext } = input;
  const annual = annualRows(data);
  const revenue1y = data.metrics.revenueGrowthTtm;
  const revenue3y = cagr(annual, "revenue", 3);
  const revenue5y = cagr(annual, "revenue", 5);
  const revenueQ = latestQuarterYoY(data, "revenue");
  const revenueTtm = data.metrics.revenueGrowthTtm;
  const eps1y = data.metrics.epsGrowthTtm;
  const eps3y = cagr(annual, "epsDiluted", 3);
  const eps5y = cagr(annual, "epsDiluted", 5);
  const epsQ = latestQuarterYoY(data, "epsDiluted");
  const shares = shareCountChange(data);
  const acceleration = growthAcceleration(data, "revenue");
  const grossMarginTrend = marginTrend(data, "grossMargin", 3);
  const demandQuality = receivablesScore(input);
  const surprises = surpriseStats(consensus);
  const revisions = consensus?.revisions;
  const currentEstimate = estimateForPeriod(consensus, "current");
  const reinvestment = reinvestmentRate(data);
  const peerGrowth = peerContext.median.revenueGrowth;

  const revenuePoints: ScoreEvidence[] = [
    evidence({
      id: "revenue-1y",
      label: "Revenue growth, 1Y",
      value: revenue1y == null ? null : round(revenue1y * 100, 1),
      unit: "%",
      period: "TTM",
      source: "SEC XBRL / Yahoo Finance",
      formula: "Revenue TTM / prior-year revenue - 1",
      maxPoints: 5,
      score: growthBand(revenue1y),
    }),
    evidence({
      id: "revenue-3y-cagr",
      label: "Revenue CAGR, 3Y",
      value: revenue3y == null ? null : round(revenue3y * 100, 1),
      unit: "%",
      period: "3 fiscal years",
      source: "SEC XBRL",
      formula: "(latest revenue / revenue three years earlier)^(1/n) - 1",
      maxPoints: 6,
      score: growthBand(revenue3y),
    }),
    evidence({
      id: "revenue-5y-cagr",
      label: "Revenue CAGR, 5Y",
      value: revenue5y == null ? null : round(revenue5y * 100, 1),
      unit: "%",
      period: "5 fiscal years",
      source: "SEC XBRL",
      formula: "(latest revenue / revenue five years earlier)^(1/n) - 1",
      maxPoints: 4,
      score: growthBand(revenue5y),
    }),
    evidence({
      id: "revenue-latest-q",
      label: "Revenue growth, latest quarter",
      value: revenueQ == null ? null : round(revenueQ * 100, 1),
      unit: "%",
      period: "Latest reported quarter",
      source: "SEC XBRL",
      formula: "Latest-quarter revenue / same quarter last year - 1",
      maxPoints: 6,
      score: growthBand(revenueQ),
    }),
    evidence({
      id: "revenue-ttm",
      label: "Revenue growth, TTM",
      value: revenueTtm == null ? null : round(revenueTtm * 100, 1),
      unit: "%",
      period: "TTM",
      source: "SEC XBRL",
      formula: "TTM revenue / prior TTM revenue - 1",
      maxPoints: 4,
      score: growthBand(revenueTtm),
    }),
  ];

  const epsPoints: ScoreEvidence[] = [
    evidence({
      id: "eps-1y",
      label: "Diluted EPS growth, 1Y",
      value: eps1y == null ? null : round(eps1y * 100, 1),
      unit: "%",
      period: "TTM",
      source: "SEC XBRL",
      formula: "Diluted EPS TTM / prior-year diluted EPS - 1",
      maxPoints: 5,
      score: growthBand(eps1y),
    }),
    evidence({
      id: "eps-3y-cagr",
      label: "Diluted EPS CAGR, 3Y",
      value: eps3y == null ? null : round(eps3y * 100, 1),
      unit: "%",
      period: "3 fiscal years",
      source: "SEC XBRL",
      formula: "(latest diluted EPS / EPS three years earlier)^(1/n) - 1",
      maxPoints: 5,
      score: growthBand(eps3y),
    }),
    evidence({
      id: "eps-5y-cagr",
      label: "Diluted EPS CAGR, 5Y",
      value: eps5y == null ? null : round(eps5y * 100, 1),
      unit: "%",
      period: "5 fiscal years",
      source: "SEC XBRL",
      formula: "(latest diluted EPS / EPS five years earlier)^(1/n) - 1",
      maxPoints: 3,
      score: growthBand(eps5y),
    }),
    evidence({
      id: "eps-latest-q",
      label: "Diluted EPS growth, latest quarter",
      value: epsQ == null ? null : round(epsQ * 100, 1),
      unit: "%",
      period: "Latest reported quarter",
      source: "SEC XBRL",
      formula: "Latest-quarter diluted EPS / same quarter last year - 1",
      maxPoints: 3,
      score: growthBand(epsQ),
    }),
    evidence({
      id: "share-count",
      label: "Diluted share-count change",
      value: shares == null ? null : round(shares * 100, 2),
      unit: "%",
      period: "Latest fiscal year",
      source: "SEC XBRL",
      formula: "Diluted shares implied by net income / diluted EPS, latest versus prior year",
      maxPoints: 4,
      score: dilutionBand(shares),
    }),
  ];

  const demandPoints: ScoreEvidence[] = [
    evidence({
      id: "revenue-acceleration",
      label: "Revenue growth acceleration",
      value: acceleration == null ? null : round(acceleration * 100, 1),
      unit: "pp",
      period: "Latest quarter vs prior quarter",
      source: "SEC XBRL",
      formula: "Latest-quarter YoY growth minus prior-quarter YoY growth",
      maxPoints: 8,
      score: growthBand(acceleration),
    }),
    evidence({
      id: "gross-margin-trend",
      label: "Gross-margin trend",
      value:
        grossMarginTrend == null ? null : round(grossMarginTrend * 100, 1),
      unit: "pp",
      period: "3 fiscal years",
      source: "SEC XBRL",
      formula: "Latest gross margin minus gross margin three years earlier",
      maxPoints: 6,
      score: marginTrendBand(grossMarginTrend),
    }),
    evidence({
      id: "demand-quality",
      label: "Receivables and inventory growth vs revenue",
      value: demandQuality,
      unit: "score",
      period: "Latest fiscal year",
      source: "SEC XBRL",
      formula:
        "Receivables/inventory growth minus revenue growth; lower is better",
      maxPoints: 6,
      score: demandQuality,
      reason:
        demandQuality == null
          ? "Receivables or inventory data is unavailable."
          : undefined,
    }),
  ];

  const visibilityPoints: ScoreEvidence[] = [
    evidence({
      id: "eps-surprise",
      label: "Average EPS surprise",
      value: surprises.eps == null ? null : round(surprises.eps * 100, 1),
      unit: "%",
      period: "Last four reported quarters",
      source: "Yahoo Finance / Nasdaq consensus",
      formula: "Average of (actual EPS / estimate - 1)",
      maxPoints: 6,
      score: surpriseBand(surprises.eps),
    }),
    evidence({
      id: "revenue-surprise",
      label: "Average revenue surprise",
      value:
        surprises.revenue == null ? null : round(surprises.revenue * 100, 1),
      unit: "%",
      period: "Last four reported quarters",
      source: "Yahoo Finance / Nasdaq consensus",
      formula: "Average of (actual revenue / estimate - 1)",
      maxPoints: 4,
      score: surpriseBand(surprises.revenue),
    }),
    evidence({
      id: "eps-revision-30d",
      label: "EPS revision, 30D",
      value:
        revisions?.eps30d == null ? null : round(revisions.eps30d * 100, 1),
      unit: "%",
      period: "30 days",
      source: "Yahoo Finance consensus",
      formula: "Current-year EPS estimate change over 30 days",
      maxPoints: 5,
      score: revisionBand(revisions?.eps30d),
    }),
  ];

  const runwayPoints: ScoreEvidence[] = [
    evidence({
      id: "forward-revenue-growth",
      label: "Forward revenue growth",
      value:
        currentEstimate?.revenueGrowth == null
          ? null
          : round(currentEstimate.revenueGrowth * 100, 1),
      unit: "%",
      period: currentEstimate?.period ?? "Current fiscal year",
      source: "Yahoo Finance consensus",
      formula: "Consensus current-year revenue growth",
      maxPoints: 7,
      score: growthBand(currentEstimate?.revenueGrowth),
    }),
    evidence({
      id: "forward-eps-growth",
      label: "Forward EPS growth",
      value:
        currentEstimate?.epsGrowth == null
          ? null
          : round(currentEstimate.epsGrowth * 100, 1),
      unit: "%",
      period: currentEstimate?.period ?? "Current fiscal year",
      source: "Yahoo Finance consensus",
      formula: "Consensus current-year EPS growth",
      maxPoints: 5,
      score: growthBand(currentEstimate?.epsGrowth),
    }),
    evidence({
      id: "reinvestment",
      label: "Reinvestment rate",
      value: reinvestment == null ? null : round(reinvestment * 100, 1),
      unit: "% of revenue",
      period: "Latest fiscal year",
      source: "SEC XBRL",
      formula: "(Capex + R&D) / revenue",
      maxPoints: 4,
      score: reinvestmentBand(reinvestment),
    }),
    evidence({
      id: "peer-growth-gap",
      label: "Forward growth versus peer median",
      value:
        currentEstimate?.revenueGrowth == null || peerGrowth == null
          ? null
          : round((currentEstimate.revenueGrowth - peerGrowth) * 100, 1),
      unit: "pp",
      period: "Current fiscal year",
      source: "Yahoo Finance consensus / peer set",
      formula: "Forward revenue growth minus peer median trailing growth",
      maxPoints: 4,
      score:
        currentEstimate?.revenueGrowth == null || peerGrowth == null
          ? null
          : growthBand(currentEstimate.revenueGrowth - peerGrowth),
    }),
  ];

  const evidenceItems = [
    ...revenuePoints,
    ...epsPoints,
    ...demandPoints,
    ...visibilityPoints,
    ...runwayPoints,
  ];
  const available = evidenceItems.filter((item) => item.available);

  return componentScore({
    key: "growth",
    label: "Growth",
    weight: 0.25,
    evidence: evidenceItems,
    summary:
      available.length === 0
        ? "Insufficient financial history to calculate a growth score."
        : `Revenue growth, EPS growth, demand quality and forward estimates. ${available.length}/${evidenceItems.length} inputs available.`,
  });
}
