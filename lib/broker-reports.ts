import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

const DIR = path.join(process.cwd(), "data", "broker-reports");

export type BrokerMetrics = {
  target: number | null;
  cmp: number | null;
  upside: number | null;
  recommendation: string | null;
};

export type BrokerReportIndexEntry = {
  id: string;
  date: string;
  broker: string;
  brokerId?: string;
  brokerDisplay?: string;
  company: string;
  ticker?: string | null;
  market?: "IN" | "US" | "GCC";
  sector?: string | null;
  headline: string;
  reportType: string;
  deepDive: boolean;
  blurb: string;
  execSummary?: string;
  metrics: BrokerMetrics;
  materiality?: { score: number; label: "High" | "Medium" | "Low"; reasons: string[] };
  detailedSummary?: Array<{ heading: string; bullets: string[] }>;
  link: string;
};

export type BrokerReport = BrokerReportIndexEntry & {
  summary: {
    highlights: string[];
    valuation: string[];
    watch: string[];
  };
  detailedSummary?: Array<{ heading: string; bullets: string[] }>;
  deepDiveText?: string;
  fetchedAt: string;
};

export const getBrokerReportIndex = cache((): BrokerReportIndexEntry[] => {
  try {
    const raw = JSON.parse(fs.readFileSync(path.join(DIR, "index.json"), "utf8")) as BrokerReportIndexEntry[];
    return raw.sort((a, b) => b.date.localeCompare(a.date));
  } catch {
    return [];
  }
});

export const getBrokerReport = cache((id: string): BrokerReport | null => {
  try {
    return JSON.parse(fs.readFileSync(path.join(DIR, `${id}.json`), "utf8")) as BrokerReport;
  } catch {
    return null;
  }
});

export const getBrokerReportsForTicker = cache((ticker: string): BrokerReportIndexEntry[] =>
  getBrokerReportIndex().filter((report) => report.ticker === ticker),
);
