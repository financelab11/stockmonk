import { ArrowUpRight } from "lucide-react";
import { Sparkline } from "@/components/charts/sparkline";
import { FactorChips } from "@/components/ui/factor-chips";
import { PriceChange } from "@/components/ui/price-change";
import { StockLogoStatic } from "@/components/stock-logo-static";
import { whyInteresting } from "@/lib/insights";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatPercent,
  formatSignedPercent,
  truncate,
} from "@/lib/format";
import type { RangePricePoint, UniverseEntry } from "@/lib/schemas";

export function StockCardStatic({
  entry,
  prices,
  showWhy = true,
}: {
  entry: UniverseEntry;
  prices?: RangePricePoint[];
  showWhy?: boolean;
}) {
  const href = `/stocks/${entry.ticker}`;
  const currency = entry.currency ?? "USD";

  return (
    <article className="card group flex h-full flex-col p-4 transition-shadow hover:shadow-md">
      <div className="flex items-start gap-2.5">
        <StockLogoStatic ticker={entry.ticker} size={38} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-1.5">
            <FactorChips chips={entry.factorChips} limit={2} />
            {entry.isResearch && (
              <span className="rounded-full bg-brand-deep px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                Research
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-[15px] font-semibold leading-snug text-ink">
            {entry.isResearch ? (
              <a href={href} className="hover:text-brand">
                {entry.name}
              </a>
            ) : (
              entry.name
            )}{" "}
            <span className="font-mono text-[11px] font-medium text-muted">
              ({entry.ticker})
            </span>
          </h3>
          <p className="mt-0.5 text-[10.5px] text-muted">
            {entry.sector}
            {entry.industry && entry.industry !== entry.sector
              ? ` · ${entry.industry}`
              : ""}
          </p>
          <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="tabular text-[15px] font-semibold text-ink">
              {entry.price != null
                ? formatCurrency(entry.price, 2, currency)
                : "n/a"}
            </span>
            <PriceChange value={entry.changePct} className="text-[11.5px]" />
            <span className="text-[9.5px] text-faint">vs prior close</span>
          </div>
          {entry.asOf && (
            <p className="mt-0.5 text-[9.5px] text-faint">
              Price as of {formatDate(entry.asOf)}
            </p>
          )}
        </div>
        {prices && prices.length > 1 && (
          <Sparkline
            points={prices}
            width={92}
            height={34}
            className="mt-1 shrink-0"
          />
        )}
      </div>

      <p className="mt-2.5 line-clamp-3 text-[12px] leading-relaxed text-muted">
        {truncate(entry.description, 180)}
      </p>

      <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-line pt-2.5">
        <div>
          <dt className="stat-label">Revenue (TTM)</dt>
          <dd className="tabular mt-0.5 text-[11.5px] font-semibold text-ink">
            {formatCompactCurrency(entry.revenueTtm, currency)}
          </dd>
        </div>
        <div>
          <dt className="stat-label">Op margin (TTM)</dt>
          <dd className="tabular mt-0.5 text-[11.5px] font-semibold text-ink">
            {formatPercent(entry.operatingMargin)}
          </dd>
        </div>
        <div>
          <dt className="stat-label">1Y return</dt>
          <dd className="tabular mt-0.5 text-[11.5px] font-semibold text-ink">
            {formatSignedPercent(entry.return1y)}
          </dd>
        </div>
      </dl>

      {showWhy && (
        <div className="why-box mt-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-brand-deep">
            Research insight
          </p>
          <p className="mt-1 line-clamp-3 text-[11.5px] leading-relaxed">
            {whyInteresting(entry)}
          </p>
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-2 pt-3">
        <span className="tabular text-[10.5px] text-muted">
          {formatCompactCurrency(entry.marketCap, currency)} mkt cap
        </span>
        {entry.isResearch ? (
          <a
            href={href}
            className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-brand hover:text-brand-deep"
          >
            Read research
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        ) : (
          <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-faint">
            Data only
          </span>
        )}
      </div>
    </article>
  );
}
