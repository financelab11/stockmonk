import type { Consensus, TickerData } from "@/lib/schemas";
import { getIndiaConsensus } from "@/lib/india-data";
import { llmIsConfigured, runAnalystModel, type AnalystModelOutput } from "./llm";
import type { ConsensusYear, EvidenceItem, ForecastInput, ProjectionMethod } from "./types";
import type { BaseYearSelection } from "./fiscal";

/** Swappable estimate source. Add a new adapter and select it in one place. */
export interface ConsensusProvider {
  id: string;
  label: string;
  load(ticker: string): ConsensusYear[];
}

/** Swappable primary-document adapter. */
export interface EvidenceProvider {
  id: string;
  label: string;
  load(data: TickerData, base: BaseYearSelection, consensus: Consensus | null): EvidenceItem[];
}

/** Swappable bespoke-model adapter. */
export interface AnalystProvider {
  id: string;
  label: string;
  configured(): boolean;
  run(input: ForecastInput, method: ProjectionMethod): Promise<AnalystModelOutput>;
}

export const INDIA_CONSENSUS_PROVIDER: ConsensusProvider = {
  id: "stockmonk-india-consensus",
  label: "Stockmonk India consensus (NSE/BSE, third-party estimates)",
  load(ticker) {
    const consensus = getIndiaConsensus(ticker);
    return (consensus?.estimates ?? [])
      .filter(
        (estimate) =>
          estimate.revenueAvg != null &&
          estimate.endDate &&
          /fiscal year/i.test(estimate.period),
      )
      .map((estimate) => ({
        label: `FY${String(estimate.endDate).slice(0, 4)}`,
        periodEnd: String(estimate.endDate),
        revenue: estimate.revenueAvg,
        revenueHigh: null,
        revenueLow: null,
        analystCount: estimate.analystCount ?? consensus?.analystCount ?? null,
      }))
      .sort((a, b) => a.periodEnd.localeCompare(b.periodEnd));
  },
};

function nseUrl(ticker: string, page: string): string {
  return `https://www.nseindia.com/companies-listing/${page}?symbol=${ticker}`;
}

export const INDIA_EVIDENCE_PROVIDER: EvidenceProvider = {
  id: "nse-filings",
  label: "NSE filing index and Stockmonk dataset",
  load(data, base, consensus) {
    const fetchedAt = new Date().toISOString();
    const annualSource = data.sources.find((source) => /annual/i.test(source.name));
    const website = data.sources.find((source) => /website/i.test(source.name));

    return [
      {
        kind: "annual_report",
        title: annualSource?.name ?? "Latest annual report",
        url:
          annualSource?.url ??
          data.latest10KUrl ??
          nseUrl(data.ticker, "corporate-filings-annual-reports"),
        date: annualSource?.date ?? base.endDate,
        fetchedAt,
        available: true,
        note: "Link to the filing index. Statement figures come from the processed Stockmonk dataset.",
      },
      {
        kind: "quarterly_results",
        title: "Latest quarterly results",
        url: nseUrl(data.ticker, "corporate-filings-financial-results"),
        date: data.updatedAt.slice(0, 10),
        fetchedAt,
        available: true,
        note: "Quarterly series is in the dataset; the filing link is provided for verification.",
      },
      {
        kind: "earnings_call",
        title: "Earnings call transcripts",
        url: null,
        date: null,
        fetchedAt,
        available: false,
        note: "Transcript ingestion is not configured. The model does not claim to have read calls.",
      },
      {
        kind: "investor_presentation",
        title: "Investor presentations",
        url: website?.url ?? null,
        date: website?.date ?? null,
        fetchedAt,
        available: Boolean(website?.url),
        note: website?.url
          ? "Company website link only; presentation text is not parsed."
          : "No company website link in the dataset.",
      },
      {
        kind: "guidance",
        title: "Management guidance",
        url: null,
        date: null,
        fetchedAt,
        available: false,
        note: "No machine-readable guidance dataset. Forward evidence is consensus plus structural data.",
      },
      {
        kind: "consensus",
        title: consensus?.provider ?? "Third-party consensus",
        url: consensus?.sourceUrl ?? null,
        date: consensus?.asOf ?? null,
        fetchedAt,
        available: Boolean(consensus),
        note: consensus
          ? `${consensus.analystCount ?? "n/a"} contributing analysts.`
          : "No consensus record for this ticker.",
      },
      {
        kind: "market_data",
        title: "Market capitalisation and price",
        url: null,
        date: data.latestPrice.asOf,
        fetchedAt,
        available: true,
        note: data.latestPrice.marketCap
          ? "Market cap from the directory record."
          : "Market cap derived from shares outstanding × latest close.",
      },
    ];
  },
};

export const LLM_ANALYST_PROVIDER: AnalystProvider = {
  id: "openai-compatible",
  label: "OpenAI-compatible analyst model",
  configured: llmIsConfigured,
  run: runAnalystModel,
};

export const CONSENSUS_PROVIDER = INDIA_CONSENSUS_PROVIDER;
export const EVIDENCE_PROVIDER = INDIA_EVIDENCE_PROVIDER;
export const ANALYST_PROVIDER = LLM_ANALYST_PROVIDER;
