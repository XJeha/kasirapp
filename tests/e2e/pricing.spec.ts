import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function getProCard(page: import("@playwright/test").Page) {
  return page.locator("article").filter({
    has: page.getByRole("heading", { name: "Pro", exact: true }),
  });
}

test.describe("pricing mobile disclosure", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("rincian fitur paket dan tabel perbandingan dapat dibuka", async ({ page }) => {
    await page.goto("/pricing/");
    const proCard = await getProCard(page);

    const featureToggle = proCard.getByRole("button", {
      name: /rincian fitur paket Pro/,
    });
    await expect(featureToggle).toHaveAttribute("aria-expanded", "false");
    await expect(featureToggle).toHaveAttribute("aria-controls", "plan-features-pro");
    await expect(proCard.getByText("Manajemen stok")).toBeHidden();

    await featureToggle.click();
    await expect(featureToggle).toHaveAttribute("aria-expanded", "true");
    await expect(proCard.getByText("Manajemen stok")).toBeVisible();

    await featureToggle.click();
    await expect(featureToggle).toHaveAttribute("aria-expanded", "false");
    await expect(proCard.getByText("Manajemen stok")).toBeHidden();

    const tableToggle = page.getByRole("button", {
      name: /tabel perbandingan paket/,
    });
    await expect(tableToggle).toHaveAttribute("aria-expanded", "false");
    await expect(
      page.getByRole("table", { name: "Perbandingan fitur paket Basic, Pro, dan Business" }),
    ).toBeHidden();

    await tableToggle.click();
    await expect(tableToggle).toHaveAttribute("aria-expanded", "true");
    await expect(
      page.getByRole("table", { name: "Perbandingan fitur paket Basic, Pro, dan Business" }),
    ).toBeVisible();

    const results = await new AxeBuilder({ page })
      .exclude('[aria-hidden="true"]')
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(
      results.violations
        .filter((violation) => violation.impact === "serious" || violation.impact === "critical")
        .map((violation) => violation.id),
    ).toEqual([]);
  });

  test("desktop menampilkan rincian tanpa tombol dropdown", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/pricing/");
    const proCard = await getProCard(page);

    await expect(proCard.getByText("Manajemen stok")).toBeVisible();
    await expect(proCard.getByRole("button", { name: /rincian fitur paket Pro/ })).toBeHidden();
    await expect(
      page.getByRole("table", { name: "Perbandingan fitur paket Basic, Pro, dan Business" }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: /tabel perbandingan paket/ })).toBeHidden();
  });
});
