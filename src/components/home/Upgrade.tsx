import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Container } from "@/components/layout/Section";
import { PhoneFrame, PosPhone, StockPhone } from "@/components/mockups/PhoneMockup";

export function Upgrade() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container>
        <div className="grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-[110px]">
          {/* Komposisi mockup di kiri. */}
          <div
            data-reveal="left"
            className="relative mx-auto h-[420px] w-full max-w-[480px] sm:h-[500px]"
          >
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/8 blur-[80px]"
            />
            <div className="absolute top-8 left-[6%] w-[50%] max-w-[210px] rotate-[-7deg]">
              <PhoneFrame>
                <StockPhone />
              </PhoneFrame>
            </div>
            <div className="absolute top-0 right-[4%] w-[53%] max-w-[225px] rotate-[6deg]">
              <PhoneFrame>
                <PosPhone />
              </PhoneFrame>
            </div>

            <div className="absolute right-[2%] bottom-4 z-20 flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 shadow-float">
              <span className="grid size-7 place-items-center rounded-full bg-success-soft text-success">
                <CircleCheck className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[11px] font-semibold text-ink">Stok otomatis diperbarui</p>
                <p className="text-[10px] text-ink-muted">Setiap transaksi tercatat</p>
              </div>
            </div>
          </div>

          {/* Teks. */}
          <div data-reveal="right" className="max-w-xl">
            <p className="font-serif text-lg text-ink-muted italic">Era revolusi teknologi</p>
            <h2 className="mt-4 text-[2rem] leading-[1.15] font-light tracking-[0.02em] uppercase sm:text-[2.6rem]">
              Upgrade Bisnismu
            </h2>
            <p className="mt-6 text-[15px] leading-[1.85] text-ink-soft sm:text-base">
              Pencatatan manual perlahan menjadi beban ketika transaksi bertambah. Dengan satu
              aplikasi, transaksi, produk, stok, dan laporan saling terhubung sehingga pekerjaan
              harian lebih ringkas dan keputusan bisnis lebih terukur.
            </p>
            <p className="mt-4 font-serif text-base leading-relaxed text-ink-muted italic">
              Adopsi teknologi yang tepat membantu Anda mengoptimalkan operasional, melayani
              pelanggan lebih cepat, dan tetap bersaing.
            </p>

            <Link
              href="/features/"
              className="group mt-8 inline-flex items-center gap-3 rounded-[3px] bg-surface-muted px-6 py-3.5 text-[12px] font-semibold tracking-[0.12em] text-ink uppercase transition-all duration-300 hover:bg-ink hover:text-white"
            >
              Lihat Fitur
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
