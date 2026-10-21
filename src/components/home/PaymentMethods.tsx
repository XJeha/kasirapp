import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { paymentIconMap } from "@/components/icons";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { paymentMethods, paymentSecurityNotice } from "@/data/payments";
import { cn } from "@/lib/cn";

export function PaymentMethods() {
  return (
    <Section tone="muted" labelledBy="payment-methods-title" defer>
      <SectionHeading
        eyebrow="Pembayaran"
        id="payment-methods-title"
        title="Pembayaran Mudah"
        description="Pilih metode pembayaran manual yang paling nyaman. Setelah membayar, kirim konfirmasi melalui email beserta bukti pembayaran."
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {paymentMethods.map((method) => {
          const Icon = paymentIconMap[method.icon];
          return (
            <li
              key={method.id}
              className="flex h-full flex-col rounded-2xl border border-line bg-white p-5"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">
                <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{method.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{method.description}</p>
            </li>
          );
        })}
      </ul>

      <div
        className={cn(
          "mt-6 flex flex-col items-start justify-between gap-3 rounded-xl border border-line bg-white px-5 py-4 sm:flex-row sm:items-center",
        )}
      >
        <p className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
          {paymentSecurityNotice}
        </p>
        <Link
          href="/#faq"
          className="shrink-0 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Baca FAQ pembayaran
        </Link>
      </div>
    </Section>
  );
}
