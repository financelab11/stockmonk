import { NextResponse } from "next/server";
import { readJob } from "@/lib/growth-ranker/job-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string; ticker: string }> },
) {
  const { id, ticker } = await params;
  const job = await readJob(id);
  if (!job) return NextResponse.json({ error: "Job not found." }, { status: 404 });
  const result = job.results.find(
    (item) => item.ticker.toUpperCase() === ticker.toUpperCase(),
  );
  if (!result) return NextResponse.json({ error: "Result not found." }, { status: 404 });
  return NextResponse.json({ result });
}
