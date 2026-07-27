import { expect, test } from "@playwright/test";

const email = "j.pulido.cyber@outlook.com";

test("contact page presents email as the primary professional action", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("heading", { level: 1, name: "Get in Touch" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Start a Conversation" })).toBeVisible();
  await expect(page.getByRole("link", { name: email })).toHaveAttribute("href", `mailto:${email}`);
  await expect(page.getByRole("link", { name: /send email/i })).toHaveAttribute("href", `mailto:${email}`);
  await expect(page.getByRole("button", { name: "Copy Address" })).toBeVisible();
});

test("copy address action confirms clipboard success", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"], { origin: "http://127.0.0.1:3100" });
  await page.goto("/contact");
  await page.getByRole("button", { name: "Copy Address" }).click();
  await expect(page.getByText("Email address copied.")).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(email);
});

test("professional links and response expectations remain direct and safe", async ({ page }) => {
  await page.goto("/contact");
  const links = page.getByRole("navigation", { name: "Professional links" });
  await expect(links.getByRole("link", { name: /linkedin/i })).toHaveAttribute("href", /linkedin\.com/);
  await expect(links.getByRole("link", { name: /github/i })).toHaveAttribute("href", "https://github.com/JPulido-cyber");
  await expect(links.getByRole("link", { name: /resume \/ profile/i })).toHaveAttribute("href", "/about");
  await expect(page.getByRole("heading", { name: "Response Window" })).toBeVisible();
  await expect(page.getByText(/1–2 business days/i)).toBeVisible();
  await expect(page.getByText(/do not submit classified, proprietary, sensitive operational/i)).toBeVisible();
});

test("contact experience remains compact and responsive", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1080 });
  await page.goto("/contact");
  const footer = await page.locator("footer").boundingBox();
  expect(footer?.y).toBeLessThan(1080);

  await page.setViewportSize({ width: 412, height: 915 });
  await page.goto("/contact");
  const widths = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
  expect(widths.scroll).toBeLessThanOrEqual(widths.client);
  await expect(page.getByRole("button", { name: "Copy Address" })).toBeVisible();
});
