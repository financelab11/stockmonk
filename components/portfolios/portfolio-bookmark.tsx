"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { usePortfolioWatchlist } from "@/lib/portfolio-watchlist";

export function PortfolioBookmarkButton({
  slug,
  name,
  compact = false,
  className = "",
}: {
  slug: string;
  name: string;
  compact?: boolean;
  className?: string;
}) {
  const { has, toggle } = usePortfolioWatchlist();
  const saved = has(slug);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggle(slug);
      }}
      aria-label={
        saved
          ? `Saved: remove ${name} from saved portfolios`
          : `Save ${name}`
      }
      aria-pressed={saved}
      title={saved ? "Remove from saved portfolios" : "Save portfolio"}
      className={`inline-flex items-center justify-center rounded-full border transition-colors ${
        saved
          ? "border-brand/30 bg-brand-soft text-brand"
          : "border-line bg-surface text-muted hover:border-brand/40 hover:text-brand"
      } ${compact ? "size-8" : "h-9 gap-1.5 px-3 text-[11px] font-semibold"} ${className}`}
    >
      {saved ? (
        <BookmarkCheck aria-hidden="true" className="size-4" />
      ) : (
        <Bookmark aria-hidden="true" className="size-4" />
      )}
      {!compact && <span>{saved ? "Saved" : "Save"}</span>}
    </button>
  );
}
