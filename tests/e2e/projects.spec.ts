import { expect, test } from "@playwright/test";

test("project index presents living metadata and links to project detail", async ({ page }) => {
  await page.goto("/projects");
  const flagship = page.getByRole("link", { name: /enterprise home lab/i }).first();
  await expect(flagship.getByText("4 records", { exact: true })).toBeVisible();
  await expect(flagship.getByText("Foundation validated", { exact: true })).toBeVisible();
  await flagship.click();
  await expect(page).toHaveURL(/\/projects\/enterprise-home-lab$/);
  await expect(page.getByRole("heading", { level: 1, name: "Enterprise Home Lab" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Project sections" })).toBeVisible();
});

test("unknown project slugs render the application 404", async ({ page }) => {
  const response = await page.goto("/projects/not-a-project");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: /not found/i })).toBeVisible();
});

test("completed identity and monitoring projects present operational evidence", async ({ page }) => {
  await page.goto("/projects/active-directory-lab");
  await expect(page.getByRole("heading", { level: 1, name: "Enterprise Active Directory" })).toBeVisible();
  await expect(page.getByText("Validated", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("2 published", { exact: true })).toBeVisible();
  await expect(page.getByText("Enterprise forest and domain controller operational.")).toBeVisible();

  await page.goto("/projects/splunk-detection-lab");
  await expect(page.getByRole("heading", { level: 1, name: "Enterprise Security Monitoring" })).toBeVisible();
  await expect(page.getByText("Splunk Enterprise and enterprise indexes operational.")).toBeVisible();
  await expect(page.getByText("Detection engineering remains planned.")).toBeVisible();
});

test("flagship report exposes snapshot, validation, evidence, records, and retrospective", async ({ page, request }) => {
  await page.goto("/projects/enterprise-home-lab");

  const snapshot = page.getByRole("region", { name: "Project Snapshot" });
  await expect(snapshot.getByText("4 verified", { exact: true })).toBeVisible();
  await expect(snapshot.getByText("4 published", { exact: true })).toBeVisible();
  await expect(snapshot.getByText("Foundation validated", { exact: true })).toBeVisible();
  await expect(page.locator("#overview .project-prose p")).toHaveCount(3);

  const validation = page.locator("#validation");
  await expect(validation.getByText("Enterprise Active Directory forest deployment validated in ENG-013.")).toBeVisible();
  await expect(validation.getByText("Enterprise indexes, SPL searches, and operational dashboards validated.")).toBeVisible();
  await expect(validation.getByText("Detection engineering and offensive-security validation remain future work.")).toBeVisible();

  await expect(page.getByText(/enterprise identity & security foundation complete/i).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Screenshot Gallery" })).toBeVisible();
  await expect(page.getByRole("img", { name: /active directory evidence pending public redaction review/i })).toBeVisible();
  await expect(page.getByRole("img", { name: /splunk enterprise evidence pending public redaction review/i })).toBeVisible();
  await expect(page.getByText("Biggest technical challenge", { exact: true })).toBeVisible();
  await expect(page.getByText("Tradeoffs considered", { exact: true })).toBeVisible();

  const records = page.locator("#records");
  for (const [id, route] of [
    ["ENG-012", "/documentation/eng-012-engineering-platform-architecture-refinement"],
    ["ENG-013", "/documentation/eng-013-enterprise-active-directory-forest-deployment"],
    ["ENG-014", "/documentation/eng-014-enterprise-security-monitoring-platform-deployment"],
    ["MILESTONE-004", "/documentation/milestone-004-enterprise-identity-security-foundation-complete"],
  ] as const) {
    await expect(records.getByText(id, { exact: true })).toBeVisible();
    expect((await request.get(route)).ok()).toBeTruthy();
  }

  const diagramResponse = await request.get("/projects/enterprise-home-lab/diagrams/network-topology.svg");
  expect(diagramResponse.ok()).toBeTruthy();
  expect(diagramResponse.headers()["content-type"]).toContain("image/svg+xml");
});
