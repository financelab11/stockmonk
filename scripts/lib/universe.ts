/**
 * Builds screener rows for every currently listed US company covered by
 * SimFin's bulk export. The bulk files are downloaded by
 * scripts/ingest-simfin-bulk.ts into data/raw/simfin-bulk (gitignored).
 *
 * The free bulk export is delayed by roughly a year, so the resulting snapshot
 * date is recorded per row; the researched 229 names keep their fresh API data.
 */
import fs from "node:fs";
import path from "node:path";
import { csvNumber, readCsv, type CsvRow } from "../../lib/csv";
import { computeMetrics } from "../../lib/metrics";
import type { FinancialRow, RangePricePoint, TickerData } from "../../lib/schemas";
import {
  computePriceParameters,
  computeRawParameters,
  type ScreenerRawEntry,
} from "../../lib/screener-model";

const CSV_DIR = path.join(process.cwd(), "data", "raw", "simfin-bulk", "csv");
const SPY_FILE = path.join(process.cwd(), "public", "data", "prices", "SPY", "MAX.json");

const MIN_PRICE_POINTS = 260;
const LISTED_WINDOW_DAYS = 60;
const HISTORY_START = "2019-01-01";

export type UniverseCompany = {
  ticker: string;
  name: string;
  sector: string;
  industry: string;
  employees: number | null;
  isin: string | null;
};

type Flow = {
  revenue: number | null;
  grossProfit: number | null;
  operatingIncome: number | null;
  netIncome: number | null;
  sharesDiluted: number | null;
  interestExpense: number | null;
  pretaxIncome: number | null;
  incomeTax: number | null;
  rnd: number | null;
  sga: number | null;
  cfo: number | null;
  capex: number | null;
  dividendsPaid: number | null;
  buybacks: number | null;
  da: number | null;
};

type Balance = {
  cash: number | null;
  debt: number | null;
  equity: number | null;
  assets: number | null;
  inventory: number | null;
  receivables: number | null;
};

type Cash = {
  cfo: number | null;
  capex: number | null;
  dividendsPaid: number | null;
  buybacks: number | null;
  da: number | null;
};

const SECTOR_GROUPS: Record<string, { id: string; name: string }> = {
  Technology: { id: "technology", name: "Technology" },
  "Communication Services": { id: "communication", name: "Communication" },
  "Consumer Cyclical": { id: "consumer-discretionary", name: "Consumer Discretionary" },
  "Consumer Defensive": { id: "consumer-staples", name: "Consumer Staples" },
  Healthcare: { id: "healthcare", name: "Healthcare" },
  "Financial Services": { id: "financials", name: "Financials" },
  Industrials: { id: "industrials", name: "Industrials" },
  "Business Services": { id: "industrials", name: "Industrials" },
  Energy: { id: "energy", name: "Energy" },
  Utilities: { id: "utilities", name: "Utilities" },
  "Basic Materials": { id: "materials", name: "Materials" },
  "Real Estate": { id: "real-estate", name: "Real Estate" },
  Other: { id: "other", name: "Other" },
};

function groupFor(sector: string): { id: string; name: string } {
  return SECTOR_GROUPS[sector] ?? { id: "other", name: sector || "Other" };
}

const isPlainTicker = (ticker: string) => /^[A-Z]{1,5}([.-][A-Z])?$/.test(ticker);

// Preferred shares, bonds, SPAC units and ETFs have prices but no comparable
// operating fundamentals, so they are excluded from the equity screener.
const NON_COMMON_NAMES =
  /%|\bPFD\b|\bPreferred (Series|Stock|Shares?)\b|(?<!American )\bDepositary Shares?\b|\bWarrants?\b|\bNotes? (Due|NT)\b|\bSubordinated\b|Acquisition Corp Units?\b|SPDR|Exchange Traded|Closed-End|^iShares|^Invesco|^Vanguard|^WisdomTree|^ProShares|^Direxion|^Global X|^First Trust/i;

// SimFin appends P to preferred share tickers (e.g. AIRTP); five-character
// tickers ending in P are preferreds in this dataset, unlike four-character
// common stocks such as CAMP or SHOP.
const isPreferredTicker = (ticker: string) => /^[A-Z]{4}P$/.test(ticker);

function flowFrom(row: CsvRow): Flow {
  return {
    revenue: csvNumber(row["Revenue"]) ?? csvNumber(row["Net Revenue"]),
    grossProfit: csvNumber(row["Gross Profit"]),
    operatingIncome: csvNumber(row["Operating Income (Loss)"]),
    netIncome: csvNumber(row["Net Income"]),
    sharesDiluted: csvNumber(row["Shares (Diluted)"]),
    interestExpense: csvNumber(row["Interest Expense, Net"]),
    pretaxIncome: csvNumber(row["Pretax Income (Loss)"]),
    incomeTax: csvNumber(row["Income Tax (Expense) Benefit, Net"]),
    rnd: csvNumber(row["Research & Development"]),
    sga: csvNumber(row["Selling, General & Administrative"]),
    cfo: null,
    capex: null,
    dividendsPaid: null,
    buybacks: null,
    da: csvNumber(row["Depreciation & Amortization"]),
  };
}

function balanceFrom(row: CsvRow): Balance {
  const shortDebt = csvNumber(row["Short Term Debt"]);
  const longDebt = csvNumber(row["Long Term Debt"]);
  return {
    cash: csvNumber(row["Cash, Cash Equivalents & Short Term Investments"]),
    debt:
      shortDebt === null && longDebt === null
        ? null
        : (shortDebt ?? 0) + (longDebt ?? 0),
    equity: csvNumber(row["Total Equity"]),
    assets: csvNumber(row["Total Assets"]),
    inventory: csvNumber(row["Inventories"]),
    receivables: csvNumber(row["Accounts & Notes Receivable"]),
  };
}

function cashFrom(row: CsvRow): Cash {
  const capex = csvNumber(row["Change in Fixed Assets & Intangibles"]);
  const dividends = csvNumber(row["Dividends Paid"]);
  const buybacks = csvNumber(row["Cash from (Repurchase of) Equity"]);
  return {
    cfo: csvNumber(row["Net Cash from Operating Activities"]),
    capex: capex === null ? null : Math.abs(capex),
    dividendsPaid: dividends === null ? null : Math.abs(dividends),
    buybacks: buybacks === null ? null : Math.abs(buybacks),
    da: csvNumber(row["Depreciation & Amortization"]),
  };
}

function financialRow(
  period: string,
  fyear: number,
  reportDate: string,
  publishDate: string | null,
  flow: Flow,
  balance: Balance,
  cash: Cash,
): FinancialRow {
  const revenue = flow.revenue;
  const grossProfit = flow.grossProfit;
  const operatingIncome = flow.operatingIncome;
  const netIncome = flow.netIncome;
  const da = flow.da ?? cash.da;
  const ebitda = operatingIncome !== null && da !== null ? operatingIncome + da : null;
  const capex = cash.capex;
  const freeCashFlow = cash.cfo !== null && capex !== null ? cash.cfo - capex : null;
  const netDebt =
    balance.debt !== null && balance.cash !== null ? balance.debt - balance.cash : null;
  const invested =
    balance.equity !== null && balance.debt !== null && balance.cash !== null
      ? balance.equity + balance.debt - balance.cash
      : null;
  const shares = flow.sharesDiluted;
  const epsDiluted = netIncome !== null && shares !== null && shares > 0 ? netIncome / shares : null;
  const div = (a: number | null, b: number | null) =>
    a !== null && b !== null && b !== 0 ? a / b : null;

  return {
    period,
    fyear,
    reportDate,
    publishDate,
    ttm: false,
    restated: true,
    revenue,
    grossProfit,
    operatingIncome,
    netIncome,
    epsDiluted,
    epsBasic: epsDiluted,
    interestExpense: flow.interestExpense,
    pretaxIncome: flow.pretaxIncome,
    incomeTax: flow.incomeTax,
    rnd: flow.rnd,
    sga: flow.sga,
    cashAndInvestments: balance.cash,
    totalDebt: balance.debt,
    totalEquity: balance.equity,
    totalAssets: balance.assets,
    inventory: balance.inventory,
    receivables: balance.receivables,
    cfo: cash.cfo,
    capex,
    freeCashFlow,
    da,
    sbc: null,
    dividendsPaid: cash.dividendsPaid,
    buybacks: cash.buybacks,
    ebitda,
    grossMargin: div(grossProfit, revenue),
    operatingMargin: div(operatingIncome, revenue),
    netMargin: div(netIncome, revenue),
    fcfMargin: div(freeCashFlow, revenue),
    roic:
      invested !== null && invested > 0 && operatingIncome !== null
        ? (operatingIncome * (1 - 0.21)) / invested
        : null,
    netDebt,
    netDebtToEbitda:
      netDebt !== null && ebitda !== null && ebitda > 0 ? netDebt / ebitda : null,
    roe: div(netIncome, balance.equity !== null && balance.equity > 0 ? balance.equity : null),
  };
}

type StatementSet = {
  flows: Map<string, { row: Flow; reportDate: string; publishDate: string | null }>;
  balances: Map<string, { row: Balance; reportDate: string }>;
  cash: Map<string, { row: Cash; reportDate: string }>;
};

function statementKey(fyear: string, period: string): string {
  return `${fyear}|${period}`;
}

async function loadCompanies(): Promise<Map<string, UniverseCompany>> {
  const industries = new Map<string, { industry: string; sector: string }>();
  for await (const row of readCsv(path.join(CSV_DIR, "us-industries.csv"))) {
    if (row["IndustryId"]) {
      industries.set(row["IndustryId"], {
        industry: row["Industry"] ?? "",
        sector: row["Sector"] ?? "",
      });
    }
  }
  const companies = new Map<string, UniverseCompany>();
  for await (const row of readCsv(path.join(CSV_DIR, "us-companies.csv"))) {
    const ticker = (row["Ticker"] ?? "").trim().toUpperCase();
    if (!ticker || row["Market"] !== "us" || !isPlainTicker(ticker)) continue;
    if (NON_COMMON_NAMES.test(row["Company Name"] ?? "")) continue;
    if (isPreferredTicker(ticker)) continue;
    if (companies.has(ticker)) continue;
    const meta = industries.get(row["IndustryId"] ?? "");
    companies.set(ticker, {
      ticker,
      name: row["Company Name"] ?? ticker,
      sector: meta?.sector ?? "",
      industry: meta?.industry ?? "",
      employees: csvNumber(row["Number Employees"]),
      isin: row["ISIN"] || null,
    });
  }
  return companies;
}

async function scanListedTickers(): Promise<{ tickers: Set<string>; maxDate: string }> {
  const last = new Map<string, { date: string; count: number }>();
  let maxDate = "";
  for await (const row of readCsv(path.join(CSV_DIR, "us-shareprices-daily.csv"))) {
    const ticker = (row["Ticker"] ?? "").trim().toUpperCase();
    const date = row["Date"] ?? "";
    if (!ticker || !date) continue;
    if (date > maxDate) maxDate = date;
    const entry = last.get(ticker);
    if (entry) {
      entry.count += 1;
      if (date > entry.date) entry.date = date;
    } else {
      last.set(ticker, { date, count: 1 });
    }
  }
  const cutoff = new Date(`${maxDate}T00:00:00Z`);
  cutoff.setUTCDate(cutoff.getUTCDate() - LISTED_WINDOW_DAYS);
  const cutoffDate = cutoff.toISOString().slice(0, 10);
  const tickers = new Set<string>();
  for (const [ticker, entry] of last) {
    if (entry.count >= MIN_PRICE_POINTS && entry.date >= cutoffDate) tickers.add(ticker);
  }
  return { tickers, maxDate };
}

async function loadStatements(
  listed: Set<string>,
): Promise<Map<string, FinancialRow[]>> {
  const annual = new Map<string, StatementSet>();
  const quarterly = new Map<string, StatementSet>();

  const statements: Array<{
    file: string;
    kind: "income" | "balance" | "cash";
    periodic: "annual" | "quarterly";
  }> = [
    { file: "us-income-annual.csv", kind: "income", periodic: "annual" },
    { file: "us-balance-annual.csv", kind: "balance", periodic: "annual" },
    { file: "us-cashflow-annual.csv", kind: "cash", periodic: "annual" },
    { file: "us-income-quarterly.csv", kind: "income", periodic: "quarterly" },
    { file: "us-balance-quarterly.csv", kind: "balance", periodic: "quarterly" },
    { file: "us-cashflow-quarterly.csv", kind: "cash", periodic: "quarterly" },
    { file: "us-income-banks-annual.csv", kind: "income", periodic: "annual" },
    { file: "us-balance-banks-annual.csv", kind: "balance", periodic: "annual" },
    { file: "us-cashflow-banks-annual.csv", kind: "cash", periodic: "annual" },
    { file: "us-income-banks-quarterly.csv", kind: "income", periodic: "quarterly" },
    { file: "us-balance-banks-quarterly.csv", kind: "balance", periodic: "quarterly" },
    { file: "us-cashflow-banks-quarterly.csv", kind: "cash", periodic: "quarterly" },
    { file: "us-income-insurance-annual.csv", kind: "income", periodic: "annual" },
    { file: "us-balance-insurance-annual.csv", kind: "balance", periodic: "annual" },
    { file: "us-cashflow-insurance-annual.csv", kind: "cash", periodic: "annual" },
    { file: "us-income-insurance-quarterly.csv", kind: "income", periodic: "quarterly" },
    { file: "us-balance-insurance-quarterly.csv", kind: "balance", periodic: "quarterly" },
    { file: "us-cashflow-insurance-quarterly.csv", kind: "cash", periodic: "quarterly" },
  ];

  for (const statement of statements) {
    const file = path.join(CSV_DIR, statement.file);
    if (!fs.existsSync(file)) continue;
    for await (const row of readCsv(file)) {
      const ticker = (row["Ticker"] ?? "").trim().toUpperCase();
      if (!ticker || !listed.has(ticker)) continue;
      const reportDate = row["Report Date"] ?? "";
      const fyear = row["Fiscal Year"] ?? "";
      if (!reportDate || !fyear || reportDate < HISTORY_START) continue;
      const period = statement.periodic === "annual" ? "FY" : (row["Fiscal Period"] ?? "");
      if (!period) continue;
      const target = statement.periodic === "annual" ? annual : quarterly;
      let set = target.get(ticker);
      if (!set) {
        set = { flows: new Map(), balances: new Map(), cash: new Map() };
        target.set(ticker, set);
      }
      const key = statementKey(fyear, period);
      if (statement.kind === "income") {
        const existing = set.flows.get(key);
        if (!existing || reportDate >= existing.reportDate) {
          set.flows.set(key, {
            row: flowFrom(row),
            reportDate,
            publishDate: row["Publish Date"] || null,
          });
        }
      } else if (statement.kind === "balance") {
        const existing = set.balances.get(key);
        if (!existing || reportDate >= existing.reportDate) {
          set.balances.set(key, { row: balanceFrom(row), reportDate });
        }
      } else {
        const existing = set.cash.get(key);
        if (!existing || reportDate >= existing.reportDate) {
          set.cash.set(key, { row: cashFrom(row), reportDate });
        }
      }
    }
  }

  const rows = new Map<string, FinancialRow[]>();
  const emptyBalance: Balance = {
    cash: null,
    debt: null,
    equity: null,
    assets: null,
    inventory: null,
    receivables: null,
  };
  const emptyCash: Cash = {
    cfo: null,
    capex: null,
    dividendsPaid: null,
    buybacks: null,
    da: null,
  };

  for (const [ticker, set] of quarterly) {
    const out: FinancialRow[] = [];
    for (const [key, income] of set.flows) {
      if (!income) continue;
      const balance = set.balances.get(key);
      const cash = set.cash.get(key);
      const [fyear] = key.split("|");
      out.push(
        financialRow(
          key.split("|")[1] ?? "Q",
          Number(fyear),
          income.reportDate,
          income.publishDate,
          income.row,
          balance?.row ?? emptyBalance,
          cash?.row ?? emptyCash,
        ),
      );
    }
    out.sort((a, b) => a.reportDate.localeCompare(b.reportDate));
    if (out.length) rows.set(ticker, out);
  }
  for (const [ticker, set] of annual) {
    const out: FinancialRow[] = [];
    for (const [key, income] of set.flows) {
      if (!income) continue;
      const balance = set.balances.get(key);
      const cash = set.cash.get(key);
      const [fyear] = key.split("|");
      out.push(
        financialRow(
          "FY",
          Number(fyear),
          income.reportDate,
          income.publishDate,
          income.row,
          balance?.row ?? emptyBalance,
          cash?.row ?? emptyCash,
        ),
      );
    }
    out.sort((a, b) => a.reportDate.localeCompare(b.reportDate));
    const existing = rows.get(ticker) ?? [];
    rows.set(ticker, [...existing, ...out]);
  }
  return rows;
}

function loadBenchmark(maxDate: string): RangePricePoint[] {
  try {
    const raw = JSON.parse(fs.readFileSync(SPY_FILE, "utf8")) as RangePricePoint[];
    const limit = new Date(`${maxDate}T23:59:59Z`).getTime() / 1000;
    return raw.filter((point) => point.t <= limit);
  } catch {
    return [];
  }
}

type PriceAccumulator = {
  dates: number[];
  closes: number[];
  dividends: Array<{ t: number; amount: number }>;
  rawClose: number | null;
  shares: number | null;
};

function toRangePoints(dates: number[], closes: number[]): RangePricePoint[] {
  return dates.map((t, index) => {
    const c = closes[index];
    return { t, o: c, h: c, l: c, c, v: 0 };
  });
}

function priceOnOrAfter(dates: number[], closes: number[], date: string): number | null {
  const target = new Date(`${date}T00:00:00Z`).getTime() / 1000;
  let low = 0;
  let high = dates.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (dates[mid] >= target) high = mid;
    else low = mid + 1;
  }
  return closes[low] ?? closes.at(-1) ?? null;
}

function historicalValuation(
  currentPe: number | null,
  annual: FinancialRow[],
  dates: number[],
  closes: number[],
): number | null {
  if (currentPe == null || currentPe <= 0) return null;
  const history: number[] = [];
  for (const row of annual.slice(-6)) {
    if (row.epsDiluted == null || row.epsDiluted <= 0) continue;
    const price = priceOnOrAfter(dates, closes, row.reportDate);
    if (price == null) continue;
    history.push(price / row.epsDiluted);
  }
  if (history.length < 3) return null;
  const below = history.filter((value) => value <= currentPe).length;
  return Math.round((1 - below / history.length) * 100);
}

export async function buildUniverseEntries(): Promise<ScreenerRawEntry[]> {  const companies = await loadCompanies();
  const { tickers: listed, maxDate } = await scanListedTickers();
  const benchmark = loadBenchmark(maxDate);
  if (benchmark.length < 30) {
    throw new Error("SPY benchmark history is missing or too short");
  }
  const fundamentals = await loadStatements(listed);

  const accumulators = new Map<string, PriceAccumulator>();
  for await (const row of readCsv(path.join(CSV_DIR, "us-shareprices-daily.csv"))) {
    const ticker = (row["Ticker"] ?? "").trim().toUpperCase();
    if (!ticker || !listed.has(ticker)) continue;
    const date = row["Date"] ?? "";
    if (!date || date < HISTORY_START) continue;
    let acc = accumulators.get(ticker);
    if (!acc) {
      acc = { dates: [], closes: [], dividends: [], rawClose: null, shares: null };
      accumulators.set(ticker, acc);
    }
    const close = csvNumber(row["Close"]);
    const adjusted = csvNumber(row["Adj. Close"]) ?? close;
    if (adjusted === null || adjusted <= 0) continue;
    const t = Math.floor(new Date(`${date}T00:00:00Z`).getTime() / 1000);
    acc.dates.push(t);
    acc.closes.push(adjusted);
    const dividend = csvNumber(row["Dividend"]);
    if (dividend !== null && dividend > 0) acc.dividends.push({ t, amount: dividend });
    acc.rawClose = close ?? acc.rawClose;
    const shares = csvNumber(row["Shares Outstanding"]);
    if (shares !== null && shares > 0) acc.shares = shares;
  }

  const entries: ScreenerRawEntry[] = [];
  const skipped = { company: 0, annual: 0, points: 0 };
  for (const [ticker, acc] of accumulators) {
    const company = companies.get(ticker);
    if (!company) {
      skipped.company += 1;
      continue;
    }
    const annual = fundamentals.get(ticker)?.filter((row) => row.period === "FY") ?? [];
    const quarterly = fundamentals.get(ticker)?.filter((row) => row.period !== "FY") ?? [];
    if (acc.dates.length < MIN_PRICE_POINTS) {
      skipped.points += 1;
      continue;
    }

    // SimFin exports are ordered by ticker; ensure each series is chronological
    // and keep the latest row when a date appears more than once.
    let ordered = true;
    for (let index = 1; index < acc.dates.length; index += 1) {
      if (acc.dates[index] < acc.dates[index - 1]) {
        ordered = false;
        break;
      }
    }
    if (!ordered) {
      const order = acc.dates
        .map((_, index) => index)
        .sort((a, b) => acc.dates[a] - acc.dates[b]);
      acc.dates = order.map((index) => acc.dates[index]);
      acc.closes = order.map((index) => acc.closes[index]);
    }

    const lastIndex = acc.dates.length - 1;
    const asOf = new Date(acc.dates[lastIndex] * 1000).toISOString().slice(0, 10);
    const close = acc.closes[lastIndex];
    const prevClose = acc.closes[lastIndex - 1] ?? null;
    const marketCap =
      acc.rawClose !== null && acc.shares !== null ? acc.rawClose * acc.shares : null;

    const oneYearAgo = acc.dates[lastIndex] - 365 * 86_400;
    const windowStart = acc.dates.findIndex((t) => t >= oneYearAgo);
    const yearCloses = acc.closes.slice(windowStart < 0 ? 0 : windowStart);
    const high52 = yearCloses.length ? Math.max(...yearCloses) : null;
    const low52 = yearCloses.length ? Math.min(...yearCloses) : null;
    const dividends = acc.dividends
      .filter((item) => item.t >= oneYearAgo)
      .reduce((sum, item) => sum + item.amount, 0);
    const rawClose = acc.rawClose ?? close;
    const dividendYield = rawClose > 0 ? dividends / rawClose : null;

    const pricesStart = acc.dates.findIndex((t) => t >= acc.dates[lastIndex] - 400 * 86_400);
    const prices = toRangePoints(
      acc.dates.slice(pricesStart < 0 ? 0 : pricesStart),
      acc.closes.slice(pricesStart < 0 ? 0 : pricesStart),
    );
    const pricesMax = toRangePoints(acc.dates, acc.closes);
    const priceParams = computePriceParameters(prices, pricesMax, benchmark);

    const { ttm, metrics: baseMetrics } = computeMetrics(quarterly, annual, []);
    const latestAnnual = annual.at(-1) ?? null;
    const netIncome = ttm?.netIncome ?? latestAnnual?.netIncome ?? null;
    const revenue = baseMetrics.revenueTtm ?? latestAnnual?.revenue ?? null;
    const ebitda = ttm?.ebitda ?? latestAnnual?.ebitda ?? null;
    const freeCashFlow = ttm?.freeCashFlow ?? latestAnnual?.freeCashFlow ?? null;
    const debt = ttm?.totalDebt ?? latestAnnual?.totalDebt ?? null;
    const cash = ttm?.cashAndInvestments ?? latestAnnual?.cashAndInvestments ?? null;
    const netDebt = debt !== null && cash !== null ? debt - cash : null;
    const ev = marketCap !== null && netDebt !== null ? marketCap + netDebt : marketCap;
    const pe =
      marketCap !== null && netIncome !== null && netIncome > 0 ? marketCap / netIncome : null;
    const evEbitda =
      ev !== null && ebitda !== null && ebitda > 0 ? ev / ebitda : null;
    const evSales = ev !== null && revenue !== null && revenue > 0 ? ev / revenue : null;
    const pfcf =
      marketCap !== null && freeCashFlow !== null && freeCashFlow > 0
        ? marketCap / freeCashFlow
        : null;
    const fcfYield =
      marketCap !== null && marketCap > 0 && freeCashFlow !== null
        ? freeCashFlow / marketCap
        : null;
    const netDebtToEbitda =
      netDebt !== null && ebitda !== null && ebitda > 0 ? netDebt / ebitda : null;

    const metrics = {
      ...baseMetrics,
      netDebt,
      netDebtToEbitda,
      pe,
      evEbitda,
      evSales,
      pfcf,
      fcfYield,
      return1y: priceParams.return12m ?? null,
    };

    const data: TickerData = {
      ticker,
      name: company.name,
      description: "",
      sector: company.sector || "Other",
      industry: company.industry || company.sector || "Other",
      employees: company.employees,
      isin: company.isin,
      currency: "USD",
      isResearch: false,
      latestPrice: {
        close,
        prevClose,
        changePct: prevClose && prevClose > 0 ? close / prevClose - 1 : null,
        asOf,
        high52,
        low52,
        marketCap,
        sharesOutstanding: acc.shares,
        dividendYield,
      },
      ttm,
      quarterly,
      annual,
      metrics,
      factorChips: [],
      multipleHistory: [],
      sources: [],
      updatedAt: asOf,
    };

    const valuation = historicalValuation(pe, annual, acc.dates, acc.closes);
    const raw = {
      ...computeRawParameters(
        { data, consensus: null, prices: [], pricesMax: [] },
        benchmark,
      ),
      ...priceParams,
      historicalValuation: valuation,
    };
    const group = groupFor(company.sector);

    entries.push({
      ticker,
      name: company.name,
      sector: company.sector || "Other",
      groupId: group.id,
      groupName: group.name,
      marketCap,
      price: close,
      asOf,
      raw,
    });
  }

  if (process.env.DEBUG_UNIVERSE) {
    console.log("[universe]", {
      listed: listed.size,
      priced: accumulators.size,
      fundamentals: fundamentals.size,
      entries: entries.length,
      skipped,
      maxDate,
    });
  }
  return entries;
}
