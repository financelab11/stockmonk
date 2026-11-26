import { getCoverageGroup } from "@/config/coverage";
import { peersFor } from "@/config/peers";
import type { Consensus, TickerData } from "@/lib/schemas";
import { estimateForPeriod } from "./financials";
import { median, percentileScore } from "./util";

export type PeerInput = {
  ticker: string;
  data: TickerData;
  consensus: Consensus | null;
};

export type PeerMetrics = {
  pe: number | null;
  forwardPe: number | null;
  evEbitda: number | null;
  evSales: number | null;
  pfcf: number | null;
  revenueGrowth: number | null;
  epsGrowth: number | null;
  operatingMargin: number | null;
  grossMargin: number | null;
  roic: number | null;
  fcfMargin: number | null;
  marketCap: number | null;
};

export type PeerContext = {
  tickers: string[];
  basis: string;
  median: PeerMetrics;
  percentile: PeerMetrics;
};

export function peerMetrics(input: PeerInput): PeerMetrics {
  const { data, consensus } = input;
  const metrics = data.metrics;
  const estimate = estimateForPeriod(consensus, "current");
  const forwardPe =
    data.latestPrice.close != null &&
    estimate?.epsAvg != null &&
    estimate.epsAvg > 0
      ? data.latestPrice.close / estimate.epsAvg
      : null;
  return {
    pe: metrics.pe,
    forwardPe,
    evEbitda: metrics.evEbitda,
    evSales: metrics.evSales,
    pfcf: metrics.pfcf,
    revenueGrowth: metrics.revenueGrowthTtm,
    epsGrowth: metrics.epsGrowthTtm,
    operatingMargin: metrics.operatingMargin,
    grossMargin: metrics.grossMargin,
    roic: metrics.roic,
    fcfMargin: metrics.fcfMargin,
    marketCap: data.latestPrice.marketCap,
  };
}

export function buildPeerContext(
  subject: PeerInput,
  all: PeerInput[],
): PeerContext {
  const group = getCoverageGroup(subject.ticker);
  const configured = peersFor(subject.ticker);
  const configuredPeers = configured
    .map((ticker) => all.find((item) => item.ticker === ticker))
    .filter((item): item is PeerInput => Boolean(item))
    .filter((item) => item.ticker !== subject.ticker);
  // The score universe is now much wider than the research library. Use the
  // curated names first, then fill from every company in the same sector so
  // the peer percentiles reflect the expanded 3,696-name coverage.
  const sectorPeers = all.filter((item) => {
    if (item.ticker === subject.ticker) return false;
    if (configuredPeers.some((peer) => peer.ticker === item.ticker)) return false;
    const itemGroup = getCoverageGroup(item.ticker);
    return group
      ? itemGroup?.id === group.id || item.data.sector === group.name
      : item.data.sector === subject.data.sector;
  });
  const candidates = [...configuredPeers, ...sectorPeers].slice(0, 12);
  const peers = candidates.filter((item) => item.ticker !== subject.ticker);
  const peerValues = peers.map(peerMetrics);
  const subjectMetrics = peerMetrics(subject);
  const medians = Object.fromEntries(
    (Object.keys(subjectMetrics) as Array<keyof PeerMetrics>).map((key) => [
      key,
      median(peerValues.map((value) => value[key])),
    ]),
  ) as PeerMetrics;
  const percentiles = Object.fromEntries(
    (Object.keys(subjectMetrics) as Array<keyof PeerMetrics>).map((key) => [
      key,
      percentileScore(
        subjectMetrics[key],
        peerValues.map((value) => value[key]),
        true,
      ),
    ]),
  ) as PeerMetrics;
  return {
    tickers: peers.map((peer) => peer.ticker),
    basis: configured.length
      ? "Curated comparables plus sector peers in the score universe"
      : `Sector peers in the 3,696-name score universe (${group?.name ?? subject.data.sector})`,
    median: medians,
    percentile: percentiles,
  };
}
