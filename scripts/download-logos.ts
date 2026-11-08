import fs from "node:fs/promises";
import path from "node:path";
import { RESEARCH_TICKERS } from "../config/universe";

const OUT = path.join(process.cwd(), "public", "logos");

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  let ok = 0;
  const missing: string[] = [];
  for (const ticker of RESEARCH_TICKERS) {
    const target = path.join(OUT, `${ticker}.png`);
    try {
      await fs.access(target);
      ok += 1;
      continue;
    } catch {
      // download
    }
    const source = ticker.replace(/\./g, "-");
    const url = `https://companiesmarketcap.com/img/company-logos/64/${source}.png`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        missing.push(ticker);
        continue;
      }
      const bytes = Buffer.from(await response.arrayBuffer());
      await fs.writeFile(target, bytes);
      ok += 1;
    } catch {
      missing.push(ticker);
    }
  }
  console.log(`[logos] ${ok} available, ${missing.length} missing`);
  if (missing.length) console.log(missing.join(" "));
}

main();
