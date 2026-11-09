/**
 * GCC coverage ingestion.
 *
 * Statements, statistics and consensus come from StockAnalysis.com (server
 * rendered tables for Tadawul, ADX, DFM, QSE, KWSE and MSM); five-year price
 * history is taken from Yahoo Finance where the exchange is covered, otherwise
 * from StockAnalysis' history table. Every response is cached under
 * data/gcc/raw so re-runs are idempotent.
 *
 * Run: pnpm ingest:gcc
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });
loadEnv();
import fs from "node:fs/promises";
import path from "node:path";
import { GCC_ENTRIES, getGccGroup } from "../config/gcc-coverage";
import { buildMultipleHistory, buildRangeFiles, computeMetrics, latestPriceSnapshot } from "../lib/metrics";
import type { Consensus, FinancialRow, PricePoint, TickerData } from "../lib/schemas";
import { fetchStockAnalysis, type SaStatement, type StockAnalysisCompany } from "../lib/stockanalysis";
import { yahooChart } from "../lib/yahoo";

const ROOT = path.join(process.cwd(), "data", "gcc");
const PROCESSED = path.join(ROOT, "processed");
const CONSENSUS = path.join(ROOT, "consensus");
const PUBLIC = path.join(process.cwd(), "public", "data", "gcc");
const DELAY_MS = Number(process.env.GCC_DELAY_MS ?? 250);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function exact(statement: SaStatement, label: string): string[] | null {
  return statement.rows.get(label) ?? null;
}

function pick(statement: SaStatement, labels: string[]): string[] | null {
  for (const label of labels) {
    const row = exact(statement, label);
    if (row) return row;
  }
  for (const [key, row] of statement.rows) {
    if (labels.some((label) => key.startsWith(label))) return row;
  }
  return null;
}

function num(value: string | undefined, scale = 1): number | null {
  if (value == null) return null;
  const cleaned = value.replace(/[^0-9.,()\-+]/g, "").replace(/,/g, "");
  if (!cleaned || cleaned === "-" || cleaned === "—") return null;
  const negative = cleaned.startsWith("(") && cleaned.endsWith(")");
  const parsed = Number(cleaned.replace(/[()]/g, ""));
  if (!Number.isFinite(parsed)) return null;
  return (negative ? -parsed : parsed) * scale;
}

function div(a: number | null, b: number | null): number | null {
  return a != null && b != null && b !== 0 ? a / b : null;
}

const M = 1e6;

function buildRow(
  index: number,
  periodLabel: string,
  period: string,
  reportDate: string,
  income: SaStatement,
  balance: SaStatement,
  cash: SaStatement,
): FinancialRow {
  const incomeAt = (labels: string[], scale = M) => num(pick(income, labels)?.[index], scale);
  const balanceAt = (labels: string[]) => num(pick(balance, labels)?.[index], M);
  const cashAt = (labels: string[], scale = M) => num(pick(cash, labels)?.[index], scale);

  const revenue = incomeAt(["Revenue", "Net Revenue", "Total Revenue"]);
  const grossProfit = incomeAt(["Gross Profit"]);
  const operatingIncome = incomeAt(["Operating Income", "Operating Income (Loss)", "EBIT"]);
  const netIncome = incomeAt(["Net Income", "Net Income (Common)"]);
  const epsDiluted = incomeAt(["EPS (Diluted)", "Earnings Per Share", "EPS"], 1);
  const incomePretax = incomeAt(["Pretax Income", "Income Before Tax"]);
  const incomeTax = incomeAt(["Income Tax", "Income Tax Expense"]);
  const interestExpense = incomeAt(["Interest Expense"]);
  const da = incomeAt(["Depreciation & Amortization"]) ?? cashAt(["Depreciation & Amortization"]);
  const ebitda = incomeAt(["EBITDA"]) ?? (operatingIncome != null && da != null ? operatingIncome + da : null);

  const cashAndInvestments = balanceAt(["Cash & Equivalents", "Cash & Cash Equivalents", "Cash and Cash Equivalents"]);
  const totalDebt = balanceAt(["Total Debt"]);
  const totalEquity = balanceAt(["Shareholders' Equity", "Total Equity", "Total Common Equity"]);
  const totalAssets = balanceAt(["Total Assets"]);
  const inventory = balanceAt(["Inventory"]);
  const receivables = balanceAt(["Accounts Receivable", "Accounts & Notes Receivable"]);

  const cfo = cashAt(["Operating Cash Flow", "Net Cash from Operating Activities"]);
  const capexRaw = cashAt(["Capital Expenditures", "Capital Expenditure"]);
  const capex = capexRaw == null ? null : Math.abs(capexRaw);
  const freeCashFlow = cashAt(["Free Cash Flow"]) ?? (cfo != null && capex != null ? cfo - capex : null);
  const dividendsPaid = (() => {
    const value = cashAt(["Dividends Paid", "Common Dividends Paid"]);
    return value == null ? null : Math.abs(value);
  })();
  const buybacks = (() => {
    const value = cashAt(["Share Repurchases", "Repurchase of Common Stock"]);
    return value == null ? null : Math.abs(value);
  })();

  const netDebt = totalDebt != null && cashAndInvestments != null ? totalDebt - cashAndInvestments : null;
  const invested =
    totalEquity != null && totalDebt != null && cashAndInvestments != null
      ? totalEquity + totalDebt - cashAndInvestments
      : null;

  return {
    period,
    fyear: Number(reportDate.slice(0, 4)) || 0,
    reportDate,
    publishDate: null,
    ttm: period === "TTM",
    restated: true,
    revenue,
    grossProfit,
    operatingIncome,
    netIncome,
    epsDiluted,
    epsBasic: epsDiluted,
    interestExpense,
    pretaxIncome: incomePretax,
    incomeTax,
    rnd: incomeAt(["Research & Development"]),
    sga: incomeAt(["Selling, General & Administrative"]),
    cashAndInvestments,
    totalDebt,
    totalEquity,
    totalAssets,
    inventory,
    receivables,
    cfo,
    capex,
    freeCashFlow,
    da,
    sbc: null,
    dividendsPaid,
    buybacks,
    ebitda,
    grossMargin: div(grossProfit, revenue),
    operatingMargin: div(operatingIncome, revenue),
    netMargin: div(netIncome, revenue),
    fcfMargin: div(freeCashFlow, revenue),
    roic: invested != null && invested > 0 && operatingIncome != null ? (operatingIncome * 0.79) / invested : null,
    netDebt,
    netDebtToEbitda: netDebt != null && ebitda != null && ebitda > 0 ? netDebt / ebitda : null,
    roe: totalEquity != null && totalEquity > 0 ? div(netIncome, totalEquity) : null,

  };
}

function pricePointsFromHistory(company: StockAnalysisCompany): PricePoint[] {
  return company.history.map((point) => ({
    d: point.date,
    o: point.open,
    h: point.high,
    l: point.low,
    c: point.close,
    a: point.close,
    v: point.volume,
  }));
}

async function loadPrices(entry: (typeof GCC_ENTRIES)[number], company: StockAnalysisCompany): Promise<PricePoint[]> {
  if (entry.data.yahoo) {
    try {
      const chart = await yahooChart(entry.data.yahoo, "10y");
      if (chart?.points.length) return chart.points;
    } catch {
      // fall back to StockAnalysis history
    }
  }
  return pricePointsFromHistory(company);
}

function buildTickerData(
  entry: (typeof GCC_ENTRIES)[number],
  company: StockAnalysisCompany,
  prices: PricePoint[],
): TickerData {
  const annual: FinancialRow[] = [];
  const annualIncome = company.annualIncome;
  for (let index = 1; index < annualIncome.periods.length; index += 1) {
    const period = annualIncome.periods[index];
    if (!period.date) continue;
    const row = buildRow(
      index,
      period.label,
      "FY",
      period.date,
      annualIncome,
      company.annualBalance,
      company.annualCash,
    );
    if (row.revenue != null || row.netIncome != null) annual.push(row);
  }
  annual.sort((a, b) => a.reportDate.localeCompare(b.reportDate));

  const quarterly: FinancialRow[] = [];
  for (let index = 0; index < company.quarterlyIncome.periods.length; index += 1) {
    const period = company.quarterlyIncome.periods[index];
    if (!period.date) continue;
    const row = buildRow(
      index,
      period.label,
      period.label.split(" ")[0] || "Q",
      period.date,
      company.quarterlyIncome,
      company.quarterlyBalance,
      company.quarterlyCash,
    );
    if (row.revenue != null || row.netIncome != null) quarterly.push(row);
  }
  quarterly.sort((a, b) => a.reportDate.localeCompare(b.reportDate));

  const ttmPeriod = annualIncome.periods[0];
  const ttmRaw =
    ttmPeriod?.date
      ? buildRow(0, "TTM", "TTM", ttmPeriod.date, annualIncome, company.annualBalance, company.annualCash)
      : null;
  const latestAnnualRow = annual.at(-1) ?? null;
  const ttm: FinancialRow | null = ttmRaw
    ? ({
        ...ttmRaw,
        ...Object.fromEntries(
          Object.entries(ttmRaw).map(([key, value]) => [
            key,
            value == null ? (latestAnnualRow as unknown as Record<string, unknown>)?.[key] ?? null : value,
          ]),
        ),
      } as FinancialRow)
    : null;

  const snapshot = latestPriceSnapshot(prices);
  const computed = computeMetrics(quarterly, annual, prices);
  const group = getGccGroup(entry.ticker);
  const marketCap = company.marketCap ?? (snapshot.close && company.sharesOutstanding ? snapshot.close * company.sharesOutstanding : null);
  const latestAnnual = annual.at(-1) ?? null;
  const netIncome = ttm?.netIncome ?? computed.ttm?.netIncome ?? latestAnnual?.netIncome ?? null;

  return {
    ticker: entry.ticker,
    name: entry.name,
    description: company.description || `${entry.name} is listed on the ${entry.exchange} in the ${group?.name ?? entry.sector} group.`,
    sector: entry.sector,
    industry: company.industry || entry.sector,
    employees: company.employees,
    isin: null,
    hq: null,
    website: company.website,
    currency: company.currency,
    market: "GCC",
    isResearch: true,
    latestPrice: {
      close: snapshot.close || company.price,
      prevClose: snapshot.prevClose,
      changePct: snapshot.changePct,
      asOf: snapshot.asOf || new Date().toISOString().slice(0, 10),
      high52: snapshot.high52 ?? company.high52,
      low52: snapshot.low52 ?? company.low52,
      marketCap,
      sharesOutstanding: company.sharesOutstanding,
      dividendYield: company.dividendYield,
    },
    ttm,
    quarterly,
    annual,
    metrics: {
      ...computed.metrics,
      revenueTtm: ttm?.revenue ?? computed.metrics.revenueTtm,
      epsTtm: ttm?.epsDiluted ?? computed.metrics.epsTtm,
      netDebt: ttm?.netDebt ?? computed.metrics.netDebt,
      netDebtToEbitda: ttm?.netDebtToEbitda ?? computed.metrics.netDebtToEbitda,
      grossMargin: ttm?.grossMargin ?? computed.metrics.grossMargin,
      operatingMargin: ttm?.operatingMargin ?? computed.metrics.operatingMargin,
      netMargin: ttm?.netMargin ?? computed.metrics.netMargin,
      fcfMargin: ttm?.fcfMargin ?? computed.metrics.fcfMargin,
      roe: company.roe ?? ttm?.roe ?? computed.metrics.roe,
      roic: company.roic ?? ttm?.roic ?? computed.metrics.roic,
      pe: company.pe ?? (marketCap != null && netIncome != null && netIncome > 0 ? marketCap / netIncome : computed.metrics.pe),
      evEbitda: company.evEbitda ?? computed.metrics.evEbitda,
      evSales:
        marketCap != null && revenueOf(ttm, latestAnnual) != null && revenueOf(ttm, latestAnnual)! > 0
          ? (marketCap + (ttm?.netDebt ?? 0)) / revenueOf(ttm, latestAnnual)!
          : computed.metrics.evSales,
      pfcf: computed.metrics.pfcf,
      fcfYield: computed.metrics.fcfYield,
      return1y: computed.metrics.return1y,
      returnYtd: computed.metrics.returnYtd,
      return5y: computed.metrics.return5y,
    },
    factorChips: [],
    multipleHistory: buildMultipleHistory(prices),
    sources: [
      {
        name: "StockAnalysis.com financial statements",
        url: `https://stockanalysis.com/quote/${entry.data.stockanalysis?.exchange ?? ""}/${entry.ticker}/financials/`,
        date: snapshot.asOf,
      },
      ...(entry.data.yahoo
        ? [{ name: "Yahoo Finance price history", url: `https://finance.yahoo.com/quote/${entry.data.yahoo}`, date: snapshot.asOf }]
        : []),
    ],
    updatedAt: new Date().toISOString(),
  };
}

function revenueOf(ttm: FinancialRow | null, annual: FinancialRow | null): number | null {
  return ttm?.revenue ?? annual?.revenue ?? null;
}

function buildConsensus(
  entry: (typeof GCC_ENTRIES)[number],
  company: StockAnalysisCompany,
): Consensus | null {
  const forecast = company.forecast;
  if (!forecast.priceAverage && forecast.estimates.length === 0) return null;
  const current = forecast.estimates[0];
  const next = forecast.estimates[1];
  const toEstimate = (estimate: typeof current | undefined, period: string) =>
    estimate
      ? {
          period,
          endDate: estimate.endDate,
          revenueAvg: estimate.revenue,
          revenueGrowth: estimate.revenueGrowth,
          epsAvg: estimate.eps,
          epsGrowth: estimate.epsGrowth,
          analystCount: forecast.analystCount,
        }
      : null;
  const estimates = [
    toEstimate(current, "Current fiscal year"),
    toEstimate(next, "Next fiscal year"),
  ].filter((item): item is NonNullable<typeof item> => item != null);
  return {
    ticker: entry.ticker,
    provider: "StockAnalysis.com consensus",
    asOf: new Date().toISOString().slice(0, 10),
    sourceUrl: `https://stockanalysis.com/quote/${entry.data.stockanalysis?.exchange ?? ""}/${entry.ticker}/forecast/`,
    targetMean: forecast.priceAverage,
    targetHigh: forecast.priceHigh,
    targetLow: forecast.priceLow,
    recommendationKey: forecast.distribution
      ? forecast.distribution.strongBuy + forecast.distribution.buy >
        forecast.distribution.sell + forecast.distribution.strongSell
        ? "buy"
        : forecast.distribution.sell + forecast.distribution.strongSell >
            forecast.distribution.strongBuy + forecast.distribution.buy
          ? "sell"
          : "hold"
      : null,
    analystCount: forecast.analystCount,
    distribution: forecast.distribution,
    estimates,
    history: [],
    currentQuarter: current
      ? {
          endDate: current.endDate,
          revenueAvg: current.revenue,
          revenueGrowth: current.revenueGrowth,
          epsAvg: current.eps,
          epsGrowth: current.epsGrowth,
          analystCount: forecast.analystCount,
        }
      : null,
    revisions: null,

  };
}

async function main() {
  await fs.mkdir(PROCESSED, { recursive: true });
  await fs.mkdir(CONSENSUS, { recursive: true });
  const limit = Number(process.env.GCC_LIMIT ?? 0);
  const market = process.env.GCC_MARKET;
  const entries = (market ? GCC_ENTRIES.filter((entry) => entry.market === market) : GCC_ENTRIES).slice(0, limit > 0 ? limit : undefined);
  let written = 0;

  for (const entry of entries) {
    if (!entry.data.stockanalysis) {
      console.log(`[gcc] ${entry.ticker}: no StockAnalysis source yet, skipping`);
      continue;
    }
    try {
      const company = await fetchStockAnalysis(entry.data.stockanalysis.exchange, entry.data.stockanalysis.ticker);
      const prices = await loadPrices(entry, company);
      if (!prices.length) {
        console.warn(`[gcc] ${entry.ticker}: no prices`);
        continue;
      }
      const data = buildTickerData(entry, company, prices);
      const consensus = buildConsensus(entry, company);

      await fs.mkdir(path.join(PROCESSED, entry.ticker), { recursive: true });
      await fs.writeFile(
        path.join(PROCESSED, entry.ticker, "data.json"),
        JSON.stringify(data, null, 2),
        "utf8",
      );
      if (consensus) {
        await fs.writeFile(
          path.join(CONSENSUS, `${entry.ticker}.json`),
          JSON.stringify(consensus, null, 2),
          "utf8",
        );
      }
      const ranges = buildRangeFiles(prices, entry.ticker);
      for (const [range, points] of Object.entries(ranges)) {
        const dir = path.join(PUBLIC, "prices", entry.ticker);
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(path.join(dir, `${range}.json`), JSON.stringify(points), "utf8");
      }
      written += 1;
      console.log(
        `[gcc] ${entry.ticker} ${data.name.slice(0, 32)} | ${data.currency} | mcap ${data.latestPrice.marketCap ?? "n/a"} | rev ${data.metrics.revenueTtm ?? "n/a"} | pe ${data.metrics.pe ?? "n/a"}`,
      );
    } catch (error) {
      console.error(`[gcc] ${entry.ticker} failed:`, String(error).slice(0, 200));
    }
    await sleep(DELAY_MS);
  }
  console.log(`[gcc] wrote ${written} companies`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
