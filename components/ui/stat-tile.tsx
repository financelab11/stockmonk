import type { ReactNode } from "react";

export function StatTile({
  label,
  value,
  hint,
  tone = "default",
  className = "",
}: {
  label: string;
  value: ReactNode;
  hint?: ReactNode;
  tone?: "default" | "positive" | "caution";
  className?: string;
}) {
  const valueTone =
    tone === "positive"
      ? "text-positive"
      : tone === "caution"
        ? "text-amber"
        : "text-ink";

  return (
    <div className={`stat-tile ${className}`}>
      <p className="stat-label">{label}</p>
      <p className={`stat-value ${valueTone}`}>{value}</p>
      {hint && <p className="mt-1 text-[10.5px] leading-snug text-muted">{hint}</p>}
    </div>
  );
}
