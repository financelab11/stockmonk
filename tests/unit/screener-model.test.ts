import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { CORE_RESEARCH_TICKERS } from "@/config/universe";
import {
  consensusSchema,
  rangePricePointSchema,
  tickerDataSchema,
} from "@/lib/schemas";
import {
  buildScreenerRows,
  FACTOR_CONFIG,
  formatParameterValue,
} from "@/lib/screener-model";

const ROOT = process.cwd();

function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(file, "utf8")) as T;
}

function bundleFor(ticker: string) {
  return {
    data: tickerDataSchema.parse(
      readJson(path.join(ROOT, "data", "processed", ticker, "data.json")),
    ),
    consensus: consensusSchema.parse(
      readJson(path.join(ROOT, "data", "consensus", `${ticker}.json`)),
    ),
    prices: readJson<unknown[]>(
      path.join(ROOT, "public", "data", "prices", ticker, "1Y.json"),
    ).map((point) => rangePricePointSchema.parse(point)),
    pricesMax: readJson<unknown[]>(
      path.join(ROOT, "public", "data", "prices", ticker, "MAX.json"),
    ).map((point) => rangePricePointSchema.parse(point)),
  };
}

describe("five-factor screener model", () => {
  it("uses factor weights that sum to one", () => {
    const total = FACTOR_CONFIG.reduce((sum, factor) => sum + factor.weight, 0);
    expect(total).toBeCloseTo(1, 5);
  });

  it("scores and ranks the core universe", () => {
    const benchmark = readJson<unknown[]>(
      path.join(ROOT, "public", "data", "prices", "SPY", "MAX.json"),
    ).map((point) => rangePricePointSchema.parse(point));
    const rows = buildScreenerRows(
      CORE_RESEARCH_TICKERS.map((ticker) => bundleFor(ticker)),
      benchmark,
    );

    expect(rows).toHaveLength(CORE_RESEARCH_TICKERS.length);
    expect(new Set(rows.map((row) => row.rank)).size).toBe(rows.length);
    expect(rows.every((row) => row.composite != null)).toBe(true);
    expect(
      rows.every(
        (row) =>
          (row.composite as number) >= 0 && (row.composite as number) <= 100,
      ),
    ).toBe(true);
    expect(rows.every((row) => row.coverage > 0)).toBe(true);
    for (const row of rows) {
      for (const factor of FACTOR_CONFIG) {
        const score = row.factors[factor.key].score;
        expect(
          score == null || (score >= 0 && score <= 100),
          `${row.ticker} ${factor.key}`,
        ).toBe(true);
      }
    }
  }, 60_000);

  it("formats parameter units consistently", () => {
    expect(formatParameterValue(0.123, "pct")).toBe("12.3%");
    expect(formatParameterValue(12.34, "x")).toBe("12.3x");
    expect(formatParameterValue(42, "days")).toBe("42d");
    expect(formatParameterValue(67.4, "score")).toBe("67");
    expect(formatParameterValue(null, "pct")).toBe("n/a");
  });
});
