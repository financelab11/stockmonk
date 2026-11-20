import { expect, test } from "@playwright/test";

test.describe("India company profiles", () => {
  test("Tips Music renders the full MarketSmith profile", async ({ page }) => {
    await page.goto("/india/companies/TIPSMUSIC", { waitUntil: "domcontentloaded" });

    await expect(page.getByRole("heading", { name: "Tips Music" })).toBeVisible();
    await expect(page.getByText("Leisure-Movies & Related").first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "About the company" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Key statistics" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Key ratios" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Financial statements" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Ownership" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Surveillance checklist" })).toBeVisible();

    await expect(page.getByText("Market capitalization")).toBeVisible();
    await expect(page.getByText("5-year P/E range")).toBeVisible();
    await expect(page.locator("figure.dark-chart-card")).toHaveCount(3);
    await expect(page.locator("table").first()).toBeVisible();
  });

  test("a company without an ingested profile still has a page", async ({ page }) => {
    await page.goto("/india/companies/RELIANCE", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: /Reliance/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Key statistics" })).toBeVisible();
    await expect(page.getByText("Full profile in progress")).toBeVisible();
  });

  test("tracker rows link to company profiles", async ({ page }) => {
    await page.goto("/india/earnings-tracker", { waitUntil: "domcontentloaded" });
    const firstLink = page.locator("table tbody tr").first().locator("a").first();
    await expect(firstLink).toHaveAttribute("href", /\/india\/companies\//);
    await firstLink.click();
    await page.waitForURL("**/india/companies/**");
    await expect(page.getByRole("heading", { name: "Key statistics" })).toBeVisible();
  });
});
