import { expect, test } from "@playwright/test";

const routes = [
  { path: "/", canonical: "https://example.com/" },
  { path: "/features/", canonical: "https://example.com/features/" },
  { path: "/pricing/", canonical: "https://example.com/pricing/" },
  { path: "/order/", canonical: "https://example.com/order/" },
  { path: "/privacy-policy/", canonical: "https://example.com/privacy-policy/" },
  { path: "/terms/", canonical: "https://example.com/terms/" },
];

for (const route of routes) {
  test(`metadata ${route.path}`, async ({ page }) => {
    await page.goto(route.path);

    await expect(page).toHaveTitle(/Kasira/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", route.canonical);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.+/);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /.+/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /og-image\.png$/,
    );
    await expect(page.locator("html")).toHaveAttribute("lang", "id");
  });
}

test("halaman login dan register tidak tersedia", async ({ page }) => {
  const loginResponse = await page.goto("/login/");
  expect(loginResponse?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Halaman tidak ditemukan" })).toBeVisible();

  const registerResponse = await page.goto("/register/");
  expect(registerResponse?.status()).toBe(404);
});

test("robots.txt dan sitemap.xml tersedia", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  const robotsBody = await robots.text();
  expect(robotsBody).toContain("Sitemap: https://example.com/sitemap.xml");
  expect(robotsBody).toContain("Allow: /");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const sitemapBody = await sitemap.text();
  for (const route of routes) {
    expect(sitemapBody).toContain(`https://example.com${route.path}`);
  }
});

test("structured data tidak memuat rating atau ulasan fiktif", async ({ page }) => {
  await page.goto("/");
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  const joined = blocks.join("\n");

  expect(joined).toContain("SoftwareApplication");
  expect(joined).toContain("FAQPage");
  expect(joined).not.toContain("aggregateRating");
  expect(joined).not.toContain('"review"');
});
