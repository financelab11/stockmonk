import { formatCurrency } from "@/lib/format";

export function RangeBar({
  low,
  high,
  current,
  position,
}: {
  low: number | null;
  high: number | null;
  current: number | null;
  position: number | null;
}) {
  if (low == null || high == null || current == null || position == null) {
    return <p className="text-[11px] text-muted">52-week range unavailable.</p>;
  }

  return (
    <div>
      <div className="range-track">
        <span
          className="range-marker"
          style={{ left: `${Math.min(100, Math.max(0, position * 100))}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-[10.5px] text-muted">
        <span className="tabular">52w low {formatCurrency(low)}</span>
        <span className="tabular font-semibold text-ink">
          Now {formatCurrency(current)}
        </span>
        <span className="tabular">52w high {formatCurrency(high)}</span>
      </div>
    </div>
  );
}
