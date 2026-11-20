import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { logoManifestSchema, type LogoManifest } from "@/lib/schemas";

const MANIFEST = path.join(process.cwd(), "data", "india", "logos.json");

export const readLogoManifest = cache((): LogoManifest | null => {
  try {
    return logoManifestSchema.parse(
      JSON.parse(fs.readFileSync(MANIFEST, "utf8")),
    );
  } catch {
    return null;
  }
});

/** Public URL for a company logo, or null when none was downloaded. */
export function logoUrl(ticker: string): string | null {
  const entry = readLogoManifest()?.logos[ticker.toUpperCase()];
  return entry ? `/logos/india/${entry.file}` : null;
}
