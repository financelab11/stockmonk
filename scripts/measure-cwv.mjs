import { chromium } from "@playwright/test";
import fs from "node:fs";

const url = process.argv[2] ?? "https://stockmonk.vercel.app/stocks/NVDA";
const label = process.argv[3] ?? "before";
const mobile = process.argv[4] !== "desktop";
const iterations = Number(process.argv[5] ?? "5");

const browser = await chromium.launch();
const results = [];

for (let run = 0; run < iterations; run += 1) {
  const context = await browser.newContext(
    mobile
      ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true }
      : { viewport: { width: 1440, height: 900 } },
  );
  const page = await context.newPage();
  const cdp = await context.newCDPSession(page);
  if (mobile) {
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    await cdp.send("Network.enable");
    await cdp.send("Network.emulateNetworkConditions", {
      offline: false,
      latency: 150,
      downloadThroughput: (1.6 * 1024 * 1024) / 8,
      uploadThroughput: (750 * 1024) / 8,
    });
  }

  await page.addInitScript(() => {
    window.__cwv = { lcp: 0, cls: 0, longTasks: 0, tbt: 0 };
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        window.__cwv.lcp = entry.startTime;
      }
    }).observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) window.__cwv.cls += entry.value;
      }
    }).observe({ type: "layout-shift", buffered: true });
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        window.__cwv.longTasks += 1;
        window.__cwv.tbt += Math.max(0, entry.duration - 50);
      }
    }).observe({ type: "longtask", buffered: true });
  });

  const started = Date.now();
  await page.goto(url, { waitUntil: "load", timeout: 90_000 });
  await page.waitForTimeout(3500);
  const metrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType("navigation")[0];
    const resources = performance.getEntriesByType("resource");
    const transfer = resources.reduce((sum, entry) => sum + (entry.transferSize || 0), 0);
    const js = resources
      .filter((entry) => entry.name.endsWith(".js") || entry.initiatorType === "script")
      .reduce((sum, entry) => sum + (entry.transferSize || 0), 0);
    const fcp = performance.getEntriesByName("first-contentful-paint")[0]?.startTime ?? null;
    return {
      lcp: window.__cwv.lcp,
      cls: window.__cwv.cls,
      tbt: window.__cwv.tbt,
      fcp,
      transferKB: Math.round((transfer + (nav?.transferSize || 0)) / 1024),
      jsKB: Math.round(js / 1024),
      domNodes: document.getElementsByTagName("*").length,
      loadMs: nav?.loadEventEnd ?? null,
      wallMs: Date.now(),
    };
  });
  metrics.wallMs = Date.now() - started;
  results.push(metrics);
  await context.close();
  console.log(`run ${run + 1}/${iterations}`, metrics);
}

await browser.close();

const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
};
const summary = {
  url,
  label,
  formFactor: mobile ? "mobile" : "desktop",
  runs: iterations,
  lcpMs: Math.round(median(results.map((r) => r.lcp))),
  cls: Number(median(results.map((r) => r.cls)).toFixed(4)),
  tbtMs: Math.round(median(results.map((r) => r.tbt))),
  fcpMs: Math.round(median(results.map((r) => r.fcp ?? 0))),
  transferKB: Math.round(median(results.map((r) => r.transferKB))),
  jsKB: Math.round(median(results.map((r) => r.jsKB))),
  domNodes: Math.round(median(results.map((r) => r.domNodes))),
};
fs.mkdirSync(".perf", { recursive: true });
fs.writeFileSync(`.perf/${label}-${mobile ? "mobile" : "desktop"}.json`, JSON.stringify({ summary, results }, null, 2));
console.log("SUMMARY", summary);
