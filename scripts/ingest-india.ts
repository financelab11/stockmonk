/**
 * India coverage ingestion.
 *
 * Financial statements come from Screener.in (NSE/BSE filing aggregates),
 * prices and consensus from Yahoo Finance's public endpoints. The script is
 * idempotent: cached raw pages and JSON are reused unless FORCE_REFRESH=1.
 *
 * Run: pnpm ingest:india
 */
import fs from "node:fs/promises";
import path from "node:path";
import { INDIA_TICKERS, getIndiaCoverageGroup } from "../config/india-coverage";
import { buildFactorChips, buildMultipleHistory, buildRangeFiles, computeMetrics, latestPriceSnapshot } from "../lib/metrics";
import type { Consensus, FinancialRow, PricePoint, TickerData } from "../lib/schemas";
import { tickerDataSchema } from "../lib/schemas";
import { fetchScreener, fetchScreenerPrices, type ScreenerData } from "../lib/screener";
import { yahooChart, yahooQuoteSummary, type YahooQuoteSummary } from "../lib/yahoo";

const ROOT = path.join(process.cwd(), "data", "india");
const PROCESSED = path.join(ROOT, "processed");
const CONSENSUS = path.join(ROOT, "consensus");
const PUBLIC = path.join(process.cwd(), "public", "data", "india");
const FORCE = process.env.FORCE_REFRESH === "1";
const CRORE = 1e7;

function raw(value: { raw?: number } | number | null | undefined): number | null {
  if (value == null) return null;
  if (typeof value === "number") return value;
  return typeof value.raw === "number" ? value.raw : null;
}

function text(value: string | undefined | null): string {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function yahooSymbol(ticker: string): string {
  return `${ticker}.NS`;
}

function reportPeriod(endDate: string): string {
  const month = Number(endDate.slice(5, 7));
  if (month === 6) return "Q1";
  if (month === 9) return "Q2";
  if (month === 12) return "Q3";
  if (month === 3) return "Q4";
  return `M${month}`;
}

function fiscalYear(endDate: string): number {
  const year = Number(endDate.slice(0, 4));
  const month = Number(endDate.slice(5, 7));
  return month <= 3 ? year : year + 1;
}

function toRow(
  row: ScreenerData["annual"][number],
  balance?: ScreenerData["balance"][number],
  cash?: ScreenerData["cash"][number],
  ratios?: ScreenerData["ratios"][number],
  latest?: { cash: number | null; debt: number | null },
): FinancialRow {
  const revenue = row.sales != null ? row.sales * CRORE : null;
  const operatingIncome = row.operatingProfit != null ? row.operatingProfit * CRORE : null;
  const netIncome = row.netProfit != null ? row.netProfit * CRORE : null;
  const equity =
    balance && (balance.equityCapital != null || balance.reserves != null)
      ? ((balance.equityCapital ?? 0) + (balance.reserves ?? 0)) * CRORE
      : null;
  const debt = balance?.borrowings != null ? balance.borrowings * CRORE : null;
  const cfo = cash?.cfo != null ? cash.cfo * CRORE : null;
  const fcf = cash?.fcf != null ? cash.fcf * CRORE : null;
  const da = row.depreciation != null ? row.depreciation * CRORE : null;
  const interest = row.interest != null ? row.interest * CRORE : null;
  const pretax = row.pretax != null ? row.pretax * CRORE : null;
  const taxRate = row.taxRate != null ? row.taxRate / 100 : null;
  const incomeTax = pretax != null && taxRate != null ? pretax * taxRate : null;
  const totalDebt = latest?.debt ?? debt;
  const cashAndInvestments = latest?.cash ?? 0;
  const totalEquity = equity;

  return {
    period: "FY",
    fyear: fiscalYear(row.endDate),
    reportDate: row.endDate,
    publishDate: null,
    ttm: false,
    restated: false,
    revenue,
    grossProfit: null,
    operatingIncome,
    netIncome,
    epsDiluted: row.eps,
    epsBasic: row.eps,
    interestExpense: interest,
    pretaxIncome: pretax,
    incomeTax,
    rnd: null,
    sga: null,
    cashAndInvestments,
    totalDebt,
    totalEquity,
    totalAssets: balance?.totalAssets != null ? balance.totalAssets * CRORE : null,
    inventory: null,
    receivables: null,
    cfo,
    capex: cfo != null && fcf != null ? cfo - fcf : null,
    freeCashFlow: fcf,
    da,
    sbc: null,
    dividendsPaid: null,
    buybacks: null,
    ebitda: operatingIncome,
    grossMargin: null,
    operatingMargin: revenue && operatingIncome != null ? operatingIncome / revenue : null,
    netMargin: revenue && netIncome != null ? netIncome / revenue : null,
    fcfMargin: revenue && fcf != null ? fcf / revenue : null,
    roic: ratios?.roce != null ? ratios.roce / 100 : null,
    netDebt: totalDebt != null ? totalDebt - cashAndInvestments : null,
    netDebtToEbitda:
      totalDebt != null && cashAndInvestments != null && operatingIncome && operatingIncome > 0
        ? (totalDebt - cashAndInvestments) / operatingIncome
        : null,
    roe: netIncome != null && totalEquity && totalEquity > 0 ? netIncome / totalEquity : null,
  };
}

function quarterlyRow(row: ScreenerData["quarterly"][number], latest?: { cash: number | null; debt: number | null }): FinancialRow {
  const revenue = row.sales != null ? row.sales * CRORE : null;
  const operatingIncome = row.operatingProfit != null ? row.operatingProfit * CRORE : null;
  const netIncome = row.netProfit != null ? row.netProfit * CRORE : null;
  const pretax = row.pretax != null ? row.pretax * CRORE : null;
  const taxRate = row.taxRate != null ? row.taxRate / 100 : null;
  return {
    period: reportPeriod(row.endDate),
    fyear: fiscalYear(row.endDate),
    reportDate: row.endDate,
    publishDate: null,
    ttm: false,
    restated: false,
    revenue,
    grossProfit: null,
    operatingIncome,
    netIncome,
    epsDiluted: row.eps,
    epsBasic: row.eps,
    interestExpense: row.interest != null ? row.interest * CRORE : null,
    pretaxIncome: pretax,
    incomeTax: pretax != null && taxRate != null ? pretax * taxRate : null,
    rnd: null,
    sga: null,
    cashAndInvestments: latest?.cash ?? null,
    totalDebt: latest?.debt ?? null,
    totalEquity: null,
    totalAssets: null,
    inventory: null,
    receivables: null,
    cfo: null,
    capex: null,
    freeCashFlow: null,
    da: row.depreciation != null ? row.depreciation * CRORE : null,
    sbc: null,
    dividendsPaid: null,
    buybacks: null,
    ebitda: operatingIncome,
    grossMargin: null,
    operatingMargin: revenue && operatingIncome != null ? operatingIncome / revenue : null,
    netMargin: revenue && netIncome != null ? netIncome / revenue : null,
    fcfMargin: null,
    roic: null,
    netDebt: null,
    netDebtToEbitda: null,
    roe: null,
  };
}

function yahooQuarterlyRows(
  summary: YahooQuoteSummary | null,
  latest?: { cash: number | null; debt: number | null },
): FinancialRow[] {
  const statements = summary?.incomeStatementHistoryQuarterly?.incomeStatementHistory ?? [];
  const epsByDate = new Map(
    (summary?.earnings?.earningsChart?.quarterly ?? []).map((item) => [
      item.periodEndDate?.fmt ?? "",
      raw(item.actual),
    ]),
  );
  return statements
    .filter((statement) => statement.endDate?.fmt)
    .map((statement) => {
      const endDate = statement.endDate?.fmt as string;
      const revenue = raw(statement.totalRevenue);
      const operatingIncome = raw(statement.operatingIncome);
      const netIncome = raw(statement.netIncome);
      return {
        period: reportPeriod(endDate),
        fyear: fiscalYear(endDate),
        reportDate: endDate,
        publishDate: null,
        ttm: false,
        restated: false,
        revenue,
        grossProfit: raw(statement.grossProfit),
        operatingIncome,
        netIncome,
        epsDiluted: epsByDate.get(endDate) ?? null,
        epsBasic: epsByDate.get(endDate) ?? null,
        interestExpense: raw(statement.interestExpense),
        pretaxIncome: raw(statement.incomeBeforeTax),
        incomeTax: raw(statement.incomeTaxExpense),
        rnd: null,
        sga: null,
        cashAndInvestments: latest?.cash ?? null,
        totalDebt: latest?.debt ?? null,
        totalEquity: null,
        totalAssets: null,
        inventory: null,
        receivables: null,
        cfo: null,
        capex: null,
        freeCashFlow: null,
        da: null,
        sbc: null,
        dividendsPaid: null,
        buybacks: null,
        ebitda: operatingIncome,
        grossMargin:
          revenue && raw(statement.grossProfit) != null
            ? (raw(statement.grossProfit) as number) / revenue
            : null,
        operatingMargin:
          revenue && operatingIncome != null ? operatingIncome / revenue : null,
        netMargin: revenue && netIncome != null ? netIncome / revenue : null,
        fcfMargin: null,
        roic: null,
        netDebt: null,
        netDebtToEbitda: null,
        roe: null,
      } satisfies FinancialRow;
    });
}

function yahooAnnualRows(
  summary: YahooQuoteSummary | null,
  latest?: { cash: number | null; debt: number | null },
): FinancialRow[] {
  const statements = summary?.incomeStatementHistory?.incomeStatementHistory ?? [];
  const trailingEps = raw(summary?.defaultKeyStatistics?.trailingEps);
  return statements
    .filter((statement) => statement.endDate?.fmt)
    .map((statement, index) => {
      const endDate = statement.endDate?.fmt as string;
      const revenue = raw(statement.totalRevenue);
      const operatingIncome = raw(statement.operatingIncome);
      const netIncome = raw(statement.netIncome);
      const isLatest = index === 0;
      return {
        period: "FY",
        fyear: Number(endDate.slice(0, 4)),
        reportDate: endDate,
        publishDate: null,
        ttm: false,
        restated: false,
        revenue,
        grossProfit: raw(statement.grossProfit),
        operatingIncome,
        netIncome,
        epsDiluted: isLatest ? trailingEps : null,
        epsBasic: isLatest ? trailingEps : null,
        interestExpense: raw(statement.interestExpense),
        pretaxIncome: raw(statement.incomeBeforeTax),
        incomeTax: raw(statement.incomeTaxExpense),
        rnd: null,
        sga: null,
        cashAndInvestments: isLatest ? (latest?.cash ?? null) : null,
        totalDebt: isLatest ? (latest?.debt ?? null) : null,
        totalEquity: null,
        totalAssets: null,
        inventory: null,
        receivables: null,
        cfo: null,
        capex: null,
        freeCashFlow: null,
        da: null,
        sbc: null,
        dividendsPaid: null,
        buybacks: null,
        ebitda: operatingIncome,
        grossMargin:
          revenue && raw(statement.grossProfit) != null
            ? (raw(statement.grossProfit) as number) / revenue
            : null,
        operatingMargin:
          revenue && operatingIncome != null ? operatingIncome / revenue : null,
        netMargin: revenue && netIncome != null ? netIncome / revenue : null,
        fcfMargin: null,
        roic: null,
        netDebt:
          isLatest && latest?.debt != null
            ? latest.debt - (latest.cash ?? 0)
            : null,
        netDebtToEbitda:
          isLatest && latest?.debt != null && operatingIncome && operatingIncome > 0
            ? (latest.debt - (latest.cash ?? 0)) / operatingIncome
            : null,
        roe: null,
      } satisfies FinancialRow;
    })
    .sort((a, b) => a.reportDate.localeCompare(b.reportDate));
}

function buildConsensus(ticker: string, summary: YahooQuoteSummary | null, asOf: string): Consensus | null {
  const financial = summary?.financialData;
  const trend = summary?.earningsTrend?.trend ?? [];
  const targetMean = raw(financial?.targetMeanPrice);
  const analystCount = raw(financial?.numberOfAnalystOpinions);
  const estimates = trend
    .map((item) => {
      const period =
        item.period === "0q"
          ? "Next quarter"
          : item.period === "+1q"
            ? "Following quarter"
            : item.period === "0y"
              ? "Current fiscal year"
              : item.period === "+1y"
                ? "Next fiscal year"
                : null;
      if (!period) return null;
      return {
        period,
        endDate: item.endDate ?? null,
        revenueAvg: raw(item.revenueEstimate?.avg),
        revenueGrowth: raw(item.revenueEstimate?.growth),
        epsAvg: raw(item.earningsEstimate?.avg),
        epsGrowth: raw(item.earningsEstimate?.growth),
        analystCount: raw(item.revenueEstimate?.numberOfAnalysts) ?? raw(item.earningsEstimate?.numberOfAnalysts),
      };
    })
    .filter((item): item is NonNullable<typeof item> => item != null);

  const current = trend.find((item) => item.period === "0q");
  const currentQuarter = current
    ? {
        endDate: current.endDate ?? null,
        revenueAvg: raw(current.revenueEstimate?.avg),
        revenueGrowth: raw(current.revenueEstimate?.growth),
        epsAvg: raw(current.earningsEstimate?.avg),
        epsGrowth: raw(current.earningsEstimate?.growth),
        analystCount:
          raw(current.revenueEstimate?.numberOfAnalysts) ??
          raw(current.earningsEstimate?.numberOfAnalysts),
      }
    : null;

  const history = (summary?.earnings?.earningsChart?.quarterly ?? []).map((item) => ({
    quarter: item.fiscalQuarter ?? item.calendarQuarter ?? item.date,
    endDate: item.periodEndDate?.fmt ?? null,
    epsActual: raw(item.actual),
    epsEstimate: raw(item.estimate),
    revenueActual: null,
    revenueEstimate: null,
  }));

  const hasContent =
    targetMean != null || analystCount != null || estimates.length > 0 || history.length > 0;
  if (!hasContent) return null;

  return {
    ticker,
    provider: "Third-party consensus",
    asOf,
    sourceUrl: `https://www.nseindia.com/get-quotes/equity?symbol=${ticker}`,
    targetMean,
    targetHigh: raw(financial?.targetHighPrice),
    targetLow: raw(financial?.targetLowPrice),
    recommendationKey: financial?.recommendationKey ?? null,
    analystCount,
    distribution: null,
    estimates,
    history,
    currentQuarter,
  };
}

async function fetchYahoo(ticker: string) {
  const symbol = yahooSymbol(ticker);
  const [chart, summary] = await Promise.all([
    yahooChart(symbol, "10y"),
    yahooQuoteSummary(
      symbol,
      "price,assetProfile,summaryDetail,financialData,defaultKeyStatistics,earnings,earningsTrend,incomeStatementHistory,incomeStatementHistoryQuarterly,balanceSheetHistory,cashflowStatementHistory",
    ),
  ]);
  return { chart, summary };
}

async function main() {
  const requested = process.argv.slice(2).filter((arg) => !arg.startsWith("-"));
  const tickers = requested.length ? requested : INDIA_TICKERS;
  await fs.mkdir(PROCESSED, { recursive: true });
  await fs.mkdir(CONSENSUS, { recursive: true });
  await fs.mkdir(PUBLIC, { recursive: true });

  const built: TickerData[] = [];
  for (const ticker of tickers) {
    const group = getIndiaCoverageGroup(ticker);
    console.log(`[india] ${ticker}`);
    const [screener, yahoo] = await Promise.all([
      fetchScreener(ticker, { force: FORCE }),
      fetchYahoo(ticker),
    ]);
    if (!screener) {
      console.warn(`[india] ${ticker}: no financial statements`);
      continue;
    }
    if (!yahoo.chart?.points.length) {
      console.warn(`[india] ${ticker}: no price history`);
      continue;
    }

    let prices: PricePoint[] = yahoo.chart.points;
    if (prices.length < 30 && screener.companyId) {
      const fallback = await fetchScreenerPrices(screener.companyId);
      if (fallback.length > prices.length) {
        prices = fallback;
        console.log(`[india] ${ticker}: using Screener weekly price history`);
      }
    }
    if (!prices.length) {
      console.warn(`[india] ${ticker}: no usable price history`);
      continue;
    }
    const snapshot = latestPriceSnapshot(prices);
    const price = yahoo.summary?.price;
    const profile = yahoo.summary?.assetProfile;
    const detail = yahoo.summary?.summaryDetail;
    const financial = yahoo.summary?.financialData;
    const latestCash = raw(financial?.totalCash);
    const latestDebt = raw(financial?.totalDebt);

    let annual = screener.annual.map((row) => {
      const balance = screener.balance.find((item) => item.endDate === row.endDate);
      const cash = screener.cash.find((item) => item.endDate === row.endDate);
      const ratios = screener.ratios.find((item) => item.endDate === row.endDate);
      return toRow(row, balance, cash, ratios);
    });
    if (annual.length < 2) {
      const fallback = yahooAnnualRows(yahoo.summary, {
        cash: latestCash,
        debt: latestDebt,
      });
      if (fallback.length > annual.length) {
        annual = fallback;
        console.log(`[india] ${ticker}: using Yahoo annual statements`);
      }
    }
    const latestAnnual = annual[annual.length - 1];
    if (latestAnnual && (latestCash != null || latestDebt != null)) {
      latestAnnual.cashAndInvestments = latestCash ?? 0;
      latestAnnual.totalDebt = latestDebt ?? latestAnnual.totalDebt;
      latestAnnual.netDebt =
        latestAnnual.totalDebt != null
          ? latestAnnual.totalDebt - (latestAnnual.cashAndInvestments ?? 0)
          : null;
    }

    let quarterly = screener.quarterly.map((row, index) =>
      quarterlyRow(
        row,
        index === screener.quarterly.length - 1
          ? { cash: latestCash ?? 0, debt: latestDebt }
          : undefined,
      ),
    );
    if (quarterly.length < 4) {
      const fallback = yahooQuarterlyRows(yahoo.summary, {
        cash: latestCash ?? 0,
        debt: latestDebt,
      });
      if (fallback.length > quarterly.length) {
        quarterly = fallback;
        console.log(`[india] ${ticker}: using Yahoo quarterly statements`);
      }
    }

    const marketCap =
      raw(price?.marketCap) ??
      (raw(price?.regularMarketPrice) != null && raw(price?.sharesOutstanding) != null
        ? (raw(price?.regularMarketPrice) as number) * (raw(price?.sharesOutstanding) as number)
        : null);
    const lastPoint = prices[prices.length - 1];
    if (lastPoint) {
      lastPoint.mc = marketCap;
      lastPoint.dy = raw(detail?.dividendYield);
    }

    const computed = computeMetrics(quarterly, annual, prices);
    const name = text(price?.longName) || text(price?.shortName) || ticker;
    const website = text(profile?.website);
    const annualReportUrl = `https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=${ticker}`;
    const description =
      text(profile?.longBusinessSummary) ||
      `${name} is an Indian company in the ${group?.name ?? "listed"} universe.`;

    const data: TickerData = {
      ticker,
      name,
      description,
      sector: group?.name ?? text(profile?.sector) ?? "India",
      industry: text(profile?.industry) || group?.shortName || "India",
      employees: profile?.fullTimeEmployees ?? null,
      isin: null,
      cik: null,
      latest10KUrl: annualReportUrl,
      market: "IN",
      hq: [profile?.city, profile?.state, profile?.country].filter(Boolean).join(", ") || null,
      founded: null,
      website: website || null,
      currency: "INR",
      isResearch: true,
      latestPrice: {
        close: snapshot.close,
        prevClose: snapshot.prevClose,
        changePct: snapshot.changePct,
        asOf: snapshot.asOf,
        high52: raw(detail?.fiftyTwoWeekHigh) ?? yahoo.chart.meta.fiftyTwoWeekHigh ?? null,
        low52: raw(detail?.fiftyTwoWeekLow) ?? yahoo.chart.meta.fiftyTwoWeekLow ?? null,
        marketCap,
        sharesOutstanding: raw(price?.sharesOutstanding),
        dividendYield: raw(detail?.dividendYield),
      },
      ttm: computed.ttm,
      quarterly,
      annual,
      metrics: {
        ...computed.metrics,
        grossMargin: raw(financial?.grossMargins) ?? computed.metrics.grossMargin,
        operatingMargin: raw(financial?.operatingMargins) ?? computed.metrics.operatingMargin,
        netMargin: raw(financial?.profitMargins) ?? computed.metrics.netMargin,
        roe: raw(financial?.returnOnEquity) ?? computed.metrics.roe,
      },
      factorChips: [],
      multipleHistory: buildMultipleHistory(prices),
      sources: [
        { name: "NSE annual reports", url: annualReportUrl, date: snapshot.asOf },
        ...(website ? [{ name: "Company website", url: website, date: snapshot.asOf }] : []),
      ],
      updatedAt: new Date().toISOString(),
    };

    if (screener.sourceUrl) {
      data.latest10KUrl = annualReportUrl;
    }

    const parsed = tickerDataSchema.parse(data);
    await fs.mkdir(path.join(PROCESSED, ticker), { recursive: true });
    await fs.writeFile(path.join(PROCESSED, ticker, "data.json"), JSON.stringify(parsed, null, 2), "utf8");
    await fs.writeFile(path.join(PROCESSED, ticker, "prices.json"), JSON.stringify(prices), "utf8");

    const consensus = buildConsensus(ticker, yahoo.summary, snapshot.asOf);
    if (consensus) {
      await fs.writeFile(path.join(CONSENSUS, `${ticker}.json`), JSON.stringify(consensus, null, 2), "utf8");
    }

    const ranges = buildRangeFiles(prices, ticker);
    for (const [range, points] of Object.entries(ranges)) {
      const dir = path.join(PUBLIC, "prices", ticker);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(path.join(dir, `${range}.json`), JSON.stringify(points), "utf8");
    }

    built.push(parsed);
    console.log(
      `[india] ${ticker}: revenue ${parsed.metrics.revenueTtm ?? "n/a"}, ${prices.length} prices`,
    );
  }

  const inputs = built.map((data) => ({ ticker: data.ticker, metrics: data.metrics }));
  const chips = buildFactorChips(inputs, "INR");
  for (const data of built) {
    data.factorChips = chips[data.ticker] ?? [];
    await fs.writeFile(
      path.join(PROCESSED, data.ticker, "data.json"),
      JSON.stringify(data, null, 2),
      "utf8",
    );
  }
  console.log(`[india] wrote ${built.length} companies`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
