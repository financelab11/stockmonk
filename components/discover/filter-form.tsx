"use client";

import { useRef } from "react";
import { ArrowDownWideNarrow, X } from "lucide-react";
import { SECTOR_GROUPS } from "@/config/sectors";
import { DEFAULT_SORT, SORT_OPTIONS, type SortOption } from "@/lib/constants";
import { FuseSearchInput } from "./fuse-search-input";

export function FilterForm({
  action,
  q,
  sector,
  sort,
  count,
  showSector = true,
  sectors = SECTOR_GROUPS,
  searchIndexPath = "/data/search-index.json",
}: {
  action: string;
  q: string;
  sector: string;
  sort: SortOption;
  count: number;
  showSector?: boolean;
  sectors?: Array<{ id: string; shortName: string }>;
  searchIndexPath?: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const submit = () => formRef.current?.requestSubmit();
  const hasFilters = Boolean(q || sector || sort !== DEFAULT_SORT);
  const sectorLabel = sectors.find((group) => group.id === sector)?.shortName ?? sector;
  const sortLabel = SORT_OPTIONS.find((option) => option.value === sort)?.label ?? sort;

  const hrefWithout = (key: "q" | "sector" | "sort"): string => {
    const params = new URLSearchParams();
    if (q && key !== "q") params.set("q", q);
    if (sector && key !== "sector") params.set("sector", sector);
    if (sort !== DEFAULT_SORT && key !== "sort") params.set("sort", sort);
    const query = params.toString();
    return query ? `${action}?${query}` : action;
  };

  const chips: Array<{ key: "q" | "sector" | "sort"; label: string }> = [];
  if (q) chips.push({ key: "q", label: `“${q}”` });
  if (sector) chips.push({ key: "sector", label: sectorLabel });
  if (sort !== DEFAULT_SORT) chips.push({ key: "sort", label: sortLabel });

  return (
    <form
      ref={formRef}
      id="filter-form"
      action={action}
      method="get"
      className="rounded-xl border border-line bg-surface p-3 shadow-sm"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <FuseSearchInput
          defaultValue={q}
          formId="filter-form"
          indexPath={searchIndexPath}
        />

        <button
          type="submit"
          className="btn btn-primary h-11 min-h-0 shrink-0 px-4 text-[12px]"
        >
          Search
        </button>

        {showSector && (
          <label className="flex h-11 min-w-0 items-center gap-1.5 rounded-lg border border-line bg-paper px-3 text-[11.5px] text-muted">
            <span className="sr-only">Filter by sector</span>
            <select
              name="sector"
              defaultValue={sector}
              onChange={submit}
              className="w-full max-w-[170px] bg-transparent text-[11.5px] font-medium text-ink outline-none"
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

        <label className="flex h-11 min-w-0 items-center gap-1.5 rounded-lg border border-line bg-paper px-3 text-[11.5px] text-muted">
          <ArrowDownWideNarrow aria-hidden="true" className="size-3.5 shrink-0 text-faint" />
          <span className="sr-only">Sort companies</span>
          <select
            name="sort"
            defaultValue={sort}
            onChange={submit}
            className="w-full max-w-[210px] bg-transparent text-[11.5px] font-medium text-ink outline-none"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-2">
        <p className="text-[10.5px] text-muted">
          <span className="tabular font-semibold text-ink">{count}</span>{" "}
          {count === 1 ? "company matches" : "companies match"} the current filters.
        </p>
        {chips.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {chips.map((chip) => (
              <a
                key={chip.key}
                href={hrefWithout(chip.key)}
                className="inline-flex items-center gap-1 rounded-full border border-brand/30 bg-brand-soft px-2 py-0.5 text-[10.5px] font-medium text-brand-deep hover:border-brand/60"
              >
                {chip.label}
                <X aria-hidden="true" className="size-3 text-brand" />
                <span className="sr-only">Remove filter</span>
              </a>
            ))}
            <a
              href={action}
              className="inline-flex items-center gap-1 rounded-full border border-line bg-paper px-2 py-0.5 text-[10.5px] font-semibold text-muted hover:border-brand/40 hover:text-ink"
            >
              Clear all filters
            </a>
          </div>
        )}
        {!hasFilters && (
          <p className="text-[10.5px] text-faint">
            Filters apply as soon as you change them.
          </p>
        )}
      </div>
    </form>
  );
}
