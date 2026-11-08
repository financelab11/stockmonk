/** Writes a factual research brief for every India coverage name. */
import fs from "node:fs";
import path from "node:path";
import { INDIA_TICKERS, getIndiaCoverageGroup } from "../config/india-coverage";
import { consensusSchema, tickerDataSchema } from "../lib/schemas";

const OUT = path.join(process.cwd(), "data", "india", "raw", "story-briefs");
const PROCESSED = path.join(process.cwd(), "data", "india", "processed");
const CONSENSUS = path.join(process.cwd(), "data", "india", "consensus");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

const money = (value: number | null | undefined) =>
  value == null
    ? "n/a"
    : Math.abs(value) >= 1e9
      ? `₹${(value / 1e9).toFixed(2)}B`
      : Math.abs(value) >= 1e7
        ? `₹${(value / 1e7).toFixed(1)} Cr`
        : Math.abs(value) >= 1e5
          ? `₹${(value / 1e5).toFixed(1)} L`
          : `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

const pct = (value: number | null | undefined) =>
  value == null ? "n/a" : `${(value * 100).toFixed(1)}%`;

const multiple = (value: number | null | undefined) =>
  value == null || !Number.isFinite(value) ? "n/a" : `${value.toFixed(1)}x`;

function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const universe = readJson<Array<Record<string, unknown>>>(
    path.join(process.cwd(), "public", "data", "india", "stocks.json"),
  ) ?? [];
  const byTicker = new Map(universe.map((entry) => [String(entry.ticker), entry]));

  for (const ticker of INDIA_TICKERS) {
    const data = tickerDataSchema.parse(
      readJson(path.join(PROCESSED, ticker, "data.json")),
    );
    const consensus = consensusSchema.safeParse(
      readJson(path.join(CONSENSUS, `${ticker}.json`)),
    );
    const group = getIndiaCoverageGroup(ticker);
    const peers = (group?.tickers ?? [])
      .filter((peer) => peer !== ticker)
      .map((peer) => byTicker.get(peer))
      .filter((entry): entry is Record<string, unknown> => Boolean(entry))
      .slice(0, 5);

    const annual = data.annual
      .filter((row) => !row.ttm)
      .slice(-6)
      .map(
        (row) =>
          `| FY${row.fyear} | ${money(row.revenue)} | ${money(row.operatingIncome)} | ${money(row.netIncome)} | ${money(row.freeCashFlow)} | ${row.epsDiluted == null ? "n/a" : `₹${row.epsDiluted.toFixed(2)}`} |`,
      );
    const quarters = data.quarterly
      .filter((row) => !row.ttm)
      .slice(-8)
      .map(
        (row) =>
          `| ${row.period} FY${String(row.fyear).slice(-2)} | ${money(row.revenue)} | ${pct(row.operatingMargin)} | ${money(row.netIncome)} | ${row.epsDiluted == null ? "n/a" : `₹${row.epsDiluted.toFixed(2)}`} |`,
      );
    const consensusLines = consensus.success
      ? [
          `Target mean: ${consensus.data.targetMean == null ? "n/a" : `₹${consensus.data.targetMean.toFixed(2)}`}`,
          `Target range: ${consensus.data.targetLow == null ? "n/a" : `₹${consensus.data.targetLow.toFixed(2)}`} to ${consensus.data.targetHigh == null ? "n/a" : `₹${consensus.data.targetHigh.toFixed(2)}`}`,
          `Analysts: ${consensus.data.analystCount ?? "n/a"}`,
          ...consensus.data.estimates.map(
            (estimate) =>
              `- ${estimate.period}: revenue ${money(estimate.revenueAvg)}, EPS ${estimate.epsAvg == null ? "n/a" : `₹${estimate.epsAvg.toFixed(2)}`}, analysts ${estimate.analystCount ?? "n/a"}`,
          ),
        ]
      : ["No consensus snapshot available."];
    const peerLines = peers.map(
      (peer) =>
        `| ${peer.ticker} | ${peer.name} | ${money(peer.marketCap as number | null)} | ${pct(peer.revenueGrowthTtm as number | null)} | ${pct(peer.operatingMargin as number | null)} | ${multiple(peer.evEbitda as number | null)} | ${multiple(peer.pe as number | null)} |`,
    );

    const brief = `# ${data.name} (${ticker})

## Identity
- India group: ${group?.name ?? data.sector}
- Reported sector / industry: ${data.sector} / ${data.industry}
- Employees: ${data.employees ?? "n/a"}
- HQ: ${data.hq ?? "n/a"}
- Website: ${data.website ?? "n/a"}
- NSE symbol: ${ticker}
- Approved filing URL: ${data.latest10KUrl ?? `https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=${ticker}`}

## Description
${data.description}

## Market snapshot (${data.latestPrice.asOf})
- Close: ₹${data.latestPrice.close.toFixed(2)}
- Day change: ${pct(data.latestPrice.changePct)}
- 52-week range: ${data.latestPrice.low52 == null ? "n/a" : `₹${data.latestPrice.low52.toFixed(2)}`} to ${data.latestPrice.high52 == null ? "n/a" : `₹${data.latestPrice.high52.toFixed(2)}`}
- Market cap: ${money(data.latestPrice.marketCap)}
- P/E: ${multiple(data.metrics.pe)}
- EV/EBITDA: ${multiple(data.metrics.evEbitda)}
- EV/Sales: ${multiple(data.metrics.evSales)}
- P/FCF: ${multiple(data.metrics.pfcf)}
- FCF yield: ${pct(data.metrics.fcfYield)}

## TTM fundamentals
- Revenue: ${money(data.metrics.revenueTtm)}
- Revenue growth: ${pct(data.metrics.revenueGrowthTtm)}
- Latest-quarter revenue growth: ${pct(data.metrics.revenueGrowthLatestQ)}
- Gross margin: ${pct(data.metrics.grossMargin)}
- Operating margin: ${pct(data.metrics.operatingMargin)}
- Net margin: ${pct(data.metrics.netMargin)}
- FCF: ${money(data.metrics.freeCashFlowTtm)}
- FCF margin: ${pct(data.metrics.fcfMargin)}
- EPS diluted: ${data.metrics.epsTtm == null ? "n/a" : `₹${data.metrics.epsTtm.toFixed(2)}`}
- ROE: ${pct(data.metrics.roe)}
- ROIC: ${pct(data.metrics.roic)}
- Net debt: ${money(data.metrics.netDebt)}
- Net debt / EBITDA: ${multiple(data.metrics.netDebtToEbitda)}
- Interest cover: ${multiple(data.metrics.interestCover)}
- Return 1y: ${pct(data.metrics.return1y)}
- Return 5y: ${pct(data.metrics.return5y)}

## Annual history
| Year | Revenue | Operating income | Net income | Free cash flow | EPS |
| --- | --- | --- | --- | --- | --- |
${annual.join("\n")}

## Recent quarters
| Quarter | Revenue | Operating margin | Net income | EPS |
| --- | --- | --- | --- | --- |
${quarters.join("\n")}

## Third-party consensus
${consensusLines.join("\n")}

## Peer context (${group?.name ?? "India coverage"})
| Ticker | Name | Market cap | Rev growth | Op margin | EV/EBITDA | P/E |
| --- | --- | --- | --- | --- | --- | --- |
${peerLines.join("\n")}

## Approved factor chips
${data.factorChips.map((chip) => `- ${chip.key}: ${chip.detail}`).join("\n") || "- n/a"}

## Editorial rules
- Quantitative claims may only use numbers in this brief. Do not estimate or invent figures.
- Keep the NSE/BSE filing URL from the skeleton. Do not mention data vendors.
- No buy/sell/hold ratings, no Stockmonk price targets, no guarantees, no "we recommend".
- Ten sections, at least two paragraphs per block, five risks, three watchlist items, three questions.
- Write for a learner: explain the Indian business model, the unit economics, what the numbers imply, and what would change the story.
- Use rupees and Indian business context (NSE, domestic demand, regulation, promoters, working capital) where relevant.
- Avoid dated news, specific contract values, or claims you cannot support.
`;
    fs.writeFileSync(path.join(OUT, `${ticker}.md`), brief, "utf8");
  }
  console.log(`[india:briefs] wrote ${INDIA_TICKERS.length} briefs`);
}

main();
