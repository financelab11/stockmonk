import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import type { StoryFreshnessManifest } from "@/lib/story-freshness";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function readManifest(): StoryFreshnessManifest | null {
  try {
    return JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), "data", "story-freshness.json"),
        "utf8",
      ),
    ) as StoryFreshnessManifest;
  } catch {
    return null;
  }
}

function readConsensusMeta(): { generatedAt?: string } | null {
  try {
    return JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), "data", "consensus", "_meta.json"),
        "utf8",
      ),
    ) as { generatedAt?: string };
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

/** Production data-health contract for uptime checks and the daily workflow. */
export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const manifest = readManifest();
  const consensusMeta = readConsensusMeta();

  const priceDates = manifest
    ? Object.values(manifest.tickers)
        .map((row) => row.priceAsOf?.slice(0, 10))
        .filter((value): value is string => Boolean(value))
        .sort()
    : [];
  const newestPrice = priceDates.at(-1) ?? null;
  const priceAge = newestPrice ? daysBetween(newestPrice, today) : null;
  const consensusDate = consensusMeta?.generatedAt?.slice(0, 10) ?? null;
  const consensusAge = consensusDate ? daysBetween(consensusDate, today) : null;

  const problems: string[] = [];
  if (!manifest) problems.push("story freshness manifest is missing");
  if (manifest && manifest.counts["rewrite-pending"] > 0) {
    problems.push(
      `${manifest.counts["rewrite-pending"]} stories pending a rewrite`,
    );
  }
  if (manifest && manifest.counts["data-stale"] > 0) {
    problems.push(`${manifest.counts["data-stale"]} stories with stale data`);
  }
  if (priceAge == null) problems.push("no price dates in the universe");
  else if (priceAge > 3) problems.push(`newest price is ${priceAge} days old`);
  if (consensusAge == null) problems.push("consensus fetch date is missing");
  else if (consensusAge > 2) {
    problems.push(`consensus fetch is ${consensusAge} days old`);
  }

  const pending = manifest
    ? Object.values(manifest.tickers)
        .filter((row) => row.status === "rewrite-pending")
        .map((row) => row.ticker)
    : [];
  const dataStale = manifest
    ? Object.values(manifest.tickers)
        .filter((row) => row.status === "data-stale")
        .map((row) => row.ticker)
    : [];
  const sourceGaps = manifest
    ? Object.values(manifest.tickers)
        .filter((row) => row.status === "source-gap")
        .map((row) => ({ ticker: row.ticker, priceAsOf: row.priceAsOf }))
    : [];
  const archived = manifest
    ? Object.values(manifest.tickers)
        .filter((row) => row.status === "archived")
        .map((row) => ({ ticker: row.ticker, priceAsOf: row.priceAsOf }))
    : [];

  return NextResponse.json(
    {
      ok: problems.length === 0,
      generatedAt: new Date().toISOString(),
      prices: {
        newest: newestPrice,
        ageDays: priceAge,
        total: manifest?.total ?? 0,
        active: manifest ? manifest.total - (manifest.counts.archived ?? 0) : 0,
        archived: manifest?.counts.archived ?? 0,
      },
      consensus: {
        fetchedAt: consensusDate,
        ageDays: consensusAge,
      },
      stories: manifest
        ? {
            total: manifest.total,
            current: manifest.counts.current,
            rewritePending: manifest.counts["rewrite-pending"],
            dataStale: manifest.counts["data-stale"],
            sourceGap: manifest.counts["source-gap"],
            archived: manifest.counts.archived,
            pending,
            dataStaleTickers: dataStale,
            sourceGaps,
            archivedTickers: archived,
            manifestGeneratedAt: manifest.generatedAt,
          }
        : null,
      problems,
    },
    { status: problems.length === 0 ? 200 : 503 },
  );
}
