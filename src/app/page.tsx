import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/home/Analytics";
import { Benefits } from "@/components/home/Benefits";
import { BusinessTypes } from "@/components/home/BusinessTypes";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { Faq } from "@/components/home/Faq";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { Features } from "@/components/home/Features";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PaymentMethods } from "@/components/home/PaymentMethods";
import { Pricing } from "@/components/home/Pricing";
import { Problems } from "@/components/home/Problems";
import { Solution } from "@/components/home/Solution";
import { Testimonials } from "@/components/home/Testimonials";
import { Section } from "@/components/layout/Section";
import { PosMockup } from "@/components/mockups/PosMockup";
import { StockMockup } from "@/components/mockups/StockMockup";
import { faqStructuredData } from "@/data/faq";
import { plans } from "@/data/pricing";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Kasira — Aplikasi Kasir Modern untuk Bisnis Indonesia",
  description: siteConfig.description,
  path: "/",
  keywords: [
    "aplikasi kasir",
    "POS Indonesia",
    "kasir UMKM",
    "aplikasi penjualan",
    "manajemen stok",
    "laporan penjualan",
  ],
});

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  url: siteConfig.url,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: siteConfig.description,
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: `Paket ${plan.name}`,
    price: plan.monthlyPrice,
    priceCurrency: "IDR",
    description: plan.description,
    url: `${siteConfig.url}/order/?plan=${plan.id}`,
  })),
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BusinessTypes />
      <Problems />
      <Solution />
      <Features />

      <Section labelledBy="fast-checkout-title" defer>
        <FeatureShowcase
          eyebrow="Kasir"
          title="Transaksi Lebih Cepat"
          description="Alur kasir dibuat sederhana agar antrean tetap lancar. Pilih produk, atur jumlah, terapkan diskon bila perlu, lalu selesaikan pembayaran dengan metode yang digunakan pelanggan."
          bullets={[
            "Produk dapat dicari berdasarkan nama atau kategori.",
            "Pembayaran tunai, QRIS, transfer, dan e-wallet tercatat pada transaksi.",
            "Struk transaksi dapat dicetak atau dibagikan kepada pelanggan.",
          ]}
          media={<PosMockup />}
          mediaLabel="Tampilan kasir"
          ctaHref="/features/#pos"
          ctaLabel="Lihat fitur transaksi"
          id="fast-checkout-title"
        />
      </Section>

      <Section tone="muted" labelledBy="stock-control-title" defer>
        <FeatureShowcase
          eyebrow="Inventori"
          title="Pantau Stok Lebih Mudah"
          description="Ketahui jumlah persediaan tanpa menghitung ulang setiap saat. Catat barang masuk dan keluar, lalu gunakan batas minimum untuk mengetahui produk yang perlu segera ditambah."
          bullets={[
            "Pergerakan stok tercatat dan mudah ditinjau kembali.",
            "Peringatan stok menipis membantu mencegah kehabisan barang.",
            "Data stok terhubung dengan produk yang dijual di kasir.",
          ]}
          media={<StockMockup />}
          mediaLabel="Tampilan manajemen stok"
          ctaHref="/features/#stok"
          ctaLabel="Lihat fitur stok"
          reverse
          id="stock-control-title"
        />
      </Section>

      <DashboardPreview />
      <Analytics />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <PaymentMethods />
      <Testimonials />
      <Faq />
      <FinalCta />
      <JsonLd data={[softwareApplicationSchema, faqStructuredData]} />
    </>
  );
}
