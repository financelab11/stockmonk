import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import {
  marketsmithProfileSchema,
  type MarketsmithProfile,
} from "@/lib/schemas";

const PROFILE_DIR = path.join(process.cwd(), "data", "india", "profiles");

/**
 * Reads and validates one company profile. Cached per render pass so the page
 * and its metadata do not parse the same JSON file twice.
 */
export const readMarketsmithProfile = cache(
  (ticker: string): MarketsmithProfile | null => {
    try {
      const file = path.join(PROFILE_DIR, `${ticker.toUpperCase()}.json`);
      return marketsmithProfileSchema.parse(JSON.parse(fs.readFileSync(file, "utf8")));
    } catch {
      return null;
    }
  },
);
