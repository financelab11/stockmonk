import { describe, expect, it } from "vitest";
import {
  computeCagr,
  latestQuarterYoY,
  percentileRank,
  rangePosition,
  sparklinePoints,
} from "@/lib/analytics";
import type { FinancialRow, RangePricePoint, TickerData } from "@/lib/schemas";

function annual(fyear: number, revenue: number): FinancialRow {
  return { fyear, revenue, ttm: false } as unknown as FinancialRow;
}

function quarter(period: string, fyear: number, revenue: number): FinancialRow {
  return { period, fyear, revenue, ttm: false } as unknown as FinancialRow;
}

describe("analytics", () => {
  it("computes percentile ranks from the empirical distribution", () => {
    expect(percentileRank([10, 20, 30, 40], 30)).toBe(75);
    expect(percentileRank([10, 20, 30, 40], 0)).toBe(0);
    expect(percentileRank([10, 20, 30, 40], 50)).toBe(100);
    expect(percentileRank([], 10)).toBe(50);
  });

  it("computes revenue CAGR from annual periods", () => {
    const rows = [annual(2020, 100), annual(2024, 200)];
    const cagr = computeCagr(rows);
    expect(cagr).not.toBeNull();
    expect(cagr ?? 0).toBeCloseTo(Math.pow(2, 1 / 4) - 1, 6);
    expect(computeCagr([annual(2024, 200)])).toBeNull();
  });

  it("computes latest quarter growth against the same fiscal quarter", () => {
    const data = {
      quarterly: [
        quarter("Q1", 2025, 100),
        quarter("Q2", 2025, 110),
        quarter("Q1", 2026, 120),
        quarter("Q2", 2026, 132),
      ],
    } as TickerData;
    expect(latestQuarterYoY(data)).toBeCloseTo(0.2, 6);
  });

  it("computes 52-week range position", () => {
    expect(rangePosition(75, 50, 100)).toBeCloseTo(0.5, 6);
    expect(rangePosition(120, 50, 100)).toBe(1);
    expect(rangePosition(20, 50, 100)).toBe(0);
    expect(rangePosition(null, 50, 100)).toBeNull();
  });

  it("renders a sparkline path", () => {
    const points: RangePricePoint[] = [
      { t: 1767225600, o: 10, h: 11, l: 9, c: 10, v: 100 },
      { t: 1767312000, o: 11, h: 12, l: 10, c: 12, v: 100 },
    ];
    const path = sparklinePoints(points, 100, 20);
    expect(path.startsWith("M")).toBe(true);
    expect(path).toContain("L");
    expect(path).toContain("100.00");
  });
});
