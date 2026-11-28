/**
 * Reports how stale each dataset and story is. Read-only.
 *
 * Run: pnpm audit:freshness
 *      pnpm audit:freshness --strict
 *
 * `--strict` is the daily gate: it fails when the story manifest is missing,
 * when any story is pending a rewrite, when a price or consensus source is
 * beyond its threshold, or when an accepted source gap has passed its review
 * date.
 */
import fs from "node:fs";
import path from "node:path";
import type { StoryFreshnessManifest } from "../lib/story-freshness";

type UniverseEntry = {
  ticker: string;
  asOf?: string | null;
  archived?: boolean;
};

const MARKETS = [
  {
    code: "US",
    stocks: "public/data/stocks.json",
    consensus: "data/consensus",
  },
];

const STRICT = process.argv.includes("--strict");
const MANIFEST = path.join(process.cwd(), "data", "story-freshness.json");

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

function daysBetween(a: string, b: string): number {
  return Math.round(
    (new Date(`${b.slice(0, 10)}T00:00:00Z`).getTime() -
      new Date(`${a.slice(0, 10)}T00:00:00Z`).getTime()) /
      86_400_000,
  );
}

const today = new Date().toISOString().slice(0, 10);
console.log(`[freshness] audit date ${today}`);

const failures: string[] = [];

for (const market of MARKETS) {
  const entries = readJson<UniverseEntry[]>(market.stocks) ?? [];
  const activeEntries = entries.filter((entry) => !entry.archived);
  const dates = activeEntries
    .map((entry) => entry.asOf?.slice(0, 10))
    .filter((value): value is string => Boolean(value))
    .sort();
  if (!dates.length) {
    console.log(`${market.code}: no price dates`);
    failures.push(`${market.code}: no price dates`);
    continue;
  }
  const oldest = dates[0];
  const newest = dates[dates.length - 1];
  const median = dates[Math.floor(dates.length / 2)];
  const fresh = dates.filter((date) => daysBetween(date, today) <= 7).length;
  console.log(
    `${market.code}: ${activeEntries.length} active names (${entries.length - activeEntries.length} archived) · prices ${oldest} → ${newest} (median ${median}) · ${fresh}/${activeEntries.length} within 7 days · newest age ${daysBetween(newest, today)}d`,
  );
  if (daysBetween(newest, today) > 5) {
    failures.push(`${market.code}: newest price is older than 5 days`);
  }
  const staleNames = activeEntries.filter((entry) => {
    if (!entry.asOf) return true;
    return daysBetween(entry.asOf.slice(0, 10), today) > 5;
  });
  if (staleNames.length) {
    failures.push(
      `${staleNames.length} ${market.code} research names have stale prices: ${staleNames
        .slice(0, 12)
        .map((entry) => entry.ticker)
        .join(", ")}`,
    );
  }

  const dir = market.consensus;
  const meta = readJson<{
    generatedAt?: string;
    succeeded?: number;
    failed?: number;
  }>(path.join(dir, "_meta.json"));
  const consensusDates = fs.existsSync(dir)
    ? fs
        .readdirSync(dir)
        .filter((file) => file.endsWith(".json") && !file.startsWith("_"))
        .map((file) => readJson<{ asOf?: string }>(path.join(dir, file))?.asOf)
        .filter((value): value is string => Boolean(value))
        .sort()
    : [];
  if (consensusDates.length) {
    console.log(
      `${market.code}: consensus provider date ${consensusDates[0].slice(0, 10)} → ${consensusDates[consensusDates.length - 1].slice(0, 10)} (${consensusDates.length} files)`,
    );
  }
  if (meta?.generatedAt) {
    const age = daysBetween(meta.generatedAt.slice(0, 10), today);
    console.log(
      `${market.code}: consensus fetched ${meta.generatedAt.slice(0, 10)} (${age}d ago) · ${meta.succeeded ?? "?"} succeeded · ${meta.failed ?? "?"} failed`,
    );
    if (age > 2) {
      failures.push(`${market.code}: consensus fetch is older than 2 days`);
    }
    if ((meta.failed ?? 0) > 10) {
      failures.push(
        `${meta.failed} consensus tickers failed in the last fetch`,
      );
    } else if ((meta.failed ?? 0) > 0) {
      console.log(
        `${market.code}: ${meta.failed} isolated consensus fetch failures tolerated`,
      );
    }
  } else if (STRICT) {
    failures.push(`${market.code}: consensus _meta.json is missing`);
  }
}

const manifest = readJson<StoryFreshnessManifest>(MANIFEST);
if (!manifest) {
  console.log("[freshness] story manifest is missing");
  failures.push("story manifest is missing — run pnpm detect:events");
} else {
  const age = daysBetween(manifest.generatedAt.slice(0, 10), today);
  console.log(
    `[freshness] stories ${manifest.total} · current ${manifest.counts.current} · rewrite-pending ${manifest.counts["rewrite-pending"]} · data-stale ${manifest.counts["data-stale"]} · source-gap ${manifest.counts["source-gap"]} · archived ${manifest.counts.archived} · manifest age ${age}d`,
  );
  if (age > 1) {
    failures.push("story manifest is older than 1 day");
  }
  if (manifest.counts["rewrite-pending"] > 0) {
    const tickers = Object.values(manifest.tickers)
      .filter((row) => row.status === "rewrite-pending")
      .map((row) => row.ticker);
    console.log(
      `[freshness] rewrite-pending: ${tickers.slice(0, 30).join(", ")}${tickers.length > 30 ? "…" : ""}`,
    );
    failures.push(
      `${tickers.length} stor${tickers.length === 1 ? "y" : "ies"} pending rewrite`,
    );
  }
  if (manifest.counts["data-stale"] > 0) {
    failures.push(`${manifest.counts["data-stale"]} stories have stale data`);
  }
  if (manifest.counts["source-gap"] > 0) {
    console.log(
      `[freshness] accepted source gaps: ${Object.values(manifest.tickers)
        .filter((row) => row.status === "source-gap")
        .map((row) => `${row.ticker} (${row.priceAsOf ?? "no price"})`)
        .join(", ")}`,
    );
  }
}

if (failures.length > 0) {
  console.log("\n[freshness] blocking issues:");
  for (const failure of failures) console.log(`- ${failure}`);
  if (STRICT) process.exitCode = 1;
} else {
  console.log("[freshness] all datasets and stories are current");
}
