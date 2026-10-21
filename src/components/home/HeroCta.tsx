"use client";

import { ArrowRight, Play } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function HeroCta() {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
      <ButtonLink
        href="/pricing/"
        size="lg"
        onClick={() => trackEvent("hero_cta_click", { cta: "Pilih Paket", location: "hero" })}
        className="w-full sm:w-auto"
      >
        Pilih Paket
        <ArrowRight className="size-4" aria-hidden="true" />
      </ButtonLink>
      <ButtonLink
        href="#fitur"
        variant="secondary"
        size="lg"
        onClick={() => trackEvent("hero_cta_click", { cta: "Lihat Fitur", location: "hero" })}
        className="w-full sm:w-auto"
      >
        <Play className="size-4 text-brand" aria-hidden="true" />
        Lihat Fitur
      </ButtonLink>
    </div>
  );
}
