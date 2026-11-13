import { NextResponse } from "next/server";
import { z } from "zod";
import { GROWTH_RANKER } from "@/config/growth-ranker";
import { resolveRows } from "@/lib/growth-ranker/resolve";
import { uploadMappingSchema, uploadRowSchema } from "@/lib/growth-ranker/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const bodySchema = z.object({
  rows: z.array(uploadRowSchema).min(1).max(GROWTH_RANKER.maxRows),
  mapping: uploadMappingSchema,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bodySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid rows or column mapping." }, { status: 400 });
    }
    if (!parsed.data.mapping.ticker && !parsed.data.mapping.name) {
      return NextResponse.json(
        { error: "Map at least a ticker or company-name column." },
        { status: 400 },
      );
    }
    const rows = resolveRows(parsed.data.rows, parsed.data.mapping);
    return NextResponse.json({
      rows,
      counts: {
        total: rows.length,
        matched: rows.filter((row) => row.status === "matched").length,
        ambiguous: rows.filter((row) => row.status === "ambiguous").length,
        unmatched: rows.filter((row) => row.status === "unmatched").length,
      },
    });
  } catch {
    return NextResponse.json({ error: "Could not resolve rows." }, { status: 400 });
  }
}
