import { expect, test } from "@playwright/test";

test("documentation index publishes reviewed engineering records by category", async ({ page }) => {
  await page.goto("/documentation");
  await expect(page.getByRole("heading", { name: "Knowledge. Documented. Shared." })).toBeVisible();
  await expect(page.getByText("Engineering Log", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("Milestone Log", { exact: true }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "RF-DC01 Server Establishment Log" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Milestone 001 — Enterprise Blueprint Complete" })).toBeVisible();
});

test("server establishment report exposes the required engineering sections", async ({ page }) => {
  await page.goto("/documentation/server-establishment-log");
  await expect(page.getByRole("heading", { level: 1, name: "RF-DC01 Server Establishment Log" })).toBeVisible();
  for (const heading of ["Engineering objective", "Work performed", "Decisions and rationale", "Engineering lessons", "Reviewed engineering evidence", "Planned engineering actions"]) {
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }
  await expect(page.getByText("Reviewed record", { exact: true })).toBeVisible();
  await expect(page.getByText("Verified evidence", { exact: true })).toBeVisible();
  await expect(page.getByText("Evidence pending", { exact: true })).toBeVisible();
});

test("synchronized ADR records appear and preserve reviewed punctuation", async ({ page }) => {
  const records = [
    ["adr-001-it-department-organizational-structure", "ADR-001 — IT Department Organizational Structure"],
    ["adr-002-adoption-of-git-based-version-control", "ADR-002 — Adoption of Git-Based Version Control"],
    ["adr-003-selection-of-next-js-as-the-application-framework", "ADR-003 — Selection of Next.js as the Application Framework"],
    ["adr-004-adoption-of-cloud-deployment-through-vercel", "ADR-004 — Adoption of Cloud Deployment Through Vercel"],
    ["adr-005-adoption-of-a-modular-component-architecture", "ADR-005 — Adoption of a Modular Component Architecture"],
  ] as const;

  await page.goto("/documentation");
  await expect(page.getByRole("heading", { name: /ADR-001.*IT Department Organizational Structure/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /ADR-005.*Modular Component Architecture/i })).toBeVisible();

  for (const [slug, title] of records) {
    await page.goto(`/documentation/${slug}`);
    await expect(page.getByRole("heading", { level: 1, name: title })).toBeVisible();
    await expect(page.getByText(/reviewed documentation evidence/i)).toBeVisible();
    await expect(page.getByText(/does not claim deployment or technical validation evidence/i)).toBeVisible();
  }
});

test("published report redacts internal network and account values", async ({ page }) => {
  await page.goto("/documentation/server-establishment-log");
  const body = await page.locator("body").innerText();
  expect(body).not.toMatch(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
  expect(body).not.toContain("adm.jpulido");
  expect(body).not.toContain("j.pulido");
});

test("ENG-010 publishes verified telemetry without sensitive lab configuration", async ({ page }) => {
  await page.goto("/documentation/eng-010-centralized-telemetry-pipeline-deployment");
  await expect(page.getByRole("heading", { level: 1, name: "ENG-010 — Centralized Telemetry Pipeline Deployment" })).toBeVisible();
  await expect(page.getByText("Centralized telemetry validation record")).toBeVisible();
  await expect(page.getByText(/Process Creation events were searchable within Splunk/i)).toBeVisible();
  await expect(page.getByText("Evidence pending", { exact: true })).toBeVisible();
  const body = await page.locator("body").innerText();
  expect(body).not.toMatch(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
  expect(body).not.toContain("corp.redforge.test");
  expect(body).not.toContain("Jose Pulido");
});

test("homepage activity feed links to published reports", async ({ page }) => {
  await page.goto("/");
  const feed = page.getByRole("region", { name: "Evidence-backed updates" });
  await expect(feed.getByRole("heading", { name: "Evidence-backed updates" })).toBeVisible();
  await feed.getByRole("link", { name: /ENG-010.*Centralized Telemetry Pipeline Deployment/i }).click();
  await expect(page).toHaveURL(/\/documentation\/eng-010-centralized-telemetry-pipeline-deployment$/);
});

test("lab reflects verified identity progress without exposing addressing", async ({ page }) => {
  await page.goto("/lab");
  await expect(page.getByText("Windows Server 2025 — Implemented", { exact: true })).toBeVisible();
  await expect(page.getByText("Active Directory Domain Services — Implemented", { exact: true })).toBeVisible();
  await expect(page.getByText("Microsoft Sysmon — Implemented", { exact: true })).toBeVisible();
  await expect(page.getByText("Splunk Enterprise — Implemented", { exact: true })).toBeVisible();
  const body = await page.locator("body").innerText();
  expect(body).not.toMatch(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
});

test("unknown documentation records return 404", async ({ page }) => {
  const response = await page.goto("/documentation/not-a-record");
  expect(response?.status()).toBe(404);
});
