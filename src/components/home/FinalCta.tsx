import { Clock, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { WhatsAppCta } from "@/components/contact/WhatsAppCta";
import { Container } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function FinalCta() {
  return (
    <section id="kontak" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-5 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="bg-grid-faint mask-fade-bottom absolute inset-0 opacity-60"
          />
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-16 size-80 rounded-full bg-brand/25 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-white/60 uppercase">
                Mulai dari langkah sederhana
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                Siap Membuat Operasional Bisnis Lebih Mudah?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Pilih paket yang sesuai, lakukan pembayaran manual, lalu kirim konfirmasi melalui
                email. Tim kami akan memverifikasi pembayaran dan membantu proses aktivasi.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/pricing/" variant="inverse" size="lg">
                  Pilih Paket Sekarang
                </ButtonLink>
                <WhatsAppCta label="Chat WhatsApp" size="lg" />
                <ButtonLink
                  href={`mailto:${siteConfig.contact.email}?subject=Pertanyaan%20Paket%20Aplikasi%20Kasir`}
                  variant="outline-inverse"
                  size="lg"
                >
                  Kirim Email
                </ButtonLink>
              </div>

              <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-white/70">
                <ShieldCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                Kami tidak pernah meminta PIN, password, OTP, CVV, atau informasi rahasia rekening
                Anda.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">Butuh bantuan memilih paket?</p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                Sampaikan jenis usaha dan kebutuhan Anda. Tim akan membantu memilih paket yang
                paling sesuai.
              </p>

              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="flex items-center gap-2 text-[11px] font-medium text-white/70">
                    <span className="grid size-7 place-items-center rounded-md bg-white/10 text-white">
                      <Mail className="size-3.5" aria-hidden="true" />
                    </span>
                    Email
                  </dt>
                  <dd className="mt-1 pl-9">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-medium break-all text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-2 text-[11px] font-medium text-white/70">
                    <span className="grid size-7 place-items-center rounded-md bg-white/10 text-white">
                      <MessageCircle className="size-3.5" aria-hidden="true" />
                    </span>
                    WhatsApp
                  </dt>
                  <dd className="mt-1 pl-9 text-sm font-medium text-white">
                    {siteConfig.contact.whatsappDisplay}
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-2 text-[11px] font-medium text-white/70">
                    <span className="grid size-7 place-items-center rounded-md bg-white/10 text-white">
                      <Clock className="size-3.5" aria-hidden="true" />
                    </span>
                    Jam operasional
                  </dt>
                  <dd className="mt-1 pl-9 text-sm text-white">
                    {siteConfig.operations.supportHours}
                  </dd>
                </div>
              </dl>

              <WhatsAppCta label="Chat via WhatsApp" className="mt-4 w-full" />

              <p className="mt-4 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-white/70">
                Balasan chat dan email mengikuti jam operasional. Estimasi aktivasi{" "}
                {siteConfig.operations.activationEstimate} setelah pembayaran terverifikasi.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
