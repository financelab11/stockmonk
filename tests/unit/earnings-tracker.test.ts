import { describe, expect, it } from "vitest";
import {
  buildEarningsUrl,
  earningsToCsv,
  filterEarningsRows,
  parseEarningsParams,
  sortEarningsRows,
} from "@/lib/earnings-tracker";
import type { EarningsTrackerRow } from "@/lib/schemas";

function row(overrides: Partial<EarningsTrackerRow> & { ticker: string }): EarningsTrackerRow {
  return {
    name: overrides.ticker,
    industry: "Software",
    period: "Q2 FY27",
    reportDate: "2026-09-30",
    salesGrowth: 0.1,
    ebitdaGrowth: 0.1,
    netProfitGrowth: 0.1,
    epsGrowth: 0.1,
    marketCap: 100_000_000_000,
    pe: 20,
    roce: null,
    peg: 2,
    return1y: 0.05,
    source: "filings",
    ...overrides,
  };
}

describe("earnings tracker", () => {
  it("parses and clamps parameters", () => {
    const params = parseEarningsParams({
      sort: "pe",
      per: "999",
      page: "-4",
      minSales: "15",
      maxPe: "abc",
    });
    expect(params.sort).toBe("pe");
    expect(params.per).toBe(25);
    expect(params.page).toBe(1);
    expect(params.minSales).toBe(15);
    expect(params.maxPe).toBeNull();
    expect(parseEarningsParams({}).sort).toBe("sales");
  });

  it("filters on growth, industry, valuation and market cap", () => {
    const rows = [
      row({ ticker: "A", salesGrowth: 0.25, industry: "Banks", pe: 12 }),
      row({ ticker: "B", salesGrowth: 0.05, industry: "Software", pe: 40 }),
      row({ ticker: "C", salesGrowth: null, industry: "Software", marketCap: 1_000_000_000, pe: null }),
    ];
    const params = parseEarningsParams({ minSales: "10", industry: "Banks" });
    expect(filterEarningsRows(rows, params).map((entry) => entry.ticker)).toEqual(["A"]);

    const cheap = parseEarningsParams({ maxPe: "20" });
    expect(filterEarningsRows(rows, cheap).map((entry) => entry.ticker)).toEqual(["A"]);

    const large = parseEarningsParams({ minCap: "500" });
    expect(filterEarningsRows(rows, large).map((entry) => entry.ticker)).toEqual(["A", "B"]);
  });

  it("sorts growth descending with missing values last and P/E ascending", () => {
    const rows = [
      row({ ticker: "LOW", salesGrowth: 0.02 }),
      row({ ticker: "MISS", salesGrowth: null }),
      row({ ticker: "HIGH", salesGrowth: 0.5 }),
    ];
    expect(
      sortEarningsRows(rows, "sales").map((entry) => entry.ticker),
    ).toEqual(["HIGH", "LOW", "MISS"]);
    expect(
      sortEarningsRows(rows, "name").map((entry) => entry.ticker),
    ).toEqual(["HIGH", "LOW", "MISS"]);

    const byPe = [
      row({ ticker: "EXPENSIVE", pe: 60 }),
      row({ ticker: "CHEAP", pe: 8 }),
      row({ ticker: "NO_PE", pe: null }),
    ];
    expect(sortEarningsRows(byPe, "pe").map((entry) => entry.ticker)).toEqual([
      "CHEAP",
      "EXPENSIVE",
      "NO_PE",
    ]);
  });

  it("keeps filters and sort in generated URLs", () => {
    const params = parseEarningsParams({ minSales: "10", sort: "eps", q: "bank" });
    expect(buildEarningsUrl(params, { page: 2 })).toBe(
      "/india/earnings-tracker?q=bank&sort=eps&minSales=10&page=2",
    );
    expect(buildEarningsUrl(parseEarningsParams({}), {})).toBe(
      "/india/earnings-tracker",
    );
  });

  it("exports the filtered table as CSV", () => {
    const csv = earningsToCsv([row({ ticker: "AAA", salesGrowth: 0.25 })]);
    const [header, line] = csv.split("\n");
    expect(header).toContain("Sales YoY %");
    expect(line).toContain("AAA");
    expect(line).toContain("25.0");
  });
});
