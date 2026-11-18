import "server-only";

import { cache } from "react";
import { getBrokerReportIndex } from "@/lib/broker-reports";

export type RevisionRow = {
  company: string;
  ticker: string | null;
  broker: string;
  reportType: string;
  date: string;
  previousDate: string | null;
  target: number | null;
  previousTarget: number | null;
  targetChangePct: number | null;
  recommendation: string | null;
  previousRecommendation: string | null;
  action: "Upgrade" | "Downgrade" | "Reiterated" | "Target raised" | "Target cut" | "New coverage";
};

export type CompanyRevision = {
  company: string;
  ticker: string | null;
  brokers: number;
  revisions: number;
  upgrades: number;
  downgrades: number;
  averageTargetChange: number | null;
  latestTarget: number | null;
  latestDate: string;
};

const RANK: Record<string, number> = {
  BUY: 5,
  ACCUMULATE: 4,
  ADD: 4,
  HOLD: 3,
  NEUTRAL: 3,
  REDUCE: 2,
  SELL: 1,
};

/**
 * Broker-level revisions only. This never mixes broker estimates with the
 * consensus snapshot; each row is one broker against its own prior note.
 */
export const getEstimateRevisions = cache((): {
  rows: RevisionRow[];
  companies: CompanyRevision[];
} => {
  const groups = new Map<string, typeof reports>();
  type Report = ReturnType<typeof getBrokerReportIndex>[number];
  const reports: Report[] = [...getBrokerReportIndex()]
    .filter((report) => report.metrics?.target != null || report.metrics?.recommendation)
    .sort((a, b) => a.date.localeCompare(b.date));

  for (const report of reports) {
    const key = `${report.ticker ?? report.company}::${report.broker}`;
    const list = groups.get(key) ?? [];
    list.push(report);
    groups.set(key, list);
  }

  const rows: RevisionRow[] = [];
  for (const list of groups.values()) {
    for (let index = 1; index < list.length; index += 1) {
      const current = list[index];
      const previous = list[index - 1];
      const target = current.metrics.target;
      const previousTarget = previous.metrics.target;
      const targetChangePct =
        target != null && previousTarget != null && previousTarget > 0
          ? ((target - previousTarget) / previousTarget) * 100
          : null;
      const recommendation = current.metrics.recommendation;
      const previousRecommendation = previous.metrics.recommendation;
      let action: RevisionRow["action"] = "Reiterated";
      if (previousRecommendation && recommendation) {
        const delta = (RANK[recommendation] ?? 3) - (RANK[previousRecommendation] ?? 3);
        if (delta > 0) action = "Upgrade";
        else if (delta < 0) action = "Downgrade";
        else if (targetChangePct != null && targetChangePct > 0.5) action = "Target raised";
        else if (targetChangePct != null && targetChangePct < -0.5) action = "Target cut";
      } else if (targetChangePct != null && targetChangePct > 0.5) action = "Target raised";
      else if (targetChangePct != null && targetChangePct < -0.5) action = "Target cut";

      rows.push({
        company: current.company,
        ticker: current.ticker ?? null,
        broker: current.brokerDisplay ?? current.broker,
        reportType: current.reportType,
        date: current.date,
        previousDate: previous.date,
        target,
        previousTarget,
        targetChangePct,
        recommendation,
        previousRecommendation,
        action,
      });
    }
  }

  const byCompany = new Map<string, CompanyRevision & { changes: number[] }>();
  for (const row of rows) {
    const key = row.ticker ?? row.company;
    const entry =
      byCompany.get(key) ?? {
        company: row.company,
        ticker: row.ticker ?? null,
        brokers: 0,
        revisions: 0,
        upgrades: 0,
        downgrades: 0,
        averageTargetChange: null,
        latestTarget: null,
        latestDate: row.date,
        changes: [] as number[],
      };
    entry.revisions += 1;
    if (row.action === "Upgrade") entry.upgrades += 1;
    if (row.action === "Downgrade") entry.downgrades += 1;
    if (row.targetChangePct != null) entry.changes.push(row.targetChangePct);
    entry.latestTarget = row.target ?? entry.latestTarget;
    entry.latestDate = row.date > entry.latestDate ? row.date : entry.latestDate;
    byCompany.set(key, entry);
  }

  const companies: CompanyRevision[] = [...byCompany.values()].map((entry) => {
    const brokers = new Set(
      rows.filter((row) => (row.ticker ?? row.company) === (entry.ticker ?? entry.company)).map((row) => row.broker),
    ).size;
    const averageTargetChange = entry.changes.length
      ? entry.changes.reduce((sum, value) => sum + value, 0) / entry.changes.length
      : null;
    const { changes: _changes, ...rest } = entry;
    return { ...rest, brokers, averageTargetChange };
  });

  return {
    rows: rows.sort((a, b) => b.date.localeCompare(a.date)),
    companies: companies.sort(
      (a, b) => Math.abs(b.averageTargetChange ?? 0) - Math.abs(a.averageTargetChange ?? 0),
    ),
  };
});
