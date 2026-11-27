import { expect, test } from "@playwright/test";

const ROUTES = [
  "/",
  "/portfolio",
  "/portfolio/ai-infrastructure-leaders",
  "/portfolio/ai-infrastructure-leaders?tab=overview",
  "/portfolio/ai-infrastructure-leaders?tab=constituents",
  "/portfolio/ai-infrastructure-leaders/report",
  "/discover",
  "/discover/all-stocks",
  "/screener",
  "/framework",
  "/stocks/NVDA",
  "/stocks/MSFT",
  "/stocks/JPM",
  "/stocks/AMD",
  "/stocks/NVDA/scores",
  "/framework/scores",
  "/watchlist",
  "/about",
  "/privacy",
  "/terms",
  "/editorial-guidelines",
  "/data-sources",
  "/offline",
];

test.describe("route smoke tests", () => {
  for (const route of ROUTES) {
    test(`${route} renders without console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      page.on("pageerror", (error) => errors.push(error.message));

      const response = await page.goto(route, { waitUntil: "networkidle" });
      expect(response?.status(), route).toBeLessThan(400);
      await expect(page.locator("h1").first()).toBeVisible();
      await expect(
        page
          .getByText(/For informational and educational purposes only/i)
          .first(),
      ).toBeVisible();
      expect(errors, `${route} console errors`).toEqual([]);
    });
  }

  test("unknown route returns the not-found page", async ({ page }) => {
    const response = await page.goto("/stocks/NOPE", {
      waitUntil: "networkidle",
    });
    expect(response?.status()).toBe(404);
    await expect(page.getByText(/not in the library/i)).toBeVisible();
  });

  test("unknown portfolio returns a real 404", async ({ page }) => {
    const response = await page.goto("/portfolio/not-a-real-portfolio", {
      waitUntil: "networkidle",
    });
    expect(response?.status()).toBe(404);
    await expect(
      page.getByText(/model portfolio is not in the library/i),
    ).toBeVisible();
  });

  test("data health endpoint reports the freshness manifest", async ({
    request,
  }) => {
    const response = await request.get("/api/health/data");
    expect([200, 503]).toContain(response.status());
    const body = await response.json();
    expect(body.stories.total).toBe(500);
    expect(body.prices.total).toBe(500);
    expect(Array.isArray(body.problems)).toBe(true);
  });

  test("legacy India and GCC routes redirect to the US app", async ({
    request,
  }) => {
    for (const path of ["/india", "/gcc", "/tools/growth-ranker"]) {
      const response = await request.get(path, { maxRedirects: 0 });
      expect([301, 308], path).toContain(response.status());
    }
  });
});
