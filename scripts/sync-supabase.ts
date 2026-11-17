/**
 * Push the file-based Stockmonk datasets into Supabase.
 *
 * Requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.
 * Run: pnpm sync:supabase
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });
loadEnv();
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { getGccEntry } from "../config/gcc-coverage";

type Json = Record<string, unknown>;
type CompanyRow = {
  id: string;
  market: string;
  ticker: string;
  name: string;
};
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
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error(
    "[sync] Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL.",
  );
  process.exit(1);
}
const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

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
  table: string,
  rows: Json[],
  onConflict: string,
  batchSize = 500,
): Promise<number> {
  let written = 0;
  const conflictColumns = onConflict.split(",");
  const deduped = new Map<string, Json>();
  for (const row of rows) {
    const key = conflictColumns
      .map((column) => String(row[column] ?? ""))
      .join("|");
    deduped.set(key, row);
  }
  const uniqueRows = [...deduped.values()];
  for (let index = 0; index < uniqueRows.length; index += batchSize) {
    const batch = uniqueRows.slice(index, index + batchSize);
    let lastError: { message: string; cause?: unknown } | null = null;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      const { error } = await supabase
        .from(table)
        .upsert(batch, { onConflict, ignoreDuplicates: false });
      if (!error) {
        lastError = null;
        break;
      }
      lastError = error;
      if (attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
      }
    }
    if (lastError) {
      const cause = (lastError as { cause?: unknown }).cause;
      const detail = cause instanceof Error ? `: ${cause.message}` : "";
      throw new Error(
        `${table}: ${lastError.message}${detail} (rows ${index}-${index + batch.length - 1})`,
      );
    }
    written += batch.length;
  }
  return written;
}

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

function companyRows(): Json[] {
  const rows: Json[] = [];
  for (const market of MARKETS) {
    const entries =
      readJson<UniverseEntry[]>(path.join(ROOT, market.stockFile)) ?? [];
    for (const entry of entries) {
      const exchange =
        market.code === "GCC"
          ? getGccEntry(entry.ticker)?.exchange
          : market.code === "IN"
            ? "NSE"
            : "US";
      rows.push({
        market: market.code,
        ticker: entry.ticker,
        name: entry.name,
        description: entry.description,
        sector: entry.sector,
        industry: entry.industry,
        currency: entry.currency ?? "USD",
        quote_currency:
          market.code === "GCC"
            ? getGccEntry(entry.ticker)?.market === "AE"
              ? "AED"
              : getGccEntry(entry.ticker)?.market === "SA"
                ? "SAR"
                : getGccEntry(entry.ticker)?.market === "QA"
                  ? "QAR"
                  : getGccEntry(entry.ticker)?.market === "KW"
                    ? "KWD"
                    : getGccEntry(entry.ticker)?.market === "OM"
                      ? "OMR"
                      : getGccEntry(entry.ticker)?.market === "BH"
                        ? "BHD"
                        : entry.currency
            : entry.currency,
        exchange,
        is_research: entry.isResearch,
        is_active: true,
        metadata: { as_of: entry.asOf, price: entry.price, market_cap: entry.marketCap },
      });
    }
  }

  // The forward-growth ranker covers more Indian names than the stock universe
  // files, so add any ticker that only exists in the forward dataset.
  const seen = new Set(rows.map((row) => `${String(row.market)}:${String(row.ticker)}`));
  const forward =
    readJson<{ results?: Array<Record<string, unknown>> }>(
      path.join(ROOT, "data/growth-ranker/estimates.json"),
    ) ?? {};
  for (const result of forward.results ?? []) {
    const ticker = str(result.ticker);
    if (!ticker || seen.has(`IN:${ticker}`)) continue;
    seen.add(`IN:${ticker}`);
    rows.push({
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
  return rows;
}

async function syncCompanies(): Promise<Map<string, CompanyRow>> {
  const rows = companyRows();
  const written = await upsert("companies", rows, "market,ticker");
  console.log(`[sync] companies ${written}`);
  const { data, error } = await supabase
    .from("companies")
    .select("id,market,ticker,name");
  if (error) throw new Error(error.message);
  return new Map(
    (data ?? []).map((row) => [
      `${row.market}:${row.ticker}`,
      row as CompanyRow,
    ]),
  );
}

async function syncPrices(companies: Map<string, CompanyRow>): Promise<number> {
  let written = 0;
  if (process.env.SKIP_PRICES === "1") {
    console.log("[sync] prices skipped (SKIP_PRICES=1)");
    return 0;
  }
  for (const market of MARKETS) {
    const entries =
      readJson<UniverseEntry[]>(path.join(ROOT, market.stockFile)) ?? [];
    for (const entry of entries) {
      const company = companies.get(`${market.code}:${entry.ticker}`);
      if (!company) continue;
      const points =
        readJson<Array<Record<string, number>>>(
          path.join(ROOT, market.prices, entry.ticker, "MAX.json"),
        ) ?? [];
      const rows = points.map((point, index) => {
        const date =
          point.t && Number.isFinite(point.t)
            ? new Date(point.t * 1000).toISOString().slice(0, 10)
            : null;
        return {
          company_id: company.id,
          price_date: date,
          close: num(point.c),
          open: num(point.o),
          high: num(point.h),
          low: num(point.l),
          volume: num(point.v),
          currency: entry.currency,
          source: "Stockmonk price history",
          market_cap: index === points.length - 1 ? entry.marketCap : null,
        };
      }).filter((row) => row.price_date && row.close != null);
      if (rows.length) {
        written += await upsert("prices_daily", rows, "company_id,price_date", 1000);
      }
    }
  }
  console.log(`[sync] prices ${written}`);
  return written;
}

async function syncFinancials(companies: Map<string, CompanyRow>): Promise<number> {
  let written = 0;
  for (const market of MARKETS) {
    const dir = path.join(ROOT, market.processed);
    if (!fs.existsSync(dir)) continue;
    for (const ticker of fs.readdirSync(dir)) {
      const company = companies.get(`${market.code}:${ticker}`);
      if (!company) continue;
      const data = readJson<Json>(path.join(dir, ticker, "data.json"));
      if (!data) continue;
      const currency = str(data.currency);
      const annual = arr(data.annual).map((item) => obj(item));
      const quarterly = arr(data.quarterly).map((item) => obj(item));
      const ttm = data.ttm ? obj(data.ttm) : null;
      const rows: Json[] = [];

      const toRow = (row: Json, type: string) => ({
        company_id: company.id,
        period_type: type,
        fiscal_year: num(row.fyear),
        period: str(row.period) ?? type,
        report_date: str(row.reportDate),
        publish_date: str(row.publishDate),
        currency,
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

      for (const row of annual) {
        if (row.reportDate) rows.push(toRow(row, "annual"));
      }
      for (const row of quarterly) {
        if (row.reportDate) rows.push(toRow(row, "quarterly"));
      }
      if (ttm) {
        rows.push({
          ...toRow(ttm, "ttm"),
          fiscal_year: 0,
          period: "TTM",
        });
      }
      if (rows.length) {
        written += await upsert(
          "financial_periods",
          rows,
          "company_id,period_type,fiscal_year,period",
          500,
        );
      }

      const metrics = obj(data.metrics);
      const latest = obj(data.latestPrice);
      const asOf = str(latest.asOf) ?? str(data.updatedAt)?.slice(0, 10);
      if (asOf) {
        await upsert(
          "financial_metrics",
          [
            {
              company_id: company.id,
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
          company_id: company.id,
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
          company_id: company.id,
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
        written += await upsert(
          "segments",
          segmentRows,
          "company_id,fiscal_year,segment_label,segment_name,geography",
        );
      }
    }
  }
  console.log(`[sync] financial rows ${written}`);
  return written;
}

async function syncConsensus(companies: Map<string, CompanyRow>): Promise<number> {
  let written = 0;
  for (const market of MARKETS) {
    const dir = path.join(ROOT, market.consensus);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter((name) => name.endsWith(".json"))) {
      const ticker = file.replace(/\.json$/, "");
      const company = companies.get(`${market.code}:${ticker}`);
      if (!company) continue;
      const record = readJson<Json>(path.join(dir, file));
      if (!record) continue;
      const asOf = str(record.asOf) ?? new Date().toISOString().slice(0, 10);
      const provider = str(record.provider) ?? "Third-party consensus";
      const estimates = arr(record.estimates).map((item) => {
        const estimate = obj(item);
        return {
          company_id: company.id,
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
        written += await upsert(
          "consensus_estimates",
          estimates,
          "company_id,provider,period,end_date",
        );
      }
      if (record.targetMean != null || record.analystCount != null) {
        await upsert(
          "consensus_targets",
          [
            {
              company_id: company.id,
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
  console.log(`[sync] consensus ${written}`);
  return written;
}

async function syncForwardEstimates(companies: Map<string, CompanyRow>): Promise<number> {
  const dataset = readJson<Json>("data/growth-ranker/estimates.json");
  if (!dataset) return 0;
  const rows = arr(dataset.results).map((item) => {
    const result = obj(item);
    const ticker = str(result.ticker) ?? "";
    const company = companies.get(`IN:${ticker}`);
    if (!company) return null;
    const projections = obj(result.projections);
    const fy1 = obj(projections.FY1);
    const fy2 = obj(projections.FY2);
    const fy3 = obj(projections.FY3);
    const cagr = obj(result.cagr_3y);
    const marketCap = obj(result.market_cap);
    const baseYear = obj(result.base_year);
    return {
      company_id: company.id,
      ticker,
      name: str(result.name) ?? company.name,
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
  }).filter((row): row is NonNullable<typeof row> => row != null);
  const written = await upsert("forward_estimates", rows, "company_id");
  console.log(`[sync] forward estimates ${written}`);
  return written;
}

async function main() {
  const { data: run, error: runError } = await supabase
    .from("ingestion_runs")
    .insert({ pipeline: "supabase-sync", status: "running" })
    .select("id")
    .single();
  if (runError) throw new Error(runError.message);

  try {
    const companies = await syncCompanies();
    const prices = await syncPrices(companies);
    const financials = await syncFinancials(companies);
    const consensus = await syncConsensus(companies);
    const forward = await syncForwardEstimates(companies);

    await supabase.rpc("refresh_company_snapshots");
    await supabase.rpc("refresh_data_freshness");
    await supabase
      .from("ingestion_runs")
      .update({
        status: "succeeded",
        finished_at: new Date().toISOString(),
        rows_written: prices + financials + consensus + forward,
      })
      .eq("id", run.id);
    console.log("[sync] done");
  } catch (error) {
    await supabase
      .from("ingestion_runs")
      .update({
        status: "failed",
        finished_at: new Date().toISOString(),
        error: error instanceof Error ? error.message : String(error),
      })
      .eq("id", run.id);
    throw error;
  }
}

main().catch((error) => {
  console.error("[sync] failed", error);
  process.exit(1);
});
