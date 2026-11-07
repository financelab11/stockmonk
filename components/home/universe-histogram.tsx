import type { UniverseEntry } from "@/lib/schemas";

const BUCKETS = [
  { label: "< -20%", min: -Infinity, max: -0.2 },
  { label: "-20–0%", min: -0.2, max: 0 },
  { label: "0–10%", min: 0, max: 0.1 },
  { label: "10–20%", min: 0.1, max: 0.2 },
  { label: "20–40%", min: 0.2, max: 0.4 },
  { label: "40–80%", min: 0.4, max: 0.8 },
  { label: "≥ 80%", min: 0.8, max: Infinity },
];

export function UniverseHistogram({ entries }: { entries: UniverseEntry[] }) {
  const counts = BUCKETS.map((bucket) =>
    entries.filter(
      (entry) =>
        entry.revenueGrowthTtm != null &&
        entry.revenueGrowthTtm >= bucket.min &&
        entry.revenueGrowthTtm < bucket.max,
    ).length,
  );
  const max = Math.max(...counts, 1);

  return (
    <div className="rounded-xl border border-line bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            Revenue growth distribution
          </p>
          <p className="mt-1 text-[11.5px] text-muted">
            Trailing-twelve-month revenue growth across {entries.length} covered companies.
          </p>
        </div>
        <span className="chip chip-info">SimFin</span>
      </div>
      <div className="mt-4 flex h-40 items-end gap-1.5" role="img" aria-label={`Revenue growth distribution across ${entries.length} companies`}>
        {counts.map((count, index) => (
          <div key={BUCKETS[index].label} className="flex h-full flex-1 flex-col justify-end gap-1">
            <span className="text-center text-[9px] font-semibold text-muted">{count}</span>
            <div
              className="rounded-t-[4px] bg-gradient-to-t from-[#2f6bff] to-[#8b3dff]"
              style={{ height: `${Math.max(4, (count / max) * 100)}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-1.5">
        {BUCKETS.map((bucket) => (
          <span key={bucket.label} className="flex-1 text-center text-[8.5px] text-faint">
            {bucket.label}
          </span>
        ))}
      </div>
      <p className="mt-3 border-t border-line pt-2 text-[10px] leading-relaxed text-faint">
        Data-driven screen, not a ranking. Negative and low-growth companies are
        included; the distribution is shown as-is.
      </p>
    </div>
  );
}
