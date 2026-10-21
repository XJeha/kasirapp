"use client";

import { usePathname } from "next/navigation";
import { Mail, MessageCircle } from "lucide-react";
import { getWhatsAppLink, siteConfig, supportMessage } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const checkoutPaths = ["/order", "/payment", "/payment-success"];

export function SupportButton() {
  const pathname = usePathname();
  const whatsappHref = getWhatsAppLink(supportMessage);

  // Hindari tombol mengambang menutupi ringkasan pesanan pada alur checkout.
  const isCheckoutFlow = checkoutPaths.some((path) => pathname === path || pathname === `${path}/`);
  if (isCheckoutFlow) return null;

  const handleClick = () => {
    trackEvent("support_click", { channel: whatsappHref ? "whatsapp" : "floating_button" });
  };

  return (
    <a
      href={whatsappHref ?? `mailto:${siteConfig.contact.email}?subject=Bantuan%20Aplikasi%20Kasir`}
      target={whatsappHref ? "_blank" : undefined}
      rel={whatsappHref ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      aria-label="Hubungi Support"
      className="fixed right-4 bottom-4 z-40 inline-flex size-12 items-center justify-center rounded-full border border-line bg-white text-sm font-semibold text-ink shadow-float transition-transform duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand sm:right-6 sm:bottom-6 sm:h-12 sm:w-auto sm:gap-2 sm:px-4 print:hidden"
    >
      {whatsappHref ? (
        <MessageCircle className="size-5 text-brand" aria-hidden="true" />
      ) : (
        <Mail className="size-5 text-brand" aria-hidden="true" />
      )}
      <span className="hidden sm:inline">Hubungi Support</span>
    </a>
  );
}
