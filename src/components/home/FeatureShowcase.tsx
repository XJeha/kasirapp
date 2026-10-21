import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function FeatureShowcase({
  eyebrow,
  title,
  description,
  bullets,
  media,
  mediaLabel,
  ctaHref,
  ctaLabel,
  reverse = false,
  id,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  media: ReactNode;
  mediaLabel: string;
  ctaHref: string;
  ctaLabel: string;
  reverse?: boolean;
  id?: string;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn("max-w-xl", reverse && "lg:order-2")}>
        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-brand uppercase">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
          {eyebrow}
        </span>
        <h2
          id={id}
          className="mt-4 text-3xl font-bold tracking-[-0.02em] text-ink sm:text-[2.25rem] sm:leading-tight"
        >
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-[17px]">{description}</p>

        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft"
            >
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-soft">
                <Check className="size-3 text-brand" strokeWidth={2.6} aria-hidden="true" />
              </span>
              {bullet}
            </li>
          ))}
        </ul>

        <Link
          href={ctaHref}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          {ctaLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className={cn("relative", reverse && "lg:order-1")}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[11px] font-medium text-ink-muted">{mediaLabel}</span>
          <span className="rounded-full border border-line bg-surface-muted px-2.5 py-1 text-[10px] font-medium text-ink-muted">
            Contoh antarmuka
          </span>
        </div>
        {media}
      </div>
    </div>
  );
}
