/**
 * SimFin ingestion.
 *
 * - One request per small batch (free tier limits companies per request).
 * - Responses are cached on disk under data/raw/simfin and the script is
 *   idempotent: re-running it reuses cached responses unless FORCE_REFRESH=1.
 * - Produces data/processed/{ticker}.json plus public price range files.
 *
 * Run: pnpm ingest
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });
loadEnv();
import fs from "node:fs/promises";
import path from "node:path";
import {
  ALL_TICKERS,
  BENCHMARK_TICKER,
  RESEARCH_TICKERS,
} from "../config/universe";
import { getSectorGroup } from "../config/sectors";
import {
  buildFactorChips,
  buildMultipleHistory,
  buildRangeFiles,
  computeMetrics,
  num,
  sortByDate,
} from "../lib/metrics";
import type { FinancialRow, PricePoint } from "../lib/schemas";
import {
  tickerDataSchema,
  universeEntrySchema,
  type UniverseEntry,
} from "../lib/schemas";
import {
  chunk,
  simfinGeneral,
  simfinPrices,
  simfinStatements,
} from "../lib/simfin";

const PROCESSED = path.join(process.cwd(), "data", "processed");
const PUBLIC_DATA = path.join(process.cwd(), "public", "data");
const BATCH = 2;

/**
 * SimFin uses GOOG for Alphabet while the rest of the app uses GOOGL.
 * Requests must use the SimFin symbol; processed data uses the app symbol.
 */
const SIMFIN_SYMBOL: Record<string, string> = { GOOGL: "GOOG" };
const SIMFIN_TO_APP: Record<string, string> = Object.fromEntries(
  Object.entries(SIMFIN_SYMBOL).map(([app, simfin]) => [simfin, app]),
);
const toSimfin = (ticker: string) => SIMFIN_SYMBOL[ticker] ?? ticker;
const toApp = (ticker: string) =>
  SIMFIN_TO_APP[ticker.toUpperCase()] ?? ticker.toUpperCase();

type GeneralRow = {
  ticker: string;
  name: string;
  industryName: string;
  sectorName: string;
  companyDescription: string;
  numEmployees: number | null;
  isin: string | null;
};

function tableRows(payload: unknown): Array<Record<string, unknown>> {
  // Company tables (general info) arrive as a single { columns, data } object,
  // while statement responses arrive as an array of such objects.
  if (!payload || typeof payload !== "object") return [];
  const items = Array.isArray(payload) ? payload : [payload];
  const out: Array<Record<string, unknown>> = [];
  for (const item of items) {
    if (!item || typeof item !== "object") continue;
    const columns = (item as { columns?: unknown }).columns;
    const data = (item as { data?: unknown }).data;
    if (!Array.isArray(columns) || !Array.isArray(data)) continue;
    for (const row of data) {
      if (!Array.isArray(row)) continue;
      const obj: Record<string, unknown> = {};
      columns.forEach((col, i) => {
        obj[String(col)] = row[i];
      });
      out.push(obj);
    }
  }
  return out;
}

function parseGeneral(payload: unknown): Map<string, GeneralRow> {
  const map = new Map<string, GeneralRow>();
  for (const row of tableRows(payload)) {
    const ticker = String(row.ticker ?? "").toUpperCase();
    if (!ticker) continue;
    map.set(ticker, {
      ticker,
      name: String(row.name ?? ticker),
      industryName: String(row.industryName ?? "�"),
      sectorName: String(row.sectorName ?? "�"),
      companyDescription: String(row.companyDescription ?? ""),
      numEmployees: num(row.numEmployees),
      isin: row.isin ? String(row.isin) : null,
    });
  }
  return map;
}

function parsePrices(payload: unknown): Map<string, PricePoint[]> {
  const out = new Map<string, PricePoint[]>();
  if (!Array.isArray(payload)) return out;
  for (const company of payload) {
    const ticker = String(
      (company as { ticker?: unknown }).ticker ?? "",
    ).toUpperCase();
    const columns = (company as { columns?: unknown }).columns;
    const data = (company as { data?: unknown }).data;
    if (!ticker || !Array.isArray(columns) || !Array.isArray(data)) continue;
    const idx = (name: string) => columns.indexOf(name);
    const points: PricePoint[] = [];
    for (const row of data) {
      if (!Array.isArray(row)) continue;
      const d = String(row[idx("Date")] ?? "");
      const c = num(row[idx("Last Closing Price")]);
      if (!d || c === null) continue;
      const a = num(row[idx("Adjusted Closing Price")]) ?? c;
      const o = num(row[idx("Opening Price")]) ?? c;
      const h = num(row[idx("Highest Price")]) ?? c;
      const l = num(row[idx("Lowest Price")]) ?? c;
      points.push({
        d,
        o,
        h,
        l,
        c,
        a,
        v: num(row[idx("Trading Volume")]) ?? 0,
        mc: num(row[idx("Market-Cap")]),
        pe: num(row[idx("Price to Earnings Ratio - ttm")]),
        ps: num(row[idx("Price to Sales Ratio - ttm")]),
        pfcf: num(row[idx("Price to Free Cash Flow - ttm")]),
        evEbitda: num(row[idx("EV/EBITDA - ttm")]),
        evSales: num(row[idx("EV/Sales - ttm")]),
        dy: num(row[idx("Dividend Yield - ttm")]),
      });
    }
    points.sort((x, y) => x.d.localeCompare(y.d));
    out.set(ticker, points);
  }
  return out;
}

type StatementMaps = Map<string, Map<string, Record<string, unknown>>>;

function parseStatements(payload: unknown): Map<string, StatementMaps> {
  const out = new Map<string, StatementMaps>();
  if (!Array.isArray(payload)) return out;
  for (const company of payload) {
    const ticker = String(
      (company as { ticker?: unknown }).ticker ?? "",
    ).toUpperCase();
    const statements = (company as { statements?: unknown }).statements;
    if (!ticker || !Array.isArray(statements)) continue;
    const byPeriod: StatementMaps = new Map();
    for (const statement of statements) {
      const kind = String(
        (statement as { statement?: unknown }).statement ?? "",
      );
      const columns = (statement as { columns?: unknown }).columns;
      const data = (statement as { data?: unknown }).data;
      if (!Array.isArray(columns) || !Array.isArray(data)) continue;
      for (const row of data) {
        if (!Array.isArray(row)) continue;
        const obj: Record<string, unknown> = {};
        columns.forEach((col, i) => {
          obj[String(col)] = row[i];
        });
        const key = `${String(obj["Fiscal Period"])}-${String(obj["Fiscal Year"])}-${String(obj["Report Date"])}`;
        const existing =
          byPeriod.get(key) ?? new Map<string, Record<string, unknown>>();
        existing.set(kind, obj);
        byPeriod.set(key, existing);
      }
    }
    out.set(ticker, byPeriod);
  }
  return out;
}

function statementToRow(
  kinds: Map<string, Record<string, unknown>>,
  key: string,
): FinancialRow | null {
  const pl = kinds.get("PL") ?? {};
  const bs = kinds.get("BS") ?? {};
  const cf = kinds.get("CF") ?? {};
  const derived = kinds.get("DERIVED") ?? {};
  const base = Object.keys(pl).length
    ? pl
    : Object.keys(derived).length
      ? derived
      : bs;
  if (!base["Fiscal Period"]) return null;

  const period = String(base["Fiscal Period"]);
  const reportDate = String(base["Report Date"] ?? "");
  if (!reportDate) return null;

  // Banks (e.g. JPM) report "Net Revenue" rather than "Revenue".
  const revenue = num(pl["Revenue"]) ?? num(pl["Net Revenue"]);
  const grossProfit = num(pl["Gross Profit"]);
  const operatingIncome = num(pl["Operating Income (Loss)"]);
  const netIncome = num(pl["Net Income"]);
  const cfo = num(cf["Cash from Operating Activities"]);
  const capexRaw = num(cf["Acquisition of Fixed Assets & Intangibles"]);
  const capex = capexRaw === null ? null : Math.abs(capexRaw);
  const fcfDerived = num(derived["Free Cash Flow"]);
  const freeCashFlow =
    fcfDerived ?? (cfo !== null && capex !== null ? cfo - capex : null);
  const totalDebtBs =
    num(bs["Short Term Debt"]) !== null || num(bs["Long Term Debt"]) !== null
      ? (num(bs["Short Term Debt"]) ?? 0) + (num(bs["Long Term Debt"]) ?? 0)
      : null;
  const totalDebt = num(derived["Total Debt"]) ?? totalDebtBs;
  const cash = num(bs["Cash, Cash Equivalents & Short Term Investments"]);
  const netDebt = totalDebt !== null && cash !== null ? totalDebt - cash : null;
  const ebitda = num(derived["EBITDA"]);
  const equity = num(bs["Total Equity"]);

  const row: FinancialRow = {
    period,
    fyear: num(base["Fiscal Year"]) ?? 0,
    reportDate,
    publishDate: base["Publish Date"] ? String(base["Publish Date"]) : null,
    ttm: Number(base["TTM"] ?? 0) === 1,
    restated: Number(base["Restated"] ?? 1) === 1,
    revenue,
    grossProfit,
    operatingIncome,
    netIncome,
    epsDiluted: num(derived["Earnings Per Share, Diluted"]),
    epsBasic: num(derived["Earnings Per Share, Basic"]),
    interestExpense: num(pl["Interest Expense"]),
    pretaxIncome: num(pl["Pretax Income (Loss)"]),
    incomeTax: num(pl["Income Tax (Expense) Benefit, net"]),
    rnd: num(pl["Research & Development"]),
    sga: num(pl["Selling, General & Administrative"]),
    cashAndInvestments: cash,
    totalDebt,
    totalEquity: equity,
    totalAssets: num(bs["Total Assets"]),
    inventory: num(bs["Inventories"]),
    receivables: num(bs["Accounts & Notes Receivable"]),
    cfo,
    capex,
    freeCashFlow,
    da: num(cf["Depreciation & Amortization"]),
    sbc: num(cf["Stock-Based Compensation"]),
    dividendsPaid:
      cf["Dividends Paid"] === undefined
        ? null
        : Math.abs(num(cf["Dividends Paid"]) ?? 0),
    buybacks:
      cf["Cash From (Repurchase of) Equity"] === undefined
        ? null
        : Math.abs(num(cf["Cash From (Repurchase of) Equity"]) ?? 0),
    ebitda,
    grossMargin:
      num(derived["Gross Profit Margin"]) ??
      (revenue && grossProfit ? grossProfit / revenue : null),
    operatingMargin:
      num(derived["Operating Margin"]) ??
      (revenue && operatingIncome ? operatingIncome / revenue : null),
    netMargin:
      num(derived["Net Profit Margin"]) ??
      (revenue && netIncome ? netIncome / revenue : null),
    fcfMargin: revenue && freeCashFlow ? freeCashFlow / revenue : null,
    roic: num(derived["Return On Invested Capital"]),
    netDebt,
    netDebtToEbitda: num(derived["Net Debt / EBITDA"]),
    roe: num(derived["Return on Equity"]),
  };
  void key;
  return row;
}

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

type SecFile = {
  ticker: string;
  cik?: string;
  quarterly: SecRow[];
  annual: SecRow[];
  filings?: {
    latest10K?: { url?: string; filed?: string };
  };
};

async function loadSecFile(ticker: string): Promise<SecFile | null> {
  try {
    const raw = await fs.readFile(
      path.join(PROCESSED, ticker, "sec.json"),
      "utf8",
    );
    return JSON.parse(raw) as SecFile;
  } catch {
    return null;
  }
}

function daysBetween(a: string, b: string): number {
  return Math.abs(new Date(a).getTime() - new Date(b).getTime()) / 86_400_000;
}

function finalizeRow(row: FinancialRow): FinancialRow {
  const revenue = row.revenue;
  const netDebt =
    row.totalDebt !== null && row.cashAndInvestments !== null
      ? row.totalDebt - row.cashAndInvestments
      : row.netDebt;
  return {
    ...row,
    grossMargin:
      revenue && row.grossProfit !== null ? row.grossProfit / revenue : null,
    operatingMargin:
      revenue && row.operatingIncome !== null
        ? row.operatingIncome / revenue
        : null,
    netMargin:
      revenue && row.netIncome !== null ? row.netIncome / revenue : null,
    fcfMargin:
      revenue && row.freeCashFlow !== null ? row.freeCashFlow / revenue : null,
    netDebt,
    netDebtToEbitda:
      netDebt !== null && row.ebitda !== null && row.ebitda > 0
        ? netDebt / row.ebitda
        : null,
    roe:
      row.netIncome !== null &&
      row.totalEquity !== null &&
      row.totalEquity !== 0
        ? row.netIncome / row.totalEquity
        : null,
  };
}

/** Overlay SEC-reported flows onto a SimFin row, keeping its balance sheet. */
function applySec(
  base: FinancialRow,
  sec: SecRow,
  period: string,
  fyear: number,
): FinancialRow {
  const operatingIncome = sec.operatingIncome ?? base.operatingIncome;
  const da = sec.da ?? base.da;
  const ebitda =
    operatingIncome !== null && da !== null
      ? operatingIncome + da
      : base.ebitda;
  return finalizeRow({
    ...base,
    period,
    fyear,
    reportDate: sec.end,
    ttm: false,
    revenue: sec.revenue ?? base.revenue,
    grossProfit: sec.grossProfit ?? base.grossProfit,
    operatingIncome,
    netIncome: sec.netIncome ?? base.netIncome,
    epsDiluted: sec.epsDiluted ?? base.epsDiluted,
    cfo: sec.cfo ?? base.cfo,
    capex: sec.capex ?? base.capex,
    freeCashFlow: sec.freeCashFlow ?? base.freeCashFlow,
    da,
    sbc: sec.sbc ?? base.sbc,
    ebitda,
  });
}

/** Strip flow fields while retaining the nearest available balance sheet. */
function blankFlows(base: FinancialRow): FinancialRow {
  return finalizeRow({
    ...base,
    publishDate: null,
    ttm: false,
    revenue: null,
    grossProfit: null,
    operatingIncome: null,
    netIncome: null,
    epsDiluted: null,
    epsBasic: null,
    interestExpense: null,
    pretaxIncome: null,
    incomeTax: null,
    rnd: null,
    sga: null,
    cfo: null,
    capex: null,
    freeCashFlow: null,
    da: null,
    sbc: null,
    dividendsPaid: null,
    buybacks: null,
    ebitda: null,
    roic: null,
  });
}

/**
 * Match SEC periods to SimFin rows by report date (within a week), override
 * the flow fields, and append any SEC quarter/year missing from SimFin.
 */
function mergeSecRows(
  simfinRows: FinancialRow[],
  secRows: SecRow[],
  kind: "quarterly" | "annual",
): FinancialRow[] {
  const rows = [...simfinRows];
  const used = new Set<number>();

  for (const sec of secRows) {
    let bestIdx = -1;
    let bestDiff = Number.POSITIVE_INFINITY;
    rows.forEach((row, idx) => {
      if (used.has(idx)) return;
      const diff = daysBetween(row.reportDate, sec.end);
      if (diff <= 7 && diff < bestDiff) {
        bestDiff = diff;
        bestIdx = idx;
      }
    });

    const fyear =
      kind === "annual"
        ? Number(sec.end.slice(0, 4))
        : (sec.fyear ?? Number(sec.end.slice(0, 4)));

    if (bestIdx >= 0) {
      used.add(bestIdx);
      const period =
        kind === "annual" ? "FY" : (sec.period ?? rows[bestIdx].period);
      rows[bestIdx] = applySec(rows[bestIdx], sec, period, fyear);
    } else {
      const carrier = rows
        .filter((row) => row.reportDate <= sec.end)
        .sort((a, b) => b.reportDate.localeCompare(a.reportDate))[0];
      if (!carrier) continue;
      const period = kind === "annual" ? "FY" : (sec.period ?? "Q?");
      rows.push(applySec(blankFlows(carrier), sec, period, fyear));
    }
  }

  return sortByDate(dedupe(rows));
}

async function main() {
  await fs.mkdir(PROCESSED, { recursive: true });
  await fs.mkdir(PUBLIC_DATA, { recursive: true });

  const tickers = ALL_TICKERS.filter((t) => t !== BENCHMARK_TICKER);
  const research = new Set<string>(RESEARCH_TICKERS);

  console.log(
    `[ingest] ${tickers.length} companies (${RESEARCH_TICKERS.length} research)`,
  );

  // General company info
  const general = new Map<string, GeneralRow>();
  for (const batch of chunk([...tickers], 2)) {
    const payload = await simfinGeneral(batch.map(toSimfin));
    for (const [k, v] of parseGeneral(payload))
      general.set(toApp(k), { ...v, ticker: toApp(k) });
    console.log(`[ingest] general ${batch.length} ok`);
  }

  // Prices: full history for research + benchmark, 3y with ratios for supporting.
  const prices = new Map<string, PricePoint[]>();
  const researchBatches = chunk([...RESEARCH_TICKERS, BENCHMARK_TICKER], BATCH);
  for (const batch of researchBatches) {
    const raw = await simfinPrices(batch.map(toSimfin), {
      start: "2012-01-01",
    });
    for (const [k, v] of parsePrices(raw)) prices.set(toApp(k), v);
    const ratios = await simfinPrices(batch.map(toSimfin), {
      start: "2019-01-01",
      ratios: true,
    });
    for (const [k, v] of parsePrices(ratios)) {
      const appTicker = toApp(k);
      const existing = prices.get(appTicker) ?? [];
      const byDate = new Map(existing.map((p) => [p.d, p]));
      for (const p of v) {
        const prev = byDate.get(p.d);
        byDate.set(
          p.d,
          prev
            ? {
                ...prev,
                ...p,
                o: prev.o,
                h: prev.h,
                l: prev.l,
                c: prev.c,
                a: prev.a,
                v: prev.v,
              }
            : p,
        );
      }
      prices.set(
        appTicker,
        [...byDate.values()].sort((a, b) => a.d.localeCompare(b.d)),
      );
    }
    console.log(`[ingest] prices ${batch.join(",")} ok`);
  }

  const supporting = tickers.filter((t) => !research.has(t));
  for (const batch of chunk(supporting, BATCH)) {
    const raw = await simfinPrices(batch.map(toSimfin), {
      start: "2023-01-01",
      ratios: true,
    });
    for (const [k, v] of parsePrices(raw)) prices.set(toApp(k), v);
    console.log(`[ingest] prices ${batch.join(",")} ok`);
  }

  // Statements
  const quarterly = new Map<string, FinancialRow[]>();
  const annual = new Map<string, FinancialRow[]>();
  const secFiles = new Map<string, SecFile>();

  for (const batch of chunk([...RESEARCH_TICKERS], BATCH)) {
    const payload = await simfinStatements(batch.map(toSimfin), {
      statements: "PL,BS,CF,DERIVED",
      start: "2015-01-01",
      periods: "Q1,Q2,Q3,Q4,FY",
    });
    const parsed = parseStatements(payload);
    for (const [ticker, periods] of parsed) {
      const appTicker = toApp(ticker);
      const rows: FinancialRow[] = [];
      for (const [key, kinds] of periods) {
        const row = statementToRow(kinds, key);
        if (row) rows.push(row);
      }
      const q = rows.filter((r) => /^Q[1-4]$/.test(r.period) && !r.ttm);
      const a = rows.filter((r) => r.period === "FY" && !r.ttm);
      quarterly.set(appTicker, sortByDate(dedupe(q)));
      annual.set(appTicker, sortByDate(dedupe(a)));
    }
    console.log(`[ingest] statements ${batch.join(",")} ok`);
  }

  for (const batch of chunk(supporting, BATCH)) {
    const payload = await simfinStatements(batch.map(toSimfin), {
      statements: "PL,DERIVED",
      start: "2021-01-01",
      periods: "Q1,Q2,Q3,Q4,FY",
    });
    const parsed = parseStatements(payload);
    for (const [ticker, periods] of parsed) {
      const appTicker = toApp(ticker);
      const rows: FinancialRow[] = [];
      for (const [key, kinds] of periods) {
        const row = statementToRow(kinds, key);
        if (row) rows.push(row);
      }
      quarterly.set(
        appTicker,
        sortByDate(
          dedupe(rows.filter((r) => /^Q[1-4]$/.test(r.period) && !r.ttm)),
        ),
      );
      annual.set(
        appTicker,
        sortByDate(dedupe(rows.filter((r) => r.period === "FY" && !r.ttm))),
      );
    }
    console.log(`[ingest] statements ${batch.join(",")} ok`);
  }

  // SEC XBRL flows are the source of truth for the research universe. SimFin's
  // free-tier statements occasionally contain cumulative/duplicated periods.
  for (const ticker of RESEARCH_TICKERS) {
    const sec = await loadSecFile(ticker);
    if (!sec) {
      console.warn(
        `[ingest] no SEC file for ${ticker}; run pnpm ingest:edgar first`,
      );
      continue;
    }
    secFiles.set(ticker, sec);
    quarterly.set(
      ticker,
      mergeSecRows(quarterly.get(ticker) ?? [], sec.quarterly, "quarterly"),
    );
    annual.set(
      ticker,
      mergeSecRows(annual.get(ticker) ?? [], sec.annual, "annual"),
    );
    console.log(`[ingest] merged SEC flows for ${ticker}`);
  }

  // Build ticker data
  const computed: Array<{
    ticker: string;
    data: ReturnType<typeof computeMetrics>;
  }> = [];
  for (const ticker of tickers) {
    const priceSeries = prices.get(ticker) ?? [];
    const q = quarterly.get(ticker) ?? [];
    const a = annual.get(ticker) ?? [];
    computed.push({ ticker, data: computeMetrics(q, a, priceSeries) });
  }

  const researchComputed = computed.filter((x) => research.has(x.ticker));
  const chips = buildFactorChips(
    researchComputed.map((x) => ({
      ticker: x.ticker,
      metrics: x.data.metrics,
    })),
  );

  const universe: UniverseEntry[] = [];
  const now = new Date().toISOString();

  for (const { ticker, data } of computed) {
    const g = general.get(ticker);
    const priceSeries = prices.get(ticker) ?? [];
    const q = quarterly.get(ticker) ?? [];
    const a = annual.get(ticker) ?? [];
    const snapshot = data.snapshot;
    const sector = getSectorGroup(ticker);
    const factorChips = research.has(ticker)
      ? (chips[ticker] ?? [])
      : buildSupportingChips(data.metrics);

    const record = {
      ticker,
      name: g?.name ?? ticker,
      description: g?.companyDescription ?? "",
      sector: g?.sectorName ?? sector?.name ?? "�",
      industry: g?.industryName ?? sector?.name ?? "�",
      employees: g?.numEmployees ?? null,
      isin: g?.isin ?? null,
      cik: secFiles.get(ticker)?.cik ?? null,
      latest10KUrl: secFiles.get(ticker)?.filings?.latest10K?.url ?? null,
      hq: null,
      founded: null,
      website: null,
      currency: "USD",
      isResearch: research.has(ticker),
      latestPrice: {
        close: snapshot.close,
        prevClose: snapshot.prevClose,
        changePct: snapshot.changePct,
        asOf: snapshot.asOf,
        high52: snapshot.high52,
        low52: snapshot.low52,
        marketCap: snapshot.marketCap,
        sharesOutstanding: snapshot.sharesOutstanding,
        dividendYield: snapshot.dividendYield,
      },
      ttm: data.ttm,
      quarterly: q,
      annual: a,
      metrics: data.metrics,
      factorChips,
      multipleHistory: buildMultipleHistory(priceSeries),
      sources: [
        { name: "SimFin", url: "https://simfin.com/", date: snapshot.asOf },
        {
          name: "SEC EDGAR",
          url: "https://www.sec.gov/edgar/search/",
          date: q[q.length - 1]?.publishDate ?? undefined,
        },
      ],
      updatedAt: now,
    };

    const parsed = tickerDataSchema.parse(record);
    await fs.mkdir(path.join(PROCESSED, ticker), { recursive: true });
    await fs.writeFile(
      path.join(PROCESSED, ticker, "data.json"),
      JSON.stringify(parsed, null, 0),
      "utf8",
    );
    await fs.writeFile(
      path.join(PROCESSED, ticker, "prices.json"),
      JSON.stringify(priceSeries),
      "utf8",
    );

    const ranges = buildRangeFiles(priceSeries, ticker);
    const outDir = path.join(PUBLIC_DATA, "prices", ticker);
    await fs.mkdir(outDir, { recursive: true });
    for (const [range, points] of Object.entries(ranges)) {
      await fs.writeFile(
        path.join(outDir, `${range}.json`),
        JSON.stringify(points),
        "utf8",
      );
    }

    universe.push(
      universeEntrySchema.parse({
        ticker,
        name: parsed.name,
        sector: parsed.sector,
        industry: parsed.industry,
        description: parsed.description,
        isResearch: parsed.isResearch,
        price: parsed.latestPrice.close,
        changePct: parsed.latestPrice.changePct,
        marketCap: parsed.latestPrice.marketCap,
        return1y: parsed.metrics.return1y,
        revenueTtm: parsed.metrics.revenueTtm,
        revenueGrowthTtm: parsed.metrics.revenueGrowthTtm,
        operatingMargin: parsed.metrics.operatingMargin,
        pe: parsed.metrics.pe,
        evEbitda: parsed.metrics.evEbitda,
        factorChips: parsed.factorChips,
        asOf: parsed.latestPrice.asOf || null,
      }),
    );
  }

  universe.sort((a, b) => (b.marketCap ?? 0) - (a.marketCap ?? 0));
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

  const searchIndex = universe.map((u) => ({
    ticker: u.ticker,
    name: u.name,
    sector: u.sector,
    industry: u.industry,
    research: u.isResearch,
  }));
  await fs.writeFile(
    path.join(PUBLIC_DATA, "search-index.json"),
    JSON.stringify(searchIndex),
    "utf8",
  );

  const meta = {
    generatedAt: now,
    priceAsOf: universe.reduce<string>(
      (max, u) => (u.asOf && u.asOf > max ? u.asOf : max),
      "",
    ),
    companies: universe.length,
    researchCompanies: RESEARCH_TICKERS.length,
    priceRanges: ["1M", "3M", "6M", "YTD", "1Y", "5Y", "MAX"],
    missingStatements: universe
      .filter((u) => !u.revenueTtm)
      .map((u) => u.ticker),
    notes: [
      "SimFin free-tier income statement data can lag the latest reported quarter for some issuers; SEC/Yahoo are used to cross-check headline figures.",
      "Supporting companies receive PL + DERIVED statements only; no segment or cash-flow detail.",
    ],
  };
  await fs.writeFile(
    path.join(PROCESSED, "meta.json"),
    JSON.stringify(meta, null, 2),
    "utf8",
  );

  console.log(
    `[ingest] wrote ${universe.length} companies; price as of ${meta.priceAsOf}`,
  );
  console.log(
    `[ingest] missing revenue: ${meta.missingStatements.join(", ") || "none"}`,
  );
}

function dedupe(rows: FinancialRow[]): FinancialRow[] {
  const map = new Map<string, FinancialRow>();
  for (const row of rows)
    map.set(`${row.period}-${row.fyear}-${row.reportDate}`, row);
  return [...map.values()];
}

function buildSupportingChips(
  metrics: ReturnType<typeof computeMetrics>["metrics"],
) {
  return [
    {
      key: "growth" as const,
      label: `Growth: ${metrics.revenueGrowthTtm === null ? "n/a" : metrics.revenueGrowthTtm > 0.15 ? "Strong" : metrics.revenueGrowthTtm > 0.05 ? "Moderate" : "Slow"}`,
      tone: "neutral" as const,
      detail: "Revenue growth over the trailing twelve months.",
    },
    {
      key: "profitability" as const,
      label: `Profitability: ${metrics.operatingMargin === null ? "n/a" : metrics.operatingMargin > 0.25 ? "High" : metrics.operatingMargin > 0.1 ? "Average" : "Low"}`,
      tone: "neutral" as const,
      detail: "Operating margin over the trailing twelve months.",
    },
    {
      key: "valuation" as const,
      label: `Valuation: ${metrics.evEbitda === null ? "n/a" : metrics.evEbitda > 20 ? "Above peers" : metrics.evEbitda > 10 ? "In line" : "Below peers"}`,
      tone: "info" as const,
      detail: "EV/EBITDA based descriptive band.",
    },
  ];
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
