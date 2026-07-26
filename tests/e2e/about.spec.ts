import { expect, test } from "@playwright/test";

test("about page explains the engineer, RedForge purpose, and specialization", async ({ page }) => {
  await page.goto("/about");

  await expect(page.getByRole("heading", { level: 1, name: "Jose Pulido" })).toBeVisible();
  for (const heading of [
    "How I got here",
    "Why offensive security",
    "How I approach the work",
    "The knowledge I’m building intentionally",
  ]) {
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }
  await expect(page.getByText(/my transition into cybersecurity was shaped by a career of accountability/i)).toBeVisible();
  await expect(page.getByText(/offensive security is most effective when it begins with operational understanding/i)).toBeVisible();
  await expect(page.getByText(/evidence-based, repeatable engineering/i)).toBeVisible();
});

test("technical focus is organized by supporting discipline", async ({ page }) => {
  await page.goto("/about");

  for (const category of [
    "Enterprise foundations",
    "Visibility & detection",
    "Automation & tooling",
    "Modern enterprise",
  ]) {
    await expect(page.getByRole("heading", { name: category })).toBeVisible();
  }
  await expect(page.locator(".skills-rail")).toHaveCount(0);
});

test("professional profile consolidates identity without duplicate actions or status UI", async ({ page }) => {
  await page.goto("/about");

  const profile = page.getByRole("complementary", { name: "Jose Pulido" });
  await expect(profile.getByRole("heading", { level: 1, name: "Jose Pulido" })).toBeVisible();
  await expect(profile.getByText("Offensive Security Engineering", { exact: true })).toBeVisible();
  await expect(profile.getByText("13 years U.S. Army leadership", { exact: true })).toBeVisible();
  await expect(profile.getByLabel("Engineering statement")).toContainText("Build.Understand.Secure.Assess.");
  await expect(profile.getByRole("link")).toHaveCount(0);
  await expect(page.locator(".about-snapshot")).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Current mission" })).toHaveCount(0);
  await expect(page.getByText("SYSTEM STATUS", { exact: true })).toHaveCount(0);
  await expect(page.locator(".system-status-track")).toHaveCount(0);
});

test("about page remains overflow-free across desktop, tablet, and mobile", async ({ page }) => {
  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 820, height: 1180 },
    { width: 412, height: 915 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/about");
    const widths = await page.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(widths.scroll).toBeLessThanOrEqual(widths.client);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: "View engineering records" })).toBeVisible();
  }
});

test("about actions retain keyboard-visible focus and destination routes", async ({ page, request }) => {
  await page.goto("/about");
  const records = page.getByRole("link", { name: "View engineering records" });
  await records.focus();
  await expect(records).toBeFocused();
  expect(await records.evaluate((element) => getComputedStyle(element).outlineStyle)).not.toBe("none");

  for (const route of ["/", "/about", "/documentation", "/contact"]) {
    expect((await request.get(route)).ok(), `${route} should resolve`).toBeTruthy();
  }
});
