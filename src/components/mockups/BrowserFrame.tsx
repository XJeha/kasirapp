import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Bingkai jendela aplikasi untuk mockup produk. Dekoratif — bukan iframe.
 */
export function BrowserFrame({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-white shadow-window",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface-muted px-3 py-2">
        <div className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-[#e5a3a0]" />
          <span className="size-2 rounded-full bg-[#e8cf9a]" />
          <span className="size-2 rounded-full bg-[#a9d3b4]" />
        </div>
        <div className="mx-auto flex max-w-[70%] min-w-0 items-center gap-1.5 rounded-md border border-line bg-white px-2 py-0.5 text-[9.5px] font-medium text-ink-muted">
          <Lock className="size-2.5 shrink-0" aria-hidden="true" />
          <span className="truncate">{label}</span>
        </div>
        <span className="w-8 shrink-0" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}
