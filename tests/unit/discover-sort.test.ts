import { describe, expect, it } from "vitest";
import { parseSort, sortEntries } from "@/lib/discover";
import type { UniverseEntry } from "@/lib/schemas";

function entry(overrides: Partial<UniverseEntry> & { ticker: string }): UniverseEntry {
  return {
    name: overrides.ticker,
    sector: "Technology",
    industry: "Software",
    description: "",
    isResearch: true,
    market: "US",
    currency: "USD",
    price: null,
    changePct: null,
    marketCap: null,
    return1y: null,
    revenueTtm: null,
    revenueGrowthTtm: null,
    operatingMargin: null,
    pe: null,
    evEbitda: null,
    factorChips: [],
    asOf: null,
    ...overrides,
  };
}

describe("discover sorting", () => {
  it("defaults to 1Y returns", () => {
    expect(parseSort(undefined)).toBe("return1y");
    expect(parseSort("not-a-sort")).toBe("return1y");
    expect(parseSort("name")).toBe("name");
  });

  it("orders 1Y returns from highest to lowest with missing values last", () => {
    const rows = sortEntries(
      [
        entry({ ticker: "MISS", return1y: null, marketCap: 900 }),
        entry({ ticker: "LOW", return1y: 0.05 }),
        entry({ ticker: "HIGH", return1y: 0.42 }),
        entry({ ticker: "MID", return1y: 0.18 }),
      ],
      "return1y",
    );
    expect(rows.map((row) => row.ticker)).toEqual(["HIGH", "MID", "LOW", "MISS"]);
  });

  it("breaks 1Y return ties with market cap", () => {
    const rows = sortEntries(
      [
        entry({ ticker: "SMALL", return1y: 0.2, marketCap: 1_000 }),
        entry({ ticker: "BIG", return1y: 0.2, marketCap: 9_000 }),
      ],
      "return1y",
    );
    expect(rows.map((row) => row.ticker)).toEqual(["BIG", "SMALL"]);
  });

  it("sorts by company name for the alphabetical option", () => {
    const rows = sortEntries(
      [entry({ ticker: "C", name: "Cisco" }), entry({ ticker: "A", name: "Apple" })],
      "name",
    );
    expect(rows.map((row) => row.name)).toEqual(["Apple", "Cisco"]);
  });
});
