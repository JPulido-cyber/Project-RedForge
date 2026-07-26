import { expect, test } from "@playwright/test";

test("lab renders verified systems, containment, and relationships from structured data", async ({ page }) => {
  await page.goto("/lab");
  const topology = page.getByLabel("Verified operational topology");
  await expect(topology.getByRole("heading", { name: "VMware Workstation" })).toBeVisible();
  for (const system of ["rf-dc01", "rf-win11-01", "splunk-enterprise"]) {
    await expect(topology.locator(`[data-node-id="${system}"]`)).toBeVisible();
  }
  const boundary = page.locator(".topology-boundary");
  await expect(boundary.getByRole("button", { name: /RF-DC01/ })).toBeVisible();
  await expect(boundary.getByRole("button", { name: /RF-WIN11-01/ })).toBeVisible();
  const relationships = page.getByRole("region", { name: "Verified relationships" });
  for (const relation of ["Domain identity", "Internal DNS", "Windows security telemetry", "Sysmon telemetry"]) {
    await expect(relationships.getByText(relation, { exact: true })).toBeVisible();
  }
});

test("operational and planned lifecycle states remain separate", async ({ page }) => {
  await page.goto("/lab");
  await expect(page.locator('[data-node-id="rf-dc01"]')).toHaveAttribute("data-status", "operational");
  const planned = page.getByRole("region", { name: "Planned capabilities" });
  await expect(planned.getByRole("button", { name: /Network Segmentation Layer/ })).toHaveAttribute("data-status", "planned");
  await expect(planned.getByText(/not operational infrastructure or implementation evidence/i)).toBeVisible();
});

test("node details support pointer and keyboard interaction with visible focus", async ({ page }) => {
  await page.goto("/lab");
  const win11 = page.locator('[data-node-id="rf-win11-01"]');
  await win11.click();
  const details = page.getByRole("region", { name: "Selected topology node details" });
  await expect(details.getByRole("heading", { name: "RF-WIN11-01" })).toBeVisible();
  await expect(details.getByText(/Sysmon telemetry is received and searchable/i)).toBeVisible();
  const splunk = page.locator('[data-node-id="splunk-enterprise"]');
  await splunk.focus();
  await expect(splunk).toBeFocused();
  expect(await splunk.evaluate((element) => getComputedStyle(element).outlineStyle)).not.toBe("none");
  await page.keyboard.press("Enter");
  await expect(details.getByRole("heading", { name: "Splunk Enterprise" })).toBeVisible();
});

test("lab topology is responsive and does not publish sensitive configuration", async ({ page }) => {
  await page.setViewportSize({ width: 412, height: 915 });
  await page.goto("/lab");
  const body = await page.locator("body").innerText();
  expect(body).not.toMatch(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
  expect(body).not.toContain("corp.redforge.test");
  expect(body).not.toContain("adm.jpulido");
  const widths = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
  expect(widths.scroll).toBeLessThanOrEqual(widths.client);
});

test("existing and new lab record routes remain available", async ({ request }) => {
  for (const route of ["/projects/enterprise-home-lab", "/documentation/server-establishment-log", "/documentation/eng-010-centralized-telemetry-pipeline-deployment", "/documentation/eng-011-data-driven-enterprise-home-lab-topology"]) {
    expect((await request.get(route)).ok(), `${route} should resolve`).toBeTruthy();
  }
});
