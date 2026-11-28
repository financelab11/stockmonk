/**
 * Builds the processed research datasets from SEC EDGAR fundamentals and
 * Yahoo Finance prices, profile and market data.
 *
 * EDGAR supplies the statements (via `pnpm ingest:edgar`); Yahoo supplies the
 * daily price history, market capitalisation, share count and company profile.
 * Delisted names with no current Yahoo history keep their last available price
 * series so the 500-name research library stays complete.
 *
 * Run: pnpm ingest:fundamentals
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });
loadEnv();
import fs from "node:fs/promises";
import path from "node:path";
import { getCoverageGroup } from "../config/coverage";
import { getArchivedCompany } from "../config/archive";
import {
  BENCHMARK_TICKER,
  isResearchTicker,
  SCORE_TICKERS,
  TICKER_ALIASES,
} from "../config/universe";
import {
  buildFactorChips,
  buildMultipleHistoryFromStatements,
  buildRangeFiles,
  computeMetrics,
} from "../lib/metrics";
import {
  tickerDataSchema,
  universeEntrySchema,
  type FinancialRow,
  type PricePoint,
  type TickerData,
  type UniverseEntry,
} from "../lib/schemas";
import { yahooChart, yahooQuoteSummary } from "../lib/yahoo";
import { formatDate } from "../lib/format";
import { tickerDir } from "./lib/data-paths";

const PROCESSED = path.join(process.cwd(), "data", "processed");
const PUBLIC_DATA = path.join(process.cwd(), "public", "data");
const DELAY_MS = Number(process.env.YAHOO_DELAY_MS ?? 150);
const TICKER_FILTER = new Set(
  (process.env.INGEST_TICKERS ?? "")
    .split(",")
    .map((ticker) => ticker.trim().toUpperCase())
    .filter(Boolean),
);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type SecFile = {
  ticker: string;
  cik?: string;
  entityName?: string;
  sharesOutstanding?: number | null;
  quarterly: FinancialRow[];
  annual: FinancialRow[];
  filings?: {
    latest10K?: { url?: string; filed?: string; form?: string };
    latest10Q?: { url?: string; filed?: string };
    latest8K?: { url?: string; filed?: string };
    earningsReleaseUrl?: string | null;
  };
  sources?: Array<{ name: string; url: string; date?: string }>;
};

const raw = (
  value: { raw?: number } | number | null | undefined,
): number | null => {
  if (value == null) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  return typeof value.raw === "number" && Number.isFinite(value.raw)
    ? value.raw
    : null;
};

async function readJson<T>(file: string): Promise<T | null> {
  try {
    return JSON.parse(await fs.readFile(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function twoSentences(text: string | undefined, fallback: string): string {
  if (!text) return fallback;
  const cleaned = text.replace(/\s+/g, " ").trim();
  const sentences = cleaned
    .match(/[^.!?]+[.!?]+/g)
    ?.slice(0, 2)
    .join(" ")
    .trim();
  return sentences || fallback.slice(0, 400);
}

/** Turn an all-caps SEC entity name into the sentence case used by the UI. */
function sentenceCaseCompany(name: string): string {
  if (/[a-z]/.test(name)) return name;
  const keep = new Set([
    "N.V.",
    "L.P.",
    "S.A.",
    "B.V.",
    "PLC",
    "AG",
    "SE",
    "ADR",
  ]);
  return name
    .split(/\s+/)
    .map((token) => {
      const core = token.replace(/[^A-Za-z.&]/g, "");
      if (keep.has(core)) return token;
      return token.charAt(0) + token.slice(1).toLowerCase();
    })
    .join(" ");
}

async function profileFor(symbol: string) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const summary = await yahooQuoteSummary(
        symbol,
        "price,assetProfile,summaryDetail,defaultKeyStatistics,financialData",
      );
      if (summary) return summary;
    } catch {
      // retry below
    }
    await sleep(1200);
  }
  return null;
}

async function main() {
  await fs.mkdir(PUBLIC_DATA, { recursive: true });

  const existingUniverse = await readJson<UniverseEntry[]>(
    path.join(PUBLIC_DATA, "stocks.json"),
  );
  const existingMarketCaps = new Map(
    (existingUniverse ?? []).map((entry) => [entry.ticker, entry.marketCap]),
  );

  const skipResearch = process.env.SKIP_RESEARCH === "1";
  const tickers = TICKER_FILTER.size
    ? SCORE_TICKERS.filter((ticker) => TICKER_FILTER.has(ticker))
    : skipResearch
      ? SCORE_TICKERS.filter((ticker) => !isResearchTicker(ticker))
      : SCORE_TICKERS;

  const records: TickerData[] = [];
  let failed = 0;
  const failedTickers: string[] = [];

  for (const ticker of tickers) {
    // If the provider is blocking the runner, stop after a small sample
    // instead of spending the whole job on requests that cannot succeed. The
    // next scheduled attempt gets a fresh runner and retries.
    if (records.length === 0 && failed >= 25) {
      throw new Error(
        `systemic failure: ${failed} tickers failed before any record was written`,
      );
    }
    let sec = await readJson<SecFile>(tickerDir(ticker, "sec.json"));
    if (!sec || (sec.quarterly.length === 0 && sec.annual.length === 0)) {
      if (isResearchTicker(ticker)) {
        console.warn(`[fundamentals] ${ticker}: no SEC fundamentals`);
        failed += 1;
        failedTickers.push(ticker);
        continue;
      }
      // OTC/community banks and other score-only names may not be in the SEC
      // ticker map. Yahoo still supplies a price and profile, so keep a
      // market-only record instead of dropping the name from the score
      // universe.
      sec = {
        ticker,
        quarterly: [],
        annual: [],
        filings: {},
        sources: [],
      };
      console.log(
        `[fundamentals] ${ticker}: no SEC fundamentals; building market-only record`,
      );
    }

    const existing = await readJson<TickerData>(tickerDir(ticker, "data.json"));
    const symbol = TICKER_ALIASES[ticker]?.yahoo ?? ticker;
    const group = getCoverageGroup(ticker);
    const archived = getArchivedCompany(ticker);
    const research = isResearchTicker(ticker);

    try {
      const chart = archived
        ? null
        : await yahooChart(symbol, research ? "20y" : "2y").catch(() => null);
      const existingPrices =
        (await readJson<PricePoint[]>(
          tickerDir(ticker, "prices.json"),
        )) ?? [];
      const hasYahooPrices = Boolean(chart && chart.points.length >= 30);
      const allPrices: PricePoint[] = archived
        ? [
            {
              d: archived.lastTraded,
              o: archived.lastClose,
              h: archived.lastClose,
              l: archived.lastClose,
              c: archived.lastClose,
              a: archived.lastClose,
              v: 0,
            },
          ]
        : hasYahooPrices
          ? chart!.points
          : existingPrices.length > 0
            ? existingPrices
            : (chart?.points ?? []);
      // Score-only names do not render a chart. Two years is enough for the
      // 200-day moving average, the 12-month relative return and the
      // technical evidence, and it keeps the data layer compact.
      const prices = research ? allPrices : allPrices.slice(-650);

      if (prices.length === 0) {
        console.warn(`[fundamentals] ${ticker}: no price history`);
        failed += 1;
        failedTickers.push(ticker);
        await sleep(DELAY_MS);
        continue;
      }

      const summary = archived ? null : await profileFor(symbol);
      const quote = summary?.price;
      const profile = summary?.assetProfile;
      const detail = summary?.summaryDetail;
      const stats = summary?.defaultKeyStatistics;

      const positive = (value: number | null | undefined) =>
        value != null && value > 0 ? value : null;
      const sharesOutstanding =
        positive(raw(quote?.sharesOutstanding)) ??
        positive(raw(stats?.sharesOutstanding)) ??
        positive(existing?.latestPrice.sharesOutstanding) ??
        positive(archived ? (sec.sharesOutstanding ?? null) : null) ??
        null;
      const marketCap =
        positive(raw(quote?.marketCap)) ??
        positive(raw(detail?.marketCap)) ??
        (positive(raw(quote?.regularMarketPrice)) !== null &&
        sharesOutstanding !== null
          ? (raw(quote?.regularMarketPrice) as number) * sharesOutstanding
          : null) ??
        (archived && sharesOutstanding !== null
          ? archived.lastClose * sharesOutstanding
          : null) ??
        positive(existing?.latestPrice.marketCap) ??
        positive(existingMarketCaps.get(ticker)) ??
        null;
      const dividendYield =
        raw(detail?.dividendYield) ??
        raw(detail?.trailingAnnualDividendYield) ??
        existing?.latestPrice.dividendYield ??
        null;

      const sorted = [...prices].sort((a, b) => a.d.localeCompare(b.d));
      const last = sorted[sorted.length - 1];
      if (marketCap !== null) last.mc = marketCap;
      if (dividendYield !== null) last.dy = dividendYield;

      const computed = computeMetrics(sec.quarterly, sec.annual, sorted);
      if (!computed.snapshot.asOf) {
        console.warn(`[fundamentals] ${ticker}: no dated close`);
        failed += 1;
        failedTickers.push(ticker);
        await sleep(DELAY_MS);
        continue;
      }
      // Some foreign private issuers report revenue under tags the XBRL
      // reconstruction does not map. Yahoo's trailing revenue is a labelled
      // fallback only when the SEC line is genuinely missing.
      if (computed.metrics.revenueTtm == null) {
        const yahooRevenue = raw(summary?.financialData?.totalRevenue);
        if (yahooRevenue != null && yahooRevenue > 0) {
          computed.metrics.revenueTtm = yahooRevenue;
          computed.metrics.revenueGrowthTtm =
            raw(summary?.financialData?.revenueGrowth) ??
            computed.metrics.revenueGrowthTtm;
          console.log(
            `[fundamentals] ${ticker}: revenue filled from Yahoo trailing data`,
          );
        }
      }

      const name = archived
        ? archived.name
        : sentenceCaseCompany(
            quote?.longName ??
              quote?.shortName ??
              sec.entityName ??
              existing?.name ??
              ticker,
          );
      const fallbackDescription = archived
        ? `${archived.name} was ${archived.status === "acquired" ? "acquired" : "taken private"} by ${archived.acquirer}. The final consideration was ${archived.consideration}. The shares last traded on ${formatDate(archived.lastTraded)}; the statements below are the final SEC filings and the article is retained as archived coverage.`
        : `${name} is a US-listed company in the ${
            group?.name ?? "US equity"
          } coverage group. Its statements below come from SEC filings.`;
      const hq =
        [profile?.city, profile?.state, profile?.country]
          .filter(Boolean)
          .join(", ") || null;

      const latestPrice = {
        ...computed.snapshot,
        close: computed.snapshot.close,
        high52: archived
          ? archived.lastClose
          : (raw(detail?.fiftyTwoWeekHigh) ??
            chart?.meta.fiftyTwoWeekHigh ??
            computed.snapshot.high52),
        low52: archived
          ? archived.lastClose
          : (raw(detail?.fiftyTwoWeekLow) ??
            chart?.meta.fiftyTwoWeekLow ??
            computed.snapshot.low52),
        marketCap,
        sharesOutstanding,
        dividendYield,
      };

      const sources = [
        sec.filings?.latest10K?.url
          ? {
              name: `SEC EDGAR ${sec.filings.latest10K.form ?? "10-K"}`,
              url: sec.filings.latest10K.url,
              date: sec.filings.latest10K.filed,
            }
          : null,
        archived
          ? {
              name: `${archived.status === "acquired" ? "Acquisition" : "Take-private"} completion (${archived.acquirer})`,
              url: archived.sourceUrl,
              date: archived.lastTraded,
            }
          : {
              name: hasYahooPrices
                ? "Yahoo Finance price history and profile"
                : "Last available market close (delisted)",
              url: `https://finance.yahoo.com/quote/${symbol}`,
              date: latestPrice.asOf,
            },
        sec.filings?.earningsReleaseUrl
          ? {
              name: "SEC EDGAR 8-K earnings release",
              url: sec.filings.earningsReleaseUrl,
              date: sec.filings.latest8K?.filed,
            }
          : null,
      ].filter(Boolean) as Array<{ name: string; url: string; date?: string }>;

      const record: TickerData = {
        ticker,
        name,
        description: twoSentences(
          profile?.longBusinessSummary,
          fallbackDescription,
        ),
        sector: profile?.sector ?? group?.name ?? "US equities",
        industry: profile?.industry ?? group?.shortName ?? "US equities",
        employees: profile?.fullTimeEmployees ?? null,
        isin: null,
        cik: sec.cik ?? null,
        latest10KUrl: sec.filings?.latest10K?.url ?? null,
        market: "US",
        hq,
        founded: null,
        website: profile?.website ?? null,
        currency: quote?.currency ?? "USD",
        isResearch: research,
        latestPrice,
        ttm: computed.ttm,
        quarterly: sec.quarterly,
        annual: sec.annual,
        metrics: computed.metrics,
        factorChips: [],
        multipleHistory: buildMultipleHistoryFromStatements(
          sorted,
          sec.quarterly,
          marketCap,
        ),
        sources,
        updatedAt: new Date().toISOString(),
      };

      await fs.mkdir(tickerDir(ticker), { recursive: true });
      await fs.writeFile(
        tickerDir(ticker, "prices.json"),
        JSON.stringify(sorted),
        "utf8",
      );
      records.push(tickerDataSchema.parse(record));
      await writeTicker(record, research);
      if (records.length % 25 === 0) {
        console.log(
          `[fundamentals] ${records.length}/${tickers.length} (${ticker})`,
        );
      }
    } catch (error) {
      failed += 1;
      failedTickers.push(ticker);
      console.warn(
        `[fundamentals] ${ticker}: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
    await sleep(DELAY_MS);
  }

  if (TICKER_FILTER.size || skipResearch) {
    const chips = buildFactorChips(
      records.map((record) => ({
        ticker: record.ticker,
        metrics: record.metrics,
      })),
    );
    for (const record of records) {
      // Percentile chips are relative to the whole scored universe, so a
      // filtered run must keep the existing chips instead of recomputing them
      // from the subset.
      const existing = await readJson<TickerData>(
        tickerDir(record.ticker, "data.json"),
      );
      record.factorChips = existing?.factorChips?.length
        ? existing.factorChips
        : (chips[record.ticker] ?? []);
      await writeTicker(record, record.isResearch);
    }
    console.log(
      `[fundamentals] filtered run wrote ${records.length} records; skipping universe files`,
    );
    return;
  }

  if (records.length !== SCORE_TICKERS.length) {
    console.warn(
      `[fundamentals] ${SCORE_TICKERS.length - records.length} score names missing`,
    );
  }

  const chips = buildFactorChips(
    records.map((record) => ({
      ticker: record.ticker,
      metrics: record.metrics,
    })),
  );

  const entries: UniverseEntry[] = [];
  for (const record of records) {
    record.factorChips = chips[record.ticker] ?? [];
    await writeTicker(record, record.isResearch);
    entries.push(
      universeEntrySchema.parse({
        ticker: record.ticker,
        name: record.name,
        sector: record.sector,
        industry: record.industry,
        description: record.description,
        isResearch: record.isResearch,
        currency: record.currency,
        price: record.latestPrice.close,
        changePct: record.latestPrice.changePct,
        marketCap: record.latestPrice.marketCap,
        return1y: record.metrics.return1y,
        revenueTtm: record.metrics.revenueTtm,
        revenueGrowthTtm: record.metrics.revenueGrowthTtm,
        epsGrowthTtm: record.metrics.epsGrowthTtm,
        operatingMargin: record.metrics.operatingMargin,
        pe: record.metrics.pe,
        evEbitda: record.metrics.evEbitda,
        factorChips: record.factorChips,
        asOf: record.latestPrice.asOf || null,
        archived: Boolean(getArchivedCompany(record.ticker)),
      }),
    );
  }

  entries.sort((a, b) => (b.marketCap ?? 0) - (a.marketCap ?? 0));
  // The directory and research runtime stay at 500 names. Score-only names are
  // available through the screener, search and their evidence pages.
  const universe = entries.filter((entry) => entry.isResearch);
  await fs.writeFile(
    path.join(PUBLIC_DATA, "stocks.json"),
    JSON.stringify(universe),
    "utf8",
  );
  await fs.writeFile(
    path.join(PROCESSED, "universe.json"),
    JSON.stringify(universe),
    "utf8",
  );

  const searchIndex = entries.map((entry) => ({
    ticker: entry.ticker,
    name: entry.name,
    sector: entry.sector,
    industry: entry.industry,
    research: entry.isResearch,
  }));
  await fs.writeFile(
    path.join(PUBLIC_DATA, "search-index.json"),
    JSON.stringify(searchIndex),
    "utf8",
  );

  const priceAsOf = entries.reduce<string>(
    (max, entry) => (entry.asOf && entry.asOf > max ? entry.asOf : max),
    "",
  );
  const meta = {
    generatedAt: new Date().toISOString(),
    priceAsOf,
    companies: entries.length,
    researchCompanies: universe.length,
    benchmark: BENCHMARK_TICKER,
    priceRanges: ["1M", "3M", "6M", "YTD", "1Y", "5Y", "MAX"],
    failed,
    failedTickers,
    missingRevenue: entries
      .filter((entry) => !entry.revenueTtm)
      .map((entry) => entry.ticker),
    notes: [
      "Fundamentals come from SEC EDGAR XBRL company facts (10-K / 10-Q).",
      "Price history, market capitalisation, profile and share count come from Yahoo Finance.",
      "Delisted names with no current Yahoo history keep their last available price series.",
    ],
  };
  await fs.writeFile(
    path.join(PROCESSED, "meta.json"),
    JSON.stringify(meta, null, 2),
    "utf8",
  );

  console.log(
    `[fundamentals] wrote ${records.length} companies; price as of ${priceAsOf}${
      failed ? `; ${failed} failed` : ""
    }`,
  );
  if (failedTickers.length) {
    console.warn(
      `[fundamentals] kept previous data for: ${failedTickers
        .slice(0, 40)
        .join(", ")}${failedTickers.length > 40 ? "..." : ""}`,
    );
  }
  // A handful of Yahoo/OTC failures should not fail the whole daily refresh;
  // they keep their last valid record and are retried on the next run. Only a
  // systemic failure (no records or more than 5% failures) is fatal.
  if (records.length === 0 || failed > Math.max(50, records.length * 0.05)) {
    process.exitCode = 1;
  }
}

async function writeTicker(record: TickerData, withChart: boolean) {
  const ticker = record.ticker;
  await fs.mkdir(tickerDir(ticker), { recursive: true });
  await fs.writeFile(
    tickerDir(ticker, "data.json"),
    JSON.stringify(record, null, 0),
    "utf8",
  );

  // Score-only pages do not render a price chart. Skipping the seven public
  // range files keeps the static data layer small while the processed series
  // remains available for the technical score.
  if (!withChart) return;

  const prices = await readJson<PricePoint[]>(
    tickerDir(ticker, "prices.json"),
  );
  if (!prices) return;
  const ranges = buildRangeFiles(prices, ticker);
  const outDir = path.join(PUBLIC_DATA, "prices", ticker);
  await fs.mkdir(outDir, { recursive: true });
  for (const [range, points] of Object.entries(ranges)) {
    await fs.writeFile(
      path.join(outDir, `${range}.json`),
      JSON.stringify(points),
      "utf8",
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
