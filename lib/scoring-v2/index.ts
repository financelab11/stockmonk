import type { V2Input } from "./input";
import { getArchivedCompany } from "@/config/archive";
import { isArchivedTicker } from "@/config/universe";
import { growthScore } from "./growth";
import { qualityScore } from "./quality";
import { technicalScore } from "./technical";
import { valuationScore } from "./valuation";
import { METHODOLOGY_VERSION, compositeScore, finite } from "./util";
import type { V2ScoreRecord } from "./types";

export function scoreCompany(input: V2Input): V2ScoreRecord {
  const scores = {
    growth: growthScore(input),
    quality: qualityScore(input),
    valuation: valuationScore(input),
    technical: technicalScore(input),
  };
  const archived = isArchivedTicker(input.data.ticker)
    ? getArchivedCompany(input.data.ticker)
    : undefined;
  if (archived) {
    scores.technical = {
      ...scores.technical,
      score: null,
      coverage: 0,
      status: "provisional",
      summary: `Archived coverage: ${archived.name} last traded on ${archived.lastTraded} after the ${archived.acquirer} transaction. Technical inputs need a live price series, so they are not scored.`,
      evidence: scores.technical.evidence.map((item) => ({
        ...item,
        available: false,
        points: null,
        reason:
          "No current market data: the company no longer trades. The final merger consideration is shown in the valuation section.",
      })),
    };
  }
  const asOf = input.data.latestPrice.asOf ?? null;
  const marketCap = input.data.latestPrice.marketCap;
  const netDebt = input.data.metrics.netDebt;
  const enterpriseValue =
    finite(marketCap) && finite(netDebt) ? marketCap + netDebt : null;
  return {
    ticker: input.data.ticker,
    name: input.data.name,
    sector: input.data.sector,
    group: input.groupName,
    exchange: input.exchange,
    price: input.data.latestPrice.close,
    marketCap,
    enterpriseValue,
    asOf,
    scores,
    composite: compositeScore(scores, asOf),
    methodologyVersion: METHODOLOGY_VERSION,
    generatedAt: new Date().toISOString(),
  };
}
