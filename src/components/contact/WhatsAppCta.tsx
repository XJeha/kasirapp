"use client";

import { MessageCircle } from "lucide-react";
import { buttonStyles, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";
import { getWhatsAppLink, supportMessage } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * CTA WhatsApp yang selalu membuka chat dengan pesan awal.
 * Nomor diambil dari siteConfig; tidak ada nomor yang di-hardcode di component.
 */
export function WhatsAppCta({
  label = "Chat WhatsApp",
  message = supportMessage,
  variant = "whatsapp",
  size = "md",
  className,
}: {
  label?: string;
  message?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  const href = getWhatsAppLink(message);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("support_click", { channel: "whatsapp" })}
      className={cn(buttonStyles({ variant, size }), className)}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}
