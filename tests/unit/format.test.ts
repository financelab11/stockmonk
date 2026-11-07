import { describe, expect, it } from "vitest";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatMultiple,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";

describe("format helpers", () => {
  it("formats compact currency with magnitude suffixes", () => {
    expect(formatCompactCurrency(4_498_024_000_000)).toBe("$4.5T");
    expect(formatCompactCurrency(302_969_000_000)).toBe("$303B");
    expect(formatCompactCurrency(-46_900_000_000)).toBe("-$46.9B");
    expect(formatCompactCurrency(1_250_000)).toBe("$1.3M");
    expect(formatCompactCurrency(null)).toBe("n/a");
  });

  it("formats prices and multiples", () => {
    expect(formatCurrency(186.64)).toBe("$186.64");
    expect(formatCurrency(null)).toBe("n/a");
    expect(formatMultiple(22.0207)).toBe("22.0x");
    expect(formatMultiple(null)).toBe("n/a");
  });

  it("formats percentages and signed percentages", () => {
    expect(formatPercent(0.6521)).toBe("65.2%");
    expect(formatPercent(-0.12)).toBe("-12.0%");
    expect(formatSignedPercent(0.052)).toBe("+5.2%");
    expect(formatSignedPercent(-0.197)).toBe("-19.7%");
  });

  it("formats dates without timezone drift", () => {
    expect(formatDate("2026-11-06")).toBe("Nov 6, 2026");
    expect(formatDate(null)).toBe("n/a");
  });
});
