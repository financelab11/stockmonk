/**
 * Writes robots.txt and sitemap.xml as static assets. Keeping them out of the
 * App Router avoids two extra serverless functions on the Vercel Hobby plan.
 *
 * Run: pnpm build:seo
 */
import fs from "node:fs";
import path from "node:path";
import { ALL_TICKERS, BENCHMARK_TICKER } from "../config/universe";
import { SITE } from "../lib/constants";

const PUBLIC = path.join(process.cwd(), "public");
const now = new Date().toISOString().slice(0, 10);

const staticRoutes: Array<{
  path: string;
  changeFrequency: string;
  priority: string;
}> = [
  { path: "/", changeFrequency: "daily", priority: "1" },
  { path: "/discover", changeFrequency: "daily", priority: "0.9" },
  { path: "/discover/all-stocks", changeFrequency: "daily", priority: "0.8" },
  { path: "/screener", changeFrequency: "daily", priority: "0.9" },
  { path: "/framework", changeFrequency: "monthly", priority: "0.7" },
  { path: "/framework/scores", changeFrequency: "monthly", priority: "0.7" },
  { path: "/watchlist", changeFrequency: "monthly", priority: "0.4" },
  { path: "/about", changeFrequency: "yearly", priority: "0.4" },
  { path: "/privacy", changeFrequency: "yearly", priority: "0.2" },
  { path: "/terms", changeFrequency: "yearly", priority: "0.2" },
  { path: "/editorial-guidelines", changeFrequency: "yearly", priority: "0.3" },
  { path: "/data-sources", changeFrequency: "monthly", priority: "0.4" },
];

const stockRoutes = ALL_TICKERS.filter(
  (ticker) => ticker !== BENCHMARK_TICKER,
).map((ticker) => ({
  path: `/stocks/${ticker}`,
  changeFrequency: "weekly",
  priority: "0.8",
}));

const urls = [...staticRoutes, ...stockRoutes]
  .map(
    (route) =>
      `  <url><loc>${SITE.url}${route.path}</loc><lastmod>${now}</lastmod><changefreq>${route.changeFrequency}</changefreq><priority>${route.priority}</priority></url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const robots = [
  "User-agent: *",
  "Allow: /",
  "Disallow: /serwist/",
  "Disallow: /offline",
  "Disallow: /_next/",
  "",
  `Sitemap: ${SITE.url}/sitemap.xml`,
  `Host: ${SITE.url}`,
  "",
].join("\n");

fs.mkdirSync(PUBLIC, { recursive: true });
fs.writeFileSync(path.join(PUBLIC, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(PUBLIC, "robots.txt"), robots, "utf8");
console.log(`[seo] wrote ${staticRoutes.length + stockRoutes.length} URLs`);
