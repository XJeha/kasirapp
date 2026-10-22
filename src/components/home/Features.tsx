import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featureIconMap } from "@/components/icons";
import { Container } from "@/components/layout/Section";
import { PhoneFrame, PosPhone } from "@/components/mockups/PhoneMockup";
import { features } from "@/data/features";

const highlighted = [features[0], features[1], features[2], features[3]];

function FeatureItem({
  feature,
  align,
  delay,
}: {
  feature: (typeof features)[number];
  align: "left" | "right";
  delay: number;
}) {
  const Icon = featureIconMap[feature.icon] ?? featureIconMap.package;

  return (
    <li
      data-reveal={align === "left" ? "left" : "right"}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={
        align === "left"
          ? "flex flex-col items-start gap-4 text-left lg:items-end lg:text-right"
          : "flex flex-col items-start gap-4 text-left"
      }
    >
      <span className="grid size-[74px] place-items-center rounded-full border border-line-strong bg-white text-ink transition-colors duration-300 hover:border-brand hover:text-brand">
        <Icon className="size-8" strokeWidth={1.35} aria-hidden="true" />
      </span>
      <div className="max-w-xs">
        <h3 className="text-[13px] font-semibold tracking-[0.16em] text-ink uppercase">
          {feature.name}
        </h3>
        <p className="mt-2 text-sm leading-[1.8] text-ink-muted">{feature.description}</p>
      </div>
    </li>
  );
}

export function Features() {
  return (
    <section id="fitur" className="relative overflow-hidden bg-white">
      <Container>
        <div className="py-20 sm:py-24 lg:py-[110px]">
          <div data-reveal="up" className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.24em] text-brand uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-current" />
              Fitur
            </span>
            <h2 className="mt-4 text-[1.9rem] leading-tight font-light tracking-[0.06em] uppercase sm:text-[2.4rem]">
              Fitur yang Menemani Operasional Harian
            </h2>
            <p className="mt-4 font-serif text-base text-ink-muted italic">
              Kasira punya banyak fitur untuk membuat pekerjaan kasir dan pemilik usaha lebih
              ringan.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
            <ul className="order-2 flex flex-col gap-12 lg:order-1 lg:gap-16">
              {highlighted.slice(0, 2).map((feature, index) => (
                <FeatureItem key={feature.id} feature={feature} align="left" delay={index * 120} />
              ))}
            </ul>

            <div
              data-reveal="zoom"
              className="relative order-1 mx-auto w-[220px] max-w-full sm:w-[250px] lg:order-2 lg:w-[270px]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(circle,rgba(207,58,74,0.16),transparent_68%)]"
              />
              <PhoneFrame className="rotate-[3deg]">
                <PosPhone />
              </PhoneFrame>
            </div>

            <ul className="order-3 flex flex-col gap-12 lg:gap-16">
              {highlighted.slice(2).map((feature, index) => (
                <FeatureItem key={feature.id} feature={feature} align="right" delay={index * 120} />
              ))}
            </ul>
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/features/"
              className="group inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:text-brand"
            >
              Lihat semua fitur
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
