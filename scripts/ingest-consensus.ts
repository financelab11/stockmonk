/**
 * Third-party analyst consensus ingestion.
 *
 * Pulls target prices, recommendation distributions, forward estimates and
 * recent EPS surprises from Yahoo Finance (with Nasdaq as a cross-check and
 * fallback). These are attributed third-party figures — Stockmonk does not
 * issue ratings or price targets of its own.
 *
 * Run: pnpm ingest:consensus
 */
import { setTimeout as sleep } from "node:timers/promises";
import fs from "node:fs/promises";
import path from "node:path";
import {
  ACTIVE_SCORE_TICKERS,
  isResearchTicker,
} from "../config/universe";
import { fetchConsensus } from "../lib/consensus";
import { consensusSchema, type Consensus } from "../lib/schemas";
import { tickerDir } from "./lib/data-paths";

const OUT = path.join(process.cwd(), "data", "consensus");

type SecQuarter = { end: string; revenue: number | null };

async function secQuarters(ticker: string): Promise<SecQuarter[]> {
  try {
    const raw = await fs.readFile(tickerDir(ticker, "sec.json"), "utf8");
    const parsed = JSON.parse(raw) as { quarterly?: SecQuarter[] };
    return parsed.quarterly ?? [];
  } catch {
    return [];
  }
}

function dayDiff(a: string, b: string): number {
  return Math.abs(new Date(a).getTime() - new Date(b).getTime()) / 86_400_000;
}

function attachRevenueActual(
  consensus: Consensus,
  quarters: SecQuarter[],
): Consensus {
  return {
    ...consensus,
    history: consensus.history.map((row) => {
      if (!row.endDate) return row;
      const match = quarters
        .filter((quarter) => dayDiff(quarter.end, row.endDate!) <= 10)
        .sort(
          (a, b) => dayDiff(a.end, row.endDate!) - dayDiff(b.end, row.endDate!),
        )[0];
      return match ? { ...row, revenueActual: match.revenue } : row;
    }),
  };
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  const summary: Array<Record<string, unknown>> = [];
  const requested = [
    ...(process.env.CONSENSUS_TICKERS ?? "").split(","),
    ...process.argv.slice(2),
  ]
    .map((ticker) => ticker.trim().toUpperCase())
    .filter(Boolean);
  const skipResearch = process.env.SKIP_RESEARCH === "1";
  const tickers =
    requested.length > 0
      ? requested
      : skipResearch
        ? ACTIVE_SCORE_TICKERS.filter((ticker) => !isResearchTicker(ticker))
        : [...ACTIVE_SCORE_TICKERS];

  for (const ticker of tickers) {
    try {
      const consensus = await fetchConsensus(ticker);
      const enriched = attachRevenueActual(
        consensus,
        await secQuarters(ticker),
      );
      const parsed = consensusSchema.parse(enriched);
      const file = isResearchTicker(ticker)
        ? path.join(OUT, `${ticker}.json`)
        : tickerDir(ticker, "consensus.json");
      await fs.mkdir(path.dirname(file), { recursive: true });
      await fs.writeFile(file, JSON.stringify(parsed, null, 2), "utf8");
      summary.push({
        ticker,
        provider: parsed.provider,
        targetMean: parsed.targetMean,
        analysts: parsed.analystCount,
        estimates: parsed.estimates.length,
        history: parsed.history.length,
      });
      console.log(
        `[consensus] ${ticker}: target ${parsed.targetMean ?? "n/a"}, ${parsed.analystCount ?? "?"} analysts, ${parsed.estimates.length} estimates`,
      );
    } catch (error) {
      console.error(
        `[consensus] ${ticker} failed: ${(error as Error).message}`,
      );
      summary.push({ ticker, error: (error as Error).message });
    }
    await sleep(1200);
  }

  await fs.writeFile(
    path.join(OUT, "_meta.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        providers: ["Yahoo Finance", "Nasdaq"],
        note: "Third-party analyst consensus, shown with attribution. Not a Stockmonk rating or price target.",
        succeeded: summary.filter((row) => !row.error).length,
        failed: summary.filter((row) => row.error).length,
        tickers: summary,
      },
      null,
      2,
    ),
    "utf8",
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
