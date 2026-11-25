import type {
  Consensus,
  RangePricePoint,
  SegmentMix,
  TickerData,
} from "@/lib/schemas";
import type { PeerContext, PeerInput } from "./peer";

export type V2Input = {
  data: TickerData;
  consensus: Consensus | null;
  segments: SegmentMix | null;
  prices: RangePricePoint[];
  pricesMax: RangePricePoint[];
  benchmark: RangePricePoint[];
  sectorBenchmark: RangePricePoint[];
  peerContext: PeerContext;
  peerInputs: PeerInput[];
  groupName: string;
  exchange: string | null;
};
