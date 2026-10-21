"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/layout/Section";
import { buttonStyles } from "@/components/ui/Button";
import { navLinks, primaryCta } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 border-b bg-white transition-shadow duration-200",
        isScrolled ? "border-line shadow-[0_1px_12px_rgba(12,26,51,0.06)]" : "border-line/70",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <Link
            href="/"
            className="rounded-md focus-visible:outline-offset-4"
            aria-label="Kasira — kembali ke beranda"
          >
            <Logo />
          </Link>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "inline-flex rounded-md px-3 py-2 text-[13.5px] font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-brand-soft text-brand-strong"
                        : "text-ink-soft hover:bg-surface-muted hover:text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Link href={primaryCta.href} className={buttonStyles({ size: "sm" })}>
                {primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className="inline-flex size-11 items-center justify-center rounded-[10px] border border-line-strong bg-white text-ink transition-colors hover:bg-surface-muted lg:hidden"
            >
              {isOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="animate-fade border-t border-line bg-white lg:hidden"
      >
        <Container className="py-3">
          <nav aria-label="Navigasi mobile">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "flex min-h-11 items-center rounded-[10px] px-3 text-[15px] font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-brand-soft text-brand-strong"
                        : "text-ink-soft hover:bg-surface-muted hover:text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href={primaryCta.href}
            onClick={() => setIsOpen(false)}
            className={buttonStyles({ className: "mt-3 w-full" })}
          >
            {primaryCta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Container>
      </div>
    </header>
  );
}
