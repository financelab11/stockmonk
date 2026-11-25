import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

/**
 * Lightweight data-date helper for the root layout and discover page. Keeping
 * it separate from lib/data stops the whole research dataset from being
 * traced into every serverless function.
 */
export const getLatestDataDate = cache((): string | null => {
  try {
    const raw = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), "public", "data", "stocks.json"),
        "utf8",
      ),
    ) as Array<{ asOf?: string | null }>;
    if (!Array.isArray(raw)) return null;
    return (
      raw
        .map((entry) => entry.asOf)
        .filter((date): date is string => Boolean(date))
        .sort()
        .at(-1) ?? null
    );
  } catch {
    return null;
  }
});
