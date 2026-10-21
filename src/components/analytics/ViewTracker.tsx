"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Mengirim event analytics sekali saat komponen masuk ke halaman.
 * Tidak mengumpulkan data pribadi.
 */
export function ViewTracker({
  event,
  section,
}: {
  event: "feature_view" | "pricing_view";
  section: string;
}) {
  useEffect(() => {
    if (event === "feature_view") {
      trackEvent("feature_view", { section });
    } else {
      trackEvent("pricing_view", { source: section });
    }
  }, [event, section]);

  return null;
}
