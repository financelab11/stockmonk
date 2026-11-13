import type { FinancialRow } from "@/lib/schemas";
import type { HistoryPoint } from "./types";

const DAY_MS = 24 * 60 * 60 * 1000;

export function isoToday(now = new Date()): string {
  return now.toISOString().slice(0, 10);
}

export function fiscalLabel(endDate: string): string {
  return `FY${endDate.slice(0, 4)}`;
}

/** Adds calendar years in UTC, clamping 29 February to 28 February. */
export function addYears(isoDate: string, years: number): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  const targetYear = date.getUTCFullYear() + years;
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const candidate = new Date(Date.UTC(targetYear, month, day));
  if (candidate.getUTCMonth() !== month) {
    candidate.setUTCDate(0);
  }
  return candidate.toISOString().slice(0, 10);
}

export function yearsBetween(fromIso: string, toIso: string): number {
  return (
    new Date(`${toIso}T00:00:00Z`).getUTCFullYear() -
    new Date(`${fromIso}T00:00:00Z`).getUTCFullYear()
  );
}

export type BaseYearSelection = {
  row: FinancialRow;
  endDate: string;
  label: string;
  history: HistoryPoint[];
};

/**
 * FY0 is the last *completed* fiscal year: an annual row whose period end is
 * on or before today. TTM and quarterly rows are excluded.
 */
export function selectBaseYear(
  annual: FinancialRow[],
  today = isoToday(),
): BaseYearSelection | null {
  const completed = annual
    .filter(
      (row) =>
        !row.ttm &&
        typeof row.reportDate === "string" &&
        row.reportDate <= today &&
        row.revenue != null &&
        row.revenue > 0,
    )
    .sort((a, b) => a.reportDate.localeCompare(b.reportDate));
  const row = completed.at(-1);
  if (!row) return null;

  const window = completed.slice(-5);
  const history: HistoryPoint[] = window.map((item, index) => {
    const previous = window[index - 1];
    return {
      label: fiscalLabel(item.reportDate),
      periodEnd: item.reportDate,
      revenue: item.revenue ?? 0,
      growth:
        previous && previous.revenue && item.revenue
          ? item.revenue / previous.revenue - 1
          : null,
    };
  });

  return {
    row,
    endDate: row.reportDate,
    label: fiscalLabel(row.reportDate),
    history,
  };
}

export function projectionPeriods(
  baseEndDate: string,
  years: number,
): Array<{ index: number; label: string; periodEnd: string }> {
  return Array.from({ length: years }, (_, index) => {
    const periodEnd = addYears(baseEndDate, index + 1);
    return {
      index: index + 1,
      label: fiscalLabel(periodEnd),
      periodEnd,
    };
  });
}

export function compoundAnnualGrowth(
  base: number,
  end: number,
  years: number,
): number | null {
  if (!Number.isFinite(base) || !Number.isFinite(end) || base <= 0 || end <= 0) {
    return null;
  }
  return Math.pow(end / base, 1 / years) - 1;
}

export function daysBetween(aIso: string, bIso: string): number {
  return Math.round(
    (new Date(`${bIso}T00:00:00Z`).getTime() -
      new Date(`${aIso}T00:00:00Z`).getTime()) /
      DAY_MS,
  );
}
