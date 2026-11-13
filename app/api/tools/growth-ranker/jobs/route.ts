import { NextResponse } from "next/server";
import { z } from "zod";
import { GROWTH_RANKER } from "@/config/growth-ranker";
import { getIndiaUniverseByTicker } from "@/lib/india-data";
import { getFxRate, thresholdInInr } from "@/lib/growth-ranker/fx";
import { createJob, listRecentJobs, toSummary } from "@/lib/growth-ranker/job-store";
import { startJob } from "@/lib/growth-ranker/runner";
import { thresholdUnitSchema } from "@/lib/growth-ranker/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const bodySchema = z.object({
  rows: z
    .array(
      z.object({
        rowNumber: z.number().int().positive(),
        ticker: z.string().min(1),
        name: z.string().min(1),
      }),
    )
    .min(1)
    .max(GROWTH_RANKER.maxRows),
  settings: z.object({
    thresholdValue: z.number().positive().max(10_000_000),
    thresholdUnit: thresholdUnitSchema,
    minAnalysts: z.number().int().min(1).max(50),
    divergenceFlagPct: z.number().positive().max(1),
  }),
});

export async function GET() {
  return NextResponse.json({ jobs: await listRecentJobs(5) });
}

export async function POST(request: Request) {
  const fx = getFxRate();
  if (!fx) {
    return NextResponse.json(
      { error: "No dated USD/INR rate is configured. Add data/fx/usd-inr.json or set the environment override." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid job payload." }, { status: 400 });
  }

  const threshold = thresholdInInr(
    parsed.data.settings.thresholdValue,
    parsed.data.settings.thresholdUnit,
    fx.rate,
  );
  const rows = parsed.data.rows.filter((row) => row.ticker.trim() && row.name.trim());
  const universe = getIndiaUniverseByTicker();
  const eligible = rows.filter((row) => {
    const entry = universe.get(row.ticker.toUpperCase());
    return entry?.marketCap != null && entry.marketCap >= threshold;
  });
  if (!eligible.length) {
    return NextResponse.json(
      { error: "No companies pass the market-cap threshold on the server." },
      { status: 400 },
    );
  }

  const job = await createJob(eligible, {
    thresholdValue: parsed.data.settings.thresholdValue,
    thresholdUnit: parsed.data.settings.thresholdUnit,
    thresholdInr: threshold,
    fxRate: fx.rate,
    fxAsOf: fx.asOf,
    minAnalysts: parsed.data.settings.minAnalysts,
    divergenceFlagPct: parsed.data.settings.divergenceFlagPct,
  });
  startJob(job.id);
  return NextResponse.json({ job: toSummary(job) }, { status: 201 });
}
