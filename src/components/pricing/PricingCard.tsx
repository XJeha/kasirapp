import { ArrowRight } from "lucide-react";
import { PlanFeatures } from "@/components/pricing/PlanFeatures";
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
        "relative flex h-full flex-col rounded-[4px] p-7 transition-all duration-300 sm:p-8",
        plan.highlighted
          ? "bg-white shadow-float ring-1 ring-black/5 lg:-mt-4 lg:mb-4"
          : "bg-surface-muted shadow-card hover:-translate-y-1 hover:bg-white hover:shadow-float",
        className,
      )}
    >
      {plan.highlighted ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 rounded-t-[4px] bg-brand"
        />
      ) : null}

      {plan.badge ? (
        <div className="absolute -top-3 left-7">
          <Badge variant="solid" className="rounded-full px-3 py-1 tracking-[0.1em] uppercase">
            {plan.badge}
          </Badge>
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-2">
        <h3 className="text-[1.4rem] font-light tracking-[0.12em] text-ink uppercase">
          {plan.name}
        </h3>
        {plan.highlighted ? (
          <span className="text-[10px] font-semibold tracking-[0.14em] text-brand uppercase">
            Disarankan
          </span>
        ) : (
          <span className="text-[10px] tracking-[0.14em] text-ink-muted uppercase">Paket</span>
        )}
      </div>

      <p className="mt-4 min-h-[48px] font-serif text-[15px] leading-relaxed text-ink-muted italic">
        {plan.description}
      </p>

      <div className="mt-6 border-t border-line pt-6">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-[2.5rem] leading-none font-light tracking-tight text-ink">
            {formatRupiah(plan.monthlyPrice)}
          </span>
          <span className="text-sm text-ink-muted">/ bulan</span>
        </div>
        <p className="mt-2 text-[11px] text-ink-muted">Harga contoh, dapat disesuaikan</p>
      </div>

      <TrackedPlanLink
        href={`/order/?plan=${plan.id}`}
        planId={plan.id}
        className={buttonStyles({
          variant: plan.highlighted ? "primary" : "secondary",
          className: "group mt-6 w-full",
        })}
      >
        {plan.ctaLabel}
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </TrackedPlanLink>

      <PlanFeatures planId={plan.id} planName={plan.name} features={plan.features} />
    </article>
  );
}
