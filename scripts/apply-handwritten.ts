/**
 * Applies a hand-written section file from content/handwritten/{TICKER}.json
 * onto the matching story, preserving every section it does not override.
 *
 * Run:
 *   pnpm stories:apply MSFT
 *   pnpm stories:apply --all
 */
import fs from "node:fs";
import path from "node:path";
import { STOCK_STORIES } from "../content/stocks";
import { INDIA_STOCK_STORIES } from "../content/india-stocks";
import { GCC_STORIES } from "../content/gcc-stories";
import type { StockStory } from "../content/stocks/types";

type Handwritten = {
  ticker: string;
  title?: string;
  dek?: string;
  earningsReleaseUrl?: string;
  narrativeUpdatedAt?: string;
  sections: Partial<StockStory>;
};

const SOURCE_DIR = path.join("content", "handwritten");
const CONTENT: Record<string, string> = {
  US: "content/stocks",
  IN: "content/india-stocks",
  GCC: "content/gcc-stories",
};

function marketOf(ticker: string): "US" | "IN" | "GCC" | null {
  if (STOCK_STORIES[ticker]) return "US";
  if (INDIA_STOCK_STORIES[ticker]) return "IN";
  if (GCC_STORIES[ticker]) return "GCC";
  return null;
}

function serialize(file: string, story: StockStory): string {
  const current = fs.readFileSync(file, "utf8");
  const exportName = /export const (\w+)\s*:\s*StockStory/.exec(current)?.[1] ?? "STORY";
  const typeImport = /import type \{ StockStory \} from "([^"]+)"/.exec(current)?.[1] ?? "./types";
  return `import type { StockStory } from "${typeImport}";\n\nexport const ${exportName}: StockStory = ${JSON.stringify(
    story,
    null,
    2,
  )};\n`;
}

function apply(file: string, story: StockStory, patch: Handwritten): StockStory {
  const next: StockStory = {
    ...story,
    ...patch.sections,
    ...(patch.title ? { title: patch.title } : {}),
    ...(patch.dek ? { dek: patch.dek } : {}),
    ...(patch.earningsReleaseUrl ? { earningsReleaseUrl: patch.earningsReleaseUrl } : {}),
    narrativeSource: "handwritten",
    narrativeUpdatedAt: patch.narrativeUpdatedAt ?? new Date().toISOString().slice(0, 10),
  };
  fs.writeFileSync(file, serialize(file, next), "utf8");
  return next;
}

const args = process.argv.slice(2);
const all = args.includes("--all");
const tickers = all
  ? fs
      .readdirSync(SOURCE_DIR)
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(/\.json$/, "").toUpperCase())
  : args.filter((arg) => !arg.startsWith("--")).map((arg) => arg.toUpperCase());

if (!tickers.length) {
  console.error("usage: pnpm stories:apply TICKER|--all");
  process.exit(1);
}

let applied = 0;
for (const ticker of tickers) {
  const source = path.join(SOURCE_DIR, `${ticker}.json`);
  if (!fs.existsSync(source)) {
    console.warn(`[handwritten] ${ticker}: no patch file`);
    continue;
  }
  const market = marketOf(ticker);
  if (!market) {
    console.warn(`[handwritten] ${ticker}: not in any story map`);
    continue;
  }
  const patch = JSON.parse(fs.readFileSync(source, "utf8")) as Handwritten;
  const story = (market === "US" ? STOCK_STORIES : market === "IN" ? INDIA_STOCK_STORIES : GCC_STORIES)[ticker];
  apply(path.join(CONTENT[market], `${ticker}.ts`), story, patch);
  applied += 1;
  console.log(`[handwritten] applied ${market} ${ticker}`);
}

console.log(`[handwritten] ${applied} report(s) updated`);
