import { GCC_GROUPS, getGccGroup } from "@/config/gcc-coverage";
import { matchesQuery, parseSort, sortEntries } from "./discover";
import { DEFAULT_SORT, type SortOption } from "./constants";
import type { UniverseEntry } from "./schemas";

export { parseSort };

export function filterGccUniverse(
  entries: UniverseEntry[],
  {
    q = "",
    sector = "",
    sort = DEFAULT_SORT,
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
      .filter((entry) =>
        sector ? getGccGroup(entry.ticker)?.id === sector : true,
      ),
    sort,
  );
}

export function groupGccUniverse(entries: UniverseEntry[]): Array<{
  id: string;
  name: string;
  shortName: string;
  icon?: string;
  blurb: string;
  entries: UniverseEntry[];
}> {
  const byTicker = new Map(entries.map((entry) => [entry.ticker, entry]));
  return GCC_GROUPS.map((group) => ({
    ...group,
    entries: group.tickers
      .map((ticker) => byTicker.get(ticker))
      .filter((entry): entry is UniverseEntry => Boolean(entry)),
  })).filter((group) => group.entries.length > 0);
}
