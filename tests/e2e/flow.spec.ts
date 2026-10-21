import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
});

async function fillOrderForm(page: Page) {
  await page.getByLabel("Nama Lengkap").fill("Rina Pratama");
  await page.getByLabel("Nama Bisnis").fill("Kopi Senja");
  await page.getByLabel("Nomor WhatsApp").fill("0812 3456 7890");
  await page.getByLabel("Email").fill("rina@example.com");
  await page.getByLabel("Jenis Usaha").selectOption("Kafe");
}

test("memilih paket dari halaman harga membawa plan ke form", async ({ page }) => {
  await page.goto("/pricing/");
  await page.getByRole("link", { name: "Pilih Pro" }).click();

  await expect(page).toHaveURL(/\/order\/?\?plan=pro/);
  await expect(page.getByRole("heading", { name: "Lengkapi Data Pesanan Anda" })).toBeVisible();
  await expect(page.getByRole("radio", { name: /Pro/ })).toBeChecked();
});

test("form memvalidasi input dan menghitung diskon durasi", async ({ page }) => {
  await page.goto("/order/?plan=pro");
  await expect(page.getByRole("heading", { name: "Data Pemesan" })).toBeVisible();

  await page.getByRole("button", { name: "Lanjut ke Pembayaran" }).click();
  await expect(page.getByRole("alert").filter({ hasText: "Periksa kembali" })).toContainText(
    "Periksa kembali kolom yang ditandai",
  );
  await expect(page.getByText("Nama lengkap wajib diisi.")).toBeVisible();

  await fillOrderForm(page);
  await page.getByText("12 Bulan", { exact: true }).click();

  const summary = page.locator("aside").filter({ hasText: "Ringkasan Pesanan" });
  await expect(summary.getByText("Rp 950.400").first()).toBeVisible();
  await expect(summary.getByText("TOTAL", { exact: true })).toBeVisible();

  await page.getByRole("button", { name: "Lanjut ke Pembayaran" }).click();
  await expect(page).toHaveURL(/\/payment\/?$/);
  await expect(page.getByRole("heading", { name: "Pembayaran Manual" })).toBeVisible();
  await expect(page.getByText(/ORD-\d{8}-[A-Z0-9]{4}/).first()).toBeVisible();
});

test("pembayaran manual, salin rekening, QRIS, dan email konfirmasi", async ({ page }) => {
  await page.goto("/order/?plan=pro");
  await expect(page.getByRole("heading", { name: "Data Pemesan" })).toBeVisible();
  await fillOrderForm(page);
  await page.getByText("12 Bulan", { exact: true }).click();
  await page.getByRole("button", { name: "Lanjut ke Pembayaran" }).click();
  await expect(page).toHaveURL(/\/payment\/?$/);

  const summaryText = await page
    .locator("aside")
    .filter({ hasText: "Ringkasan Pesanan" })
    .textContent();
  const reference = summaryText?.match(/ORD-\d{8}-[A-Z0-9]{4}/)?.[0] ?? "";
  expect(reference).toMatch(/^ORD-\d{8}-[A-Z0-9]{4}$/);

  await page.getByRole("button", { name: "Salin Nomor Rekening" }).click();
  await expect(page.getByText("Nomor rekening disalin")).toBeVisible();

  await page.getByRole("radio", { name: /E-Wallet/ }).check({ force: true });
  await expect(page.getByText("Instruksi Pembayaran E-Wallet")).toBeVisible();
  await page.getByRole("button", { name: "Salin Nomor E-Wallet" }).click();
  await expect(page.getByText("Nomor e-wallet disalin")).toBeVisible();

  await page.getByRole("radio", { name: /QRIS/ }).check({ force: true });
  await expect(
    page.getByText(
      "Gambar QRIS ini adalah placeholder dan bukan kode pembayaran aktif. Ganti dengan QRIS merchant resmi sebelum situs digunakan.",
    ),
  ).toBeVisible();
  await expect(page.getByAltText(/Gambar QRIS merchant contoh/)).toBeVisible();

  await page.getByRole("button", { name: "Konfirmasi via Email" }).click();
  const dialog = page.getByRole("dialog", { name: "Konfirmasi Pembayaran via Email" });
  await expect(dialog).toBeVisible();

  const recipient = (await dialog.locator("dl dd").first().innerText()).trim();
  expect(recipient).toContain("@");

  const mailtoHref = await dialog
    .getByRole("link", { name: "Buka Aplikasi Email" })
    .getAttribute("href");
  expect(mailtoHref).toContain(`mailto:${recipient}`);
  const decodedHref = decodeURIComponent(mailtoHref ?? "");
  expect(decodedHref).toContain(reference);
  expect(decodedHref).toContain("QRIS");
  expect(decodedHref).toContain("Total Pembayaran: Rp 950.400");
  expect(decodedHref).toContain("Saya akan melampirkan bukti pembayaran");

  const gmailHref = await dialog.getByRole("link", { name: "Buka Gmail" }).getAttribute("href");
  expect(gmailHref).toContain("https://mail.google.com/mail/");
  const decodedGmailHref = decodeURIComponent(gmailHref ?? "");
  expect(decodedGmailHref).toContain(recipient);
  expect(decodedGmailHref).toContain(reference);
  expect(decodedGmailHref).toContain("Konfirmasi Pembayaran");

  await dialog.getByRole("button", { name: "Salin Isi Email" }).click();
  await expect(dialog.getByText("Isi email disalin")).toBeVisible();

  const downloadPromise = page.waitForEvent("download");
  await dialog.getByRole("button", { name: "Unduh .eml" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe(`konfirmasi-${reference}.eml`);

  const paymentA11y = await new AxeBuilder({ page })
    .exclude('[aria-hidden="true"]')
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(
    paymentA11y.violations
      .filter((violation) => violation.impact === "serious" || violation.impact === "critical")
      .map((violation) => violation.id),
  ).toEqual([]);

  await dialog.getByRole("button", { name: "Tutup dialog" }).click();
  await expect(dialog).not.toBeVisible();

  await page.getByRole("button", { name: "Konfirmasi via Email" }).click();
  await expect(dialog).toBeVisible();
  await dialog.getByRole("link", { name: "Lanjut ke Langkah Selanjutnya" }).click();
  await expect(page).toHaveURL(/\/payment-success\/?$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Langkah Selanjutnya");
  await expect(page.getByText("Menunggu Konfirmasi")).toBeVisible();
  await expect(page.getByText("Pembayaran Berhasil")).toHaveCount(0);

  await page.getByRole("button", { name: "Konfirmasi via Email" }).click();
  const successDialog = page.getByRole("dialog", {
    name: "Konfirmasi Pembayaran via Email",
  });
  await expect(successDialog).toBeVisible();
  await expect(successDialog.getByRole("link", { name: "Buka Gmail" })).toBeVisible();
  await expect(successDialog.getByRole("link", { name: "Buka Aplikasi Email" })).toBeVisible();
  await expect(successDialog.getByRole("button", { name: "Unduh .eml" })).toBeVisible();
  await successDialog.getByRole("button", { name: "Tutup dialog" }).click();

  const successA11y = await new AxeBuilder({ page })
    .exclude('[aria-hidden="true"]')
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(
    successA11y.violations
      .filter((violation) => violation.impact === "serious" || violation.impact === "critical")
      .map((violation) => violation.id),
  ).toEqual([]);
});

test("state pesanan yang hilang ditangani tanpa crash", async ({ page }) => {
  await page.goto("/payment/");
  await expect(page.getByRole("heading", { name: "Pesanan belum tersedia" })).toBeVisible();
  await expect(
    page.locator("#main-content").getByRole("link", { name: "Pilih Paket" }),
  ).toBeVisible();

  await page.goto("/payment-success/");
  await expect(page.getByRole("heading", { name: "Pesanan belum tersedia" })).toBeVisible();
});

test("parameter plan tidak valid tidak membuat halaman crash", async ({ page }) => {
  await page.goto("/order/?plan=tidak-ada");
  await expect(page.getByText("Paket pada tautan tidak dikenali")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Data Pemesan" })).toBeVisible();
});

test("tidak ada console error atau page error pada alur utama", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/");
  await page.locator("#harga").scrollIntoViewIfNeeded();
  await page.getByRole("link", { name: "Pilih Paket", exact: true }).first().click();
  await page.goto("/order/?plan=basic");
  await expect(page.getByRole("heading", { name: "Data Pemesan" })).toBeVisible();

  expect(errors).toEqual([]);
});
