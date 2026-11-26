import fs from "node:fs/promises";
import path from "node:path";
import { SCORE_TICKERS } from "../config/universe";
import { logoFileName } from "../lib/logo-filename";

const OUT = path.join(process.cwd(), "public", "logos");

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  let ok = 0;
  const missing: string[] = [];
  for (const ticker of SCORE_TICKERS) {
    const target = path.join(OUT, `${logoFileName(ticker)}.png`);
    try {
      await fs.access(target);
      ok += 1;
      continue;
    } catch {
      // download
    }
    const source = ticker.replace(/\./g, "-");
    const sources = [
      `https://companiesmarketcap.com/img/company-logos/64/${source}.png`,
      `https://financialmodelingprep.com/image-stock/${source}.png`,
    ];
    let saved = false;
    for (const url of sources) {
      try {
        const response = await fetch(url);
        if (!response.ok) continue;
        const contentType = response.headers.get("content-type") ?? "";
        if (!contentType.startsWith("image/")) continue;
        const bytes = Buffer.from(await response.arrayBuffer());
        if (bytes.length < 100) continue;
        await fs.writeFile(target, bytes);
        ok += 1;
        saved = true;
        break;
      } catch {
        // try the next source
      }
    }
    if (!saved) missing.push(ticker);
  }
  console.log(`[logos] ${ok} available, ${missing.length} missing`);
  if (missing.length) console.log(missing.join(" "));
}

main();
