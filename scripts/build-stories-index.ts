/** Regenerates content/stocks/index.ts from the research universe. */
import fs from "node:fs";
import path from "node:path";
import { RESEARCH_TICKERS } from "../config/universe";

const DIR = path.join(process.cwd(), "content", "stocks");
const exportName = (ticker: string) => ticker.replace(/[^A-Z0-9]/gi, "_");

const imports: string[] = [];
const entries: string[] = [];
for (const ticker of RESEARCH_TICKERS) {
  if (!fs.existsSync(path.join(DIR, `${ticker}.ts`))) {
    console.warn(`[stories] missing ${ticker}`);
    continue;
  }
  const name = exportName(ticker);
  imports.push(`import { ${name} } from "./${ticker}";`);
  entries.push(`  ${JSON.stringify(ticker)}: ${name},`);
}

const content = `import type { StockStory } from "./types";
${imports.join("\n")}

export const STOCK_STORIES: Record<string, StockStory> = {
${entries.join("\n")}
};

export function getStockStory(ticker: string): StockStory | null {
  return STOCK_STORIES[ticker.toUpperCase()] ?? null;
}

export type { StockStory } from "./types";
`;

fs.writeFileSync(path.join(DIR, "index.ts"), content, "utf8");
console.log(`[stories] index lists ${entries.length} stories`);
