import type { V2ScoreRecord } from "@/lib/scoring-v2/types";
import { round } from "@/lib/scoring-v2/util";

const KEYS = [
  ["G", "growth"],
  ["Q", "quality"],
  ["V", "valuation"],
  ["T", "technical"],
] as const;

export function V2ScoreStrip({
  record,
  className = "",
}: {
  record: V2ScoreRecord;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10.5px] ${className}`}
      aria-label="Stockmonk research scores"
    >
      {KEYS.map(([label, key]) => {
        const score = record.scores[key];
        return (
          <span
            key={key}
            className="inline-flex items-baseline gap-1 text-muted"
            title={`${score.label} ${score.score ?? "N/A"} · ${Math.round(
              score.coverage * 100,
            )}% coverage${score.status === "provisional" ? " · provisional" : ""}`}
          >
            <span className="font-semibold text-faint">{label}</span>
            <span className="tabular font-semibold text-ink">
              {score.score == null ? "N/A" : round(score.score, 0)}
            </span>
          </span>
        );
      })}
      <span className="ml-auto inline-flex items-baseline gap-1 border-l border-line pl-2.5">
        <span className="font-semibold text-faint">Score</span>
        <span className="tabular font-semibold text-ink">
          {record.composite.score == null
            ? "Incomplete"
            : round(record.composite.score, 0)}
        </span>
      </span>
    </div>
  );
}
