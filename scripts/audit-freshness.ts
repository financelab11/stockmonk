/**
 * Reports how stale each dataset is. Read-only.
 *
 * Run: pnpm audit:freshness
 */
import fs from "node:fs";
import path from "node:path";

type UniverseEntry = { ticker: string; asOf?: string | null };

const MARKETS = [
  {
    code: "US",
    stocks: "public/data/stocks.json",
    consensus: "data/consensus",
  },
];

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

let stale = 0;

for (const market of MARKETS) {
  const entries = readJson<UniverseEntry[]>(market.stocks) ?? [];
  const dates = entries
    .map((entry) => entry.asOf?.slice(0, 10))
    .filter((value): value is string => Boolean(value))
    .sort();
  if (!dates.length) {
    console.log(`${market.code}: no price dates`);
    stale += 1;
    continue;
  }
  const oldest = dates[0];
  const newest = dates[dates.length - 1];
  const median = dates[Math.floor(dates.length / 2)];
  const fresh = dates.filter((date) => daysBetween(date, today) <= 7).length;
  console.log(
    `${market.code}: ${entries.length} names · prices ${oldest} → ${newest} (median ${median}) · ${fresh}/${entries.length} within 7 days · newest age ${daysBetween(newest, today)}d`,
  );
  if (daysBetween(newest, today) > 3) stale += 1;

  const dir = market.consensus;
  if (fs.existsSync(dir)) {
    const consensusDates = fs
      .readdirSync(dir)
      .filter((file) => file.endsWith(".json"))
      .map((file) => readJson<{ asOf?: string }>(path.join(dir, file))?.asOf)
      .filter((value): value is string => Boolean(value))
      .sort();
    if (consensusDates.length) {
      console.log(
        `${market.code}: consensus ${consensusDates[0].slice(0, 10)} → ${consensusDates[consensusDates.length - 1].slice(0, 10)} (${consensusDates.length} files)`,
      );
    }
  }
}

if (stale > 0) {
  console.log(`[freshness] ${stale} market(s) older than 3 days`);
  process.exitCode = 1;
} else {
  console.log("[freshness] all markets within 3 days");
}
