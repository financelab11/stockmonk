/**
 * Fills companies that SimFin or SEC do not cover with a Yahoo-backed file.
 * Uses SEC XBRL flows when present; otherwise falls back to Yahoo's summary
 * metrics and annual history. Run after `ingest:simfin`.
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });
loadEnv();
import fs from "node:fs/promises";
import path from "node:path";
import { RESEARCH_TICKERS, TICKER_ALIASES } from "../config/universe";
import { getCoverageGroup } from "../config/coverage";
import {
  buildFactorChips,
  buildMultipleHistory,
  buildRangeFiles,
  computeMetrics,
  latestPriceSnapshot,
} from "../lib/metrics";
import type { FinancialRow, PricePoint, TickerData } from "../lib/schemas";
import { yahooChart, yahooQuoteSummary } from "../lib/yahoo";

const PROCESSED = path.join(process.cwd(), "data", "processed");
const PUBLIC_DATA = path.join(process.cwd(), "public", "data");

type SecRow = {
  end: string;
  fyear?: number;
  period?: string;
  revenue: number | null;
  grossProfit: number | null;
  operatingIncome: number | null;
  netIncome: number | null;
  epsDiluted: number | null;
  cfo: number | null;
  capex: number | null;
  freeCashFlow: number | null;
  da: number | null;
  sbc: number | null;
};

async function readJson<T>(file: string): Promise<T | null> {
  try {
    return JSON.parse(await fs.readFile(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function toFinancialRow(row: SecRow, period: string): FinancialRow {
  const revenue = row.revenue;
  return {
    period,
    fyear: row.fyear ?? Number(row.end.slice(0, 4)),
    reportDate: row.end,
    publishDate: null,
    ttm: false,
    revenue,
    grossProfit: row.grossProfit,
    operatingIncome: row.operatingIncome,
    netIncome: row.netIncome,
    epsDiluted: row.epsDiluted,
    epsBasic: row.epsDiluted,
    interestExpense: null,
    pretaxIncome: null,
    incomeTax: null,
    rnd: null,
    sga: null,
    cashAndInvestments: null,
    totalDebt: null,
    totalEquity: null,
    totalAssets: null,
    inventory: null,
    receivables: null,
    cfo: row.cfo,
    capex: row.capex,
    freeCashFlow: row.freeCashFlow,
    da: row.da,
    sbc: row.sbc,
    dividendsPaid: null,
    buybacks: null,
    ebitda: null,
    grossMargin:
      revenue && row.grossProfit != null ? row.grossProfit / revenue : null,
    operatingMargin:
      revenue && row.operatingIncome != null ? row.operatingIncome / revenue : null,
    netMargin: revenue && row.netIncome != null ? row.netIncome / revenue : null,
    fcfMargin:
      revenue && row.freeCashFlow != null ? row.freeCashFlow / revenue : null,
    roic: null,
    netDebt: null,
    netDebtToEbitda: null,
    roe: null,
  };
}

function twoSentences(text: string | undefined, fallback: string): string {
  if (!text) return fallback;
  const sentences = text.match(/[^.!?]+[.!?]+/g)?.slice(0, 2).join(" ").trim();
  return sentences || fallback.slice(0, 400);
}

async function main() {
  const existing = new Map<string, TickerData>();
  for (const ticker of RESEARCH_TICKERS) {
    const data = await readJson<TickerData>(
      path.join(PROCESSED, ticker, "data.json"),
    );
    if (data) existing.set(ticker, data);
  }

  const fallbackTickers = RESEARCH_TICKERS.filter((ticker) => {
    const data = existing.get(ticker);
    return !data || !data.latestPrice.close || data.metrics.revenueTtm == null;
  });
  console.log(`[fallback] ${fallbackTickers.length} companies need Yahoo coverage`);

  for (const ticker of fallbackTickers) {
    const yahooSymbol = TICKER_ALIASES[ticker]?.yahoo ?? ticker;
    const group = getCoverageGroup(ticker);
    const sec = await readJson<{
      quarterly?: SecRow[];
      annual?: SecRow[];
      cik?: string;
      filings?: { latest10K?: { url?: string } };
    }>(path.join(PROCESSED, ticker, "sec.json"));

    const chart = await yahooChart(yahooSymbol, "10y");
    if (!chart?.points.length) {
      console.warn(`[fallback] ${ticker}: no Yahoo chart, skipping`);
      continue;
    }

    const summary = await yahooQuoteSummary(
      yahooSymbol,
      "price,assetProfile,summaryDetail,financialData,defaultKeyStatistics",
    );
    const price = summary?.price;
    const profile = summary?.assetProfile;
    const detail = summary?.summaryDetail;
    const financial = summary?.financialData;

    const prices: PricePoint[] = chart.points;
    const latest = latestPriceSnapshot(prices);
    const annual = (sec?.annual ?? []).map((row) =>
      toFinancialRow(row, "FY"),
    );
    const quarterly = (sec?.quarterly ?? []).map((row) =>
      toFinancialRow(row, row.period ?? "Q?"),
    );

    if (!annual.length && financial?.totalRevenue?.raw) {
      annual.push(
        toFinancialRow(
          {
            end: latest.asOf || new Date().toISOString().slice(0, 10),
            fyear: new Date().getFullYear(),
            revenue: financial.totalRevenue.raw,
            grossProfit: null,
            operatingIncome: null,
            netIncome: null,
            epsDiluted: summary?.defaultKeyStatistics?.trailingEps?.raw ?? null,
            cfo: null,
            capex: null,
            freeCashFlow: financial.freeCashflow?.raw ?? null,
            da: null,
            sbc: null,
          },
          "FY",
        ),
      );
    }

    const computed = computeMetrics(quarterly, annual, prices);
    const name = price?.longName ?? price?.shortName ?? ticker;
    const revenue = sec?.quarterly?.length
      ? computed.metrics.revenueTtm
      : financial?.totalRevenue?.raw ?? computed.metrics.revenueTtm;
    const description = twoSentences(
      profile?.longBusinessSummary,
      `${name} is a US-listed company in the ${group?.name ?? "US equity"} universe.`,
    );

    const data: TickerData = {
      ticker,
      name,
      description,
      sector: profile?.sector ?? group?.name ?? "US equities",
      industry: profile?.industry ?? group?.shortName ?? "US equities",
      employees: profile?.fullTimeEmployees ?? null,
      isin: null,
      cik: sec?.cik ?? null,
      latest10KUrl: sec?.filings?.latest10K?.url ?? null,
      hq:
        [profile?.city, profile?.state, profile?.country].filter(Boolean).join(", ") ||
        null,
      founded: null,
      website: profile?.website ?? null,
      currency: price?.currency ?? "USD",
      isResearch: true,
      latestPrice: {
        close: latest.close,
        prevClose: latest.prevClose,
        changePct: latest.changePct,
        asOf: latest.asOf,
        high52: detail?.fiftyTwoWeekHigh?.raw ?? chart.meta.fiftyTwoWeekHigh ?? null,
        low52: detail?.fiftyTwoWeekLow?.raw ?? chart.meta.fiftyTwoWeekLow ?? null,
        marketCap:
          price?.marketCap?.raw ??
          (price?.regularMarketPrice?.raw != null &&
          price?.sharesOutstanding?.raw != null
            ? price.regularMarketPrice.raw * price.sharesOutstanding.raw
            : null),
        sharesOutstanding: price?.sharesOutstanding?.raw ?? null,
        dividendYield: detail?.dividendYield?.raw ?? null,
      },
      ttm: computed.ttm,
      quarterly,
      annual,
      metrics: {
        ...computed.metrics,
        revenueTtm: revenue ?? computed.metrics.revenueTtm,
        grossMargin:
          financial?.grossMargins?.raw ?? computed.metrics.grossMargin,
        operatingMargin:
          financial?.operatingMargins?.raw ?? computed.metrics.operatingMargin,
        netMargin: financial?.profitMargins?.raw ?? computed.metrics.netMargin,
        roe: financial?.returnOnEquity?.raw ?? computed.metrics.roe,
      },
      factorChips: [],
      multipleHistory: buildMultipleHistory(prices),
      sources: [
        ...(sec?.filings?.latest10K?.url
          ? [
              {
                name: "SEC 10-K",
                url: sec.filings.latest10K.url,
                date: sec.annual?.at(-1)?.end,
              },
            ]
          : []),
        {
          name: "Market price history",
          url: `https://finance.yahoo.com/quote/${yahooSymbol}`,
          date: latest.asOf,
        },
      ],
      updatedAt: new Date().toISOString(),
    };

    await fs.mkdir(path.join(PROCESSED, ticker), { recursive: true });
    await fs.writeFile(
      path.join(PROCESSED, ticker, "data.json"),
      JSON.stringify(data, null, 2),
      "utf8",
    );
    existing.set(ticker, data);

    const ranges = buildRangeFiles(prices, ticker);
    for (const [range, points] of Object.entries(ranges)) {
      const dir = path.join(PUBLIC_DATA, "prices", ticker);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(
        path.join(dir, `${range}.json`),
        JSON.stringify(points),
        "utf8",
      );
    }

    console.log(
      `[fallback] ${ticker}: ${prices.length} prices, revenue ${revenue ?? "n/a"}`,
    );
  }

  // Recompute factor percentiles across the expanded universe.
  const inputs = [...existing.values()].map((data) => ({
    ticker: data.ticker,
    metrics: data.metrics,
  }));
  const chips = buildFactorChips(inputs);
  for (const data of existing.values()) {
    data.factorChips = chips[data.ticker] ?? [];
    await fs.writeFile(
      path.join(PROCESSED, data.ticker, "data.json"),
      JSON.stringify(data, null, 2),
      "utf8",
    );
  }
  console.log(`[fallback] recomputed factor chips for ${existing.size} companies`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
