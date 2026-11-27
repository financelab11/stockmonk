import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  CircleAlert,
  FileText,
  MinusCircle,
  PlusCircle,
  Target,
} from "lucide-react";
import { PortfolioPerformancePanel } from "./performance-panel";
import { ExpandableText } from "./expandable-text";
import { formatDate } from "@/lib/format";
import type { PortfolioDetail } from "@/lib/portfolios/types";

const SCORE_LABELS = [
  { key: "growth", label: "Growth", tone: "bg-coral" },
  { key: "quality", label: "Quality", tone: "bg-positive" },
  { key: "valuation", label: "Valuation", tone: "bg-brand" },
  { key: "technical", label: "Technical", tone: "bg-violet" },
] as const;

const ACTION_STYLES = {
  Add: { icon: PlusCircle, className: "bg-positive-soft text-positive" },
  Increase: { icon: PlusCircle, className: "bg-positive-soft text-positive" },
  Remove: { icon: MinusCircle, className: "bg-danger-soft text-danger" },
  Reduce: { icon: MinusCircle, className: "bg-danger-soft text-danger" },
} as const;

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="kicker text-[10px]">{kicker}</p>
      <h2 className="display mt-1.5 text-[24px] leading-[1.15] tracking-[-0.02em] text-ink sm:text-[27px]">
        {title}
      </h2>
      {description && (
        <p className="mt-1.5 max-w-2xl text-[12px] leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

export function PortfolioOverview({ portfolio }: { portfolio: PortfolioDetail }) {
  const t = portfolio.methodology;
  const profileRows: Array<[string, string]> = [
    ["Primary category", portfolio.primaryCategory],
    ...(portfolio.strategyType !== portfolio.primaryCategory
      ? ([["Strategy type", portfolio.strategyType]] as Array<[string, string]>)
      : []),
    ["Market-cap focus", portfolio.marketCapFocus],
    ["Investment horizon", portfolio.horizon],
    ["Rebalancing", portfolio.rebalanceFrequency],
    ["Benchmark", portfolio.benchmark.name],
    ["Methodology", t.version],
  ];
  const displayTags = portfolio.tags.filter(
    (tag) =>
      tag !== portfolio.primaryCategory && tag !== portfolio.strategyType,
  );

  return (
    <div className="space-y-4">
      <section className="grid gap-3 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div className="card p-4 sm:p-5">
          <SectionHeading
            kicker="The strategy"
            title="What this portfolio owns and why"
          />
          <ExpandableText
            className="mt-3"
            previewCount={2}
            paragraphs={[
              portfolio.thesis,
              portfolio.focus,
              `The model holds ${portfolio.holdingsCount} companies, targets a ${portfolio.horizon} investment horizon and is reviewed ${portfolio.rebalanceFrequency.toLowerCase()}. The single-stock cap and sector guide are applied at construction; every current holding is shown in the Constituents tab.`,
              `Key risk: ${portfolio.risks}`,
            ]}
          />
        </div>

        <div className="card p-4 sm:p-5">
          <SectionHeading
            kicker="At a glance"
            title="Strategy profile"
          />
          <dl className="mt-3 space-y-2.5">
            {profileRows.map(([label, value]) => (
              <div
                key={label}
                className="flex items-baseline justify-between gap-3 border-b border-line/70 pb-2 last:border-0 last:pb-0"
              >
                <dt className="text-[10px] text-muted">{label}</dt>
                <dd className="text-right text-[10.5px] font-semibold text-ink">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-3 flex flex-wrap gap-1">
            {displayTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-paper-deep px-2 py-0.5 text-[9px] font-semibold text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <PortfolioPerformancePanel
        performance={portfolio.performance}
        benchmarkOptions={
          portfolio.benchmarkOptions.length
            ? portfolio.benchmarkOptions
            : [portfolio.benchmark]
        }
      />

      <section className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-4 sm:p-5">
          <SectionHeading
            kicker="Methodology"
            title="How the holdings were selected"
            description={t.summary}
          />
          <div className="mt-4 space-y-2.5">
            {SCORE_LABELS.map((score) => {
              const value = t.scoreWeights[score.key];
              return (
                <div key={score.key}>
                  <div className="flex items-center justify-between text-[10.5px]">
                    <span className="font-semibold text-ink-soft">
                      {score.label} score
                    </span>
                    <span className="tabular text-muted">{value}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-paper-deep">
                    <div
                      className={`h-full rounded-full ${score.tone}`}
                      style={{ width: `${Math.min(100, value)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 space-y-2">
            {t.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[11.5px] leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Selection criteria
              </p>
              <ul className="mt-1.5 space-y-1">
                {t.selectionCriteria.map((criterion) => (
                  <li
                    key={criterion}
                    className="flex gap-1.5 text-[10.5px] leading-relaxed text-muted"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-3 shrink-0 text-positive"
                    />
                    {criterion}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Position sizing & controls
              </p>
              <p className="mt-1.5 text-[10.5px] leading-relaxed text-muted">
                {t.weighting}.
              </p>
              <ul className="mt-1.5 space-y-1">
                {t.constraints.map((constraint) => (
                  <li
                    key={constraint}
                    className="flex gap-1.5 text-[10.5px] leading-relaxed text-muted"
                  >
                    <Target
                      aria-hidden="true"
                      className="mt-0.5 size-3 shrink-0 text-brand"
                    />
                    {constraint}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="card p-4 sm:p-5">
          <SectionHeading
            kicker="Investment rationale"
            title="The evidence behind the theme"
          />
          <div className="mt-3 space-y-4">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink-soft">
                Investment opportunity
              </h3>
              <ul className="mt-1.5 space-y-1.5">
                {portfolio.rationale.opportunity.map((item, index) => (
                  <li
                    key={index}
                    className="text-[11px] leading-relaxed text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink-soft">
                Why these companies
              </h3>
              <ul className="mt-1.5 space-y-1.5">
                {portfolio.rationale.whyTheseCompanies.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-1.5 text-[11px] leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink-soft">
                Principal risks
              </h3>
              <ul className="mt-1.5 space-y-1.5">
                {portfolio.rationale.risks.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-1.5 text-[11px] leading-relaxed text-muted"
                  >
                    <CircleAlert
                      aria-hidden="true"
                      className="mt-0.5 size-3 shrink-0 text-amber"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink-soft">
                What could invalidate the thesis
              </h3>
              <ul className="mt-1.5 space-y-1.5">
                {portfolio.rationale.invalidation.map((item, index) => (
                  <li
                    key={index}
                    className="text-[11px] leading-relaxed text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-3 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card p-4 sm:p-5">
          <SectionHeading
            kicker="Rebalance timeline"
            title="Rules-based reviews"
            description="Only recorded events appear here. No historical rebalance events are invented."
          />
          <dl className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-paper-deep px-3 py-2">
              <dt className="stat-label text-[9px]">Frequency</dt>
              <dd className="mt-0.5 text-[12px] font-semibold text-ink">
                {portfolio.rebalance.frequency}
              </dd>
            </div>
            <div className="rounded-lg bg-paper-deep px-3 py-2">
              <dt className="stat-label text-[9px]">Constructed</dt>
              <dd className="mt-0.5 text-[12px] font-semibold text-ink">
                {formatDate(portfolio.rebalance.lastRebalanced)}
              </dd>
            </div>
            <div className="col-span-2 rounded-lg bg-brand-soft px-3 py-2">
              <dt className="stat-label text-[9px] text-brand">
                Next scheduled review
              </dt>
              <dd className="mt-0.5 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-deep">
                <CalendarClock aria-hidden="true" className="size-3.5" />
                {formatDate(portfolio.rebalance.nextRebalance)}
              </dd>
            </div>
          </dl>
          <ol className="relative mt-4 space-y-3 border-l border-line pl-4">
            {portfolio.rebalance.events.map((event) => (
              <li key={`${event.date}-${event.title}`} className="relative">
                <span className="absolute -left-[21px] top-1 size-2.5 rounded-full border-2 border-surface bg-brand" />
                <p className="text-[10px] font-semibold text-brand">
                  {formatDate(event.date)}
                </p>
                <p className="mt-0.5 text-[11.5px] font-semibold text-ink">
                  {event.title}
                </p>
                <p className="mt-0.5 text-[10.5px] leading-relaxed text-muted">
                  {event.summary}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-3 rounded-lg border border-dashed border-line px-3 py-2 text-[9.5px] leading-relaxed text-muted">
            No later rebalance has been executed. The review below is a
            proposal-only snapshot, not a trade record.
          </p>
        </div>

        <div className="card p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <SectionHeading
              kicker="Rebalance review"
              title={
                portfolio.review.status === "proposed"
                  ? "Proposed changes, not executed"
                  : "No changes currently proposed"
              }
              description={portfolio.review.note}
            />
            <span
              className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] ${
                portfolio.review.status === "proposed"
                  ? "bg-amber-soft text-amber"
                  : "bg-positive-soft text-positive"
              }`}
            >
              {portfolio.review.status === "proposed" ? "Proposed" : "No action"}
            </span>
          </div>

          {portfolio.review.changes.length ? (
            <div className="mt-3 space-y-2.5">
              {portfolio.review.changes.map((change) => {
                const style = ACTION_STYLES[change.action];
                const Icon = style.icon;
                return (
                  <div
                    key={`${change.action}-${change.ticker}`}
                    className="rounded-xl border border-line bg-paper-deep/60 p-3"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em] ${style.className}`}
                      >
                        <Icon aria-hidden="true" className="size-3" />
                        {change.action}
                      </span>
                      <span className="text-[11.5px] font-semibold text-ink">
                        {change.name}
                      </span>
                      <span className="font-mono text-[9.5px] text-muted">
                        {change.ticker}
                      </span>
                      {change.currentWeight != null && (
                        <span className="tabular ml-auto text-[9.5px] text-muted">
                          {(change.currentWeight * 100).toFixed(1)}%
                        </span>
                      )}
                      {change.proposedWeight != null && (
                        <span className="tabular text-[9.5px] font-semibold text-ink">
                          {(change.proposedWeight * 100).toFixed(1)}% target
                        </span>
                      )}
                    </div>
                    <ul className="mt-1.5 space-y-0.5">
                      {change.reasons.map((reason, index) => (
                        <li
                          key={index}
                          className="text-[10px] leading-relaxed text-muted"
                        >
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="mt-3 rounded-xl border border-line bg-paper-deep/60 px-3 py-4 text-[11px] leading-relaxed text-muted">
              Every current holding still clears the strategy&apos;s screen at
              the latest data date. The next scheduled review will re-run the
              ranking and surface any proposed changes.
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] text-muted">
            <span>Analysis date: {formatDate(portfolio.review.asOf)}</span>
            <span>Data: latest Stockmonk scores and screener metrics</span>
            <span className="font-semibold text-amber">
              No trades are executed automatically.
            </span>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-brand/20 bg-brand-deep px-4 py-5 text-white sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/70">
              <FileText aria-hidden="true" className="size-3" />
              Portfolio research report
            </p>
            <h2 className="display mt-2 text-[24px] tracking-[-0.02em] text-white sm:text-[28px]">
              Get the full story behind every constituent.
            </h2>
            <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/70">
              Understand why each stock was selected, how it contributes to the
              portfolio and what the latest company fundamentals indicate.
            </p>
          </div>
          <Link
            href={`/portfolio/${portfolio.slug}/report`}
            className="btn btn-brand shrink-0"
          >
            <BookOpen aria-hidden="true" className="size-4" />
            View portfolio report
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
