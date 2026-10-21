import type { ReactNode } from "react";
import { Container } from "@/components/layout/Section";
import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface-muted">
      <div aria-hidden className="bg-grid-soft mask-fade-bottom absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(37,87,214,0.10),transparent_70%)]"
      />
      <Container className={cn("relative py-14 sm:py-16 lg:py-20", className)}>
        <div className="max-w-3xl">
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-brand uppercase">
              <span aria-hidden className="size-1.5 rounded-full bg-brand" />
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.025em] text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {description}
          </p>
          {children ? (
            <div className="mt-7 flex flex-wrap items-center gap-3">{children}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
