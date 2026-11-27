"use client";

import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";
import {
  Check,
  ChevronDown,
  RotateCcw,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { PortfolioCard, type ReturnPeriod } from "./portfolio-card";
import { PORTFOLIO_CATEGORIES } from "@/lib/portfolios/categories";
import type { PortfolioSummary } from "@/lib/portfolios/types";

const PAGE_SIZE = 24;

const SORTS = [
  { id: "popularity", label: "Popularity" },
  { id: "recent", label: "Recently added" },
  { id: "rebalanced", label: "Recently rebalanced" },
  { id: "investment", label: "Minimum investment: low to high" },
  { id: "return-desc", label: "Returns: high to low" },
  { id: "return-asc", label: "Returns: low to high" },
  { id: "vol-asc", label: "Volatility: low to high" },
  { id: "vol-desc", label: "Volatility: high to low" },
] as const;

type SortId = (typeof SORTS)[number]["id"];

type FilterState = {
  strategy: string[];
  marketCap: string[];
  volatility: string[];
  minInvestment: string[];
  rebalance: string[];
  holdings: string[];
  positive: boolean;
};

const EMPTY_FILTERS: FilterState = {
  strategy: [],
  marketCap: [],
  volatility: [],
  minInvestment: [],
  rebalance: [],
  holdings: [],
  positive: false,
};

const VOLATILITY_RANK = { Low: 1, Medium: 2, High: 3 } as const;

function periodReturn(portfolio: PortfolioSummary, period: ReturnPeriod) {
  if (period === "1M") return portfolio.return1m;
  if (period === "6M") return portfolio.return6m;
  return portfolio.return1y;
}

function inInvestmentBucket(value: number, bucket: string): boolean {
  if (bucket === "Under $1,000") return value < 1000;
  if (bucket === "$1,000-$5,000") return value >= 1000 && value < 5000;
  if (bucket === "$5,000-$10,000") return value >= 5000 && value < 10000;
  if (bucket === "$10,000-$25,000") return value >= 10000 && value < 25000;
  if (bucket === "Above $25,000") return value >= 25000;
  return true;
}

function inHoldingsBucket(value: number, bucket: string): boolean {
  if (bucket === "5-10") return value <= 10;
  if (bucket === "10-20") return value > 10 && value <= 20;
  if (bucket === "20-30") return value > 20 && value <= 30;
  if (bucket === "30+") return value > 30;
  return true;
}

function matchesCategory(
  portfolio: PortfolioSummary,
  category: string,
): boolean {
  if (category === "All Portfolios") return true;
  if (portfolio.primaryCategory === category) return true;
  if (portfolio.tags.includes(category)) return true;
  if (portfolio.marketCapFocus === category) return true;
  return false;
}

function unique(values: string[]): string[] {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors ${
        active
          ? "border-brand-deep bg-brand-deep text-white"
          : "border-line bg-surface text-ink-soft hover:border-brand/40 hover:text-brand"
      }`}
    >
      {active && <Check aria-hidden="true" className="size-3" />}
      {label}
    </button>
  );
}

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
        {title}
      </legend>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {options.map((option) => (
          <FilterChip
            key={option}
            label={option}
            active={selected.includes(option)}
            onClick={() => onToggle(option)}
          />
        ))}
      </div>
    </fieldset>
  );
}

export function PortfolioDiscovery({
  portfolios,
}: {
  portfolios: PortfolioSummary[];
}) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [category, setCategory] = useState("All Portfolios");
  const [period, setPeriod] = useState<ReturnPeriod>("1Y");
  const [sort, setSort] = useState<SortId>("popularity");
  const [filters, setFilters] = useState<FilterState>(EMPTY_FILTERS);
  const [draft, setDraft] = useState<FilterState>(EMPTY_FILTERS);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 160);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [debouncedQuery, category, period, sort, filters]);

  useEffect(() => {
    if (!filterOpen && !sortOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFilterOpen(false);
        setSortOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [filterOpen, sortOpen]);

  const fuse = useMemo(
    () =>
      new Fuse(portfolios, {
        threshold: 0.32,
        ignoreLocation: true,
        keys: [
          { name: "name", weight: 0.4 },
          { name: "description", weight: 0.25 },
          { name: "primaryCategory", weight: 0.1 },
          { name: "strategyType", weight: 0.1 },
          { name: "tags", weight: 0.1 },
          { name: "marketCapFocus", weight: 0.05 },
        ],
      }),
    [portfolios],
  );

  const filtered = useMemo(() => {
    const base = debouncedQuery
      ? fuse.search(debouncedQuery).map((result) => result.item)
      : portfolios;

    return base.filter((portfolio) => {
      if (!matchesCategory(portfolio, category)) return false;
      if (
        filters.strategy.length &&
        !filters.strategy.includes(portfolio.strategyType)
      )
        return false;
      if (
        filters.marketCap.length &&
        !filters.marketCap.includes(portfolio.marketCapFocus)
      )
        return false;
      if (
        filters.volatility.length &&
        !filters.volatility.includes(portfolio.volatility)
      )
        return false;
      if (
        filters.rebalance.length &&
        !filters.rebalance.includes(portfolio.rebalanceFrequency)
      )
        return false;
      if (
        filters.minInvestment.length &&
        !filters.minInvestment.some((bucket) =>
          inInvestmentBucket(portfolio.minimumInvestment, bucket),
        )
      )
        return false;
      if (
        filters.holdings.length &&
        !filters.holdings.some((bucket) =>
          inHoldingsBucket(portfolio.holdingsCount, bucket),
        )
      )
        return false;
      if (filters.positive) {
        const value = periodReturn(portfolio, period);
        if (value == null || value <= 0) return false;
      }
      return true;
    });
  }, [portfolios, fuse, debouncedQuery, category, filters, period]);

  const sorted = useMemo(() => {
    const value = (portfolio: PortfolioSummary) =>
      periodReturn(portfolio, period) ?? Number.NEGATIVE_INFINITY;
    return [...filtered].sort((a, b) => {
      switch (sort) {
        case "recent":
          return (
            b.createdAt.localeCompare(a.createdAt) ||
            a.popularity - b.popularity
          );
        case "rebalanced":
          return (
            b.updatedAt.localeCompare(a.updatedAt) ||
            a.popularity - b.popularity
          );
        case "investment":
          return (
            a.minimumInvestment - b.minimumInvestment ||
            a.popularity - b.popularity
          );
        case "return-desc":
          return value(b) - value(a) || a.popularity - b.popularity;
        case "return-asc":
          return value(a) - value(b) || a.popularity - b.popularity;
        case "vol-asc":
          return (
            VOLATILITY_RANK[a.volatility] - VOLATILITY_RANK[b.volatility] ||
            a.popularity - b.popularity
          );
        case "vol-desc":
          return (
            VOLATILITY_RANK[b.volatility] - VOLATILITY_RANK[a.volatility] ||
            a.popularity - b.popularity
          );
        case "popularity":
        default:
          return a.popularity - b.popularity;
      }
    });
  }, [filtered, sort, period]);

  const shown = sorted.slice(0, visible);
  const activeFilterCount =
    filters.strategy.length +
    filters.marketCap.length +
    filters.volatility.length +
    filters.minInvestment.length +
    filters.rebalance.length +
    filters.holdings.length +
    (filters.positive ? 1 : 0);

  const strategyOptions = useMemo(
    () => unique(portfolios.map((portfolio) => portfolio.strategyType)),
    [portfolios],
  );
  const capOptions = useMemo(
    () => unique(portfolios.map((portfolio) => portfolio.marketCapFocus)),
    [portfolios],
  );

  const openFilters = () => {
    setDraft(filters);
    setFilterOpen(true);
  };

  const clearAll = () => {
    setCategory("All Portfolios");
    setQuery("");
    setFilters(EMPTY_FILTERS);
    setDraft(EMPTY_FILTERS);
    setSort("popularity");
    setPeriod("1Y");
  };

  return (
    <section id="portfolios" className="container-page scroll-mt-24">
      <div className="flex flex-col gap-3 border-b border-line pb-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="display text-[26px] tracking-[-0.02em] text-ink sm:text-[30px]">
            Explore portfolios
          </h2>
          <p className="mt-1 text-[12px] text-muted">
            <span className="tabular font-semibold text-ink">
              {portfolios.length}
            </span>{" "}
            model strategies in the Stockmonk US coverage universe.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="relative flex-1 sm:w-72">
            <span className="sr-only">Search portfolios</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-faint"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search portfolios"
              className="h-9 w-full rounded-full border border-line bg-surface pl-8 pr-8 text-[12px] text-ink outline-none transition-colors placeholder:text-faint focus:border-brand/50"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-faint hover:text-ink"
              >
                <X aria-hidden="true" className="size-3.5" />
              </button>
            )}
          </label>
          <button
            type="button"
            onClick={openFilters}
            aria-label={
              activeFilterCount > 0
                ? `Filters, ${activeFilterCount} active`
                : "Filters"
            }
            aria-expanded={filterOpen}
            className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface px-3 text-[11px] font-semibold text-ink-soft transition-colors hover:border-brand/40 hover:text-brand"
          >
            <SlidersHorizontal aria-hidden="true" className="size-3.5" />
            Filters
            {activeFilterCount > 0 && (
              <span className="rounded-full bg-brand-deep px-1.5 py-0.5 text-[9px] text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="scrollbar-none -mx-5 mt-3 flex gap-1.5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {PORTFOLIO_CATEGORIES.map((item) => (
          <FilterChip
            key={item}
            label={item}
            active={category === item}
            onClick={() => setCategory(item)}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-2 rounded-xl border border-line bg-paper-deep px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] text-muted">
          <span className="tabular font-semibold text-ink">
            {sorted.length}
          </span>{" "}
          {sorted.length === 1 ? "portfolio" : "portfolios"}
          {category !== "All Portfolios" ? ` in ${category}` : ""}
        </p>
        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <div
            role="group"
            aria-label="Return period"
            className="inline-flex rounded-full border border-line bg-surface p-0.5"
          >
            {(["1M", "6M", "1Y"] as const).map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={period === item}
                onClick={() => setPeriod(item)}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  period === item
                    ? "bg-ink text-white"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortId)}
            aria-label="Sort portfolios"
            className="hidden h-8 max-w-[210px] rounded-full border border-line bg-surface px-2.5 text-[10.5px] font-semibold text-ink-soft outline-none sm:block"
          >
            {SORTS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => setSortOpen(true)}
            aria-label="Sort portfolios"
            aria-expanded={sortOpen}
            className="inline-flex h-8 items-center gap-1 rounded-full border border-line bg-surface px-2.5 text-[10.5px] font-semibold text-ink-soft sm:hidden"
          >
            Sort
            <ChevronDown aria-hidden="true" className="size-3" />
          </button>
        </div>
      </div>

      {shown.length ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {shown.map((portfolio) => (
            <PortfolioCard
              key={portfolio.slug}
              portfolio={portfolio}
              period={period}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-line bg-surface px-5 py-12 text-center">
          <p className="display text-[22px] text-ink">
            No portfolios match those filters
          </p>
          <p className="mx-auto mt-1 max-w-md text-[12px] leading-relaxed text-muted">
            Try a broader theme, a different return period or remove one of the
            advanced filters.
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="btn btn-ghost mt-4"
          >
            <RotateCcw aria-hidden="true" className="size-3.5" />
            Clear all filters
          </button>
        </div>
      )}

      {visible < sorted.length && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((current) => current + PAGE_SIZE)}
            className="btn btn-ghost"
          >
            Load more portfolios
          </button>
        </div>
      )}

      <p className="mt-4 text-[9.5px] leading-relaxed text-muted">
        Returns shown on cards are simulated from the current constituents at
        target weights, price-only and before fees. They are not live
        performance. Open a portfolio for its methodology, benchmark and risk
        metrics.
      </p>

      {filterOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-night/45 p-0 sm:items-center sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setFilterOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-filter-title"
            className="flex max-h-[88vh] w-full max-w-xl flex-col rounded-t-2xl border border-line bg-surface shadow-float sm:rounded-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <div>
                <h2
                  id="portfolio-filter-title"
                  className="text-[15px] font-semibold text-ink"
                >
                  Filters
                </h2>
                <p className="text-[10px] text-muted">
                  Market: US-listed stocks only
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFilterOpen(false)}
                aria-label="Close filters"
                className="rounded-full border border-line p-1.5 text-muted hover:text-ink"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
            </div>

            <div className="space-y-4 overflow-y-auto px-4 py-4">
              <FilterGroup
                title="Strategy"
                options={strategyOptions}
                selected={draft.strategy}
                onToggle={(value) =>
                  setDraft((current) => ({
                    ...current,
                    strategy: toggleValue(current.strategy, value),
                  }))
                }
              />
              <FilterGroup
                title="Market capitalisation"
                options={capOptions}
                selected={draft.marketCap}
                onToggle={(value) =>
                  setDraft((current) => ({
                    ...current,
                    marketCap: toggleValue(current.marketCap, value),
                  }))
                }
              />
              <FilterGroup
                title="Volatility"
                options={["Low", "Medium", "High"]}
                selected={draft.volatility}
                onToggle={(value) =>
                  setDraft((current) => ({
                    ...current,
                    volatility: toggleValue(current.volatility, value),
                  }))
                }
              />
              <FilterGroup
                title="Minimum investment"
                options={[
                  "Under $1,000",
                  "$1,000-$5,000",
                  "$5,000-$10,000",
                  "$10,000-$25,000",
                  "Above $25,000",
                ]}
                selected={draft.minInvestment}
                onToggle={(value) =>
                  setDraft((current) => ({
                    ...current,
                    minInvestment: toggleValue(current.minInvestment, value),
                  }))
                }
              />
              <FilterGroup
                title="Rebalancing"
                options={["Monthly", "Quarterly"]}
                selected={draft.rebalance}
                onToggle={(value) =>
                  setDraft((current) => ({
                    ...current,
                    rebalance: toggleValue(current.rebalance, value),
                  }))
                }
              />
              <FilterGroup
                title="Number of holdings"
                options={["5-10", "10-20", "20-30", "30+"]}
                selected={draft.holdings}
                onToggle={(value) =>
                  setDraft((current) => ({
                    ...current,
                    holdings: toggleValue(current.holdings, value),
                  }))
                }
              />
              <fieldset>
                <legend className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
                  Returns
                </legend>
                <div className="mt-2">
                  <FilterChip
                    label={`Positive ${period} returns`}
                    active={draft.positive}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        positive: !current.positive,
                      }))
                    }
                  />
                </div>
              </fieldset>
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-line px-4 py-3">
              <button
                type="button"
                onClick={() => setDraft(EMPTY_FILTERS)}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted hover:text-ink"
              >
                <RotateCcw aria-hidden="true" className="size-3.5" />
                Reset
              </button>
              <button
                type="button"
                onClick={() => {
                  setFilters(draft);
                  setFilterOpen(false);
                }}
                className="btn btn-primary h-9 min-h-0 px-4 text-[12px]"
              >
                Apply filters
              </button>
            </div>
          </div>
        </div>
      )}

      {sortOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-night/45 sm:hidden"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSortOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Sort portfolios"
            className="w-full rounded-t-2xl border border-line bg-surface pb-[env(safe-area-inset-bottom)] shadow-float"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <h2 className="text-[15px] font-semibold text-ink">Sort by</h2>
              <button
                type="button"
                onClick={() => setSortOpen(false)}
                aria-label="Close sorting"
                className="rounded-full border border-line p-1.5 text-muted"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto py-1">
              {SORTS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setSort(option.id);
                    setSortOpen(false);
                  }}
                  className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-[12px] text-ink-soft hover:bg-paper-deep"
                >
                  {option.label}
                  {sort === option.id && (
                    <Check aria-hidden="true" className="size-4 text-brand" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
