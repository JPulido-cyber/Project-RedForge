import { expect, test } from "@playwright/test";

test("documentation index publishes reviewed engineering records by category", async ({ page }) => {
  await page.goto("/documentation");
  await expect(page.getByRole("heading", { name: "Knowledge. Documented. Shared." })).toBeVisible();
  await expect(page.getByText("Engineering Log", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("Milestone Log", { exact: true }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "ENG-014 — Enterprise Security Monitoring Platform Deployment" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Milestone-004 — Enterprise Identity & Security Foundation Complete" })).toBeVisible();
  const taxonomy = page.locator(".documentation-rail");
  await expect(taxonomy.getByText(/^Engineering Logs\s*14$/)).toBeVisible();
  await expect(taxonomy.getByText(/^Architecture Decision Records\s*6$/)).toBeVisible();
  await expect(taxonomy.getByText(/^Milestones\s*4$/)).toBeVisible();
  for (const deferred of ["Build Guide", "Standard Operating Procedure", "Troubleshooting Note", "Lesson Learned", "Validation Record"]) {
    await expect(taxonomy.getByText(deferred, { exact: true })).toHaveCount(0);
  }
});

test("record-type controls expose purpose and linkable filtered views", async ({ page }) => {
  await page.goto("/documentation");
  const filters = page.getByRole("navigation", { name: "Filter documentation by record type" });

  await expect(filters.getByText(/complete implementation record for a single engineering effort/i)).toBeVisible();
  await expect(filters.getByText(/which alternatives were considered/i)).toBeVisible();
  await expect(filters.getByText(/major achievements spanning multiple Engineering Logs/i)).toBeVisible();
  await expect(filters.getByRole("link", { name: /Engineering Logs 14/i })).toHaveAttribute("href", "/documentation?type=engineering-logs");
  await expect(filters.getByRole("link", { name: /Architecture Decision Records 6/i })).toHaveAttribute("href", "/documentation?type=architecture-decisions");
  await expect(filters.getByRole("link", { name: /Milestones 4/i })).toHaveAttribute("href", "/documentation?type=milestones");
  await expect(filters.getByRole("link", { name: /All records 24/i })).toHaveAttribute("href", "/documentation");

  await Promise.all([
    page.waitForURL(/\/documentation\?type=engineering-logs$/),
    filters.getByRole("link", { name: /Engineering Logs 14/i }).click(),
  ]);
  await expect(page.locator(".documentation-card")).toHaveCount(14);
  await expect(page.locator(".documentation-card .technical-eyebrow").first()).toHaveText("Engineering Log");

  await page.goto("/documentation?type=architecture-decisions");
  await expect(filters.getByRole("link", { name: /Architecture Decision Records 6/i })).toHaveAttribute("aria-current", "page");
  await expect(page.locator(".documentation-card")).toHaveCount(6);
  await expect(page.locator(".documentation-card .technical-eyebrow").first()).toHaveText("Architecture Decision Record");

  await page.goto("/documentation?type=milestones");
  await expect(page.locator(".documentation-card")).toHaveCount(4);
  await expect(page.locator(".documentation-card .technical-eyebrow")).toHaveText([
    "Milestone Log",
    "Milestone Log",
    "Milestone Log",
    "Milestone Log",
  ]);

  await page.goto("/documentation");
  await expect(page.locator(".documentation-card")).toHaveCount(24);
});

test("record-type filters retain keyboard focus visibility", async ({ page }) => {
  await page.goto("/documentation");
  const filter = page.getByRole("link", { name: /Engineering Logs 14/i });
  await filter.focus();
  await expect(filter).toBeFocused();
  const outline = await filter.evaluate((element) => getComputedStyle(element).outlineStyle);
  expect(outline).not.toBe("none");
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
    ["adr-006-adoption-of-an-evidence-first-engineering-documentation-model", "ADR-006 — Adoption of an Evidence-First Engineering Documentation Model"],
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
  await expect(page.getByText("ENG-010 validation record")).toBeVisible();
  await expect(page.getByText(/Process Creation events were searchable within Splunk/i)).toBeVisible();
  await expect(page.getByText("Evidence pending", { exact: true })).toBeVisible();
  const body = await page.locator("body").innerText();
  expect(body).not.toMatch(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
  expect(body).not.toContain("corp.redforge.test");
  expect(body).not.toContain("Jose Pulido");
});

test("verified Engineering Logs scale through stable synchronized routes", async ({ page }) => {
  await page.goto("/documentation/eng-001-project-redforge-charter");
  await expect(page.getByRole("heading", { level: 1, name: "ENG-001 — Project RedForge Charter" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Reviewed engineering evidence" })).toBeVisible();

  await page.goto("/documentation/server-establishment-log");
  await expect(page.getByRole("heading", { level: 1, name: "RF-DC01 Server Establishment Log" })).toBeVisible();
});

test("current identity and monitoring records publish without sensitive configuration", async ({ page }) => {
  for (const [slug, title] of [
    ["eng-013-enterprise-active-directory-forest-deployment", "ENG-013 — Enterprise Active Directory Forest Deployment"],
    ["eng-014-enterprise-security-monitoring-platform-deployment", "ENG-014 — Enterprise Security Monitoring Platform Deployment"],
  ] as const) {
    await page.goto(`/documentation/${slug}`);
    await expect(page.getByRole("heading", { level: 1, name: title })).toBeVisible();
    const body = await page.locator("body").innerText();
    expect(body).not.toMatch(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
    expect(body).not.toContain("corp.redforge.test");
    expect(body).not.toContain("Jose Pulido");
  }
});

test("current identity and monitoring records present reviewed screenshot evidence", async ({ page }) => {
  await page.goto("/documentation/eng-013-enterprise-active-directory-forest-deployment");
  await expect(page.getByRole("img", { name: /RedForge enterprise test forest/i })).toBeVisible();
  await expect(page.getByRole("img", { name: /implemented RedForge policy objects/i })).toBeVisible();
  await expect(page.getByText("Reviewed record", { exact: true })).toHaveCount(5);

  await page.goto("/documentation/eng-014-enterprise-security-monitoring-platform-deployment");
  await expect(page.getByRole("img", { name: /RedForge indexes and indexed events/i })).toBeVisible();
  await expect(page.getByRole("img", { name: /validated Sysmon process-event search/i })).toBeVisible();
  await expect(page.getByText("Reviewed record", { exact: true })).toHaveCount(6);
});

test("homepage activity feed links to the latest published report", async ({ page }) => {
  await page.goto("/");
  const feed = page.getByRole("region", { name: "Evidence-backed updates" });
  await expect(feed.getByRole("heading", { name: "Evidence-backed updates" })).toBeVisible();
  await feed.getByRole("link", { name: /ENG-014.*Enterprise Security Monitoring Platform Deployment/i }).click();
  await expect(page).toHaveURL(/\/documentation\/eng-014-enterprise-security-monitoring-platform-deployment$/);
});

test("lab reflects verified identity progress without exposing addressing", async ({ page }) => {
  await page.goto("/lab");
  await expect(page.getByRole("button", { name: "RF-DC01 Windows Server 2025 Operational" })).toBeVisible();
  await expect(page.getByText("Active Directory Domain Services", { exact: true })).toBeVisible();
  await expect(page.getByText("Sysmon", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "RF-SPLUNK01 Splunk Enterprise Operational" })).toBeVisible();
  const body = await page.locator("body").innerText();
  expect(body).not.toMatch(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
});

test("unknown documentation records return 404", async ({ page }) => {
  const response = await page.goto("/documentation/not-a-record");
  expect(response?.status()).toBe(404);
});
