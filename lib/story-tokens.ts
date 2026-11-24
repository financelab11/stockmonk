import type { StockStory } from "@/content/stocks/types";
import type { Consensus, SegmentMix, TickerData } from "@/lib/schemas";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatMultiple,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";

/**
 * Live-data tokens for report prose. A token is resolved at render time from
 * the current dataset, so the narrative never quotes yesterday's close,
 * multiple, margin, consensus estimate or peer median.
 *
 * Tokens: {{price}} {{marketCap}} {{pe}} {{evEbitda}} {{evSales}} {{pfcf}}
 *         {{fcfYield}} {{return1y}} {{returnYtd}} {{return5y}} {{range52}}
 *         {{rangePosition}} {{change1d}} {{revenueTtm}} {{revenueGrowth}}
 *         {{epsTtm}} {{epsGrowth}} {{opMargin}} {{grossMargin}} {{netMargin}}
 *         {{fcf}} {{fcfMargin}} {{netDebt}} {{netDebtToEbitda}}
 *         {{interestCover}} {{roic}} {{roe}} {{dividendYield}}
 *         {{latestQuarter}} {{latestQuarterRevenue}} {{latestQuarterOpMargin}}
 *         {{latestQuarterNetMargin}} {{latestQuarterEps}} {{latestQuarterFcf}}
 *         {{latestQuarterDate}} {{consensusTarget}} {{consensusLow}}
 *         {{consensusHigh}} {{analystCount}} {{consensusRevenue}}
 *         {{consensusEps}} {{consensusGrowth}} {{consensusPeriod}}
 *         {{consensusAsOf}} {{currentQuarterRevenue}} {{currentQuarterEps}}
 *         {{currentQuarterGrowth}} {{peerPe}} {{peerEvEbitda}}
 *         {{peerGrowth}} {{peerMargin}} {{peerRoic}}
 */

type Quarter = TickerData["quarterly"][number];

export type StoryTokenContext = {
  data: TickerData;
  consensus?: Consensus | null;
  segments?: SegmentMix | null;
  peerPe?: number | null;
  peerEvEbitda?: number | null;
  peerRevenueGrowth?: number | null;
  peerOperatingMargin?: number | null;
  peerRoic?: number | null;
  latestQuarter?: Quarter | null;
};

function pickLatestQuarter(context: StoryTokenContext): Quarter | null {
  if (context.latestQuarter) return context.latestQuarter;
  return (
    context.data.quarterly
      .filter((row) => !row.ttm)
      .sort((a, b) => (a.reportDate ?? "").localeCompare(b.reportDate ?? ""))
      .at(-1) ?? null
  );
}

function nextEstimate(consensus: Consensus | null | undefined) {
  if (!consensus?.estimates.length) return null;
  const asOf = consensus.asOf ?? "";
  return (
    consensus.estimates
      .filter((estimate) => estimate.endDate && estimate.endDate >= asOf)
      .sort((a, b) => (a.endDate ?? "").localeCompare(b.endDate ?? ""))[0] ??
    consensus.estimates[0]
  );
}

function quarterLabel(quarter: Quarter | null): string {
  if (!quarter) return "the latest reported quarter";
  return `${quarter.period} FY${String(quarter.fyear).slice(-2)}`;
}

export function storyTokens(
  context: StoryTokenContext,
): Record<string, string> {
  const { data, consensus } = context;
  const currency = data.currency ?? "USD";
  const quoteCurrency = data.quoteCurrency ?? currency;
  const price = data.latestPrice;
  const metrics = data.metrics;
  const quarter = pickLatestQuarter(context);
  const estimate = nextEstimate(consensus);
  const position =
    price.close != null &&
    price.low52 != null &&
    price.high52 != null &&
    price.high52 > price.low52
      ? (price.close - price.low52) / (price.high52 - price.low52)
      : null;

  return {
    price: formatCurrency(price.close, 2, quoteCurrency),
    marketCap: formatCompactCurrency(price.marketCap, quoteCurrency),
    pe: formatMultiple(metrics.pe),
    evEbitda: formatMultiple(metrics.evEbitda),
    evSales: formatMultiple(metrics.evSales),
    pfcf: formatMultiple(metrics.pfcf),
    fcfYield: formatPercent(metrics.fcfYield),
    return1y: formatSignedPercent(metrics.return1y),
    returnYtd: formatSignedPercent(metrics.returnYtd),
    return5y: formatSignedPercent(metrics.return5y),
    range52:
      price.low52 != null && price.high52 != null
        ? `${formatCurrency(price.low52, 2, quoteCurrency)} to ${formatCurrency(price.high52, 2, quoteCurrency)}`
        : "not available",
    rangePosition:
      position == null
        ? "an unknown position"
        : `${Math.round(position * 100)}%`,
    change1d: formatSignedPercent(price.changePct),
    revenueTtm: formatCompactCurrency(metrics.revenueTtm, currency),
    revenueGrowth: formatPercent(metrics.revenueGrowthTtm),
    epsTtm:
      metrics.epsTtm == null
        ? "n/a"
        : formatCurrency(metrics.epsTtm, 2, currency),
    epsGrowth: formatPercent(metrics.epsGrowthTtm),
    opMargin: formatPercent(metrics.operatingMargin),
    grossMargin: formatPercent(metrics.grossMargin),
    netMargin: formatPercent(metrics.netMargin),
    fcf: formatCompactCurrency(metrics.freeCashFlowTtm, currency),
    fcfMargin: formatPercent(metrics.fcfMargin),
    netDebt: formatCompactCurrency(metrics.netDebt, currency),
    netDebtToEbitda: formatMultiple(metrics.netDebtToEbitda),
    interestCover: formatMultiple(metrics.interestCover),
    roic: formatPercent(metrics.roic),
    roe: formatPercent(metrics.roe),
    dividendYield: formatPercent(price.dividendYield),
    latestQuarter: quarterLabel(quarter),
    latestQuarterRevenue: formatCompactCurrency(
      quarter?.revenue ?? null,
      currency,
    ),
    latestQuarterOpMargin: formatPercent(quarter?.operatingMargin ?? null),
    latestQuarterNetMargin: formatPercent(quarter?.netMargin ?? null),
    latestQuarterEps:
      quarter?.epsDiluted == null
        ? "n/a"
        : formatCurrency(quarter.epsDiluted, 2, currency),
    latestQuarterFcf: formatCompactCurrency(
      quarter?.freeCashFlow ?? null,
      currency,
    ),
    latestQuarterDate: quarter?.reportDate
      ? formatDate(quarter.reportDate)
      : "n/a",
    consensusTarget: formatCompactCurrency(
      consensus?.targetMean ?? null,
      currency,
    ),
    consensusLow: formatCompactCurrency(consensus?.targetLow ?? null, currency),
    consensusHigh: formatCompactCurrency(
      consensus?.targetHigh ?? null,
      currency,
    ),
    analystCount:
      consensus?.analystCount == null ? "n/a" : String(consensus.analystCount),
    consensusRevenue: formatCompactCurrency(
      estimate?.revenueAvg ?? null,
      currency,
    ),
    consensusEps:
      estimate?.epsAvg == null
        ? "n/a"
        : formatCurrency(estimate.epsAvg, 2, currency),
    consensusGrowth: formatPercent(estimate?.revenueGrowth ?? null),
    consensusPeriod: estimate?.period ?? "the next period",
    consensusAsOf: consensus?.asOf ? formatDate(consensus.asOf) : "n/a",
    currentQuarterRevenue: formatCompactCurrency(
      consensus?.currentQuarter?.revenueAvg ?? null,
      currency,
    ),
    currentQuarterEps:
      consensus?.currentQuarter?.epsAvg == null
        ? "n/a"
        : formatCurrency(consensus.currentQuarter.epsAvg, 2, currency),
    currentQuarterGrowth: formatPercent(
      consensus?.currentQuarter?.revenueGrowth ?? null,
    ),
    peerPe: formatMultiple(context.peerPe ?? null),
    peerEvEbitda: formatMultiple(context.peerEvEbitda ?? null),
    peerGrowth: formatPercent(context.peerRevenueGrowth ?? null),
    peerMargin: formatPercent(context.peerOperatingMargin ?? null),
    peerRoic: formatPercent(context.peerRoic ?? null),
  };
}

function resolve(text: string, tokens: Record<string, string>): string {
  return text.replace(
    /\{\{(\w+)\}\}/g,
    (match, key: string) => tokens[key] ?? match,
  );
}

function resolveBlock<
  T extends {
    paragraphs: string[];
    bullets?: Array<{ title: string; detail: string }>;
  },
>(block: T, tokens: Record<string, string>): T {
  return {
    ...block,
    paragraphs: block.paragraphs.map((paragraph) => resolve(paragraph, tokens)),
    bullets: block.bullets?.map((bullet) => ({
      ...bullet,
      title: resolve(bullet.title, tokens),
      detail: resolve(bullet.detail, tokens),
    })),
  };
}

export function resolveStory(
  story: StockStory,
  context: StoryTokenContext,
): StockStory {
  const tokens = storyTokens(context);
  return {
    ...story,
    dek: resolve(story.dek, tokens),
    takeaways: story.takeaways.map((item) => resolve(item, tokens)),
    bigPicture: resolveBlock(story.bigPicture, tokens),
    whatItDoes: resolveBlock(story.whatItDoes, tokens),
    howItMakesMoney: resolveBlock(story.howItMakesMoney, tokens),
    growth: resolveBlock(story.growth, tokens),
    performance: resolveBlock(story.performance, tokens),
    cash: resolveBlock(story.cash, tokens),
    valuation: resolveBlock(story.valuation, tokens),
    analysts: resolveBlock(story.analysts, tokens),
    risks: {
      ...story.risks,
      intro: resolve(story.risks.intro, tokens),
      items: story.risks.items.map((item) => ({
        ...item,
        detail: resolve(item.detail, tokens),
        watch: resolve(item.watch, tokens),
      })),
      watchlist: story.risks.watchlist.map((item) => ({
        ...item,
        detail: resolve(item.detail, tokens),
      })),
    },
    bottomLine: {
      ...story.bottomLine,
      paragraphs: story.bottomLine.paragraphs.map((paragraph) =>
        resolve(paragraph, tokens),
      ),
      questions: story.bottomLine.questions.map((question) =>
        resolve(question, tokens),
      ),
    },
  };
}
