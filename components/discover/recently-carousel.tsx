import Link from "next/link";
import { StockLogoStatic } from "@/components/stock-logo-static";
import { formatCurrency, formatSignedPercent } from "@/lib/format";
import type { ResearchBundle } from "@/lib/data";

export function RecentlyCarousel({ bundles }: { bundles: ResearchBundle[] }) {
  return (
    <div className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
      {bundles.map((bundle) => (
        <Link
          key={bundle.data.ticker}
          href={`/stocks/${bundle.data.ticker}`}
          className="card flex w-[168px] shrink-0 snap-start items-center gap-2 p-2.5 hover:border-brand/40"
        >
          <StockLogoStatic ticker={bundle.data.ticker} size={28} />
          <span className="min-w-0">
            <span className="block font-mono text-[10px] font-bold text-brand">
              {bundle.data.ticker}
            </span>
            <span className="block truncate text-[9.5px] text-muted">
              {bundle.data.name}
            </span>
            <span className="mt-0.5 flex items-baseline gap-1">
              <span className="tabular text-[10px] font-medium text-ink">
                {formatCurrency(
                  bundle.data.latestPrice.close,
                  2,
                  bundle.data.currency ?? "USD",
                )}
              </span>
              <span
                className={`tabular text-[9px] font-semibold ${(bundle.data.metrics.return1y ?? 0) >= 0 ? "text-positive" : "text-danger"}`}
              >
                {formatSignedPercent(bundle.data.metrics.return1y)}{" "}
                <span className="font-normal text-muted">1Y</span>
              </span>
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
