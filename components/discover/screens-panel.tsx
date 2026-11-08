import Link from "next/link";
import { StockLogoStatic } from "@/components/stock-logo-static";
import { formatCompactCurrency, formatMultiple, formatPercent } from "@/lib/format";
import type { UniverseEntry } from "@/lib/schemas";

export type ScreenDetail = {
  fcfMargin: number | null;
  netDebt: number | null;
  roic: number | null;
};

function screen(
  entries: UniverseEntry[],
  title: string,
  description: string,
  metric: (entry: UniverseEntry) => string,
  filter: (entry: UniverseEntry) => boolean,
  sort?: (a: UniverseEntry, b: UniverseEntry) => number,
) {
  const selected = entries.filter(filter).sort(sort).slice(0, 6);
  return { title, description, metric, entries: selected };
}

export function ScreensPanel({
  entries,
  details,
  currency = "USD",
}: {
  entries: UniverseEntry[];
  details: Record<string, ScreenDetail>;
  currency?: string;
}) {
  const detail = (ticker: string): ScreenDetail =>
    details[ticker] ?? { fcfMargin: null, netDebt: null, roic: null };

  const screens = [
    screen(
      entries,
      "High growth",
      "Revenue growth in the top quintile of the covered universe.",
      (entry) => `${formatPercent(entry.revenueGrowthTtm)} revenue growth · ${formatMultiple(entry.evEbitda)} EV/EBITDA`,
      (entry) =>
        entry.factorChips.find((chip) => chip.key === "growth")?.tone === "positive",
      (a, b) => (b.revenueGrowthTtm ?? -Infinity) - (a.revenueGrowthTtm ?? -Infinity),
    ),
    screen(
      entries,
      "High profitability",
      "Operating margin and returns on capital in the top quintile.",
      (entry) => `${formatPercent(entry.operatingMargin)} op margin · ${formatPercent(detail(entry.ticker).roic)} ROIC`,
      (entry) =>
        entry.factorChips.find((chip) => chip.key === "profitability")?.tone ===
        "positive",
      (a, b) => (b.operatingMargin ?? -Infinity) - (a.operatingMargin ?? -Infinity),
    ),
    screen(
      entries,
      "Cash generation",
      "Positive free-cash-flow margin, sorted by cash conversion.",
      (entry) => `${formatPercent(detail(entry.ticker).fcfMargin)} FCF margin`,
      (entry) => {
        const value = detail(entry.ticker).fcfMargin;
        return value != null && value > 0;
      },
      (a, b) =>
        (detail(b.ticker).fcfMargin ?? -Infinity) -
        (detail(a.ticker).fcfMargin ?? -Infinity),
    ),
    screen(
      entries,
      "Net cash balance sheets",
      "Companies whose cash and investments exceed total debt.",
      (entry) =>
        `Net cash ${formatCompactCurrency(Math.abs(detail(entry.ticker).netDebt ?? 0), currency)}`,
      (entry) => {
        const value = detail(entry.ticker).netDebt;
        return value != null && value < 0;
      },
      (a, b) => (detail(a.ticker).netDebt ?? 0) - (detail(b.ticker).netDebt ?? 0),
    ),
    screen(
      entries,
      "Lowest EV/EBITDA",
      "A valuation screen, not a recommendation. Lower multiples can reflect lower growth or higher risk.",
      (entry) => `${formatMultiple(entry.evEbitda)} EV/EBITDA · ${formatPercent(entry.return1y)} 1Y`,
      (entry) => entry.evEbitda != null && entry.evEbitda > 0,
      (a, b) => (a.evEbitda ?? Infinity) - (b.evEbitda ?? Infinity),
    ),
  ];

  return (
    <div>
      <div className="rounded-xl border border-line bg-brand-soft/60 p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-deep">
          Descriptive screens, not recommendations
        </p>
        <p className="mt-1 text-[12px] leading-relaxed text-ink-soft">
          Each list is computed from the current coverage universe. A company can
          appear in a screen and still be a poor fit for your goals. Stockmonk
          does not rank companies as buys or sells.
        </p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {screens.map((item) => (
          <section key={item.title} className="card p-4">
            <h2 className="text-[14px] font-semibold text-ink">{item.title}</h2>
            <p className="mt-1 text-[11px] leading-relaxed text-muted">{item.description}</p>
            <ul className="mt-3 divide-y divide-line">
              {item.entries.map((entry) => (
                <li key={entry.ticker}>
                  <Link
                    href={
                      entry.market === "IN"
                        ? `/india/stocks/${entry.ticker}`
                        : `/stocks/${entry.ticker}`
                    }
                    className="flex items-center gap-2 py-2 hover:text-brand"
                  >
                    <StockLogoStatic ticker={entry.ticker} size={24} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[11.5px] font-medium text-ink">
                        {entry.name}{" "}
                        <span className="font-mono text-[9.5px] text-muted">({entry.ticker})</span>
                      </span>
                      <span className="block text-[9.5px] text-muted">{item.metric(entry)}</span>
                    </span>
                  </Link>
                </li>
              ))}
              {item.entries.length === 0 && (
                <li className="py-2 text-[11px] text-muted">No companies match this screen.</li>
              )}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
