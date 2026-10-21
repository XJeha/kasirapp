import {
  DEFAULT_DURATION_MONTHS,
  type DurationMonths,
  type DurationOption,
  type Plan,
  type PlanId,
  durationOptions,
  plans,
} from "@/data/pricing";

export type OrderPricing = {
  plan: Plan;
  duration: DurationOption;
  subtotal: number;
  discountRate: number;
  discount: number;
  total: number;
};

export function isPlanId(value: string | null | undefined): value is PlanId {
  return plans.some((plan) => plan.id === value);
}

export function isDurationMonths(value: number | null | undefined): value is DurationMonths {
  return durationOptions.some((option) => option.months === value);
}

export function getPlan(planId: PlanId): Plan {
  const plan = plans.find((item) => item.id === planId);
  if (!plan) {
    throw new Error(`Paket tidak dikenal: ${planId}`);
  }
  return plan;
}

export function getPlanFromParam(value: string | null | undefined): Plan | null {
  if (!value || !isPlanId(value)) return null;
  return getPlan(value);
}

export function getDuration(months: number): DurationOption {
  const duration = durationOptions.find((option) => option.months === months);
  if (!duration) {
    return durationOptions.find((option) => option.months === DEFAULT_DURATION_MONTHS)!;
  }
  return duration;
}

/**
 * Hitung harga pesanan sepenuhnya di browser dari konfigurasi pusat.
 * Diskon dihitung dari subtotal, lalu dibulatkan ke Rupiah terdekat.
 */
export function calculateOrderPricing(planId: PlanId, months: number): OrderPricing {
  const plan = getPlan(planId);
  const duration = getDuration(months);
  const subtotal = plan.monthlyPrice * duration.months;
  const discount = Math.round(subtotal * duration.discountRate);

  return {
    plan,
    duration,
    subtotal,
    discountRate: duration.discountRate,
    discount,
    total: subtotal - discount,
  };
}
