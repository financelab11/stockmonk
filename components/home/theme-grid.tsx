import { ArrowUpRight } from "lucide-react";
import { StockLogo } from "@/components/stock-logo";
import { TrackedLink } from "./tracked-link";
import { formatSignedPercent } from "@/lib/format";
import type { HomeTheme } from "@/lib/homepage-types";

export function ThemeGrid({ themes }: { themes: HomeTheme[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      {themes.map((theme) => (
        <TrackedLink
          key={theme.id}
          href={theme.href}
          event="theme_card_clicked"
          eventProps={{ theme: theme.id }}
          className="home-card home-card-hover group flex min-h-[218px] flex-col p-3.5"
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[14px] font-semibold leading-tight text-graphite group-hover:text-accent">
              {theme.title}
            </h3>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-0.5 size-3.5 shrink-0 text-steel group-hover:text-accent"
            />
          </div>
          <p className="mt-1.5 line-clamp-3 text-[11px] leading-relaxed text-steel">
            {theme.thesis}
          </p>

          <div className="mt-auto border-t border-hairline pt-2.5">
            <div className="flex items-baseline justify-between gap-2">
              <span className="tabular text-[10.5px] font-semibold text-graphite">
                {theme.count} companies
              </span>
              <span className="text-[9.5px] text-steel">
                {theme.medianComposite == null
                  ? theme.basis
                  : `Median score ${Math.round(theme.medianComposite)}`}
              </span>
            </div>
            <div className="mt-2 space-y-1">
              {theme.featured.map((company) => (
                <div key={company.ticker} className="flex items-center gap-1.5">
                  <StockLogo ticker={company.ticker} size={16} />
                  <span className="min-w-0 flex-1 truncate text-[10px] font-medium text-graphite">
                    {company.name}
                  </span>
                  <span className="tabular text-[9.5px] font-semibold text-accent">
                    {company.composite == null
                      ? "-"
                      : Math.round(company.composite)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between text-[9.5px] text-steel">
              <span className="truncate">{theme.linkLabel}</span>
              <span className="tabular font-semibold text-graphite">
                {formatSignedPercent(theme.medianReturn1y)} 1Y
              </span>
            </div>
          </div>
        </TrackedLink>
      ))}
    </div>
  );
}
