import { ArrowRight } from "lucide-react";
import { ViewTracker } from "@/components/analytics/ViewTracker";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import { PaymentMethods } from "@/components/home/PaymentMethods";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { PricingCard } from "@/components/pricing/PricingCard";
import { ButtonLink } from "@/components/ui/Button";
import { plans, pricingNote } from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Harga & Paket Aplikasi Kasir",
  description:
    "Bandingkan paket Basic, Pro, dan Business untuk aplikasi kasir Kasira. Harga transparan, pembayaran manual melalui transfer bank, e-wallet, atau QRIS.",
  path: "/pricing/",
  keywords: ["harga aplikasi kasir", "paket POS", "biaya aplikasi kasir", "langganan kasir"],
});

export default function PricingPage() {
  return (
    <>
      <ViewTracker event="pricing_view" section="pricing_page" />

      <PageHeader
        eyebrow="Harga"
        title="Paket Harga yang Mudah Dibandingkan"
        description="Pilih paket berdasarkan kebutuhan operasional saat ini. Anda dapat memilih durasi 1, 3, 6, atau 12 bulan pada halaman pemesanan, dengan diskon yang dihitung otomatis."
      >
        <ButtonLink href="/order/?plan=pro">
          Mulai Pesan Paket Pro
          <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink href="#perbandingan" variant="secondary">
          Bandingkan Fitur
        </ButtonLink>
      </PageHeader>

      <Section labelledBy="pricing-page-title">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-page-title"
            className="text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl"
          >
            Pilih paket yang paling sesuai
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Semua paket menggunakan pembayaran manual dan aktivasi setelah verifikasi. Harga di
            bawah adalah konfigurasi contoh yang dapat disesuaikan.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink-muted">
          {pricingNote}
        </p>
      </Section>

      <Section id="perbandingan" tone="muted" labelledBy="comparison-title">
        <div className="mb-8 max-w-2xl">
          <span className="text-[11px] font-bold tracking-[0.16em] text-brand uppercase">
            Perbandingan
          </span>
          <h2
            id="comparison-title"
            className="mt-3 text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl"
          >
            Fitur di Setiap Paket
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Gunakan tabel berikut untuk melihat cakupan fitur. Kebutuhan khusus dapat didiskusikan
            dengan tim support sebelum memesan.
          </p>
        </div>
        <PricingComparison />
      </Section>

      <PaymentMethods />
      <Faq />
      <FinalCta />
    </>
  );
}
