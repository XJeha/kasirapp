import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Boxes,
  ChartColumn,
  CircleAlert,
  Clock,
  FileText,
  Search,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Section";

const problems: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Transaksi sulit dilacak",
    description:
      "Catatan manual di buku atau nota membuat transaksi lama sulit dicari saat dibutuhkan.",
    icon: Search,
  },
  {
    title: "Stok sering tidak akurat",
    description:
      "Barang masuk dan keluar tidak tercatat konsisten, sehingga jumlah persediaan tidak sesuai.",
    icon: Boxes,
  },
  {
    title: "Laporan membutuhkan waktu",
    description:
      "Rekap penjualan harus dihitung ulang setiap hari dan rawan terjadi kesalahan penjumlahan.",
    icon: Clock,
  },
  {
    title: "Sulit mengetahui produk terlaris",
    description:
      "Tanpa data penjualan yang rapi, keputusan stok dan promosi hanya berdasarkan perkiraan.",
    icon: TrendingUp,
  },
  {
    title: "Data penjualan tersebar",
    description:
      "Informasi tersimpan di buku, nota, dan aplikasi berbeda sehingga sulit ditinjau bersama.",
    icon: FileText,
  },
  {
    title: "Performa bisnis sulit dipantau",
    description:
      "Pemilik usaha tidak memiliki gambaran cepat tentang kondisi penjualan dan pengeluaran.",
    icon: ChartColumn,
  },
];

export function Problems() {
  return (
    <section className="border-y border-line/70 bg-surface-muted">
      <Container>
        <div className="py-20 sm:py-24 lg:py-[110px]">
          <div data-reveal="up" className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.24em] text-brand uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-current" />
              Tantangan operasional
            </span>
            <h2 className="mt-4 text-[1.8rem] leading-tight font-light tracking-[0.05em] uppercase sm:text-[2.35rem]">
              Masih Mengelola Bisnis Secara Manual?
            </h2>
            <p className="mt-4 font-serif text-base text-ink-muted italic">
              Pencatatan manual terasa sederhana di awal. Namun ketika transaksi bertambah,
              pekerjaan administratif ikut menumpuk dan data penting mudah terlewat.
            </p>
          </div>

          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <li
                  key={problem.title}
                  data-reveal="up"
                  style={{ "--reveal-delay": `${(index % 3) * 110}ms` } as CSSProperties}
                  className="flex items-start gap-4"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-brand-line bg-white text-brand">
                    <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[12px] font-semibold tracking-[0.14em] text-ink uppercase">
                      {problem.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.8] text-ink-muted">
                      {problem.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <p className="flex items-center gap-2 text-sm text-ink-soft">
              <CircleAlert className="size-4 shrink-0 text-brand" aria-hidden="true" />
              Salah satu situasi di atas terasa familiar?
            </p>
            <Link
              href="#fitur"
              className="group inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:text-brand"
            >
              Lihat solusinya
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
