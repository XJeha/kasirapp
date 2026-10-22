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
  const isHome = pathname === "/";
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Di beranda header transparan di atas hero lalu menjadi putih saat scroll.
  const isSolid = !isHome || isScrolled;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
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
        "top-0 right-0 left-0 z-50 w-full transition-all duration-300",
        isHome ? "fixed" : "sticky",
        isSolid
          ? "border-b border-line/80 bg-white/95 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.45)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between gap-3 transition-all duration-300",
            isSolid ? "h-16" : "h-20",
          )}
        >
          <Link
            href="/"
            className="rounded-md focus-visible:outline-offset-4"
            aria-label="Kasira — kembali ke beranda"
          >
            <Logo tone={isSolid ? "dark" : "light"} />
          </Link>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "inline-flex rounded-full px-3.5 py-2 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-200",
                      isSolid
                        ? isActive(link.href)
                          ? "text-brand"
                          : "text-ink-soft hover:text-ink"
                        : isActive(link.href)
                          ? "text-white"
                          : "text-white/65 hover:text-white",
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
              <Link
                href={primaryCta.href}
                className={buttonStyles({
                  size: "sm",
                  className:
                    "group gap-2 px-5 tracking-[0.1em] shadow-[0_12px_26px_-14px_rgba(207,58,74,0.9)]",
                })}
              >
                {primaryCta.label}
                <ArrowRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full border transition-colors lg:hidden",
                isSolid
                  ? "border-line-strong bg-white text-ink hover:bg-surface-muted"
                  : "border-white/35 bg-white/5 text-white hover:bg-white/15",
              )}
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
        className="animate-fade border-t border-line bg-white shadow-float lg:hidden"
      >
        <Container className="py-4">
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
                      "flex min-h-11 items-center rounded-md px-3 text-[13px] font-medium tracking-[0.14em] uppercase transition-colors",
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
            className={buttonStyles({ className: "mt-4 w-full" })}
          >
            {primaryCta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Container>
      </div>
    </header>
  );
}
