import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("homepage", () => {
  test("menampilkan hero dan bagian utama tanpa overflow horizontal", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Kelola Penjualan dan Bisnis",
    );
    await expect(
      page.getByRole("heading", { name: "Dirancang untuk berbagai jenis bisnis" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Masih Mengelola Bisnis Secara Manual?" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Pilih Paket Sesuai Kebutuhan Bisnis" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Pertanyaan yang Sering Diajukan" }),
    ).toBeVisible();

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    expect(hasOverflow).toBe(false);
  });

  test("grafik analitik memuat dan filter mengubah data", async ({ page }) => {
    await page.goto("/");
    await page.locator("#analitik").scrollIntoViewIfNeeded();

    await expect(page.getByRole("heading", { name: "Analitik Penjualan" })).toBeVisible();
    await expect(page.getByText("Rp 127.000.000").first()).toBeVisible();

    await page.getByRole("button", { name: "7 Hari", exact: true }).click();
    await expect(page.getByText("Rp 26.200.000").first()).toBeVisible();

    await page.getByRole("button", { name: "30 Hari", exact: true }).click();
    await expect(page.getByText("Rp 108.200.000").first()).toBeVisible();
  });

  test("FAQ dapat dibuka dan ditutup dengan keyboard", async ({ page }) => {
    await page.goto("/#faq");
    const trigger = page.getByRole("button", { name: "Apa itu aplikasi kasir ini?" });

    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  test("tidak memiliki pelanggaran aksesibilitas serius", async ({ page }) => {
    await page.goto("/");
    await page.locator("#analitik").scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Analitik Penjualan" })).toBeVisible();

    // Mockup produk bersifat dekoratif (aria-hidden) dan menggunakan teks
    // miniatur; konten setara selalu tersedia sebagai teks biasa di halaman.
    const results = await new AxeBuilder({ page })
      .exclude('[aria-hidden="true"]')
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const serious = results.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );

    expect(
      serious.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        nodes: violation.nodes.map((node) => node.target),
      })),
    ).toEqual([]);
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("menu mobile dapat dibuka, ditutup dengan Escape, dan tanpa overflow", async ({ page }) => {
    await page.goto("/");

    const toggle = page.getByRole("button", { name: "Buka menu navigasi" });
    await toggle.click();
    await expect(page.getByRole("button", { name: "Tutup menu navigasi" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await expect(page.getByRole("link", { name: "Harga" }).last()).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Buka menu navigasi" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    expect(hasOverflow).toBe(false);
  });

  test("tidak overflow pada 320px", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto("/");
    await page.locator("#harga").scrollIntoViewIfNeeded();

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    expect(hasOverflow).toBe(false);
  });
});

test.describe("SEO", () => {
  test("metadata utama dan structured data tersedia", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Aplikasi Kasir Modern untuk Bisnis Indonesia/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://example.com/",
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /Aplikasi kasir/,
    );

    const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(jsonLd.some((content) => content.includes("SoftwareApplication"))).toBe(true);
    expect(jsonLd.some((content) => content.includes("FAQPage"))).toBe(true);
  });

  test("halaman pembayaran tidak diindeks", async ({ page }) => {
    await page.goto("/payment/");
    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute("content", /noindex/);
  });
});
