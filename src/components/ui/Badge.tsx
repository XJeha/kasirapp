import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "brand" | "solid" | "neutral" | "success" | "warning" | "inverse";

const variantStyles: Record<BadgeVariant, string> = {
  brand: "border-brand-line bg-brand-soft text-brand-strong",
  solid: "border-brand bg-brand text-white",
  neutral: "border-line bg-surface-muted text-ink-soft",
  success: "border-success/15 bg-success-soft text-success",
  warning: "border-warning/20 bg-warning-soft text-warning",
  inverse: "border-white/15 bg-white/10 text-white",
};

export function Badge({
  children,
  variant = "neutral",
  className,
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
