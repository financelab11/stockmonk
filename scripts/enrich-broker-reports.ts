/**
 * Enriches stored broker reports with company resolution, materiality and the
 * two summary levels. Does not refetch PDFs.
 *
 * Run: pnpm enrich:brokers
 */
import fs from "node:fs";
import path from "node:path";
import { resolveCompany } from "../lib/company-resolver";
import { scoreMateriality } from "../lib/materiality";
import { detailedSummary, executiveSummary } from "../lib/broker-summary";
import { findBroker } from "../config/brokers";

const DIR = path.join(process.cwd(), "data", "broker-reports");
const files = fs.readdirSync(DIR).filter((file) => file.endsWith(".json") && file !== "index.json");
let enriched = 0;

const index = [];
for (const file of files) {
  const record = JSON.parse(fs.readFileSync(path.join(DIR, file), "utf8"));
  const company = resolveCompany(record.company) ?? resolveCompany(record.headline);
  const broker = findBroker(record.broker);
  const materiality = scoreMateriality({
    reportType: record.reportType,
    headline: `${record.headline} ${record.company}`,
    target: record.metrics?.target ?? null,
    cmp: record.metrics?.cmp ?? null,
    recommendation: record.metrics?.recommendation ?? null,
  });
  const execSummary = executiveSummary({
    broker: broker?.displayName ?? record.broker,
    reportType: record.reportType,
    company: record.company,
    blurb: record.blurb ?? "",
    metrics: record.metrics ?? {},
  });
  const detailed = detailedSummary({
    blurb: record.blurb ?? "",
    highlights: record.summary?.highlights ?? [],
    valuation: record.summary?.valuation ?? [],
    watch: record.summary?.watch ?? [],
    metrics: record.metrics ?? {},
  });

  const next = {
    ...record,
    brokerId: broker?.id ?? record.broker.toLowerCase().replace(/\s+/g, "-"),
    brokerDisplay: broker?.displayName ?? record.broker,
    ticker: company?.ticker ?? null,
    market: company?.market ?? "IN",
    sector: company?.sector ?? null,
    materiality,
    execSummary,
    detailedSummary: detailed,
  };
  fs.writeFileSync(path.join(DIR, file), JSON.stringify(next, null, 2));
  index.push({
    id: next.id,
    date: next.date,
    broker: next.broker,
    brokerId: next.brokerId,
    brokerDisplay: next.brokerDisplay,
    company: next.company,
    ticker: next.ticker,
    market: next.market,
    sector: next.sector,
    headline: next.headline,
    reportType: next.reportType,
    deepDive: next.deepDive,
    blurb: next.blurb,
    execSummary: next.execSummary,
    metrics: next.metrics,
    materiality: next.materiality,
    detailedSummary: next.detailedSummary,
    link: next.link,
  });
  enriched += 1;
}

index.sort((a, b) => b.date.localeCompare(a.date));
fs.writeFileSync(path.join(DIR, "index.json"), JSON.stringify(index, null, 0));
const resolved = index.filter((row) => row.ticker).length;
console.log(`[enrich] ${enriched} reports, ${resolved} matched to a ticker`);
