import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Lapisan dekoratif untuk parallax. Komponen ini server component; transform
 * diterapkan oleh MotionController agar hanya ada satu scroll listener.
 */
export function Parallax({
  children,
  speed = 0.16,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div
      data-parallax
      data-parallax-speed={speed}
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      {children}
    </div>
  );
}
