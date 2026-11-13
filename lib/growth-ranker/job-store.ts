import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { GROWTH_RANKER } from "@/config/growth-ranker";
import {
  jobSchema,
  type ForecastResult,
  type Job,
  type JobCounts,
  type JobItem,
  type JobSettings,
  type JobSummary,
} from "./types";

const JOB_DIR =
  process.env[GROWTH_RANKER.jobDirEnv] ??
  path.join(os.tmpdir(), "stockmonk-growth-ranker", "jobs");

async function ensureDir(): Promise<void> {
  await fs.mkdir(JOB_DIR, { recursive: true });
}

function jobPath(id: string): string {
  return path.join(JOB_DIR, `${id}.json`);
}

export function computeCounts(items: JobItem[]): JobCounts {
  return {
    total: items.length,
    queued: items.filter((item) => item.status === "queued").length,
    running: items.filter(
      (item) => item.status === "fetching" || item.status === "analyzing",
    ).length,
    done: items.filter((item) => item.status === "done").length,
    failed: items.filter((item) => item.status === "failed").length,
    skipped: items.filter((item) => item.status === "skipped").length,
  };
}

export async function createJob(
  rows: Array<{ rowNumber: number; ticker: string; name: string }>,
  settings: JobSettings,
): Promise<Job> {
  await ensureDir();
  const now = new Date().toISOString();
  const items: JobItem[] = rows.map((row) => ({
    rowNumber: row.rowNumber,
    ticker: row.ticker,
    name: row.name,
    status: "queued",
    method: null,
    cagr: null,
    error: null,
    updatedAt: now,
  }));
  const job: Job = {
    id: randomUUID(),
    createdAt: now,
    updatedAt: now,
    status: "queued",
    settings,
    items,
    counts: computeCounts(items),
    results: [],
    errors: [],
  };
  await saveJob(job);
  return job;
}

const WRITE_QUEUE = new Map<string, Promise<void>>();

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function renameWithRetry(source: string, target: string): Promise<void> {
  let lastError: unknown;
  for (let attempt = 0; attempt < 6; attempt += 1) {
    try {
      await fs.rename(source, target);
      return;
    } catch (error) {
      lastError = error;
      const code = (error as NodeJS.ErrnoException).code;
      if (!["EPERM", "EBUSY", "EACCES", "ENOENT"].includes(code ?? "")) throw error;
      await sleep(20 * 2 ** attempt);
    }
  }
  throw lastError;
}

async function writeJob(job: Job): Promise<void> {
  await ensureDir();
  const next: Job = {
    ...job,
    updatedAt: new Date().toISOString(),
    counts: computeCounts(job.items),
  };
  const target = jobPath(job.id);
  const temporary = `${target}.${randomUUID()}.tmp`;
  await fs.writeFile(temporary, JSON.stringify(next), "utf8");
  await renameWithRetry(temporary, target);
}

/** Serialises writes per job so concurrent workers cannot interleave snapshots. */
export function saveJob(job: Job): Promise<void> {
  const previous = WRITE_QUEUE.get(job.id) ?? Promise.resolve();
  const next = previous.catch(() => undefined).then(() => writeJob(job));
  const chained = next.finally(() => {
    if (WRITE_QUEUE.get(job.id) === chained) WRITE_QUEUE.delete(job.id);
  });
  WRITE_QUEUE.set(job.id, chained);
  return next;
}

export async function readJob(id: string): Promise<Job | null> {
  if (!/^[a-f0-9-]{36}$/i.test(id)) return null;
  try {
    const raw = JSON.parse(await fs.readFile(jobPath(id), "utf8")) as unknown;
    const parsed = jobSchema.safeParse(raw);
    if (!parsed.success) return null;
    const job = parsed.data;
    const idleMs = Date.now() - new Date(job.updatedAt).getTime();
    if (
      (job.status === "running" || job.status === "queued") &&
      idleMs > GROWTH_RANKER.staleJobMs
    ) {
      const stale: Job = {
        ...job,
        status: "failed",
        errors: [
          ...job.errors,
          "Job stopped updating and was marked failed. Re-run the batch to continue.",
        ],
      };
      await saveJob(stale);
      return stale;
    }
    return job;
  } catch {
    return null;
  }
}

export function toSummary(job: Job): JobSummary {
  return {
    id: job.id,
    createdAt: job.createdAt,
    updatedAt: job.updatedAt,
    status: job.status,
    settings: job.settings,
    items: job.items,
    counts: job.counts,
    errors: job.errors,
  };
}

export function replaceResult(job: Job, result: ForecastResult): void {
  job.results = [...job.results.filter((item) => item.ticker !== result.ticker), result];
}

export async function listRecentJobs(limit = 5): Promise<JobSummary[]> {
  await ensureDir();
  const files = (await fs.readdir(/*turbopackIgnore: true*/ JOB_DIR)).filter((name) =>
    name.endsWith(".json"),
  );
  const jobs: Job[] = [];
  for (const file of files.slice(-limit * 3)) {
    const job = await readJob(file.replace(/\.json$/, ""));
    if (job) jobs.push(job);
  }
  return jobs
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit)
    .map(toSummary);
}
