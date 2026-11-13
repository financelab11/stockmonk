/** Re-fetch Screener pages that previously fell back to standalone/default. */
import fs from "node:fs/promises";
import path from "node:path";
import { fetchScreener } from "../lib/screener";

const RAW = path.join(process.cwd(), "data", "growth-ranker", "raw");
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const files = (await fs.readdir(RAW)).filter((file) => file.endsWith(".json"));
  let fixed = 0;
  let checked = 0;
  for (const file of files) {
    const target = path.join(RAW, file);
    const raw = JSON.parse(await fs.readFile(target, "utf8")) as {
      stem: string;
      screener?: { sourceUrl?: string };
      [key: string]: unknown;
    };
    if (!raw.screener || /consolidated/.test(raw.screener.sourceUrl ?? "")) continue;
    checked += 1;
    let screener = null;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      screener = await fetchScreener(raw.stem, { force: true }).catch(() => null);
      if (screener?.sourceUrl?.includes("consolidated")) break;
      await sleep(1800);
    }
    if (screener?.sourceUrl?.includes("consolidated")) {
      raw.screener = screener;
      await fs.writeFile(target, JSON.stringify(raw));
      fixed += 1;
    }
    if (checked % 10 === 0) console.log(`[gr-fix] ${checked} checked · ${fixed} fixed`);
  }
  console.log(`[gr-fix] done · ${checked} checked · ${fixed} fixed`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
