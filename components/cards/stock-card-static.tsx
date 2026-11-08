import { ArrowUpRight } from "lucide-react";
import { Sparkline } from "@/components/charts/sparkline";
import { FactorChips } from "@/components/ui/factor-chips";
import { PriceChange } from "@/components/ui/price-change";
import { StockLogoStatic } from "@/components/stock-logo-static";
import { whyInteresting } from "@/lib/insights";
import { formatCompactCurrency, formatCurrency, truncate } from "@/lib/format";
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
  const href = entry.market === "IN" ? `/india/stocks/${entry.ticker}` : `/stocks/${entry.ticker}`;
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
            <a href={href} className="hover:text-brand">
              {entry.name}
            </a>{" "}
            <span className="font-mono text-[11px] font-medium text-muted">
              ({entry.ticker})
            </span>
          </h3>
          <p className="mt-0.5 text-[10.5px] text-muted">
            {entry.sector} · {entry.industry}
          </p>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="tabular text-[15px] font-semibold text-ink">
              {entry.price != null
                ? formatCurrency(entry.price, 2, entry.currency ?? "USD")
                : "n/a"}
            </span>
            <PriceChange value={entry.changePct} className="text-[11.5px]" />
          </div>
        </div>
        {prices && prices.length > 1 && (
          <Sparkline points={prices} width={92} height={34} className="mt-1 shrink-0" />
        )}
      </div>

      <p className="mt-2.5 line-clamp-3 text-[12px] leading-relaxed text-muted">
        {truncate(entry.description, 180)}
      </p>

      {showWhy && (
        <div className="why-box mt-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-brand-deep">
            Why it&apos;s interesting
          </p>
          <p className="mt-1 line-clamp-3 text-[11.5px] leading-relaxed">
            {whyInteresting(entry)}
          </p>
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-2 pt-3">
        <div className="flex items-center gap-2 text-[10.5px] text-muted">
          <span className="tabular">
            {formatCompactCurrency(entry.marketCap, entry.currency ?? "USD")} mkt cap
          </span>
          {entry.revenueGrowthTtm != null && (
            <span className="tabular">
              · {(entry.revenueGrowthTtm * 100).toFixed(1)}% rev growth
            </span>
          )}
        </div>
        <a
          href={href}
          className="inline-flex size-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-paper-deep hover:text-ink"
          aria-label={`Open ${entry.ticker} research`}
        >
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </article>
  );
}
