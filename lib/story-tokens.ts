import type { StockStory } from "@/content/stocks/types";
import type { TickerData } from "@/lib/schemas";
import {
  formatCompactCurrency,
  formatCurrency,
  formatMultiple,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";

/**
 * Replaces live-data tokens inside hand-written report prose, so a narrative
 * can refer to the current price or multiple without going stale overnight.
 *
 * Tokens: {{price}} {{marketCap}} {{pe}} {{evEbitda}} {{pfcf}} {{fcfYield}}
 *         {{return1y}} {{range52}} {{rangePosition}} {{revenueTtm}} {{opMargin}}
 */
export function storyTokens(data: TickerData): Record<string, string> {
  const currency = data.currency ?? "USD";
  const quoteCurrency = data.quoteCurrency ?? currency;
  const price = data.latestPrice;
  const metrics = data.metrics;
  const position =
    price.close != null && price.low52 != null && price.high52 != null && price.high52 > price.low52
      ? (price.close - price.low52) / (price.high52 - price.low52)
      : null;

  return {
    price: formatCurrency(price.close, 2, quoteCurrency),
    marketCap: formatCompactCurrency(price.marketCap, quoteCurrency),
    pe: formatMultiple(metrics.pe),
    evEbitda: formatMultiple(metrics.evEbitda),
    pfcf: formatMultiple(metrics.pfcf),
    fcfYield: formatPercent(metrics.fcfYield),
    return1y: formatSignedPercent(metrics.return1y),
    range52:
      price.low52 != null && price.high52 != null
        ? `${formatCurrency(price.low52, 2, quoteCurrency)} to ${formatCurrency(price.high52, 2, quoteCurrency)}`
        : "not available",
    rangePosition: position == null ? "an unknown position" : `${Math.round(position * 100)}%`,
    revenueTtm: formatCompactCurrency(metrics.revenueTtm, currency),
    opMargin: formatPercent(metrics.operatingMargin),
  };
}

function resolve(text: string, tokens: Record<string, string>): string {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key: string) => tokens[key] ?? match);
}

function resolveBlock<T extends { paragraphs: string[]; bullets?: Array<{ title: string; detail: string }> }>(
  block: T,
  tokens: Record<string, string>,
): T {
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

export function resolveStory(story: StockStory, data: TickerData): StockStory {
  const tokens = storyTokens(data);
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
      paragraphs: story.bottomLine.paragraphs.map((paragraph) => resolve(paragraph, tokens)),
      questions: story.bottomLine.questions.map((question) => resolve(question, tokens)),
    },
  };
}
