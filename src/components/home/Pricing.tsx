import type { CSSProperties } from "react";
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

      <div className="mt-12 grid items-stretch gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-7">
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            data-reveal="up"
            style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
            className="h-full"
          >
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 text-center">
        <p className="max-w-2xl text-xs leading-relaxed text-ink-muted">{pricingNote}</p>
        <Link
          href="/pricing/"
          className="group inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-ink uppercase transition-colors hover:text-brand"
        >
          Bandingkan fitur lengkap
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </Section>
  );
}
