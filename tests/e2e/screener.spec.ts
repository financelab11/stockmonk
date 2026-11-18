import { expect, test } from "@playwright/test";

test.describe("screener density", () => {
  test("renders 100 rows per page", async ({ page }) => {
    await page.goto("/screener", { waitUntil: "networkidle" });
    await expect(page.locator("tbody tr")).toHaveCount(100);
    await expect(page.getByText(/Page 1 of \d+ · showing 100 of/i)).toBeVisible();
  });

  test("keeps the company column compact on mobile", async ({ page }) => {
    const width = page.viewportSize()?.width ?? 1280;
    test.skip(width >= 640, "compact column only applies below the sm breakpoint");

    await page.goto("/screener", { waitUntil: "networkidle" });
    const cell = page.locator("tbody tr").first().locator("td").nth(1);
    const box = await cell.boundingBox();
    expect(box?.width ?? 999).toBeLessThanOrEqual(140);
  });

  test("model architecture is collapsed until expanded", async ({ page }) => {
    await page.goto("/screener", { waitUntil: "networkidle" });
    const details = page.locator("#methodology details");
    await expect(details).not.toHaveAttribute("open", "");
    await page.locator("#methodology summary").click();
    await expect(details).toHaveAttribute("open", "");
    await expect(
      page.getByText(/winsorized at the 2nd and 98th percentile/i),
    ).toBeVisible();
  });
});
