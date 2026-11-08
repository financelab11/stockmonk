import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LazyPriceChart } from "@/components/charts/lazy-charts";
import { RangeBar } from "@/components/article/range-bar";
import { StockLogoStatic } from "@/components/stock-logo-static";
import { FactorChips } from "@/components/ui/factor-chips";
import { PriceChange } from "@/components/ui/price-change";
import { StatTile } from "@/components/ui/stat-tile";
import { Disclaimer } from "@/components/ui/disclaimer";
import { WatchlistButton } from "@/components/watchlist/watchlist-button";
import { getSectorGroup } from "@/config/sectors";
import type { ResearchBundle } from "@/lib/data";
import type { TickerData } from "@/lib/schemas";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatFiscalQuarter,
  formatMultiple,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";

export function SupportingProfile({
  data,
  prices,
  researchInSector,
}: {
  data: TickerData;
  prices: ResearchBundle["prices"];
  researchInSector: ResearchBundle[];
}) {
  const group = getSectorGroup(data.ticker);
  const quarters = data.quarterly.filter((row) => !row.ttm).slice(-6);
  const annual = data.annual.filter((row) => !row.ttm).slice(-5);
  const position =
    data.latestPrice.low52 && data.latestPrice.high52 && data.latestPrice.close
      ? (data.latestPrice.close - data.latestPrice.low52) /
        (data.latestPrice.high52 - data.latestPrice.low52)
      : null;

  return (
    <>
      <header className="surface-tint border-b border-line">
        <div className="container-page py-6 lg:py-9">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[10.5px] text-muted">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/discover" className="hover:text-ink">Discover</Link>
            <span aria-hidden="true">›</span>
            <Link href="/discover/all-stocks" className="hover:text-ink">All stocks</Link>
            <span aria-hidden="true">›</span>
            <span className="text-ink">{data.ticker}</span>
          </nav>

          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex gap-4">
              <StockLogoStatic ticker={data.ticker} size={62} className="rounded-2xl" />
              <div>
                <p className="font-mono text-[11px] font-semibold text-brand">
                  {data.ticker} · {data.sector}
                </p>
                <h1 className="display mt-1 text-[32px] leading-[1.06] tracking-[-0.028em] text-ink sm:text-[42px]">
                  {data.name}
                </h1>
                <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-ink-soft">
                  {data.description}
                </p>
                <div className="mt-3">
                  <FactorChips chips={data.factorChips} limit={5} />
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <WatchlistButton ticker={data.ticker} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            <StatTile label="Last close" value={formatCurrency(data.latestPrice.close)} hint={<PriceChange value={data.latestPrice.changePct} />} />
            <StatTile label="Market cap" value={formatCompactCurrency(data.latestPrice.marketCap)} />
            <StatTile label="Revenue TTM" value={formatCompactCurrency(data.metrics.revenueTtm)} hint={`${formatPercent(data.metrics.revenueGrowthTtm)} YoY`} />
            <StatTile label="Operating margin" value={formatPercent(data.metrics.operatingMargin)} />
            <StatTile label="P/E (TTM)" value={formatMultiple(data.metrics.pe)} />
            <StatTile label="1Y return" value={formatSignedPercent(data.metrics.return1y)} tone={data.metrics.return1y != null && data.metrics.return1y >= 0 ? "positive" : "caution"} />
          </div>
        </div>
      </header>

      <div className="container-page max-w-[980px] py-8">
        <LazyPriceChart ticker={data.ticker} initialData={prices} />

        <div className="mt-4 rounded-xl border border-line bg-surface p-4">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            52-week position
          </p>
          <RangeBar
            low={data.latestPrice.low52}
            high={data.latestPrice.high52}
            current={data.latestPrice.close}
            position={position}
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <section className="card p-4">
            <h2 className="text-[14px] font-semibold text-ink">Company snapshot</h2>
            <dl className="mt-2">
              {[
                ["Sector", data.sector],
                ["Industry", data.industry],
                ["Employees", data.employees ? data.employees.toLocaleString("en-US") : "n/a"],
                ["Market cap", formatCompactCurrency(data.latestPrice.marketCap)],
                ["Dividend yield", data.latestPrice.dividendYield != null ? formatPercent(data.latestPrice.dividendYield) : "n/a"],
                ["Data as of", formatDate(data.latestPrice.asOf)],
              ].map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-3 border-b border-line py-2 last:border-0">
                  <dt className="text-[11.5px] text-muted">{label}</dt>
                  <dd className="tabular text-right text-[12px] font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="card p-4">
            <h2 className="text-[14px] font-semibold text-ink">Factor screens</h2>
            <div className="mt-2 space-y-2.5">
              {data.factorChips.map((chip) => (
                <div key={chip.key}>
                  <p className="text-[11.5px] font-semibold text-ink">{chip.label}</p>
                  <p className="text-[10.5px] leading-relaxed text-muted">{chip.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6">
          <h2 className="display text-[24px] tracking-[-0.02em] text-ink">Latest reported quarters</h2>
          <div className="mt-3 overflow-x-auto rounded-xl border border-line">
            <table className="data-table min-w-[560px]">
              <thead>
                <tr>
                  <th scope="col">Quarter</th>
                  <th scope="col" className="text-right">Revenue</th>
                  <th scope="col" className="text-right">Op margin</th>
                  <th scope="col" className="text-right">Net margin</th>
                  <th scope="col" className="text-right">EPS</th>
                </tr>
              </thead>
              <tbody>
                {quarters.map((row) => (
                  <tr key={`${row.period}-${row.fyear}`}>
                    <td className="font-medium text-ink">{formatFiscalQuarter(row.period, row.fyear)}</td>
                    <td className="text-right">{formatCompactCurrency(row.revenue)}</td>
                    <td className="text-right">{formatPercent(row.operatingMargin)}</td>
                    <td className="text-right">{formatPercent(row.netMargin)}</td>
                    <td className="text-right">{row.epsDiluted != null ? formatCurrency(row.epsDiluted) : "n/a"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="display text-[24px] tracking-[-0.02em] text-ink">Annual history</h2>
          <div className="mt-3 overflow-x-auto rounded-xl border border-line">
            <table className="data-table min-w-[620px]">
              <thead>
                <tr>
                  <th scope="col">Fiscal year</th>
                  <th scope="col">Report date</th>
                  <th scope="col" className="text-right">Revenue</th>
                  <th scope="col" className="text-right">Op margin</th>
                  <th scope="col" className="text-right">FCF</th>
                  <th scope="col" className="text-right">EPS</th>
                </tr>
              </thead>
              <tbody>
                {annual.map((row) => (
                  <tr key={row.fyear}>
                    <td className="font-medium text-ink">FY{row.fyear}</td>
                    <td>{formatDate(row.reportDate)}</td>
                    <td className="text-right">{formatCompactCurrency(row.revenue)}</td>
                    <td className="text-right">{formatPercent(row.operatingMargin)}</td>
                    <td className="text-right">{formatCompactCurrency(row.freeCashFlow)}</td>
                    <td className="text-right">{row.epsDiluted != null ? formatCurrency(row.epsDiluted) : "n/a"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-line bg-brand-soft/60 p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-deep">
            Research coverage
          </p>
          <h2 className="display mt-1 text-[23px] tracking-[-0.02em] text-ink">
            This is a profile, not a full report.
          </h2>
          <p className="mt-1 max-w-xl text-[12px] leading-relaxed text-ink-soft">
            {data.ticker} is part of the 229-company coverage universe. Every
            name is assigned the ten-section research template
            {group ? `, including other names in ${group.name}` : ""}. This page
            shows the same sourced financials when a company has too few filings
            or price points for the full narrative.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {researchInSector.slice(0, 3).map((item) => (
              <Link key={item.data.ticker} href={`/stocks/${item.data.ticker}`} className="chip hover:border-brand">
                {item.data.ticker} research
                <ArrowUpRight aria-hidden="true" className="size-3" />
              </Link>
            ))}
            <Link href="/discover" className="btn btn-brand h-9 min-h-0 text-[11px]">
              Browse research
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </Link>
          </div>
        </section>

        <Disclaimer variant="boxed" className="mt-6" />
      </div>
    </>
  );
}
