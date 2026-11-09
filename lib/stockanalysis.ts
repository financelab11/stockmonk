import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";

const ROOT = path.join(process.cwd(), "data", "gcc", "raw", "stockanalysis");
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";
const FORCE = process.env.FORCE_REFRESH === "1";

export type SaPeriod = { label: string; date: string };

export type SaStatement = {
  periods: SaPeriod[];
  rows: Map<string, string[]>;
};

export type SaHistoryPoint = {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type SaForecast = {
  priceLow: number | null;
  priceAverage: number | null;
  priceMedian: number | null;
  priceHigh: number | null;
  analystCount: number | null;
  distribution: {
    strongBuy: number;
    buy: number;
    hold: number;
    sell: number;
    strongSell: number;
  } | null;
  estimates: Array<{
    label: string;
    endDate: string | null;
    revenue: number | null;
    revenueGrowth: number | null;
    eps: number | null;
    epsGrowth: number | null;
  }>;
};

export type StockAnalysisCompany = {
  ticker: string;
  exchange: string;
  name: string;
  currency: string;
  description: string;
  sector: string;
  industry: string;
  employees: number | null;
  website: string | null;
  price: number;
  prevClose: number | null;
  changePct: number | null;
  marketCap: number | null;
  sharesOutstanding: number | null;
  high52: number | null;
  low52: number | null;
  dividendYield: number | null;
  pe: number | null;
  forwardPe: number | null;
  pb: number | null;
  evEbitda: number | null;
  roe: number | null;
  roic: number | null;
  roce: number | null;
  history: SaHistoryPoint[];
  annualIncome: SaStatement;
  annualBalance: SaStatement;
  annualCash: SaStatement;
  quarterlyIncome: SaStatement;
  quarterlyBalance: SaStatement;
  quarterlyCash: SaStatement;
  forecast: SaForecast;
  statistics: Map<string, string>;
};

function cacheFile(exchange: string, ticker: string, page: string): string {
  return path.join(ROOT, `${exchange}-${ticker}`, `${page}.html`);
}

async function fetchPage(exchange: string, ticker: string, page: string, url: string): Promise<string> {
  const file = cacheFile(exchange, ticker, page);
  if (!FORCE) {
    try {
      return await fs.readFile(file, "utf8");
    } catch {
      // cache miss
    }
  }
  const response = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
    signal: AbortSignal.timeout(45_000),
  });
  if (!response.ok) throw new Error(`${exchange}/${ticker}/${page}: ${response.status}`);
  const html = await response.text();
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html, "utf8");
  return html;
}

type Cell = {
  find(selector: string): { first(): { text(): string } };
  text(): string;
};

function textOf(cell: Cell): string {
  const primary = cell.find(".truncate").first().text().trim();
  return (primary || cell.text()).replace(/\s+/g, " ").trim();
}

function parseNumber(value: string): number | null {
  if (!value) return null;
  const cleaned = value
    .replace(/[^0-9.,()\-+%]/g, "")
    .replace(/,/g, "")
    .trim();
  if (!cleaned || cleaned === "-" || cleaned === "—") return null;
  const negative = cleaned.startsWith("(") && cleaned.endsWith(")");
  const parsed = Number(cleaned.replace(/[()%]/g, ""));
  if (!Number.isFinite(parsed)) return null;
  return negative ? -parsed : parsed;
}

function parseSuffixed(value: string): number | null {
  if (!value) return null;
  const match = value.replace(/,/g, "").match(/(-?[\d.]+)\s*([TBMK])?/i);
  if (!match) return null;
  const base = Number(match[1]);
  if (!Number.isFinite(base)) return null;
  const suffix = (match[2] ?? "").toUpperCase();
  const scale = suffix === "T" ? 1e12 : suffix === "B" ? 1e9 : suffix === "M" ? 1e6 : suffix === "K" ? 1e3 : 1;
  return base * scale;
}

function parseDate(text: string): string | null {
  const match = text.match(/([A-Z][a-z]{2} \d{1,2}, \d{4})/);
  if (!match) return null;
  const parsed = new Date(`${match[1]} 00:00:00 UTC`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toISOString().slice(0, 10);
}

export function parseStatement(html: string, quarterly: boolean): SaStatement {
  const $ = cheerio.load(html);
  const headerLabel = quarterly ? "Fiscal Quarter" : "Fiscal Year";
  const rows = $("tr").toArray();
  let start = -1;
  for (let index = 0; index < rows.length; index += 1) {
    const first = textOf($(rows[index]).find("td,th").first());
    if (first === headerLabel) {
      start = index;
      break;
    }
  }
  if (start < 0) return { periods: [], rows: new Map() };

  const headerCells = $(rows[start]).find("td,th").slice(1).toArray();
  const labels = headerCells.map((cell) => $(cell).text().replace(/\s+/g, " ").trim());
  const dateCells = $(rows[start + 1]).find("td,th").slice(1).toArray();
  const periods: SaPeriod[] = labels.map((label, index) => ({
    label,
    date: parseDate($(dateCells[index]).text()) ?? "",
  }));

  const data = new Map<string, string[]>();
  for (let index = start + 2; index < rows.length; index += 1) {
    const cells = $(rows[index]).find("td,th");
    if (!cells.length) continue;
    const label = textOf(cells.first());
    if (!label) continue;
    if (label === headerLabel) {
      const nextLabels = cells
        .slice(1)
        .toArray()
        .map((cell) => $(cell).text().replace(/\s+/g, " ").trim());
      if (nextLabels.join("|") !== labels.join("|")) break;
      continue;
    }
    if (label === "Period Ending") continue;
    data.set(label, cells.slice(1).toArray().map((cell) => $(cell).text().replace(/\s+/g, " ").trim()));
  }
  return { periods, rows: data };
}

function parseStatistics(html: string): Map<string, string> {
  const $ = cheerio.load(html);
  const map = new Map<string, string>();
  $("tr").each((_, row) => {
    const cells = $(row).find("td,th");
    if (cells.length < 2) return;
    const label = textOf(cells.first());
    if (!label) return;
    map.set(label, $(cells.get(1)).text().replace(/\s+/g, " ").trim());
  });
  return map;
}

function parseHistory(html: string): SaHistoryPoint[] {
  const $ = cheerio.load(html);
  const out: SaHistoryPoint[] = [];
  $("tr").each((_, row) => {
    const cells = $(row).find("td");
    if (cells.length < 6) return;
    const dateText = $(cells.get(0)).text().trim();
    const parsed = new Date(`${dateText} 00:00:00 UTC`);
    if (Number.isNaN(parsed.getTime())) return;
    const open = parseNumber($(cells.get(1)).text());
    const high = parseNumber($(cells.get(2)).text());
    const low = parseNumber($(cells.get(3)).text());
    const close = parseNumber($(cells.get(4)).text());
    const volume = parseNumber($(cells.get(7)).text()) ?? 0;
    if (open == null || high == null || low == null || close == null) return;
    out.push({ date: parsed.toISOString().slice(0, 10), open, high, low, close, volume });
  });
  return out.sort((a, b) => a.date.localeCompare(b.date));
}

function parseForecast(html: string): SaForecast {
  const $ = cheerio.load(html);
  const tables = $("table")
    .toArray()
    .map((table) =>
      $(table)
        .find("tr")
        .toArray()
        .map((row) => {
          const cells = $(row).find("td,th").toArray();
          return {
            label: cells.length ? $(cells[0]).text().replace(/\s+/g, " ").trim() : "",
            values: cells.slice(1).map((cell) => $(cell).text().replace(/\s+/g, " ").trim()),
          };
        }),
    );

  const priceTable = tables.find((rows) => rows.some((row) => row.label === "Price"));
  const priceValues = priceTable?.find((row) => row.label === "Price")?.values.map((value) => parseNumber(value)) ?? [];

  const ratingTable = tables.find((rows) => rows.some((row) => row.label === "Strong Buy"));
  const rating = (label: string) => {
    const values = ratingTable?.find((row) => row.label === label)?.values;
    return values?.length ? Number(values[values.length - 1]) || 0 : 0;
  };
  const total = rating("Total");

  const findSeries = (heading: string) => {
    const table = tables.find((rows) => rows[0]?.label === heading && rows[0].values.every((value) => /^\d{4}$/.test(value)));
    if (!table) return null;
    return {
      years: table[0].values,
      avg: table.find((row) => row.label === "Avg")?.values ?? [],
    };
  };
  const revenueSeries = findSeries("Revenue");
  const revenueGrowthSeries = findSeries("Revenue Growth");
  const epsSeries = findSeries("EPS");
  const epsGrowthSeries = findSeries("EPS Growth");

  const estimates: SaForecast["estimates"] = [];
  if (revenueSeries) {
    revenueSeries.years.forEach((year, index) => {
      estimates.push({
        label: `FY ${year}`,
        endDate: `${year}-12-31`,
        revenue: parseSuffixed(revenueSeries.avg[index] ?? ""),
        revenueGrowth: (parseNumber(revenueGrowthSeries?.avg[index] ?? "") ?? 0) / 100 || null,
        eps: parseNumber(epsSeries?.avg[index] ?? ""),
        epsGrowth: (parseNumber(epsGrowthSeries?.avg[index] ?? "") ?? 0) / 100 || null,
      });
    });
  }

  return {
    priceLow: priceValues[0] ?? null,
    priceAverage: priceValues[1] ?? null,
    priceMedian: priceValues[2] ?? null,
    priceHigh: priceValues[3] ?? null,
    analystCount: total || null,
    distribution: total
      ? {
          strongBuy: rating("Strong Buy"),
          buy: rating("Buy"),
          hold: rating("Hold"),
          sell: rating("Sell"),
          strongSell: rating("Strong Sell"),
        }
      : null,
    estimates,
  };
}

function parseCompany(html: string): {
  name: string | null;
  description: string;
  employees: number | null;
  website: string | null;
} {
  const $ = cheerio.load(html);
  const title = $("h1").first().text().replace(/\s+/g, " ").trim();
  const paragraphs = $("p")
    .map((_, element) => $(element).text().replace(/\s+/g, " ").trim())
    .get()
    .filter(
      (text) =>
        text.length > 140 &&
        !/cookie|subscribe|terms|privacy/i.test(text) &&
        !/^Company Description/i.test(text) &&
        !text.includes("Company Description"),
    );
  const description = paragraphs[0] ?? "";
  const body = $("body").text().replace(/\s+/g, " ");
  const employeesMatch = body.match(/Employees\s+([\d,]+)/);
  const websiteMatch = body.match(/Website\s+([a-z0-9.-]+\.[a-z]{2,})/i);
  return {
    name: title || null,
    description,
    employees: employeesMatch ? Number(employeesMatch[1].replace(/,/g, "")) : null,
    website: websiteMatch ? websiteMatch[1] : null,
  };
}

async function safePage(
  exchange: string,
  ticker: string,
  page: string,
  url: string,
): Promise<string> {
  try {
    return await fetchPage(exchange, ticker, page, url);
  } catch {
    return "";
  }
}

export async function fetchStockAnalysis(
  exchange: string,
  ticker: string,
): Promise<StockAnalysisCompany> {
  const base = `https://stockanalysis.com/quote/${exchange}/${ticker}`;
  const [incomeHtml, incomeQHtml, balanceHtml, balanceQHtml, cashHtml, cashQHtml, statsHtml, forecastHtml, companyHtml, historyHtml] =
    await Promise.all([
      fetchPage(exchange, ticker, "income", `${base}/financials/income-statement/`),
      fetchPage(exchange, ticker, "income-q", `${base}/financials/income-statement/?p=quarterly`),
      fetchPage(exchange, ticker, "balance", `${base}/financials/balance-sheet/`),
      fetchPage(exchange, ticker, "balance-q", `${base}/financials/balance-sheet/?p=quarterly`),
      fetchPage(exchange, ticker, "cash", `${base}/financials/cash-flow-statement/`),
      fetchPage(exchange, ticker, "cash-q", `${base}/financials/cash-flow-statement/?p=quarterly`),
      fetchPage(exchange, ticker, "statistics", `${base}/statistics/`),
      safePage(exchange, ticker, "forecast", `${base}/forecast/`),
      safePage(exchange, ticker, "company", `${base}/company/`),
      safePage(exchange, ticker, "history", `${base}/history/`),
    ]);

  const statistics = parseStatistics(statsHtml);
  const history = parseHistory(historyHtml);
  const company = parseCompany(companyHtml);
  const currencyMatch = incomeHtml.match(/Financials in millions ([A-Z]{3})/);
  const currency = currencyMatch?.[1] ?? "USD";
  const price = history.at(-1)?.close ?? 0;
  const prevClose = history.at(-2)?.close ?? null;
  const last180 = history.slice(-180);
  const stat = (label: string) => parseSuffixed(statistics.get(label) ?? "");

  return {
    ticker,
    exchange,
    name: company.name ?? ticker,
    currency,
    description: company.description,
    sector: "",
    industry: "",
    employees: company.employees,
    website: company.website,
    price,
    prevClose,
    changePct: prevClose && prevClose > 0 ? price / prevClose - 1 : null,
    marketCap: stat("Market Cap"),
    sharesOutstanding: stat("Shares Outstanding"),
    high52: last180.length ? Math.max(...last180.map((point) => point.high)) : null,
    low52: last180.length ? Math.min(...last180.map((point) => point.low)) : null,
    dividendYield: (parseNumber(statistics.get("Dividend Yield") ?? "") ?? 0) / 100 || null,
    pe: parseNumber(statistics.get("PE Ratio") ?? ""),
    forwardPe: parseNumber(statistics.get("Forward PE") ?? ""),
    pb: parseNumber(statistics.get("PB Ratio") ?? ""),
    evEbitda: parseNumber(statistics.get("EV / EBITDA") ?? ""),
    roe: (parseNumber(statistics.get("Return on Equity (ROE)") ?? "") ?? 0) / 100 || null,
    roic: (parseNumber(statistics.get("Return on Invested Capital (ROIC)") ?? "") ?? 0) / 100 || null,
    roce: (parseNumber(statistics.get("Return on Capital Employed (ROCE)") ?? "") ?? 0) / 100 || null,
    history,
    annualIncome: parseStatement(incomeHtml, false),
    annualBalance: parseStatement(balanceHtml, false),
    annualCash: parseStatement(cashHtml, false),
    quarterlyIncome: parseStatement(incomeQHtml, true),
    quarterlyBalance: parseStatement(balanceQHtml, true),
    quarterlyCash: parseStatement(cashQHtml, true),
    forecast: parseForecast(forecastHtml),
    statistics,
  };
}
