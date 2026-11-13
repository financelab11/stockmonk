import Fuse from "fuse.js";
import { getIndiaUniverse } from "@/lib/india-data";
import type {
  ResolvedRow,
  ResolutionSuggestion,
  UploadMapping,
  UploadRow,
} from "./types";

function cleanTicker(value: string): string {
  return value
    .trim()
    .toUpperCase()
    .replace(/\.(NS|BO|NSE|BSE)$/i, "")
    .replace(/[^A-Z0-9&-]/g, "");
}

function cleanName(value: string): string {
  return value
    .toLowerCase()
    .replace(/\b(ltd|limited|inc|corp|corporation|plc|company|co)\b\.?/g, " ")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

type Candidate = {
  ticker: string;
  name: string;
  sector: string;
  marketCapInr: number | null;
  marketCapAsOf: string | null;
};

export function resolveRows(rows: UploadRow[], mapping: UploadMapping): ResolvedRow[] {
  const universe = getIndiaUniverse();
  const candidates: Candidate[] = universe.map((entry) => ({
    ticker: entry.ticker,
    name: entry.name,
    sector: entry.sector,
    marketCapInr: entry.marketCap,
    marketCapAsOf: entry.asOf ?? null,
  }));

  const byTicker = new Map(candidates.map((candidate) => [candidate.ticker, candidate]));
  const byName = new Map(
    candidates.map((candidate) => [cleanName(candidate.name), candidate]),
  );
  const fuse = new Fuse(candidates, {
    keys: [
      { name: "ticker", weight: 0.6 },
      { name: "name", weight: 0.4 },
    ],
    threshold: 0.42,
    ignoreLocation: true,
    includeScore: true,
  });

  return rows.map((row) => {
    const rawTicker = mapping.ticker ? row.values[mapping.ticker] ?? "" : "";
    const rawName = mapping.name ? row.values[mapping.name] ?? "" : "";
    const ticker = cleanTicker(rawTicker);
    const name = cleanName(rawName);
    const query = [ticker, name].filter(Boolean).join(" ").trim();

    const base: ResolvedRow = {
      rowNumber: row.rowNumber,
      inputTicker: rawTicker.trim(),
      inputName: rawName.trim(),
      status: "unmatched",
      ticker: null,
      name: null,
      sector: null,
      marketCapInr: null,
      marketCapAsOf: null,
      marketCapSource: null,
      suggestions: [],
    };

    let direct: Candidate | undefined;
    if (ticker) direct = byTicker.get(ticker);
    if (!direct && name) direct = byName.get(name);

    if (direct) {
      return {
        ...base,
        status: "matched",
        ticker: direct.ticker,
        name: direct.name,
        sector: direct.sector,
        marketCapInr: direct.marketCapInr,
        marketCapAsOf: direct.marketCapAsOf,
        marketCapSource: "India directory",
      };
    }

    if (!query) return base;

    const results = fuse.search(query, { limit: 5 });
    const suggestions: ResolutionSuggestion[] = results.map((result) => ({
      ticker: result.item.ticker,
      name: result.item.name,
      score: Math.round((1 - (result.score ?? 1)) * 100) / 100,
    }));

    const top = results[0];
    const second = results[1];
    const topScore = top ? 1 - (top.score ?? 1) : 0;
    const gap = second ? topScore - (1 - (second.score ?? 1)) : 1;

    if (top && topScore >= 0.82 && gap >= 0.05) {
      const match = top.item;
      return {
        ...base,
        status: "matched",
        ticker: match.ticker,
        name: match.name,
        sector: match.sector,
        marketCapInr: match.marketCapInr,
        marketCapAsOf: match.marketCapAsOf,
        marketCapSource: "India directory (fuzzy)",
        suggestions,
      };
    }

    return {
      ...base,
      status: topScore >= 0.55 ? "ambiguous" : "unmatched",
      suggestions,
    };
  });
}

export function resolveOverride(
  rawTicker: string,
  rawName: string,
  rowNumber: number,
): ResolvedRow {
  return resolveRows(
    [
      {
        rowNumber,
        values: { ticker: rawTicker, name: rawName },
      },
    ],
    { ticker: "ticker", name: "name", exchange: null, marketCap: null },
  )[0];
}
