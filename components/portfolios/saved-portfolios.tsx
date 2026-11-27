"use client";

import Link from "next/link";
import { ArrowRight, Bookmark, Trash2 } from "lucide-react";
import { PortfolioCard } from "./portfolio-card";
import { usePortfolioWatchlist } from "@/lib/portfolio-watchlist";
import type { PortfolioSummary } from "@/lib/portfolios/types";

export function SavedPortfolios({
  portfolios,
}: {
  portfolios: PortfolioSummary[];
}) {
  const { slugs, clear } = usePortfolioWatchlist();
  const saved = slugs
    .map((slug) => portfolios.find((portfolio) => portfolio.slug === slug))
    .filter(
      (portfolio): portfolio is PortfolioSummary => portfolio != null,
    );

  return (
    <section aria-labelledby="saved-portfolios-heading">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="kicker text-[10px]">Saved model portfolios</p>
          <h2
            id="saved-portfolios-heading"
            className="display mt-1 text-[24px] tracking-[-0.02em] text-ink"
          >
            Portfolios
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="tabular text-[10px] text-muted">
            {saved.length} saved
          </span>
          {saved.length > 0 && (
            <button
              type="button"
              onClick={clear}
              className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted hover:text-danger"
            >
              <Trash2 aria-hidden="true" className="size-3.5" />
              Clear portfolios
            </button>
          )}
        </div>
      </div>

      {saved.length ? (
        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {saved.map((portfolio) => (
            <PortfolioCard key={portfolio.slug} portfolio={portfolio} />
          ))}
        </div>
      ) : (
        <div className="mt-3 flex flex-col gap-3 rounded-2xl border border-dashed border-line bg-surface px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
              <Bookmark aria-hidden="true" className="size-4" />
            </span>
            <div>
              <p className="text-[12.5px] font-semibold text-ink">
                No portfolios saved yet
              </p>
              <p className="mt-0.5 text-[10.5px] leading-relaxed text-muted">
                Bookmark any model portfolio to keep it here. Saved portfolios
                use the same local-first storage as your stock watchlist.
              </p>
            </div>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-brand hover:text-brand-deep"
          >
            Explore portfolios
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
      )}
    </section>
  );
}
