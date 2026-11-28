import type { PricePoint } from "./schemas";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";
const YAHOO_ROOTS = [
  "https://query1.finance.yahoo.com",
  "https://query2.finance.yahoo.com",
];
const YAHOO_ROOT = YAHOO_ROOTS[0];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let sessionPromise: Promise<{ crumb: string; cookie: string }> | null = null;

/**
 * Yahoo sometimes rate-limits or rejects one query host while the other keeps
 * working. Try both hosts, then retry the pair once with a short backoff so a
 * transient 429 does not drop a ticker from the daily refresh.
 */
async function yahooFetch(
  pathname: string,
  init: RequestInit,
): Promise<Response | null> {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    for (const root of YAHOO_ROOTS) {
      try {
        const response = await fetch(`${root}${pathname}`, init);
        if (response.ok) return response;
        if (response.status !== 429 && response.status < 500) continue;
      } catch {
        // try the next host
      }
    }
    if (attempt === 0) await sleep(1200);
  }
  return null;
}

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
    trailingAnnualDividendYield?: { raw?: number };
    marketCap?: { raw?: number };
    trailingPE?: { raw?: number };
    forwardPE?: { raw?: number };
  };
  financialData?: {
    totalRevenue?: { raw?: number };
    revenueGrowth?: { raw?: number };
    grossMargins?: { raw?: number };
    operatingMargins?: { raw?: number };
    profitMargins?: { raw?: number };
    returnOnEquity?: { raw?: number };
    ebitda?: { raw?: number };
    freeCashflow?: { raw?: number };
    totalCash?: { raw?: number };
    totalDebt?: { raw?: number };
    targetMeanPrice?: { raw?: number };
    targetHighPrice?: { raw?: number };
    targetLowPrice?: { raw?: number };
    numberOfAnalystOpinions?: { raw?: number };
    recommendationKey?: string;
  };
  defaultKeyStatistics?: {
    trailingEps?: { raw?: number };
    forwardEps?: { raw?: number };
    sharesOutstanding?: { raw?: number };
    pegRatio?: { raw?: number };
    enterpriseValue?: { raw?: number };
    enterpriseToEbitda?: { raw?: number };
  };
  earnings?: {
    earningsChart?: {
      quarterly?: Array<{
        date: string;
        actual?: { raw?: number };
        estimate?: { raw?: number };
        fiscalQuarter?: string;
        calendarQuarter?: string;
        periodEndDate?: { fmt?: string };
      }>;
    };
  };
  earningsTrend?: {
    trend?: Array<{
      period: string;
      endDate?: string;
      growth?: { raw?: number };
      earningsEstimate?: {
        avg?: { raw?: number };
        growth?: { raw?: number };
        numberOfAnalysts?: { raw?: number };
      };
      revenueEstimate?: {
        avg?: { raw?: number };
        growth?: { raw?: number };
        numberOfAnalysts?: { raw?: number };
      };
    }>;
  };
  incomeStatementHistory?: { incomeStatementHistory?: YahooStatement[] };
  incomeStatementHistoryQuarterly?: {
    incomeStatementHistory?: YahooStatement[];
  };
};

export type YahooStatement = {
  endDate?: { fmt?: string };
  totalRevenue?: { raw?: number };
  operatingIncome?: { raw?: number };
  netIncome?: { raw?: number };
  grossProfit?: { raw?: number };
  interestExpense?: { raw?: number };
  incomeBeforeTax?: { raw?: number };
  incomeTaxExpense?: { raw?: number };
  totalOperatingExpenses?: { raw?: number };
};

export async function yahooQuoteSummary(
  ticker: string,
  modules: string,
): Promise<YahooQuoteSummary | null> {
  const { crumb, cookie } = await session();
  const pathname = `/v10/finance/quoteSummary/${encodeURIComponent(
    ticker,
  )}?modules=${modules}&crumb=${encodeURIComponent(crumb)}`;
  const response = await yahooFetch(pathname, {
    headers: { "User-Agent": USER_AGENT, Cookie: cookie },
    signal: AbortSignal.timeout(45_000),
  });
  if (!response) return null;
  try {
    const json = (await response.json()) as {
      quoteSummary?: { result?: YahooQuoteSummary[] };
    };
    return json.quoteSummary?.result?.[0] ?? null;
  } catch {
    return null;
  }
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
  const pathname = `/v8/finance/chart/${encodeURIComponent(
    ticker,
  )}?range=${range}&interval=1d&includeAdjustedClose=true`;
  const response = await yahooFetch(pathname, {
    headers: { "User-Agent": USER_AGENT },
    signal: AbortSignal.timeout(45_000),
  });
  if (!response) return null;
  let json: {
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
  try {
    json = (await response.json()) as typeof json;
  } catch {
    return null;
  }
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
