import { expect, test } from "@playwright/test";

test("lab renders the approved enterprise architecture sequence from structured data", async ({ page }) => {
  await page.goto("/lab");
  await expect(page.getByRole("heading", { level: 1, name: "Enterprise Environment" })).toBeVisible();
  await expect(page.getByLabel("Environment purpose")).toBeVisible();
  const topology = page.getByLabel("Verified operational topology");
  for (const system of ["rf-dc01", "rf-win11-01", "splunk-enterprise"]) {
    await expect(topology.locator(`[data-node-id="${system}"]`)).toBeVisible();
  }
  for (const [id, hostname, platform] of [
    ["hyper-v", "RF-VMHOST01", "Microsoft Hyper-V"],
    ["rf-dc01", "RF-DC01", "Windows Server 2025"],
    ["rf-win11-01", "RF-WIN11-01", "Windows 11"],
    ["splunk-enterprise", "RF-SPLUNK01", "Splunk Enterprise"],
  ] as const) {
    const node = topology.locator(`[data-node-id="${id}"]`);
    await expect(node.getByText(hostname, { exact: true })).toBeVisible();
    await expect(node.getByText(platform, { exact: true })).toBeVisible();
  }
  await expect(topology.getByText("Windows security telemetry", { exact: true })).toHaveCount(1);
  await expect(topology.getByText("Sysmon telemetry", { exact: true })).toHaveCount(1);
  await expect(page.getByText("Reviewed implementation evidence", { exact: true })).toBeVisible();
  await expect(page.getByRole("img", { name: /organizational unit hierarchy/i })).toBeVisible();
  await expect(page.getByRole("img", { name: /validated Sysmon process-event search/i })).toBeVisible();
  await expect(page.getByText("Enterprise capability groups", { exact: true })).toBeVisible();
  await expect(page.getByText("Enterprise capability roadmap", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: /view engineering records/i })).toHaveAttribute("href", "/documentation");
});

test("operational and planned lifecycle states remain separate", async ({ page }) => {
  await page.goto("/lab");
  await expect(page.locator('[data-node-id="rf-dc01"]')).toHaveAttribute("data-status", "operational");
  const planned = page.getByRole("region", { name: "Planned capabilities" });
  await expect(planned.getByRole("button", { name: /RF-NETWORK-01/ })).toHaveAttribute("data-status", "planned");
  await expect(page.getByLabel("Topology status legend").getByText("Not yet implemented")).toBeVisible();
});

test("node details support pointer and keyboard interaction with visible focus", async ({ page }) => {
  await page.goto("/lab");
  const win11 = page.locator('[data-node-id="rf-win11-01"]');
  await win11.click();
  const details = page.getByRole("region", { name: "Selected topology node details" });
  await expect(details.getByRole("heading", { name: "RF-WIN11-01" })).toBeVisible();
  await expect(details.getByText(/Sysmon.*received and searchable/i)).toBeVisible();
  const splunk = page.locator('[data-node-id="splunk-enterprise"]');
  await splunk.focus();
  await expect(splunk).toBeFocused();
  expect(await splunk.evaluate((element) => getComputedStyle(element).outlineStyle)).not.toBe("none");
  await page.keyboard.press("Enter");
  await expect(details.getByRole("heading", { name: "RF-SPLUNK01" })).toBeVisible();
  await expect(details.getByText("Splunk Enterprise", { exact: true })).toBeVisible();
  for (const field of ["Purpose", "Roles", "Services", "Telemetry", "Related records"]) {
    await expect(details.getByText(field, { exact: true })).toBeVisible();
  }
});

test("selection focuses nodes and briefly identifies directly related paths", async ({ page }) => {
  await page.goto("/lab");
  const selected = page.locator('[data-node-id="rf-dc01"]');
  const inactive = page.locator('[data-node-id="rf-win11-01"]');
  await expect(selected).toHaveAttribute("aria-pressed", "true");
  await expect(inactive).toHaveAttribute("data-inactive", "true");
  expect(Number.parseFloat(await inactive.evaluate((element) => getComputedStyle(element).opacity))).toBeLessThan(1);

  await inactive.click();
  const activePath = page.locator('.telemetry-route[data-active="true"]');
  await expect(activePath).toBeAttached();
  expect(await activePath.evaluate((element) => getComputedStyle(element).animationDuration)).toBe("0.25s");
  await expect(inactive).toHaveCSS("opacity", "1");
});

test("lab topology is responsive and does not publish sensitive configuration", async ({ page }) => {
  await page.setViewportSize({ width: 412, height: 915 });
  await page.goto("/lab");
  const body = await page.locator("body").innerText();
  expect(body).not.toMatch(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
  expect(body).not.toContain("corp.redforge.test");
  expect(body).not.toContain("adm.jpulido");
  expect(body).not.toContain("None recorded");
  expect(body).not.toContain("No telemetry claim recorded");
  const widths = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
  expect(widths.scroll).toBeLessThanOrEqual(widths.client);
});

test("existing and current lab record routes remain available", async ({ request }) => {
  for (const route of ["/projects/enterprise-home-lab", "/documentation/server-establishment-log", "/documentation/eng-010-centralized-telemetry-pipeline-deployment", "/documentation/eng-011-data-driven-enterprise-home-lab-topology", "/documentation/eng-013-enterprise-active-directory-forest-deployment", "/documentation/eng-014-enterprise-security-monitoring-platform-deployment", "/documentation/milestone-004-enterprise-identity-security-foundation-complete"]) {
    expect((await request.get(route)).ok(), `${route} should resolve`).toBeTruthy();
  }
});
