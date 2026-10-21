import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { PricingCard } from "@/components/pricing/PricingCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans, pricingNote } from "@/data/pricing";

export function Pricing() {
  return (
    <Section id="harga" labelledBy="pricing-title" className="bg-pricing">
      <SectionHeading
        eyebrow="Harga"
        id="pricing-title"
        title="Pilih Paket Sesuai Kebutuhan Bisnis"
        description="Mulai dari kebutuhan dasar hingga operasional beberapa outlet. Semua paket dibayar secara manual dan diaktifkan setelah pembayaran diverifikasi."
      />

      <div className="mt-10 grid items-stretch gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 text-center">
        <p className="max-w-2xl text-xs leading-relaxed text-ink-muted">{pricingNote}</p>
        <Link
          href="/pricing/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Bandingkan fitur lengkap
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
