import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { PaymentClientLoader } from "@/components/payment/PaymentClientLoader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Pembayaran Manual",
    description:
      "Selesaikan pembayaran manual paket aplikasi kasir melalui transfer bank, e-wallet, atau QRIS, lalu konfirmasi melalui email.",
    path: "/payment/",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function PaymentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pembayaran"
        title="Pembayaran Manual"
        description="Pilih metode pembayaran, transfer sesuai total pesanan, lalu konfirmasi melalui email beserta bukti pembayaran. Pembayaran akan diverifikasi secara manual oleh tim."
      />

      <Section>
        <PaymentClientLoader />
      </Section>
    </>
  );
}
