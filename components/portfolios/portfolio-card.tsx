import Link from "next/link";
import { ArrowUpRight, RefreshCw } from "lucide-react";
import { PortfolioBookmarkButton } from "./portfolio-bookmark";
import { PortfolioLogo } from "./portfolio-logo";
import { VolatilityBadge } from "./volatility-badge";
import { formatCurrency, formatSignedPercent } from "@/lib/format";
import type { PortfolioSummary } from "@/lib/portfolios/types";

export type ReturnPeriod = "1M" | "6M" | "1Y";

function periodReturn(portfolio: PortfolioSummary, period: ReturnPeriod) {
  if (period === "1M") return portfolio.return1m;
  if (period === "6M") return portfolio.return6m;
  return portfolio.return1y;
}

export function PortfolioCard({
  portfolio,
  period = "1Y",
}: {
  portfolio: PortfolioSummary;
  period?: ReturnPeriod;
}) {
  const value = periodReturn(portfolio, period);
  const tone =
    value == null ? "text-muted" : value >= 0 ? "text-positive" : "text-danger";

  return (
    <article className="card group relative h-full transition-[border-color,box-shadow] duration-200 hover:border-line-strong hover:shadow-sm">
      <Link
        href={`/portfolio/${portfolio.slug}`}
        className="flex h-full flex-col p-4 sm:p-[18px]"
      >
        <div className="flex items-start gap-3 pr-9">
          <PortfolioLogo
            slug={portfolio.slug}
            category={portfolio.primaryCategory}
            size={44}
          />
          <div className="min-w-0 flex-1">
            <p className="text-[10.5px] font-medium text-brand">
              {portfolio.primaryCategory}
            </p>
            <h3 className="display mt-1 line-clamp-2 text-[18px] leading-[1.15] tracking-[-0.015em] text-ink transition-colors group-hover:text-brand-deep">
              {portfolio.name}
            </h3>
            <p className="mt-1.5 line-clamp-3 font-serif text-[13px] leading-[1.55] text-ink-soft">
              {portfolio.description}
            </p>
          </div>
        </div>

        <dl className="mt-3.5 grid grid-cols-3 gap-1 border-y border-line py-2.5">
          <div>
            <dt className="stat-label text-[10px]">Min. investment</dt>
            <dd className="tabular mt-0.5 text-[13px] font-semibold text-ink">
              {formatCurrency(portfolio.minimumInvestment, 0)}
            </dd>
          </div>
          <div className="border-l border-line pl-2.5">
            <dt className="stat-label text-[10px]">{period} return</dt>
            <dd className={`tabular mt-0.5 text-[13px] font-semibold ${tone}`}>
              {formatSignedPercent(value)}
            </dd>
            <dd className="text-[8.5px] font-normal text-faint">simulated</dd>
          </div>
          <div className="border-l border-line pl-2.5">
            <dt className="stat-label text-[10px]">Volatility</dt>
            <dd className="mt-1">
              <VolatilityBadge level={portfolio.volatility} />
            </dd>
          </div>
        </dl>

        <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-muted">
          <span>{portfolio.holdingsCount} stocks</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <RefreshCw aria-hidden="true" className="size-2.5" />
            {portfolio.rebalanceFrequency}
          </span>
          <span aria-hidden="true">·</span>
          <span className="truncate">vs {portfolio.benchmark.name}</span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2.5">
          <div className="flex flex-wrap gap-1">
            {portfolio.tags
              .filter((tag) => tag !== portfolio.primaryCategory)
              .slice(0, 2)
              .map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-paper-deep px-2 py-0.5 text-[9px] font-semibold text-ink-soft"
                >
                  {tag}
                </span>
              ))}
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand">
            Details
            <ArrowUpRight aria-hidden="true" className="size-3" />
          </span>
        </div>
      </Link>

      <div className="absolute right-3.5 top-3.5 z-10">
        <PortfolioBookmarkButton
          slug={portfolio.slug}
          name={portfolio.name}
          compact
        />
      </div>
    </article>
  );
}
