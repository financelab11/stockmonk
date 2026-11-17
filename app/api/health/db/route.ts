import { NextResponse } from "next/server";
import { createServerSupabase } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

/** Lightweight database readiness endpoint used after migrations and deploys. */
export async function GET() {
  try {
    const supabase = await createServerSupabase();
    const { data, error } = await supabase
      .from("data_freshness")
      .select("dataset, as_of, row_count, updated_at")
      .order("dataset");
    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 503 },
      );
    }
    return NextResponse.json({ ok: true, datasets: data ?? [] });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Database unavailable",
      },
      { status: 503 },
    );
  }
}
