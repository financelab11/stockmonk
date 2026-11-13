import fs from "node:fs";
import { describe, expect, it } from "vitest";
import { rankResults, resultsToCsv } from "@/lib/growth-ranker/rank";
import type { ForecastResult } from "@/lib/growth-ranker/types";

type Dataset = {
  processed: number;
  estimated: number;
  skipped: number;
  results: ForecastResult[];
};

const dataset = JSON.parse(
  fs.readFileSync("data/growth-ranker/estimates.json", "utf8"),
) as Dataset;

describe("forward estimates dataset", () => {
  it("contains one unique row for every completed estimate", () => {
    expect(dataset.results).toHaveLength(dataset.estimated);
    expect(dataset.processed).toBe(dataset.estimated + dataset.skipped);
    const tickers = dataset.results.map((result) => result.ticker);
    expect(new Set(tickers).size).toBe(tickers.length);
    expect(dataset.results.length).toBeGreaterThanOrEqual(200);
  });

  it("stores a positive base, forward path and sourced evidence", () => {
    for (const result of dataset.results) {
      expect(result.base_year.revenue).toBeGreaterThan(0);
      expect(result.projections.FY1.base).toBeGreaterThan(0);
      expect(result.projections.FY2.base).toBeGreaterThan(0);
      expect(result.projections.FY3.base).toBeGreaterThan(0);
      expect(result.evidence.length).toBeGreaterThan(0);
      expect(result.historical_reference.length).toBeGreaterThan(0);
      expect(result.valuation).toBeDefined();
      expect(result.quality).toBeDefined();
      expect(result.scores.composite).not.toBeNull();
      expect([
        "CONSENSUS",
        "CONSENSUS_PLUS_ANALYST_EXTENSION",
        "ANALYST_MODEL",
        "BESPOKE_FORWARD",
        "BESPOKE_PEER",
      ]).toContain(result.method);
    }
  });

  it("recomputes every CAGR from FY0 and FY+3 base revenue only", () => {
    for (const result of dataset.results) {
      const expected =
        Math.pow(
          result.projections.FY3.base / result.base_year.revenue,
          1 / 3,
        ) - 1;
      expect(result.cagr_3y.base).toBeCloseTo(expected, 10);
    }
  });

  it("ranks by the composite score, then growth", () => {
    const rows = rankResults(dataset.results);
    expect(rows).toHaveLength(dataset.results.length);
    for (let index = 1; index < rows.length; index += 1) {
      const previous = rows[index - 1].compositeScore ?? -1;
      const current = rows[index].compositeScore ?? -1;
      expect(previous).toBeGreaterThanOrEqual(current);
    }
    expect(rows[0].rank).toBe(1);
  });

  it("exports the ranked table as CSV", () => {
    const rows = rankResults(dataset.results);
    const csv = resultsToCsv(rows, 88);
    expect(csv.split("\n")[0]).toContain("forward_cagr_base");
    expect(csv).toContain(rows[0].ticker);
  });
});
