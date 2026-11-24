import type { StockStory } from "@/content/stocks/types";

export type StoryEventType =
  | "new-quarter"
  | "new-filing"
  | "new-earnings"
  | "consensus-revision"
  | "segment-change"
  | "price-stale"
  | "narrative-behind";

export type StoryEvent = {
  type: StoryEventType;
  date: string | null;
  detail: string;
};

export type StoryFreshnessStatus =
  "current" | "rewrite-pending" | "data-stale" | "source-gap";

export type FilingInfo = {
  form: string;
  filed: string;
  reportDate?: string;
  accession: string;
  url?: string;
};

export type StoryFreshnessRow = {
  ticker: string;
  name: string;
  priceAsOf: string | null;
  latestQuarter: string | null;
  latestFiling: FilingInfo | null;
  earnings: { filed: string; accession: string } | null;
  consensusAsOf: string | null;
  segmentsAsOf: string | null;
  narrativeUpdatedAt: string | null;
  status: StoryFreshnessStatus;
  events: StoryEvent[];
  checkedAt: string;
};

export type StoryFreshnessManifest = {
  generatedAt: string;
  total: number;
  counts: Record<StoryFreshnessStatus, number>;
  tickers: Record<string, StoryFreshnessRow>;
};

export type PipelineTickerState = {
  latestQuarter: string | null;
  latestQuarterScore: number | null;
  latest10K: string | null;
  latest10Q: string | null;
  earningsAccession: string | null;
  earningsFiled: string | null;
  consensusAsOf: string | null;
  consensusTargetMean: number | null;
  consensusEps: Record<string, number | null>;
  segmentsAsOf: string | null;
  segmentsHash: string | null;
};

export type PipelineState = {
  version: 1;
  updatedAt: string;
  tickers: Record<string, PipelineTickerState>;
};

export function quarterScore(
  period: string | null | undefined,
  fyear: number | null | undefined,
): number | null {
  if (!period || fyear == null) return null;
  const match = /Q([1-4])/.exec(period);
  if (!match) return null;
  return Number(fyear) * 4 + Number(match[1]);
}

export function latestQuarterScore(
  quarters: Array<{ period?: string | null; fyear?: number | null }>,
): number | null {
  const scores = quarters
    .map((row) => quarterScore(row.period, row.fyear))
    .filter((score): score is number => score != null);
  return scores.length ? Math.max(...scores) : null;
}

export function latestQuarterLabel(
  quarters: Array<{ period?: string | null; fyear?: number | null }>,
): string | null {
  const latest = [...quarters]
    .filter((row) => row.period && row.fyear != null)
    .sort(
      (a, b) =>
        (quarterScore(b.period, b.fyear) ?? 0) -
        (quarterScore(a.period, a.fyear) ?? 0),
    )[0];
  return latest?.period && latest.fyear != null
    ? `${latest.period} FY${String(latest.fyear).slice(-2)}`
    : null;
}

export function storyQuarterScore(story: StockStory): number | null {
  const text = JSON.stringify(story);
  const scores: number[] = [];
  for (const match of text.matchAll(/Q([1-4])\s*FY\s*(\d{4}|\d{2})\b/g)) {
    const quarter = Number(match[1]);
    const raw = match[2];
    const year = raw.length === 4 ? Number(raw) : 2000 + Number(raw);
    scores.push(year * 4 + quarter);
  }
  return scores.length ? Math.max(...scores) : null;
}

export function statusFromEvents(
  events: StoryEvent[],
  sourceGap = false,
): StoryFreshnessStatus {
  if (events.some((event) => event.type !== "price-stale")) {
    return "rewrite-pending";
  }
  if (sourceGap) return "source-gap";
  if (events.some((event) => event.type === "price-stale")) {
    return "data-stale";
  }
  return "current";
}

export function emptyCounts(): Record<StoryFreshnessStatus, number> {
  return {
    current: 0,
    "rewrite-pending": 0,
    "data-stale": 0,
    "source-gap": 0,
  };
}
