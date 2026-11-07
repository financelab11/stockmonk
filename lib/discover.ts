import { getSectorGroup, getSectorGroupsWithTickers } from "@/config/sectors";
import { SORT_OPTIONS, type SortOption } from "./constants";
import type { UniverseEntry } from "./schemas";

export function parseSort(value: string | undefined): SortOption {
  return SORT_OPTIONS.some((option) => option.value === value)
    ? (value as SortOption)
    : "marketCap";
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

export function sortEntries(
  entries: UniverseEntry[],
  sort: SortOption,
): UniverseEntry[] {
  return [...entries].sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "growth") return (b.revenueGrowthTtm ?? -Infinity) - (a.revenueGrowthTtm ?? -Infinity);
    if (sort === "margin") return (b.operatingMargin ?? -Infinity) - (a.operatingMargin ?? -Infinity);
    if (sort === "return1y") return (b.return1y ?? -Infinity) - (a.return1y ?? -Infinity);
    if (sort === "revenue") return (b.revenueTtm ?? -Infinity) - (a.revenueTtm ?? -Infinity);
    return (b.marketCap ?? -Infinity) - (a.marketCap ?? -Infinity);
  });
}

export function filterUniverse(
  entries: UniverseEntry[],
  {
    q = "",
    sector = "",
    sort = "marketCap",
    researchOnly = false,
  }: {
    q?: string;
    sector?: string;
    sort?: SortOption;
    researchOnly?: boolean;
  },
): UniverseEntry[] {
  return sortEntries(
    entries
      .filter((entry) => (researchOnly ? entry.isResearch : true))
      .filter((entry) => matchesQuery(entry, q))
      .filter((entry) => (sector ? getSectorGroup(entry.ticker)?.id === sector : true)),
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
  const groups = getSectorGroupsWithTickers(entries.map((entry) => entry.ticker));
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
