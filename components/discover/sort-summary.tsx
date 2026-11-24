import { SORT_OPTIONS, type SortOption } from "@/lib/constants";

/** Compact result count and active sort, placed above the card grid. */
export function SortSummary({
  sort,
  total,
  shown,
}: {
  sort: SortOption;
  total: number;
  shown?: number;
}) {
  const label =
    SORT_OPTIONS.find((option) => option.value === sort)?.label ?? sort;

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[12px] text-muted">
      <p>
        {shown != null ? (
          <>
            Showing{" "}
            <span className="tabular font-semibold text-ink">{shown}</span> of{" "}
            <span className="tabular font-semibold text-ink">{total}</span>
          </>
        ) : (
          <>
            <span className="tabular font-semibold text-ink">{total}</span>{" "}
            companies
          </>
        )}
      </p>
      <p>
        Sorted by <span className="font-medium text-ink">{label}</span>
      </p>
    </div>
  );
}
