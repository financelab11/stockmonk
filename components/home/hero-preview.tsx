"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { StockLogo } from "@/components/stock-logo";
import { WatchlistToggle } from "./watchlist-toggle";
import { trackEvent } from "@/lib/events";
import {
  formatCompactCurrency,
  formatMultiple,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";
import type { HomeHeroCompany } from "@/lib/homepage-types";

const SCORE_KEYS = [
  ["growth", "Growth"],
  ["quality", "Quality"],
  ["valuation", "Valuation"],
  ["technical", "Technical"],
] as const;

function scoreTone(value: number | null): string {
  if (value == null) return "text-steel";
  if (value >= 75) return "text-accent";
  if (value >= 55) return "text-[#3f6f96]";
  if (value >= 35) return "text-[#9a6a2f]";
  return "text-[#a34b4b]";
}

function scoreBar(value: number | null): string {
  if (value == null) return "bg-hairline";
  if (value >= 75) return "bg-accent";
  if (value >= 55) return "bg-[#3f6f96]";
  if (value >= 35) return "bg-[#b58445]";
  return "bg-[#b25a5a]";
}

export function HeroPreview({ companies }: { companies: HomeHeroCompany[] }) {
  const [active, setActive] = useState(0);
  const company = companies[active];

  if (!company) {
    return (
      <div className="home-card flex min-h-[320px] items-center justify-center p-6 text-[12px] text-steel">
        Company preview is unavailable.
      </div>
    );
  }

  return (
    <div className="home-card overflow-hidden">
      <div className="flex items-center justify-between gap-2 border-b border-hairline px-4 py-2.5">
        <div className="flex items-center gap-1">
          {companies.map((item, index) => (
            <button
              key={item.ticker}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              className={`rounded px-2 py-1 font-mono text-[10px] font-semibold transition-colors ${
                active === index
                  ? "bg-graphite text-white"
                  : "text-steel hover:bg-canvas hover:text-graphite"
              }`}
            >
              {item.ticker}
            </button>
          ))}
        </div>
        <span className="text-[10px] text-steel">
          Live product data / {company.asOf ?? "latest"}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <StockLogo ticker={company.ticker} size={42} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="truncate text-[14px] font-semibold leading-tight text-graphite sm:text-[17px]">
                {company.name}
              </h2>
              <WatchlistToggle ticker={company.ticker} />
            </div>
            <p className="mt-0.5 truncate text-[11px] text-steel">
              {company.ticker} / {company.sector}
            </p>
          </div>
          <div className="text-right">
            <p className="tabular text-[18px] font-semibold leading-none text-graphite">
              {company.price != null ? `$${company.price.toFixed(2)}` : "n/a"}
            </p>
            <p
              className={`tabular mt-1 text-[10.5px] font-semibold ${
                (company.return1d ?? 0) >= 0 ? "text-accent" : "text-[#a34b4b]"
              }`}
            >
              {formatSignedPercent(company.return1d)} today
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-[104px_1fr] gap-4">
          <div className="border-r border-hairline pr-4">
            <p className="home-label">Composite</p>
            <p className="tabular mt-1 text-[42px] font-semibold leading-none tracking-[-0.04em] text-graphite">
              {company.composite == null ? "-" : Math.round(company.composite)}
            </p>
            <p className="mt-1 text-[10px] text-steel">of 100</p>
          </div>
          <div className="min-w-0">
            <div className="flex h-[64px] items-center">
              {company.sparkPath ? (
                <svg
                  viewBox="0 0 280 64"
                  className="h-16 w-full"
                  role="img"
                  aria-label={`${company.ticker} one-year price trend`}
                >
                  <path
                    d={company.sparkPath}
                    fill="none"
                    stroke="currentColor"
                    className={
                      (company.sparkLast ?? 0) >= (company.sparkFirst ?? 0)
                        ? "text-accent"
                        : "text-[#a34b4b]"
                    }
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <span className="text-[11px] text-steel">
                  Price history unavailable
                </span>
              )}
            </div>
            <div className="mt-1 flex items-center justify-between text-[10px] text-steel">
              <span>1Y price</span>
              <span className="tabular font-semibold text-graphite">
                {formatSignedPercent(company.return1y)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-hairline pt-3">
          {SCORE_KEYS.map(([key, label]) => {
            const value = company[key];
            return (
              <div key={key}>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[10.5px] text-steel">{label}</span>
                  <span
                    className={`tabular text-[11px] font-semibold ${scoreTone(value)}`}
                  >
                    {value == null ? "N/A" : Math.round(value)}
                  </span>
                </div>
                <div className="home-score-track mt-1">
                  <div
                    className={`home-score-fill ${scoreBar(value)}`}
                    style={{
                      width: `${Math.max(0, Math.min(100, value ?? 0))}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <dl className="mt-4 grid grid-cols-4 gap-2 border-t border-hairline pt-3">
          {[
            ["Market cap", formatCompactCurrency(company.marketCap)],
            ["Revenue growth", formatPercent(company.revenueGrowth)],
            ["Op margin", formatPercent(company.operatingMargin)],
            ["P/E", formatMultiple(company.pe)],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-[9.5px] leading-tight text-steel">{label}</dt>
              <dd className="tabular mt-0.5 text-[11.5px] font-semibold text-graphite">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href={company.href}
          onClick={() =>
            trackEvent("research_report_opened", {
              ticker: company.ticker,
              surface: "hero_preview",
            })
          }
          className="mt-4 inline-flex items-center gap-1 text-[11.5px] font-semibold text-accent hover:underline"
        >
          Open company intelligence
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
      </div>
    </div>
  );
}
