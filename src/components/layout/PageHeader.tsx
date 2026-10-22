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
    <section className="bg-page-header relative overflow-hidden border-b border-line">
      <div aria-hidden className="bg-grid-soft mask-fade-bottom absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute -top-24 right-[8%] size-72 rounded-full bg-brand/10 blur-3xl"
      />
      <Container className={cn("relative py-16 sm:py-20 lg:py-24", className)}>
        <div className="max-w-3xl">
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.24em] text-brand uppercase">
              <span aria-hidden className="h-px w-6 bg-current" />
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-5 text-[2.2rem] font-light tracking-[0.03em] text-ink uppercase sm:text-[2.8rem] lg:text-[3.2rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-base leading-relaxed text-ink-muted italic sm:text-lg">
            {description}
          </p>
          {children ? (
            <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
