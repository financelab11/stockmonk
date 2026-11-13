/**
 * Forward Revenue Growth Ranker configuration.
 *
 * All product-level knobs live here so the UI, API and pipeline read the same
 * values. The FX rate itself is data, not code: it is loaded from
 * data/fx/usd-inr.json (or GROWTH_RANKER_USD_INR) and always shown with its
 * as-of date.
 */
export const GROWTH_RANKER = {
  projectionYears: 3,
  defaultMarketCapThreshold: { value: 1000, unit: "INR_CRORE" as const },
  /** Consensus is "robust" only when at least this many analysts contribute. */
  minConsensusAnalysts: 3,
  /** Flag the analyst view when it differs from consensus by more than this. */
  divergenceFlagPct: 0.1,
  /** Forward growth applied to extend from FY+2 to FY+3, as a share of the
   *  consensus-implied FY+2 growth. Historical growth is never an input. */
  extensionFade: 0.85,
  concurrency: 3,
  retries: 2,
  retryBaseDelayMs: 400,
  maxRows: 2500,
  maxUploadBytes: 25_000_000,
  fiscalYearEnd: { month: 3, day: 31 },
  fx: {
    pair: "USD/INR",
    env: "GROWTH_RANKER_USD_INR",
  },
  llm: {
    baseUrlEnv: "GROWTH_RANKER_LLM_BASE_URL",
    apiKeyEnv: "GROWTH_RANKER_LLM_API_KEY",
    modelEnv: "GROWTH_RANKER_LLM_MODEL",
    timeoutMs: 90_000,
  },
  jobDirEnv: "GROWTH_RANKER_JOB_DIR",
  /** Jobs with no heartbeat for this long are marked failed on read. */
  staleJobMs: 15 * 60 * 1000,
} as const;

export type ThresholdUnit = "INR_CRORE" | "USD_MILLION";

export const THRESHOLD_UNITS: Array<{ value: ThresholdUnit; label: string }> = [
  { value: "INR_CRORE", label: "INR crore" },
  { value: "USD_MILLION", label: "USD million" },
];
