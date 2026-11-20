"use client";

import { useMemo, useState } from "react";
import type { ProfileTable } from "@/lib/schemas";

type Period = { index: number; label: string };

function parseNumber(value: string): number | null {
  const cleaned = value.replace(/[(),%]/g, "").trim();
  if (!cleaned || cleaned === "—" || cleaned === "-") return null;
  const parsed = Number(cleaned);
  if (!Number.isFinite(parsed)) return null;
  return value.trim().startsWith("-") || value.trim().startsWith("(")
    ? -parsed
    : parsed;
}

function display(value: string): string {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "—") return "—";
  if (trimmed.startsWith("-") && trimmed !== "-") return `(${trimmed.slice(1)})`;
  return trimmed;
}

function yoy(latest: string, previous: string): number | null {
  const current = parseNumber(latest);
  const base = parseNumber(previous);
  if (current == null || base == null || base === 0) return null;
  return ((current - base) / Math.abs(base)) * 100;
}

export function FinancialTable({
  table,
  periodsToShow = 4,
  defaultMode = "cards",
  comparisonLabel = "YoY",
}: {
  table: ProfileTable;
  periodsToShow?: number;
  defaultMode?: "cards" | "table";
  comparisonLabel?: string | null;
}) {
  const periods: Period[] = useMemo(
    () =>
      table.headers.slice(1).map((label, index) => ({ index: index + 1, label })),
    [table.headers],
  );
  const [periodIndex, setPeriodIndex] = useState(periods[0]?.index ?? 1);
  const [mode, setMode] = useState<"cards" | "table">(defaultMode);

  if (!table.rows.length || !table.headers.length) {
    return (
      <p className="rounded-xl border border-dashed border-line bg-surface p-4 text-[13px] text-muted">
        No data available for this section.
      </p>
    );
  }

  const latestIndex = periods[0]?.index ?? 1;
  const previousIndex = periods[1]?.index ?? latestIndex;
  const selectedLabel = periods.find((period) => period.index === periodIndex)?.label ?? "";

  return (
    <div>
      {/* Mobile controls */}
      <div className="mb-2 flex flex-wrap items-center gap-1.5 lg:hidden">
        <div
          className="scrollbar-none flex gap-1 overflow-x-auto"
          role="group"
          aria-label="Select financial period"
        >
          {periods.slice(0, periodsToShow).map((period) => (
            <button
              key={period.index}
              type="button"
              onClick={() => setPeriodIndex(period.index)}
              aria-pressed={periodIndex === period.index}
              className={`inline-flex min-h-11 items-center rounded-lg border px-2.5 sm:min-h-9 text-[12px] font-medium transition-colors ${
                periodIndex === period.index
                  ? "border-brand-deep bg-brand-deep text-white"
                  : "border-line bg-surface text-ink-soft"
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setMode(mode === "cards" ? "table" : "cards")}
          className="ml-auto inline-flex min-h-11 items-center rounded-lg border border-line bg-surface px-2.5 text-[12px] font-semibold text-brand"
        >
          {mode === "cards" ? "Full history" : "Cards"}
        </button>
      </div>

      {/* Mobile cards */}
      <div className={mode === "cards" ? "lg:hidden" : "hidden"}>
        <div className="flex items-baseline justify-between gap-2 rounded-t-xl border border-line bg-paper-deep px-3 py-2">
          <p className="text-[12px] font-semibold text-ink">{selectedLabel}</p>
          <p className="text-[10.5px] text-muted">
            {comparisonLabel ? `${comparisonLabel} vs prior period` : "Selected period"}
          </p>
        </div>
        <dl className="divide-y divide-line rounded-b-xl border border-t-0 border-line bg-surface">
          {table.rows.map((row) => {
            const values = table.headers.slice(1).map((_, index) => row[index + 1] ?? "");
            const hasAnyValue = values.some(
              (value) => value !== "" && value !== "—" && value !== "0" && value !== "0.00",
            );
            if (!hasAnyValue) return null;
            const value = row[periodIndex] ?? "—";
            const growth = comparisonLabel ? yoy(value, row[previousIndex] ?? "—") : null;
            if (value === "—" && growth == null) return null;
            const negative = parseNumber(value) != null && (parseNumber(value) ?? 0) < 0;
            return (
              <div key={row[0]} className="flex items-baseline justify-between gap-3 px-3 py-2">
                <dt className="min-w-0 text-[12.5px] leading-snug text-ink-soft">{row[0]}</dt>
                <dd className="flex shrink-0 items-baseline gap-2">
                  <span
                    className={`tabular text-[12.5px] font-semibold ${
                      negative ? "text-danger" : "text-ink"
                    }`}
                  >
                    {display(value)}
                  </span>
                  {growth != null && (
                    <span
                      className={`tabular text-[10.5px] font-medium ${
                        growth >= 0 ? "text-positive" : "text-danger"
                      }`}
                    >
                      {growth >= 0 ? "+" : ""}
                      {growth.toFixed(1)}%
                    </span>
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>

      {/* Desktop / full-history table */}
      <div className={mode === "table" ? "block" : "hidden lg:block"}>
        {mode === "table" && (
          <p className="mb-1.5 text-[10.5px] text-muted lg:hidden">
            Scroll sideways for older periods. The metric column stays fixed.
          </p>
        )}
        <div className="relative overflow-hidden rounded-xl border border-line bg-surface">
          <div
            className="max-h-[70vh] overflow-auto"
            tabIndex={0}
            role="region"
            aria-label="Financial table, scrollable"
          >
            <table className="w-full min-w-[720px] border-collapse">
              <caption className="sr-only">
                Financial table: metric rows and reporting periods as columns.
              </caption>
              <thead>
                <tr>
                  {table.headers.map((header, index) => (
                    <th
                      key={`${header}-${index}`}
                      scope="col"
                      className={`sticky top-0 z-20 border-b border-line bg-surface px-3 py-2 text-[11px] font-semibold ${
                        index === 0
                          ? "left-0 z-30 w-[30%] min-w-[220px] bg-surface text-left text-muted"
                          : "text-right text-ink-soft"
                      } ${index === latestIndex ? "bg-brand-soft" : ""}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-line last:border-0">
                    {row.map((cell, index) => (
                      <td
                        key={index}
                        className={
                          index === 0
                            ? "sticky left-0 z-10 min-w-[220px] max-w-[340px] bg-surface px-3 py-2 text-[12.5px] font-medium leading-snug text-ink"
                            : `tabular px-3 py-2 text-right text-[12.5px] ${
                                index === latestIndex
                                  ? "bg-brand-soft/50 font-semibold text-ink"
                                  : "text-ink-soft"
                              } ${
                                parseNumber(cell) != null && (parseNumber(cell) ?? 0) < 0
                                  ? "text-danger"
                                  : ""
                              }`
                        }
                      >
                        {display(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-surface to-transparent lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}
