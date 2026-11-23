/**
 * SimFin bulk download.
 *
 * The Web API is credit-limited (a few companies per request), so the full US
 * universe is built from SimFin's bulk CSV exports instead. Files are cached
 * under data/raw/simfin-bulk (gitignored) and re-downloaded when missing.
 *
 * Run: pnpm ingest:bulk [--force]
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local" });
loadEnv();
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import zlib from "node:zlib";
import { pipeline } from "node:stream/promises";

const ROOT = path.join(process.cwd(), "data", "raw", "simfin-bulk");
const ZIPS = path.join(ROOT, "zips");
const CSV = path.join(ROOT, "csv");

type Dataset = {
  dataset: string;
  variant?: string;
  market: string;
};

export const DATASETS: Dataset[] = [
  { dataset: "companies", market: "us" },
  { dataset: "industries", market: "us" },
  { dataset: "shareprices", variant: "daily", market: "us" },
  { dataset: "income", variant: "annual", market: "us" },
  { dataset: "income", variant: "quarterly", market: "us" },
  { dataset: "income", variant: "ttm", market: "us" },
  { dataset: "balance", variant: "annual", market: "us" },
  { dataset: "balance", variant: "quarterly", market: "us" },
  { dataset: "cashflow", variant: "annual", market: "us" },
  { dataset: "cashflow", variant: "quarterly", market: "us" },
  { dataset: "income-banks", variant: "annual", market: "us" },
  { dataset: "income-banks", variant: "quarterly", market: "us" },
  { dataset: "balance-banks", variant: "annual", market: "us" },
  { dataset: "balance-banks", variant: "quarterly", market: "us" },
  { dataset: "cashflow-banks", variant: "annual", market: "us" },
  { dataset: "cashflow-banks", variant: "quarterly", market: "us" },
  { dataset: "income-insurance", variant: "annual", market: "us" },
  { dataset: "income-insurance", variant: "quarterly", market: "us" },
  { dataset: "balance-insurance", variant: "annual", market: "us" },
  { dataset: "balance-insurance", variant: "quarterly", market: "us" },
  { dataset: "cashflow-insurance", variant: "annual", market: "us" },
  { dataset: "cashflow-insurance", variant: "quarterly", market: "us" },
];

export function datasetName({ dataset, variant, market }: Dataset): string {
  return [market, dataset, variant].filter(Boolean).join("-");
}

export function zipPath(entry: Dataset): string {
  return path.join(ZIPS, `${datasetName(entry)}.zip`);
}

async function download(entry: Dataset, force: boolean): Promise<void> {
  const target = zipPath(entry);
  if (!force && fs.existsSync(target) && fs.statSync(target).size > 1000) {
    return;
  }
  const apiKey = process.env.SIMFIN_API_KEY;
  if (!apiKey) throw new Error("SIMFIN_API_KEY is not set");
  const params = new URLSearchParams({
    dataset: entry.dataset,
    market: entry.market,
  });
  if (entry.variant) params.set("variant", entry.variant);
  const url = `https://prod.simfin.com/api/bulk-download/s3?${params.toString()}`;
  const started = Date.now();
  const res = await fetch(url, {
    headers: {
      Authorization: `api-key ${apiKey}`,
      "User-Agent": "Stockmonk/1.0",
    },
    signal: AbortSignal.timeout(600_000),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `${entry.dataset} ${entry.variant ?? ""}: ${res.status} ${body.slice(0, 200)}`,
    );
  }
  await fsp.mkdir(ZIPS, { recursive: true });
  const temp = `${target}.part`;
  const buffer = Buffer.from(await res.arrayBuffer());
  await fsp.writeFile(temp, buffer);
  await fsp.rename(temp, target);
  console.log(
    `[bulk] ${datasetName(entry)} ${(buffer.length / 1024 / 1024).toFixed(1)}MB in ${Date.now() - started}ms`,
  );
}

type ZipEntry = {
  name: string;
  method: number;
  compressedSize: number;
  localOffset: number;
};

function readZipEntries(file: string): ZipEntry[] {
  const stat = fs.statSync(file);
  const tailSize = Math.min(stat.size, 70_000);
  const tail = Buffer.alloc(tailSize);
  const fd = fs.openSync(file, "r");
  try {
    fs.readSync(fd, tail, 0, tailSize, stat.size - tailSize);
  } finally {
    fs.closeSync(fd);
  }
  const eocd = tail.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  if (eocd < 0) throw new Error(`No end-of-central-directory in ${file}`);
  const count = tail.readUInt16LE(eocd + 10);
  const directoryOffset = tail.readUInt32LE(eocd + 16);
  const directorySize = tail.readUInt32LE(eocd + 12);
  const directory = Buffer.alloc(directorySize);
  const dirFd = fs.openSync(file, "r");
  try {
    fs.readSync(dirFd, directory, 0, directorySize, directoryOffset);
  } finally {
    fs.closeSync(dirFd);
  }
  const entries: ZipEntry[] = [];
  let offset = 0;
  for (
    let index = 0;
    index < count && offset + 46 <= directory.length;
    index += 1
  ) {
    if (directory.readUInt32LE(offset) !== 0x02014b50) break;
    const method = directory.readUInt16LE(offset + 10);
    const compressedSize = directory.readUInt32LE(offset + 20);
    const nameLength = directory.readUInt16LE(offset + 28);
    const extraLength = directory.readUInt16LE(offset + 30);
    const commentLength = directory.readUInt16LE(offset + 32);
    const localOffset = directory.readUInt32LE(offset + 42);
    const name = directory
      .subarray(offset + 46, offset + 46 + nameLength)
      .toString("utf8");
    if (!name.endsWith("/"))
      entries.push({ name, method, compressedSize, localOffset });
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

async function extract(file: string, target: string): Promise<void> {
  const entries = readZipEntries(file);
  const entry =
    entries.find((item) => item.name.endsWith(".csv")) ?? entries[0];
  if (!entry) throw new Error(`No entries in ${file}`);
  const fd = fs.openSync(file, "r");
  let start: number;
  try {
    const header = Buffer.alloc(30);
    fs.readSync(fd, header, 0, 30, entry.localOffset);
    if (header.readUInt32LE(0) !== 0x04034b50)
      throw new Error(`Bad local header in ${file}`);
    const nameLength = header.readUInt16LE(26);
    const extraLength = header.readUInt16LE(28);
    start = entry.localOffset + 30 + nameLength + extraLength;
  } finally {
    fs.closeSync(fd);
  }
  const end = start + entry.compressedSize - 1;
  const source = fs.createReadStream(file, { start, end });
  const sink = fs.createWriteStream(target);
  if (entry.method === 0) {
    await pipeline(source, sink);
  } else if (entry.method === 8) {
    await pipeline(source, zlib.createInflateRaw(), sink);
  } else {
    throw new Error(`Unsupported zip method ${entry.method} in ${file}`);
  }
}

async function main(): Promise<void> {
  const force = process.argv.includes("--force");
  await fsp.mkdir(CSV, { recursive: true });
  for (const entry of DATASETS) {
    await download(entry, force);
    const target = path.join(CSV, `${datasetName(entry)}.csv`);
    if (force || !fs.existsSync(target) || fs.statSync(target).size < 1000) {
      const started = Date.now();
      await extract(zipPath(entry), target);
      console.log(
        `[bulk] extracted ${datasetName(entry)} ${(fs.statSync(target).size / 1024 / 1024).toFixed(1)}MB in ${Date.now() - started}ms`,
      );
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
