import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { CORE_RESEARCH_TICKERS, RESEARCH_TICKERS } from "@/config/universe";
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
  it("publishes 229 validated universe entries, all research names", () => {
    const entries = readJson<unknown[]>(
      path.join(ROOT, "public", "data", "stocks.json"),
    );
    expect(entries).toHaveLength(RESEARCH_TICKERS.length);
    expect(entries).toHaveLength(229);
    const parsed = entries.map((entry) => universeEntrySchema.parse(entry));
    expect(parsed.filter((entry) => entry.isResearch)).toHaveLength(229);
    expect(
      parsed.every((entry) => entry.price != null && entry.marketCap != null),
    ).toBe(true);
    expect(parsed.find((entry) => entry.ticker === "GOOGL")?.isResearch).toBe(
      true,
    );
    expect(parsed.find((entry) => entry.ticker === "CAVA")?.isResearch).toBe(
      true,
    );
  });

  it("validates every processed company and its headline fundamentals", () => {
    for (const ticker of RESEARCH_TICKERS) {
      const data = tickerDataSchema.parse(
        readJson(path.join(ROOT, "data", "processed", ticker, "data.json")),
      );
      expect(data.ticker).toBe(ticker);
      expect(data.metrics.revenueTtm, ticker).not.toBeNull();
      expect(data.metrics.revenueTtm, ticker).toBeGreaterThanOrEqual(0);
      expect(data.latestPrice.close, ticker).toBeGreaterThan(0);
      expect(data.annual.length, ticker).toBeGreaterThan(0);
      expect(data.factorChips.length, ticker).toBeGreaterThanOrEqual(5);
    }
  }, 60_000);

  it("has price files for every research ticker", () => {
    for (const ticker of RESEARCH_TICKERS) {
      for (const range of ["1M", "3M", "6M", "YTD", "1Y", "5Y", "MAX"]) {
        const prices = readJson<unknown[]>(
          path.join(ROOT, "public", "data", "prices", ticker, `${range}.json`),
        );
        expect(prices.length, `${ticker} ${range}`).toBeGreaterThan(1);
        expect(prices.length).toBeLessThanOrEqual(600);
      }
    }
  }, 60_000);

  it("has consensus and segment files for the core research tickers", () => {
    for (const ticker of CORE_RESEARCH_TICKERS) {
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
      const share = segments.segments.reduce(
        (sum, slice) => sum + slice.share,
        0,
      );
      expect(share).toBeCloseTo(1, 1);
    }
  });

  it("writes only validated consensus files for expanded names", () => {
    const dir = path.join(ROOT, "data", "consensus");
    for (const ticker of RESEARCH_TICKERS) {
      const file = path.join(dir, `${ticker}.json`);
      if (!fs.existsSync(file)) continue;
      const consensus = consensusSchema.parse(readJson(file));
      expect(consensus.ticker).toBe(ticker);
    }
  });

  it("keeps the META consensus file from colliding with a meta summary", () => {
    const consensus = consensusSchema.parse(
      readJson(path.join(ROOT, "data", "consensus", "META.json")),
    );
    expect(consensus.ticker).toBe("META");
    expect(
      fs.existsSync(path.join(ROOT, "data", "consensus", "_meta.json")),
    ).toBe(true);
  });

  it("has a story file for every research ticker", () => {
    const files = fs.readdirSync(path.join(ROOT, "content", "stocks"));
    for (const ticker of RESEARCH_TICKERS) {
      expect(files, ticker).toContain(`${ticker}.ts`);
    }
    for (const ticker of CORE_RESEARCH_TICKERS) {
      expect(files, ticker).toContain(`${ticker}.ts`);
    }
  });
});
