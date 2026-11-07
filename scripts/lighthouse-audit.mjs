import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const lighthouse = path.join(
  "node_modules",
  ".pnpm",
  "lighthouse@13.6.0_proxy-agent@6.5.0",
  "node_modules",
  "lighthouse",
  "cli",
  "index.js",
);

const routes = [
  "/",
  "/discover",
  "/discover/all-stocks",
  "/newsfeed",
  "/framework",
  "/stocks/NVDA",
  "/stocks/MSFT",
  "/stocks/JPM",
  "/watchlist",
];

fs.mkdirSync(".lighthouseci", { recursive: true });

for (const route of routes) {
  const safe = route === "/" ? "home" : route.replace(/[^a-z0-9]+/gi, "-");
  const output = `.lighthouseci/audit-${safe}.json`;
  const result = spawnSync(
    process.execPath,
    [
      lighthouse,
      `http://127.0.0.1:3000${route}`,
      "--chrome-flags=--headless=new --no-sandbox --disable-gpu",
      "--only-categories=performance,accessibility,best-practices,seo",
      "--output=json",
      `--output-path=${output}`,
      "--quiet",
    ],
    { stdio: "pipe", encoding: "utf8" },
  );
  if (result.status !== 0) {
    console.log(route, "FAILED", result.stderr?.slice(0, 500));
    continue;
  }
  const report = JSON.parse(fs.readFileSync(output, "utf8"));
  const scores = Object.fromEntries(
    Object.entries(report.categories).map(([key, value]) => [key, value.score]),
  );
  console.log(
    route,
    JSON.stringify(scores),
    "LCP",
    report.audits["largest-contentful-paint"]?.displayValue,
    "TBT",
    report.audits["total-blocking-time"]?.displayValue,
  );
}
