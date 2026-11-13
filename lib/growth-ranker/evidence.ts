import { getIndiaConsensus, getIndiaTicker, fallbackIndiaSegments } from "@/lib/india-data";
import { selectBaseYear } from "./fiscal";
import {
  CONSENSUS_PROVIDER,
  EVIDENCE_PROVIDER,
} from "./providers";
import type { ForecastInput, SegmentPoint } from "./types";

export type LoadResult =
  | { ok: true; input: ForecastInput }
  | { ok: false; reason: string };

export function loadForecastInput(ticker: string): LoadResult {
  const data = getIndiaTicker(ticker);
  if (!data) return { ok: false, reason: "COMPANY_NOT_FOUND" };

  const base = selectBaseYear(data.annual);
  if (!base) return { ok: false, reason: "NO_COMPLETED_FISCAL_YEAR" };

  const directoryMarketCap = data.latestPrice.marketCap;
  const derivedMarketCap =
    data.latestPrice.sharesOutstanding && data.latestPrice.close
      ? data.latestPrice.sharesOutstanding * data.latestPrice.close
      : null;
  const marketCapValue = directoryMarketCap ?? derivedMarketCap;
  if (!marketCapValue || marketCapValue <= 0) {
    return { ok: false, reason: "MARKET_CAP_UNAVAILABLE" };
  }

  const consensusRecord = getIndiaConsensus(ticker);
  const consensusYears = CONSENSUS_PROVIDER.load(ticker);

  const segments: SegmentPoint[] = fallbackIndiaSegments(data).segments.map((segment) => ({
    name: segment.name,
    revenue: segment.revenue,
    share: segment.share,
  }));

  return {
    ok: true,
    input: {
      ticker: data.ticker,
      name: data.name,
      sector: data.sector,
      marketCap: {
        value: marketCapValue,
        currency: "INR",
        asOf: data.latestPrice.asOf,
        source: directoryMarketCap
          ? "India directory market data"
          : "Derived: shares outstanding × latest close",
      },
      baseYear: {
        label: base.label,
        endDate: base.endDate,
        revenue: base.row.revenue ?? 0,
        currency: "INR",
        unit: "INR",
      },
      history: base.history,
      segments: segments.length
        ? segments
        : [{ name: "Consolidated revenue", revenue: base.row.revenue ?? 0, share: 1 }],
      consensus: consensusYears,
      evidence: EVIDENCE_PROVIDER.load(data, base, consensusRecord),
    },
  };
}
