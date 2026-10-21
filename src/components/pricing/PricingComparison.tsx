"use client";

import { useState } from "react";
import { Check, ChevronDown, Minus } from "lucide-react";
import { cn } from "@/lib/cn";
import { pricingComparison, type ComparisonValue } from "@/data/pricing";

function ComparisonCell({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <>
        <Check className="mx-auto size-4 text-success" strokeWidth={2.6} aria-hidden="true" />
        <span className="sr-only">Termasuk</span>
      </>
    );
  }

  if (value === false) {
    return (
      <>
        <Minus className="mx-auto size-4 text-ink-muted/60" aria-hidden="true" />
        <span className="sr-only">Tidak termasuk</span>
      </>
    );
  }

  return <span className="text-xs text-ink-soft">{value}</span>;
}

export function PricingComparison() {
  const [open, setOpen] = useState(false);
  const contentId = "pricing-comparison-table";

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-ink">Perbandingan Paket</h2>
          <p className="text-sm text-ink-muted">
            Ringkasan fitur utama di setiap paket. Detail akhir mengikuti kebijakan layanan yang
            berlaku.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={contentId}
          aria-label={`${open ? "Tutup" : "Buka"} tabel perbandingan paket`}
          className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-md px-1 text-xs font-semibold text-brand transition-colors hover:text-brand-strong lg:hidden"
        >
          {open ? "Tutup tabel" : "Buka tabel"}
          <ChevronDown
            className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>

      <div id={contentId} className={cn(open ? "block" : "hidden", "lg:block")}>
        <div
          className="overflow-x-auto"
          tabIndex={0}
          role="region"
          aria-label="Tabel perbandingan paket"
        >
          <table className="w-full min-w-[620px] border-collapse text-left">
            <caption className="sr-only">Perbandingan fitur paket Basic, Pro, dan Business</caption>
            <thead>
              <tr className="border-b border-line bg-surface-muted/60">
                <th scope="col" className="px-5 py-3 text-xs font-semibold text-ink-soft">
                  Fitur
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-center text-xs font-semibold text-ink-soft"
                >
                  Basic
                </th>
                <th
                  scope="col"
                  className="bg-brand-soft/70 px-4 py-3 text-center text-xs font-semibold text-brand-strong"
                >
                  Pro
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-center text-xs font-semibold text-ink-soft"
                >
                  Business
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingComparison.map((row) => (
                <tr key={row.label} className="border-b border-line/70 last:border-b-0">
                  <th scope="row" className="px-5 py-3 text-sm font-medium text-ink">
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-center">
                    <ComparisonCell value={row.basic} />
                  </td>
                  <td className="bg-brand-soft/40 px-4 py-3 text-center">
                    <ComparisonCell value={row.pro} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <ComparisonCell value={row.business} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
