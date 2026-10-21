import { expect, test } from "@playwright/test";

const whatsappHref = "https://wa.me/62895336399300";
const whatsappDisplay = "0895-3363-99300";

test("CTA WhatsApp tersedia di kartu kontak, FAQ, footer, dan tombol support", async ({ page }) => {
  await page.goto("/");

  const contact = page.locator("#kontak");
  await expect(contact.getByText(whatsappDisplay)).toBeVisible();

  const contactCta = contact.getByRole("link", { name: "Chat via WhatsApp" });
  await expect(contactCta).toBeVisible();
  await expect(contactCta).toHaveAttribute("href", new RegExp(`^${whatsappHref}`));
  await expect(contactCta).toHaveAttribute("target", "_blank");
  await expect(contactCta).toHaveAttribute("rel", /noopener/);

  const contactHref = await contactCta.getAttribute("href");
  expect(decodeURIComponent(contactHref ?? "")).toContain("aplikasi kasir");

  const faqCta = page.locator("#faq").getByRole("link", { name: "Chat via WhatsApp" });
  await expect(faqCta).toBeVisible();
  await expect(faqCta).toHaveAttribute("href", new RegExp(`^${whatsappHref}`));

  const footerWhatsApp = page.locator("footer").getByRole("link", { name: "WhatsApp" });
  await expect(footerWhatsApp).toHaveAttribute("href", new RegExp(`^${whatsappHref}`));
  await expect(footerWhatsApp).toHaveAttribute("target", "_blank");
  await expect(footerWhatsApp).toHaveAttribute("rel", /noopener/);

  const supportButton = page.getByRole("link", { name: "Hubungi Support" });
  await expect(supportButton).toHaveAttribute("href", new RegExp(`^${whatsappHref}`));

  const allWhatsAppLinks = page.locator(`a[href^="${whatsappHref}"]`);
  expect(await allWhatsAppLinks.count()).toBeGreaterThanOrEqual(4);
});

test("CTA WhatsApp tampil di kartu bantuan halaman pembayaran", async ({ page }) => {
  await page.goto("/order/?plan=basic");
  await expect(page.getByRole("heading", { name: "Data Pemesan" })).toBeVisible();
  await page.getByLabel("Nama Lengkap").fill("Rina Pratama");
  await page.getByLabel("Nama Bisnis").fill("Kopi Senja");
  await page.getByLabel("Nomor WhatsApp").fill("0812 3456 7890");
  await page.getByLabel("Email").fill("rina@example.com");
  await page.getByLabel("Jenis Usaha").selectOption("Kafe");
  await page.getByRole("button", { name: "Lanjut ke Pembayaran" }).click();
  await expect(page.getByText("Metode Pembayaran", { exact: true })).toBeVisible();

  const paymentSupport = page.getByRole("link", { name: "Chat WhatsApp" });
  await expect(paymentSupport).toBeVisible();
  await expect(paymentSupport).toHaveAttribute("href", new RegExp(`^${whatsappHref}`));
  const href = await paymentSupport.getAttribute("href");
  expect(decodeURIComponent(href ?? "")).toContain("ORD-");
});
