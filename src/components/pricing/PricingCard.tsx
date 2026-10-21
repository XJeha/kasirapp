import { ArrowRight, Check } from "lucide-react";
import { TrackedPlanLink } from "@/components/pricing/TrackedPlanLink";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import type { Plan } from "@/data/pricing";
import { cn } from "@/lib/cn";
import { formatRupiah } from "@/lib/format";

export function PricingCard({ plan, className }: { plan: Plan; className?: string }) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-white p-5 sm:p-6",
        plan.highlighted
          ? "border-brand shadow-float ring-1 ring-brand/10 lg:-mt-3 lg:pb-8"
          : "border-line shadow-card",
        className,
      )}
    >
      {plan.badge ? (
        <div className="absolute -top-3 left-5">
          <Badge variant="solid" className="shadow-sm">
            {plan.badge}
          </Badge>
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
        {plan.highlighted ? (
          <span className="text-[11px] font-semibold text-brand">Disarankan</span>
        ) : (
          <span className="text-[11px] text-ink-muted">Paket</span>
        )}
      </div>

      <p className="mt-2 min-h-[42px] text-sm leading-relaxed text-ink-soft">{plan.description}</p>

      <div className="mt-5">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[28px] leading-none font-bold tracking-tight text-ink">
            {formatRupiah(plan.monthlyPrice)}
          </span>
          <span className="text-sm text-ink-muted">/ bulan</span>
        </div>
        <p className="mt-1.5 text-[11px] text-ink-muted">Harga contoh, dapat disesuaikan</p>
      </div>

      <TrackedPlanLink
        href={`/order/?plan=${plan.id}`}
        planId={plan.id}
        className={buttonStyles({
          variant: plan.highlighted ? "primary" : "secondary",
          className: "mt-5 w-full",
        })}
      >
        {plan.ctaLabel}
        <ArrowRight className="size-4" aria-hidden="true" />
      </TrackedPlanLink>

      <div className="mt-6 border-t border-line pt-5">
        <p className="text-[11px] font-semibold tracking-wide text-ink-muted uppercase">
          Yang Anda dapatkan
        </p>
        <ul className="mt-3 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-success-soft">
                <Check className="size-2.5 text-success" strokeWidth={3} aria-hidden="true" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
