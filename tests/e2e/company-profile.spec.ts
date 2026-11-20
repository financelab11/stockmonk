import { expect, test } from "@playwright/test";

const STATEMENTS = [
  "Income statement",
  "Balance sheet",
  "Cash flow",
  "Key ratios",
];

test.describe("India company profiles", () => {
  test("Tips Music renders the full company profile", async ({ page }) => {
    await page.goto("/india/companies/TIPSMUSIC", {
      waitUntil: "domcontentloaded",
    });

    await expect(
      page.getByRole("heading", { name: "Tips Music", exact: true, level: 1 }),
    ).toBeVisible();
    await expect(
      page.getByText("Leisure-Movies & Related").first(),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /About Tips Music/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Key statistics", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Financial statements", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Ownership", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Surveillance checklist",
        exact: true,
      }),
    ).toBeVisible();

    for (const statement of STATEMENTS) {
      await expect(
        page.getByRole("heading", { name: statement, exact: true }),
      ).toBeVisible();
    }

    await expect(page.getByText("Market capitalization").first()).toBeVisible();
    await expect(page.getByText("5-year P/E range")).toBeVisible();
    await expect(page.locator("figure.dark-chart-card")).toHaveCount(3);
    await expect(
      page.locator('[data-company-logo="image"]').first(),
    ).toBeVisible();
    await expect(page.locator("#financials table").first()).toBeVisible();
    await expect(
      page.locator('nav[aria-label="Company profile sections"]'),
    ).toBeVisible();
  });

  test("statements are listed separately and switch period independently", async ({
    page,
  }) => {
    await page.goto("/india/companies/TIPSMUSIC#financials", {
      waitUntil: "domcontentloaded",
    });
    const income = page.getByRole("region", { name: "Income statement" });
    const balance = page.getByRole("region", { name: "Balance sheet" });
    const ratios = page.getByRole("region", { name: "Key ratios" });

    await expect(income.locator("table")).toBeVisible();
    await expect(balance.locator("table")).toBeVisible();
    await expect(ratios.locator("table")).toBeVisible();

    await income.getByRole("button", { name: "Quarterly" }).click();
    await expect(
      income.getByRole("button", { name: "Quarterly" }),
    ).toHaveAttribute("aria-pressed", "true");
    await expect(income.locator("table")).toBeVisible();
    await expect(
      balance.getByRole("button", { name: "Quarterly" }),
    ).toHaveCount(0);
    await expect(
      ratios.getByRole("button", { name: "Quarterly" }),
    ).toHaveAttribute("aria-pressed", "false");

    await income.getByRole("button", { name: "Annual" }).click();
    await expect(
      income.getByRole("button", { name: "Annual" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  test("tables run oldest to newest and format large and per-share values differently", async ({
    page,
  }) => {
    await page.goto("/india/companies/TIPSMUSIC#financials", {
      waitUntil: "domcontentloaded",
    });
    const income = page.getByRole("region", { name: "Income statement" });

    const headers = await income.locator("thead th").allTextContents();
    expect(headers[0]).toBe("Metric");
    expect(headers[1]).toBe("Mar-11");
    expect(headers.at(-1)).toBe("Mar-26");

    const revenue = income
      .locator("tbody tr")
      .filter({ hasText: /^Revenue From Operations \[Gross\]/ });
    await expect(revenue.locator("td").last()).toHaveText("376");

    const eps = income
      .locator("tbody tr")
      .filter({ hasText: /^Basic EPS \(Rs\.\)/ });
    await expect(eps.locator("td").last()).toHaveText("16.96");
  });

  test("mobile opens the full history and can switch to a single period", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/india/companies/TIPSMUSIC#financials", {
      waitUntil: "domcontentloaded",
    });
    const income = page.getByRole("region", { name: "Income statement" });

    await expect(income.locator("table")).toBeVisible();
    await expect(income.locator("dl")).toBeHidden();
    await expect(
      income.getByText("Older periods are to the left."),
    ).toBeVisible();
    await expect(
      income.getByRole("button", { name: "Single period" }),
    ).toBeVisible();

    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBe(0);

    await income.getByRole("button", { name: "Single period" }).click();
    await expect(income.locator("dl")).toBeVisible();

    const periods = income
      .getByRole("group", { name: "Select financial period" })
      .getByRole("button");
    await expect(periods.first()).toHaveText("Mar-26");
    await expect(periods.first()).toHaveAttribute("aria-pressed", "true");

    await income.getByRole("button", { name: "Full history" }).click();
    await expect(income.locator("table")).toBeVisible();
  });

  test("mobile table opens on the latest period", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/india/companies/TIPSMUSIC#financials", {
      waitUntil: "domcontentloaded",
    });
    await page.waitForTimeout(600);
    await page.evaluate(() => {
      const section = document.querySelector("#financials");
      if (section) {
        window.scrollTo({
          top: section.getBoundingClientRect().top + window.scrollY - 120,
        });
      }
    });

    const income = page.getByRole("region", { name: "Income statement" });
    const headers = income.locator("thead th");
    await expect(headers.last()).toBeInViewport();
    await expect(headers.nth(1)).not.toBeInViewport();
  });

  test("a company without an ingested profile still has a page", async ({
    page,
  }) => {
    await page.goto("/india/companies/543225", {
      waitUntil: "domcontentloaded",
    });
    await expect(
      page.getByRole("heading", { name: /Altius Telecom/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Key statistics" }),
    ).toBeVisible();
    await expect(page.getByText("Full profile in progress")).toBeVisible();
    await expect(page.locator('[data-company-logo="monogram"]')).toHaveText(
      "AT",
    );
  });

  test("a second ingested company renders its statements", async ({ page }) => {
    await page.goto("/india/companies/RELIANCE", {
      waitUntil: "domcontentloaded",
    });
    await expect(
      page.getByRole("heading", { name: /Reliance Industries/i, level: 1 }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Financial statements", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("region", { name: "Income statement" }),
    ).toBeVisible();
  });

  test("tracker rows link to company profiles", async ({ page }) => {
    await page.goto("/india/earnings-tracker", {
      waitUntil: "domcontentloaded",
    });
    const firstLink = page
      .locator("table tbody tr")
      .first()
      .locator("a")
      .first();
    await expect(firstLink).toHaveAttribute("href", /\/india\/companies\//);
    await firstLink.click();
    await page.waitForURL("**/india/companies/**");
    await expect(
      page.getByRole("heading", { name: "Key statistics" }),
    ).toBeVisible();
  });
});
