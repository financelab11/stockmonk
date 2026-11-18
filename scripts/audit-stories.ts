/**
 * Audits hand-written research reports against the current datasets.
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
import { INDIA_STOCK_STORIES } from "../content/india-stocks";
import { GCC_STORIES } from "../content/gcc-stories";
import type { StockStory } from "../content/stocks/types";

type Row = {
  market: "US" | "IN" | "GCC";
  ticker: string;
  dataQuarter: string;
  dataScore: number;
  storyQuarter: string | null;
  storyScore: number | null;
  quartersBehind: number | null;
  priceMismatch: string | null;
};

const ROOTS: Record<Row["market"], string> = {
  US: "data/processed",
  IN: "data/india/processed",
  GCC: "data/gcc/processed",
};

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function storyText(story: StockStory): string {
  return JSON.stringify(story);
}

function parseQuarter(period: string | undefined, fyear: number | undefined) {
  if (!period || fyear == null) return null;
  const match = /Q([1-4])/.exec(period);
  if (!match) return null;
  const quarter = Number(match[1]);
  return { label: `Q${quarter} FY${fyear}`, score: fyear * 4 + quarter };
}

function dataLatest(ticker: string, market: Row["market"]) {
  const data = readJson<{
    quarterly?: Array<{ period?: string; fyear?: number; reportDate?: string }>;
    latestPrice?: { close?: number };
  }>(path.join(ROOTS[market], ticker, "data.json"));
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

function audit(
  market: Row["market"],
  stories: Record<string, StockStory>,
): Row[] {
  const rows: Row[] = [];
  for (const [ticker, story] of Object.entries(stories)) {
    const data = dataLatest(ticker, market);
    const text = storyText(story);
    const storyQuarter = storyLatestQuarter(text);
    const price = explicitPrice(text);
    const quartersBehind =
      data?.quarter && storyQuarter
        ? Math.max(0, data.quarter.score - storyQuarter.score)
        : null;
    const priceMismatch =
      price != null && data?.close != null && Math.abs(price - data.close) / data.close > 0.005
        ? `${price} vs ${data.close}`
        : null;
    rows.push({
      market,
      ticker,
      dataQuarter: data?.quarter?.label ?? "n/a",
      dataScore: data?.quarter?.score ?? 0,
      storyQuarter: storyQuarter?.label ?? null,
      storyScore: storyQuarter?.score ?? null,
      quartersBehind,
      priceMismatch,
    });
  }
  return rows;
}

const rows = [
  ...audit("US", STOCK_STORIES),
  ...audit("IN", INDIA_STOCK_STORIES),
  ...audit("GCC", GCC_STORIES),
];

const behind = rows.filter((row) => (row.quartersBehind ?? 0) > 0);
const noQuarter = rows.filter((row) => row.storyQuarter == null);
const stalePrice = rows.filter((row) => row.priceMismatch);

for (const market of ["US", "IN", "GCC"] as const) {
  const marketRows = rows.filter((row) => row.market === market);
  const marketBehind = marketRows.filter((row) => (row.quartersBehind ?? 0) > 0);
  const distribution = marketRows.reduce<Record<string, number>>((acc, row) => {
    const key = row.quartersBehind == null ? "unknown" : String(row.quartersBehind);
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
  console.log(
    `${market}: ${marketRows.length} stories · ${marketBehind.length} behind on earnings · quarters behind`,
    distribution,
  );
}

console.log(
  `\n${behind.length} of ${rows.length} stories reference an older quarter than the data; ${noQuarter.length} reference no quarter; ${stalePrice.length} quote a stale price.`,
);

console.log("\nWorst offenders");
for (const row of behind
  .sort((a, b) => (b.quartersBehind ?? 0) - (a.quartersBehind ?? 0))
  .slice(0, 25)) {
  console.log(
    `${row.market} ${row.ticker}: story ${row.storyQuarter} → data ${row.dataQuarter} (${row.quartersBehind} quarters)${
      row.priceMismatch ? ` · price ${row.priceMismatch}` : ""
    }`,
  );
}

if (stalePrice.length) {
  console.log("\nStale explicit prices");
  for (const row of stalePrice.slice(0, 20)) {
    console.log(`${row.market} ${row.ticker}: ${row.priceMismatch}`);
  }
}

if (behind.length > 0 || stalePrice.length > 0) {
  console.log(
    `\n[stories] ${behind.length} report(s) behind on earnings and ${stalePrice.length} with a stale price — run pnpm refresh:stories`,
  );
  process.exitCode = 1;
} else {
  console.log("\n[stories] every report matches the latest dataset");
}
