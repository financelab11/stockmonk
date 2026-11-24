/**
 * Builds the daily story-freshness manifest and the rewrite queue.
 *
 * Run: pnpm detect:events
 *      pnpm detect:events --dry
 *      pnpm detect:events --force-all
 *      pnpm detect:events --ticker=NVDA
 *
 * It compares the latest filings, earnings releases, quarters, consensus and
 * segments with the narrative metadata in content/stocks. A material change
 * marks the story as `rewrite-pending`; a stale market source marks it
 * `data-stale` or, where a gap has been explicitly reviewed, `source-gap`.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { SOURCE_GAPS, isAcceptedSourceGap } from "../config/freshness";
import { RESEARCH_TICKERS } from "../config/universe";
import { STOCK_STORIES } from "../content/stocks";
import {
  consensusSchema,
  segmentMixSchema,
  tickerDataSchema,
} from "../lib/schemas";
import {
  emptyCounts,
  latestQuarterLabel,
  latestQuarterScore,
  statusFromEvents,
  storyQuarterScore,
  type FilingInfo,
  type PipelineState,
  type PipelineTickerState,
  type StoryEvent,
  type StoryFreshnessManifest,
  type StoryFreshnessRow,
} from "../lib/story-freshness";

const ROOT = process.cwd();
const PROCESSED = path.join(ROOT, "data", "processed");
const EARNINGS = path.join(ROOT, "data", "earnings");
const CONSENSUS = path.join(ROOT, "data", "consensus");
const SEGMENTS = path.join(ROOT, "data", "segments");
const STATE_FILE = path.join(ROOT, "data", "state", "pipeline-state.json");
const EVENTS_FILE = path.join(ROOT, "data", "events", "latest.json");
const MANIFEST_FILE = path.join(ROOT, "data", "story-freshness.json");

const DRY = process.argv.includes("--dry");
const FORCE_ALL = process.argv.includes("--force-all");
const ONLY = process.argv
  .find((arg) => arg.startsWith("--ticker="))
  ?.split("=")[1]
  ?.toUpperCase();
const TODAY = new Date().toISOString().slice(0, 10);
const PRICE_MAX_AGE_DAYS = 5;

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function writeJson(file: string, value: unknown) {
  if (DRY) return;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function daysBetween(a: string, b: string): number {
  return Math.round(
    (new Date(`${b.slice(0, 10)}T00:00:00Z`).getTime() -
      new Date(`${a.slice(0, 10)}T00:00:00Z`).getTime()) /
      86_400_000,
  );
}

function latestFiling(
  sec: {
    filings?: {
      latest10K?: FilingInfo;
      latest10Q?: FilingInfo;
    };
  } | null,
): FilingInfo | null {
  const filings = [sec?.filings?.latest10K, sec?.filings?.latest10Q].filter(
    (filing): filing is FilingInfo =>
      Boolean(filing?.accession && filing.filed),
  );
  return filings.sort((a, b) => b.filed.localeCompare(a.filed))[0] ?? null;
}

type EarningsFile = {
  accession: string;
  filed: string;
  reportDate?: string;
};

function consensusEps(
  consensus: ReturnType<typeof consensusSchema.parse> | null,
): Record<string, number | null> {
  if (!consensus) return {};
  const result: Record<string, number | null> = {};
  for (const estimate of consensus.estimates) {
    result[estimate.period] = estimate.epsAvg;
  }
  if (consensus.currentQuarter) {
    result.currentQuarter = consensus.currentQuarter.epsAvg;
  }
  return result;
}

function changedByMoreThan(
  previous: number | null | undefined,
  current: number | null | undefined,
  threshold = 0.05,
): boolean {
  if (previous == null || current == null) return false;
  if (previous === 0) return current !== 0;
  return Math.abs(current / previous - 1) > threshold;
}

function consensusRevision(
  previous: PipelineTickerState | undefined,
  current: {
    asOf: string;
    targetMean: number | null;
    eps: Record<string, number | null>;
  },
): string | null {
  if (!previous) return null;
  if (previous.consensusAsOf === current.asOf) return null;
  if (changedByMoreThan(previous.consensusTargetMean, current.targetMean)) {
    return `Target mean moved from ${previous.consensusTargetMean ?? "n/a"} to ${current.targetMean ?? "n/a"}.`;
  }
  for (const [period, value] of Object.entries(current.eps)) {
    if (changedByMoreThan(previous.consensusEps[period], value)) {
      return `${period} EPS estimate moved from ${previous.consensusEps[period] ?? "n/a"} to ${value ?? "n/a"}.`;
    }
  }
  return null;
}

function segmentHash(value: unknown): string | null {
  if (!value) return null;
  return crypto
    .createHash("sha1")
    .update(JSON.stringify(value))
    .digest("hex")
    .slice(0, 16);
}

const previousState = readJson<PipelineState>(STATE_FILE);
const previous = new Map(Object.entries(previousState?.tickers ?? {}));
const nextState: PipelineState = {
  version: 1,
  updatedAt: new Date().toISOString(),
  tickers: {},
};

const rows: Record<string, StoryFreshnessRow> = {};
const events: Array<{
  ticker: string;
  name: string;
  status: string;
  events: StoryEvent[];
}> = [];

for (const ticker of RESEARCH_TICKERS) {
  if (ONLY && ticker !== ONLY) continue;
  const story = STOCK_STORIES[ticker];
  const raw = readJson<unknown>(path.join(PROCESSED, ticker, "data.json"));
  const parsed = raw ? tickerDataSchema.safeParse(raw) : null;
  if (!story || !parsed?.success) {
    rows[ticker] = {
      ticker,
      name: story?.title ?? ticker,
      priceAsOf: null,
      latestQuarter: null,
      latestFiling: null,
      earnings: null,
      consensusAsOf: null,
      segmentsAsOf: null,
      narrativeUpdatedAt: story?.narrativeUpdatedAt ?? null,
      status: "data-stale",
      events: [
        {
          type: "price-stale",
          date: null,
          detail: "No usable processed dataset for this story.",
        },
      ],
      checkedAt: new Date().toISOString(),
    };
    continue;
  }

  const data = parsed.data;
  const sec = readJson<{
    filings?: { latest10K?: FilingInfo; latest10Q?: FilingInfo };
  }>(path.join(PROCESSED, ticker, "sec.json"));
  const filing = latestFiling(sec);
  const earningsRaw = readJson<EarningsFile>(
    path.join(EARNINGS, `${ticker}.json`),
  );
  const consensusRaw = readJson<unknown>(
    path.join(CONSENSUS, `${ticker}.json`),
  );
  const consensusParsed = consensusRaw
    ? consensusSchema.safeParse(consensusRaw)
    : null;
  const consensus = consensusParsed?.success ? consensusParsed.data : null;
  const segmentsRaw = readJson<unknown>(path.join(SEGMENTS, `${ticker}.json`));
  const segmentsParsed = segmentsRaw
    ? segmentMixSchema.safeParse(segmentsRaw)
    : null;
  const segments = segmentsParsed?.success ? segmentsParsed.data : null;

  const dataQuarterScore = latestQuarterScore(data.quarterly);
  const dataQuarterLabel = latestQuarterLabel(data.quarterly);
  const narrativeQuarter = storyQuarterScore(story);
  const narrativeUpdatedAt = story.narrativeUpdatedAt ?? null;
  const narrativeDate = narrativeUpdatedAt;
  const tickerEvents: StoryEvent[] = [];

  if (FORCE_ALL) {
    tickerEvents.push({
      type: "new-quarter",
      date: TODAY,
      detail: "Forced full refresh requested.",
    });
  }

  // A new quarter is material if the prose is behind the dataset.
  if (
    dataQuarterScore != null &&
    narrativeQuarter != null &&
    dataQuarterScore > narrativeQuarter
  ) {
    tickerEvents.push({
      type: "new-quarter",
      date: dataQuarterLabel,
      detail: `Report now references ${dataQuarterLabel}; the dataset has a newer quarter.`,
    });
  }

  // A filing is material when it was filed after the narrative was reviewed.
  if (filing && narrativeDate && filing.filed > narrativeDate) {
    tickerEvents.push({
      type: "new-filing",
      date: filing.filed,
      detail: `${filing.form} ${filing.accession} was filed after the narrative date.`,
    });
  } else if (filing && previous.get(ticker)) {
    const prior = previous.get(ticker);
    const previousFiling =
      filing.form === "10-K" ? prior?.latest10K : prior?.latest10Q;
    if (previousFiling && filing.accession !== previousFiling) {
      tickerEvents.push({
        type: "new-filing",
        date: filing.filed,
        detail: `Latest filing changed to ${filing.form} ${filing.accession}.`,
      });
    }
  }

  if (earningsRaw) {
    const previousEarnings = previous.get(ticker)?.earningsAccession;
    if (previousEarnings && earningsRaw.accession !== previousEarnings) {
      tickerEvents.push({
        type: "new-earnings",
        date: earningsRaw.filed,
        detail: `New earnings release ${earningsRaw.accession}.`,
      });
    } else if (
      !previousEarnings &&
      narrativeDate &&
      earningsRaw.filed > narrativeDate
    ) {
      tickerEvents.push({
        type: "new-earnings",
        date: earningsRaw.filed,
        detail: `Earnings release ${earningsRaw.accession} was filed after the narrative date.`,
      });
    }
  }

  const revision = consensus
    ? consensusRevision(previous.get(ticker), {
        asOf: consensus.asOf,
        targetMean: consensus.targetMean,
        eps: consensusEps(consensus),
      })
    : null;
  if (revision) {
    tickerEvents.push({
      type: "consensus-revision",
      date: consensus?.asOf ?? null,
      detail: revision,
    });
  }

  const currentSegmentsHash = segmentHash(segments);
  if (
    previous.get(ticker)?.segmentsHash &&
    currentSegmentsHash &&
    previous.get(ticker)?.segmentsHash !== currentSegmentsHash
  ) {
    tickerEvents.push({
      type: "segment-change",
      date: segments?.asOf ?? null,
      detail: "Revenue-mix disclosure changed.",
    });
  }

  const priceAge = data.latestPrice.asOf
    ? daysBetween(data.latestPrice.asOf, TODAY)
    : null;
  if (priceAge == null || priceAge > PRICE_MAX_AGE_DAYS) {
    tickerEvents.push({
      type: "price-stale",
      date: data.latestPrice.asOf,
      detail: `Latest close is ${priceAge == null ? "missing" : `${priceAge} days old`}.`,
    });
  }

  const sourceGap = isAcceptedSourceGap(ticker);
  const status = statusFromEvents(tickerEvents, sourceGap);
  const row: StoryFreshnessRow = {
    ticker,
    name: data.name,
    priceAsOf: data.latestPrice.asOf ?? null,
    latestQuarter: dataQuarterLabel,
    latestFiling: filing,
    earnings: earningsRaw
      ? { filed: earningsRaw.filed, accession: earningsRaw.accession }
      : null,
    consensusAsOf: consensus?.asOf ?? null,
    segmentsAsOf: segments?.asOf ?? null,
    narrativeUpdatedAt,
    status,
    events: tickerEvents,
    checkedAt: new Date().toISOString(),
  };
  rows[ticker] = row;
  if (tickerEvents.length > 0) {
    events.push({
      ticker,
      name: data.name,
      status,
      events: tickerEvents,
    });
  }

  nextState.tickers[ticker] = {
    latestQuarter: dataQuarterLabel,
    latestQuarterScore: dataQuarterScore,
    latest10K: sec?.filings?.latest10K?.accession ?? null,
    latest10Q: sec?.filings?.latest10Q?.accession ?? null,
    earningsAccession: earningsRaw?.accession ?? null,
    earningsFiled: earningsRaw?.filed ?? null,
    consensusAsOf: consensus?.asOf ?? null,
    consensusTargetMean: consensus?.targetMean ?? null,
    consensusEps: consensusEps(consensus),
    segmentsAsOf: segments?.asOf ?? null,
    segmentsHash: currentSegmentsHash,
  };
}

const counts = emptyCounts();
for (const row of Object.values(rows)) {
  counts[row.status] += 1;
}
const manifest: StoryFreshnessManifest = {
  generatedAt: new Date().toISOString(),
  total: Object.keys(rows).length,
  counts,
  tickers: rows,
};

const pending = events.filter((item) => item.status === "rewrite-pending");
const summary = {
  generatedAt: manifest.generatedAt,
  counts,
  pending: pending.map((item) => ({
    ticker: item.ticker,
    name: item.name,
    events: item.events,
  })),
  sourceGaps: Object.keys(SOURCE_GAPS).map((ticker) => ({
    ticker,
    ...SOURCE_GAPS[ticker],
  })),
};

writeJson(MANIFEST_FILE, manifest);
writeJson(EVENTS_FILE, summary);
writeJson(STATE_FILE, nextState);

console.log(
  `[events] ${manifest.total} stories · ${counts.current} current · ${counts["rewrite-pending"]} rewrite-pending · ${counts["data-stale"]} data-stale · ${counts["source-gap"]} source-gap`,
);
if (pending.length) {
  console.log(
    `[events] rewrite queue: ${pending.map((item) => item.ticker).join(", ")}`,
  );
}
if (DRY) console.log("[events] dry run; no files written");
