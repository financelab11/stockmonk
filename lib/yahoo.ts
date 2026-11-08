import type { PricePoint } from "./schemas";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";
const YAHOO_ROOT = "https://query1.finance.yahoo.com";

let sessionPromise: Promise<{ crumb: string; cookie: string }> | null = null;

async function createSession(): Promise<{ crumb: string; cookie: string }> {
  const home = await fetch("https://fc.yahoo.com", {
    headers: { "User-Agent": USER_AGENT },
    signal: AbortSignal.timeout(30_000),
  });
  const setCookie = home.headers.get("set-cookie") ?? "";
  const cookie = setCookie.split(";")[0] ?? "";
  const crumbRes = await fetch(`${YAHOO_ROOT}/v1/test/getcrumb`, {
    headers: { "User-Agent": USER_AGENT, Cookie: cookie },
    signal: AbortSignal.timeout(30_000),
  });
  if (!crumbRes.ok) throw new Error(`Yahoo crumb ${crumbRes.status}`);
  const crumb = (await crumbRes.text()).trim();
  if (!crumb || crumb.includes("<") || crumb.length > 32) {
    throw new Error("Yahoo crumb unavailable");
  }
  return { crumb, cookie };
}

async function session() {
  if (!sessionPromise) {
    sessionPromise = createSession().catch((error) => {
      sessionPromise = null;
      throw error;
    });
  }
  return sessionPromise;
}

export type YahooQuoteSummary = {
  price?: {
    longName?: string;
    shortName?: string;
    currency?: string;
    marketCap?: { raw?: number };
    regularMarketPrice?: { raw?: number };
    regularMarketPreviousClose?: { raw?: number };
    sharesOutstanding?: { raw?: number };
    exchangeName?: string;
  };
  assetProfile?: {
    sector?: string;
    industry?: string;
    longBusinessSummary?: string;
    fullTimeEmployees?: number;
    city?: string;
    state?: string;
    country?: string;
    website?: string;
  };
  summaryDetail?: {
    fiftyTwoWeekHigh?: { raw?: number };
    fiftyTwoWeekLow?: { raw?: number };
    dividendYield?: { raw?: number };
  };
  financialData?: {
    totalRevenue?: { raw?: number };
    revenueGrowth?: { raw?: number };
    grossMargins?: { raw?: number };
    operatingMargins?: { raw?: number };
    profitMargins?: { raw?: number };
    returnOnEquity?: { raw?: number };
    freeCashflow?: { raw?: number };
    totalCash?: { raw?: number };
    totalDebt?: { raw?: number };
  };
  defaultKeyStatistics?: {
    trailingEps?: { raw?: number };
    forwardEps?: { raw?: number };
    sharesOutstanding?: { raw?: number };
  };
};

export async function yahooQuoteSummary(
  ticker: string,
  modules: string,
): Promise<YahooQuoteSummary | null> {
  const { crumb, cookie } = await session();
  const url = `${YAHOO_ROOT}/v10/finance/quoteSummary/${encodeURIComponent(
    ticker,
  )}?modules=${modules}&crumb=${encodeURIComponent(crumb)}`;
  const response = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Cookie: cookie },
    signal: AbortSignal.timeout(45_000),
  });
  if (!response.ok) return null;
  const json = (await response.json()) as {
    quoteSummary?: { result?: YahooQuoteSummary[] };
  };
  return json.quoteSummary?.result?.[0] ?? null;
}

export type YahooChart = {
  points: PricePoint[];
  meta: {
    currency?: string;
    regularMarketPrice?: number;
    chartPreviousClose?: number;
    fiftyTwoWeekHigh?: number;
    fiftyTwoWeekLow?: number;
  };
};

export async function yahooChart(
  ticker: string,
  range = "10y",
): Promise<YahooChart | null> {
  const url = `${YAHOO_ROOT}/v8/finance/chart/${encodeURIComponent(
    ticker,
  )}?range=${range}&interval=1d&includeAdjustedClose=true`;
  const response = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
    signal: AbortSignal.timeout(45_000),
  });
  if (!response.ok) return null;
  const json = (await response.json()) as {
    chart?: {
      result?: Array<{
        timestamp?: number[];
        meta?: YahooChart["meta"];
        indicators?: {
          quote?: Array<{
            open?: Array<number | null>;
            high?: Array<number | null>;
            low?: Array<number | null>;
            close?: Array<number | null>;
            volume?: Array<number | null>;
          }>;
          adjclose?: Array<{ adjclose?: Array<number | null> }>;
        };
      }>;
    };
  };
  const result = json.chart?.result?.[0];
  if (!result?.timestamp || !result.indicators?.quote?.[0]) return null;
  const quote = result.indicators.quote[0];
  const adj = result.indicators.adjclose?.[0]?.adjclose ?? [];
  const points: PricePoint[] = [];
  result.timestamp.forEach((timestamp, index) => {
    const close = quote.close?.[index];
    if (close == null || !Number.isFinite(close)) return;
    const date = new Date(timestamp * 1000).toISOString().slice(0, 10);
    const open = quote.open?.[index] ?? close;
    const high = quote.high?.[index] ?? close;
    const low = quote.low?.[index] ?? close;
    const volume = quote.volume?.[index] ?? 0;
    points.push({
      d: date,
      o: open,
      h: high,
      l: low,
      c: close,
      a: adj[index] ?? close,
      v: volume,
    });
  });
  return { points, meta: result.meta ?? {} };
}
