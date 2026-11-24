"use client";

import { useRef, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { SECTOR_GROUPS } from "@/config/sectors";
import { DEFAULT_SORT, SORT_OPTIONS, type SortOption } from "@/lib/constants";
import { FuseSearchInput } from "./fuse-search-input";

type FilterKey = "q" | "sector" | "sort" | "minCap" | "minGrowth" | "minMargin";

const CAP_OPTIONS = [
  { value: "", label: "Any market cap" },
  { value: "10", label: "$10B or more" },
  { value: "50", label: "$50B or more" },
  { value: "100", label: "$100B or more" },
  { value: "500", label: "$500B or more" },
];

const GROWTH_OPTIONS = [
  { value: "", label: "Any revenue growth" },
  { value: "0", label: "0% or more" },
  { value: "10", label: "10% or more" },
  { value: "20", label: "20% or more" },
  { value: "30", label: "30% or more" },
];

const MARGIN_OPTIONS = [
  { value: "", label: "Any operating margin" },
  { value: "0", label: "0% or more" },
  { value: "10", label: "10% or more" },
  { value: "20", label: "20% or more" },
];

export function FilterForm({
  action,
  q,
  sector,
  sort,
  minCap = "",
  minGrowth = "",
  minMargin = "",
  showSector = true,
  showExtraFilters = true,
  sectors = SECTOR_GROUPS,
  searchIndexPath = "/data/search-index.json",
}: {
  action: string;
  q: string;
  sector: string;
  sort: SortOption;
  minCap?: string;
  minGrowth?: string;
  minMargin?: string;
  showSector?: boolean;
  showExtraFilters?: boolean;
  sectors?: Array<{ id: string; shortName: string }>;
  searchIndexPath?: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const submit = () => formRef.current?.requestSubmit();
  const sectorLabel =
    sectors.find((group) => group.id === sector)?.shortName ?? sector;
  const sortLabel =
    SORT_OPTIONS.find((option) => option.value === sort)?.label ?? sort;
  const extraFilterCount = [minCap, minGrowth, minMargin].filter(
    Boolean,
  ).length;

  const hrefWithout = (key: FilterKey): string => {
    const params = new URLSearchParams();
    if (q && key !== "q") params.set("q", q);
    if (sector && key !== "sector") params.set("sector", sector);
    if (sort !== DEFAULT_SORT && key !== "sort") params.set("sort", sort);
    if (minCap && key !== "minCap") params.set("minCap", minCap);
    if (minGrowth && key !== "minGrowth") params.set("minGrowth", minGrowth);
    if (minMargin && key !== "minMargin") params.set("minMargin", minMargin);
    const query = params.toString();
    return query ? `${action}?${query}` : action;
  };

  const chips: Array<{ key: FilterKey; label: string }> = [];
  if (q) chips.push({ key: "q", label: `“${q}”` });
  if (sector) chips.push({ key: "sector", label: sectorLabel });
  if (sort !== DEFAULT_SORT) chips.push({ key: "sort", label: sortLabel });
  if (minCap) chips.push({ key: "minCap", label: `Market cap ≥ $${minCap}B` });
  if (minGrowth)
    chips.push({ key: "minGrowth", label: `Growth ≥ ${minGrowth}%` });
  if (minMargin)
    chips.push({ key: "minMargin", label: `Margin ≥ ${minMargin}%` });

  const gridClass = showSector
    ? showExtraFilters
      ? "grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]"
      : "grid-cols-2"
    : showExtraFilters
      ? "grid-cols-[minmax(0,1fr)_auto]"
      : "grid-cols-1";

  return (
    <form
      ref={formRef}
      id="filter-form"
      action={action}
      method="get"
      className="rounded-xl border border-line bg-surface p-3"
    >
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        <div className="min-w-0 lg:w-2/5 lg:flex-none">
          <FuseSearchInput
            defaultValue={q}
            formId="filter-form"
            indexPath={searchIndexPath}
          />
        </div>

        <div className={`grid min-w-0 flex-1 gap-2 ${gridClass}`}>
          {showSector && (
            <label className="flex h-10 min-w-0 items-center rounded-lg border border-line bg-white px-2.5">
              <span className="sr-only">Sector</span>
              <select
                name="sector"
                defaultValue={sector}
                onChange={submit}
                className="w-full min-w-0 bg-transparent text-[13px] font-medium text-ink outline-none"
              >
                <option value="">All sectors</option>
                {sectors.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.shortName}
                  </option>
                ))}
              </select>
            </label>
          )}

          <label className="flex h-10 min-w-0 items-center rounded-lg border border-line bg-white px-2.5">
            <span className="sr-only">Sort by</span>
            <select
              name="sort"
              defaultValue={sort}
              onChange={submit}
              className="w-full min-w-0 bg-transparent text-[13px] font-medium text-ink outline-none"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.shortLabel}
                </option>
              ))}
            </select>
          </label>

          {showExtraFilters && (
            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              aria-expanded={filtersOpen}
              aria-controls="more-filters"
              aria-label="Filters"
              className={`inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg border px-3 text-[12px] font-semibold transition-colors ${
                filtersOpen || extraFilterCount > 0
                  ? "border-brand/40 bg-brand-soft text-brand-deep"
                  : "border-line bg-white text-ink-soft hover:border-line-strong hover:text-ink"
              }`}
            >
              <SlidersHorizontal aria-hidden="true" className="size-3.5" />
              <span className="hidden sm:inline">Filters</span>
              {extraFilterCount > 0 && (
                <span className="tabular rounded bg-brand-deep px-1 text-[10px] leading-4 text-white">
                  {extraFilterCount}
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      {showExtraFilters && filtersOpen && (
        <div
          id="more-filters"
          className="mt-3 grid gap-2 border-t border-line pt-3 sm:grid-cols-3"
        >
          <label className="flex h-10 items-center rounded-lg border border-line bg-white px-2.5">
            <span className="sr-only">Minimum market cap</span>
            <select
              name="minCap"
              defaultValue={minCap}
              onChange={submit}
              className="w-full bg-transparent text-[12.5px] font-medium text-ink outline-none"
            >
              {CAP_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex h-10 items-center rounded-lg border border-line bg-white px-2.5">
            <span className="sr-only">Minimum revenue growth</span>
            <select
              name="minGrowth"
              defaultValue={minGrowth}
              onChange={submit}
              className="w-full bg-transparent text-[12.5px] font-medium text-ink outline-none"
            >
              {GROWTH_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex h-10 items-center rounded-lg border border-line bg-white px-2.5">
            <span className="sr-only">Minimum operating margin</span>
            <select
              name="minMargin"
              defaultValue={minMargin}
              onChange={submit}
              className="w-full bg-transparent text-[12.5px] font-medium text-ink outline-none"
            >
              {MARGIN_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {showExtraFilters && !filtersOpen && minCap && (
        <input type="hidden" name="minCap" value={minCap} />
      )}
      {showExtraFilters && !filtersOpen && minGrowth && (
        <input type="hidden" name="minGrowth" value={minGrowth} />
      )}
      {showExtraFilters && !filtersOpen && minMargin && (
        <input type="hidden" name="minMargin" value={minMargin} />
      )}

      {chips.length > 0 && (
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          {chips.map((chip) => (
            <a
              key={chip.key}
              href={hrefWithout(chip.key)}
              className="inline-flex items-center gap-1 rounded-md border border-line bg-paper-deep px-1.5 py-0.5 text-[11px] font-medium text-ink-soft hover:border-line-strong hover:text-ink"
            >
              {chip.label}
              <X aria-hidden="true" className="size-3 text-muted" />
              <span className="sr-only">Remove filter</span>
            </a>
          ))}
          <a
            href={action}
            className="text-[11px] font-semibold text-brand hover:text-brand-deep"
          >
            Clear all
          </a>
        </div>
      )}
    </form>
  );
}
