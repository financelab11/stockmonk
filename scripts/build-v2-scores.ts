/**
 * Builds the V2 four-factor research scores.
 *
 * Run: pnpm build:scores
 *
 * Outputs:
 *   public/data/v2/scores.json            compact score summary
 *   public/data/v2/companies/{TICKER}.json full evidence trail
 */
import fs from "node:fs";
import path from "node:path";
import { getCoverageGroup } from "../config/coverage";
import { sectorEtf } from "../config/sector-etfs";
import { RESEARCH_TICKERS } from "../config/universe";
import {
  consensusSchema,
  rangePricePointSchema,
  segmentMixSchema,
  tickerDataSchema,
  type Consensus,
  type RangePricePoint,
  type SegmentMix,
  type TickerData,
} from "../lib/schemas";
import { buildPeerContext, type PeerInput } from "../lib/scoring-v2/peer";
import { scoreCompany } from "../lib/scoring-v2";
import type { V2ScoreRecord, V2ScoresDataset } from "../lib/scoring-v2/types";
import { COMPOSITE_WEIGHTS, METHODOLOGY_VERSION } from "../lib/scoring-v2/util";

const ROOT = process.cwd();
const PROCESSED = path.join(ROOT, "data", "processed");
const CONSENSUS = path.join(ROOT, "data", "consensus");
const SEGMENTS = path.join(ROOT, "data", "segments");
const PRICES = path.join(ROOT, "public", "data", "prices");
const OUT = path.join(ROOT, "public", "data", "v2");
const COMPANIES_OUT = path.join(OUT, "companies");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function prices(ticker: string, range: string): RangePricePoint[] {
  const raw =
    readJson<unknown[]>(path.join(PRICES, ticker, `${range}.json`)) ?? [];
  return raw
    .map((point) => rangePricePointSchema.safeParse(point))
    .filter((result) => result.success)
    .map((result) => result.data);
}

type Bundle = {
  data: TickerData;
  consensus: Consensus | null;
  segments: SegmentMix | null;
  prices: RangePricePoint[];
  pricesMax: RangePricePoint[];
};

function loadBundles(): Bundle[] {
  const bundles: Bundle[] = [];
  for (const ticker of RESEARCH_TICKERS) {
    const data = readJson<unknown>(path.join(PROCESSED, ticker, "data.json"));
    const parsed = data ? tickerDataSchema.safeParse(data) : null;
    if (!parsed?.success) {
      console.warn(`[scores-v2] ${ticker}: missing processed data`);
      continue;
    }
    const consensusRaw = readJson<unknown>(
      path.join(CONSENSUS, `${ticker}.json`),
    );
    const consensus = consensusRaw
      ? consensusSchema.safeParse(consensusRaw)
      : null;
    const segmentsRaw = readJson<unknown>(
      path.join(SEGMENTS, `${ticker}.json`),
    );
    const segments = segmentsRaw
      ? segmentMixSchema.safeParse(segmentsRaw)
      : null;
    bundles.push({
      data: parsed.data,
      consensus: consensus?.success ? consensus.data : null,
      segments: segments?.success ? segments.data : null,
      prices: prices(ticker, "1Y"),
      pricesMax: prices(ticker, "MAX"),
    });
  }
  return bundles;
}

function main() {
  const bundles = loadBundles();
  const benchmark = prices("SPY", "MAX");
  if (benchmark.length < 200) {
    throw new Error("SPY history is missing; run pnpm ingest:benchmark");
  }
  const peerInputs: PeerInput[] = bundles.map((bundle) => ({
    ticker: bundle.data.ticker,
    data: bundle.data,
    consensus: bundle.consensus,
  }));
  const peerByTicker = new Map(peerInputs.map((peer) => [peer.ticker, peer]));

  fs.mkdirSync(COMPANIES_OUT, { recursive: true });

  const records: Record<string, V2ScoreRecord> = {};
  const summary: V2ScoresDataset = {
    methodologyVersion: METHODOLOGY_VERSION,
    generatedAt: new Date().toISOString(),
    weights: COMPOSITE_WEIGHTS,
    universe: bundles.length,
    companies: {},
  };

  for (const bundle of bundles) {
    const ticker = bundle.data.ticker;
    const subject = peerByTicker.get(ticker);
    if (!subject) continue;
    const group = getCoverageGroup(ticker);
    const etf = sectorEtf(group?.id);
    const sectorPrices = prices(etf, "MAX");
    const input = {
      ...bundle,
      benchmark,
      sectorBenchmark: sectorPrices.length ? sectorPrices : benchmark,
      peerContext: buildPeerContext(subject, peerInputs),
      peerInputs,
      groupName: group?.name ?? bundle.data.sector,
      exchange: bundle.data.market ?? null,
    };
    const record = scoreCompany(input);
    records[ticker] = record;
    fs.writeFileSync(
      path.join(COMPANIES_OUT, `${ticker}.json`),
      JSON.stringify(record),
      "utf8",
    );
    summary.companies[ticker] = {
      ...record,
      scores: {
        growth: { ...record.scores.growth, evidence: [] },
        quality: { ...record.scores.quality, evidence: [] },
        valuation: { ...record.scores.valuation, evidence: [] },
        technical: { ...record.scores.technical, evidence: [] },
      },
    };
  }

  fs.writeFileSync(
    path.join(OUT, "scores.json"),
    JSON.stringify(summary),
    "utf8",
  );

  const stocksPath = path.join(ROOT, "public", "data", "stocks.json");
  const stocks = readJson<Array<{ ticker: string; v2Scores?: unknown }>>(
    stocksPath,
  );
  if (stocks) {
    for (const stock of stocks) {
      const record = records[stock.ticker];
      if (!record) continue;
      stock.v2Scores = {
        growth: record.scores.growth.score,
        quality: record.scores.quality.score,
        valuation: record.scores.valuation.score,
        technical: record.scores.technical.score,
        composite: record.composite.score,
        status: record.composite.status,
        coverage: record.composite.coverage,
      };
    }
    fs.writeFileSync(stocksPath, JSON.stringify(stocks), "utf8");
  }

  const distributions = {
    complete: 0,
    incomplete: 0,
    provisional: 0,
    byComposite: {} as Record<string, number>,
  };
  for (const record of Object.values(records)) {
    if (record.composite.status === "complete") distributions.complete += 1;
    else distributions.incomplete += 1;
    if (
      Object.values(record.scores).some(
        (score) => score.status === "provisional",
      )
    ) {
      distributions.provisional += 1;
    }
    distributions.byComposite[record.composite.classification] =
      (distributions.byComposite[record.composite.classification] ?? 0) + 1;
  }

  console.log(
    `[scores-v2] ${Object.keys(records).length} companies · ${distributions.complete} complete · ${distributions.incomplete} incomplete · ${distributions.provisional} with a provisional component`,
  );
  console.log("[scores-v2] composite distribution", distributions.byComposite);
}

main();
