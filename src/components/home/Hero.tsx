import { Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Section";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { Badge } from "@/components/ui/Badge";
import { HeroCta } from "@/components/home/HeroCta";

const highlights = ["Transaksi cepat", "Stok terpantau", "Laporan rapi"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div
        aria-hidden="true"
        className="bg-grid-soft mask-fade-bottom absolute inset-0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(65%_85%_at_75%_0%,rgba(37,87,214,0.12),transparent_70%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:py-24">
          <div className="max-w-xl">
            <Badge variant="brand" className="py-1.5 text-[11px]">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              Solusi Kasir Modern untuk Bisnis Indonesia
            </Badge>

            <h1 className="mt-5 text-[2.55rem] leading-[1.06] font-bold tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.5rem]">
              Kelola Penjualan dan Bisnis <span className="text-brand">Lebih Mudah</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-[17px]">
              Catat transaksi, kelola produk dan stok, simpan data pelanggan, serta pantau laporan
              penjualan dalam satu aplikasi kasir yang praktis untuk operasional harian.
            </p>

            <HeroCta />

            <p className="mt-5 flex items-start gap-2 text-[13px] leading-relaxed text-ink-muted">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              Untuk retail, kafe, restoran, minimarket, dan UMKM. Informasi produk dapat dilihat
              tanpa membuat akun.
            </p>

            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-[13px] text-ink-soft">
                  <Check className="size-3.5 text-accent" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
