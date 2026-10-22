"use client";

import Link from "next/link";
import { ArrowRight, LayoutDashboard, Play } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const outlineClass =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/45 px-6 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:border-white hover:bg-white hover:text-ink";

export function HeroCta() {
  return (
    <div className="mt-8 flex flex-col items-start gap-4">
      <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
        <Link
          href="#fitur"
          className={`${outlineClass} sm:w-auto`}
          onClick={() => trackEvent("hero_cta_click", { cta: "Lihat Fitur", location: "hero" })}
        >
          <Play className="size-3.5" aria-hidden="true" />
          Lihat Fitur
        </Link>
        <Link
          href="#demo"
          className={`${outlineClass} sm:w-auto`}
          onClick={() => trackEvent("hero_cta_click", { cta: "Demo Dashboard", location: "hero" })}
        >
          <LayoutDashboard className="size-3.5" aria-hidden="true" />
          Demo Dashboard
        </Link>
      </div>

      <ButtonLink
        href="/pricing/"
        size="lg"
        onClick={() => trackEvent("hero_cta_click", { cta: "Pilih Paket", location: "hero" })}
        className="group w-full gap-3 px-8 tracking-[0.08em] uppercase sm:w-auto"
      >
        Pilih Paket
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </ButtonLink>
    </div>
  );
}
