import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";
import type { PricePoint } from "./schemas";

const CACHE_ROOT = path.join(process.cwd(), "data", "india", "raw", "screener");
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";

export type ScreenerFinancial = {
  label: string;
  endDate: string;
  year: number;
  sales: number | null;
  operatingProfit: number | null;
  opm: number | null;
  otherIncome: number | null;
  interest: number | null;
  depreciation: number | null;
  pretax: number | null;
  taxRate: number | null;
  netProfit: number | null;
  eps: number | null;
};

export type ScreenerBalance = {
  endDate: string;
  year: number;
  equityCapital: number | null;
  reserves: number | null;
  borrowings: number | null;
  investments: number | null;
  totalAssets: number | null;
  totalLiabilities: number | null;
};

export type ScreenerCash = {
  endDate: string;
  year: number;
  cfo: number | null;
  fcf: number | null;
};

export type ScreenerRatios = {
  endDate: string;
  year: number;
  roce: number | null;
};

export type ScreenerData = {
  ticker: string;
  sourceUrl: string;
  companyId: string | null;
  annual: ScreenerFinancial[];
  quarterly: ScreenerFinancial[];
  balance: ScreenerBalance[];
  cash: ScreenerCash[];
  ratios: ScreenerRatios[];
};

function text(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function num(value: string | undefined): number | null {
  if (!value) return null;
  const cleaned = value.replace(/,/g, "").replace(/%/g, "").trim();
  if (!cleaned || cleaned === "-" || /^x+$/i.test(cleaned)) return null;
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function monthEnd(label: string): { endDate: string; year: number } | null {
  const match = label.match(/^([A-Z][a-z]{2})\s+(\d{4})$/);
  if (!match) return null;
  const month = MONTHS[match[1]];
  const year = Number(match[2]);
  if (month == null) return null;
  const day = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  return {
    endDate: `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    year,
  };
}

type Table = ReturnType<cheerio.CheerioAPI>;

function headers($: cheerio.CheerioAPI, table: Table): string[] {
  return table
    .find("tr")
    .first()
    .find("th,td")
    .map((_, cell) => text($(cell).text()))
    .get();
}

function rows($: cheerio.CheerioAPI, table: Table) {
  const map = new Map<string, string[]>();
  table.find("tr").each((_, row) => {
    const cells = $(row)
      .find("th,td")
      .map((_, cell) => text($(cell).text()))
      .get();
    if (cells.length) map.set(cells[0].replace(/\s*\+$/, ""), cells.slice(1));
  });
  return map;
}

function pick(map: Map<string, string[]>, labels: string[], index: number): string | undefined {
  for (const label of labels) {
    const row = map.get(label);
    if (row && row[index] != null) return row[index];
  }
  return undefined;
}

function parsePnl(
  $: cheerio.CheerioAPI,
  table: Table,
): ScreenerFinancial[] {
  const head = headers($, table);
  const body = rows($, table);
  const out: ScreenerFinancial[] = [];
  for (let index = 1; index < head.length; index += 1) {
    if (head[index] === "TTM") continue;
    const period = monthEnd(head[index]);
    if (!period) continue;
    out.push({
      label: head[index],
      endDate: period.endDate,
      year: period.year,
      sales: num(
        pick(body, ["Sales", "Revenue", "Total Income", "Interest Earned", "Income"], index - 1),
      ),
      operatingProfit: num(
        pick(body, ["Operating Profit", "Financing Profit", "Pre-provisioning Profit"], index - 1),
      ),
      opm: num(pick(body, ["OPM %"], index - 1)),
      otherIncome: num(pick(body, ["Other Income"], index - 1)),
      interest: num(pick(body, ["Interest"], index - 1)),
      depreciation: num(pick(body, ["Depreciation"], index - 1)),
      pretax: num(pick(body, ["Profit before tax"], index - 1)),
      taxRate: num(pick(body, ["Tax %"], index - 1)),
      netProfit: num(pick(body, ["Net Profit"], index - 1)),
      eps: num(pick(body, ["EPS in Rs"], index - 1)),
    });
  }
  return out;
}

function parseBalance(
  $: cheerio.CheerioAPI,
  table: Table,
): ScreenerBalance[] {
  const head = headers($, table);
  const body = rows($, table);
  const out: ScreenerBalance[] = [];
  for (let index = 1; index < head.length; index += 1) {
    const period = monthEnd(head[index]);
    if (!period) continue;
    out.push({
      endDate: period.endDate,
      year: period.year,
      equityCapital: num(pick(body, ["Equity Capital"], index - 1)),
      reserves: num(pick(body, ["Reserves"], index - 1)),
      borrowings: num(pick(body, ["Borrowings"], index - 1)),
      investments: num(pick(body, ["Investments"], index - 1)),
      totalAssets: num(pick(body, ["Total Assets"], index - 1)),
      totalLiabilities: num(pick(body, ["Total Liabilities"], index - 1)),
    });
  }
  return out;
}

function parseCash(
  $: cheerio.CheerioAPI,
  table: Table,
): ScreenerCash[] {
  const head = headers($, table);
  const body = rows($, table);
  const out: ScreenerCash[] = [];
  for (let index = 1; index < head.length; index += 1) {
    const period = monthEnd(head[index]);
    if (!period) continue;
    out.push({
      endDate: period.endDate,
      year: period.year,
      cfo: num(pick(body, ["Cash from Operating Activity"], index - 1)),
      fcf: num(pick(body, ["Free Cash Flow"], index - 1)),
    });
  }
  return out;
}

function parseRatios(
  $: cheerio.CheerioAPI,
  table: Table,
): ScreenerRatios[] {
  const head = headers($, table);
  const body = rows($, table);
  const out: ScreenerRatios[] = [];
  for (let index = 1; index < head.length; index += 1) {
    const period = monthEnd(head[index]);
    if (!period) continue;
    out.push({
      endDate: period.endDate,
      year: period.year,
      roce: num(pick(body, ["ROCE %"], index - 1)),
    });
  }
  return out;
}

export function parseScreener(html: string, ticker: string, sourceUrl: string): ScreenerData | null {
  const $ = cheerio.load(html);
  const tables = $("table.data-table").toArray();
  if (tables.length < 5) return null;
  const quarterlyTable = $(tables[0]);
  const annualTable = $(tables[1]);
  const balanceTable = $(tables[2]);
  const cashTable = $(tables[3]);
  const ratioTable = $(tables[4]);

  const annual = parsePnl($, annualTable);
  const quarterly = parsePnl($, quarterlyTable);
  if (!annual.length && !quarterly.length) return null;

  const companyId =
    $("[data-company-id]").first().attr("data-company-id") ??
    html.match(/\/company\/(\d+)/)?.[1] ??
    null;

  return {
    ticker,
    sourceUrl,
    companyId,
    annual,
    quarterly,
    balance: parseBalance($, balanceTable),
    cash: parseCash($, cashTable),
    ratios: parseRatios($, ratioTable),
  };
}

let lastFetchAt = 0;

async function politeFetch(url: string): Promise<Response | null> {
  const wait = Math.max(0, lastFetchAt + 1200 - Date.now());
  if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
  lastFetchAt = Date.now();
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
        signal: AbortSignal.timeout(60_000),
      });
      if (response.ok) return response;
      if (![403, 429, 500, 502, 503, 504].includes(response.status)) return response;
    } catch {
      // network error: retry
    }
    await new Promise((resolve) => setTimeout(resolve, 1500 * (attempt + 1)));
  }
  return null;
}

export async function fetchScreener(
  ticker: string,
  options: { force?: boolean } = {},
): Promise<ScreenerData | null> {
  await fs.mkdir(CACHE_ROOT, { recursive: true });
  const variants = [
    { suffix: "consolidated", path: "consolidated" },
    { suffix: "standalone", path: "standalone" },
    { suffix: "default", path: "" },
  ];
  for (const variant of variants) {
    const url = `https://www.screener.in/company/${ticker}/${variant.path}`;
    const cacheFile = path.join(CACHE_ROOT, `${ticker}-${variant.suffix}.html`);
    let html: string | null = null;
    if (!options.force) {
      try {
        html = await fs.readFile(cacheFile, "utf8");
      } catch {
        // cache miss
      }
    }
    if (!html) {
      const response = await politeFetch(url);
      if (!response?.ok) continue;
      html = await response.text();
      await fs.writeFile(cacheFile, html, "utf8");
    }
    const parsed = parseScreener(html, ticker, url);
    if (parsed && (parsed.annual.length || parsed.quarterly.length)) return parsed;
  }
  return null;
}

/** Weekly price fallback from Screener's chart endpoint. */
export async function fetchScreenerPrices(
  companyId: string,
  days = 3650,
): Promise<PricePoint[]> {
  const url = `https://www.screener.in/api/company/${companyId}/chart/?q=Price&days=${days}`;
  const wait = Math.max(0, lastFetchAt + 1200 - Date.now());
  if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
  lastFetchAt = Date.now();
  const response = await politeFetch(url);
  if (!response?.ok) return [];
  const json = (await response.json()) as {
    datasets?: Array<{ metric?: string; values?: Array<[string, string]> }>;
  };
  const price = json.datasets?.find((dataset) => dataset.metric === "Price");
  if (!price?.values?.length) return [];
  return price.values
    .map(([date, value]) => {
      const close = Number(value);
      if (!Number.isFinite(close)) return null;
      return {
        d: date,
        o: close,
        h: close,
        l: close,
        c: close,
        a: close,
        v: 0,
      } satisfies PricePoint;
    })
    .filter((point): point is PricePoint => point != null);
}
