"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { buttonStyles } from "@/components/ui/Button";
import { copyText } from "@/lib/clipboard";
import { cn } from "@/lib/cn";

type CopyStatus = "idle" | "success" | "error";

export function CopyButton({
  value,
  label,
  successMessage,
  onCopied,
}: {
  value: string;
  label: string;
  successMessage: string;
  onCopied?: (success: boolean) => void;
}) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async () => {
    const copied = await copyText(value);
    setStatus(copied ? "success" : "error");
    onCopied?.(copied);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleCopy}
        className={buttonStyles({
          variant: "secondary",
          size: "sm",
          className: cn(
            "w-full sm:w-auto",
            status === "success" && "border-success/30 bg-success-soft text-success",
          ),
        })}
      >
        {status === "success" ? (
          <Check className="size-4" aria-hidden="true" />
        ) : (
          <Copy className="size-4" aria-hidden="true" />
        )}
        {status === "success" ? "Tersalin" : label}
      </button>
      <p
        aria-live="polite"
        className={cn(
          "mt-2 text-xs",
          status === "error" ? "font-medium text-danger" : "text-success",
          status === "idle" && "sr-only",
        )}
      >
        {status === "success"
          ? successMessage
          : status === "error"
            ? "Tidak dapat menyalin otomatis. Silakan salin data secara manual."
            : ""}
      </p>
    </div>
  );
}
