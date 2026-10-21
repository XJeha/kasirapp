import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
  );
}

type SectionTone = "default" | "muted" | "brand";

export function Section({
  id,
  tone = "default",
  className,
  children,
  labelledBy,
  defer = false,
}: {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
  /** Aktifkan hanya untuk section tanpa anchor navigasi. */
  defer?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "py-16 sm:py-20 lg:py-28",
        defer && !id && "section-defer",
        tone === "muted" && "bg-dots-soft border-y border-line/80 bg-surface-muted",
        tone === "brand" && "border-y border-brand-line bg-brand-soft/60",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
