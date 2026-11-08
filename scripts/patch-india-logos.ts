/** Explicit logo URLs for India companies whose site favicon was unavailable. */
import fs from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "public", "logos");

const logos: Record<string, { url: string; ext: "png" | "svg" }> = {
  RVNL: {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/RvnlLOGO.png",
    ext: "png",
  },
  PGEL: {
    url: "https://pgel.in/assets/images/logo/logo-light.png",
    ext: "png",
  },
  DATAPATTNS: {
    url: "https://www.datapatternsindia.com/images/logo.png",
    ext: "png",
  },
  RAILTEL: {
    url: "https://www.railtel.in/templates/tpl_railtel_home/images/logo%2024117.png",
    ext: "png",
  },
  JKTYRE: {
    url: "https://dwzytf8fljslz.cloudfront.net/Jk_Logo_Square_036aed0631.svg?format=auto&width=640&quality=75",
    ext: "svg",
  },
  SIGNATURE: {
    url: "https://www.signatureglobal.in/images/sg-logo-main.svg",
    ext: "svg",
  },
  APOLLO: {
    url: "https://www.google.com/s2/favicons?domain=apollomicrosystems.com&sz=128",
    ext: "png",
  },
  CDSL: {
    url: "https://www.google.com/s2/favicons?domain=cdsl.com&sz=128",
    ext: "png",
  },
  SARDAEN: {
    url: "https://www.google.com/s2/favicons?domain=sardaenergy.in&sz=128",
    ext: "png",
  },
};

async function main() {
  for (const [ticker, item] of Object.entries(logos)) {
    const response = await fetch(item.url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) {
      console.log(`[india:logos] ${ticker}: ${response.status}`);
      continue;
    }
    const bytes = Buffer.from(await response.arrayBuffer());
    await fs.writeFile(path.join(OUT, `${ticker}.${item.ext}`), bytes);
    console.log(`[india:logos] ${ticker}: ${bytes.length} bytes (.${item.ext})`);
  }
}

main();
