import { expect, test } from "@playwright/test";

test("unknown routes render the application 404", async ({ page }) => {
  const response = await page.goto("/route-that-does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: /not found/i })).toBeVisible();
});

test("operational fallback routes are available", async ({ page }) => {
  await page.goto("/maintenance");
  await expect(
    page.getByRole("heading", { name: "Systems are temporarily offline" }),
  ).toBeVisible();

  await page.goto("/coming-soon");
  await expect(
    page.getByRole("heading", { name: "This system is still being forged" }),
  ).toBeVisible();
});
