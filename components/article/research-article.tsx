import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MessageSquareText,
  PenLine,
} from "lucide-react";
import { MobileToc, Toc } from "@/components/article/toc";
import { ShareButtons } from "@/components/article/share-buttons";
import { SectionHeading } from "@/components/article/section-heading";

import { RangeBar } from "@/components/article/range-bar";
import { SegmentBars } from "@/components/article/segment-bars";
import { ConsensusPanel } from "@/components/article/consensus-panel";
import { PeerTable } from "@/components/article/peer-table";
import { RiskList } from "@/components/article/risk-list";
import {
  LazyCashFlowChart,
  LazyDrawdownChart,
  LazyGrowthChart,
  LazyMarginChart,
  LazyMixDonut,
  LazyPeerBarChart,
  LazyPriceChart,
  LazyScorecardChart,
  LazySurpriseChart,
  LazyValuationChart,
} from "@/components/charts/lazy-charts";
import { StockLogoStatic } from "@/components/stock-logo-static";
import { FactorChips } from "@/components/ui/factor-chips";
import { PriceChange } from "@/components/ui/price-change";
import { ProCTA } from "@/components/ui/pro-cta";
import { StatTile } from "@/components/ui/stat-tile";
import { Disclaimer } from "@/components/ui/disclaimer";
import { WatchlistButton } from "@/components/watchlist/watchlist-button";
import type { ResearchBundle } from "@/lib/data";
import { resolveStory } from "@/lib/story-tokens";
import type { StockStory } from "@/content/stocks/types";
import {
  buildArticleSources,
  buildDrawdown,
  buildPeerRows,
  buildSurprisePoints,
  estimateRows,
  latestQuarter,
  peerMedian,
  quarterLabel,
  valuationRange,
} from "@/lib/article";
import {
  annualCashSeries,
  annualMarginSeries,
  computeCagr,
  quarterlyRevenueSeries,
  valuationSeries,
} from "@/lib/analytics";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatFiscalQuarter,
  formatMultiple,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="prose-editorial">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  );
}

function DataRow({
  label,
  value,
  hint,
}: {
  label: string;
  value: ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-line py-2 last:border-0">
      <span className="text-[11.5px] text-muted">
        {label}
        {hint && <span className="ml-1 text-[10px] text-faint">({hint})</span>}
      </span>
      <span className="tabular text-right text-[12px] font-semibold text-ink">
        {value}
      </span>
    </div>
  );
}

export function ResearchArticle({
  bundle,
  story: sourceStory,
  related,
}: {
  bundle: ResearchBundle;
  story: StockStory;
  related: ResearchBundle[];
}) {
  const { data, consensus, segments, prices, factors } = bundle;
  const story = resolveStory(sourceStory, data);
  const segmentSlices = segments?.segments ?? [];
  const currency = data.currency ?? "USD";
  // Price and market cap are quoted in the local trading currency, which can
  // differ from the reporting currency (for example USD-reporting ADX names).
  const quoteCurrency = data.quoteCurrency ?? currency;
  const money = (value: number | null | undefined, digits = 2): string =>
    formatCurrency(value, digits, currency);
  const compact = (value: number | null | undefined): string =>
    formatCompactCurrency(value, currency);
  const quoteMoney = (value: number | null | undefined, digits = 2): string =>
    formatCurrency(value, digits, quoteCurrency);
  const quoteCompact = (value: number | null | undefined): string =>
    formatCompactCurrency(value, quoteCurrency);
  const sources = buildArticleSources(story, bundle);
  const latest = latestQuarter(data);
  const cagr = computeCagr(data.annual);
  const quarterSeries = quarterlyRevenueSeries(data, 10);
  const marginSeries = annualMarginSeries(data, 7);
  const cashSeries = annualCashSeries(data, 7);
  const multipleSeries = valuationSeries(data, 60);
  const draws = buildDrawdown(prices);
  const surprise = buildSurprisePoints(consensus);
  const estimates = estimateRows(consensus);
  const { rows: peerRows, basis } = buildPeerRows(bundle);
  const peerRevenueGrowth = peerMedian(peerRows, "revenueGrowth");
  const peerEv = peerMedian(peerRows, "evEbitda");
  const peerPe = peerMedian(peerRows, "pe");
  const peerRoic = peerMedian(peerRows, "roic");
  const ranges = valuationRange(bundle);
  const cyclePosition = bundle.rangePosition ?? 0;

  const premiumDiscount =
    data.metrics.evEbitda != null && peerEv != null
      ? data.metrics.evEbitda / peerEv - 1
      : null;

  const marketHref = "/discover";
  const marketLabel = "Discover";
  const allStocksHref = "/discover?tab=all-stocks";
  const priceBasePath = "/data/prices";
  const stockHref = (ticker: string) => `/stocks/${ticker}`;
  const relatedStories = related
    .filter((item) => item.data.ticker !== data.ticker)
    .slice(0, 3);

  const quarters = data.quarterly.filter((row) => !row.ttm).slice(-6);

  return (
    <>
      <header className="surface-tint border-b border-line">
        <div className="container-page py-6 lg:py-9">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-[10.5px] text-muted"
          >
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span aria-hidden="true">›</span>
            <Link href={marketHref} className="hover:text-ink">
              {marketLabel}
            </Link>
            <span aria-hidden="true">›</span>
            <Link href={allStocksHref} className="hover:text-ink">
              {data.sector}
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-ink">{data.ticker}</span>
          </nav>

          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex min-w-0 gap-4">
              <StockLogoStatic
                ticker={data.ticker}
                size={62}
                className="mt-0.5 rounded-2xl"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold text-brand">
                    {data.ticker}
                  </span>
                  <span className="text-[10px] text-muted">·</span>
                  <span className="text-[10px] text-muted">
                    {data.sector}
                    {data.industry && data.industry !== data.sector
                      ? ` · ${data.industry}`
                      : ""}
                  </span>
                </div>
                <h1 className="display mt-1 text-[32px] leading-[1.06] tracking-[-0.028em] text-ink sm:text-[42px]">
                  {story.title}
                </h1>
                <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-ink-soft">
                  {story.dek}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <FactorChips chips={data.factorChips} limit={4} />
                </div>
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-2 lg:flex-col lg:items-end">
              <WatchlistButton ticker={data.ticker} />
              <ShareButtons
                title={`${data.name} (${data.ticker}) research — Stockmonk`}
              />
              <div className="flex items-center gap-3 text-[10.5px] text-muted lg:mt-1">
                <span className="inline-flex items-center gap-1">
                  <CalendarDays aria-hidden="true" className="size-3.5" />
                  Updated {formatDate(data.updatedAt.slice(0, 10))}
                </span>
                {sourceStory.narrativeUpdatedAt && (
                  <span className="inline-flex items-center gap-1">
                    <PenLine aria-hidden="true" className="size-3.5" />
                    Analysis {formatDate(sourceStory.narrativeUpdatedAt)}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Clock3 aria-hidden="true" className="size-3.5" />
                  {story.readingMinutes} min read
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7">
            <StatTile
              label="Last close"
              value={quoteMoney(data.latestPrice.close)}
              hint={
                <>
                  <PriceChange value={data.latestPrice.changePct} />
                  <span className="ml-1 text-faint">
                    · {formatDate(data.latestPrice.asOf)}
                  </span>
                </>
              }
            />
            <StatTile
              label="Market cap"
              value={quoteCompact(data.latestPrice.marketCap)}
            />
            <StatTile
              label="Revenue TTM"
              value={compact(data.metrics.revenueTtm)}
              hint={`${formatPercent(data.metrics.revenueGrowthTtm)} YoY`}
            />
            <StatTile
              label="Operating margin"
              value={formatPercent(data.metrics.operatingMargin)}
            />
            <StatTile
              label="P/E (TTM)"
              value={formatMultiple(data.metrics.pe)}
            />
            <StatTile
              label="EV/EBITDA"
              value={formatMultiple(data.metrics.evEbitda)}
            />
            <StatTile
              label="1Y return"
              value={formatSignedPercent(data.metrics.return1y)}
              tone={
                data.metrics.return1y != null && data.metrics.return1y >= 0
                  ? "positive"
                  : "caution"
              }
            />
          </div>
        </div>
      </header>

      <div className="container-page mt-6 lg:mt-9">
        <div className="grid gap-8 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-12">
          <aside className="min-w-0">
            <Toc ticker={data.ticker} />
          </aside>

          <article className="article-body min-w-0 max-w-[800px]">
            <div className="mb-5 lg:hidden">
              <MobileToc />
            </div>

            <section
              id="big-picture"
              className="scroll-mt-28 border-b border-line pb-9"
            >
              <SectionHeading
                number="01"
                id="big-picture"
                title="The big picture"
                subtitle={`${data.name} (${data.ticker}) · ${data.sector}`}
              />
              <Paragraphs paragraphs={story.bigPicture.paragraphs} />
              {story.bigPicture.quote && (
                <blockquote className="my-5 rounded-xl border-l-4 border-coral bg-coral-soft px-4 py-3.5">
                  <p className="display-italic text-[18px] leading-snug text-ink">
                    “{story.bigPicture.quote}”
                  </p>
                </blockquote>
              )}
              <div className="mt-5">
                <LazyPriceChart
                  ticker={data.ticker}
                  initialData={prices}
                  currency={quoteCurrency}
                  priceBasePath={priceBasePath}
                />
              </div>
              <div className="mt-4 rounded-xl border border-line bg-surface p-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                  52-week position
                </p>
                <RangeBar
                  low={data.latestPrice.low52}
                  high={data.latestPrice.high52}
                  current={data.latestPrice.close}
                  position={bundle.rangePosition}
                  currency={quoteCurrency}
                />
                <p className="mt-2 text-[10.5px] leading-relaxed text-muted">
                  Trades at {Math.round(cyclePosition * 100)}% of the 52-week
                  range. This is a price observation, not a recommendation.
                </p>
              </div>
            </section>

            <section
              id="what-it-does"
              className="scroll-mt-28 border-b border-line py-9"
            >
              <SectionHeading
                number="02"
                id="what-it-does"
                title="What the company does"
                subtitle="Business model, segments and the shape of the revenue base"
              />
              <Paragraphs paragraphs={story.whatItDoes.paragraphs} />
              {story.whatItDoes.bullets && (
                <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                  {story.whatItDoes.bullets.map((bullet) => (
                    <div key={bullet.title} className="card-flat p-3">
                      <p className="text-[11.5px] font-semibold text-ink">
                        {bullet.title}
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted">
                        {bullet.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {segments && segmentSlices.length > 1 && (
                <div className="mt-5 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                  <LazyMixDonut
                    data={segmentSlices}
                    title={`Revenue mix by ${segments.segmentLabel.toLowerCase()}`}
                    description={`Latest annual disclosure dated ${formatDate(segments.asOf)}.`}
                    currency={currency}
                  />
                  <div className="rounded-xl border border-line bg-surface p-4">
                    <SegmentBars
                      slices={segmentSlices}
                      label={segments.segmentLabel}
                      total={segmentSlices.reduce(
                        (sum, slice) => sum + slice.revenue,
                        0,
                      )}
                      currency={currency}
                    />
                  </div>
                </div>
              )}
              {segments && segmentSlices.length === 1 && (
                <div className="mt-5 rounded-xl border border-line bg-surface p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                    Reported revenue
                  </p>
                  <p className="tabular mt-2 text-[20px] font-semibold text-ink">
                    {compact(segmentSlices[0].revenue)}
                  </p>
                  <p className="mt-1 text-[10.5px] leading-relaxed text-muted">
                    Consolidated total from the latest annual disclosure dated{" "}
                    {formatDate(segments.asOf)}. This company does not disclose
                    a revenue split, so no segment mix is shown.
                  </p>
                </div>
              )}
              <div className="mt-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                  Two comparable companies
                </p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {peerRows
                    .filter((row) => !row.isSubject)
                    .slice(0, 2)
                    .map((row) => {
                      return (
                        <Link
                          key={row.ticker}
                          href={stockHref(row.ticker)}
                          className="card-flat flex items-center gap-2.5 p-3 hover:border-brand/40"
                        >
                          <StockLogoStatic ticker={row.ticker} size={30} />
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[11.5px] font-semibold text-ink">
                              {row.name}
                            </span>
                            <span className="block text-[10px] text-muted">
                              {row.ticker} · {quoteCompact(row.marketCap)}
                            </span>
                          </span>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-3.5 text-faint"
                          />
                        </Link>
                      );
                    })}
                </div>
              </div>
            </section>

            <section
              id="how-it-makes-money"
              className="scroll-mt-28 border-b border-line py-9"
            >
              <SectionHeading
                number="03"
                id="how-it-makes-money"
                title="How it makes money"
                subtitle="Segment economics, geography and what drives the consolidated margin"
              />
              <Paragraphs paragraphs={story.howItMakesMoney.paragraphs} />
              {segments && (
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-line bg-surface p-4">
                    <SegmentBars
                      slices={segments.segments}
                      label={`${segments.segmentLabel} · revenue`}
                      total={segments.segments.reduce(
                        (sum, slice) => sum + slice.revenue,
                        0,
                      )}
                      currency={currency}
                    />
                  </div>
                  {segments.geography.length > 0 && (
                    <LazyMixDonut
                      data={segments.geography}
                      title={segments.geographyLabel ?? "Geography"}
                      description="Revenue by billing location from the latest annual report."
                      currency={currency}
                    />
                  )}
                </div>
              )}
              <div className="mt-4 rounded-xl border border-line bg-surface p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                  Revenue quality
                </p>
                <div className="mt-1">
                  <DataRow
                    label="Revenue TTM"
                    value={compact(data.metrics.revenueTtm)}
                  />
                  <DataRow
                    label="Gross margin"
                    value={formatPercent(data.metrics.grossMargin)}
                  />
                  <DataRow
                    label="Operating margin"
                    value={formatPercent(data.metrics.operatingMargin)}
                  />
                  <DataRow
                    label="Net margin"
                    value={formatPercent(data.metrics.netMargin)}
                  />
                  <DataRow
                    label="Free-cash-flow margin"
                    value={formatPercent(data.metrics.fcfMargin)}
                  />
                </div>
              </div>
            </section>

            <section
              id="growth-drivers"
              className="scroll-mt-28 border-b border-line py-9"
            >
              <SectionHeading
                number="04"
                id="growth-drivers"
                title="Growth drivers and catalysts"
                subtitle={`${formatPercent(cagr)} compound annual revenue growth from the first to the latest fiscal year`}
              />
              <Paragraphs paragraphs={story.growth.paragraphs} />
              {story.growth.bullets && (
                <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                  {story.growth.bullets.map((bullet) => (
                    <div key={bullet.title} className="card-flat p-3">
                      <p className="text-[11.5px] font-semibold text-ink">
                        {bullet.title}
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted">
                        {bullet.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-5">
                <LazyGrowthChart
                  points={quarterSeries}
                  title="Quarterly revenue and year-over-year growth"
                  description="Discrete quarterly revenue from reported statements; bars are revenue, line is YoY growth."
                  currency={currency}
                />
              </div>
              <div className="mt-4 rounded-xl border border-line bg-surface p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                  Attributed forward estimates
                </p>
                <div className="mt-1">
                  {estimates.map((estimate) => (
                    <DataRow
                      key={estimate.period}
                      label={estimate.period}
                      value={`${compact(estimate.revenue)} rev · ${money(estimate.eps)} EPS`}
                      hint={
                        estimate.endDate
                          ? formatDate(estimate.endDate)
                          : undefined
                      }
                    />
                  ))}
                  {!estimates.length && (
                    <p className="py-2 text-[11.5px] text-muted">
                      No consensus estimates available.
                    </p>
                  )}
                </div>
                <p className="mt-2 text-[10px] leading-relaxed text-muted">
                  Third-party consensus only. Stockmonk does not forecast prices
                  or issue recommendations.
                </p>
              </div>
            </section>

            <section
              id="financial-performance"
              className="scroll-mt-28 border-b border-line py-9"
            >
              <SectionHeading
                number="05"
                id="financial-performance"
                title="Financial performance"
                subtitle={`Latest reported period: ${quarterLabel(latest)}${latest ? ` · reported ${formatDate(latest.reportDate)}` : ""}`}
              />
              <Paragraphs paragraphs={story.performance.paragraphs} />

              {latest && (
                <div className="mt-4 rounded-xl border border-line bg-brand-soft/60 p-4">
                  <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-deep">
                    <MessageSquareText
                      aria-hidden="true"
                      className="size-3.5"
                    />
                    What the latest quarter showed
                  </p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">
                    {formatFiscalQuarter(latest.period, latest.fyear)} revenue
                    was <strong>{compact(latest.revenue)}</strong>
                    {bundle.latestQYoY != null
                      ? `, ${formatSignedPercent(bundle.latestQYoY)} year over year`
                      : ""}
                    . Operating margin was{" "}
                    <strong>{formatPercent(latest.operatingMargin)}</strong>
                    {latest.epsDiluted != null
                      ? ` and diluted EPS was ${money(latest.epsDiluted)}`
                      : ""}
                    .
                  </p>
                  <ul className="mt-2 space-y-1 text-[11.5px] leading-relaxed text-ink-soft">
                    <li>
                      • Revenue base: {compact(data.metrics.revenueTtm)} on a
                      trailing basis.
                    </li>
                    <li>
                      • Growth: {formatPercent(data.metrics.revenueGrowthTtm)}{" "}
                      trailing revenue growth;{" "}
                      {formatPercent(bundle.latestQYoY)} in the latest quarter.
                    </li>
                    <li>
                      • Profitability:{" "}
                      {formatPercent(data.metrics.operatingMargin)} operating
                      margin and {formatPercent(data.metrics.netMargin)} net
                      margin.
                    </li>
                    <li>
                      • Cash conversion: {formatPercent(data.metrics.fcfMargin)}{" "}
                      free-cash-flow margin.
                    </li>
                  </ul>
                  <p className="mt-2 text-[10px] leading-relaxed text-muted">
                    These observations are derived from reported results and
                    statements. Stockmonk does not republish transcripts and
                    does not attribute quotes to management without a primary
                    source.
                  </p>
                </div>
              )}

              <div className="mt-5">
                <LazyMarginChart
                  points={marginSeries}
                  description="Annual operating margin and free-cash-flow margin from reported statements."
                />
              </div>

              <div className="mt-4 overflow-x-auto rounded-xl border border-line">
                <table className="data-table min-w-[560px]">
                  <thead>
                    <tr>
                      <th scope="col">Quarter</th>
                      <th scope="col" className="text-right">
                        Revenue
                      </th>
                      <th scope="col" className="text-right">
                        Op margin
                      </th>
                      <th scope="col" className="text-right">
                        Net margin
                      </th>
                      <th scope="col" className="text-right">
                        EPS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {quarters.map((row) => (
                      <tr key={`${row.period}-${row.fyear}`}>
                        <td className="font-medium text-ink">
                          {formatFiscalQuarter(row.period, row.fyear)}
                        </td>
                        <td className="text-right">{compact(row.revenue)}</td>
                        <td className="text-right">
                          {formatPercent(row.operatingMargin)}
                        </td>
                        <td className="text-right">
                          {formatPercent(row.netMargin)}
                        </td>
                        <td className="text-right">
                          {row.epsDiluted != null
                            ? money(row.epsDiluted)
                            : "n/a"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="cash-and-balance-sheet"
              className="scroll-mt-28 border-b border-line py-9"
            >
              <SectionHeading
                number="06"
                id="cash-and-balance-sheet"
                title="Cash flow and balance sheet"
                subtitle="How much cash the business generates and how it is financed"
              />
              <Paragraphs paragraphs={story.cash.paragraphs} />
              <div className="mt-5">
                <LazyCashFlowChart
                  points={cashSeries}
                  description="Annual free cash flow and capital expenditure. Capex is shown as a positive outflow."
                  currency={currency}
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                <StatTile
                  label="Cash & investments"
                  value={compact(data.ttm?.cashAndInvestments)}
                />
                <StatTile
                  label="Total debt"
                  value={compact(data.ttm?.totalDebt)}
                />
                <StatTile
                  label={
                    data.metrics.netDebt != null && data.metrics.netDebt < 0
                      ? "Net cash"
                      : "Net debt"
                  }
                  value={
                    data.metrics.netDebt != null
                      ? compact(Math.abs(data.metrics.netDebt))
                      : "n/a"
                  }
                  tone={
                    data.metrics.netDebt != null && data.metrics.netDebt < 0
                      ? "positive"
                      : "default"
                  }
                />
                <StatTile
                  label="Net debt / EBITDA"
                  value={formatMultiple(data.metrics.netDebtToEbitda)}
                />
              </div>
              <p className="mt-2 text-[10.5px] leading-relaxed text-muted">
                Free cash flow is operating cash flow less capital expenditure.
                Net debt is total debt less cash and short-term investments. For
                banks the usual free-cash-flow and net-debt measures are not
                meaningful; the report flags that instead of substituting a
                misleading proxy.
              </p>
            </section>

            <section
              id="valuation"
              className="scroll-mt-28 border-b border-line py-9"
            >
              <SectionHeading
                number="07"
                id="valuation"
                title="Valuation"
                subtitle="What the market is paying, how that compares with history and with peers"
              />
              <Paragraphs paragraphs={story.valuation.paragraphs} />
              <div className="mt-5">
                <LazyValuationChart
                  points={multipleSeries}
                  description="Monthly samples of EV/EBITDA and P/E from the multiple history."
                />
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                    Current multiples
                  </p>
                  <div className="mt-1">
                    <DataRow
                      label="P/E (TTM)"
                      value={formatMultiple(data.metrics.pe)}
                    />
                    <DataRow
                      label="EV/EBITDA"
                      value={formatMultiple(data.metrics.evEbitda)}
                    />
                    <DataRow
                      label="EV/Sales"
                      value={formatMultiple(data.metrics.evSales)}
                    />
                    <DataRow
                      label="P/FCF"
                      value={formatMultiple(data.metrics.pfcf)}
                    />
                    <DataRow
                      label="FCF yield"
                      value={formatPercent(data.metrics.fcfYield)}
                    />
                  </div>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                    Own 5-year range
                  </p>
                  <div className="mt-1">
                    <DataRow
                      label="P/E min / median / max"
                      value={
                        ranges.pe
                          ? `${formatMultiple(ranges.pe.min)} / ${formatMultiple(ranges.pe.median)} / ${formatMultiple(ranges.pe.max)}`
                          : "n/a"
                      }
                    />
                    <DataRow
                      label="EV/EBITDA min / median / max"
                      value={
                        ranges.evEbitda
                          ? `${formatMultiple(ranges.evEbitda.min)} / ${formatMultiple(ranges.evEbitda.median)} / ${formatMultiple(ranges.evEbitda.max)}`
                          : "n/a"
                      }
                    />
                    <DataRow
                      label="Peer median EV/EBITDA"
                      value={formatMultiple(peerEv)}
                    />
                    <DataRow
                      label="Peer median P/E (TTM)"
                      value={formatMultiple(peerPe)}
                    />
                    <DataRow
                      label="Peer median ROIC"
                      value={formatPercent(peerRoic)}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-line bg-surface p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                  Peer comparison basis
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-ink-soft">
                  {basis}.
                </p>
                <div className="mt-3">
                  <PeerTable rows={peerRows} currency={currency} />
                </div>
                <div className="mt-3">
                  <LazyPeerBarChart
                    metrics={[
                      {
                        label: "Revenue growth",
                        company:
                          data.metrics.revenueGrowthTtm != null
                            ? data.metrics.revenueGrowthTtm * 100
                            : null,
                        peers:
                          peerRevenueGrowth != null
                            ? peerRevenueGrowth * 100
                            : null,
                        suffix: "%",
                      },
                      {
                        label: "Operating margin",
                        company:
                          data.metrics.operatingMargin != null
                            ? data.metrics.operatingMargin * 100
                            : null,
                        peers:
                          peerMedian(peerRows, "operatingMargin") != null
                            ? (peerMedian(peerRows, "operatingMargin") ?? 0) *
                              100
                            : null,
                        suffix: "%",
                      },
                      {
                        label: "ROIC",
                        company:
                          data.metrics.roic != null
                            ? data.metrics.roic * 100
                            : null,
                        peers: peerRoic != null ? peerRoic * 100 : null,
                        suffix: "%",
                      },
                      {
                        label: "EV/EBITDA",
                        company: data.metrics.evEbitda,
                        peers: peerEv,
                        suffix: "x",
                      },
                    ]}
                    title="Company vs peer median"
                    description="Peer median excludes the subject company. Percentages and multiples use different scales."
                  />
                </div>
              </div>

              <p className="mt-4 rounded-lg border border-line bg-paper-deep px-3.5 py-3 text-[12px] leading-relaxed text-ink-soft">
                {premiumDiscount != null
                  ? `${data.ticker} trades at a ${Math.abs(premiumDiscount * 100).toFixed(1)}% ${premiumDiscount >= 0 ? "premium" : "discount"} to the peer median on EV/EBITDA. `
                  : ""}
                Multiples are a starting point for questions, not a verdict.{" "}
                <strong className="text-ink">
                  Stockmonk does not provide buy, sell or hold ratings.
                </strong>
              </p>
            </section>

            <section
              id="analysts"
              className="scroll-mt-28 border-b border-line py-9"
            >
              <SectionHeading
                number="08"
                id="analysts"
                title="What analysts expect"
                subtitle="Third-party consensus, shown with the date it was collected"
              />
              <Paragraphs paragraphs={story.analysts.paragraphs} />
              <div className="mt-5">
                <ConsensusPanel
                  consensus={consensus}
                  price={data.latestPrice.close}
                  currency={quoteCurrency}
                  estimateCurrency={currency}
                />
              </div>
              <div className="mt-4">
                <LazySurpriseChart
                  points={surprise}
                  description="Reported EPS versus the consensus estimate for the last reported quarters. Estimates can be adjusted and may not match the company's own adjusted figure."
                  currency={currency}
                />
              </div>
              <p className="mt-3 text-[10.5px] leading-relaxed text-muted">
                Guidance is not machine-readable from the filings used here, so
                this dataset shows consensus estimates instead of inventing a
                company guidance range. The latest-quarter figures are reported
                results, not management forecasts.
              </p>
            </section>

            <section
              id="risks"
              className="scroll-mt-28 border-b border-line py-9"
            >
              <SectionHeading
                number="09"
                id="risks"
                title="Risks and what to watch"
                subtitle="Company-specific risks, with a qualitative severity descriptor"
              />
              <p className="prose-editorial text-[15px] leading-relaxed text-ink-soft">
                {story.risks.intro}
              </p>
              <div className="mt-4">
                <LazyDrawdownChart
                  points={draws}
                  description="Peak-to-trough decline over the last year. A larger drawdown is not automatically a buying opportunity."
                />
              </div>
              <div className="mt-4">
                <RiskList items={story.risks.items} />
              </div>
              <div className="mt-4 rounded-xl border border-line bg-surface p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                  What to watch
                </p>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  {story.risks.watchlist.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-lg bg-paper-deep p-2.5"
                    >
                      <p className="text-[11px] font-semibold text-ink">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[10.5px] leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="bottom-line" className="scroll-mt-28 py-9">
              <SectionHeading
                number="10"
                id="bottom-line"
                title="Key takeaways and what to monitor"
                subtitle="What the data says, what it does not say, and the questions to ask next"
              />
              <Paragraphs paragraphs={story.bottomLine.paragraphs} />
              <div className="mt-5 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                <LazyScorecardChart
                  scores={factors}
                  compare={{
                    growth: 50,
                    profitability: 50,
                    cash: 50,
                    balance: 50,
                    valuation: 50,
                  }}
                  description="Percentile ranks within the 229-company coverage universe. 50 is the middle of the universe."
                />
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                    Questions to take away
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {story.bottomLine.questions.map((question) => (
                      <li
                        key={question}
                        className="flex gap-2 text-[11.5px] leading-relaxed text-ink-soft"
                      >
                        <ArrowRight
                          aria-hidden="true"
                          className="mt-0.5 size-3.5 shrink-0 text-coral"
                        />
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="article-sources"
              className="border-t border-line pt-6"
            >
              <h2
                id="article-sources"
                className="display text-[22px] tracking-[-0.02em] text-ink"
              >
                Sources
              </h2>
              <p className="mt-1 text-[10.5px] leading-relaxed text-muted">
                Data as of {formatDate(data.latestPrice.asOf)}. Figures are
                rounded. Third-party analyst estimates can change.
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {sources.map((source) => (
                  <li
                    key={source.id}
                    className="rounded-lg border border-line bg-surface px-3 py-2"
                  >
                    <a
                      href={source.url}
                      target={
                        source.url.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        source.url.startsWith("http")
                          ? "noreferrer noopener"
                          : undefined
                      }
                      className="text-[11.5px] font-semibold text-ink underline decoration-line-strong underline-offset-2 hover:text-brand"
                    >
                      {source.name}
                    </a>
                    <p className="mt-0.5 text-[10px] text-muted">
                      {source.publisher}
                      {source.date && source.date !== "n/a"
                        ? ` · ${formatDate(source.date)}`
                        : ""}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[10.5px] leading-relaxed text-muted">
                Stockmonk does not issue buy, sell or hold recommendations and
                does not publish its own price targets.
              </p>
            </section>

            <div className="my-8">
              <ProCTA context="article" />
            </div>

            <section
              aria-labelledby="related-title"
              className="border-t border-line pt-6"
            >
              <h2
                id="related-title"
                className="display text-[22px] tracking-[-0.02em] text-ink"
              >
                Related research
              </h2>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {relatedStories.map((item) => (
                  <Link
                    key={item.data.ticker}
                    href={stockHref(item.data.ticker)}
                    className="card-flat p-3 transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <StockLogoStatic ticker={item.data.ticker} size={28} />
                      <span className="font-mono text-[10px] font-semibold text-muted">
                        {item.data.ticker}
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-[11.5px] font-semibold leading-snug text-ink">
                      {item.data.name}
                    </p>
                    <p className="mt-1 text-[10px] text-muted">
                      {formatPercent(item.data.metrics.revenueGrowthTtm)} rev
                      growth · {formatMultiple(item.data.metrics.evEbitda)}{" "}
                      EV/EBITDA
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <Disclaimer variant="boxed" className="mt-6" />
          </article>
        </div>
      </div>
    </>
  );
}
