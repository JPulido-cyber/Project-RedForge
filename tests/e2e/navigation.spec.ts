import { expect, test } from "@playwright/test";

test("desktop navigation exposes the approved destinations", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name.includes("mobile"), "Desktop navigation contract");
  await page.goto("/");

  const navigation = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(navigation.getByRole("link", { name: "HOME", exact: true })).toBeVisible();
  await expect(navigation.getByRole("link", { name: "PROJECTS" })).toHaveAttribute(
    "href",
    "#projects",
  );
});

test("mobile menu opens and exposes navigation links", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Mobile navigation contract");
  await page.goto("/");

  const menu = page.locator("details.mobile-menu");
  await menu.locator("summary").click();
  await expect(menu).toHaveAttribute("open", "");
  await expect(menu.getByRole("link", { name: "PROJECTS" })).toBeVisible();
});
