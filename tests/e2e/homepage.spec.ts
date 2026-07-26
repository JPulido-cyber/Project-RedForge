import { expect, test } from "@playwright/test";

test("homepage presents RedForge and its latest engineering activity", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/RedForge/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /building & defending an enterprise/i,
    }),
  ).toBeVisible();
  await expect(page.getByText(/living cybersecurity engineering platform/i)).toBeVisible();
  await expect(page.getByRole("region", { name: "Evidence-backed updates" })).toBeVisible();
  await expect(page.locator(".engineering-activity-card")).toHaveCount(4);
  await expect(page.getByRole("link", { name: /scroll to explore/i })).toHaveAttribute("href", "#engineering-activity");
});

test("homepage omits content owned by dedicated routes", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("CURRENT OPERATION", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Featured Projects", exact: true })).toHaveCount(0);
  await expect(page.locator(".featured-projects, .projects-section, .operator-section")).toHaveCount(0);
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
});

test("focused homepage remains overflow-free at desktop, tablet, and mobile widths", async ({ page }) => {
  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 820, height: 1180 },
    { width: 412, height: 915 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    const widths = await page.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(widths.scroll).toBeLessThanOrEqual(widths.client);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("region", { name: "Evidence-backed updates" })).toBeVisible();
  }
});
