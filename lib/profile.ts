import "server-only";

import fs from "node:fs";
import path from "node:path";
import {
  marketsmithProfileSchema,
  type MarketsmithProfile,
} from "@/lib/schemas";

const PROFILE_DIR = path.join(process.cwd(), "data", "india", "profiles");

export function readMarketsmithProfile(ticker: string): MarketsmithProfile | null {
  try {
    const file = path.join(PROFILE_DIR, `${ticker.toUpperCase()}.json`);
    return marketsmithProfileSchema.parse(JSON.parse(fs.readFileSync(file, "utf8")));
  } catch {
    return null;
  }
}
