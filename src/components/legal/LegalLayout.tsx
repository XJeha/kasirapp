import type { ReactNode } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";

export function LegalLayout({
  title,
  description,
  updatedAt,
  children,
}: {
  title: string;
  description: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} description={description} />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-warning/20 bg-warning-soft px-4 py-3 text-xs leading-relaxed text-warning">
            Template dokumen legal. Isi bertanda kurung siku adalah placeholder identitas bisnis dan
            harus dilengkapi. Mintakan peninjauan penasihat hukum sebelum dipublikasikan.
          </div>

          <p className="mt-6 text-xs text-ink-muted">Terakhir diperbarui: {updatedAt}</p>

          <div className="mt-8 space-y-9">{children}</div>
        </div>
      </Section>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold tracking-tight text-ink sm:text-xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}
