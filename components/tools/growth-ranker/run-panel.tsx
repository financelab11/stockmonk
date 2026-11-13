"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Loader2, RotateCcw } from "lucide-react";
import type { JobSummary } from "@/lib/growth-ranker/types";
import { methodLabel } from "./format";

export function RunPanel({
  jobId,
  onViewResults,
  onReset,
}: {
  jobId: string;
  onViewResults: () => void;
  onReset: () => void;
}) {
  const [job, setJob] = useState<JobSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const tick = async () => {
      try {
        const response = await fetch(`/api/tools/growth-ranker/jobs/${jobId}`, {
          cache: "no-store",
        });
        const payload = (await response.json()) as { job?: JobSummary; error?: string };
        if (!response.ok || !payload.job) throw new Error(payload.error ?? "Job not found.");
        if (!active) return;
        setJob(payload.job);
        setError(null);
        if (payload.job.status === "queued" || payload.job.status === "running") {
          timer = setTimeout(tick, 1200);
        }
      } catch (caught) {
        if (!active) return;
        setError(caught instanceof Error ? caught.message : "Could not load job.");
        timer = setTimeout(tick, 3000);
      }
    };

    void tick();
    return () => {
      active = false;
      if (timer) clearTimeout(timer);
    };
  }, [jobId]);

  if (!job) {
    return (
      <section className="card p-6">
        <div className="flex items-center gap-2 text-[13px] text-muted">
          <Loader2 aria-hidden="true" className="size-4 animate-spin" />
          Loading job…
        </div>
        {error && <p className="mt-2 text-[12px] text-danger">{error}</p>}
      </section>
    );
  }

  const processed = job.counts.done + job.counts.failed + job.counts.skipped;
  const progress = job.counts.total ? processed / job.counts.total : 0;
  const active = job.items.filter(
    (item) => item.status === "fetching" || item.status === "analyzing",
  );
  const problems = job.items.filter(
    (item) => item.status === "failed" || item.status === "skipped",
  );
  const finished = job.status === "completed" || job.status === "failed";

  return (
    <section className="card p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="kicker">Step 5</p>
          <h2 className="display mt-2 text-[24px] tracking-[-0.02em] text-ink">
            Research batch
          </h2>
          <p className="mt-1 text-[11px] text-muted">
            Job <span className="font-mono">{job.id.slice(0, 8)}</span> ·{" "}
            {job.status === "running" || job.status === "queued"
              ? "survives page refresh"
              : job.status}
          </p>
        </div>
        <button type="button" className="btn btn-ghost" onClick={onReset}>
          <RotateCcw aria-hidden="true" className="size-3.5" />
          New list
        </button>
      </div>

      <div className="mt-4">
        <div className="flex items-baseline justify-between text-[11.5px] text-muted">
          <span>
            {processed.toLocaleString()} of {job.counts.total.toLocaleString()} processed
          </span>
          <span className="tabular font-semibold text-ink">{Math.round(progress * 100)}%</span>
        </div>
        <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-paper-deep">
          <div
            className="h-full rounded-full bg-brand transition-[width] duration-500"
            style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
            role="progressbar"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
        {[
          ["Done", job.counts.done, "text-positive"],
          ["Running", job.counts.running, "text-brand"],
          ["Queued", job.counts.queued, "text-muted"],
          ["Skipped", job.counts.skipped, "text-amber"],
          ["Failed", job.counts.failed, "text-danger"],
        ].map(([label, value, tone]) => (
          <div key={String(label)} className="rounded-lg border border-line bg-paper-deep px-3 py-2">
            <p className="stat-label">{label}</p>
            <p className={`tabular mt-0.5 text-[18px] font-semibold ${tone}`}>
              {String(value)}
            </p>
          </div>
        ))}
      </div>

      {active.length > 0 && (
        <div className="mt-4 rounded-lg border border-line bg-surface px-3.5 py-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            In progress
          </p>
          <ul className="mt-1.5 grid gap-1 sm:grid-cols-2">
            {active.slice(0, 8).map((item) => (
              <li key={item.ticker} className="flex items-center gap-2 text-[11.5px]">
                <Loader2 aria-hidden="true" className="size-3 animate-spin text-brand" />
                <span className="font-mono text-ink">{item.ticker}</span>
                <span className="text-muted">{item.status === "fetching" ? "fetching sources" : "analyzing"}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!finished && job.counts.queued > 0 && (
        <div className="mt-3 rounded-lg border border-line bg-surface px-3.5 py-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            Next in queue
          </p>
          <p className="mt-1 text-[11px] text-muted">
            {job.items
              .filter((item) => item.status === "queued")
              .slice(0, 10)
              .map((item) => item.ticker)
              .join(" · ")}
            {job.counts.queued > 10 ? ` · +${job.counts.queued - 10} more` : ""}
          </p>
        </div>
      )}

      {problems.length > 0 && (
        <details className="mt-3 rounded-lg border border-line bg-surface px-3.5 py-3">
          <summary className="cursor-pointer text-[11.5px] font-semibold text-ink">
            Skipped or failed ({problems.length})
          </summary>
          <ul className="mt-2 max-h-56 space-y-1 overflow-y-auto text-[11px]">
            {problems.slice(0, 30).map((item) => (
              <li key={item.ticker} className="flex gap-2">
                <span className="font-mono text-ink">{item.ticker}</span>
                <span className={item.status === "failed" ? "text-danger" : "text-amber"}>
                  {item.error ?? item.status}
                </span>
              </li>
            ))}
          </ul>
        </details>
      )}

      {job.counts.done > 0 && (
        <div className="mt-3 rounded-lg border border-line bg-paper-deep px-3.5 py-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            Latest completed
          </p>
          <ul className="mt-1 grid gap-1 text-[11.5px] sm:grid-cols-2">
            {job.items
              .filter((item) => item.status === "done")
              .slice(-6)
              .reverse()
              .map((item) => (
                <li key={item.ticker} className="flex justify-between gap-2">
                  <span className="font-mono text-ink">{item.ticker}</span>
                  <span className="text-muted">
                    {item.method ? methodLabel(item.method) : ""} ·{" "}
                    {item.cagr != null ? `${(item.cagr * 100).toFixed(1)}%` : "n/a"}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-[10.5px] leading-relaxed text-muted">
          {finished
            ? "Batch finished. Skipped names had insufficient forward evidence; they are excluded from the ranking."
            : "You can close or refresh this page; the job continues and restores from the URL."}
        </p>
        <div className="flex gap-2">
          {finished && job.counts.done > 0 && (
            <button type="button" className="btn btn-primary" onClick={onViewResults}>
              View ranking
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </button>
          )}
          {finished && job.counts.done === 0 && (
            <button type="button" className="btn btn-primary" onClick={onReset}>
              Try another list
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
