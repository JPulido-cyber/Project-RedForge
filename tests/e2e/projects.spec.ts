import { expect, test } from "@playwright/test";

test("project index links to a project detail page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /enterprise home lab/i }).first().click();
  await expect(page).toHaveURL(/\/projects\/enterprise-home-lab$/);
  await expect(page.getByRole("heading", { level: 1, name: "Enterprise Home Lab" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Project sections" })).toBeVisible();
});

test("unknown project slugs render the application 404", async ({ page }) => {
  const response = await page.goto("/projects/not-a-project");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: /not found/i })).toBeVisible();
});

test("planned projects use the shared experience", async ({ page }) => {
  await page.goto("/projects/active-directory-lab");
  await expect(page.getByRole("heading", { level: 1, name: "Active Directory Lab" })).toBeVisible();
  await expect(page.getByText("Architecture nodes will be published after discovery.")).toBeVisible();
});

test("flagship report exposes qualified inventories and editable architecture", async ({ page, request }) => {
  await page.goto("/projects/enterprise-home-lab");

  await expect(page.getByText(/server inventory — implemented \/ planned/i)).toBeVisible();
  await expect(page.getByText(/no ingestion rate, retention, detection, or coverage metrics are asserted/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: "Screenshot Gallery" })).toBeVisible();
  await expect(page.getByAltText(/enterprise home lab network topology/i)).toBeVisible();

  const diagramResponse = await request.get("/projects/enterprise-home-lab/diagrams/network-topology.svg");
  expect(diagramResponse.ok()).toBeTruthy();
  expect(diagramResponse.headers()["content-type"]).toContain("image/svg+xml");
});
