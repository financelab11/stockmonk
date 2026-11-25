/**
 * Builds the compressed runtime research index used by the on-demand stock
 * report route. Keeping the article data in one gzipped file lets the app
 * serve 500 reports from a single serverless function on the Vercel Hobby
 * plan instead of creating one function per report.
 *
 * Run: pnpm build:runtime
 */
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { RESEARCH_TICKERS } from "../config/universe";
import {
  buildFullFactorScores,
  computeCagr,
  latestQuarterYoY,
  rangePosition,
} from "../lib/analytics";
import {
  consensusSchema,
  rangePricePointSchema,
  segmentMixSchema,
  tickerDataSchema,
} from "../lib/schemas";
import type { Consensus, RangePricePoint, SegmentMix, TickerData } from "../lib/schemas";

const ROOT = process.cwd();
const PROCESSED = path.join(ROOT, "data", "processed");
const CONSENSUS = path.join(ROOT, "data", "consensus");
const SEGMENTS = path.join(ROOT, "data", "segments");
const PUBLIC_DATA = path.join(ROOT, "public", "data");
const OUT_DIR = path.join(PUBLIC_DATA, "articles");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function fallbackSegments(data: TickerData): SegmentMix {
  const annual = [...data.annual].filter((row) => !row.ttm && row.revenue).at(-1);
  const revenue = annual?.revenue ?? data.metrics.revenueTtm ?? 0;
  const reportDate =
    [...data.quarterly].filter((row) => !row.ttm).at(-1)?.reportDate ??
    data.updatedAt.slice(0, 10);
  const cik = data.cik?.padStart(10, "0");
  return {
    ticker: data.ticker,
    asOf: annual?.reportDate ?? reportDate,
    source: {
      name: `${data.name} latest annual report`,
      url: cik
        ? `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${cik}&type=10-K&dateb=&owner=include&count=40`
        : "https://www.sec.gov/edgar/search/",
      date: annual?.reportDate ?? reportDate,
    },
    segmentLabel: "Reported revenue",
    segments: [{ name: "Consolidated revenue", revenue, share: 1 }],
    geographyLabel: null,
    geography: [],
  };
}

function main() {
  const companies: TickerData[] = [];
  for (const ticker of RESEARCH_TICKERS) {
    const parsed = tickerDataSchema.safeParse(
      readJson(path.join(PROCESSED, ticker, "data.json")),
    );
    if (parsed.success) companies.push(parsed.data);
  }
  if (companies.length !== RESEARCH_TICKERS.length) {
    throw new Error(
      `runtime index needs ${RESEARCH_TICKERS.length} companies, found ${companies.length}`,
    );
  }

  const universe = readJson<unknown[]>(path.join(PUBLIC_DATA, "stocks.json")) ?? [];
  const bundles: Record<string, unknown> = {};

  for (const data of companies) {
    const consensusParsed = consensusSchema.safeParse(
      readJson(path.join(CONSENSUS, `${data.ticker}.json`)),
    );
    const segmentsParsed = segmentMixSchema.safeParse(
      readJson(path.join(SEGMENTS, `${data.ticker}.json`)),
    );
    const rawPrices = readJson<unknown[]>(
      path.join(PUBLIC_DATA, "prices", data.ticker, "1Y.json"),
    );
    const prices: RangePricePoint[] = (rawPrices ?? [])
      .map((point) => rangePricePointSchema.safeParse(point))
      .filter((result) => result.success)
      .map((result) => result.data);

    // Trim long histories to what the report and peer comparison actually use.
    const compact: TickerData = {
      ...data,
      quarterly: data.quarterly.slice(-8),
      annual: data.annual.slice(-6),
    };

    bundles[data.ticker] = {
      data: compact,
      consensus: consensusParsed.success
        ? (consensusParsed.data as Consensus)
        : null,
      segments: segmentsParsed.success
        ? (segmentsParsed.data as SegmentMix)
        : fallbackSegments(compact),
      prices,
      pricesMax: [],
      factors: buildFullFactorScores(companies, data.ticker),
      cagr: computeCagr(data.annual),
      latestQYoY: latestQuarterYoY(data),
      rangePosition: rangePosition(
        data.latestPrice.close,
        data.latestPrice.low52,
        data.latestPrice.high52,
      ),
    };
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const payload = JSON.stringify({
    generatedAt: new Date().toISOString(),
    universe,
    bundles,
  });
  const gz = zlib.gzipSync(Buffer.from(payload, "utf8"), { level: 9 });
  fs.writeFileSync(path.join(OUT_DIR, "runtime.json.gz"), gz);
  console.log(
    `[runtime] ${companies.length} companies · ${(payload.length / 1024 / 1024).toFixed(1)} MB raw · ${(gz.length / 1024 / 1024).toFixed(1)} MB gzip`,
  );
}

main();
