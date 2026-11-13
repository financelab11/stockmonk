import { NextResponse } from "next/server";
import { readJob } from "@/lib/growth-ranker/job-store";
import { toSummary } from "@/lib/growth-ranker/job-store";
import { runningJobIds } from "@/lib/growth-ranker/runner";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const job = await readJob(id);
  if (!job) return NextResponse.json({ error: "Job not found." }, { status: 404 });
  return NextResponse.json({
    job: toSummary(job),
    inProcess: runningJobIds().includes(job.id),
  });
}
