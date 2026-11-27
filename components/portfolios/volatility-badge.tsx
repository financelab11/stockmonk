import type { VolatilityLevel } from "@/lib/portfolios/types";

const LEVELS: Record<VolatilityLevel, number> = {
  Low: 1,
  Medium: 2,
  High: 3,
};

const TONES: Record<VolatilityLevel, string> = {
  Low: "text-positive",
  Medium: "text-amber",
  High: "text-danger",
};

export function VolatilityBadge({
  level,
  showLabel = true,
}: {
  level: VolatilityLevel;
  showLabel?: boolean;
}) {
  const filled = LEVELS[level];
  return (
    <span className={`inline-flex items-center gap-1.5 ${TONES[level]}`}>
      <span className="inline-flex items-end gap-[2px]" aria-hidden="true">
        {[1, 2, 3].map((bar) => (
          <span
            key={bar}
            className={`w-[3px] rounded-sm ${
              bar <= filled ? "bg-current" : "bg-line-strong"
            }`}
            style={{ height: 4 + bar * 3 }}
          />
        ))}
      </span>
      {showLabel && (
        <span className="text-[11px] font-semibold">{level}</span>
      )}
    </span>
  );
}
