"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Download, X } from "lucide-react";
import type { RankedRow } from "@/lib/growth-ranker/rank";
import type { ForecastResult, JobSummary } from "@/lib/growth-ranker/types";
import {
  confidenceTone,
  inrCompact,
  inrCrore,
  methodLabel,
  methodTone,
  pct,
} from "./format";

type RankedResponse = {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
  rows: RankedRow[];
  job: Pick<JobSummary, "id" | "status" | "counts" | "settings" | "errors">;
};

export function ResultsPanel({ jobId, onReset }: { jobId: string; onReset: () => void }) {
  const [data, setData] = useState<RankedResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [method, setMethod] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("cagr");
  const [dir, setDir] = useState<"asc" | "desc">("desc");
  const [detail, setDetail] = useState<ForecastResult | null>(null);
  const [detailError, setDetailError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const timer = setTimeout(() => {
      const params = new URLSearchParams({
        q,
        method,
        page: String(page),
        pageSize: "50",
        sort,
        dir,
      });
      void fetch(`/api/tools/growth-ranker/jobs/${jobId}/results?${params.toString()}`, {
        cache: "no-store",
      })
        .then(async (response) => {
          const payload = (await response.json()) as RankedResponse & { error?: string };
          if (!response.ok) throw new Error(payload.error ?? "Could not load results.");
          if (active) {
            setData(payload);
            setError(null);
          }
        })
        .catch((caught: unknown) => {
          if (active) setError(caught instanceof Error ? caught.message : "Could not load results.");
        });
    }, 250);
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [dir, jobId, method, page, q, sort]);

  useEffect(() => {
    setPage(1);
  }, [method, q, sort, dir]);

  const openDetail = async (ticker: string) => {
    setDetailError(null);
    try {
      const response = await fetch(
        `/api/tools/growth-ranker/jobs/${jobId}/results/${ticker}`,
        { cache: "no-store" },
      );
      const payload = (await response.json()) as { result?: ForecastResult; error?: string };
      if (!response.ok || !payload.result) throw new Error(payload.error ?? "Not found.");
      setDetail(payload.result);
    } catch (caught) {
      setDetailError(caught instanceof Error ? caught.message : "Could not load the note.");
    }
  };

  if (!data) {
    return (
      <section className="card p-6 text-[13px] text-muted">
        {error ?? "Loading ranking…"}
      </section>
    );
  }

  const settings = data.job.settings;

  return (
    <section className="space-y-4">
      <div className="card p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="kicker">Step 6</p>
            <h2 className="display mt-2 text-[24px] tracking-[-0.02em] text-ink">
              Forward revenue growth ranking
            </h2>
            <p className="mt-1 max-w-2xl text-[11.5px] leading-relaxed text-muted">
              Ranked by base-case 3-year forward revenue CAGR. Historical growth
              does not enter the projection, the CAGR or the ranking. Threshold{" "}
              {settings.thresholdValue.toLocaleString()} {settings.thresholdUnit === "USD_MILLION" ? "USD million" : "INR crore"} ·{" "}
              {data.total.toLocaleString()} ranked ·{" "}
              {data.job.counts.skipped} skipped
            </p>
          </div>
          <div className="flex gap-2">
            <a
              className="btn btn-ghost"
              href={`/api/tools/growth-ranker/jobs/${jobId}/export?format=csv`}
            >
              <Download aria-hidden="true" className="size-3.5" />
              CSV
            </a>
            <a
              className="btn btn-ghost"
              href={`/api/tools/growth-ranker/jobs/${jobId}/export?format=json`}
            >
              <Download aria-hidden="true" className="size-3.5" />
              JSON
            </a>
            <button type="button" className="btn btn-quiet" onClick={onReset}>
              New list
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <input
            value={q}
            onChange={(event) => setQ(event.target.value)}
            placeholder="Search ticker, name or sector"
            className="min-w-[220px] flex-1 rounded-lg border border-line bg-surface px-3 py-2 text-[12px] text-ink"
            aria-label="Search ranked results"
          />
          <select
            value={method}
            onChange={(event) => setMethod(event.target.value)}
            className="rounded-lg border border-line bg-surface px-2.5 py-2 text-[11.5px]"
            aria-label="Filter by method"
          >
            <option value="">All methods</option>
            <option value="CONSENSUS">Consensus</option>
            <option value="CONSENSUS_PLUS_ANALYST_EXTENSION">Consensus + extension</option>
            <option value="ANALYST_MODEL">Bespoke model</option>
          </select>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-lg border border-line bg-surface px-2.5 py-2 text-[11.5px]"
            aria-label="Sort results"
          >
            <option value="cagr">Sort: forward CAGR</option>
            <option value="name">Sort: name</option>
            <option value="marketcap">Sort: market cap</option>
            <option value="fy3">Sort: FY+3 revenue</option>
            <option value="rank">Sort: rank</option>
          </select>
          <button
            type="button"
            className="btn btn-quiet"
            onClick={() => setDir((value) => (value === "asc" ? "desc" : "asc"))}
            aria-label="Toggle sort direction"
          >
            {dir === "desc" ? "↓" : "↑"}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-lg border border-danger/30 bg-danger-soft px-3.5 py-2.5 text-[12px] text-danger">
          {error}
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-line bg-surface">
        <table className="data-table min-w-[980px]">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company</th>
              <th scope="col" className="text-right">Market cap</th>
              <th scope="col" className="text-right">Base year</th>
              <th scope="col" className="text-right">FY+3 base</th>
              <th scope="col" className="text-right">3Y CAGR</th>
              <th scope="col" className="text-right">Bear–bull</th>
              <th scope="col">Method</th>
              <th scope="col">Flags</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr
                key={row.ticker}
                className="cursor-pointer hover:bg-paper-deep"
                onClick={() => void openDetail(row.ticker)}
              >
                <td className="tabular text-muted">{row.rank}</td>
                <td>
                  <span className="block font-mono text-[11px] font-semibold text-ink">
                    {row.ticker}
                  </span>
                  <span className="block max-w-[260px] truncate text-[10.5px] text-muted">
                    {row.name}
                  </span>
                </td>
                <td className="tabular text-right text-[11.5px]">
                  {inrCrore(row.marketCapInr)}
                  <span className="block text-[9.5px] text-faint">{row.marketCapAsOf}</span>
                </td>
                <td className="tabular text-right text-[11.5px]">
                  {row.baseYear}
                  <span className="block text-[9.5px] text-faint">{inrCompact(row.baseRevenue)}</span>
                </td>
                <td className="tabular text-right text-[11.5px]">{inrCompact(row.fy3Revenue)}</td>
                <td className="tabular text-right text-[13px] font-semibold text-positive">
                  {pct(row.cagrBase)}
                </td>
                <td className="tabular text-right text-[10.5px] text-muted">
                  {pct(row.cagrBear)} – {pct(row.cagrBull)}
                </td>
                <td>
                  <span className={`chip ${methodTone(row.method)}`}>{methodLabel(row.method)}</span>
                </td>
                <td>
                  <span className={`text-[10.5px] font-semibold ${confidenceTone(row.confidence)}`}>
                    {row.confidence}
                  </span>
                  {row.flagged && (
                    <span className="ml-1 chip chip-caution">divergence</span>
                  )}
                </td>
              </tr>
            ))}
            {data.rows.length === 0 && (
              <tr>
                <td colSpan={9} className="py-6 text-center text-[12px] text-muted">
                  No companies match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted">
        <span>
          Page {data.page} of {data.pageCount}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            className="btn btn-quiet"
            disabled={data.page <= 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-quiet"
            disabled={data.page >= data.pageCount}
            onClick={() => setPage((value) => Math.min(data.pageCount, value + 1))}
          >
            Next
          </button>
        </div>
      </div>

      {detailError && (
        <div className="rounded-lg border border-danger/30 bg-danger-soft px-3.5 py-2.5 text-[12px] text-danger">
          {detailError}
        </div>
      )}

      {detail && <DetailPanel result={detail} onClose={() => setDetail(null)} />}

      <p className="text-[10.5px] leading-relaxed text-muted">
        Forward estimates are third-party consensus and/or model output, not
        Stockmonk price targets or recommendations. A high forward growth rate can
        sit alongside high risk; the ranking is a research starting point, not a
        buy list.
      </p>
    </section>
  );
}

function DetailPanel({ result, onClose }: { result: ForecastResult; onClose: () => void }) {
  const projections = [result.projections.FY1, result.projections.FY2, result.projections.FY3];
  const max = Math.max(...projections.map((point) => point.bull), 1);

  return (
    <div className="card p-5 sm:p-6" id="growth-detail">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="kicker">Research note</p>
          <h3 className="display mt-1 text-[22px] tracking-[-0.02em] text-ink">
            {result.name}
          </h3>
          <p className="mt-1 text-[11px] text-muted">
            <span className="font-mono text-ink">{result.ticker}</span> · {result.sector} ·
            FY end {result.fiscal_year_end}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className={`chip ${methodTone(result.method)}`}>
            {methodLabel(result.method)}
          </span>
          <span className={`chip ${result.confidence === "high" ? "chip-positive" : "chip-info"}`}>
            {result.confidence} confidence
          </span>
          <button type="button" className="btn btn-quiet" onClick={onClose} aria-label="Close note">
            <X aria-hidden="true" className="size-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Metric label="Market cap" value={inrCrore(result.market_cap.value)} hint={`as of ${result.market_cap.asOf}`} />
        <Metric label={`${result.base_year.label} revenue`} value={inrCompact(result.base_year.revenue)} hint="CAGR base" />
        <Metric label={`${result.projections.FY3.label} revenue`} value={inrCompact(result.projections.FY3.base)} hint="base case" />
        <Metric label="3Y forward CAGR" value={pct(result.cagr_3y.base)} hint={`${pct(result.cagr_3y.bear)} – ${pct(result.cagr_3y.bull)}`} />
      </div>

      <div className="mt-5 overflow-x-auto rounded-xl border border-line">
        <table className="data-table min-w-[620px]">
          <thead>
            <tr>
              <th scope="col">Fiscal year</th>
              <th scope="col" className="text-right">Bear</th>
              <th scope="col" className="text-right">Base</th>
              <th scope="col" className="text-right">Bull</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            {projections.map((point) => (
              <tr key={point.label}>
                <td>
                  <span className="font-semibold text-ink">{point.label}</span>
                  <span className="block text-[9.5px] text-faint">{point.periodEnd}</span>
                </td>
                <td className="tabular text-right text-[11.5px]">{inrCompact(point.bear)}</td>
                <td className="tabular text-right text-[11.5px] font-semibold text-ink">
                  {inrCompact(point.base)}
                </td>
                <td className="tabular text-right text-[11.5px]">{inrCompact(point.bull)}</td>
                <td className="text-[10.5px] text-muted">
                  {point.source === "CONSENSUS"
                    ? `Consensus (${point.analystCount ?? "n/a"} analysts)`
                    : point.source === "ANALYST_EXTENSION"
                      ? "Consensus-implied extension"
                      : "Bespoke model"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 space-y-2">
        {projections.map((point) => (
          <div key={point.label}>
            <div className="flex justify-between text-[10px] text-muted">
              <span>{point.label} base</span>
              <span className="tabular">{inrCompact(point.base)}</span>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-paper-deep">
              <div
                className="h-full rounded-full bg-brand"
                style={{ width: `${(point.base / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-surface p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            Consensus check
          </p>
          <p className="mt-1 text-[12px] leading-relaxed text-ink-soft">
            {result.consensus.available
              ? `${result.consensus.analystCount ?? "n/a"} analysts contribute. Base case differs from consensus FY+3 by ${
                  result.consensus.baseDifferencePct == null
                    ? "n/a (no FY+3 consensus)"
                    : pct(result.consensus.baseDifferencePct)
                }.`
              : "No third-party consensus is available for this company."}
          </p>
          {result.consensus.note && (
            <p className="mt-2 text-[11.5px] leading-relaxed text-muted">{result.consensus.note}</p>
          )}
          <p className="mt-2 text-[10.5px] leading-relaxed text-faint">
            {result.consensus.years.some(
              (year) => year.revenueHigh != null || year.revenueLow != null,
            )
              ? result.consensus.years
                  .filter((year) => year.revenueHigh != null || year.revenueLow != null)
                  .map(
                    (year) =>
                      `${year.label}: ${inrCompact(year.revenueLow)}–${inrCompact(year.revenueHigh)}`,
                  )
                  .join(" · ")
              : "The configured provider supplies mean revenue and analyst counts; revenue high/low are not available."}
          </p>
          {result.consensus.flagged && (
            <p className="mt-2 text-[11px] font-semibold text-amber">
              Divergence flag raised. Consensus was not overridden.
            </p>
          )}
        </div>

        <div className="rounded-xl border border-line bg-surface p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            Method and assumptions
          </p>
          <ul className="mt-1.5 space-y-1 text-[11.5px] leading-relaxed text-ink-soft">
            {result.assumptions.map((assumption) => (
              <li key={assumption}>• {assumption}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-surface p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            Risks
          </p>
          <ul className="mt-1.5 space-y-1 text-[11.5px] leading-relaxed text-ink-soft">
            {result.risks.map((risk) => (
              <li key={risk}>• {risk}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-surface p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            Segment context
          </p>
          <ul className="mt-1.5 space-y-1 text-[11.5px] text-ink-soft">
            {result.segment_context.map((segment) => (
              <li key={segment.name} className="flex justify-between gap-2">
                <span>{segment.name}</span>
                <span className="tabular text-muted">{pct(segment.share)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-line bg-surface p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            Sources used
          </p>
          <span className="text-[10px] text-faint">
            Fetched {result.generated_at.slice(0, 10)}
          </span>
        </div>
        <ul className="mt-2 divide-y divide-line">
          {result.evidence.map((item) => (
            <li key={`${item.kind}-${item.title}`} className="flex flex-wrap items-start gap-2 py-2">
              <span className={`chip ${item.available ? "chip-info" : "chip-caution"}`}>
                {item.kind.replace(/_/g, " ")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11.5px] font-medium text-ink">{item.title}</p>
                {item.note && <p className="text-[10px] leading-relaxed text-muted">{item.note}</p>}
                {item.date && <p className="text-[9.5px] text-faint">Dated {item.date}</p>}
              </div>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-brand"
                >
                  Open <ArrowUpRight aria-hidden="true" className="size-3" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 rounded-xl border border-line bg-paper-deep p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            Historical revenue — context only
          </p>
          <span className="chip chip-caution">Zero weight in projection and ranking</span>
        </div>
        <div className="mt-2 overflow-x-auto">
          <table className="data-table min-w-[420px]">
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col" className="text-right">Revenue</th>
                <th scope="col" className="text-right">Reported YoY</th>
              </tr>
            </thead>
            <tbody>
              {result.historical_reference.map((point) => (
                <tr key={point.label}>
                  <td>{point.label}</td>
                  <td className="tabular text-right">{inrCompact(point.revenue)}</td>
                  <td className="tabular text-right text-muted">{pct(point.growth)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[10px] leading-relaxed text-muted">
          Shown for reference. The engine never reads this series when projecting
          revenue; only FY0 revenue is used as the CAGR denominator.
        </p>
      </div>
    </div>
  );
}

function Metric({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-lg border border-line bg-paper-deep px-3 py-2">
      <p className="stat-label">{label}</p>
      <p className="tabular mt-0.5 text-[15px] font-semibold text-ink">{value}</p>
      {hint && <p className="text-[9.5px] text-faint">{hint}</p>}
    </div>
  );
}
