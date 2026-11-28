"use client";

import { Bookmark } from "lucide-react";
import { useWatchlist } from "@/lib/watchlist";

export function WatchlistNavLink() {
  const { tickers } = useWatchlist();

  return (
    <a
      href="/watchlist"
      aria-label={
        tickers.length
          ? `Open watchlist, ${tickers.length} companies saved`
          : "Open watchlist"
      }
      className="relative inline-flex h-9 items-center gap-1.5 rounded-md border border-hairline bg-warm px-2.5 text-[11.5px] font-semibold text-graphite transition-colors hover:border-steel/40 hover:bg-white"
    >
      <Bookmark aria-hidden="true" className="size-3.5 text-accent" />
      <span className="hidden sm:inline">Watchlist</span>
      {tickers.length > 0 && (
        <span className="tabular ml-0.5 rounded bg-accent-soft px-1.5 py-0.5 text-[9px] font-semibold text-accent">
          {tickers.length}
        </span>
      )}
    </a>
  );
}
