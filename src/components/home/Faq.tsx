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
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            id="faq-title"
            title="Pertanyaan yang Sering Diajukan"
            description="Informasi penting tentang produk, pembayaran manual, dan proses aktivasi layanan."
          />

          <div className="mt-7 rounded-2xl border border-line bg-surface-muted p-5">
            <p className="text-sm font-semibold text-ink">Belum menemukan jawaban?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              Kirim pertanyaan Anda melalui email atau WhatsApp. Sertakan nama bisnis agar tim dapat
              membantu lebih cepat.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Pertanyaan%20Aplikasi%20Kasir`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
            >
              <Mail className="size-4" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
            <div className="mt-3">
              <WhatsAppCta label="Chat via WhatsApp" size="sm" />
            </div>
            <p className="mt-1.5 text-xs text-ink-muted">{siteConfig.contact.whatsappDisplay}</p>
            <p className="mt-3 flex items-center gap-2 text-xs text-ink-muted">
              <Clock className="size-3.5" aria-hidden="true" />
              {siteConfig.operations.supportHours}
            </p>
          </div>
        </div>

        <div>
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
