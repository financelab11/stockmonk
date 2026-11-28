import { ArrowRight } from "lucide-react";
import { LazyGrowthChart } from "@/components/charts/lazy-charts";
import { StockLogo } from "@/components/stock-logo";
import { WatchlistToggle } from "./watchlist-toggle";
import { TrackedLink } from "./tracked-link";
import {
  formatMultiple,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";
import type { HomeFeaturedResearch } from "@/lib/homepage-types";

const FACTORS = [
  ["growth", "Growth", "Revenue, EPS, estimates and reinvestment"],
  ["quality", "Quality", "Returns, margins and balance-sheet resilience"],
  ["valuation", "Valuation", "Own-history and peer multiples"],
  ["technical", "Technical", "Trend, relative strength and entry risk"],
] as const;

function scoreTone(value: number | null): string {
  if (value == null) return "bg-hairline";
  if (value >= 75) return "bg-accent";
  if (value >= 55) return "bg-[#3f6f96]";
  if (value >= 35) return "bg-[#b58445]";
  return "bg-[#b25a5a]";
}

export function FeaturedResearch({
  research,
}: {
  research: HomeFeaturedResearch;
}) {
  const { company, scoreRecord } = research;

  return (
    <div className="grid min-w-0 gap-4 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="home-card min-w-0 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <StockLogo ticker={company.ticker} size={44} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-[18px] font-semibold leading-tight text-graphite">
                {company.name}
              </h3>
              <WatchlistToggle ticker={company.ticker} />
            </div>
            <p className="mt-0.5 text-[11px] text-steel">
              {company.ticker} / {company.sector}
            </p>
          </div>
          <div className="text-right">
            <p className="tabular text-[20px] font-semibold leading-none text-graphite">
              {scoreRecord.composite == null
                ? "-"
                : Math.round(scoreRecord.composite)}
            </p>
            <p className="mt-0.5 text-[9.5px] text-steel">composite</p>
          </div>
        </div>

        <p className="mt-3 text-[13px] font-medium leading-snug text-graphite">
          {research.title}
        </p>
        <p className="mt-1.5 line-clamp-3 text-[11.5px] leading-relaxed text-steel">
          {research.dek}
        </p>

        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-hairline pt-3">
          {research.metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-baseline justify-between gap-2"
            >
              <dt className="text-[10px] text-steel">{metric.label}</dt>
              <dd className="tabular text-[11px] font-semibold text-graphite">
                {metric.kind === "multiple"
                  ? formatMultiple(metric.value)
                  : formatPercent(metric.value)}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-3 space-y-2 border-t border-hairline pt-3">
          {FACTORS.map(([key, label, detail]) => {
            const value = scoreRecord[key];
            return (
              <div key={key}>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[10.5px] font-medium text-graphite">
                    {label}
                    <span className="ml-1 font-normal text-steel">
                      {detail}
                    </span>
                  </span>
                  <span className="tabular text-[10.5px] font-semibold text-graphite">
                    {value == null ? "N/A" : Math.round(value)}
                  </span>
                </div>
                <div className="home-score-track mt-1">
                  <div
                    className={`home-score-fill ${scoreTone(value)}`}
                    style={{
                      width: `${Math.max(0, Math.min(100, value ?? 0))}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <TrackedLink
          href={company.href}
          event="research_report_opened"
          eventProps={{ ticker: company.ticker, surface: "featured_research" }}
          className="home-button home-button-primary mt-4 w-full"
        >
          Read full research report
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </TrackedLink>
      </div>

      <div className="min-w-0 overflow-hidden">
        <div className="flex items-center justify-between gap-2 pb-2">
          <div>
            <p className="home-eyebrow">Company research</p>
            <p className="mt-0.5 text-[11px] text-steel">
              Revenue and operating margin, from the latest annual statements.
            </p>
          </div>
          <span className="text-[10px] text-steel">
            {company.asOf ? `Data ${company.asOf}` : "Latest data"}
          </span>
        </div>
        <LazyGrowthChart
          points={research.chartPoints}
          title={research.chartTitle}
          description={research.chartDescription}
          valueLabel="Revenue"
          secondaryLabel="Operating margin"
          height={286}
          currency="USD"
        />
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["1Y return", formatSignedPercent(company.return1y)],
            ["Revenue growth", formatPercent(company.revenueGrowth)],
            ["Operating margin", formatPercent(company.operatingMargin)],
          ].map(([label, value]) => (
            <div key={label} className="home-card px-3 py-2">
              <p className="text-[9.5px] text-steel">{label}</p>
              <p className="tabular mt-0.5 text-[12px] font-semibold text-graphite">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
