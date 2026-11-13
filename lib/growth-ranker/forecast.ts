import { GROWTH_RANKER } from "@/config/growth-ranker";
import { compoundAnnualGrowth, projectionPeriods } from "./fiscal";
import type {
  Cagr,
  ConsensusCheck,
  ConsensusYear,
  ForecastInput,
  ForecastResult,
  ProjectionMethod,
  ProjectionPoint,
} from "./types";

const BEAR_BULL_BANDS: Record<ProjectionMethod, [number, number, number]> = {
  CONSENSUS: [0.05, 0.07, 0.09],
  CONSENSUS_PLUS_ANALYST_EXTENSION: [0.08, 0.11, 0.14],
  ANALYST_MODEL: [0.15, 0.2, 0.25],
};

export type ConsensusSelection = {
  method: ProjectionMethod;
  byYear: Map<number, ConsensusYear>;
  analystCount: number | null;
};

/**
 * Deterministic estimate-selection rule.
 * Historical growth is not read here; only forward consensus years are used.
 */
export function selectConsensus(
  years: ConsensusYear[],
  baseFiscalYear: number,
  minAnalysts: number,
): ConsensusSelection {
  const byYear = new Map<number, ConsensusYear>();
  for (const year of years) {
    if (year.revenue == null || year.revenue <= 0) continue;
    const offset = Number(year.label.slice(2)) - baseFiscalYear;
    if (offset >= 1 && offset <= GROWTH_RANKER.projectionYears) byYear.set(offset, year);
  }
  const analystCount =
    years.map((year) => year.analystCount ?? 0).sort((a, b) => b - a)[0] ?? null;
  const hasAllThree = [1, 2, 3].every((offset) => byYear.has(offset));
  const enoughAnalysts = (analystCount ?? 0) >= minAnalysts;

  if (hasAllThree && enoughAnalysts) {
    return { method: "CONSENSUS", byYear, analystCount };
  }
  if (byYear.size > 0) {
    return { method: "CONSENSUS_PLUS_ANALYST_EXTENSION", byYear, analystCount };
  }
  return { method: "ANALYST_MODEL", byYear, analystCount };
}

/**
 * Extends a partial consensus with its own forward-implied growth. The fade
 * factor is configurable and applies to forward consensus growth only — never
 * to reported historical growth.
 */
export function extendConsensus(
  baseRevenue: number,
  selection: ConsensusSelection,
  periods: Array<{ index: number; label: string; periodEnd: string }>,
): Map<number, { value: number; analystCount: number | null }> {
  const out = new Map<number, { value: number; analystCount: number | null }>();
  const lastConsensus = [...selection.byYear.keys()].sort((a, b) => a - b).at(-1) ?? 0;

  for (const period of periods) {
    const consensus = selection.byYear.get(period.index);
    if (consensus?.revenue != null) {
      out.set(period.index, {
        value: consensus.revenue,
        analystCount: consensus.analystCount ?? selection.analystCount,
      });
      continue;
    }

    const previous = period.index === 1 ? baseRevenue : out.get(period.index - 1)?.value;
    if (!previous) return out;

    const growth = impliedForwardGrowth(baseRevenue, selection, lastConsensus);
    if (growth == null) return out;
    const fadeSteps = Math.max(1, period.index - lastConsensus);
    const faded = growth * Math.pow(GROWTH_RANKER.extensionFade, fadeSteps);
    out.set(period.index, {
      value: previous * (1 + faded),
      analystCount: null,
    });
  }
  return out;
}

function impliedForwardGrowth(
  baseRevenue: number,
  selection: ConsensusSelection,
  lastConsensus: number,
): number | null {
  if (lastConsensus <= 0) return null;
  const end = selection.byYear.get(lastConsensus)?.revenue;
  if (!end) return null;
  const start =
    lastConsensus === 1
      ? baseRevenue
      : selection.byYear.get(lastConsensus - 1)?.revenue ?? null;
  if (!start || start <= 0) return null;
  const growth = end / start - 1;
  return Number.isFinite(growth) ? growth : null;
}

function makeProjection(
  value: number,
  period: { label: string; periodEnd: string },
  method: ProjectionMethod,
  analystCount: number | null,
  yearIndex: number,
  source: ProjectionPoint["source"],
): ProjectionPoint {
  const band = BEAR_BULL_BANDS[method][yearIndex - 1];
  return {
    label: period.label,
    periodEnd: period.periodEnd,
    base: value,
    bear: value * (1 - band),
    bull: value * (1 + band),
    source,
    analystCount,
  };
}

export function consensusCheck(
  input: ForecastInput,
  projectedFy3: number | null,
  divergenceThreshold: number,
): ConsensusCheck {
  const fy3 = input.consensus.find(
    (year) =>
      Number(year.label.slice(2)) - Number(input.baseYear.label.slice(2)) === 3,
  );
  const difference =
    projectedFy3 != null && fy3?.revenue
      ? projectedFy3 / fy3.revenue - 1
      : null;
  return {
    available: input.consensus.length > 0,
    analystCount:
      input.consensus
        .map((year) => year.analystCount ?? 0)
        .sort((a, b) => b - a)[0] ?? null,
    years: input.consensus,
    baseDifferencePct: difference,
    flagged: difference != null && Math.abs(difference) > divergenceThreshold,
    note: null,
  };
}

export type DeterministicForecast =
  | { ok: true; result: ForecastResult }
  | { ok: false; reason: string };

/**
 * Builds the consensus-based forecast. The function never reads the historical
 * series except for FY0 revenue, so historical CAGR cannot influence any
 * projection or the ranking.
 */
export function buildDeterministicForecast(
  input: ForecastInput,
  minAnalysts: number,
  divergenceThreshold: number,
): DeterministicForecast {
  const periods = projectionPeriods(input.baseYear.endDate, GROWTH_RANKER.projectionYears);
  const baseFiscalYear = Number(input.baseYear.label.slice(2));
  const selection = selectConsensus(input.consensus, baseFiscalYear, minAnalysts);
  if (selection.byYear.size === 0) {
    return { ok: false, reason: "NO_CONSENSUS" };
  }

  const extended = extendConsensus(input.baseYear.revenue, selection, periods);
  const values = periods.map((period) => extended.get(period.index));
  if (values.some((value) => value == null || value.value <= 0)) {
    return { ok: false, reason: "CONSENSUS_EXTENSION_INCOMPLETE" };
  }

  const points = periods.map((period, index) => {
    const value = values[index]!.value;
    const analystCount = values[index]!.analystCount;
    const fromConsensus = selection.byYear.has(period.index);
    return makeProjection(
      value,
      period,
      selection.method,
      analystCount,
      period.index,
      fromConsensus ? "CONSENSUS" : "ANALYST_EXTENSION",
    );
  });

  const cagr = cagrFromPoints(input.baseYear.revenue, points);
  if (!cagr) return { ok: false, reason: "INVALID_CAGR" };

  const check = consensusCheck(input, points[2].base, divergenceThreshold);
  const confidence =
    selection.method === "CONSENSUS" && (check.analystCount ?? 0) >= 5
      ? "high"
      : selection.method === "CONSENSUS" || (check.analystCount ?? 0) >= 3
        ? "medium"
        : "low";

  return {
    ok: true,
    result: {
      company_id: input.ticker,
      ticker: input.ticker,
      name: input.name,
      sector: input.sector,
      fiscal_year_end: input.baseYear.endDate,
      market_cap: input.marketCap,
      base_year: input.baseYear,
      projections: { FY1: points[0], FY2: points[1], FY3: points[2] },
      cagr_3y: cagr,
      method: selection.method,
      consensus: check,
      evidence: input.evidence,
      historical_reference: input.history,
      segment_context: input.segments,
      assumptions: assumptionsFor(selection.method, selection, periods),
      risks: [
        "Consensus estimates can be stale and may not reflect the latest guidance.",
        "Revenue projections are not a forecast of profit, cash flow or share price.",
      ],
      confidence,
      generated_at: new Date().toISOString(),
    },
  };
}

function assumptionsFor(
  method: ProjectionMethod,
  selection: ConsensusSelection,
  periods: Array<{ index: number; label: string }>,
): string[] {
  const missing = periods.filter((period) => !selection.byYear.has(period.index));
  const assumptions = [
    "Ranking uses the base-case revenue only; bear and bull cases are a sensitivity band.",
    "FY0 is the last completed fiscal year and is used as the CAGR denominator.",
  ];
  if (method === "CONSENSUS") {
    assumptions.push(
      `All three forward years use third-party consensus (${selection.analystCount ?? "n/a"} analysts).`,
    );
  } else if (method === "CONSENSUS_PLUS_ANALYST_EXTENSION") {
    assumptions.push(
      "Available consensus years are used as reported; missing years extend the consensus-implied forward growth.",
    );
    assumptions.push(
      `FY+3 growth is faded by ${Math.round((1 - GROWTH_RANKER.extensionFade) * 100)}% versus the latest consensus-implied growth.`,
    );
    if (missing.length) {
      assumptions.push(`Extended years: ${missing.map((year) => year.label).join(", ")}.`);
    }
  }
  assumptions.push("Reported historical growth is excluded from every projection input.");
  return assumptions;
}

export function cagrFromPoints(base: number, points: ProjectionPoint[]): Cagr | null {
  const baseCagr = compoundAnnualGrowth(base, points[2].base, 3);
  const bearCagr = compoundAnnualGrowth(base, points[2].bear, 3);
  const bullCagr = compoundAnnualGrowth(base, points[2].bull, 3);
  if (baseCagr == null || bearCagr == null || bullCagr == null) return null;
  return { base: baseCagr, bear: bearCagr, bull: bullCagr };
}

export function buildAnalystForecast(
  input: ForecastInput,
  model: {
    projections: { base: number[]; bear: number[]; bull: number[] };
    assumptions: string[];
    risks: string[];
    note: string | null;
  },
  divergenceThreshold: number,
): ForecastResult | null {
  const periods = projectionPeriods(input.baseYear.endDate, 3);
  const points = periods.map((period, index) =>
    makeProjection(
      model.projections.base[index],
      period,
      "ANALYST_MODEL",
      null,
      period.index,
      "ANALYST_MODEL",
    ),
  );
  const cagr = cagrFromPoints(input.baseYear.revenue, points);
  if (!cagr) return null;

  const check = consensusCheck(input, points[2].base, divergenceThreshold);
  check.note = model.note;

  return {
    company_id: input.ticker,
    ticker: input.ticker,
    name: input.name,
    sector: input.sector,
    fiscal_year_end: input.baseYear.endDate,
    market_cap: input.marketCap,
    base_year: input.baseYear,
    projections: { FY1: points[0], FY2: points[1], FY3: points[2] },
    cagr_3y: cagr,
    method: "ANALYST_MODEL",
    consensus: check,
    evidence: input.evidence,
    historical_reference: input.history,
    segment_context: input.segments,
    assumptions: model.assumptions,
    risks: model.risks,
    confidence: "low",
    generated_at: new Date().toISOString(),
  };
}

/** Adds the independent model's sanity note to a consensus-led result without
 *  changing the consensus numbers or the ranking input. */
export function attachModelSanity(
  result: ForecastResult,
  model: {
    projections: { base: number[]; bear: number[]; bull: number[] };
    assumptions: string[];
    risks: string[];
    note: string | null;
  },
  divergenceThreshold: number,
): ForecastResult {
  const consensusFy3 = result.projections.FY3.base;
  const modelFy3 = model.projections.base[2];
  const difference = consensusFy3 > 0 ? modelFy3 / consensusFy3 - 1 : null;
  return {
    ...result,
    consensus: {
      ...result.consensus,
      baseDifferencePct:
        difference ?? result.consensus.baseDifferencePct,
      flagged:
        (difference != null && Math.abs(difference) > divergenceThreshold) ||
        result.consensus.flagged,
      note: model.note,
    },
    assumptions: [...result.assumptions, ...model.assumptions],
    risks: model.risks,
  };
}
