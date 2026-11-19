/**
 * Shared, dependency-free types and option lists for the India earnings
 * tracker. Kept separate from `lib/earnings-tracker.ts`, which reads the
 * dataset from disk and must never reach the client bundle.
 */
export type EarningsSort =
  | "sales"
  | "ebitda"
  | "profit"
  | "eps"
  | "marketCap"
  | "pe"
  | "peg"
  | "return1y"
  | "name";

export type EarningsParams = {
  q: string;
  industry: string;
  sort: EarningsSort;
  minSales: number | null;
  minProfit: number | null;
  minEps: number | null;
  maxPe: number | null;
  minCap: number | null;
  maxPeg: number | null;
  minReturn: number | null;
  per: number;
  page: number;
  /** Include companies whose latest report is older than 12 months. */
  includeOlder: boolean;
};

export const EARNINGS_SORTS: Array<{ value: EarningsSort; label: string }> = [
  { value: "sales", label: "Sales growth — highest" },
  { value: "profit", label: "Net profit growth — highest" },
  { value: "eps", label: "EPS growth — highest" },
  { value: "ebitda", label: "EBITDA growth — highest" },
  { value: "marketCap", label: "Market cap — highest" },
  { value: "return1y", label: "1Y return — highest" },
  { value: "pe", label: "P/E — lowest" },
  { value: "peg", label: "PEG — lowest" },
  { value: "name", label: "Company name — A to Z" },
];

export const EARNINGS_PAGE_SIZES = [25, 50, 100] as const;
