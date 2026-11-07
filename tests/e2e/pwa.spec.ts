import { expect, test } from "@playwright/test";

test.describe("PWA and metadata", () => {
  test("manifest is valid and installable", async ({ request }) => {
    const response = await request.get("/manifest.webmanifest");
    expect(response.status()).toBe(200);
    const manifest = await response.json();
    expect(manifest.name).toBe("Stockmonk");
    expect(manifest.short_name).toBe("Stockmonk");
    expect(manifest.display).toBe("standalone");
    expect(manifest.start_url).toContain("source=pwa");
    expect(manifest.icons.length).toBeGreaterThanOrEqual(3);
    expect(manifest.icons.some((icon: { purpose?: string }) => icon.purpose === "maskable")).toBe(true);
    expect(manifest.shortcuts.length).toBeGreaterThanOrEqual(3);
    expect(manifest.categories).toContain("finance");
  });

  test("service worker and offline fallback are available", async ({ request, page }) => {
    const sw = await request.get("/serwist/sw.js");
    expect(sw.status()).toBe(200);
    expect(sw.headers()["content-type"]).toContain("javascript");

    await page.goto("/offline", { waitUntil: "networkidle" });
    await expect(page.getByRole("heading", { name: /You are offline/i })).toBeVisible();
  });

  test("sitemap, robots and RSS are served", async ({ request }) => {
    for (const path of ["/sitemap.xml", "/robots.txt", "/rss.xml"]) {
      const response = await request.get(path);
      expect(response.status(), path).toBe(200);
    }
  });

  test("does not leak the SimFin key into the client bundle", async ({ request }) => {
    const home = await request.get("/");
    const html = await home.text();
    expect(html).not.toContain("SIMFIN_API_KEY");
    expect(html).not.toContain("simfin-secret-sentinel");

    const scripts = [...html.matchAll(/src="([^"]+\.js)"/g)].map((match) => match[1]);
    for (const script of scripts.slice(0, 20)) {
      const response = await request.get(script);
      if (!response.ok()) continue;
      const body = await response.text();
      expect(body).not.toContain("simfin-secret-sentinel");
    }
  });
});
