/**
 * Normalises analyst-distribution language in curated stories.
 *
 * Yahoo Finance's rating counts and its analyst count do not always reconcile.
 * The reports keep the attributed target and estimate data but describe the
 * distribution qualitatively, without numeric buckets that can contradict the
 * stated analyst count.
 *
 * Run: pnpm tsx scripts/normalize-research-language.ts
 */
import fs from "node:fs";
import path from "node:path";
import { STOCK_STORIES } from "../content/stocks";
import type { StockStory } from "../content/stocks/types";

const STORIES = path.join(process.cwd(), "content", "stocks");

function normalize(paragraphs: string[], ticker: string): string[] {
  void ticker;
  return paragraphs.map((paragraph) =>
    paragraph
      .split(/(?<=[.!?])\s+/)
      .filter((sentence) => {
        if (/mean target|average target|price target/i.test(sentence)) return true;
        if (
          /published views|sentiment leans|sentiment is mixed|analyst group is|positive views outnumber|distribution is (?:constructive|split|mixed)|views are mostly positive|views dominate|group leans positive|balance is cautious/i.test(
            sentence,
          )
        ) {
          return false;
        }
        const descriptors = sentence.match(
          /\b(positive|neutral|cautious|bullish|bearish|negative)\b/gi,
        );
        const numbers = sentence.match(
          /\b(?:\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty)\b/gi,
        );
        if (!descriptors || descriptors.length < 2 || !numbers || numbers.length < 2) {
          return true;
        }
        return false;
      })
      .join(" "),
  );
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

let updated = 0;
for (const story of Object.values(STOCK_STORIES) as StockStory[]) {
  const paragraphs = normalize(story.analysts.paragraphs, story.ticker);
  if (paragraphs.join("\n") === story.analysts.paragraphs.join("\n")) continue;
  const next = { ...story, analysts: { ...story.analysts, paragraphs } };
  const file = path.join(STORIES, `${story.ticker}.ts`);
  fs.writeFileSync(file, serialize(file, next), "utf8");
  updated += 1;
}
console.log(`[research] normalised analyst distribution language in ${updated} reports`);
