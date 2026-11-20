"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ProfileTable } from "@/lib/schemas";
import { formatMetricValue } from "@/lib/finance-format";

type Column = { label: string; raw: number };

function parseNumber(value: string): number | null {
  const cleaned = value.replace(/[(),%\s]/g, "").trim();
  if (!cleaned || cleaned === "—" || cleaned === "-") return null;
  const parsed = Number(cleaned);
  if (!Number.isFinite(parsed)) return null;
  return value.trim().startsWith("-") || value.trim().startsWith("(")
    ? -parsed
    : parsed;
}

function growth(latest: string, previous: string): number | null {
  const current = parseNumber(latest);
  const base = parseNumber(previous);
  if (current == null || base == null || base === 0) return null;
  return ((current - base) / Math.abs(base)) * 100;
}

export function FinancialTable({
  table,
  periodsToShow = 4,
  defaultMode = "table",
  comparisonLabel = "YoY",
}: {
  table: ProfileTable;
  periodsToShow?: number;
  defaultMode?: "cards" | "table";
  comparisonLabel?: string | null;
}) {
  // Source headers run newest -> oldest. Display them oldest -> newest so the
  // latest period sits on the right, matching how the numbers are read.
  const columns = useMemo<Column[]>(
    () =>
      table.headers
        .slice(1)
        .map((label, index) => ({ label, raw: index + 1 }))
        .reverse(),
    [table.headers],
  );
  const newestFirst = useMemo(() => [...columns].reverse(), [columns]);

  const [selected, setSelected] = useState(1);
  const [mode, setMode] = useState<"cards" | "table">(defaultMode);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset to the latest period when the statement changes.
  useEffect(() => {
    setSelected(1);
  }, [table]);

  // Open on the latest period instead of the oldest year.
  useEffect(() => {
    const element = scrollRef.current;
    if (element && element.scrollWidth > element.clientWidth) {
      element.scrollLeft = element.scrollWidth;
    }
  }, [mode, table]);

  if (!table.rows.length || !table.headers.length) {
    return (
      <p className="rounded-xl border border-dashed border-line bg-surface p-4 text-[13px] text-muted">
        No data available for this section.
      </p>
    );
  }

  const selectedRaw = columns.some((column) => column.raw === selected)
    ? selected
    : (columns.at(-1)?.raw ?? 1);
  const latestDisplayIndex = columns.length - 1;
  const selectedPosition = columns.findIndex((column) => column.raw === selectedRaw);
  const previousRaw = selectedPosition > 0 ? columns[selectedPosition - 1].raw : null;
  const selectedLabel = columns.find((column) => column.raw === selectedRaw)?.label ?? "";

  return (
    <div>
      {/* Mobile controls */}
      <div className="mb-2 flex items-center justify-between gap-2 lg:hidden">
        {mode === "cards" ? (
          <div
            className="scrollbar-none flex gap-1 overflow-x-auto"
            role="group"
            aria-label="Select financial period"
          >
            {newestFirst.slice(0, periodsToShow).map((period) => (
              <button
                key={period.raw}
                type="button"
                onClick={() => setSelected(period.raw)}
                aria-pressed={selectedRaw === period.raw}
                className={`inline-flex min-h-11 shrink-0 items-center rounded-lg border px-2.5 text-[12px] font-medium transition-colors ${
                  selectedRaw === period.raw
                    ? "border-brand-deep bg-brand-deep text-white"
                    : "border-line bg-surface text-ink-soft"
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-[10.5px] leading-snug text-muted">
            Older periods are to the left.
          </p>
        )}
        <button
          type="button"
          onClick={() => setMode(mode === "cards" ? "table" : "cards")}
          className="ml-auto inline-flex min-h-11 shrink-0 items-center rounded-lg border border-line bg-surface px-2.5 text-[12px] font-semibold text-brand"
        >
          {mode === "cards" ? "Full history" : "Single period"}
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
            const value = row[selectedRaw] ?? "—";
            const delta =
              comparisonLabel && previousRaw != null
                ? growth(value, row[previousRaw] ?? "—")
                : null;
            if (value === "—" && delta == null) return null;
            const numeric = parseNumber(value);
            const negative = numeric != null && numeric < 0;
            return (
              <div key={row[0]} className="flex items-baseline justify-between gap-3 px-3 py-2">
                <dt className="min-w-0 text-[12.5px] leading-snug text-ink-soft">{row[0]}</dt>
                <dd className="flex shrink-0 items-baseline gap-2">
                  <span
                    className={`text-[12.5px] font-medium ${
                      negative ? "text-danger" : "text-ink"
                    }`}
                  >
                    {formatMetricValue(value, row[0])}
                  </span>
                  {delta != null && (
                    <span
                      className={`text-[10.5px] font-medium ${
                        delta >= 0 ? "text-positive" : "text-danger"
                      }`}
                    >
                      {delta >= 0 ? "+" : ""}
                      {delta.toFixed(1)}%
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
        <div className="relative overflow-hidden rounded-xl border border-line bg-surface">
          <div
            ref={scrollRef}
            className="max-h-[70vh] overflow-auto"
            tabIndex={0}
            role="region"
            aria-label="Financial table, scrollable"
          >
            <table className="w-full border-collapse">
              <caption className="sr-only">
                Financial table: metric rows with reporting periods from oldest to newest.
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 left-0 z-30 w-[128px] min-w-[128px] border-b border-r border-line bg-surface px-2.5 py-2 text-left text-[11px] font-semibold text-muted sm:w-[200px] sm:min-w-[200px] sm:px-3"
                  >
                    Metric
                  </th>
                  {columns.map((column, index) => (
                    <th
                      key={column.raw}
                      scope="col"
                      className={`sticky top-0 z-20 border-b border-line px-2 py-2 text-right text-[11px] font-semibold whitespace-nowrap sm:px-3 ${
                        index === latestDisplayIndex
                          ? "bg-brand-soft text-ink"
                          : "bg-surface text-ink-soft"
                      }`}
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-line last:border-0">
                    <th
                      scope="row"
                      className="sticky left-0 z-10 min-w-[128px] max-w-[150px] border-r border-line bg-surface px-2.5 py-2 text-left text-[12.5px] font-medium leading-snug text-ink sm:min-w-[200px] sm:max-w-[260px] sm:px-3"
                    >
                      {row[0]}
                    </th>
                    {columns.map((column, index) => {
                      const cell = row[column.raw] ?? "—";
                      const numeric = parseNumber(cell);
                      return (
                        <td
                          key={column.raw}
                          className={`px-2 py-2 text-right text-[12.5px] whitespace-nowrap sm:px-3 ${
                            index === latestDisplayIndex
                              ? "bg-brand-soft/50 font-semibold text-ink"
                              : "text-ink-soft"
                          } ${numeric != null && numeric < 0 ? "text-danger" : ""}`}
                        >
                          {formatMetricValue(cell, row[0])}
                        </td>
                      );
                    })}
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
