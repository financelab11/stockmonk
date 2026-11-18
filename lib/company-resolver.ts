import fs from "node:fs";
import path from "node:path";

export type CompanyRef = {
  ticker: string;
  name: string;
  market: "IN" | "US" | "GCC";
  sector: string;
};

const FILES: Array<{ file: string; market: CompanyRef["market"] }> = [
  { file: "public/data/india/stocks.json", market: "IN" },
  { file: "public/data/stocks.json", market: "US" },
  { file: "public/data/gcc/stocks.json", market: "GCC" },
];

const SUFFIXES = /\b(ltd|limited|inc|incorporated|corp|corporation|company|co|plc|llp|sa|pjsc|qsc)\b/g;

export function normalizeCompanyName(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(SUFFIXES, " ")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

let cached: { exact: Map<string, CompanyRef>; list: Array<{ key: string; ref: CompanyRef }> } | null =
  null;

function load() {
  if (cached) return cached;
  const exact = new Map<string, CompanyRef>();
  const list: Array<{ key: string; ref: CompanyRef }> = [];
  for (const source of FILES) {
    try {
      const rows = JSON.parse(fs.readFileSync(path.join(process.cwd(), source.file), "utf8")) as Array<{
        ticker: string;
        name: string;
        sector: string;
      }>;
      for (const row of rows) {
        const ref: CompanyRef = {
          ticker: row.ticker,
          name: row.name,
          market: source.market,
          sector: row.sector,
        };
        const key = normalizeCompanyName(row.name);
        if (!key) continue;
        if (!exact.has(key)) exact.set(key, ref);
        list.push({ key, ref });
      }
    } catch {
      // dataset missing in this environment
    }
  }
  cached = { exact, list };
  return cached;
}

export function resolveCompany(name: string | null | undefined): CompanyRef | null {
  if (!name) return null;
  const { exact, list } = load();
  const key = normalizeCompanyName(name);
  if (!key) return null;
  const direct = exact.get(key);
  if (direct) return direct;

  // Longest partial match (company names in broker notes often carry suffixes
  // such as "Ltd." or a division name).
  let best: { key: string; ref: CompanyRef } | null = null;
  for (const entry of list) {
    if (entry.key.length < 6) continue;
    if (key.includes(entry.key) || entry.key.includes(key)) {
      if (!best || entry.key.length > best.key.length) best = entry;
    }
  }
  return best?.ref ?? null;
}
