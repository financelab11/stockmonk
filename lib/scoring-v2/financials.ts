import type {
  Consensus,
  FinancialRow,
  TickerData,
} from "@/lib/schemas";
import { finite, safeDiv } from "./util";

export function annualRows(data: TickerData): FinancialRow[] {
  return [...data.annual]
    .filter((row) => !row.ttm)
    .sort((a, b) => a.fyear - b.fyear);
}

export function latestAnnual(data: TickerData): FinancialRow | null {
  return annualRows(data).at(-1) ?? null;
}

export function quarterRows(data: TickerData): FinancialRow[] {
  return [...data.quarterly]
    .filter((row) => !row.ttm)
    .sort((a, b) => a.reportDate.localeCompare(b.reportDate));
}

export function ttmOrAnnual(
  data: TickerData,
  field: keyof FinancialRow,
): number | null {
  const ttm = data.ttm?.[field] as number | null | undefined;
  if (finite(ttm)) return ttm;
  return (latestAnnual(data)?.[field] as number | null | undefined) ?? null;
}

export function cagr(
  rows: FinancialRow[],
  field: keyof FinancialRow,
  years: number,
): number | null {
  if (rows.length < 2) return null;
  const latest = rows.at(-1)!;
  const targetYear = latest.fyear - years;
  const start =
    rows.find((row) => row.fyear === targetYear) ??
    [...rows].reverse().find((row) => row.fyear <= targetYear) ??
    rows[0];
  const startValue = start[field] as number | null | undefined;
  const endValue = latest[field] as number | null | undefined;
  if (!finite(startValue) || !finite(endValue) || startValue <= 0 || endValue <= 0) {
    return null;
  }
  const actualYears = latest.fyear - start.fyear;
  if (actualYears <= 0) return null;
  return (endValue / startValue) ** (1 / actualYears) - 1;
}

export function yoy(
  current: number | null | undefined,
  prior: number | null | undefined,
): number | null {
  if (!finite(current) || !finite(prior) || prior === 0) return null;
  return current / prior - 1;
}

export function latestQuarterYoY(
  data: TickerData,
  field: keyof FinancialRow,
): number | null {
  const rows = quarterRows(data);
  if (rows.length < 5) return null;
  return yoy(
    rows.at(-1)![field] as number | null | undefined,
    rows.at(-5)![field] as number | null | undefined,
  );
}

export function growthAcceleration(
  data: TickerData,
  field: keyof FinancialRow,
): number | null {
  const rows = quarterRows(data);
  if (rows.length < 6) return null;
  const latest = yoy(
    rows.at(-1)![field] as number | null | undefined,
    rows.at(-5)![field] as number | null | undefined,
  );
  const prior = yoy(
    rows.at(-2)![field] as number | null | undefined,
    rows.at(-6)![field] as number | null | undefined,
  );
  if (latest == null || prior == null) return null;
  return latest - prior;
}

export function shareCountChange(data: TickerData): number | null {
  const rows = annualRows(data);
  if (rows.length < 2) return null;
  const latest = rows.at(-1)!;
  const prior = rows.at(-2)!;
  const latestShares = finite(latest.epsDiluted) && latest.netIncome
    ? latest.netIncome / latest.epsDiluted
    : null;
  const priorShares = finite(prior.epsDiluted) && prior.netIncome
    ? prior.netIncome / prior.epsDiluted
    : null;
  if (!finite(latestShares) || !finite(priorShares) || priorShares === 0) {
    return null;
  }
  return latestShares / priorShares - 1;
}

export function marginTrend(
  data: TickerData,
  field: keyof FinancialRow,
  years = 3,
): number | null {
  const rows = annualRows(data).slice(-years);
  if (rows.length < 2) return null;
  const first = rows[0][field] as number | null | undefined;
  const last = rows.at(-1)![field] as number | null | undefined;
  if (!finite(first) || !finite(last)) return null;
  return last - first;
}

export function estimateForPeriod(
  consensus: Consensus | null,
  kind: "current" | "next",
): Consensus["estimates"][number] | null {
  if (!consensus?.estimates.length) return null;
  const asOf = consensus.asOf ?? "";
  const future = consensus.estimates
    .filter((estimate) => estimate.endDate && estimate.endDate >= asOf)
    .sort((a, b) => (a.endDate ?? "").localeCompare(b.endDate ?? ""));
  if (kind === "current") {
    return future[0] ?? consensus.estimates[0] ?? null;
  }
  return future[1] ?? future[0] ?? null;
}

export function surpriseStats(consensus: Consensus | null): {
  eps: number | null;
  revenue: number | null;
  count: number;
} {
  if (!consensus?.history.length) {
    return { eps: null, revenue: null, count: 0 };
  }
  const eps: number[] = [];
  const revenue: number[] = [];
  for (const row of consensus.history.slice(-4)) {
    if (finite(row.epsActual) && finite(row.epsEstimate) && row.epsEstimate !== 0) {
      eps.push(row.epsActual / row.epsEstimate - 1);
    }
    if (
      finite(row.revenueActual) &&
      finite(row.revenueEstimate) &&
      row.revenueEstimate !== 0
    ) {
      revenue.push(row.revenueActual / row.revenueEstimate - 1);
    }
  }
  return {
    eps: eps.length ? eps.reduce((sum, value) => sum + value, 0) / eps.length : null,
    revenue: revenue.length
      ? revenue.reduce((sum, value) => sum + value, 0) / revenue.length
      : null,
    count: Math.max(eps.length, revenue.length),
  };
}

export function reinvestmentRate(data: TickerData): number | null {
  const annual = latestAnnual(data);
  if (!annual) return null;
  const capex = finite(annual.capex) ? Math.abs(annual.capex) : null;
  const rnd = finite(annual.rnd) ? Math.abs(annual.rnd) : null;
  const revenue = annual.revenue;
  if (revenue == null || revenue <= 0) return null;
  return ((capex ?? 0) + (rnd ?? 0)) / revenue;
}

export function currentRatio(data: TickerData): number | null {
  const annual = latestAnnual(data);
  if (!annual) return null;
  return safeDiv(
    finite(annual.totalAssets) ? annual.totalAssets : null,
    finite(annual.totalDebt) ? annual.totalDebt : null,
  );
}
