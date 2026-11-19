"use client";

import { useRef } from "react";
import { RotateCcw, SlidersHorizontal } from "lucide-react";
import {
  EARNINGS_SORTS,
  type EarningsParams,
} from "@/lib/earnings-constants";

const NUMBER_FIELDS: Array<{
  name: keyof EarningsParams;
  label: string;
  placeholder: string;
  suffix?: string;
}> = [
  { name: "minSales", label: "Sales growth at least", placeholder: "Any", suffix: "%" },
  { name: "minProfit", label: "Net profit growth at least", placeholder: "Any", suffix: "%" },
  { name: "minEps", label: "EPS growth at least", placeholder: "Any", suffix: "%" },
  { name: "minReturn", label: "1Y return at least", placeholder: "Any", suffix: "%" },
  { name: "maxPe", label: "P/E at most", placeholder: "Any", suffix: "x" },
  { name: "maxPeg", label: "PEG at most", placeholder: "Any" },
  { name: "minCap", label: "Market cap at least", placeholder: "Any", suffix: "₹ Cr" },
];

export function EarningsFilters({
  params,
  industries,
  count,
  activeCount,
}: {
  params: EarningsParams;
  industries: string[];
  count: number;
  activeCount: number;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const submit = () => formRef.current?.requestSubmit();
  const value = (key: keyof EarningsParams) =>
    params[key] == null ? "" : String(params[key]);

  return (
    <form
      ref={formRef}
      action="/india/earnings-tracker"
      method="get"
      className="rounded-xl border border-line bg-surface p-3 shadow-sm"
    >
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        <label className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-lg border border-line bg-paper px-3">
          <SlidersHorizontal aria-hidden="true" className="size-3.5 shrink-0 text-muted" />
          <span className="sr-only">Search companies</span>
          <input
            name="q"
            defaultValue={params.q}
            placeholder="Search company, ticker or industry…"
            className="min-w-0 flex-1 bg-transparent text-[12.5px] text-ink outline-none placeholder:text-faint"
          />
        </label>

        <label className="flex h-11 min-w-0 items-center gap-2 rounded-lg border border-line bg-paper px-3 text-[11px] text-muted lg:w-[220px]">
          <span className="sr-only">Industry</span>
          <select
            name="industry"
            defaultValue={params.industry}
            onChange={submit}
            className="w-full bg-transparent text-[11.5px] font-medium text-ink outline-none"
          >
            <option value="">All industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </label>

        <label className="flex h-11 min-w-0 items-center gap-2 rounded-lg border border-line bg-paper px-3 text-[11px] text-muted lg:w-[220px]">
          <span className="sr-only">Sort results</span>
          <select
            name="sort"
            defaultValue={params.sort}
            onChange={submit}
            className="w-full bg-transparent text-[11.5px] font-medium text-ink outline-none"
          >
            {EARNINGS_SORTS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" className="btn btn-primary h-11 min-h-0 shrink-0 px-4 text-[12px]">
          Apply
        </button>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7">
        {NUMBER_FIELDS.map((field) => (
          <label key={field.name} className="flex flex-col gap-1">
            <span className="text-[9.5px] font-semibold uppercase tracking-[0.06em] text-faint">
              {field.label}
            </span>
            <span className="flex h-9 items-center gap-1 rounded-lg border border-line bg-paper px-2">
              <input
                name={field.name}
                type="number"
                inputMode="decimal"
                step="any"
                defaultValue={value(field.name)}
                placeholder={field.placeholder}
                className="min-w-0 flex-1 bg-transparent text-[11.5px] text-ink outline-none placeholder:text-faint"
              />
              {field.suffix && (
                <span className="shrink-0 text-[9.5px] font-medium text-faint">
                  {field.suffix}
                </span>
              )}
            </span>
          </label>
        ))}
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-2">
        <p className="text-[10.5px] text-muted">
          <span className="tabular font-semibold text-ink">{count}</span>{" "}
          {count === 1 ? "company matches" : "companies match"}
          {activeCount > 0 ? ` · ${activeCount} active ${activeCount === 1 ? "filter" : "filters"}` : ""}.
        </p>
        {activeCount > 0 && (
          <a
            href="/india/earnings-tracker"
            className="inline-flex items-center gap-1 rounded-full border border-line bg-paper px-2 py-0.5 text-[10.5px] font-semibold text-muted hover:border-brand/40 hover:text-ink"
          >
            <RotateCcw aria-hidden="true" className="size-3" />
            Reset filters
          </a>
        )}
        {activeCount === 0 && (
          <p className="text-[10.5px] text-faint">
            Filters combine; all figures are the latest reported quarter versus the same quarter a year earlier.
          </p>
        )}
      </div>
    </form>
  );
}
