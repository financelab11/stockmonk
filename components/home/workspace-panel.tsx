"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Bookmark, Briefcase, Clock3, Layers } from "lucide-react";
import { InstallPrompt } from "./install-prompt";
import { StockLogo } from "@/components/stock-logo";
import { usePortfolioWatchlist } from "@/lib/portfolio-watchlist";
import { useRecentlyViewed } from "@/lib/recently-viewed";
import { useWatchlist } from "@/lib/watchlist";
import { formatDate } from "@/lib/format";
import type { HomeCompany, HomeCompanyIndexEntry } from "@/lib/homepage-types";

type SearchEntry = {
  ticker: string;
  name: string;
  sector: string;
  research: boolean;
};

function greetingFor(hour: number): string {
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function WorkspacePanel({
  suggestions,
  dataAsOf,
  reports,
}: {
  suggestions: HomeCompany[];
  dataAsOf: string | null;
  reports: number;
}) {
  const { tickers } = useWatchlist();
  const { slugs } = usePortfolioWatchlist();
  const recent = useRecentlyViewed();
  const [greeting, setGreeting] = useState("Your research workspace");
  const [index, setIndex] = useState<Map<string, HomeCompanyIndexEntry>>(
    () => new Map(),
  );

  useEffect(() => {
    setGreeting(greetingFor(new Date().getHours()));
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("/data/search-index.json")
      .then((response) => (response.ok ? response.json() : []))
      .then((rows: SearchEntry[]) => {
        if (cancelled || !Array.isArray(rows)) return;
        setIndex(
          new Map(
            rows.map((row) => [
              row.ticker,
              {
                ticker: row.ticker,
                name: row.name,
                sector: row.sector,
                href: row.research
                  ? `/stocks/${row.ticker}`
                  : `/stocks/${row.ticker}/scores`,
              },
            ]),
          ),
        );
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  const hasWorkspace =
    tickers.length > 0 || slugs.length > 0 || recent.length > 0;

  return (
    <div className="home-card overflow-hidden">
      <div className="border-b border-hairline px-4 py-3 sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="home-eyebrow">Your workspace</p>
            <h3 className="mt-1 text-[19px] font-semibold leading-tight text-graphite">
              {greeting}. Here is your investment intelligence.
            </h3>
          </div>
          <span className="rounded border border-hairline bg-canvas px-2 py-1 text-[10px] font-medium text-steel">
            Local-first / no account required
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 divide-x divide-hairline border-y border-hairline">
          {[
            ["Watchlist", tickers.length],
            ["Saved portfolios", slugs.length],
            ["Recently viewed", recent.length],
          ].map(([label, value]) => (
            <div key={label} className="px-3 py-2 first:pl-0 last:pr-0">
              <p className="home-label">{label}</p>
              <p className="tabular mt-0.5 text-[20px] font-semibold leading-none text-graphite">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 px-4 py-4 sm:px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {hasWorkspace ? (
            <>
              <div className="flex items-center gap-2">
                <Clock3 aria-hidden="true" className="size-3.5 text-accent" />
                <p className="text-[11px] font-semibold text-graphite">
                  Continue your research
                </p>
              </div>
              <ul className="mt-2 divide-y divide-hairline border-y border-hairline">
                {recent.slice(0, 4).map((ticker) => {
                  const entry = index.get(ticker);
                  return (
                    <li key={ticker}>
                      <a
                        href={entry?.href ?? `/stocks/${ticker}/scores`}
                        className="flex items-center gap-2.5 py-2 hover:text-accent"
                      >
                        <StockLogo ticker={ticker} size={24} />
                        <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-graphite">
                          {entry?.name ?? ticker}
                        </span>
                        <span className="font-mono text-[10px] text-steel">
                          {ticker}
                        </span>
                      </a>
                    </li>
                  );
                })}
                {recent.length === 0 &&
                  tickers.slice(0, 4).map((ticker) => {
                    const entry = index.get(ticker);
                    return (
                      <li key={ticker}>
                        <a
                          href={entry?.href ?? `/stocks/${ticker}/scores`}
                          className="flex items-center gap-2.5 py-2 hover:text-accent"
                        >
                          <StockLogo ticker={ticker} size={24} />
                          <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-graphite">
                            {entry?.name ?? ticker}
                          </span>
                          <span className="font-mono text-[10px] text-steel">
                            {ticker}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                {recent.length === 0 && tickers.length === 0 && (
                  <li className="py-3 text-[11.5px] text-steel">
                    Companies you open will appear here for one-tap return.
                  </li>
                )}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="/watchlist"
                  className="home-button home-button-primary"
                >
                  <Bookmark aria-hidden="true" className="size-3.5" />
                  Open watchlist
                </a>
                <a
                  href="/portfolio"
                  className="home-button home-button-secondary"
                >
                  <Briefcase aria-hidden="true" className="size-3.5" />
                  Saved portfolios
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Layers aria-hidden="true" className="size-3.5 text-accent" />
                <p className="text-[11px] font-semibold text-graphite">
                  Start with a workspace that stays with you
                </p>
              </div>
              <ul className="mt-2 space-y-1.5 text-[11.5px] leading-relaxed text-steel">
                <li>Save companies and model portfolios without an account.</li>
                <li>Return to recently viewed research and score evidence.</li>
                <li>Works offline for pages you have already visited.</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="/discover" className="home-button home-button-primary">
                  Start exploring
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </a>
                <a
                  href="/watchlist"
                  className="home-button home-button-secondary"
                >
                  <Bookmark aria-hidden="true" className="size-3.5" />
                  Open watchlist
                </a>
              </div>
            </>
          )}
          <InstallPrompt />
        </div>

        <div className="rounded-lg border border-hairline bg-canvas p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[10.5px] font-semibold text-graphite">
              Suggested next
            </p>
            <span className="text-[9.5px] text-steel">
              {dataAsOf ? formatDate(dataAsOf) : "latest"}
            </span>
          </div>
          <ul className="mt-2 divide-y divide-hairline">
            {suggestions.map((company) => (
              <li key={company.ticker}>
                <a
                  href={company.href}
                  className="flex items-center gap-2 py-2 hover:text-accent"
                >
                  <StockLogo ticker={company.ticker} size={22} />
                  <span className="min-w-0 flex-1 truncate text-[11.5px] font-medium text-graphite">
                    {company.name}
                  </span>
                  <span className="tabular text-[10px] font-semibold text-accent">
                    {company.composite == null
                      ? "-"
                      : Math.round(company.composite)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-2 border-t border-hairline pt-2 text-[10px] leading-relaxed text-steel">
            {reports.toLocaleString("en-US")} research reports and the full
            score universe are refreshed daily.
          </p>
        </div>
      </div>
    </div>
  );
}
