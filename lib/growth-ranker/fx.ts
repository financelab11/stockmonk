import fs from "node:fs";
import path from "node:path";
import { GROWTH_RANKER, type ThresholdUnit } from "@/config/growth-ranker";

export type FxRate = {
  pair: string;
  rate: number;
  asOf: string;
  source: string;
};

type FxFile = {
  pair?: unknown;
  rate?: unknown;
  asOf?: unknown;
  source?: unknown;
};

/** Loads the dated reference rate. The env override requires both rate and
 *  as-of date so the UI can never show an undated conversion. */
export function getFxRate(): FxRate | null {
  const envRate = Number(process.env[GROWTH_RANKER.fx.env]);
  const envAsOf = process.env.GROWTH_RANKER_FX_ASOF;
  if (Number.isFinite(envRate) && envRate > 0 && envAsOf) {
    return {
      pair: GROWTH_RANKER.fx.pair,
      rate: envRate,
      asOf: envAsOf,
      source: `Environment override ${GROWTH_RANKER.fx.env}`,
    };
  }

  try {
    const raw = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "data", "fx", "usd-inr.json"), "utf8"),
    ) as FxFile;
    const rate = Number(raw.rate);
    if (!Number.isFinite(rate) || rate <= 0) return null;
    if (typeof raw.asOf !== "string" || !raw.asOf) return null;
    return {
      pair: typeof raw.pair === "string" ? raw.pair : GROWTH_RANKER.fx.pair,
      rate,
      asOf: raw.asOf,
      source:
        typeof raw.source === "string"
          ? raw.source
          : "Dated reference rate file",
    };
  } catch {
    return null;
  }
}

export function thresholdInInr(
  value: number,
  unit: ThresholdUnit,
  fxRate: number,
): number {
  return unit === "USD_MILLION" ? value * 1_000_000 * fxRate : value * 10_000_000;
}

export function convertInr(value: number, unit: ThresholdUnit, fxRate: number): number {
  return unit === "USD_MILLION" ? value / fxRate / 1_000_000 : value / 10_000_000;
}

export function unitLabel(unit: ThresholdUnit): string {
  return unit === "USD_MILLION" ? "USD million" : "INR crore";
}

export function unitSuffix(unit: ThresholdUnit): string {
  return unit === "USD_MILLION" ? "US$m" : "₹cr";
}
