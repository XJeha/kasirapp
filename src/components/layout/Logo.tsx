import { cn } from "@/lib/cn";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-9 shrink-0 drop-shadow-[0_2px_6px_rgba(207,58,74,0.35)]"
        role="presentation"
        focusable="false"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="30" height="30" rx="8" fill="var(--color-brand)" />
        <path d="M10.5 7.75h11v16.5l-2.75-1.7-2.75 1.7-2.75-1.7-2.75 1.7V7.75Z" fill="white" />
        <path
          d="M13.75 12.4h4.5M13.75 16.15h4.5"
          stroke="var(--color-brand)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="20.4" cy="19.9" r="1.35" fill="var(--color-accent)" />
      </svg>
      <span
        className={cn(
          "text-[20px] leading-none font-bold tracking-[-0.02em]",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        Kasira
        <span className={tone === "dark" ? "text-brand" : "text-white/70"}>.</span>
      </span>
    </span>
  );
}
