import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import type {
  V2ScoreRecord,
  V2ScoresDataset,
} from "./scoring-v2/types";

const ROOT = process.cwd();
const SUMMARY = path.join(ROOT, "public", "data", "v2", "scores.json");
const COMPANIES = path.join(ROOT, "public", "data", "v2", "companies");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

export const getV2Scores = cache((): V2ScoresDataset | null =>
  readJson<V2ScoresDataset>(SUMMARY),
);

export const getV2Score = cache((ticker: string): V2ScoreRecord | null => {
  const normalized = ticker.toUpperCase();
  return readJson<V2ScoreRecord>(path.join(COMPANIES, `${normalized}.json`));
});

export function getV2ScoreOrNull(ticker: string): V2ScoreRecord | null {
  return getV2Score(ticker);
}
