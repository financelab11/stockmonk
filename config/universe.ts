/**
 * The Stockmonk coverage universe.
 *
 * Research tickers receive a full report (10 mandatory sections). Supporting
 * tickers receive a lightweight page and appear in the "All Stocks" directory.
 * Adding a company is a one-line change: add the ticker to a sector below and
 * run `pnpm ingest` followed by `pnpm build:data`.
 */

export const RESEARCH_TICKERS = [
  "NVDA",
  "MSFT",
  "AAPL",
  "GOOGL",
  "AMZN",
  "META",
  "AVGO",
  "TSLA",
  "LLY",
  "JPM",
] as const;

export type ResearchTicker = (typeof RESEARCH_TICKERS)[number];

export const SUPPORTING_TICKERS = [
  // Semiconductors
  "AMD",
  "INTC",
  "QCOM",
  "MU",
  "TXN",
  "AMAT",
  "LRCX",
  "KLAC",
  // Software
  "ORCL",
  "CRM",
  "ADBE",
  "NOW",
  "INTU",
  "PANW",
  "SNOW",
  "CRWD",
  "DDOG",
  // Consumer internet
  "NFLX",
  "SHOP",
  "UBER",
  "ABNB",
  "BKNG",
  "PINS",
  "SPOT",
  // Hardware
  "DELL",
  "HPQ",
  "CSCO",
  "IBM",
  // Banks
  "BAC",
  "GS",
  "MS",
  "WFC",
  "C",
  // Healthcare
  "UNH",
  "JNJ",
  "PFE",
  "MRK",
  "ABBV",
  "TMO",
  // Energy
  "XOM",
  "CVX",
  "COP",
  // Consumer staples
  "PG",
  "KO",
  "PEP",
  "COST",
  "WMT",
  // Industrials
  "CAT",
  "DE",
  "HON",
  "LMT",
  "BA",
  // Insurance
  "PGR",
  "AIG",
  // Payments
  "V",
  "MA",
  "AXP",
  "PYPL",
  // Benchmark (not displayed as a company)
  "SPY",
] as const;

export const ALL_TICKERS = [...RESEARCH_TICKERS, ...SUPPORTING_TICKERS] as const;
export type Ticker = (typeof ALL_TICKERS)[number];

export const BENCHMARK_TICKER = "SPY";

export function isResearchTicker(ticker: string): ticker is ResearchTicker {
  return (RESEARCH_TICKERS as readonly string[]).includes(ticker.toUpperCase());
}

/** Tickers shown in the home / discover "recently researched" strips. */
export const RECENTLY_RESEARCHED = RESEARCH_TICKERS;
