import { getCoverageGroup } from "@/config/coverage";
import type { Consensus, SegmentMix, TickerData } from "@/lib/schemas";
import { annualRows, latestAnnual } from "./financials";
import { finite, round } from "./util";

export type KpiValue = {
  id: string;
  label: string;
  value: number | null;
  unit: string;
  period: string;
  source: string;
  definition: string;
  formula: string;
  available: boolean;
  reason?: string;
};

export type CompanyKpis = {
  ticker: string;
  group: string;
  groupLabel: string;
  kpis: KpiValue[];
};

type GroupConfig = {
  label: string;
  ids: string[];
};

const GROUP_CONFIG: Record<string, GroupConfig> = {
  technology: {
    label: "Technology",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "operatingMargin",
      "ruleOf40",
      "rndIntensity",
      "fcfMargin",
      "netDebtEbitda",
    ],
  },
  communication: {
    label: "Communication",
    ids: [
      "revenueGrowth",
      "operatingMargin",
      "fcfMargin",
      "netDebtEbitda",
      "dividendYield",
    ],
  },
  "consumer-discretionary": {
    label: "Consumer discretionary",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "inventoryDays",
      "operatingMargin",
      "fcfMargin",
    ],
  },
  "consumer-staples": {
    label: "Consumer staples",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "operatingMargin",
      "fcfMargin",
      "dividendYield",
    ],
  },
  healthcare: {
    label: "Healthcare",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "rndIntensity",
      "cashRunway",
      "operatingMargin",
    ],
  },
  financials: {
    label: "Financials",
    ids: ["roe", "roa", "netMargin", "dividendYield", "assetTurnover"],
  },
  industrials: {
    label: "Industrials",
    ids: [
      "revenueGrowth",
      "operatingMargin",
      "inventoryDays",
      "assetTurnover",
      "netDebtEbitda",
    ],
  },
  energy: {
    label: "Energy",
    ids: [
      "revenueGrowth",
      "fcfMargin",
      "capexIntensity",
      "netDebtEbitda",
      "dividendYield",
    ],
  },
  utilities: {
    label: "Utilities",
    ids: ["netDebtEbitda", "interestCover", "dividendYield", "roic"],
  },
  materials: {
    label: "Materials",
    ids: ["grossMargin", "operatingMargin", "capexIntensity", "netDebtEbitda"],
  },
  "real-estate": {
    label: "Real estate",
    ids: ["netDebtEbitda", "interestCover", "dividendYield", "operatingMargin"],
  },
  "ai-infrastructure": {
    label: "AI infrastructure and power",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "operatingMargin",
      "capexIntensity",
      "fcfMargin",
      "netDebtEbitda",
    ],
  },
  "semis-semicap": {
    label: "Semiconductors and semicap",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "inventoryDays",
      "rndIntensity",
      "capexIntensity",
      "fcfMargin",
    ],
  },
  "software-cyber": {
    label: "Software and cybersecurity",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "ruleOf40",
      "rndIntensity",
      "fcfMargin",
      "netDebtEbitda",
    ],
  },
  quantum: {
    label: "Quantum computing",
    ids: ["revenueGrowth", "grossMargin", "rndIntensity", "cashRunway"],
  },
  "fintech-crypto": {
    label: "Fintech and crypto",
    ids: ["revenueGrowth", "operatingMargin", "fcfMargin", "netDebtEbitda"],
  },
  "healthcare-growth": {
    label: "Healthcare growth",
    ids: ["revenueGrowth", "grossMargin", "rndIntensity", "cashRunway"],
  },
  "space-defense": {
    label: "Space and defense",
    ids: [
      "revenueGrowth",
      "operatingMargin",
      "capexIntensity",
      "netDebtEbitda",
    ],
  },
  "nuclear-metals": {
    label: "Nuclear and metals",
    ids: ["revenueGrowth", "fcfMargin", "capexIntensity", "cashRunway"],
  },
  "consumer-brands": {
    label: "Consumer brands",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "inventoryDays",
      "operatingMargin",
      "dividendYield",
    ],
  },
  "industrials-cyclicals": {
    label: "Industrial cyclicals",
    ids: [
      "revenueGrowth",
      "operatingMargin",
      "inventoryDays",
      "assetTurnover",
      "netDebtEbitda",
    ],
  },
  "specialty-financials": {
    label: "Specialty financials",
    ids: ["roe", "roa", "netMargin", "dividendYield", "assetTurnover"],
  },
  "enterprise-software": {
    label: "Enterprise software",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "operatingMargin",
      "ruleOf40",
      "rndIntensity",
      "fcfMargin",
      "netDebtEbitda",
    ],
  },
  "semis-hardware": {
    label: "Semiconductors and hardware",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "inventoryDays",
      "rndIntensity",
      "capexIntensity",
      "fcfMargin",
    ],
  },
  "internet-platforms": {
    label: "Internet platforms",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "operatingMargin",
      "fcfMargin",
      "netDebtEbitda",
    ],
  },
  "payments-fintech": {
    label: "Payments and financial software",
    ids: [
      "revenueGrowth",
      "operatingMargin",
      "fcfMargin",
      "netDebtEbitda",
      "roe",
    ],
  },
  "pharma-biotech": {
    label: "Pharma and biotech",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "rndIntensity",
      "cashRunway",
      "operatingMargin",
    ],
  },
  "healthcare-services": {
    label: "Healthcare services and devices",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "operatingMargin",
      "fcfMargin",
      "netDebtEbitda",
    ],
  },
  "industrial-automation": {
    label: "Industrial automation",
    ids: [
      "revenueGrowth",
      "operatingMargin",
      "inventoryDays",
      "assetTurnover",
      "netDebtEbitda",
    ],
  },
  "aerospace-defense": {
    label: "Aerospace and defense",
    ids: [
      "revenueGrowth",
      "operatingMargin",
      "capexIntensity",
      "netDebtEbitda",
    ],
  },
  "transport-autonomy": {
    label: "Transport and autonomy",
    ids: [
      "revenueGrowth",
      "operatingMargin",
      "capexIntensity",
      "netDebtEbitda",
    ],
  },
  "power-renewables": {
    label: "Power and renewables",
    ids: [
      "revenueGrowth",
      "fcfMargin",
      "capexIntensity",
      "netDebtEbitda",
      "dividendYield",
    ],
  },
  "materials-mining": {
    label: "Materials and mining",
    ids: ["grossMargin", "operatingMargin", "capexIntensity", "netDebtEbitda"],
  },
  "consumer-retail": {
    label: "Consumer retail and leisure",
    ids: [
      "revenueGrowth",
      "grossMargin",
      "inventoryDays",
      "operatingMargin",
      "fcfMargin",
    ],
  },
  "banks-insurance": {
    label: "Banks and insurance",
    ids: ["roe", "roa", "netMargin", "dividendYield", "assetTurnover"],
  },
  "capital-markets": {
    label: "Capital markets",
    ids: ["roe", "roa", "netMargin", "dividendYield", "assetTurnover"],
  },
};

function annualAverage(
  data: TickerData,
  field: keyof NonNullable<ReturnType<typeof latestAnnual>>,
): number | null {
  const rows = annualRows(data);
  if (rows.length < 2) return null;
  const latest = rows.at(-1)![field] as number | null;
  const prior = rows.at(-2)![field] as number | null;
  if (!finite(latest) || !finite(prior)) return null;
  return (latest + prior) / 2;
}

function available(
  id: string,
  label: string,
  value: number | null,
  unit: string,
  period: string,
  source: string,
  definition: string,
  formula: string,
  reason?: string,
): KpiValue {
  return {
    id,
    label,
    value: value == null ? null : round(value, 2),
    unit,
    period,
    source,
    definition,
    formula,
    available: value != null,
    reason: value == null ? (reason ?? "Data unavailable.") : undefined,
  };
}

export function computeKpis(
  data: TickerData,
  consensus: Consensus | null,
  segments: SegmentMix | null,
): CompanyKpis {
  const group = getCoverageGroup(data.ticker);
  const groupId = group?.id ?? "technology";
  const config = GROUP_CONFIG[groupId] ?? GROUP_CONFIG.technology;
  const annual = latestAnnual(data);
  const metrics = data.metrics;
  const revenue = annual?.revenue ?? metrics.revenueTtm;
  const cogs =
    annual?.revenue != null && annual.grossProfit != null
      ? annual.revenue - annual.grossProfit
      : null;
  const inventoryAverage = annualAverage(data, "inventory");
  const receivablesAverage = annualAverage(data, "receivables");
  const assetsAverage = annualAverage(data, "totalAssets");
  const inventoryDays =
    cogs != null && cogs > 0 && inventoryAverage != null
      ? (inventoryAverage / cogs) * 365
      : null;
  const receivablesDays =
    revenue != null && revenue > 0 && receivablesAverage != null
      ? (receivablesAverage / revenue) * 365
      : null;
  const assetTurnover =
    revenue != null && assetsAverage != null && assetsAverage > 0
      ? revenue / assetsAverage
      : null;
  const capexIntensity =
    annual?.capex != null && revenue != null && revenue > 0
      ? Math.abs(annual.capex) / revenue
      : null;
  const rndIntensity =
    annual?.rnd != null && revenue != null && revenue > 0
      ? Math.abs(annual.rnd) / revenue
      : null;
  const ruleOf40 =
    metrics.revenueGrowthTtm != null && metrics.fcfMargin != null
      ? (metrics.revenueGrowthTtm + metrics.fcfMargin) * 100
      : null;
  const roa =
    annual?.netIncome != null && annual.totalAssets
      ? annual.netIncome / annual.totalAssets
      : null;
  const cashRunway =
    annual?.cashAndInvestments != null &&
    metrics.freeCashFlowTtm != null &&
    metrics.freeCashFlowTtm < 0
      ? annual.cashAndInvestments / Math.abs(metrics.freeCashFlowTtm)
      : null;

  const all: Record<string, KpiValue> = {
    revenueGrowth: available(
      "revenueGrowth",
      "Revenue growth",
      metrics.revenueGrowthTtm == null ? null : metrics.revenueGrowthTtm * 100,
      "%",
      "TTM",
      "SEC XBRL",
      "Trailing-twelve-month revenue growth versus the prior year.",
      "TTM revenue / prior TTM revenue - 1",
    ),
    grossMargin: available(
      "grossMargin",
      "Gross margin",
      metrics.grossMargin == null ? null : metrics.grossMargin * 100,
      "%",
      "TTM",
      "SEC XBRL",
      "Gross profit as a share of revenue.",
      "Gross profit / revenue",
    ),
    operatingMargin: available(
      "operatingMargin",
      "Operating margin",
      metrics.operatingMargin == null ? null : metrics.operatingMargin * 100,
      "%",
      "TTM",
      "SEC XBRL",
      "Operating income as a share of revenue.",
      "Operating income / revenue",
    ),
    netMargin: available(
      "netMargin",
      "Net margin",
      metrics.netMargin == null ? null : metrics.netMargin * 100,
      "%",
      "TTM",
      "SEC XBRL",
      "Net income as a share of revenue.",
      "Net income / revenue",
    ),
    fcfMargin: available(
      "fcfMargin",
      "Free-cash-flow margin",
      metrics.fcfMargin == null ? null : metrics.fcfMargin * 100,
      "%",
      "TTM",
      "SEC XBRL",
      "Free cash flow as a share of revenue.",
      "Free cash flow / revenue",
    ),
    roic: available(
      "roic",
      "Return on invested capital",
      metrics.roic == null ? null : metrics.roic * 100,
      "%",
      "TTM",
      "SEC XBRL",
      "After-tax operating income divided by invested capital.",
      "NOPAT / invested capital",
    ),
    roe: available(
      "roe",
      "Return on equity",
      metrics.roe == null ? null : metrics.roe * 100,
      "%",
      "TTM",
      "SEC XBRL",
      "Net income divided by shareholders' equity.",
      "Net income / equity",
    ),
    roa: available(
      "roa",
      "Return on assets",
      roa == null ? null : roa * 100,
      "%",
      "Latest fiscal year",
      "SEC XBRL",
      "Net income divided by total assets.",
      "Net income / total assets",
    ),
    netDebtEbitda: available(
      "netDebtEbitda",
      "Net debt / EBITDA",
      metrics.netDebtToEbitda,
      "x",
      "TTM",
      "SEC XBRL",
      "Net debt divided by EBITDA.",
      "Net debt / EBITDA",
    ),
    interestCover: available(
      "interestCover",
      "Interest cover",
      metrics.interestCover,
      "x",
      "TTM",
      "SEC XBRL",
      "Operating income divided by interest expense.",
      "Operating income / interest expense",
    ),
    dividendYield: available(
      "dividendYield",
      "Dividend yield",
      data.latestPrice.dividendYield == null
        ? null
        : data.latestPrice.dividendYield * 100,
      "%",
      "Latest price",
      "Yahoo Finance",
      "Indicated dividend divided by the latest close.",
      "Dividend per share / price",
    ),
    capexIntensity: available(
      "capexIntensity",
      "Capital expenditure",
      capexIntensity == null ? null : capexIntensity * 100,
      "% of revenue",
      "Latest fiscal year",
      "SEC XBRL",
      "Capital expenditure as a share of revenue.",
      "Capex / revenue",
    ),
    rndIntensity: available(
      "rndIntensity",
      "Research and development",
      rndIntensity == null ? null : rndIntensity * 100,
      "% of revenue",
      "Latest fiscal year",
      "SEC XBRL",
      "R&D expense as a share of revenue.",
      "R&D / revenue",
    ),
    ruleOf40: available(
      "ruleOf40",
      "Rule of 40",
      ruleOf40,
      "points",
      "TTM",
      "SEC XBRL",
      "Revenue growth plus free-cash-flow margin. A rough balance check, not a target.",
      "Revenue growth + FCF margin",
    ),
    inventoryDays: available(
      "inventoryDays",
      "Inventory days",
      inventoryDays,
      "days",
      "Latest fiscal year",
      "SEC XBRL",
      "Days of inventory based on average inventory and cost of goods sold.",
      "Average inventory / COGS × 365",
      "Inventory or cost-of-goods data unavailable.",
    ),
    receivablesDays: available(
      "receivablesDays",
      "Receivables days",
      receivablesDays,
      "days",
      "Latest fiscal year",
      "SEC XBRL",
      "Days sales outstanding using average receivables.",
      "Average receivables / revenue × 365",
      "Receivables data unavailable.",
    ),
    assetTurnover: available(
      "assetTurnover",
      "Asset turnover",
      assetTurnover,
      "x",
      "Latest fiscal year",
      "SEC XBRL",
      "Revenue generated per dollar of average assets.",
      "Revenue / average total assets",
      "Asset data unavailable.",
    ),
    cashRunway: available(
      "cashRunway",
      "Cash runway",
      cashRunway,
      "years",
      "Latest fiscal year",
      "SEC XBRL",
      "Cash and investments divided by the absolute trailing free-cash-flow burn. Not meaningful when free cash flow is positive.",
      "Cash / |negative FCF|",
      "Positive free cash flow or cash data unavailable.",
    ),
  };

  const kpis = config.ids.map((id) => all[id]).filter(Boolean);
  const segmentLabel = segments?.segments.length
    ? `${segments.segments.length} disclosed segment${segments.segments.length === 1 ? "" : "s"}`
    : "No segment split disclosed";
  kpis.push(
    available(
      "segmentCoverage",
      "Revenue mix disclosure",
      segments?.segments.length ?? 0,
      "segments",
      "Latest annual filing",
      "SEC XBRL",
      `${segmentLabel}. A single consolidated line is not treated as a segment split.`,
      "Count of disclosed reportable segments",
      "No segment data available.",
    ),
  );

  return {
    ticker: data.ticker,
    group: groupId,
    groupLabel: config.label,
    kpis,
  };
}
