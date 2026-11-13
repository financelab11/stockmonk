import { expect, test } from "@playwright/test";

test("forward growth ranker displays every completed estimate", async ({ page }) => {
  await page.goto("/tools/growth-ranker", { waitUntil: "networkidle" });
  await expect(
    page.getByRole("heading", { name: /Forward Revenue Growth Ranker/i }),
  ).toBeVisible();
  await expect(page.getByText(/83 estimates/i).first()).toBeVisible();

  const rows = page.locator("tbody tr");
  await expect(rows).toHaveCount(83);

  await page.getByRole("link", { name: /MTARTECH/i }).click();
  await expect(page.getByRole("heading", { name: /MTAR Technologies/i })).toBeVisible();
  await expect(page.getByText(/Historical revenue — context only/i)).toBeVisible();
  await expect(page.getByText(/Zero weight in projection and ranking/i)).toBeVisible();
});
