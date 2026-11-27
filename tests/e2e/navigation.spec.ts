import { expect, test } from "@playwright/test";

test.describe("navigation", () => {
  test("secondary links live under More", async ({ page }) => {
    await page.goto("/discover", { waitUntil: "networkidle" });
    const width = page.viewportSize()?.width ?? 1280;

    if (width >= 1024) {
      const primary = page.getByRole("navigation", { name: "Primary" });
      await expect(
        primary.getByRole("link", { name: "Portfolio" }),
      ).toBeVisible();
      await expect(
        primary.getByRole("link", { name: "Discover" }),
      ).toBeVisible();
      await expect(
        primary.getByRole("link", { name: "Screener" }),
      ).toBeVisible();
      await primary.getByRole("button", { name: "More" }).click();
    } else {
      await page
        .getByRole("navigation", { name: "Mobile" })
        .getByRole("button", { name: "More" })
        .click();
    }

    await expect(
      page.getByRole("link", { name: /Watchlist/ }).first(),
    ).toBeVisible();
    await expect(
      page
        .getByRole("link", { name: /Research methodology|Methodology/ })
        .first(),
    ).toBeVisible();
  });

  test("global search finds US companies", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const openSearch = page.getByRole("button", {
      name: /Search companies/,
    });
    await openSearch.first().click();

    const dialog = page.getByRole("dialog", { name: "Search companies" });
    const input = dialog.getByPlaceholder(
      /Search companies, tickers or sectors/i,
    );

    await input.fill("MSFT");
    await expect(
      dialog.getByRole("button", { name: /Microsoft Corporation/ }).first(),
    ).toBeVisible({ timeout: 15_000 });
    await input.press("Enter");
    await expect(page).toHaveURL(/\/stocks\/MSFT/, { timeout: 15_000 });

    await openSearch.first().click();
    const dialogAgain = page.getByRole("dialog", { name: "Search companies" });
    const inputAgain = dialogAgain.getByPlaceholder(
      /Search companies, tickers or sectors/i,
    );
    await inputAgain.fill("NVDA");
    await expect(
      dialogAgain.getByRole("button", { name: /NVIDIA Corporation/ }).first(),
    ).toBeVisible({ timeout: 15_000 });
    await inputAgain.press("Enter");
    await expect(page).toHaveURL(/\/stocks\/NVDA/, { timeout: 15_000 });
  });

  test("mobile bar starts with Portfolio, Discover and Screener", async ({
    page,
  }) => {
    const width = page.viewportSize()?.width ?? 1280;
    test.skip(
      width >= 1024,
      "bottom bar only renders below the desktop breakpoint",
    );

    await page.goto("/portfolio", { waitUntil: "networkidle" });
    const nav = page.getByRole("navigation", { name: "Mobile" });
    await expect(nav.getByRole("link")).toHaveText([
      "Portfolio",
      "Discover",
      "Screener",
    ]);

    const more = nav.getByRole("button", { name: "More" });
    await expect(more).toBeVisible();
    await more.click();
    const dialog = page.getByRole("dialog", { name: "More navigation" });
    await expect(dialog.getByRole("link", { name: "Watchlist" })).toBeVisible();
  });
});
