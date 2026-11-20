/**
 * Downloads a company logo for every tracker company that has a website.
 *
 * Source order: the company's own apple-touch-icon/icon link, then
 * /apple-touch-icon.png, then Google's 128px favicon service. Files land in
 * public/logos/india/<TICKER>.<ext> and a manifest is written for the app.
 *
 * Run: pnpm fetch:logos [--force]
 * Env: LOGO_CONCURRENCY (default 6), LOGO_LIMIT (sample size)
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36";
const ROOT = process.cwd();
const PROFILE_DIR = path.join(ROOT, "data", "india", "profiles");
const OUT_DIR = path.join(ROOT, "public", "logos", "india");
const MANIFEST = path.join(ROOT, "data", "india", "logos.json");
const TRACKER = path.join(ROOT, "data", "india", "earnings-tracker.json");
const CONCURRENCY = Math.max(1, Number(process.env.LOGO_CONCURRENCY ?? "6"));
const LIMIT = Number(process.env.LOGO_LIMIT ?? "0");
const TIMEOUT = 8000;
const FORCE = process.argv.includes("--force");

type Entry = { file: string; source: string; domain: string };
type Manifest = { generatedAt: string; logos: Record<string, Entry> };

const PNG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function extension(buffer: Buffer): string | null {
  if (buffer.subarray(0, 8).equals(PNG)) return "png";
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return "jpg";
  if (
    buffer.subarray(0, 4).toString() === "RIFF" &&
    buffer.subarray(8, 12).toString() === "WEBP"
  ) {
    return "webp";
  }
  if (buffer.subarray(0, 4).toString() === "GIF8") return "gif";
  if (buffer[0] === 0 && buffer[1] === 0 && buffer[2] === 1 && buffer[3] === 0)
    return "ico";
  return null;
}

function normalizeDomain(website: string | null): string | null {
  if (!website) return null;
  let value = website.trim().replace(/\s+/g, "");
  if (!value) return null;
  if (!/^https?:\/\//i.test(value))
    value = `https://${value.replace(/^\/\//, "")}`;
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    if (!host.includes(".") || host.endsWith(".local")) return null;
    return host.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function attrs(tag: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const match of tag.matchAll(
    /([a-zA-Z:-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g,
  )) {
    out[match[1].toLowerCase()] = match[3] ?? match[4] ?? match[5] ?? "";
  }
  return out;
}

function iconCandidates(html: string, base: string): string[] {
  const found: Array<{ url: string; score: number }> = [];
  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    const link = attrs(match[0]);
    const rel = (link.rel ?? "").toLowerCase();
    if (!rel.includes("icon") || !link.href) continue;
    let url: string;
    try {
      url = new URL(link.href, base).toString();
    } catch {
      continue;
    }
    if (!/^https?:/i.test(url)) continue;
    const size = Number((link.sizes ?? "").match(/(\d+)x\d+/)?.[1] ?? 0);
    const score = (rel.includes("apple-touch-icon") ? 1000 : 0) + (size || 64);
    found.push({ url, score });
  }
  const seen = new Set<string>();
  return found
    .sort((a, b) => b.score - a.score)
    .filter((entry) =>
      seen.has(entry.url) ? false : (seen.add(entry.url), true),
    )
    .map((entry) => entry.url)
    .slice(0, 3);
}

async function download(
  url: string,
): Promise<{ buffer: Buffer; ext: string } | null> {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "image/*,*/*;q=0.8" },
      redirect: "follow",
      signal: AbortSignal.timeout(TIMEOUT),
    });
    if (!response.ok) return null;
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length < 500 || buffer.length > 300_000) return null;
    const ext = extension(buffer);
    return ext ? { buffer, ext } : null;
  } catch {
    return null;
  }
}

async function homepage(
  domain: string,
): Promise<{ html: string; url: string } | null> {
  for (const scheme of ["https", "http"]) {
    try {
      const response = await fetch(`${scheme}://${domain}`, {
        headers: {
          "User-Agent": UA,
          Accept: "text/html,application/xhtml+xml",
        },
        redirect: "follow",
        signal: AbortSignal.timeout(TIMEOUT),
      });
      if (!response.ok) continue;
      const type = response.headers.get("content-type") ?? "";
      if (!type.includes("html")) continue;
      const html = (await response.text()).slice(0, 600_000);
      return { html, url: response.url };
    } catch {
      continue;
    }
  }
  return null;
}

let googleDefaultHash = "";

async function googleFavicon(
  domain: string,
): Promise<{ buffer: Buffer; ext: string } | null> {
  const image = await download(
    `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`,
  );
  if (!image) return null;
  const hash = crypto.createHash("sha256").update(image.buffer).digest("hex");
  return hash === googleDefaultHash ? null : image;
}

async function domainLogo(
  domain: string,
): Promise<{ image: { buffer: Buffer; ext: string }; source: string } | null> {
  const site = await homepage(domain);
  if (site) {
    const candidates = iconCandidates(site.html, site.url);
    candidates.push(new URL("/apple-touch-icon.png", site.url).toString());
    for (const candidate of candidates) {
      const image = await download(candidate);
      if (image)
        return {
          image,
          source: candidate.includes("apple-touch-icon")
            ? "apple-touch"
            : "site-icon",
        };
    }
  }
  const favicon = await googleFavicon(domain);
  if (favicon) return { image: favicon, source: "google-favicon" };
  return null;
}

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return null;
  }
}

async function main() {
  const tracker = readJson<{ rows: Array<{ ticker: string; name: string }> }>(
    TRACKER,
  );
  if (!tracker) throw new Error("earnings tracker missing");

  const existing = readJson<Manifest>(MANIFEST);
  const manifest: Manifest = existing ?? {
    generatedAt: new Date().toISOString(),
    logos: {},
  };

  // One domain per ticker, taken from the ingested profile.
  const targets: Array<{ ticker: string; domain: string }> = [];
  const seenTicker = new Set<string>();
  for (const row of tracker.rows) {
    const ticker = row.ticker.toUpperCase();
    const profile = readJson<{ website?: string | null }>(
      path.join(PROFILE_DIR, `${ticker}.json`),
    );
    const domain = normalizeDomain(profile?.website ?? null);
    if (domain && !seenTicker.has(ticker)) {
      seenTicker.add(ticker);
      targets.push({ ticker, domain });
    }
  }

  const pending = targets.filter(({ ticker }) => {
    if (FORCE) return true;
    const entry = manifest.logos[ticker];
    return !(entry && fs.existsSync(path.join(OUT_DIR, entry.file)));
  });
  const queue = LIMIT > 0 ? pending.slice(0, LIMIT) : pending;

  fs.mkdirSync(OUT_DIR, { recursive: true });
  googleDefaultHash = await (async () => {
    const response = await fetch(
      "https://www.google.com/s2/favicons?domain=not-a-real-company-9f8e7d.com&sz=128",
      { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(TIMEOUT) },
    ).catch(() => null);
    if (!response) return "";
    const buffer = Buffer.from(await response.arrayBuffer());
    return crypto.createHash("sha256").update(buffer).digest("hex");
  })();

  console.log(
    `[logos] ${queue.length} pending · ${targets.length} with websites · ${Object.keys(manifest.logos).length} already saved · concurrency ${CONCURRENCY}`,
  );

  const byDomain = new Map<string, Awaited<ReturnType<typeof domainLogo>>>();
  const failures: string[] = [];
  let done = 0;
  let saved = 0;

  function writeManifest() {
    manifest.generatedAt = new Date().toISOString();
    fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
  }

  async function worker() {
    for (;;) {
      const target = queue.shift();
      if (!target) return;
      try {
        let result = byDomain.get(target.domain);
        if (result === undefined) {
          result = await domainLogo(target.domain);
          byDomain.set(target.domain, result);
        }
        if (result) {
          const file = `${target.ticker}.${result.image.ext}`;
          fs.writeFileSync(path.join(OUT_DIR, file), result.image.buffer);
          manifest.logos[target.ticker] = {
            file,
            source: result.source,
            domain: target.domain,
          };
          saved += 1;
        } else {
          failures.push(target.ticker);
        }
      } catch {
        failures.push(target.ticker);
      }
      done += 1;
      if (done % 100 === 0) {
        writeManifest();
        console.log(
          `[logos] ${done}/${queue.length + done} · saved ${saved} · failed ${failures.length}`,
        );
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  writeManifest();

  if (failures.length) {
    fs.writeFileSync(
      path.join(ROOT, "data", "india", ".logo-failures.json"),
      JSON.stringify(failures, null, 2),
    );
  }

  console.log(
    `[logos] done · saved ${saved} · failed ${failures.length} · manifest ${Object.keys(manifest.logos).length} entries`,
  );
}

main();
