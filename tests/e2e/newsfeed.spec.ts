import { expect, test } from "@playwright/test";

test.describe("research intelligence feed", () => {
  test("cards expand independently and keep broker attribution", async ({ page }) => {
    await page.goto("/newsfeed", { waitUntil: "networkidle" });
    const cards = page.locator("article");
    await expect(cards.first()).toBeVisible();

    const details = page.locator("article details").first();
    await expect(details).not.toHaveAttribute("open", "");
    await details.locator("summary").click();
    await expect(details).toHaveAttribute("open", "");

    await expect(page.getByText("materiality", { exact: false }).first()).toBeVisible();
    await expect(page.locator('img[src^="/brokers/"]').first()).toBeVisible();
  });

  test("market and category filters change the feed", async ({ page }) => {
    await page.goto("/newsfeed?market=global&category=broker", { waitUntil: "networkidle" });
    await expect(page.getByText(/Showing \d+ of \d+ items/)).toBeVisible();
    await expect(page.locator("article").first()).toBeVisible();
  });

  test("estimate revisions page renders tables", async ({ page }) => {
    await page.goto("/newsfeed/revisions", { waitUntil: "networkidle" });
    await expect(page.getByRole("heading", { name: "Estimate revisions" })).toBeVisible();
    await expect(page.locator("table").first()).toBeVisible();
  });
});
