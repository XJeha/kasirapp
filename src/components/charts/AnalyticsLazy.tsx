"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

function AnalyticsSkeleton() {
  return (
    <div
      className="rounded-2xl border border-line bg-white p-4 shadow-card sm:p-6"
      role="status"
      aria-busy="true"
      aria-label="Memuat grafik analitik"
    >
      <div className="h-5 w-40 rounded bg-surface-sunken" />
      <div className="mt-3 h-3 w-72 max-w-full rounded bg-surface-sunken" />
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-24 rounded-xl bg-surface-muted" />
        ))}
      </div>
      <div className="mt-4 h-[300px] rounded-xl bg-surface-muted" />
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="h-[280px] rounded-xl bg-surface-muted" />
        <div className="h-[280px] rounded-xl bg-surface-muted" />
      </div>
    </div>
  );
}

const AnalyticsDashboard = dynamic(
  () => import("@/components/charts/AnalyticsDashboard").then((mod) => mod.AnalyticsDashboard),
  {
    ssr: false,
    loading: () => <AnalyticsSkeleton />,
  },
);

/**
 * Recharts dimuat hanya ketika bagian analitik mendekati viewport, sehingga
 * bundle awal halaman tetap ringan.
 */
export function AnalyticsLazy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // Browser lama tanpa IntersectionObserver: muat setelah commit, bukan
      // secara sinkron di dalam effect.
      const timer = setTimeout(() => setShouldLoad(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="min-h-[400px]">
      {shouldLoad ? <AnalyticsDashboard /> : <AnalyticsSkeleton />}
    </div>
  );
}
