import { ArrowDownWideNarrow } from "lucide-react";
import { SORT_OPTIONS, type SortOption } from "@/lib/constants";

/** States the active sort above the results, with the count that it applies to. */
export function SortSummary({
  sort,
  total,
  shown,
}: {
  sort: SortOption;
  total: number;
  shown?: number;
}) {
  const label = SORT_OPTIONS.find((option) => option.value === sort)?.label ?? sort;

  return (
    <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg border border-line bg-surface px-3 py-2 text-[10.5px] text-muted">
      <p>
        {shown != null ? (
          <>
            Showing <span className="tabular font-semibold text-ink">{shown}</span> of{" "}
            <span className="tabular font-semibold text-ink">{total}</span> companies
          </>
        ) : (
          <>
            <span className="tabular font-semibold text-ink">{total}</span> companies
          </>
        )}
      </p>
      <p className="inline-flex flex-wrap items-center gap-1.5">
        <ArrowDownWideNarrow aria-hidden="true" className="size-3 text-faint" />
        <span>
          Sorted by <span className="font-semibold text-ink">{label}</span>
        </span>
        {sort === "return1y" && (
          <span className="text-faint">· 12-month price performance, not a forecast</span>
        )}
      </p>
    </div>
  );
}
