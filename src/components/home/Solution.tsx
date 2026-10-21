import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SolutionPanel } from "@/components/mockups/SolutionPanel";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const modules = [
  "Transaksi penjualan",
  "Produk & kategori",
  "Stok barang",
  "Data pelanggan",
  "Pengeluaran",
  "Laporan penjualan",
  "Analitik bisnis",
];

export function Solution() {
  return (
    <Section id="solusi" labelledBy="solution-title">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Satu alur kerja"
            id="solution-title"
            title="Satu Sistem untuk Operasional Bisnis yang Lebih Rapi"
            description="Transaksi, produk, stok, pelanggan, pengeluaran, laporan, dan analitik saling terhubung. Anda tidak perlu memindahkan data secara manual atau membuka banyak pencatatan terpisah."
          />

          <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {modules.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft">
                  <Check
                    className="size-3 text-accent-strong"
                    strokeWidth={2.6}
                    aria-hidden="true"
                  />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/features/">
              Jelajahi Fitur
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <a
              href="#demo"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
            >
              Lihat demo dashboard
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <SolutionPanel />
      </div>
    </Section>
  );
}
