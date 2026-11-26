/**
 * Builds `config/score-universe.json` from a ticker list or from the Nasdaq
 * listed-stock snapshot.
 *
 * Preferred input: a CSV or TXT file with one ticker in the first column.
 *   SCORE_UNIVERSE_FILE=config/score-universe.csv pnpm build:universe
 *
 * Fallback: the largest US-listed common stocks in the Nasdaq snapshot.
 *   SCORE_UNIVERSE_LIMIT=3696 pnpm build:universe
 *
 * The JSON is the only file the app reads. Swapping the source list never
 * requires a code change.
 */
import fs from "node:fs";
import path from "node:path";
import { RESEARCH_TICKERS } from "../config/universe";

const OUT = path.join(process.cwd(), "config", "score-universe.json");
const NASDAQ_URL =
  "https://api.nasdaq.com/api/screener/stocks?tableonly=true&limit=10000&offset=0&download=true";

type NasdaqRow = {
  symbol: string;
  name: string;
  marketCap: string;
  sector?: string;
  industry?: string;
  country?: string;
};

type Entry = {
  ticker: string;
  name?: string;
  exchange?: string | null;
  sector?: string;
  industry?: string;
  marketCap?: number | null;
};

function normalizeTicker(raw: string): string | null {
  const ticker = raw
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/\//g, ".")
    .replace(/\^/g, ".");
  if (!ticker) return null;
  if (!/^[A-Z][A-Z0-9.]{0,9}$/.test(ticker)) return null;
  return ticker;
}

function readSourceFile(file: string): string[] {
  const text = fs.readFileSync(file, "utf8");
  const rows = text.split(/\r?\n/);
  const tickers: string[] = [];
  for (const row of rows) {
    const first = row.split(/[,\t;]/)[0]?.trim();
    if (!first) continue;
    if (/^(ticker|symbol|code)$/i.test(first)) continue;
    const ticker = normalizeTicker(first);
    if (ticker) tickers.push(ticker);
  }
  return tickers;
}

const BAD_NAME =
  /\b(warrant|warrants|unit|units|preferred|preference|notes?|rights?|etf|exchange traded|closed-end|fund|trust|acquisition corp|blank check|spac)\b/i;

async function readNasdaq(limit: number): Promise<Entry[]> {
  const response = await fetch(NASDAQ_URL, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  if (!response.ok) {
    throw new Error(`Nasdaq screener returned ${response.status}`);
  }
  const json = (await response.json()) as {
    data: { rows: NasdaqRow[] };
  };
  const rows = json.data.rows
    .map((row) => ({
      rawSymbol: row.symbol,
      ticker: normalizeTicker(row.symbol),
      name: row.name,
      marketCap: Number(String(row.marketCap).replace(/[^0-9.]/g, "")),
      sector: row.sector,
      industry: row.industry,
    }))
    .filter(
      (row): row is typeof row & { ticker: string } =>
        Boolean(row.ticker) && Number.isFinite(row.marketCap) && row.marketCap > 0,
    )
    .filter((row) => !BAD_NAME.test(row.name))
    // The research library is always included separately. The generated file
    // only carries the additional score-only names.
    .filter((row) => !RESEARCH_TICKERS.includes(row.ticker))
    .sort((a, b) => b.marketCap - a.marketCap);

  return rows.slice(0, limit).map((row) => ({
    ticker: row.ticker,
    name: row.name,
    exchange: null,
    sector: row.sector,
    industry: row.industry,
    marketCap: row.marketCap,
  }));
}

async function enrich(tickers: string[]): Promise<Entry[]> {
  const response = await fetch(NASDAQ_URL, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  if (!response.ok) return tickers.map((ticker) => ({ ticker }));
  const json = (await response.json()) as { data: { rows: NasdaqRow[] } };
  const byTicker = new Map<string, NasdaqRow>();
  for (const row of json.data.rows) {
    const ticker = normalizeTicker(row.symbol);
    if (ticker) byTicker.set(ticker, row);
  }
  return tickers.map((ticker) => {
    const row = byTicker.get(ticker);
    if (!row) return { ticker };
    return {
      ticker,
      name: row.name,
      exchange: null,
      sector: row.sector,
      industry: row.industry,
      marketCap: Number(String(row.marketCap).replace(/[^0-9.]/g, "")) || null,
    };
  });
}

async function main() {
  const source = process.env.SCORE_UNIVERSE_FILE?.trim();
  const limit = Number(
    process.env.SCORE_UNIVERSE_LIMIT ?? Math.max(0, 3696 - RESEARCH_TICKERS.length),
  );
  let entries: Entry[];
  if (source) {
    const file = path.isAbsolute(source) ? source : path.join(process.cwd(), source);
    const tickers = [...new Set(readSourceFile(file))];
    console.log(`[universe] read ${tickers.length} unique tickers from ${file}`);
    entries = await enrich(tickers);
  } else {
    entries = await readNasdaq(limit);
    console.log(
      `[universe] selected the largest ${entries.length} common stocks from the Nasdaq snapshot`,
    );
  }
  if (!entries.length) throw new Error("No tickers found");
  fs.writeFileSync(OUT, `${JSON.stringify(entries, null, 2)}\n`, "utf8");
  console.log(`[universe] wrote ${entries.length} entries to ${OUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
