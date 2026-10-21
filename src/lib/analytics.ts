import type { PaymentMethodId } from "@/data/payments";
import type { PlanId } from "@/data/pricing";

export type AnalyticsEventMap = {
  hero_cta_click: { cta: string; location: "hero" };
  feature_view: { section: string };
  pricing_view: { source: string };
  plan_select: { plan: PlanId; source: "pricing_card" | "order_form" };
  checkout_start: { plan: PlanId; durationMonths: number; total: number };
  payment_method_select: { method: PaymentMethodId };
  copy_bank_account: { bank: string };
  copy_ewallet_account: { provider: string };
  qris_view: { reference: string };
  email_confirmation_click: { reference: string; method: PaymentMethodId | null };
  support_click: { channel: "email" | "whatsapp" | "floating_button" };
};

export type AnalyticsEventName = keyof AnalyticsEventMap;

export type AnalyticsDetail<K extends AnalyticsEventName = AnalyticsEventName> = {
  event: K;
  timestamp: string;
} & AnalyticsEventMap[K];

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Hook analytics tanpa pihak ketiga.
 *
 * Event dikirim sebagai CustomEvent "kasira:analytics" pada window dan, jika
 * tersedia, didorong ke window.dataLayer. Integrasi GTM/GA nantinya cukup
 * mendengarkan event tersebut — tidak ada data pribadi yang dikirim otomatis.
 */
export function trackEvent<K extends AnalyticsEventName>(
  event: K,
  payload: AnalyticsEventMap[K],
): void {
  if (typeof window === "undefined") return;

  const detail = {
    event,
    ...payload,
    timestamp: new Date().toISOString(),
  } as AnalyticsDetail<K>;

  window.dispatchEvent(new CustomEvent("kasira:analytics", { detail }));
  window.dataLayer?.push(detail as unknown as Record<string, unknown>);
}
