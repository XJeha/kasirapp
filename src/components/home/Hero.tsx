import type { CSSProperties } from "react";
import { ShieldCheck } from "lucide-react";
import { Parallax } from "@/components/animation/Parallax";
import { HeroCta } from "@/components/home/HeroCta";
import { Container } from "@/components/layout/Section";
import { PhoneFrame, PosPhone, ReportPhone } from "@/components/mockups/PhoneMockup";

const audiences = ["Retail", "Kafe", "Restoran", "Minimarket", "UMKM"];

export function Hero() {
  return (
    <section className="bg-hero-dark relative overflow-hidden text-white">
      {/* Latar parallax: partikel, garis cahaya, dan glow warna. */}
      <Parallax speed={0.14} className="absolute inset-x-0 -inset-y-32">
        <div className="bg-particles absolute inset-0" />
        <div className="bg-particles-fine absolute inset-0" />
        <div className="bg-streaks absolute inset-0 opacity-70" />
        <div className="absolute top-[12%] right-[6%] size-[26rem] rounded-full bg-brand/20 blur-[120px]" />
        <div className="absolute bottom-[4%] left-[4%] size-[22rem] rounded-full bg-accent/20 blur-[120px]" />
      </Parallax>

      <Container className="relative">
        <div className="grid items-center gap-12 pt-28 pb-20 sm:pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:pt-40 lg:pb-28">
          <div className="max-w-2xl">
            <p
              className="animate-hero-up flex items-center gap-3 text-[10px] font-semibold tracking-[0.28em] text-white/60 uppercase sm:text-[11px]"
              style={{ "--hero-delay": "100ms" } as CSSProperties}
            >
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              Aplikasi kasir untuk UMKM Indonesia
            </p>

            <h1 className="animate-hero-title mt-6 text-[2.35rem] leading-[1.12] font-light tracking-[0.01em] text-white sm:text-[3.1rem] lg:text-[3.55rem]">
              Kelola Penjualan dan Bisnis <em className="font-serif italic">Lebih Mudah</em>
            </h1>

            <p
              className="animate-hero-up mt-6 max-w-xl font-serif text-lg leading-relaxed text-white/80 italic sm:text-[1.3rem]"
              style={{ "--hero-delay": "340ms" } as CSSProperties}
            >
              Catat transaksi, kelola stok, dan pantau laporan bisnis dalam satu aplikasi kasir yang
              praktis untuk operasional harian.
            </p>

            <div
              className="animate-hero-up mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium tracking-[0.16em] text-white/55 uppercase"
              style={{ "--hero-delay": "420ms" } as CSSProperties}
            >
              {audiences.map((audience, index) => (
                <span key={audience} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="hidden size-1 rounded-full bg-brand sm:block"
                    />
                  ) : null}
                  {audience}
                </span>
              ))}
            </div>

            <div className="animate-hero-up" style={{ "--hero-delay": "500ms" } as CSSProperties}>
              <HeroCta />
            </div>

            <p
              className="animate-hero-up mt-7 flex max-w-lg items-start gap-2 text-[12px] leading-relaxed text-white/60"
              style={{ "--hero-delay": "620ms" } as CSSProperties}
            >
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-white/70" aria-hidden="true" />
              Tanpa akun di website, pembayaran diverifikasi manual, dan kami tidak pernah meminta
              PIN atau OTP.
            </p>
          </div>

          {/* Dua mockup HP bertumpuk, seperti hero referensi. */}
          <div className="relative mx-auto h-[420px] w-full max-w-[540px] sm:h-[500px] lg:h-[540px]">
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 size-[26rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[90px]"
            />

            <div
              className="animate-hero-in absolute top-[13%] left-0 z-10 w-[43%] max-w-[220px] -rotate-[8deg]"
              style={{ "--hero-delay": "600ms" } as CSSProperties}
            >
              <div
                className="animate-float-slow"
                style={{ "--float-delay": "0.8s" } as CSSProperties}
              >
                <PhoneFrame>
                  <ReportPhone />
                </PhoneFrame>
              </div>
            </div>

            <div
              className="animate-hero-in absolute top-0 right-[2%] z-20 w-[49%] max-w-[250px] rotate-[6deg]"
              style={{ "--hero-delay": "760ms" } as CSSProperties}
            >
              <div className="animate-float" style={{ "--float-delay": "0.2s" } as CSSProperties}>
                <PhoneFrame>
                  <PosPhone />
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Garis pemisah halus di bawah hero. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/35"
      />
    </section>
  );
}
