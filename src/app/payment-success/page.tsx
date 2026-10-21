import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { PaymentSuccessLoader } from "@/components/payment/PaymentSuccessLoader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Langkah Selanjutnya",
    description:
      "Instruksi konfirmasi pembayaran manual: kirim email beserta bukti pembayaran dan tunggu verifikasi dari tim.",
    path: "/payment-success/",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function PaymentSuccessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Konfirmasi"
        title="Langkah Selanjutnya"
        description="Pembayaran belum diverifikasi otomatis. Ikuti langkah berikut untuk mengirim konfirmasi dan menunggu verifikasi manual dari tim."
      />

      <Section>
        <PaymentSuccessLoader />
      </Section>
    </>
  );
}
