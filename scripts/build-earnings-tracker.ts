/**
 * Builds the India Earnings Tracker dataset.
 *
 * Two sources are supported:
 *  1. Stockmonk's own India filings (`data/india/processed/<TICKER>/data.json`).
 *  2. An authorised Screener export dropped into
 *     `data/india/earnings-tracker-source/*.csv`. Columns are matched by name,
 *     percentages are converted to fractions and market cap is read in ₹ crore.
 *
 * Export rows win over filings for the same ticker; both are merged so the
 * tracker can cover the full market once the export is available.
 *
 * Run: pnpm build:earnings
 */
import fs from "node:fs";
import path from "node:path";
import { formatFiscalQuarter } from "../lib/format";
import { earningsTrackerSchema, type EarningsTrackerRow } from "../lib/schemas";

const PROCESSED = path.join(process.cwd(), "data", "india", "processed");
const EXPORT_DIR = path.join(process.cwd(), "data", "india", "earnings-tracker-source");
const OUT = path.join(process.cwd(), "data", "india", "earnings-tracker.json");

type Quarter = {
  period: string;
  fyear: number;
  reportDate: string | null;
  ttm: boolean;
  revenue: number | null;
  ebitda: number | null;
  netIncome: number | null;
  epsDiluted: number | null;
};

type ProcessedCompany = {
  ticker: string;
  name: string;
  industry: string;
  latestPrice?: { marketCap?: number | null };
  metrics?: {
    pe?: number | null;
    return1y?: number | null;
    roce?: number | null;
  };
  quarterly?: Quarter[];
};

function growth(current: number | null, previous: number | null): number | null {
  if (current == null || previous == null) return null;
  if (!Number.isFinite(current) || !Number.isFinite(previous)) return null;
  // A loss-making base makes a percentage change meaningless.
  if (previous <= 0) return null;
  return (current - previous) / previous;
}

function buildFromFilings(): EarningsTrackerRow[] {
  if (!fs.existsSync(PROCESSED)) return [];
  const rows: EarningsTrackerRow[] = [];

  for (const ticker of fs.readdirSync(PROCESSED)) {
    const file = path.join(PROCESSED, ticker, "data.json");
    if (!fs.existsSync(file)) continue;

    let company: ProcessedCompany;
    try {
      company = JSON.parse(fs.readFileSync(file, "utf8")) as ProcessedCompany;
    } catch {
      continue;
    }

    const quarters = (company.quarterly ?? [])
      .filter((row) => !row.ttm && row.reportDate)
      .sort((a, b) => String(a.reportDate).localeCompare(String(b.reportDate)));
    const latest = quarters.at(-1);
    if (!latest) continue;

    const yearAgo =
      quarters.find(
        (row) => row.fyear === latest.fyear - 1 && row.period === latest.period,
      ) ?? quarters.at(-5);

    const epsGrowth = growth(latest.epsDiluted, yearAgo?.epsDiluted ?? null);
    const pe = company.metrics?.pe ?? null;

    rows.push({
      ticker: company.ticker,
      name: company.name,
      industry: company.industry,
      period: formatFiscalQuarter(latest.period, latest.fyear),
      reportDate: latest.reportDate,
      salesGrowth: growth(latest.revenue, yearAgo?.revenue ?? null),
      ebitdaGrowth: growth(latest.ebitda, yearAgo?.ebitda ?? null),
      netProfitGrowth: growth(latest.netIncome, yearAgo?.netIncome ?? null),
      epsGrowth,
      marketCap: company.latestPrice?.marketCap ?? null,
      pe,
      roce: company.metrics?.roce ?? null,
      peg: pe != null && pe > 0 && epsGrowth != null && epsGrowth > 0
        ? pe / (epsGrowth * 100)
        : null,
      return1y: company.metrics?.return1y ?? null,
      source: "filings",
    });
  }

  return rows;
}

function normaliseHeader(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const HEADER_FIELDS: Record<string, string[]> = {
  ticker: ["ticker", "nsecode", "symbol", "code", "nsesymbol", "bsecode"],
  name: ["name", "company", "companyname"],
  industry: ["industry", "sector"],
  marketCap: ["marketcap", "marcap", "mcap", "marketcapitalisation", "marketcapitalization"],
  pe: ["pe", "peratio", "priceearning", "priceearnings"],
  roce: ["roce", "returnoncapitalemployed"],
  peg: ["peg", "pegratio"],
  return1y: ["1yreturn", "return1y", "1yearreturn", "1yrreturn", "returnover1year"],
  salesGrowth: ["salesgrowth", "qtrsalesvar", "salesvar", "yoysales", "salesyoy", "qtrsalesgrowth"],
  ebitdaGrowth: ["ebitdagrowth", "qtrebitdavar", "ebitdavar"],
  netProfitGrowth: ["netprofitgrowth", "qtrprofitvar", "profitvar", "patgrowth", "netprofitvar"],
  epsGrowth: ["epsgrowth", "epsvar", "epvar"],
  period: ["qtr", "quarter", "period"],
};

function parseNumber(raw: string | undefined): number | null {
  if (!raw) return null;
  let text = raw.replace(/[₹,\s]/g, "").replace(/%$/, "");
  if (!text || text === "-" || text.toLowerCase() === "na") return null;
  const negative = /^\((.*)\)$/.test(text);
  if (negative) text = text.slice(1, -1);
  const value = Number(text);
  if (!Number.isFinite(value)) return null;
  return negative ? -value : value;
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quoted) {
      if (char === '"' && text[index + 1] === '"') {
        cell += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        cell += char;
      }
      continue;
    }
    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") {
      cell += char;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((line) => line.some((value) => value.trim()));
}

function mapHeader(header: string[]): Map<string, number> {
  const map = new Map<string, number>();
  header.forEach((cell, index) => {
    const key = normaliseHeader(cell);
    for (const [field, aliases] of Object.entries(HEADER_FIELDS)) {
      if (map.has(field)) continue;
      if (aliases.some((alias) => normaliseHeader(alias) === key)) {
        map.set(field, index);
        break;
      }
    }
  });
  return map;
}

function readExports(): EarningsTrackerRow[] {
  if (!fs.existsSync(EXPORT_DIR)) return [];
  const rows: EarningsTrackerRow[] = [];

  for (const file of fs.readdirSync(EXPORT_DIR)) {
    if (!/\.csv$/i.test(file)) continue;
    const table = parseCsv(fs.readFileSync(path.join(EXPORT_DIR, file), "utf8"));
    if (table.length < 2) continue;
    const header = mapHeader(table[0]);
    if (!header.has("ticker") || !header.has("name")) {
      console.warn(`[earnings] ${file}: missing ticker/name columns, skipped`);
      continue;
    }

    const value = (line: string[], field: string): string | undefined => {
      const index = header.get(field);
      return index == null ? undefined : line[index];
    };
    const percent = (line: string[], field: string) => {
      const parsed = parseNumber(value(line, field));
      return parsed == null ? null : parsed / 100;
    };

    for (const line of table.slice(1)) {
      const ticker = value(line, "ticker")?.trim().toUpperCase();
      const name = value(line, "name")?.trim();
      if (!ticker || !name) continue;

      const marketCapCr = parseNumber(value(line, "marketCap"));
      rows.push({
        ticker,
        name,
        industry: value(line, "industry")?.trim() || "Unclassified",
        period: value(line, "period")?.trim() || null,
        reportDate: null,
        salesGrowth: percent(line, "salesGrowth"),
        ebitdaGrowth: percent(line, "ebitdaGrowth"),
        netProfitGrowth: percent(line, "netProfitGrowth"),
        epsGrowth: percent(line, "epsGrowth"),
        marketCap: marketCapCr == null ? null : marketCapCr * 10_000_000,
        pe: parseNumber(value(line, "pe")),
        roce: percent(line, "roce"),
        peg: parseNumber(value(line, "peg")),
        return1y: percent(line, "return1y"),
        source: "screener-export",
      });
    }
    console.log(`[earnings] ${file}: ${table.length - 1} rows`);
  }

  return rows;
}

function main() {
  const filings = buildFromFilings();
  const exported = readExports();

  const merged = new Map(filings.map((row) => [row.ticker, row]));
  for (const row of exported) merged.set(row.ticker, row);
  const rows = [...merged.values()].sort((a, b) => a.name.localeCompare(b.name));

  const asOf =
    rows
      .map((row) => row.reportDate)
      .filter((date): date is string => Boolean(date))
      .sort()
      .at(-1) ?? null;

  const source = exported.length === 0 ? "filings" : filings.length === 0 ? "screener-export" : "mixed";
  const payload = earningsTrackerSchema.parse({
    generatedAt: new Date().toISOString(),
    asOf,
    source,
    rows,
  });

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(payload), "utf8");

  const coverage = {
    rows: rows.length,
    sales: rows.filter((row) => row.salesGrowth != null).length,
    ebitda: rows.filter((row) => row.ebitdaGrowth != null).length,
    profit: rows.filter((row) => row.netProfitGrowth != null).length,
    eps: rows.filter((row) => row.epsGrowth != null).length,
    roce: rows.filter((row) => row.roce != null).length,
    peg: rows.filter((row) => row.peg != null).length,
  };
  console.log(`[earnings] wrote ${rows.length} rows (${source})`, coverage);
}

main();
