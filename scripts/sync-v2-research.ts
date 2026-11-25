/**
 * Syncs normalized research scores, evidence, KPIs and article status to
 * Supabase using the direct Postgres connection.
 *
 * Run: pnpm sync:v2
 * Skips cleanly when SUPABASE_DB_PASSWORD is not configured.
 */
import { config as loadEnv } from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { Client } from "pg";
import type { V2ScoreRecord, V2ScoresDataset } from "../lib/scoring-v2/types";
import type { CompanyKpis } from "../lib/scoring-v2/kpis";
import type { StoryFreshnessManifest } from "../lib/story-freshness";

loadEnv({ path: ".env.local" });
loadEnv();

const ROOT = process.cwd();
const V2 = path.join(ROOT, "public", "data", "v2");
const SCORES = path.join(V2, "scores.json");
const COMPANIES = path.join(V2, "companies");
const KPIS = path.join(V2, "kpis");
const FRESHNESS = path.join(ROOT, "data", "story-freshness.json");

type Json = Record<string, unknown>;

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

async function upsert(
  client: Client,
  table: string,
  rows: Json[],
  conflict: string,
): Promise<number> {
  if (!rows.length) return 0;
  const columns = Object.keys(rows[0]);
  const conflictColumns = conflict.split(",");
  const updates = columns
    .filter((column) => !conflictColumns.includes(column))
    .map((column) => `${column} = excluded.${column}`)
    .join(", ");
  let written = 0;
  const batchSize = 500;
  for (let index = 0; index < rows.length; index += batchSize) {
    const batch = rows.slice(index, index + batchSize);
    const params: unknown[] = [];
    const placeholders = batch.map((row) => {
      const cells = columns.map((column) => {
        params.push(row[column] ?? null);
        return `$${params.length}`;
      });
      return `(${cells.join(",")})`;
    });
    await client.query(
      `insert into public.${table} (${columns.join(",")}) values ${placeholders.join(
        ",",
      )} on conflict (${conflict}) do update set ${updates}`,
      params,
    );
    written += batch.length;
  }
  return written;
}

async function main() {
  if (!process.env.SUPABASE_DB_PASSWORD) {
    console.log("[v2-sync] SUPABASE_DB_PASSWORD not configured; skipping");
    return;
  }
  const scores = readJson<V2ScoresDataset>(SCORES);
  if (!scores) {
    console.log("[v2-sync] no V2 scores; skipping");
    return;
  }
  const freshness = readJson<StoryFreshnessManifest>(FRESHNESS);
  const client = new Client({
    host:
      process.env.SUPABASE_DB_HOST ||
      "aws-0-ap-northeast-1.pooler.supabase.com",
    port: 6543,
    user: process.env.SUPABASE_DB_USER || "postgres.fqzfmvnmmiisvtgnsyqa",
    password: process.env.SUPABASE_DB_PASSWORD,
    database: "postgres",
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 15000,
  });
  await client.connect();

  try {
    const scoreRows: Json[] = [];
    const evidenceRows: Json[] = [];
    const articleRows: Json[] = [];
    const kpiRows: Json[] = [];

    for (const [ticker, summary] of Object.entries(scores.companies)) {
      const full =
        readJson<V2ScoreRecord>(path.join(COMPANIES, `${ticker}.json`)) ??
        summary;
      for (const key of [
        "growth",
        "quality",
        "valuation",
        "technical",
      ] as const) {
        const component = full.scores[key];
        scoreRows.push({
          ticker,
          methodology_version: scores.methodologyVersion,
          score_type: key,
          score: component.score,
          coverage: component.coverage,
          status: component.status,
          as_of: full.asOf,
          updated_at: new Date().toISOString(),
        });
        for (const item of component.evidence) {
          evidenceRows.push({
            ticker,
            methodology_version: scores.methodologyVersion,
            score_type: key,
            evidence_id: item.id,
            label: item.label,
            value: item.value == null ? null : String(item.value),
            unit: item.unit,
            period: item.period,
            source: item.source,
            formula: item.formula,
            max_points: item.maxPoints,
            points: item.points,
            available: item.available,
            reason: item.reason ?? null,
            updated_at: new Date().toISOString(),
          });
        }
      }
      scoreRows.push({
        ticker,
        methodology_version: scores.methodologyVersion,
        score_type: "composite",
        score: full.composite.score,
        coverage: full.composite.coverage,
        status:
          full.composite.status === "complete" ? "complete" : "incomplete",
        as_of: full.asOf,
        updated_at: new Date().toISOString(),
      });
      const filing = freshness?.tickers[ticker]?.latestFiling?.filed ?? null;
      articleRows.push({
        ticker,
        methodology_version: scores.methodologyVersion,
        market_data_as_of: full.asOf,
        financial_data_as_of: filing,
        status:
          full.composite.status === "complete"
            ? "validated"
            : "data-incomplete",
        generated_at: full.generatedAt,
        updated_at: new Date().toISOString(),
      });

      const kpis = readJson<CompanyKpis>(path.join(KPIS, `${ticker}.json`));
      for (const kpi of kpis?.kpis ?? []) {
        kpiRows.push({
          ticker,
          kpi_id: kpi.id,
          group_label: kpis?.groupLabel ?? null,
          label: kpi.label,
          value: kpi.value,
          unit: kpi.unit,
          period: kpi.period,
          source: kpi.source,
          definition: kpi.definition,
          formula: kpi.formula,
          available: kpi.available,
          reason: kpi.reason ?? null,
          updated_at: new Date().toISOString(),
        });
      }
    }

    console.log(
      "[v2-sync]",
      await upsert(
        client,
        "research_scores",
        scoreRows,
        "ticker,methodology_version,score_type",
      ),
      "scores",
      await upsert(
        client,
        "research_evidence",
        evidenceRows,
        "ticker,methodology_version,score_type,evidence_id",
      ),
      "evidence",
      await upsert(client, "company_kpis", kpiRows, "ticker,kpi_id"),
      "KPIs",
      await upsert(client, "research_articles", articleRows, "ticker"),
      "articles",
    );
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
