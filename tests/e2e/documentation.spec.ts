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

test("published report redacts internal network and account values", async ({ page }) => {
  await page.goto("/documentation/server-establishment-log");
  const body = await page.locator("body").innerText();
  expect(body).not.toMatch(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
  expect(body).not.toContain("adm.jpulido");
  expect(body).not.toContain("j.pulido");
});

test("homepage activity feed links to published reports", async ({ page }) => {
  await page.goto("/");
  const feed = page.getByRole("region", { name: "Evidence-backed updates" });
  await expect(feed.getByRole("heading", { name: "Evidence-backed updates" })).toBeVisible();
  await feed.getByRole("link", { name: /RF-DC01 Server Establishment Log/i }).click();
  await expect(page).toHaveURL(/\/documentation\/server-establishment-log$/);
});

test("lab reflects verified identity progress without exposing addressing", async ({ page }) => {
  await page.goto("/lab");
  await expect(page.getByText("Windows Server 2025 — Implemented", { exact: true })).toBeVisible();
  await expect(page.getByText("Active Directory Domain Services — Implemented", { exact: true })).toBeVisible();
  const body = await page.locator("body").innerText();
  expect(body).not.toMatch(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
});

test("unknown documentation records return 404", async ({ page }) => {
  const response = await page.goto("/documentation/not-a-record");
  expect(response?.status()).toBe(404);
});
