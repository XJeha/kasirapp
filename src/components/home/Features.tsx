import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { featureIconMap } from "@/components/icons";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/data/features";

export function Features() {
  return (
    <Section id="fitur" tone="muted" labelledBy="features-title">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Fitur utama"
          id="features-title"
          title="Fitur yang Menemani Operasional Harian"
          description="Dirancang untuk membantu pekerjaan kasir, pengelolaan produk, dan pemantauan bisnis tanpa menambah kerumitan."
          className="max-w-2xl"
        />
        <Link
          href="/features/"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Lihat semua fitur
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = featureIconMap[feature.icon] ?? featureIconMap.package;
          return (
            <li key={feature.id}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-xl border border-brand-line/70 bg-brand-soft text-brand">
                    <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.1em] text-ink-muted uppercase">
                    {feature.category}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{feature.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{feature.description}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
