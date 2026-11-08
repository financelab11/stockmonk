import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { INDIA_TICKERS } from "@/config/india-coverage";
import { consensusSchema, tickerDataSchema, universeEntrySchema } from "@/lib/schemas";

const ROOT = process.cwd();

function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

describe("India data integrity", () => {
  it("publishes 100 validated India universe entries", () => {
    const entries = readJson<unknown[]>(
      path.join(ROOT, "public", "data", "india", "stocks.json"),
    );
    expect(entries).toHaveLength(100);
    const parsed = entries.map((entry) => universeEntrySchema.parse(entry));
    expect(parsed.every((entry) => entry.isResearch)).toBe(true);
    expect(parsed.every((entry) => entry.market === "IN")).toBe(true);
    expect(parsed.every((entry) => entry.currency === "INR")).toBe(true);
    expect(parsed.every((entry) => entry.price != null && entry.price > 0)).toBe(true);
    expect(parsed.every((entry) => entry.marketCap != null && entry.marketCap > 0)).toBe(true);
  });

  it("validates every processed India company and its fundamentals", () => {
    for (const ticker of INDIA_TICKERS) {
      const data = tickerDataSchema.parse(
        readJson(path.join(ROOT, "data", "india", "processed", ticker, "data.json")),
      );
      expect(data.ticker, ticker).toBe(ticker);
      expect(data.currency, ticker).toBe("INR");
      expect(data.latestPrice.close, ticker).toBeGreaterThan(0);
      expect(data.latestPrice.marketCap, ticker).toBeGreaterThan(0);
      expect(data.metrics.revenueTtm, ticker).not.toBeNull();
      expect(data.metrics.revenueTtm ?? 0, ticker).toBeGreaterThan(0);
      expect(data.annual.length, ticker).toBeGreaterThanOrEqual(2);
      expect(data.quarterly.length, ticker).toBeGreaterThanOrEqual(4);
      expect(data.factorChips.length, ticker).toBeGreaterThanOrEqual(5);
    }
  });

  it(
    "has price files for every India ticker",
    () => {
      for (const ticker of INDIA_TICKERS) {
        for (const range of ["1M", "3M", "6M", "YTD", "1Y", "5Y", "MAX"]) {
          const prices = readJson<unknown[]>(
            path.join(ROOT, "public", "data", "india", "prices", ticker, `${range}.json`),
          );
          expect(prices.length, `${ticker} ${range}`).toBeGreaterThan(1);
          expect(prices.length).toBeLessThanOrEqual(600);
        }
      }
    },
    60_000,
  );

  it("writes only validated India consensus files", () => {
    for (const ticker of INDIA_TICKERS) {
      const file = path.join(ROOT, "data", "india", "consensus", `${ticker}.json`);
      if (!fs.existsSync(file)) continue;
      const consensus = consensusSchema.parse(readJson(file));
      expect(consensus.ticker).toBe(ticker);
    }
  });

  it("has a story file for every India ticker", () => {
    const files = fs.readdirSync(path.join(ROOT, "content", "india-stocks"));
    for (const ticker of INDIA_TICKERS) {
      expect(files, ticker).toContain(`${ticker}.ts`);
    }
  });
});
