/**
 * Downloads broker brand icons (favicons) into public/brokers so cards can show
 * a genuine institutional mark without borrowing another broker's asset.
 *
 * Run: pnpm fetch:broker-logos
 */
import fs from "node:fs/promises";
import path from "node:path";
import { BROKERS } from "../config/brokers";

const OUT = path.join(process.cwd(), "public", "brokers");

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  let saved = 0;

  for (const broker of BROKERS) {
    const url = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(broker.domain)}&sz=128`;
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; StockmonkBot/1.0)" },
      });
      if (!response.ok) throw new Error(String(response.status));
      const buffer = Buffer.from(await response.arrayBuffer());
      if (buffer.length < 200) throw new Error("too small");
      await fs.writeFile(path.join(OUT, `${broker.id}.png`), buffer);
      saved += 1;
      console.log(`[broker-logos] ${broker.id} ${buffer.length}b`);
    } catch (error) {
      console.warn(
        `[broker-logos] ${broker.id}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  console.log(`[broker-logos] saved ${saved}/${BROKERS.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
