import { NextResponse } from "next/server";
import { applyScreenerFilters, parseScreenerParams } from "@/lib/screener-filters";
import { getScreenerRows } from "@/lib/screener-data";

export const dynamic = "force-dynamic";

/** Live match count for the filter sidebar without shipping every row to the client. */
export function GET(request: Request) {
  const searchParams = Object.fromEntries(
    new URL(request.url).searchParams.entries(),
  );
  const params = parseScreenerParams(searchParams);
  const count = applyScreenerFilters(getScreenerRows(), params).length;
  return NextResponse.json(
    { count },
    { headers: { "Cache-Control": "no-store" } },
  );
}
