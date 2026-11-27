/**
 * Syncs the generated portfolio artifacts into Supabase.
 *
 * Run after the portfolio migration is applied:
 *   pnpm sync:portfolios
 *
 * The public site reads the committed JSON artifacts; this keeps the relational
 * schema available for future authenticated bookmarks and server-side queries.
 */
import { config as loadEnv } from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { Client } from "pg";
import { PORTFOLIO_SPECS } from "../config/portfolio-specs";
import type {
  PortfolioDetail,
  PortfolioIndex,
} from "../lib/portfolios/types";

loadEnv({ path: ".env.local" });
loadEnv();

const ROOT = process.cwd();
const PORTFOLIO_DIR = path.join(ROOT, "public", "data", "portfolios");
const JSON_COLUMNS = new Set([
  "selection_criteria",
  "rebalance_rules",
  "evidence",
  "report_content",
]);

const CATEGORY_SLUGS: Record<string, string> = {
  Quantitative: "quantitative",
  Thematic: "thematic",
  Sector: "sector",
  Fundamental: "fundamental",
  Technical: "technical",
  "Single-Factor": "single-factor",
  "Multi-Factor": "multi-factor",
  Growth: "growth",
  Value: "value",
  "Quality & Dividend": "quality-dividend",
  Defensive: "defensive",
  "Small & Mid Cap": "small-mid-cap",
};

const CATEGORY_ORDER = Object.keys(CATEGORY_SLUGS);

type Row = Record<string, unknown>;

function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(file, "utf8")) as T;
}

function marketCapCategory(value: number | null): string {
  if (value == null) return "Multi-Cap";
  if (value >= 200e9) return "Mega Cap";
  if (value >= 10e9) return "Large Cap";
  if (value >= 2e9) return "Mid Cap";
  return "Small Cap";
}

async function upsert(
  client: Client,
  table: string,
  rows: Row[],
  conflict: string,
  batchSize = 500,
): Promise<number> {
  if (!rows.length) return 0;
  const conflictColumns = conflict.split(",");
  const deduped = new Map<string, Row>();
  for (const row of rows) {
    const key = conflictColumns
      .map((column) => String(row[column] ?? ""))
      .join("|");
    deduped.set(key, row);
  }
  const unique = [...deduped.values()];
  const columns = Object.keys(unique[0]);
  const updates = columns
    .filter(
      (column) =>
        !conflictColumns.includes(column) &&
        column !== "created_at" &&
        column !== "id",
    )
    .map((column) => `${column} = excluded.${column}`)
    .join(", ");
  let written = 0;
  for (let index = 0; index < unique.length; index += batchSize) {
    const batch = unique.slice(index, index + batchSize);
    const params: unknown[] = [];
    const placeholders = batch.map((row) => {
      const cells = columns.map((column) => {
        const value = row[column];
        params.push(
          JSON_COLUMNS.has(column)
            ? JSON.stringify(value ?? null)
            : (value ?? null),
        );
        return `$${params.length}`;
      });
      return `(${cells.join(",")})`;
    });
    const sql = `insert into public.${table} (${columns.join(",")}) values ${placeholders.join(
      ",",
    )} on conflict (${conflict}) do update set ${updates}`;
    await client.query(sql, params);
    written += batch.length;
  }
  return written;
}

async function main() {
  if (!process.env.SUPABASE_DB_PASSWORD) {
    console.log("[portfolio-sync] SUPABASE_DB_PASSWORD not configured; skipping");
    return;
  }

  const index = readJson<PortfolioIndex>(
    path.join(PORTFOLIO_DIR, "index.json"),
  );
  const details = index.portfolios.map((summary) =>
    readJson<PortfolioDetail>(path.join(PORTFOLIO_DIR, `${summary.slug}.json`)),
  );
  const specs = new Map(PORTFOLIO_SPECS.map((spec) => [spec.slug, spec]));

  const client = new Client({
    host:
      process.env.SUPABASE_DB_HOST ||
      "aws-0-ap-northeast-1.pooler.supabase.com",
    port: Number(process.env.SUPABASE_DB_PORT || 6543),
    user: process.env.SUPABASE_DB_USER || "postgres.fqzfmvnmmiisvtgnsyqa",
    password: process.env.SUPABASE_DB_PASSWORD,
    database: "postgres",
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 15000,
  });
  await client.connect();

  try {
    await client.query("begin");

    const categoryRows: Row[] = CATEGORY_ORDER.map((name, index) => ({
      slug: CATEGORY_SLUGS[name],
      name,
      sort_order: index + 1,
    }));
    const categoryWritten = await upsert(
      client,
      "portfolio_categories",
      categoryRows,
      "slug",
    );

    const companyRows = await client.query<{ id: string; ticker: string }>(
      "select id, ticker from public.companies where market = 'US'",
    );
    const companyIds = new Map(
      companyRows.rows.map((row) => [row.ticker, row.id]),
    );

    const portfolioRows: Row[] = details.map((detail) => {
      const spec = specs.get(detail.slug);
      return {
        slug: detail.slug,
        name: detail.name,
        description: detail.description,
        primary_category: CATEGORY_SLUGS[detail.primaryCategory],
        tags: detail.tags,
        strategy_type: detail.strategyType,
        investment_thesis: detail.thesis,
        focus: detail.focus,
        risks: detail.risks,
        benchmark_id: detail.benchmark.id,
        minimum_investment: detail.minimumInvestment,
        volatility_level: detail.volatility,
        rebalance_frequency: detail.rebalanceFrequency,
        number_of_holdings: detail.holdingsCount,
        concentration_limit: spec?.concentration ?? null,
        max_sector_weight: spec?.maxSectorWeight ?? null,
        status: "published",
        methodology_version: detail.methodology.version,
        popularity: detail.popularity,
        created_at: detail.createdAt,
        updated_at: detail.updatedAt,
      };
    });
    const portfolioWritten = await upsert(
      client,
      "portfolios",
      portfolioRows,
      "slug",
    );

    const idRows = await client.query<{ id: string; slug: string }>(
      "select id, slug from public.portfolios where slug = any($1)",
      [details.map((detail) => detail.slug)],
    );
    const portfolioIds = new Map(
      idRows.rows.map((row) => [row.slug, row.id]),
    );

    const methodologyRows: Row[] = [];
    const constituentRows: Row[] = [];
    const performanceRows: Row[] = [];
    const reportRows: Row[] = [];
    const universeRows: Row[] = [];
    const scoreRows: Row[] = [];
    const rebalanceRows: Row[] = [];

    for (const detail of details) {
      const portfolioId = portfolioIds.get(detail.slug);
      if (!portfolioId) throw new Error(`Missing portfolio id for ${detail.slug}`);
      const spec = specs.get(detail.slug);

      methodologyRows.push({
        portfolio_id: portfolioId,
        methodology_version: detail.methodology.version,
        selection_criteria: detail.methodology.selectionCriteria,
        growth_weight: detail.methodology.scoreWeights.growth,
        quality_weight: detail.methodology.scoreWeights.quality,
        valuation_weight: detail.methodology.scoreWeights.valuation,
        technical_weight: detail.methodology.scoreWeights.technical,
        position_sizing_method: detail.methodology.weighting,
        concentration_limit: spec?.concentration ?? null,
        max_sector_weight: spec?.maxSectorWeight ?? null,
        rebalance_rules: {
          frequency: detail.rebalance.frequency,
          next_rebalance: detail.rebalance.nextRebalance,
        },
        effective_date: detail.createdAt,
      });

      for (const item of detail.constituents) {
        constituentRows.push({
          portfolio_id: portfolioId,
          ticker: item.ticker,
          company_name: item.name,
          company_id: companyIds.get(item.ticker) ?? null,
          weight: item.weight,
          sector: item.sector,
          market_cap: item.marketCap,
          market_cap_category: marketCapCategory(item.marketCap),
          selection_rationale: item.rationale,
          added_date: detail.createdAt,
          status: "active",
        });
        scoreRows.push({
          portfolio_id: portfolioId,
          ticker: item.ticker,
          snapshot_date: index.generatedAt.slice(0, 10),
          growth_score: item.scores.growth,
          quality_score: item.scores.quality,
          valuation_score: item.scores.valuation,
          technical_score: item.scores.technical,
          composite_score: item.scores.composite,
          rank: detail.constituents.indexOf(item) + 1,
          selected: true,
        });
      }

      for (const benchmark of detail.performance.benchmarks) {
        for (const point of benchmark.series) {
          performanceRows.push({
            portfolio_id: portfolioId,
            price_date: point.date,
            portfolio_value: 100 + point.portfolio,
            portfolio_return: point.portfolio / 100,
            benchmark_id: benchmark.id,
            benchmark_value: 100 + point.benchmark,
            benchmark_return: point.benchmark / 100,
            data_source: detail.performance.source,
            return_type: "simulated",
          });
        }
      }

      reportRows.push({
        portfolio_id: portfolioId,
        report_content: detail.report,
        methodology_version: detail.methodology.version,
        generated_at: detail.createdAt,
        updated_at: detail.updatedAt,
      });

      universeRows.push({
        portfolio_id: portfolioId,
        universe_snapshot_date: index.generatedAt.slice(0, 10),
        eligible_company_count: index.universeSize,
        selected_company_count: detail.constituents.length,
        coverage_universe_version: `screener-${index.universeSize}`,
        methodology_version: detail.methodology.version,
      });

      rebalanceRows.push({
        portfolio_id: portfolioId,
        rebalance_date: detail.rebalance.lastRebalanced,
        next_rebalance_date: detail.rebalance.nextRebalance,
        frequency: detail.rebalance.frequency,
        changes_summary: `Initial construction: ${detail.constituents.length} companies selected from the ${index.universeSize}-name coverage universe.`,
        status: "executed",
        methodology_version: detail.methodology.version,
      });

      if (
        detail.review.status === "proposed" &&
        detail.review.changes.length > 0
      ) {
        rebalanceRows.push({
          portfolio_id: portfolioId,
          rebalance_date: detail.rebalance.nextRebalance,
          next_rebalance_date: detail.rebalance.nextRebalance,
          frequency: detail.rebalance.frequency,
          changes_summary: detail.review.note,
          status: "proposed",
          methodology_version: detail.methodology.version,
        });
      }
    }

    const methodologyWritten = await upsert(
      client,
      "portfolio_methodology",
      methodologyRows,
      "portfolio_id,methodology_version",
    );
    const constituentWritten = await upsert(
      client,
      "portfolio_constituents",
      constituentRows,
      "portfolio_id,ticker",
    );
    const performanceWritten = await upsert(
      client,
      "portfolio_performance",
      performanceRows,
      "portfolio_id,price_date,benchmark_id,return_type",
      1000,
    );
    const reportWritten = await upsert(
      client,
      "portfolio_reports",
      reportRows,
      "portfolio_id,methodology_version",
    );
    const universeWritten = await upsert(
      client,
      "portfolio_universe_snapshots",
      universeRows,
      "portfolio_id,universe_snapshot_date,methodology_version",
    );
    const scoreWritten = await upsert(
      client,
      "portfolio_score_snapshots",
      scoreRows,
      "portfolio_id,ticker,snapshot_date",
    );
    await client.query(
      "delete from public.portfolio_rebalances where portfolio_id = any($1)",
      [[...portfolioIds.values()]],
    );
    const rebalanceWritten = await upsert(
      client,
      "portfolio_rebalances",
      rebalanceRows,
      "portfolio_id,rebalance_date,status",
    );

    const rebalanceIdRows = await client.query<{
      id: string;
      portfolio_id: string;
      rebalance_date: string;
      status: string;
    }>(
      "select id, portfolio_id, to_char(rebalance_date, 'YYYY-MM-DD') as rebalance_date, status from public.portfolio_rebalances where portfolio_id = any($1)",
      [[...portfolioIds.values()]],
    );
    const rebalanceIds = new Map(
      rebalanceIdRows.rows.map((row) => [
        `${row.portfolio_id}|${row.rebalance_date}|${row.status}`,
        row.id,
      ]),
    );

    const changeRows: Row[] = [];
    for (const detail of details) {
      const portfolioId = portfolioIds.get(detail.slug);
      if (!portfolioId || detail.review.status !== "proposed") continue;
      const rebalanceId = rebalanceIds.get(
        `${portfolioId}|${detail.rebalance.nextRebalance}|proposed`,
      );
      if (!rebalanceId) continue;
      await client.query(
        "delete from public.portfolio_rebalance_changes where rebalance_id = $1",
        [rebalanceId],
      );
      for (const change of detail.review.changes) {
        changeRows.push({
          rebalance_id: rebalanceId,
          ticker: change.ticker,
          action: change.action.toLowerCase(),
          previous_weight: change.currentWeight,
          new_weight: change.proposedWeight,
          reason: change.reasons.join(" "),
          evidence: {
            reasons: change.reasons,
            as_of: detail.review.asOf,
            note: detail.review.note,
          },
        });
      }
    }
    const changeWritten = await upsert(
      client,
      "portfolio_rebalance_changes",
      changeRows,
      "rebalance_id,ticker,action",
    );

    await client.query("commit");

    console.log(
      JSON.stringify(
        {
          categories: categoryWritten,
          portfolios: portfolioWritten,
          methodology: methodologyWritten,
          constituents: constituentWritten,
          performance: performanceWritten,
          reports: reportWritten,
          universe_snapshots: universeWritten,
          score_snapshots: scoreWritten,
          rebalances: rebalanceWritten,
          review_changes: changeWritten,
        },
        null,
        2,
      ),
    );
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error("[portfolio-sync] failed", error);
  process.exit(1);
});
