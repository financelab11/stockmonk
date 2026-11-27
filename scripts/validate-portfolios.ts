/**
 * Validates the generated portfolio artifacts against the existing Stockmonk
 * coverage universe and the portfolio data contract.
 *
 * Run: pnpm validate:portfolios
 */
import fs from "node:fs";
import path from "node:path";
import {
  portfolioDetailSchema,
  portfolioIndexSchema,
} from "../lib/portfolios/schemas";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public", "data");
const PORTFOLIO_DIR = path.join(PUBLIC, "portfolios");
const SCREENER = path.join(PUBLIC, "screener.json");
const PRICES = path.join(PUBLIC, "prices");
const LOGOS = path.join(ROOT, "public", "portfolio-logos");

type ScreenerRow = {
  ticker: string;
  name: string;
  archived: boolean;
  research: boolean;
};

const errors: string[] = [];
const warnings: string[] = [];

function fail(message: string) {
  errors.push(message);
}

function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(file, "utf8")) as T;
}

const screener = readJson<ScreenerRow[]>(SCREENER);
const universe = new Map(screener.map((row) => [row.ticker, row]));
const researchCount = screener.filter((row) => row.research).length;
const index = portfolioIndexSchema.parse(
  readJson(path.join(PORTFOLIO_DIR, "index.json")),
);

if (index.portfolios.length < 100) {
  fail(`expected at least 100 portfolios, found ${index.portfolios.length}`);
}
if (index.universeSize !== screener.length) {
  fail(
    `index universe size ${index.universeSize} does not match screener ${screener.length}`,
  );
}
if (index.researchUniverseSize !== researchCount) {
  fail(
    `index research universe size ${index.researchUniverseSize} does not match ${researchCount}`,
  );
}

const slugs = new Set<string>();
const names = new Set<string>();
const constituentSets = new Map<string, string>();
const categoryCounts = new Map<string, number>();
const yahooSecurityPattern =
  /\b(etf|exchange traded|mutual fund|closed-end|warrant|warrants|preferred|depositary|notes due|units?)\b/i;

for (const summary of index.portfolios) {
  if (slugs.has(summary.slug)) fail(`duplicate slug ${summary.slug}`);
  slugs.add(summary.slug);
  if (names.has(summary.name)) fail(`duplicate name ${summary.name}`);
  names.add(summary.name);
  categoryCounts.set(
    summary.primaryCategory,
    (categoryCounts.get(summary.primaryCategory) ?? 0) + 1,
  );

  const file = path.join(PORTFOLIO_DIR, `${summary.slug}.json`);
  if (!fs.existsSync(file)) {
    fail(`${summary.slug}: missing detail file`);
    continue;
  }
  const logoFile = path.join(LOGOS, `${summary.slug}.svg`);
  if (!fs.existsSync(logoFile)) {
    fail(`${summary.slug}: missing portfolio logo`);
  } else if (!fs.readFileSync(logoFile, "utf8").trimStart().startsWith("<svg")) {
    fail(`${summary.slug}: portfolio logo is not an SVG`);
  }
  const detail = portfolioDetailSchema.parse(readJson(file));
  if (detail.slug !== summary.slug) fail(`${summary.slug}: slug mismatch`);
  if (detail.name !== summary.name) fail(`${summary.slug}: name mismatch`);

  if (detail.constituents.length < 5) {
    fail(`${summary.slug}: fewer than five holdings`);
  }
  if (detail.constituents.length !== detail.holdingsCount) {
    fail(
      `${summary.slug}: holdingsCount ${detail.holdingsCount} != ${detail.constituents.length}`,
    );
  }

  const weightSum = detail.constituents.reduce(
    (sum, item) => sum + item.weight,
    0,
  );
  if (Math.abs(weightSum - 1) > 1e-6) {
    fail(`${summary.slug}: weights sum to ${weightSum}`);
  }
  const tickers = new Set<string>();
  for (const item of detail.constituents) {
    if (tickers.has(item.ticker)) {
      fail(`${summary.slug}: duplicate constituent ${item.ticker}`);
    }
    tickers.add(item.ticker);
    const row = universe.get(item.ticker);
    if (!row) {
      fail(`${summary.slug}: ${item.ticker} is outside the coverage universe`);
      continue;
    }
    if (row.archived) {
      fail(`${summary.slug}: ${item.ticker} is archived`);
    }
    if (yahooSecurityPattern.test(item.name)) {
      fail(`${summary.slug}: ${item.ticker} looks like a fund/security wrapper`);
    }
    if (item.research !== row.research) {
      fail(`${summary.slug}: ${item.ticker} research flag mismatch`);
    }
    if (item.weight <= 0 || item.weight > 1) {
      fail(`${summary.slug}: ${item.ticker} weight ${item.weight}`);
    }
    if (detail.performance.available && item.return1y == null) {
      warnings.push(`${summary.slug}: ${item.ticker} has no 1Y return`);
    }
  }

  const key = [...tickers].sort().join(",");
  const previous = constituentSets.get(key);
  if (previous) {
    fail(`${summary.slug}: identical constituent set to ${previous}`);
  } else {
    constituentSets.set(key, summary.slug);
  }

  const sectorSum = detail.allocations.sectors.reduce(
    (sum, item) => sum + item.weight,
    0,
  );
  if (Math.abs(sectorSum - 1) > 1e-6) {
    fail(`${summary.slug}: sector allocations sum to ${sectorSum}`);
  }
  const capSum = detail.allocations.marketCap.reduce(
    (sum, item) => sum + item.weight,
    0,
  );
  if (Math.abs(capSum - 1) > 1e-6) {
    fail(`${summary.slug}: market-cap allocations sum to ${capSum}`);
  }
  if (
    detail.allocations.top10Weight <= 0 ||
    detail.allocations.top10Weight > 1.000001
  ) {
    fail(`${summary.slug}: invalid top10Weight`);
  }

  if (!fs.existsSync(path.join(PRICES, detail.benchmark.id, "1Y.json"))) {
    fail(`${summary.slug}: missing benchmark prices ${detail.benchmark.id}`);
  }
  if (detail.performance.available) {
    if (detail.performance.series.length < 20) {
      fail(`${summary.slug}: performance series too short`);
    }
    if (detail.performance.benchmarks.length < 1) {
      fail(`${summary.slug}: no benchmark performance series`);
    }
    for (const period of ["1M", "6M", "1Y"]) {
      if (!detail.performance.metrics.some((item) => item.period === period)) {
        fail(`${summary.slug}: missing ${period} performance metrics`);
      }
    }
    if (detail.performance.asOf == null) {
      fail(`${summary.slug}: performance asOf is missing`);
    }
  }
  if (detail.performance.basis.toLowerCase().includes("simulated") === false) {
    warnings.push(`${summary.slug}: performance basis is not labelled simulated`);
  }
  if (detail.report.sections.length < 5) {
    fail(`${summary.slug}: report has fewer than five sections`);
  }
  if (detail.review.status === "proposed") {
    if (detail.review.changes.length === 0) {
      fail(`${summary.slug}: proposed review has no changes`);
    }
    for (const change of detail.review.changes) {
      if (!universe.has(change.ticker)) {
        fail(`${summary.slug}: review ticker ${change.ticker} outside universe`);
      }
    }
  }
  if (detail.rebalance.events.length === 0) {
    fail(`${summary.slug}: rebalance timeline is empty`);
  }
}

const files = fs
  .readdirSync(PORTFOLIO_DIR)
  .filter((file) => file.endsWith(".json") && file !== "index.json")
  .map((file) => file.replace(/\.json$/, ""));
for (const file of files) {
  if (!slugs.has(file)) fail(`stale portfolio file ${file}.json`);
}
for (const slug of slugs) {
  if (!files.includes(slug)) fail(`missing portfolio file ${slug}.json`);
}

const expectedCategories: Record<string, number> = {
  Quantitative: 10,
  Thematic: 15,
  Sector: 15,
  Fundamental: 10,
  Technical: 10,
  "Single-Factor": 10,
  "Multi-Factor": 10,
  Growth: 5,
  Value: 5,
  "Quality & Dividend": 5,
  Defensive: 5,
  "Small & Mid Cap": 5,
};
for (const [category, expected] of Object.entries(expectedCategories)) {
  const actual = categoryCounts.get(category) ?? 0;
  if (actual !== expected) {
    fail(`category ${category}: expected ${expected}, found ${actual}`);
  }
}

console.log(
  `[portfolios] validated ${index.portfolios.length} portfolios across ${categoryCounts.size} categories`,
);
console.log(
  `[portfolios] universe ${index.universeSize} companies, ${index.researchUniverseSize} research-covered, ${files.length} detail files`,
);
if (warnings.length) {
  console.log(`[portfolios] ${warnings.length} warnings`);
  for (const warning of warnings.slice(0, 10)) console.log(`  - ${warning}`);
}
if (errors.length) {
  console.error(`[portfolios] ${errors.length} errors`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log("[portfolios] all checks passed");
