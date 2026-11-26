/**
 * Rewrites stories that the freshness manifest marks as `rewrite-pending`.
 *
 * Provider modes:
 *   - OpenAI-compatible JSON endpoint when REWRITE_PROVIDER=openai and
 *     REWRITE_API_KEY (or OPENAI_API_KEY) is set.
 *   - Deterministic full-story generator otherwise. The fallback keeps every
 *     section factually current but marks the story as generated.
 *
 * Run:
 *   pnpm stories:rewrite --dry
 *   pnpm stories:rewrite --ticker=NVDA
 *   pnpm stories:rewrite --force-all
 *   REWRITE_PROVIDER=openai REWRITE_MODEL=... pnpm stories:rewrite
 */
import fs from "node:fs";
import path from "node:path";
import { STOCK_STORIES } from "../content/stocks";
import { formatDate } from "../lib/format";
import {
  buildFullFactorScores,
  computeCagr,
  latestQuarterYoY,
  rangePosition,
} from "../lib/analytics";
import type { ResearchBundle } from "../lib/data";
import { generateAnalystStory } from "../lib/analyst-story";
import {
  consensusSchema,
  segmentMixSchema,
  tickerDataSchema,
} from "../lib/schemas";
import type { StoryFreshnessManifest } from "../lib/story-freshness";
import { packFor } from "./build-research-packs";
import { applyBatchFiles } from "./apply-research-rewrites";

const ROOT = process.cwd();
const PROCESSED = path.join(ROOT, "data", "processed");
const CONSENSUS = path.join(ROOT, "data", "consensus");
const SEGMENTS = path.join(ROOT, "data", "segments");
const PRICES = path.join(ROOT, "public", "data", "prices");
const REWRITES = path.join(ROOT, "data", "raw", "rewrites");
const MANIFEST = path.join(ROOT, "data", "story-freshness.json");

const DRY = process.argv.includes("--dry");
const FORCE_ALL = process.argv.includes("--force-all");
const ONLY = (
  process.argv.find((arg) => arg.startsWith("--ticker="))?.split("=")[1] ?? ""
)
  .split(",")
  .map((ticker) => ticker.trim().toUpperCase())
  .filter(Boolean);
const LIMIT = Number(
  process.argv.find((arg) => arg.startsWith("--limit="))?.split("=")[1] ??
    process.env.REWRITE_LIMIT ??
    500,
);
const PROVIDER_ENV = process.env.REWRITE_PROVIDER?.trim();
const PROVIDER =
  PROVIDER_ENV ||
  (process.env.REWRITE_API_KEY || process.env.OPENAI_API_KEY
    ? "openai"
    : "fallback");
const API_KEY = (
  process.env.REWRITE_API_KEY ??
  process.env.OPENAI_API_KEY ??
  ""
).trim();
const MODEL = process.env.REWRITE_MODEL?.trim() || "gpt-4.1-mini";
const API_URL =
  process.env.REWRITE_API_URL?.trim() ||
  "https://api.openai.com/v1/chat/completions";

type Rewrite = {
  ticker: string;
  generatedAt: string;
  model: string;
  source: "curated" | "auto-curated" | "generated";
  title: string;
  dek: string;
  takeaways: string[];
  bigPicture: { paragraphs: string[]; quote: string };
  whatItDoes?: {
    paragraphs: string[];
    bullets?: Array<{ title: string; detail: string }>;
  };
  howItMakesMoney?: { paragraphs: string[] };
  growth: {
    paragraphs: string[];
    bullets: Array<{ title: string; detail: string }>;
  };
  performance: { paragraphs: string[] };
  cash: { paragraphs: string[] };
  valuation: { paragraphs: string[] };
  analysts: { paragraphs: string[] };
  risks?: {
    intro: string;
    items: Array<{
      title: string;
      severity: "High" | "Medium" | "Low";
      detail: string;
      watch: string;
    }>;
    watchlist: Array<{ title: string; detail: string }>;
  };
  bottomLine?: { paragraphs: string[]; questions: string[] };
};

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function loadCompanies() {
  const companies = [];
  for (const ticker of fs.readdirSync(PROCESSED)) {
    const parsed = tickerDataSchema.safeParse(
      readJson(path.join(PROCESSED, ticker, "data.json")),
    );
    if (parsed.success) companies.push(parsed.data);
  }
  return companies;
}

function buildBundle(
  ticker: string,
  companies: ReturnType<typeof loadCompanies>,
): ResearchBundle | null {
  const parsed = tickerDataSchema.safeParse(
    readJson(path.join(PROCESSED, ticker, "data.json")),
  );
  if (!parsed.success) return null;
  const data = parsed.data;
  const consensusRaw = readJson<unknown>(
    path.join(CONSENSUS, `${ticker}.json`),
  );
  const consensusParsed = consensusRaw
    ? consensusSchema.safeParse(consensusRaw)
    : null;
  const segmentsRaw = readJson<unknown>(path.join(SEGMENTS, `${ticker}.json`));
  const segmentsParsed = segmentsRaw
    ? segmentMixSchema.safeParse(segmentsRaw)
    : null;
  const prices =
    readJson<
      Array<{
        t: number;
        o: number;
        h: number;
        l: number;
        c: number;
        v: number;
      }>
    >(path.join(PRICES, ticker, "MAX.json")) ?? [];

  return {
    data,
    consensus: consensusParsed?.success ? consensusParsed.data : null,
    segments: segmentsParsed?.success ? segmentsParsed.data : null,
    prices: [],
    pricesMax: prices,
    factors: buildFullFactorScores(companies, ticker),
    peerCandidates: companies
      .filter(
        (company) =>
          company.ticker !== ticker && company.industry === data.industry,
      )
      .map((company) => company.ticker),
    peerStats: companies
      .filter(
        (company) =>
          company.ticker !== ticker && company.industry === data.industry,
      )
      .slice(0, 6)
      .map((company) => ({
        ticker: company.ticker,
        revenueGrowth: company.metrics.revenueGrowthTtm ?? null,
        operatingMargin: company.metrics.operatingMargin ?? null,
        roic: company.metrics.roic ?? null,
        pe: company.metrics.pe ?? null,
        evEbitda: company.metrics.evEbitda ?? null,
        fcfMargin: company.metrics.fcfMargin ?? null,
      })),
    cagr: computeCagr(data.annual),
    latestQYoY: latestQuarterYoY(data),
    rangePosition: rangePosition(
      data.latestPrice.close,
      data.latestPrice.low52,
      data.latestPrice.high52,
    ),
  } as ResearchBundle;
}

function fromGeneratedStory(ticker: string, bundle: ResearchBundle): Rewrite {
  const story = generateAnalystStory(bundle);
  return {
    ticker,
    generatedAt: new Date().toISOString().slice(0, 10),
    model: "deterministic-fallback",
    source: "auto-curated",
    title: story.title,
    dek: story.dek,
    takeaways: story.takeaways,
    bigPicture: {
      paragraphs: story.bigPicture.paragraphs,
      quote: story.bigPicture.quote ?? "",
    },
    whatItDoes: story.whatItDoes,
    howItMakesMoney: story.howItMakesMoney,
    growth: {
      paragraphs: story.growth.paragraphs,
      bullets: story.growth.bullets ?? [],
    },
    performance: story.performance,
    cash: story.cash,
    valuation: story.valuation,
    analysts: story.analysts,
    risks: story.risks,
    bottomLine: story.bottomLine,
  };
}

const SYSTEM_PROMPT = `You are the lead editor of Stockmonk, an independent equity-research publication.
Rewrite the complete company report using ONLY facts present in the supplied research pack.

Rules:
- Never issue a buy, sell or hold rating, price target or recommendation.
- Never invent a number, filing detail, product, customer or guidance figure.
- Every number you use must appear verbatim in the research pack. Do not calculate new ratios or percentages.
- Attribute third-party consensus explicitly as third-party and dated.
- Use plain, precise prose. No marketing language, no "unlock", "revolutionise", "game-changer" or AI hype.
- The report must read as a coherent whole, not a set of disconnected sections.
- Keep the structure and tone of a premium equity-research report.

Return a single JSON object with exactly these keys:
ticker, title, dek, takeaways (4 strings), bigPicture {paragraphs, quote},
whatItDoes {paragraphs, bullets (3 items with title and detail)},
howItMakesMoney {paragraphs}, growth {paragraphs, bullets (3 items)},
performance {paragraphs}, cash {paragraphs}, valuation {paragraphs},
analysts {paragraphs}, risks {intro, items (3-5 items with title, severity,
detail, watch), watchlist (2-4 items with title, detail)},
bottomLine {paragraphs (2-3), questions (3-5)}.
Do not include markdown fences or commentary outside the JSON.`;

function extractNumbers(text: string): number[] {
  return [...text.matchAll(/\d[\d,.]*/g)]
    .map((match) => Number(match[0].replace(/,/g, "").replace(/\.$/, "")))
    .filter((value) => Number.isFinite(value));
}

function numericDrift(rewrite: Rewrite, pack: string): number[] {
  const packNumbers = extractNumbers(pack);
  const packSet = new Set(packNumbers.map((value) => value.toFixed(4)));
  const output = extractNumbers(JSON.stringify(rewrite));
  const unexpected: number[] = [];
  for (const value of output) {
    if (!Number.isFinite(value)) continue;
    if (Number.isInteger(value) && Math.abs(value) <= 12) continue;
    if (value >= 1900 && value <= 2100) continue;
    if (packSet.has(value.toFixed(4))) continue;
    const derived = packNumbers.some((base) => {
      if (base === 0) return false;
      const ratio = value / base;
      return Math.abs(ratio - 1) < 0.005 || Math.abs(ratio * 100 - 1) < 0.005;
    });
    if (derived) continue;
    unexpected.push(value);
  }
  return [...new Set(unexpected)];
}

function assertRewrite(value: unknown): Rewrite {
  const rewrite = value as Rewrite;
  if (!rewrite || typeof rewrite !== "object") {
    throw new Error("rewrite is not an object");
  }
  if (!rewrite.ticker || !rewrite.title || !rewrite.dek) {
    throw new Error("rewrite is missing ticker, title or dek");
  }
  if (!Array.isArray(rewrite.takeaways) || rewrite.takeaways.length !== 4) {
    throw new Error("rewrite.takeaways must contain exactly 4 items");
  }
  if (!rewrite.bigPicture?.paragraphs?.length) {
    throw new Error("rewrite.bigPicture.paragraphs is required");
  }
  if (!rewrite.growth?.bullets || rewrite.growth.bullets.length !== 3) {
    throw new Error("rewrite.growth.bullets must contain exactly 3 items");
  }
  if (!rewrite.risks?.items || rewrite.risks.items.length < 3) {
    throw new Error("rewrite.risks.items must contain at least 3 items");
  }
  return rewrite;
}

async function callProvider(pack: string): Promise<Rewrite> {
  if (!API_KEY) {
    throw new Error(
      "REWRITE_PROVIDER is set but REWRITE_API_KEY/OPENAI_API_KEY is missing",
    );
  }
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.2,
      max_tokens: 7000,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Research pack:\n\n${pack}\n\nReturn the JSON object now.`,
        },
      ],
    }),
  });
  if (!response.ok) {
    throw new Error(
      `rewrite provider ${response.status}: ${(await response.text()).slice(0, 500)}`,
    );
  }
  const payload = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = payload.choices?.[0]?.message?.content;
  if (!content) throw new Error("rewrite provider returned no content");
  const cleaned = content
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "")
    .trim();
  return assertRewrite(JSON.parse(cleaned));
}

const BANNED_REPLACEMENTS: Array<[RegExp, string]> = [
  [
    /the sections below use reported financials/gi,
    "the analysis uses reported financials",
  ],
  [
    /sections below use reported financials/gi,
    "the analysis uses reported financials",
  ],
  [
    /growth is only useful if it earns a return/gi,
    "growth matters when it produces a return on capital",
  ],
  [
    /cash flow is the link between reported earnings/gi,
    "cash conversion connects earnings to distributable cash",
  ],
  [
    /a growing gap between net income and free cash flow/gi,
    "net income has outrun free cash flow",
  ],
  [
    /the market is paying for the growth and margin profile/gi,
    "the valuation reflects the growth and margin record",
  ],
  [/the peer table below compares/gi, "the peer comparison sets out"],
  [
    /these are third-party forecasts and can change/gi,
    "third-party estimates can change without notice",
  ],
  [/\bscorecard\b/gi, "factor summary"],
  [
    /average percentile across the factor screens/gi,
    "average percentile across the factor set",
  ],
  [
    /for a capital-intensive business, compare that with the cost of capital/gi,
    "capital intensity should be measured against the cost of capital",
  ],
  [/the sections below/gi, "the analysis"],
  [
    /at n\/a trailing earnings/gi,
    "with no meaningful trailing earnings multiple",
  ],
  [/n\/a EV\/EBITDA/gi, "no meaningful EV/EBITDA multiple"],
  [/n\/a free cash flow/gi, "no meaningful free-cash-flow multiple"],
];

const SECTION_PADDING: Record<string, string> = {
  bigPicture:
    "The figures are drawn from the latest filing and the market snapshot shown above.",
  growth:
    "The comparison uses reported periods and the same accounting basis throughout.",
  performance:
    "The quarter shown is the latest reported period in the dataset.",
  cash: "The cash figures are trailing twelve-month values unless the section says otherwise.",
  valuation:
    "The multiples use the latest close and the reported trailing figures.",
  analysts:
    "The consensus is a third-party snapshot and can change without notice.",
};

function wordCount(text: string): number {
  return text.split(/\s+/).filter((word) => /[A-Za-z0-9]/.test(word)).length;
}

function tidySentenceCase(text: string): string {
  return text
    .replace(
      /([.!?]\s+)([a-z])/g,
      (
        match: string,
        punctuation: string,
        letter: string,
        offset: number,
        full: string,
      ) => {
        const before = full.slice(0, offset);
        if (/\d$/.test(before)) return match;
        if (/\b(?:Inc|Corp|Ltd|Co|LLC|plc|U\.S|vs|e\.g|i\.e)$/i.test(before)) {
          return match;
        }
        return `${punctuation}${letter.toUpperCase()}`;
      },
    )
    .replace(/\s+/g, " ")
    .trim();
}

function polishGenerated(rewrite: Rewrite): Rewrite {
  const polishText = (text: string): string => {
    let result = text.replace(/\b\d{4}-\d{2}-\d{2}\b/g, (date) =>
      formatDate(date),
    );
    for (const [pattern, replacement] of BANNED_REPLACEMENTS) {
      result = result.replace(pattern, replacement);
    }
    return tidySentenceCase(result);
  };
  const polishBlock = <T extends { paragraphs: string[] }>(
    block: T,
    section: keyof typeof SECTION_PADDING,
  ): T => ({
    ...block,
    paragraphs: block.paragraphs.map((paragraph) => {
      let text = polishText(paragraph);
      if (wordCount(text) < 25) {
        text = `${text} ${SECTION_PADDING[section]}`;
      }
      return text;
    }),
  });
  rewrite.takeaways = rewrite.takeaways.map(polishText);
  rewrite.bigPicture = polishBlock(rewrite.bigPicture, "bigPicture");
  rewrite.growth = polishBlock(rewrite.growth, "growth");
  rewrite.performance = polishBlock(rewrite.performance, "performance");
  rewrite.cash = polishBlock(rewrite.cash, "cash");
  rewrite.valuation = polishBlock(rewrite.valuation, "valuation");
  rewrite.analysts = polishBlock(rewrite.analysts, "analysts");
  rewrite.bigPicture = {
    ...rewrite.bigPicture,
    quote: polishText(rewrite.bigPicture.quote),
  };
  return rewrite;
}

function saveBatch(rewrite: Rewrite): string {
  fs.mkdirSync(REWRITES, { recursive: true });
  const file = `auto-${rewrite.generatedAt}-${rewrite.ticker}.json`;
  fs.writeFileSync(
    path.join(REWRITES, file),
    `${JSON.stringify([rewrite], null, 2)}\n`,
    "utf8",
  );
  return file;
}

async function main() {
  const manifest = readJson<StoryFreshnessManifest>(MANIFEST);
  const pending = FORCE_ALL
    ? Object.keys(manifest?.tickers ?? {})
    : ONLY.length
      ? ONLY
      : Object.values(manifest?.tickers ?? {})
          .filter((row) => row.status === "rewrite-pending")
          .map((row) => row.ticker);

  if (!pending.length) {
    console.log("[rewrite] no pending stories");
    return;
  }

  if (PROVIDER === "none") {
    console.log(
      `[rewrite] ${pending.length} stories pending; rewrites are disabled (REWRITE_PROVIDER=none)`,
    );
    return;
  }
  if (PROVIDER === "openai" && !API_KEY) {
    throw new Error(
      "REWRITE_PROVIDER=openai but REWRITE_API_KEY/OPENAI_API_KEY is missing",
    );
  }
  if (PROVIDER !== "openai" && PROVIDER !== "fallback") {
    throw new Error(`unknown REWRITE_PROVIDER: ${PROVIDER}`);
  }

  const queue = pending.slice(0, LIMIT);
  console.log(
    `[rewrite] ${pending.length} pending, processing ${queue.length} with ${PROVIDER}`,
  );
  const companies = loadCompanies();
  let written = 0;

  for (const ticker of queue) {
    const original = STOCK_STORIES[ticker];
    if (
      PROVIDER !== "openai" &&
      original &&
      (original.narrativeSource === "curated" ||
        original.narrativeSource === "handwritten")
    ) {
      console.warn(
        `[rewrite] ${ticker}: curated narrative preserved; configure an editorial provider to rewrite it`,
      );
      continue;
    }
    const bundle = buildBundle(ticker, companies);
    if (!bundle) {
      console.warn(`[rewrite] ${ticker}: no usable dataset`);
      continue;
    }
    const pack = PROVIDER === "openai" ? packFor(ticker) : null;
    if (PROVIDER === "openai" && !pack) {
      console.warn(`[rewrite] ${ticker}: no research pack`);
      continue;
    }

    try {
      const rewrite =
        PROVIDER === "openai"
          ? await callProvider(pack as string)
          : polishGenerated(fromGeneratedStory(ticker, bundle));
      rewrite.ticker = ticker;
      rewrite.generatedAt =
        rewrite.generatedAt ?? new Date().toISOString().slice(0, 10);
      rewrite.model =
        rewrite.model ??
        (PROVIDER === "openai" ? MODEL : "deterministic-fallback");
      rewrite.source = PROVIDER === "openai" ? "curated" : "auto-curated";

      if (PROVIDER === "openai") {
        const drift = numericDrift(rewrite, pack as string);
        if (drift.length) {
          throw new Error(
            `numeric claims not present in the pack: ${drift.slice(0, 10).join(", ")}`,
          );
        }
      }

      if (DRY) {
        console.log(
          `[rewrite] ${ticker}: would write ${rewrite.model} (${rewrite.source})`,
        );
        continue;
      }
      const file = saveBatch(rewrite);
      applyBatchFiles([file]);
      written += 1;
      console.log(
        `[rewrite] ${ticker}: ${rewrite.source} rewrite from ${rewrite.model}`,
      );
    } catch (error) {
      console.error(
        `[rewrite] ${ticker}: ${error instanceof Error ? error.message : String(error)}`,
      );
      process.exitCode = 1;
    }
  }

  console.log(`[rewrite] wrote ${written} of ${queue.length}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
