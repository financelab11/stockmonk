"use client";

import { useState } from "react";
import type { ProfileTable } from "@/lib/schemas";
import { FinancialTable } from "./financial-table";

type Statement = "income" | "balance" | "cash" | "ratios";

const STATEMENTS: Array<{ id: Statement; label: string; short: string }> = [
  { id: "income", label: "Income statement", short: "Income" },
  { id: "balance", label: "Balance sheet", short: "Balance sheet" },
  { id: "cash", label: "Cash flow", short: "Cash flow" },
  { id: "ratios", label: "Key ratios", short: "Ratios" },
];

export function StatementBrowser({
  incomeAnnual,
  incomeQuarter,
  balanceSheet,
  cashFlow,
  ratiosAnnual,
  ratiosQuarter,
  basis,
}: {
  incomeAnnual: ProfileTable;
  incomeQuarter: ProfileTable;
  balanceSheet: ProfileTable;
  cashFlow: ProfileTable;
  ratiosAnnual: ProfileTable;
  ratiosQuarter: ProfileTable;
  basis: "consolidated" | "standalone";
}) {
  const [statement, setStatement] = useState<Statement>("income");
  const [frequency, setFrequency] = useState<"annual" | "quarterly">("annual");

  const quarterlyAvailable = statement === "income" || statement === "ratios";
  const effectiveFrequency = quarterlyAvailable ? frequency : "annual";
  const table =
    statement === "income"
      ? effectiveFrequency === "annual"
        ? incomeAnnual
        : incomeQuarter
      : statement === "balance"
        ? balanceSheet
        : statement === "cash"
          ? cashFlow
          : effectiveFrequency === "annual"
            ? ratiosAnnual
            : ratiosQuarter;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="scrollbar-none flex gap-1 overflow-x-auto" role="tablist" aria-label="Financial statements">
          {STATEMENTS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={statement === item.id}
              onClick={() => setStatement(item.id)}
              className={`inline-flex min-h-11 shrink-0 sm:min-h-10 items-center rounded-lg border px-3 text-[12.5px] font-semibold transition-colors ${
                statement === item.id
                  ? "border-brand-deep bg-brand-deep text-white"
                  : "border-line bg-surface text-ink-soft hover:text-ink"
              }`}
            >
              <span className="sm:hidden">{item.short}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </button>          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="meta-caps">Basis</span>
          <div className="flex rounded-lg border border-line bg-surface p-0.5" role="group" aria-label="Statement basis">
            <span
              className={`inline-flex min-h-8 items-center rounded-md px-2 text-[11.5px] font-semibold ${
                basis === "standalone" ? "bg-brand-soft text-brand-deep" : "text-muted"
              }`}
              aria-current={basis === "standalone" ? "true" : undefined}
              title={
                basis === "standalone"
                  ? "Standalone statements are used for this company"
                  : "Switch to standalone statements"
              }
            >
              Standalone
            </span>
            <span
              className={`inline-flex min-h-8 items-center rounded-md px-2 text-[11.5px] font-semibold ${
                basis === "consolidated" ? "bg-brand-soft text-brand-deep" : "text-muted"
              }`}
              title="Consolidated statements were not available in the source"
            >
              Consolidated
            </span>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-1.5">
        <span className="meta-caps">Period</span>
        <div className="flex rounded-lg border border-line bg-surface p-0.5" role="group" aria-label="Reporting period">
          <button
            type="button"
            onClick={() => setFrequency("annual")}
            aria-pressed={effectiveFrequency === "annual"}
            className={`inline-flex min-h-11 items-center rounded-md px-2.5 sm:min-h-8 text-[11.5px] font-semibold ${
              effectiveFrequency === "annual" ? "bg-brand-soft text-brand-deep" : "text-muted"
            }`}
          >
            Annual
          </button>
          <button
            type="button"
            onClick={() => quarterlyAvailable && setFrequency("quarterly")}
            aria-pressed={effectiveFrequency === "quarterly"}
            disabled={!quarterlyAvailable}
            className={`inline-flex min-h-11 items-center rounded-md px-2.5 sm:min-h-8 text-[11.5px] font-semibold ${
              effectiveFrequency === "quarterly"
                ? "bg-brand-soft text-brand-deep"
                : quarterlyAvailable
                  ? "text-muted"
                  : "cursor-not-allowed text-faint/60"
            }`}
          >
            Quarterly
          </button>
        </div>
      </div>

      <div className="mt-3">
        <FinancialTable
          table={table}
          comparisonLabel={effectiveFrequency === "annual" ? "YoY" : "QoQ"}
        />
      </div>

      <p className="mt-2 text-[10.5px] leading-relaxed text-muted">
        All figures in ₹ crore unless the metric name says otherwise. Negative values appear in
        parentheses. Ratios are percentages or multiples as labelled.
      </p>
    </div>
  );
}
