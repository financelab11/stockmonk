import { getGrowthRankerDataset } from "@/lib/growth-ranker/dataset";
import { rankResults, resultsToCsv } from "@/lib/growth-ranker/rank";

export const dynamic = "force-static";

export async function GET() {
  const dataset = getGrowthRankerDataset();
  const csv = resultsToCsv(rankResults(dataset.results), dataset.fx.rate);
  return new Response(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": 'attachment; filename="stockmonk-forward-revenue-growth.csv"',
    },
  });
}
