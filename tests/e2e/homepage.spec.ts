import { expect, test } from "@playwright/test";

test("homepage presents the approved RedForge command-center narrative", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/RedForge/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /building & defending an enterprise/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByText(/progression toward offensive cybersecurity/i),
  ).toBeVisible();
  await expect(page.getByText("ENTERPRISE SECURITY ENGINEERING", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Discipline. Precision. Progress.",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText("Build deliberately.", { exact: true })).toBeVisible();
  await expect(page.getByText("Document everything.", { exact: true })).toBeVisible();
  await expect(page.getByText("Validate relentlessly.", { exact: true })).toBeVisible();
  await expect(page.getByText("Evidence over assumption.", { exact: true })).toBeVisible();
  await expect(page.getByText("Engineer continuously.", { exact: true })).toBeVisible();
  await expect(page.getByText("Every milestone moves forward.", { exact: true })).toBeVisible();
  await expect(page.getByText(/understand the enterprise/i)).toBeVisible();
  await expect(page.getByText(/outthink the adversary/i)).toBeVisible();
  await expect(page.locator(".network-status-panel")).toContainText(
    "MONITORING",
  );
  await expect(page.locator(".hero-telemetry-panel")).toHaveCount(3);
  await expect(page.locator(".metric-icon")).toHaveCount(6);
  await expect(page.locator(".engineering-principle-icon")).toHaveCount(3);
  await expect(
    page.getByText("DISCIPLINE. PRECISION. PROGRESS.", { exact: true }),
  ).toHaveCount(2);
  await expect(page.locator(".engineering-activity")).toHaveCount(0);
  await expect(page.getByText("14", { exact: true })).toBeVisible();
  await expect(page.getByText("ENGINEERING LOGS", { exact: true })).toBeVisible();
  await expect(page.getByText("4", { exact: true })).toBeVisible();
  await expect(page.getByText("MILESTONES", { exact: true })).toBeVisible();
  await expect(page.getByText("15", { exact: true })).toBeVisible();
  await expect(page.getByText("PUBLISHED EVIDENCE ASSETS", { exact: true })).toBeVisible();
});

test("homepage leaves project discovery to dedicated routes", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("CURRENT OPERATION", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Featured Projects", exact: true })).toHaveCount(0);
  await expect(page.locator(".featured-projects, .projects-section, .operator-section")).toHaveCount(0);
  await expect(page.locator(".current-projects, .current-project-card")).toHaveCount(0);
  await expect(page.locator(".engineering-activity")).toHaveCount(0);
  await expect(page.getByText(/every system.*backed by evidence/i)).toHaveCount(0);
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
});

test("focused homepage remains overflow-free at desktop, tablet, and mobile widths", async ({ page }) => {
  for (const viewport of [
    { width: 2560, height: 1440 },
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
    await expect(page.getByText(/understand the enterprise/i)).toBeVisible();
  }
});
