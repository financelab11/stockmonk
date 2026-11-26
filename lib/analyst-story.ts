import type { RiskItem, StockStory, StoryBlock } from "@/content/stocks/types";
import { getArchivedCompany } from "@/config/archive";
import { ANALYST_NOTES } from "@/config/analyst-notes";
import { COMPANY_ANGLES } from "@/config/company-angles";
import { getCoverageGroup } from "@/config/coverage";
import type { PeerStat, ResearchBundle } from "./data";
import { BUCKETS, GROUP_BUCKET } from "./generated-story";
import { generatePreRevenueStory } from "./pre-revenue-story";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatMultiple,
  formatNumber,
  formatPercent,
  formatSignedPercent,
} from "./format";

type MetricKey =
  | "revenueGrowth"
  | "operatingMargin"
  | "roic"
  | "pe"
  | "evEbitda"
  | "fcfMargin";

const COST_DRIVER: Record<string, string> = {
  brokerage: "compensation and placement costs",
  insurance: "claims, reserves and acquisition costs",
  managedcare: "medical claims and clinical costs",
  labs: "lab supplies, labor and logistics",
  medtech: "manufacturing, R&D and hospital selling",
  pharma: "R&D, manufacturing and commercial spend",
  defense: "program costs and fixed-price execution",
  transport: "fuel, labor and maintenance",
  leisure: "labor, food, fuel and property costs",
  retail: "cost of goods, occupancy and labor",
  internet: "fulfillment, incentives and technology",
  payments: "processing, credit and funding costs",
  marketinfra: "technology, data and compensation",
  assetmanager: "compensation and fund expenses",
  financial: "funding costs and credit losses",
  software: "R&D and sales and marketing",
  tech: "R&D, manufacturing and channel costs",
  semis: "materials, manufacturing and design",
  industrial: "materials, labor and capacity",
  energy: "lifting costs, royalties and maintenance",
  materials: "energy, feedstock and maintenance",
  utilities: "fuel, operations and capital",
  realestate: "property operations and interest",
  consumer: "cost of goods, marketing and distribution",
  healthcare: "labor, supplies and reimbursement",
  ai: "compute, power and hardware",
};

const REVENUE_DRIVER: Record<string, string> = {
  brokerage:
    "Fees are tied to placement volume and commercial rates; retention and organic growth matter more than exposure to any single carrier.",
  insurance:
    "Premiums are fixed at underwriting; the combined ratio and investment income decide the profit.",
  managedcare:
    "Premium revenue is set at enrollment; medical claims decide the margin.",
  labs: "Test volume and reimbursement per test drive revenue; mix toward esoteric testing lifts price.",
  medtech:
    "Procedure volumes and the installed base drive consumable and device revenue.",
  pharma:
    "Revenue depends on a small number of programmes, patent life and payer coverage.",
  defense:
    "Contracted backlog converts into revenue as programmes deliver; budgets set the addressable market.",
  transport:
    "Passenger or freight volumes and pricing per unit drive revenue; fuel and labor drive the cost.",
  leisure:
    "Occupancy, ticket pricing and capacity drive revenue; labor and fuel drive the cost.",
  retail:
    "Traffic, basket size and inventory turns drive revenue; markdowns and occupancy drive the margin.",
  internet: "User growth, transaction volume and take rate drive revenue.",
  payments:
    "Payment volume and take rate drive revenue; credit losses and funding costs drive the margin.",
  marketinfra:
    "Activity, client assets and subscriptions drive revenue; take rate and data pricing drive the margin.",
  assetmanager: "Assets under management, fundraising and carry drive revenue.",
  financial:
    "Net interest income, fees and credit costs drive revenue and margin.",
  software:
    "Subscriptions and seat or usage growth drive revenue; retention and sales efficiency drive the margin.",
  tech: "Product cycles and customer expansion drive revenue; gross margin and R&D leverage drive the profit.",
  semis:
    "Unit volumes, content per device and utilization drive revenue and margin.",
  industrial:
    "Industrial production, backlog and pricing drive revenue; utilization drives the margin.",
  energy:
    "Commodity prices, production volumes and differentials drive revenue and cash flow.",
  materials:
    "Commodity prices, volumes and input costs drive revenue and margin.",
  utilities:
    "Regulated rate base and allowed returns drive revenue; fuel and capital costs drive the margin.",
  realestate:
    "Occupancy, rent and development drive revenue; interest and property costs drive the margin.",
  consumer:
    "Volume, price and mix drive revenue; input costs and marketing drive the margin.",
  healthcare:
    "Utilization, reimbursement and payer mix drive revenue; labor and supplies drive the cost.",
  ai: "Compute demand, utilization and pricing drive revenue; power and hardware drive the cost.",
};

const GROWTH_QUALITY: Record<string, string> = {
  brokerage:
    "Growth is only worth paying for if retention holds and acquired revenue earns its price.",
  insurance:
    "Premium growth is only worth paying for if the combined ratio holds.",
  managedcare:
    "Growth is only worth paying for if new members are priced above their medical cost trend.",
  labs: "Volume growth is only worth paying for if reimbursement per test holds.",
  medtech:
    "Procedure growth is only worth paying for if the installed base and reimbursement hold.",
  pharma:
    "Revenue growth is only worth paying for if the patent runway and launch curve support it.",
  defense:
    "Backlog growth is only worth paying for if it converts into margin, not just revenue.",
  transport:
    "Traffic growth is only worth paying for if pricing covers fuel and labor.",
  leisure:
    "Demand growth is only worth paying for if pricing covers labor and capacity costs.",
  retail:
    "Sales growth is only worth paying for if inventory turns and markdowns stay under control.",
  internet:
    "User growth is only worth paying for if take rate and contribution margin hold.",
  payments:
    "Volume growth is only worth paying for if take rate and credit losses stay stable.",
  marketinfra:
    "Activity growth is only worth paying for if take rate and recurring revenue hold.",
  assetmanager:
    "Asset growth is only worth paying for if fee rates and fundraising hold.",
  financial:
    "Top-line growth only matters if it is priced above funding costs and credit losses.",
  software:
    "Subscription growth is only worth paying for if retention and sales efficiency hold.",
  tech: "Growth is only worth paying for if gross margin and R&D leverage hold.",
  semis: "Volume growth is only worth paying for if utilization and mix hold.",
  industrial:
    "Volume growth is only worth paying for if pricing covers input costs.",
  energy:
    "Production growth is only worth paying for if the reinvestment return clears the cost of capital.",
  materials:
    "Volume growth is only worth paying for if the price-cost spread holds.",
  utilities:
    "Rate-base growth is only worth paying for if allowed returns hold.",
  realestate:
    "Occupancy growth is only worth paying for if rents cover financing costs.",
  consumer:
    "Volume growth is only worth paying for if pricing covers input costs.",
  healthcare:
    "Volume growth is only worth paying for if reimbursement covers labor and supplies.",
  ai: "Capacity growth is only worth paying for if utilization and pricing hold.",
};

const BALANCE_SHEET_NOTE: Record<string, string> = {
  financial:
    "For a bank, deposits and regulatory capital matter more than a conventional net-debt figure.",
  insurance:
    "For an insurer, reserves and the investment portfolio matter more than net debt.",
  managedcare:
    "For a managed-care insurer, reserves and investment income matter more than net debt.",
  assetmanager:
    "For an asset manager, fee-related earnings and fund balances matter more than net debt.",
};

function displayName(name: string): string {
  const trimmed = name.replace(/\s+/g, " ").trim();
  return trimmed.replace(/\b(Inc|Corp|Co|Ltd|Plc|Llc)$/i, "$1.");
}

function shortName(name: string): string {
  return displayName(name)
    .replace(
      /\b(Inc|Corp|Corporation|Co|Company|Ltd|Limited|Plc|Llc|Incorporated)\.?$/i,
      "",
    )
    .replace(/[,.]\s*$/, "")
    .trim();
}

function possessive(name: string): string {
  const base = shortName(name);
  return base.endsWith("s") ? `${base}'` : `${base}'s`;
}

function humanizeDates(text: string): string {
  return text
    .replace(/\b\d{4}-\d{2}-\d{2}\b/g, (date) => formatDate(date))
    .replace(/\b(Inc|Corp|Co|Ltd|Plc|Llc),?\.?\s+(?=[a-z])/g, "$1. ")
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function article(word: string): string {
  return /^[aeiou]/i.test(word.trim()) ? "an" : "a";
}

function growth(value: number | null | undefined): string {
  return value == null ? "n/a" : formatSignedPercent(value);
}

function quarterChange(value: number | null | undefined): string {
  if (value == null) return "";
  if (Math.abs(value) < 0.005) return "was flat";
  return `${value > 0 ? "grew" : "fell"} ${formatPercent(Math.abs(value))}`;
}

function percentArticle(value: number | null | undefined): string {
  const formatted = formatPercent(value);
  const numeric = formatted.replace(/[^0-9.]/g, "");
  return `${/^(8|11|18)/.test(numeric) ? "an" : "a"} ${formatted}`;
}

function multipleArticle(value: number | null | undefined): string {
  const formatted = formatMultiple(value);
  return `${/^(8|11|18)/.test(formatted) ? "an" : "a"} ${formatted}`;
}

function listWithAnd(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

function upperFirst(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const PROPER_NOUN =
  /^(Latin|US|U\.S\.|China|Chinese|Europe|European|Asia|Asian|India|Indian|Japan|Japanese|Brazil|Mexican|Mexico|American|Africa|African|Middle East|UK|United Kingdom|United States)/;

function lowerFirst(text: string): string {
  if (PROPER_NOUN.test(text)) return text;
  if (/^[A-Z]{2}/.test(text)) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}

const FINITE_VERB =
  /\b(is|are|was|were|has|have|had|can|could|would|will|may|might|depends|rests|comes|creates|protects|gives|drive|drives|hit|hits|rise|rises|fall|falls|compress|compresses|slow|slows|weigh|weighs|remain|remains|require|requires|reflect|reflects|explain|explains|determine|determines|decide|decides|support|supports|limit|limits|reduce|reduces)\b/i;

function asSentence(text: string, prefix: string): string {
  const clean = text.trim().replace(/\.$/, "");
  return FINITE_VERB.test(clean)
    ? `${clean}.`
    : `${prefix} ${lowerFirst(clean)}.`;
}

function hash(ticker: string): number {
  return [...ticker].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function variant(ticker: string, salt: number, options: string[]): string {
  return options[(hash(ticker) + salt) % options.length];
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter((word) => /[A-Za-z0-9]/.test(word)).length;
}

function floor(
  text: string,
  ticker: string,
  salt: number,
  options: string[],
): string {
  let result = text.trim();
  let index = 0;
  while (wordCount(result) < 25 && index < options.length) {
    result = `${result} ${
      options[(hash(ticker) + salt + index) % options.length]
    }`;
    index += 1;
  }
  return result.replace(/\s+/g, " ").trim();
}

const FLOOR = {
  snapshot1: [
    "The operating margin and cash conversion are the next things to test.",
    "The consensus estimate and the current multiple frame the near-term debate.",
    "The scale of the revenue base matters less than the margin it earns.",
    "The margin and the multiple are the two numbers that matter from here.",
    "The next test is whether the current profitability can be sustained.",
    "The market is already paying for a view; the financials are the check.",
  ],
  snapshot1Financial: [
    "The return on equity and credit costs are the next things to test.",
    "The spread between asset yields and funding costs is the core variable.",
    "The multiple and the capital return are the two numbers that matter from here.",
    "The next test is whether returns hold as credit normalises.",
  ],
  snapshot2: [
    "The mix matters because the segments earn different margins and grow at different rates.",
    "That mix is the first thing to understand: it drives both the consolidated margin and the risk.",
    "The business is not a single homogeneous pool; the segment weights explain most of the margin difference.",
  ],
  snapshot2Single: [
    "The business is judged on whether the consolidated margin and returns can improve from here.",
    "Without a segment split, the consolidated margin is the cleanest unit of analysis.",
    "The absence of a segment split puts more weight on the group margin and cash conversion.",
  ],
  growth1: [
    "The consensus estimate is the next data point to test.",
    "The pace of growth matters less than whether it carries the same margin as the base.",
    "The next data point is the quarterly growth rate against the consensus.",
    "The growth rate is only useful if the incremental margin holds.",
    "The next filing will show whether growth is volume, price or acquisitions.",
    "The market already has a growth expectation; the filings are the test.",
  ],
  snapshot3: [
    "The multiple is a claim on the next few years, not a verdict on the last one.",
    "The price already embeds a view on growth and margins; the analysis below tests it.",
    "What matters is whether the current economics can support the multiple through a cycle.",
  ],
  growth2: [
    "The consensus estimate is the first test; the second is whether incremental revenue carries the same margin as the base.",
    "Growth is only valuable if the new revenue earns a similar return to the existing business.",
    "The next filing should show whether the pace came from demand, pricing or acquisitions.",
  ],
  performance2: [
    "A single year of returns is less informative than the direction of margins and capital intensity.",
    "The trend in returns matters more than the level, especially for a business with cyclical end markets.",
    "Comparisons with peers are useful, but the company's own history is the better test.",
  ],
  cash1: [
    "Operating cash flow and the balance sheet are the better tests at this stage.",
    "The cash profile is better judged through the balance sheet than the free-cash-flow margin.",
    "Capex and working capital are the relevant cash variables here.",
  ],
  cash2: [
    "The maturity profile and interest cover determine how much flexibility the balance sheet leaves.",
    "Leverage is only a problem if the cash flow cannot service it through a downturn.",
    "The test is whether that cash is reinvested at a return above the cost of capital.",
  ],
  valuation1: [
    "The peer comparison is a starting point; the company's own history is the second reference.",
    "A multiple only means something relative to growth, returns and the cost of capital.",
    "The market's expectation is embedded in the price; the question is whether it is too high or too low.",
    "The multiple is a summary of expectations, not an independent estimate of value.",
    "What matters is whether the current multiple is above or below the company's own history.",
    "The valuation debate is about durability, not the next quarter.",
  ],
  valuation2: [
    "A re-rating requires evidence that growth or returns can exceed the current expectation.",
    "The multiple holds if the current economics persist and compresses if they fade.",
    "What would justify a higher multiple is durable growth and returns; what would break it is the reverse.",
  ],
  analysts1: [
    "The spread between the high and low target shows how divided the published views are.",
    "The consensus is a useful benchmark, but it is a lagging summary of published views.",
    "The target is an output of the analysts' models, not an independent estimate of value.",
  ],
  analysts2: [
    "The estimate is a forecast, not a reported result; the next filing is the test.",
    "Revisions matter more than the absolute estimate because they show the direction of travel.",
    "The burden of proof is on the company to deliver the growth embedded in the estimate.",
  ],
};

function revisionText(value: number | null | undefined): string {
  if (value == null) return "n/a";
  if (Math.abs(value) < 0.001) return "little changed";
  return `${value > 0 ? "up" : "down"} ${formatPercent(Math.abs(value))}`;
}

function medianPeer(peers: PeerStat[], key: MetricKey): number | null {
  const values = peers
    .map((peer) => peer[key])
    .filter(
      (value): value is number => value != null && Number.isFinite(value),
    );
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2
    ? sorted[middle]
    : (sorted[middle - 1] + sorted[middle]) / 2;
}

function peerGapClause(
  value: number | null | undefined,
  median: number | null,
  mode: "points" | "relative" = "points",
): string {
  if (value == null || median == null) return "";
  const difference = value - median;
  if (Math.abs(difference) < (mode === "points" ? 0.01 : 0.005)) {
    return `roughly in line with the peer median of ${formatPercent(median)}`;
  }
  const gap =
    mode === "relative"
      ? `${formatPercent(Math.abs(difference / median))} ${
          difference > 0 ? "above" : "below"
        }`
      : `${Math.abs(difference * 100).toFixed(1)} points ${
          difference > 0 ? "above" : "below"
        }`;
  return `${gap} the peer median of ${formatPercent(median)}`;
}

function peerGap(
  value: number | null | undefined,
  median: number | null,
  _label?: string,
  mode: "points" | "relative" = "points",
): string {
  if (value == null || median == null) return "";
  return `That is ${peerGapClause(value, median, mode)}.`;
}

function bucketKeyFor(
  ticker: string,
  groupId: string | undefined,
  industry: string | undefined,
): string {
  const text = `${industry ?? ""}`.toLowerCase();
  if (ticker === "AMP") return "marketinfra";
  if (/^banks? -|^banks?$|regional bank/.test(text)) return "financial";
  if (/insurance brokers?/.test(text)) return "brokerage";
  if (/insurance|reinsurance/.test(text)) return "insurance";
  if (/asset management/.test(text)) return "assetmanager";
  if (groupId === "banks-insurance") {
    if (/broker|advisory|exchange|distribution/.test(text)) return "brokerage";
    if (/insurance|underwrit|reinsur/.test(text)) return "insurance";
    return "financial";
  }
  if (groupId === "capital-markets") {
    return ticker === "AMP" ||
      /financial data|stock exchange|capital markets|broker/.test(text)
      ? "marketinfra"
      : "assetmanager";
  }
  if (groupId === "payments-fintech") {
    if (ticker === "FIS" || ticker === "FISV" || ticker === "GPN")
      return "payments";
    if (ticker === "ADP" || ticker === "JKHY") return "software";
    if (
      /financial data|stock exchange|information technology services|business services/.test(
        text,
      )
    )
      return "marketinfra";
    return "payments";
  }
  if (groupId === "consumer-retail") {
    return /travel|lodging|resort|casino|hotel|cruise|restaurant|leisure|gaming/.test(
      text,
    )
      ? "leisure"
      : "retail";
  }
  if (groupId === "healthcare-services") {
    if (ticker === "LH" || ticker === "DGX") return "labs";
    if (/health(?:care)? ?plans?|managed care|health insurance/.test(text))
      return "managedcare";
    return /device|instrument|diagnostic|tool/.test(text)
      ? "medtech"
      : "healthservices";
  }
  if (groupId === "pharma-biotech") return "pharma";
  if (groupId === "aerospace-defense") return "defense";
  if (groupId === "transport-autonomy") {
    return /auto parts|auto manufacturers/.test(text)
      ? "autonomy"
      : "transport";
  }
  if (groupId === "internet-platforms") return "internet";
  return GROUP_BUCKET[groupId ?? ""] ?? "tech";
}

function annualRows(bundle: ResearchBundle) {
  return [...bundle.data.annual].sort((a, b) =>
    a.reportDate.localeCompare(b.reportDate),
  );
}

function sourceUrl(bundle: ResearchBundle): string {
  if (bundle.data.latest10KUrl) return bundle.data.latest10KUrl;
  const cik = bundle.data.cik?.padStart(10, "0");
  return cik
    ? `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${cik}&type=10-K&dateb=&owner=include&count=40`
    : "https://www.sec.gov/edgar/search/";
}

function filingHistoryUrl(bundle: ResearchBundle): string {
  const cik = bundle.data.cik?.padStart(10, "0");
  const base = cik
    ? `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${cik}`
    : "https://www.sec.gov/edgar/search/";
  return `${base}&type=&dateb=&owner=include&count=40`;
}

export function generateAnalystStory(bundle: ResearchBundle): StockStory {
  const { data, consensus, segments, factors } = bundle;
  if (
    (data.metrics.revenueTtm ?? 0) < 50_000_000 &&
    (data.metrics.freeCashFlowTtm ?? 0) < 0
  ) {
    return generatePreRevenueStory(bundle);
  }
  const currency = data.currency ?? "USD";
  const price = (value: number | null | undefined) =>
    formatCurrency(value, 2, currency);
  const money = (value: number | null | undefined) =>
    formatCompactCurrency(value, currency);
  const group = getCoverageGroup(data.ticker);
  const bucketKey = bucketKeyFor(data.ticker, group?.id, data.industry);
  const bucket =
    BUCKETS[bucketKey] ??
    (bucketKey === "assetmanager" ? BUCKETS.capitalmarkets : BUCKETS.tech);
  const baseNote = COMPANY_ANGLES[data.ticker];
  const note = baseNote
    ? { ...baseNote, ...(ANALYST_NOTES[data.ticker] ?? {}) }
    : undefined;
  const archived = getArchivedCompany(data.ticker);
  const annual = annualRows(bundle);
  const firstAnnual = annual[0] ?? null;
  const lastAnnual = annual.at(-1) ?? null;
  const name = displayName(data.name);
  const revenue = data.metrics.revenueTtm;
  const revenueGrowth = data.metrics.revenueGrowthTtm;
  const opMargin = data.metrics.operatingMargin;
  const grossMargin = data.metrics.grossMargin;
  const netMargin = data.metrics.netMargin;
  const netMarginSane = netMargin != null && Math.abs(netMargin) <= 1;
  const opMarginSane = opMargin != null && Math.abs(opMargin) <= 1;
  const fcf = data.metrics.freeCashFlowTtm;
  const fcfMargin = data.metrics.fcfMargin;
  const fcfMarginSane = fcfMargin != null && Math.abs(fcfMargin) <= 1;
  const roic = data.metrics.roic;
  const roe = data.metrics.roe;
  const pe = data.metrics.pe;
  const ev = data.metrics.evEbitda;
  const netDebt = data.metrics.netDebt;
  const leverage = data.metrics.netDebtToEbitda;
  const interestCover = data.metrics.interestCover;
  const eps = data.metrics.epsTtm;
  const epsGrowth = data.metrics.epsGrowthTtm;
  const fcfYield = data.metrics.fcfYield;
  const cagr = bundle.cagr;
  const latestQ = bundle.latestQYoY;
  const rangePosition = bundle.rangePosition;
  const latestQuarterRow =
    [...data.quarterly]
      .filter((row) => !row.ttm)
      .sort((a, b) => (a.reportDate ?? "").localeCompare(b.reportDate ?? ""))
      .at(-1) ?? null;
  const quarterLabel = latestQuarterRow
    ? `${latestQuarterRow.period} FY${String(latestQuarterRow.fyear).slice(-2)}`
    : null;
  const target = consensus?.targetMean ?? null;
  const analystCount = consensus?.analystCount ?? null;
  const estimate = consensus?.estimates.find(
    (item) => item.period === "Current fiscal year",
  );
  const priceNow = data.latestPrice.close;
  const netDebtText =
    netDebt == null
      ? "an undisclosed net-debt position"
      : netDebt < 0
        ? `${money(Math.abs(netDebt))} of net cash`
        : `${money(netDebt)} of net debt`;
  const balanceLine =
    BALANCE_SHEET_NOTE[bucketKey] ??
    (netDebt == null
      ? "The balance sheet is not disclosed in the current data."
      : netDebt < 0
        ? `The balance sheet carries ${money(Math.abs(netDebt))} of net cash.`
        : `Net debt is ${money(netDebt)}${
            leverage != null ? `, or ${formatMultiple(leverage)} EBITDA` : ""
          }.`);
  const multipleClause = `${pe != null && pe > 0 ? `${formatMultiple(pe)} trailing earnings` : "no meaningful earnings multiple"} and ${
    ev != null && ev > 0
      ? `${formatMultiple(ev)} EV/EBITDA`
      : "no meaningful EV/EBITDA multiple"
  }`;
  const capexValue =
    lastAnnual?.capex != null && revenue && revenue > 0
      ? Math.abs(lastAnnual.capex) / revenue
      : null;
  const capexSentence =
    capexValue != null
      ? variant(data.ticker, 3, [
          `Capex is ${formatPercent(capexValue)} of revenue, so the business is ${capexValue > 0.08 ? "capital-hungry" : "asset-light"}.`,
          `Capital spending runs at ${formatPercent(capexValue)} of revenue, which is ${capexValue > 0.08 ? "a meaningful claim on cash flow" : "low relative to the revenue base"}.`,
        ])
      : "Capex is not disclosed in the current data.";
  const roeText =
    roe != null ? formatPercent(roe) : "not meaningful on the current data";
  const peerStats = bundle.peerStats ?? [];
  const peerMargin = medianPeer(peerStats, "operatingMargin");
  const peerRoic = medianPeer(peerStats, "roic");
  const roicSentence =
    roic != null
      ? `Return on invested capital was ${formatPercent(roic)}. ${peerGap(
          roic,
          peerRoic,
          "Return on invested capital",
        )}`
      : "Return on invested capital is not meaningful on the current data.";
  const peerPe = medianPeer(peerStats, "pe");
  const moatSentence = note?.moat
    ? asSentence(note.moat, "The edge is")
    : undefined;
  const riskSentence = note?.risk
    ? asSentence(note.risk, "The main risk is")
    : undefined;
  const catalystClause = note?.catalyst
    ?.replace(/^The next catalyst is\s+/i, "")
    .replace(/^The catalyst is\s+/i, "")
    .replace(/\.$/, "");
  const riskTitle = riskSentence
    ? upperFirst(
        riskSentence
          .replace(/^The main risk is\s+/i, "")
          .replace(/\.$/, "")
          .split(
            /\s+(?:can|could|would|will|may|might|is|are|was|were|drive|drives|hit|hits|rise|rises|fall|falls|compress|compresses|slow|slows|weigh|weighs|remains|require|requires|reflect|reflects|explain|explains|determine|determines|decide|decides|support|supports|limit|limits|reduce|reduces)\s+/,
          )[0]
          .split(/[;]/)[0]
          .trim(),
      )
    : (bucket.risks[0]?.title ?? "Primary risk");
  const isBank = bucketKey === "financial";
  const isInsurer = bucketKey === "insurance";
  const isAssetManager = bucketKey === "assetmanager";
  const isManagedCare = bucketKey === "managedcare";
  const isLabs = bucketKey === "labs";
  const isBroker = bucketKey === "brokerage";
  const isRetail = bucketKey === "retail";
  const isSoftware = bucketKey === "software";
  const isSemis = bucketKey === "semis";
  const isBalanceSheetBusiness =
    isBank || isInsurer || isAssetManager || isManagedCare;
  const costDriver = COST_DRIVER[bucketKey] ?? "operating costs";
  const balanceSheetNote = BALANCE_SHEET_NOTE[bucketKey] ?? "";
  const preRevenue = (revenue ?? 0) < 50_000_000 && (fcf ?? 0) < 0;
  const negativeEquity = roe != null && roe < 0 && roic != null && roic > 0;

  const filteredSegments = (segments?.segments ?? []).filter((segment) => {
    const label = segment.name.trim();
    if (/^reportable/i.test(label)) return false;
    if (
      /^(corporate \/ other|total|consolidated)$/i.test(label) &&
      segment.share >= 0.95
    )
      return false;
    return true;
  });
  const seenSegmentRevenue = new Set<number>();
  const dedupedSegments = filteredSegments.filter((segment) => {
    if (segment.revenue == null) return true;
    if (seenSegmentRevenue.has(segment.revenue)) return false;
    seenSegmentRevenue.add(segment.revenue);
    return true;
  });
  const segmentList =
    dedupedSegments.reduce((sum, segment) => sum + segment.share, 0) >= 0.5
      ? dedupedSegments
      : [];
  const topSegment = segmentList[0] ?? null;
  const secondSegment = segmentList[1] ?? null;
  const segmentSummary =
    segmentList.length > 1
      ? `${listWithAnd(
          segmentList
            .slice(0, 3)
            .map(
              (segment) => `${segment.name} at ${formatPercent(segment.share)}`,
            ),
        )}`
      : topSegment
        ? `${topSegment.name} at ${formatPercent(topSegment.share)}`
        : "";
  const geography = segments?.geography ?? [];
  const topGeography = geography[0] ?? null;
  const geoLabel = topGeography
    ? topGeography.name === "United States"
      ? "the US"
      : topGeography.name
    : "";
  const geoStart = upperFirst(geoLabel);

  const revenueMissing = (revenue == null || revenue <= 0) && (fcf ?? 0) > 0;
  const revenueLine = revenueMissing
    ? "reported revenue is not available in the current extract"
    : revenue == null || revenue <= 0
      ? "has no product revenue"
      : revenueGrowth == null
        ? `${possessive(name)} revenue was ${money(revenue)}`
        : revenueGrowth >= 0.02
          ? `${possessive(name)} revenue rose ${formatPercent(revenueGrowth)} to ${money(revenue)}`
          : revenueGrowth <= -0.02
            ? `${possessive(name)} revenue fell ${formatPercent(Math.abs(revenueGrowth))} to ${money(revenue)}`
            : `${possessive(name)} revenue was flat at ${money(revenue)}`;

  const descriptionSentence =
    data.description && data.description.trim().length >= 70
      ? humanizeDates(data.description).split(/(?<=[.!?])\s+(?=[A-Z])/)[0]
      : `${shortName(name)} operates in ${data.industry || data.sector}.`;

  const revenueSentence = preRevenue
    ? `${name} has no product revenue`
    : revenueMissing
      ? `${possessive(name)} reported revenue is not available in the current extract`
      : upperFirst(revenueLine);

  const financialMargin =
    bucketKey === "financial" || bucketKey === "insurance";
  const marginClause = financialMargin
    ? roe != null
      ? `, with ${percentArticle(roe)} return on equity`
      : ""
    : opMarginSane
      ? ` at ${percentArticle(opMargin)} operating margin`
      : "";
  const fcfComparable =
    revenue != null &&
    revenue > 0 &&
    fcf != null &&
    Math.abs(fcf) <= revenue * 2;
  const snapshotLine = revenueMissing
    ? `${revenueSentence}.${
        fcf != null ? ` Free cash flow was ${money(fcf)}.` : ""
      }${latestQ == null ? "" : ` The latest quarter ${quarterLabel ? `(${quarterLabel}) ` : ""}${quarterChange(latestQ)}.`}`
    : `${revenueSentence}${marginClause}${
        fcfComparable
          ? fcf >= 0
            ? `, generating ${money(fcf)} of free cash flow`
            : `, burning ${money(Math.abs(fcf))} of cash`
          : ""
      }.${latestQ == null ? "" : ` The latest quarter ${quarterLabel ? `(${quarterLabel}) ` : ""}${quarterChange(latestQ)}.`}`;

  const mixLine =
    segmentList.length > 1
      ? `${topSegment?.name ?? "The largest segment"} is ${formatPercent(
          topSegment?.share,
        )} of revenue and ${secondSegment?.name ?? "the next segment"} is ${formatPercent(
          secondSegment?.share,
        )}.`
      : topSegment
        ? `${topSegment.name} is the whole revenue base.`
        : `Revenue is reported as one consolidated line.`;

  const centralDebate =
    catalystClause && riskTitle
      ? `${variant(data.ticker, 9, [
          "The upside is",
          "The catalyst is",
          "What could lift the return is",
          "The near-term driver is",
        ])} ${lowerFirst(catalystClause)}. ${variant(data.ticker, 10, [
          "The risk is",
          "What would break it is",
          "The exposure is",
          "The thing to watch is",
        ])} ${lowerFirst(riskTitle)}.`
      : riskTitle
        ? `The risk is ${lowerFirst(riskTitle)}.`
        : `The debate is whether the current growth and margin are durable enough to justify the multiple.`;

  const peerValuation =
    pe != null && pe > 0 && peerPe != null && peerPe > 0
      ? `The earnings multiple is ${formatPercent(
          Math.abs(pe / peerPe - 1),
        )} ${pe > peerPe ? "above" : "below"} the ${formatMultiple(
          peerPe,
        )} peer median.`
      : "";

  const rangeLine =
    rangePosition == null
      ? ""
      : `The stock is ${Math.round(rangePosition * 100)}% of the way up its 52-week range.`;

  const bigPicture: StoryBlock = {
    paragraphs: [
      archived
        ? `${name} last traded at ${price(archived.lastClose)} on ${formatDate(
            archived.lastTraded,
          )}, when the ${archived.acquirer} transaction closed. The final consideration was ${archived.consideration}. The figures below are the last reported record, not a live quote.`
        : snapshotLine,
      archived
        ? `The final reported mix was ${segmentSummary || "a single consolidated revenue line"}${topGeography ? `, with ${geoLabel} the largest geography at ${formatPercent(topGeography.share)}` : ""}. The business no longer sets its own capital allocation or pricing; it sits inside ${archived.acquirer}.`
        : `${mixLine}${topGeography ? ` ${geoStart} is the largest geography at ${formatPercent(topGeography.share)} of revenue.` : ""} ${centralDebate}`,
      archived
        ? `The archived valuation is ${formatMultiple(
            pe,
          )} trailing earnings and ${formatMultiple(
            ev,
          )} EV/EBITDA, based on the final consideration and the last statements. It is a historical reference, not a current multiple.`
        : `At ${price(priceNow)}, the equity is worth ${money(
            data.latestPrice.marketCap,
          )}, or ${multipleClause}. ${peerValuation} ${rangeLine} ${variant(
            data.ticker,
            2,
            [
              "The multiple is a claim on the next few years, not a verdict on the last one.",
              "The price already embeds a view on growth and margins; the analysis below tests it.",
              "What matters is whether the current economics can support the multiple through a cycle.",
              "The market has a view; the work is checking it against the filings.",
            ],
          )}`,
    ].map((paragraph, index) =>
      floor(
        paragraph,
        data.ticker,
        30 + index,
        index === 0
          ? isBank || isInsurer
            ? FLOOR.snapshot1Financial
            : FLOOR.snapshot1
          : index === 1
            ? segmentList.length > 1
              ? FLOOR.snapshot2
              : FLOOR.snapshot2Single
            : FLOOR.snapshot3,
      ),
    ),
    quote: archived
      ? `${name} is no longer a live market; the useful question is what its final record says about the business ${archived.acquirer} bought.`
      : (note?.angle ??
        `${revenueSentence}, and the investment case depends on whether the current margin and growth are repeatable.`),
  };

  const whatItDoes: StoryBlock = {
    paragraphs: [
      archived
        ? `${name} was ${article(
            data.industry || data.sector,
          )} ${data.industry || data.sector} business. ${note?.angle ?? ""}`
        : descriptionSentence,
      archived
        ? `At the last report, the operating margin was ${formatPercent(
            opMargin,
          )} and the free-cash-flow margin was ${formatPercent(fcfMargin)}. The record is closed; there is no current guidance.`
        : !opMarginSane
          ? `The operating margin is not meaningful on the current data${
              grossMargin != null
                ? `, although the gross margin is ${formatPercent(grossMargin)}`
                : ""
            }. ${upperFirst(costDriver)} remain the main cost line, so the margin trend is the number to watch.`
          : isManagedCare
            ? `Medical claims absorb the bulk of premium revenue, leaving ${percentArticle(
                opMargin,
              )} operating margin. ${peerGap(
                opMargin,
                peerMargin,
                "The operating margin",
              )} A few points of medical-cost trend can wipe out the profit.`
            : isInsurer
              ? `Claims and expenses consume most of premium revenue, so the combined ratio and investment income decide the operating result. That makes the combined ratio and reserve development the numbers to watch, not the reported operating margin.`
              : isBank
                ? `The operating margin is a spread measure rather than a product margin: it reflects the difference between asset yields and funding costs after expenses. The relevant drivers are the loan book, deposit costs and credit losses rather than product pricing.`
                : isAssetManager
                  ? `Compensation is the largest cost, so operating leverage depends on fee growth per employee. The operating margin was ${formatPercent(
                      opMargin,
                    )}. ${peerGap(
                      opMargin,
                      peerMargin,
                      "The operating margin",
                    )}`
                  : grossMargin != null
                    ? `${shortName(name)} earned ${percentArticle(
                        grossMargin,
                      )} gross margin, and ${costDriver} absorbed ${formatPercent(
                        grossMargin - (opMargin ?? grossMargin),
                      )} of revenue, leaving ${percentArticle(
                        opMargin,
                      )} operating margin. ${peerGap(
                        opMargin,
                        peerMargin,
                        "The operating margin",
                      )}`
                    : `${shortName(name)} does not report a product gross margin; ${costDriver} sit inside the operating line, leaving ${percentArticle(
                        opMargin,
                      )} operating margin. ${peerGap(
                        opMargin,
                        peerMargin,
                        "The operating margin",
                      )}`,
      archived
        ? `The final balance sheet carried ${money(
            netDebt,
          )} of net debt, and the equity no longer trades independently.`
        : isBank
          ? `Capital is regulatory rather than physical: CET1, deposit funding and book value matter more than capex. Return on equity was ${roeText}, and the relevant comparison is with other regional banks.`
          : isInsurer
            ? `Capital is held against reserves and the investment portfolio, so book value and the combined ratio matter more than capex. Return on equity was ${roeText}.`
            : isAssetManager
              ? `The balance sheet supports the funds rather than a product business. Return on equity was ${roeText}.`
              : isManagedCare
                ? `Capital is regulated and held against medical reserves, so the medical loss ratio and reserve development matter more than capex. Return on equity was ${roeText}.`
                : `${capexSentence} ${balanceLine} ${roicSentence}`,
    ],
    bullets: [
      {
        title: "Revenue mix",
        detail:
          segmentList.length > 1
            ? `${segmentSummary}. The largest segment sets the consolidated margin; the second is the next swing factor.`
            : topSegment
              ? `${topSegment.name} is the consolidated business at ${formatPercent(topSegment.share)} of revenue.`
              : "The company reports one consolidated revenue line, so the overall margin is the cleanest comparison.",
      },
      {
        title: "Margin engine",
        detail: !opMarginSane
          ? `The operating margin is not meaningful on the current data${
              grossMargin != null
                ? `, although the gross margin is ${formatPercent(grossMargin)}`
                : ""
            }. ${upperFirst(costDriver)} are the cost line to watch.`
          : isManagedCare
            ? `Operating margin ${formatPercent(opMargin)}. Medical claims are the main cost line, so the medical loss ratio or combined ratio is the bridge to profit.`
            : isInsurer
              ? `The combined ratio and investment income are the bridge to profit; the reported operating margin is not a useful comparison for an insurer.`
              : isBank
                ? `Net interest margin and credit costs are the bridge between revenue and profit; the reported operating margin is a spread measure.`
                : grossMargin != null
                  ? `Gross margin ${formatPercent(grossMargin)}, operating margin ${formatPercent(opMargin)}. ${upperFirst(costDriver)} are the bridge between the two.`
                  : `Operating margin ${formatPercent(opMargin)}. ${upperFirst(costDriver)} are the main cost line, ${variant(
                      data.ticker,
                      11,
                      [
                        "so the margin depends on spreading the cost base over more revenue.",
                        "so incremental revenue matters more than product mix.",
                        "so the operating margin is the scorecard for cost discipline.",
                      ],
                    )}`,
      },
      {
        title: "Capital intensity",
        detail: isBank
          ? `Deposits and CET1 are the capital base; ROE ${roeText}${
              roic != null ? `, ROIC ${formatPercent(roic)}` : ""
            }.`
          : isInsurer || isManagedCare
            ? `Reserves and the investment portfolio are the capital base; ROE ${roeText}.`
            : isAssetManager
              ? `Fee-related earnings and fund balances are the capital base; ROE ${roeText}.`
              : `${capexValue != null ? `Capex ${formatPercent(capexValue)} of revenue; ` : ""}${netDebtText}${
                  roic != null ? `; ROIC ${formatPercent(roic)}` : ""
                }.`,
      },
    ],
  };

  const modelLine =
    moatSentence ??
    (isManagedCare
      ? "The medical loss ratio is the single most important number in the model."
      : isInsurer
        ? "Reserve adequacy and the combined ratio matter more than premium growth."
        : isBank
          ? "Net interest margin and credit costs are the core drivers."
          : isAssetManager
            ? "Fee-related earnings and carried interest are the core drivers."
            : isBroker
              ? "Retention and organic growth are the core drivers."
              : (bucket.drivers[0]?.detail ??
                "The incremental margin on new revenue is the number that matters."));

  const marginGapSentence = opMarginSane
    ? `The operating margin is ${formatPercent(opMargin)}${
        peerGapClause(opMargin, peerMargin)
          ? `, ${peerGapClause(opMargin, peerMargin)}`
          : ""
      }.`
    : "The operating margin is not meaningful on the current data.";

  const genericMarginComment = `${marginGapSentence} ${
    isRetail
      ? "Inventory turns and markdown discipline decide whether volume growth reaches the operating line."
      : isSoftware
        ? "Retention and sales efficiency decide whether subscription growth reaches the operating line."
        : isSemis
          ? "Utilization and mix decide whether volume growth reaches the operating line."
          : variant(data.ticker, 12, [
              "What matters is whether new revenue carries the same margin as the base.",
              "The incremental margin on new revenue is the number to watch.",
              "The next dollar of revenue matters less than the margin it carries.",
              "The shape of the incremental margin will decide whether growth creates value.",
              "Operating leverage, not the absolute growth rate, is the swing factor.",
            ])
  }`;

  const howItMakesMoney: StoryBlock = {
    paragraphs: [
      `${REVENUE_DRIVER[bucketKey] ?? `Revenue is converted into profit after ${costDriver}; the mix between recurring and transactional revenue decides how much of the margin is repeatable.`} ${modelLine}`,
      isBank
        ? `The bank earns a spread between asset yields and deposit costs. ${balanceSheetNote} Return on equity was ${formatPercent(
            roe,
          )}; the key variables are net interest margin, credit costs and capital returns.`
        : isInsurer
          ? `The insurer earns underwriting profit when premiums exceed claims and expenses, plus investment income on the float. ${balanceSheetNote} Return on equity was ${formatPercent(
              roe,
            )}; reserve development and the combined ratio are the variables that matter.`
          : isAssetManager
            ? `The manager earns fees on assets under management and performance fees on carried interest. ${balanceSheetNote} Return on equity was ${formatPercent(
                roe,
              )}; fundraising, fee rates and realisations drive the model.`
            : isManagedCare
              ? `The insurer keeps the difference between premium revenue and medical claims. The margin is thin enough that a few points of medical-cost trend can wipe out the profit. Membership mix and rate filings are the other variables to watch.`
              : isLabs
                ? `Volume and reimbursement per test drive revenue, while lab supplies and labor drive the cost base. Esoteric testing carries higher prices than routine panels, so mix matters as much as volume.`
                : isBroker
                  ? `Compensation is the largest cost, so operating leverage depends on revenue per producer and on integrating acquisitions without losing clients.`
                  : genericMarginComment,
    ],
  };

  const estimateConsistent =
    estimate?.revenueAvg == null ||
    revenue == null ||
    revenue <= 0 ||
    estimate.revenueGrowth == null ||
    Math.abs(
      (1 + estimate.revenueGrowth) / (estimate.revenueAvg / revenue) - 1,
    ) < 0.4;
  const estimateGrowth =
    estimate?.revenueAvg != null && revenue && revenue > 0 && estimateConsistent
      ? estimate.revenueAvg / revenue - 1
      : null;
  const estimateLine = estimate
    ? estimateConsistent && estimate.revenueAvg != null
      ? `The current-year consensus looks for ${money(
          estimate.revenueAvg,
        )} of revenue and ${price(estimate.epsAvg)} of EPS.`
      : `The current-year consensus looks for ${formatPercent(
          estimate.revenueGrowth,
        )} revenue growth, with EPS of ${formatNumber(
          estimate.epsAvg,
          2,
        )} in the reporting currency.`
    : "";

  const growthTension =
    revenueGrowth != null && revenueGrowth < 0
      ? `The top line is shrinking, so the margin has to be defended on a smaller base.`
      : revenueGrowth != null && revenueGrowth > 0.15 && (opMargin ?? 1) < 0.1
        ? variant(data.ticker, 17, [
            "Growth is outrunning the margin; the question is whether scale eventually pays for itself.",
            "The top line is growing faster than profit, so operating leverage is the thing to prove.",
            "Revenue is scaling ahead of the margin, which makes cost discipline the next test.",
            "The growth rate is doing the work; the margin has to catch up for the model to earn its cost of capital.",
          ])
        : GROWTH_QUALITY[bucketKey]
          ? `For ${shortName(name)}, ${lowerFirst(GROWTH_QUALITY[bucketKey])}`
          : `For ${shortName(name)}, the quality of growth depends on how much comes from volume, price and acquisitions rather than from buying revenue.`;

  const growthBlock: StoryBlock = {
    paragraphs: [
      archived
        ? `Revenue compounded at ${formatPercent(
            cagr,
          )} a year across the reported fiscal years. The final year is FY${
            lastAnnual?.fyear ?? "n/a"
          } and there is no current guidance.`
        : isBank
          ? `Reported revenue growth is not a clean like-for-like measure for a bank because the revenue line moves with rates and balance-sheet mix. ${
              latestQ == null
                ? ""
                : `The latest quarter ${quarterLabel ? `(${quarterLabel}) ` : ""}${quarterChange(latestQ)} year over year. `
            }${estimateLine}`
          : revenueMissing
            ? `Reported revenue is not available in the current extract. ${estimateLine}`
            : `Revenue compounded at ${formatPercent(cagr)} a year from FY${
                firstAnnual?.fyear ?? "n/a"
              } to FY${lastAnnual?.fyear ?? "n/a"}. ${
                latestQ == null
                  ? ""
                  : `The latest quarter ${quarterLabel ? `(${quarterLabel}) ` : ""}${quarterChange(latestQ)} year over year. `
              }${estimateLine}`,
      archived
        ? `The archive is a record of what the business earned before the deal, not a forecast. The final operating margin was ${formatPercent(
            opMargin,
          )}.`
        : `${catalystClause ? `The next leg depends on ${lowerFirst(catalystClause)}.` : ""} ${growthTension}`,
    ].map((paragraph, index) =>
      floor(
        paragraph,
        data.ticker,
        40 + index,
        index === 0 ? FLOOR.growth1 : FLOOR.growth2,
      ),
    ),
    bullets: bucket.drivers.slice(0, 3).map((driver, index) => {
      const evidence =
        index === 0
          ? revenueMissing
            ? "Reported revenue is not available in the extract."
            : `Revenue growth is ${formatPercent(revenueGrowth)}.`
          : index === 1
            ? isBank
              ? `Net interest margin and credit costs are the key variables; revenue growth is ${formatPercent(
                  revenueGrowth,
                )}.`
              : isInsurer
                ? `The combined ratio and investment income are the key variables; revenue growth is ${formatPercent(
                    revenueGrowth,
                  )}.`
                : opMarginSane
                  ? `The operating margin is ${formatPercent(opMargin)}.`
                  : fcfMarginSane
                    ? `The free-cash-flow margin is ${formatPercent(fcfMargin)}.`
                    : `Revenue growth is ${formatPercent(revenueGrowth)}.`
            : isBank
              ? `Return on equity is ${roeText}.`
              : roic != null
                ? `Return on invested capital is ${formatPercent(roic)}.`
                : `The balance sheet carries ${netDebtText}.`;
      return {
        title: driver.title,
        detail: `${driver.detail} ${evidence}`,
      };
    }),
  };

  const marginHistoryValid =
    firstAnnual?.operatingMargin != null &&
    lastAnnual?.operatingMargin != null &&
    Math.abs(firstAnnual.operatingMargin) <= 1.5 &&
    Math.abs(lastAnnual.operatingMargin) <= 1.5;

  const roeRoicLine =
    roe == null || roic == null
      ? "Both return measures are not available on a comparable basis, so margin and cash conversion carry the quality assessment."
      : negativeEquity
        ? `Return on equity is negative because the equity base is negative; the ${formatPercent(
            roic,
          )} return on invested capital is the operating measure that matters.`
        : roe < 0 && roic < 0
          ? variant(data.ticker, 16, [
              "Both returns are negative. The question is whether the losses are a scale problem or a structural one.",
              "Negative returns on both equity and invested capital point to the operating model, not leverage.",
              "The business is consuming capital rather than earning on it; scale has to change that.",
              "With both returns below zero, the thesis depends on reaching profitability, not on financial engineering.",
            ])
          : roe - roic > 0.2
            ? `Return on equity of ${formatPercent(
                roe,
              )} is well above the ${formatPercent(
                roic,
              )} return on invested capital; leverage or acquisition goodwill explains most of the gap.`
            : roe - roic > 0.08
              ? `The ${((roe - roic) * 100).toFixed(
                  1,
                )}-point spread between return on equity and return on invested capital suggests some of the equity return comes from the balance sheet.`
              : `Return on equity of ${formatPercent(
                  roe,
                )} and return on invested capital of ${formatPercent(
                  roic,
                )} are close enough that operating performance explains most of the return.`;

  const performanceBlock: StoryBlock = {
    paragraphs: [
      archived
        ? `The final operating margin was ${formatPercent(
            opMargin,
          )}, the net margin was ${formatPercent(
            netMargin,
          )}, and diluted EPS was ${price(eps)}. The record will not update.`
        : isBank
          ? `For a bank, the operating margin is a spread measure and the reported history is not comparable across rate cycles. Return on equity was ${roeText}, and diluted EPS was ${
              eps != null ? price(eps) : "not meaningful on the current data"
            }.`
          : isInsurer
            ? `For an insurer, the combined ratio and investment income drive earnings rather than a product margin. Return on equity was ${roeText}, and diluted EPS was ${
                eps != null ? price(eps) : "not meaningful on the current data"
              }.`
            : `${
                marginHistoryValid
                  ? `The operating margin moved from ${formatPercent(
                      firstAnnual?.operatingMargin,
                    )} in FY${firstAnnual?.fyear} to ${formatPercent(
                      lastAnnual?.operatingMargin,
                    )} in FY${lastAnnual?.fyear}.`
                  : `The reported margin history includes figures that are not comparable across years, so the trailing margin is the cleaner reference.`
              } The trailing operating margin is ${
                opMarginSane
                  ? formatPercent(opMargin)
                  : "not meaningful on the current data"
              }, the net margin is ${
                netMarginSane
                  ? formatPercent(netMargin)
                  : "not meaningful on the current data"
              }, and diluted EPS is ${
                eps != null ? price(eps) : "not meaningful on the current data"
              }${
                epsGrowth == null || Math.abs(epsGrowth) > 2
                  ? ""
                  : `, ${epsGrowth >= 0 ? "up" : "down"} ${formatPercent(
                      Math.abs(epsGrowth),
                    )} year over year`
              }.`,
      archived
        ? `The archived returns are a historical description of the business at the time of the transaction. They are not a current measure of capital allocation.`
        : isBank
          ? `Return on equity was ${roeText}. For a bank, return on invested capital is distorted by deposit funding; net interest margin, credit costs and capital ratios are the more useful comparisons.`
          : isInsurer
            ? `Return on equity was ${roeText}. For an insurer, the combined ratio and investment income explain that return better than return on invested capital.`
            : isAssetManager
              ? `Return on equity was ${roeText}. For an asset manager, fee-related earnings and carried interest explain that return better than return on invested capital.`
              : `${roeRoicLine} ${
                  isManagedCare
                    ? "For a managed-care insurer, the medical loss ratio and reserve development are the better tests of return quality."
                    : isLabs
                      ? "For a lab operator, volume growth and reimbursement per test explain more than a capital-return measure."
                      : ""
                }`,
    ].map((paragraph) => floor(paragraph, data.ticker, 50, FLOOR.performance2)),
  };

  const cashConversion =
    lastAnnual?.cfo != null &&
    lastAnnual?.netIncome != null &&
    lastAnnual.netIncome > 0
      ? lastAnnual.cfo / lastAnnual.netIncome
      : null;

  const cashBlock: StoryBlock = {
    paragraphs: [
      archived
        ? `The final reported free cash flow was ${money(
            fcf,
          )}, ${percentArticle(
            fcfMargin,
          )} margin. The balance sheet is the last reported one and will not update.`
        : fcf == null
          ? isBank
            ? "Free cash flow is not meaningful for a bank; operating cash flow and balance-sheet movements are the better indicators."
            : "Free cash flow is not meaningful at this stage."
          : !fcfComparable
            ? `Reported free cash flow was ${money(
                fcf,
              )}, but it is not comparable to the reported revenue line in the current data.`
            : `Free cash flow was ${money(fcf)}${
                fcfMarginSane
                  ? `, or ${formatPercent(fcfMargin)} of revenue`
                  : ""
              }. ${
                cashConversion == null
                  ? ""
                  : `Operating cash flow covered ${formatPercent(
                      cashConversion,
                    )} of net income;${
                      cashConversion > 1.2
                        ? " the gap reflects non-cash charges or working-capital releases."
                        : cashConversion < 0.8
                          ? " working capital is absorbing part of the reported profit."
                          : " reported profit is converting into cash cleanly."
                    } `
              }${
                capexValue == null
                  ? ""
                  : `Capex absorbed ${formatPercent(
                      capexValue,
                    )} of revenue, which is ${capexValue > 0.08 ? "a meaningful claim on cash" : "low relative to the revenue base"}.`
              }`,
      archived
        ? `The final consideration was ${archived.consideration}; there is no current price, target or capital-return policy to assess.`
        : `${balanceLine} ${
            interestCover == null ||
            isBank ||
            isInsurer ||
            isAssetManager ||
            isManagedCare
              ? ""
              : `Interest cover is ${formatMultiple(interestCover)}. `
          }${
            isBank
              ? "Cash flow is shaped by balance-sheet movements, so the free-cash-flow margin is less comparable than it is for an industrial."
              : isInsurer
                ? "For an insurer, cash flow includes investment income and reserve movements, so the margin is not directly comparable to an industrial."
                : isAssetManager
                  ? "Consolidated cash flow includes fund-level balances, so the margin is not directly comparable to an operating company."
                  : netDebt != null &&
                      netDebt > 0 &&
                      leverage != null &&
                      leverage > 4
                    ? "Leverage is the constraint: the equity is sensitive to refinancing costs and a slower cash flow."
                    : netDebt != null &&
                        netDebt > 0 &&
                        leverage != null &&
                        leverage > 2.5
                      ? "The balance sheet is manageable but not a source of upside; debt reduction competes with reinvestment for the cash flow."
                      : netDebt != null && netDebt < 0
                        ? variant(data.ticker, 15, [
                            "That gives management room to invest or return capital without leaning on the balance sheet.",
                            "The net cash position is optionality: it can fund investment, acquisitions or returns.",
                            "Management can fund the next phase without needing the capital markets.",
                            "The balance sheet is a source of flexibility rather than a constraint.",
                          ])
                        : ""
          }`.trim(),
    ].map((paragraph, index) =>
      floor(
        paragraph,
        data.ticker,
        60 + index,
        index === 0 ? FLOOR.cash1 : FLOOR.cash2,
      ),
    ),
  };

  const earningsYield = pe != null && pe > 0 ? 1 / pe : null;

  const valuationBlock: StoryBlock = {
    paragraphs: [
      archived
        ? `The final consideration was ${archived.consideration}. The archived multiple is not a live valuation, and no current consensus target exists because the company no longer trades.`
        : `At ${price(priceNow)}, the shares trade at ${multipleClause}${
            fcfYield == null
              ? ""
              : `, with ${percentArticle(fcfYield)} free-cash-flow yield`
          }. ${
            earningsYield == null
              ? ""
              : `The earnings yield is ${formatPercent(earningsYield)}. `
          }${peerValuation}`,
      archived
        ? `The final consideration is the only relevant reference. There is no live multiple to compare with the peer group.`
        : `${
            note?.valuation ??
            (pe == null
              ? "No earnings multiple is meaningful, so the market is valuing the asset base or the pipeline rather than current profit."
              : pe > 30
                ? "At this multiple, the market is paying for growth to stay well above the peer group."
                : pe < 12
                  ? "The multiple implies the market expects little growth and assumes the current margin is close to peak."
                  : peerPe == null
                    ? "The multiple is mid-range for the peer group; the debate is about durability rather than a re-rating."
                    : "")
          } ${
            pe != null && peerPe != null
              ? pe > peerPe * 1.1
                ? "The multiple is above the peer median, leaving less room for disappointment."
                : pe < peerPe * 0.9
                  ? "The multiple is below the peer median, so some of the risk is already in the price."
                  : "The multiple is in line with the peer median, so the debate is company-specific."
              : ""
          } ${
            isBank
              ? "For a bank, price-to-book and P/E are more relevant than EV/EBITDA."
              : isInsurer
                ? "For an insurer, price-to-book and return on equity are more relevant than EV/EBITDA."
                : isAssetManager
                  ? "For an asset manager, fee-related earnings and distributable earnings are more relevant than EV/EBITDA."
                  : ""
          }`.trim(),
    ].map((paragraph, index) =>
      floor(
        paragraph,
        data.ticker,
        70 + index,
        index === 0 ? FLOOR.valuation1 : FLOOR.valuation2,
      ),
    ),
  };

  const upside = target != null && priceNow ? target / priceNow - 1 : null;
  const targetSpread =
    target != null &&
    consensus?.targetHigh != null &&
    consensus?.targetLow != null
      ? (consensus.targetHigh - consensus.targetLow) / Math.abs(target)
      : null;
  const rangeComment =
    targetSpread == null
      ? ""
      : targetSpread > 0.5
        ? variant(data.ticker, 13, [
            "The range is unusually wide, which signals genuine disagreement about the cycle.",
            "The wide range shows how divided the published views are.",
            "Analysts disagree on the outcome; the mean is a weak summary of a wide range.",
            "The spread between the high and low target is unusually wide.",
            "The target range is wide enough that the mean should be read with caution.",
          ])
        : targetSpread < 0.2
          ? variant(data.ticker, 14, [
              "The range is tight, so the debate is about timing rather than direction.",
              "The clustered targets suggest the market is close to the analysts' central case.",
              "The narrow range means the published views differ mainly on timing.",
              "The targets are tightly grouped, which reduces the information in the mean.",
            ])
          : "";
  const targetLine =
    target != null
      ? `${analystCount ?? "The"} analysts in the third-party consensus carry a mean target of ${price(
          target,
        )}, ${formatPercent(
          Math.abs(upside ?? 0),
        )} ${upside != null && upside >= 0 ? "above" : "below"} the latest close. The range runs from ${price(
          consensus?.targetLow,
        )} to ${price(consensus?.targetHigh)}. ${rangeComment} That is the published view, not a Stockmonk target.`
      : "No third-party consensus target is available.";

  const analystsBlock: StoryBlock = {
    paragraphs: [
      archived
        ? `There is no current analyst consensus because ${name} no longer trades. The final transaction value is the reference, and the archived estimates are shown only where they were retained.`
        : targetLine,
      archived
        ? `There is no current-year estimate to compare with the final reported year. The last reported revenue was ${money(
            revenue,
          )} and the last operating margin was ${formatPercent(opMargin)}.`
        : `${
            estimateLine ||
            "No current-year consensus estimate is available; the reported financials are the only evidence."
          } ${
            consensus?.revisions?.eps30d == null
              ? ""
              : `EPS estimates are ${revisionText(
                  consensus.revisions.eps30d,
                )} over 30 days and ${revisionText(
                  consensus.revisions.eps90d,
                )} over 90 days. `
          }${
            estimateGrowth != null
              ? `That implies ${
                  estimateGrowth >= 0
                    ? `${formatPercent(estimateGrowth)} growth`
                    : `${percentArticle(Math.abs(estimateGrowth))} decline`
                } from the trailing base.`
              : ""
          }`,
    ].map((paragraph, index) =>
      floor(
        paragraph,
        data.ticker,
        80 + index,
        index === 0 ? FLOOR.analysts1 : FLOOR.analysts2,
      ),
    ),
  };

  const derivedRisk: RiskItem | null = riskSentence
    ? {
        title: riskTitle,
        severity: "High",
        detail: riskSentence,
        watch:
          bucket.risks[0]?.watch ??
          "The evidence that would confirm or break the thesis.",
      }
    : !isBalanceSheetBusiness &&
        leverage != null &&
        leverage > 4 &&
        netDebt != null &&
        netDebt > 0
      ? {
          title: "Leverage",
          severity: "High",
          detail: `Net debt is ${money(netDebt)}, or ${formatMultiple(
            leverage,
          )} EBITDA, which leaves the equity sensitive to refinancing costs and a slower cash flow.`,
          watch: "Leverage, interest cover and the maturity profile.",
        }
      : revenueGrowth != null && revenueGrowth < -0.05
        ? {
            title: "Revenue decline",
            severity: "High",
            detail: `Trailing revenue fell ${formatPercent(
              Math.abs(revenueGrowth),
            )}, so the margin has to be defended on a shrinking base.`,
            watch: "Organic growth, retention and pricing.",
          }
        : opMargin != null && opMargin < 0
          ? {
              title: "Operating losses",
              severity: "High",
              detail: `The trailing operating margin is ${formatPercent(
                opMargin,
              )}, which means the current cost base is not covered by revenue.`,
              watch: "Path to operating breakeven and cash runway.",
            }
          : pe != null && pe > 45 && (fcfYield == null || fcfYield < 0.02)
            ? {
                title: "Valuation",
                severity: "High",
                detail: `At ${formatMultiple(
                  pe,
                )} trailing earnings and ${percentArticle(
                  fcfYield,
                )} free-cash-flow yield, the price already assumes a long period of strong growth.`,
                watch: "Forward growth versus the current multiple.",
              }
            : null;

  const riskItems: RiskItem[] = bucket.risks.slice(0, 5).map((risk, index) => ({
    title: risk.title,
    severity: index < 2 ? "High" : "Medium",
    detail: risk.detail,
    watch: risk.watch,
  }));
  if (derivedRisk) riskItems[0] = derivedRisk;
  if (archived) {
    riskItems[0] = {
      title: "Archived coverage",
      severity: "High",
      detail: `${name} no longer trades. The final consideration was ${archived.consideration}, and the statements will not be updated with new quarters.`,
      watch:
        "Treat every figure as the final reported record, not as a current market snapshot.",
    };
    riskItems[1] = {
      title: "Transaction completion",
      severity: "High",
      detail: `The ${archived.acquirer} transaction closed on ${formatDate(
        archived.lastTraded,
      )}. The equity no longer has an independent market price.`,
      watch:
        "The archived page is for research continuity; it is not a live quote.",
    };
  }

  const risks = {
    intro: archived
      ? `The risks below are the historical risks that mattered before the ${archived.acquirer} transaction, plus the limitation that the record is closed.`
      : derivedRisk
        ? catalystClause
          ? `The central tension is ${lowerFirst(
              catalystClause,
            )} versus ${lowerFirst(riskTitle)}.`
          : `The central risk is ${lowerFirst(riskTitle)}.`
        : `The thesis would break if the current growth and margin prove cyclical rather than structural. The risks below are ranked by how quickly they would change that view.`,
    items: riskItems,
    watchlist: archived
      ? [
          {
            title: "Final reported figures",
            detail:
              "The statements are the last available SEC filings and will not refresh.",
          },
          {
            title: "Transaction terms",
            detail: `Final consideration: ${archived.consideration}.`,
          },
          {
            title: "Successor exposure",
            detail: `The business now sits inside ${archived.acquirer}; its results may be disclosed only at the parent level.`,
          },
        ]
      : bucket.watch,
  };

  const avgFactor = Math.round(
    (factors.growth +
      factors.profitability +
      factors.cash +
      factors.balance +
      factors.valuation) /
      5,
  );
  const factorEntries = [
    { label: "growth", value: factors.growth },
    { label: "profitability", value: factors.profitability },
    { label: "cash generation", value: factors.cash },
    { label: "balance sheet", value: factors.balance },
    { label: "valuation", value: factors.valuation },
  ].sort((a, b) => b.value - a.value);
  const strongestFactor = factorEntries[0];
  const weakestFactor = factorEntries[factorEntries.length - 1];

  const titlePatterns = [
    opMarginSane
      ? `${shortName(name)}: ${formatPercent(opMargin)} margins and the price being paid`
      : `${shortName(name)}: the operating economics and the price being paid`,
    revenueGrowth != null
      ? `${shortName(name)}: growth of ${formatPercent(revenueGrowth)}${
          pe == null ? "" : ` and ${multipleArticle(pe)} earnings multiple`
        }`
      : `${shortName(name)}: the balance sheet behind ${money(revenue)} of revenue`,
    `${shortName(name)}: the balance sheet behind ${money(revenue)} of revenue`,
    `${shortName(name)}: cash generation and the multiple`,
    `${shortName(name)}: margins, cash conversion and the multiple`,
  ];
  const title = archived
    ? `${name}: the final record behind the ${archived.acquirer} deal`
    : note?.angle
      ? (titleFromAngle(name, note.angle) ??
        pickTitle(titlePatterns, data.ticker))
      : pickTitle(titlePatterns, data.ticker);

  const marginDurability =
    isBank || isInsurer
      ? roe != null
        ? `the durability of ${formatPercent(roe)} returns on equity`
        : "the durability of the current returns"
      : opMarginSane
        ? `the durability of ${formatPercent(opMargin)} margins`
        : "the durability of the current economics";
  const changeMetric =
    weakestFactor.label === "balance sheet" && leverage != null
      ? `leverage falling below ${formatMultiple(Math.max(leverage - 0.5, 1))} EBITDA`
      : weakestFactor.label === "valuation" && pe != null
        ? `the multiple falling below ${formatMultiple(pe * 0.8)} earnings`
        : weakestFactor.label === "growth" && revenueGrowth != null
          ? `organic growth returning above ${formatPercent(
              Math.max(revenueGrowth + 0.03, 0.03),
            )}`
          : weakestFactor.label === "cash generation" && fcfMargin != null
            ? `the free-cash-flow margin rising above ${formatPercent(
                fcfMargin + 0.03,
              )}`
            : roic != null
              ? `return on invested capital rising above ${formatPercent(
                  roic + 0.02,
                )}`
              : "cash conversion improving";

  const bottomLine = {
    paragraphs: [
      archived
        ? `${name} is an archived ${data.industry || data.sector} company with ${money(
            revenue,
          )} of final revenue, ${percentArticle(
            opMargin,
          )} operating margin and ${percentArticle(
            fcfMargin,
          )} free-cash-flow margin. The ${archived.acquirer} transaction valued the equity at ${archived.consideration}.`
        : `The investment case rests on ${strongestFactor.label} and ${marginDurability}. ${
            weakestFactor.label === "balance sheet"
              ? `${upperFirst(netDebtText)} is the weak link.`
              : `The weak link is ${weakestFactor.label}.`
          }`,
      archived
        ? `There is no current price, target or rating to update. The archived factor scores are a historical description of the business at the point of the transaction.`
        : `What would change the view is ${changeMetric}, not a single quarter. ${
            riskTitle ? `The key exposure is ${lowerFirst(riskTitle)}.` : ""
          }`.trim(),
      variant(data.ticker, 18, [
        `On the scorecard, the composite is ${avgFactor}/100. The spread between ${strongestFactor.label} and ${weakestFactor.label} is the useful part; the average hides it.`,
        `The scorecard averages ${avgFactor}/100, but the dispersion matters more: ${strongestFactor.label} is ${strongestFactor.value}/100 and ${weakestFactor.label} is ${weakestFactor.value}/100.`,
        `The composite of ${avgFactor}/100 blends a strong ${strongestFactor.label} reading with a weak ${weakestFactor.label} one; the gap is the story.`,
        `The scorecard puts the composite at ${avgFactor}/100. Focus on the ${strongestFactor.label}-to-${weakestFactor.label} spread rather than the average.`,
      ]),
    ],
    questions: archived
      ? [
          "What did the final financial record show?",
          "What did the acquirer pay for?",
          "Which figures will never update?",
        ]
      : bucket.questions.slice(0, 4),
  };

  return {
    ticker: data.ticker,
    kicker: `${group?.name ?? data.sector} · ${data.industry || group?.shortName || "US equity"}`,
    title,
    dek: archived
      ? `${name} last traded on ${formatDate(
          archived.lastTraded,
        )} after the ${archived.acquirer} transaction. The report keeps the final SEC record, the deal terms and the factors that explained the business while it was public.`
      : `${revenueSentence}${
          opMarginSane
            ? `, at ${percentArticle(opMargin)} operating margin`
            : ""
        }. ${
          riskTitle
            ? `The key risk is ${lowerFirst(riskTitle)}.`
            : centralDebate
        }`,
    readingMinutes: 10,
    takeaways: [
      archived
        ? `Status: last traded ${formatDate(
            archived.lastTraded,
          )}; ${archived.acquirer} completed the transaction at ${archived.consideration}.`
        : revenueGrowth == null
          ? `Revenue: ${money(revenue)}.`
          : `Revenue: ${money(revenue)}, ${growth(
              revenueGrowth,
            )} year over year.`,
      !opMarginSane
        ? `Profitability: operating margin not meaningful; ${
            netMarginSane
              ? `net margin ${formatPercent(netMargin)}`
              : "net margin not meaningful"
          }${grossMargin != null ? `; gross margin ${formatPercent(grossMargin)}` : ""}.`
        : `Profitability: ${formatPercent(opMargin)} operating margin and ${
            netMarginSane
              ? `${formatPercent(netMargin)} net margin`
              : "a net margin that is not meaningful on the current data"
          }.`,
      fcf == null
        ? "Cash: free cash flow is not meaningful at this stage."
        : !fcfComparable
          ? `Cash: reported free cash flow of ${money(
              fcf,
            )} is not comparable to the reported revenue line.`
          : fcfMarginSane
            ? `Cash: ${money(fcf)} free cash flow, ${percentArticle(
                fcfMargin,
              )} margin, against ${netDebtText}.`
            : `Cash: ${money(fcf)} free cash flow, against ${netDebtText}.`,
      archived
        ? `Valuation: final consideration ${archived.consideration}; no live multiple or consensus target.`
        : `Valuation: ${multipleClause}.`,
    ],
    narrativeSource: "auto-curated",
    narrativeUpdatedAt: new Date().toISOString().slice(0, 10),
    filingUrl: sourceUrl(bundle),
    irUrl: data.website ?? filingHistoryUrl(bundle),
    bigPicture,
    whatItDoes,
    howItMakesMoney,
    growth: growthBlock,
    performance: performanceBlock,
    cash: cashBlock,
    valuation: valuationBlock,
    analysts: analystsBlock,
    risks,
    bottomLine,
  };
}

function pickTitle(patterns: string[], ticker: string): string {
  return patterns[hash(ticker) % patterns.length];
}

function titleFromAngle(name: string, angle: string): string | null {
  const phrase = angle
    .replace(
      /^.*?\b(?:is|are|uses|use|owns|runs|sells|makes|make|provides|operates|earns|depends|designs|builds|produces|distributes|manufactures|licenses|supplies|develops|offers|serves|focuses|generates|derives)\b\s+/i,
      "",
    )
    .split(/[,;]/)[0]
    .trim()
    .replace(/\.$/, "")
    .replace(/^(and|or|but|while|with|so)\s+/i, "")
    .replace(/^(its|their|the company's|the group's)\s+/i, "")
    .replace(
      /^(operates|runs|owns|sells|makes|provides|earns|uses|designs|builds|produces|distributes|manufactures|licenses|supplies|develops|offers|serves|focuses)\s+/i,
      "",
    )
    .trim();
  if (phrase.split(/\s+/).length < 3) return null;
  if (phrase.length > 90) return null;
  return `${shortName(name)}: ${phrase.charAt(0).toUpperCase()}${phrase.slice(1)}`;
}
