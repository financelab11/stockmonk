import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { RESEARCH_TICKERS } from "@/config/universe";
import {
  consensusSchema,
  segmentMixSchema,
  tickerDataSchema,
  universeEntrySchema,
} from "@/lib/schemas";

const ROOT = process.cwd();

function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

describe("data integrity", () => {
  it("publishes 68 validated universe entries with 10 research names", () => {
    const entries = readJson<unknown[]>(
      path.join(ROOT, "public", "data", "stocks.json"),
    );
    expect(entries).toHaveLength(68);
    const parsed = entries.map((entry) => universeEntrySchema.parse(entry));
    expect(parsed.filter((entry) => entry.isResearch)).toHaveLength(10);
    expect(parsed.every((entry) => entry.price != null && entry.marketCap != null)).toBe(true);
    expect(parsed.find((entry) => entry.ticker === "GOOGL")?.isResearch).toBe(true);
  });

  it("validates every processed company and its headline fundamentals", () => {
    for (const ticker of ["NVDA", "MSFT", "AAPL", "GOOGL", "AMZN", "META", "AVGO", "TSLA", "LLY", "JPM"]) {
      const data = tickerDataSchema.parse(
        readJson(path.join(ROOT, "data", "processed", ticker, "data.json")),
      );
      expect(data.ticker).toBe(ticker);
      expect(data.metrics.revenueTtm).toBeGreaterThan(0);
      expect(data.latestPrice.close).toBeGreaterThan(0);
      expect(data.quarterly.length).toBeGreaterThan(4);
      expect(data.annual.length).toBeGreaterThan(2);
      expect(data.factorChips.length).toBeGreaterThanOrEqual(5);
    }
  });

  it("has consensus, segment and price files for every research ticker", () => {
    for (const ticker of RESEARCH_TICKERS) {
      const consensus = consensusSchema.parse(
        readJson(path.join(ROOT, "data", "consensus", `${ticker}.json`)),
      );
      expect(consensus.ticker).toBe(ticker);
      expect(consensus.analystCount).toBeGreaterThan(0);
      expect(consensus.estimates.length).toBeGreaterThan(0);

      const segments = segmentMixSchema.parse(
        readJson(path.join(ROOT, "data", "segments", `${ticker}.json`)),
      );
      expect(segments.ticker).toBe(ticker);
      expect(segments.segments.length).toBeGreaterThan(1);
      const share = segments.segments.reduce((sum, slice) => sum + slice.share, 0);
      expect(share).toBeCloseTo(1, 1);

      for (const range of ["1M", "3M", "6M", "YTD", "1Y", "5Y", "MAX"]) {
        const prices = readJson<unknown[]>(
          path.join(ROOT, "public", "data", "prices", ticker, `${range}.json`),
        );
        expect(prices.length).toBeGreaterThan(1);
        expect(prices.length).toBeLessThanOrEqual(600);
      }
    }
  });

  it("keeps the META consensus file from colliding with a meta summary", () => {
    const consensus = consensusSchema.parse(
      readJson(path.join(ROOT, "data", "consensus", "META.json")),
    );
    expect(consensus.ticker).toBe("META");
    expect(fs.existsSync(path.join(ROOT, "data", "consensus", "_meta.json"))).toBe(true);
  });

  it("has a filing URL for every narrative story", () => {
    const files = fs.readdirSync(path.join(ROOT, "content", "stocks"));
    expect(files.filter((file) => /^[A-Z]+\.ts$/.test(file))).toHaveLength(10);
  });
});
