import { NextResponse } from "next/server";
import { readJob } from "@/lib/growth-ranker/job-store";
import { filterRankedRows, rankResults } from "@/lib/growth-ranker/rank";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SortKey = "cagr" | "name" | "marketcap" | "fy3" | "rank";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const job = await readJob(id);
  if (!job) return NextResponse.json({ error: "Job not found." }, { status: 404 });

  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? "";
  const method = url.searchParams.get("method") ?? "";
  const sort = (url.searchParams.get("sort") ?? "cagr") as SortKey;
  const dir = url.searchParams.get("dir") === "asc" ? "asc" : "desc";
  const page = Math.max(1, Number(url.searchParams.get("page")) || 1);
  const pageSize = Math.min(100, Math.max(10, Number(url.searchParams.get("pageSize")) || 50));

  let rows = filterRankedRows(rankResults(job.results), { q, method });
  const direction = dir === "asc" ? 1 : -1;
  rows = [...rows].sort((a, b) => {
    switch (sort) {
      case "name":
        return direction * a.name.localeCompare(b.name);
      case "marketcap":
        return direction * (a.marketCapInr - b.marketCapInr);
      case "fy3":
        return direction * (a.fy3Revenue - b.fy3Revenue);
      case "rank":
        return direction * (a.rank - b.rank);
      default:
        return direction * (a.cagrBase - b.cagrBase);
    }
  });

  const total = rows.length;
  const start = (page - 1) * pageSize;
  return NextResponse.json({
    total,
    page,
    pageSize,
    pageCount: Math.max(1, Math.ceil(total / pageSize)),
    rows: rows.slice(start, start + pageSize),
    job: {
      id: job.id,
      status: job.status,
      counts: job.counts,
      settings: job.settings,
      errors: job.errors,
    },
  });
}
