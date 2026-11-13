/**
 * Builds the committed forward-growth dataset from cached raw ingestion.
 *
 * Inputs:
 *  - data/growth-ranker/refinitiv-top.json (universe + LSEG forward growth)
 *  - data/growth-ranker/raw/*.json (Screener + Yahoo responses)
 *
 * Output:
 *  - data/growth-ranker/estimates.json
 */
import fs from "node:fs";
import path from "node:path";
import { forecastResultSchema, type ForecastResult } from "../lib/growth-ranker/types";
import type { ScreenerData } from "../lib/screener";
import type { YahooQuoteSummary } from "../lib/yahoo";

type RefRow = {
  ric: string;
  name: string;
  sector: string;
  industry: string;
  marketCapMInr: number;
  forwardRevenueGrowth: number | null;
};

type Raw = {
  refinitiv: RefRow;
  symbol: string;
  stem: string;
  fetchedAt: string;
  screener: ScreenerData | null;
  summary: YahooQuoteSummary | null;
};

const ROOT = path.join(process.cwd(), "data", "growth-ranker");
const RAW = path.join(ROOT, "raw");
const CRORE = 1e7;
const FADE = 0.85;
const BANDS: Record<string, [number, number, number]> = {
  CONSENSUS: [0.05, 0.07, 0.09],
  CONSENSUS_PLUS_ANALYST_EXTENSION: [0.08, 0.11, 0.14],
  BESPOKE_FORWARD: [0.12, 0.15, 0.18],
  BESPOKE_PEER: [0.12, 0.15, 0.18],
};

function rawNumber(value: { raw?: number } | number | null | undefined): number | null {
  if (value == null) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  return typeof value.raw === "number" && Number.isFinite(value.raw) ? value.raw : null;
}

function fiscalYear(endDate: string): number {
  return Number(endDate.slice(0, 4));
}

function ratio(numerator: number | null, denominator: number | null): number | null {
  if (numerator == null || denominator == null || denominator <= 0) return null;
  return numerator / denominator;
}

function pctChange(current: number | null, previous: number | null): number | null {
  if (current == null || previous == null || previous <= 0) return null;
  return current / previous - 1;
}

function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

type Draft = {
  raw: Raw;
  base: {
    year: number;
    endDate: string;
    revenue: number;
    ebit: number;
    ebitAvailable: boolean;
    netIncome: number | null;
    equity: number | null;
    debt: number | null;
    cash: number | null;
    fcf: number | null;
    depreciation: number | null;
  };
  history: Array<{ label: string; periodEnd: string; revenue: number; growth: number | null }>;
  consensusYears: Array<{
    label: string;
    periodEnd: string;
    revenue: number | null;
    revenueHigh: number | null;
    revenueLow: number | null;
    analystCount: number | null;
  }>;
  fy1Growth: number | null;
  method: ForecastResult["method"] | null;
  projectionValues: { fy1: number; fy2: number; fy3: number } | null;
  sources: { fy1: boolean; fy2: boolean; fy3: boolean };
};

function loadRaws(): Raw[] {
  const files = fs.readdirSync(RAW).filter((file) => file.endsWith(".json"));
  const bySymbol = new Map<string, Raw>();
  for (const file of files) {
    const raw = JSON.parse(fs.readFileSync(path.join(RAW, file), "utf8")) as Raw;
    if (!raw.screener?.annual?.length) continue;
    const existing = bySymbol.get(raw.symbol);
    const cap = raw.summary?.price?.marketCap?.raw ?? raw.refinitiv.marketCapMInr * 1e6;
    const existingCap =
      existing?.summary?.price?.marketCap?.raw ??
      (existing ? existing.refinitiv.marketCapMInr * 1e6 : 0);
    if (!existing || cap > existingCap) bySymbol.set(raw.symbol, raw);
  }
  return [...bySymbol.values()];
}

function buildDraft(raw: Raw): Draft | null {
  const annual = raw.screener?.annual ?? [];
  const yahooStatements = (
    raw.summary?.incomeStatementHistory?.incomeStatementHistory ?? []
  )
    .filter((item) => item.endDate?.fmt && item.totalRevenue?.raw)
    .sort((a, b) => String(a.endDate?.fmt).localeCompare(String(b.endDate?.fmt)));
  const today = new Date().toISOString().slice(0, 10);
  const yahooLatest = yahooStatements
    .filter((item) => String(item.endDate?.fmt) <= today)
    .at(-1);
  const latest = annual.at(-1);
  const isFinancial = raw.refinitiv.sector === "Financials";
  const consolidated = Boolean(raw.screener?.sourceUrl?.includes("consolidated"));
  const useScreenerBase = !isFinancial && consolidated && latest != null;
  const screenerRevenue = latest?.sales != null ? latest.sales * CRORE : null;
  const yahooRevenue = rawNumber(yahooLatest?.totalRevenue);
  const revenue = useScreenerBase ? screenerRevenue : yahooRevenue ?? screenerRevenue;
  if (!revenue || revenue <= 0) return null;

  const baseEndDate = useScreenerBase
    ? latest!.endDate
    : yahooLatest?.endDate?.fmt ?? latest?.endDate;
  const baseYear = baseEndDate ? fiscalYear(baseEndDate) : null;
  if (!baseEndDate || !baseYear) return null;

  const screenerEbit =
    latest?.operatingProfit != null ? latest.operatingProfit * CRORE : null;
  const yahooEbit = rawNumber(yahooLatest?.operatingIncome);
  const ebit = useScreenerBase
    ? screenerEbit ?? 0
    : yahooEbit && yahooEbit > 0
      ? yahooEbit
      : 0;
  const ebitAvailable = ebit > 0;
  const netIncome = useScreenerBase
    ? latest?.netProfit != null
      ? latest.netProfit * CRORE
      : null
    : rawNumber(yahooLatest?.netIncome) ??
      (latest?.netProfit != null ? latest.netProfit * CRORE : null);

  const base = {
    year: baseYear,
    endDate: baseEndDate,
    revenue,
    ebit,
    ebitAvailable,
    netIncome,
    equity:
      consolidated && raw.screener?.balance?.length
        ? ((raw.screener.balance.at(-1)?.equityCapital ?? 0) +
            (raw.screener.balance.at(-1)?.reserves ?? 0)) *
          CRORE
        : null,
    debt:
      rawNumber(raw.summary?.financialData?.totalDebt) ??
      (useScreenerBase && raw.screener?.balance?.at(-1)?.borrowings != null
        ? raw.screener.balance.at(-1)!.borrowings! * CRORE
        : null),
    cash: rawNumber(raw.summary?.financialData?.totalCash),
    fcf:
      rawNumber(raw.summary?.financialData?.freeCashflow) ??
      (useScreenerBase && raw.screener?.cash?.at(-1)?.fcf != null
        ? raw.screener.cash.at(-1)!.fcf! * CRORE
        : null),
    depreciation:
      useScreenerBase && latest?.depreciation != null
        ? latest.depreciation * CRORE
        : null,
  };

  const history = (() => {
    if (useScreenerBase && annual.length) {
      const window = annual.slice(-5);
      return window.map((item, index) => {
        const previous = window[index - 1];
        return {
          label: `FY${item.year}`,
          periodEnd: item.endDate,
          revenue: (item.sales ?? 0) * CRORE,
          growth: pctChange(item.sales ?? null, previous?.sales ?? null),
        };
      });
    }
    const window = yahooStatements.slice(-5);
    const points = window.map((item, index) => {
      const previous = window[index - 1];
      const itemRevenue = rawNumber(item.totalRevenue) ?? 0;
      return {
        label: `FY${fiscalYear(String(item.endDate?.fmt))}`,
        periodEnd: String(item.endDate?.fmt),
        revenue: itemRevenue,
        growth: pctChange(itemRevenue, rawNumber(previous?.totalRevenue)),
      };
    });
    return points.length
      ? points
      : [
          {
            label: `FY${baseYear}`,
            periodEnd: baseEndDate,
            revenue,
            growth: null,
          },
        ];
  })();

  const trend = raw.summary?.earningsTrend?.trend ?? [];
  const consensusYears = trend
    .filter(
      (item) =>
        (item.period === "0y" || item.period === "+1y") &&
        item.endDate &&
        item.revenueEstimate?.avg?.raw != null,
    )
    .map((item) => {
      const endDate = String(item.endDate);
      const offset = fiscalYear(endDate) - base.year;
      if (offset < 1 || offset > 3) return null;
      return {
        offset,
        year: {
          label: `FY${fiscalYear(endDate)}`,
          periodEnd: endDate,
          revenue: item.revenueEstimate?.avg?.raw ?? null,
          revenueHigh: null,
          revenueLow: null,
          analystCount: item.revenueEstimate?.numberOfAnalysts?.raw ?? null,
        },
      };
    })
    .filter((item): item is NonNullable<typeof item> => item != null)
    .sort((a, b) => a.offset - b.offset)
    .map((item) => item.year);

  const fy1 = consensusYears[0]?.revenue ?? null;
  const fy2 = consensusYears[1]?.revenue ?? null;
  const fy1Growth = fy1 != null ? fy1 / base.revenue - 1 : null;
  const fy2Growth = fy1 != null && fy2 != null ? fy2 / fy1 - 1 : null;

  const validFy1 =
    fy1 != null && fy1Growth != null && fy1Growth <= 1.0 && fy1Growth >= -0.4;
  const validFy2 =
    validFy1 &&
    fy2 != null &&
    fy2Growth != null &&
    fy2Growth <= 0.7 &&
    fy2Growth >= -0.4;
  const cleanedYears = consensusYears.filter((_, index) =>
    index === 0 ? validFy1 : index === 1 ? validFy2 : false,
  );

  let method: Draft["method"] = null;
  let projectionValues: Draft["projectionValues"] = null;
  const sources = { fy1: false, fy2: false, fy3: false };

  if (validFy1 && fy1 != null) {
    const first = fy1;
    let second: number;
    let third: number;
    if (validFy2 && fy2 != null) {
      second = fy2;
      third = second * (1 + (fy2Growth ?? 0) * FADE);
      sources.fy2 = true;
      sources.fy3 = false;
    } else {
      const growth = fy1Growth ?? 0;
      second = first * (1 + growth * 0.9);
      third = second * (1 + growth * 0.8);
    }
    sources.fy1 = true;
    projectionValues = { fy1: first, fy2: second, fy3: third };
    method = "CONSENSUS_PLUS_ANALYST_EXTENSION";
  }

  return {
    raw,
    base,
    history,
    consensusYears: cleanedYears,
    fy1Growth: validFy1 ? fy1Growth : null,
    method,
    projectionValues,
    sources,
  };
}

function attachBespoke(draft: Draft, peerGrowth: number | null): void {
  if (draft.projectionValues) return;
  const refGrowth = draft.raw.refinitiv.forwardRevenueGrowth;
  const growth =
    refGrowth != null && refGrowth > -0.5 && refGrowth < 1.5
      ? refGrowth
      : peerGrowth;
  if (growth == null) return;
  const first = draft.base.revenue * (1 + growth);
  const second = first * (1 + growth * 0.9);
  const third = second * (1 + growth * 0.8);
  draft.projectionValues = { fy1: first, fy2: second, fy3: third };
  draft.fy1Growth = growth;
  draft.method = refGrowth != null ? "BESPOKE_FORWARD" : "BESPOKE_PEER";
}

function buildResult(draft: Draft): ForecastResult | null {
  if (!draft.projectionValues || !draft.method) return null;
  const { base } = draft;
  const values = draft.projectionValues;
  if (values.fy1 <= 0 || values.fy2 <= 0 || values.fy3 <= 0) return null;

  const periods = [1, 2, 3].map((offset) => {
    const endDate = `${base.year + offset}-${base.endDate.slice(5)}`;
    return { offset, label: `FY${base.year + offset}`, periodEnd: endDate };
  });
  const band = BANDS[draft.method] ?? BANDS.BESPOKE_FORWARD;
  const valueList = [values.fy1, values.fy2, values.fy3];
  const projections = periods.map((period, index) => {
    const value = valueList[index];
    const fromConsensus =
      draft.method === "CONSENSUS_PLUS_ANALYST_EXTENSION" &&
      ((period.offset === 1 && draft.sources.fy1) ||
        (period.offset === 2 && draft.sources.fy2));
    return {
      label: period.label,
      periodEnd: period.periodEnd,
      base: value,
      bear: value * (1 - band[index]),
      bull: value * (1 + band[index]),
      source: fromConsensus
        ? ("CONSENSUS" as const)
        : draft.method === "CONSENSUS_PLUS_ANALYST_EXTENSION"
          ? ("ANALYST_EXTENSION" as const)
          : ("ANALYST_MODEL" as const),
      analystCount: draft.consensusYears[0]?.analystCount ?? null,
    };
  });

  const cagrBase = Math.pow(values.fy3 / base.revenue, 1 / 3) - 1;
  if (!Number.isFinite(cagrBase)) return null;

  const summary = draft.raw.summary;
  const stats = summary?.defaultKeyStatistics as
    | (NonNullable<YahooQuoteSummary["defaultKeyStatistics"]> & {
        enterpriseValue?: { raw?: number };
        enterpriseToEbitda?: { raw?: number };
        pegRatio?: { raw?: number };
      })
    | undefined;
  const price = rawNumber(summary?.price?.regularMarketPrice);
  const marketCap =
    rawNumber(summary?.price?.marketCap) ??
    rawNumber(summary?.summaryDetail?.marketCap) ??
    draft.raw.refinitiv.marketCapMInr * 1e6;
  const epsGrowth =
    rawNumber(
      summary?.earningsTrend?.trend?.find((t) => t.period === "+1y")?.earningsEstimate?.growth,
    ) ?? cagrBase;
  const trailingPe =
    rawNumber(summary?.summaryDetail?.trailingPE) ??
    (base.netIncome && base.netIncome > 0 ? marketCap / base.netIncome : null);
  const forwardPe =
    rawNumber(summary?.summaryDetail?.forwardPE) ??
    (base.netIncome && base.netIncome > 0 && values.fy1 > 0
      ? marketCap / (values.fy1 * (base.netIncome / base.revenue))
      : null);
  const ebitda =
    rawNumber(summary?.financialData?.ebitda) ??
    (base.ebitAvailable && base.ebit + (base.depreciation ?? 0) > 0
      ? base.ebit + (base.depreciation ?? 0)
      : null);
  const enterpriseValue =
    rawNumber(stats?.enterpriseValue) ??
    (marketCap + (base.debt ?? 0) - (base.cash ?? 0));
  const evEbitda =
    rawNumber(stats?.enterpriseToEbitda) ??
    (ebitda && ebitda > 0 ? enterpriseValue / ebitda : null);
  const peg =
    rawNumber(stats?.pegRatio) ??
    (trailingPe && epsGrowth > 0 ? trailingPe / (epsGrowth * 100) : null);
  const freeCashFlow =
    base.fcf ?? rawNumber(summary?.financialData?.freeCashflow);
  const pFcf =
    freeCashFlow && freeCashFlow > 0 ? marketCap / freeCashFlow : null;
  const roce =
    draft.raw.screener?.ratios?.at(-1)?.roce != null
      ? draft.raw.screener.ratios.at(-1)!.roce! / 100
      : base.ebitAvailable &&
          base.ebit > 0 &&
          base.equity != null &&
          base.debt != null &&
          base.cash != null &&
          base.equity + base.debt - base.cash > 0
        ? base.ebit / (base.equity + base.debt - base.cash)
        : null;
  const roe =
    rawNumber(summary?.financialData?.returnOnEquity) ??
    ratio(base.netIncome, base.equity);
  const ebitMargin = base.ebitAvailable ? ratio(base.ebit, base.revenue) : null;
  const yahooStatements =
    draft.raw.summary?.incomeStatementHistory?.incomeStatementHistory ?? [];
  const yahooSorted = yahooStatements
    .filter((item) => item.endDate?.fmt && item.operatingIncome?.raw)
    .sort((a, b) => String(a.endDate?.fmt).localeCompare(String(b.endDate?.fmt)));
  const yahooCurrentEbit = rawNumber(yahooSorted.at(-1)?.operatingIncome);
  const yahooPreviousEbit = rawNumber(yahooSorted.at(-2)?.operatingIncome);
  const previous = draft.raw.screener?.annual?.at(-2);
  const previousEbit = (previous?.operatingProfit ?? 0) * CRORE;
  const ebitGrowth = base.ebitAvailable
    ? yahooCurrentEbit && yahooPreviousEbit && yahooPreviousEbit > 0
      ? yahooCurrentEbit / yahooPreviousEbit - 1
      : pctChange(base.ebit, previousEbit)
    : null;
  const previousRevenue = draft.history.at(-2)?.revenue ?? null;
  const revenueGrowth = pctChange(base.revenue, previousRevenue);
  const operatingLeverage =
    ebitGrowth != null && revenueGrowth != null && Math.abs(revenueGrowth) > 0.001
      ? ebitGrowth / revenueGrowth
      : null;

  const analystCount =
    draft.consensusYears
      .map((year) => year.analystCount ?? 0)
      .sort((a, b) => b - a)[0] ?? null;
  const consensusAvailable = draft.consensusYears.length > 0;
  const difference = null;

  const fy3Label = projections[2].label;
  const evidence = [
    {
      kind: "annual_report" as const,
      title: "Screener.in annual statements",
      url: `https://www.screener.in/company/${draft.raw.stem}/consolidated/`,
      date: base.endDate,
      fetchedAt: draft.raw.fetchedAt,
      available: true,
      note: "Reported revenue, EBIT, balance sheet and cash-flow series.",
    },
    {
      kind: "quarterly_results" as const,
      title: "Screener.in quarterly results",
      url: `https://www.screener.in/company/${draft.raw.stem}/`,
      date: base.endDate,
      fetchedAt: draft.raw.fetchedAt,
      available: true,
      note: "Latest quarterly trend used for the reported context.",
    },
    {
      kind: "earnings_call" as const,
      title: "Earnings call transcripts",
      url: null,
      date: null,
      fetchedAt: draft.raw.fetchedAt,
      available: false,
      note: "Transcript ingestion is not configured for this batch.",
    },
    {
      kind: "guidance" as const,
      title: "Management guidance",
      url: null,
      date: null,
      fetchedAt: draft.raw.fetchedAt,
      available: false,
      note: "No machine-readable guidance source; forecasts use consensus or forward growth evidence.",
    },
    {
      kind: "consensus" as const,
      title: "Yahoo Finance consensus",
      url: `https://finance.yahoo.com/quote/${draft.raw.symbol}/analysis/`,
      date: new Date().toISOString().slice(0, 10),
      fetchedAt: draft.raw.fetchedAt,
      available: consensusAvailable,
      note: consensusAvailable
        ? `${analystCount ?? "n/a"} analysts; FY+1/FY+2 revenue means.`
        : "No usable consensus record; bespoke forward estimate used.",
    },
    {
      kind: "market_data" as const,
      title: "Yahoo Finance quote and valuation",
      url: `https://finance.yahoo.com/quote/${draft.raw.symbol}/`,
      date: new Date().toISOString().slice(0, 10),
      fetchedAt: draft.raw.fetchedAt,
      available: price != null,
      note: "Price, market cap, trailing/forward multiples and free cash flow.",
    },
  ];

  const assumptions =
    draft.method === "CONSENSUS_PLUS_ANALYST_EXTENSION"
      ? [
          "FY+1 and FY+2 use Yahoo Finance consensus revenue means.",
          `FY+3 extends the consensus-implied growth, faded ${Math.round((1 - FADE) * 100)}%.`,
          "Reported historical growth is excluded from every projection input.",
        ]
      : draft.method === "BESPOKE_FORWARD"
        ? [
            "No usable consensus; FY+1 uses LSEG SmartEstimate forward revenue growth from the Refinitiv workbook.",
            "FY+2 and FY+3 fade that forward growth rather than extrapolating reported history.",
            "Reported historical growth is excluded from every projection input.",
          ]
        : [
            "No usable consensus or company forward-growth estimate; uses the median forward growth of consensus-covered peers in the same GICS sector.",
            "Capex and margin context are used only as quality checks, not to extrapolate history.",
            "Reported historical growth is excluded from every projection input.",
          ];

  const risks = [
    "Consensus data can lag company guidance and may change without notice.",
    "Revenue projections are not forecasts of profit, cash flow or share price.",
    draft.method === "BESPOKE_PEER"
      ? "The peer-growth prior is an estimate, not company guidance."
      : "The extension assumes forward growth fades gradually; a sharp cycle turn would invalidate it.",
  ];

  const confidence =
    consensusAvailable && (analystCount ?? 0) >= 5
      ? "high"
      : consensusAvailable || draft.method === "BESPOKE_FORWARD"
        ? "medium"
        : "low";

  return {
    company_id: draft.raw.symbol,
    ticker: draft.raw.symbol.replace(/\.(NS|BO)$/i, ""),
    name: draft.raw.refinitiv.name,
    sector: draft.raw.refinitiv.sector,
    fiscal_year_end: base.endDate,
    market_cap: {
      value: marketCap,
      currency: "INR",
      asOf: new Date().toISOString().slice(0, 10),
      source: "Yahoo Finance / Refinitiv",
    },
    base_year: {
      label: `FY${base.year}`,
      endDate: base.endDate,
      revenue: base.revenue,
      currency: "INR",
      unit: "INR",
    },
    projections: { FY1: projections[0], FY2: projections[1], FY3: projections[2] },
    cagr_3y: {
      base: cagrBase,
      bear: Math.pow(projections[2].bear / base.revenue, 1 / 3) - 1,
      bull: Math.pow(projections[2].bull / base.revenue, 1 / 3) - 1,
    },
    method: draft.method,
    consensus: {
      available: consensusAvailable,
      analystCount,
      years: draft.consensusYears,
      baseDifferencePct: difference,
      flagged: false,
      note: consensusAvailable
        ? `Consensus supplies FY+1/FY+2; ${fy3Label} is extended.`
        : "No usable consensus; method is bespoke forward evidence.",
    },
    valuation: {
      pe: trailingPe,
      forwardPe,
      evEbitda,
      peg,
      pFcf,
    },
    quality: {
      roce,
      roe,
      ebitMargin,
      ebitGrowth,
      operatingLeverage,
    },
    scores: { growth: null, valuation: null, quality: null, composite: null },
    evidence,
    historical_reference: draft.history,
    segment_context: [{ name: "Consolidated revenue", revenue: base.revenue, share: 1 }],
    assumptions,
    risks,
    confidence,
    generated_at: new Date().toISOString(),
  };
}

function percentile(
  values: number[],
  value: number | null,
  higherIsBetter = true,
): number | null {
  if (value == null || !Number.isFinite(value)) return null;
  const sorted = values.filter((item) => Number.isFinite(item)).sort((a, b) => a - b);
  if (!sorted.length) return null;
  const below = sorted.filter((item) => item < value).length;
  const equal = sorted.filter((item) => item === value).length;
  const score = ((below + equal / 2) / sorted.length) * 100;
  return higherIsBetter ? score : 100 - score;
}

function scoreResults(results: ForecastResult[]): void {
  const growthValues = results.map((result) => result.cagr_3y.base);
  const forwardPeValues = results
    .map((result) => result.valuation.forwardPe)
    .filter((value): value is number => value != null && value > 0);
  const pegValues = results
    .map((result) => result.valuation.peg)
    .filter((value): value is number => value != null && value > 0 && value < 20);
  const roceValues = results
    .map((result) => result.quality.roce)
    .filter((value): value is number => value != null);
  const roeValues = results
    .map((result) => result.quality.roe)
    .filter((value): value is number => value != null);
  const marginValues = results
    .map((result) => result.quality.ebitMargin)
    .filter((value): value is number => value != null);
  const leverageValues = results
    .map((result) => result.quality.operatingLeverage)
    .filter((value): value is number => value != null && Math.abs(value) < 10);

  for (const result of results) {
    const growth = percentile(growthValues, result.cagr_3y.base);
    const peScore = percentile(forwardPeValues, result.valuation.forwardPe, false);
    const pegScore = percentile(pegValues, result.valuation.peg, false);
    const valuationParts = [peScore, pegScore].filter(
      (value): value is number => value != null,
    );
    const valuation = valuationParts.length
      ? valuationParts.reduce((sum, value) => sum + value, 0) / valuationParts.length
      : null;
    const qualityParts = [
      percentile(roceValues, result.quality.roce),
      percentile(roeValues, result.quality.roe),
      percentile(marginValues, result.quality.ebitMargin),
      result.quality.operatingLeverage != null &&
      Math.abs(result.quality.operatingLeverage) < 10
        ? percentile(leverageValues, result.quality.operatingLeverage)
        : null,
    ].filter((value): value is number => value != null);
    const quality = qualityParts.length
      ? qualityParts.reduce((sum, value) => sum + value, 0) / qualityParts.length
      : null;

    let composite: number | null = null;
    if (growth != null && valuation != null && quality != null) {
      composite = growth * 0.5 + valuation * 0.3 + quality * 0.2;
    } else if (growth != null && valuation != null) {
      composite = growth * 0.6 + valuation * 0.4;
    } else if (growth != null && quality != null) {
      composite = growth * 0.65 + quality * 0.35;
    } else if (growth != null) {
      composite = growth;
    }
    result.scores = {
      growth,
      valuation,
      quality,
      composite: composite == null ? null : Math.round(composite * 10) / 10,
    };
  }
}

function main() {
  const raws = loadRaws();
  console.log(`[gr-build] ${raws.length} unique companies with statements`);
  const drafts = raws
    .map(buildDraft)
    .filter((draft): draft is Draft => draft != null);

  const peerGrowth = (sector: string): number | null => {
    const values = drafts
      .filter((draft) => draft.raw.refinitiv.sector === sector && draft.fy1Growth != null)
      .map((draft) => draft.fy1Growth!)
      .filter((value) => value > -0.5 && value < 1.5);
    return median(values);
  };
  const marketPeer = (() => {
    const values = drafts
      .map((draft) => draft.fy1Growth)
      .filter((value): value is number => value != null && value > -0.5 && value < 1.5);
    return median(values);
  })();

  for (const draft of drafts) {
    attachBespoke(draft, peerGrowth(draft.raw.refinitiv.sector) ?? marketPeer);
  }

  const results = drafts
    .map((draft) => buildResult(draft))
    .filter((result): result is ForecastResult => result != null);

  scoreResults(results);
  const valid = results
    .map((result) => forecastResultSchema.safeParse(result))
    .filter((result) => result.success)
    .map((result) => result.data)
    .sort((a, b) => (b.scores.composite ?? -1) - (a.scores.composite ?? -1));

  const dataset = {
    generatedAt: new Date().toISOString(),
    generatedFrom:
      "Yahoo Finance consensus and valuation data, Screener.in reported statements, Refinitiv India Multifactor workbook for the universe and LSEG forward growth fallback",
    fx: { pair: "USD/INR", rate: 88, asOf: "2026-11-12" },
    threshold: { value: 1000, unit: "INR_CRORE", inr: 1e10 },
    processed: drafts.length,
    estimated: valid.length,
    skipped: drafts.length - valid.length,
    results: valid,
  };
  fs.writeFileSync(
    path.join(ROOT, "estimates.json"),
    JSON.stringify(dataset),
  );
  const methods = valid.reduce<Record<string, number>>((acc, result) => {
    acc[result.method] = (acc[result.method] ?? 0) + 1;
    return acc;
  }, {});
  console.log(`[gr-build] wrote ${valid.length} results`, methods);
  if (valid.length < 200) {
    console.error("[gr-build] fewer than 200 results");
    process.exit(1);
  }
}

main();
