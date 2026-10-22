import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/home/Analytics";
import { BusinessTypes } from "@/components/home/BusinessTypes";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { Faq } from "@/components/home/Faq";
import { Features } from "@/components/home/Features";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Pricing } from "@/components/home/Pricing";
import { Problems } from "@/components/home/Problems";
import { Upgrade } from "@/components/home/Upgrade";
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
      <Upgrade />
      <BusinessTypes />
      <Features />
      <DashboardPreview />
      <Problems />
      <Analytics />
      <Pricing />
      <FinalCta />
      <Faq />
      <JsonLd data={[softwareApplicationSchema, faqStructuredData]} />
    </>
  );
}
