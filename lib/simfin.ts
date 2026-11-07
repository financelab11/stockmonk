import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { setTimeout as sleep } from "node:timers/promises";

const BASE_URL = "https://backend.simfin.com/api/v3";
const CACHE_ROOT = path.join(process.cwd(), "data", "raw", "simfin");
const MIN_INTERVAL_MS = 550; // free tier: 2 requests/second

let lastRequestAt = 0;
let queue: Promise<unknown> = Promise.resolve();

export type SimfinParams = Record<string, string | number | boolean | undefined>;

function cachePath(key: string): string {
  const safe = key.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 180);
  return path.join(CACHE_ROOT, `${safe}.json`);
}

function requestKey(pathname: string, params: SimfinParams): string {
  const sorted = Object.entries(params)
    .filter(([, v]) => v !== undefined)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${String(v)}`)
    .join("&");
  const hash = createHash("sha1").update(`${pathname}?${sorted}`).digest("hex").slice(0, 10);
  const label = pathname.split("/").filter(Boolean).slice(-2).join("-");
  return `${label}-${hash}`;
}

async function throttle(): Promise<void> {
  const run = queue.then(async () => {
    const wait = Math.max(0, lastRequestAt + MIN_INTERVAL_MS - Date.now());
    if (wait > 0) await sleep(wait);
    lastRequestAt = Date.now();
  });
  queue = run.catch(() => undefined);
  await run;
}

export type SimfinOptions = {
  /** Re-download even if a cached response exists. */
  force?: boolean;
  /** Max retries for 429/5xx. */
  retries?: number;
};

/**
 * Low-level SimFin GET with disk cache, request spacing and exponential
 * back-off. Never call this from client code: the API key is server-only.
 */
export async function simfinGet<T>(
  pathname: string,
  params: SimfinParams = {},
  options: SimfinOptions = {},
): Promise<T> {
  const key = requestKey(pathname, params);
  const file = cachePath(key);
  if (!options.force) {
    try {
      const cached = await fs.readFile(file, "utf8");
      return JSON.parse(cached) as T;
    } catch {
      // cache miss
    }
  }

  const apiKey = process.env.SIMFIN_API_KEY;
  if (!apiKey) throw new Error("SIMFIN_API_KEY is not set. Add it to .env.local (server/build only).");

  const search = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined) search.set(k, String(v));
  }
  const url = `${BASE_URL}${pathname}${search.size ? `?${search.toString()}` : ""}`;

  const retries = options.retries ?? 5;
  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt++) {
    await throttle();
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `api-key ${apiKey}`,
          Accept: "application/json",
          "User-Agent": "Stockmonk/1.0 (research data pipeline; contact@stockmonk.app)",
        },
        signal: AbortSignal.timeout(120_000),
      });
      if (res.status === 429 || res.status >= 500) {
        const wait = 1500 * 2 ** attempt;
        console.warn(`[simfin] ${res.status} for ${pathname}; retrying in ${wait}ms`);
        await sleep(wait);
        continue;
      }
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(`SimFin ${res.status} ${res.statusText}: ${body.slice(0, 300)}`);
      }
      const json = (await res.json()) as T;
      await fs.mkdir(path.dirname(file), { recursive: true });
      await fs.writeFile(file, JSON.stringify(json), "utf8");
      return json;
    } catch (error) {
      lastError = error;
      if (attempt === retries) break;
      await sleep(1000 * 2 ** attempt);
    }
  }
  throw new Error(`SimFin request failed after ${retries + 1} attempts: ${String(lastError)}`);
}

export async function simfinListCompanies(): Promise<unknown> {
  return simfinGet("/companies/list", {}, {});
}

export async function simfinGeneral(tickers: string[]): Promise<unknown> {
  return simfinGet("/companies/general/compact", {
    ticker: tickers.join(","),
    market: "us",
  });
}

export async function simfinPrices(
  tickers: string[],
  opts: { start?: string; end?: string; ratios?: boolean } = {},
): Promise<unknown> {
  return simfinGet("/companies/prices/compact", {
    ticker: tickers.join(","),
    market: "us",
    start: opts.start,
    end: opts.end,
    ratios: opts.ratios ? "true" : undefined,
  });
}

export async function simfinStatements(
  tickers: string[],
  opts: { statements: string; start?: string; periods?: string } = { statements: "PL,BS,CF,DERIVED" },
): Promise<unknown> {
  return simfinGet("/companies/statements/compact", {
    ticker: tickers.join(","),
    market: "us",
    statements: opts.statements,
    period: opts.periods ?? "Q1,Q2,Q3,Q4,FY",
    start: opts.start,
  });
}

export function chunk<T>(items: readonly T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}
