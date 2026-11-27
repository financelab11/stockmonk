import Link from "next/link";
import { ChevronRight, LineChart, RefreshCw } from "lucide-react";
import { PortfolioBookmarkButton } from "./portfolio-bookmark";
import { PortfolioLogo } from "./portfolio-logo";
import { PortfolioShareButton } from "./portfolio-share";
import { VolatilityBadge } from "./volatility-badge";
import { formatCurrency, formatSignedPercent } from "@/lib/format";
import type { PortfolioDetail } from "@/lib/portfolios/types";

export function PortfolioHeader({ portfolio }: { portfolio: PortfolioDetail }) {
  const returnTone =
    portfolio.return1y == null
      ? "text-ink"
      : portfolio.return1y >= 0
        ? "text-positive"
        : "text-danger";

  return (
    <header className="border-b border-line bg-paper-deep/70">
      <div className="container-page py-4 sm:py-5">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1 text-[10.5px] text-muted"
        >
          <Link href="/portfolio" className="hover:text-ink">
            Portfolio
          </Link>
          <ChevronRight aria-hidden="true" className="size-3 text-faint" />
          <span className="text-ink">{portfolio.name}</span>
        </nav>

        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex min-w-0 items-start gap-3.5">
            <PortfolioLogo
              slug={portfolio.slug}
              category={portfolio.primaryCategory}
              size={54}
              priority
              className="mt-0.5"
            />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-brand">
                  {portfolio.primaryCategory}
                </span>
                <span className="rounded-full border border-line bg-surface px-2 py-0.5 text-[9px] font-semibold text-muted">
                  US stocks only
                </span>
                {portfolio.strategyType !== portfolio.primaryCategory && (
                  <span className="rounded-full border border-line bg-surface px-2 py-0.5 text-[9px] font-semibold text-muted">
                    {portfolio.strategyType}
                  </span>
                )}
              </div>
              <h1 className="display mt-1.5 text-[27px] leading-[1.06] tracking-[-0.03em] text-ink sm:text-[34px]">
                {portfolio.name}
              </h1>
              <p className="mt-1 text-[10.5px] text-muted">
                Managed by{" "}
                <span className="font-semibold text-ink-soft">
                  Stockmonk Quant Research
                </span>{" "}
                | Model portfolio | {portfolio.holdingsCount} holdings
              </p>
              <p className="mt-2 max-w-3xl text-[12.5px] leading-relaxed text-ink-soft">
                {portfolio.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {portfolio.tags
                  .filter(
                    (tag) =>
                      tag !== portfolio.primaryCategory &&
                      tag !== portfolio.strategyType,
                  )
                  .slice(0, 6)
                  .map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-2 py-0.5 text-[9px] font-semibold text-muted ring-1 ring-line"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:pt-1">
            <PortfolioBookmarkButton
              slug={portfolio.slug}
              name={portfolio.name}
            />
            <PortfolioShareButton
              name={portfolio.name}
              summary={portfolio.description}
            />
          </div>
        </div>

        <dl className="mt-4 grid grid-cols-3 gap-y-3 rounded-xl border border-line bg-surface px-3 py-3 sm:grid-cols-6 sm:gap-0 sm:divide-x sm:divide-line sm:px-0">
          <div className="min-w-0 sm:px-4 sm:first:pl-4">
            <dt className="stat-label text-[9px]">Minimum investment</dt>
            <dd className="tabular mt-0.5 text-[14px] font-semibold text-ink">
              {formatCurrency(portfolio.minimumInvestment, 0)}
            </dd>
          </div>
          <div className="min-w-0 sm:px-4">
            <dt className="stat-label text-[9px]">1Y return</dt>
            <dd className={`tabular mt-0.5 text-[14px] font-semibold ${returnTone}`}>
              {formatSignedPercent(portfolio.return1y)}
            </dd>
            <dd className="text-[8.5px] text-faint">Simulated</dd>
          </div>
          <div className="min-w-0 sm:px-4">
            <dt className="stat-label text-[9px]">Volatility</dt>
            <dd className="mt-1">
              <VolatilityBadge level={portfolio.volatility} />
            </dd>
          </div>
          <div className="min-w-0 sm:px-4">
            <dt className="stat-label text-[9px]">Holdings</dt>
            <dd className="tabular mt-0.5 text-[14px] font-semibold text-ink">
              {portfolio.holdingsCount}
            </dd>
          </div>
          <div className="min-w-0 sm:px-4">
            <dt className="stat-label text-[9px]">Rebalancing</dt>
            <dd className="mt-0.5 inline-flex items-center gap-1 text-[12px] font-semibold text-ink">
              <RefreshCw aria-hidden="true" className="size-3 text-muted" />
              {portfolio.rebalanceFrequency}
            </dd>
          </div>
          <div className="min-w-0 sm:px-4">
            <dt className="stat-label text-[9px]">Benchmark</dt>
            <dd
              className="mt-0.5 flex min-w-0 items-start gap-1 text-[11px] font-semibold leading-tight text-ink"
              title={portfolio.benchmark.name}
            >
              <LineChart aria-hidden="true" className="mt-0.5 size-3 shrink-0 text-muted" />
              <span className="line-clamp-2 min-w-0">{portfolio.benchmark.name}</span>
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
