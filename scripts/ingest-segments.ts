/**
 * Segment and geography extraction from the latest 10-K XBRL instance.
 *
 * The companyfacts API only exposes consolidated facts, so this script reads
 * the dimensional contexts in the filing's XBRL instance. Segment values are
 * chosen so they reconcile to consolidated revenue; a small residual is shown
 * as "Corporate / other" when the filing does not tag it explicitly.
 *
 * Run: pnpm ingest:segments
 */
import fs from "node:fs/promises";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";
import { RESEARCH_TICKERS } from "../config/universe";
import { getFilingIndex, getSubmissions } from "../lib/edgar";
import { segmentMixSchema, type MixSlice, type SegmentMix } from "../lib/schemas";

const PROCESSED = path.join(process.cwd(), "data", "processed");
const OUT = path.join(process.cwd(), "data", "segments");
const CACHE = path.join(process.cwd(), "data", "raw", "sec");

const REVENUE_TAGS = [
  "RevenueFromContractWithCustomerExcludingAssessedTax",
  "Revenues",
  "RevenuesNetOfInterestExpense",
  "RevenueFromContractWithCustomerIncludingAssessedTax",
  "SalesRevenueNet",
];
const TAG_PRIORITY = new Map(REVENUE_TAGS.map((tag, index) => [tag, index]));

const SEGMENT_AXIS = "us-gaap:StatementBusinessSegmentsAxis";
const GEO_AXIS = "srt:StatementGeographicalAxis";

type Dim = { dimension: string; member: string };
type FactRow = { tag: string; contextId: string; value: number; dims: Dim[] };
type Candidate = { member: string; value: number };

const MEMBER_LABELS: Record<string, string> = {
  "nvda:ComputeAndNetworkingSegmentMember": "Compute & Networking",
  "nvda:GraphicsSegmentMember": "Graphics",
  "msft:ProductivityAndBusinessProcessesMember": "Productivity & Business Processes",
  "msft:IntelligentCloudMember": "Intelligent Cloud",
  "msft:MorePersonalComputingMember": "More Personal Computing",
  "goog:GoogleServicesMember": "Google Services",
  "goog:GoogleCloudMember": "Google Cloud",
  "us-gaap:AllOtherSegmentsMember": "Other Bets",
  "amzn:NorthAmericaSegmentMember": "North America",
  "amzn:InternationalSegmentMember": "International",
  "amzn:AmazonWebServicesSegmentMember": "AWS",
  "meta:FamilyOfAppsMember": "Family of Apps",
  "meta:RealityLabsMember": "Reality Labs",
  "avgo:SemiconductorSolutionsMember": "Semiconductor Solutions",
  "avgo:InfrastructureSoftwareMember": "Infrastructure Software",
  "tsla:AutomotiveSegmentMember": "Automotive",
  "tsla:EnergyGenerationAndStorageSegmentMember": "Energy Generation & Storage",
  "jpm:ConsumerCommunityBankingMember": "Consumer & Community Banking",
  "jpm:CommercialAndInvestmentBankMember": "Commercial & Investment Bank",
  "jpm:AssetandWealthManagementSegmentMember": "Asset & Wealth Management",
  "country:US": "United States",
  "country:CN": "China",
  "country:TW": "Taiwan",
  "country:DE": "Germany",
  "country:GB": "United Kingdom",
  "country:JP": "Japan",
  "country:SG": "Singapore",
  "us-gaap:NonUsMember": "Non-US",
  "us-gaap:EMEAMember": "EMEA",
  "srt:AsiaPacificMember": "Asia Pacific",
  "srt:EuropeMember": "Europe",
  "srt:NorthAmericaMember": "North America",
  "srt:LatinAmericaMember": "Latin America",
  "nvda:ChinaIncludingHongKongMember": "China incl. Hong Kong",
  "nvda:OtherCountriesMember": "Other countries",
  "aapl:AmericasSegmentMember": "Americas",
  "aapl:EuropeSegmentMember": "Europe",
  "aapl:GreaterChinaSegmentMember": "Greater China",
  "aapl:JapanSegmentMember": "Japan",
  "aapl:RestOfAsiaPacificSegmentMember": "Rest of Asia Pacific",
  "aapl:OtherCountriesMember": "Other countries",
  "goog:AmericasExcludingUnitedStatesMember": "Americas ex-US",
  "meta:USCanadaMember": "US & Canada",
  "meta:RestOfWorldMember": "Rest of World",
  "avgo:ChinaincludingHongKongMember": "China incl. Hong Kong",
  "avgo:AllOtherGeographiesMemberMember": "Other geographies",
  "tsla:OtherCountriesMember": "Other countries",
  "lly:RestOfWorldMember": "Rest of World",
  "jpm:TotalInternationalMember": "International",
};

type Override = {
  label: string;
  members: Array<{ member: string; name: string }>;
};

/**
 * Apple reports regions as its "segments"; the product mix is more useful.
 * Lilly reports one segment, so use its therapeutic areas.
 */
const SEGMENT_OVERRIDES: Record<string, Override> = {
  AAPL: {
    label: "Product category",
    members: [
      { member: "aapl:IPhoneMember", name: "iPhone" },
      { member: "us-gaap:ServiceMember", name: "Services" },
      { member: "aapl:WearablesHomeandAccessoriesMember", name: "Wearables, Home & Accessories" },
      { member: "aapl:MacMember", name: "Mac" },
      { member: "aapl:IPadMember", name: "iPad" },
    ],
  },
  LLY: {
    label: "Therapeutic area",
    members: [
      { member: "lly:CardiometabolicHealthMember", name: "Cardiometabolic Health" },
      { member: "lly:OncologyMember", name: "Oncology" },
      { member: "lly:ImmunologyMember", name: "Immunology" },
      { member: "lly:NeuroscienceMember", name: "Neuroscience" },
      { member: "lly:OtherProductTotalMember", name: "Other" },
    ],
  },
};

function humanize(member: string): string {
  const known = MEMBER_LABELS[member];
  if (known) return known;
  let text = member.split(":").pop() ?? member;
  text = text.replace(/Member$/, "").replace(/Segment$/, "");
  text = text.replace(/IPhone/g, "iPhone").replace(/IPad/g, "iPad").replace(/ThreeSixFive/g, "365");
  text = text.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
  text = text.replace(/\band\b/gi, "&");
  return text;
}

function asArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

function contextDims(context: Record<string, unknown>): Dim[] {
  const segment = (context.entity as { segment?: { explicitMember?: unknown } } | undefined)?.segment;
  return asArray(segment?.explicitMember).map((entry) => {
    const member = entry as Record<string, unknown>;
    return {
      dimension: String(member["@_dimension"] ?? ""),
      member: String(member["#text"] ?? ""),
    };
  });
}

async function loadInstance(ticker: string): Promise<{ xml: string; sec: Record<string, unknown> }> {
  const sec = JSON.parse(await fs.readFile(path.join(PROCESSED, ticker, "sec.json"), "utf8")) as Record<string, unknown>;
  const filings = sec.filings as
    | { latest10K?: { accession: string; url: string; filed: string } }
    | undefined;
  const latest10K = filings?.latest10K;
  if (!latest10K?.accession) {
    throw new Error("no 10-K filing in sec.json");
  }
  const accession = latest10K.accession;
  const file = path.join(CACHE, `instance-${ticker}-${accession.replace(/-/g, "")}.xml`);
  try {
    return { xml: await fs.readFile(file, "utf8"), sec };
  } catch {
    // cache miss
  }
  const submissions = await getSubmissions(String(sec.cik));
  const cik = String(Number(submissions.cik));
  const index = await getFilingIndex(cik, accession);
  const name = index.directory.item.find((item) => /_htm\.xml$/i.test(item.name))?.name;
  if (!name) throw new Error(`no XBRL instance for ${ticker}`);
  const url = `https://www.sec.gov/Archives/edgar/data/${cik}/${accession.replace(/-/g, "")}/${name}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Stockmonk research contact@stockmonk.app", Accept: "application/xml" },
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok) throw new Error(`SEC ${res.status} ${url}`);
  const xml = await res.text();
  await fs.writeFile(file, xml, "utf8");
  return { xml, sec };
}

function revenueFacts(root: Record<string, unknown>, annualEnd: string): FactRow[] {
  const contexts = asArray(root.context as Record<string, unknown> | Record<string, unknown>[] | undefined);
  const byId = new Map(contexts.map((context) => [String(context["@_id"]), context]));
  const rows: FactRow[] = [];

  for (const tag of REVENUE_TAGS) {
    const raw = root[tag];
    for (const entry of asArray(raw)) {
      if (!entry || typeof entry !== "object") continue;
      const fact = entry as Record<string, unknown>;
      const context = byId.get(String(fact["@_contextRef"]));
      if (!context) continue;
      const period = context.period as { startDate?: string; endDate?: string } | undefined;
      if (period?.endDate !== annualEnd || !period?.startDate) continue;
      const value = Number(fact["#text"]);
      if (!Number.isFinite(value)) continue;
      rows.push({
        tag,
        contextId: String(fact["@_contextRef"]),
        value,
        dims: contextDims(context),
      });
    }
  }

  // Prefer the first revenue tag for a given context so the same fact is not
  // counted twice under two overlapping tags.
  const byContext = new Map<string, FactRow>();
  for (const row of rows) {
    const previous = byContext.get(row.contextId);
    if (!previous || (TAG_PRIORITY.get(row.tag) ?? 99) < (TAG_PRIORITY.get(previous.tag) ?? 99)) {
      byContext.set(row.contextId, row);
    }
  }
  return [...byContext.values()];
}

function candidates(facts: FactRow[], dimension: string, mode: "max" | "sum"): Candidate[] {
  const byMember = new Map<string, { value: number; contexts: Set<string> }>();
  for (const fact of facts) {
    const dim = fact.dims.find((entry) => entry.dimension === dimension);
    if (!dim) continue;
    const entry = byMember.get(dim.member) ?? { value: 0, contexts: new Set<string>() };
    if (entry.contexts.has(fact.contextId)) continue;
    entry.contexts.add(fact.contextId);
    entry.value = mode === "max" ? Math.max(entry.value, fact.value) : entry.value + fact.value;
    byMember.set(dim.member, entry);
  }
  return [...byMember.entries()]
    .map(([member, entry]) => ({ member, value: entry.value }))
    .filter((entry) => entry.value > 0);
}

/** Pick the member subset that best reconciles to consolidated revenue. */
function bestSubset(items: Candidate[], target: number): Candidate[] {
  const candidates = items.slice(0, 18);
  if (candidates.length <= 1) return candidates;
  let best: Candidate[] = [];
  let bestDiff = Number.POSITIVE_INFINITY;
  let bestCount = Number.POSITIVE_INFINITY;

  for (let mask = 1; mask < 1 << candidates.length; mask++) {
    let sum = 0;
    let count = 0;
    const subset: Candidate[] = [];
    for (let i = 0; i < candidates.length; i++) {
      if ((mask & (1 << i)) === 0) continue;
      sum += candidates[i].value;
      count += 1;
      subset.push(candidates[i]);
    }
    if (count < 2) continue;
    const diff = Math.abs(sum - target) / target;
    if (diff < bestDiff - 1e-9 || (Math.abs(diff - bestDiff) <= 1e-9 && count < bestCount)) {
      best = subset;
      bestDiff = diff;
      bestCount = count;
    }
  }

  return best.length ? best : candidates;
}

function toSlices(items: Candidate[], target: number, labeler: (member: string) => string): MixSlice[] {
  return items
    .map((item) => ({
      name: labeler(item.member),
      revenue: Math.round(item.value),
      share: target > 0 ? item.value / target : 0,
    }))
    .sort((a, b) => b.revenue - a.revenue);
}

function addResidual(slices: MixSlice[], target: number, label: string): MixSlice[] {
  const sum = slices.reduce((total, slice) => total + slice.revenue, 0);
  const residual = target - sum;
  if (residual > target * 0.001 && residual > 0) {
    return [
      ...slices,
      { name: label, revenue: Math.round(residual), share: residual / target },
    ].sort((a, b) => b.revenue - a.revenue);
  }
  return slices;
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });

  for (const ticker of RESEARCH_TICKERS) {
    let loaded: { xml: string; sec: Record<string, unknown> };
    try {
      loaded = await loadInstance(ticker);
    } catch (error) {
      console.warn(
        `[segments] ${ticker}: skipped (${error instanceof Error ? error.message : String(error)})`,
      );
      continue;
    }
    const { xml, sec } = loaded;
    const annual = sec.annual as Array<{ end: string; revenue: number | null }>;
    const latestAnnual = annual[annual.length - 1];
    const target = latestAnnual?.revenue;
    if (!target) {
      console.warn(`[segments] ${ticker}: no consolidated annual revenue`);
      continue;
    }

    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_", removeNSPrefix: true });
    const root = parser.parse(xml).xbrl as Record<string, unknown>;
    const facts = revenueFacts(root, latestAnnual.end);
    const override = SEGMENT_OVERRIDES[ticker];

    let segmentLabel = "Reportable segment";
    let segments: MixSlice[];

    if (override) {
      segmentLabel = override.label;
      const selected = override.members.map((entry) => {
        // Members can appear in more than one context (for example a total and
        // a cross-tab). Sum distinct values so duplicate contexts do not
        // double-count, while genuine US / non-US splits still add up.
        const values = new Set(
          facts
            .filter((fact) => fact.dims.some((dim) => dim.member === entry.member))
            .map((fact) => fact.value),
        );
        const value = [...values].reduce((total, amount) => total + amount, 0);
        return { name: entry.name, revenue: Math.round(value), share: value / target };
      });
      segments = selected.filter((slice) => slice.revenue > 0).sort((a, b) => b.revenue - a.revenue);
    } else {
      const segmentCandidates = candidates(facts, SEGMENT_AXIS, "max");
      segments = toSlices(bestSubset(segmentCandidates, target), target, humanize);
    }

    segments = addResidual(segments, target, "Corporate / other");

    const geoLabel = "Geography";
    const geography = toSlices(bestSubset(candidates(facts, GEO_AXIS, "max"), target), target, humanize);

    const filings = sec.filings as { latest10K: { url: string; filed: string } };
    const entityName = String(sec.entityName ?? ticker);
    const mix: SegmentMix = {
      ticker,
      asOf: latestAnnual.end,
      source: {
        name: `${entityName} Form 10-K`,
        url: filings.latest10K.url,
        date: filings.latest10K.filed,
      },
      segmentLabel,
      segments,
      geographyLabel: geography.length >= 2 ? geoLabel : null,
      geography,
    };

    const parsed = segmentMixSchema.parse(mix);
    await fs.writeFile(path.join(OUT, `${ticker}.json`), JSON.stringify(parsed, null, 2), "utf8");
    console.log(
      `[segments] ${ticker}: ${segments.map((s) => `${s.name} ${(s.revenue / 1e9).toFixed(1)}B`).join(", ")}`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
