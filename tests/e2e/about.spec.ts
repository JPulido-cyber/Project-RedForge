import { expect, test } from "@playwright/test";

test("about page explains the engineer, RedForge purpose, and specialization", async ({ page }) => {
  await page.goto("/about");

  await expect(page.getByRole("heading", { level: 1, name: "The Engineer Behind RedForge" })).toBeVisible();
  for (const heading of [
    "From leadership to engineering",
    "Why RedForge exists",
    "Engineering philosophy",
    "Current mission",
    "Core technical focus",
  ]) {
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }
  await expect(page.getByText(/transitioning into offensive cybersecurity/i)).toBeVisible();
  await expect(page.getByText(/not a collection of isolated IT exercises/i)).toBeVisible();
  await expect(page.getByText(/evidence-based and repeatable/i)).toBeVisible();
});

test("technical focus is organized by supporting discipline", async ({ page }) => {
  await page.goto("/about");

  for (const category of [
    "Enterprise infrastructure",
    "Identity",
    "Security operations",
    "Programming & automation",
    "Cloud",
  ]) {
    await expect(page.getByRole("heading", { name: category })).toBeVisible();
  }
  await expect(page.locator(".skills-rail")).toHaveCount(0);
});

test("professional profile provides accessible actions without low-value status UI", async ({ page }) => {
  await page.goto("/about");

  const profileActions = page.getByRole("navigation", { name: "Professional profile actions" });
  await expect(profileActions.getByRole("link", { name: "Resume" })).toHaveAttribute("href", "/contact#resume");
  await expect(profileActions.getByRole("link", { name: "GitHub" })).toHaveAttribute("rel", "noopener noreferrer");
  await expect(profileActions.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("rel", "noopener noreferrer");
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
    await expect(page.getByRole("link", { name: "Resume", exact: true })).toBeVisible();
  }
});

test("about actions retain keyboard-visible focus and destination routes", async ({ page, request }) => {
  await page.goto("/about");
  const resume = page.getByRole("navigation", { name: "Professional profile actions" }).getByRole("link", { name: "Resume" });
  await resume.focus();
  await expect(resume).toBeFocused();
  expect(await resume.evaluate((element) => getComputedStyle(element).outlineStyle)).not.toBe("none");

  for (const route of ["/", "/about", "/documentation", "/contact"]) {
    expect((await request.get(route)).ok(), `${route} should resolve`).toBeTruthy();
  }
});
