import { ArrowRight } from "lucide-react";
import { formatDate, formatPercent } from "@/lib/format";
import type { HomeStats } from "@/lib/homepage-types";

const FACTORS = [
  {
    key: "growth",
    title: "Growth",
    body: "Revenue and EPS growth, acceleration, estimate revisions, surprises and reinvestment.",
    inputs: "Revenue growth · EPS growth · revisions · forward estimates",
  },
  {
    key: "quality",
    title: "Quality",
    body: "Returns on capital, margins, cash conversion, balance-sheet resilience and capital allocation.",
    inputs: "ROIC · ROE · margins · cash conversion · leverage",
  },
  {
    key: "valuation",
    title: "Valuation",
    body: "Current multiples versus the company's own history and peers, plus growth-adjusted measures.",
    inputs: "P/E · EV/EBITDA · PEG · free-cash-flow yield",
  },
  {
    key: "technical",
    title: "Technical",
    body: "Trend, moving-average structure, relative strength, volume, base/breakout and entry risk.",
    inputs: "50/200-DMA · relative strength · volume · RSI/MACD",
  },
] as const;

export function Methodology({ stats }: { stats: HomeStats }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="home-card p-4 sm:p-5">
        <p className="home-eyebrow">Research methodology</p>
        <h3 className="mt-1 text-[19px] font-semibold leading-tight text-graphite">
          How the composite is built
        </h3>
        <p className="mt-2 text-[12px] leading-relaxed text-steel">
          The composite is a fixed weighted sum of four independently scored
          components. A metric that is genuinely inapplicable is marked N/A and
          removed from the denominator, not treated as zero.
        </p>

        <div className="mt-4 rounded-lg border border-hairline bg-canvas p-3">
          <p className="font-mono text-[11px] leading-relaxed text-graphite">
            Composite = Growth x {formatPercent(stats.weights.growth, 0)} +
            Quality x {formatPercent(stats.weights.quality, 0)} + Valuation x{" "}
            {formatPercent(stats.weights.valuation, 0)} + Technical x{" "}
            {formatPercent(stats.weights.technical, 0)}
          </p>
        </div>

        <dl className="mt-3 grid grid-cols-2 gap-2">
          {[
            [
              "Universe",
              `${stats.companies.toLocaleString("en-US")} companies`,
            ],
            [
              "Full reports",
              `${stats.reports.toLocaleString("en-US")} reports`,
            ],
            [
              "Market data",
              stats.asOf ? formatDate(stats.asOf) : "latest refresh",
            ],
            [
              "Score run",
              stats.scoreAsOf ? formatDate(stats.scoreAsOf) : "latest refresh",
            ],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded border border-hairline bg-warm px-2.5 py-2"
            >
              <dt className="text-[9.5px] text-steel">{label}</dt>
              <dd className="tabular mt-0.5 text-[10.5px] font-semibold text-graphite">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href="/framework/scores"
          className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold text-accent hover:underline"
        >
          Read the full methodology
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </a>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {FACTORS.map((factor) => {
          const weight = stats.weights[factor.key];
          return (
            <div key={factor.key} className="home-card p-3.5">
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="text-[12.5px] font-semibold text-graphite">
                  {factor.title}
                </h4>
                <span className="tabular text-[10.5px] font-semibold text-accent">
                  {formatPercent(weight, 0)}
                </span>
              </div>
              <div className="home-score-track mt-1.5">
                <div
                  className="home-score-fill"
                  style={{
                    width: `${Math.max(0, Math.min(100, weight * 100))}%`,
                  }}
                />
              </div>
              <p className="mt-2 text-[10.5px] leading-relaxed text-steel">
                {factor.body}
              </p>
              <p className="mt-2 border-t border-hairline pt-1.5 text-[9.5px] leading-relaxed text-steel">
                {factor.inputs}
              </p>
            </div>
          );
        })}

        <div className="home-card p-3.5 sm:col-span-2">
          <p className="text-[11px] font-semibold text-graphite">
            Data sources and update cadence
          </p>
          <p className="mt-1 text-[10.5px] leading-relaxed text-steel">
            SEC EDGAR company facts and filings, Yahoo Finance prices and
            profiles, and third-party analyst consensus from Yahoo Finance and
            Nasdaq. Prices, scores and consensus refresh daily; SEC statements
            refresh weekly. Third-party estimates can change without notice and
            are always attributed and dated.
          </p>
        </div>
      </div>
    </div>
  );
}
