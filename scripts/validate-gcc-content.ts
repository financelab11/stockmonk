/** Structural and editorial checks for the hand-written GCC reports. */
import fs from "node:fs";
import path from "node:path";
import { GCC_PUBLISHED_TICKERS } from "../config/gcc-coverage";
import { getGccStockStory } from "../content/gcc-stories";

const PROCESSED = path.join(process.cwd(), "data", "gcc", "processed");
const SECTIONS = [
  "bigPicture",
  "whatItDoes",
  "howItMakesMoney",
  "growth",
  "performance",
  "cash",
  "valuation",
  "analysts",
] as const;

function main() {
  const problems: string[] = [];
  for (const ticker of GCC_PUBLISHED_TICKERS) {
    const dataFile = path.join(PROCESSED, ticker, "data.json");
    if (!fs.existsSync(dataFile)) {
      problems.push(`${ticker}: missing processed data`);
      continue;
    }
    const story = getGccStockStory(ticker);
    if (!story) {
      problems.push(`${ticker}: missing report`);
      continue;
    }
    if (story.ticker !== ticker) problems.push(`${ticker}: story ticker mismatch`);
    if (!story.title || story.title.length < 20) problems.push(`${ticker}: title too short`);
    if (!story.dek || story.dek.length < 80) problems.push(`${ticker}: dek too short`);
    if (story.takeaways.length < 4) problems.push(`${ticker}: fewer than four takeaways`);
    if (story.readingMinutes < 5) problems.push(`${ticker}: reading time too short`);
    for (const section of SECTIONS) {
      const block = story[section];
      if (!block || block.paragraphs.length < 1) {
        problems.push(`${ticker}: empty ${section}`);
        continue;
      }
      const words = block.paragraphs.join(" ").split(/\s+/).length;
      if (words < 60) problems.push(`${ticker}: ${section} too short (${words} words)`);
    }
    if (story.risks.items.length < 3) problems.push(`${ticker}: fewer than three risks`);
    if (story.bottomLine.paragraphs.length < 1) problems.push(`${ticker}: empty bottom line`);
    if (story.bottomLine.questions.length < 3) problems.push(`${ticker}: fewer than three questions`);
    if (!story.filingUrl.startsWith("https://")) problems.push(`${ticker}: filing URL missing`);
    if (!story.irUrl.startsWith("https://")) problems.push(`${ticker}: IR URL missing`);
  }

  if (problems.length) {
    console.error(`[validate:gcc-content] ${problems.length} problem(s)`);
    for (const problem of problems) console.error(` - ${problem}`);
    process.exit(1);
  }
  console.log(`[validate:gcc-content] ${GCC_PUBLISHED_TICKERS.length} reports pass the checks`);
}

main();
