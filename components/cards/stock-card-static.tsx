import { ArrowUpRight } from "lucide-react";
import { Sparkline } from "@/components/charts/sparkline";
import { StockLogoStatic } from "@/components/stock-logo-static";
import { ClassificationChip } from "@/components/ui/classification-chip";
import {
  growthClassification,
  profitabilityClassification,
} from "@/lib/classifications";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";
import type { RangePricePoint, UniverseEntry } from "@/lib/schemas";

export function StockCardStatic({
  entry,
  prices,
}: {
  entry: UniverseEntry;
  prices?: RangePricePoint[];
}) {
  const href = `/stocks/${entry.ticker}`;
  const currency = entry.currency ?? "USD";
  const growth = growthClassification(entry);
  const profitability = profitabilityClassification(entry);
  const returnTone =
    entry.return1y == null
      ? "text-muted"
      : entry.return1y >= 0
        ? "text-positive"
        : "text-danger";

  return (
    <article className="h-full">
      <a
        href={href}
        aria-label={`${entry.name} (${entry.ticker}) research report`}
        className="group flex h-full flex-col rounded-xl border border-line bg-surface p-4 transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-[0_1px_2px_rgba(16,24,40,0.05)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <div className="flex min-h-16 items-center gap-3">
          <StockLogoStatic ticker={entry.ticker} size={40} />
          <div className="min-w-0">
            <h3 className="display text-[18px] leading-[1.15] text-ink transition-colors group-hover:text-brand-deep">
              {entry.name}
            </h3>
            <p className="mt-1 truncate text-[12px] text-muted">
              <span className="font-medium text-ink-soft">{entry.ticker}</span>
              <span aria-hidden="true"> · </span>
              {entry.sector}
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <ClassificationChip classification={growth} />
          <ClassificationChip classification={profitability} />
        </div>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="tabular text-[24px] font-semibold leading-none tracking-[-0.02em] text-ink">
              {entry.price != null
                ? formatCurrency(entry.price, 2, currency)
                : "n/a"}
            </p>
            <p className="mt-1.5 flex items-baseline gap-1.5 text-[12px]">
              <span
                className={`tabular font-semibold ${returnTone}`}
                data-return1y={entry.return1y ?? ""}
              >
                {formatSignedPercent(entry.return1y)}
              </span>
              <span className="text-muted">1Y</span>
              {entry.asOf && (
                <span className="text-faint">· {formatDate(entry.asOf)}</span>
              )}
            </p>
          </div>
          {prices && prices.length > 1 && (
            <Sparkline
              points={prices}
              width={88}
              height={32}
              positive={
                entry.return1y != null ? entry.return1y >= 0 : undefined
              }
              className="shrink-0"
            />
          )}
        </div>

        <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-3">
          <div>
            <dt className="text-[12px] leading-4 text-muted">Revenue</dt>
            <dd className="tabular mt-0.5 text-[14px] font-semibold leading-5 text-ink">
              {formatCompactCurrency(entry.revenueTtm, currency)}
            </dd>
          </div>
          <div>
            <dt className="text-[12px] leading-4 text-muted">Op margin</dt>
            <dd className="tabular mt-0.5 text-[14px] font-semibold leading-5 text-ink">
              {formatPercent(entry.operatingMargin)}
            </dd>
          </div>
          <div>
            <dt className="text-[12px] leading-4 text-muted">Market cap</dt>
            <dd className="tabular mt-0.5 text-[14px] font-semibold leading-5 text-ink">
              {formatCompactCurrency(entry.marketCap, currency)}
            </dd>
          </div>
        </dl>

        <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-brand group-hover:text-brand-deep">
          Read research
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </span>
      </a>
    </article>
  );
}
