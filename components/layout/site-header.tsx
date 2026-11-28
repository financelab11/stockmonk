import { GlobalSearch } from "@/components/search/global-search";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { WatchlistNavLink } from "./watchlist-nav-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-warm">
      <div className="container-page flex h-16 items-center gap-3">
        <a
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Stockmonk home"
        >
          <img
            src="/brand/logo-mark.webp"
            alt=""
            width={32}
            height={32}
            fetchPriority="high"
            decoding="async"
            className="size-8 rounded-[9px] ring-1 ring-graphite/10"
          />
          <span className="font-serif text-[23px] leading-none tracking-[-0.03em] text-graphite">
            Stockmonk
          </span>
        </a>

        <div className="ml-4">
          <MainNav />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <GlobalSearch />
          <WatchlistNavLink />
        </div>
      </div>

      <MobileNav />
    </header>
  );
}
