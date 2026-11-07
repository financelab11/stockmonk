import { SECTOR_GROUPS } from "@/config/sectors";
import { SORT_OPTIONS, type SortOption } from "@/lib/constants";
import { FuseSearchInput } from "./fuse-search-input";

export function FilterForm({
  action,
  q,
  sector,
  sort,
  count,
  showSector = true,
}: {
  action: string;
  q: string;
  sector: string;
  sort: SortOption;
  count: number;
  showSector?: boolean;
}) {
  const hasFilters = Boolean(q || sector || sort !== "marketCap");

  return (
    <form id="filter-form" action={action} method="get" className="rounded-xl border border-line bg-surface p-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <FuseSearchInput defaultValue={q} formId="filter-form" />

        {showSector && (
          <label className="flex h-10 items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 text-[11.5px] text-muted">
            <span className="sr-only">Filter by sector</span>
            <select
              name="sector"
              defaultValue={sector}
              className="max-w-[160px] bg-transparent text-[11.5px] font-medium text-ink outline-none"
            >
              <option value="">All sectors</option>
              {SECTOR_GROUPS.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.shortName}
                </option>
              ))}
            </select>
          </label>
        )}

        <label className="flex h-10 items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 text-[11.5px] text-muted">
          <span className="sr-only">Sort companies</span>
          <select
            name="sort"
            defaultValue={sort}
            className="bg-transparent text-[11.5px] font-medium text-ink outline-none"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" className="btn btn-primary h-10 min-h-0 px-4 text-[12px]">
          Apply
        </button>

        {hasFilters && (
          <a href={action} className="text-center text-[11px] font-semibold text-brand hover:text-brand-deep">
            Reset
          </a>
        )}
      </div>

      <p className="mt-2 text-[10.5px] text-muted">
        {count} {count === 1 ? "company" : "companies"} match the current filters.
      </p>
    </form>
  );
}
