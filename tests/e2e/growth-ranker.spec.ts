import { expect, test } from "@playwright/test";

test("forward growth ranker runs a small pasted list end to end", async ({ page }) => {
  await page.goto("/tools/growth-ranker", { waitUntil: "networkidle" });
  await expect(page.getByRole("heading", { name: /Forward Revenue Growth Ranker/i })).toBeVisible();

  await page.getByLabel("Paste tickers or names").fill("KAYNES\nAPLAPOLLO");
  await page.getByRole("button", { name: "Parse pasted list" }).click();

  await expect(page.getByRole("heading", { name: /Confirm column mapping/i })).toBeVisible();
  await page.getByRole("button", { name: /Resolve companies/i }).click();

  await expect(page.getByRole("heading", { name: /Resolve names/i })).toBeVisible();
  await page.getByRole("button", { name: /Continue to filter/i }).click();

  await expect(page.getByRole("heading", { name: /Market-cap filter and settings/i })).toBeVisible();
  const start = page.getByRole("button", { name: /Start research \(2\)/i });
  await expect(start).toBeEnabled();
  await start.click();

  await expect(page.getByRole("heading", { name: /Research batch/i })).toBeVisible();
  await page.reload({ waitUntil: "networkidle" });
  await expect(page.getByRole("heading", { name: /Research batch/i })).toBeVisible({
    timeout: 30_000,
  });
  await expect(page.getByRole("button", { name: /View ranking/i })).toBeVisible({
    timeout: 90_000,
  });
  await page.getByRole("button", { name: /View ranking/i }).click();

  await expect(
    page.getByRole("heading", { name: /Forward revenue growth ranking/i }),
  ).toBeVisible({ timeout: 30_000 });
  await expect(page.getByRole("cell", { name: "KAYNES" }).first()).toBeVisible();
  await page.getByRole("cell", { name: "KAYNES" }).first().click();
  await expect(
    page.getByText(/Historical revenue — context only/i).first(),
  ).toBeVisible({ timeout: 15_000 });
});
