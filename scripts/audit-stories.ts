/**
 * Audits hand-written US research reports against the current datasets.
 *
 * Run: pnpm audit:stories
 *
 * For every story it reports the newest quarter mentioned in the prose versus
 * the newest quarter in the data, plus any explicit price that no longer
 * matches the latest close.
 */
import fs from "node:fs";
import path from "node:path";
import { STOCK_STORIES } from "../content/stocks";
import type { StoryFreshnessManifest } from "../lib/story-freshness";

type Row = {
  ticker: string;
  dataQuarter: string;
  dataScore: number;
  storyQuarter: string | null;
  storyScore: number | null;
  quartersBehind: number | null;
  priceMismatch: string | null;
};

const ROOT = "data/processed";

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function parseQuarter(period: string | undefined, fyear: number | undefined) {
  if (!period || fyear == null) return null;
  const match = /Q([1-4])/.exec(period);
  if (!match) return null;
  const quarter = Number(match[1]);
  return { label: `Q${quarter} FY${fyear}`, score: fyear * 4 + quarter };
}

function dataLatest(ticker: string) {
  const data = readJson<{
    quarterly?: Array<{ period?: string; fyear?: number; reportDate?: string }>;
    latestPrice?: { close?: number };
  }>(path.join(ROOT, ticker, "data.json"));
  if (!data) return null;
  const quarters = (data.quarterly ?? [])
    .map((row) => parseQuarter(row.period, row.fyear))
    .filter((row): row is { label: string; score: number } => row != null)
    .sort((a, b) => b.score - a.score);
  return {
    quarter: quarters[0] ?? null,
    close: data.latestPrice?.close ?? null,
  };
}

function storyLatestQuarter(text: string) {
  const scores: Array<{ label: string; score: number }> = [];
  for (const match of text.matchAll(/Q([1-4])\s*FY\s*(\d{4}|\d{2})\b/g)) {
    const quarter = Number(match[1]);
    const raw = match[2];
    const year = raw.length === 4 ? Number(raw) : 2000 + Number(raw);
    scores.push({ label: `Q${quarter} FY${year}`, score: year * 4 + quarter });
  }
  scores.sort((a, b) => b.score - a.score);
  return scores[0] ?? null;
}

function explicitPrice(text: string): number | null {
  const match = /latest close of [^0-9]*([\d,.]+)/i.exec(text);
  if (!match) return null;
  const value = Number(match[1].replace(/,/g, ""));
  return Number.isFinite(value) ? value : null;
}

const rows: Row[] = [];
for (const [ticker, story] of Object.entries(STOCK_STORIES)) {
  const data = dataLatest(ticker);
  const text = JSON.stringify(story);
  const storyQuarter = storyLatestQuarter(text);
  const price = explicitPrice(text);
  const quartersBehind =
    data?.quarter && storyQuarter
      ? Math.max(0, data.quarter.score - storyQuarter.score)
      : null;
  const priceMismatch =
    price != null &&
    data?.close != null &&
    Math.abs(price - data.close) / data.close > 0.005
      ? `${price} vs ${data.close}`
      : null;
  rows.push({
    ticker,
    dataQuarter: data?.quarter?.label ?? "n/a",
    dataScore: data?.quarter?.score ?? 0,
    storyQuarter: storyQuarter?.label ?? null,
    storyScore: storyQuarter?.score ?? null,
    quartersBehind,
    priceMismatch,
  });
}

const behind = rows.filter((row) => (row.quartersBehind ?? 0) > 0);
const noQuarter = rows.filter((row) => row.storyQuarter == null);
const stalePrice = rows.filter((row) => row.priceMismatch);

const distribution = rows.reduce<Record<string, number>>((acc, row) => {
  const key =
    row.quartersBehind == null ? "unknown" : String(row.quartersBehind);
  acc[key] = (acc[key] ?? 0) + 1;
  return acc;
}, {});
console.log(
  `US: ${rows.length} stories · ${behind.length} behind on earnings · quarters behind`,
  distribution,
);

console.log(
  `\n${behind.length} of ${rows.length} stories reference an older quarter than the data; ${noQuarter.length} reference no quarter; ${stalePrice.length} quote a stale price.`,
);

const handwritten = Object.values(STOCK_STORIES).filter(
  (story) =>
    story.narrativeSource === "handwritten" ||
    story.narrativeSource === "curated",
).length;
console.log(
  `hand-written/curated narratives: ${handwritten} of ${rows.length}`,
);

console.log("\nWorst offenders");
for (const row of behind
  .sort((a, b) => (b.quartersBehind ?? 0) - (a.quartersBehind ?? 0))
  .slice(0, 25)) {
  console.log(
    `${row.ticker}: story ${row.storyQuarter} → data ${row.dataQuarter} (${row.quartersBehind} quarters)${
      row.priceMismatch ? ` · price ${row.priceMismatch}` : ""
    }`,
  );
}

if (stalePrice.length) {
  console.log("\nStale explicit prices");
  for (const row of stalePrice.slice(0, 20)) {
    console.log(`${row.ticker}: ${row.priceMismatch}`);
  }
}

const curatedTickers = new Set(
  Object.values(STOCK_STORIES)
    .filter(
      (story) =>
        story.narrativeSource === "handwritten" ||
        story.narrativeSource === "curated",
    )
    .map((story) => story.ticker),
);
const strict =
  process.argv.includes("--strict") ||
  process.argv.includes("--strict-curated");
const manifest = (() => {
  try {
    return JSON.parse(
      fs.readFileSync("data/story-freshness.json", "utf8"),
    ) as StoryFreshnessManifest;
  } catch {
    return null;
  }
})();
const manifestPending = manifest
  ? Object.values(manifest.tickers).filter(
      (row) => row.status === "rewrite-pending" || row.status === "data-stale",
    )
  : [];
const missingNarrativeDate = Object.values(STOCK_STORIES).filter(
  (story) => !story.narrativeUpdatedAt,
);
const blockingBehind = strict
  ? behind
  : behind.filter((row) => !curatedTickers.has(row.ticker));
const blockingStale = strict
  ? stalePrice
  : stalePrice.filter((row) => !curatedTickers.has(row.ticker));

console.log(
  `narrative dates: ${rows.length - missingNarrativeDate.length}/${rows.length} present; manifest: ${
    manifest
      ? `${manifest.counts["rewrite-pending"]} rewrite-pending, ${manifest.counts["data-stale"]} data-stale, ${manifest.counts["source-gap"]} source-gap`
      : "missing"
  }`,
);

if (strict) {
  if (!manifest) {
    console.log(
      "\n[stories] strict mode requires data/story-freshness.json — run pnpm detect:events",
    );
    process.exitCode = 1;
  } else if (manifestPending.length > 0) {
    console.log(
      `\n[stories] ${manifestPending.length} report(s) pending a rewrite: ${manifestPending
        .map((row) => row.ticker)
        .slice(0, 30)
        .join(", ")}${manifestPending.length > 30 ? "…" : ""}`,
    );
    process.exitCode = 1;
  }
  if (missingNarrativeDate.length > 0) {
    console.log(
      `\n[stories] ${missingNarrativeDate.length} report(s) have no narrativeUpdatedAt: ${missingNarrativeDate
        .map((story) => story.ticker)
        .slice(0, 30)
        .join(", ")}`,
    );
    process.exitCode = 1;
  }
}

if (blockingBehind.length > 0 || blockingStale.length > 0) {
  console.log(
    `\n[stories] ${blockingBehind.length} report(s) behind on earnings and ${blockingStale.length} with a stale explicit price — run pnpm refresh:stories or the rewrite queue`,
  );
  process.exitCode = 1;
} else if ((behind.length > 0 || stalePrice.length > 0) && !strict) {
  console.log(
    `\n[stories] ${behind.length} curated report(s) behind on earnings and ${stalePrice.length} with a stale price. They are not auto-rewritten; run pnpm detect:events to queue them, or use --strict to fail.`,
  );
} else if (
  noQuarter.length > 0 &&
  behind.length === 0 &&
  stalePrice.length === 0
) {
  console.log(
    `\n[stories] no stale quarter or explicit price found; ${noQuarter.length} reports rely on the freshness manifest and numeric audit because they do not name a quarter.`,
  );
} else if (behind.length > 0 || stalePrice.length > 0) {
  console.log(
    `\n[stories] ${behind.length} report(s) behind on earnings and ${stalePrice.length} with a stale price — curated reports need a rewrite.`,
  );
  process.exitCode = 1;
} else {
  console.log("\n[stories] every report matches the latest dataset");
}
