import { ArrowRight } from "lucide-react";
import { StockLogo } from "@/components/stock-logo";
import { TrackedLink } from "./tracked-link";
import type { HomeQuickScreen } from "@/lib/homepage-types";

export function QuickScreens({ screens }: { screens: HomeQuickScreen[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {screens.map((screen) => (
        <TrackedLink
          key={screen.id}
          href={screen.href}
          event="quick_screen_selected"
          eventProps={{ screen: screen.id }}
          className="home-card home-card-hover group flex flex-col p-4"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[14px] font-semibold leading-tight text-graphite group-hover:text-accent">
                {screen.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-steel">
                {screen.description}
              </p>
            </div>
            <span className="tabular shrink-0 rounded border border-hairline bg-canvas px-2 py-1 text-[10px] font-semibold text-graphite">
              {screen.count}
            </span>
          </div>

          <div className="mt-3 divide-y divide-hairline border-y border-hairline">
            {screen.featured.map((company) => (
              <div
                key={company.ticker}
                className="flex items-center gap-2 py-2"
              >
                <StockLogo ticker={company.ticker} size={22} />
                <span className="min-w-0 flex-1 truncate text-[11.5px] font-medium text-graphite">
                  {company.name}
                </span>
                <span className="font-mono text-[9.5px] text-steel">
                  {company.ticker}
                </span>
                <span className="tabular w-7 text-right text-[10px] font-semibold text-accent">
                  {company.composite == null
                    ? "-"
                    : Math.round(company.composite)}
                </span>
              </div>
            ))}
            {screen.featured.length === 0 && (
              <p className="py-3 text-[11px] text-steel">
                No companies currently match this screen.
              </p>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between gap-2 pt-2.5">
            <span className="truncate text-[10px] text-steel">
              {screen.criteria}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1 text-[10.5px] font-semibold text-accent">
              View results
              <ArrowRight aria-hidden="true" className="size-3" />
            </span>
          </div>
        </TrackedLink>
      ))}
    </div>
  );
}
