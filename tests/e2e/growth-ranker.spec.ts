import { expect, test } from "@playwright/test";

test("forward growth ranker displays 200+ estimates with valuation and quality", async ({
  page,
}) => {
  await page.goto("/tools/growth-ranker", { waitUntil: "networkidle" });
  await expect(
    page.getByRole("heading", { name: /Forward Revenue Growth Ranker/i }),
  ).toBeVisible();
  await expect(page.getByText(/\d{3} companies/i).first()).toBeVisible();
  await expect(page.getByRole("columnheader", { name: "Fwd P/E" })).toBeVisible();
  await expect(page.getByRole("columnheader", { name: "ROCE" })).toBeVisible();

  const rows = page.locator("tbody tr");
  expect(await rows.count()).toBeGreaterThan(200);

  await page.getByRole("link", { name: /LLOYDSME/i }).first().click();
  await expect(page.getByRole("heading", { name: /Lloyds Metals/i })).toBeVisible();
  await expect(page.getByText(/Valuation metrics/i)).toBeVisible();
  await expect(page.getByText(/Quality metrics/i)).toBeVisible();
  await expect(page.getByText(/Historical revenue — context only/i)).toBeVisible();
});
