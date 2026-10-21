import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const inputStyles =
  "h-11 w-full rounded-[10px] border border-line-strong bg-white px-3.5 text-sm text-ink shadow-[0_1px_1px_rgba(12,26,51,0.02)] transition-colors placeholder:text-ink-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15 focus:outline-none disabled:cursor-not-allowed disabled:bg-surface-muted disabled:text-ink-muted";

export function Input({
  hasError,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }) {
  return (
    <input
      aria-invalid={hasError || undefined}
      className={cn(
        inputStyles,
        hasError && "border-danger focus:border-danger focus:ring-danger/15",
        className,
      )}
      {...props}
    />
  );
}
