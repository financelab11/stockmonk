import type { FactorChip } from "@/lib/schemas";

const TONE_CLASS: Record<FactorChip["tone"], string> = {
  positive: "chip chip-positive",
  neutral: "chip",
  caution: "chip chip-caution",
  info: "chip chip-info",
};

export function FactorChips({
  chips,
  limit = 3,
  className = "",
}: {
  chips: FactorChip[];
  limit?: number;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {chips.slice(0, limit).map((chip) => (
        <span
          key={chip.key}
          className={TONE_CLASS[chip.tone]}
          title={chip.detail}
          aria-label={`${chip.label}. ${chip.detail}`}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
}
