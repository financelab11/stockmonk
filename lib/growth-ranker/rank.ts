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
};

export function rankResults(results: ForecastResult[]): RankedRow[] {
  return [...results]
    .sort((a, b) => {
      const diff = b.cagr_3y.base - a.cagr_3y.base;
      return Math.abs(diff) > 1e-12 ? diff : a.ticker.localeCompare(b.ticker);
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
    }));
}

export function filterRankedRows(
  rows: RankedRow[],
  options: { q?: string; method?: string },
): RankedRow[] {
  const query = (options.q ?? "").trim().toLowerCase();
  return rows.filter((row) => {
    if (options.method && row.method !== options.method) return false;
    if (!query) return true;
    return (
      row.ticker.toLowerCase().includes(query) ||
      row.name.toLowerCase().includes(query) ||
      row.sector.toLowerCase().includes(query)
    );
  });
}

export function resultsToCsv(rows: RankedRow[], fxRate: number): string {
  const header = [
    "rank",
    "ticker",
    "name",
    "sector",
    "market_cap_inr",
    "market_cap_usd_m",
    "market_cap_as_of",
    "base_year",
    "base_revenue_inr",
    "fy3_revenue_inr",
    "cagr_base",
    "cagr_bear",
    "cagr_bull",
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
      row.marketCapInr,
      row.marketCapInr / fxRate / 1_000_000,
      row.marketCapAsOf,
      row.baseYear,
      row.baseRevenue,
      row.fy3Revenue,
      row.cagrBase,
      row.cagrBear,
      row.cagrBull,
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
