import { describe, expect, it } from "vitest";
import { formatMetricValue, isRatioOrPerShareMetric } from "@/lib/finance-format";

describe("formatMetricValue", () => {
  it("rounds large monetary figures to whole crore", () => {
    expect(formatMetricValue("375.51", "Revenue From Operations [Gross]")).toBe("376");
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
    expect(formatMetricValue("110.17", "Return On Capital Employed (%)")).toBe("110.17");
    expect(formatMetricValue("0.5", "Current Ratio (X)")).toBe("0.5");
    expect(formatMetricValue("45.72", "P/E ratio")).toBe("45.72");
  });

  it("does not pad whole percentages with decimals", () => {
    expect(formatMetricValue("23", "Sales % Chg")).toBe("23");
    expect(formatMetricValue("94", "EBIT % Chg")).toBe("94");
  });

  it("uses accounting parentheses for negatives", () => {
    expect(formatMetricValue("-62.78", "Net Cash Used In Investing Activity")).toBe("(63)");
    expect(formatMetricValue("-0.60", "Net Cash Used in Finance Activity")).toBe("(0.6)");
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
