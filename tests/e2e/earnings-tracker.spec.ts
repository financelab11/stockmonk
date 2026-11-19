import { expect, test } from "@playwright/test";

const percent = (text: string | null | undefined) => {
  const value = Number((text ?? "").replace(/[^0-9.+-]/g, ""));
  return Number.isFinite(value) ? value : null;
};

test.describe("India earnings tracker", () => {
  test("is reachable from the India tabs and renders the table", async ({ page }) => {
    await page.goto("/india", { waitUntil: "domcontentloaded" });
    await page.getByRole("link", { name: /Earnings Tracker/ }).click();
    await page.waitForURL("**/india/earnings-tracker");

    await expect(page.getByRole("heading", { name: "Earnings Tracker" })).toBeVisible();
    await expect(page.locator("table tbody tr")).toHaveCount(25);
    await expect(page.getByText(/100 companies/).first()).toBeVisible();
  });

  test("defaults to sales growth, highest first", async ({ page }) => {
    await page.goto("/india/earnings-tracker", { waitUntil: "domcontentloaded" });

    const cells = page.locator("table tbody tr td:nth-child(3)");
    const values = (await cells.allTextContents()).map(percent).filter((value) => value != null);
    expect(values.length).toBeGreaterThan(5);
    for (let index = 1; index < values.length; index += 1) {
      expect(values[index - 1]).toBeGreaterThanOrEqual(values[index]);
    }
  });

  test("filters by company, industry and growth", async ({ page }) => {
    await page.goto("/india/earnings-tracker?q=aavas", { waitUntil: "domcontentloaded" });
    await expect(page.getByText("No companies match those filters.")).toBeVisible();

    await page.goto("/india/earnings-tracker?q=aavas&all=1", { waitUntil: "domcontentloaded" });
    await expect(page.locator("table tbody tr")).toHaveCount(1);
    await expect(page.locator("table tbody tr")).toContainText("AAVAS");

    await page.goto("/india/earnings-tracker?minSales=50", { waitUntil: "domcontentloaded" });
    const values = (await page.locator("table tbody tr td:nth-child(3)").allTextContents())
      .map(percent)
      .filter((value) => value != null);
    expect(values.length).toBeGreaterThan(0);
    for (const value of values) expect(value).toBeGreaterThanOrEqual(50);

    const industry = await page.locator('select[name="industry"] option').nth(1).getAttribute("value");
    expect(industry).toBeTruthy();
    await page.goto(
      `/india/earnings-tracker?industry=${encodeURIComponent(industry ?? "")}`,
      { waitUntil: "domcontentloaded" },
    );
    await expect(page.locator("table tbody tr").first()).toBeVisible();
    await expect(page.getByText(/1 active filter/)).toBeVisible();
  });

  test("sorts by P/E ascending and keeps the sort in pagination", async ({ page }) => {
    await page.goto("/india/earnings-tracker?sort=pe", { waitUntil: "domcontentloaded" });
    const pe = (await page.locator("table tbody tr td:nth-child(8)").allTextContents())
      .map((value) => Number(value.replace(/[^0-9.]/g, "")))
      .filter((value) => Number.isFinite(value) && value > 0);
    for (let index = 1; index < pe.length; index += 1) {
      expect(pe[index - 1]).toBeLessThanOrEqual(pe[index]);
    }

    const next = page.locator('nav[aria-label="Earnings tracker pagination"] a', { hasText: "Next" });
    await expect(next).toHaveAttribute("href", /sort=pe/);
  });

  test("exports the filtered rows as CSV", async ({ request }) => {
    const response = await request.get("/api/data/earnings-export?minSales=50");
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("text/csv");
    const body = await response.text();
    expect(body.split("\n")[0]).toContain("Sales YoY %");
    expect(body.split("\n").length).toBeGreaterThan(2);
  });
});
