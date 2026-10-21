import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { inputStyles } from "@/components/ui/Input";

export function Select({
  hasError,
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }) {
  return (
    <div className="relative">
      <select
        aria-invalid={hasError || undefined}
        className={cn(
          inputStyles,
          "appearance-none pr-10",
          hasError && "border-danger focus:border-danger focus:ring-danger/15",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ink-muted"
        aria-hidden="true"
      />
    </div>
  );
}
