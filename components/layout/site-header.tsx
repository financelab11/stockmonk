import { CircleUserRound, Search } from "lucide-react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95">
      <div className="bg-brand-deep text-white">
        <div className="container-page flex h-7 items-center justify-between text-[10px] font-medium tracking-wide">
          <p className="truncate">
            Independent research. No ratings. No price targets.
          </p>
          <a
            href="/editorial-guidelines"
            className="hidden shrink-0 text-white/80 underline decoration-white/30 underline-offset-2 hover:text-white sm:block"
          >
            How we work
          </a>
        </div>
      </div>

      <div className="container-page flex h-16 items-center gap-3">
        <a
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Stockmonk home"
        >
          <img
            src="/brand/logo-mark.webp"
            alt=""
            width={36}
            height={36}
            fetchPriority="high"
            decoding="async"
            className="size-9 rounded-[10px] ring-1 ring-brand-deep/15"
          />
          <span className="display text-[25px] leading-none tracking-[-0.03em] text-ink">
            Stockmonk
          </span>
        </a>

        <div className="ml-4 hidden lg:block">
          <MainNav />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="/discover"
            className="group hidden h-10 items-center gap-2 rounded-full border border-line bg-surface px-3.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-ink md:inline-flex"
            aria-label="Search stocks on Discover"
          >
            <Search aria-hidden="true" className="size-4" />
            <span>Search stocks</span>
            <kbd className="ml-2 rounded border border-line bg-paper px-1.5 py-0.5 font-mono text-[10px] text-faint">
              /
            </kbd>
          </a>
          <a
            href="/discover"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink-soft md:hidden"
            aria-label="Search stocks on Discover"
          >
            <Search aria-hidden="true" className="size-4" />
          </a>
          <a
            href="/discover#pro"
            className="btn btn-brand hidden h-10 min-h-0 px-4 text-[13px] md:inline-flex"
          >
            Get Stockmonk Pro
          </a>
          <a
            href="/watchlist"
            className="relative hidden size-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-line-strong hover:text-ink sm:inline-flex"
            aria-label="Open watchlist"
          >
            <CircleUserRound aria-hidden="true" className="size-[18px]" />
          </a>
        </div>
      </div>

      <MobileNav />
    </header>
  );
}
