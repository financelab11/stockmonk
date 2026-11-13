import type { ForecastResult } from "./types";

export type RankedRow = {
  rank: number;
  ticker: string;
  name: string;
  sector: string;
  marketCapInr: number;
  marketCapAsOf: string;
  baseYear: string;
  baseRevenue: number;
  fy3Revenue: number;
  cagrBase: number;
  cagrBear: number;
  cagrBull: number;
  method: ForecastResult["method"];
  confidence: ForecastResult["confidence"];
  analystCount: number | null;
  flagged: boolean;
  pe: number | null;
  forwardPe: number | null;
  evEbitda: number | null;
  peg: number | null;
  pFcf: number | null;
  roce: number | null;
  roe: number | null;
  ebitMargin: number | null;
  ebitGrowth: number | null;
  operatingLeverage: number | null;
  growthScore: number | null;
  valuationScore: number | null;
  qualityScore: number | null;
  compositeScore: number | null;
};

export function rankResults(results: ForecastResult[]): RankedRow[] {
  return [...results]
    .sort((a, b) => {
      const scoreDiff = (b.scores.composite ?? -1) - (a.scores.composite ?? -1);
      if (Math.abs(scoreDiff) > 1e-12) return scoreDiff;
      const growthDiff = b.cagr_3y.base - a.cagr_3y.base;
      return Math.abs(growthDiff) > 1e-12
        ? growthDiff
        : a.ticker.localeCompare(b.ticker);
    })
    .map((result, index) => ({
      rank: index + 1,
      ticker: result.ticker,
      name: result.name,
      sector: result.sector,
      marketCapInr: result.market_cap.value,
      marketCapAsOf: result.market_cap.asOf,
      baseYear: result.base_year.label,
      baseRevenue: result.base_year.revenue,
      fy3Revenue: result.projections.FY3.base,
      cagrBase: result.cagr_3y.base,
      cagrBear: result.cagr_3y.bear,
      cagrBull: result.cagr_3y.bull,
      method: result.method,
      confidence: result.confidence,
      analystCount: result.consensus.analystCount,
      flagged: result.consensus.flagged,
      pe: result.valuation.pe,
      forwardPe: result.valuation.forwardPe,
      evEbitda: result.valuation.evEbitda,
      peg: result.valuation.peg,
      pFcf: result.valuation.pFcf,
      roce: result.quality.roce,
      roe: result.quality.roe,
      ebitMargin: result.quality.ebitMargin,
      ebitGrowth: result.quality.ebitGrowth,
      operatingLeverage: result.quality.operatingLeverage,
      growthScore: result.scores.growth,
      valuationScore: result.scores.valuation,
      qualityScore: result.scores.quality,
      compositeScore: result.scores.composite,
    }));
}

export function resultsToCsv(rows: RankedRow[], fxRate: number): string {
  const header = [
    "rank",
    "ticker",
    "name",
    "sector",
    "composite_score",
    "growth_score",
    "valuation_score",
    "quality_score",
    "forward_cagr_base",
    "forward_cagr_bear",
    "forward_cagr_bull",
    "market_cap_inr",
    "market_cap_usd_m",
    "market_cap_as_of",
    "base_year",
    "base_revenue_inr",
    "fy3_revenue_inr",
    "pe",
    "forward_pe",
    "ev_ebitda",
    "peg",
    "p_fcf",
    "roce",
    "roe",
    "ebit_margin",
    "ebit_growth",
    "operating_leverage",
    "method",
    "confidence",
    "analyst_count",
    "divergence_flag",
  ];
  const escape = (value: string | number | boolean | null): string => {
    if (value == null) return "";
    const raw = String(value);
    const text = /^[=+\-@]/.test(raw) ? `'${raw}` : raw;
    return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  };
  const lines = rows.map((row) =>
    [
      row.rank,
      row.ticker,
      row.name,
      row.sector,
      row.compositeScore,
      row.growthScore,
      row.valuationScore,
      row.qualityScore,
      row.cagrBase,
      row.cagrBear,
      row.cagrBull,
      row.marketCapInr,
      row.marketCapInr / fxRate / 1_000_000,
      row.marketCapAsOf,
      row.baseYear,
      row.baseRevenue,
      row.fy3Revenue,
      row.pe,
      row.forwardPe,
      row.evEbitda,
      row.peg,
      row.pFcf,
      row.roce,
      row.roe,
      row.ebitMargin,
      row.ebitGrowth,
      row.operatingLeverage,
      row.method,
      row.confidence,
      row.analystCount,
      row.flagged,
    ]
      .map(escape)
      .join(","),
  );
  return [header.join(","), ...lines].join("\n");
}
