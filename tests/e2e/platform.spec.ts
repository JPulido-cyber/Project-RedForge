import { expect, test } from "@playwright/test";

const transformedRoutes = [
  ["/about", "The Engineer Behind RedForge"],
  ["/lab", "Enterprise Home Lab"],
  ["/projects", "Engineering Portfolio"],
  ["/documentation", "Knowledge. Documented. Shared."],
  ["/contact", "Get in Touch"],
] as const;

for (const [route, heading] of transformedRoutes) {
  test(`${route} renders its approved platform experience`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { name: heading, exact: true }).first()).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  });
}

test("lab presentation separates verified topology from planned capabilities", async ({ page }) => {
  await page.goto("/lab");
  await expect(page.getByLabel("Verified operational topology")).toBeVisible();
  await expect(page.getByRole("region", { name: "Planned capabilities" })).toBeVisible();
});

test("mobile platform routes do not overflow horizontally", async ({ page }) => {
  await page.setViewportSize({ width: 412, height: 915 });
  for (const route of ["/", "/lab", "/projects", "/projects/enterprise-home-lab"]) {
    await page.goto(route);
    const widths = await page.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(widths.scroll).toBeLessThanOrEqual(widths.client);
  }
});

test("reduced motion preference preserves readable content", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: /explore the lab/i })).toBeVisible();
});

test("primary internal navigation links resolve", async ({ page, request }) => {
  await page.goto("/");
  const hrefs = await page.getByRole("navigation", { name: "Primary navigation" }).locator("a").evaluateAll((links) =>
    links.map((link) => link.getAttribute("href")).filter((href): href is string => Boolean(href && href.startsWith("/"))),
  );

  for (const href of new Set(hrefs)) {
    const response = await request.get(href);
    expect(response.ok(), `${href} should resolve`).toBeTruthy();
  }
});

test("platform shell supports keyboard navigation and visible focus", async ({ page }) => {
  await page.goto("/projects");
  await page.keyboard.press("Tab");
  const focusedLink = page.locator(":focus");
  await expect(focusedLink).toHaveAttribute("href", "/");
  await expect(focusedLink).toBeVisible();
  const outlineStyle = await focusedLink.evaluate((element) => getComputedStyle(element).outlineStyle);
  expect(outlineStyle).not.toBe("none");
});
