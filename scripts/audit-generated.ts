/** Scans every generated report for obvious text defects. Run after ingest. */
import fs from "node:fs";
import path from "node:path";
import { RESEARCH_TICKERS } from "../config/universe";
import {
  consensusSchema,
  segmentMixSchema,
  tickerDataSchema,
} from "../lib/schemas";
import { generateStockStory } from "../lib/generated-story";

const ROOT = process.cwd();

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

const problems: string[] = [];
for (const ticker of RESEARCH_TICKERS) {
  const data = tickerDataSchema.parse(
    readJson(path.join(ROOT, "data", "processed", ticker, "data.json")),
  );
  const consensus = consensusSchema.safeParse(
    readJson(path.join(ROOT, "data", "consensus", `${ticker}.json`)),
  );
  const segments = segmentMixSchema.safeParse(
    readJson(path.join(ROOT, "data", "segments", `${ticker}.json`)),
  );
  const story = generateStockStory({
    data,
    consensus: consensus.success ? consensus.data : null,
    segments: segments.success ? segments.data : null,
    prices: [],
    pricesMax: [],
    factors: {
      growth: 50,
      profitability: 50,
      cash: 50,
      balance: 50,
      valuation: 50,
    },
    cagr: null,
    latestQYoY: null,
    rangePosition: null,
  });
  const text = JSON.stringify(story);
  const bad = [
    "NaN",
    "Infinity",
    "undefined",
    " null",
    "[object Object]",
    "..",
  ].filter((token) => text.includes(token));
  if (bad.length) problems.push(`${ticker}: ${bad.join(", ")}`);
  if (story.risks.items.length < 5)
    problems.push(`${ticker}: only ${story.risks.items.length} risks`);
  if (!story.irUrl) problems.push(`${ticker}: missing irUrl`);
}

console.log(`[audit] ${RESEARCH_TICKERS.length} generated reports checked`);
if (problems.length) {
  console.log(problems.join("\n"));
  process.exitCode = 1;
} else {
  console.log("[audit] no text defects found");
}
