"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { useMemo, useState } from "react";
import { StockLogo } from "@/components/stock-logo";
import {
  formatCompactCurrency,
  formatMultiple,
  formatPercent,
} from "@/lib/format";
import type { PeerRow } from "@/lib/article";

type SortKey =
  | "name"
  | "marketCap"
  | "revenueGrowth"
  | "grossMargin"
  | "operatingMargin"
  | "roic"
  | "netDebtToEbitda"
  | "peNtm"
  | "evEbitda"
  | "evSales"
  | "fcfYield";

const COLUMNS: Array<{ key: SortKey; label: string; numeric: boolean }> = [
  { key: "name", label: "Company", numeric: false },
  { key: "marketCap", label: "Mkt cap", numeric: true },
  { key: "revenueGrowth", label: "Rev growth", numeric: true },
  { key: "grossMargin", label: "Gross margin", numeric: true },
  { key: "operatingMargin", label: "Op margin", numeric: true },
  { key: "roic", label: "ROIC", numeric: true },
  { key: "netDebtToEbitda", label: "Net debt/EBITDA", numeric: true },
  { key: "peNtm", label: "P/E (NTM)", numeric: true },
  { key: "evEbitda", label: "EV/EBITDA", numeric: true },
  { key: "evSales", label: "EV/Sales", numeric: true },
  { key: "fcfYield", label: "FCF yield", numeric: true },
];

function formatMetric(key: SortKey, row: PeerRow, currency: string): string {
  if (key === "marketCap") return formatCompactCurrency(row.marketCap, currency);
  if (key === "revenueGrowth" || key === "fcfYield") return formatPercent(row[key]);
  if (key === "grossMargin" || key === "operatingMargin" || key === "roic") {
    return formatPercent(row[key]);
  }
  if (key === "netDebtToEbitda") return formatMultiple(row.netDebtToEbitda);
  if (key === "peNtm" || key === "evEbitda" || key === "evSales") {
    return formatMultiple(row[key]);
  }
  return "";
}

export function PeerTable({
  rows,
  currency = "USD",
}: {
  rows: PeerRow[];
  currency?: string;
}) {
  const [sort, setSort] = useState<SortKey>("marketCap");
  const [direction, setDirection] = useState<"asc" | "desc">("desc");

  const sorted = useMemo(() => {
    return [...rows].sort((a, b) => {
      if (sort === "name") {
        return direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      const av = a[sort];
      const bv = b[sort];
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      return direction === "asc" ? Number(av) - Number(bv) : Number(bv) - Number(av);
    });
  }, [direction, rows, sort]);

  const toggle = (key: SortKey) => {
    if (key === sort) {
      setDirection((current) => (current === "asc" ? "desc" : "asc"));
    } else {
      setSort(key);
      setDirection(key === "name" ? "asc" : "desc");
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="data-table min-w-[980px]">
        <thead className="bg-paper-deep">
          <tr>
            {COLUMNS.map((column, index) => (
              <th
                key={column.key}
                scope="col"
                aria-sort={
                  sort === column.key
                    ? direction === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
                className={
                  index === 0
                    ? "sticky left-0 z-10 bg-paper-deep"
                    : column.numeric
                      ? "text-right"
                      : undefined
                }
              >
                <button
                  type="button"
                  onClick={() => toggle(column.key)}
                  className={`inline-flex items-center gap-1 ${
                    column.numeric ? "ml-auto" : ""
                  }`}
                >
                  {column.label}
                  {sort === column.key &&
                    (direction === "asc" ? (
                      <ArrowUp aria-hidden="true" className="size-3" />
                    ) : (
                      <ArrowDown aria-hidden="true" className="size-3" />
                    ))}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr
              key={row.ticker}
              className={row.isSubject ? "bg-brand-soft/60" : undefined}
            >
              <th
                scope="row"
                className={`sticky left-0 z-10 text-left font-normal ${
                  row.isSubject ? "bg-[#e8eeff]" : "bg-surface"
                }`}
              >
                <span className="flex items-center gap-2">
                  <StockLogo ticker={row.ticker} size={26} />
                  <span className="min-w-0">
                    <span className="block max-w-[150px] truncate text-[11.5px] font-semibold text-ink">
                      {row.name}
                    </span>
                    <span className="block font-mono text-[9.5px] text-muted">
                      {row.ticker}
                      {row.isSubject ? " · subject" : ""}
                    </span>
                  </span>
                </span>
              </th>
              {COLUMNS.slice(1).map((column) => (
                <td
                  key={column.key}
                  className={`whitespace-nowrap text-right ${
                    row.isSubject ? "font-semibold text-ink" : ""
                  }`}
                >
                  {formatMetric(column.key, row, currency)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
