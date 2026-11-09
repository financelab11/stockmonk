import type { FactorChip, FinancialRow, PricePoint } from "./schemas";

export const DEFAULT_TAX_RATE = 0.21;

export function num(value: unknown): number | null {
  if (value === null || value === undefined || value === "") return null;
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : null;
}

export function sumNullable(values: Array<number | null | undefined>): number | null {
  const present = values.filter((v): v is number => typeof v === "number" && Number.isFinite(v));
  if (present.length === 0) return null;
  return present.reduce((a, b) => a + b, 0);
}

export function safeDiv(numerator: number | null | undefined, denominator: number | null | undefined): number | null {
  if (numerator === null || numerator === undefined) return null;
  if (denominator === null || denominator === undefined || denominator === 0) return null;
  return numerator / denominator;
}

export function pctChange(current: number | null | undefined, previous: number | null | undefined): number | null {
  if (current === null || current === undefined || previous === null || previous === undefined) return null;
  if (previous === 0) return null;
  return current / previous - 1;
}

export function average(values: Array<number | null | undefined>): number | null {
  const present = values.filter((v): v is number => typeof v === "number" && Number.isFinite(v));
  if (!present.length) return null;
  return present.reduce((a, b) => a + b, 0) / present.length;
}

export function percentileRank(value: number | null, population: Array<number | null>): number | null {
  if (value === null) return null;
  const values = population.filter((v): v is number => typeof v === "number" && Number.isFinite(v)).sort((a, b) => a - b);
  if (values.length < 2) return null;
  const below = values.filter((v) => v < value).length;
  const equal = values.filter((v) => v === value).length;
  return (below + equal * 0.5) / values.length;
}

export function sortByDate<T extends { reportDate: string }>(rows: T[]): T[] {
  return [...rows].sort((a, b) => a.reportDate.localeCompare(b.reportDate));
}

type FlowField =
  | "revenue"
  | "grossProfit"
  | "operatingIncome"
  | "netIncome"
  | "epsDiluted"
  | "epsBasic"
  | "interestExpense"
  | "pretaxIncome"
  | "incomeTax"
  | "rnd"
  | "sga"
  | "cfo"
  | "capex"
  | "freeCashFlow"
  | "da"
  | "sbc"
  | "dividendsPaid"
  | "buybacks"
  | "ebitda";

/** Build a trailing-twelve-month row from the latest four quarterly rows. */
export function computeTtm(quarterly: FinancialRow[]): FinancialRow | null {
  const rows = sortByDate(quarterly).slice(-4);
  if (rows.length < 4) return null;
  const last = rows[rows.length - 1];
  const sum = (field: FlowField) => sumNullable(rows.map((r) => r[field]));

  const revenue = sum("revenue");
  const grossProfit = sum("grossProfit");
  const operatingIncome = sum("operatingIncome");
  const netIncome = sum("netIncome");
  const freeCashFlow = sum("freeCashFlow");
  const ebitda = sum("ebitda");
  const totalDebt = last.totalDebt;
  const cash = last.cashAndInvestments;
  const netDebt = totalDebt !== null && cash !== null ? totalDebt - cash : null;
  const equity = last.totalEquity;
  const investedCapital =
    equity !== null && totalDebt !== null && cash !== null ? equity + totalDebt - cash : null;

  return {
    ...last,
    period: "TTM",
    ttm: true,
    revenue,
    grossProfit,
    operatingIncome,
    netIncome,
    epsDiluted: sum("epsDiluted"),
    epsBasic: sum("epsBasic"),
    interestExpense: sum("interestExpense"),
    pretaxIncome: sum("pretaxIncome"),
    incomeTax: sum("incomeTax"),
    rnd: sum("rnd"),
    sga: sum("sga"),
    cfo: sum("cfo"),
    capex: sum("capex"),
    freeCashFlow,
    da: sum("da"),
    sbc: sum("sbc"),
    dividendsPaid: sum("dividendsPaid"),
    buybacks: sum("buybacks"),
    ebitda,
    grossMargin: safeDiv(grossProfit, revenue),
    operatingMargin: safeDiv(operatingIncome, revenue),
    netMargin: safeDiv(netIncome, revenue),
    fcfMargin: safeDiv(freeCashFlow, revenue),
    roic: investedCapital && investedCapital > 0 && operatingIncome != null
      ? safeDiv(operatingIncome * (1 - DEFAULT_TAX_RATE), investedCapital)
      : null,
    netDebt,
    netDebtToEbitda: netDebt !== null && ebitda !== null && ebitda > 0 ? netDebt / ebitda : null,
    roe: safeDiv(netIncome, equity),
  };
}

export type PriceSnapshot = {
  close: number;
  prevClose: number | null;
  changePct: number | null;
  asOf: string;
  high52: number | null;
  low52: number | null;
  marketCap: number | null;
  sharesOutstanding: number | null;
  dividendYield: number | null;
  pe: number | null;
  evEbitda: number | null;
  evSales: number | null;
  pfcf: number | null;
};

export function latestPriceSnapshot(prices: PricePoint[]): PriceSnapshot {
  const sorted = [...prices].sort((a, b) => a.d.localeCompare(b.d));
  const last = sorted[sorted.length - 1];
  const prev = sorted[sorted.length - 2];
  const oneYearAgo = new Date(new Date(last.d).getTime() - 365 * 86_400_000).toISOString().slice(0, 10);
  const yearWindow = sorted.filter((p) => p.d >= oneYearAgo);
  return {
    close: last.a ?? last.c,
    prevClose: prev ? (prev.a ?? prev.c) : null,
    changePct: prev ? (last.a ?? last.c) / (prev.a ?? prev.c) - 1 : null,
    asOf: last.d,
    high52: yearWindow.length ? Math.max(...yearWindow.map((p) => p.h)) : null,
    low52: yearWindow.length ? Math.min(...yearWindow.map((p) => p.l)) : null,
    marketCap: last.mc ?? null,
    sharesOutstanding: null,
    dividendYield: last.dy ?? null,
    pe: last.pe ?? null,
    evEbitda: last.evEbitda ?? null,
    evSales: last.evSales ?? null,
    pfcf: last.pfcf ?? null,
  };
}

export function returnOverDays(prices: PricePoint[], days: number): number | null {
  const sorted = [...prices].sort((a, b) => a.d.localeCompare(b.d));
  if (sorted.length < 2) return null;
  const last = sorted[sorted.length - 1];
  const cutoff = new Date(new Date(last.d).getTime() - days * 86_400_000).toISOString().slice(0, 10);
  const start = sorted.find((p) => p.d >= cutoff);
  if (!start) return null;
  return (last.a ?? last.c) / (start.a ?? start.c) - 1;
}

export function returnYtd(prices: PricePoint[]): number | null {
  const sorted = [...prices].sort((a, b) => a.d.localeCompare(b.d));
  if (sorted.length < 2) return null;
  const last = sorted[sorted.length - 1];
  const year = last.d.slice(0, 4);
  const start = sorted.find((p) => p.d.startsWith(year));
  if (!start) return null;
  return (last.a ?? last.c) / (start.a ?? start.c) - 1;
}

export type Metrics = {
  revenueTtm: number | null;
  revenueGrowthTtm: number | null;
  revenueGrowthLatestQ: number | null;
  epsTtm: number | null;
  epsGrowthTtm: number | null;
  grossMargin: number | null;
  operatingMargin: number | null;
  netMargin: number | null;
  fcfMargin: number | null;
  roic: number | null;
  roe: number | null;
  netDebt: number | null;
  netDebtToEbitda: number | null;
  interestCover: number | null;
  freeCashFlowTtm: number | null;
  ebitdaTtm: number | null;
  pe: number | null;
  evEbitda: number | null;
  evSales: number | null;
  pfcf: number | null;
  fcfYield: number | null;
  return1y: number | null;
  returnYtd: number | null;
  return5y: number | null;
};

export function computeMetrics(
  quarterly: FinancialRow[],
  annual: FinancialRow[],
  prices: PricePoint[],
): { ttm: FinancialRow | null; metrics: Metrics; snapshot: PriceSnapshot } {
  const sorted = sortByDate(quarterly);
  const ttm = computeTtm(sorted);
  const prevTtm = sorted.length >= 8 ? computeTtm(sorted.slice(0, -4)) : null;
  const snapshot = prices.length ? latestPriceSnapshot(prices) : emptySnapshot();

  const latestQ = sorted[sorted.length - 1];
  const yearAgoQ = sorted.length >= 5 ? sorted[sorted.length - 5] : null;

  const latestAnnual = sortByDate(annual).slice(-1)[0];
  const revenueTtm = ttm?.revenue ?? latestAnnual?.revenue ?? null;
  const revenueGrowthTtm =
    ttm && prevTtm ? pctChange(ttm.revenue, prevTtm.revenue) : pctChange(latestAnnual?.revenue, sortByDate(annual).slice(-2)[0]?.revenue);
  const revenueGrowthLatestQ = latestQ && yearAgoQ ? pctChange(latestQ.revenue, yearAgoQ.revenue) : null;
  const epsTtm = ttm?.epsDiluted ?? latestAnnual?.epsDiluted ?? null;
  const epsGrowthTtm =
    ttm && prevTtm ? pctChange(ttm.epsDiluted, prevTtm.epsDiluted) : pctChange(latestAnnual?.epsDiluted, sortByDate(annual).slice(-2)[0]?.epsDiluted);

  const marketCap = snapshot.marketCap;
  const netDebt = ttm?.netDebt ?? latestAnnual?.netDebt ?? null;
  const ev = marketCap !== null && netDebt !== null ? marketCap + netDebt : marketCap;
  const ebitdaTtm = ttm?.ebitda ?? latestAnnual?.ebitda ?? null;
  const freeCashFlowTtm = ttm?.freeCashFlow ?? latestAnnual?.freeCashFlow ?? null;
  const netIncomeTtm = ttm?.netIncome ?? latestAnnual?.netIncome ?? null;

  const pe = marketCap !== null && netIncomeTtm !== null && netIncomeTtm > 0 ? marketCap / netIncomeTtm : snapshot.pe;
  const evEbitda = ev !== null && ebitdaTtm !== null && ebitdaTtm > 0 ? ev / ebitdaTtm : snapshot.evEbitda;
  const evSales = ev !== null && revenueTtm !== null && revenueTtm > 0 ? ev / revenueTtm : snapshot.evSales;
  const pfcf = marketCap !== null && freeCashFlowTtm !== null && freeCashFlowTtm > 0 ? marketCap / freeCashFlowTtm : snapshot.pfcf;

  return {
    ttm,
    snapshot,
    metrics: {
      revenueTtm,
      revenueGrowthTtm,
      revenueGrowthLatestQ,
      epsTtm,
      epsGrowthTtm,
      grossMargin: ttm?.grossMargin ?? latestAnnual?.grossMargin ?? null,
      operatingMargin: ttm?.operatingMargin ?? latestAnnual?.operatingMargin ?? null,
      netMargin: ttm?.netMargin ?? latestAnnual?.netMargin ?? null,
      fcfMargin: ttm?.fcfMargin ?? latestAnnual?.fcfMargin ?? null,
      roic: ttm?.roic ?? latestAnnual?.roic ?? null,
      roe: ttm?.roe ?? latestAnnual?.roe ?? null,
      netDebt,
      netDebtToEbitda: ttm?.netDebtToEbitda ?? latestAnnual?.netDebtToEbitda ?? null,
      interestCover:
        ttm?.operatingIncome !== null && ttm?.operatingIncome !== undefined && ttm?.interestExpense
          ? ttm.operatingIncome / Math.abs(ttm.interestExpense)
          : null,
      freeCashFlowTtm,
      ebitdaTtm,
      pe,
      evEbitda,
      evSales,
      pfcf,
      fcfYield: marketCap !== null && freeCashFlowTtm !== null && marketCap > 0 ? freeCashFlowTtm / marketCap : null,
      return1y: returnOverDays(prices, 365),
      returnYtd: returnYtd(prices),
      return5y: returnOverDays(prices, 1825),
    },
  };
}

function emptySnapshot(): PriceSnapshot {
  return {
    close: 0,
    prevClose: null,
    changePct: null,
    asOf: "",
    high52: null,
    low52: null,
    marketCap: null,
    sharesOutstanding: null,
    dividendYield: null,
    pe: null,
    evEbitda: null,
    evSales: null,
    pfcf: null,
  };
}

export type ChipInput = {
  ticker: string;
  metrics: Metrics;
  currency?: string;
};

/** Percentile scores across the covered research universe. */
export function buildFactorChips(
  all: ChipInput[],
  currency = "USD",
): Record<string, FactorChip[]> {
  const growthPop = all.map((x) => {
    const vals = [x.metrics.revenueGrowthTtm, x.metrics.epsGrowthTtm].filter((v): v is number => v !== null);
    return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null;
  });
  const profitPop = all.map((x) => {
    const direct = [x.metrics.operatingMargin, x.metrics.roic].filter((v): v is number => v !== null);
    if (direct.length) return direct.reduce((a, b) => a + b, 0) / direct.length;
    // Banks and insurers do not report an operating margin or ROIC; use the
    // return and margin measures that are meaningful for financials.
    const fallback = [x.metrics.roe, x.metrics.netMargin].filter((v): v is number => v !== null);
    return fallback.length ? fallback.reduce((a, b) => a + b, 0) / fallback.length : null;
  });
  const cashPop = all.map((x) => x.metrics.fcfMargin);
  const valuationPop = all.map((x) => (x.metrics.evEbitda !== null ? -x.metrics.evEbitda : null));

  const out: Record<string, FactorChip[]> = {};

  all.forEach((item, index) => {
    const chips: FactorChip[] = [];
    const growth = percentileRank(growthPop[index], growthPop);
    const profit = percentileRank(profitPop[index], profitPop);
    const cash = percentileRank(cashPop[index], cashPop);
    const valuation = percentileRank(valuationPop[index], valuationPop);

    chips.push({
      key: "growth",
      label: `Growth: ${tier(growth, "Strong", "Moderate", "Slow")}`,
      tone: toneFor(growth),
      detail: growth === null ? "Not enough comparable data." : `${Math.round(growth * 100)}th percentile revenue/EPS growth in the covered universe.`,
    });
    chips.push({
      key: "profitability",
      label: `Profitability: ${tier(profit, "High", "Average", "Low")}`,
      tone: toneFor(profit),
      detail: profit === null ? "Not enough comparable data." : `${Math.round(profit * 100)}th percentile profitability metrics in the covered universe.`,
    });
    chips.push({
      key: "cash",
      label: `Cash generation: ${tier(cash, "High", "Average", "Low")}`,
      tone: toneFor(cash),
      detail: cash === null ? "Not enough comparable data." : `${Math.round(cash * 100)}th percentile free-cash-flow margin.`,
    });

    const nd = item.metrics.netDebt;
    const ndEbitda = item.metrics.netDebtToEbitda;
    let balanceLabel = "Balance sheet: Not rated";
    let balanceTone: FactorChip["tone"] = "neutral";
    if (nd !== null && nd < 0) {
      balanceLabel = "Balance sheet: Net cash";
      balanceTone = "positive";
    } else if (ndEbitda !== null) {
      if (ndEbitda < 1.5) {
        balanceLabel = "Balance sheet: Low leverage";
        balanceTone = "positive";
      } else if (ndEbitda < 3) {
        balanceLabel = "Balance sheet: Moderate leverage";
        balanceTone = "neutral";
      } else {
        balanceLabel = "Balance sheet: High leverage";
        balanceTone = "caution";
      }
    }
    chips.push({
      key: "balance",
      label: balanceLabel,
      tone: balanceTone,
      detail:
        nd === null
          ? "Debt data unavailable."
          : nd < 0
            ? `Net cash of ${formatCompact(-nd, item.currency ?? currency)}.`
            : `Net debt of ${formatCompact(nd, currency)}${ndEbitda !== null ? `, ${ndEbitda.toFixed(1)}× EBITDA` : ""}.`,
    });

    chips.push({
      key: "valuation",
      label: `Valuation: ${tier(valuation, "Above peers", "In line", "Below peers")}`,
      tone: "info",
      detail:
        valuation === null
          ? "Valuation multiple unavailable."
          : `${Math.round(valuation * 100)}th percentile cheapness on EV/EBITDA within the covered universe.`,
    });

    out[item.ticker] = chips;
  });

  return out;
}

function tier(value: number | null, high: string, mid: string, low: string): string {
  if (value === null) return "n/a";
  if (value >= 0.67) return high;
  if (value >= 0.34) return mid;
  return low;
}

function toneFor(value: number | null): FactorChip["tone"] {
  if (value === null) return "neutral";
  if (value >= 0.67) return "positive";
  if (value >= 0.34) return "neutral";
  return "caution";
}

export function formatCompact(
  value: number | null | undefined,
  currency = "USD",
): string {
  if (value === null || value === undefined) return "—";
  const abs = Math.abs(value);
  const symbol = currency === "INR" ? "₹" : "$";
  if (currency === "INR") {
    if (abs >= 1e9) return `${symbol}${(value / 1e9).toFixed(1)}B`;
    if (abs >= 1e7) return `${symbol}${(value / 1e7).toFixed(1)} Cr`;
    if (abs >= 1e5) return `${symbol}${(value / 1e5).toFixed(1)} L`;
    return `${symbol}${value.toFixed(0)}`;
  }
  if (abs >= 1e12) return `${symbol}${(value / 1e12).toFixed(1)}T`;
  if (abs >= 1e9) return `${symbol}${(value / 1e9).toFixed(1)}B`;
  if (abs >= 1e6) return `${symbol}${(value / 1e6).toFixed(1)}M`;
  return `${symbol}${value.toFixed(0)}`;
}

/** Keep at most `maxPoints` samples while always retaining the latest point. */
export function downsample<T>(items: T[], maxPoints: number): T[] {
  if (items.length <= maxPoints) return items;
  const step = (items.length - 1) / (maxPoints - 1);
  const out: T[] = [];
  for (let i = 0; i < maxPoints; i++) out.push(items[Math.round(i * step)]);
  return out;
}

export function buildMultipleHistory(prices: PricePoint[], years = 5) {
  const sorted = [...prices].sort((a, b) => a.d.localeCompare(b.d));
  const cutoff = sorted.length ? new Date(new Date(sorted[sorted.length - 1].d).getTime() - years * 365 * 86_400_000).toISOString().slice(0, 10) : "";
  const window = sorted.filter((p) => p.d >= cutoff);
  const monthly: PricePoint[] = [];
  let lastMonth = "";
  for (const p of window) {
    const month = p.d.slice(0, 7);
    if (month !== lastMonth) {
      monthly.push(p);
      lastMonth = month;
    }
  }
  return monthly.map((p) => ({
    date: p.d,
    pe: p.pe ?? null,
    evEbitda: p.evEbitda ?? null,
    evSales: p.evSales ?? null,
    pfcf: p.pfcf ?? null,
  }));
}

export function buildRangeFiles(prices: PricePoint[], ticker: string): Record<string, Array<{ t: number; o: number; h: number; l: number; c: number; v: number }>> {
  const sorted = [...prices].sort((a, b) => a.d.localeCompare(b.d));
  if (!sorted.length) return {};
  const last = sorted[sorted.length - 1];
  const lastDate = new Date(last.d);
  const ranges: Record<string, number> = {
    "1M": 31,
    "3M": 92,
    "6M": 183,
    "1Y": 366,
    "5Y": 1826,
    MAX: 100_000,
  };
  const out: Record<string, Array<{ t: number; o: number; h: number; l: number; c: number; v: number }>> = {};
  for (const [label, days] of Object.entries(ranges)) {
    const cutoff = new Date(lastDate.getTime() - days * 86_400_000).toISOString().slice(0, 10);
    const window = days === 100_000 ? sorted : sorted.filter((p) => p.d >= cutoff);
    const sampled = downsample(window, 600);
    out[label] = sampled.map((p) => ({
      t: Math.floor(new Date(`${p.d}T00:00:00Z`).getTime() / 1000),
      o: p.o,
      h: p.h,
      l: p.l,
      c: p.c,
      v: p.v,
    }));
  }
  const yearStart = `${last.d.slice(0, 4)}-01-01`;
  const ytd = downsample(sorted.filter((p) => p.d >= yearStart), 600);
  out.YTD = ytd.map((p) => ({
    t: Math.floor(new Date(`${p.d}T00:00:00Z`).getTime() / 1000),
    o: p.o,
    h: p.h,
    l: p.l,
    c: p.c,
    v: p.v,
  }));
  void ticker;
  return out;
}
