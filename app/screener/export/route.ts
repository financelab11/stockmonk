import { NextResponse } from "next/server";
import {
  applyScreenerFilters,
  parseScreenerParams,
  SCREENER_COLUMNS,
} from "@/lib/screener-filters";
import { getScreenerRows } from "@/lib/screener-data";

function escape(value: unknown): string {
  const text = value == null ? "" : String(value);
  return `"${text.replaceAll('"', '""')}"`;
}

export function GET(request: Request) {
  const searchParams = Object.fromEntries(new URL(request.url).searchParams.entries());
  const params = parseScreenerParams(searchParams);
  const rows = applyScreenerFilters(getScreenerRows(), params);
  const columns = SCREENER_COLUMNS.filter((column) => params.cols.includes(column.key));

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
