/**
 * Downloads a company mark for every India ticker. Google's favicon service is
 * used because it resolves the company domain without an API key. Domains that
 * return no icon keep the typographic monogram fallback.
 */
import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";
import { INDIA_TICKERS } from "../config/india-coverage";

const OUT = path.join(process.cwd(), "public", "logos");
const PROCESSED = path.join(process.cwd(), "data", "india", "processed");

type TickerData = { website?: string | null };

function domainOf(website: string | null | undefined): string | null {
  if (!website) return null;
  try {
    const url = new URL(website);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

async function saveImage(url: string, target: string): Promise<boolean> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
        Accept: "image/*,*/*",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) return false;
    const contentType = response.headers.get("content-type") ?? "";
    if (!/image\/(png|jpeg|jpg|webp)/i.test(contentType)) return false;
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < 400) return false;
    await fs.writeFile(target, bytes);
    return true;
  } catch {
    return false;
  }
}

async function homepageIcon(domain: string, target: string): Promise<boolean> {
  for (const origin of [`https://${domain}`, `https://www.${domain}`]) {
    try {
      const response = await fetch(origin, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
          Accept: "text/html",
        },
        redirect: "follow",
        signal: AbortSignal.timeout(30_000),
      });
      if (!response.ok) continue;
      const html = await response.text();
      const $ = cheerio.load(html);
      const candidates = [
        $('link[rel~="icon"]').attr("href"),
        $('link[rel="apple-touch-icon"]').attr("href"),
        $('link[rel="apple-touch-icon-precomposed"]').attr("href"),
        $('meta[property="og:image"]').attr("content"),
      ].filter((value): value is string => Boolean(value));
      for (const candidate of candidates) {
        const url = new URL(candidate, response.url).toString();
        if (await saveImage(url, target)) return true;
      }
      for (const suffix of ["/apple-touch-icon.png", "/favicon-32x32.png", "/favicon.png"]) {
        if (await saveImage(`${origin}${suffix}`, target)) return true;
      }
    } catch {
      // try the next origin
    }
  }
  return false;
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  const saved: string[] = [];
  const missing: string[] = [];

  for (const ticker of INDIA_TICKERS) {
    const target = path.join(OUT, `${ticker}.png`);
    try {
      await fs.access(target);
      saved.push(ticker);
      continue;
    } catch {
      // download
    }
    try {
      await fs.access(path.join(OUT, `${ticker}.svg`));
      saved.push(ticker);
      continue;
    } catch {
      // download
    }

    let data: TickerData | null = null;
    try {
      data = JSON.parse(
        await fs.readFile(path.join(PROCESSED, ticker, "data.json"), "utf8"),
      ) as TickerData;
    } catch {
      missing.push(ticker);
      continue;
    }
    const domain = domainOf(data.website);
    if (!domain) {
      missing.push(ticker);
      continue;
    }

    const url = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: AbortSignal.timeout(30_000),
      });
      const bytes = Buffer.from(await response.arrayBuffer());
      if (response.ok && bytes.length >= 300 && bytes.length !== 726) {
        await fs.writeFile(target, bytes);
        saved.push(ticker);
        continue;
      }
    } catch {
      // fall through to the homepage icon
    }
    if (await homepageIcon(domain, target)) {
      saved.push(ticker);
    } else {
      missing.push(ticker);
    }
  }

  console.log(`[india:logos] ${saved.length} saved, ${missing.length} missing`);
  if (missing.length) console.log(missing.join(" "));
}

main();
