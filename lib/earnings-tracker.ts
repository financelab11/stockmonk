import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import {
  EARNINGS_PAGE_SIZES,
  EARNINGS_SORTS,
  type EarningsParams,
  type EarningsSort,
} from "@/lib/earnings-constants";
import {
  earningsTrackerSchema,
  type EarningsTrackerRow,
} from "@/lib/schemas";

export type { EarningsParams, EarningsSort } from "@/lib/earnings-constants";
export { EARNINGS_PAGE_SIZES, EARNINGS_SORTS } from "@/lib/earnings-constants";

function numberParam(
  raw: Record<string, string | string[] | undefined>,
  key: string,
): number | null {
  const value = raw[key];
  if (typeof value !== "string" || !value.trim()) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function parseEarningsParams(
  raw: Record<string, string | string[] | undefined>,
): EarningsParams {
  const sortValue = typeof raw.sort === "string" ? raw.sort : "";
  const sort = EARNINGS_SORTS.some((entry) => entry.value === sortValue)
    ? (sortValue as EarningsSort)
    : "sales";
  const per = Number(raw.per);
  const page = Number(raw.page);

  return {
    q: typeof raw.q === "string" ? raw.q.trim() : "",
    industry: typeof raw.industry === "string" ? raw.industry : "",
    sort,
    minSales: numberParam(raw, "minSales"),
    minProfit: numberParam(raw, "minProfit"),
    minEps: numberParam(raw, "minEps"),
    maxPe: numberParam(raw, "maxPe"),
    minCap: numberParam(raw, "minCap"),
    maxPeg: numberParam(raw, "maxPeg"),
    minReturn: numberParam(raw, "minReturn"),
    per: EARNINGS_PAGE_SIZES.includes(per as (typeof EARNINGS_PAGE_SIZES)[number])
      ? per
      : 25,
    page: Number.isFinite(page) && page > 0 ? Math.floor(page) : 1,
    includeOlder: raw.all === "1",
  };
}

export function activeEarningsFilters(params: EarningsParams): number {
  const numeric = [
    params.minSales,
    params.minProfit,
    params.minEps,
    params.maxPe,
    params.minCap,
    params.maxPeg,
    params.minReturn,
  ].filter((value) => value != null).length;
  return numeric + (params.q ? 1 : 0) + (params.industry ? 1 : 0);
}

/** Growth figures are stored as fractions; filter inputs arrive as percentages. */
function passesMin(value: number | null, minPercent: number | null): boolean {
  if (minPercent == null) return true;
  if (value == null) return false;
  return value * 100 >= minPercent;
}

function passesMax(value: number | null, max: number | null): boolean {
  if (max == null) return true;
  if (value == null) return false;
  return value <= max;
}

export function filterEarningsRows(
  rows: EarningsTrackerRow[],
  params: EarningsParams,
): EarningsTrackerRow[] {
  const query = params.q.toLowerCase();
  return rows.filter((row) => {
    if (params.industry && row.industry !== params.industry) return false;
    if (!passesMin(row.salesGrowth, params.minSales)) return false;
    if (!passesMin(row.netProfitGrowth, params.minProfit)) return false;
    if (!passesMin(row.epsGrowth, params.minEps)) return false;
    if (!passesMin(row.return1y, params.minReturn)) return false;
    if (!passesMax(row.pe, params.maxPe)) return false;
    if (!passesMax(row.peg, params.maxPeg)) return false;
    if (params.minCap != null) {
      if (row.marketCap == null) return false;
      // Input is ₹ crore; the stored value is rupees.
      if (row.marketCap / 10_000_000 < params.minCap) return false;
    }
    if (query) {
      const haystack = `${row.name} ${row.ticker} ${row.industry}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
}

const ascending: EarningsSort[] = ["name", "pe", "peg"];

export function sortEarningsRows(
  rows: EarningsTrackerRow[],
  sort: EarningsSort,
): EarningsTrackerRow[] {
  const metric = (row: EarningsTrackerRow): number | null => {
    if (sort === "sales") return row.salesGrowth;
    if (sort === "ebitda") return row.ebitdaGrowth;
    if (sort === "profit") return row.netProfitGrowth;
    if (sort === "eps") return row.epsGrowth;
    if (sort === "marketCap") return row.marketCap;
    if (sort === "pe") return row.pe;
    if (sort === "peg") return row.peg;
    if (sort === "return1y") return row.return1y;
    return null;
  };

  return [...rows].sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);

    const left = metric(a);
    const right = metric(b);
    if (left == null && right == null) return a.name.localeCompare(b.name);
    if (left == null) return 1;
    if (right == null) return -1;
    const delta = ascending.includes(sort) ? left - right : right - left;
    if (delta !== 0) return delta;

    const capDelta = (b.marketCap ?? -Infinity) - (a.marketCap ?? -Infinity);
    if (capDelta !== 0) return capDelta;
    return a.name.localeCompare(b.name);
  });
}

export function industriesOf(rows: EarningsTrackerRow[]): string[] {
  return [...new Set(rows.map((row) => row.industry).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b),
  );
}

export function earningsSearch(base: EarningsParams): string {
  const params = new URLSearchParams();
  if (base.q) params.set("q", base.q);
  if (base.industry) params.set("industry", base.industry);
  if (base.sort && base.sort !== "sales") params.set("sort", String(base.sort));
  for (const key of ["minSales", "minProfit", "minEps", "maxPe", "minCap", "maxPeg", "minReturn"] as const) {
    const value = base[key];
    if (value != null) params.set(key, String(value));
  }
  if (base.per !== 25) params.set("per", String(base.per));
  if (base.page && base.page > 1) params.set("page", String(base.page));
  if (base.includeOlder) params.set("all", "1");
  return params.toString();
}

export function buildEarningsUrl(
  base: EarningsParams,
  patch: Partial<Record<keyof EarningsParams, string | number | boolean | null>>,
): string {
  const query = earningsSearch({ ...base, ...patch } as EarningsParams);
  return query ? `/india/earnings-tracker?${query}` : "/india/earnings-tracker";
}

export type EarningsTrackerData = {
  generatedAt: string;
  asOf: string | null;
  source: "filings" | "screener" | "screener-export" | "mixed";
  minMarketCapCr: number | null;
  pricesAsOf: string | null;
  rows: EarningsTrackerRow[];
};

export const readEarningsTracker = cache((): EarningsTrackerData | null => {
  try {
    const parsed = earningsTrackerSchema.parse(
      JSON.parse(
        // Literal path so Next traces only this file, not the whole project.
        fs.readFileSync(
          path.join(process.cwd(), "data", "india", "earnings-tracker.json"),
          "utf8",
        ),
      ),
    );
    return parsed;
  } catch {
    return null;
  }
});

function csvCell(value: string | number | null): string {
  const text = value == null ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function earningsToCsv(rows: EarningsTrackerRow[]): string {
  const header = [
    "Ticker",
    "Company",
    "Industry",
    "Quarter",
    "Sales YoY %",
    "EBITDA YoY %",
    "Net profit YoY %",
    "EPS YoY %",
    "Market cap (INR Cr)",
    "P/E",
    "ROCE %",
    "PEG",
    "1Y return %",
  ];
  const percent = (value: number | null) =>
    value == null ? "" : (value * 100).toFixed(1);
  const lines = rows.map((row) => [
    row.ticker,
    row.name,
    row.industry,
    row.period ?? "",
    percent(row.salesGrowth),
    percent(row.ebitdaGrowth),
    percent(row.netProfitGrowth),
    percent(row.epsGrowth),
    row.marketCap == null ? "" : (row.marketCap / 10_000_000).toFixed(0),
    row.pe == null ? "" : row.pe.toFixed(1),
    percent(row.roce),
    row.peg == null ? "" : row.peg.toFixed(2),
    percent(row.return1y),
  ]);
  return [header, ...lines].map((line) => line.map(csvCell).join(",")).join("\n");
}
