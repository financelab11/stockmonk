/**
 * Resolves the supplied company-name universe to tickers.
 *
 * The source file is a market-cap-ordered list of company names. Most names
 * match the SEC ticker map exactly after legal-suffix normalisation. The rest
 * are resolved through Yahoo Finance search, with a manual override file for
 * the cases where the vendor uses a former name or a subsidiary.
 *
 * Inputs:
 *   SCORE_UNIVERSE_NAMES or D:\Tutorials\...\us stocks universe.txt
 *   data/raw/sec/company_tickers.json
 *   %TEMP%/stockmonk-universe/nasdaq-full.json
 *   config/score-universe-overrides.json (optional)
 *
 * Outputs:
 *   config/score-universe.json
 *   %TEMP%/stockmonk-universe/resolve-report.json
 */
import fs from "node:fs";
import path from "node:path";
import { RESEARCH_TICKERS } from "../config/universe";

const SOURCE =
  process.env.SCORE_UNIVERSE_NAMES ??
  "D:\\Tutorials\\Telegram\\stockmonk screenshots\\us stocks universe.txt";
const OUT_DIR = path.join(process.env.TEMP ?? ".", "stockmonk-universe");
const CACHE_FILE = path.join(
  process.cwd(),
  "data",
  "score-inputs",
  "yahoo-search-cache.json",
);
const OVERRIDES_FILE = path.join(
  process.cwd(),
  "config",
  "score-universe-overrides.json",
);
const OUT_FILE = path.join(process.cwd(), "config", "score-universe.json");
const SEC_FILE = path.join(process.cwd(), "data", "raw", "sec", "company_tickers.json");
const NASDAQ_FILE = path.join(OUT_DIR, "nasdaq-full.json");

type SecEntry = { cik_str: number; ticker: string; title: string };
type NasdaqRow = {
  symbol: string;
  name: string;
  marketCap: string;
  sector?: string;
  industry?: string;
  country?: string;
};
type YahooQuote = {
  symbol?: string;
  shortname?: string;
  longname?: string;
  quoteType?: string;
  exchange?: string;
  exchDisp?: string;
};
type Candidate = {
  ticker: string;
  title: string;
  source: "sec" | "nasdaq" | "yahoo";
  score: number;
  quoteType?: string;
  exchange?: string;
  marketCap: number | null;
  cik: number | null;
  sector?: string;
  industry?: string;
};

const TRAILING_SUFFIXES = new Set([
  "inc",
  "incorporated",
  "corp",
  "corporation",
  "co",
  "company",
  "ltd",
  "limited",
  "plc",
  "llc",
  "lp",
  "llp",
  "pbc",
  "sa",
  "nv",
  "ag",
  "se",
]);
const DESCRIPTORS = new Set([
  "class",
  "common",
  "stock",
  "shares",
  "share",
  "ordinary",
  "american",
  "depositary",
  "depository",
  "adr",
  "ads",
  "unit",
  "units",
  "warrant",
  "warrants",
  "right",
  "rights",
  "preferred",
  "preference",
  "notes",
  "note",
  "due",
  "series",
]);
const NON_COMMON =
  /\b(warrant|warrants|preferred|preference|notes?|units?|rights?|depositary shares)\b/i;

const ABBREVIATIONS: Array<[RegExp, string]> = [
  [/\bL\.L\.C\.?/gi, "LLC"],
  [/\bL\.P\.?/gi, "LP"],
  [/\bS\.A\.P\.I\.?/gi, "SAPI"],
  [/\bS\.A\.B\.?/gi, "SAB"],
  [/\bS\.A\.?/gi, "SA"],
  [/\bN\.V\.?/gi, "NV"],
  [/\bB\.V\.?/gi, "BV"],
  [/\bP\.L\.C\.?/gi, "PLC"],
  [/\bA\.G\.?/gi, "AG"],
  [/\bS\.E\.?/gi, "SE"],
  [/\bN\.A\.?/gi, "NA"],
  [/\bW\.W\.?/gi, "WW"],
  [/\bJ\.Jill/gi, "JJill"],
  [/\bN\.T\.?/gi, "NT"],
  [/\bR\.C\.M\.?/gi, "RCM"],
  [/\bH\.F\.?/gi, "HF"],
  [/\bP\.G\.?/gi, "PG"],
  [/\bJ\.P\.?/gi, "JP"],
  [/\bC\.D\.?/gi, "CD"],
  [/\bU\.S\.?/gi, "US"],
];

function words(input: string): string[] {
  let text = input;
  for (const [pattern, replacement] of ABBREVIATIONS) {
    text = text.replace(pattern, replacement);
  }
  // Collapse remaining single-letter initials such as J.Jill or R.C.M.
  text = text.replace(/\b([a-z])\.([a-z])\./gi, "$1$2");
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[’']/g, "")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
}

function fullKey(input: string): string {
  let tokens = words(input);
  if (tokens[0] === "the") tokens = tokens.slice(1);
  tokens = tokens.filter((token) => !DESCRIPTORS.has(token));
  return tokens.join(" ");
}

function coreKey(input: string): string {
  const tokens = fullKey(input).split(" ").filter(Boolean);
  let end = tokens.length;
  while (end > 0 && TRAILING_SUFFIXES.has(tokens[end - 1])) end -= 1;
  return tokens.slice(0, end).join(" ");
}

function dice(a: string, b: string): number {
  if (a === b) return 1;
  if (a.length < 2 || b.length < 2) return 0;
  const map = new Map<string, number>();
  for (let index = 0; index < a.length - 1; index += 1) {
    const pair = a.slice(index, index + 2);
    map.set(pair, (map.get(pair) ?? 0) + 1);
  }
  let overlap = 0;
  for (let index = 0; index < b.length - 1; index += 1) {
    const pair = b.slice(index, index + 2);
    const count = map.get(pair) ?? 0;
    if (count > 0) {
      map.set(pair, count - 1);
      overlap += 1;
    }
  }
  return (2 * overlap) / (a.length - 1 + b.length - 1);
}

function jaccard(a: string[], b: string[]): number {
  const left = new Set(a);
  const right = new Set(b);
  let intersection = 0;
  for (const token of left) if (right.has(token)) intersection += 1;
  const union = left.size + right.size - intersection;
  return union === 0 ? 1 : intersection / union;
}

function similarity(name: string, candidate: string): number {
  let best = 0;
  for (const key of [fullKey, coreKey]) {
    const a = key(name);
    const b = key(candidate);
    if (!a || !b) continue;
    if (a === b) return 1;
    const aTokens = a.split(" ");
    const bTokens = b.split(" ");
    const containment =
      aTokens.every((token) => bTokens.includes(token)) ||
      bTokens.every((token) => aTokens.includes(token))
        ? 0.9
        : 0;
    best = Math.max(
      best,
      containment,
      0.55 * dice(a, b) + 0.45 * jaccard(aTokens, bTokens),
    );
  }
  return best;
}

function exchangeRank(exchange?: string): number {
  if (!exchange) return 0;
  if (["NMS", "NYQ", "NGM", "NCM", "ASE", "PCX"].includes(exchange)) return 3;
  if (["PNK", "OQX", "OID", "OQB", "OQX"].includes(exchange)) return 2;
  return 1;
}

function quoteTitle(quote: YahooQuote): string {
  return quote.longname ?? quote.shortname ?? "";
}

function preferCommon(candidates: Candidate[], inputName: string): Candidate[] {
  if (NON_COMMON.test(inputName)) return candidates;
  const common = candidates.filter((candidate) => !NON_COMMON.test(candidate.title));
  return common.length ? common : candidates;
}

function choose(candidates: Candidate[], inputName: string): Candidate | null {
  const pool = preferCommon(candidates, inputName);
  if (!pool.length) return null;
  return [...pool].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const exchangeDiff = exchangeRank(b.exchange) - exchangeRank(a.exchange);
    if (exchangeDiff !== 0) return exchangeDiff;
    if ((b.marketCap ?? 0) !== (a.marketCap ?? 0)) {
      return (b.marketCap ?? 0) - (a.marketCap ?? 0);
    }
    return a.ticker.localeCompare(b.ticker);
  })[0];
}

const secRaw = JSON.parse(fs.readFileSync(SEC_FILE, "utf8")) as Record<string, SecEntry>;
const secEntries = Object.values(secRaw);
const nasdaqRaw = JSON.parse(fs.readFileSync(NASDAQ_FILE, "utf8")) as {
  data: { rows: NasdaqRow[] };
};
const nasdaqEntries = nasdaqRaw.data.rows.map((row) => ({
  ...row,
  marketCap: Number(String(row.marketCap).replace(/[^0-9.]/g, "")) || null,
}));

const secByFull = new Map<string, Candidate[]>();
const secByCore = new Map<string, Candidate[]>();
for (const entry of secEntries) {
  const candidate: Candidate = {
    ticker: entry.ticker.toUpperCase(),
    title: entry.title,
    source: "sec",
    score: 1,
    marketCap: null,
    cik: entry.cik_str,
  };
  for (const [map, key] of [
    [secByFull, fullKey(entry.title)],
    [secByCore, coreKey(entry.title)],
  ] as const) {
    if (!key) continue;
    const list = map.get(key) ?? [];
    list.push(candidate);
    map.set(key, list);
  }
}
const nasdaqByFull = new Map<string, Candidate[]>();
const nasdaqByCore = new Map<string, Candidate[]>();
for (const entry of nasdaqEntries) {
  const ticker = entry.symbol
    .trim()
    .toUpperCase()
    .replace(/\//g, ".")
    .replace(/\^/g, ".");
  const candidate: Candidate = {
    ticker,
    title: entry.name,
    source: "nasdaq",
    score: 1,
    marketCap: entry.marketCap,
    cik: null,
    sector: entry.sector,
    industry: entry.industry,
  };
  for (const [map, key] of [
    [nasdaqByFull, fullKey(entry.name)],
    [nasdaqByCore, coreKey(entry.name)],
  ] as const) {
    if (!key) continue;
    const list = map.get(key) ?? [];
    list.push(candidate);
    map.set(key, list);
  }
}

const cache = (() => {
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, "utf8")) as Record<
      string,
      YahooQuote[]
    >;
  } catch {
    return {} as Record<string, YahooQuote[]>;
  }
})();
let cacheDirty = false;

async function yahooSearch(query: string): Promise<YahooQuote[]> {
  const key = query.trim().toLowerCase();
  if (cache[key]) return cache[key];
  const url = `https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(
    query,
  )}&quotesCount=10&newsCount=0&listsCount=0&enableFuzzyQuery=true`;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0" },
      });
      if (response.status === 429) {
        await new Promise((resolve) => setTimeout(resolve, 2500 * (attempt + 1)));
        continue;
      }
      if (!response.ok) return [];
      const json = (await response.json()) as { quotes?: YahooQuote[] };
      const quotes = json.quotes ?? [];
      cache[key] = quotes;
      cacheDirty = true;
      return quotes;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 1200 * (attempt + 1)));
    }
  }
  return [];
}

function yahooCandidates(
  name: string,
  quotes: YahooQuote[],
): Candidate[] {
  return quotes
    .filter((quote) => {
      const ticker = quote.symbol?.toUpperCase();
      if (!ticker || ticker.startsWith("^")) return false;
      if (!["EQUITY", "ETF"].includes(quote.quoteType ?? "")) return false;
      return true;
    })
    .map((quote) => {
      const title = quoteTitle(quote);
      return {
        ticker: quote.symbol!.toUpperCase(),
        title,
        source: "yahoo" as const,
        score: similarity(name, title),
        quoteType: quote.quoteType,
        exchange: quote.exchange,
        marketCap: null,
        cik: null,
      };
    });
}

function queryVariants(name: string): string[] {
  const variants = new Set<string>();
  variants.add(name);
  const core = coreKey(name).replace(/\s+/g, " ").trim();
  if (core) variants.add(core);
  const withoutParens = name.replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();
  if (withoutParens) variants.add(withoutParens);
  const first = core.split(" ").slice(0, 4).join(" ");
  if (first && first !== core) variants.add(first);
  return [...variants];
}

async function resolveYahoo(name: string): Promise<Candidate | null> {
  for (const query of queryVariants(name)) {
    const quotes = await yahooSearch(query);
    const candidates = yahooCandidates(name, quotes);
    const best = choose(candidates, name);
    if (best && best.score >= 0.78) return best;
    await new Promise((resolve) => setTimeout(resolve, 350));
  }
  return null;
}

function candidatesFor(
  key: string,
  maps: Array<Map<string, Candidate[]>>,
): Candidate[] {
  return maps.flatMap((map) => map.get(key) ?? []);
}

/**
 * Accept an exact match only when the full name (or, failing that, the name
 * with trailing legal suffixes removed) resolves to one ticker. Names like
 * "Lineage, Inc." and "Lineage Cell Therapeutics" or "First BanCorp" and
 * "First Bancorp (North Carolina)" must go to Yahoo rather than being pooled
 * by their shared first word.
 */
function uniqueExact(name: string): Candidate | null {
  const full = candidatesFor(fullKey(name), [secByFull, nasdaqByFull]);
  const fullTickers = new Set(full.map((candidate) => candidate.ticker));
  if (fullTickers.size === 1) return choose(full, name);
  if (fullTickers.size > 1) return null;

  const core = candidatesFor(coreKey(name), [secByCore, nasdaqByCore]);
  const coreTickers = new Set(core.map((candidate) => candidate.ticker));
  if (coreTickers.size === 1) return choose(core, name);
  return null;
}

async function main() {
  const names = fs
    .readFileSync(SOURCE, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const overrides = (() => {
    try {
      return JSON.parse(fs.readFileSync(OVERRIDES_FILE, "utf8")) as Record<
        string,
        string
      >;
    } catch {
      return {} as Record<string, string>;
    }
  })();

  // The existing research names always win their canonical ticker.
  const researchByName = new Map<string, string>();
  try {
    const stocks = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), "public", "data", "stocks.json"),
        "utf8",
      ),
    ) as Array<{ ticker: string; name: string }>;
    for (const stock of stocks) {
      researchByName.set(coreKey(stock.name), stock.ticker);
    }
  } catch {
    // first run before stocks.json exists
  }

  const resolved: Array<{
    name: string;
    ticker: string | null;
    score: number;
    source: string;
    title: string;
    cik: number | null;
    exchange?: string;
    note?: string;
  }> = [];

  for (const [index, name] of names.entries()) {
    const override = overrides[name];
    if (override) {
      resolved.push({
        name,
        ticker: override,
        score: 1,
        source: "override",
        title: name,
        cik: null,
        note: "manual override",
      });
      continue;
    }
    const researchTicker = researchByName.get(coreKey(name));
    if (researchTicker) {
      resolved.push({
        name,
        ticker: researchTicker,
        score: 1,
        source: "research",
        title: name,
        cik: null,
      });
      continue;
    }
    const exact = uniqueExact(name);
    if (exact) {
      resolved.push({
        name,
        ticker: exact.ticker,
        score: 1,
        source: exact.source,
        title: exact.title,
        cik: exact.cik,
        exchange: exact.exchange,
      });
      continue;
    }
    const yahoo = await resolveYahoo(name);
    if (yahoo) {
      resolved.push({
        name,
        ticker: yahoo.ticker,
        score: yahoo.score,
        source: "yahoo",
        title: yahoo.title,
        cik: null,
        exchange: yahoo.exchange,
      });
    } else {
      resolved.push({
        name,
        ticker: null,
        score: 0,
        source: "none",
        title: "",
        cik: null,
        note: "unresolved",
      });
    }
    if ((index + 1) % 50 === 0) {
      console.log(`[resolve] ${index + 1}/${names.length}`);
    }
  }

  if (cacheDirty) {
    fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 0), "utf8");
  }

  const tickerCounts = new Map<string, number>();
  for (const row of resolved) {
    if (row.ticker) tickerCounts.set(row.ticker, (tickerCounts.get(row.ticker) ?? 0) + 1);
  }
  const duplicates = [...tickerCounts.entries()]
    .filter(([, count]) => count > 1)
    .map(([ticker, count]) => ({
      ticker,
      count,
      names: resolved.filter((row) => row.ticker === ticker).map((row) => row.name),
    }));
  const unresolved = resolved.filter((row) => !row.ticker || row.score < 0.78 || row.source === "none");
  const low = resolved.filter((row) => row.ticker && row.score < 0.88 && row.score >= 0.78);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(OUT_DIR, "resolve-report.json"),
    JSON.stringify({ resolved, unresolved, low, duplicates }, null, 2),
    "utf8",
  );

  const uniqueTickers = [...new Set(resolved.map((row) => row.ticker).filter(Boolean))] as string[];
  const researchInSource = uniqueTickers.filter((ticker) =>
    RESEARCH_TICKERS.includes(ticker),
  );

  // The user's list is market-cap ordered. Keep the 500 research names and
  // take the largest additional names in source order so the final score
  // universe is exactly 3,696 names. Unresolved private/Expert Market names
  // fall out at the tail rather than displacing a research name.
  const targetScoreOnly = Math.max(0, 3696 - RESEARCH_TICKERS.length);
  const researchSet = new Set(RESEARCH_TICKERS);
  const selected: Array<{ ticker: string; name: string }> = [];
  const selectedTickers = new Set<string>();
  const dropped: Array<{ ticker: string; name: string }> = [];
  for (const row of resolved) {
    if (!row.ticker || row.score < 0.78) continue;
    const ticker = row.ticker.toUpperCase();
    if (researchSet.has(ticker) || selectedTickers.has(ticker)) continue;
    const entry = { ticker, name: row.name };
    if (selected.length < targetScoreOnly) {
      selected.push(entry);
      selectedTickers.add(ticker);
    } else {
      dropped.push(entry);
    }
  }

  fs.writeFileSync(
    OUT_FILE,
    `${JSON.stringify(selected, null, 2)}\n`,
    "utf8",
  );

  console.log({
    names: names.length,
    resolved: names.length - unresolved.length,
    unresolved: unresolved.length,
    lowConfidence: low.length,
    duplicateTickers: duplicates.length,
    uniqueTickers: uniqueTickers.length,
    researchInSource: researchInSource.length,
    scoreOnlySelected: selected.length,
    scoreOnlyDropped: dropped.length,
    totalScoreUniverse: RESEARCH_TICKERS.length + selected.length,
  });
  if (dropped.length) {
    console.log("\nDROPPED TAIL");
    for (const row of dropped.slice(-30)) {
      console.log(`${row.ticker} | ${row.name}`);
    }
  }
  console.log("\nUNRESOLVED");
  for (const row of unresolved.slice(0, 80)) {
    console.log(`${row.name} | ${row.ticker ?? "-"} | ${row.source} | ${row.score.toFixed(2)} | ${row.title}`);
  }
  console.log("\nDUPLICATES");
  for (const row of duplicates.slice(0, 80)) {
    console.log(`${row.ticker}: ${row.names.join(" || ")}`);
  }
  console.log("\nLOW CONFIDENCE");
  for (const row of low.slice(0, 80)) {
    console.log(`${row.name} | ${row.ticker} | ${row.score.toFixed(2)} | ${row.title}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
