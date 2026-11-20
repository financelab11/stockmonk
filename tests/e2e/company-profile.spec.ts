import { expect, test } from "@playwright/test";

test.describe("India company profiles", () => {
  test("Tips Music renders the full MarketSmith profile", async ({ page }) => {
    await page.goto("/india/companies/TIPSMUSIC", { waitUntil: "domcontentloaded" });

    await expect(
      page.getByRole("heading", { name: "Tips Music", exact: true, level: 1 }),
    ).toBeVisible();
    await expect(page.getByText("Leisure-Movies & Related").first()).toBeVisible();
    await expect(page.getByRole("heading", { name: /About Tips Music/ })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Key statistics", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Financial statements", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Ownership", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Surveillance checklist", exact: true })).toBeVisible();

    await expect(page.getByText("Market capitalization").first()).toBeVisible();
    await expect(page.getByText("5-year P/E range")).toBeVisible();
    await expect(page.locator("figure.dark-chart-card")).toHaveCount(3);
    if ((page.viewportSize()?.width ?? 1280) < 1024) {
      await expect(page.locator("#financials dl").first()).toBeVisible();
    } else {
      await expect(page.locator("#financials table").first()).toBeVisible();
    }
    await expect(page.locator('nav[aria-label="Company profile sections"]')).toBeVisible();
  });

  test("statement tabs and period controls work", async ({ page }) => {
    await page.goto("/india/companies/TIPSMUSIC#financials", { waitUntil: "domcontentloaded" });
    const section = page.locator("#financials");
    const mobile = (page.viewportSize()?.width ?? 1280) < 1024;

    await section.getByRole("tab", { name: "Balance sheet" }).click();
    await expect(section.getByRole("tab", { name: "Balance sheet" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    if (mobile) {
      await expect(section.locator("dl").first()).toBeVisible();
    } else {
      await expect(section.locator("table")).toBeVisible();
    }

    await section.getByRole("tab").first().click();
    await section.getByRole("button", { name: "Quarterly" }).click();
    if (mobile) {
      await expect(section.locator("dl").first()).toBeVisible();
    } else {
      await expect(section.locator("table")).toBeVisible();
    }
  });

  test("mobile shows period cards and a full-history table without overflow", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/india/companies/TIPSMUSIC#financials", { waitUntil: "domcontentloaded" });
    const section = page.locator("#financials");

    await expect(section.locator("dl").first()).toBeVisible();
    const periods = section.getByRole("group", { name: "Select financial period" }).getByRole("button");
    await expect(periods.first()).toHaveAttribute("aria-pressed", "true");

    await section.getByRole("button", { name: "Full history" }).click();
    await expect(section.getByText("Scroll sideways for older periods")).toBeVisible();
    await expect(section.locator("table")).toBeVisible();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBe(0);

    await section.getByRole("button", { name: "Cards" }).click();
    await expect(section.locator("dl").first()).toBeVisible();
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
