import { formatSignedPercent } from "@/lib/format";

export function PriceChange({
  value,
  className = "",
  showArrow = true,
}: {
  value: number | null;
  className?: string;
  showArrow?: boolean;
}) {
  const positive = value != null && value > 0;
  const negative = value != null && value < 0;
  const tone = positive
    ? "text-positive"
    : negative
      ? "text-danger"
      : "text-muted";

  return (
    <span className={`tabular inline-flex items-center gap-0.5 font-semibold ${tone} ${className}`}>
      {showArrow && value != null && (
        <span aria-hidden="true">{positive ? "▲" : negative ? "▼" : "•"}</span>
      )}
      {formatSignedPercent(value)}
    </span>
  );
}
