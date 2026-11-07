/**
 * SEC EDGAR ingestion for the research universe.
 *
 * Uses the official XBRL companyfacts API to reconstruct quarterly and annual
 * flow series (SEC facts are year-to-date, so quarters are derived by
 * subtraction) and records the latest 10-K / 10-Q / 8-K filings.
 *
 * Run: pnpm ingest:edgar
 */
import fs from "node:fs/promises";
import path from "node:path";
import { RESEARCH_TICKERS } from "../config/universe";
import {
  extractFlowSeries,
  filingsFrom,
  getCompanyFacts,
  getFilingIndex,
  getSubmissions,
  getTickerCikMap,
  type CompanyFacts,

} from "../lib/edgar";

const PROCESSED = path.join(process.cwd(), "data", "processed");

type SecQuarter = {
  end: string;
  fyear?: number;
  period?: string;
  revenue: number | null;
  grossProfit: number | null;
  operatingIncome: number | null;
  netIncome: number | null;
  epsDiluted: number | null;
  cfo: number | null;
  capex: number | null;
  freeCashFlow: number | null;
  da: number | null;
  sbc: number | null;
};

type SecAnnual = SecQuarter;

const REVENUE_TAGS = [
  "RevenueFromContractWithCustomerExcludingAssessedTax",
  "Revenues",
  "RevenuesNetOfInterestExpense",
  "SalesRevenueNet",
  "RevenueFromContractWithCustomerIncludingAssessedTax",
];
const GROSS_PROFIT_TAGS = ["GrossProfit"];
const COST_TAGS = ["CostOfRevenue", "CostOfGoodsAndServicesSold", "CostOfGoodsAndServicesSoldExcludingDepreciationDepletionAndAmortization"];
const OPERATING_INCOME_TAGS = [
  "OperatingIncomeLoss",
  "IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest",
  "IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments",
];
const NET_INCOME_TAGS = ["NetIncomeLoss", "ProfitLoss"];
const EPS_TAGS = ["EarningsPerShareDiluted", "EarningsPerShareBasicAndDiluted"];
const CFO_TAGS = ["NetCashProvidedByUsedInOperatingActivities", "NetCashProvidedByUsedInOperatingActivitiesContinuingOperations"];
const CAPEX_TAGS = [
  "PaymentsToAcquirePropertyPlantAndEquipment",
  "PaymentsToAcquireProductiveAssets",
  "PaymentsToAcquirePropertyPlantAndEquipmentAndIntangibleAssets",
];
const DA_TAGS = ["DepreciationDepletionAndAmortization", "DepreciationAndAmortization", "Depreciation"];
const SBC_TAGS = ["ShareBasedCompensation", "AllocatedShareBasedCompensationExpense"];

type FlowSeries = Map<string, { end: string; value: number; fy?: number; period?: string; filed?: string }>;

function mergeSeries(facts: CompanyFacts, tagGroups: string[][], unit = "USD"): FlowSeries {
  const out: FlowSeries = new Map();
  for (const tags of tagGroups) {
    for (const tag of tags) {
      const series = extractFlowSeries(facts, [tag], unit).quarterly;
      for (const [end, item] of series) {
        const prev = out.get(end);
        if (!prev || (item.filed ?? "") > (prev.filed ?? "")) out.set(end, item);
      }
    }
  }
  return out;
}

function mergeAnnual(facts: CompanyFacts, tags: string[], unit = "USD") {
  const out = new Map<string, { end: string; value: number; fy?: number; filed?: string }>();
  for (const tag of tags) {
    const series = extractFlowSeries(facts, [tag], unit).annual;
    for (const [end, item] of series) {
      const prev = out.get(end);
      if (!prev || (item.filed ?? "") > (prev.filed ?? "")) out.set(end, item);
    }
  }
  return out;
}

/**
 * SEC's `fy` field describes the filing's fiscal-year focus, so comparative
 * facts inherit the *new* filing's year. Re-derive the fiscal year from the
 * company's own annual period-end dates instead.
 */
function normalizeFiscalPeriods(quarters: SecQuarter[], annual: SecAnnual[]): SecQuarter[] {
  const annualEnds = annual.map((row) => row.end).sort();
  if (annualEnds.length === 0) return quarters;
  const latestAnnualEnd = annualEnds[annualEnds.length - 1];

  return quarters.map((q) => {
    const nextAnnualEnd = annualEnds.find((end) => end >= q.end);
    const fiscalYearEnd = nextAnnualEnd ?? latestAnnualEnd;
    const fyear = nextAnnualEnd
      ? Number(fiscalYearEnd.slice(0, 4))
      : Number(latestAnnualEnd.slice(0, 4)) + 1;
    const priorAnnualEnd = nextAnnualEnd
      ? (annualEnds.filter((end) => end < fiscalYearEnd).at(-1) ?? null)
      : latestAnnualEnd;

    let period = q.period;
    if (priorAnnualEnd) {
      const days = (new Date(q.end).getTime() - new Date(priorAnnualEnd).getTime()) / 86_400_000;
      period = `Q${Math.max(1, Math.min(4, Math.round(days / 91.25)))}`;
    }

    return {
      ...q,
      fyear,
      period,
      epsDiluted: q.epsDiluted === null ? null : Math.round(q.epsDiluted * 10_000) / 10_000,
    };
  });
}

function toRows(
  revenue: FlowSeries,
  grossProfit: FlowSeries,
  operatingIncome: FlowSeries,
  netIncome: FlowSeries,
  eps: FlowSeries,
  cfo: FlowSeries,
  capex: FlowSeries,
  da: FlowSeries,
  sbc: FlowSeries,
): SecQuarter[] {
  const ends = new Set<string>([
    ...revenue.keys(),
    ...grossProfit.keys(),
    ...operatingIncome.keys(),
    ...netIncome.keys(),
  ]);
  const rows: SecQuarter[] = [];
  for (const end of [...ends].sort()) {
    const rev = revenue.get(end)?.value ?? null;
    const gp = grossProfit.get(end)?.value ?? null;
    const op = operatingIncome.get(end)?.value ?? null;
    const ni = netIncome.get(end)?.value ?? null;
    if (rev === null && op === null && ni === null) continue;
    const cfoVal = cfo.get(end)?.value ?? null;
    const capexVal = capex.get(end)?.value ?? null;
    rows.push({
      end,
      fyear: revenue.get(end)?.fy ?? operatingIncome.get(end)?.fy ?? netIncome.get(end)?.fy,
      period: revenue.get(end)?.period ?? operatingIncome.get(end)?.period ?? netIncome.get(end)?.period,
      revenue: rev,
      grossProfit: gp,
      operatingIncome: op,
      netIncome: ni,
      epsDiluted: eps.get(end)?.value ?? null,
      cfo: cfoVal,
      capex: capexVal === null ? null : Math.abs(capexVal),
      freeCashFlow: cfoVal !== null && capexVal !== null ? cfoVal - Math.abs(capexVal) : null,
      da: da.get(end)?.value ?? null,
      sbc: sbc.get(end)?.value ?? null,
    });
  }
  return rows;
}

async function main() {
  const cikMap = await getTickerCikMap();
  const summary: Array<Record<string, unknown>> = [];

  for (const ticker of RESEARCH_TICKERS) {
    const cik = cikMap[ticker];
    if (!cik) {
      console.warn(`[edgar] no CIK for ${ticker}`);
      continue;
    }
    console.log(`[edgar] ${ticker} CIK ${cik}`);
    const facts = await getCompanyFacts(cik);
    const submissions = await getSubmissions(cik);
    const filings = filingsFrom(submissions);

    const revenue = mergeSeries(facts, [REVENUE_TAGS]);
    const grossProfit = mergeSeries(facts, [GROSS_PROFIT_TAGS]);
    if (grossProfit.size === 0) {
      const cost = mergeSeries(facts, [COST_TAGS]);
      for (const [end, rev] of revenue) {
        const c = cost.get(end);
        if (c) grossProfit.set(end, { end, value: rev.value - c.value, fy: rev.fy, period: rev.period, filed: rev.filed });
      }
    }
    const operatingIncome = mergeSeries(facts, [OPERATING_INCOME_TAGS]);
    const netIncome = mergeSeries(facts, [NET_INCOME_TAGS]);
    const eps = mergeSeries(facts, [EPS_TAGS], "USD/shares");
    const cfo = mergeSeries(facts, [CFO_TAGS]);
    const capex = mergeSeries(facts, [CAPEX_TAGS]);
    const da = mergeSeries(facts, [DA_TAGS]);
    const sbc = mergeSeries(facts, [SBC_TAGS]);

    const annual = toRows(
      mergeAnnual(facts, REVENUE_TAGS),
      mergeAnnual(facts, GROSS_PROFIT_TAGS),
      mergeAnnual(facts, OPERATING_INCOME_TAGS),
      mergeAnnual(facts, NET_INCOME_TAGS),
      mergeAnnual(facts, EPS_TAGS, "USD/shares"),
      mergeAnnual(facts, CFO_TAGS),
      mergeAnnual(facts, CAPEX_TAGS),
      mergeAnnual(facts, DA_TAGS),
      mergeAnnual(facts, SBC_TAGS),
    ).slice(-8);
    const quarterly = normalizeFiscalPeriods(
      toRows(revenue, grossProfit, operatingIncome, netIncome, eps, cfo, capex, da, sbc),
      annual,
    ).slice(-24);

    const latest10K = filings.find((f) => f.form === "10-K");
    const latest10Q = filings.find((f) => f.form === "10-Q");
    const earnings8K = filings.find((f) => f.form === "8-K" && (f.items ?? "").includes("2.02"));
    let earningsReleaseUrl: string | null = null;
    if (earnings8K) {
      try {
        const index = await getFilingIndex(cik, earnings8K.accession);
        const exhibit = index.directory.item.find(
          (item) => /(ex-?99|99\.1|99-1)/i.test(item.name) && /\.(htm|html)$/i.test(item.name),
        );
        if (exhibit) {
          const cikNum = Number(cik);
          const acc = earnings8K.accession.replace(/-/g, "");
          earningsReleaseUrl = `https://www.sec.gov/Archives/edgar/data/${cikNum}/${acc}/${exhibit.name}`;
        }
      } catch {
        // optional
      }
    }

    const out = {
      ticker,
      cik: String(cik).padStart(10, "0"),
      entityName: facts.entityName,
      quarterly,
      annual,
      filings: {
        latest10K,
        latest10Q,
        latest8K: earnings8K ?? null,
        earningsReleaseUrl,
      },
      sources: [
        latest10K ? { name: `SEC 10-K (${latest10K.filed})`, url: latest10K.url, date: latest10K.filed } : null,
        latest10Q ? { name: `SEC 10-Q (${latest10Q.filed})`, url: latest10Q.url, date: latest10Q.filed } : null,
        earningsReleaseUrl ? { name: "SEC 8-K earnings release", url: earningsReleaseUrl, date: earnings8K?.filed } : null,
      ].filter(Boolean),
    };

    await fs.mkdir(path.join(PROCESSED, ticker), { recursive: true });
    await fs.writeFile(path.join(PROCESSED, ticker, "sec.json"), JSON.stringify(out, null, 2), "utf8");
    summary.push({
      ticker,
      quarterly: quarterly.length,
      annual: annual.length,
      latestQuarter: quarterly[quarterly.length - 1]?.end,
      latest10K: latest10K?.filed,
      earningsReleaseUrl,
    });
    console.log(
      `[edgar] ${ticker}: ${quarterly.length} quarters, ${annual.length} years, latest ${quarterly[quarterly.length - 1]?.end ?? "n/a"}`,
    );
  }

  await fs.writeFile(path.join(PROCESSED, "edgar-summary.json"), JSON.stringify(summary, null, 2), "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
