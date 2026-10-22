import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { businessIconMap } from "@/components/icons";
import { Container } from "@/components/layout/Section";
import { PhoneFrame, ReportPhone } from "@/components/mockups/PhoneMockup";
import { businessTypes } from "@/data/business-types";

export function BusinessTypes() {
  return (
    <section className="relative overflow-hidden border-y border-line/70 bg-surface-muted">
      <Container>
        <div className="grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-[110px]">
          <div data-reveal="left" className="max-w-xl">
            <p className="font-serif text-lg text-ink-muted italic">Satu untuk semua</p>
            <h2
              id="business-types-title"
              className="mt-4 text-[1.9rem] leading-[1.15] font-light tracking-[0.02em] uppercase sm:text-[2.45rem]"
            >
              Dirancang untuk berbagai jenis bisnis
            </h2>
            <p className="mt-6 text-[15px] leading-[1.85] text-ink-soft sm:text-base">
              Tidak peduli jenis usaha yang Anda jalankan, alur kasir yang fleksibel dapat
              disesuaikan dengan kebutuhan operasional. Mulai dari toko dengan satu mesin kasir
              hingga bisnis yang mencatat banyak transaksi setiap hari.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3">
              {businessTypes.map((type) => {
                const Icon = businessIconMap[type.icon] ?? businessIconMap.store;
                return (
                  <li key={type.id} className="flex items-center gap-2 text-[13px] text-ink-soft">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line bg-white text-brand">
                      <Icon className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    {type.label}
                  </li>
                );
              })}
            </ul>

            <Link
              href="/features/"
              className="group mt-9 inline-flex items-center gap-3 rounded-[3px] bg-white px-6 py-3.5 text-[12px] font-semibold tracking-[0.12em] text-ink uppercase shadow-sm transition-all duration-300 hover:bg-ink hover:text-white"
            >
              Jelajahi Fitur
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div
            data-reveal="right"
            className="relative mx-auto h-[440px] w-full max-w-[420px] sm:h-[520px]"
          >
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 size-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[80px]"
            />
            <div className="absolute top-0 left-1/2 w-[62%] max-w-[250px] -translate-x-1/2 rotate-[4deg]">
              <PhoneFrame>
                <ReportPhone />
              </PhoneFrame>
            </div>

            <div className="absolute top-[18%] left-[0%] z-20 w-[46%] max-w-[185px] -rotate-[7deg]">
              <PhoneFrame>
                <div className="flex h-full flex-col bg-white">
                  <div className="bg-[linear-gradient(135deg,#cf3a4a_0%,#a82b39_100%)] px-3 pt-8 pb-4 text-white">
                    <p className="text-[6px] tracking-[0.16em] uppercase opacity-75">Ringkasan</p>
                    <p className="mt-1 text-[13px] font-light">Hari ini</p>
                  </div>
                  <div className="grid flex-1 content-start gap-1.5 p-2">
                    {[
                      ["Omzet", "Rp 4,8jt"],
                      ["Transaksi", "128"],
                      ["Produk", "86"],
                      ["Pelanggan", "24"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-md border border-line bg-white p-1.5">
                        <p className="text-[5px] text-ink-muted">{label}</p>
                        <p className="text-[7.5px] font-semibold text-ink">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </PhoneFrame>
            </div>

            <div className="absolute right-0 bottom-8 z-30 flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 shadow-float">
              <span className="grid size-7 place-items-center rounded-full bg-brand-soft text-brand">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[11px] font-semibold text-ink">12 jenis bisnis</p>
                <p className="text-[10px] text-ink-muted">Satu alur kerja</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
