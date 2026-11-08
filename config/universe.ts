import { COVERAGE_GROUPS } from "./coverage";

/**
 * The Stockmonk coverage universe.
 *
 * Every company now receives the full research treatment: a hand-written
 * ten-section report for all 229 names, with the original ten retained as the
 * home-page feature set.
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

/** All companies are research names now; kept for API compatibility. */
export const SUPPORTING_TICKERS: string[] = [];

export const BENCHMARK_TICKER = "SPY";

export const ALL_TICKERS = [...RESEARCH_TICKERS, BENCHMARK_TICKER];

export type Ticker = string;

export function isResearchTicker(ticker: string): ticker is ResearchTicker {
  return RESEARCH_TICKERS.includes(ticker.toUpperCase());
}

export function isCoreResearchTicker(ticker: string): ticker is CoreResearchTicker {
  return (CORE_RESEARCH_TICKERS as readonly string[]).includes(ticker.toUpperCase());
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
