/**
 * Refreshes the data-driven sections of hand-written US research reports.
 *
 * Keeps the bespoke parts of each story (title, dek, business description,
 * economics, risks, bottom line) and regenerates the sections that are built
 * from current filings: takeaways, big-picture data paragraphs, growth,
 * performance, cash, valuation and analyst expectations.
 *
 * Run:
 *   pnpm refresh:stories            # every report behind its data
 *   pnpm refresh:stories --all      # every report, regardless of staleness
 *   pnpm refresh:stories --only=MU  # one ticker, prints the result without writing
 *   pnpm refresh:stories --dry      # report what would change
 */
import fs from "node:fs";
import path from "node:path";
import { STOCK_STORIES } from "../content/stocks";
import type { StockStory } from "../content/stocks/types";
import {
  buildFullFactorScores,
  computeCagr,
  latestQuarterYoY,
  rangePosition,
} from "../lib/analytics";
import { generateStockStory } from "../lib/generated-story";
import type { ResearchBundle } from "../lib/data";
import {
  consensusSchema,
  segmentMixSchema,
  tickerDataSchema,
  type TickerData,
} from "../lib/schemas";

const ROOTS = {
  processed: "data/processed",
  consensus: "data/consensus",
  segments: "data/segments",
  prices: "public/data/prices",
};
const CONTENT = "content/stocks";

const ALL = process.argv.includes("--all");
const DRY = process.argv.includes("--dry");
const FORCE = process.argv.includes("--force");
const ONLY = process.argv
  .find((arg) => arg.startsWith("--only="))
  ?.split("=")[1]
  ?.toUpperCase();

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function latestQuarterScore(data: TickerData): number | null {
  const scores = data.quarterly
    .map((row) => {
      const match = /Q([1-4])/.exec(row.period ?? "");
      if (!match) return null;
      return row.fyear * 4 + Number(match[1]);
    })
    .filter((score): score is number => score != null);
  return scores.length ? Math.max(...scores) : null;
}

function storyQuarterScore(story: StockStory): number | null {
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

function buildBundle(
  ticker: string,
  companies: TickerData[],
): ResearchBundle | null {
  const data = readJson<unknown>(
    path.join(ROOTS.processed, ticker, "data.json"),
  );
  const parsed = tickerDataSchema.safeParse(data);
  if (!parsed.success) return null;
  const consensusRaw = readJson<unknown>(
    path.join(ROOTS.consensus, `${ticker}.json`),
  );
  const consensus = consensusRaw
    ? consensusSchema.safeParse(consensusRaw)
    : null;
  const segments = readJson<unknown>(
    path.join(ROOTS.segments, `${ticker}.json`),
  );
  const segmentParsed = segments ? segmentMixSchema.safeParse(segments) : null;
  const prices =
    readJson<
      Array<{
        t: number;
        o: number;
        h: number;
        l: number;
        c: number;
        v: number;
      }>
    >(path.join(ROOTS.prices, ticker, "MAX.json")) ?? [];
  const final = parsed.data;

  return {
    data: final,
    consensus: consensus?.success ? consensus.data : null,
    segments: segmentParsed?.success ? segmentParsed.data : null,
    prices: [],
    pricesMax: prices.map((point) => ({
      t: point.t,
      o: point.o,
      h: point.h,
      l: point.l,
      c: point.c,
      v: point.v,
    })),
    factors: buildFullFactorScores(companies, ticker),
    cagr: computeCagr(final.annual),
    latestQYoY: latestQuarterYoY(final),
    rangePosition: rangePosition(
      final.latestPrice.close,
      final.latestPrice.low52,
      final.latestPrice.high52,
    ),
  } as ResearchBundle;
}

function loadCompanies(): TickerData[] {
  if (!fs.existsSync(ROOTS.processed)) return [];
  const companies: TickerData[] = [];
  for (const ticker of fs.readdirSync(ROOTS.processed)) {
    const raw = readJson<unknown>(
      path.join(ROOTS.processed, ticker, "data.json"),
    );
    const parsed = raw ? tickerDataSchema.safeParse(raw) : null;
    if (parsed?.success) companies.push(parsed.data);
  }
  return companies;
}

function explicitPrice(text: string): number | null {
  const match = /latest close of [^0-9]*([\d,.]+)/i.exec(text);
  if (!match) return null;
  const value = Number(match[1].replace(/,/g, ""));
  return Number.isFinite(value) ? value : null;
}

import {
  formatCompactCurrency,
  formatMultiple,
  formatPercent,
} from "../lib/format";

function wordCount(paragraphs: string[]): number {
  return paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
}

function ensureLength(paragraphs: string[], fallback: string): string[] {
  if (wordCount(paragraphs) >= 60) return paragraphs;
  return [...paragraphs, fallback];
}

function refreshStory(story: StockStory, bundle: ResearchBundle): StockStory {
  const generated = generateStockStory(bundle);
  const data = bundle.data;
  const currency = data.currency ?? "USD";
  const money = (value: number | null | undefined) =>
    formatCompactCurrency(value, currency);
  const latest = [...data.quarterly]
    .filter((row) => !row.ttm)
    .sort((a, b) => (a.reportDate ?? "").localeCompare(b.reportDate ?? ""))
    .at(-1);
  const quarterLabel = latest
    ? `${latest.period} FY${String(latest.fyear).slice(-2)}`
    : "the latest period";
  const consensus = bundle.consensus;

  return {
    ...story,
    filingUrl: data.latest10KUrl ?? story.filingUrl,
    takeaways: generated.takeaways,
    bigPicture: {
      ...story.bigPicture,
      paragraphs: generated.bigPicture.paragraphs,
    },
    growth: {
      ...story.growth,
      paragraphs: ensureLength(
        generated.growth.paragraphs,
        `Reported revenue was ${money(data.metrics.revenueTtm)} over the last twelve months, ${formatPercent(data.metrics.revenueGrowthTtm)} versus the prior year.`,
      ),
    },
    performance: {
      ...story.performance,
      paragraphs: ensureLength(
        generated.performance.paragraphs,
        `The latest reported period was ${quarterLabel}: revenue of ${money(latest?.revenue ?? data.metrics.revenueTtm)}, an operating margin of ${formatPercent(latest?.operatingMargin ?? data.metrics.operatingMargin)} and a net margin of ${formatPercent(latest?.netMargin ?? data.metrics.netMargin)}.`,
      ),
    },
    cash: {
      ...story.cash,
      paragraphs: ensureLength(
        generated.cash.paragraphs,
        `Free cash flow was ${money(data.metrics.freeCashFlowTtm)} over the last twelve months and net debt was ${money(data.metrics.netDebt)}; interest cover was ${formatMultiple(data.metrics.interestCover)}.`,
      ),
    },
    valuation: {
      ...story.valuation,
      paragraphs: ensureLength(
        generated.valuation.paragraphs,
        `At the latest close the shares trade at ${formatMultiple(data.metrics.pe)} trailing earnings, ${formatMultiple(data.metrics.evEbitda)} EV/EBITDA and ${formatMultiple(data.metrics.pfcf)} free cash flow, with a free-cash-flow yield of ${formatPercent(data.metrics.fcfYield)}.`,
      ),
    },
    analysts: {
      ...story.analysts,
      paragraphs: ensureLength(
        generated.analysts.paragraphs,
        consensus
          ? `The attributed consensus covers ${consensus.analystCount ?? "an undisclosed number of"} analysts with a mean target of ${formatCompactCurrency(consensus.targetMean, currency)}; third-party estimates can change without notice.`
          : `No attributed third-party consensus snapshot is available for this company in the current dataset, so no target or estimate range is shown.`,
      ),
    },
    narrativeUpdatedAt: new Date().toISOString().slice(0, 10),
  };
}

function serialize(file: string, story: StockStory): string {
  const current = fs.readFileSync(file, "utf8");
  const exportMatch = /export const (\w+)\s*:\s*StockStory/.exec(current);
  const exportName = exportMatch?.[1] ?? "STORY";
  const typeImport =
    /import type \{ StockStory \} from "([^"]+)"/.exec(current)?.[1] ??
    "./types";
  return `import type { StockStory } from "${typeImport}";\n\nexport const ${exportName}: StockStory = ${JSON.stringify(
    story,
    null,
    2,
  )};\n`;
}

let written = 0;
let skipped = 0;

const companies = loadCompanies();

for (const [ticker, story] of Object.entries(STOCK_STORIES)) {
  if (ONLY && ticker !== ONLY) continue;
  if (
    (story.narrativeSource === "handwritten" ||
      story.narrativeSource === "curated" ||
      story.narrativeSource === "auto-curated") &&
    !ONLY &&
    !FORCE
  ) {
    skipped += 1;
    continue;
  }
  const dataQuarter = latestQuarterScore(
    tickerDataSchema.parse(
      readJson(path.join(ROOTS.processed, ticker, "data.json")),
    ),
  );
  const storyQuarter = storyQuarterScore(story);
  const dataFile = tickerDataSchema.parse(
    readJson(path.join(ROOTS.processed, ticker, "data.json")),
  );
  const storyPrice = explicitPrice(JSON.stringify(story));
  const priceStale =
    storyPrice != null &&
    dataFile.latestPrice.close != null &&
    Math.abs(storyPrice - dataFile.latestPrice.close) /
      dataFile.latestPrice.close >
      0.005;
  const stale =
    ALL ||
    storyQuarter == null ||
    priceStale ||
    (dataQuarter != null && storyQuarter < dataQuarter);
  if (!stale) {
    skipped += 1;
    continue;
  }

  const bundle = buildBundle(ticker, companies);
  if (!bundle) {
    console.warn(`[stories] ${ticker}: no usable dataset`);
    continue;
  }
  const refreshed = refreshStory(story, bundle);
  const file = path.join(CONTENT, `${ticker}.ts`);
  if (ONLY) {
    console.log(JSON.stringify(refreshed, null, 2).slice(0, 4000));
    break;
  }
  const next = serialize(file, refreshed);
  const current = fs.readFileSync(file, "utf8");
  if (next === current) {
    skipped += 1;
    continue;
  }
  if (!DRY) {
    fs.writeFileSync(file, next, "utf8");
  }
  written += 1;
  if (written % 25 === 0) console.log(`[stories] refreshed ${written}`);
}

console.log(
  `[stories] ${DRY ? "would refresh" : "refreshed"} ${written}, kept ${skipped} already current`,
);
