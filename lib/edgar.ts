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

export async function secGetJson<T>(
  url: string,
  cacheName: string,
  options: { force?: boolean } = {},
): Promise<T> {
  const file = path.join(CACHE_ROOT, `${cacheName}.json`);
  if (!options.force) {
    try {
      return JSON.parse(await fs.readFile(file, "utf8")) as T;
    } catch {
      // cache miss
    }
  }
  await throttle();
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok)
    throw new Error(`SEC ${res.status} ${res.statusText} for ${url}`);
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
  facts: Record<
    string,
    Record<string, { label?: string; units?: Record<string, SecFact[]> }>
  >;
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

export async function getCompanyFacts(
  cik: string | number,
  options: { force?: boolean } = {},
): Promise<CompanyFacts> {
  const padded = String(cik).padStart(10, "0");
  return secGetJson<CompanyFacts>(
    `${SEC_ROOT}/api/xbrl/companyfacts/CIK${padded}.json`,
    `companyfacts-${padded}`,
    options,
  );
}

export async function getSubmissions(
  cik: string | number,
  options: { force?: boolean } = {},
): Promise<Submissions> {
  const padded = String(cik).padStart(10, "0");
  return secGetJson<Submissions>(
    `${SEC_ROOT}/submissions/CIK${padded}.json`,
    `submissions-${padded}`,
    options,
  );
}

export async function getTickerCikMap(
  force = false,
): Promise<Record<string, number>> {
  const data = await secGetJson<
    Record<string, { cik_str: number; ticker: string; title: string }>
  >("https://www.sec.gov/files/company_tickers.json", "company_tickers", {
    force,
  });
  const map: Record<string, number> = {};
  for (const item of Object.values(data))
    map[item.ticker.toUpperCase()] = item.cik_str;
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
  quarterly: Map<
    string,
    { end: string; value: number; fy?: number; period?: string; filed?: string }
  >;
  annual: Map<
    string,
    { end: string; value: number; fy?: number; filed?: string }
  >;
};

function factDays(fact: SecFact): number | null {
  if (!fact.start) return null;
  return (
    (new Date(fact.end).getTime() - new Date(fact.start).getTime()) / 86_400_000
  );
}

function factRank(fact: SecFact): number {
  if (fact.form === "10-K") return 4;
  if (fact.form === "10-Q") return 3;
  if (fact.form === "20-F") return 2;
  if (fact.form === "8-K") return 1;
  return 0;
}

function latestByKey(facts: SecFact[]): SecFact[] {
  const map = new Map<string, SecFact>();
  for (const fact of facts) {
    const key = `${fact.start ?? "instant"}|${fact.end}`;
    const prev = map.get(key);
    // Prefer the primary filing over a later proxy or 8-K that repeats the
    // same period, otherwise a DEF 14A can shadow the 10-K annual fact.
    if (
      !prev ||
      factRank(fact) > factRank(prev) ||
      (factRank(fact) === factRank(prev) &&
        (fact.filed ?? "") > (prev.filed ?? ""))
    ) {
      map.set(key, fact);
    }
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
function factStartingNear(
  candidates: Map<string, SecFact>,
  targetStart: string,
  toleranceDays = 12,
): SecFact | undefined {
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
export function extractFlowSeries(
  facts: CompanyFacts,
  tags: string[],
  unit = "USD",
  namespace = "us-gaap",
): FlowResult {
  const quarterly = new Map<
    string,
    { end: string; value: number; fy?: number; period?: string; filed?: string }
  >();
  const annual = new Map<
    string,
    { end: string; value: number; fy?: number; filed?: string }
  >();

  for (const tag of tags) {
    const units = facts.facts[namespace]?.[tag]?.units?.[unit];
    if (!units?.length) continue;
    const all = latestByKey(
      units.filter((f) => typeof f.val === "number" && f.start),
    );

    const three = new Map<string, SecFact>();
    const six = new Map<string, SecFact>();
    const nine = new Map<string, SecFact>();
    const fy = new Map<string, SecFact>();

    for (const fact of all) {
      const d = factDays(fact);
      if (d === null) continue;
      if (d >= 70 && d <= 110)
        three.set(fact.end, preferFact(three.get(fact.end), fact));
      else if (d >= 160 && d <= 200)
        six.set(fact.end, preferFact(six.get(fact.end), fact));
      else if (d >= 250 && d <= 290)
        nine.set(fact.end, preferFact(nine.get(fact.end), fact));
      else if (
        d >= 340 &&
        d <= 390 &&
        (fact.fp === "FY" || fact.form === "10-K")
      ) {
        // Some 10-Q disclosures contain rolling 12-month values; only true
        // annual facts (fiscal-year focus or a 10-K) define a fiscal year.
        fy.set(fact.end, preferFact(fy.get(fact.end), fact));
      }
    }

    const addQuarter = (
      end: string,
      value: number,
      fyear?: number,
      period?: string,
      filed?: string,
    ) => {
      if (!Number.isFinite(value)) return;
      const existing = quarterly.get(end);
      if (!existing || (filed ?? "") > (existing.filed ?? "")) {
        quarterly.set(end, { end, value, fy: fyear, period, filed });
      }
    };

    // Direct three-month facts are the most reliable source for a quarter.
    for (const [end, fact] of three)
      addQuarter(end, fact.val, fact.fy, fact.fp, fact.filed);

    for (const [end, fact] of six) {
      if (quarterly.has(end) || !fact.start) continue;
      const prior = factStartingNear(three, fact.start);
      if (prior)
        addQuarter(end, fact.val - prior.val, fact.fy, "Q2", fact.filed);
    }

    for (const [end, fact] of nine) {
      if (quarterly.has(end) || !fact.start) continue;
      const prior = factStartingNear(six, fact.start);
      if (prior)
        addQuarter(end, fact.val - prior.val, fact.fy, "Q3", fact.filed);
    }

    for (const [end, fact] of fy) {
      if (!quarterly.has(end) && fact.start) {
        const prior = factStartingNear(nine, fact.start);
        if (prior)
          addQuarter(end, fact.val - prior.val, fact.fy, "Q4", fact.filed);
      }
      const existingAnnual = annual.get(end);
      if (
        !existingAnnual ||
        (fact.filed ?? "") > (existingAnnual.filed ?? "")
      ) {
        annual.set(end, {
          end,
          value: fact.val,
          fy: Number(end.slice(0, 4)),
          filed: fact.filed,
        });
      }
    }
  }

  return { quarterly, annual };
}

export function extractInstant(
  facts: CompanyFacts,
  tags: string[],
  unit = "USD",
): { end: string; value: number; filed?: string } | null {
  for (const tag of tags) {
    const units = facts.facts["us-gaap"]?.[tag]?.units?.[unit];
    if (!units?.length) continue;
    const instants = units
      .filter((f) => !f.start && typeof f.val === "number")
      .sort((a, b) =>
        (b.end + (b.filed ?? "")).localeCompare(a.end + (a.filed ?? "")),
      );
    if (instants.length)
      return {
        end: instants[0].end,
        value: instants[0].val,
        filed: instants[0].filed,
      };
  }
  return null;
}

export type InstantPoint = {
  end: string;
  value: number;
  filed?: string;
}; /** Every point-in-time fact for a set of tags, deduplicated by period end. */
export function extractInstantSeries(
  facts: CompanyFacts,
  tags: string[],
  unit = "USD",
  namespace = "us-gaap",
): Map<string, InstantPoint> {
  const out = new Map<string, InstantPoint>();
  for (const tag of tags) {
    const units = facts.facts[namespace]?.[tag]?.units?.[unit];
    if (!units?.length) continue;
    for (const fact of units) {
      if (fact.start || typeof fact.val !== "number") continue;
      const prev = out.get(fact.end);
      if (!prev || (fact.filed ?? "") > (prev.filed ?? "")) {
        out.set(fact.end, {
          end: fact.end,
          value: fact.val,
          filed: fact.filed,
        });
      }
    }
  }
  return out;
}

/**
 * The first tag in priority order that has a point-in-time value within a few
 * days of `end`. Balance-sheet dates line up with fiscal period ends, so a
 * small tolerance handles 52/53-week calendars without borrowing a stale value.
 */
export function extractInstantAt(
  facts: CompanyFacts,
  tags: string[],
  end: string,
  options: { unit?: string; namespace?: string; toleranceDays?: number } = {},
): InstantPoint | null {
  const tolerance = options.toleranceDays ?? 12;
  const target = new Date(end).getTime();
  for (const tag of tags) {
    const series = extractInstantSeries(
      facts,
      [tag],
      options.unit ?? "USD",
      options.namespace ?? "us-gaap",
    );
    let best: InstantPoint | null = null;
    let bestDiff = Number.POSITIVE_INFINITY;
    for (const point of series.values()) {
      const diff =
        Math.abs(new Date(point.end).getTime() - target) / 86_400_000;
      if (diff <= tolerance && diff < bestDiff) {
        best = point;
        bestDiff = diff;
      }
    }
    if (best) return best;
  }
  return null;
}

export function mergeFlowTags(facts: CompanyFacts, tags: string[]): FlowResult {
  return extractFlowSeries(facts, tags);
}

export async function getFilingIndex(
  cik: string | number,
  accession: string,
): Promise<{
  directory: { item: Array<{ name: string; size?: string }> };
}> {
  const cikNum = Number(cik);
  const acc = accession.replace(/-/g, "");
  return secGetJson(
    `${ARCHIVES}/${cikNum}/${acc}/index.json`,
    `index-${cikNum}-${acc}`,
  );
}

/**
 * Combine facts from a successor filer with its predecessor. Used where a
 * 2026 holding-company reorganisation reset the XBRL history: the new CIK has
 * the current quarters and the old CIK has the multi-year record.
 */
export function mergeCompanyFacts(
  primary: CompanyFacts,
  history: CompanyFacts,
): CompanyFacts {
  const facts: CompanyFacts["facts"] = { ...primary.facts };
  for (const [namespace, tags] of Object.entries(history.facts)) {
    const target = (facts[namespace] ??= {});
    for (const [tag, definition] of Object.entries(tags)) {
      const existing = target[tag];
      if (!existing) {
        target[tag] = definition;
        continue;
      }
      const units: typeof existing.units = { ...(existing.units ?? {}) };
      for (const [unit, points] of Object.entries(definition.units ?? {})) {
        units[unit] = [...(units[unit] ?? []), ...points];
      }
      target[tag] = { ...existing, units };
    }
  }
  return { ...primary, facts };
}

/**
 * Convert every monetary fact from the reporting currency to USD using a
 * date-indexed FX series. EPS units such as `CHF/shares` become `USD/shares`.
 * Facts without a usable rate are dropped rather than shown unconverted.
 */
export function convertCompanyFactsToUsd(
  facts: CompanyFacts,
  sourceCurrency: string,
  rateForDate: (date: string) => number | null,
): CompanyFacts {
  if (sourceCurrency === "USD") return facts;
  const converted: CompanyFacts["facts"] = {};
  for (const [namespace, tags] of Object.entries(facts.facts)) {
    converted[namespace] = {};
    for (const [tag, definition] of Object.entries(tags)) {
      const units: NonNullable<CompanyFacts["facts"][string][string]["units"]> =
        {};
      for (const [unit, points] of Object.entries(definition.units ?? {})) {
        const monetary = unit === sourceCurrency;
        const perShare = unit === `${sourceCurrency}/shares`;
        if (!monetary && !perShare) {
          units[unit] = [...(units[unit] ?? []), ...points];
          continue;
        }
        const targetUnit = perShare ? "USD/shares" : "USD";
        const next: SecFact[] = [];
        for (const point of points) {
          const rate = rateForDate(point.end);
          if (rate === null) continue;
          next.push({ ...point, val: point.val * rate });
        }
        units[targetUnit] = [...(units[targetUnit] ?? []), ...next];
      }
      converted[namespace][tag] = { ...definition, units };
    }
  }
  return { ...facts, facts: converted };
}
