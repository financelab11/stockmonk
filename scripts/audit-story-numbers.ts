/**
 * Reports numeric claims in report prose that look stale against the current
 * research pack. Tokens are ignored; URLs, dates and accession numbers are
 * stripped.
 *
 * A number is accepted when it appears in the pack, or is a simple
 * ratio/difference of two pack numbers. A number that is close to, but not
 * equal to, a current pack value is treated as a stale quote. Numbers with no
 * close pack value are reported as unverified filing/editorial facts; they are
 * not blocking because some filing details are not carried in the pack.
 *
 * Run: pnpm audit:numbers
 *      pnpm audit:numbers --strict
 *      pnpm audit:numbers --ticker=NVDA
 */
import { STOCK_STORIES } from "../content/stocks";
import { packFor } from "./build-research-packs";

const STRICT = process.argv.includes("--strict");
const ONLY = process.argv
  .find((arg) => arg.startsWith("--ticker="))
  ?.split("=")[1]
  ?.toUpperCase();

const URL = /https?:\/\/[^\s"\\]+/g;
const DATE = /\b\d{4}-\d{2}-\d{2}\b/g;
const ACCESSION = /\b\d{10}-\d{2}-\d{6}\b/g;
const TOKEN = /\{\{\w+\}\}/g;
const NUMBER = /\d[\d,.]*/g;

function values(text: string): number[] {
  return [...text.matchAll(NUMBER)]
    .map((match) => Number(match[0].replace(/,/g, "").replace(/\.$/, "")))
    .filter((value) => Number.isFinite(value));
}

function clean(text: string): string {
  return text
    .replace(URL, " ")
    .replace(DATE, " ")
    .replace(ACCESSION, " ")
    .replace(TOKEN, " ");
}

function close(a: number, b: number): boolean {
  return Math.abs(a - b) <= Math.max(0.05, Math.abs(b) * 0.0005);
}

function derived(packNumbers: number[]): Set<string> {
  const result = new Set<string>();
  const unique = [...new Set(packNumbers)];
  for (let i = 0; i < unique.length; i += 1) {
    for (let j = i + 1; j < unique.length; j += 1) {
      const a = unique[i];
      const b = unique[j];
      if (a === 0 || b === 0) continue;
      const ratios = [a / b, b / a, (a / b - 1) * 100, (b / a - 1) * 100];
      for (const ratio of ratios) {
        if (Number.isFinite(ratio)) result.add(ratio.toFixed(3));
      }
    }
  }
  return result;
}

const rows: Array<{
  ticker: string;
  stale: number[];
  unverified: number[];
}> = [];

for (const [ticker, story] of Object.entries(STOCK_STORIES)) {
  if (ONLY && ticker !== ONLY) continue;
  const fullPack = packFor(ticker);
  if (!fullPack) continue;
  // The existing editorial context is the prose under test; exclude it.
  const pack = fullPack.split("## Existing bespoke editorial context")[0];
  const packNumbers = values(pack);
  const packSet = packNumbers.map((value) => value.toFixed(4));
  const ratios = derived(packNumbers);
  const text = clean(JSON.stringify(story));
  const output = [...new Set(values(text))];
  const stale: number[] = [];
  const unverified: number[] = [];

  for (const value of output) {
    if (Number.isInteger(value) && Math.abs(value) <= 12) continue;
    if (value >= 1900 && value <= 2100) continue;
    if (value === 52) continue;
    if (packSet.some((candidate) => close(value, Number(candidate)))) {
      continue;
    }
    if (ratios.has(value.toFixed(3))) continue;
    const near = packNumbers.find((candidate) => {
      if (candidate === 0) return false;
      return Math.abs(candidate - value) / Math.abs(candidate) <= 0.12;
    });
    if (near != null) stale.push(value);
    else unverified.push(value);
  }

  if (stale.length || unverified.length) {
    rows.push({ ticker, stale, unverified });
  }
}

const staleRows = rows.filter((row) => row.stale.length);
const unverifiedRows = rows.filter((row) => row.unverified.length);
console.log(
  `[numbers] ${staleRows.length} stories contain a value close to a current pack value but not equal (stale); ${unverifiedRows.length} contain unverified filing/editorial numbers`,
);
for (const row of staleRows.slice(0, 40)) {
  console.log(
    `${row.ticker}: stale ${row.stale
      .sort((a, b) => a - b)
      .slice(0, 12)
      .join(", ")}${
      row.unverified.length
        ? ` · unverified ${row.unverified
            .sort((a, b) => a - b)
            .slice(0, 8)
            .join(", ")}`
        : ""
    }`,
  );
}
if (staleRows.length > 40) console.log(`… and ${staleRows.length - 40} more`);

if (STRICT && staleRows.length > 0) process.exitCode = 1;
