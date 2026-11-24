import Link from "next/link";
import { StockLogoStatic } from "@/components/stock-logo-static";
import { ClassificationChip } from "@/components/ui/classification-chip";
import { dataQualityClassification } from "@/lib/classifications";
import {
  formatCompactCurrency,
  formatMultiple,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";
import type { UniverseEntry } from "@/lib/schemas";

export type ScreenDetail = {
  fcfMargin: number | null;
  netDebt: number | null;
  roic: number | null;
  currency?: string;
};

function screen(
  entries: UniverseEntry[],
  title: string,
  metric: (entry: UniverseEntry) => string,
  filter: (entry: UniverseEntry) => boolean,
  sort?: (a: UniverseEntry, b: UniverseEntry) => number,
) {
  const matched = entries.filter(filter);
  return {
    title,
    metric,
    matched: matched.length,
    entries: matched.sort(sort).slice(0, 6),
  };
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

  const quality = entries.map(dataQualityClassification);
  const high = quality.filter((item) => item.value === "High").length;
  const moderate = quality.filter((item) => item.value === "Moderate").length;
  const limited = quality.filter((item) => item.value === "Limited").length;

  const screens = [
    screen(
      entries,
      "High growth",
      (entry) =>
        `${formatPercent(entry.revenueGrowthTtm)} revenue growth · ${formatMultiple(entry.evEbitda)} EV/EBITDA`,
      (entry) =>
        entry.factorChips.find((chip) => chip.key === "growth")?.tone ===
        "positive",
      (a, b) =>
        (b.revenueGrowthTtm ?? -Infinity) - (a.revenueGrowthTtm ?? -Infinity),
    ),
    screen(
      entries,
      "High profitability",
      (entry) =>
        `${formatPercent(entry.operatingMargin)} op margin · ${formatPercent(detail(entry.ticker).roic)} ROIC`,
      (entry) =>
        entry.factorChips.find((chip) => chip.key === "profitability")?.tone ===
        "positive",
      (a, b) =>
        (b.operatingMargin ?? -Infinity) - (a.operatingMargin ?? -Infinity),
    ),
    screen(
      entries,
      "Cash generation",
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
      "Net cash",
      (entry) =>
        `Net cash ${formatCompactCurrency(
          Math.abs(detail(entry.ticker).netDebt ?? 0),
          detail(entry.ticker).currency ?? currency,
        )}`,
      (entry) => {
        const value = detail(entry.ticker).netDebt;
        return value != null && value < 0;
      },
      (a, b) =>
        (detail(a.ticker).netDebt ?? 0) - (detail(b.ticker).netDebt ?? 0),
    ),
    screen(
      entries,
      "Lowest EV/EBITDA",
      (entry) =>
        `${formatMultiple(entry.evEbitda)} EV/EBITDA · ${formatSignedPercent(entry.return1y)} 1Y`,
      (entry) => entry.evEbitda != null && entry.evEbitda > 0,
      (a, b) => (a.evEbitda ?? Infinity) - (b.evEbitda ?? Infinity),
    ),
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
        <div>
          <h2 className="text-[15px] font-semibold text-ink">
            Coverage quality
          </h2>
          <p className="mt-0.5 text-[12px] text-muted">
            Based on the fields available for each company.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <ClassificationChip
            classification={{
              value: "High",
              label: `High ${high}`,
              tone: "positive",
              detail: "Reports with all 14 coverage points.",
            }}
          />
          <ClassificationChip
            classification={{
              value: "Moderate",
              label: `Moderate ${moderate}`,
              tone: "warning",
              detail: "Reports with 11 to 13 coverage points.",
            }}
          />
          <ClassificationChip
            classification={{
              value: "Limited",
              label: `Limited ${limited}`,
              tone: "negative",
              detail: "Reports with 10 or fewer coverage points.",
            }}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {screens.map((item) => (
          <section key={item.title} className="card-flat p-4">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-[14px] font-semibold text-ink">
                {item.title}
              </h2>
              <span className="tabular text-[11px] text-muted">
                {item.matched}
              </span>
            </div>
            <ul className="mt-2 divide-y divide-line">
              {item.entries.map((entry) => (
                <li key={entry.ticker}>
                  <Link
                    href={`/stocks/${entry.ticker}`}
                    className="flex items-center gap-2.5 py-2.5 transition-colors hover:text-brand"
                  >
                    <StockLogoStatic ticker={entry.ticker} size={26} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[12.5px] font-medium text-ink">
                        {entry.name}
                        <span className="ml-1 font-mono text-[10px] text-muted">
                          {entry.ticker}
                        </span>
                      </span>
                      <span className="mt-0.5 block truncate text-[11.5px] text-muted">
                        {item.metric(entry)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
              {item.entries.length === 0 && (
                <li className="py-2.5 text-[11.5px] text-muted">
                  No companies match this screen.
                </li>
              )}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
