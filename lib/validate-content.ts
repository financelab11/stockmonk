import { STOCK_STORIES } from "@/content/stocks";
import type { StockStory, StoryBlock } from "@/content/stocks/types";
import { ARTICLE_SECTIONS } from "./constants";

const BANNED: Array<{ pattern: RegExp; label: string }> = [
  { pattern: /\bwe recommend\b/i, label: "recommendation language" },
  { pattern: /\bbuy rating\b/i, label: "rating language" },
  { pattern: /\bsell rating\b/i, label: "rating language" },
  { pattern: /\bhold rating\b/i, label: "rating language" },
  { pattern: /\bstrong buy\b/i, label: "rating language" },
  { pattern: /\btimely buy\b/i, label: "rating language" },
  { pattern: /\bunderperform\b/i, label: "rating language" },
  { pattern: /\bprice target of ours\b/i, label: "Stockmonk price target" },
  { pattern: /\bour price target\b/i, label: "Stockmonk price target" },
  { pattern: /\bguaranteed\b/i, label: "guarantee language" },
  { pattern: /\bguarantee\b/i, label: "guarantee language" },
];

function allText(story: StockStory): string {
  const blocks = [
    story.title,
    story.dek,
    ...story.takeaways,
    ...story.bigPicture.paragraphs,
    ...story.whatItDoes.paragraphs,
    ...(story.whatItDoes.bullets ?? []).flatMap((item) => [item.title, item.detail]),
    ...story.howItMakesMoney.paragraphs,
    ...story.growth.paragraphs,
    ...(story.growth.bullets ?? []).flatMap((item) => [item.title, item.detail]),
    ...story.performance.paragraphs,
    ...story.cash.paragraphs,
    ...story.valuation.paragraphs,
    ...story.analysts.paragraphs,
    story.risks.intro,
    ...story.risks.items.flatMap((item) => [item.title, item.detail, item.watch]),
    ...story.risks.watchlist.flatMap((item) => [item.title, item.detail]),
    ...story.bottomLine.paragraphs,
    ...story.bottomLine.questions,
  ];
  return blocks.join("\n");
}

function allowsNegativeGuarantee(text: string, matchIndex: number): boolean {
  const prefix = text.slice(Math.max(0, matchIndex - 16), matchIndex).toLowerCase();
  return /\b(not|never|no|without)\s+$/.test(prefix);
}

export function validateStory(story: StockStory): string[] {
  const errors: string[] = [];

  if (!story.title || story.title.length < 20) errors.push(`${story.ticker}: title is too short`);
  if (!story.dek || story.dek.length < 60) errors.push(`${story.ticker}: dek is too short`);
  if (story.takeaways.length < 3) errors.push(`${story.ticker}: needs at least 3 takeaways`);
  if (story.risks.items.length < 5) errors.push(`${story.ticker}: needs at least 5 risks`);
  if (story.risks.watchlist.length < 3) errors.push(`${story.ticker}: needs at least 3 watch items`);
  if (story.bottomLine.questions.length < 3) errors.push(`${story.ticker}: needs at least 3 questions`);

  const requiredBlocks: Array<[string, StoryBlock]> = [
    ["bigPicture", story.bigPicture],
    ["whatItDoes", story.whatItDoes],
    ["howItMakesMoney", story.howItMakesMoney],
    ["growth", story.growth],
    ["performance", story.performance],
    ["cash", story.cash],
    ["valuation", story.valuation],
    ["analysts", story.analysts],
  ];

  for (const [name, block] of requiredBlocks) {
    if (block.paragraphs.length < 2) {
      errors.push(`${story.ticker}: ${name} needs at least 2 paragraphs`);
    }
  }

  if (ARTICLE_SECTIONS.length !== 10) {
    errors.push("ARTICLE_SECTIONS must contain exactly 10 sections");
  }

  const text = allText(story);
  for (const banned of BANNED) {
    const matches = [...text.matchAll(new RegExp(banned.pattern.source, "gi"))];
    for (const match of matches) {
      if (match.index == null) continue;
      if (allowsNegativeGuarantee(text, match.index)) continue;
      errors.push(
        `${story.ticker}: banned ${banned.label} — "${match[0]}" near "${text.slice(
          Math.max(0, match.index - 40),
          match.index + 40,
        )}"`,
      );
    }
  }

  if (!/^https:\/\/www\.sec\.gov\//.test(story.filingUrl)) {
    errors.push(`${story.ticker}: filingUrl should point to SEC EDGAR`);
  }

  return errors;
}

export function validateContent(): string[] {
  const stories = Object.values(STOCK_STORIES);
  return stories.flatMap(validateStory);
}
