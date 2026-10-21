import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  { path: "/features/", heading: "Fitur untuk Operasional Bisnis Harian" },
  { path: "/pricing/", heading: "Paket Harga yang Mudah Dibandingkan" },
  { path: "/order/?plan=pro", heading: "Data Pemesan" },
  { path: "/privacy-policy/", heading: "Kebijakan Privasi" },
  { path: "/terms/", heading: "Syarat & Ketentuan" },
];

for (const pageUnderTest of pages) {
  test(`aksesibilitas ${pageUnderTest.path}`, async ({ page }) => {
    await page.goto(pageUnderTest.path);
    await expect(page.getByText(pageUnderTest.heading, { exact: true }).first()).toBeVisible();

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
}

test("anchor navigasi tidak tertutup header sticky", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation", { name: "Navigasi utama" }).getByText("Demo").click();

  const offset = await page.evaluate(() => {
    const section = document.querySelector("#demo");
    const header = document.querySelector("header");
    if (!section || !header) return 0;
    return section.getBoundingClientRect().top - header.getBoundingClientRect().height;
  });

  expect(offset).toBeGreaterThanOrEqual(-1);
});
