/**
 * Copies the latest 10-K document URL and CIK from each SEC file into the
 * processed ticker record. Idempotent; run after `ingest:simfin`.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { RESEARCH_TICKERS } from "../config/universe";
import { tickerDataSchema } from "../lib/schemas";

const PROCESSED = path.join(process.cwd(), "data", "processed");

type SecFile = {
  cik?: string;
  filings?: { latest10K?: { url?: string } };
};

async function readJson<T>(file: string): Promise<T | null> {
  try {
    return JSON.parse(await fs.readFile(file, "utf8")) as T;
  } catch {
    return null;
  }
}

async function main() {
  let updated = 0;
  for (const ticker of RESEARCH_TICKERS) {
    const dataFile = path.join(PROCESSED, ticker, "data.json");
    const data = await readJson<Record<string, unknown>>(dataFile);
    if (!data) continue;
    const sec = await readJson<SecFile>(path.join(PROCESSED, ticker, "sec.json"));
    const parsed = tickerDataSchema.parse({
      ...data,
      cik: data.cik ?? sec?.cik ?? null,
      latest10KUrl: sec?.filings?.latest10K?.url ?? data.latest10KUrl ?? null,
    });
    await fs.writeFile(dataFile, JSON.stringify(parsed, null, 2), "utf8");
    updated += 1;
  }
  console.log(`[backfill] updated ${updated} ticker records`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
