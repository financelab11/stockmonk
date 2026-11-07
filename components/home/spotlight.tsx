import { ArrowRight } from "lucide-react";
import { Sparkline } from "@/components/charts/sparkline";
import { StockLogoStatic } from "@/components/stock-logo-static";
import { FactorChips } from "@/components/ui/factor-chips";
import { formatCompactCurrency, formatCurrency, formatMultiple, formatPercent } from "@/lib/format";
import { whyInterestingFromData } from "@/lib/insights";
import type { ResearchBundle } from "@/lib/data";
import type { StockStory } from "@/content/stocks/types";

export function Spotlight({ bundle, story }: { bundle: ResearchBundle; story: StockStory }) {
  const { data } = bundle;
  return (
    <section aria-labelledby="spotlight-title" className="container-page py-10">
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="card p-5 lg:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand">
            Stock spotlight · rotates daily
          </p>
          <div className="mt-3 flex items-center gap-3">
            <StockLogoStatic ticker={data.ticker} size={48} />
            <div>
              <h2 id="spotlight-title" className="display text-[27px] leading-tight tracking-[-0.02em] text-ink">
                {data.name}
              </h2>
              <p className="text-[10.5px] text-muted">
                {data.ticker} · {data.sector} · {formatCurrency(data.latestPrice.close)}
              </p>
            </div>
          </div>
          <FactorChips chips={data.factorChips} limit={4} className="mt-3" />
          <h3 className="display mt-4 text-[21px] leading-snug tracking-[-0.015em] text-ink">
            {story.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-[12.5px] leading-relaxed text-muted">
            {whyInterestingFromData(data)}
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-paper-deep p-2.5">
              <p className="stat-label">Revenue TTM</p>
              <p className="tabular mt-1 text-[13px] font-semibold text-ink">
                {formatCompactCurrency(data.metrics.revenueTtm)}
              </p>
            </div>
            <div className="rounded-lg bg-paper-deep p-2.5">
              <p className="stat-label">Op margin</p>
              <p className="tabular mt-1 text-[13px] font-semibold text-ink">
                {formatPercent(data.metrics.operatingMargin)}
              </p>
            </div>
            <div className="rounded-lg bg-paper-deep p-2.5">
              <p className="stat-label">EV/EBITDA</p>
              <p className="tabular mt-1 text-[13px] font-semibold text-ink">
                {formatMultiple(data.metrics.evEbitda)}
              </p>
            </div>
          </div>
          <a href={`/stocks/${data.ticker}`} className="btn btn-primary mt-4">
            Read the full report
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-line bg-paper-deep p-5">
          <div className="pointer-events-none absolute inset-0 grid-paper opacity-40" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="chip chip-positive">1-year price</span>
              <span className="font-mono text-[10px] text-muted">{data.ticker}</span>
            </div>
            <div className="mt-6">
              <Sparkline points={bundle.prices} width={520} height={150} className="w-full" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-line bg-surface p-2.5">
                <p className="stat-label">1Y return</p>
                <p className={`tabular mt-1 text-[13px] font-semibold ${(data.metrics.return1y ?? 0) >= 0 ? "text-positive" : "text-danger"}`}>
                  {formatPercent(data.metrics.return1y)}
                </p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-2.5">
                <p className="stat-label">52w range</p>
                <p className="tabular mt-1 text-[11px] font-semibold text-ink">
                  {data.latestPrice.low52 != null ? formatCurrency(data.latestPrice.low52) : "n/a"} –{" "}
                  {data.latestPrice.high52 != null ? formatCurrency(data.latestPrice.high52) : "n/a"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-[10px] leading-relaxed text-faint">
              Price history from SimFin, adjusted for splits. Past performance
              does not predict future results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
