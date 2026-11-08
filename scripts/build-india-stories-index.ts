/** Regenerates content/india-stocks/index.ts from the India universe. */
import fs from "node:fs";
import path from "node:path";
import { INDIA_TICKERS } from "../config/india-coverage";

const DIR = path.join(process.cwd(), "content", "india-stocks");
const exportName = (ticker: string) => ticker.replace(/[^A-Z0-9]/gi, "_");

const imports: string[] = [];
const entries: string[] = [];
for (const ticker of INDIA_TICKERS) {
  if (!fs.existsSync(path.join(DIR, `${ticker}.ts`))) {
    console.warn(`[india:stories] missing ${ticker}`);
    continue;
  }
  const name = exportName(ticker);
  imports.push(`import { ${name} } from "./${ticker}";`);
  entries.push(`  ${JSON.stringify(ticker)}: ${name},`);
}

const content = `import type { StockStory } from "@/content/stocks/types";
${imports.join("\n")}

export const INDIA_STOCK_STORIES: Record<string, StockStory> = {
${entries.join("\n")}
};

export function getIndiaStockStory(ticker: string): StockStory | null {
  return INDIA_STOCK_STORIES[ticker.toUpperCase()] ?? null;
}
`;

fs.writeFileSync(path.join(DIR, "index.ts"), content, "utf8");
console.log(`[india:stories] index lists ${entries.length} stories`);
