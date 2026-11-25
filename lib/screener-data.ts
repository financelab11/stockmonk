import "server-only";

import fs from "node:fs";
import path from "node:path";
import {
  buildFilterDistributions,  buildResearchScreens,
  type FilterDistribution,  type ResearchScreen,
} from "./screener-filters";
import {
  FACTOR_CONFIG,
  type FactorKey,
  type FactorResult,
  type ScreenerRow,
} from "./screener-model";

const FILE = path.join(process.cwd(), "public", "data", "screener.json");
const FACTORS_FILE = path.join(process.cwd(), "public", "data", "screener-factors.json");

type CoreRow = Omit<ScreenerRow, "factors"> & {
  factorScores: Record<string, number | null>;
};

type CompactFactors = {
  keys: string[];
  rows: Array<[Array<number | null>, Array<number | null>]>;
};

let rowsCache: ScreenerRow[] | null = null;
let compactCache: CompactFactors | null | undefined;
let parameterIndex: Map<string, number> | null = null;
let parameterRowIndex: Map<string, number> | null = null;
let distributionsCache: FilterDistribution[] | null = null;let researchScreensCache: ResearchScreen[] | null = null;
let groupsCache: string[] | null = null;

function getCompactFactors(): CompactFactors | null {
  if (compactCache !== undefined) return compactCache;
  try {
    compactCache = JSON.parse(fs.readFileSync(FACTORS_FILE, "utf8")) as CompactFactors;
  } catch {
    compactCache = null;
  }
  return compactCache;
}

function emptyFactors(row: CoreRow): Record<FactorKey, FactorResult> {
  const factors = {} as Record<FactorKey, FactorResult>;
  for (const factor of FACTOR_CONFIG) {
    factors[factor.key] = {
      score: row.factorScores?.[factor.key] ?? null,
      parameters: {},
    };
  }
  return factors;
}

/** Expand the compact parameter columns only when a row is actually read. */
function attachFactors(rows: CoreRow[]): ScreenerRow[] {
  const compact = getCompactFactors();
  if (!compact) {
    return rows.map((row) => {
      const result = { ...row } as unknown as ScreenerRow;
      Object.defineProperty(result, "factors", {
        enumerable: true,
        get: () => emptyFactors(row),
      });
      return result;
    });
  }
  const index = new Map(compact.keys.map((key, position) => [key, position]));
  return rows.map((row, rowIndex) => {
    let built: Record<FactorKey, FactorResult> | null = null;
    const result = { ...row } as unknown as ScreenerRow;
    Object.defineProperty(result, "factors", {
      enumerable: true,
      configurable: true,
      get() {
        if (built) return built;
        const [values, scores] = compact!.rows[rowIndex] ?? [[], []];
        const factors = {} as Record<FactorKey, FactorResult>;
        for (const factor of FACTOR_CONFIG) {
          const parameters: Record<string, { value: number | null; score: number | null }> = {};
          for (const parameter of factor.parameters) {
            const position = index.get(`${factor.key}.${parameter.key}`);
            parameters[parameter.key] = {
              value: position == null ? null : values[position] ?? null,
              score: position == null ? null : scores[position] ?? null,
            };
          }
          factors[factor.key] = {
            score: row.factorScores?.[factor.key] ?? null,
            parameters,
          };
        }
        built = factors;
        return built;
      },
    });
    return result;
  });
}

export function getScreenerRows(): ScreenerRow[] {
  if (rowsCache) return rowsCache;
  try {
    const raw = JSON.parse(fs.readFileSync(FILE, "utf8")) as CoreRow[];
    rowsCache = attachFactors(raw);
  } catch {
    rowsCache = [];
  }
  return rowsCache;
}

export function getScreenerDistributions(): FilterDistribution[] {
  distributionsCache ??= buildFilterDistributions(getScreenerRows());
  return distributionsCache;
}

export function getScreenerResearchScreens(): ResearchScreen[] {
  researchScreensCache ??= buildResearchScreens(getScreenerRows());
  return researchScreensCache;
}

export function getScreenerGroups(): string[] {
  groupsCache ??= [...new Set(getScreenerRows().map((row) => row.group))].sort();
  return groupsCache;
}

/** Read one parameter value/score without expanding a row's whole factor tree. */
export function getScreenerParameter(
  ticker: string,
  parameterKey: string,
): { value: number | null; score: number | null } {
  const compact = getCompactFactors();
  if (!compact) return { value: null, score: null };
  if (!parameterIndex) {
    parameterIndex = new Map(compact.keys.map((key, position) => [key, position]));
  }
  if (!parameterRowIndex) {
    parameterRowIndex = new Map(
      getScreenerRows().map((row, position) => [row.ticker, position]),
    );
  }
  const row = parameterRowIndex.get(ticker);
  const position = parameterIndex.get(parameterKey);
  if (row == null || position == null) return { value: null, score: null };
  const [values, scores] = compact.rows[row] ?? [[], []];
  return { value: values[position] ?? null, score: scores[position] ?? null };
}

export const getScreenerFactorConfig = () => FACTOR_CONFIG;

export function getScreenerSummary() {
  const rows = getScreenerRows();
  const withComposite = rows.filter((row) => row.v2Composite != null);
  const composites = withComposite
    .map((row) => row.v2Composite as number)
    .sort((a, b) => a - b);
  const median =
    composites.length === 0 ? null : composites[Math.floor(composites.length / 2)];
  const average =
    composites.length === 0
      ? null
      : Math.round(composites.reduce((sum, value) => sum + value, 0) / composites.length);
  const dates = rows.map((row) => row.asOf).filter(Boolean).sort();
  return {
    count: rows.length,
    median,
    average,
    top: rows.slice(0, 5),
    asOf: dates.at(-1) ?? null,
    coverage: withComposite.length,
  };
}
