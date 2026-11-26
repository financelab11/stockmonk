import { ARCHIVED_COMPANIES } from "./archive";
import { COVERAGE_GROUPS } from "./coverage";
import SCORE_UNIVERSE_ENTRIES from "./score-universe.json";

/**
 * The Stockmonk coverage universe.
 *
 * The 500 research names receive the full ten-section report, screener row,
 * score record and sector KPI file. The wider score universe adds names that
 * receive the four-factor score and the complete evidence trail, but not the
 * long-form research report yet.
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

export type ScoreUniverseEntry = {
  ticker: string;
  name?: string;
  exchange?: string | null;
  sector?: string;
  industry?: string;
  marketCap?: number | null;
};

/**
 * Names that receive a score and evidence page but not the ten-section
 * research report. The generated file is the single place to swap the
 * universe; scripts and pages never hard-code the extra tickers.
 */
export const SCORE_ONLY_UNIVERSE = SCORE_UNIVERSE_ENTRIES as ScoreUniverseEntry[];

export const SCORE_ONLY_TICKERS = [
  ...new Set(
    SCORE_ONLY_UNIVERSE.map((entry) => entry.ticker.toUpperCase()).filter(
      (ticker) => !(RESEARCH_TICKERS as readonly string[]).includes(ticker),
    ),
  ),
];

/** Every company with a four-factor score: research names plus score-only names. */
export const SCORE_TICKERS = [...RESEARCH_TICKERS, ...SCORE_ONLY_TICKERS];

export const SCORE_TICKER_SET = new Set(SCORE_TICKERS);

export type ScoreTicker = string;

/** Tickers whose companies no longer trade and keep their final market value. */
export const ARCHIVED_TICKERS = ARCHIVED_COMPANIES.map(
  (company) => company.ticker,
);

/** The 489 research names that receive a daily market-data refresh. */
export const ACTIVE_RESEARCH_TICKERS = RESEARCH_TICKERS.filter(
  (ticker) => !ARCHIVED_TICKERS.includes(ticker),
);

/** Every live score name, including score-only companies. */
export const ACTIVE_SCORE_TICKERS = SCORE_TICKERS.filter(
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

export function isScoreTicker(ticker: string): ticker is ScoreTicker {
  return SCORE_TICKER_SET.has(ticker.toUpperCase());
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
  "BRK.A": { sec: "BRK-A", yahoo: "BRK-A" },
  "BRK.B": { sec: "BRK-B", yahoo: "BRK-B" },
  "CIG.C": { sec: "CIG-C", yahoo: "CIG-C" },
  "GEF.B": { sec: "GEF-B", yahoo: "GEF-B" },
  "LEN.B": { sec: "LEN-B", yahoo: "LEN-B" },
  "MKC.V": { sec: "MKC-V", yahoo: "MKC-V" },
  "MOG.B": { sec: "MOG-B", yahoo: "MOG-B" },
  "UHAL.B": { sec: "UHAL-B", yahoo: "UHAL-B" },
  // Pure Storage renamed to Everpure and now trades under the single-letter
  // symbol P. The canonical Stockmonk ticker stays PSTG for URL continuity.
  PSTG: { sec: "PSTG", yahoo: "P" },
};
