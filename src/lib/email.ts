import { siteConfig } from "@/data/site";
import { formatRupiah } from "@/lib/format";
import type { StoredOrder } from "@/lib/order";
import type { OrderPricing } from "@/lib/pricing";

export type EmailConfirmation = {
  recipient: string;
  subject: string;
  body: string;
  mailtoUrl: string;
  gmailComposeUrl: string;
  eml: string;
};

const GMAIL_COMPOSE_URL = "https://mail.google.com/mail/";

/**
 * Membuat isi konfirmasi pembayaran dan beberapa cara mengirimkannya:
 * - mailto: untuk aplikasi email bawaan
 * - Gmail compose untuk browser tanpa mail client
 * - file .eml untuk diunduh dan dibuka di aplikasi email
 *
 * Tidak ada email yang dikirim otomatis oleh situs statis ini.
 */
export function buildEmailConfirmation(
  order: StoredOrder,
  pricing: OrderPricing,
  paymentLabel: string | null,
): EmailConfirmation {
  const recipient = siteConfig.contact.email;
  const subject = `Konfirmasi Pembayaran - ${order.reference}`;
  const body = [
    "Halo,",
    "",
    "Saya ingin melakukan konfirmasi pembayaran.",
    "",
    `Nomor Referensi: ${order.reference}`,
    `Nama: ${order.customer.fullName}`,
    `Nama Bisnis: ${order.customer.businessName}`,
    `Email: ${order.customer.email}`,
    `Nomor WhatsApp: ${order.customer.whatsapp}`,
    `Paket: ${pricing.plan.name}`,
    `Durasi: ${pricing.duration.label}`,
    `Total Pembayaran: ${formatRupiah(pricing.total)}`,
    `Metode Pembayaran: ${paymentLabel ?? "Belum dipilih"}`,
    "",
    "Saya akan melampirkan bukti pembayaran pada email ini.",
    "",
    "Terima kasih.",
  ].join("\n");

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  const mailtoUrl = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
  const gmailComposeUrl = `${GMAIL_COMPOSE_URL}?view=cm&fs=1&to=${encodeURIComponent(
    recipient,
  )}&su=${encodedSubject}&body=${encodedBody}`;

  const eml = [
    `To: ${recipient}`,
    `Subject: ${subject}`,
    `Date: ${new Date(order.createdAt).toUTCString()}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    body,
    "",
  ].join("\r\n");

  return {
    recipient,
    subject,
    body,
    mailtoUrl,
    gmailComposeUrl,
    eml,
  };
}
