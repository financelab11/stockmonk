import { ArrowRight } from "lucide-react";
import { Sparkline } from "@/components/charts/sparkline";
import { StockLogoStatic } from "@/components/stock-logo-static";
import { formatCompactCurrency, formatCurrency, formatSignedPercent } from "@/lib/format";
import type { ResearchBundle } from "@/lib/data";

export function RecentlyResearched({ bundles }: { bundles: ResearchBundle[] }) {
  return (
    <section className="bg-brand-deep py-6 text-white" aria-labelledby="recent-title">
      <div className="container-page">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
              The library
            </p>
            <h2 id="recent-title" className="display mt-1 text-[25px] tracking-[-0.02em] sm:text-[29px]">
              Recently researched
            </h2>
          </div>
          <a
            href="/discover"
            className="hidden items-center gap-1 text-[11.5px] font-semibold text-white/70 hover:text-white sm:flex"
          >
            All research
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <div className="scrollbar-none -mx-5 mt-4 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
          {bundles.map((bundle) => (
            <a
              key={bundle.data.ticker}
              href={`/stocks/${bundle.data.ticker}`}
              className="group w-[178px] shrink-0 snap-start rounded-xl border border-white/12 bg-white p-3 text-ink transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2">
                <StockLogoStatic ticker={bundle.data.ticker} size={28} />
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] font-bold text-brand">
                    {bundle.data.ticker}
                  </span>
                  <span className="block truncate text-[9.5px] text-muted">
                    {bundle.data.sector}
                  </span>
                </span>
              </div>
              <p className="mt-2 truncate text-[12px] font-semibold text-ink">
                {bundle.data.name}
              </p>
              <div className="mt-1 flex items-baseline justify-between gap-2">
                <span className="tabular text-[11.5px] text-ink-soft">
                  {formatCurrency(bundle.data.latestPrice.close)}
                </span>
                <span
                  className={`tabular text-[10.5px] font-semibold ${
                    (bundle.data.metrics.return1y ?? 0) >= 0 ? "text-positive" : "text-danger"
                  }`}
                >
                  {formatSignedPercent(bundle.data.metrics.return1y)} 1Y
                </span>
              </div>
              <div className="mt-1 flex items-end justify-between">
                <span className="tabular text-[9.5px] text-muted">
                  {formatCompactCurrency(
                    bundle.data.latestPrice.marketCap,
                    bundle.data.quoteCurrency ?? bundle.data.currency ?? "USD",
                  )}
                </span>
                <Sparkline points={bundle.prices} width={62} height={22} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
