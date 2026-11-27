"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Check,
  Copy,
  ExternalLink,
  Search,
  X,
} from "lucide-react";
import { StockLogo } from "@/components/stock-logo";
import { MarketCapBars, SectorDonut } from "./portfolio-allocations";
import {
  formatCompactCurrency,
  formatSignedPercent,
} from "@/lib/format";
import type {
  PortfolioAllocation,
  PortfolioConstituent,
} from "@/lib/portfolios/types";

type SortKey = "name" | "weight" | "marketCap" | "return1y" | "sector";

function stockHref(item: PortfolioConstituent) {
  return item.research
    ? `/stocks/${item.ticker}`
    : `/stocks/${item.ticker}/scores`;
}

function SortIcon({
  active,
  direction,
}: {
  active: boolean;
  direction: "asc" | "desc";
}) {
  if (!active) return <ArrowUpDown aria-hidden="true" className="size-3 opacity-40" />;
  return direction === "asc" ? (
    <ArrowUp aria-hidden="true" className="size-3 text-brand" />
  ) : (
    <ArrowDown aria-hidden="true" className="size-3 text-brand" />
  );
}

export function PortfolioConstituents({
  constituents,
  allocations,
}: {
  constituents: PortfolioConstituent[];
  allocations: {
    sectors: PortfolioAllocation[];
    marketCap: PortfolioAllocation[];
    top10Weight: number;
  };
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<{ key: SortKey; direction: "asc" | "desc" }>(
    { key: "weight", direction: "desc" },
  );
  const [copiedTicker, setCopiedTicker] = useState<string | null>(null);

  const copyTicker = async (ticker: string) => {
    try {
      await navigator.clipboard.writeText(ticker);
      setCopiedTicker(ticker);
      window.setTimeout(() => setCopiedTicker(null), 1600);
    } catch {
      // Clipboard access may be unavailable.
    }
  };

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const base = needle
      ? constituents.filter(
          (item) =>
            item.name.toLowerCase().includes(needle) ||
            item.ticker.toLowerCase().includes(needle) ||
            item.sector.toLowerCase().includes(needle),
        )
      : constituents;
    return [...base].sort((a, b) => {
      const multiplier = sort.direction === "asc" ? 1 : -1;
      switch (sort.key) {
        case "name":
          return a.name.localeCompare(b.name) * multiplier;
        case "sector":
          return (
            (a.sector.localeCompare(b.sector) ||
              b.weight - a.weight) * multiplier
          );
        case "marketCap":
          return (
            ((a.marketCap ?? -1) - (b.marketCap ?? -1)) * multiplier
          );
        case "return1y":
          return (
            ((a.return1y ?? Number.NEGATIVE_INFINITY) -
              (b.return1y ?? Number.NEGATIVE_INFINITY)) *
            multiplier
          );
        case "weight":
        default:
          return (a.weight - b.weight) * multiplier;
      }
    });
  }, [constituents, query, sort]);

  const changeSort = (key: SortKey) => {
    setSort((current) =>
      current.key === key
        ? {
            key,
            direction: current.direction === "asc" ? "desc" : "asc",
          }
        : { key, direction: key === "name" || key === "sector" ? "asc" : "desc" },
    );
  };

  const ariaSort = (key: SortKey) =>
    sort.key === key
      ? sort.direction === "asc"
        ? "ascending"
        : "descending"
      : "none";

  const totalWeight = constituents.reduce((sum, item) => sum + item.weight, 0);

  return (
    <div className="space-y-4">
      <section className="grid gap-3 lg:grid-cols-2">
        <div className="card p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="kicker text-[10px]">Sector composition</p>
              <h2 className="mt-1 text-[16px] font-medium text-ink">
                Where the portfolio is invested
              </h2>
            </div>
            <span className="rounded-full bg-paper-deep px-2.5 py-1 text-[10px] font-medium text-muted">
              Target weights
            </span>
          </div>
          <div className="mt-4">
            <SectorDonut
              allocations={allocations.sectors}
              holdings={constituents.length}
            />
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="kicker text-[10px]">Holdings distribution</p>
              <h2 className="mt-1 text-[16px] font-medium text-ink">
                Market-cap mix and concentration
              </h2>
            </div>
            <span className="rounded-full bg-paper-deep px-2.5 py-1 text-[10px] font-medium text-muted">
              Calculated
            </span>
          </div>
          <div className="mt-5">
            <MarketCapBars allocations={allocations.marketCap} />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 border-t border-line pt-3">
            <div>
              <p className="stat-label text-[10px]">Top 10 weight</p>
              <p className="tabular mt-0.5 text-[16px] font-medium text-ink">
                {(allocations.top10Weight * 100).toFixed(1)}%
              </p>
            </div>
            <div className="min-w-0">
              <p className="stat-label text-[10px]">Largest sector</p>
              <p className="mt-0.5 truncate text-[14px] font-medium text-ink">
                {allocations.sectors[0]?.label ?? "N/A"}
              </p>
              <p className="tabular text-[10px] text-muted">
                {((allocations.sectors[0]?.weight ?? 0) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="card overflow-hidden">
        <div className="flex flex-col gap-2 border-b border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-[16px] font-medium text-ink">
              Stocks &amp; weights
            </h2>
            <p className="text-[11px] text-muted">
              {constituents.length} holdings ·{" "}
              {Math.round(totalWeight * 10_000) / 100}% allocated
            </p>
          </div>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <label className="relative min-w-0 flex-1 sm:w-60">
              <span className="sr-only">Search constituents</span>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-faint"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search holdings"
                className="h-8 w-full rounded-full border border-line bg-paper-deep pl-8 pr-8 text-[11px] text-ink outline-none placeholder:text-faint focus:border-brand/50"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear holdings search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-faint hover:text-ink"
                >
                  <X aria-hidden="true" className="size-3.5" />
                </button>
              )}
            </label>
            <select
              value={`${sort.key}-${sort.direction}`}
              onChange={(event) => {
                const [key, direction] = event.target.value.split("-") as [
                  SortKey,
                  "asc" | "desc",
                ];
                setSort({ key, direction });
              }}
              aria-label="Sort constituents"
              className="h-8 shrink-0 rounded-full border border-line bg-surface px-2.5 text-[10px] font-semibold text-ink-soft outline-none sm:hidden"
            >
              <option value="weight-desc">Weight: high</option>
              <option value="weight-asc">Weight: low</option>
              <option value="name-asc">Name: A-Z</option>
              <option value="marketCap-desc">Market cap: high</option>
              <option value="marketCap-asc">Market cap: low</option>
              <option value="return1y-desc">1Y return: high</option>
              <option value="return1y-asc">1Y return: low</option>
            </select>
          </div>
        </div>

        <div className="hidden overflow-x-auto sm:block">
          <table className="w-full text-left text-[11px]">
            <caption className="sr-only">
              Portfolio constituents, weights and one-year price returns
            </caption>
            <thead className="bg-paper-deep text-[10px] font-medium text-muted">
              <tr>
                <th scope="col" className="px-4 py-2 font-semibold" aria-sort={ariaSort("name")}>
                  <button
                    type="button"
                    onClick={() => changeSort("name")}
                    className="inline-flex items-center gap-1 transition-colors hover:text-ink"
                  >
                    Stock
                    <SortIcon active={sort.key === "name"} direction={sort.direction} />
                  </button>
                </th>
                <th scope="col" className="px-3 py-2 font-semibold" aria-sort={ariaSort("sector")}>
                  <button
                    type="button"
                    onClick={() => changeSort("sector")}
                    className="inline-flex items-center gap-1 transition-colors hover:text-ink"
                  >
                    Sector
                    <SortIcon active={sort.key === "sector"} direction={sort.direction} />
                  </button>
                </th>
                <th scope="col" className="px-3 py-2 text-right font-semibold" aria-sort={ariaSort("marketCap")}>
                  <button
                    type="button"
                    onClick={() => changeSort("marketCap")}
                    className="inline-flex items-center gap-1 transition-colors hover:text-ink"
                  >
                    Market cap
                    <SortIcon active={sort.key === "marketCap"} direction={sort.direction} />
                  </button>
                </th>
                <th scope="col" className="px-3 py-2 text-right font-semibold" aria-sort={ariaSort("weight")}>
                  <button
                    type="button"
                    onClick={() => changeSort("weight")}
                    className="inline-flex items-center gap-1 transition-colors hover:text-ink"
                  >
                    Weight
                    <SortIcon active={sort.key === "weight"} direction={sort.direction} />
                  </button>
                </th>
                <th scope="col" className="px-4 py-2 text-right font-semibold" aria-sort={ariaSort("return1y")}>
                  <button
                    type="button"
                    onClick={() => changeSort("return1y")}
                    className="inline-flex items-center gap-1 transition-colors hover:text-ink"
                  >
                    1Y return
                    <SortIcon active={sort.key === "return1y"} direction={sort.direction} />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => {
                const href = stockHref(item);
                const tone =
                  item.return1y == null
                    ? "text-muted"
                    : item.return1y >= 0
                      ? "text-positive"
                      : "text-danger";
                return (
                  <tr
                    key={item.ticker}
                    className="border-t border-line/80 align-middle transition-colors hover:bg-brand-soft/30"
                  >
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2.5">
                        <StockLogo ticker={item.ticker} size={30} />
                        <div className="min-w-0">
                          <Link
                            href={href}
                            className="flex min-h-6 items-center truncate text-[12px] font-medium text-ink transition-colors hover:text-brand"
                          >
                            {item.name}
                          </Link>
                          <div className="mt-0.5 flex items-center gap-1.5">
                            <Link
                              href={href}
                              className="inline-flex min-h-6 min-w-6 items-center font-mono text-[10px] text-muted hover:text-brand"
                            >
                              {item.ticker}
                            </Link>
                            <button
                              type="button"
                              onClick={() => copyTicker(item.ticker)}
                              aria-label={`Copy ${item.ticker} ticker`}
                              className="inline-flex size-6 items-center justify-center rounded text-faint transition-colors hover:bg-paper-deep hover:text-ink"
                            >
                              {copiedTicker === item.ticker ? (
                                <Check aria-hidden="true" className="size-3 text-positive" />
                              ) : (
                                <Copy aria-hidden="true" className="size-3" />
                              )}
                            </button>
                            {item.research ? (
                              <span className="rounded bg-brand-soft px-1.5 py-0.5 text-[9px] font-medium text-brand">
                                Report
                              </span>
                            ) : (
                              <span className="rounded bg-paper-deep px-1.5 py-0.5 text-[9px] font-medium text-muted">
                                Scores
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="max-w-[170px] truncate px-3 py-2.5 text-[11.5px] text-muted">
                      {item.sector}
                    </td>
                    <td className="tabular px-3 py-2.5 text-right text-[11.5px] text-ink-soft">
                      {formatCompactCurrency(item.marketCap)}
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <span className="tabular text-[12px] font-medium text-ink">
                        {(item.weight * 100).toFixed(1)}%
                      </span>
                      <span className="mt-1 block h-1 w-full overflow-hidden rounded-full bg-paper-deep">
                        <span
                          className="block h-full rounded-full bg-brand"
                          style={{ width: `${Math.min(100, item.weight * 100 * 4)}%` }}
                        />
                      </span>
                    </td>
                    <td className={`tabular px-4 py-2.5 text-right text-[12px] font-medium ${tone}`}>
                      {formatSignedPercent(item.return1y)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t border-line bg-paper-deep">
                <td colSpan={3} className="px-4 py-2 text-[11px] font-medium text-muted">
                  Total target allocation
                </td>
                <td className="tabular px-3 py-2 text-right text-[12px] font-medium text-ink">
                  {(totalWeight * 100).toFixed(1)}%
                </td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="divide-y divide-line sm:hidden">
          {filtered.map((item) => {
            const href = stockHref(item);
            const tone =
              item.return1y == null
                ? "text-muted"
                : item.return1y >= 0
                  ? "text-positive"
                  : "text-danger";
            return (
              <div
                key={item.ticker}
                className="p-3.5 transition-colors hover:bg-brand-soft/20"
              >
                <div className="flex items-start gap-2.5">
                  <StockLogo ticker={item.ticker} size={34} />
                  <div className="min-w-0 flex-1">
                    <Link
                      href={href}
                      className="flex min-h-6 items-center truncate text-[13px] font-medium text-ink"
                    >
                      {item.name}
                    </Link>
                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="font-mono text-[10.5px] text-muted">
                        {item.ticker} · {item.sector}
                      </span>
                      <button
                        type="button"
                        onClick={() => copyTicker(item.ticker)}
                        aria-label={`Copy ${item.ticker} ticker`}
                        className="inline-flex size-6 items-center justify-center rounded text-faint transition-colors hover:bg-paper-deep hover:text-ink"
                      >
                        {copiedTicker === item.ticker ? (
                          <Check aria-hidden="true" className="size-3 text-positive" />
                        ) : (
                          <Copy aria-hidden="true" className="size-3" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="tabular text-[14px] font-medium text-ink">
                      {(item.weight * 100).toFixed(1)}%
                    </p>
                    <p className="text-[9.5px] text-faint">weight</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between gap-2 border-t border-line pt-2">
                  <div className="flex items-center gap-2 text-[10.5px] text-muted">
                    <span>{formatCompactCurrency(item.marketCap)}</span>
                    <span aria-hidden="true">·</span>
                    <span className={`tabular font-medium ${tone}`}>
                      {formatSignedPercent(item.return1y)} 1Y
                    </span>
                  </div>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-0.5 text-[10.5px] font-medium text-brand"
                  >
                    {item.research ? "Research" : "Scores"}
                    <ExternalLink aria-hidden="true" className="size-3" />
                  </Link>
                </div>
                <span className="mt-2 block h-1 w-full overflow-hidden rounded-full bg-paper-deep">
                  <span
                    className="block h-full rounded-full bg-brand"
                    style={{ width: `${Math.min(100, item.weight * 100 * 4)}%` }}
                  />
                </span>
              </div>
            );
          })}
        </div>

        {!filtered.length && (
          <p className="px-4 py-10 text-center text-[12px] text-muted">
            No holdings match that search.
          </p>
        )}

      </section>
    </div>
  );
}
