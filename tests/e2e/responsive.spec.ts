import { expect, test } from "@playwright/test";

test.describe("responsive layout", () => {
  test("no horizontal page overflow on key routes", async ({ page }) => {
    for (const route of [
      "/",
      "/portfolio",
      "/portfolio/ai-infrastructure-leaders?tab=overview",
      "/portfolio/ai-infrastructure-leaders?tab=constituents",
      "/portfolio/ai-infrastructure-leaders/report",
      "/discover",
      "/discover/all-stocks",
      "/framework",
      "/stocks/NVDA",
      "/watchlist",
      "/screener",
    ]) {
      await page.goto(route, { waitUntil: "networkidle" });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow, `${route} horizontal overflow`).toBeLessThanOrEqual(1);
    }
  });

  test("shows the correct navigation for the viewport", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const width = page.viewportSize()?.width ?? 1280;
    const bottomNav = page.getByRole("navigation", { name: "Mobile" });
    const primaryNav = page.getByRole("navigation", { name: "Primary" });

    if (width < 1024) {
      await expect(bottomNav).toBeVisible();
    } else {
      await expect(primaryNav).toBeVisible();
    }
  });

  test("article has a mobile jump menu", async ({ page }) => {
    const width = page.viewportSize()?.width ?? 1280;
    test.skip(width >= 1024, "mobile TOC is hidden on desktop");
    await page.goto("/stocks/NVDA", { waitUntil: "networkidle" });
    await expect(page.getByText("Jump to section").first()).toBeVisible();
    await page.getByText("Jump to section").first().click();
    await expect(
      page.getByRole("link", { name: /Risks and thesis breakers/i }).first(),
    ).toBeVisible();
  });
});
