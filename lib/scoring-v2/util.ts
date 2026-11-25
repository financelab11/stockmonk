import type {
  ComponentScore,
  CompositeScore,
  ScoreEvidence,
  ScoreKey,
  V2ScoreRecord,
} from "./types";

export const METHODOLOGY_VERSION = "2.0.0";
export const COMPOSITE_WEIGHTS: Record<ScoreKey, number> = {
  growth: 0.25,
  quality: 0.35,
  valuation: 0.25,
  technical: 0.15,
};
export const COVERAGE_THRESHOLD = 0.7;

export function finite(value: number | null | undefined): value is number {
  return value != null && Number.isFinite(value);
}

export function safeDiv(
  numerator: number | null | undefined,
  denominator: number | null | undefined,
): number | null {
  if (!finite(numerator) || !finite(denominator) || denominator === 0) {
    return null;
  }
  return numerator / denominator;
}

export function average(
  values: Array<number | null | undefined>,
): number | null {
  const present = values.filter(finite);
  if (!present.length) return null;
  return present.reduce((sum, value) => sum + value, 0) / present.length;
}

export function median(
  values: Array<number | null | undefined>,
): number | null {
  const present = values.filter(finite).sort((a, b) => a - b);
  if (!present.length) return null;
  const mid = Math.floor(present.length / 2);
  return present.length % 2 === 0
    ? (present[mid - 1] + present[mid]) / 2
    : present[mid];
}

export function percentileScore(
  value: number | null | undefined,
  population: Array<number | null | undefined>,
  higherIsBetter = true,
): number | null {
  if (!finite(value)) return null;
  const present = population.filter(finite);
  if (present.length < 3) return null;
  const below = present.filter((candidate) => candidate < value).length;
  const equal = present.filter((candidate) => candidate === value).length;
  const percentile = (below + equal / 2) / present.length;
  const score = (higherIsBetter ? percentile : 1 - percentile) * 100;
  return Math.min(95, Math.max(5, score));
}

export function evidence(args: {
  id: string;
  label: string;
  value: number | string | null;
  unit: string;
  period?: string | null;
  source: string;
  formula: string;
  maxPoints: number;
  score?: number | null;
  available?: boolean;
  reason?: string;
}): ScoreEvidence {
  const available =
    args.available ?? (args.score != null && Number.isFinite(args.score));
  const points =
    available && args.score != null
      ? (Math.min(100, Math.max(0, args.score)) / 100) * args.maxPoints
      : null;
  return {
    id: args.id,
    label: args.label,
    value: args.value,
    unit: args.unit,
    period: args.period ?? null,
    source: args.source,
    formula: args.formula,
    maxPoints: args.maxPoints,
    points: points == null ? null : round(points, 2),
    available,
    reason: args.reason,
  };
}

export function unavailableEvidence(args: {
  id: string;
  label: string;
  unit: string;
  source: string;
  formula: string;
  maxPoints: number;
  reason: string;
  value?: number | string | null;
  period?: string | null;
}): ScoreEvidence {
  return evidence({
    ...args,
    value: args.value ?? null,
    score: null,
    available: false,
    reason: args.reason,
  });
}

export function componentScore(args: {
  key: ScoreKey;
  label: string;
  weight: number;
  evidence: ScoreEvidence[];
  summary: string;
}): ComponentScore {
  const available = args.evidence.filter((item) => item.available);
  const totalMax = args.evidence.reduce((sum, item) => sum + item.maxPoints, 0);
  const availableMax = available.reduce((sum, item) => sum + item.maxPoints, 0);
  const earned = available.reduce((sum, item) => sum + (item.points ?? 0), 0);
  const coverage = totalMax > 0 ? availableMax / totalMax : 0;
  const score = availableMax > 0 ? (earned / availableMax) * 100 : null;
  return {
    key: args.key,
    label: args.label,
    weight: args.weight,
    score: score == null ? null : round(score, 1),
    coverage: round(coverage, 3),
    status: coverage >= COVERAGE_THRESHOLD ? "complete" : "provisional",
    evidence: args.evidence,
    summary: args.summary,
  };
}

export function compositeScore(
  scores: Record<ScoreKey, ComponentScore>,
  asOf: string | null,
): CompositeScore {
  const components = Object.fromEntries(
    (Object.keys(COMPOSITE_WEIGHTS) as ScoreKey[]).map((key) => [
      key,
      {
        score: scores[key].score,
        coverage: scores[key].coverage,
        weight: COMPOSITE_WEIGHTS[key],
      },
    ]),
  ) as CompositeScore["components"];
  const allComplete = (Object.keys(COMPOSITE_WEIGHTS) as ScoreKey[]).every(
    (key) =>
      scores[key].score != null && scores[key].coverage >= COVERAGE_THRESHOLD,
  );
  const weighted = (Object.keys(COMPOSITE_WEIGHTS) as ScoreKey[]).reduce(
    (sum, key) => sum + (scores[key].score ?? 0) * COMPOSITE_WEIGHTS[key],
    0,
  );
  const coverage = (Object.keys(COMPOSITE_WEIGHTS) as ScoreKey[]).reduce(
    (sum, key) => sum + scores[key].coverage * COMPOSITE_WEIGHTS[key],
    0,
  );
  const score = allComplete ? round(weighted, 1) : null;
  return {
    score,
    coverage: round(coverage, 3),
    status: allComplete ? "complete" : "incomplete",
    classification:
      score == null ? "Incomplete" : classifyComposite(score),
    formula:
      "Growth × 0.25 + Quality × 0.35 + Valuation × 0.25 + Technical × 0.15",
    methodologyVersion: METHODOLOGY_VERSION,
    asOf,
    components,
  };
}

export function classifyComposite(score: number): string {
  if (score >= 85) return "Exceptional";
  if (score >= 75) return "Strong";
  if (score >= 65) return "Good";
  if (score >= 50) return "Average";
  if (score >= 35) return "Weak";
  return "Poor";
}

export function classifyComponent(score: number | null): string {
  if (score == null) return "N/A";
  if (score >= 80) return "Very high";
  if (score >= 65) return "High";
  if (score >= 50) return "Average";
  if (score >= 35) return "Low";
  return "Very low";
}

export function round(value: number, digits = 1): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

export function recordSummary(record: V2ScoreRecord): string {
  const scores = record.scores;
  return [
    `Growth ${scores.growth.score ?? "N/A"}`,
    `Quality ${scores.quality.score ?? "N/A"}`,
    `Valuation ${scores.valuation.score ?? "N/A"}`,
    `Technical ${scores.technical.score ?? "N/A"}`,
  ].join(" · ");
}
