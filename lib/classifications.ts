import type { UniverseEntry } from "./schemas";

export type ClassificationTone =
  "positive" | "warning" | "negative" | "neutral";

export type Classification = {
  value: string;
  label: string;
  tone: ClassificationTone;
  detail: string;
};

function chipValue(
  entry: UniverseEntry,
  key: "growth" | "profitability",
): string {
  const label = entry.factorChips.find((chip) => chip.key === key)?.label ?? "";
  return label.split(":").at(-1)?.trim() ?? "";
}

export function growthClassification(entry: UniverseEntry): Classification {
  const raw = chipValue(entry, "growth");
  if (raw === "Strong") {
    return {
      value: "Strong",
      label: "Strong growth",
      tone: "positive",
      detail: "Top-ranked revenue and EPS growth within the covered universe.",
    };
  }
  if (raw === "Moderate") {
    return {
      value: "Moderate",
      label: "Moderate growth",
      tone: "warning",
      detail: "Mid-ranked revenue and EPS growth within the covered universe.",
    };
  }
  if (raw === "Slow") {
    return {
      value: "Weak",
      label: "Weak growth",
      tone: "negative",
      detail:
        "Bottom-ranked revenue and EPS growth within the covered universe.",
    };
  }
  return {
    value: "n/a",
    label: "Growth n/a",
    tone: "neutral",
    detail: "Not enough comparable growth data.",
  };
}

export function profitabilityClassification(
  entry: UniverseEntry,
): Classification {
  const raw = chipValue(entry, "profitability");
  if (raw === "High") {
    return {
      value: "High",
      label: "High profitability",
      tone: "positive",
      detail:
        "Top-ranked operating margin and returns within the covered universe.",
    };
  }
  if (raw === "Average") {
    return {
      value: "Average",
      label: "Average profitability",
      tone: "warning",
      detail:
        "Mid-ranked operating margin and returns within the covered universe.",
    };
  }
  if (raw === "Low") {
    return {
      value: "Low",
      label: "Low profitability",
      tone: "negative",
      detail:
        "Bottom-ranked operating margin and returns within the covered universe.",
    };
  }
  return {
    value: "n/a",
    label: "Profitability n/a",
    tone: "neutral",
    detail: "Not enough comparable profitability data.",
  };
}

const QUALITY_FIELDS: Array<(entry: UniverseEntry) => boolean> = [
  (entry) => entry.price != null,
  (entry) => entry.marketCap != null,
  (entry) => entry.revenueTtm != null,
  (entry) => entry.revenueGrowthTtm != null,
  (entry) => entry.epsGrowthTtm != null,
  (entry) => entry.operatingMargin != null,
  (entry) => entry.return1y != null,
  (entry) => entry.asOf != null,
  (entry) => entry.factorChips.length > 0,
];

export function dataQualityClassification(
  entry: UniverseEntry,
): Classification {
  if (entry.dataQuality) {
    const tone =
      entry.dataQuality === "High"
        ? "positive"
        : entry.dataQuality === "Moderate"
          ? "warning"
          : "negative";
    return {
      value: entry.dataQuality,
      label: `${entry.dataQuality} data quality`,
      tone,
      detail:
        entry.dataQualityScore != null
          ? `${entry.dataQualityScore} of 14 coverage points.`
          : "Coverage score based on available reported fields.",
    };
  }
  const available = QUALITY_FIELDS.filter((test) => test(entry)).length;
  const total = QUALITY_FIELDS.length;
  if (available >= 8) {
    return {
      value: "High",
      label: "High data quality",
      tone: "positive",
      detail: `${available} of ${total} core fields available.`,
    };
  }
  if (available >= 6) {
    return {
      value: "Moderate",
      label: "Moderate data quality",
      tone: "warning",
      detail: `${available} of ${total} core fields available.`,
    };
  }
  return {
    value: "Limited",
    label: "Limited data quality",
    tone: "negative",
    detail: `${available} of ${total} core fields available.`,
  };
}

export function classificationToneClass(tone: ClassificationTone): string {
  if (tone === "positive") {
    return "border-emerald-200 bg-emerald-50 text-emerald-800";
  }
  if (tone === "warning") {
    return "border-amber-200 bg-amber-50 text-amber-800";
  }
  if (tone === "negative") {
    return "border-rose-200 bg-rose-50 text-rose-700";
  }
  return "border-line bg-paper-deep text-muted";
}
