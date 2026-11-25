import type { MixSlice } from "@/lib/schemas";
import { formatCompactCurrency, formatPercent } from "@/lib/format";

const COLORS = [
  "#2f6bff",
  "#8b3dff",
  "#ff7a45",
  "#12805c",
  "#f5b544",
  "#0e7490",
];

export function SegmentBars({
  slices,
  label,
  total,
  currency = "USD",
}: {
  slices: MixSlice[];
  label: string;
  total?: number;
  currency?: string;
}) {
  if (!slices.length) {
    return (
      <p className="text-[12px] text-muted">No segment disclosure available.</p>
    );
  }

  return (
    <div>
      <p className="text-[10px] font-bold text-muted">{label}</p>
      <div className="mt-3 space-y-2.5">
        {slices.map((slice, index) => (
          <div key={slice.name}>
            <div className="flex items-baseline justify-between gap-2">
              <span className="truncate text-[11.5px] font-medium text-ink">
                {slice.name}
              </span>
              <span className="tabular shrink-0 text-[10.5px] text-muted">
                {formatCompactCurrency(slice.revenue, currency)} ·{" "}
                {formatPercent(slice.share, 1)}
              </span>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-paper-deep">
              <span
                className="block h-full rounded-full"
                style={{
                  width: `${Math.max(1, slice.share * 100)}%`,
                  backgroundColor: COLORS[index % COLORS.length],
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {total != null && (
        <p className="mt-3 text-[10.5px] text-muted">
          Revenue shown on a reported annual basis; consolidated total{" "}
          {formatCompactCurrency(total, currency)}.
        </p>
      )}
    </div>
  );
}
