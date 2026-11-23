/**
 * Refreshes US price history from Yahoo Finance for every research name.
 *
 * SimFin price files can lag by several days, so this pass merges the latest
 * Yahoo closes into each processed file, recomputes the price-dependent metrics
 * and rewrites the public range files.
 *
 * Run: pnpm refresh:prices
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });
loadEnv();
import fs from "node:fs/promises";
import path from "node:path";
import { RESEARCH_TICKERS, TICKER_ALIASES } from "../config/universe";
import {
  buildMultipleHistory,
  buildRangeFiles,
  computeMetrics,
} from "../lib/metrics";
import type { PricePoint, TickerData } from "../lib/schemas";
import { yahooChart, yahooQuoteSummary } from "../lib/yahoo";

const PROCESSED = path.join(process.cwd(), "data", "processed");
const PUBLIC_DATA = path.join(process.cwd(), "public", "data");
const DELAY_MS = Number(process.env.PRICE_DELAY_MS ?? 150);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const raw = (
  value: { raw?: number } | number | null | undefined,
): number | null => {
  if (value == null) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  return typeof value.raw === "number" && Number.isFinite(value.raw)
    ? value.raw
    : null;
};

async function readJson<T>(file: string): Promise<T | null> {
  try {
    return JSON.parse(await fs.readFile(file, "utf8")) as T;
  } catch {
    return null;
  }
}

async function main() {
  let updated = 0;
  let failed = 0;
  let newest = "";

  for (const ticker of RESEARCH_TICKERS) {
    const dataFile = path.join(PROCESSED, ticker, "data.json");
    const data = await readJson<TickerData>(dataFile);
    if (!data) continue;

    const symbol = TICKER_ALIASES[ticker]?.yahoo ?? ticker;
    try {
      const chart = await yahooChart(symbol, "10y");
      if (!chart?.points.length) {
        console.warn(`[prices] ${ticker}: no Yahoo history`);
        failed += 1;
        continue;
      }

      const summary = await yahooQuoteSummary(
        symbol,
        "price,summaryDetail,defaultKeyStatistics",
      ).catch(() => null);
      const quote = summary?.price;
      const detail = summary?.summaryDetail;
      const marketCap =
        raw(quote?.marketCap) ??
        raw(detail?.marketCap) ??
        (raw(quote?.regularMarketPrice) != null &&
        (raw(quote?.sharesOutstanding) ??
          raw(summary?.defaultKeyStatistics?.sharesOutstanding)) != null
          ? (raw(quote?.regularMarketPrice) as number) *
            (raw(quote?.sharesOutstanding) ??
              (raw(summary?.defaultKeyStatistics?.sharesOutstanding) as number))
          : null);

      const existing =
        (await readJson<PricePoint[]>(
          path.join(PROCESSED, ticker, "prices.json"),
        )) ?? [];
      const merged = new Map<string, PricePoint>();
      for (const point of existing) merged.set(point.d, point);
      for (const point of chart.points) merged.set(point.d, point);
      const prices = [...merged.values()].sort((a, b) =>
        a.d.localeCompare(b.d),
      );

      const last = prices[prices.length - 1];
      if (marketCap != null) last.mc = marketCap;
      const dividendYield = raw(detail?.dividendYield);
      if (dividendYield != null) last.dy = dividendYield;

      const computed = computeMetrics(data.quarterly, data.annual, prices);
      data.latestPrice = computed.snapshot;
      data.metrics = computed.metrics;
      data.multipleHistory = buildMultipleHistory(prices);
      data.updatedAt = new Date().toISOString();

      await fs.writeFile(
        path.join(PROCESSED, ticker, "prices.json"),
        JSON.stringify(prices),
        "utf8",
      );
      await fs.writeFile(dataFile, JSON.stringify(data, null, 2), "utf8");

      const dir = path.join(PUBLIC_DATA, "prices", ticker);
      await fs.mkdir(dir, { recursive: true });
      for (const [range, points] of Object.entries(
        buildRangeFiles(prices, ticker),
      )) {
        await fs.writeFile(
          path.join(dir, `${range}.json`),
          JSON.stringify(points),
          "utf8",
        );
      }

      updated += 1;
      if (data.latestPrice.asOf > newest) newest = data.latestPrice.asOf;
      if (updated % 25 === 0)
        console.log(`[prices] ${updated} updated (latest ${newest})`);
    } catch (error) {
      failed += 1;
      console.warn(
        `[prices] ${ticker}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
    await sleep(DELAY_MS);
  }

  console.log(
    `[prices] updated ${updated}, failed ${failed}, newest close ${newest}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
