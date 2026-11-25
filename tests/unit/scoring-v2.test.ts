import { describe, expect, it } from "vitest";
import { growthBand, thresholdScore } from "@/lib/scoring-v2/bands";
import { rsi, sma } from "@/lib/scoring-v2/indicators";
import type { ScoreEvidence } from "@/lib/scoring-v2/types";
import {
  classifyComposite,
  componentScore,
  compositeScore,
} from "@/lib/scoring-v2/util";

function item(
  id: string,
  maxPoints: number,
  points: number | null,
): ScoreEvidence {
  return {
    id,
    label: id,
    value: points,
    unit: "score",
    period: null,
    source: "test",
    formula: "test",
    maxPoints,
    points,
    available: points != null,
  };
}

describe("V2 scoring", () => {
  it("calculates coverage and marks a component provisional below 70%", () => {
    const complete = componentScore({
      key: "growth",
      label: "Growth",
      weight: 0.25,
      evidence: [item("a", 60, 45), item("b", 40, 20)],
      summary: "test",
    });
    expect(complete.score).toBe(65);
    expect(complete.coverage).toBe(1);
    expect(complete.status).toBe("complete");

    const provisional = componentScore({
      key: "growth",
      label: "Growth",
      weight: 0.25,
      evidence: [item("a", 50, 40), item("b", 50, null)],
      summary: "test",
    });
    expect(provisional.score).toBe(80);
    expect(provisional.coverage).toBe(0.5);
    expect(provisional.status).toBe("provisional");
  });

  it("uses the fixed 25/35/25/15 composite and withholds an incomplete total", () => {
    const complete = compositeScore(
      {
        growth: { ...componentScore({ key: "growth", label: "G", weight: 0.25, evidence: [item("g", 100, 80)], summary: "" }) },
        quality: { ...componentScore({ key: "quality", label: "Q", weight: 0.35, evidence: [item("q", 100, 90)], summary: "" }) },
        valuation: { ...componentScore({ key: "valuation", label: "V", weight: 0.25, evidence: [item("v", 100, 70)], summary: "" }) },
        technical: { ...componentScore({ key: "technical", label: "T", weight: 0.15, evidence: [item("t", 100, 60)], summary: "" }) },
      },
      "2026-11-24",
    );
    expect(complete.score).toBe(78);
    expect(complete.status).toBe("complete");
    expect(complete.classification).toBe("Strong");

    const incomplete = compositeScore(
      {
        growth: { ...componentScore({ key: "growth", label: "G", weight: 0.25, evidence: [item("g", 100, 80)], summary: "" }) },
        quality: { ...componentScore({ key: "quality", label: "Q", weight: 0.35, evidence: [item("q", 50, 40), item("q2", 50, null)], summary: "" }) },
        valuation: { ...componentScore({ key: "valuation", label: "V", weight: 0.25, evidence: [item("v", 100, 70)], summary: "" }) },
        technical: { ...componentScore({ key: "technical", label: "T", weight: 0.15, evidence: [item("t", 100, 60)], summary: "" }) },
      },
      "2026-11-24",
    );
    expect(incomplete.score).toBeNull();
    expect(incomplete.status).toBe("incomplete");
    expect(incomplete.classification).toBe("Incomplete");
  });

  it("classifies composite bands and interpolates growth bands", () => {
    expect(classifyComposite(90)).toBe("Exceptional");
    expect(classifyComposite(64)).toBe("Average");
    expect(classifyComposite(20)).toBe("Poor");
    expect(growthBand(null)).toBeNull();
    expect(growthBand(0.25)).toBeGreaterThan(90);
    expect(thresholdScore(5, [[0, 0], [10, 100]])).toBe(50);
  });

  it("calculates basic technical indicators", () => {
    expect(sma([1, 2, 3, 4, 5], 3)).toBe(4);
    expect(rsi([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 14)).toBe(100);
    expect(rsi([1, 2, 3], 14)).toBeNull();
  });
});
