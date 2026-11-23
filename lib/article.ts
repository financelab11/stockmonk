import { PEER_BASIS, peersFor } from "@/config/peers";
import { getCoverageGroup } from "@/config/coverage";
import { getConsensus, getTicker, type ResearchBundle } from "./data";
import { formatDate, formatFiscalQuarter } from "./format";
import type { Consensus, FinancialRow, RangePricePoint } from "./schemas";
import type { StockStory } from "@/content/stocks/types";

export type ArticleSource = {
  id: number;
  name: string;
  publisher: string;
  url: string;
  date: string;
  note: string;
};

export function buildArticleSources(
  story: StockStory,
  bundle: ResearchBundle,
): ArticleSource[] {
  const { data, segments } = bundle;
  const cik = data.cik?.padStart(10, "0");
  const filingHistory = cik
    ? `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${cik}&type=10-K&dateb=&owner=include&count=40`
    : "https://www.sec.gov/edgar/search/";

  const candidates: Array<Omit<ArticleSource, "id">> = [
    {
      name: `${data.name} annual report (Form 10-K)`,
      publisher: "SEC EDGAR",
      url: story.filingUrl,
      date: segments?.source.date ?? data.updatedAt.slice(0, 10),
      note: "Business description, segment mix and risk factors.",
    },
    {
      name: "SEC EDGAR filing history",
      publisher: "SEC EDGAR",
      url: filingHistory,
      date: data.latestPrice.asOf,
      note: "Annual and quarterly filings behind the financial statements.",
    },
    {
      name: `${data.name} company filings and investor materials`,
      publisher: "Company / SEC",
      url: story.irUrl,
      date: "n/a",
      note: "Company releases, presentations and filing history.",
    },
    {
      name: "Stockmonk methodology",
      publisher: "Stockmonk",
      url: "/framework#methodology",
      date: "n/a",
      note: "Definitions for growth, margins, returns and valuation multiples.",
    },
  ];

  const seen = new Set<string>();
  const unique = candidates.filter((source) => {
    if (!source.url || seen.has(source.url)) return false;
    seen.add(source.url);
    return true;
  });

  return unique.map((source, index) => ({ ...source, id: index + 1 }));
}

export function latestQuarter(
  data: ResearchBundle["data"],
): FinancialRow | null {
  return data.quarterly.filter((row) => !row.ttm).at(-1) ?? null;
}

export type PeerRow = {
  ticker: string;
  name: string;
  isSubject: boolean;
  marketCap: number | null;
  revenueGrowth: number | null;
  grossMargin: number | null;
  operatingMargin: number | null;
  roic: number | null;
  netDebtToEbitda: number | null;
  pe: number | null;
  peNtm: number | null;
  evEbitda: number | null;
  evSales: number | null;
  fcfYield: number | null;
};

function consensusNtmPe(ticker: string, price: number | null): number | null {
  if (!price) return null;
  const consensus = getConsensus(ticker);
  if (!consensus) return null;
  const estimate =
    consensus.estimates.find((item) => item.period === "Current fiscal year") ??
    consensus.estimates.find((item) => item.period === "Next fiscal year");
  if (!estimate?.epsAvg || estimate.epsAvg <= 0) return null;
  return price / estimate.epsAvg;
}

export function buildPeerRows(bundle: ResearchBundle): {
  rows: PeerRow[];
  basis: string;
} {
  const subject = bundle.data;
  const group = getCoverageGroup(subject.ticker);
  const configured = peersFor(subject.ticker);
  const peers = (
    configured.length
      ? configured
      : (group?.tickers ?? []).filter((ticker) => ticker !== subject.ticker)
  ).slice(0, 6);
  const tickers = [subject.ticker, ...peers];

  const rows = tickers
    .map((ticker) => {
      const data = ticker === subject.ticker ? subject : getTicker(ticker);
      if (!data) return null;
      return {
        ticker: data.ticker,
        name: data.name,
        isSubject: ticker === subject.ticker,
        marketCap: data.latestPrice.marketCap,
        revenueGrowth: data.metrics.revenueGrowthTtm,
        grossMargin: data.metrics.grossMargin,
        operatingMargin: data.metrics.operatingMargin,
        roic: data.metrics.roic,
        netDebtToEbitda: data.metrics.netDebtToEbitda,
        pe: data.metrics.pe,
        peNtm: consensusNtmPe(data.ticker, data.latestPrice.close),
        evEbitda: data.metrics.evEbitda,
        evSales: data.metrics.evSales,
        fcfYield: data.metrics.fcfYield,
      } satisfies PeerRow;
    })
    .filter((row): row is PeerRow => row !== null);

  return {
    rows,
    basis:
      PEER_BASIS[subject.ticker] ??
      (group
        ? `${group.name} companies in the coverage universe`
        : "Companies with similar business characteristics in the coverage universe"),
  };
}

export function median(values: Array<number | null>): number | null {
  const present = values.filter(
    (value): value is number => value != null && Number.isFinite(value),
  );
  if (!present.length) return null;
  const sorted = [...present].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

export function peerMedian(
  rows: PeerRow[],
  key: keyof Pick<
    PeerRow,
    | "revenueGrowth"
    | "grossMargin"
    | "operatingMargin"
    | "roic"
    | "evEbitda"
    | "pe"
  >,
): number | null {
  return median(rows.filter((row) => !row.isSubject).map((row) => row[key]));
}

export function buildDrawdown(
  points: RangePricePoint[],
): Array<{ label: string; value: number }> {
  let peak = 0;
  const series: Array<{ label: string; value: number }> = [];
  for (const point of points) {
    if (!Number.isFinite(point.c)) continue;
    if (point.c > peak) peak = point.c;
    if (peak <= 0) continue;
    series.push({
      label: formatDate(new Date(point.t * 1000).toISOString()),
      value: point.c / peak - 1,
    });
  }
  if (series.length <= 60) return series;
  const step = Math.ceil(series.length / 60);
  return series.filter((_, index) => index % step === 0);
}

export function buildSurprisePoints(consensus: Consensus | null) {
  if (!consensus) return [];
  return consensus.history.slice(-8).map((row) => ({
    label: formatFiscalQuarterFromDate(row.endDate ?? row.quarter),
    actual: row.epsActual,
    estimate: row.epsEstimate,
  }));
}

function formatFiscalQuarterFromDate(value: string): string {
  const date = new Date(`${value.slice(0, 10)}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "2-digit",
    timeZone: "UTC",
  }).format(date);
}

export function buildRevenueSurprisePoints(consensus: Consensus | null) {
  if (!consensus) return [];
  return consensus.history.slice(-8).map((row) => ({
    label: formatFiscalQuarterFromDate(row.endDate ?? row.quarter),
    actual: row.revenueActual,
    estimate: row.revenueEstimate,
  }));
}

export function quarterLabel(row: FinancialRow | null): string {
  if (!row) return "the latest quarter";
  return formatFiscalQuarter(row.period, row.fyear);
}

export function estimateRows(consensus: Consensus | null) {
  if (!consensus) return [];
  return consensus.estimates.map((estimate) => ({
    period: estimate.period,
    endDate: estimate.endDate,
    revenue: estimate.revenueAvg,
    revenueGrowth: estimate.revenueGrowth,
    eps: estimate.epsAvg,
    epsGrowth: estimate.epsGrowth,
    analysts: estimate.analystCount,
  }));
}

export function valuationRange(bundle: ResearchBundle) {
  const history = bundle.data.multipleHistory;
  const pe = history
    .map((row) => row.pe)
    .filter(
      (value): value is number => value != null && Number.isFinite(value),
    );
  const ev = history
    .map((row) => row.evEbitda)
    .filter(
      (value): value is number => value != null && Number.isFinite(value),
    );
  return {
    pe: summarize(pe),
    evEbitda: summarize(ev),
  };
}

function summarize(values: number[]) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return {
    min: sorted[0],
    median:
      sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid],
    max: sorted[sorted.length - 1],
    current: values[values.length - 1],
  };
}
