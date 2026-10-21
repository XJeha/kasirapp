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
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
    <Section tone="muted" labelledBy="problems-title" defer>
      <SectionHeading
        eyebrow="Tantangan operasional"
        id="problems-title"
        title="Masih Mengelola Bisnis Secara Manual?"
        description="Pencatatan manual memang terasa sederhana di awal. Namun ketika transaksi bertambah, pekerjaan administratif ikut menumpuk dan data penting mudah terlewat."
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {problems.map((problem) => {
          const Icon = problem.icon;
          return (
            <li
              key={problem.title}
              className="rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(12,26,51,0.03)]"
            >
              <span className="grid size-10 place-items-center rounded-lg border border-danger/10 bg-danger-soft text-danger">
                <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-ink">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{problem.description}</p>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-xl border border-line bg-white px-5 py-4 sm:flex-row sm:items-center">
        <p className="flex items-center gap-2 text-sm text-ink-soft">
          <CircleAlert className="size-4 shrink-0 text-warning" aria-hidden="true" />
          Jika salah satu situasi di atas terasa familiar, bagian berikutnya menjelaskan solusinya.
        </p>
        <Link
          href="#solusi"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
        >
          Lihat solusinya
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
