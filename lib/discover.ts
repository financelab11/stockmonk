import { getSectorGroup, getSectorGroupsWithTickers } from "@/config/sectors";
import { DEFAULT_SORT, SORT_OPTIONS, type SortOption } from "./constants";
import type { UniverseEntry } from "./schemas";

export function parseSort(value: string | undefined): SortOption {
  return SORT_OPTIONS.some((option) => option.value === value)
    ? (value as SortOption)
    : DEFAULT_SORT;
}

export function matchesQuery(entry: UniverseEntry, query: string): boolean {
  if (!query) return true;
  const haystack =
    `${entry.ticker} ${entry.name} ${entry.sector} ${entry.industry} ${entry.description}`.toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((token) => haystack.includes(token));
}

function growthPercentile(entry: UniverseEntry): number | null {
  const detail = entry.factorChips.find(
    (chip) => chip.key === "growth",
  )?.detail;
  if (!detail) return null;
  const match = /(\d+)(?:st|nd|rd|th)\s+percentile/i.exec(detail);
  if (!match) return null;
  const value = Number(match[1]);
  return Number.isFinite(value) ? value : null;
}

/**
 * Descending sorts treat a missing value as the lowest rank, so companies
 * without the metric (for example no 1Y return) sit at the bottom. Market cap
 * breaks ties, then the company name keeps the order stable.
 */
export function sortEntries(
  entries: UniverseEntry[],
  sort: SortOption,
): UniverseEntry[] {
  const metric = (entry: UniverseEntry): number | null => {
    if (sort === "growth") return entry.revenueGrowthTtm;
    if (sort === "epsGrowth") return entry.epsGrowthTtm ?? null;
    if (sort === "growthPercentile") return growthPercentile(entry);
    if (sort === "margin") return entry.operatingMargin;
    if (sort === "return1y") return entry.return1y;
    if (sort === "revenue") return entry.revenueTtm;
    return entry.marketCap;
  };
  const byMarketCap = (a: UniverseEntry, b: UniverseEntry) =>
    (b.marketCap ?? -Infinity) - (a.marketCap ?? -Infinity);
  const byName = (a: UniverseEntry, b: UniverseEntry) =>
    a.name.localeCompare(b.name);

  return [...entries].sort((a, b) => {
    if (sort === "name") return byName(a, b);

    const delta = (metric(b) ?? -Infinity) - (metric(a) ?? -Infinity);
    if (delta !== 0) return delta;

    if (sort !== "marketCap") {
      const capDelta = byMarketCap(a, b);
      if (capDelta !== 0) return capDelta;
    }
    return byName(a, b);
  });
}

export function filterUniverse(
  entries: UniverseEntry[],
  {
    q = "",
    sector = "",
    sort = DEFAULT_SORT,
    researchOnly = false,
    minMarketCap = null,
    minRevenueGrowth = null,
    minOperatingMargin = null,
  }: {
    q?: string;
    sector?: string;
    sort?: SortOption;
    researchOnly?: boolean;
    minMarketCap?: number | null;
    minRevenueGrowth?: number | null;
    minOperatingMargin?: number | null;
  },
): UniverseEntry[] {
  return sortEntries(
    entries
      .filter((entry) => (researchOnly ? entry.isResearch : true))
      .filter((entry) => matchesQuery(entry, q))
      .filter((entry) =>
        sector ? getSectorGroup(entry.ticker)?.id === sector : true,
      )
      .filter((entry) =>
        minMarketCap == null
          ? true
          : (entry.marketCap ?? -Infinity) >= minMarketCap,
      )
      .filter((entry) =>
        minRevenueGrowth == null
          ? true
          : (entry.revenueGrowthTtm ?? -Infinity) >= minRevenueGrowth,
      )
      .filter((entry) =>
        minOperatingMargin == null
          ? true
          : (entry.operatingMargin ?? -Infinity) >= minOperatingMargin,
      ),
    sort,
  );
}

export function groupUniverse(entries: UniverseEntry[]): Array<{
  id: string;
  name: string;
  shortName: string;
  icon: string;
  blurb: string;
  entries: UniverseEntry[];
}> {
  const groups = getSectorGroupsWithTickers(
    entries.map((entry) => entry.ticker),
  );
  const byTicker = new Map(entries.map((entry) => [entry.ticker, entry]));
  return groups
    .map((group) => ({
      ...group,
      entries: group.tickers
        .map((ticker) => byTicker.get(ticker))
        .filter((entry): entry is UniverseEntry => Boolean(entry)),
    }))
    .filter((group) => group.entries.length > 0);
}
