import type { LucideIcon } from "lucide-react";
import { ChartLine, Eye, ListChecks, Zap } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits: Array<{ title: string; description: string; icon: LucideIcon; note: string }> = [
  {
    title: "Lebih Cepat",
    description:
      "Kurangi pekerjaan transaksi berulang. Produk bisa dipilih langsung dan pembayaran tercatat dalam alur yang ringkas.",
    note: "Alur kasir yang praktis",
    icon: Zap,
  },
  {
    title: "Lebih Rapi",
    description:
      "Transaksi, produk, stok, pelanggan, dan pengeluaran tersimpan dalam satu sistem yang konsisten.",
    note: "Catatan bisnis terpusat",
    icon: ListChecks,
  },
  {
    title: "Lebih Terukur",
    description:
      "Lihat laporan penjualan dan produk terlaris berdasarkan data yang tercatat, bukan perkiraan.",
    note: "Keputusan berbasis data",
    icon: ChartLine,
  },
  {
    title: "Lebih Mudah Dipantau",
    description:
      "Buka dashboard untuk melihat informasi penting bisnis tanpa harus menunggu rekap manual selesai.",
    note: "Ringkasan dalam satu layar",
    icon: Eye,
  },
];

export function Benefits() {
  return (
    <Section tone="muted" labelledBy="benefits-title" defer>
      <SectionHeading
        eyebrow="Manfaat"
        id="benefits-title"
        title="Hasil yang Ingin Anda Rasakan"
        description="Bukan sekadar daftar fitur — fokusnya adalah pekerjaan harian yang lebih ringkas dan informasi bisnis yang lebih mudah dipahami."
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <li
              key={benefit.title}
              className="flex gap-4 rounded-2xl border border-line bg-white p-5 sm:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-strong">
                <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {benefit.description}
                </p>
                <p className="mt-3 text-[11px] font-semibold tracking-wide text-ink-muted uppercase">
                  {benefit.note}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
