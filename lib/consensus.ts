import type { Consensus } from "./schemas";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";
const YAHOO_ROOT = "https://query1.finance.yahoo.com";
const NASDAQ_ROOT = "https://api.nasdaq.com/api";

type YahooValue = { raw?: number; fmt?: string } | number | string | null | undefined;

type YahooTrend = {
  period?: string;
  endDate?: string;
  growth?: YahooValue;
  earningsEstimate?: {
    avg?: YahooValue;
    growth?: YahooValue;
    numberOfAnalysts?: YahooValue;
    yearAgoEps?: YahooValue;
  };
  revenueEstimate?: {
    avg?: YahooValue;
    growth?: YahooValue;
    numberOfAnalysts?: YahooValue;
    yearAgoRevenue?: YahooValue;
  };
  epsTrend?: {
    current?: YahooValue;
    "7daysAgo"?: YahooValue;
    "30daysAgo"?: YahooValue;
    "60daysAgo"?: YahooValue;
    "90daysAgo"?: YahooValue;
  };
};

type YahooHistoryRow = {
  quarter?: { raw?: number; fmt?: string } | string;
  epsActual?: YahooValue;
  epsEstimate?: YahooValue;
  surprisePercent?: YahooValue;
};

type YahooResult = {
  financialData?: {
    targetMeanPrice?: YahooValue;
    targetHighPrice?: YahooValue;
    targetLowPrice?: YahooValue;
    recommendationKey?: string;
    numberOfAnalystOpinions?: YahooValue;
    currentPrice?: YahooValue;
  };
  recommendationTrend?: {
    trend?: Array<{
      period?: string;
      strongBuy?: number;
      buy?: number;
      hold?: number;
      sell?: number;
      strongSell?: number;
    }>;
  };
  earningsTrend?: { trend?: YahooTrend[] };
  earningsHistory?: { history?: YahooHistoryRow[] };
};

type NasdaqRow = Record<string, unknown>;

type NasdaqForecast = {
  data?: {
    quarterlyForecast?: { rows?: NasdaqRow[] };
    yearlyForecast?: { rows?: NasdaqRow[] };
  };
};

type NasdaqSurprise = {
  data?: {
    earningsSurpriseTable?: { rows?: NasdaqRow[] };
  };
};

type NasdaqSummary = {
  data?: {
    summaryData?: Record<string, { value?: string }>;
  };
};

type NasdaqRatings = {
  data?: {
    meanRatingType?: string;
    ratingsSummary?: string;
  };
};

export type ConsensusEstimate = Consensus["estimates"][number];

function ynum(value: YahooValue): number | null {
  if (value === null || value === undefined) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "string") {
    const parsed = Number(value.replace(/[^0-9.-]/g, ""));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return typeof value.raw === "number" && Number.isFinite(value.raw) ? value.raw : null;
}

function nnum(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value.replace(/[^0-9.-]/g, ""));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}
function endOfMonth(label: string): string | null {
  const match = label.match(/^([A-Za-z]{3})[a-z]*\s+(\d{4})$/);
  if (!match) return null;
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const month = months.indexOf(match[1].toLowerCase());
  if (month < 0) return null;
  const year = Number(match[2]);
  return new Date(Date.UTC(year, month + 1, 0)).toISOString().slice(0, 10);
}

function historyEnd(row: YahooHistoryRow): string | null {
  if (typeof row.quarter === "string") return row.quarter.slice(0, 10);
  return row.quarter?.fmt?.slice(0, 10) ?? null;
}

async function yahooSession(): Promise<{ crumb: string; cookie: string }> {
  const landing = await fetch("https://fc.yahoo.com", {
    headers: { "User-Agent": USER_AGENT },
    redirect: "manual",
    signal: AbortSignal.timeout(20_000),
  });
  const cookie = (landing.headers.getSetCookie?.() ?? []).map((c) => c.split(";")[0]).join("; ");
  const crumbRes = await fetch(`${YAHOO_ROOT}/v1/test/getcrumb`, {
    headers: { "User-Agent": USER_AGENT, Cookie: cookie },
    signal: AbortSignal.timeout(20_000),
  });
  if (!crumbRes.ok) throw new Error(`Yahoo crumb ${crumbRes.status}`);
  const crumb = (await crumbRes.text()).trim();
  if (!crumb || crumb.includes("<") || crumb.length > 32) throw new Error("Yahoo crumb unavailable");
  return { crumb, cookie };
}

async function fetchYahoo(ticker: string): Promise<YahooResult> {
  const { crumb, cookie } = await yahooSession();
  const modules = "financialData,recommendationTrend,earningsTrend,earningsHistory";
  const url = `${YAHOO_ROOT}/v10/finance/quoteSummary/${encodeURIComponent(ticker)}?modules=${modules}&crumb=${encodeURIComponent(crumb)}`;
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Cookie: cookie },
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`Yahoo quoteSummary ${res.status}`);
  const json = (await res.json()) as { quoteSummary?: { result?: YahooResult[] } };
  const result = json.quoteSummary?.result?.[0];
  if (!result) throw new Error(`Yahoo returned no data for ${ticker}`);
  return result;
}

async function fetchNasdaq<T>(path: string): Promise<T> {
  const res = await fetch(`${NASDAQ_ROOT}${path}`, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`Nasdaq ${res.status} for ${path}`);
  return (await res.json()) as T;
}

function yahooEstimate(trend: YahooTrend | undefined, period: string, endDate: string | null): ConsensusEstimate | null {
  if (!trend) return null;
  return {
    period,
    endDate,
    revenueAvg: ynum(trend.revenueEstimate?.avg),
    revenueGrowth: ynum(trend.revenueEstimate?.growth) ?? ynum(trend.growth),
    epsAvg: ynum(trend.earningsEstimate?.avg),
    epsGrowth: ynum(trend.earningsEstimate?.growth) ?? ynum(trend.growth),
    analystCount: ynum(trend.earningsEstimate?.numberOfAnalysts),
  };
}

function nasdaqEstimate(row: NasdaqRow, period: string): ConsensusEstimate | null {
  const fiscalEnd = typeof row.fiscalEnd === "string" ? row.fiscalEnd : "";
  const endDate = fiscalEnd ? endOfMonth(fiscalEnd) : null;
  const eps = nnum(row.consensusEPSForecast);
  if (eps === null) return null;
  return {
    period,
    endDate,
    revenueAvg: null,
    revenueGrowth: null,
    epsAvg: eps,
    epsGrowth: null,
    analystCount: nnum(row.noOfEstimates),
  };
}

function yahooConsensus(
  ticker: string,
  result: YahooResult,
  nasdaq: { quarterly: NasdaqRow[]; yearly: NasdaqRow[] },
  asOf: string,
): Consensus {
  const history = (result.earningsHistory?.history ?? []).slice(-5);
  const latestReportedEnd = history.length ? historyEnd(history[history.length - 1]) : null;

  const trends = new Map<string, YahooTrend>();
  for (const trend of result.earningsTrend?.trend ?? []) {
    if (trend.period) trends.set(trend.period, trend);
  }

  const q0 = trends.get("0q");
  const q1 = trends.get("+1q");
  const y0 = trends.get("0y");
  const y1 = trends.get("+1y");

  const yahooQuarterlyUsable =
    Boolean(q0?.endDate && q1?.endDate) &&
    (!latestReportedEnd || (q0!.endDate! > latestReportedEnd && q1!.endDate! > q0!.endDate!));
  const yahooAnnualUsable =
    Boolean(y0?.endDate && y1?.endDate) &&
    (!latestReportedEnd || (y0!.endDate! > latestReportedEnd && y1!.endDate! > y0!.endDate!));

  const estimates: ConsensusEstimate[] = [];

  if (yahooQuarterlyUsable) {
    const a = yahooEstimate(q0, "Next quarter", q0!.endDate ?? null);
    const b = yahooEstimate(q1, "Following quarter", q1!.endDate ?? null);
    if (a) estimates.push(a);
    if (b) estimates.push(b);
  } else {
    // Yahoo's dates can lag by one quarter right after a fiscal-year close,
    // but its revenue estimates still line up with the next two quarters.
    nasdaq.quarterly.slice(0, 2).forEach((row, index) => {
      const estimate = nasdaqEstimate(row, index === 0 ? "Next quarter" : "Following quarter");
      if (!estimate) return;
      const trend = index === 0 ? q0 : q1;
      estimate.revenueAvg = ynum(trend?.revenueEstimate?.avg);
      estimate.revenueGrowth = ynum(trend?.revenueEstimate?.growth) ?? ynum(trend?.growth);
      estimates.push(estimate);
    });
  }

  if (yahooAnnualUsable) {
    const a = yahooEstimate(y0, "Current fiscal year", y0!.endDate ?? null);
    const b = yahooEstimate(y1, "Next fiscal year", y1!.endDate ?? null);
    if (a) estimates.push(a);
    if (b) estimates.push(b);
  } else {
    nasdaq.yearly.slice(0, 2).forEach((row, index) => {
      const estimate = nasdaqEstimate(row, index === 0 ? "Current fiscal year" : "Next fiscal year");
      if (estimate) estimates.push(estimate);
    });
  }

  const trend0 = result.recommendationTrend?.trend?.[0];
  const distribution = trend0
    ? {
        strongBuy: Number(trend0.strongBuy ?? 0),
        buy: Number(trend0.buy ?? 0),
        hold: Number(trend0.hold ?? 0),
        sell: Number(trend0.sell ?? 0),
        strongSell: Number(trend0.strongSell ?? 0),
      }
    : null;

  const distributionTotal = distribution
    ? distribution.strongBuy + distribution.buy + distribution.hold + distribution.sell + distribution.strongSell
    : null;

  const currentQuarter = estimates.find((estimate) => estimate.period === "Next quarter") ?? null;
  const revisionTrend = y0 ?? q0;
  const currentEps = ynum(revisionTrend?.epsTrend?.current);
  const revision = (previous: YahooValue): number | null => {
    const oldValue = ynum(previous);
    if (currentEps == null || oldValue == null || oldValue === 0) return null;
    return currentEps / oldValue - 1;
  };

  return {
    ticker,
    provider: "Yahoo Finance analyst consensus (estimates cross-checked with Nasdaq)",
    asOf,
    sourceUrl: `https://finance.yahoo.com/quote/${encodeURIComponent(ticker)}/analysis`,
    targetMean: ynum(result.financialData?.targetMeanPrice),
    targetHigh: ynum(result.financialData?.targetHighPrice),
    targetLow: ynum(result.financialData?.targetLowPrice),
    recommendationKey: result.financialData?.recommendationKey ?? null,
    analystCount: ynum(result.financialData?.numberOfAnalystOpinions) ?? distributionTotal,
    distribution,
    estimates,
    history: history.map((row) => ({
      quarter: historyEnd(row) ?? "",
      endDate: historyEnd(row),
      epsActual: ynum(row.epsActual),
      epsEstimate: ynum(row.epsEstimate),
      revenueActual: null,
      revenueEstimate: null,
    })),
    currentQuarter,
    revisions: {
      eps7d: revision(revisionTrend?.epsTrend?.["7daysAgo"]),
      eps30d: revision(revisionTrend?.epsTrend?.["30daysAgo"]),
      eps60d: revision(revisionTrend?.epsTrend?.["60daysAgo"]),
      eps90d: revision(revisionTrend?.epsTrend?.["90daysAgo"]),
      revenue30d: null,
    },
  };
}

function parseTarget(value: string | undefined): number | null {
  if (!value) return null;
  const parsed = Number(value.replace(/[^0-9.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}

function nasdaqConsensus(
  ticker: string,
  summary: NasdaqSummary,
  ratings: NasdaqRatings,
  forecast: NasdaqForecast,
  surprise: NasdaqSurprise,
  asOf: string,
): Consensus {
  const quarterly = forecast.data?.quarterlyForecast?.rows ?? [];
  const yearly = forecast.data?.yearlyForecast?.rows ?? [];
  const estimates: ConsensusEstimate[] = [];

  quarterly.slice(0, 2).forEach((row, index) => {
    const estimate = nasdaqEstimate(row, index === 0 ? "Next quarter" : "Following quarter");
    if (estimate) estimates.push(estimate);
  });
  yearly.slice(0, 2).forEach((row, index) => {
    const estimate = nasdaqEstimate(row, index === 0 ? "Current fiscal year" : "Next fiscal year");
    if (estimate) estimates.push(estimate);
  });

  const ratingText = ratings.data?.ratingsSummary ?? "";
  const analystMatch = ratingText.match(/Based on\s+(\d+)\s+analysts/i);
  const target = parseTarget(summary.data?.summaryData?.OneYrTarget?.value);

  return {
    ticker,
    provider: "Nasdaq analyst consensus",
    asOf,
    sourceUrl: `https://www.nasdaq.com/market-activity/stocks/${ticker.toLowerCase()}/analyst-research`,
    targetMean: target,
    targetHigh: null,
    targetLow: null,
    recommendationKey: ratings.data?.meanRatingType?.toLowerCase() ?? null,
    analystCount: analystMatch ? Number(analystMatch[1]) : null,
    distribution: null,
    estimates,
    history: (surprise.data?.earningsSurpriseTable?.rows ?? []).slice(0, 5).map((row) => {
      const fiscalEnd = typeof row.fiscalQtrEnd === "string" ? row.fiscalQtrEnd : "";
      const endDate = fiscalEnd ? endOfMonth(fiscalEnd) : null;
      return {
        quarter: fiscalEnd,
        endDate,
        epsActual: nnum(row.eps),
        epsEstimate: nnum(row.consensusForecast),
        revenueActual: null,
        revenueEstimate: null,
      };
    }),
    currentQuarter: estimates.find((estimate) => estimate.period === "Next quarter") ?? null,
  };
}

/** Fetch third-party analyst consensus. Never a Stockmonk rating or target. */
export async function fetchConsensus(ticker: string, asOf = new Date().toISOString().slice(0, 10)): Promise<Consensus> {
  const [forecast, nasdaqSummary, nasdaqRatings, nasdaqSurprise] = await Promise.all([
    fetchNasdaq<NasdaqForecast>(`/analyst/${ticker}/earnings-forecast`).catch(() => ({}) as NasdaqForecast),
    fetchNasdaq<NasdaqSummary>(`/quote/${ticker}/summary?assetclass=stocks`).catch(() => ({}) as NasdaqSummary),
    fetchNasdaq<NasdaqRatings>(`/analyst/${ticker}/ratings`).catch(() => ({}) as NasdaqRatings),
    fetchNasdaq<NasdaqSurprise>(`/company/${ticker}/earnings-surprise`).catch(() => ({}) as NasdaqSurprise),
  ]);

  try {
    const yahoo = await fetchYahoo(ticker);
    return yahooConsensus(
      ticker,
      yahoo,
      {
        quarterly: forecast.data?.quarterlyForecast?.rows ?? [],
        yearly: forecast.data?.yearlyForecast?.rows ?? [],
      },
      asOf,
    );
  } catch (error) {
    console.warn(`[consensus] Yahoo unavailable for ${ticker}: ${(error as Error).message}`);
    return nasdaqConsensus(ticker, nasdaqSummary, nasdaqRatings, forecast, nasdaqSurprise, asOf);
  }
}
