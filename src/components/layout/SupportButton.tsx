"use client";

import { usePathname } from "next/navigation";
import { getWhatsAppLink, siteConfig, supportMessage } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const checkoutPaths = ["/order", "/payment", "/payment-success"];

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.04 4.5c-6.35 0-11.5 5.13-11.5 11.45 0 2.02.53 3.99 1.54 5.73L4.5 27.5l5.98-1.56a11.6 11.6 0 0 0 5.56 1.41h.01c6.34 0 11.5-5.13 11.5-11.45S22.39 4.5 16.04 4.5Zm0 20.93h-.01a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.55.93.95-3.45-.23-.36a9.47 9.47 0 0 1-1.47-5.05c0-5.25 4.29-9.52 9.57-9.52 2.56 0 4.96.99 6.77 2.79a9.44 9.44 0 0 1 2.8 6.74c0 5.25-4.3 9.47-9.58 9.47Zm5.25-7.1c-.29-.14-1.7-.83-1.96-.93-.26-.1-.46-.14-.65.15-.19.29-.74.93-.91 1.12-.17.19-.34.21-.62.07-.29-.14-1.22-.45-2.32-1.43a8.7 8.7 0 0 1-1.61-2c-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.56-.89-2.14-.23-.56-.47-.49-.65-.5l-.56-.01c-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.39 0 1.41 1.03 2.77 1.17 2.96.14.19 2.02 3.08 4.89 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
    </svg>
  );
}

export function SupportButton() {
  const pathname = usePathname();
  const whatsappHref = getWhatsAppLink(supportMessage);

  // Hindari tombol mengambang menutupi ringkasan pesanan pada alur checkout.
  const isCheckoutFlow = checkoutPaths.some((path) => pathname === path || pathname === `${path}/`);
  if (isCheckoutFlow) return null;

  return (
    <a
      href={whatsappHref ?? `mailto:${siteConfig.contact.email}?subject=Bantuan%20Aplikasi%20Kasir`}
      target={whatsappHref ? "_blank" : undefined}
      rel={whatsappHref ? "noopener noreferrer" : undefined}
      onClick={() =>
        trackEvent("support_click", { channel: whatsappHref ? "whatsapp" : "floating_button" })
      }
      aria-label="Hubungi Support"
      title="Hubungi Support"
      className="fixed right-5 bottom-5 z-40 inline-flex size-[60px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_14px_30px_-10px_rgba(0,0,0,0.45)] ring-8 ring-[#25d366]/10 transition-transform duration-200 hover:scale-105 focus-visible:scale-105 sm:right-6 sm:bottom-6 print:hidden"
    >
      <WhatsAppGlyph className="size-8" />
    </a>
  );
}
