import { expect, test } from "@playwright/test";

test.describe("research article", () => {
  test("contains all ten sections, charts, sources and the Pro CTA", async ({ page }) => {
    await page.goto("/stocks/NVDA", { waitUntil: "networkidle" });

    await expect(page.getByRole("heading", { name: "Nvidia sells the picks and shovels of the AI build-out" })).toBeVisible();

    for (const title of [
      "The big picture",
      "What the company does",
      "How it makes money",
      "Growth drivers and catalysts",
      "Financial performance",
      "Cash flow and balance sheet",
      "Valuation",
      "What analysts expect",
      "Risks and what to watch",
      "The bottom line for learners",
    ]) {
      await expect(page.getByRole("heading", { name: title, exact: true })).toBeAttached();
    }

    await expect(page.getByText(/Stockmonk does not provide buy, sell or hold ratings/i).first()).toBeAttached();
    await expect(page.getByText(/Enjoyed this research report/i)).toBeAttached();
    await expect(page.getByText(/View data table/i).first()).toBeAttached();
    await expect(page.getByText(/Sources/i).first()).toBeAttached();

    const width = page.viewportSize()?.width ?? 1280;
    if (width < 1024) {
      await page.getByText("Jump to section").first().click();
    }
    await page.locator('a[href="#valuation"]:visible').first().click();
    await expect(page).toHaveURL(/#valuation/);
  });

  test("search finds a ticker and navigates to its report", async ({ page }) => {
    await page.goto("/discover", { waitUntil: "networkidle" });
    const input = page.getByPlaceholder(/Search ticker, name or sector/i);
    await expect(input).toBeVisible();
    await input.fill("MSFT");
    await page.getByRole("button", { name: "Apply" }).click();
    await expect(page).toHaveURL(/\/discover\?.*q=MSFT/);
    await expect(page.getByText("MICROSOFT CORP").first()).toBeVisible();
    await page.getByRole("link", { name: /MICROSOFT CORP/ }).first().click();
    await expect(page).toHaveURL(/\/stocks\/MSFT/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("watchlist persists across reloads", async ({ page }) => {
    await page.goto("/stocks/NVDA", { waitUntil: "networkidle" });
    const add = page.getByRole("button", { name: /Add to watchlist: NVDA/i }).first();
    await add.click();
    await expect(page.getByRole("button", { name: /Remove from watchlist: NVDA/i }).first()).toBeVisible();

    await page.goto("/watchlist", { waitUntil: "networkidle" });
    await expect(page.getByText(/NVDA/).first()).toBeVisible();
    await page.reload({ waitUntil: "networkidle" });
    await expect(page.getByText(/NVDA/).first()).toBeVisible();

    await page.getByRole("button", { name: /Clear all/i }).click();
    await expect(page.getByText(/Your watchlist is empty/i)).toBeVisible();
  });
});
