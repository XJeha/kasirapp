import { describe, expect, it } from "vitest";
import { siteConfig } from "@/data/site";
import { buildEmailConfirmation } from "@/lib/email";
import type { StoredOrder } from "@/lib/order";
import { calculateOrderPricing } from "@/lib/pricing";

const order: StoredOrder = {
  schemaVersion: 1,
  reference: "ORD-20261021-ABCD",
  createdAt: "2026-10-21T07:00:00.000Z",
  planId: "pro",
  durationMonths: 12,
  customer: {
    fullName: "Rina Pratama",
    businessName: "Kopi Senja",
    whatsapp: "081234567890",
    email: "rina@example.com",
    businessType: "Kafe",
  },
};

const pricing = calculateOrderPricing("pro", 12);

describe("buildEmailConfirmation", () => {
  it("builds the subject and body from the order", () => {
    const confirmation = buildEmailConfirmation(order, pricing, "QRIS");

    expect(confirmation.subject).toBe("Konfirmasi Pembayaran - ORD-20261021-ABCD");
    expect(confirmation.body).toContain("Nomor Referensi: ORD-20261021-ABCD");
    expect(confirmation.body).toContain("Nama Bisnis: Kopi Senja");
    expect(confirmation.body).toContain("Total Pembayaran: Rp 950.400");
    expect(confirmation.body).toContain("Metode Pembayaran: QRIS");
    expect(confirmation.body).toContain("Saya akan melampirkan bukti pembayaran");
  });

  it("creates a valid, encoded mailto URL", () => {
    const confirmation = buildEmailConfirmation(order, pricing, "Transfer Bank");

    expect(confirmation.recipient).toBe(siteConfig.contact.email);
    expect(confirmation.mailtoUrl.startsWith(`mailto:${siteConfig.contact.email}?`)).toBe(true);
    const decoded = decodeURIComponent(confirmation.mailtoUrl);
    expect(decoded).toContain("Konfirmasi Pembayaran - ORD-20261021-ABCD");
    expect(decoded).toContain("Total Pembayaran: Rp 950.400");
    expect(decoded).toContain("Metode Pembayaran: Transfer Bank");
  });

  it("creates a Gmail compose URL that works in a browser", () => {
    const confirmation = buildEmailConfirmation(order, pricing, "QRIS");

    expect(confirmation.gmailComposeUrl).toContain("https://mail.google.com/mail/?");
    expect(confirmation.gmailComposeUrl).toContain("view=cm");
    expect(confirmation.gmailComposeUrl).toContain("fs=1");

    const decoded = decodeURIComponent(confirmation.gmailComposeUrl);
    expect(decoded).toContain(siteConfig.contact.email);
    expect(decoded).toContain("Konfirmasi Pembayaran - ORD-20261021-ABCD");
    expect(decoded).toContain("Total Pembayaran: Rp 950.400");
  });

  it("creates an .eml file with headers and CRLF", () => {
    const confirmation = buildEmailConfirmation(order, pricing, "QRIS");

    expect(confirmation.eml).toContain(`To: ${siteConfig.contact.email}`);
    expect(confirmation.eml).toContain("Subject: Konfirmasi Pembayaran - ORD-20261021-ABCD");
    expect(confirmation.eml).toContain("MIME-Version: 1.0");
    expect(confirmation.eml).toContain("\r\n\r\n");
    expect(confirmation.eml).toContain(confirmation.body);
  });

  it("labels a missing payment method honestly", () => {
    const confirmation = buildEmailConfirmation(order, pricing, null);
    expect(confirmation.body).toContain("Metode Pembayaran: Belum dipilih");
  });
});
