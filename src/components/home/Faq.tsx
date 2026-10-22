import { Clock, Mail } from "lucide-react";
import { WhatsAppCta } from "@/components/contact/WhatsAppCta";
import { Section } from "@/components/layout/Section";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/data/site";

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div data-reveal="left">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            id="faq-title"
            title="Pertanyaan yang Sering Diajukan"
            description="Informasi penting tentang produk, pembayaran manual, dan proses aktivasi layanan."
          />

          <div className="mt-8 rounded-lg border border-line bg-surface-muted p-6">
            <p className="text-sm font-semibold text-ink">Belum menemukan jawaban?</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Kirim pertanyaan Anda melalui email atau WhatsApp. Sertakan nama bisnis agar tim dapat
              membantu lebih cepat.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Pertanyaan%20Aplikasi%20Kasir`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
            >
              <Mail className="size-4" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
            <div className="mt-4">
              <WhatsAppCta label="Chat via WhatsApp" size="sm" />
            </div>
            <p className="mt-2 text-xs text-ink-muted">{siteConfig.contact.whatsappDisplay}</p>
            <p className="mt-4 flex items-center gap-2 border-t border-line pt-4 text-xs text-ink-muted">
              <Clock className="size-3.5" aria-hidden="true" />
              {siteConfig.operations.supportHours}
            </p>
          </div>
        </div>

        <div data-reveal="right">
          <Accordion items={faqItems} />
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">
            Pembayaran pada situs ini diverifikasi secara manual. Kami tidak pernah meminta PIN,
            password, OTP, CVV, atau kode rahasia lainnya.
          </p>
        </div>
      </div>
    </Section>
  );
}
