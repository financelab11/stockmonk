import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { getBrokerReportIndex } from "@/lib/broker-reports";import { getNewsfeed, type NewsTag } from "@/lib/data";
import { MATERIALITY_ORDER, scoreMateriality, type MaterialityLabel } from "@/lib/materiality";
import type { SummarySection } from "@/lib/broker-summary";

export type FeedMarket = "IN" | "US" | "GCC";

export type FeedItem = {
  id: string;
  kind: "broker" | "dataset";
  tag: string;
  title: string;
  company: string;
  ticker: string | null;
  market: FeedMarket;
  sector: string | null;
  date: string;
  source: string;
  sourceId: string | null;
  reportType: string | null;
  materiality: { score: number; label: MaterialityLabel };
  href: string;
  externalUrl: string | null;
  execSummary: string;
  detailed: SummarySection[];
  stats: Array<{ label: string; value: string }>;
  deepDive: boolean;
};

const DATASET_MATERIALITY: Record<NewsTag, number> = {
  "Earnings Results": 62,
  "Earnings Preview": 45,
  "Earnings Call": 50,
  Analysis: 35,
  "Why It Moves": 40,
  "Macro News": 55,
  "Broker Note": 45,
  "Deep-Dive": 70,
};

const MARKET_FILES: Array<{ file: string; market: FeedMarket }> = [
  { file: "public/data/india/stocks.json", market: "IN" },
  { file: "public/data/stocks.json", market: "US" },
  { file: "public/data/gcc/stocks.json", market: "GCC" },
];

const universe = cache((): Map<string, { market: FeedMarket; sector: string }> => {
  const map = new Map<string, { market: FeedMarket; sector: string }>();
  for (const source of MARKET_FILES) {
    try {
      const rows = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), source.file), "utf8"),
      ) as Array<{ ticker: string; sector: string }>;
      for (const row of rows) map.set(row.ticker.toUpperCase(), { market: source.market, sector: row.sector });
    } catch {
      // dataset not present
    }
  }
  return map;
});

const trimWords = (text: string, max: number): string => {
  const words = text.split(/\s+/).filter(Boolean);
  return words.length <= max ? text : `${words.slice(0, max).join(" ")}…`;
};

const label = (score: number): MaterialityLabel =>
  score >= 70 ? "High" : score >= 45 ? "Medium" : "Low";

export const getFeedItems = cache((): FeedItem[] => {
  const brokerItems: FeedItem[] = getBrokerReportIndex().map((report) => ({
    id: `broker-${report.id}`,
    kind: "broker",
    tag: report.deepDive ? "Deep-Dive" : "Broker Note",
    title: `${report.company} — ${report.headline}`,
    company: report.company,
    ticker: report.ticker ?? null,
    market: (report.market as FeedMarket) ?? "IN",
    sector: report.sector ?? null,
    date: report.date,
    source: report.brokerDisplay ?? report.broker,
    sourceId: report.brokerId ?? null,
    reportType: report.reportType,
    materiality: report.materiality ?? { score: 50, label: "Medium" as MaterialityLabel },
    href: `/newsfeed/broker/${report.id}`,
    externalUrl: report.link,
    execSummary: trimWords(report.execSummary ?? report.blurb ?? "", 95),
    detailed: report.detailedSummary ?? [],
    stats: [
      ...(report.metrics.recommendation
        ? [{ label: "Rating", value: report.metrics.recommendation }]
        : []),
      ...(report.metrics.target != null
        ? [{ label: "Target", value: `₹${report.metrics.target.toLocaleString("en-IN")}` }]
        : []),
      ...(report.metrics.cmp != null
        ? [{ label: "Price at note", value: `₹${report.metrics.cmp.toLocaleString("en-IN")}` }]
        : []),
      ...(report.metrics.target != null && report.metrics.cmp != null && report.metrics.cmp > 0
        ? [
            {
              label: "Upside",
              value: `${(((report.metrics.target - report.metrics.cmp) / report.metrics.cmp) * 100).toFixed(1)}%`,
            },
          ]
        : []),
    ],
    deepDive: report.deepDive,
  }));

  const datasetItems: FeedItem[] = getNewsfeed().map((item) => {
    const meta = universe().get(item.ticker?.toUpperCase() ?? "");
    const score = DATASET_MATERIALITY[item.tag] ?? 40;
    return {
      id: item.id,
      kind: "dataset",
      tag: item.tag,
      title: item.title,
      company: item.name,
      ticker: item.ticker || null,
      market: meta?.market ?? "US",
      sector: meta?.sector ?? null,
      date: item.date,
      source: "Stockmonk dataset",
      sourceId: null,
      reportType: null,
      materiality: { score, label: label(score) },
      href: item.href,
      externalUrl: null,
      execSummary: trimWords(item.summary, 95),
      detailed: [{ heading: "What changed", bullets: [item.summary] }],
      stats: [
        ...(item.price != null ? [{ label: "Price", value: item.price.toFixed(2) }] : []),
        ...(item.changePct != null
          ? [{ label: "Change", value: `${(item.changePct * 100).toFixed(1)}%` }]
          : []),
      ],
      deepDive: false,
    };
  });

  return [...brokerItems, ...datasetItems].sort((a, b) => b.date.localeCompare(a.date));
});

export type FeedCategory =
  | "all"
  | "breaking"
  | "earnings"
  | "broker"
  | "revisions"
  | "corporate"
  | "management"
  | "sector"
  | "macro";

export const CATEGORIES: Array<{ id: FeedCategory; label: string }> = [
  { id: "all", label: "All Updates" },
  { id: "breaking", label: "Breaking Developments" },
  { id: "earnings", label: "Earnings & Results" },
  { id: "broker", label: "Broker Research" },
  { id: "revisions", label: "Estimate Revisions" },
  { id: "corporate", label: "Corporate Actions" },
  { id: "management", label: "Management Commentary" },
  { id: "sector", label: "Sector Intelligence" },
  { id: "macro", label: "Macro & Markets" },
];

export function inCategory(item: FeedItem, category: FeedCategory): boolean {
  switch (category) {
    case "breaking":
      return item.materiality.label === "High";
    case "earnings":
      return item.tag === "Earnings Results" || item.tag === "Earnings Call" || item.tag === "Earnings Preview";
    case "broker":
      return item.kind === "broker";
    case "management":
      return item.tag === "Earnings Call" || item.reportType === "Management Commentary";
    case "sector":
      return item.reportType === "Sector Report" || item.tag === "Macro News";
    case "macro":
      return item.tag === "Macro News";
    case "corporate":
      return /acquisition|merger|demerger|buyback|dividend|bonus|split|rights issue|stake/i.test(item.title);
    case "revisions":
      return false;
    default:
      return true;
  }
}

export function sortFeed(items: FeedItem[], sort: "date" | "materiality"): FeedItem[] {
  return [...items].sort((a, b) => {
    if (sort === "materiality") {
      const delta =
        MATERIALITY_ORDER[b.materiality.label] - MATERIALITY_ORDER[a.materiality.label];
      if (delta !== 0) return delta;
    }
    return b.date.localeCompare(a.date);
  });
}
