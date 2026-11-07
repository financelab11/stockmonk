"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { useWatchlist } from "@/lib/watchlist";

export function WatchlistButton({
  ticker,
  compact = false,
  className = "",
}: {
  ticker: string;
  compact?: boolean;
  className?: string;
}) {
  const { has, toggle } = useWatchlist();
  const active = has(ticker);

  return (
    <button
      type="button"
      onClick={() => toggle(ticker)}
      aria-pressed={active}
      aria-label={active ? `Remove from watchlist: ${ticker}` : `Add to watchlist: ${ticker}`}
      className={`btn ${active ? "btn-brand" : "btn-ghost"} ${compact ? "px-3" : ""} ${className}`}
    >
      {active ? (
        <BookmarkCheck aria-hidden="true" className="size-4" />
      ) : (
        <Bookmark aria-hidden="true" className="size-4" />
      )}
      {!compact && <span>{active ? "Remove from watchlist" : "Add to watchlist"}</span>}
    </button>
  );
}
