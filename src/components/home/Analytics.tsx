import { AnalyticsLazy } from "@/components/charts/AnalyticsLazy";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Analytics() {
  return (
    <Section id="analitik" tone="muted" labelledBy="analytics-title">
      <SectionHeading
        eyebrow="Analitik bisnis"
        id="analytics-title"
        title="Pahami Performa Bisnis dengan Data"
        description="Gunakan grafik penjualan, distribusi metode pembayaran, dan daftar produk terlaris untuk melihat kondisi bisnis secara lebih terukur. Coba filter rentang waktu di bawah untuk melihat cara data ditampilkan."
      />

      <div data-reveal="zoom" className="mt-10">
        <AnalyticsLazy />
      </div>
    </Section>
  );
}
