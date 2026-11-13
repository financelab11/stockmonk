import { NextResponse } from "next/server";
import { z } from "zod";
import { GROWTH_RANKER } from "@/config/growth-ranker";
import { getFxRate } from "@/lib/growth-ranker/fx";
import { parseDelimitedText, parseXlsx } from "@/lib/growth-ranker/parse";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const bodySchema = z.object({
  text: z.string().optional(),
  fileName: z.string().optional(),
  fileBase64: z.string().optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Provide text or a file." }, { status: 400 });
  }

  try {
    let upload;
    if (parsed.data.fileBase64) {
      const buffer = Buffer.from(parsed.data.fileBase64, "base64");
      if (buffer.length > GROWTH_RANKER.maxUploadBytes) {
        return NextResponse.json(
          { error: `File exceeds ${Math.round(GROWTH_RANKER.maxUploadBytes / 1_000_000)} MB.` },
          { status: 413 },
        );
      }
      const isZip = buffer.length > 3 && buffer[0] === 0x50 && buffer[1] === 0x4b;
      upload = isZip
        ? parseXlsx(buffer)
        : parseDelimitedText(buffer.toString("utf8"));
    } else {
      const text = parsed.data.text ?? "";
      if (!text.trim()) {
        return NextResponse.json({ error: "No rows found in the upload." }, { status: 400 });
      }
      if (text.length > GROWTH_RANKER.maxUploadBytes) {
        return NextResponse.json({ error: "Pasted text is too large." }, { status: 413 });
      }
      upload = parseDelimitedText(text);
    }

    if (!upload.rows.length) {
      return NextResponse.json(
        { error: "No data rows were found. Check the file or paste one ticker per line." },
        { status: 400 },
      );
    }

    return NextResponse.json({
      upload,
      fx: getFxRate(),
      limits: { maxRows: GROWTH_RANKER.maxRows, maxUploadBytes: GROWTH_RANKER.maxUploadBytes },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not parse the upload." },
      { status: 400 },
    );
  }
}
