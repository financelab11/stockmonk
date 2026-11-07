import { sparklinePoints } from "@/lib/analytics";
import type { RangePricePoint } from "@/lib/schemas";

export function Sparkline({
  points,
  width = 132,
  height = 38,
  positive,
  className = "",
}: {
  points: RangePricePoint[];
  width?: number;
  height?: number;
  positive?: boolean;
  className?: string;
}) {
  const path = sparklinePoints(points, width, height);
  if (!path) return <div className={className} style={{ width, height }} aria-hidden="true" />;

  const first = points[0]?.c;
  const last = points[points.length - 1]?.c;
  const up = positive ?? (first != null && last != null ? last >= first : true);
  const color = up ? "#12805c" : "#c62f3e";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label={`Price trend from ${first?.toFixed(2) ?? "n/a"} to ${last?.toFixed(2) ?? "n/a"}`}
    >
      <path d={path} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
