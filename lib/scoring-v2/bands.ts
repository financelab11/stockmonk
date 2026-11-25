import { finite } from "./util";

/** Piecewise score from ascending thresholds: [value, score]. */
export function thresholdScore(
  value: number | null | undefined,
  thresholds: Array<[number, number]>,
): number | null {
  if (!finite(value)) return null;
  if (!thresholds.length) return null;
  if (value <= thresholds[0][0]) return thresholds[0][1];
  for (let index = 1; index < thresholds.length; index += 1) {
    const [lowerValue, lowerScore] = thresholds[index - 1];
    const [upperValue, upperScore] = thresholds[index];
    if (value <= upperValue) {
      const span = upperValue - lowerValue;
      if (span <= 0) return upperScore;
      const weight = (value - lowerValue) / span;
      return lowerScore + (upperScore - lowerScore) * weight;
    }
  }
  return thresholds.at(-1)![1];
}

export function growthBand(value: number | null | undefined): number | null {
  return thresholdScore(value, [
    [-0.2, 0],
    [-0.05, 15],
    [0, 30],
    [0.03, 45],
    [0.08, 60],
    [0.15, 80],
    [0.25, 95],
    [0.4, 100],
  ]);
}

export function marginTrendBand(
  value: number | null | undefined,
): number | null {
  return thresholdScore(value, [
    [-0.1, 0],
    [-0.05, 20],
    [-0.02, 40],
    [0, 55],
    [0.02, 70],
    [0.05, 85],
    [0.1, 100],
  ]);
}

export function surpriseBand(value: number | null | undefined): number | null {
  return thresholdScore(value, [
    [-0.1, 0],
    [-0.05, 20],
    [-0.02, 40],
    [0, 55],
    [0.02, 70],
    [0.05, 85],
    [0.1, 100],
  ]);
}

export function revisionBand(value: number | null | undefined): number | null {
  return thresholdScore(value, [
    [-0.1, 0],
    [-0.05, 25],
    [0, 50],
    [0.03, 70],
    [0.08, 90],
    [0.15, 100],
  ]);
}

export function dilutionBand(value: number | null | undefined): number | null {
  return thresholdScore(value, [
    [-0.05, 100],
    [-0.02, 95],
    [0, 85],
    [0.01, 70],
    [0.02, 50],
    [0.05, 20],
    [0.1, 0],
  ]);
}

export function reinvestmentBand(
  value: number | null | undefined,
): number | null {
  return thresholdScore(value, [
    [0, 35],
    [0.02, 55],
    [0.05, 75],
    [0.08, 95],
    [0.15, 100],
    [0.25, 80],
    [0.4, 50],
  ]);
}

export function qualityBand(value: number | null | undefined): number | null {
  return thresholdScore(value, [
    [0, 0],
    [0.05, 25],
    [0.1, 45],
    [0.15, 65],
    [0.2, 80],
    [0.3, 95],
    [0.4, 100],
  ]);
}

export function marginBand(value: number | null | undefined): number | null {
  return thresholdScore(value, [
    [-0.2, 0],
    [-0.05, 20],
    [0, 40],
    [0.05, 55],
    [0.1, 70],
    [0.2, 85],
    [0.3, 95],
    [0.4, 100],
  ]);
}

export function valuationBand(
  value: number | null | undefined,
  cheap: number,
  expensive: number,
): number | null {
  if (!finite(value) || value <= 0) return null;
  if (value <= cheap) return 100;
  if (value >= expensive) return 0;
  return 100 - ((value - cheap) / (expensive - cheap)) * 100;
}

export function yieldBand(value: number | null | undefined): number | null {
  return thresholdScore(value, [
    [-0.05, 0],
    [0, 20],
    [0.02, 45],
    [0.04, 65],
    [0.06, 80],
    [0.08, 95],
    [0.12, 100],
  ]);
}

export function leverageBand(value: number | null | undefined): number | null {
  return thresholdScore(value, [
    [-5, 100],
    [-2, 95],
    [0, 90],
    [1, 75],
    [2, 55],
    [3, 35],
    [4, 15],
    [6, 0],
  ]);
}

export function interestCoverBand(
  value: number | null | undefined,
): number | null {
  return thresholdScore(value, [
    [0, 0],
    [1, 20],
    [2, 40],
    [4, 60],
    [8, 80],
    [15, 95],
    [30, 100],
  ]);
}

export function cashConversionBand(
  value: number | null | undefined,
): number | null {
  return thresholdScore(value, [
    [0, 0],
    [0.5, 25],
    [0.8, 50],
    [1, 70],
    [1.2, 85],
    [1.5, 100],
  ]);
}

export function accrualBand(value: number | null | undefined): number | null {
  // Lower accruals are better. Value is net income less CFO over assets.
  return thresholdScore(value, [
    [-0.1, 100],
    [-0.05, 90],
    [0, 75],
    [0.05, 50],
    [0.1, 25],
    [0.2, 0],
  ]);
}

export function valuationPercentileBand(
  value: number | null | undefined,
): number | null {
  if (!finite(value)) return null;
  return Math.min(100, Math.max(0, value));
}
