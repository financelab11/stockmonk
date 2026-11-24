/**
 * Applies curated research rewrites from data/raw/rewrites/batch-*.json onto
 * the story files. Only the seven generated sections are replaced; the
 * bespoke sections, URLs and metadata stay untouched.
 *
 * Run: pnpm tsx scripts/apply-research-rewrites.ts
 *      pnpm tsx scripts/apply-research-rewrites.ts --batch=batch-01
 */
import fs from "node:fs";
import path from "node:path";
import { STOCK_STORIES } from "../content/stocks";
import type { StockStory } from "../content/stocks/types";

const REWRITES = path.join(process.cwd(), "data", "raw", "rewrites");
const STORIES = path.join(process.cwd(), "content", "stocks");
const ONLY = process.argv.find((arg) => arg.startsWith("--batch="))?.split("=")[1];

type Rewrite = {
  ticker: string;
  takeaways: string[];
  bigPicture: { paragraphs: string[]; quote: string };
  growth: {
    paragraphs: string[];
    bullets: Array<{ title: string; detail: string }>;
  };
  performance: { paragraphs: string[] };
  cash: { paragraphs: string[] };
  valuation: { paragraphs: string[] };
  analysts: { paragraphs: string[] };
};

function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(file, "utf8")) as T;
}

function serialize(file: string, story: StockStory): string {
  const current = fs.readFileSync(file, "utf8");
  const exportName =
    /export const (\w+)\s*:\s*StockStory/.exec(current)?.[1] ?? story.ticker;
  const typeImport =
    /import type \{ StockStory \} from "([^"]+)"/.exec(current)?.[1] ??
    "./types";
  return `import type { StockStory } from "${typeImport}";\n\nexport const ${exportName}: StockStory = ${JSON.stringify(
    story,
    null,
    2,
  )};\n`;
}

function hash(value: string): number {
  let result = 0;
  for (let i = 0; i < value.length; i += 1) {
    result = (result * 31 + value.charCodeAt(i)) % 1_000_003;
  }
  return result;
}

function pick(ticker: string, section: string, options: string[]): string {
  return options[hash(`${ticker}:${section}`) % options.length];
}

function diversifyOpening(
  paragraph: string,
  ticker: string,
  section: string,
): string {
  let text = paragraph;

  text = text.replace(
    /The Yahoo Finance consensus dated 18 November 2026/gi,
    pick(ticker, section, [
      "The 18 November 2026 Yahoo Finance snapshot",
      "Yahoo Finance's 18 November 2026 estimate set",
      "The Yahoo Finance data from 18 November 2026",
      "Yahoo Finance's survey from 18 November 2026",
    ]),
  );
  text = text.replace(
    /The Yahoo Finance consensus of 18 November 2026/gi,
    pick(ticker, section, [
      "Yahoo Finance's 18 November 2026 estimate set",
      "The 18 November 2026 Yahoo Finance snapshot",
      "Yahoo Finance data dated 18 November 2026",
    ]),
  );
  text = text.replace(
    /Yahoo Finance's consensus(?:,)?(?: dated)? 18 November 2026/gi,
    pick(ticker, section, [
      "Yahoo Finance's 18 November 2026 survey",
      "the 18 November 2026 Yahoo Finance estimate set",
      "Yahoo Finance data from 18 November 2026",
    ]),
  );
  text = text.replace(
    /Yahoo Finance consensus dated 18 November 2026/gi,
    pick(ticker, section, [
      "the Yahoo Finance survey of 18 November 2026",
      "Yahoo Finance's 18 November 2026 snapshot",
      "the 18 November 2026 Yahoo Finance estimate set",
    ]),
  );
  text = text.replace(
    /attributed to Yahoo Finance as of 18 November 2026/gi,
    pick(ticker, section, [
      "carried by Yahoo Finance on 18 November 2026",
      "from the Yahoo Finance snapshot of 18 November 2026",
      "in Yahoo Finance's 18 November 2026 survey",
    ]),
  );

  if (/^The margin bridge\b/i.test(text)) {
    text = text.replace(
      /^The margin bridge\b/i,
      pick(ticker, section, [
        "The margin path",
        "Margin progression",
        "The margin record",
        "Profitability progression",
        "The margin trajectory",
      ]),
    );
  }
  if (/^Revenue rose from\b/i.test(text)) {
    text = text.replace(
      /^Revenue rose from\b/i,
      pick(ticker, section, [
        "The top line moved from",
        "Sales advanced from",
        "Revenue expanded from",
        "The revenue base grew from",
        "Turnover rose from",
      ]),
    );
  }
  if (/^Revenue went from\b/i.test(text)) {
    text = text.replace(
      /^Revenue went from\b/i,
      pick(ticker, section, [
        "The top line went from",
        "Sales moved from",
        "Revenue progressed from",
        "The revenue base climbed from",
      ]),
    );
  }
  if (/^Free cash flow\b/i.test(text)) {
    text = text.replace(
      /^Free cash flow\b/i,
      pick(ticker, section, [
        "Cash generation",
        "FCF",
        "Free cash flow after capex",
        "The cash statement",
      ]),
    );
  }
  if (/^Trailing free cash flow\b/i.test(text)) {
    text = text.replace(
      /^Trailing free cash flow\b/i,
      pick(ticker, section, [
        "Trailing FCF",
        "Twelve-month cash generation",
        "Trailing cash generation",
      ]),
    );
  }
  if (/^Gross margin was\b/i.test(text)) {
    text = text.replace(
      /^Gross margin was\b/i,
      pick(ticker, section, [
        "Gross margin came in at",
        "The gross margin was",
        "Gross margin reached",
      ]),
    );
  }
  if (/^Operating margin was\b/i.test(text)) {
    text = text.replace(
      /^Operating margin was\b/i,
      pick(ticker, section, [
        "Operating margin came in at",
        "The operating margin was",
        "Operating margin reached",
      ]),
    );
  }

  return text;
}

function normalizeAnalystLanguage(ticker: string, paragraphs: string[]): string[] {
  return paragraphs.map((paragraph) =>
    paragraph
      .split(/(?<=[.!?])\s+/)
      .map((sentence) => {
        const hasRatingLabel = /strong buys?|strong sells?|\bsells?\b|\bholds?\b/i.test(sentence);
        if (!/distribution is/i.test(sentence) && !hasRatingLabel) return sentence;
        const matches = [
          ...sentence.matchAll(
            /(\d+)\s+(strong buys?|buys?|holds?|strong sells?|sells?)\b/gi,
          ),
        ];
        if (matches.length === 0) return sentence;
        let positive = 0;
        let neutral = 0;
        let negative = 0;
        for (const match of matches) {
          const count = Number(match[1]);
          const label = match[2].toLowerCase();
          if (label.startsWith("strong buy") || label === "buy" || label === "buys") {
            positive += count;
          } else if (label.startsWith("hold")) {
            neutral += count;
          } else {
            negative += count;
          }
        }
        const total = positive + neutral + negative;
        if (total === 0) return sentence;
        const variants = [
          `Of the ${total} analysts, ${positive} sit at the positive end, ${neutral} are neutral and ${negative} are cautious.`,
          `${positive} of ${total} analysts are positive, ${neutral} neutral and ${negative} cautious.`,
          `Positive views outnumber neutral ones ${positive} to ${neutral}, with ${negative} at the cautious end.`,
          `The ${total}-analyst group splits ${positive} positive, ${neutral} neutral and ${negative} cautious.`,
          `Analyst sentiment is ${positive / total >= 0.5 ? "skewed positive" : "mixed"}: ${positive} positive, ${neutral} neutral and ${negative} cautious.`,
        ];
        return variants[hash(ticker) % variants.length];
      })
      .join(" ")
      .replace(/\bhigh hold count\b/gi, "large neutral block")
      .replace(/\bhold count\b/gi, "neutral count")
      .replace(/\bmode is a hold\b/gi, "most common view is neutral")
      .replace(/\bratings\b/gi, "analyst views")
      .replace(/\brating\b/gi, "view"),
  );
}

function merge(story: StockStory, rewrite: Rewrite): StockStory {
  if (!Array.isArray(rewrite.takeaways) || rewrite.takeaways.length !== 4) {
    throw new Error(`${rewrite.ticker}: takeaways must be 4 bullets`);
  }
  if (rewrite.bigPicture.paragraphs.length < 2) {
    throw new Error(`${rewrite.ticker}: bigPicture needs at least 2 paragraphs`);
  }
  if (rewrite.growth.bullets.length !== 3) {
    throw new Error(`${rewrite.ticker}: growth needs exactly 3 bullets`);
  }
  return {
    ...story,
    takeaways: rewrite.takeaways,
    bigPicture: {
      ...story.bigPicture,
      paragraphs: rewrite.bigPicture.paragraphs.map((paragraph) =>
        diversifyOpening(paragraph, rewrite.ticker, "bigPicture"),
      ),
      quote: rewrite.bigPicture.quote,
    },
    growth: {
      ...story.growth,
      paragraphs: rewrite.growth.paragraphs.map((paragraph) =>
        diversifyOpening(paragraph, rewrite.ticker, "growth"),
      ),
      bullets: rewrite.growth.bullets,
    },
    performance: {
      ...story.performance,
      paragraphs: rewrite.performance.paragraphs.map((paragraph) =>
        diversifyOpening(paragraph, rewrite.ticker, "performance"),
      ),
    },
    cash: {
      ...story.cash,
      paragraphs: rewrite.cash.paragraphs.map((paragraph) =>
        diversifyOpening(paragraph, rewrite.ticker, "cash"),
      ),
    },
    valuation: {
      ...story.valuation,
      paragraphs: rewrite.valuation.paragraphs.map((paragraph) =>
        diversifyOpening(paragraph, rewrite.ticker, "valuation"),
      ),
    },
    analysts: {
      ...story.analysts,
      paragraphs: normalizeAnalystLanguage(
        rewrite.ticker,
        rewrite.analysts.paragraphs.map((paragraph) =>
          diversifyOpening(paragraph, rewrite.ticker, "analysts"),
        ),
      ),
    },
    narrativeSource: "curated",
    narrativeUpdatedAt: "2026-11-24",
  };
}

const files = fs
  .readdirSync(REWRITES)
  .filter((file) => file.endsWith(".json") && file.startsWith("batch-"))
  .filter((file) => !ONLY || file === `${ONLY}.json`)
  .sort();

let applied = 0;
for (const file of files) {
  const rewrites = readJson<Rewrite[]>(path.join(REWRITES, file));
  for (const rewrite of rewrites) {
    const story = STOCK_STORIES[rewrite.ticker] as StockStory | undefined;
    if (!story) {
      console.warn(`[rewrites] ${rewrite.ticker}: no story`);
      continue;
    }
    const merged = merge(story, rewrite);
    const target = path.join(STORIES, `${rewrite.ticker}.ts`);
    fs.writeFileSync(target, serialize(target, merged), "utf8");
    applied += 1;
    console.log(`[rewrites] ${rewrite.ticker}: updated`);
  }
}
console.log(`[rewrites] ${applied} reports updated from ${files.length} batch files`);
