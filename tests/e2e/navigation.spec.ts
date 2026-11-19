import { expect, test } from "@playwright/test";

test.describe("navigation", () => {
  test("markets and the growth ranker live under More", async ({ page }) => {
    await page.goto("/discover", { waitUntil: "networkidle" });
    const width = page.viewportSize()?.width ?? 1280;

    if (width >= 1024) {
      const primary = page.getByRole("navigation", { name: "Primary" });
      await expect(primary.getByRole("link", { name: "Discover" })).toBeVisible();
      await expect(primary.getByRole("link", { name: "Screener" })).toBeVisible();
        await expect(primary.getByRole("link", { name: "India stocks" })).toHaveCount(0);
      await expect(primary.getByRole("link", { name: "GCC stocks" })).toHaveCount(0);
      await primary.getByRole("button", { name: "More" }).click();
    } else {
      await page
        .getByRole("navigation", { name: "Mobile" })
        .locator("summary")
        .click();
    }

    await expect(page.getByRole("link", { name: "India stocks" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "GCC stocks" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Growth ranker" }).first()).toBeVisible();
  });

  test("global search finds companies in every market", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const openSearch = page.getByRole("button", {
      name: /Search companies across US, India and GCC/,
    });
    await openSearch.first().click();

    const dialog = page.getByRole("dialog", { name: "Search companies" });
    const input = dialog.getByPlaceholder(/Search companies, tickers or sectors/i);

    await input.fill("LAURUSLABS");
    await expect(dialog.getByText(/LAURUSLABS/).first()).toBeVisible({ timeout: 15_000 });
    await input.press("Enter");
    await expect(page).toHaveURL(/\/india\/stocks\/LAURUSLABS/);

    await openSearch.first().click();
    const dialogAgain = page.getByRole("dialog", { name: "Search companies" });
    const inputAgain = dialogAgain.getByPlaceholder(/Search companies, tickers or sectors/i);
    await inputAgain.fill("NVDA");
    await expect(dialogAgain.getByText(/NVDA/).first()).toBeVisible({ timeout: 15_000 });
    await inputAgain.press("Enter");
    await expect(page).toHaveURL(/\/stocks\/NVDA/);
  });

  test("mobile bar starts with Discover, Screener and Watchlist", async ({ page }) => {
    const width = page.viewportSize()?.width ?? 1280;
    test.skip(width >= 1024, "bottom bar only renders below the desktop breakpoint");

    await page.goto("/discover", { waitUntil: "networkidle" });
    const nav = page.getByRole("navigation", { name: "Mobile" });
    await expect(nav.getByRole("link")).toHaveText([
      "Discover",
      "Screener",
      "Watchlist",
    ]);
    await expect(nav.locator("summary")).toContainText("More");
  });
});
