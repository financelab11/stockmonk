import Link from "next/link";
import { Globe2 } from "lucide-react";
import type { MarketKey } from "./market-intro";

const MARKETS: Array<{
  key: MarketKey;
  label: string;
  short: string;
  href: string;
  flag: "US" | "IN" | null;
  detail: string;
}> = [
  {
    key: "US",
    label: "US Stocks",
    short: "US",
    href: "/discover",
    flag: "US",
    detail: "NYSE · Nasdaq",
  },
  {
    key: "IN",
    label: "India Stocks",
    short: "India",
    href: "/india",
    flag: "IN",
    detail: "NSE · BSE",
  },
  {
    key: "GCC",
    label: "GCC Stocks",
    short: "GCC",
    href: "/gcc",
    flag: null,
    detail: "Saudi Arabia · UAE · Qatar · Kuwait · Bahrain · Oman",
  },
];

/** Inline flags keep the mark identical across platforms that lack flag emoji. */
function Flag({ code }: { code: "US" | "IN" }) {
  if (code === "IN") {
    return (
      <svg viewBox="0 0 24 16" className="h-4 w-6 sm:h-[18px] sm:w-[27px]" aria-hidden="true">
        <rect width="24" height="16" fill="#ffffff" />
        <rect width="24" height="5.34" fill="#ff9933" />
        <rect y="10.66" width="24" height="5.34" fill="#138808" />
        <circle cx="12" cy="8" r="2.1" fill="none" stroke="#000080" strokeWidth="0.7" />
        <circle cx="12" cy="8" r="0.55" fill="#000080" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 sm:h-[18px] sm:w-[27px]" aria-hidden="true">
      <rect width="24" height="16" fill="#ffffff" />
      {Array.from({ length: 7 }, (_, index) => (
        <rect
          key={index}
          y={(index * 2 * 16) / 13}
          width="24"
          height={16 / 13}
          fill="#b31942"
        />
      ))}
      <rect width="10.5" height={16 * (7 / 13)} fill="#0a3161" />
    </svg>
  );
}

/**
 * Market switcher shared by the US, India and GCC discovery pages. Counts come
 * from each market dataset, so they never drift from the coverage universe.
 */
export function MarketSelector({
  active,
  counts,
}: {
  active: MarketKey;
  counts: Record<MarketKey, number>;
}) {
  return (
    <section aria-label="Choose a market" className="border-b border-line bg-paper-deep/70">
      <div className="container-page py-4 sm:py-5">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-faint">
            Choose a market
          </h2>
          <p className="hidden text-[10.5px] text-faint sm:block">
            Live coverage counts from each market dataset
          </p>
        </div>

        <nav aria-label="Markets" className="mt-2 grid grid-cols-3 gap-2 sm:gap-3">
          {MARKETS.map((market) => {
            const isActive = market.key === active;
            return (
              <Link
                key={market.key}
                href={market.href}
                prefetch={false}
                aria-current={isActive ? "page" : undefined}
                title={`${market.label} · ${market.detail}`}
                className={`relative flex min-h-[92px] flex-col items-center justify-center gap-1.5 rounded-xl border-2 px-2 py-2.5 text-center transition-colors duration-150 sm:min-h-[72px] sm:flex-row sm:justify-start sm:gap-3 sm:px-4 sm:text-left ${
                  isActive
                    ? "border-coral bg-brand-deep text-white shadow-sm"
                    : "border-line bg-surface text-ink hover:border-brand/40 hover:bg-paper"
                }`}
              >
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-lg sm:size-11 ${
                    isActive ? "bg-white/10" : "bg-paper-deep"
                  }`}
                  aria-hidden="true"
                >
                  {market.flag ? <Flag code={market.flag} /> : <Globe2 className="size-5 sm:size-6" />}
                </span>

                <span className="min-w-0">
                  <span className="block truncate text-[12px] font-semibold leading-tight sm:text-[15px]">
                    <span className="sm:hidden">{market.short}</span>
                    <span className="hidden sm:inline">{market.label}</span>
                  </span>
                  <span
                    className={`tabular mt-0.5 block whitespace-nowrap text-[9.5px] leading-tight sm:text-[11px] ${
                      isActive ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {counts[market.key].toLocaleString("en-US")} companies
                  </span>
                </span>

                {isActive && (
                  <span
                    className="absolute right-2 top-2 size-1.5 rounded-full bg-coral sm:right-3"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
