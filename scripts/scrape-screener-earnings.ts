/**
 * Crawls the authorised Screener.in screen and company pages to build the
 * India earnings tracker for every company above a market-cap threshold.
 *
 * Run: pnpm ingest:screener
 *      SCREENER_MIN_MCAP=1000 SCREENER_DELAY_MS=1200 pnpm ingest:screener
 *
 * Written permission from Screener.in/Mittal Analytics is required for this
 * crawl (see CLAUDE.md). The script is deliberately polite: one request at a
 * time, a delay between requests, exponential backoff on throttling, and a
 * resumable cache so a re-run never refetches what it already has.
 */
import fs from "node:fs";
import path from "node:path";
import { earningsTrackerRowSchema, type EarningsTrackerRow } from "../lib/schemas";

const SCREEN_URL =
  process.env.SCREENER_SCREEN_URL ??
  "https://www.screener.in/screens/599148/companies-by-market-cap/";
const BASE = "https://www.screener.in";
const MIN_MCAP_CR = Number(process.env.SCREENER_MIN_MCAP ?? "1000");
const DELAY_MS = Number(process.env.SCREENER_DELAY_MS ?? "1200");
const COMPANY_TTL_DAYS = Number(process.env.SCREENER_COMPANY_TTL_DAYS ?? "7");
const MAX_COMPANIES = Number(process.env.SCREENER_MAX_COMPANIES ?? "0");
const USER_AGENT =
  process.env.SCREENER_USER_AGENT ??
  "StockmonkBot/1.0 (+https://stockmonk.vercel.app; data use authorised by Screener.in)";
const CACHE_DIR = path.join(process.cwd(), "data", "india", ".screener-cache");
const OUT = path.join(process.cwd(), "data", "india", "screener-earnings.json");
const TODAY = new Date().toISOString().slice(0, 10);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function cachePath(kind: "screen" | "company", key: string): string {
  return path.join(CACHE_DIR, kind, `${key}.json`);
}

function readCache<T>(kind: "screen" | "company", key: string): T | null {
  try {
    const parsed = JSON.parse(fs.readFileSync(cachePath(kind, key), "utf8")) as {
      fetchedAt: string;
      data: T;
    };
    // Screen rows (market cap, P/E, ROCE) change daily; company quarterly
    // tables only change when results are published, so a weekly refresh is
    // enough and keeps the crawl polite.
    const ttlDays = kind === "screen" ? 1 : COMPANY_TTL_DAYS;
    const ageDays = (Date.now() - Date.parse(parsed.fetchedAt)) / 86_400_000;
    return ageDays < ttlDays ? parsed.data : null;
  } catch {
    return null;
  }
}

function writeCache<T>(kind: "screen" | "company", key: string, data: T) {
  const file = cachePath(kind, key);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify({ fetchedAt: TODAY, data }), "utf8");
}

class NotFoundError extends Error {}

async function fetchHtml(url: string, attempt = 0): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "en-IN,en;q=0.9",
      },
    });
    // A missing page is permanent; retrying only slows the crawl down.
    if (response.status === 404) throw new NotFoundError(url);
    if (response.status === 429 || response.status === 503) {
      throw new Error(`throttled ${response.status}`);
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } catch (error) {
    if (error instanceof NotFoundError) throw error;
    if (attempt >= 3) throw error;
    const wait = [5000, 15000, 45000][attempt] ?? 45000;
    console.warn(`[screener] retry ${attempt + 1} in ${wait / 1000}s: ${String(error)}`);
    await sleep(wait);
    return fetchHtml(url, attempt + 1);
  }
}

/** Consolidated first, then standalone for companies that do not publish it. */
async function fetchCompany(link: string): Promise<string> {
  const normalized = link.endsWith("/") ? link : `${link}/`;
  try {
    return await fetchHtml(`${BASE}${normalized}`);
  } catch (error) {
    if (error instanceof NotFoundError && normalized.includes("/consolidated/")) {
      return fetchHtml(`${BASE}${normalized.replace("/consolidated/", "/")}`);
    }
    throw error;
  }
}

function strip(value: string): string {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

/** Cached parses can still carry entities from older runs. */
function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function num(raw: string | null | undefined): number | null {
  if (!raw) return null;
  const text = raw.replace(/[₹,%\s]/g, "").replace(/,/g, "");
  if (!text || text === "-" || text.toLowerCase() === "na") return null;
  const negative = /^\((.*)\)$/.test(text);
  const value = Number(negative ? text.slice(1, -1) : text);
  if (!Number.isFinite(value)) return null;
  return negative ? -value : value;
}

type ScreenRow = {
  ticker: string;
  name: string;
  cmp: number | null;
  pe: number | null;
  marketCapCr: number | null;
  profitGrowth: number | null;
  salesGrowth: number | null;
  roce: number | null;
  link: string;
};

function parseScreenPage(html: string): ScreenRow[] {
  const table = html.match(/<table[\s\S]*?<\/table>/)?.[0] ?? "";
  const rows = [...table.matchAll(/<tr[\s\S]*?<\/tr>/g)]
    .slice(1)
    .map((match) => match[0]);

  const parsed: ScreenRow[] = [];
  for (const row of rows) {
    const cells = [...row.matchAll(/<td[\s\S]*?<\/td>/g)].map((m) => strip(m[0]));
    if (cells.length < 10) continue;
    const link = row
      .match(/href="(\/company\/[^"]+)"/)?.[1]
      ?.replace(/&amp;/g, "&");
    const ticker = link?.match(/\/company\/([^/]+)\//)?.[1];
    if (!ticker) continue;
    parsed.push({
      ticker: ticker.toUpperCase(),
      name: cells[1],
      cmp: num(cells[2]),
      pe: num(cells[3]),
      marketCapCr: num(cells[4]),
      profitGrowth: num(cells[7]) == null ? null : (num(cells[7]) as number) / 100,
      salesGrowth: num(cells[9]) == null ? null : (num(cells[9]) as number) / 100,
      roce: num(cells[10]) == null ? null : (num(cells[10]) as number) / 100,
      link: link ?? `/company/${ticker}/consolidated/`,
    });
  }
  return parsed;
}

async function crawlScreen(): Promise<ScreenRow[]> {
  const companies: ScreenRow[] = [];
  for (let page = 1; page <= 400; page += 1) {
    const cached = readCache<ScreenRow[]>("screen", `page-${page}`);
    const rows = cached ?? parseScreenPage(await fetchHtml(`${SCREEN_URL}?page=${page}`));
    if (!cached) {
      writeCache("screen", `page-${page}`, rows);
      await sleep(DELAY_MS);
    }
    if (rows.length === 0) break;
    companies.push(...rows);
    const lastCap = rows.at(-1)?.marketCapCr ?? 0;
    console.log(
      `[screener] screen page ${page}: ${rows.length} rows, last ${rows.at(-1)?.name} ₹${lastCap} Cr`,
    );
    if (lastCap < MIN_MCAP_CR) break;
  }
  return companies;
}

const MONTHS: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
};

function quarterHeader(value: string): { label: string; key: string; date: string } | null {
  const match = value.match(/^([A-Za-z]{3})\s+(\d{4})/);
  if (!match) return null;
  const month = MONTHS[match[1]];
  const year = Number(match[2]);
  if (!month) return null;
  const quarter = month <= 3 ? "Q4" : month <= 6 ? "Q1" : month <= 9 ? "Q2" : "Q3";
  const fyear = month <= 3 ? year : year + 1;
  const endMonth = month <= 3 ? 3 : month <= 6 ? 6 : month <= 9 ? 9 : 12;
  const endDay = endMonth === 3 ? 31 : 30;
  return {
    label: `${quarter} FY${String(fyear).slice(-2)}`,
    key: `${match[1]} ${year}`,
    date: `${year}-${String(endMonth).padStart(2, "0")}-${endDay}`,
  };
}

function growth(current: number | null, previous: number | null): number | null {
  if (current == null || previous == null) return null;
  if (!Number.isFinite(current) || !Number.isFinite(previous) || previous <= 0) return null;
  return (current - previous) / previous;
}

type CompanyParse = {
  ebitdaGrowth: number | null;
  epsGrowth: number | null;
  industry: string;
  period: string | null;
  reportDate: string | null;
};

function parseCompanyPage(html: string): CompanyParse {
  const section = html.match(/<section[^>]*id="quarters"[\s\S]*?<\/section>/)?.[0] ?? "";
  const table = section.match(/<table[\s\S]*?<\/table>/)?.[0] ?? "";
  const rows = [...table.matchAll(/<tr[\s\S]*?<\/tr>/g)].map((m) =>
    [...m[0].matchAll(/<t[hd][\s\S]*?<\/t[hd]>/g)].map((c) => strip(c[0])),
  );
  const headers = rows[0] ?? [];
  const latestIndex = headers.length - 1;
  const latest = latestIndex > 0 ? quarterHeader(headers[latestIndex]) : null;
  const yearAgoIndex = latest
    ? headers.findIndex((header) => {
        const parsed = quarterHeader(header);
        return parsed != null && parsed.key === `${latest.key.split(" ")[0]} ${Number(latest.key.split(" ")[1]) - 1}`;
      })
    : -1;

  const findRow = (name: string) => rows.find((row) => row[0]?.startsWith(name)) ?? [];

  const ebitdaRow = findRow("Operating Profit");
  const epsRow = findRow("EPS in Rs");

  const ebitdaGrowth =
    latestIndex > 0 && yearAgoIndex > 0
      ? growth(num(ebitdaRow[latestIndex]), num(ebitdaRow[yearAgoIndex]))
      : null;
  const epsGrowth =
    latestIndex > 0 && yearAgoIndex > 0
      ? growth(num(epsRow[latestIndex]), num(epsRow[yearAgoIndex]))
      : null;

  const peers = html.match(/<section[^>]*id="peers"[\s\S]*?<\/section>/)?.[0] ?? "";
  const peerLinks = [...peers.matchAll(/href="\/market\/[^"]+"[^>]*>([^<]{2,60})</g)].map((m) =>
    strip(m[1]),
  );
  const industry = peerLinks.at(-1) ?? "Unclassified";

  return {
    ebitdaGrowth,
    epsGrowth,
    industry,
    period: latest?.label ?? null,
    reportDate: latest?.date ?? null,
  };
}

const existingRows = (() => {
  try {
    const parsed = JSON.parse(fs.readFileSync(OUT, "utf8")) as { rows: EarningsTrackerRow[] };
    return new Map(parsed.rows.map((row) => [row.ticker, row]));
  } catch {
    return new Map<string, EarningsTrackerRow>();
  }
})();

async function main() {
  console.log(
    `[screener] start: min ₹${MIN_MCAP_CR} Cr, delay ${DELAY_MS}ms, cache ${CACHE_DIR}`,
  );
  const screen = await crawlScreen();
  const companies = screen
    .filter((row) => (row.marketCapCr ?? 0) >= MIN_MCAP_CR)
    .filter((row, index, list) => list.findIndex((item) => item.ticker === row.ticker) === index);

  const limited = MAX_COMPANIES > 0 ? companies.slice(0, MAX_COMPANIES) : companies;
  console.log(`[screener] ${limited.length} companies at or above ₹${MIN_MCAP_CR} Cr`);

  const rows: EarningsTrackerRow[] = [];
  let index = 0;
  for (const company of limited) {
    index += 1;
    const cached = readCache<CompanyParse>("company", company.ticker);
    let parsed = cached;
    if (!parsed) {
      try {
        parsed = parseCompanyPage(await fetchCompany(company.link));
        writeCache("company", company.ticker, parsed);
      } catch (error) {
        console.warn(`[screener] ${company.ticker} failed: ${String(error)}`);
        parsed = null;
      }
      await sleep(DELAY_MS);
    }

    const previous = existingRows.get(company.ticker);
    const epsGrowth = parsed?.epsGrowth ?? null;
    const pe = company.pe ?? previous?.pe ?? null;
    const row = earningsTrackerRowSchema.parse({
      ticker: company.ticker,
      name: decodeEntities(company.name),
      industry: decodeEntities(parsed?.industry ?? previous?.industry ?? "Unclassified"),
      period: parsed?.period ?? previous?.period ?? null,
      reportDate: parsed?.reportDate ?? previous?.reportDate ?? null,
      salesGrowth: company.salesGrowth ?? previous?.salesGrowth ?? null,
      ebitdaGrowth: parsed?.ebitdaGrowth ?? previous?.ebitdaGrowth ?? null,
      netProfitGrowth: company.profitGrowth ?? previous?.netProfitGrowth ?? null,
      epsGrowth,
      marketCap: company.marketCapCr == null ? previous?.marketCap ?? null : company.marketCapCr * 10_000_000,
      pe,
      roce: company.roce ?? previous?.roce ?? null,
      peg: pe != null && pe > 0 && epsGrowth != null && epsGrowth > 0 ? pe / (epsGrowth * 100) : null,
      return1y: previous?.return1y ?? null,
      source: "screener",
    });
    rows.push(row);

    if (index % 25 === 0 || index === limited.length) {
      console.log(`[screener] parsed ${index}/${limited.length} (${company.ticker})`);
    }
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify({ generatedAt: new Date().toISOString(), minMarketCapCr: MIN_MCAP_CR, rows }),
  );

  const coverage = {
    rows: rows.length,
    sales: rows.filter((row) => row.salesGrowth != null).length,
    ebitda: rows.filter((row) => row.ebitdaGrowth != null).length,
    profit: rows.filter((row) => row.netProfitGrowth != null).length,
    eps: rows.filter((row) => row.epsGrowth != null).length,
    roce: rows.filter((row) => row.roce != null).length,
    peg: rows.filter((row) => row.peg != null).length,
    industry: rows.filter((row) => row.industry !== "Unclassified").length,
  };
  console.log(`[screener] wrote ${rows.length} rows to ${OUT}`, coverage);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
