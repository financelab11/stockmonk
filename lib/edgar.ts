import fs from "node:fs/promises";
import path from "node:path";
import { setTimeout as sleep } from "node:timers/promises";

const SEC_ROOT = "https://data.sec.gov";
const ARCHIVES = "https://www.sec.gov/Archives/edgar/data";
const CACHE_ROOT = path.join(process.cwd(), "data", "raw", "sec");
const USER_AGENT = "Stockmonk research contact@stockmonk.app";

let lastRequestAt = 0;

async function throttle() {
  const wait = Math.max(0, lastRequestAt + 220 - Date.now());
  if (wait > 0) await sleep(wait);
  lastRequestAt = Date.now();
}

export async function secGetJson<T>(url: string, cacheName: string): Promise<T> {
  const file = path.join(CACHE_ROOT, `${cacheName}.json`);
  try {
    return JSON.parse(await fs.readFile(file, "utf8")) as T;
  } catch {
    // cache miss
  }
  await throttle();
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok) throw new Error(`SEC ${res.status} ${res.statusText} for ${url}`);
  const json = (await res.json()) as T;
  await fs.mkdir(CACHE_ROOT, { recursive: true });
  await fs.writeFile(file, JSON.stringify(json), "utf8");
  return json;
}

export type SecFact = {
  start?: string;
  end: string;
  val: number;
  fy?: number;
  fp?: string;
  form?: string;
  filed?: string;
  frame?: string;
  accn?: string;
};

export type CompanyFacts = {
  cik: number;
  entityName: string;
  facts: Record<string, Record<string, { label?: string; units?: Record<string, SecFact[]> }>>;
};

export type Submissions = {
  cik: string;
  name: string;
  filings: {
    recent: {
      accessionNumber: string[];
      filingDate: string[];
      reportDate: string[];
      form: string[];
      primaryDocument: string[];
      items: string[];
      primaryDocDescription: string[];
    };
  };
};

export type FilingRef = {
  form: string;
  filed: string;
  reportDate: string;
  accession: string;
  url: string;
  items?: string;
};

export async function getCompanyFacts(cik: string | number): Promise<CompanyFacts> {
  const padded = String(cik).padStart(10, "0");
  return secGetJson<CompanyFacts>(`${SEC_ROOT}/api/xbrl/companyfacts/CIK${padded}.json`, `companyfacts-${padded}`);
}

export async function getSubmissions(cik: string | number): Promise<Submissions> {
  const padded = String(cik).padStart(10, "0");
  return secGetJson<Submissions>(`${SEC_ROOT}/submissions/CIK${padded}.json`, `submissions-${padded}`);
}

export async function getTickerCikMap(): Promise<Record<string, number>> {
  const data = await secGetJson<Record<string, { cik_str: number; ticker: string; title: string }>>(
    "https://www.sec.gov/files/company_tickers.json",
    "company_tickers",
  );
  const map: Record<string, number> = {};
  for (const item of Object.values(data)) map[item.ticker.toUpperCase()] = item.cik_str;
  return map;
}

export function filingsFrom(submissions: Submissions): FilingRef[] {
  const r = submissions.filings.recent;
  const out: FilingRef[] = [];
  for (let i = 0; i < r.form.length; i++) {
    const accession = r.accessionNumber[i];
    const cik = String(Number(submissions.cik));
    const accessionNoDashes = accession.replace(/-/g, "");
    out.push({
      form: r.form[i],
      filed: r.filingDate[i],
      reportDate: r.reportDate[i],
      accession,
      url: `${ARCHIVES}/${cik}/${accessionNoDashes}/${r.primaryDocument[i]}`,
      items: r.items?.[i],
    });
  }
  return out;
}

type FlowResult = {
  quarterly: Map<string, { end: string; value: number; fy?: number; period?: string; filed?: string }>;
  annual: Map<string, { end: string; value: number; fy?: number; filed?: string }>;
};

function factDays(fact: SecFact): number | null {
  if (!fact.start) return null;
  return (new Date(fact.end).getTime() - new Date(fact.start).getTime()) / 86_400_000;
}

function latestByKey(facts: SecFact[]): SecFact[] {
  const map = new Map<string, SecFact>();
  for (const fact of facts) {
    const key = `${fact.start ?? "instant"}|${fact.end}`;
    const prev = map.get(key);
    if (!prev || (fact.filed ?? "") > (prev.filed ?? "")) map.set(key, fact);
  }
  return [...map.values()];
}

function preferFact(a: SecFact | undefined, b: SecFact): SecFact {
  if (!a) return b;
  return (b.filed ?? "") > (a.filed ?? "") ? b : a;
}

/**
 * Find the fact in `candidates` whose period starts at the same date as the
 * longer cumulative period. Q2 = six months minus the first three months,
 * Q3 = nine months minus six months, Q4 = fiscal year minus nine months.
 * All pairs share the same fiscal-year start date.
 */
function factStartingNear(candidates: Map<string, SecFact>, targetStart: string, toleranceDays = 12): SecFact | undefined {
  const target = new Date(targetStart).getTime();
  let best: SecFact | undefined;
  let bestDiff = Number.POSITIVE_INFINITY;
  for (const fact of candidates.values()) {
    if (!fact.start) continue;
    const diff = Math.abs(new Date(fact.start).getTime() - target) / 86_400_000;
    if (diff <= toleranceDays && diff < bestDiff) {
      best = fact;
      bestDiff = diff;
    }
  }
  return best;
}

/**
 * Derive single-quarter values from XBRL cumulative facts. SEC filers report
 * year-to-date figures, so Q2/Q3/Q4 are computed by subtraction.
 */
export function extractFlowSeries(facts: CompanyFacts, tags: string[], unit = "USD"): FlowResult {
  const quarterly = new Map<string, { end: string; value: number; fy?: number; period?: string; filed?: string }>();
  const annual = new Map<string, { end: string; value: number; fy?: number; filed?: string }>();

  for (const tag of tags) {
    const units = facts.facts["us-gaap"]?.[tag]?.units?.[unit];
    if (!units?.length) continue;
    const all = latestByKey(units.filter((f) => typeof f.val === "number" && f.start));

    const three = new Map<string, SecFact>();
    const six = new Map<string, SecFact>();
    const nine = new Map<string, SecFact>();
    const fy = new Map<string, SecFact>();

    for (const fact of all) {
      const d = factDays(fact);
      if (d === null) continue;
      if (d >= 70 && d <= 110) three.set(fact.end, preferFact(three.get(fact.end), fact));
      else if (d >= 160 && d <= 200) six.set(fact.end, preferFact(six.get(fact.end), fact));
      else if (d >= 250 && d <= 290) nine.set(fact.end, preferFact(nine.get(fact.end), fact));
      else if (d >= 340 && d <= 390 && (fact.fp === "FY" || fact.form === "10-K")) {
        // Some 10-Q disclosures contain rolling 12-month values; only true
        // annual facts (fiscal-year focus or a 10-K) define a fiscal year.
        fy.set(fact.end, preferFact(fy.get(fact.end), fact));
      }
    }

    const addQuarter = (end: string, value: number, fyear?: number, period?: string, filed?: string) => {
      if (!Number.isFinite(value)) return;
      const existing = quarterly.get(end);
      if (!existing || (filed ?? "") > (existing.filed ?? "")) {
        quarterly.set(end, { end, value, fy: fyear, period, filed });
      }
    };

    // Direct three-month facts are the most reliable source for a quarter.
    for (const [end, fact] of three) addQuarter(end, fact.val, fact.fy, fact.fp, fact.filed);

    for (const [end, fact] of six) {
      if (quarterly.has(end) || !fact.start) continue;
      const prior = factStartingNear(three, fact.start);
      if (prior) addQuarter(end, fact.val - prior.val, fact.fy, "Q2", fact.filed);
    }

    for (const [end, fact] of nine) {
      if (quarterly.has(end) || !fact.start) continue;
      const prior = factStartingNear(six, fact.start);
      if (prior) addQuarter(end, fact.val - prior.val, fact.fy, "Q3", fact.filed);
    }

    for (const [end, fact] of fy) {
      if (!quarterly.has(end) && fact.start) {
        const prior = factStartingNear(nine, fact.start);
        if (prior) addQuarter(end, fact.val - prior.val, fact.fy, "Q4", fact.filed);
      }
      const existingAnnual = annual.get(end);
      if (!existingAnnual || (fact.filed ?? "") > (existingAnnual.filed ?? "")) {
        annual.set(end, { end, value: fact.val, fy: Number(end.slice(0, 4)), filed: fact.filed });
      }
    }
  }

  return { quarterly, annual };
}

export function extractInstant(facts: CompanyFacts, tags: string[], unit = "USD"): { end: string; value: number; filed?: string } | null {
  for (const tag of tags) {
    const units = facts.facts["us-gaap"]?.[tag]?.units?.[unit];
    if (!units?.length) continue;
    const instants = units
      .filter((f) => !f.start && typeof f.val === "number")
      .sort((a, b) => (b.end + (b.filed ?? "")).localeCompare(a.end + (a.filed ?? "")));
    if (instants.length) return { end: instants[0].end, value: instants[0].val, filed: instants[0].filed };
  }
  return null;
}

export function mergeFlowTags(facts: CompanyFacts, tags: string[]): FlowResult {
  return extractFlowSeries(facts, tags);
}

export async function getFilingIndex(cik: string | number, accession: string): Promise<{
  directory: { item: Array<{ name: string; size?: string }> };
}> {
  const cikNum = Number(cik);
  const acc = accession.replace(/-/g, "");
  return secGetJson(
    `${ARCHIVES}/${cikNum}/${acc}/index.json`,
    `index-${cikNum}-${acc}`,
  );
}
