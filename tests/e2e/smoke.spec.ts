import { expect, test } from "@playwright/test";

const ROUTES = [
  "/",
  "/discover",
  "/discover/all-stocks",
  "/india",
  "/india/all-stocks",
  "/india/stocks/KAYNES",
  "/newsfeed",
  "/framework",
  "/stocks/NVDA",
  "/stocks/MSFT",
  "/stocks/JPM",
  "/stocks/AMD",
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
        page.getByText(/For informational and educational purposes only/i).first(),
      ).toBeVisible();
      expect(errors, `${route} console errors`).toEqual([]);
    });
  }

  test("unknown route returns the not-found page", async ({ page }) => {
    const response = await page.goto("/stocks/NOPE", { waitUntil: "networkidle" });
    expect(response?.status()).toBe(404);
    await expect(page.getByText(/not in the library/i)).toBeVisible();
  });
});
