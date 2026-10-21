import type { LucideIcon } from "lucide-react";
import { paymentIconMap } from "@/components/icons";
import { paymentMethods, type PaymentMethodId } from "@/data/payments";
import { cn } from "@/lib/cn";

export function PaymentSelector({
  value,
  onChange,
}: {
  value: PaymentMethodId;
  onChange: (method: PaymentMethodId) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-ink">Metode Pembayaran</legend>
      <p className="mt-1 text-xs text-ink-muted">
        Pilih salah satu metode. Instruksi pembayaran akan muncul di bawah.
      </p>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {paymentMethods.map((method) => {
          const Icon: LucideIcon = paymentIconMap[method.icon];
          const isSelected = value === method.id;

          return (
            <label
              key={method.id}
              className={cn(
                "flex cursor-pointer flex-col gap-2 rounded-xl border p-3.5 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/40 has-[:focus-visible]:ring-offset-1",
                isSelected
                  ? "border-brand bg-brand-soft/60 ring-1 ring-brand/20"
                  : "border-line bg-white hover:border-brand/30",
              )}
            >
              <input
                type="radio"
                name="payment-method"
                value={method.id}
                checked={isSelected}
                onChange={() => onChange(method.id)}
                className="sr-only"
              />
              <span
                className={cn(
                  "grid size-9 place-items-center rounded-lg",
                  isSelected ? "bg-brand text-white" : "bg-surface-muted text-brand",
                )}
              >
                <Icon className="size-4" strokeWidth={1.9} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-ink">{method.name}</span>
              <span className="text-[11px] leading-relaxed text-ink-muted">
                {method.description}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
