/**
 * Prints a compact fact sheet for hand-writing a report.
 *
 * Run: pnpm story:brief MSFT
 */
import fs from "node:fs";
import path from "node:path";
import { formatCompactCurrency, formatMultiple, formatPercent, formatSignedPercent } from "../lib/format";

const ticker = (process.argv[2] ?? "").toUpperCase();
const markets = ["data/processed", "data/india/processed", "data/gcc/processed"];
const root = markets.find((dir) => fs.existsSync(path.join(dir, ticker, "data.json")));
if (!root) {
  console.error(`no dataset for ${ticker}`);
  process.exit(1);
}

const read = <T>(file: string): T | null => {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
};

type StockFile = {
  name: string;
  sector: string;
  industry: string;
  currency?: string;
  metrics: Record<string, number | null>;
  latestPrice: Record<string, number | null> & { asOf?: string };
  quarterly?: Array<{
    period?: string;
    fyear?: number;
    reportDate?: string;
    ttm?: boolean;
    revenue?: number | null;
    operatingMargin?: number | null;
    netMargin?: number | null;
    epsDiluted?: number | null;
  }>;
};

type ConsensusFile = {
  asOf?: string;
  analystCount?: number;
  targetMean?: number | null;
  targetLow?: number | null;
  targetHigh?: number | null;
  estimates?: Array<{ period?: string; revenueAvg?: number | null; epsAvg?: number | null }>;
};

type EarningsFile = {
  filed?: string;
  releaseUrl?: string;
  text?: string;
  cfoCommentary?: { text?: string };
};

const data = read<StockFile>(path.join(root, ticker, "data.json"))!;
const currency = data.currency ?? "USD";
const m = data.metrics;
const p = data.latestPrice;
const CONSENSUS_DIR: Record<string, string> = {
  "data/processed": "data/consensus",
  "data/india/processed": "data/india/consensus",
  "data/gcc/processed": "data/gcc/consensus",
};
const consensus = read<ConsensusFile>(
  path.join(CONSENSUS_DIR[root], `${ticker}.json`),
);
const earnings = read<EarningsFile>(path.join("data", "earnings", `${ticker}.json`));

const money = (value: number | null | undefined) => formatCompactCurrency(value, currency);

console.log(`== ${ticker} ${data.name} (${data.sector} · ${data.industry})`);
console.log(
  `price ${money(p.close)} on ${p.asOf} · mcap ${money(p.marketCap)} · 52w ${money(p.low52)}–${money(p.high52)} · 1Y ${formatSignedPercent(m.return1y)}`,
);
console.log(
  `TTM revenue ${money(m.revenueTtm)} (${formatPercent(m.revenueGrowthTtm)} y/y) · op ${formatPercent(m.operatingMargin)} · net ${formatPercent(m.netMargin)} · FCF ${money(m.freeCashFlowTtm)} (${formatPercent(m.fcfMargin)})`,
);
console.log(
  `P/E ${formatMultiple(m.pe)} · EV/EBITDA ${formatMultiple(m.evEbitda)} · P/FCF ${formatMultiple(m.pfcf)} · FCF yield ${formatPercent(m.fcfYield)} · ROE ${formatPercent(m.roe)} · ROIC ${formatPercent(m.roic)} · net debt ${money(m.netDebt)}`,
);

const quarters = (data.quarterly ?? [])
  .filter((row) => !row.ttm)
  .sort((a, b) => String(a.reportDate).localeCompare(String(b.reportDate)))
  .slice(-4);
console.log("\nquarters");
for (const q of quarters) {
  console.log(
    `  ${q.period} FY${q.fyear} (${q.reportDate}) revenue ${money(q.revenue)} · op ${formatPercent(q.operatingMargin)} · net ${formatPercent(q.netMargin)} · EPS ${q.epsDiluted}`,
  );
}

if (consensus) {
  console.log(`\nconsensus as of ${consensus.asOf}: mean ${money(consensus.targetMean)} · ${consensus.analystCount} analysts · range ${money(consensus.targetLow)}–${money(consensus.targetHigh)}`);
  for (const estimate of consensus.estimates ?? []) {
    console.log(`  ${estimate.period}: revenue ${money(estimate.revenueAvg)} · EPS ${estimate.epsAvg}`);
  }
}

if (earnings) {
  console.log(`\nlatest earnings release ${earnings.filed} · ${earnings.releaseUrl}`);
  const text = String(earnings.text).replace(/\s+/g, " ");
  const start = text.search(/announce|report|results/i);
  console.log(text.slice(Math.max(0, start - 80), start + 1600));
  if (earnings.cfoCommentary) {
    console.log("\nCFO commentary excerpt");
    console.log(String(earnings.cfoCommentary.text).replace(/\s+/g, " ").slice(0, 900));
  }
} else {
  console.log("\nno stored earnings release");
}
