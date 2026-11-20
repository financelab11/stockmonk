"use client";

import { useState } from "react";
import type { ProfileTable } from "@/lib/schemas";
import { FinancialTable } from "./financial-table";

type Frequency = "annual" | "quarterly";
type FrequencyState = { income: Frequency; ratios: Frequency };

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
  const [frequency, setFrequency] = useState<FrequencyState>({
    income: "annual",
    ratios: "annual",
  });

  const sections = [
    {
      id: "income",
      label: "Income statement",
      unit: "₹ crore",
      annual: incomeAnnual,
      quarter: incomeQuarter.rows.length ? incomeQuarter : null,
      value: frequency.income,
      onFrequency: (next: Frequency) =>
        setFrequency((current) => ({ ...current, income: next })),
    },
    {
      id: "balance",
      label: "Balance sheet",
      unit: "₹ crore",
      annual: balanceSheet,
      quarter: null,
      value: "annual" as Frequency,
      onFrequency: null,
    },
    {
      id: "cash",
      label: "Cash flow",
      unit: "₹ crore",
      annual: cashFlow,
      quarter: null,
      value: "annual" as Frequency,
      onFrequency: null,
    },
    {
      id: "ratios",
      label: "Key ratios",
      unit: "Percentages and multiples",
      annual: ratiosAnnual,
      quarter: ratiosQuarter.rows.length ? ratiosQuarter : null,
      value: frequency.ratios,
      onFrequency: (next: Frequency) =>
        setFrequency((current) => ({ ...current, ratios: next })),
    },
  ].filter((section) => section.annual.rows.length > 0);

  return (
    <div>
      <div className="flex items-center gap-1.5 pb-2">
        <span className="meta-caps">Basis</span>
        <div
          className="flex rounded-lg border border-line bg-surface p-0.5"
          role="group"
          aria-label="Statement basis"
        >
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

      {sections.length === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-line bg-surface p-4 text-[13px] text-muted">
          Financial statements are not available for this company yet.
        </p>
      ) : (
        <div className="divide-y divide-line">
          {sections.map((section) => (
          <section
            key={section.id}
            aria-labelledby={`statement-${section.id}`}
            className="py-5 first:pt-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 id={`statement-${section.id}`} className="type-subhead text-ink">
                  {section.label}
                </h3>
                <span className="text-[10.5px] text-muted">{section.unit}</span>
              </div>

              {section.quarter && section.onFrequency ? (
                <div
                  className="ml-auto flex rounded-lg border border-line bg-surface p-0.5"
                  role="group"
                  aria-label={`${section.label} reporting period`}
                >
                  <button
                    type="button"
                    onClick={() => section.onFrequency?.("annual")}
                    aria-pressed={section.value === "annual"}
                    className={`inline-flex min-h-11 items-center rounded-md px-2.5 text-[11.5px] font-semibold sm:min-h-8 ${
                      section.value === "annual"
                        ? "bg-brand-soft text-brand-deep"
                        : "text-muted"
                    }`}
                  >
                    Annual
                  </button>
                  <button
                    type="button"
                    onClick={() => section.onFrequency?.("quarterly")}
                    aria-pressed={section.value === "quarterly"}
                    className={`inline-flex min-h-11 items-center rounded-md px-2.5 text-[11.5px] font-semibold sm:min-h-8 ${
                      section.value === "quarterly"
                        ? "bg-brand-soft text-brand-deep"
                        : "text-muted"
                    }`}
                  >
                    Quarterly
                  </button>
                </div>
              ) : (
                <span className="meta-caps">Annual</span>
              )}
            </div>

            <div className="mt-2.5">
              <FinancialTable
                table={
                  section.value === "quarterly" && section.quarter
                    ? section.quarter
                    : section.annual
                }
                comparisonLabel={section.value === "quarterly" ? "QoQ" : "YoY"}
              />
            </div>
          </section>
          ))}
        </div>
      )}

      <p className="mt-4 border-t border-line pt-3 text-[10.5px] leading-relaxed text-muted">
        All figures in ₹ crore unless the metric name says otherwise. Negative values appear in
        parentheses. Per-share, ratio and percentage metrics keep decimals; whole-crore figures
        are rounded for readability and are not recalculated.
      </p>
    </div>
  );
}
