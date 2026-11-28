"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PortfolioCard } from "@/components/portfolios/portfolio-card";
import { trackEvent } from "@/lib/events";
import {
  HOME_PORTFOLIO_FILTERS,
  matchesHomePortfolioFilter,
  type HomePortfolioFilter,
} from "@/lib/home-portfolio-filters";
import type { PortfolioSummary } from "@/lib/portfolios/types";

export function PortfolioShowcase({
  portfolios,
}: {
  portfolios: PortfolioSummary[];
}) {
  const [filter, setFilter] = useState<HomePortfolioFilter>("All");

  const shown = useMemo(
    () =>
      [...portfolios]
        .filter((portfolio) => matchesHomePortfolioFilter(portfolio, filter))
        .sort((a, b) => a.popularity - b.popularity)
        .slice(0, 6),
    [portfolios, filter],
  );

  return (
    <div>
      <div className="scrollbar-none flex gap-1.5 overflow-x-auto pb-1">
        {HOME_PORTFOLIO_FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => {
              setFilter(item);
              trackEvent("portfolio_category_changed", { category: item });
            }}
            className={`shrink-0 rounded-md border px-2.5 py-1.5 text-[11px] font-semibold transition-colors ${
              filter === item
                ? "border-graphite bg-graphite text-white"
                : "border-hairline bg-warm text-steel hover:border-steel/40 hover:text-graphite"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {shown.map((portfolio) => (
          <div
            key={portfolio.slug}
            onClick={() =>
              trackEvent("portfolio_card_clicked", {
                slug: portfolio.slug,
                category: filter,
              })
            }
          >
            <PortfolioCard portfolio={portfolio} />
          </div>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="mt-5 rounded-lg border border-dashed border-hairline bg-warm px-4 py-8 text-center text-[12px] text-steel">
          No model portfolios match this category yet.
        </p>
      )}

      <div className="mt-4 flex flex-col gap-2 border-t border-hairline pt-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-[10.5px] leading-relaxed text-steel">
          Returns are simulated from current constituents at target weights,
          price-only and before fees. They are not live portfolio returns.
        </p>
        <a
          href="/portfolio"
          className="inline-flex shrink-0 items-center gap-1 text-[11.5px] font-semibold text-accent hover:underline"
        >
          Explore all portfolios
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </a>
      </div>
    </div>
  );
}
