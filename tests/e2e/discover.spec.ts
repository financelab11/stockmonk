import { expect, test } from "@playwright/test";

const returns = (text: string | null | undefined) => {
  const value = Number((text ?? "").replace(/[^0-9.+-]/g, ""));
  return Number.isFinite(value) ? value : null;
};

test.describe("discover", () => {
  test("segmented views keep their routes", async ({ page }) => {
    await page.goto("/discover", { waitUntil: "networkidle" });
    const tabs = page.locator('nav[aria-label="Company views"] a');
    await expect(tabs).toHaveCount(3);
    await expect(tabs.first()).toContainText("Featured Research");

    await page.getByRole("link", { name: /Data Quality/ }).click();
    await page.waitForURL("**/discover?tab=screens");
    await expect(
      page.getByRole("heading", { name: "Coverage quality" }),
    ).toBeVisible();

    await page
      .getByRole("link", { name: /All Companies/ })
      .first()
      .click();
    await page.waitForURL("**/discover/all-stocks");
    await expect(
      page.getByRole("heading", { name: /All companies/ }),
    ).toBeVisible();
  });

  test("defaults to 1Y returns, highest first, and keeps the sort across pages", async ({
    page,
  }) => {
    await page.goto("/discover", { waitUntil: "domcontentloaded" });

    await expect(page.locator('select[name="sort"]')).toHaveValue("return1y");
    await expect(page.getByText("Sorted by 1Y return")).toBeVisible();

    const first = returns(
      await page
        .locator("#directory .grid article")
        .first()
        .locator("[data-return1y]")
        .getAttribute("data-return1y"),
    );
    const second = returns(
      await page
        .locator("#directory .grid article")
        .nth(1)
        .locator("[data-return1y]")
        .getAttribute("data-return1y"),
    );
    expect(first).not.toBeNull();
    expect(second).not.toBeNull();
    expect(first!).toBeGreaterThanOrEqual(second!);

    await page.goto("/discover?sort=name", { waitUntil: "domcontentloaded" });
    await expect(page.locator('select[name="sort"]')).toHaveValue("name");
    const hrefs = await page
      .locator('nav[aria-label="Research pagination"] a')
      .evaluateAll((links) =>
        links.map((link) => link.getAttribute("href") ?? ""),
      );
    expect(hrefs.some((href) => href.includes("sort=name"))).toBe(true);
  });

  test("filters compose with sorting and can be cleared", async ({ page }) => {
    await page.goto("/discover?sector=technology&q=nvda", {
      waitUntil: "networkidle",
    });

    await expect(page.getByText("Showing 1 of 1")).toBeVisible();
    await expect(page.locator("#directory article")).toHaveCount(1);
    await expect(page.locator("#directory article").first()).toContainText(
      "Technology",
    );

    await page.getByRole("link", { name: "Clear all" }).click();
    await page.waitForURL("**/discover");
    await expect(page.getByText("229 companies")).toBeVisible();
  });

  test("additional filters survive existing sort and sector changes", async ({
    page,
  }) => {
    await page.goto("/discover?minCap=100&sort=name", {
      waitUntil: "networkidle",
    });

    await expect(page.getByText("Market cap ≥ $100B")).toBeVisible();
    await page.locator('select[name="sort"]').selectOption("growth");
    await page.waitForURL(/minCap=100/);
    await page.waitForURL(/sort=growth/);
  });

  test("mobile discovery tabs do not overflow", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/discover", { waitUntil: "networkidle" });

    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBe(0);

    const views = page.locator('nav[aria-label="Company views"] a');
    await expect(views.first()).toBeVisible();
    expect(await views.count()).toBeGreaterThanOrEqual(3);
  });
});
