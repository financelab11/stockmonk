import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Disclaimer } from "@/components/ui/disclaimer";
import {
  getGrowthRankerDataset,
  getGrowthRankerEstimate,
} from "@/lib/growth-ranker/dataset";
import {
  confidenceTone,
  inrCompact,
  inrCrore,
  methodLabel,
  methodTone,
  multiple,
  pct,
  score,
} from "@/components/tools/growth-ranker/format";

export const dynamicParams = false;

export function generateStaticParams() {
  return getGrowthRankerDataset().results.map((result) => ({
    ticker: result.ticker,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ticker: string }>;
}): Promise<Metadata> {
  const { ticker } = await params;
  const result = getGrowthRankerEstimate(ticker);
  if (!result) return { title: "Forward estimate not found" };
  return {
    title: `${result.name} (${result.ticker}) — Forward revenue estimate`,
    description: `Base-case ${pct(result.cagr_3y.base)} three-year forward revenue CAGR for ${result.name}, with bear/bull cases, assumptions and sourced evidence.`,
    alternates: { canonical: `/tools/growth-ranker/${result.ticker}` },
  };
}

export default async function GrowthRankerDetailPage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = await params;
  const result = getGrowthRankerEstimate(ticker);
  if (!result) notFound();

  const projections = [
    result.projections.FY1,
    result.projections.FY2,
    result.projections.FY3,
  ];
  const max = Math.max(...projections.map((point) => point.bull), 1);

  return (
    <>
      <section className="surface-tint border-b border-line">
        <div className="container-page py-7 lg:py-10">
          <Link
            href="/tools/growth-ranker"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand hover:text-brand-deep"
          >
            <ArrowLeft aria-hidden="true" className="size-3.5" />
            Forward growth ranking
          </Link>
          <p className="kicker mt-4">{result.sector}</p>
          <h1 className="display mt-2 max-w-3xl text-[32px] leading-[1.06] tracking-[-0.028em] text-ink sm:text-[40px]">
            {result.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] font-semibold text-brand">
              {result.ticker}
            </span>
            <span className={`chip ${methodTone(result.method)}`}>
              {methodLabel(result.method)}
            </span>
            <span
              className={`chip ${
                result.confidence === "high" ? "chip-positive" : "chip-info"
              }`}
            >
              {result.confidence} confidence
            </span>
            <span className="text-[10.5px] text-muted">
              FY end {result.fiscal_year_end} · generated{" "}
              {result.generated_at.slice(0, 10)}
            </span>
          </div>
        </div>
      </section>

      <div className="container-page py-6 lg:py-8">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Metric
            label="Market cap"
            value={inrCrore(result.market_cap.value)}
            hint={`as of ${result.market_cap.asOf}`}
          />
          <Metric
            label={`${result.base_year.label} revenue`}
            value={inrCompact(result.base_year.revenue)}
            hint="CAGR base"
          />
          <Metric
            label={`${result.projections.FY3.label} revenue`}
            value={inrCompact(result.projections.FY3.base)}
            hint="base case"
          />
          <Metric
            label="3Y forward CAGR"
            value={pct(result.cagr_3y.base)}
            hint={`${pct(result.cagr_3y.bear)} – ${pct(result.cagr_3y.bull)}`}
          />
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-x-auto rounded-xl border border-line bg-surface">
            <table className="data-table min-w-[560px]">
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
                      <span className="block text-[9.5px] text-faint">
                        {point.periodEnd}
                      </span>
                    </td>
                    <td className="tabular text-right text-[11.5px]">
                      {inrCompact(point.bear)}
                    </td>
                    <td className="tabular text-right text-[11.5px] font-semibold text-ink">
                      {inrCompact(point.base)}
                    </td>
                    <td className="tabular text-right text-[11.5px]">
                      {inrCompact(point.bull)}
                    </td>
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

          <div className="rounded-xl border border-line bg-surface p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
              Base-case path
            </p>
            <div className="mt-3 space-y-3">
              {projections.map((point) => (
                <div key={point.label}>
                  <div className="flex justify-between text-[10px] text-muted">
                    <span>{point.label}</span>
                    <span className="tabular">{inrCompact(point.base)}</span>
                  </div>
                  <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-paper-deep">
                    <div
                      className="h-full rounded-full bg-brand"
                      style={{ width: `${(point.base / max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[10px] leading-relaxed text-muted">
              Bear and bull bands widen with the horizon. The ranking uses the
              base bar only.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-xl border border-line bg-surface p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
              Valuation metrics
            </p>
            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-[11.5px] sm:grid-cols-3">
              <MetricRow label="P/E" value={multiple(result.valuation.pe)} />
              <MetricRow label="Forward P/E" value={multiple(result.valuation.forwardPe)} />
              <MetricRow label="EV/EBITDA" value={multiple(result.valuation.evEbitda)} />
              <MetricRow label="PEG" value={multiple(result.valuation.peg)} />
              <MetricRow label="P/FCF" value={multiple(result.valuation.pFcf)} />
            </div>
          </div>
          <div className="rounded-xl border border-line bg-surface p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
              Composite score
            </p>
            <p className="tabular mt-1 text-[28px] font-semibold text-brand-deep">
              {score(result.scores.composite)}
            </p>
            <div className="mt-2 space-y-1 text-[10.5px] text-muted">
              <MetricRow label="Growth (50%)" value={score(result.scores.growth)} />
              <MetricRow label="Valuation (30%)" value={score(result.scores.valuation)} />
              <MetricRow label="Quality (20%)" value={score(result.scores.quality)} />
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-line bg-surface p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            Quality metrics
          </p>
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-[11.5px] sm:grid-cols-5">
            <MetricRow label="ROCE" value={pct(result.quality.roce)} />
            <MetricRow label="ROE" value={pct(result.quality.roe)} />
            <MetricRow label="EBIT margin" value={pct(result.quality.ebitMargin)} />
            <MetricRow label="EBIT growth" value={pct(result.quality.ebitGrowth)} />
            <MetricRow
              label="Operating leverage"
              value={multiple(result.quality.operatingLeverage)}
            />
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
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
              <p className="mt-2 text-[11.5px] leading-relaxed text-muted">
                {result.consensus.note}
              </p>
            )}
            {result.consensus.years.length > 0 && (
              <ul className="mt-2 space-y-0.5 text-[10.5px] text-muted">
                {result.consensus.years.map((year) => (
                  <li key={year.label} className="flex justify-between gap-2">
                    <span>
                      {year.label} mean
                      {year.analystCount != null
                        ? ` · ${year.analystCount} analysts`
                        : ""}
                    </span>
                    <span className="tabular text-ink-soft">
                      {inrCompact(year.revenue)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {result.consensus.flagged && (
              <p className="mt-2 text-[11px] font-semibold text-amber">
                Divergence flag raised. Consensus was not silently overridden.
              </p>
            )}
            <p className="mt-2 text-[10px] leading-relaxed text-faint">
              {result.consensus.years.some(
                (year) => year.revenueHigh != null || year.revenueLow != null,
              )
                ? result.consensus.years
                    .filter(
                      (year) =>
                        year.revenueHigh != null || year.revenueLow != null,
                    )
                    .map(
                      (year) =>
                        `${year.label}: ${inrCompact(year.revenueLow)}–${inrCompact(year.revenueHigh)}`,
                    )
                    .join(" · ")
                : "The configured provider supplies mean revenue and analyst counts; revenue high/low are not available."}
            </p>
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
            <span className={`text-[10.5px] font-semibold ${confidenceTone(result.confidence)}`}>
              {result.confidence} confidence
            </span>
          </div>
          <ul className="mt-2 divide-y divide-line">
            {result.evidence.map((item) => (
              <li
                key={`${item.kind}-${item.title}`}
                className="flex flex-wrap items-start gap-2 py-2"
              >
                <span
                  className={`chip ${item.available ? "chip-info" : "chip-caution"}`}
                >
                  {item.kind.replace(/_/g, " ")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11.5px] font-medium text-ink">{item.title}</p>
                  {item.note && (
                    <p className="text-[10px] leading-relaxed text-muted">
                      {item.note}
                    </p>
                  )}
                  {item.date && (
                    <p className="text-[9.5px] text-faint">Dated {item.date}</p>
                  )}
                </div>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-brand"
                  >
                    Open
                    <ArrowUpRight aria-hidden="true" className="size-3" />
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
            <span className="chip chip-caution">
              Zero weight in projection and ranking
            </span>
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
                    <td className="tabular text-right">
                      {inrCompact(point.revenue)}
                    </td>
                    <td className="tabular text-right text-muted">
                      {pct(point.growth)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[10px] leading-relaxed text-muted">
            Shown for reference. The forecast engine never reads this series;
            only FY0 revenue is used as the CAGR denominator.
          </p>
        </div>

        <Link
          href="/tools/growth-ranker"
          className="btn btn-ghost mt-5 inline-flex"
        >
          <ArrowLeft aria-hidden="true" className="size-3.5" />
          Back to all estimates
        </Link>

        <Disclaimer variant="boxed" className="mt-8" />
      </div>
    </>
  );
}

function Metric({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface px-3 py-2.5">
      <p className="stat-label">{label}</p>
      <p className="tabular mt-0.5 text-[16px] font-semibold text-ink">{value}</p>
      {hint && <p className="text-[9.5px] text-faint">{hint}</p>}
    </div>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2 border-b border-line/60 py-1 last:border-0">
      <span className="text-muted">{label}</span>
      <span className="tabular font-semibold text-ink">{value}</span>
    </div>
  );
}
