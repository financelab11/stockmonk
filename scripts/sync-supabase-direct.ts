/**
 * Direct Postgres sync used when only the database password is available.
 * Prefer `pnpm sync:supabase` (REST + service role) for CI.
 */
import { config as loadEnv } from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { Client } from "pg";
import { getGccEntry } from "../config/gcc-coverage";
loadEnv({ path: ".env.local" });
loadEnv();

type Json = Record<string, unknown>;
type UniverseEntry = {
  ticker: string;
  name: string;
  sector: string;
  industry: string;
  description: string;
  isResearch: boolean;
  market: string;
  currency: string | null;
  price: number | null;
  marketCap: number | null;
  asOf: string | null;
};

const ROOT = process.cwd();
const MARKETS = [
  {
    code: "US",
    stockFile: "public/data/stocks.json",
    processed: "data/processed",
    consensus: "data/consensus",
    prices: "public/data/prices",
    segments: "data/segments",
  },
  {
    code: "IN",
    stockFile: "public/data/india/stocks.json",
    processed: "data/india/processed",
    consensus: "data/india/consensus",
    prices: "public/data/india/prices",
    segments: null,
  },
  {
    code: "GCC",
    stockFile: "public/data/gcc/stocks.json",
    processed: "data/gcc/processed",
    consensus: "data/gcc/consensus",
    prices: "public/data/gcc/prices",
    segments: null,
  },
] as const;

const JSON_COLUMNS = new Set([
  "metadata",
  "factor_chips",
  "multiples_history",
  "distribution",
  "valuation",
  "quality",
  "scores",
  "consensus_check",
  "evidence",
  "historical_reference",
  "segment_context",
]);

const readJson = <T>(file: string): T | null => {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
};
const num = (value: unknown): number | null =>
  typeof value === "number" && Number.isFinite(value) ? value : null;
const str = (value: unknown): string | null =>
  typeof value === "string" && value ? value : null;
const arr = (value: unknown): unknown[] => (Array.isArray(value) ? value : []);
const obj = (value: unknown): Json =>
  value && typeof value === "object" && !Array.isArray(value)
    ? (value as Json)
    : {};


async function upsert(
  client: Client,
  table: string,
  inputRows: Json[],
  conflict: string,
  batchSize = 500,
): Promise<number> {
  if (!inputRows.length) return 0;
  const conflictColumns = conflict.split(",");
  const deduped = new Map<string, Json>();
  for (const row of inputRows) {
    const key = conflictColumns.map((column) => String(row[column] ?? "")).join("|");
    deduped.set(key, row);
  }
  const rows = [...deduped.values()];
  const columns = Object.keys(rows[0]);
  const updates = columns
    .filter((column) => !conflictColumns.includes(column) && column !== "id" && column !== "created_at")
    .map((column) => `${column} = excluded.${column}`)
    .join(", ");
  let written = 0;
  for (let index = 0; index < rows.length; index += batchSize) {
    const batch = rows.slice(index, index + batchSize);
    const params: unknown[] = [];
    const placeholders = batch.map((row) => {
      const cells = columns.map((column) => {
        const value = row[column];
        const prepared = JSON_COLUMNS.has(column)
          ? JSON.stringify(value ?? null)
          : value;
        params.push(prepared);
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
  const client = new Client({
    host:
      process.env.SUPABASE_DB_HOST ??
      "aws-0-ap-northeast-1.pooler.supabase.com",
    port: Number(process.env.SUPABASE_DB_PORT ?? 6543),
    user: process.env.SUPABASE_DB_USER ?? "postgres.fqzfmvnmmiisvtgnsyqa",
    password: process.env.SUPABASE_DB_PASSWORD,
    database: "postgres",
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 20_000,
  });
  await client.connect();
  console.log("[db-sync] connected");

  const run = await client.query(
    "insert into public.ingestion_runs (pipeline, status) values ('direct-postgres-sync','running') returning id",
  );
  const runId = run.rows[0].id as string;

  try {
    const companies: Json[] = [];
    const companyKeys = new Set<string>();
    for (const market of MARKETS) {
      const entries = readJson<UniverseEntry[]>(path.join(ROOT, market.stockFile)) ?? [];
      for (const entry of entries) {
        const gcc = market.code === "GCC" ? getGccEntry(entry.ticker) : null;
        companyKeys.add(`${market.code}:${entry.ticker}`);
        companies.push({
          market: market.code,
          ticker: entry.ticker,
          name: entry.name,
          description: entry.description,
          sector: entry.sector,
          industry: entry.industry,
          currency: entry.currency ?? "USD",
          quote_currency: gcc
            ? gcc.market === "AE"
              ? "AED"
              : gcc.market === "SA"
                ? "SAR"
                : gcc.market === "QA"
                  ? "QAR"
                  : gcc.market === "KW"
                    ? "KWD"
                    : gcc.market === "OM"
                      ? "OMR"
                      : "BHD"
            : entry.currency,
          exchange: gcc?.exchange ?? (market.code === "IN" ? "NSE" : "US"),
          is_research: entry.isResearch,
          is_active: true,
          metadata: { as_of: entry.asOf, price: entry.price, market_cap: entry.marketCap },
        });
      }
    }

    const forwardDataset = readJson<Json>("data/growth-ranker/estimates.json");
    for (const item of arr(forwardDataset?.results)) {
      const result = obj(item);
      const ticker = str(result.ticker);
      if (!ticker || companyKeys.has(`IN:${ticker}`)) continue;
      companyKeys.add(`IN:${ticker}`);
      companies.push({
        market: "IN",
        ticker,
        name: str(result.name) ?? ticker,
        description: "",
        sector: str(result.sector) ?? "India",
        industry: str(result.sector) ?? "India",
        currency: "INR",
        quote_currency: "INR",
        exchange: "NSE",
        is_research: false,
        is_active: true,
        metadata: { source: "forward-growth dataset" },
      });
    }

    console.log("[db-sync] companies", await upsert(client, "companies", companies, "market,ticker"));

    const companyRows = await client.query("select id, market, ticker from public.companies");
    const companyMap = new Map<string, string>(
      companyRows.rows.map((row) => [`${row.market}:${row.ticker}`, row.id as string]),
    );

    let priceCount = 0;
    if (process.env.SKIP_PRICES === "1") {
      const existing = await client.query("select count(*)::int as count from public.prices_daily");
      priceCount = existing.rows[0].count as number;
      console.log("[db-sync] prices already present", priceCount);
    } else {
      for (const market of MARKETS) {
      const entries = readJson<UniverseEntry[]>(path.join(ROOT, market.stockFile)) ?? [];
      for (const entry of entries) {
        const companyId = companyMap.get(`${market.code}:${entry.ticker}`);
        if (!companyId) continue;
        const points =
          readJson<Array<Record<string, number>>>(
            path.join(ROOT, market.prices, entry.ticker, "MAX.json"),
          ) ?? [];
        const rows = points
          .map((point, index) => ({
            company_id: companyId,
            price_date:
              point.t && Number.isFinite(point.t)
                ? new Date(point.t * 1000).toISOString().slice(0, 10)
                : null,
            close: num(point.c),
            open: num(point.o),
            high: num(point.h),
            low: num(point.l),
            volume: num(point.v),
            currency: entry.currency,
            source: "Stockmonk price history",
            market_cap: index === points.length - 1 ? entry.marketCap : null,
          }))
          .filter((row) => row.price_date && row.close != null);
        priceCount += await upsert(client, "prices_daily", rows, "company_id,price_date", 800);
        if (priceCount % 100000 < 800) {
          console.log("[db-sync] prices", priceCount);
        }
      }
    }
    }
    console.log("[db-sync] prices", priceCount);

    let financialCount = 0;
    for (const market of MARKETS) {
      const dir = path.join(ROOT, market.processed);
      if (!fs.existsSync(dir)) continue;
      for (const ticker of fs.readdirSync(dir)) {
        const companyId = companyMap.get(`${market.code}:${ticker}`);
        if (!companyId) continue;
        const data = readJson<Json>(path.join(dir, ticker, "data.json"));
        if (!data) continue;
        const annual = arr(data.annual).map(obj);
        const quarterly = arr(data.quarterly).map(obj);
        const ttm = data.ttm ? obj(data.ttm) : null;
        const toRow = (row: Json, periodType: string) => ({
          company_id: companyId,
          period_type: periodType,
          fiscal_year: num(row.fyear),
          period: str(row.period) ?? periodType,
          report_date: str(row.reportDate),
          publish_date: str(row.publishDate),
          currency: str(data.currency),
          revenue: num(row.revenue),
          gross_profit: num(row.grossProfit),
          operating_income: num(row.operatingIncome),
          ebitda: num(row.ebitda),
          net_income: num(row.netIncome),
          eps_diluted: num(row.epsDiluted),
          eps_basic: num(row.epsBasic),
          interest_expense: num(row.interestExpense),
          pretax_income: num(row.pretaxIncome),
          income_tax: num(row.incomeTax),
          total_assets: num(row.totalAssets),
          total_equity: num(row.totalEquity),
          total_debt: num(row.totalDebt),
          cash_and_investments: num(row.cashAndInvestments),
          inventory: num(row.inventory),
          receivables: num(row.receivables),
          cfo: num(row.cfo),
          capex: num(row.capex),
          free_cash_flow: num(row.freeCashFlow),
          depreciation_amortization: num(row.da),
          dividends_paid: num(row.dividendsPaid),
          buybacks: num(row.buybacks),
          operating_margin: num(row.operatingMargin),
          net_margin: num(row.netMargin),
          fcf_margin: num(row.fcfMargin),
          roic: num(row.roic),
          roe: num(row.roe),
          net_debt: num(row.netDebt),
          net_debt_to_ebitda: num(row.netDebtToEbitda),
          source: "Stockmonk processed dataset",
        });
        const rows = [
          ...annual.filter((row) => row.reportDate).map((row) => toRow(row, "annual")),
          ...quarterly.filter((row) => row.reportDate).map((row) => toRow(row, "quarterly")),
          ...(ttm ? [{ ...toRow(ttm, "ttm"), fiscal_year: 0, period: "TTM" }] : []),
        ];
        financialCount += await upsert(
          client,
          "financial_periods",
          rows,
          "company_id,period_type,fiscal_year,period",
        );

        const metrics = obj(data.metrics);
        const asOf = str(obj(data.latestPrice).asOf) ?? str(data.updatedAt)?.slice(0, 10);
        if (asOf) {
          await upsert(
            client,
            "financial_metrics",
            [
              {
                company_id: companyId,
                as_of: asOf,
                revenue_ttm: num(metrics.revenueTtm),
                revenue_growth_ttm: num(metrics.revenueGrowthTtm),
                revenue_growth_latest_q: num(metrics.revenueGrowthLatestQ),
                eps_ttm: num(metrics.epsTtm),
                gross_margin: num(metrics.grossMargin),
                operating_margin: num(metrics.operatingMargin),
                net_margin: num(metrics.netMargin),
                fcf_margin: num(metrics.fcfMargin),
                roic: num(metrics.roic),
                roe: num(metrics.roe),
                net_debt: num(metrics.netDebt),
                net_debt_to_ebitda: num(metrics.netDebtToEbitda),
                interest_cover: num(metrics.interestCover),
                free_cash_flow_ttm: num(metrics.freeCashFlowTtm),
                ebitda_ttm: num(metrics.ebitdaTtm),
                pe: num(metrics.pe),
                forward_pe: num(metrics.forwardPe),
                ev_ebitda: num(metrics.evEbitda),
                ev_sales: num(metrics.evSales),
                peg: num(metrics.peg),
                pfcf: num(metrics.pfcf),
                fcf_yield: num(metrics.fcfYield),
                return_1y: num(metrics.return1y),
                return_ytd: num(metrics.returnYtd),
                return_5y: num(metrics.return5y),
                factor_chips: arr(data.factorChips),
                multiples_history: arr(data.multipleHistory),
              },
            ],
            "company_id,as_of",
          );
        }

        const segmentFile = market.segments
          ? readJson<Json>(path.join(ROOT, market.segments, `${ticker}.json`))
          : null;
        const segmentRows = arr(segmentFile?.segments).map((item) => {
          const segment = obj(item);
          return {
            company_id: companyId,
            fiscal_year: Number(str(segmentFile?.asOf)?.slice(0, 4)) || null,
            segment_label: str(segmentFile?.segmentLabel),
            segment_name: str(segment.name) ?? "Consolidated revenue",
            geography: "consolidated",
            revenue: num(segment.revenue),
            share: num(segment.share),
            source_url: str(obj(segmentFile?.source).url),
            as_of: str(segmentFile?.asOf),
          };
        });
        if (!segmentRows.length && annual.length) {
          const latestAnnual = annual.at(-1) ?? {};
          segmentRows.push({
            company_id: companyId,
            fiscal_year: num(latestAnnual.fyear),
            segment_label: "Reported revenue",
            segment_name: "Consolidated revenue",
            geography: "consolidated",
            revenue: num(latestAnnual.revenue),
            share: 1,
            source_url: null,
            as_of: str(latestAnnual.reportDate),
          });
        }
        if (segmentRows.length) {
          await upsert(
            client,
            "segments",
            segmentRows,
            "company_id,fiscal_year,segment_label,segment_name,geography",
          );
        }
      }
    }
    console.log("[db-sync] financial rows", financialCount);

    let consensusCount = 0;
    for (const market of MARKETS) {
      const dir = path.join(ROOT, market.consensus);
      if (!fs.existsSync(dir)) continue;
      for (const file of fs.readdirSync(dir).filter((name) => name.endsWith(".json"))) {
        const companyId = companyMap.get(`${market.code}:${file.replace(/\.json$/, "")}`);
        if (!companyId) continue;
        const record = readJson<Json>(path.join(dir, file));
        if (!record) continue;
        const asOf = str(record.asOf) ?? new Date().toISOString().slice(0, 10);
        const provider = str(record.provider) ?? "Third-party consensus";
        const estimates = arr(record.estimates).map((item) => {
          const estimate = obj(item);
          return {
            company_id: companyId,
            provider,
            as_of: asOf,
            period: str(estimate.period) ?? "Unknown",
            end_date: str(estimate.endDate),
            revenue_avg: num(estimate.revenueAvg),
            revenue_high: num(estimate.revenueHigh),
            revenue_low: num(estimate.revenueLow),
            eps_avg: num(estimate.epsAvg),
            eps_growth: num(estimate.epsGrowth),
            revenue_growth: num(estimate.revenueGrowth),
            analyst_count: num(estimate.analystCount),
            source_url: str(record.sourceUrl),
          };
        });
        if (estimates.length) {
          consensusCount += await upsert(
            client,
            "consensus_estimates",
            estimates,
            "company_id,provider,period,end_date",
          );
        }
        if (record.targetMean != null || record.analystCount != null) {
          await upsert(
            client,
            "consensus_targets",
            [
              {
                company_id: companyId,
                provider,
                as_of: asOf,
                target_mean: num(record.targetMean),
                target_high: num(record.targetHigh),
                target_low: num(record.targetLow),
                recommendation_key: str(record.recommendationKey),
                analyst_count: num(record.analystCount),
                distribution: record.distribution ?? null,
                source_url: str(record.sourceUrl),
              },
            ],
            "company_id,provider,as_of",
          );
        }
      }
    }
    console.log("[db-sync] consensus", consensusCount);

    const dataset = readJson<Json>("data/growth-ranker/estimates.json");
    const forwardRows = arr(dataset?.results)
      .map((item) => {
        const result = obj(item);
        const companyId = companyMap.get(`IN:${str(result.ticker) ?? ""}`);
        if (!companyId) return null;
        const projections = obj(result.projections);
        const fy1 = obj(projections.FY1);
        const fy2 = obj(projections.FY2);
        const fy3 = obj(projections.FY3);
        const cagr = obj(result.cagr_3y);
        const marketCap = obj(result.market_cap);
        const baseYear = obj(result.base_year);
        return {
          company_id: companyId,
          ticker: str(result.ticker) ?? "",
          name: str(result.name) ?? "",
          sector: str(result.sector),
          fiscal_year_end: str(result.fiscal_year_end),
          market_cap_inr: num(marketCap.value),
          market_cap_as_of: str(marketCap.asOf),
          base_year: str(baseYear.label),
          base_revenue_inr: num(baseYear.revenue),
          fy1_base: num(fy1.base),
          fy1_bear: num(fy1.bear),
          fy1_bull: num(fy1.bull),
          fy2_base: num(fy2.base),
          fy2_bear: num(fy2.bear),
          fy2_bull: num(fy2.bull),
          fy3_base: num(fy3.base),
          fy3_bear: num(fy3.bear),
          fy3_bull: num(fy3.bull),
          cagr_base: num(cagr.base),
          cagr_bear: num(cagr.bear),
          cagr_bull: num(cagr.bull),
          method: str(result.method) ?? "UNKNOWN",
          confidence: str(result.confidence),
          valuation: result.valuation ?? {},
          quality: result.quality ?? {},
          scores: result.scores ?? {},
          consensus_check: result.consensus ?? {},
          evidence: result.evidence ?? [],
          assumptions: arr(result.assumptions),
          risks: arr(result.risks),
          historical_reference: result.historical_reference ?? [],
          segment_context: result.segment_context ?? [],
          generated_at: str(result.generated_at),
        };
      })
      .filter((row): row is NonNullable<typeof row> => row != null);
    console.log(
      "[db-sync] forward estimates",
      await upsert(client, "forward_estimates", forwardRows, "company_id"),
    );

    await client.query("select public.refresh_company_snapshots()");
    await client.query("select public.refresh_data_freshness()");
    await client.query(
      "update public.ingestion_runs set status='succeeded', finished_at=now(), rows_written=$1 where id=$2",
      [priceCount + financialCount + consensusCount + forwardRows.length, runId],
    );
    console.log("[db-sync] done");
    await client.end();
  } catch (error) {
    await client.query(
      "update public.ingestion_runs set status='failed', finished_at=now(), error=$1 where id=$2",
      [error instanceof Error ? error.message : String(error), runId],
    );
    await client.end();
    throw error;
  }
}

main().catch((error) => {
  console.error("[db-sync] failed", error);
  process.exit(1);
});
