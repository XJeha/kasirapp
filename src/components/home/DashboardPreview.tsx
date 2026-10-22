import type { CSSProperties } from "react";
import { ArrowRight, ChartColumn, LayoutDashboard, ReceiptText, TriangleAlert } from "lucide-react";
import { Parallax } from "@/components/animation/Parallax";
import { Container } from "@/components/layout/Section";
import { DashboardShowcase } from "@/components/mockups/DashboardShowcase";
import { ButtonLink } from "@/components/ui/Button";

const includes = [
  { label: "Ringkasan penjualan", icon: LayoutDashboard },
  { label: "Grafik penjualan", icon: ChartColumn },
  { label: "Transaksi terbaru", icon: ReceiptText },
  { label: "Peringatan stok", icon: TriangleAlert },
];

export function DashboardPreview() {
  return (
    <section id="demo" className="bg-cta-dark relative overflow-hidden text-white">
      <Parallax speed={0.12} className="absolute inset-x-0 -inset-y-24">
        <div className="bg-particles absolute inset-0 opacity-40" />
        <div className="bg-streaks absolute inset-0 opacity-60" />
        <div className="absolute top-0 right-[12%] size-72 rounded-full bg-brand/20 blur-[110px]" />
      </Parallax>

      <Container className="relative">
        <div className="py-20 sm:py-24 lg:py-[110px]">
          <div data-reveal="up" className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.24em] text-white/65 uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-brand" />
              Demo produk
            </span>
            <h2 className="mt-4 text-[1.8rem] leading-tight font-light tracking-[0.05em] text-white uppercase sm:text-[2.35rem]">
              Semua Informasi Bisnis dalam Satu Dashboard
            </h2>
            <p className="mt-4 font-serif text-base text-white/70 italic">
              Lihat ringkasan penjualan, transaksi terbaru, produk terlaris, dan kondisi stok tanpa
              berpindah halaman.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {includes.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  data-reveal="up"
                  style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium text-white/75 backdrop-blur-sm"
                >
                  <Icon className="size-3.5 text-brand-soft" aria-hidden="true" />
                  {item.label}
                </li>
              );
            })}
          </ul>

          <div
            data-reveal="zoom"
            className="mt-10 rounded-2xl bg-white p-2 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.8)] sm:p-4"
          >
            <DashboardShowcase />
          </div>

          <div className="mt-9 flex justify-center">
            <ButtonLink href="/pricing/" variant="inverse" size="lg" className="group">
              Lihat Paket &amp; Harga
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
