/**
 * One-off ingestion for the forward-growth universe.
 *
 * Universe: top 300 Indian companies by market cap in the Refinitiv workbook.
 * Symbol resolution: Yahoo Finance search, preferring NSE.
 * Fundamentals: Screener.in.
 * Consensus/valuation: Yahoo Finance quoteSummary.
 *
 * Raw responses are cached under data/growth-ranker/raw (gitignored).
 */
import fs from "node:fs/promises";
import path from "node:path";
import { yahooQuoteSummary } from "../lib/yahoo";
import { fetchScreener } from "../lib/screener";

type RefinitivRow = {
  ric: string;
  name: string;
  sector: string;
  industry: string;
  marketCapMInr: number;
  forwardRevenueGrowth: number | null;
};

const ROOT = path.join(process.cwd(), "data", "growth-ranker");
const RAW = path.join(ROOT, "raw");
const INPUT = path.join(ROOT, "refinitiv-top.json");
const FORCE = process.env.FORCE_REFRESH === "1";
const LIMIT = Number(process.env.GR_LIMIT ?? 300);
const MODULES =
  "price,summaryDetail,financialData,defaultKeyStatistics,earningsTrend";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function yahooSearch(name: string): Promise<string | null> {
  const url = `https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(
    name,
  )}&quotesCount=8&newsCount=0`;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: AbortSignal.timeout(30_000),
      });
      if (!response.ok) throw new Error(`search ${response.status}`);
      const json = (await response.json()) as {
        quotes?: Array<{ symbol?: string; exchange?: string; quoteType?: string }>;
      };
      const quotes = (json.quotes ?? []).filter(
        (quote) => quote.quoteType === "EQUITY" && quote.symbol,
      );
      const nse = quotes.find(
        (quote) => quote.exchange === "NSI" || quote.symbol?.endsWith(".NS"),
      );
      const bse = quotes.find((quote) => quote.symbol?.endsWith(".BO"));
      return nse?.symbol ?? bse?.symbol ?? null;
    } catch {
      await sleep(500 * (attempt + 1));
    }
  }
  return null;
}

async function loadOne(row: RefinitivRow): Promise<"ok" | "skipped"> {
  const slug = row.ric.replace(/\.(NS|BO)$/i, "").replace(/[^A-Z0-9]/gi, "_");
  const file = path.join(RAW, `${slug}.json`);
  if (!FORCE) {
    try {
      await fs.access(file);
      return "ok";
    } catch {
      // not cached
    }
  }

  const symbol =
    (await yahooSearch(row.name)) ??
    `${row.ric.replace(/\.(NS|BO)$/i, "")}.NS`;
  if (!symbol) return "skipped";
  const stem = symbol.replace(/\.(NS|BO)$/i, "");

  const [screener, summary] = await Promise.all([
    fetchScreener(stem),
    yahooQuoteSummary(symbol, MODULES).catch(() => null),
  ]);
  if (!screener && !summary) return "skipped";

  await fs.writeFile(
    file,
    JSON.stringify(
      {
        refinitiv: row,
        symbol,
        stem,
        fetchedAt: new Date().toISOString(),
        screener,
        summary,
      },
      null,
      0,
    ),
    "utf8",
  );
  return "ok";
}

async function main() {
  await fs.mkdir(RAW, { recursive: true });
  const universe = JSON.parse(await fs.readFile(INPUT, "utf8")) as RefinitivRow[];
  const rows = universe.slice(0, LIMIT);
  let cursor = 0;
  let ok = 0;
  let skipped = 0;
  const workers = 4;

  await Promise.all(
    Array.from({ length: workers }, async () => {
      while (cursor < rows.length) {
        const index = cursor;
        cursor += 1;
        const row = rows[index];
        try {
          const result = await loadOne(row);
          if (result === "ok") ok += 1;
          else skipped += 1;
        } catch (error) {
          skipped += 1;
          console.warn(`[gr] ${row.ric} failed`, error instanceof Error ? error.message : error);
        }
        if ((ok + skipped) % 20 === 0) {
          console.log(`[gr] ${ok + skipped}/${rows.length} processed · ${ok} ok · ${skipped} skipped`);
        }
      }
    }),
  );
  console.log(`[gr] done · ${ok} ok · ${skipped} skipped`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
