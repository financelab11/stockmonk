import Link from "next/link";
import type { ComponentScore, V2ScoreRecord } from "@/lib/scoring-v2/types";
import { classifyComponent, round } from "@/lib/scoring-v2/util";
import { formatDate } from "@/lib/format";

function tone(score: number | null): string {
  if (score == null) return "border-line bg-paper-deep text-muted";
  if (score >= 75) return "border-emerald-200 bg-emerald-50 text-emerald-900";
  if (score >= 55) return "border-sky-200 bg-sky-50 text-sky-900";
  if (score >= 35) return "border-amber-200 bg-amber-50 text-amber-900";
  return "border-rose-200 bg-rose-50 text-rose-900";
}

function barTone(score: number | null): string {
  if (score == null) return "bg-line-strong";
  if (score >= 75) return "bg-emerald-500";
  if (score >= 55) return "bg-sky-500";
  if (score >= 35) return "bg-amber-500";
  return "bg-rose-500";
}

function ComponentCard({ score }: { score: ComponentScore }) {
  const value = score.score == null ? null : round(score.score, 0);
  return (
    <div className={`rounded-xl border p-3 ${tone(value)}`}>
      <div className="flex items-baseline justify-between gap-2">
        <p className="display text-[14px] font-medium">{score.label}</p>
        <span className="tabular text-[10px] font-medium opacity-70">
          {Math.round(score.weight * 100)}%
        </span>
      </div>
      <div className="mt-1 flex items-baseline gap-1.5">
        <span className="tabular text-[26px] font-semibold leading-none">
          {value ?? "N/A"}
        </span>
        <span className="text-[11px] font-medium opacity-75">
          {classifyComponent(score.score)}
        </span>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/70">
        <div
          className={`h-full rounded-full ${barTone(value)}`}
          style={{ width: `${Math.max(0, Math.min(100, value ?? 0))}%` }}
        />
      </div>
      {score.status === "provisional" && (
        <div className="mt-1.5 text-[10px] opacity-75">Provisional</div>
      )}
    </div>
  );
}

export function V2Scorecard({
  record,
  compact = false,
  showEvidenceLink = true,
}: {
  record: V2ScoreRecord;
  compact?: boolean;
  showEvidenceLink?: boolean;
}) {
  const composite = record.composite;
  return (
    <section
      aria-label="Stockmonk research scores"
      className={`rounded-xl border border-line bg-surface ${compact ? "p-3" : "p-4"}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="display text-[15px] font-medium text-ink">
            Stockmonk research score
          </p>
          <p className="mt-0.5 text-[11px] text-muted">
            Data as of {record.asOf ? formatDate(record.asOf) : "N/A"}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {showEvidenceLink && (
            <Link
              href={`/stocks/${record.ticker}/scores`}
              className="text-[11px] font-semibold text-brand hover:text-brand-deep"
            >
              Score evidence →
            </Link>
          )}
          <Link
            href="/framework/scores"
            className="text-[11px] font-semibold text-brand hover:text-brand-deep"
          >
            How scores work →
          </Link>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
        {(["growth", "quality", "valuation", "technical"] as const).map(
          (key) => (
            <ComponentCard key={key} score={record.scores[key]} />
          ),
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-end justify-between gap-3 rounded-lg border border-line bg-paper-deep px-3 py-2.5">
        <div className="flex items-baseline gap-2">
          <span className="display text-[13px] font-medium text-muted">
            Composite
          </span>
          <span className="tabular text-[28px] font-semibold leading-none text-ink">
            {composite.score == null ? "Incomplete" : round(composite.score, 0)}
          </span>
          {composite.score != null && (
            <span className="text-[12px] font-medium text-muted">
              {composite.classification}
            </span>
          )}
        </div>
        <div className="text-right text-[10.5px] text-muted">
          <p>Growth 25% · Quality 35% · Valuation 25% · Technical 15%</p>
        </div>
      </div>
      {composite.status === "incomplete" && (
        <p className="mt-2 text-[10.5px] leading-relaxed text-amber-800">
          One or more components have too little data for a reliable composite,
          so the composite is intentionally shown as Incomplete. The available
          component scores are still displayed.
        </p>
      )}
    </section>
  );
}
