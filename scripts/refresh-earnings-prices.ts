/**
 * Refreshes 1Y returns for the India earnings tracker from Yahoo Finance.
 *
 * For every tracker company it pulls one year of daily closes (NSE first, BSE
 * fallback), measures the price change from the close a year ago to the latest
 * close, and writes `data/india/earnings-prices.json`. Run after the Indian
 * close; `pnpm build:earnings` merges the result into the tracker.
 *
 * Run: pnpm refresh:earnings-prices
 *      PRICE_LIMIT=25 pnpm refresh:earnings-prices
 */
import fs from "node:fs";
import path from "node:path";
import { yahooChart } from "../lib/yahoo";

const SOURCE = path.join(process.cwd(), "data", "india", "screener-earnings.json");
const OUT = path.join(process.cwd(), "data", "india", "earnings-prices.json");
const CACHE = path.join(process.cwd(), "data", "india", ".price-cache");
const DELAY_MS = Number(process.env.PRICE_DELAY_MS ?? "110");
const LIMIT = Number(process.env.PRICE_LIMIT ?? "0");
const TODAY = new Date().toISOString().slice(0, 10);
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type PriceRow = {
  ticker: string;
  symbol: string;
  price: number;
  asOf: string;
  baseDate: string;
  baseClose: number;
  return1y: number;
};

type Cached = { fetchedAt: string; data: PriceRow | null };

function readTickers(): string[] {
  try {
    const parsed = JSON.parse(fs.readFileSync(SOURCE, "utf8")) as {
      rows?: Array<{ ticker?: string }>;
    };
    return [...new Set((parsed.rows ?? []).map((row) => row.ticker).filter(Boolean))] as string[];
  } catch {
    return [];
  }
}

function cacheFile(ticker: string): string {
  const safe = ticker.replace(/[^A-Za-z0-9._-]/g, "_");
  return path.join(CACHE, `${safe}.json`);
}

function readCache(ticker: string): Cached | null {
  try {
    const parsed = JSON.parse(fs.readFileSync(cacheFile(ticker), "utf8")) as Cached;
    return parsed.fetchedAt === TODAY ? parsed : null;
  } catch {
    return null;
  }
}

function writeCache(ticker: string, data: PriceRow | null) {
  fs.mkdirSync(CACHE, { recursive: true });
  fs.writeFileSync(cacheFile(ticker), JSON.stringify({ fetchedAt: TODAY, data }), "utf8");
}

function symbolsFor(ticker: string): string[] {
  // BSE-only companies are keyed by their numeric scrip code.
  if (/^\d+$/.test(ticker)) return [`${ticker}.BO`];
  return [`${ticker}.NS`, `${ticker}.BO`];
}

function computeReturn(
  points: Array<{ d: string; c: number }>,
): Omit<PriceRow, "ticker" | "symbol"> | null {
  const series = points.filter((point) => Number.isFinite(point.c) && point.c > 0);
  if (series.length < 60) return null;
  const latest = series.at(-1);
  if (!latest) return null;

  const target = new Date(`${latest.d}T00:00:00Z`);
  target.setUTCFullYear(target.getUTCFullYear() - 1);
  const targetDate = target.toISOString().slice(0, 10);

  // Last trading day on or before the one-year anniversary.
  const base = [...series].reverse().find((point) => point.d <= targetDate);
  if (!base) return null;

  const days = (Date.parse(`${latest.d}T00:00:00Z`) - Date.parse(`${base.d}T00:00:00Z`)) / 86_400_000;
  if (days < 300) return null;

  return {
    price: latest.c,
    asOf: latest.d,
    baseDate: base.d,
    baseClose: base.c,
    return1y: (latest.c - base.c) / base.c,
  };
}

async function fetchReturn(ticker: string): Promise<PriceRow | null> {
  for (const symbol of symbolsFor(ticker)) {
    // Two years of closes so the year-ago trading day is always in range.
    const chart = await yahooChart(symbol, "2y");
    if (!chart || chart.points.length < 60) continue;
    const computed = computeReturn(chart.points);
    if (!computed) continue;
    return { ticker, symbol, ...computed };
  }
  return null;
}

async function main() {
  const tickers = readTickers();
  const limited = LIMIT > 0 ? tickers.slice(0, LIMIT) : tickers;
  console.log(`[prices] ${limited.length} tickers, delay ${DELAY_MS}ms`);

  const rows: PriceRow[] = [];
  let resolved = 0;
  for (const [index, ticker] of limited.entries()) {
    const cached = readCache(ticker);
    let row = cached ? cached.data : null;
    if (!cached) {
      try {
        row = await fetchReturn(ticker);
      } catch (error) {
        console.warn(`[prices] ${ticker} failed: ${String(error)}`);
        row = null;
      }
      writeCache(ticker, row);
      await sleep(DELAY_MS);
    }
    if (row) {
      rows.push(row);
      resolved += 1;
    }
    if ((index + 1) % 100 === 0 || index === limited.length - 1) {
      console.log(`[prices] ${index + 1}/${limited.length} · resolved ${resolved}`);
    }
  }

  const asOf =
    rows
      .map((row) => row.asOf)
      .sort()
      .at(-1) ?? null;

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify({ generatedAt: new Date().toISOString(), asOf, rows }),
  );
  console.log(`[prices] wrote ${rows.length}/${limited.length} rows to ${OUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
