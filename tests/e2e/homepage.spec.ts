import { expect, test } from "@playwright/test";

test("homepage renders the current application shell", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/RedForge/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "To get started, edit the page.tsx file.",
    }),
  ).toBeVisible();
});
