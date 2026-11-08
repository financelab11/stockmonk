import "server-only";

import fs from "node:fs";
import path from "node:path";
import { FACTOR_CONFIG, type ScreenerRow } from "./screener-model";

const FILE = path.join(process.cwd(), "public", "data", "screener.json");

let rowsCache: ScreenerRow[] | null = null;

export function getScreenerRows(): ScreenerRow[] {
  if (rowsCache) return rowsCache;
  try {
    rowsCache = JSON.parse(fs.readFileSync(FILE, "utf8")) as ScreenerRow[];
  } catch {
    rowsCache = [];
  }
  return rowsCache;
}

export const getScreenerFactorConfig = () => FACTOR_CONFIG;

export function getScreenerSummary() {
  const rows = getScreenerRows();
  const withComposite = rows.filter((row) => row.composite != null);
  const composites = withComposite
    .map((row) => row.composite as number)
    .sort((a, b) => a - b);
  const median =
    composites.length === 0 ? null : composites[Math.floor(composites.length / 2)];
  const average =
    composites.length === 0
      ? null
      : Math.round(composites.reduce((sum, value) => sum + value, 0) / composites.length);
  return {
    count: rows.length,
    median,
    average,
    top: rows.slice(0, 5),
    asOf: rows.map((row) => row.asOf).sort().at(-1) ?? null,
  };
}
