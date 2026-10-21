"use client";

import { type FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Info, Lock, ShoppingBag, TriangleAlert } from "lucide-react";
import { CheckoutSteps } from "@/components/order/CheckoutSteps";
import { OrderSummary } from "@/components/order/OrderSummary";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { businessTypeOptions } from "@/data/business-types";
import {
  DEFAULT_DURATION_MONTHS,
  DEFAULT_PLAN_ID,
  durationOptions,
  plans,
  type DurationMonths,
  type PlanId,
} from "@/data/pricing";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { formatRupiah } from "@/lib/format";
import { generateOrderReference, loadOrder, saveOrder, type StoredOrder } from "@/lib/order";
import { calculateOrderPricing, getPlanFromParam, isDurationMonths } from "@/lib/pricing";
import {
  emptyOrderForm,
  type OrderField,
  type OrderFormErrors,
  type OrderFormValues,
  validateOrderForm,
} from "@/lib/validation";

const fieldOrder: OrderField[] = ["fullName", "businessName", "whatsapp", "email", "businessType"];

export function OrderClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");
  const requestedPlan = getPlanFromParam(planParam);
  const invalidPlanParam = planParam !== null && !requestedPlan;

  /**
   * Komponen ini hanya di-mount di browser (dynamic import dengan ssr: false),
   * sehingga sessionStorage dan query string dapat dibaca saat inisialisasi
   * tanpa risiko hydration mismatch.
   */
  const [initialOrder] = useState<StoredOrder | null>(() => loadOrder());
  const [values, setValues] = useState<OrderFormValues>(
    () => initialOrder?.customer ?? emptyOrderForm,
  );
  const [planId, setPlanId] = useState<PlanId>(
    () => requestedPlan?.id ?? initialOrder?.planId ?? DEFAULT_PLAN_ID,
  );
  const [durationMonths, setDurationMonths] = useState<DurationMonths>(() =>
    initialOrder && isDurationMonths(initialOrder.durationMonths)
      ? initialOrder.durationMonths
      : DEFAULT_DURATION_MONTHS,
  );
  const [errors, setErrors] = useState<OrderFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [storageError, setStorageError] = useState<string | null>(null);
  const prefilled = initialOrder !== null;

  const pricing = useMemo(
    () => calculateOrderPricing(planId, durationMonths),
    [planId, durationMonths],
  );

  const updateField = (field: OrderField, value: string) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (submitted) {
      setErrors(validateOrderForm(nextValues));
    }
  };

  const handlePlanChange = (nextPlan: PlanId) => {
    setPlanId(nextPlan);
    trackEvent("plan_select", { plan: nextPlan, source: "order_form" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setStorageError(null);

    const nextErrors = validateOrderForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
      if (firstInvalid) {
        requestAnimationFrame(() => document.getElementById(firstInvalid)?.focus());
      }
      return;
    }

    const order: StoredOrder = {
      schemaVersion: 1,
      reference: generateOrderReference(),
      createdAt: new Date().toISOString(),
      planId,
      durationMonths,
      customer: {
        fullName: values.fullName.trim(),
        businessName: values.businessName.trim(),
        whatsapp: values.whatsapp.trim(),
        email: values.email.trim(),
        businessType: values.businessType,
      },
    };

    const saved = saveOrder(order);
    if (!saved) {
      setStorageError(
        "Data pesanan tidak dapat disimpan di browser ini. Pastikan penyimpanan situs diizinkan (bukan mode privat), lalu coba lagi.",
      );
      return;
    }

    trackEvent("checkout_start", {
      plan: planId,
      durationMonths,
      total: pricing.total,
    });

    router.push("/payment/");
  };

  return (
    <div>
      <div className="mb-8 rounded-xl border border-line bg-white px-4 py-3 sm:px-5">
        <CheckoutSteps current={1} />
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <form
          id="order-form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Form pemesanan paket"
          className="rounded-2xl border border-line bg-white shadow-card"
        >
          <div className="border-b border-line px-5 py-4 sm:px-6">
            <h2 className="text-base font-bold text-ink">Data Pemesan</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Data ini digunakan untuk menghubungi Anda terkait pesanan dan aktivasi layanan.
            </p>
          </div>

          <div className="space-y-5 px-5 py-5 sm:px-6">
            {invalidPlanParam ? (
              <div
                role="status"
                className="flex items-start gap-2 rounded-xl border border-warning/20 bg-warning-soft px-3.5 py-3 text-xs leading-relaxed text-warning"
              >
                <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                Paket pada tautan tidak dikenali. Silakan pilih paket yang tersedia di bawah ini.
              </div>
            ) : null}

            {prefilled ? (
              <p className="flex items-start gap-2 rounded-xl border border-brand-line bg-brand-soft/60 px-3.5 py-2.5 text-xs leading-relaxed text-brand-strong">
                <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                Data pesanan sebelumnya dimuat dari sesi browser ini. Periksa kembali sebelum
                melanjutkan.
              </p>
            ) : null}

            {submitted && Object.keys(errors).length > 0 ? (
              <div
                role="alert"
                className="rounded-xl border border-danger/20 bg-danger-soft px-3.5 py-3 text-xs leading-relaxed text-danger"
              >
                Periksa kembali kolom yang ditandai. Lengkapi data wajib sebelum melanjutkan ke
                pembayaran.
              </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField id="fullName" label="Nama Lengkap" required error={errors.fullName}>
                <Input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  placeholder="Nama lengkap"
                  value={values.fullName}
                  hasError={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  onChange={(event) => updateField("fullName", event.target.value)}
                />
              </FormField>

              <FormField id="businessName" label="Nama Bisnis" required error={errors.businessName}>
                <Input
                  id="businessName"
                  name="businessName"
                  autoComplete="organization"
                  placeholder="Contoh: Kopi Senja"
                  value={values.businessName}
                  hasError={Boolean(errors.businessName)}
                  aria-describedby={errors.businessName ? "businessName-error" : undefined}
                  onChange={(event) => updateField("businessName", event.target.value)}
                />
              </FormField>

              <FormField
                id="whatsapp"
                label="Nomor WhatsApp"
                required
                error={errors.whatsapp}
                hint="Gunakan nomor Indonesia yang aktif, misalnya 0812 3456 7890."
              >
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="08xx xxxx xxxx"
                  value={values.whatsapp}
                  hasError={Boolean(errors.whatsapp)}
                  aria-describedby={errors.whatsapp ? "whatsapp-error" : "whatsapp-hint"}
                  onChange={(event) => updateField("whatsapp", event.target.value)}
                />
              </FormField>

              <FormField id="email" label="Email" required error={errors.email}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="nama@email.com"
                  value={values.email}
                  hasError={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </FormField>

              <FormField
                id="businessType"
                label="Jenis Usaha"
                required
                error={errors.businessType}
                className="sm:col-span-2"
              >
                <Select
                  id="businessType"
                  name="businessType"
                  value={values.businessType}
                  hasError={Boolean(errors.businessType)}
                  aria-describedby={errors.businessType ? "businessType-error" : undefined}
                  onChange={(event) => updateField("businessType", event.target.value)}
                >
                  <option value="">Pilih jenis usaha</option>
                  {businessTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>

            <fieldset>
              <legend className="text-sm font-medium text-ink">
                Paket
                <span aria-hidden="true" className="ml-1 text-danger">
                  *
                </span>
                <span className="sr-only"> (wajib)</span>
              </legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {plans.map((plan) => {
                  const isSelected = planId === plan.id;
                  return (
                    <label
                      key={plan.id}
                      className={cn(
                        "relative flex cursor-pointer flex-col rounded-xl border p-3 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/40 has-[:focus-visible]:ring-offset-1",
                        isSelected
                          ? "border-brand bg-brand-soft/60 ring-1 ring-brand/20"
                          : "border-line hover:border-brand/30",
                      )}
                    >
                      <input
                        type="radio"
                        name="plan"
                        value={plan.id}
                        checked={isSelected}
                        onChange={() => handlePlanChange(plan.id)}
                        className="sr-only"
                      />
                      <span className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-ink">{plan.name}</span>
                        {plan.highlighted ? (
                          <span className="rounded-full bg-brand px-1.5 py-0.5 text-[9px] font-semibold text-white">
                            Populer
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-1 text-xs text-ink-muted">
                        {formatRupiah(plan.monthlyPrice)} / bulan
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-medium text-ink">
                Durasi Berlangganan
                <span aria-hidden="true" className="ml-1 text-danger">
                  *
                </span>
                <span className="sr-only"> (wajib)</span>
              </legend>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {durationOptions.map((option) => {
                  const isSelected = durationMonths === option.months;
                  return (
                    <label
                      key={option.months}
                      className={cn(
                        "flex cursor-pointer flex-col rounded-xl border p-3 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/40 has-[:focus-visible]:ring-offset-1",
                        isSelected
                          ? "border-brand bg-brand-soft/60 ring-1 ring-brand/20"
                          : "border-line hover:border-brand/30",
                      )}
                    >
                      <input
                        type="radio"
                        name="duration"
                        value={option.months}
                        checked={isSelected}
                        onChange={() => setDurationMonths(option.months)}
                        className="sr-only"
                      />
                      <span className="text-sm font-semibold text-ink">{option.label}</span>
                      <span
                        className={cn(
                          "mt-0.5 text-[10px]",
                          option.note ? "font-medium text-success" : "text-ink-muted",
                        )}
                      >
                        {option.note ?? "Tanpa diskon"}
                      </span>
                      <span className="mt-1 text-[11px] text-ink-muted">
                        {formatRupiah(calculateOrderPricing(planId, option.months).total)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="flex items-start gap-2 rounded-xl border border-line bg-surface-muted px-3.5 py-3">
              <Lock className="mt-0.5 size-4 shrink-0 text-ink-muted" aria-hidden="true" />
              <p className="text-[11px] leading-relaxed text-ink-muted">
                Data pesanan hanya disimpan sementara di penyimpanan sesi browser Anda
                (sessionStorage) dan tidak dikirim ke server. Data akan digunakan saat Anda membuka
                email konfirmasi pembayaran.
              </p>
            </div>
          </div>
        </form>

        <aside className="lg:sticky lg:top-24">
          <div className="mb-3 flex items-center gap-2 rounded-xl border border-brand-line bg-brand-soft/50 px-3.5 py-2.5 text-xs text-brand-strong">
            <ShoppingBag className="size-4 shrink-0" aria-hidden="true" />
            Anda dapat mengubah paket dan durasi sebelum melanjutkan.
          </div>

          <OrderSummary pricing={pricing}>
            <Button type="submit" form="order-form" size="lg" className="w-full">
              Lanjut ke Pembayaran
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            {storageError ? (
              <p role="alert" className="mt-2 text-xs leading-relaxed text-danger">
                {storageError}
              </p>
            ) : null}
          </OrderSummary>
        </aside>
      </div>
    </div>
  );
}
