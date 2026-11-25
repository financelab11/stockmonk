/**
 * Builds the industry-KPI module for every research name.
 *
 * Run: pnpm build:kpis
 *
 * The module selects a sector/theme-specific KPI list, computes metrics that
 * can be derived from reported data, and marks everything else N/A with a
 * reason. It never fills a missing KPI with an estimate.
 */
import fs from "node:fs";
import path from "node:path";
import { RESEARCH_TICKERS } from "../config/universe";
import {
  consensusSchema,
  segmentMixSchema,
  tickerDataSchema,
  type Consensus,
  type SegmentMix,
  type TickerData,
} from "../lib/schemas";
import { computeKpis, type CompanyKpis } from "../lib/scoring-v2/kpis";

const ROOT = process.cwd();
const PROCESSED = path.join(ROOT, "data", "processed");
const CONSENSUS = path.join(ROOT, "data", "consensus");
const SEGMENTS = path.join(ROOT, "data", "segments");
const OUT = path.join(ROOT, "public", "data", "v2", "kpis");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const records: Record<string, CompanyKpis> = {};
  let available = 0;
  let total = 0;

  for (const ticker of RESEARCH_TICKERS) {
    const raw = readJson<unknown>(path.join(PROCESSED, ticker, "data.json"));
    const parsed = raw ? tickerDataSchema.safeParse(raw) : null;
    if (!parsed?.success) {
      console.warn(`[kpis] ${ticker}: missing processed data`);
      continue;
    }
    const consensusRaw = readJson<unknown>(
      path.join(CONSENSUS, `${ticker}.json`),
    );
    const consensus = consensusRaw
      ? consensusSchema.safeParse(consensusRaw)
      : null;
    const segmentRaw = readJson<unknown>(path.join(SEGMENTS, `${ticker}.json`));
    const segments = segmentRaw ? segmentMixSchema.safeParse(segmentRaw) : null;
    const record = computeKpis(
      parsed.data as TickerData,
      consensus?.success ? (consensus.data as Consensus) : null,
      segments?.success ? (segments.data as SegmentMix) : null,
    );
    records[ticker] = record;
    available += record.kpis.filter((item) => item.available).length;
    total += record.kpis.length;
    fs.writeFileSync(
      path.join(OUT, `${ticker}.json`),
      JSON.stringify(record),
      "utf8",
    );
  }

  fs.writeFileSync(
    path.join(ROOT, "public", "data", "v2", "kpis.json"),
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      companies: records,
    }),
    "utf8",
  );
  console.log(
    `[kpis] ${Object.keys(records).length} companies · ${available}/${total} selected KPIs available`,
  );
}

main();
