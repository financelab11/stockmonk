import { NextResponse } from "next/server";
import {
  applyScreenerFilters,
  parseScreenerParams,
  SCREENER_COLUMNS,
} from "@/lib/screener-filters";
import { getScreenerRows } from "@/lib/screener-data";

export const dynamic = "force-dynamic";

function escape(value: unknown): string {
  const text = value == null ? "" : String(value);
  return `"${text.replaceAll('"', '""')}"`;
}

/**
 * Single route handler for the US screener exports and the live count, keeping
 * the deployment within Vercel Hobby's serverless-function budget.
 *
 * Actions: screener-count | screener-export
 */
export function GET(
  request: Request,
  { params }: { params: Promise<{ action: string }> },
) {
  return params.then(({ action }) => {
    const searchParams = Object.fromEntries(
      new URL(request.url).searchParams.entries(),
    );

    const filters = parseScreenerParams(searchParams);
    const rows = applyScreenerFilters(getScreenerRows(), filters);

    if (action === "screener-count") {
      return NextResponse.json(
        { count: rows.length },
        { headers: { "Cache-Control": "no-store" } },
      );
    }

    if (action === "screener-export") {
      const columns = SCREENER_COLUMNS.filter((column) => filters.cols.includes(column.key));
      const header = [
        "Rank",
        "Ticker",
        "Company",
        "Group",
        ...columns.map((column) => column.label),
      ];
      const lines = rows.map((row) => [
        row.rank,
        row.ticker,
        row.name,
        row.group,
        ...columns.map((column) => column.get(row)),
      ]);
      const csv = [header, ...lines]
        .map((line) => line.map(escape).join(","))
        .join("\n");
      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": 'attachment; filename="stockmonk-us-screener.csv"',
          "Cache-Control": "no-store",
        },
      });
    }

    return NextResponse.json({ error: "Unknown data action" }, { status: 404 });
  });
}
