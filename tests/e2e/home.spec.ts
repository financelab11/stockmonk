import { expect, test } from "@playwright/test";

test.describe("homepage", () => {
  test("renders live coverage, hero and intelligence tabs", async ({
    page,
  }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Your next investment idea starts here.",
      }),
    ).toBeVisible();
    await expect(
      page.getByText("3,696", { exact: true }).first(),
    ).toBeVisible();
    await expect(page.getByText("500", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("105", { exact: true }).first()).toBeVisible();

    const tabs = page.getByRole("tablist", {
      name: "Investment intelligence views",
    });
    await expect(
      tabs.getByRole("tab", { name: "Top composite scores" }),
    ).toHaveAttribute("aria-selected", "true");
    await tabs.getByRole("tab", { name: "Momentum leaders" }).click();
    await expect(
      tabs.getByRole("tab", { name: "Momentum leaders" }),
    ).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel")).toBeVisible();
  });

  test("hero and section CTAs point at real product routes", async ({
    page,
  }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    await expect(
      page.getByRole("link", { name: "Explore portfolios" }).first(),
    ).toHaveAttribute("href", "/portfolio");
    await expect(
      page.getByRole("link", { name: "Discover stocks" }).first(),
    ).toHaveAttribute("href", "/discover");

    const firstTheme = page.locator('main a[href*="/screener?"]').first();
    await expect(firstTheme).toBeVisible();
    await firstTheme.click();
    await expect(page).toHaveURL(/\/screener\?/);
  });

  test("homepage watchlist action persists locally", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    await page
      .getByRole("button", { name: "Add NVDA to watchlist" })
      .first()
      .click();
    const watchlist = page.locator('a[aria-label^="Open watchlist"]');
    await expect(watchlist).toContainText("1");

    await page.reload({ waitUntil: "networkidle" });
    await expect(watchlist).toContainText("1");
  });

  test("mobile layout has no horizontal overflow and keeps navigation fixed", async ({
    page,
  }) => {
    const width = page.viewportSize()?.width ?? 1280;
    test.skip(width >= 1024, "mobile navigation is only rendered below 1024px");

    await page.goto("/", { waitUntil: "networkidle" });
    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);

    const nav = page.getByRole("navigation", { name: "Mobile" });
    const box = await nav.boundingBox();
    expect(box).not.toBeNull();
    expect((box?.y ?? 0) + (box?.height ?? 0)).toBeGreaterThan(
      (page.viewportSize()?.height ?? 0) - 2,
    );
    await expect(nav.getByRole("link")).toHaveText([
      "Discover",
      "Portfolio",
      "Screener",
    ]);
  });
});
