import { ARCHIVED_COMPANIES } from "./archive";
import { COVERAGE_GROUPS } from "./coverage";

/**
 * The Stockmonk coverage universe.
 *
 * Every company receives the full research treatment: a ten-section report,
 * screener row, score record and sector KPI file. The library covers 500
 * names; 11 of them have since been acquired or taken private and are marked
 * as archived rather than presented as current market data.
 */
export const CORE_RESEARCH_TICKERS = [
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

export type CoreResearchTicker = (typeof CORE_RESEARCH_TICKERS)[number];

const COVERAGE_TICKERS = COVERAGE_GROUPS.flatMap((group) => group.tickers);

export const RESEARCH_TICKERS = [
  ...CORE_RESEARCH_TICKERS,
  ...COVERAGE_TICKERS.filter(
    (ticker) => !(CORE_RESEARCH_TICKERS as readonly string[]).includes(ticker),
  ),
];

export type ResearchTicker = string;

/** Tickers whose companies no longer trade and keep their final market value. */
export const ARCHIVED_TICKERS = ARCHIVED_COMPANIES.map(
  (company) => company.ticker,
);

/** The 489 names that receive a daily market-data refresh. */
export const ACTIVE_RESEARCH_TICKERS = RESEARCH_TICKERS.filter(
  (ticker) => !ARCHIVED_TICKERS.includes(ticker),
);

export function isArchivedTicker(ticker: string): boolean {
  return ARCHIVED_TICKERS.includes(ticker.toUpperCase());
}

/**
 * Former symbols for companies that changed ticker. The canonical symbol is
 * the current one; these keep old links and searches working.
 */
export const TICKER_REDIRECTS: Record<string, string> = {
  FI: "FISV",
  MMC: "MRSH",
  IAC: "PPLI",
  LC: "HAPN",
  OPAL: "OPLN",
};

/** All companies are research names now; kept for API compatibility. */
export const SUPPORTING_TICKERS: string[] = [];

export const BENCHMARK_TICKER = "SPY";

export const ALL_TICKERS = [...RESEARCH_TICKERS, BENCHMARK_TICKER];

export type Ticker = string;

export function isResearchTicker(ticker: string): ticker is ResearchTicker {
  return RESEARCH_TICKERS.includes(ticker.toUpperCase());
}

export function isCoreResearchTicker(
  ticker: string,
): ticker is CoreResearchTicker {
  return (CORE_RESEARCH_TICKERS as readonly string[]).includes(
    ticker.toUpperCase(),
  );
}

/** The ten hand-written reports featured on the home page. */
export const RECENTLY_RESEARCHED = CORE_RESEARCH_TICKERS;

/**
 * Share-class and vendor symbol differences. Fundamentals come from the SEC
 * CIK, which is shared by all share classes.
 */
export const TICKER_ALIASES: Record<string, { sec: string; yahoo: string }> = {
  "BRK.B": { sec: "BRK-B", yahoo: "BRK-B" },
};
