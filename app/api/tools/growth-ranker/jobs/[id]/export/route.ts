import { readJob } from "@/lib/growth-ranker/job-store";
import { rankResults, resultsToCsv } from "@/lib/growth-ranker/rank";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const job = await readJob(id);
  if (!job) return new Response("Job not found.", { status: 404 });

  const format = new URL(request.url).searchParams.get("format") === "json" ? "json" : "csv";
  const safeName = `growth-ranker-${job.id.slice(0, 8)}.${format}`;

  if (format === "json") {
    return new Response(JSON.stringify({ job }, null, 2), {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "content-disposition": `attachment; filename="${safeName}"`,
      },
    });
  }

  const csv = resultsToCsv(rankResults(job.results), job.settings.fxRate);
  return new Response(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="${safeName}"`,
    },
  });
}
