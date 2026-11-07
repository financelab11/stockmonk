import fs from "node:fs/promises";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";
import { RESEARCH_TICKERS } from "../config/universe";
import { getFilingIndex, getSubmissions } from "../lib/edgar";

const CACHE = path.join(process.cwd(), "data", "raw", "sec");

type Dim = { dimension: string; member: string };

async function instanceXml(ticker: string, cik: string, accession: string): Promise<string> {
  const file = path.join(CACHE, `instance-${ticker}-${accession.replace(/-/g, "")}.xml`);
  try {
    return await fs.readFile(file, "utf8");
  } catch {
    // cache miss
  }
  const index = await getFilingIndex(cik, accession);
  const name = index.directory.item.find((item) => /_htm\.xml$/i.test(item.name))?.name;
  if (!name) throw new Error(`no XBRL instance for ${ticker}`);
  const url = `https://www.sec.gov/Archives/edgar/data/${Number(cik)}/${accession.replace(/-/g, "")}/${name}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Stockmonk research contact@stockmonk.app", Accept: "application/xml" },
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok) throw new Error(`SEC ${res.status} ${url}`);
  const xml = await res.text();
  await fs.writeFile(file, xml, "utf8");
  return xml;
}

function members(context: Record<string, unknown>): Dim[] {
  const segment = (context.entity as { segment?: { explicitMember?: unknown } } | undefined)?.segment;
  const raw = segment?.explicitMember;
  if (!raw) return [];
  const list = Array.isArray(raw) ? raw : [raw];
  return list.map((m) => ({
    dimension: String((m as Record<string, unknown>)["@_dimension"] ?? ""),
    member: String((m as Record<string, unknown>)["#text"] ?? ""),
  }));
}

async function main() {
  for (const ticker of RESEARCH_TICKERS) {
    const sec = JSON.parse(await fs.readFile(path.join("data", "processed", ticker, "sec.json"), "utf8"));
    const latest = sec.filings.latest10K;
    const annualEnd = sec.annual[sec.annual.length - 1]?.end;
    const submissions = await getSubmissions(sec.cik);
    const cik = String(Number(submissions.cik));
    const xml = await instanceXml(ticker, cik, latest.accession);
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_", removeNSPrefix: true });
    const root = parser.parse(xml).xbrl;
    const contexts = root.context ?? [];
    const byId = new Map<string, Record<string, unknown>>(
      contexts.map((c: Record<string, unknown>) => [String(c["@_id"]), c]),
    );

    const revenueKeys = Object.keys(root).filter((k) => /Revenue|SalesRevenue/i.test(k));
    const rows: Array<{ tag: string; dims: Dim[]; value: number }> = [];
    for (const tag of revenueKeys) {
      const raw = root[tag];
      const list = Array.isArray(raw) ? raw : [raw];
      for (const fact of list) {
        if (typeof fact !== "object" || fact === null) continue;
        const f = fact as Record<string, unknown>;
        const context = byId.get(String(f["@_contextRef"]));
        if (!context) continue;
        const period = context.period as { startDate?: string; endDate?: string } | undefined;
        if (period?.endDate !== annualEnd) continue;
        const value = Number(f["#text"]);
        if (!Number.isFinite(value)) continue;
        const dims = members(context);
        if (!dims.length) continue;
        rows.push({ tag, dims, value });
      }
    }

    const dimNames = new Map<string, number>();
    for (const row of rows) for (const d of row.dims) dimNames.set(d.dimension, (dimNames.get(d.dimension) ?? 0) + 1);

    console.log(`\n=== ${ticker} FY end ${annualEnd} (${latest.accession}) ===`);
    console.log("dimensions:", [...dimNames.entries()].map(([d, n]) => `${d}(${n})`).join(", "));
    for (const [dim, count] of dimNames) {
      if (!/Segment|ProductOrService|Geographical/i.test(dim)) continue;
      console.log(`-- ${dim} (${count})`);
      const seen = new Set<string>();
      for (const row of rows) {
        const d = row.dims.find((x) => x.dimension === dim);
        if (!d) continue;
        const key = `${d.member}|${row.value}`;
        if (seen.has(key)) continue;
        seen.add(key);
        console.log(`   ${d.member} = ${(row.value / 1e9).toFixed(2)}B [${row.tag}]`);
      }
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
