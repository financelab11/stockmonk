import { expect, test } from "@playwright/test";

test.describe("research article", () => {
  test("contains all ten sections, charts, sources and the Pro CTA", async ({
    page,
  }) => {
    await page.goto("/stocks/NVDA", { waitUntil: "networkidle" });

    await expect(
      page.getByRole("heading", {
        name: "Nvidia sells the picks and shovels of the AI build-out",
      }),
    ).toBeVisible();

    for (const title of [
      "Investment snapshot",
      "Business model and revenue economics",
      "Industry and competitive positioning",
      "Growth drivers and future runway",
      "Historical financial performance",
      "Cash flow and balance sheet",
      "Valuation",
      "Market expectations and catalysts",
      "Risks and thesis breakers",
      "Investment conclusion",
    ]) {
      await expect(
        page.getByRole("heading", { name: title, exact: true }),
      ).toBeAttached();
    }

    await expect(
      page
        .getByText(/Stockmonk does not provide buy, sell or hold ratings/i)
        .first(),
    ).toBeAttached();
    await expect(
      page.getByText(/Enjoyed this research report/i),
    ).toBeAttached();
    await expect(page.getByText(/View data table/i).first()).toBeAttached();
    await expect(page.getByText(/Sources/i).first()).toBeAttached();

    const width = page.viewportSize()?.width ?? 1280;
    if (width < 1024) {
      await page.getByText("Jump to section").first().click();
    }
    await page.locator('a[href="#valuation"]:visible').first().click();
    await expect(page).toHaveURL(/#valuation/);
  });

  test("generated report for an expanded name has ten sections and four sources", async ({
    page,
  }) => {
    await page.goto("/stocks/CAVA", { waitUntil: "networkidle" });

    for (const title of [
      "Investment snapshot",
      "Business model and revenue economics",
      "Industry and competitive positioning",
      "Growth drivers and future runway",
      "Historical financial performance",
      "Cash flow and balance sheet",
      "Valuation",
      "Market expectations and catalysts",
      "Risks and thesis breakers",
      "Investment conclusion",
    ]) {
      await expect(
        page.getByRole("heading", { name: title, exact: true, level: 2 }),
      ).toBeAttached();
    }

    const sourceSection = page.locator(
      'section[aria-labelledby="article-sources"]',
    );
    const sources = sourceSection.locator("li");
    await expect(sources).toHaveCount(4);
    await expect(sourceSection).toContainText(/annual report/i);
    await expect(sourceSection).toContainText(/filing history/i);
    await expect(sourceSection).toContainText(/methodology/i);
    await expect(
      page.locator("article").getByText(/SimFin|Yahoo Finance|Nasdaq/),
    ).toHaveCount(0);
  });

  test("screener shows factor tabs, parameters and expandable detail", async ({
    page,
  }) => {
    await page.goto("/screener", { waitUntil: "networkidle" });
    await expect(
      page.getByRole("heading", { name: "US equity screener" }),
    ).toBeVisible();
    await expect(
      page.getByText(/\d[\d,]* US-listed companies/).first(),
    ).toBeVisible();

    await page
      .getByRole("link", { name: /Quality/i })
      .first()
      .click();
    await expect(page.getByText("ROE", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("ROIC", { exact: true }).first()).toBeVisible();

    await page.getByPlaceholder("Search stocks…").fill("NVDA");
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/q=NVDA/);
    await expect(page.getByText("NVDA", { exact: true }).first()).toBeVisible();

    await page.getByRole("link", { name: "Details" }).first().click();
    await expect(page.getByText(/Parameter coverage:/i).first()).toBeVisible();
  });

  test("screener quick screens and filter chips stay in sync", async ({
    page,
  }) => {
    const isMobile = (page.viewportSize()?.width ?? 1280) < 1024;
    await page.goto("/screener", { waitUntil: "networkidle" });

    await page
      .getByRole("button", { name: "Quick Screens", exact: true })
      .first()
      .click();
    await page.getByRole("button", { name: /High Quality Businesses/ }).click();
    await expect(page).toHaveURL(/qualityScoreMin=70/);
    if (!isMobile) {
      await expect(
        page.getByRole("button", { name: /High Quality Businesses/ }),
      ).toBeVisible();
    }

    await page
      .getByRole("button", { name: /^Filters/ })
      .first()
      .click();
    const chip = page.getByRole("button", { name: /Quality score\s*≥\s*70/ });
    await expect(chip).toBeVisible();
    await chip.click();
    await expect(chip).toHaveCount(0);
  });

  test("screener sidebar filters apply a range and update the table", async ({
    page,
  }) => {
    const isMobile = (page.viewportSize()?.width ?? 1280) < 1024;
    await page.goto("/screener", { waitUntil: "networkidle" });

    if (isMobile) {
      await page
        .getByRole("button", { name: /^Filters/ })
        .first()
        .click();
    }
    const scope = isMobile ? page.getByRole("dialog") : page;
    await scope.getByPlaceholder("Search for a filter").fill("market cap");
    const card = scope
      .locator("div.rounded-lg", { hasText: "Market cap ($B)" })
      .last();
    await card.locator('input[inputmode="decimal"]').nth(0).fill("100");
    await scope.getByRole("button", { name: /(Apply filters|Done ·)/ }).click();
    await expect(page).toHaveURL(/marketCapBMin=100/);

    if (isMobile) {
      await expect(
        page.getByRole("button", { name: /^Filters 1/ }),
      ).toBeVisible();
    } else {
      await expect(
        page.getByRole("button", { name: /Market cap.*≥.*100/ }),
      ).toBeVisible();
    }
  });

  test("search finds a ticker and navigates to its report", async ({
    page,
  }) => {
    await page.goto("/discover", { waitUntil: "networkidle" });
    const input = page.getByPlaceholder(/Search companies/i);
    await expect(input).toBeVisible();
    await input.fill("MSFT");
    await input.press("Enter");
    await expect(page).toHaveURL(/\/discover\?.*q=MSFT/);
    await expect(page.getByText("Microsoft Corporation").first()).toBeVisible();
    await page
      .getByRole("link", { name: /Microsoft Corporation/ })
      .first()
      .click();
    await expect(page).toHaveURL(/\/stocks\/MSFT/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("watchlist persists across reloads", async ({ page }) => {
    await page.goto("/stocks/NVDA", { waitUntil: "networkidle" });
    const add = page
      .getByRole("button", { name: /Add to watchlist: NVDA/i })
      .first();
    await add.click();
    await expect(
      page
        .getByRole("button", { name: /Remove from watchlist: NVDA/i })
        .first(),
    ).toBeVisible();

    await page.goto("/watchlist", { waitUntil: "networkidle" });
    await expect(page.getByText(/NVDA/).first()).toBeVisible();
    await page.reload({ waitUntil: "networkidle" });
    await expect(page.getByText(/NVDA/).first()).toBeVisible();

    await page.getByRole("button", { name: /Clear all/i }).click();
    await expect(page.getByText(/Your watchlist is empty/i)).toBeVisible();
  });
});
