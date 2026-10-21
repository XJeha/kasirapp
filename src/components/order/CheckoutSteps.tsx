import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

const steps = [
  { label: "Data Pesanan", shortLabel: "Data" },
  { label: "Pembayaran", shortLabel: "Bayar" },
  { label: "Konfirmasi", shortLabel: "Konfirmasi" },
];

export function CheckoutSteps({ current }: { current: 1 | 2 | 3 }) {
  return (
    <nav aria-label="Langkah pemesanan">
      <ol className="flex items-center gap-2 sm:gap-4">
        {steps.map((step, index) => {
          const number = index + 1;
          const isActive = number === current;
          const isComplete = number < current;

          return (
            <li key={step.label} className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
              <span
                aria-current={isActive ? "step" : undefined}
                className={cn(
                  "grid size-7 shrink-0 place-items-center rounded-full border text-[11px] font-bold",
                  isComplete && "border-success/20 bg-success-soft text-success",
                  isActive && "border-brand bg-brand text-white",
                  !isActive && !isComplete && "border-line bg-white text-ink-muted",
                )}
              >
                {isComplete ? (
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                ) : (
                  number
                )}
              </span>
              <span
                className={cn(
                  "text-[11px] font-medium whitespace-nowrap sm:text-xs",
                  isActive ? "text-ink" : "text-ink-muted",
                )}
              >
                <span className="sm:hidden">{step.shortLabel}</span>
                <span className="hidden sm:inline">{step.label}</span>
              </span>
              {index < steps.length - 1 ? (
                <span aria-hidden="true" className="hidden h-px flex-1 bg-line sm:block" />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
