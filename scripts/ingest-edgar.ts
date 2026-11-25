/**
 * SEC EDGAR ingestion for the research universe.
 *
 * Uses the official XBRL companyfacts API to reconstruct complete quarterly and
 * annual statements. SEC flow facts are year-to-date, so single quarters are
 * derived by subtraction; balance-sheet facts are point-in-time and matched to
 * each period end. This is the only fundamentals source for the product.
 *
 * Run: pnpm ingest:edgar
 *      FORCE_REFRESH=1 pnpm ingest:edgar   # ignore the disk cache
 */
import fs from "node:fs/promises";
import path from "node:path";
import { RESEARCH_TICKERS, TICKER_ALIASES } from "../config/universe";
import { ARCHIVED_COMPANIES } from "../config/archive";
import {
  convertCompanyFactsToUsd,
  extractFlowSeries,
  extractInstantAt,
  extractInstantSeries,
  filingsFrom,
  getCompanyFacts,
  getFilingIndex,
  getSubmissions,
  getTickerCikMap,
  mergeCompanyFacts,
  type CompanyFacts,
  type InstantPoint,
} from "../lib/edgar";
import { yahooChart } from "../lib/yahoo";
import type { FinancialRow } from "../lib/schemas";

const PROCESSED = path.join(process.cwd(), "data", "processed");
const FORCE = process.env.FORCE_REFRESH === "1";
const TICKER_FILTER = new Set(
  (process.env.EDGAR_TICKERS ?? process.env.INGEST_TICKERS ?? "")
    .split(",")
    .map((ticker) => ticker.trim().toUpperCase())
    .filter(Boolean),
);

/**
 * Delisted names keep their SEC history but disappear from the current ticker
 * map. The CIKs are fixed because these companies no longer trade.
 */
const CIK_OVERRIDES: Record<string, number> = {
  ACLX: 1786205,
  CRNX: 1658247,
  PSTG: 1474432,
  ...Object.fromEntries(
    ARCHIVED_COMPANIES.map((company) => [company.ticker, company.cik]),
  ),
};

/**
 * Predecessor CIKs for companies whose current filer has a short XBRL record
 * after a holding-company reorganisation.
 */
const HISTORY_CIKS: Record<string, number[]> = {
  XOM: [34088],
};

type TagSet = {
  revenue: string[];
  grossProfit: string[];
  cost: string[];
  operatingIncome: string[];
  netIncome: string[];
  epsDiluted: string[];
  epsBasic: string[];
  cfo: string[];
  capex: string[];
  da: string[];
  sbc: string[];
  interest: string[];
  pretax: string[];
  tax: string[];
  rnd: string[];
  sga: string[];
  dividends: string[];
  buybacks: string[];
  cash: string[];
  currentInvestments: string[];
  noncurrentInvestments: string[];
  longTermDebt: string[];
  longTermDebtNoncurrent: string[];
  longTermDebtCurrent: string[];
  shortTermDebt: string[];
  equity: string[];
  assets: string[];
  inventory: string[];
  receivables: string[];
  sharesDiluted: string[];
};

const US_GAAP_TAGS: TagSet = {
  revenue: [
    "RevenueFromContractWithCustomerExcludingAssessedTax",
    "Revenues",
    "RevenuesNetOfInterestExpense",
    "SalesRevenueNet",
    "RevenueFromContractWithCustomerIncludingAssessedTax",
    "InterestAndDividendIncomeOperating",
  ],
  grossProfit: ["GrossProfit"],
  cost: [
    "CostOfRevenue",
    "CostOfGoodsAndServicesSold",
    "CostOfGoodsAndServicesSoldExcludingDepreciationDepletionAndAmortization",
    "CostOfGoodsSold",
    "CostOfServices",
  ],
  operatingIncome: [
    "OperatingIncomeLoss",
    "IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest",
    "IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments",
  ],
  netIncome: [
    "NetIncomeLoss",
    "ProfitLoss",
    "NetIncomeLossAvailableToCommonStockholdersBasic",
    "NetIncomeLossAvailableToCommonStockholdersDiluted",
  ],
  epsDiluted: ["EarningsPerShareDiluted", "EarningsPerShareBasicAndDiluted"],
  epsBasic: ["EarningsPerShareBasic"],
  cfo: [
    "NetCashProvidedByUsedInOperatingActivities",
    "NetCashProvidedByUsedInOperatingActivitiesContinuingOperations",
  ],
  capex: [
    "PaymentsToAcquirePropertyPlantAndEquipment",
    "PaymentsToAcquireProductiveAssets",
    "PaymentsToAcquirePropertyPlantAndEquipmentAndIntangibleAssets",
    "PaymentsToAcquireMachineryAndEquipment",
    "PaymentsToAcquireIntangibleAssets",
    "PaymentsToAcquireOilAndGasPropertyAndEquipment",
    "PaymentsToAcquireOilAndGasProperty",
    "PaymentsToAcquireRealEstate",
    "PaymentsToAcquireOtherPropertyPlantAndEquipment",
    "PaymentsForCapitalImprovements",
    "PaymentsForConstructionInProcess",
  ],
  da: [
    "DepreciationDepletionAndAmortization",
    "DepreciationAndAmortization",
    "DepreciationAmortizationAndAccretionNet",
    "Depreciation",
  ],
  sbc: ["ShareBasedCompensation", "AllocatedShareBasedCompensationExpense"],
  interest: [
    "InterestExpense",
    "InterestExpenseDebt",
    "InterestExpenseNonoperating",
    "InterestAndDebtExpense",
    "InterestIncomeExpenseNet",
  ],
  pretax: [
    "IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest",
    "IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments",
  ],
  tax: ["IncomeTaxExpenseBenefit"],
  rnd: [
    "ResearchAndDevelopmentExpense",
    "ResearchAndDevelopmentExpenseExcludingAcquiredInProcessCost",
  ],
  sga: ["SellingGeneralAndAdministrativeExpense"],
  dividends: [
    "PaymentsOfDividends",
    "PaymentsOfDividendsCommonStock",
    "PaymentsOfDividendsMinorityInterest",
  ],
  buybacks: [
    "PaymentsForRepurchaseOfCommonStock",
    "PaymentsForRepurchaseOfEquity",
  ],
  cash: [
    "CashAndCashEquivalentsAtCarryingValue",
    "CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents",
    "CashAndDueFromBanks",
    "Cash",
  ],
  currentInvestments: [
    "ShortTermInvestments",
    "MarketableSecuritiesCurrent",
    "AvailableForSaleSecuritiesDebtSecuritiesCurrent",
    "OtherShortTermInvestments",
  ],
  noncurrentInvestments: [
    "MarketableSecuritiesNoncurrent",
    "AvailableForSaleSecuritiesDebtSecuritiesNoncurrent",
    "HeldToMaturitySecuritiesNoncurrent",
  ],
  longTermDebt: [
    "DebtLongtermAndShorttermCombinedAmount",
    "LongTermDebt",
    "LongTermDebtAndCapitalLeaseObligations",
    "LongTermNotesPayable",
    "SeniorNotes",
    "LineOfCredit",
    "LongTermLineOfCredit",
    "OtherLongTermDebt",
    "ConvertibleNotesPayable",
    "ConvertibleDebtNoncurrent",
  ],
  longTermDebtNoncurrent: [
    "LongTermDebtNoncurrent",
    "LongTermDebtAndCapitalLeaseObligationsNoncurrent",
  ],
  longTermDebtCurrent: [
    "LongTermDebtCurrent",
    "LongTermDebtAndCapitalLeaseObligationsCurrent",
  ],
  shortTermDebt: [
    "ShortTermBorrowings",
    "CommercialPaper",
    "OtherShortTermBorrowings",
    "NotesPayableCurrent",
    "DebtCurrent",
  ],
  equity: [
    "StockholdersEquity",
    "StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest",
    "PartnersCapital",
    "MembersEquity",
  ],
  assets: ["Assets"],
  inventory: ["InventoryNet", "InventoryGross"],
  receivables: [
    "AccountsReceivableNetCurrent",
    "ReceivablesNetCurrent",
    "AccountsNotesAndLoansReceivableNetCurrent",
    "AccountsReceivableNet",
  ],
  sharesDiluted: [
    "WeightedAverageNumberOfDilutedSharesOutstanding",
    "WeightedAverageNumberOfSharesOutstandingBasic",
  ],
};

/** IFRS taxonomy used by foreign private issuers filing 20-F. */
const IFRS_TAGS: TagSet = {
  revenue: ["Revenue", "RevenueFromContractsWithCustomers"],
  grossProfit: ["GrossProfit"],
  cost: [
    "CostOfSales",
    "CostOfSalesExcludingDepreciationDepletionAndAmortisation",
  ],
  operatingIncome: ["ProfitLossFromOperatingActivities"],
  netIncome: ["ProfitLoss", "ProfitLossAttributableToOwnersOfParent"],
  epsDiluted: ["DilutedEarningsLossPerShare"],
  epsBasic: ["BasicEarningsLossPerShare"],
  cfo: ["CashFlowsFromUsedInOperatingActivities"],
  capex: [
    "PurchaseOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
    "AcquisitionOfPropertyPlantAndEquipment",
  ],
  da: [
    "DepreciationAndAmortisationExpense",
    "AdjustmentsForDepreciationAndAmortisationExpense",
  ],
  sbc: [
    "ShareBasedCompensation",
    "ExpenseFromSharebasedPaymentTransactionsWithEmployees",
  ],
  interest: ["InterestExpense", "InterestExpenseOnBorrowings"],
  pretax: ["ProfitLossBeforeTax"],
  tax: ["IncomeTaxExpenseContinuingOperations"],
  rnd: ["ResearchAndDevelopmentExpense"],
  sga: ["SellingGeneralAndAdministrativeExpense", "SellingExpense"],
  dividends: ["DividendsPaid", "DividendsPaidClassifiedAsFinancingActivities"],
  buybacks: [
    "PaymentsToAcquireOrRedeemEntitysShares",
    "PurchaseOfTreasuryShares",
  ],
  cash: ["CashAndCashEquivalents"],
  currentInvestments: [
    "ShortTermInvestments",
    "CurrentFinancialAssetsAtFairValueThroughProfitOrLoss",
  ],
  noncurrentInvestments: [
    "NoncurrentFinancialAssetsAtFairValueThroughProfitOrLoss",
    "LongTermInvestments",
  ],
  longTermDebt: ["LongtermBorrowings", "LongTermDebt"],
  longTermDebtNoncurrent: [
    "NoncurrentBorrowings",
    "NoncurrentLeaseLiabilities",
  ],
  longTermDebtCurrent: [
    "CurrentBorrowingsAndCurrentPortionOfNoncurrentBorrowings",
  ],
  shortTermDebt: [
    "ShorttermBorrowings",
    "CurrentBorrowingsAndCurrentPortionOfNoncurrentBorrowings",
    "CurrentLeaseLiabilities",
  ],
  equity: ["Equity", "EquityAttributableToOwnersOfParent"],
  assets: ["Assets"],
  inventory: ["Inventories"],
  receivables: [
    "CurrentTradeReceivables",
    "TradeAndOtherCurrentReceivables",
    "TradeAndOtherReceivables",
  ],
  sharesDiluted: [
    "WeightedAverageNumberOfDilutedSharesOutstanding",
    "WeightedAverageNumberOfSharesOutstandingBasic",
  ],
};

type FlowPoint = {
  end: string;
  value: number;
  fy?: number;
  period?: string;
  filed?: string;
};

type FlowSeries = Map<string, FlowPoint>;

function mergeSeries(
  facts: CompanyFacts,
  tagGroups: string[][],
  unit = "USD",
  namespace = "us-gaap",
): FlowSeries {
  const out: FlowSeries = new Map();
  for (const tags of tagGroups) {
    for (const tag of tags) {
      const series = extractFlowSeries(facts, [tag], unit, namespace).quarterly;
      for (const [end, item] of series) {
        const prev = out.get(end);
        if (!prev || (item.filed ?? "") > (prev.filed ?? ""))
          out.set(end, item);
      }
    }
  }
  return out;
}

function mergeAnnual(
  facts: CompanyFacts,
  tags: string[],
  unit = "USD",
  namespace = "us-gaap",
) {
  const out: FlowSeries = new Map();
  for (const tag of tags) {
    const series = extractFlowSeries(facts, [tag], unit, namespace).annual;
    for (const [end, item] of series) {
      const prev = out.get(end);
      if (!prev || (item.filed ?? "") > (prev.filed ?? "")) out.set(end, item);
    }
  }
  return out;
}

function daysBetween(a: string, b: string): number {
  return Math.abs(new Date(a).getTime() - new Date(b).getTime()) / 86_400_000;
}

/** Find the flow fact closest to a period end, within a short tolerance. */
function valueNear(
  series: FlowSeries,
  end: string,
  toleranceDays = 10,
): FlowPoint | null {
  const target = new Date(end).getTime();
  let best: FlowPoint | null = null;
  let bestDiff = Number.POSITIVE_INFINITY;
  for (const point of series.values()) {
    const diff = Math.abs(new Date(point.end).getTime() - target) / 86_400_000;
    if (diff <= toleranceDays && diff < bestDiff) {
      best = point;
      bestDiff = diff;
    }
  }
  return best;
}

/**
 * Group period ends that differ by a few days across tags (52/53-week fiscal
 * calendars sometimes shift a Sunday end by one day).
 */
function clusterEnds(ends: Iterable<string>, toleranceDays = 5): string[] {
  const sorted = [...new Set(ends)].sort();
  const clusters: string[][] = [];
  for (const end of sorted) {
    const last = clusters.at(-1);
    if (last && daysBetween(last[0], end) <= toleranceDays) last.push(end);
    else clusters.push([end]);
  }
  return clusters.map((cluster) => cluster[0]);
}

function latestFiled(
  points: Array<FlowPoint | InstantPoint | null>,
): string | undefined {
  let newest: string | undefined;
  for (const point of points) {
    if (point?.filed && (!newest || point.filed > newest)) newest = point.filed;
  }
  return newest;
}

/** Latest reported share count, used to sanity-check derived EPS. */
function sharesOutstandingAt(facts: CompanyFacts, end: string): number | null {
  const atEnd =
    extractInstantAt(facts, ["CommonStockSharesOutstanding"], end, {
      unit: "shares",
    })?.value ??
    extractInstantAt(facts, ["EntityCommonStockSharesOutstanding"], end, {
      unit: "shares",
      namespace: "dei",
    })?.value;
  if (atEnd !== null && atEnd !== undefined) return atEnd;

  const candidates = [
    ...extractInstantSeries(
      facts,
      ["CommonStockSharesOutstanding"],
      "shares",
    ).values(),
    ...extractInstantSeries(
      facts,
      ["EntityCommonStockSharesOutstanding"],
      "shares",
      "dei",
    ).values(),
  ].sort((a, b) => b.end.localeCompare(a.end));
  return candidates[0]?.value ?? null;
}

type BalanceSheet = {
  cashAndInvestments: number | null;
  totalDebt: number | null;
  totalEquity: number | null;
  totalAssets: number | null;
  inventory: number | null;
  receivables: number | null;
};

function balanceSheetAt(
  facts: CompanyFacts,
  end: string,
  tags: TagSet,
  namespace: string,
): BalanceSheet {
  const instant = (tagList: string[]) =>
    extractInstantAt(facts, tagList, end, { namespace });

  const cash = instant(tags.cash);
  const currentInvestments = instant(tags.currentInvestments);
  const noncurrentInvestments = instant(tags.noncurrentInvestments);
  const cashParts = [cash, currentInvestments, noncurrentInvestments].filter(
    (part): part is InstantPoint => part !== null,
  );
  const cashAndInvestments = cashParts.length
    ? cashParts.reduce((sum, part) => sum + part.value, 0)
    : null;

  const combinedDebt = instant(["DebtLongtermAndShorttermCombinedAmount"]);
  const longTerm = instant(
    tags.longTermDebt.filter(
      (tag) => tag !== "DebtLongtermAndShorttermCombinedAmount",
    ),
  );
  const longTermNoncurrent = instant(tags.longTermDebtNoncurrent);
  const longTermCurrent = instant(tags.longTermDebtCurrent);
  const shortTerm = instant(tags.shortTermDebt);
  const totalEquity = instant(tags.equity)?.value ?? null;
  const totalAssets = instant(tags.assets)?.value ?? null;

  let totalDebt: number | null;
  if (combinedDebt) {
    totalDebt = combinedDebt.value + (shortTerm?.value ?? 0);
  } else if (longTerm) {
    totalDebt = longTerm.value + (shortTerm?.value ?? 0);
  } else if (longTermNoncurrent || longTermCurrent) {
    totalDebt =
      (longTermNoncurrent?.value ?? 0) +
      (longTermCurrent?.value ?? 0) +
      (shortTerm?.value ?? 0);
  } else if (shortTerm) {
    totalDebt = shortTerm.value;
  } else {
    // A company with a reported balance sheet and no debt tags is debt-free.
    totalDebt = totalEquity !== null || totalAssets !== null ? 0 : null;
  }

  return {
    cashAndInvestments,
    totalDebt,
    totalEquity,
    totalAssets,
    inventory: instant(tags.inventory)?.value ?? null,
    receivables: instant(tags.receivables)?.value ?? null,
  };
}

function taxRateFor(row: {
  pretaxIncome: number | null;
  incomeTax: number | null;
}): number {
  if (
    row.pretaxIncome !== null &&
    row.pretaxIncome > 0 &&
    row.incomeTax !== null
  ) {
    return Math.min(0.5, Math.max(0, row.incomeTax / row.pretaxIncome));
  }
  return 0.21;
}

type RowInput = {
  period: string;
  fyear: number;
  reportDate: string;
  publishDate: string | null;
  revenue: number | null;
  grossProfit: number | null;
  operatingIncome: number | null;
  netIncome: number | null;
  epsDiluted: number | null;
  epsBasic: number | null;
  interestExpense: number | null;
  pretaxIncome: number | null;
  incomeTax: number | null;
  rnd: number | null;
  sga: number | null;
  cfo: number | null;
  capex: number | null;
  da: number | null;
  sbc: number | null;
  dividendsPaid: number | null;
  buybacks: number | null;
  sheet: BalanceSheet;
};

function finalizeRow(input: RowInput): FinancialRow {
  const {
    revenue,
    grossProfit,
    operatingIncome,
    netIncome,
    da,
    cfo,
    capex,
    sheet,
  } = input;
  const ebitda =
    operatingIncome !== null && da !== null ? operatingIncome + da : null;
  const netDebt =
    sheet.totalDebt !== null && sheet.cashAndInvestments !== null
      ? sheet.totalDebt - sheet.cashAndInvestments
      : null;
  const taxRate = taxRateFor(input);
  const nopat =
    operatingIncome !== null ? operatingIncome * (1 - taxRate) : null;
  const investedCapital =
    sheet.totalDebt !== null && sheet.totalEquity !== null
      ? sheet.totalDebt + sheet.totalEquity
      : null;

  return {
    period: input.period,
    fyear: input.fyear,
    reportDate: input.reportDate,
    publishDate: input.publishDate,
    ttm: false,
    restated: true,
    revenue,
    grossProfit,
    operatingIncome,
    netIncome,
    epsDiluted:
      input.epsDiluted === null
        ? null
        : Math.round(input.epsDiluted * 10_000) / 10_000,
    epsBasic:
      input.epsBasic === null
        ? null
        : Math.round(input.epsBasic * 10_000) / 10_000,
    interestExpense: input.interestExpense,
    pretaxIncome: input.pretaxIncome,
    incomeTax: input.incomeTax,
    rnd: input.rnd,
    sga: input.sga,
    cashAndInvestments: sheet.cashAndInvestments,
    totalDebt: sheet.totalDebt,
    totalEquity: sheet.totalEquity,
    totalAssets: sheet.totalAssets,
    inventory: sheet.inventory,
    receivables: sheet.receivables,
    cfo,
    capex,
    freeCashFlow: cfo !== null && capex !== null ? cfo - Math.abs(capex) : null,
    da,
    sbc: input.sbc,
    dividendsPaid:
      input.dividendsPaid === null ? null : Math.abs(input.dividendsPaid),
    buybacks: input.buybacks === null ? null : Math.abs(input.buybacks),
    ebitda,
    grossMargin: revenue && grossProfit !== null ? grossProfit / revenue : null,
    operatingMargin:
      revenue && operatingIncome !== null ? operatingIncome / revenue : null,
    netMargin: revenue && netIncome !== null ? netIncome / revenue : null,
    fcfMargin:
      revenue && cfo !== null && capex !== null
        ? (cfo - Math.abs(capex)) / revenue
        : null,
    roic:
      nopat !== null && investedCapital !== null && investedCapital > 0
        ? nopat / investedCapital
        : null,
    netDebt,
    netDebtToEbitda:
      netDebt !== null && ebitda !== null && ebitda > 0
        ? netDebt / ebitda
        : null,
    roe:
      netIncome !== null && sheet.totalEquity !== null && sheet.totalEquity > 0
        ? netIncome / sheet.totalEquity
        : null,
  };
}

type SeriesSet = {
  revenue: FlowSeries;
  grossProfit: FlowSeries;
  operatingIncome: FlowSeries;
  netIncome: FlowSeries;
  epsDiluted: FlowSeries;
  epsBasic: FlowSeries;
  cfo: FlowSeries;
  capex: FlowSeries;
  da: FlowSeries;
  sbc: FlowSeries;
  interestExpense: FlowSeries;
  pretaxIncome: FlowSeries;
  incomeTax: FlowSeries;
  rnd: FlowSeries;
  sga: FlowSeries;
  dividendsPaid: FlowSeries;
  buybacks: FlowSeries;
  sharesDiluted: FlowSeries;
};

function assembleRows(
  facts: CompanyFacts,
  series: SeriesSet,
  kind: "quarterly" | "annual",
  tags: TagSet,
  namespace: string,
): FinancialRow[] {
  const anchors = [
    ...series.revenue.keys(),
    ...series.netIncome.keys(),
    ...series.operatingIncome.keys(),
  ];
  const rows: FinancialRow[] = [];

  for (const end of clusterEnds(anchors)) {
    const revenue = valueNear(series.revenue, end);
    const grossProfit = valueNear(series.grossProfit, end);
    const operatingIncome = valueNear(series.operatingIncome, end);
    const netIncome = valueNear(series.netIncome, end);
    if (!revenue && !operatingIncome && !netIncome) continue;
    // Pre-revenue issuers often omit a zero revenue fact. If the company has
    // no revenue tag anywhere and does report an operating result, revenue is 0.
    const revenueValue =
      revenue?.value ??
      (series.revenue.size === 0 && (operatingIncome || netIncome) ? 0 : null);

    const epsDiluted = valueNear(series.epsDiluted, end);
    const epsBasic = valueNear(series.epsBasic, end);
    const sharesDiluted = valueNear(series.sharesDiluted, end);
    const reportedShares = sharesOutstandingAt(facts, end);
    const shareRatio =
      sharesDiluted && reportedShares
        ? sharesDiluted.value / reportedShares
        : null;
    const derivedEps =
      netIncome &&
      sharesDiluted &&
      sharesDiluted.value > 0 &&
      (shareRatio === null || (shareRatio >= 0.5 && shareRatio <= 2))
        ? netIncome.value / sharesDiluted.value
        : null;
    const dilutedEps = epsDiluted?.value ?? derivedEps;
    const basicEps = epsBasic?.value ?? derivedEps;
    const cfo = valueNear(series.cfo, end);
    const capex = valueNear(series.capex, end);
    const da = valueNear(series.da, end);
    const sbc = valueNear(series.sbc, end);
    const interestExpense = valueNear(series.interestExpense, end);
    const pretaxIncome = valueNear(series.pretaxIncome, end);
    const incomeTax = valueNear(series.incomeTax, end);
    const rnd = valueNear(series.rnd, end);
    const sga = valueNear(series.sga, end);
    const dividendsPaid = valueNear(series.dividendsPaid, end);
    const buybacks = valueNear(series.buybacks, end);
    const sheet = balanceSheetAt(facts, end, tags, namespace);

    rows.push(
      finalizeRow({
        period: kind === "annual" ? "FY" : "Q?",
        fyear: Number(end.slice(0, 4)),
        reportDate: end,
        publishDate:
          latestFiled([
            revenue,
            operatingIncome,
            netIncome,
            epsDiluted,
            cfo,
            capex,
            da,
            sbc,
            interestExpense,
            pretaxIncome,
            incomeTax,
            rnd,
            sga,
            dividendsPaid,
            buybacks,
          ]) ?? null,
        revenue: revenueValue,
        grossProfit: grossProfit?.value ?? null,
        operatingIncome: operatingIncome?.value ?? null,
        netIncome: netIncome?.value ?? null,
        epsDiluted: dilutedEps,
        epsBasic: basicEps,
        interestExpense: interestExpense?.value ?? null,
        pretaxIncome: pretaxIncome?.value ?? null,
        incomeTax: incomeTax?.value ?? null,
        rnd: rnd?.value ?? null,
        sga: sga?.value ?? null,
        cfo: cfo?.value ?? null,
        capex: capex?.value ?? null,
        da: da?.value ?? null,
        sbc: sbc?.value ?? null,
        dividendsPaid: dividendsPaid?.value ?? null,
        buybacks: buybacks?.value ?? null,
        sheet,
      }),
    );
  }

  return rows;
}

/**
 * SEC's `fy` field describes the filing's fiscal-year focus, so comparative
 * facts inherit the *new* filing's year. Re-derive the fiscal year from the
 * company's own annual period-end dates instead.
 */
function normalizeFiscalPeriods(
  quarters: FinancialRow[],
  annual: FinancialRow[],
): FinancialRow[] {
  const annualEnds = annual.map((row) => row.reportDate).sort();
  if (annualEnds.length === 0) return quarters;
  const latestAnnualEnd = annualEnds[annualEnds.length - 1];

  return quarters.map((q) => {
    const nextAnnualEnd = annualEnds.find((end) => end >= q.reportDate);
    const fiscalYearEnd = nextAnnualEnd ?? latestAnnualEnd;
    const fyear = nextAnnualEnd
      ? Number(fiscalYearEnd.slice(0, 4))
      : Number(latestAnnualEnd.slice(0, 4)) + 1;
    const priorAnnualEnd = nextAnnualEnd
      ? (annualEnds.filter((end) => end < fiscalYearEnd).at(-1) ?? null)
      : latestAnnualEnd;

    let period = q.period;
    if (priorAnnualEnd) {
      const days =
        (new Date(q.reportDate).getTime() -
          new Date(priorAnnualEnd).getTime()) /
        86_400_000;
      period = `Q${Math.max(1, Math.min(4, Math.round(days / 91.25)))}`;
    }

    return { ...q, fyear, period };
  });
}

function seriesFor(
  facts: CompanyFacts,
  annual: boolean,
  tags: TagSet,
  namespace: string,
): SeriesSet {
  const merge = (tagList: string[], unit = "USD") =>
    annual
      ? mergeAnnual(facts, tagList, unit, namespace)
      : mergeSeries(facts, [tagList], unit, namespace);
  const revenue = merge(tags.revenue);
  const directGross = merge(tags.grossProfit);
  const cost = merge(tags.cost);
  const grossProfit: FlowSeries = new Map();
  for (const [end, item] of directGross) grossProfit.set(end, item);
  // Fill any year where the company reports cost of revenue but not a
  // separate gross-profit line. Retailers often do this.
  for (const [end, rev] of revenue) {
    if (grossProfit.has(end)) continue;
    const c = valueNear(cost, end);
    if (c) {
      grossProfit.set(end, {
        end,
        value: rev.value - c.value,
        fy: rev.fy,
        period: rev.period,
        filed: rev.filed,
      });
    }
  }
  return {
    revenue,
    grossProfit,
    operatingIncome: merge(tags.operatingIncome),
    netIncome: merge(tags.netIncome),
    epsDiluted: merge(tags.epsDiluted, "USD/shares"),
    epsBasic: merge(tags.epsBasic, "USD/shares"),
    cfo: merge(tags.cfo),
    capex: merge(tags.capex),
    da: merge(tags.da),
    sbc: merge(tags.sbc),
    interestExpense: merge(tags.interest),
    pretaxIncome: merge(tags.pretax),
    incomeTax: merge(tags.tax),
    rnd: merge(tags.rnd),
    sga: merge(tags.sga),
    dividendsPaid: merge(tags.dividends),
    buybacks: merge(tags.buybacks),
    sharesDiluted: merge(tags.sharesDiluted, "shares"),
  };
}

function sortRows(rows: FinancialRow[]): FinancialRow[] {
  return [...rows].sort((a, b) => a.reportDate.localeCompare(b.reportDate));
}

function latestSharesOutstanding(facts: CompanyFacts): number | null {
  const candidates = [
    facts.facts["dei"]?.EntityCommonStockSharesOutstanding?.units,
    facts.facts["us-gaap"]?.CommonStockSharesOutstanding?.units,
    facts.facts["us-gaap"]?.WeightedAverageNumberOfDilutedSharesOutstanding
      ?.units,
    facts.facts["ifrs-full"]?.NumberOfSharesOutstanding?.units,
  ];
  for (const units of candidates) {
    if (!units) continue;
    const points = Object.values(units)
      .flat()
      .filter((point) => typeof point.val === "number" && point.val > 0)
      .sort((a, b) => {
        const end = String(b.end ?? "").localeCompare(String(a.end ?? ""));
        if (end !== 0) return end;
        return String(b.filed ?? "").localeCompare(String(a.filed ?? ""));
      });
    if (points[0]?.val != null) return points[0].val;
  }
  return null;
}

function hasUsGaapRevenue(facts: CompanyFacts): boolean {
  const hasRevenue = US_GAAP_TAGS.revenue.some((tag) => {
    const units = facts.facts["us-gaap"]?.[tag]?.units;
    return units && Object.values(units).some((points) => points.length > 0);
  });
  if (hasRevenue) return true;
  // Pre-revenue US issuers often report operating income and net income
  // without a revenue tag. They still use US GAAP, not IFRS.
  return ["OperatingIncomeLoss", "NetIncomeLoss", "ProfitLoss"].some((tag) => {
    const units = facts.facts["us-gaap"]?.[tag]?.units;
    return units && Object.values(units).some((points) => points.length > 0);
  });
}

function reportingCurrency(facts: CompanyFacts, namespace: string): string {
  const tags = [
    "Revenue",
    "Revenues",
    "RevenuesNetOfInterestExpense",
    "RevenueFromContractsWithCustomers",
    "RevenueFromContractWithCustomerExcludingAssessedTax",
    "RevenueFromContractWithCustomerIncludingAssessedTax",
    "InterestAndDividendIncomeOperating",
  ];
  for (const tag of tags) {
    const units = facts.facts[namespace]?.[tag]?.units;
    if (!units) continue;
    for (const unit of Object.keys(units)) {
      if (/^[A-Z]{3}$/.test(unit)) return unit;
    }
  }
  return "USD";
}

const fxCache = new Map<string, Map<string, number> | null>();

/** Daily FX rates forward-filled so every fiscal period end has a rate. */
async function fxRates(currency: string): Promise<Map<string, number> | null> {
  if (currency === "USD") return null;
  if (fxCache.has(currency)) return fxCache.get(currency) ?? null;
  const chart = await yahooChart(`${currency}USD=X`, "20y").catch(() => null);
  if (!chart?.points.length) {
    console.warn(`[edgar] no FX history for ${currency}`);
    fxCache.set(currency, null);
    return null;
  }
  const sorted = [...chart.points].sort((a, b) => a.d.localeCompare(b.d));
  const byDate = new Map(sorted.map((point) => [point.d, point.c]));
  const filled = new Map<string, number>();
  const cursor = new Date(sorted[0].d);
  const end = new Date(sorted[sorted.length - 1].d);
  let last: number | null = null;
  while (cursor <= end) {
    const key = cursor.toISOString().slice(0, 10);
    const value = byDate.get(key);
    if (value != null) last = value;
    if (last != null) filled.set(key, last);
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  fxCache.set(currency, filled);
  return filled;
}

function rateForDate(rates: Map<string, number>, date: string): number | null {
  const direct = rates.get(date);
  if (direct != null) return direct;
  const cursor = new Date(`${date}T00:00:00Z`);
  for (let day = 0; day < 8; day += 1) {
    cursor.setUTCDate(cursor.getUTCDate() - 1);
    const value = rates.get(cursor.toISOString().slice(0, 10));
    if (value != null) return value;
  }
  return null;
}

/**
 * Annual ROIC uses NOPAT divided by average invested capital (the average of
 * this year's and last year's debt plus equity), matching the methodology page.
 */
function applyAverageAnnualRoic(rows: FinancialRow[]): FinancialRow[] {
  return rows.map((row, index) => {
    const previous = rows[index - 1];
    const capital =
      row.totalDebt !== null && row.totalEquity !== null
        ? row.totalDebt + row.totalEquity
        : null;
    const previousCapital =
      previous && previous.totalDebt !== null && previous.totalEquity !== null
        ? previous.totalDebt + previous.totalEquity
        : null;
    const averageCapital =
      capital !== null && previousCapital !== null
        ? (capital + previousCapital) / 2
        : capital;
    const nopat =
      row.operatingIncome !== null
        ? row.operatingIncome * (1 - taxRateFor(row))
        : null;
    return {
      ...row,
      roic:
        nopat !== null && averageCapital !== null && averageCapital > 0
          ? nopat / averageCapital
          : null,
    };
  });
}

async function resolveCik(
  ticker: string,
  cikMap: Record<string, number>,
): Promise<number | null> {
  const lookup = (TICKER_ALIASES[ticker]?.sec ?? ticker).toUpperCase();
  return CIK_OVERRIDES[ticker] ?? cikMap[lookup] ?? null;
}

async function main() {
  let cikMap = await getTickerCikMap();
  const unresolved = RESEARCH_TICKERS.filter(
    (ticker) =>
      !CIK_OVERRIDES[ticker] &&
      !cikMap[(TICKER_ALIASES[ticker]?.sec ?? ticker).toUpperCase()],
  );
  if (unresolved.length > 0) {
    console.log(
      `[edgar] refreshing the ticker map for ${unresolved.length} unresolved tickers`,
    );
    cikMap = await getTickerCikMap(true);
  }

  const summary: Array<Record<string, unknown>> = [];
  let failures = 0;
  const tickers = TICKER_FILTER.size
    ? RESEARCH_TICKERS.filter((ticker) => TICKER_FILTER.has(ticker))
    : RESEARCH_TICKERS;

  for (const ticker of tickers) {
    const cik = await resolveCik(ticker, cikMap);
    if (!cik) {
      console.warn(`[edgar] no CIK for ${ticker}`);
      failures += 1;
      continue;
    }
    console.log(`[edgar] ${ticker} CIK ${cik}`);
    try {
      const primaryFacts = await getCompanyFacts(cik, { force: FORCE });
      let facts: CompanyFacts = primaryFacts;
      let filings = filingsFrom(await getSubmissions(cik, { force: FORCE }));
      for (const historyCik of HISTORY_CIKS[ticker] ?? []) {
        try {
          const history = await getCompanyFacts(historyCik, { force: FORCE });
          facts = mergeCompanyFacts(facts, history);
          const historyFilings = filingsFrom(
            await getSubmissions(historyCik, { force: FORCE }),
          );
          filings = [...filings, ...historyFilings].sort((a, b) =>
            b.filed.localeCompare(a.filed),
          );
          console.log(
            `[edgar] ${ticker}: merged predecessor CIK ${historyCik} (${history.entityName})`,
          );
        } catch (error) {
          console.warn(
            `[edgar] ${ticker}: predecessor CIK ${historyCik} unavailable: ${
              error instanceof Error ? error.message : String(error)
            }`,
          );
        }
      }

      const namespace = hasUsGaapRevenue(facts) ? "us-gaap" : "ifrs-full";
      const tags = namespace === "us-gaap" ? US_GAAP_TAGS : IFRS_TAGS;
      const currency = reportingCurrency(facts, namespace);
      let normalizedFacts: CompanyFacts = facts;
      if (currency !== "USD") {
        const rates = await fxRates(currency);
        if (!rates) {
          throw new Error(`no ${currency}/USD FX history for conversion`);
        }
        normalizedFacts = convertCompanyFactsToUsd(facts, currency, (date) =>
          rateForDate(rates, date),
        );
        console.log(
          `[edgar] ${ticker}: reporting currency ${currency}, converted to USD`,
        );
      }

      const annualSeries = seriesFor(normalizedFacts, true, tags, namespace);
      const quarterlySeries = seriesFor(
        normalizedFacts,
        false,
        tags,
        namespace,
      );
      const annual = applyAverageAnnualRoic(
        sortRows(
          assembleRows(
            normalizedFacts,
            annualSeries,
            "annual",
            tags,
            namespace,
          ),
        ).slice(-8),
      );
      const quarterly = normalizeFiscalPeriods(
        sortRows(
          assembleRows(
            normalizedFacts,
            quarterlySeries,
            "quarterly",
            tags,
            namespace,
          ),
        ).slice(-24),
        annual,
      );
      const latestAnnualEnd = annual.at(-1)?.reportDate ?? null;
      const latestQuarterEnd = quarterly.at(-1)?.reportDate ?? null;
      const quarterlyIsStale =
        latestAnnualEnd !== null &&
        (latestQuarterEnd === null ||
          new Date(latestAnnualEnd).getTime() -
            new Date(latestQuarterEnd).getTime() >
            200 * 86_400_000);
      const reportedQuarterly = quarterlyIsStale ? [] : quarterly;

      const latest10K = filings.find(
        (f) => f.form === "10-K" || f.form === "20-F",
      );
      const latest10Q = filings.find((f) => f.form === "10-Q");
      const earnings8K = filings.find(
        (f) => f.form === "8-K" && (f.items ?? "").includes("2.02"),
      );
      let earningsReleaseUrl: string | null = null;
      if (earnings8K) {
        try {
          const index = await getFilingIndex(cik, earnings8K.accession);
          const exhibit = index.directory.item.find(
            (item) =>
              /(ex-?99|99\.1|99-1)/i.test(item.name) &&
              /\.(htm|html)$/i.test(item.name),
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
        sharesOutstanding: latestSharesOutstanding(facts),
        quarterly: reportedQuarterly,
        annual,
        filings: {
          latest10K,
          latest10Q,
          latest8K: earnings8K ?? null,
          earningsReleaseUrl,
        },
        sources: [
          latest10K
            ? {
                name: `SEC ${latest10K.form} (${latest10K.filed})`,
                url: latest10K.url,
                date: latest10K.filed,
              }
            : null,
          latest10Q
            ? {
                name: `SEC 10-Q (${latest10Q.filed})`,
                url: latest10Q.url,
                date: latest10Q.filed,
              }
            : null,
          earningsReleaseUrl
            ? {
                name: "SEC 8-K earnings release",
                url: earningsReleaseUrl,
                date: earnings8K?.filed,
              }
            : null,
        ].filter(Boolean),
      };

      await fs.mkdir(path.join(PROCESSED, ticker), { recursive: true });
      await fs.writeFile(
        path.join(PROCESSED, ticker, "sec.json"),
        JSON.stringify(out, null, 2),
        "utf8",
      );
      summary.push({
        ticker,
        quarterly: reportedQuarterly.length,
        annual: annual.length,
        latestQuarter:
          reportedQuarterly[reportedQuarterly.length - 1]?.reportDate,
        latest10K: latest10K?.filed,
        earningsReleaseUrl,
      });
      console.log(
        `[edgar] ${ticker}: ${reportedQuarterly.length} quarters, ${annual.length} years, latest ${reportedQuarterly[reportedQuarterly.length - 1]?.reportDate ?? "n/a"}`,
      );
    } catch (error) {
      failures += 1;
      console.warn(
        `[edgar] ${ticker}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  await fs.writeFile(
    path.join(PROCESSED, "edgar-summary.json"),
    JSON.stringify(summary, null, 2),
    "utf8",
  );
  console.log(
    `[edgar] wrote ${summary.length} companies${failures ? `, ${failures} failed` : ""}`,
  );
  if (failures > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
