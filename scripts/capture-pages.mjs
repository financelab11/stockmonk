import { chromium } from "@playwright/test";
import fs from "node:fs/promises";

const pages = [
  ["home", "/"],
  ["discover", "/discover"],
  ["all-stocks", "/discover/all-stocks"],
  ["framework", "/framework"],
  ["article-nvda", "/stocks/NVDA"],
  ["article-jpm", "/stocks/JPM"],
  ["watchlist", "/watchlist"],
];

const widths = [1280, 375];

const browser = await chromium.launch();
await fs.mkdir("public/screenshots", { recursive: true });

for (const width of widths) {
  const context = await browser.newContext({
    viewport: { width, height: width === 375 ? 812 : 900 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  for (const [name, path] of pages) {
    await page.goto(`http://127.0.0.1:3000${path}`, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = "auto";
      for (let y = 0; y < document.body.scrollHeight; y += 450) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 220));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(2200);
    await page.addStyleTag({
      content:
        "*{content-visibility:visible !important;contain-intrinsic-size:auto !important}",
    });
    await page.waitForTimeout(300);
    await page.screenshot({
      path: `public/screenshots/${name}-${width}.png`,
      fullPage: true,
    });
    console.log(`captured ${name}-${width}`);
  }
  await context.close();
}

await browser.close();
