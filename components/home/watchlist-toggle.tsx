"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { trackEvent } from "@/lib/events";
import { useWatchlist } from "@/lib/watchlist";

export function WatchlistToggle({
  ticker,
  className = "",
}: {
  ticker: string;
  className?: string;
}) {
  const { has, toggle } = useWatchlist();
  const active = has(ticker);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={
        active
          ? `Remove ${ticker} from watchlist`
          : `Add ${ticker} to watchlist`
      }
      title={active ? "Remove from watchlist" : "Add to watchlist"}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggle(ticker);
        trackEvent(
          active ? "watchlist_company_removed" : "watchlist_company_added",
          { ticker, surface: "homepage" },
        );
      }}
      className={`inline-flex size-7 shrink-0 items-center justify-center rounded-md border transition-colors ${
        active
          ? "border-accent/25 bg-accent-soft text-accent"
          : "border-hairline bg-warm text-steel hover:border-steel/40 hover:text-graphite"
      } ${className}`}
    >
      {active ? (
        <BookmarkCheck aria-hidden="true" className="size-3.5" />
      ) : (
        <Bookmark aria-hidden="true" className="size-3.5" />
      )}
    </button>
  );
}
