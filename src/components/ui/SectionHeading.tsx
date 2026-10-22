import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
  tone = "light",
  id,
  className,
}: SectionHeadingProps) {
  const Heading = as;
  const isDark = tone === "dark";

  return (
    <div
      data-reveal="up"
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "mx-auto max-w-3xl items-center text-center",
        align === "left" && "max-w-2xl items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.24em] uppercase",
            isDark ? "text-white/70" : "text-brand",
          )}
        >
          <span aria-hidden className="h-px w-6 bg-current" />
          {eyebrow}
        </span>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "font-light tracking-[0.05em] uppercase",
          isDark ? "text-white" : "text-ink",
          as === "h1"
            ? "text-4xl sm:text-5xl lg:text-[3.3rem] lg:leading-[1.12]"
            : "text-[1.7rem] leading-[1.2] sm:text-[2.05rem] lg:text-[2.35rem]",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "font-serif text-[15px] leading-relaxed italic sm:text-base",
            isDark ? "text-white/75" : "text-ink-muted",
            align === "center" && "max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
