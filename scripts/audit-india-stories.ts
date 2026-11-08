import { INDIA_STOCK_STORIES } from "../content/india-stocks";
import { validateStories } from "../lib/validate-content";

const BANNED = [
  "SimFin",
  "Yahoo Finance",
  "Screener",
  "MarketScreener",
  "we recommend",
  "buy rating",
  "sell rating",
  "hold rating",
  "strong buy",
  "timely buy",
  "our price target",
];

const errors: string[] = [];
const titles = new Map<string, string>();
const deks = new Map<string, string>();
const longSentences = new Map<string, string>();

function words(story: unknown): number {
  return JSON.stringify(story)
    .replace(/[{}[\]",:]/g, " ")
    .split(/\s+/)
    .filter((word) => /[A-Za-z]/.test(word)).length;
}

errors.push(...validateStories(INDIA_STOCK_STORIES, "IN"));

for (const story of Object.values(INDIA_STOCK_STORIES)) {
  const ticker = story.ticker;
  const count = words(story);
  if (count < 600) errors.push(`${ticker}: only ${count} words`);
  if (story.readingMinutes < 9 || story.readingMinutes > 12) {
    errors.push(`${ticker}: readingMinutes ${story.readingMinutes}`);
  }
  if (!/^https:\/\/(www\.)?(nseindia\.com|bseindia\.com)\//.test(story.filingUrl)) {
    errors.push(`${ticker}: filingUrl is not NSE/BSE`);
  }
  if (!story.irUrl) errors.push(`${ticker}: missing irUrl`);

  const title = story.title.trim().toLowerCase();
  if (titles.has(title)) errors.push(`${ticker}: duplicate title of ${titles.get(title)}`);
  else titles.set(title, ticker);

  const dek = story.dek.trim().toLowerCase();
  if (deks.has(dek)) errors.push(`${ticker}: duplicate dek of ${deks.get(dek)}`);
  else deks.set(dek, ticker);

  const text = JSON.stringify(story);
  for (const term of BANNED) {
    if (text.toLowerCase().includes(term.toLowerCase())) {
      errors.push(`${ticker}: contains "${term}"`);
    }
  }

  const sentences = text
    .replace(/\\n/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.replace(/[^A-Za-z0-9 ]/g, "").replace(/\s+/g, " ").trim())
    .filter((sentence) => sentence.length >= 90);
  for (const sentence of sentences) {
    const key = sentence.toLowerCase();
    const owner = longSentences.get(key);
    if (owner && owner !== ticker) {
      errors.push(
        `${ticker}: duplicate long sentence also used by ${owner}: "${sentence.slice(0, 100)}"`,
      );
    } else {
      longSentences.set(key, ticker);
    }
  }
}

if (errors.length) {
  console.error(`[audit:india-stories] ${errors.length} issue(s)`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `[audit:india-stories] ${Object.keys(INDIA_STOCK_STORIES).length} stories pass editorial QA`,
);
