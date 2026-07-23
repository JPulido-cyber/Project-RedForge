import { expect, test } from "@playwright/test";

test("homepage renders the migrated RedForge experience", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/RedForge/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /building & defending an enterprise/i,
    }),
  ).toBeVisible();
  await expect(page.getByText("CURRENT OPERATION").first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Featured Projects" })).toBeVisible();
  await expect(page.locator(".project-card")).toHaveCount(6);
});
