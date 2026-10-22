import type { CSSProperties } from "react";
import { Clock, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { Parallax } from "@/components/animation/Parallax";
import { WhatsAppCta } from "@/components/contact/WhatsAppCta";
import { Container } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function FinalCta() {
  return (
    <section id="kontak" className="bg-cta-dark relative overflow-hidden text-white">
      <Parallax speed={0.14} className="absolute inset-x-0 -inset-y-24">
        <div className="bg-particles absolute inset-0 opacity-40" />
        <div className="bg-streaks absolute inset-0 opacity-60" />
        <div className="absolute top-0 left-[8%] size-80 rounded-full bg-brand/20 blur-[120px]" />
        <div className="absolute right-[6%] bottom-0 size-72 rounded-full bg-accent/20 blur-[120px]" />
      </Parallax>

      <Container className="relative">
        <div className="py-20 sm:py-24 lg:py-[110px]">
          <div data-reveal="up" className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.24em] text-white/60 uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-brand" />
              Mulai dari langkah sederhana
            </span>
            <h2 className="mt-5 text-[2rem] leading-[1.15] font-light tracking-[0.03em] text-white uppercase sm:text-[2.7rem]">
              Siap Membuat Operasional Bisnis Lebih Mudah?
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-serif text-base leading-relaxed text-white/70 italic sm:text-lg">
              Pilih paket yang sesuai, lakukan pembayaran, lalu kirim konfirmasi. Tim kami akan
              membantu proses aktivasi.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/pricing/" size="lg" className="group w-full sm:w-auto">
                Pilih Paket Sekarang
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </ButtonLink>
              <WhatsAppCta
                label="Chat via WhatsApp"
                size="lg"
                variant="outline-inverse"
                className="w-full sm:w-auto"
              />
              <ButtonLink
                href={`mailto:${siteConfig.contact.email}?subject=Pertanyaan%20Paket%20Aplikasi%20Kasir`}
                variant="outline-inverse"
                size="lg"
                className="w-full sm:w-auto"
              >
                Kirim Email
              </ButtonLink>
            </div>

            <p className="mt-6 inline-flex items-start gap-2 text-[11px] leading-relaxed text-white/60">
              <ShieldCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              Kami tidak pernah meminta PIN, password, OTP, CVV, atau informasi rahasia rekening
              Anda.
            </p>
          </div>

          <ul className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-3">
            <li
              data-reveal="up"
              className="rounded-lg border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
            >
              <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-white/55 uppercase">
                <Mail className="size-3.5" aria-hidden="true" />
                Email
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-2 block text-[13px] font-medium break-all text-white underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white"
              >
                {siteConfig.contact.email}
              </a>
            </li>

            <li
              data-reveal="up"
              style={{ "--reveal-delay": "100ms" } as CSSProperties}
              className="rounded-lg border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
            >
              <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-white/55 uppercase">
                <MessageCircle className="size-3.5" aria-hidden="true" />
                WhatsApp
              </p>
              <p className="mt-2 text-[13px] font-medium text-white">
                {siteConfig.contact.whatsappDisplay}
              </p>
            </li>

            <li
              data-reveal="up"
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
              className="rounded-lg border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
            >
              <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-white/55 uppercase">
                <Clock className="size-3.5" aria-hidden="true" />
                Jam operasional
              </p>
              <p className="mt-2 text-[13px] font-medium text-white">
                {siteConfig.operations.supportHours}
              </p>
            </li>
          </ul>

          <p className="mt-6 text-center text-[11px] leading-relaxed text-white/55">
            Balasan chat dan email mengikuti jam operasional. Estimasi aktivasi{" "}
            {siteConfig.operations.activationEstimate} setelah pembayaran terverifikasi.
          </p>
        </div>
      </Container>
    </section>
  );
}
