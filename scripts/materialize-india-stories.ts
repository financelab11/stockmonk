/** Creates a valid India StockStory skeleton for every India ticker. */
import fs from "node:fs";
import path from "node:path";
import { INDIA_TICKERS } from "../config/india-coverage";
import { consensusSchema, tickerDataSchema } from "../lib/schemas";
import { buildFullFactorScores, computeCagr, latestQuarterYoY, rangePosition } from "../lib/analytics";
import { generateStockStory } from "../lib/generated-story";

const STOCKS = path.join(process.cwd(), "content", "india-stocks");
const PROCESSED = path.join(process.cwd(), "data", "india", "processed");
const CONSENSUS = path.join(process.cwd(), "data", "india", "consensus");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

const exportName = (ticker: string) => ticker.replace(/[^A-Z0-9]/gi, "_");

function main() {
  fs.mkdirSync(STOCKS, { recursive: true });
  const companies = INDIA_TICKERS.map((ticker) =>
    tickerDataSchema.parse(readJson(path.join(PROCESSED, ticker, "data.json"))),
  );
  let written = 0;

  for (const ticker of INDIA_TICKERS) {
    const file = path.join(STOCKS, `${ticker}.ts`);
    if (fs.existsSync(file)) continue;
    const data = companies.find((company) => company.ticker === ticker);
    if (!data) continue;
    const consensus = consensusSchema.safeParse(
      readJson(path.join(CONSENSUS, `${ticker}.json`)),
    );
    const annual = [...data.annual].filter((row) => !row.ttm && row.revenue).at(-1);
    const revenue = annual?.revenue ?? data.metrics.revenueTtm ?? 0;
    const reportDate = annual?.reportDate ?? data.updatedAt.slice(0, 10);
    const segments = {
      ticker,
      asOf: reportDate,
      source: {
        name: `${data.name} latest annual report`,
        url: data.latest10KUrl ?? `https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=${ticker}`,
        date: reportDate,
      },
      segmentLabel: "Reported revenue",
      segments: [{ name: "Consolidated revenue", revenue, share: 1 }],
      geographyLabel: null,
      geography: [],
    };

    const story = generateStockStory({
      data,
      consensus: consensus.success ? consensus.data : null,
      segments,
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

    fs.writeFileSync(
      file,
      `import type { StockStory } from "@/content/stocks/types";\n\nexport const ${exportName(
        ticker,
      )}: StockStory = ${JSON.stringify(story, null, 2)};\n`,
      "utf8",
    );
    written += 1;
    console.log(`[india:stories] ${ticker}`);
  }
  console.log(`[india:stories] wrote ${written} skeletons`);
}

main();
