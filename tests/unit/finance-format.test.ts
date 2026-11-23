import { describe, expect, it } from "vitest";
import {
  changeTint,
  formatMetricValue,
  isPercentageChangeMetric,
  isRatioOrPerShareMetric,
  parseMetricValue,
} from "@/lib/finance-format";

describe("formatMetricValue", () => {
  it("rounds large monetary figures to whole crore", () => {
    expect(formatMetricValue("375.51", "Revenue From Operations [Gross]")).toBe(
      "376",
    );
    expect(formatMetricValue("135.59", "Total Revenue")).toBe("136");
    expect(formatMetricValue("247.17", "Reserves and Surplus")).toBe("247");
    expect(formatMetricValue("12.78", "No. of Equity Shares")).toBe("13");
  });

  it("keeps decimals for small monetary line items", () => {
    expect(formatMetricValue("3.59", "Employee Benefit Expenses")).toBe("3.59");
    expect(formatMetricValue("1.29", "Finance Costs")).toBe("1.29");
    expect(formatMetricValue("9.99", "Other Expenses")).toBe("9.99");
  });

  it("keeps decimals for per-share figures", () => {
    expect(formatMetricValue("15.41", "Basic EPS (Rs.)")).toBe("15.41");
    expect(formatMetricValue("39.97", "Book Value/Share (INR)")).toBe("39.97");
    expect(formatMetricValue("12.4", "Diluted EPS (Rs.)")).toBe("12.4");
  });

  it("keeps decimals for percentages, ratios and multiples", () => {
    expect(formatMetricValue("83.37", "Return On Equity (%)")).toBe("83.37");
    expect(formatMetricValue("110.17", "Return On Capital Employed (%)")).toBe(
      "110.17",
    );
    expect(formatMetricValue("0.5", "Current Ratio (X)")).toBe("0.5");
    expect(formatMetricValue("45.72", "P/E ratio")).toBe("45.72");
  });

  it("does not pad whole percentages with decimals", () => {
    expect(formatMetricValue("23", "Sales % Chg")).toBe("23");
    expect(formatMetricValue("94", "EBIT % Chg")).toBe("94");
  });

  it("uses accounting parentheses for negatives", () => {
    expect(
      formatMetricValue("-62.78", "Net Cash Used In Investing Activity"),
    ).toBe("(63)");
    expect(
      formatMetricValue("-0.60", "Net Cash Used in Finance Activity"),
    ).toBe("(0.6)");
    expect(formatMetricValue("-4.63", "EBIT Margin (%)")).toBe("(4.63)");
  });

  it("renders zero and missing values", () => {
    expect(formatMetricValue("0.00", "Other Operating Revenues")).toBe("0");
    expect(formatMetricValue("—", "Other Income")).toBe("—");
    expect(formatMetricValue("", "Other Income")).toBe("—");
  });

  it("leaves non-numeric cells untouched", () => {
    expect(formatMetricValue("n/a", "Other Income")).toBe("n/a");
  });
});

describe("isRatioOrPerShareMetric", () => {
  it("classifies ratio and per-share labels", () => {
    expect(isRatioOrPerShareMetric("EBIT Margin (%)")).toBe(true);
    expect(isRatioOrPerShareMetric("BasicEPS")).toBe(true);
    expect(isRatioOrPerShareMetric("Book Value/Share (INR)")).toBe(true);
    expect(isRatioOrPerShareMetric("EVPerEBITDA")).toBe(true);
    expect(isRatioOrPerShareMetric("CashEarningRetention")).toBe(true);
  });

  it("leaves monetary and count labels alone", () => {
    expect(isRatioOrPerShareMetric("Total Revenue")).toBe(false);
    expect(isRatioOrPerShareMetric("No. of Equity Shares")).toBe(false);
    expect(isRatioOrPerShareMetric("Net Income (Cr)")).toBe(false);
    expect(isRatioOrPerShareMetric("Trade Payables")).toBe(false);
  });
});

describe("parseMetricValue", () => {
  it("parses both negative conventions without double negation", () => {
    expect(parseMetricValue("-25")).toBe(-25);
    expect(parseMetricValue("-62.78")).toBe(-62.78);
    expect(parseMetricValue("(25)")).toBe(-25);
    expect(parseMetricValue("(0.6)")).toBe(-0.6);
    expect(parseMetricValue("16.96")).toBe(16.96);
    expect(parseMetricValue("1300")).toBe(1300);
  });

  it("returns null for empty and placeholder cells", () => {
    expect(parseMetricValue("—")).toBeNull();
    expect(parseMetricValue("")).toBeNull();
    expect(parseMetricValue("-")).toBeNull();
  });

  it("keeps parentheses formatting for negative percentages", () => {
    expect(formatMetricValue("(25)", "Sales % Chg")).toBe("(25)");
    expect(
      formatMetricValue("-62.78", "Net Cash Used In Investing Activity"),
    ).toBe("(63)");
  });
});

describe("isPercentageChangeMetric", () => {
  it("matches change rows", () => {
    expect(isPercentageChangeMetric("Sales % Chg")).toBe(true);
    expect(isPercentageChangeMetric("NI % Chg")).toBe(true);
    expect(isPercentageChangeMetric("EBIT % Chg")).toBe(true);
    expect(isPercentageChangeMetric("BasicEPS % Chg")).toBe(true);
    expect(isPercentageChangeMetric("Pretax Income % Chg")).toBe(true);
  });

  it("leaves levels and margins alone", () => {
    expect(isPercentageChangeMetric("EBIT Margin (%)")).toBe(false);
    expect(isPercentageChangeMetric("Sales (Cr)")).toBe(false);
    expect(isPercentageChangeMetric("Return On Equity (%)")).toBe(false);
  });
});

describe("changeTint", () => {
  it("returns green for gains and red for losses", () => {
    expect(changeTint(23)).toMatch(/^rgb\(13 107 77 \//);
    expect(changeTint(-18)).toMatch(/^rgb\(198 47 62 \//);
  });

  it("scales with the size of the move and stays light", () => {
    const small = Number(changeTint(5)?.match(/([0-9.]+)\)$/)?.[1]);
    const large = Number(changeTint(300)?.match(/([0-9.]+)\)$/)?.[1]);
    expect(small).toBeGreaterThanOrEqual(0.08);
    expect(large).toBeGreaterThan(small);
    expect(large).toBeLessThanOrEqual(0.28);
  });

  it("returns nothing for zero or missing values", () => {
    expect(changeTint(0)).toBeUndefined();
    expect(changeTint(Number.NaN)).toBeUndefined();
  });
});
