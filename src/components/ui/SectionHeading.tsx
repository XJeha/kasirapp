import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-brand uppercase">
          <span aria-hidden className="size-1.5 rounded-full bg-brand" />
          {eyebrow}
        </span>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "font-bold tracking-[-0.02em] text-ink",
          as === "h1"
            ? "text-4xl sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]"
            : "text-3xl sm:text-[2.25rem] sm:leading-tight lg:text-[2.6rem] lg:leading-[1.15]",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed text-ink-soft sm:text-[17px]",
            align === "center" && "max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
