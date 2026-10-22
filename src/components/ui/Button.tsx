import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  "primary" | "secondary" | "ghost" | "inverse" | "outline-inverse" | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-[0_12px_28px_-14px_rgba(207,58,74,0.75)] hover:-translate-y-0.5 hover:bg-brand-strong hover:shadow-[0_18px_34px_-14px_rgba(207,58,74,0.8)] active:translate-y-0",
  secondary:
    "border border-line-strong bg-white text-ink hover:-translate-y-0.5 hover:border-ink/30 hover:bg-surface-muted",
  ghost: "text-ink-soft hover:bg-surface-muted hover:text-ink",
  inverse: "bg-white text-brand-strong hover:-translate-y-0.5 hover:bg-brand-soft",
  "outline-inverse":
    "border border-white/45 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-ink",
  whatsapp:
    "bg-[#0f7a3d] text-white shadow-[0_12px_26px_-14px_rgba(15,122,61,0.8)] hover:-translate-y-0.5 hover:bg-[#0b6533] active:translate-y-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[12px] tracking-[0.08em] uppercase",
  md: "h-11 px-6 text-[13px] tracking-[0.06em]",
  lg: "h-12 px-7 text-[14px] tracking-[0.05em]",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles({ variant, size, className })} {...props} />;
}

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant, size, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonStyles({ variant, size, className })} {...props}>
      {children}
    </Link>
  );
}
