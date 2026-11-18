export type MaterialityLabel = "High" | "Medium" | "Low";

export type Materiality = {
  score: number;
  label: MaterialityLabel;
  reasons: string[];
};

const BASE: Record<string, number> = {
  "Initiating Coverage": 70,
  "IPO Note": 65,
  "Result Update": 52,
  "Sector Report": 50,
  "Company Update": 45,
  "Stock Note": 40,
};

const POSITIVE = [
  { pattern: /\bupgrade|raised? target|raise(s|d)? (our )?(tp|target)|beat|record|order win|wins? order|acquisition|merger|guidance raise|raises? guidance|approval/i, delta: 12, reason: "positive corporate or estimate event" },
  { pattern: /\bstrong (growth|beat|quarter)|all-time high|multi-year high/i, delta: 6, reason: "strong operating result" },
];

const NEGATIVE = [
  { pattern: /\bdowngrade|cut(s|ting)? (our )?(tp|target)|miss|profit warning|guidance cut|cuts? guidance|fraud|accounting irregularit|impairment|resignation/i, delta: 12, reason: "negative corporate or estimate event" },
  { pattern: /\bweak (growth|quarter)|margin pressure|below estimate/i, delta: 6, reason: "weak operating result" },
];

/**
 * Transparent materiality scoring. It measures expected financial/strategic
 * significance, never price direction.
 */
export function scoreMateriality(input: {
  reportType: string;
  headline: string;
  target?: number | null;
  cmp?: number | null;
  recommendation?: string | null;
}): Materiality {
  const reasons: string[] = [];
  let score = BASE[input.reportType] ?? 40;
  reasons.push(`${input.reportType || "Stock note"} base ${score}`);

  const text = `${input.headline} ${input.recommendation ?? ""}`;
  for (const rule of POSITIVE) {
    if (rule.pattern.test(text)) {
      score += rule.delta;
      reasons.push(`+${rule.delta} ${rule.reason}`);
    }
  }
  for (const rule of NEGATIVE) {
    if (rule.pattern.test(text)) {
      score += rule.delta;
      reasons.push(`+${rule.delta} ${rule.reason}`);
    }
  }

  if (input.target != null && input.cmp != null && input.cmp > 0) {
    const upside = (input.target - input.cmp) / input.cmp;
    if (Math.abs(upside) >= 0.2) {
      score += 8;
      reasons.push(`+8 target implies ${(upside * 100).toFixed(0)}% change`);
    }
  }

  const clamped = Math.max(0, Math.min(100, score));
  const label: MaterialityLabel = clamped >= 70 ? "High" : clamped >= 45 ? "Medium" : "Low";
  return { score: clamped, label, reasons };
}

export const MATERIALITY_ORDER: Record<MaterialityLabel, number> = {
  High: 3,
  Medium: 2,
  Low: 1,
};
