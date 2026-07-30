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
  await expect(
    page.getByText(/foundations behind offensive security/i),
  ).toBeVisible();
  await expect(page.getByText("ENTERPRISE SECURITY ENGINEERING", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Discipline. Precision. Progress.",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText(/engineer the enterprise/i)).toBeVisible();
  await expect(page.getByText(/master the adversary/i)).toBeVisible();
  await expect(page.locator(".network-status-panel")).toContainText(
    "MONITORING",
  );
  await expect(page.getByRole("region", { name: "Evidence-backed updates" })).toBeVisible();
  await expect(page.locator(".engineering-activity-card")).toHaveCount(4);
  await expect(
    page.getByRole("region", { name: "Verified engineering platforms" }),
  ).toBeVisible();
  await expect(page.locator(".current-project-card")).toHaveCount(3);
  await expect(page.getByText("14", { exact: true })).toBeVisible();
  await expect(page.getByText("ENGINEERING LOGS", { exact: true })).toBeVisible();
  await expect(page.getByText("4", { exact: true })).toBeVisible();
  await expect(page.getByText("MILESTONES", { exact: true })).toBeVisible();
  await expect(page.getByText("15", { exact: true })).toBeVisible();
  await expect(page.getByText("PUBLISHED EVIDENCE ASSETS", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("link", { name: /every system.*backed by evidence/i }),
  ).toHaveAttribute("href", "#engineering-activity");
});

test("homepage keeps dedicated-route content concise", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("CURRENT OPERATION", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Featured Projects", exact: true })).toHaveCount(0);
  await expect(page.locator(".featured-projects, .projects-section, .operator-section")).toHaveCount(0);
  await expect(page.locator(".current-project-card p")).toHaveCount(3);
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
    await expect(page.getByRole("heading", { name: "Discipline. Precision. Progress." })).toBeVisible();
    await expect(
      page.getByRole("region", { name: "Verified engineering platforms" }),
    ).toBeVisible();
    await expect(page.getByRole("region", { name: "Evidence-backed updates" })).toBeVisible();
  }
});
