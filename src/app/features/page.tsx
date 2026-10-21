import { ArrowRight } from "lucide-react";
import { ViewTracker } from "@/components/analytics/ViewTracker";
import { featureIconMap } from "@/components/icons";
import { FinalCta } from "@/components/home/FinalCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { featureCategories, features } from "@/data/features";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Fitur Aplikasi Kasir",
  description:
    "Jelajahi fitur aplikasi kasir Kasira: POS, manajemen produk, stok, laporan penjualan, pengeluaran, pelanggan, diskon, struk digital, metode pembayaran, dan analitik bisnis.",
  path: "/features/",
  keywords: [
    "fitur aplikasi kasir",
    "manajemen stok",
    "laporan penjualan",
    "aplikasi POS",
    "analitik bisnis",
  ],
});

export default function FeaturesPage() {
  return (
    <>
      <ViewTracker event="feature_view" section="features_page" />

      <PageHeader
        eyebrow="Fitur"
        title="Fitur untuk Operasional Bisnis Harian"
        description="Mulai dari transaksi di kasir hingga laporan penjualan, setiap fitur dirancang agar pekerjaan administratif lebih ringkas dan data bisnis tetap rapi."
      >
        <ButtonLink href="/pricing/">
          Pilih Paket
          <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink href="/#demo" variant="secondary">
          Lihat Demo Dashboard
        </ButtonLink>
      </PageHeader>

      <Section labelledBy="feature-list-title">
        <div className="max-w-2xl">
          <h2
            id="feature-list-title"
            className="text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl"
          >
            Sepuluh fitur inti, satu alur kerja
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Fitur dikelompokkan berdasarkan pekerjaan yang biasa dilakukan pemilik usaha dan tim
            kasir. Pilih kategori di bawah untuk melihat detailnya.
          </p>
        </div>

        <nav aria-label="Kategori fitur" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {featureCategories.map((category) => (
              <li key={category}>
                <a
                  href={`#kategori-${slugify(category)}`}
                  className="inline-flex rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-brand/30 hover:text-brand"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 space-y-14">
          {featureCategories.map((category) => {
            const categoryFeatures = features.filter((feature) => feature.category === category);

            return (
              <div key={category} id={`kategori-${slugify(category)}`} className="scroll-mt-28">
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <h2 className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold tracking-wide text-brand uppercase">
                    {category}
                  </h2>
                  <span className="text-xs text-ink-muted">{categoryFeatures.length} fitur</span>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {categoryFeatures.map((feature) => {
                    const Icon = featureIconMap[feature.icon] ?? featureIconMap.package;
                    return (
                      <article
                        key={feature.id}
                        id={feature.id}
                        className="scroll-mt-28 rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(12,26,51,0.03)]"
                      >
                        <div className="flex items-start gap-4">
                          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                            <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                          </span>
                          <div>
                            <h3 className="text-base font-semibold text-ink">{feature.name}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                              {feature.detail}
                            </p>
                            <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand-line bg-brand-soft/60 p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold text-ink">Ingin melihat fitur dalam paket?</h2>
            <p className="mt-1 text-sm text-ink-soft">
              Bandingkan paket Basic, Pro, dan Business untuk menemukan kombinasi yang sesuai.
            </p>
          </div>
          <ButtonLink href="/pricing/" variant="secondary" className="shrink-0">
            Lihat Harga &amp; Paket
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "dan")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
