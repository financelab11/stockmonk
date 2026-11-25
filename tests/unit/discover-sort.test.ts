import { describe, expect, it } from "vitest";
import { filterUniverse, parseSort, sortEntries } from "@/lib/discover";
import type { UniverseEntry } from "@/lib/schemas";

function entry(
  overrides: Partial<UniverseEntry> & { ticker: string },
): UniverseEntry {
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
    expect(rows.map((row) => row.ticker)).toEqual([
      "HIGH",
      "MID",
      "LOW",
      "MISS",
    ]);
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
      [
        entry({ ticker: "C", name: "Cisco" }),
        entry({ ticker: "A", name: "Apple" }),
      ],
      "name",
    );
    expect(rows.map((row) => row.name)).toEqual(["Apple", "Cisco"]);
  });

  it("sorts by EPS growth and growth percentile", () => {
    const rows = sortEntries(
      [
        entry({ ticker: "LOW", epsGrowthTtm: 0.04 }),
        entry({ ticker: "HIGH", epsGrowthTtm: 0.35 }),
        entry({ ticker: "MID", epsGrowthTtm: 0.15 }),
      ],
      "epsGrowth",
    );
    expect(rows.map((row) => row.ticker)).toEqual(["HIGH", "MID", "LOW"]);

    const percentile = (value: number, ticker: string) =>
      entry({
        ticker,
        factorChips: [
          {
            key: "growth",
            label: "Growth: Moderate",
            tone: "neutral",
            detail: `${value}th percentile revenue/EPS growth in the covered universe.`,
          },
        ],
      });
    const ranked = sortEntries(
      [percentile(25, "LOW"), percentile(91, "HIGH"), percentile(58, "MID")],
      "growthPercentile",
    );
    expect(ranked.map((row) => row.ticker)).toEqual(["HIGH", "MID", "LOW"]);
  });

  it("applies market-cap, growth and margin filters", () => {
    const rows = [
      entry({
        ticker: "SMALL",
        marketCap: 5_000_000_000,
        revenueGrowthTtm: 0.25,
        operatingMargin: 0.22,
      }),
      entry({
        ticker: "LARGE",
        marketCap: 150_000_000_000,
        revenueGrowthTtm: 0.12,
        operatingMargin: 0.12,
      }),
    ];
    const filtered = filterUniverse(rows, {
      minMarketCap: 50_000_000_000,
      minRevenueGrowth: 0.1,
      minOperatingMargin: 0.1,
    });
    expect(filtered.map((row) => row.ticker)).toEqual(["LARGE"]);
  });

  it("filters on V2 component and composite scores", () => {
    const rows = [
      entry({
        ticker: "HIGH",
        v2Scores: {
          growth: 82,
          quality: 78,
          valuation: 71,
          technical: 66,
          composite: 76,
          status: "complete",
          coverage: 0.92,
        },
      }),
      entry({
        ticker: "LOW",
        v2Scores: {
          growth: 55,
          quality: 58,
          valuation: 62,
          technical: 54,
          composite: 58,
          status: "complete",
          coverage: 0.88,
        },
      }),
    ];
    const filtered = filterUniverse(rows, {
      minV2Composite: 70,
      minV2Quality: 70,
    });
    expect(filtered.map((row) => row.ticker)).toEqual(["HIGH"]);
  });
});
