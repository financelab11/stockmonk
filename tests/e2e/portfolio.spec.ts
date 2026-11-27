import { expect, test } from "@playwright/test";

test.describe("portfolio module", () => {
  test("discovers, searches, filters and sorts the 105 portfolios", async ({
    page,
  }) => {
    await page.goto("/portfolio", { waitUntil: "networkidle" });

    await expect(
      page.getByRole("heading", {
        name: "Invest in strategies. Not stock tips.",
      }),
    ).toBeVisible();
    await expect(page.getByText("105 model strategies")).toBeVisible();
    await expect(page.locator("#portfolios article.card")).toHaveCount(24);

    await page
      .getByRole("button", { name: "AI & Technology", exact: true })
      .click();
    await expect(page.locator("#portfolios article.card")).toHaveCount(12);
    await page
      .getByRole("button", { name: "All Portfolios", exact: true })
      .click();

    await page.getByPlaceholder("Search portfolios").fill("cyber");
    await expect(page.locator("#portfolios article.card")).toHaveCount(1);
    await expect(
      page.locator("#portfolios article.card").first(),
    ).toContainText("Cybersecurity Leaders");
    await page.getByPlaceholder("Search portfolios").fill("");

    await page.locator('[aria-label^="Filters"]').click();
    const dialog = page.getByRole("dialog", { name: "Filters" });
    await dialog.getByRole("button", { name: "High", exact: true }).click();
    await dialog.getByRole("button", { name: "Apply filters" }).click();
    await expect(page.locator("#portfolios article.card")).toHaveCount(22);

    if ((page.viewportSize()?.width ?? 1280) >= 640) {
      await page
        .locator('select[aria-label="Sort portfolios"]')
        .selectOption("return-desc");
      await expect(
        page.locator('select[aria-label="Sort portfolios"]'),
      ).toHaveValue("return-desc");
    } else {
      await page.locator('button[aria-label="Sort portfolios"]').click();
      await page
        .getByRole("button", { name: "Returns: high to low" })
        .click();
    }
  });

  test("persists detail tabs in the URL and renders constituents", async ({
    page,
  }) => {
    await page.goto("/portfolio/ai-infrastructure-leaders", {
      waitUntil: "networkidle",
    });

    await expect(
      page.getByRole("heading", { name: "AI Infrastructure Leaders" }).first(),
    ).toBeVisible();
    await expect(
      page.getByText("Investment horizon", { exact: true }),
    ).toBeVisible();
    await expect(page.locator("svg.recharts-surface").first()).toBeVisible();

    await page.getByRole("link", { name: /^Constituents/ }).click();
    await page.waitForURL("**?tab=constituents");
    await expect(page.locator("tbody tr")).toHaveCount(15);
    await expect(page.locator("tfoot")).toContainText("100.0%");
    await expect(
      page.getByRole("link", { name: "Micron Technology, Inc." }).first(),
    ).toHaveAttribute("href", "/stocks/MU");

    await page.getByRole("link", { name: "Overview" }).click();
    await page.waitForURL("**?tab=overview");
    await expect(page.getByText("How the holdings were selected")).toBeVisible();
  });

  test("opens the portfolio research report with linked constituents", async ({
    page,
  }) => {
    await page.goto("/portfolio/ai-infrastructure-leaders", {
      waitUntil: "networkidle",
    });
    await page.getByRole("link", { name: /View portfolio report/ }).click();
    await page.waitForURL("**/report");

    await expect(
      page.getByRole("heading", { name: "AI Infrastructure Leaders" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Investment thesis" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Constituent notes" }),
    ).toBeVisible();
    await expect(page.locator('a[href^="/stocks/"]').first()).toBeVisible();
  });

  test("bookmarks a portfolio into the local-first watchlist", async ({
    page,
  }) => {
    await page.goto("/portfolio/ai-infrastructure-leaders", {
      waitUntil: "networkidle",
    });
    await page
      .getByRole("button", { name: "Save AI Infrastructure Leaders" })
      .click();
    await expect(
      page.getByRole("button", {
        name: "Saved: remove AI Infrastructure Leaders from saved portfolios",
      }),
    ).toBeVisible();

    await page.goto("/watchlist", { waitUntil: "networkidle" });
    const section = page.locator(
      "section[aria-labelledby='saved-portfolios-heading']",
    );
    await expect(section).toContainText("AI Infrastructure Leaders");
    await expect(section.locator("article.card")).toHaveCount(1);
  });
});
