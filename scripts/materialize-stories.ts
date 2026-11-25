/**
 * Creates a valid StockStory file for every research ticker that does not yet
 * have a hand-written narrative. The generated object is a factual skeleton;
 * the editorial pass then rewrites each file in place.
 *
 * Run: pnpm exec tsx scripts/materialize-stories.ts
 */
import fs from "node:fs";
import path from "node:path";
import { CORE_RESEARCH_TICKERS, RESEARCH_TICKERS } from "../config/universe";
import {
  consensusSchema,
  segmentMixSchema,
  tickerDataSchema,
} from "../lib/schemas";
import {
  buildFullFactorScores,
  computeCagr,
  latestQuarterYoY,
  rangePosition,
} from "../lib/analytics";
import { generateStockStoryV2 } from "../lib/generated-story-v2";

const STOCKS = path.join(process.cwd(), "content", "stocks");
const PROCESSED = path.join(process.cwd(), "data", "processed");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

const exportName = (ticker: string) => ticker.replace(/[^A-Z0-9]/gi, "_");

function main() {
  const companies = RESEARCH_TICKERS.map((ticker) =>
    tickerDataSchema.parse(readJson(path.join(PROCESSED, ticker, "data.json"))),
  );
  let written = 0;

  for (const ticker of RESEARCH_TICKERS) {
    if ((CORE_RESEARCH_TICKERS as readonly string[]).includes(ticker)) continue;
    const file = path.join(STOCKS, `${ticker}.ts`);
    if (fs.existsSync(file)) continue;

    const data = companies.find((company) => company.ticker === ticker);
    if (!data) {
      console.warn(`[materialize] missing processed data for ${ticker}`);
      continue;
    }
    const consensus = consensusSchema.safeParse(
      readJson(path.join(process.cwd(), "data", "consensus", `${ticker}.json`)),
    );
    const segments = segmentMixSchema.safeParse(
      readJson(path.join(process.cwd(), "data", "segments", `${ticker}.json`)),
    );
    const story = generateStockStoryV2({
      data,
      consensus: consensus.success ? consensus.data : null,
      segments: segments.success ? segments.data : null,
      prices: [],
      pricesMax: [],
      factors: buildFullFactorScores(companies, ticker),
      cagr: computeCagr(data.annual),
      latestQYoY: latestQuarterYoY(data),
      rangePosition: rangePosition(
        data.latestPrice.close,
        data.latestPrice.low52,
        data.latestPrice.high52,
      ),
    });

    const content = `import type { StockStory } from "./types";\n\nexport const ${exportName(
      ticker,
    )}: StockStory = ${JSON.stringify(story, null, 2)};\n`;
    fs.writeFileSync(file, content, "utf8");
    written += 1;
    console.log(`[materialize] ${ticker}`);
  }

  console.log(`[materialize] wrote ${written} skeletons`);
}

main();
