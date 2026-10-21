"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Rincian fitur paket. Pada mobile daftar fitur dapat dilipat agar kartu harga
 * tidak memanjang; pada desktop daftar selalu terbuka.
 */
export function PlanFeatures({
  planId,
  planName,
  features,
}: {
  planId: string;
  planName: string;
  features: readonly string[];
}) {
  const [open, setOpen] = useState(false);
  const contentId = `plan-features-${planId}`;

  return (
    <div className="mt-6 border-t border-line pt-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-semibold tracking-wide text-ink-muted uppercase">
          Yang Anda dapatkan
        </p>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={contentId}
          aria-label={`${open ? "Sembunyikan" : "Lihat"} rincian fitur paket ${planName}`}
          className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-md px-1 text-xs font-semibold text-brand transition-colors hover:text-brand-strong lg:hidden"
        >
          {open ? "Tutup rincian" : "Lihat rincian"}
          <ChevronDown
            className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>

      <div id={contentId} className={cn("mt-3", open ? "block" : "hidden", "lg:block")}>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-success-soft">
                <Check className="size-2.5 text-success" strokeWidth={3} aria-hidden="true" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
