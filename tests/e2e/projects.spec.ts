import { expect, test } from "@playwright/test";

test("project index presents living metadata and links to project detail", async ({ page }) => {
  await page.goto("/projects");
  const flagship = page.getByRole("link", { name: /enterprise home lab/i }).first();
  await expect(flagship.getByText("3 records", { exact: true })).toBeVisible();
  await expect(flagship.getByText("Telemetry verified", { exact: true })).toBeVisible();
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

test("planned projects use governed snapshot, validation, and record states", async ({ page }) => {
  await page.goto("/projects/active-directory-lab");
  await expect(page.getByRole("heading", { level: 1, name: "Active Directory Lab" })).toBeVisible();
  await expect(page.getByText("Architecture nodes will be published after discovery.")).toBeVisible();
  await expect(page.getByText("0 published", { exact: true })).toBeVisible();
  await expect(page.getByText("Validation begins after the first implemented milestone.")).toBeVisible();
  await expect(page.getByText(/no engineering records are published because this project has not entered implementation/i)).toBeVisible();
});

test("flagship report exposes snapshot, validation, evidence, records, and retrospective", async ({ page, request }) => {
  await page.goto("/projects/enterprise-home-lab");

  const snapshot = page.getByRole("region", { name: "Project Snapshot" });
  await expect(snapshot.getByText("4 verified", { exact: true })).toBeVisible();
  await expect(snapshot.getByText("3 published", { exact: true })).toBeVisible();
  await expect(snapshot.getByText("Telemetry verified", { exact: true })).toBeVisible();
  await expect(page.locator("#overview .project-prose p")).toHaveCount(3);

  const validation = page.locator("#validation");
  await expect(validation.getByText("RF-WIN11-01 Sysmon forwarding confirmed.")).toBeVisible();
  await expect(validation.getByText("Splunk ingestion and controlled SPL retrieval validated.")).toBeVisible();
  await expect(validation.getByText("Group Policy validation remains pending.")).toBeVisible();

  await expect(page.getByText(/centralized telemetry pipeline operational/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: "Screenshot Gallery" })).toBeVisible();
  await expect(page.getByAltText(/enterprise home lab network topology/i)).toBeVisible();
  await expect(page.getByText("Biggest technical challenge", { exact: true })).toBeVisible();
  await expect(page.getByText("Tradeoffs considered", { exact: true })).toBeVisible();

  const records = page.locator("#records");
  for (const [id, route] of [
    ["RF-DC01", "/documentation/server-establishment-log"],
    ["ENG-010", "/documentation/eng-010-centralized-telemetry-pipeline-deployment"],
    ["ENG-011", "/documentation/eng-011-data-driven-enterprise-home-lab-topology"],
  ] as const) {
    await expect(records.getByText(id, { exact: true })).toBeVisible();
    expect((await request.get(route)).ok()).toBeTruthy();
  }

  const diagramResponse = await request.get("/projects/enterprise-home-lab/diagrams/network-topology.svg");
  expect(diagramResponse.ok()).toBeTruthy();
  expect(diagramResponse.headers()["content-type"]).toContain("image/svg+xml");
});
