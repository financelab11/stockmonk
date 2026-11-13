import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { z } from "zod";
import { forecastResultSchema, type ForecastResult } from "./types";

const datasetSchema = z.object({
  generatedAt: z.string(),
  generatedFrom: z.string(),
  jobId: z.string(),
  fx: z.object({ pair: z.string(), rate: z.number(), asOf: z.string() }),
  threshold: z.object({
    value: z.number(),
    unit: z.string(),
    inr: z.number(),
  }),
  processed: z.number().int(),
  estimated: z.number().int(),
  skipped: z.number().int(),
  results: z.array(forecastResultSchema),
});

export type GrowthRankerDataset = Omit<
  z.infer<typeof datasetSchema>,
  "results"
> & { results: ForecastResult[] };

const DATA_FILE = path.join(process.cwd(), "data", "growth-ranker", "estimates.json");

export const getGrowthRankerDataset = cache((): GrowthRankerDataset => {
  const parsed = datasetSchema.safeParse(
    JSON.parse(fs.readFileSync(DATA_FILE, "utf8")),
  );
  if (!parsed.success) {
    throw new Error(
      `Invalid forward-estimates dataset: ${parsed.error.issues[0]?.message ?? "unknown error"}`,
    );
  }
  return parsed.data;
});

export const getGrowthRankerEstimate = cache((ticker: string) => {
  const dataset = getGrowthRankerDataset();
  return (
    dataset.results.find(
      (result) => result.ticker.toUpperCase() === ticker.toUpperCase(),
    ) ?? null
  );
});

export function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2
    ? sorted[middle]
    : (sorted[middle - 1] + sorted[middle]) / 2;
}
