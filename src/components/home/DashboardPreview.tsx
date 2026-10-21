import { ArrowRight, ChartColumn, LayoutDashboard, ReceiptText, TriangleAlert } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { DashboardShowcase } from "@/components/mockups/DashboardShowcase";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const includes = [
  { label: "Ringkasan penjualan", icon: LayoutDashboard },
  { label: "Grafik penjualan", icon: ChartColumn },
  { label: "Transaksi terbaru", icon: ReceiptText },
  { label: "Peringatan stok", icon: TriangleAlert },
];

export function DashboardPreview() {
  return (
    <Section id="demo" labelledBy="dashboard-title" className="bg-dashboard-ambient">
      <SectionHeading
        eyebrow="Demo produk"
        id="dashboard-title"
        title="Semua Informasi Bisnis dalam Satu Dashboard"
        description="Lihat ringkasan penjualan, transaksi terbaru, produk terlaris, distribusi pembayaran, dan kondisi stok tanpa berpindah halaman. Tampilan berikut menggunakan data contoh."
      />

      <ul className="mt-7 flex flex-wrap items-center justify-center gap-2">
        {includes.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft"
            >
              <Icon className="size-3.5 text-brand" aria-hidden="true" />
              {item.label}
            </li>
          );
        })}
      </ul>

      <div className="mt-9">
        <DashboardShowcase />
      </div>

      <div className="mt-8 flex justify-center">
        <ButtonLink href="/pricing/" variant="secondary" size="lg">
          Lihat Paket &amp; Harga
          <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  );
}
