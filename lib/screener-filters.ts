import {
  formatCompactCurrency,
  formatCurrency,
  formatMultiple,
  formatPercent,
} from "./format";
import type { ScreenerRow } from "./screener-model";

export type FilterUnit = "pct" | "x" | "num" | "currency" | "currencyB" | "score";

export type FilterDef = {
  key: string;
  label: string;
  category: string;
  unit: FilterUnit;
  description: string;
  get: (row: ScreenerRow) => number | null;
};

export type FilterDistribution = {
  key: string;
  label: string;
  category: string;
  unit: FilterUnit;
  description: string;
  min: number;
  max: number;
  sliderMin: number;
  sliderMax: number;
  bins: number[];
  logScale: boolean;
};

export type FilterRow = {
  /** ticker */
  t: string;
  /** name */
  n: string;
  /** coverage group */
  g: string;
  /** values aligned with FILTER_DEFS order */
  v: (number | null)[];
};

export type RangeParams = Record<string, number | null>;

export type ScreenerUiParams = {
  q: string;
  group: string;
  min: number;
  view: "overview" | "growth" | "quality" | "valuation" | "momentum" | "lowVolatility";
  sort: string;
  dir: "asc" | "desc";
  page: number;
  open: string;
  cols: string[];
  ranges: RangeParams;
};

export const FILTER_CATEGORIES = [
  "Size & Price",
  "Returns",
  "Valuation",
  "Profitability",
  "Growth",
  "Financial Health",
  "Momentum",
  "Scores",
] as const;

export const FILTER_DEFS: FilterDef[] = [
  {
    key: "marketCapB",
    label: "Market cap ($B)",
    category: "Size & Price",
    unit: "currencyB",
    description: "Latest market capitalisation in billions of dollars.",
    get: (row) => (row.marketCap == null ? null : row.marketCap / 1e9),
  },
  {
    key: "price",
    label: "Price ($)",
    category: "Size & Price",
    unit: "currency",
    description: "Latest closing price.",
    get: (row) => row.price,
  },
  { key: "return1d", label: "1D return", category: "Returns", unit: "pct", description: "Latest session return.", get: (row) => row.return1d },
  { key: "return1w", label: "1W return", category: "Returns", unit: "pct", description: "One-week price return.", get: (row) => row.return1w },
  { key: "return1m", label: "1M return", category: "Returns", unit: "pct", description: "One-month price return.", get: (row) => row.return1m },
  { key: "return3m", label: "3M return", category: "Returns", unit: "pct", description: "Three-month price return.", get: (row) => row.return3m },
  { key: "return6m", label: "6M return", category: "Returns", unit: "pct", description: "Six-month price return.", get: (row) => row.return6m },
  { key: "return1y", label: "1Y return", category: "Returns", unit: "pct", description: "Twelve-month price return.", get: (row) => row.return1y },
  { key: "return3y", label: "3Y return", category: "Returns", unit: "pct", description: "Three-year price return.", get: (row) => row.return3y },
  { key: "return5y", label: "5Y return", category: "Returns", unit: "pct", description: "Five-year price return.", get: (row) => row.return5y },
  { key: "pe", label: "P/E", category: "Valuation", unit: "x", description: "Market cap divided by trailing net income.", get: (row) => row.pe },
  { key: "pb", label: "P/B", category: "Valuation", unit: "x", description: "Market cap divided by book equity.", get: (row) => row.pb },
  { key: "evEbitda", label: "EV/EBITDA", category: "Valuation", unit: "x", description: "Enterprise value divided by EBITDA.", get: (row) => row.evEbitda },
  { key: "peg", label: "PEG", category: "Valuation", unit: "x", description: "Forward P/E divided by consensus EPS growth.", get: (row) => row.peg },
  { key: "dividendYield", label: "Dividend yield", category: "Valuation", unit: "pct", description: "Dividend per share divided by price.", get: (row) => row.dividendYield },
  { key: "roce", label: "ROCE", category: "Profitability", unit: "pct", description: "Operating income divided by capital employed.", get: (row) => row.roce },
  { key: "roe", label: "ROE", category: "Profitability", unit: "pct", description: "Net income divided by shareholders' equity.", get: (row) => row.roe },
  { key: "operatingMargin", label: "Operating margin", category: "Profitability", unit: "pct", description: "Operating income divided by revenue.", get: (row) => row.operatingMargin },
  { key: "netMargin", label: "Net margin", category: "Profitability", unit: "pct", description: "Net income divided by revenue.", get: (row) => row.netMargin },
  { key: "fcfMargin", label: "FCF margin", category: "Profitability", unit: "pct", description: "Free cash flow divided by revenue.", get: (row) => row.factors.quality.parameters.fcfMargin?.value ?? null },
  { key: "revenueGrowth", label: "Revenue growth", category: "Growth", unit: "pct", description: "Trailing revenue growth.", get: (row) => row.revenueGrowth },
  { key: "growthScore", label: "Growth score", category: "Growth", unit: "score", description: "Composite growth factor score.", get: (row) => row.factors.growth.score },
  { key: "qualityScore", label: "Quality score", category: "Profitability", unit: "score", description: "Composite quality factor score.", get: (row) => row.factors.quality.score },
  { key: "netDebtEbitda", label: "Net debt / EBITDA", category: "Financial Health", unit: "x", description: "Net debt divided by EBITDA.", get: (row) => row.netDebtEbitda },
  { key: "assetTurnover", label: "Asset turnover", category: "Financial Health", unit: "x", description: "Revenue divided by average total assets.", get: (row) => row.assetTurnover },
  { key: "momentumScore", label: "Momentum score", category: "Momentum", unit: "score", description: "Composite momentum factor score.", get: (row) => row.factors.momentum.score },
  { key: "priceVs50dma", label: "Price vs 50 DMA", category: "Momentum", unit: "pct", description: "Latest price relative to the 50-day moving average.", get: (row) => row.priceVs50dma },
  { key: "priceVs200dma", label: "Price vs 200 DMA", category: "Momentum", unit: "pct", description: "Latest price relative to the 200-day moving average.", get: (row) => row.priceVs200dma },
  { key: "lowVolatilityScore", label: "Low volatility score", category: "Scores", unit: "score", description: "Composite low-volatility factor score.", get: (row) => row.factors.lowVolatility.score },
  { key: "valuationScore", label: "Valuation score", category: "Scores", unit: "score", description: "Composite valuation factor score.", get: (row) => row.factors.valuation.score },
  { key: "composite", label: "Composite score", category: "Scores", unit: "score", description: "Weighted five-factor composite score.", get: (row) => row.composite },
  { key: "historicalValuation", label: "Cheap vs own history", category: "Valuation", unit: "score", description: "Cheapness percentile versus the company's own five-year P/E history.", get: (row) => row.historicalValuation },
  { key: "roicTrend", label: "ROIC trend", category: "Profitability", unit: "pct", description: "Change in ROIC over three years.", get: (row) => row.roicTrend },
];

export function formatFilterValue(value: number | null, unit: FilterUnit): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  if (unit === "pct") return formatPercent(Math.abs(value) < 0.0005 ? 0 : value);
  if (unit === "x") return formatMultiple(value);
  if (unit === "currency") return formatCurrency(value);
  if (unit === "currencyB")
    return value >= 1000
      ? `$${(value / 1000).toFixed(2)}T`
      : `$${value.toFixed(1)}B`;
  if (unit === "score") return `${Math.round(value)}`;
  return value.toFixed(2);
}

export function formatColumnValue(
  row: ScreenerRow,
  key: string,
): string {
  const column = SCREENER_COLUMNS.find((item) => item.key === key);
  if (!column) return "n/a";
  const value = column.get(row);
  return column.unit === "currencyB"
    ? value == null
      ? "n/a"
      : formatCompactCurrency(row.marketCap)
    : formatFilterValue(value, column.unit);
}

export type ColumnDef = {
  key: string;
  label: string;
  group: string;
  unit: FilterUnit;
  get: (row: ScreenerRow) => number | null;
  default?: boolean;
  align?: "left" | "right";
};

export const SCREENER_COLUMNS: ColumnDef[] = [
  { key: "marketCap", label: "Mkt cap", group: "Size & Price", unit: "currencyB", get: (row) => row.marketCap, default: true },
  { key: "price", label: "Price", group: "Size & Price", unit: "currency", get: (row) => row.price, default: false },
  { key: "return1d", label: "1D", group: "Returns", unit: "pct", get: (row) => row.return1d, default: false },
  { key: "return1w", label: "1W", group: "Returns", unit: "pct", get: (row) => row.return1w, default: false },
  { key: "return1m", label: "1M", group: "Returns", unit: "pct", get: (row) => row.return1m, default: false },
  { key: "return3m", label: "3M", group: "Returns", unit: "pct", get: (row) => row.return3m, default: false },
  { key: "return6m", label: "6M", group: "Returns", unit: "pct", get: (row) => row.return6m, default: false },
  { key: "return1y", label: "1Y", group: "Returns", unit: "pct", get: (row) => row.return1y, default: true },
  { key: "return3y", label: "3Y", group: "Returns", unit: "pct", get: (row) => row.return3y, default: false },
  { key: "return5y", label: "5Y", group: "Returns", unit: "pct", get: (row) => row.return5y, default: false },
  { key: "pe", label: "P/E", group: "Valuation", unit: "x", get: (row) => row.pe, default: true },
  { key: "pb", label: "P/B", group: "Valuation", unit: "x", get: (row) => row.pb, default: true },
  { key: "evEbitda", label: "EV/EBITDA", group: "Valuation", unit: "x", get: (row) => row.evEbitda, default: true },
  { key: "peg", label: "PEG", group: "Valuation", unit: "x", get: (row) => row.peg, default: false },
  { key: "dividendYield", label: "Div yield", group: "Valuation", unit: "pct", get: (row) => row.dividendYield, default: true },
  { key: "roce", label: "ROCE", group: "Profitability", unit: "pct", get: (row) => row.roce, default: true },
  { key: "roe", label: "ROE", group: "Profitability", unit: "pct", get: (row) => row.roe, default: true },
  { key: "operatingMargin", label: "Op margin", group: "Profitability", unit: "pct", get: (row) => row.operatingMargin, default: true },
  { key: "netMargin", label: "Net margin", group: "Profitability", unit: "pct", get: (row) => row.netMargin, default: false },
  { key: "revenueGrowth", label: "Rev growth", group: "Growth", unit: "pct", get: (row) => row.revenueGrowth, default: false },
  { key: "growthScore", label: "Growth", group: "Scores", unit: "score", get: (row) => row.factors.growth.score, default: false },
  { key: "qualityScore", label: "Quality", group: "Scores", unit: "score", get: (row) => row.factors.quality.score, default: false },
  { key: "valuationScore", label: "Valuation", group: "Scores", unit: "score", get: (row) => row.factors.valuation.score, default: false },
  { key: "momentumScore", label: "Momentum", group: "Scores", unit: "score", get: (row) => row.factors.momentum.score, default: false },
  { key: "lowVolatilityScore", label: "Low vol", group: "Scores", unit: "score", get: (row) => row.factors.lowVolatility.score, default: false },
  { key: "composite", label: "Composite", group: "Scores", unit: "score", get: (row) => row.composite, default: true },
  { key: "netDebtEbitda", label: "Net debt/EBITDA", group: "Financial Health", unit: "x", get: (row) => row.netDebtEbitda, default: false },
  { key: "priceVs50dma", label: "vs 50 DMA", group: "Momentum", unit: "pct", get: (row) => row.priceVs50dma, default: false },
  { key: "priceVs200dma", label: "vs 200 DMA", group: "Momentum", unit: "pct", get: (row) => row.priceVs200dma, default: false },
];

export const DEFAULT_COLUMNS = SCREENER_COLUMNS.filter((column) => column.default).map((column) => column.key);

export function parseColumns(raw: string | undefined): string[] {
  if (!raw) return DEFAULT_COLUMNS;
  const valid = new Set(SCREENER_COLUMNS.map((column) => column.key));
  const selected = raw
    .split(",")
    .map((key) => key.trim())
    .filter((key) => valid.has(key));
  return selected.length ? selected : DEFAULT_COLUMNS;
}

export function buildFilterRows(rows: ScreenerRow[]): FilterRow[] {
  return rows.map((row) => ({
    t: row.ticker,
    n: row.name,
    g: row.group,
    v: FILTER_DEFS.map((filter) => {
      const value = filter.get(row);
      return value == null || !Number.isFinite(value)
        ? null
        : Math.round(value * 10000) / 10000;
    }),
  }));
}

export function buildFilterDistributions(rows: ScreenerRow[]): FilterDistribution[] {
  return FILTER_DEFS.map((filter) => {
    const values = rows.map(filter.get).filter((value): value is number => value != null && Number.isFinite(value)).sort((a, b) => a - b);
    const min = values[0] ?? 0;
    const max = values.at(-1) ?? 0;
    const sampleAt = (percentile: number) =>
      values[
        Math.min(
          values.length - 1,
          Math.max(0, Math.round((values.length - 1) * percentile)),
        )
      ] ?? 0;
    // Robust control domain: outliers would otherwise flatten the slider and histogram.
    const sliderMin = values.length ? sampleAt(0.05) : 0;
    const sliderMax = values.length ? sampleAt(0.95) : 0;
    const logScale = filter.unit === "currencyB" && sliderMin > 0;
    const withinDomain = values.filter(
      (value) => value >= sliderMin && value <= sliderMax,
    );
    const transformed = logScale ? withinDomain.map((value) => Math.log10(value)) : withinDomain;
    const domainMin = logScale ? Math.log10(Math.max(sliderMin, 1e-9)) : sliderMin;
    const domainMax = logScale ? Math.log10(Math.max(sliderMax, 1e-9)) : sliderMax;
    const bins = new Array(12).fill(0) as number[];
    for (const value of transformed) {
      const index =
        domainMax === domainMin
          ? 0
          : Math.min(11, Math.max(0, Math.floor(((value - domainMin) / (domainMax - domainMin)) * 12)));
      bins[index] += 1;
    }
    return {
      key: filter.key,
      label: filter.label,
      category: filter.category,
      unit: filter.unit,
      description: filter.description,
      min,
      max,
      sliderMin,
      sliderMax,
      bins,
      logScale,
    };
  });
}

export function parseScreenerParams(
  raw: Record<string, string | string[] | undefined>,
): ScreenerUiParams {
  const number = (value: string | string[] | undefined): number | null => {
    if (typeof value !== "string" || value.trim() === "") return null;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  };
  const ranges: RangeParams = {};
  for (const filter of FILTER_DEFS) {
    ranges[`${filter.key}Min`] = number(raw[`${filter.key}Min`]);
    ranges[`${filter.key}Max`] = number(raw[`${filter.key}Max`]);
  }
  const view = ["growth", "quality", "valuation", "momentum", "lowVolatility"].includes(String(raw.view))
    ? (raw.view as ScreenerUiParams["view"])
    : "overview";
  return {
    q: typeof raw.q === "string" ? raw.q : "",
    group: typeof raw.group === "string" ? raw.group : "",
    min: typeof raw.min === "string" && raw.min !== "" ? Number(raw.min) || 0 : 0,
    view,
    sort: typeof raw.sort === "string" ? raw.sort : view === "overview" ? "composite" : view,
    dir: raw.dir === "asc" ? "asc" : "desc",
    page: Math.max(1, Number(raw.page) || 1),
    open: typeof raw.open === "string" ? raw.open : "",
    cols: parseColumns(typeof raw.cols === "string" ? raw.cols : undefined),
    ranges,
  };
}

export function buildScreenerUrl(
  params: ScreenerUiParams,
  overrides: Partial<Omit<ScreenerUiParams, "ranges">> & { ranges?: RangeParams } = {},
): string {
  const next = { ...params, ...overrides };
  const search = new URLSearchParams();
  if (next.q) search.set("q", next.q);
  if (next.group) search.set("group", next.group);
  if (next.min) search.set("min", String(next.min));
  if (next.view !== "overview") search.set("view", next.view);
  if (next.sort) search.set("sort", next.sort);
  if (next.dir !== "desc") search.set("dir", next.dir);
  if (next.cols.length) search.set("cols", next.cols.join(","));
  if (next.page > 1) search.set("page", String(next.page));
  if (next.open) search.set("open", next.open);
  for (const [key, value] of Object.entries(next.ranges)) {
    if (value != null) search.set(key, String(value));
  }
  const query = search.toString();
  return query ? `/screener?${query}` : "/screener";
}

export function matchesFilters(row: ScreenerRow, params: ScreenerUiParams): boolean {
  if (params.group && row.group !== params.group) return false;
  if (params.min && (row.composite ?? 0) < params.min) return false;
  const term = params.q.trim().toLowerCase();
  if (
    term &&
    !`${row.ticker} ${row.name} ${row.group} ${row.sector}`.toLowerCase().includes(term)
  ) {
    return false;
  }
  for (const filter of FILTER_DEFS) {
    const min = params.ranges[`${filter.key}Min`];
    const max = params.ranges[`${filter.key}Max`];
    if (min == null && max == null) continue;
    const value = filter.get(row);
    if (value == null || !Number.isFinite(value)) return false;
    if (min != null && value < min) return false;
    if (max != null && value > max) return false;
  }
  return true;
}

export function applyScreenerFilters(
  rows: ScreenerRow[],
  params: ScreenerUiParams,
): ScreenerRow[] {
  return rows.filter((row) => matchesFilters(row, params));
}

const FILTER_INDEX = new Map(FILTER_DEFS.map((filter, index) => [filter.key, index]));
const COMPOSITE_INDEX = FILTER_INDEX.get("composite") ?? -1;

export function countFilterRows(
  rows: FilterRow[],
  params: ScreenerUiParams,
): number {
  const term = params.q.trim().toLowerCase();
  return rows.filter((row) => {
    if (params.group && row.g !== params.group) return false;
    if (term && !`${row.t} ${row.n} ${row.g}`.toLowerCase().includes(term)) return false;
    const composite = COMPOSITE_INDEX >= 0 ? row.v[COMPOSITE_INDEX] : null;
    if (params.min && (composite ?? 0) < params.min) return false;
    for (let index = 0; index < FILTER_DEFS.length; index += 1) {
      const filter = FILTER_DEFS[index];
      const min = params.ranges[`${filter.key}Min`];
      const max = params.ranges[`${filter.key}Max`];
      if (min == null && max == null) continue;
      const value = row.v[index];
      if (value == null || !Number.isFinite(value)) return false;
      if (min != null && value < min) return false;
      if (max != null && value > max) return false;
    }
    return true;
  }).length;
}

export type ResearchScreen = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  params: Record<string, string>;
  count: number;
};

export function buildResearchScreens(rows: ScreenerRow[]): ResearchScreen[] {
  const defs: Array<Omit<ResearchScreen, "count">> = [
    {
      id: "high-quality",
      name: "High Quality Businesses",
      description: "Top-quintile quality scores driven by returns on capital, margins and cash conversion.",
      tags: ["Quality", "ROIC", "Cash"],
      params: { qualityScoreMin: "70" },
    },
    {
      id: "compounders",
      name: "Consistent Compounders",
      description: "Strong historical growth with quality support.",
      tags: ["Growth", "Quality"],
      params: { growthScoreMin: "65", qualityScoreMin: "60" },
    },
    {
      id: "growth-value",
      name: "High Growth at Reasonable Valuation",
      description: "Above-average growth without paying top-of-range valuation scores.",
      tags: ["Growth", "Valuation"],
      params: { growthScoreMin: "65", valuationScoreMin: "55" },
    },
    {
      id: "cash-generators",
      name: "Cash Flow Generators",
      description: "Businesses converting a meaningful share of revenue into free cash flow.",
      tags: ["Cash", "Quality"],
      params: { fcfMarginMin: "0.08" },
    },
    {
      id: "debt-free",
      name: "Debt-Free Businesses",
      description: "Net cash or low leverage on the balance sheet.",
      tags: ["Balance sheet", "Quality"],
      params: { netDebtEbitdaMax: "0" },
    },
    {
      id: "momentum",
      name: "Momentum Leaders",
      description: "Strong price trends and positive earnings revisions.",
      tags: ["Momentum", "Revisions"],
      params: { momentumScoreMin: "70" },
    },
    {
      id: "low-vol",
      name: "Low Volatility",
      description: "Lower beta, contained drawdowns and steadier returns.",
      tags: ["Low volatility", "Risk"],
      params: { lowVolatilityScoreMin: "70" },
    },
    {
      id: "cheap-history",
      name: "Cheap vs Own History",
      description: "Current multiples sit at the cheap end of the company's own five-year range.",
      tags: ["Valuation", "5-year history"],
      params: { historicalValuationMin: "70" },
    },
    {
      id: "improving-returns",
      name: "Improving Returns",
      description: "ROIC has improved over the last three years with quality support.",
      tags: ["Quality", "Trend"],
      params: { roicTrendMin: "0.01", qualityScoreMin: "55" },
    },
  ];

  return defs.map((screen) => {
    const params: ScreenerUiParams = {
      q: "",
      group: "",
      min: 0,
      view: "overview",
      sort: "composite",
      dir: "desc",
      page: 1,
      open: "",
      cols: DEFAULT_COLUMNS,
      ranges: Object.fromEntries(
        Object.entries(screen.params).map(([key, value]) => [key, Number(value)]),
      ),
    };
    return { ...screen, count: applyScreenerFilters(rows, params).length };
  });
}
