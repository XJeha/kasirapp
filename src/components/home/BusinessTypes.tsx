import { businessIconMap } from "@/components/icons";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessTypes } from "@/data/business-types";

export function BusinessTypes() {
  return (
    <Section labelledBy="business-types-title" defer>
      <SectionHeading
        eyebrow="Untuk berbagai bisnis"
        id="business-types-title"
        title="Dirancang untuk berbagai jenis bisnis"
        description="Dari toko dengan satu mesin kasir hingga usaha jasa dengan banyak transaksi, alur kerja aplikasi dapat disesuaikan dengan kebutuhan operasional Anda."
      />

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-12 lg:grid-cols-4 xl:grid-cols-6">
        {businessTypes.map((type) => {
          const Icon = businessIconMap[type.icon] ?? businessIconMap.store;
          return (
            <li key={type.id}>
              <div className="group flex h-full flex-col gap-3 rounded-xl border border-line bg-white p-4 transition-colors duration-200 hover:border-brand/30 hover:bg-brand-soft/30">
                <span className="grid size-10 place-items-center rounded-lg bg-surface-muted text-brand transition-colors group-hover:bg-white">
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{type.label}</h3>
                  <p className="mt-1 hidden text-xs leading-relaxed text-ink-muted xl:block">
                    {type.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
