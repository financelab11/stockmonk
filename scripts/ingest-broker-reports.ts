/**
 * Ingests broker stock notes (Indian brokers) for the Newsfeed.
 *
 * Discovery: FinanceRadar's stock-notes index (which links to the original
 * broker PDFs), then the PDF itself is fetched from the broker's domain and
 * summarised locally. Every entry keeps the original link and broker attribution.
 *
 * Run:
 *   pnpm ingest:brokers                 # newest missing notes, 6-month window
 *   BROKER_LIMIT=300 pnpm ingest:brokers
 *   BROKER_DAYS=30 pnpm ingest:brokers
 */
import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { PDFParse } from "pdf-parse";
import { findBroker } from "../config/brokers";
import { resolveCompany } from "../lib/company-resolver";
import { scoreMateriality } from "../lib/materiality";
import { detailedSummary, executiveSummary } from "../lib/broker-summary";

const OUT = path.join(process.cwd(), "data", "broker-reports");
const LIMIT = Number(process.env.BROKER_LIMIT ?? 200);
const DAYS = Number(process.env.BROKER_DAYS ?? 182);
const DELAY_MS = Number(process.env.BROKER_DELAY_MS ?? 350);
const USER_AGENT = "Mozilla/5.0 (compatible; StockmonkBot/1.0; +https://stockmonk.vercel.app)";
const INDEX_URLS = [
  "https://financeradar.news/static/stock_notes/recent.json",
  "https://financeradar.news/static/stock_notes/2026.json",
];

type Note = {
  date: string;
  broker: string;
  company: string;
  headline: string;
  link: string;
  via?: string;
  short?: string;
};

type Summary = {
  highlights: string[];
  valuation: string[];
  watch: string[];
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Stable id: hash of the original PDF link, so two discovery sources dedupe. */
function idFor(note: Note): string {
  return createHash("sha1").update(note.link).digest("hex").slice(0, 12);
}

function cleanText(raw: string): string {
  return raw
    .replace(/\u0000/g, " ")
    .replace(/-- \d+ of \d+ --/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+(?=[A-Z(])/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 60 && sentence.length < 420);
}

const NOISE =
  /disclaimer|registered office|analyst certification|sebi registration|please refer|this report is for|terms of use|privacy policy|stock broking|investment in securities|risk disclosure/i;

function pick(list: string[], test: RegExp, limit: number): string[] {
  const seen = new Set<string>();
  const output: string[] = [];
  for (const sentence of list) {
    if (!test.test(sentence) || NOISE.test(sentence) || looksLikeHeading(sentence)) continue;
    const key = sentence.slice(0, 80);
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(sentence);
    if (output.length >= limit) break;
  }
  return output;
}

function parseMetrics(text: string) {
  const head = text.slice(0, 3500);
  const number = (pattern: RegExp) => {
    const match = pattern.exec(head);
    return match ? Number(match[1].replace(/,/g, "")) : null;
  };
  const target = number(
    /(?:target\s*price|\btp\b)\s*[:\-–]?\s*(?:rs\.?|inr|₹)?\s*([\d,]+(?:\.\d+)?)/i,
  );
  const cmp = number(
    /(?:cmp|current\s*market\s*price|closing\s*price)\s*[:\-–]?\s*(?:rs\.?|inr|₹)?\s*([\d,]+(?:\.\d+)?)/i,
  );
  const upside = number(/upside\s*(?:of|potential)?\s*[:\-–]?\s*(-?[\d.]+)\s*%/i);
  const recommendation =
    /\b(buy|accumulate|add|hold|neutral|reduce|sell)\b/i.exec(head.slice(0, 1200))?.[1]?.toUpperCase() ??
    null;

  // Drop obviously mis-parsed pairs rather than publishing a wrong target.
  const plausible =
    target != null &&
    target > 1 &&
    (cmp == null || (target / cmp > 0.4 && target / cmp < 2.6));
  return {
    target: plausible ? target : null,
    cmp: cmp != null && cmp > 1 ? cmp : null,
    upside,
    recommendation,
  };
}

function looksLikeHeading(sentence: string): boolean {
  const letters = sentence.replace(/[^a-zA-Z]/g, "");
  if (!letters) return true;
  const upper = sentence.replace(/[^A-Z]/g, "").length;
  return upper / letters.length > 0.55 || /summary|result review|key highlights$/i.test(sentence);
}

function reportType(headline: string, title: string): string {
  const text = `${headline} ${title}`;
  return detectType(text);
}

function detectType(text: string): string {
  if (/initiat/i.test(text)) return "Initiating Coverage";
  if (/ipo note|ipo/i.test(text)) return "IPO Note";
  if (/result (update|review)|q[1-4]\s*fy\d{2}/i.test(text)) return "Result Update";
  if (/sector/i.test(text)) return "Sector Report";
  if (/company update|update/i.test(text)) return "Company Update";
  return "Stock Note";
}

function summarise(text: string): { summary: Summary; blurb: string; deepDiveText: string } {
  const all = sentences(text);
  const highlights = pick(
    all,
    /revenue|ebitda|pat|margin|growth|order|volume|guidance|management|quarter/i,
    4,
  );
  const valuation = pick(all, /target|valuation|multiple|p\/e|ev\/ebitda|upside|fair value/i, 3);
  const watch = pick(all, /risk|monitor|watch|outlook|headwind|concern|key/i, 2);
  const blurb = (highlights[0] ?? all[0] ?? "").slice(0, 220);
  return {
    summary: { highlights, valuation, watch },
    blurb,
    deepDiveText: text.slice(0, 6000),
  };
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json() as Promise<T>;
}

async function fetchPdf(url: string): Promise<Uint8Array> {
  const response = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/pdf,*/*" },
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return new Uint8Array(await response.arrayBuffer());
}

async function extractPdfText(url: string): Promise<string> {
  const bytes = await fetchPdf(url);
  const parser = new PDFParse({ data: bytes });
  try {
    const result = await parser.getText();
    return cleanText(result.text ?? "");
  } finally {
    await parser.destroy();
  }
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  const indexFile = path.join(OUT, "index.json");
  const existing: Array<{ id: string }> = JSON.parse(
    await fs.readFile(indexFile, "utf8").catch(() => "[]"),
  );
  const seen = new Set(existing.map((entry) => entry.id));

  const cutoff = new Date(Date.now() - DAYS * 86_400_000).toISOString().slice(0, 10);
  const lists = await Promise.all(INDEX_URLS.map((url) => fetchJson<{ notes?: Note[] } | Note[]>(url)));
  const notes: Note[] = lists.flatMap((list) => (Array.isArray(list) ? list : list.notes ?? []));
  const window = notes
    .filter((note) => note.date >= cutoff && note.link)
    .sort((a, b) => b.date.localeCompare(a.date));
  const pending = window.filter((note) => !seen.has(idFor(note)));
  console.log(
    `[brokers] ${window.length} notes in the window, ${pending.length} new, fetching up to ${LIMIT}`,
  );

  const added: Array<Record<string, unknown>> = [];
  const queue = pending.slice(0, LIMIT);
  let cursor = 0;
  const workers = Math.max(1, Number(process.env.BROKER_WORKERS ?? 3));

  async function worker() {
  while (cursor < queue.length) {
    const note = queue[cursor];
    cursor += 1;
    const id = idFor(note);
    try {
      const text = await extractPdfText(note.link);
      if (text.length < 400) throw new Error("no extractable text");
      const metrics = parseMetrics(text);
      const { summary, blurb, deepDiveText } = summarise(text);
      const baseType = reportType(note.headline, note.company);
      const type =
        baseType === "Stock Note" && /initiating\s+coverage/i.test(text.slice(0, 2500))
          ? "Initiating Coverage"
          : baseType;
      const deepDive = type === "Initiating Coverage";
      const company =
        note.company?.trim() ||
        note.headline.split(/[—–-]/)[0]?.trim() ||
        "Untitled company";
      const broker = findBroker(note.broker);
      const companyRef = resolveCompany(company) ?? resolveCompany(note.headline);
      const materiality = scoreMateriality({
        reportType: type,
        headline: `${note.headline} ${company}`,
        target: metrics.target,
        cmp: metrics.cmp,
        recommendation: metrics.recommendation,
      });
      const execSummary = executiveSummary({
        broker: broker?.displayName ?? note.broker,
        reportType: type,
        company,
        blurb,
        metrics,
      });
      const detailed = detailedSummary({
        blurb,
        highlights: summary.highlights,
        valuation: summary.valuation,
        watch: summary.watch,
        metrics,
      });
      const record = {
        id,
        date: note.date.slice(0, 10),
        broker: note.broker,
        brokerId: broker?.id ?? note.broker.toLowerCase().replace(/\s+/g, "-"),
        brokerDisplay: broker?.displayName ?? note.broker,
        company,
        ticker: companyRef?.ticker ?? null,
        market: companyRef?.market ?? "IN",
        sector: companyRef?.sector ?? null,
        headline: note.headline,
        link: note.link,
        reportType: type,
        deepDive,
        metrics,
        materiality,
        execSummary,
        summary,
        detailedSummary: detailed,
        blurb,
        deepDiveText: deepDive ? deepDiveText : undefined,
        fetchedAt: new Date().toISOString(),
      };
      await fs.writeFile(path.join(OUT, `${id}.json`), JSON.stringify(record, null, 2), "utf8");
      added.push({
        id,
        date: record.date,
        broker: record.broker,
        brokerId: record.brokerId,
        brokerDisplay: record.brokerDisplay,
        company: record.company,
        ticker: record.ticker,
        market: record.market,
        sector: record.sector,
        headline: record.headline,
        reportType: type,
        deepDive,
        blurb: record.blurb,
        execSummary,
        metrics,
        materiality,
        link: record.link,
      });
      if (added.length % 10 === 0) console.log(`[brokers] ${added.length} summaries stored`);
    } catch (error) {
      console.warn(
        `[brokers] ${note.broker} · ${note.company}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
    await sleep(DELAY_MS);
  }
  }

  await Promise.all(Array.from({ length: workers }, () => worker()));

  const byId = new Map<string, { id: string; date: string }>();
  for (const entry of [...added, ...existing] as Array<{ id: string; date: string }>) {
    byId.set(entry.id, entry);
  }
  const merged = [...byId.values()].sort((a, b) => b.date.localeCompare(a.date));
  await fs.writeFile(indexFile, JSON.stringify(merged, null, 0), "utf8");
  console.log(`[brokers] added ${added.length}; index now ${merged.length} notes`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
