import { GROWTH_RANKER } from "@/config/growth-ranker";
import { loadForecastInput } from "./evidence";
import {
  attachModelSanity,
  buildAnalystForecast,
  buildDeterministicForecast,
} from "./forecast";
import { ANALYST_PROVIDER } from "./providers";
import { computeCounts, readJob, replaceResult, saveJob } from "./job-store";
import { forecastResultSchema, type ForecastResult, type Job } from "./types";

const RUNNING = new Set<string>();

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function startJob(id: string): void {
  if (RUNNING.has(id)) return;
  RUNNING.add(id);
  void executeJob(id)
    .catch((error: unknown) => {
      console.error(`[growth-ranker] job ${id} crashed`, error);
    })
    .finally(() => RUNNING.delete(id));
}

async function executeJob(id: string): Promise<void> {
  const job = await readJob(id);
  if (!job) return;
  if (job.status === "completed" || job.status === "cancelled") return;

  job.status = "running";
  await saveJob(job);

  let cursor = 0;
  let lastPersist = 0;
  const persist = async (force = false) => {
    const now = Date.now();
    if (!force && now - lastPersist < 800) return;
    lastPersist = now;
    await saveJob(job);
  };

  const workers = Math.min(GROWTH_RANKER.concurrency, Math.max(1, job.items.length));
  await Promise.all(
    Array.from({ length: workers }, async () => {
      while (cursor < job.items.length) {
        const index = cursor;
        cursor += 1;
        const item = job.items[index];
        item.status = "fetching";
        item.updatedAt = new Date().toISOString();
        await persist();

        try {
          item.status = "analyzing";
          item.updatedAt = new Date().toISOString();
          const outcome = await withRetry(() => processCompany(item.ticker), GROWTH_RANKER.retries);
          if (outcome.type === "skipped") {
            item.status = "skipped";
            item.error = outcome.reason;
          } else {
            replaceResult(job, outcome.result);
            item.status = "done";
            item.method = outcome.result.method;
            item.cagr = outcome.result.cagr_3y.base;
            item.error = null;
          }
        } catch (error) {
          item.status = "failed";
          item.error = error instanceof Error ? error.message : "Unknown error";
        }
        item.updatedAt = new Date().toISOString();
        await persist(true);
      }
    }),
  );

  const counts = computeCounts(job.items);
  job.status = counts.failed > 0 && counts.done === 0 ? "failed" : "completed";
  job.errors = [
    ...job.errors,
    ...job.items
      .filter((item) => item.status === "failed")
      .map((item) => `${item.ticker}: ${item.error ?? "failed"}`),
  ].slice(0, 50);
  await saveJob(job);
}

type Outcome =
  | { type: "done"; result: ForecastResult }
  | { type: "skipped"; reason: string };

async function withRetry<T>(fn: () => Promise<T>, retries: number): Promise<T> {
  let attempt = 0;
  for (;;) {
    try {
      return await fn();
    } catch (error) {
      if (attempt >= retries) throw error;
      attempt += 1;
      await sleep(GROWTH_RANKER.retryBaseDelayMs * 2 ** (attempt - 1));
    }
  }
}

async function processCompany(ticker: string): Promise<Outcome> {
  const loaded = loadForecastInput(ticker);
  if (!loaded.ok) {
    if (
      loaded.reason === "MARKET_CAP_UNAVAILABLE" ||
      loaded.reason === "COMPANY_NOT_FOUND"
    ) {
      return { type: "skipped", reason: loaded.reason };
    }
    throw new Error(loaded.reason);
  }

  const input = loaded.input;
  const deterministic = buildDeterministicForecast(
    input,
    GROWTH_RANKER.minConsensusAnalysts,
    GROWTH_RANKER.divergenceFlagPct,
  );

  if (!ANALYST_PROVIDER.configured()) {
    if (!deterministic.ok) {
      return {
        type: "skipped",
        reason:
          deterministic.reason === "NO_CONSENSUS"
            ? "No consensus. Configure GROWTH_RANKER_LLM_* for a bespoke analyst model."
            : deterministic.reason,
      };
    }
    return { type: "done", result: validate(deterministic.result) };
  }

  const model = await ANALYST_PROVIDER.run(
    input,
    deterministic.ok ? deterministic.result.method : "ANALYST_MODEL",
  );

  if (deterministic.ok) {
    return {
      type: "done",
      result: validate(
        attachModelSanity(deterministic.result, model, GROWTH_RANKER.divergenceFlagPct),
      ),
    };
  }

  const bespoke = buildAnalystForecast(input, model, GROWTH_RANKER.divergenceFlagPct);
  if (!bespoke) throw new Error("Bespoke model returned an invalid CAGR.");
  return { type: "done", result: validate(bespoke) };
}

function validate(result: ForecastResult): ForecastResult {
  const parsed = forecastResultSchema.safeParse(result);
  if (!parsed.success) {
    throw new Error(
      `Invalid forecast output: ${parsed.error.issues
        .slice(0, 3)
        .map((issue) => issue.message)
        .join("; ")}`,
    );
  }
  return parsed.data;
}

export function runningJobIds(): string[] {
  return [...RUNNING];
}

export async function getJobOrNull(id: string): Promise<Job | null> {
  return readJob(id);
}
