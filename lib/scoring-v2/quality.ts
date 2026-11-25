import type { ScoreEvidence } from "./types";
import {
  accrualBand,
  cashConversionBand,
  dilutionBand,
  interestCoverBand,
  leverageBand,
  marginBand,
  qualityBand,
  reinvestmentBand,
  thresholdScore,
  yieldBand,
} from "./bands";
import {
  annualRows,
  latestAnnual,
  marginTrend,
  shareCountChange,
  ttmOrAnnual,
  yoy,
} from "./financials";
import type { V2Input } from "./input";
import {
  componentScore,
  evidence,
  finite,
  round,
  safeDiv,
} from "./util";

function stdDev(values: number[]): number | null {
  if (values.length < 2) return null;
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  return Math.sqrt(
    values.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
      (values.length - 1),
  );
}

function wacc(input: V2Input): number | null {
  const data = input.data;
  const equity = data.latestPrice.marketCap;
  const debt = latestAnnual(data)?.totalDebt;
  if (!finite(equity) || equity <= 0) return null;
  const debtValue = finite(debt) ? Math.max(0, debt) : 0;
  const total = equity + debtValue;
  if (total <= 0) return null;
  const annual = latestAnnual(data);
  const interest = finite(annual?.interestExpense)
    ? Math.abs(annual.interestExpense)
    : 0;
  const costDebt =
    debtValue > 0 && interest > 0
      ? Math.min(0.12, Math.max(0.03, interest / debtValue))
      : 0.05;
  const costEquity = 0.043 + 0.055;
  const taxRate = 0.21;
  return (
    (equity / total) * costEquity +
    (debtValue / total) * costDebt * (1 - taxRate)
  );
}

function roicPersistence(input: V2Input, hurdle: number | null): number | null {
  if (hurdle == null) return null;
  const rows = annualRows(input.data).slice(-5);
  if (!rows.length) return null;
  const years = rows.filter(
    (row) => finite(row.roic) && row.roic > hurdle,
  ).length;
  return (years / rows.length) * 100;
}

function revenueConsistency(input: V2Input): number | null {
  const rows = annualRows(input.data).slice(-5);
  if (rows.length < 2) return null;
  let positive = 0;
  let total = 0;
  for (let index = 1; index < rows.length; index += 1) {
    const growth = yoy(rows[index].revenue, rows[index - 1].revenue);
    if (growth == null) continue;
    total += 1;
    if (growth > 0) positive += 1;
  }
  return total ? (positive / total) * 100 : null;
}

function marginStability(input: V2Input): number | null {
  const values = annualRows(input.data)
    .slice(-5)
    .map((row) => row.operatingMargin)
    .filter((value): value is number => finite(value));
  const deviation = stdDev(values);
  if (deviation == null) return null;
  return thresholdScore(deviation, [
    [0.01, 100],
    [0.03, 85],
    [0.05, 65],
    [0.1, 35],
    [0.2, 10],
    [0.3, 0],
  ]);
}

function receivablesGap(input: V2Input): number | null {
  const rows = annualRows(input.data);
  if (rows.length < 2) return null;
  const latest = rows.at(-1)!;
  const prior = rows.at(-2)!;
  const revenue = yoy(latest.revenue, prior.revenue);
  const receivables = yoy(latest.receivables, prior.receivables);
  const inventory = yoy(latest.inventory, prior.inventory);
  if (revenue == null) return null;
  const gaps = [receivables, inventory]
    .filter((value): value is number => value != null)
    .map((value) => value - revenue);
  if (!gaps.length) return null;
  return gaps.reduce((sum, value) => sum + value, 0) / gaps.length;
}

function inventoryGap(input: V2Input): number | null {
  const rows = annualRows(input.data);
  if (rows.length < 2) return null;
  const latest = rows.at(-1)!;
  const prior = rows.at(-2)!;
  const revenue = yoy(latest.revenue, prior.revenue);
  const inventory = yoy(latest.inventory, prior.inventory);
  if (revenue == null || inventory == null) return null;
  return inventory - revenue;
}

function accrualRatio(input: V2Input): number | null {
  const annual = latestAnnual(input.data);
  if (!annual || !finite(annual.netIncome) || !finite(annual.cfo)) return null;
  const assets = annual.totalAssets;
  if (!finite(assets) || assets <= 0) return null;
  return (annual.netIncome - annual.cfo) / assets;
}

function shareholderYield(input: V2Input): number | null {
  const annual = latestAnnual(input.data);
  const marketCap = input.data.latestPrice.marketCap;
  if (!annual || !finite(marketCap) || marketCap <= 0) return null;
  const dividends = finite(annual.dividendsPaid)
    ? Math.abs(annual.dividendsPaid)
    : 0;
  const buybacks = finite(annual.buybacks) ? Math.abs(annual.buybacks) : 0;
  return (dividends + buybacks) / marketCap;
}

function positiveSurpriseRate(input: V2Input): number | null {
  const history = input.consensus?.history ?? [];
  if (!history.length) return null;
  const rows = history.filter(
    (row) => finite(row.epsActual) && finite(row.epsEstimate),
  );
  if (!rows.length) return null;
  return (
    (rows.filter((row) => row.epsActual! >= row.epsEstimate!).length /
      rows.length) *
    100
  );
}

export function qualityScore(input: V2Input) {
  const { data, peerContext } = input;
  const annual = latestAnnual(data);
  const metrics = data.metrics;
  const costOfCapital = wacc(input);
  const roicSpread =
    metrics.roic != null && costOfCapital != null
      ? metrics.roic - costOfCapital
      : null;
  const roa = safeDiv(annual?.netIncome, annual?.totalAssets);
  const cfoPat = safeDiv(ttmOrAnnual(data, "cfo"), ttmOrAnnual(data, "netIncome"));
  const fcfConversion = safeDiv(
    metrics.freeCashFlowTtm,
    ttmOrAnnual(data, "netIncome"),
  );
  const grossMarginGap =
    metrics.grossMargin != null && peerContext.median.grossMargin != null
      ? metrics.grossMargin - peerContext.median.grossMargin
      : null;
  const persistence = roicPersistence(input, costOfCapital);
  const stability = marginStability(input);
  const consistency = revenueConsistency(input);
  const scale = peerContext.percentile.marketCap;
  const dilution = shareCountChange(data);
  const shareholder = shareholderYield(input);
  const capexRatio = safeDiv(
    annual?.capex == null ? null : Math.abs(annual.capex),
    annual?.revenue,
  );
  const surpriseRate = positiveSurpriseRate(input);
  const netDebtEbitda = metrics.netDebtToEbitda;
  const interestCover = metrics.interestCover;
  const cashToDebt = safeDiv(
    annual?.cashAndInvestments,
    annual?.totalDebt == null ? null : Math.abs(annual.totalDebt),
  );
  const accruals = accrualRatio(input);
  const gap = receivablesGap(input);
  const invGap = inventoryGap(input);
  const gapScore =
    gap == null
      ? null
      : gap <= 0
        ? 100
        : gap <= 0.05
          ? 75
          : gap <= 0.1
            ? 45
            : 10;
  const invGapScore =
    invGap == null
      ? null
      : invGap <= 0
        ? 100
        : invGap <= 0.05
          ? 75
          : invGap <= 0.1
            ? 45
            : 10;
  const roicTrendValue = marginTrend(data, "roic", 3);

  const returns: ScoreEvidence[] = [
    evidence({
      id: "roic",
      label: "Return on invested capital",
      value: metrics.roic == null ? null : round(metrics.roic * 100, 1),
      unit: "%",
      period: "TTM",
      source: "SEC XBRL",
      formula: "After-tax operating income / invested capital",
      maxPoints: 6,
      score: qualityBand(metrics.roic),
    }),
    evidence({
      id: "roe",
      label: "Return on equity",
      value: metrics.roe == null ? null : round(metrics.roe * 100, 1),
      unit: "%",
      period: "TTM",
      source: "SEC XBRL",
      formula: "Net income / shareholders' equity",
      maxPoints: 4,
      score: qualityBand(metrics.roe),
    }),
    evidence({
      id: "roa",
      label: "Return on assets",
      value: roa == null ? null : round(roa * 100, 1),
      unit: "%",
      period: "Latest fiscal year",
      source: "SEC XBRL",
      formula: "Net income / total assets",
      maxPoints: 3,
      score: qualityBand(roa),
    }),
    evidence({
      id: "roic-trend",
      label: "ROIC trend",
      value:
        roicTrendValue == null ? null : round(roicTrendValue * 100, 1),
      unit: "pp",
      period: "3 fiscal years",
      source: "SEC XBRL",
      formula: "Latest ROIC minus ROIC three years earlier",
      maxPoints: 4,
      score: qualityBand(roicTrendValue),
    }),
    evidence({
      id: "roic-wacc",
      label: "ROIC less estimated WACC",
      value: roicSpread == null ? null : round(roicSpread * 100, 1),
      unit: "pp",
      period: "TTM",
      source: "SEC XBRL / estimated cost of capital",
      formula:
        "ROIC minus (equity weight × 9.8% + debt weight × after-tax cost of debt)",
      maxPoints: 4,
      score:
        roicSpread == null
          ? null
          : thresholdScore(roicSpread, [
              [-0.1, 0],
              [-0.05, 20],
              [0, 40],
              [0.05, 65],
              [0.1, 85],
              [0.2, 100],
            ]),
    }),
    evidence({
      id: "gross-margin",
      label: "Gross margin",
      value:
        metrics.grossMargin == null
          ? null
          : round(metrics.grossMargin * 100, 1),
      unit: "%",
      period: "TTM",
      source: "SEC XBRL",
      formula: "Gross profit / revenue",
      maxPoints: 2,
      score: marginBand(metrics.grossMargin),
    }),
    evidence({
      id: "operating-margin",
      label: "Operating margin",
      value:
        metrics.operatingMargin == null
          ? null
          : round(metrics.operatingMargin * 100, 1),
      unit: "%",
      period: "TTM",
      source: "SEC XBRL",
      formula: "Operating income / revenue",
      maxPoints: 3,
      score: marginBand(metrics.operatingMargin),
    }),
    evidence({
      id: "fcf-margin",
      label: "Free-cash-flow margin",
      value:
        metrics.fcfMargin == null ? null : round(metrics.fcfMargin * 100, 1),
      unit: "%",
      period: "TTM",
      source: "SEC XBRL",
      formula: "Free cash flow / revenue",
      maxPoints: 3,
      score: marginBand(metrics.fcfMargin),
    }),
    evidence({
      id: "cfo-pat",
      label: "CFO / net income",
      value: cfoPat == null ? null : round(cfoPat, 2),
      unit: "x",
      period: "TTM",
      source: "SEC XBRL",
      formula: "Operating cash flow / net income",
      maxPoints: 1.25,
      score: cashConversionBand(cfoPat),
    }),
    evidence({
      id: "fcf-conversion",
      label: "FCF / net income",
      value: fcfConversion == null ? null : round(fcfConversion, 2),
      unit: "x",
      period: "TTM",
      source: "SEC XBRL",
      formula: "Free cash flow / net income",
      maxPoints: 1,
      score: cashConversionBand(fcfConversion),
    }),
  ];

  const moat: ScoreEvidence[] = [
    evidence({
      id: "gross-margin-premium",
      label: "Gross-margin premium to peers",
      value: grossMarginGap == null ? null : round(grossMarginGap * 100, 1),
      unit: "pp",
      period: "TTM",
      source: "SEC XBRL / peer set",
      formula: "Company gross margin minus peer median operating margin",
      maxPoints: 5,
      score:
        grossMarginGap == null
          ? null
          : thresholdScore(grossMarginGap, [
              [-0.2, 0],
              [-0.1, 25],
              [0, 50],
              [0.1, 75],
              [0.2, 90],
              [0.3, 100],
            ]),
      reason:
        grossMarginGap == null
          ? "Gross-margin or peer comparison unavailable."
          : undefined,
    }),
    evidence({
      id: "roic-persistence",
      label: "ROIC above WACC, years",
      value: persistence == null ? null : round(persistence, 0),
      unit: "% of years",
      period: "Last 5 fiscal years",
      source: "SEC XBRL",
      formula: "Share of years with ROIC above estimated WACC",
      maxPoints: 5,
      score: persistence,
    }),
    evidence({
      id: "margin-stability",
      label: "Operating-margin stability",
      value: stability,
      unit: "score",
      period: "Last 5 fiscal years",
      source: "SEC XBRL",
      formula: "Score from standard deviation of annual operating margins",
      maxPoints: 5,
      score: stability,
      reason:
        stability == null
          ? "Fewer than two annual operating margins available."
          : undefined,
    }),
    evidence({
      id: "revenue-consistency",
      label: "Revenue growth consistency",
      value: consistency == null ? null : round(consistency, 0),
      unit: "% of years",
      period: "Last 5 fiscal years",
      source: "SEC XBRL",
      formula: "Share of years with positive revenue growth",
      maxPoints: 5,
      score: consistency,
    }),
    evidence({
      id: "scale",
      label: "Scale within peer set",
      value: scale == null ? null : round(scale, 0),
      unit: "percentile",
      period: "Latest market cap",
      source: "Yahoo Finance / peer set",
      formula: "Market-cap percentile among peers",
      maxPoints: 5,
      score: scale,
    }),
  ];

  const management: ScoreEvidence[] = [
    evidence({
      id: "dilution",
      label: "Diluted share-count change",
      value: dilution == null ? null : round(dilution * 100, 2),
      unit: "%",
      period: "Latest fiscal year",
      source: "SEC XBRL",
      formula: "Implied diluted shares, latest versus prior year",
      maxPoints: 6,
      score: dilutionBand(dilution),
    }),
    evidence({
      id: "shareholder-yield",
      label: "Dividends plus buybacks",
      value: shareholder == null ? null : round(shareholder * 100, 2),
      unit: "% of market cap",
      period: "Latest fiscal year",
      source: "SEC XBRL / Yahoo Finance",
      formula: "(Dividends paid + buybacks) / market capitalisation",
      maxPoints: 5,
      score: yieldBand(shareholder),
    }),
    evidence({
      id: "capex-discipline",
      label: "Capex intensity",
      value: capexRatio == null ? null : round(capexRatio * 100, 1),
      unit: "% of revenue",
      period: "Latest fiscal year",
      source: "SEC XBRL",
      formula: "Capital expenditure / revenue",
      maxPoints: 4,
      score: reinvestmentBand(capexRatio),
    }),
    evidence({
      id: "surprise-rate",
      label: "Positive EPS surprise rate",
      value: surpriseRate == null ? null : round(surpriseRate, 0),
      unit: "% of quarters",
      period: "Last four reported quarters",
      source: "Yahoo Finance consensus",
      formula: "Share of quarters with EPS at or above consensus",
      maxPoints: 5,
      score: surpriseRate,
    }),
    evidence({
      id: "insider-ownership",
      label: "Insider ownership and Form 4 activity",
      value: null,
      unit: "%",
      period: null,
      source: "SEC Form 4 / DEF 14A",
      formula: "Insider ownership and net open-market purchases",
      maxPoints: 5,
      score: null,
      available: false,
      reason: "Form 4 and beneficial-ownership ingestion is not yet implemented.",
    }),
  ];

  const resilience: ScoreEvidence[] = [
    evidence({
      id: "net-debt-ebitda",
      label: "Net debt / EBITDA",
      value: netDebtEbitda == null ? null : round(netDebtEbitda, 2),
      unit: "x",
      period: "TTM",
      source: "SEC XBRL",
      formula: "Net debt / EBITDA",
      maxPoints: 5,
      score: leverageBand(netDebtEbitda),
    }),
    evidence({
      id: "interest-cover",
      label: "Interest cover",
      value: interestCover == null ? null : round(interestCover, 2),
      unit: "x",
      period: "TTM",
      source: "SEC XBRL",
      formula: "Operating income / interest expense",
      maxPoints: 4,
      score: interestCoverBand(interestCover),
    }),
    evidence({
      id: "cash-to-debt",
      label: "Cash / total debt",
      value: cashToDebt == null ? null : round(cashToDebt, 2),
      unit: "x",
      period: "Latest fiscal year",
      source: "SEC XBRL",
      formula: "Cash and investments / total debt",
      maxPoints: 3,
      score:
        cashToDebt == null
          ? null
          : thresholdScore(cashToDebt, [
              [0, 0],
              [0.1, 20],
              [0.25, 45],
              [0.5, 70],
              [1, 90],
              [1.5, 100],
            ]),
    }),
    evidence({
      id: "accruals",
      label: "Accrual ratio",
      value: accruals == null ? null : round(accruals * 100, 2),
      unit: "% of assets",
      period: "Latest fiscal year",
      source: "SEC XBRL",
      formula: "(Net income - operating cash flow) / total assets",
      maxPoints: 3,
      score: accrualBand(accruals),
    }),
    evidence({
      id: "working-capital-gap",
      label: "Receivables/inventory growth vs revenue",
      value: gap == null ? null : round(gap * 100, 1),
      unit: "pp",
      period: "Latest fiscal year",
      source: "SEC XBRL",
      formula: "Average of receivables and inventory growth minus revenue growth",
      maxPoints: 2,
      score: gapScore,
      reason:
        gap == null ? "Receivables or inventory data unavailable." : undefined,
    }),
    evidence({
      id: "inventory-gap",
      label: "Inventory growth vs revenue",
      value: invGap == null ? null : round(invGap * 100, 1),
      unit: "pp",
      period: "Latest fiscal year",
      source: "SEC XBRL",
      formula: "Inventory growth minus revenue growth",
      maxPoints: 1,
      score: invGapScore,
      reason:
        invGap == null
          ? "Inventory data is unavailable for this company."
          : undefined,
    }),
    evidence({
      id: "goodwill",
      label: "Goodwill and intangibles / assets",
      value: null,
      unit: "%",
      period: null,
      source: "SEC XBRL",
      formula: "Goodwill and intangibles / total assets",
      maxPoints: 0.75,
      score: null,
      available: false,
      reason: "Goodwill and intangible detail is not in the current dataset.",
    }),
  ];

  const evidenceItems = [
    ...returns,
    ...moat,
    ...management,
    ...resilience,
  ];
  const available = evidenceItems.filter((item) => item.available);

  return componentScore({
    key: "quality",
    label: "Quality",
    weight: 0.35,
    evidence: evidenceItems,
    summary:
      available.length === 0
        ? "Insufficient financial history to calculate a quality score."
        : `Returns, moat evidence, capital allocation and balance-sheet resilience. ${available.length}/${evidenceItems.length} inputs available.`,
  });
}
