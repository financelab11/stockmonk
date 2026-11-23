/**
 * Downloads the latest earnings press release (8-K exhibit 99.1) for every US
 * research name and stores the text under data/earnings.
 *
 * Run: pnpm ingest:earnings
 */
import fs from "node:fs/promises";
import path from "node:path";
import { RESEARCH_TICKERS } from "../config/universe";

const PROCESSED = path.join(process.cwd(), "data", "processed");
const OUT = path.join(process.cwd(), "data", "earnings");
const LIMIT = Number(process.env.EARNINGS_LIMIT ?? RESEARCH_TICKERS.length);
const DELAY_MS = Number(process.env.EARNINGS_DELAY_MS ?? 150);
const USER_AGENT = "Stockmonk research bot hello@stockmonk.app";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Filings = {
  cik?: string;
  filings?: {
    latest8K?: {
      accession: string;
      filed: string;
      reportDate: string;
      url: string;
    };
  };
};

type IndexItem = { name: string; type?: string; size?: string };

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/(p|div|tr|h[1-6]|li)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, dec: string) => String.fromCodePoint(Number(dec)))
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, "Accept-Encoding": "gzip, deflate" },
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  let written = 0;
  let skipped = 0;

  for (const ticker of RESEARCH_TICKERS.slice(0, LIMIT)) {
    try {
      const sec = JSON.parse(
        await fs.readFile(path.join(PROCESSED, ticker, "sec.json"), "utf8"),
      ) as Filings;
      const filing = sec.filings?.latest8K;
      if (!filing?.accession) {
        skipped += 1;
        continue;
      }
      const cik = String(Number(sec.cik));
      const accession = filing.accession.replace(/-/g, "");
      const indexUrl = `https://www.sec.gov/Archives/edgar/data/${cik}/${accession}/index.json`;
      const index = JSON.parse(await fetchText(indexUrl)) as {
        directory?: { item?: IndexItem[] };
      };
      const items = index.directory?.item ?? [];
      const candidates = items
        .filter((item) => /\.(htm|html)$/i.test(item.name))
        .filter(
          (item) =>
            !/index|filingsummary|metallinks|^r\d+\.htm$|_lab|_pre|\.xsd/i.test(
              item.name,
            ),
        )
        .map((item) => item.name);
      const commentaryCandidate = candidates.find((name) =>
        /commentary|cfo|call/i.test(name),
      );
      const releaseCandidates = candidates.filter(
        (name) => name !== commentaryCandidate,
      );

      let best: { name: string; text: string; html: string } | null = null;
      for (const name of releaseCandidates.slice(0, 3)) {
        const candidateUrl = `https://www.sec.gov/Archives/edgar/data/${cik}/${accession}/${name}`;
        try {
          const html = await fetchText(candidateUrl);
          const text = stripHtml(html);
          if (!best || text.length > best.text.length)
            best = { name, text, html };
        } catch {
          // try the next candidate
        }
        await sleep(DELAY_MS);
      }
      if (!best || best.text.length < 400) {
        skipped += 1;
        continue;
      }
      const url = `https://www.sec.gov/Archives/edgar/data/${cik}/${accession}/${best.name}`;
      const text = best.text.slice(0, 14000);
      let cfoCommentary: { url: string; text: string } | null = null;
      if (commentaryCandidate) {
        const commentaryUrl = `https://www.sec.gov/Archives/edgar/data/${cik}/${accession}/${commentaryCandidate}`;
        try {
          const html = await fetchText(commentaryUrl);
          const body = stripHtml(html).slice(0, 8000);
          if (body.length > 400)
            cfoCommentary = { url: commentaryUrl, text: body };
        } catch {
          // commentary is optional
        }
        await sleep(DELAY_MS);
      }
      const title =
        (best.html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] ?? "").trim() ||
        best.name;
      await fs.writeFile(
        path.join(OUT, `${ticker}.json`),
        JSON.stringify(
          {
            ticker,
            accession: filing.accession,
            filed: filing.filed,
            reportDate: filing.reportDate,
            filingUrl: filing.url,
            releaseUrl: url,
            title,
            text,
            cfoCommentary,
            fetchedAt: new Date().toISOString(),
          },
          null,
          2,
        ),
        "utf8",
      );
      written += 1;
      if (written % 20 === 0)
        console.log(`[earnings] ${written} releases stored`);
    } catch (error) {
      skipped += 1;
      console.warn(
        `[earnings] ${ticker}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
    await sleep(DELAY_MS);
  }

  console.log(`[earnings] stored ${written}, skipped ${skipped}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
