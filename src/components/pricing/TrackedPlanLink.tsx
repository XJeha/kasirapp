"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import type { PlanId } from "@/data/pricing";

/**
 * Tautan kecil khusus untuk melacak pemilihan paket tanpa menjadikan seluruh
 * kartu harga sebagai Client Component.
 */
export function TrackedPlanLink({
  href,
  planId,
  className,
  children,
}: {
  href: string;
  planId: PlanId;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent("plan_select", { plan: planId, source: "pricing_card" })}
    >
      {children}
    </Link>
  );
}
