"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Satu controller untuk dua animasi global:
 * 1. reveal on scroll (`[data-reveal]`), dan
 * 2. parallax latar (`[data-parallax]`).
 *
 * Dipisahkan dari markup section agar section tetap server component dan
 * hanya ada satu scroll listener.
 */
export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-enabled");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"),
    );
    const parallaxNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    let observer: IntersectionObserver | undefined;

    if (typeof IntersectionObserver === "undefined") {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
      );
      revealNodes.forEach((node) => observer?.observe(node));
    }

    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      if (reduceMotion || parallaxNodes.length === 0) return;
      const viewportHeight = window.innerHeight;

      parallaxNodes.forEach((node) => {
        const parent = node.parentElement;
        if (!parent) return;

        const rect = parent.getBoundingClientRect();
        if (rect.bottom < -300 || rect.top > viewportHeight + 300) return;

        const speed = Number(node.dataset.parallaxSpeed) || 0.16;
        const offset = Math.round(-rect.top * speed);
        node.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
