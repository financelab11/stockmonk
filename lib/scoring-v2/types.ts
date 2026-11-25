export type ScoreKey = "growth" | "quality" | "valuation" | "technical";
export type ComponentStatus = "complete" | "provisional";
export type CompositeStatus = "complete" | "incomplete";

export type ScoreEvidence = {
  id: string;
  label: string;
  value: number | string | null;
  unit: string;
  period: string | null;
  source: string;
  formula: string;
  maxPoints: number;
  points: number | null;
  available: boolean;
  reason?: string;
};

export type ComponentScore = {
  key: ScoreKey;
  label: string;
  weight: number;
  score: number | null;
  coverage: number;
  status: ComponentStatus;
  evidence: ScoreEvidence[];
  summary: string;
};

export type CompositeScore = {
  score: number | null;
  coverage: number;
  status: CompositeStatus;
  classification: string;
  formula: string;
  methodologyVersion: string;
  asOf: string | null;
  components: Record<ScoreKey, { score: number | null; coverage: number; weight: number }>;
};

export type V2ScoreRecord = {
  ticker: string;
  name: string;
  sector: string;
  group: string;
  exchange: string | null;
  price: number | null;
  marketCap: number | null;
  enterpriseValue: number | null;
  asOf: string | null;
  scores: Record<ScoreKey, ComponentScore>;
  composite: CompositeScore;
  methodologyVersion: string;
  generatedAt: string;
};

export type V2ScoresDataset = {
  methodologyVersion: string;
  generatedAt: string;
  weights: Record<ScoreKey, number>;
  universe: number;
  companies: Record<string, V2ScoreRecord>;
};
