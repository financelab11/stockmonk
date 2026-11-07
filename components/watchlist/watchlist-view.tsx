"use client";

import Link from "next/link";
import { ArrowRight, Bookmark, Trash2 } from "lucide-react";
import { StockCard } from "@/components/cards/stock-card";
import { StockLogo } from "@/components/stock-logo";
import { useWatchlist } from "@/lib/watchlist";
import type { RangePricePoint, UniverseEntry } from "@/lib/schemas";
import { formatPercent } from "@/lib/format";

export type WatchlistItem = {
  entry: UniverseEntry;
  prices?: RangePricePoint[];
};

export function WatchlistView({ items }: { items: WatchlistItem[] }) {
  const { tickers, clear } = useWatchlist();

  if (tickers.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-surface px-5 py-10 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-soft text-brand">
          <Bookmark aria-hidden="true" className="size-5" />
        </span>
        <h2 className="display mt-3 text-[24px] tracking-[-0.02em] text-ink">
          Your watchlist is empty
        </h2>
        <p className="mx-auto mt-1 max-w-md text-[12px] leading-relaxed text-muted">
          Add companies from any card or report. The list is stored in your
          browser, works offline and never leaves your device.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {items
            .filter((item) => item.entry.isResearch)
            .slice(0, 3)
            .map((item) => (
              <Link
                key={item.entry.ticker}
                href={`/stocks/${item.entry.ticker}`}
                className="chip hover:border-brand"
              >
                <StockLogo ticker={item.entry.ticker} size={16} className="rounded-md border-0" />
                <span className="font-mono">{item.entry.ticker}</span>
                <span className="text-muted">{formatPercent(item.entry.revenueGrowthTtm)} rev</span>
              </Link>
            ))}
        </div>
        <Link href="/discover" className="btn btn-brand mt-4">
          Browse research
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    );
  }

  const selected = items.filter((item) => tickers.includes(item.entry.ticker));

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[11px] text-muted">
          {selected.length} {selected.length === 1 ? "company" : "companies"} saved in this browser.
        </p>
        <button
          type="button"
          onClick={clear}
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted hover:text-danger"
        >
          <Trash2 aria-hidden="true" className="size-3.5" />
          Clear all
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {selected.map(({ entry, prices }) => (
          <StockCard key={entry.ticker} entry={entry} prices={prices} />
        ))}
      </div>
    </div>
  );
}
