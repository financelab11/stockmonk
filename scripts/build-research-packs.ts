/**
 * Builds compact research packs for editorial rewriting.
 *
 * Each pack combines the reported financials, valuation, consensus, segments
 * and the existing bespoke narrative for one company. Packs are written under
 * data/raw (gitignored) and are inputs to the research rewrite workflow.
 *
 * Run: pnpm tsx scripts/build-research-packs.ts
 */
import fs from "node:fs";
import path from "node:path";
import { getCoverageGroup, COVERAGE_GROUPS } from "../config/coverage";
import { RESEARCH_TICKERS } from "../config/universe";
import { STOCK_STORIES } from "../content/stocks";
import type { StockStory } from "../content/stocks/types";
import {
  consensusSchema,
  segmentMixSchema,
  tickerDataSchema,
  type Consensus,
  type TickerData,
} from "../lib/schemas";

const ROOT = process.cwd();
const PROCESSED = path.join(ROOT, "data", "processed");
const CONSENSUS = path.join(ROOT, "data", "consensus");
const SEGMENTS = path.join(ROOT, "data", "segments");
const OUT = path.join(ROOT, "data", "raw", "research-packs");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

const money = (value: number | null | undefined): string => {
  if (value == null || !Number.isFinite(value)) return "n/a";
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  if (abs >= 1e12) return `${sign}$${(abs / 1e12).toFixed(1)}T`;
  if (abs >= 1e9) return `${sign}$${(abs / 1e9).toFixed(1)}B`;
  if (abs >= 1e6) return `${sign}$${(abs / 1e6).toFixed(1)}M`;
  if (abs >= 1e3) return `${sign}$${(abs / 1e3).toFixed(1)}K`;
  return `${sign}$${abs.toFixed(0)}`;
};

const pct = (value: number | null | undefined, digits = 1): string => {
  if (value == null || !Number.isFinite(value)) return "n/a";
  return `${(value * 100).toFixed(digits)}%`;
};

const mult = (value: number | null | undefined): string => {
  if (value == null || !Number.isFinite(value)) return "n/a";
  if (Math.abs(value) >= 1000) return `${value.toFixed(0)}x`;
  return `${value.toFixed(1)}x`;
};

const num = (value: number | null | undefined): string => {
  if (value == null || !Number.isFinite(value)) return "n/a";
  return value.toFixed(2);
};

function percentile(value: number | null, population: number[]): number | null {
  if (value == null || population.length < 4) return null;
  const below = population.filter((item) => item <= value).length;
  return below / population.length;
}

function median(values: number[]): number | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

type Loaded = {
  data: TickerData;
  consensus: Consensus | null;
  segments: ReturnType<typeof segmentMixSchema.parse> | null;
  group: ReturnType<typeof getCoverageGroup>;
};

const loaded = new Map<string, Loaded>();
for (const ticker of RESEARCH_TICKERS) {
  const raw = readJson<unknown>(path.join(PROCESSED, ticker, "data.json"));
  const parsed = raw ? tickerDataSchema.safeParse(raw) : null;
  if (!parsed?.success) continue;
  const consensusRaw = readJson<unknown>(path.join(CONSENSUS, `${ticker}.json`));
  const consensusParsed = consensusRaw
    ? consensusSchema.safeParse(consensusRaw)
    : null;
  const segmentsRaw = readJson<unknown>(path.join(SEGMENTS, `${ticker}.json`));
  const segmentsParsed = segmentsRaw
    ? segmentMixSchema.safeParse(segmentsRaw)
    : null;
  loaded.set(ticker, {
    data: parsed.data,
    consensus: consensusParsed?.success ? consensusParsed.data : null,
    segments: segmentsParsed?.success ? segmentsParsed.data : null,
    group: getCoverageGroup(ticker),
  });
}

const allRows = [...loaded.values()];

function peerStats(ticker: string, groupId: string) {
  const peers =
    allRows.filter((row) => row.group?.id === groupId && row.data.ticker !== ticker);
  const population = peers.length >= 4 ? peers : allRows.filter((row) => row.data.ticker !== ticker);
  const values = (field: (row: Loaded) => number | null) =>
    population.map(field).filter((value): value is number => value != null);
  const self = loaded.get(ticker);
  return {
    peers: peers
      .sort(
        (a, b) =>
          (b.data.latestPrice.marketCap ?? 0) -
          (a.data.latestPrice.marketCap ?? 0),
      )
      .slice(0, 6),
    median: {
      pe: median(values((row) => row.data.metrics.pe)),
      evEbitda: median(values((row) => row.data.metrics.evEbitda)),
      revenueGrowth: median(values((row) => row.data.metrics.revenueGrowthTtm)),
      operatingMargin: median(values((row) => row.data.metrics.operatingMargin)),
      roic: median(values((row) => row.data.metrics.roic)),
      fcfMargin: median(values((row) => row.data.metrics.fcfMargin)),
      return1y: median(values((row) => row.data.metrics.return1y)),
    },
    percentile: self
      ? {
          pe: percentile(
            self.data.metrics.pe,
            values((row) => row.data.metrics.pe),
          ),
          evEbitda: percentile(
            self.data.metrics.evEbitda,
            values((row) => row.data.metrics.evEbitda),
          ),
          revenueGrowth: percentile(
            self.data.metrics.revenueGrowthTtm,
            values((row) => row.data.metrics.revenueGrowthTtm),
          ),
          operatingMargin: percentile(
            self.data.metrics.operatingMargin,
            values((row) => row.data.metrics.operatingMargin),
          ),
          roic: percentile(
            self.data.metrics.roic,
            values((row) => row.data.metrics.roic),
          ),
        }
      : null,
  };
}

function sectionText(block: {
  paragraphs: string[];
  bullets?: Array<{ title: string; detail: string }>;
  quote?: string;
}): string {
  return [
    ...block.paragraphs,
    ...(block.quote ? [`Quote: ${block.quote}`] : []),
    ...(block.bullets ?? []).map((b) => `- ${b.title}: ${b.detail}`),
  ].join("\n\n");
}

function packFor(ticker: string): string | null {
  const row = loaded.get(ticker);
  if (!row) return null;
  const story = STOCK_STORIES[ticker] as StockStory | undefined;
  const { data, consensus, segments, group } = row;
  const peers = peerStats(ticker, group?.id ?? "");
  const annual = data.annual.slice(-6);
  const quarterly = data.quarterly.slice(-8);
  const latest = data.metrics;

  const lines: string[] = [];
  lines.push(`# ${ticker} — ${data.name}`);
  lines.push("");
  lines.push(`Coverage group: ${group?.name ?? data.sector} (${group?.kind ?? "sector"})`);
  lines.push(`Sector / industry: ${data.sector} / ${data.industry}`);
  lines.push(`Employees: ${data.employees ?? "n/a"}; HQ: ${data.hq ?? "n/a"}; Website: ${data.website ?? "n/a"}`);
  lines.push(`Description: ${data.description}`);
  lines.push("");
  lines.push("## Market snapshot");
  lines.push(
    `Price ${money(data.latestPrice.close)} as of ${data.latestPrice.asOf}; market cap ${money(data.latestPrice.marketCap)}; 52-week range ${money(data.latestPrice.low52)}–${money(data.latestPrice.high52)}; dividend yield ${pct(data.latestPrice.dividendYield)}.`,
  );
  lines.push(
    `Returns: 1Y ${pct(data.metrics.return1y)}, YTD ${pct(data.metrics.returnYtd)}, 5Y ${pct(data.metrics.return5y)}.`,
  );
  lines.push(
    `Valuation: P/E ${mult(latest.pe)}; EV/EBITDA ${mult(latest.evEbitda)}; EV/Sales ${mult(latest.evSales)}; P/FCF ${mult(latest.pfcf)}; FCF yield ${pct(latest.fcfYield)}.`,
  );
  lines.push(
    `TTM: revenue ${money(latest.revenueTtm)} (${pct(latest.revenueGrowthTtm)} YoY); gross margin ${pct(latest.grossMargin)}; operating margin ${pct(latest.operatingMargin)}; net margin ${pct(latest.netMargin)}; FCF ${money(latest.freeCashFlowTtm)} (${pct(latest.fcfMargin)}); ROIC ${pct(latest.roic)}; ROE ${pct(latest.roe)}; net debt ${money(latest.netDebt)}; net debt/EBITDA ${mult(latest.netDebtToEbitda)}; interest cover ${mult(latest.interestCover)}.`,
  );
  lines.push("");
  lines.push("## Annual reported financials");
  lines.push("| FY | Revenue | Rev growth | Gross margin | Op margin | Net margin | EPS | CFO | Capex | FCF | Net debt | ROIC | ROE |");
  lines.push("| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |");
  for (let i = 0; i < annual.length; i += 1) {
    const year = annual[i];
    const prior = annual[i - 1];
    const growth =
      prior && prior.revenue && year.revenue
        ? year.revenue / prior.revenue - 1
        : null;
    lines.push(
      `| FY${year.fyear} | ${money(year.revenue)} | ${pct(growth)} | ${pct(year.grossMargin)} | ${pct(year.operatingMargin)} | ${pct(year.netMargin)} | ${num(year.epsDiluted)} | ${money(year.cfo)} | ${money(year.capex)} | ${money(year.freeCashFlow)} | ${money(year.netDebt)} | ${pct(year.roic)} | ${pct(year.roe)} |`,
    );
  }
  lines.push("");
  lines.push("## Recent quarters");
  lines.push("| Period | Revenue | Op margin | Net margin | EPS | FCF |");
  lines.push("| --- | ---: | ---: | ---: | ---: | ---: |");
  for (const q of quarterly) {
    lines.push(
      `| ${q.period} FY${String(q.fyear).slice(-2)} (${q.reportDate}) | ${money(q.revenue)} | ${pct(q.operatingMargin)} | ${pct(q.netMargin)} | ${num(q.epsDiluted)} | ${money(q.freeCashFlow)} |`,
    );
  }
  lines.push("");
  lines.push("## Revenue mix");
  if (segments?.segments.length) {
    lines.push(
      `${segments.segmentLabel ?? "Segment"} (${segments.asOf}): ${segments.segments
        .slice(0, 6)
        .map((s) => `${s.name} ${pct(s.share)}`)
        .join("; ")}`,
    );
  } else {
    lines.push("No segment split in the dataset; the company reports a single consolidated revenue line.");
  }
  if (segments?.geography.length) {
    lines.push(
      `Geography: ${segments.geography
        .slice(0, 6)
        .map((g) => `${g.name} ${pct(g.share)}`)
        .join("; ")}`,
    );
  }
  lines.push("");
  lines.push("## Consensus (third party, attributed)");
  if (consensus) {
    lines.push(
      `${consensus.provider}; as of ${consensus.asOf}; ${consensus.analystCount ?? "n/a"} analysts; target mean ${money(consensus.targetMean)}, range ${money(consensus.targetLow)}–${money(consensus.targetHigh)}; recommendation key ${consensus.recommendationKey ?? "n/a"}.`,
    );
    lines.push(
      `Distribution: strong buy ${consensus.distribution?.strongBuy ?? "n/a"}, buy ${consensus.distribution?.buy ?? "n/a"}, hold ${consensus.distribution?.hold ?? "n/a"}, sell ${consensus.distribution?.sell ?? "n/a"}, strong sell ${consensus.distribution?.strongSell ?? "n/a"}.`,
    );
    for (const estimate of consensus.estimates) {
      lines.push(
        `- ${estimate.period} (${estimate.endDate ?? "n/a"}): revenue ${money(estimate.revenueAvg)} (${pct(estimate.revenueGrowth)}), EPS ${num(estimate.epsAvg)} (${pct(estimate.epsGrowth)}), ${estimate.analystCount ?? "n/a"} analysts.`,
      );
    }
    if (consensus.revisions) {
      lines.push(
        `Revisions: EPS 7d ${pct(consensus.revisions.eps7d)}, 30d ${pct(consensus.revisions.eps30d)}, 60d ${pct(consensus.revisions.eps60d)}, 90d ${pct(consensus.revisions.eps90d)}.`,
      );
    }
    if (consensus.history.length) {
      lines.push("Recent surprises:");
      for (const surprise of consensus.history.slice(-4)) {
        lines.push(
          `- ${surprise.endDate}: EPS actual ${num(surprise.epsActual)} vs estimate ${num(surprise.epsEstimate)}; revenue actual ${money(surprise.revenueActual)}.`,
        );
      }
    }
  } else {
    lines.push("No attributed consensus snapshot in the dataset.");
  }
  lines.push("");
  lines.push("## Peer context");
  lines.push(
    `Group median: P/E ${mult(peers.median.pe)}; EV/EBITDA ${mult(peers.median.evEbitda)}; revenue growth ${pct(peers.median.revenueGrowth)}; operating margin ${pct(peers.median.operatingMargin)}; ROIC ${pct(peers.median.roic)}; FCF margin ${pct(peers.median.fcfMargin)}; 1Y return ${pct(peers.median.return1y)}.`,
  );
  if (peers.percentile) {
    lines.push(
      `Company percentile within the peer set: P/E ${pct(peers.percentile.pe, 0)}; EV/EBITDA ${pct(peers.percentile.evEbitda, 0)}; revenue growth ${pct(peers.percentile.revenueGrowth, 0)}; operating margin ${pct(peers.percentile.operatingMargin, 0)}; ROIC ${pct(peers.percentile.roic, 0)}.`,
    );
  }
  if (peers.peers.length) {
    lines.push("Largest peers:");
    for (const peer of peers.peers) {
      lines.push(
        `- ${peer.data.ticker} ${peer.data.name}: revenue ${money(peer.data.metrics.revenueTtm)}, growth ${pct(peer.data.metrics.revenueGrowthTtm)}, op margin ${pct(peer.data.metrics.operatingMargin)}, ROIC ${pct(peer.data.metrics.roic)}, P/E ${mult(peer.data.metrics.pe)}, EV/EBITDA ${mult(peer.data.metrics.evEbitda)}.`,
      );
    }
  }
  lines.push("");
  lines.push("## Existing bespoke editorial context (preserve the facts, do not contradict)");
  if (story) {
    lines.push(`Title: ${story.title}`);
    lines.push(`Dek: ${story.dek}`);
    lines.push("");
    lines.push("### What it does");
    lines.push(sectionText(story.whatItDoes));
    lines.push("");
    lines.push("### How it makes money");
    lines.push(sectionText(story.howItMakesMoney));
    lines.push("");
    lines.push("### Risks already identified");
    lines.push(story.risks.intro);
    for (const risk of story.risks.items) {
      lines.push(`- ${risk.title} (${risk.severity}): ${risk.detail} Watch: ${risk.watch}`);
    }
    lines.push("");
    lines.push("### Bottom line already identified");
    lines.push(story.bottomLine.paragraphs.join("\n\n"));
    lines.push(`Questions: ${story.bottomLine.questions.join(" | ")}`);
  }
  lines.push("");
  lines.push("## Sector lens");
  lines.push(sectorLens(group?.id ?? ""));
  lines.push("");
  return lines.join("\n");
}

function sectorLens(id: string): string {
  const lenses: Record<string, string> = {
    technology:
      "Frame the analysis around platform breadth, recurring revenue, customer concentration, R&D intensity, capital intensity (fabless vs capex-heavy), and the gap between reported growth and cash conversion. For semis, distinguish cycle from secular demand and watch inventory, utilisation and node transitions.",
    communication:
      "Separate user growth from monetisation. Discuss engagement, ad or subscription pricing, content/network costs, and the operating leverage that appears when revenue outgrows content or infrastructure spending.",
    "consumer-discretionary":
      "Use unit economics, same-store or transaction growth, ticket size, inventory turns, occupancy costs and new-unit payback. Distinguish traffic from price and identify what happens to margin when growth slows.",
    "consumer-staples":
      "Focus on volume versus price, brand investment, input costs, distribution, and the durability of gross margin. Staples compound through volume, mix and capital returns rather than rapid re-rating.",
    healthcare:
      "Separate commercial execution from clinical/regulatory risk. Use patent life, reimbursement, procedure volumes, R&D productivity and cash runway where the company discloses them; do not invent pipeline or trial data.",
    financials:
      "For banks and insurers, revenue is a function of net interest income, fees, credit costs and capital markets. Discuss book value, returns on tangible equity, reserve adequacy and capital return. For exchanges and networks, focus on volumes, take rate and operating leverage.",
    industrials:
      "Analyse orders, backlog, price-cost spread, capacity utilisation and incremental margins. A revenue record with falling margin is a different story from volume leverage; say which one the numbers show.",
    energy:
      "Tie revenue and cash flow to commodity realisations, production volumes, capex and shareholder returns. Distinguish maintenance capex from growth capex and stress the sensitivity of FCF to price.",
    utilities:
      "Focus on rate base, regulated returns, capital programmes, financing costs and dividend coverage. Earnings quality depends on regulatory lag and the cost of funding the asset base.",
    "real-estate":
      "Use occupancy, rent spreads, development yields, same-store NOI and cost of capital where disclosed. For REITs, asset quality and the spread between development yield and funding cost matter more than near-term revenue growth.",
    "ai-infrastructure":
      "Separate secular AI demand from cyclical capex. Discuss customer concentration, backlog/visibility, gross margin pressure from mix, capacity additions and the cash needed to fund growth.",
    "semis-semicap":
      "Frame the cycle through utilisation, inventory, node transitions and customer capex. Gross margin and book-to-bill matter more than a single quarter's revenue; distinguish design wins from shipped revenue.",
    "software-cyber":
      "Focus on recurring revenue quality, net revenue retention, customer concentration, sales efficiency and the path from growth to free cash flow. Stock-based compensation is a real cost, not a footnote.",
    quantum:
      "Separate technical milestones from commercial revenue. Discuss cash runway, government and enterprise contracts, hardware progress and the risk that the addressable market arrives later than the valuation assumes.",
    "fintech-crypto":
      "Use transaction volume, take rate, credit losses, funding costs and customer acquisition economics. For lenders, growth funded by balance-sheet risk is different from capital-light distribution.",
    "healthcare-growth":
      "Separate commercial traction from pipeline optionality. Use procedure/unit growth, reimbursement, R&D spend and cash runway where reported; do not invent clinical results or approval probabilities.",
    "space-defense":
      "Focus on contract backlog, award timing, milestone payments, cash burn and the path to scale. Revenue recognition can run ahead of cash, so backlog quality and funding matter.",
    "nuclear-metals":
      "Tie the analysis to project milestones, permitting, offtake agreements, commodity prices and funding. Pre-revenue names should be judged on cash runway and execution, not a revenue multiple.",
    "consumer-brands":
      "Use unit growth, same-store sales, wholesale versus direct mix, brand investment and inventory. Distinguish a brand that is gaining distribution from one that is discounting to hold shelf space.",
    "industrials-cyclicals":
      "Analyse order intake, backlog, price-cost spread, capacity additions and incremental returns. Explain whether growth is profitable and how much capital it consumes.",
    "specialty-financials":
      "For insurers, focus on underwriting margin, reserve development, investment income and capital returns. For advisory businesses, revenue is people-dependent; utilisation and compensation ratios drive operating leverage.",
  };
  return (
    lenses[id] ??
    "Focus on the company's reported revenue drivers, margin structure, capital intensity, balance sheet and valuation relative to its own history and closest peers."
  );
}

function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const batches: Array<{ id: string; group: string; tickers: string[] }> = [];
  let batchIndex = 0;
  for (const group of COVERAGE_GROUPS) {
    const tickers = group.tickers.filter((ticker) => loaded.has(ticker));
    for (let i = 0; i < tickers.length; i += 8) {
      batchIndex += 1;
      batches.push({
        id: `batch-${String(batchIndex).padStart(2, "0")}`,
        group: group.name,
        tickers: tickers.slice(i, i + 8),
      });
    }
  }
  let written = 0;
  for (const ticker of RESEARCH_TICKERS) {
    const pack = packFor(ticker);
    if (!pack) continue;
    fs.writeFileSync(path.join(OUT, `${ticker}.md`), pack, "utf8");
    written += 1;
  }
  fs.writeFileSync(
    path.join(OUT, "batches.json"),
    JSON.stringify(batches, null, 2),
    "utf8",
  );
  console.log(`[packs] wrote ${written} packs and ${batches.length} batches`);
}

main();
