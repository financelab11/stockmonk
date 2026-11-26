import path from "node:path";
import { isResearchTicker } from "../../config/universe";

/**
 * Research names keep their full inputs in `data/processed` for the report
 * runtime. Score-only names use `data/score-inputs`, which is generated in CI
 * and intentionally not committed: only the compact public score artifacts are
 * versioned for the wider universe.
 */
export function dataRootFor(ticker: string): string {
  return path.join(
    process.cwd(),
    "data",
    isResearchTicker(ticker) ? "processed" : "score-inputs",
  );
}

export function tickerDir(ticker: string, file?: string): string {
  const normalized = ticker.toUpperCase();
  // CON is a valid US ticker but a reserved Windows device name. Keep the
  // public ticker as CON and use a safe on-disk directory.
  const safe = normalized === "CON" ? "CON_" : normalized;
  const dir = path.join(dataRootFor(ticker), safe);
  return file ? path.join(dir, file) : dir;
}
