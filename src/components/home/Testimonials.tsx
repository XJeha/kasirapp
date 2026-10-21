import { Quote } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, testimonialsEnabled } from "@/data/testimonials";

/**
 * Section ini hanya dirender jika testimoni pelanggan nyata sudah tersedia.
 * Tidak ada testimoni fiktif yang ditampilkan sebagai testimoni asli.
 */
export function Testimonials() {
  if (!testimonialsEnabled || testimonials.length === 0) {
    return null;
  }

  return (
    <Section labelledBy="testimonials-title">
      <SectionHeading
        eyebrow="Testimoni"
        id="testimonials-title"
        title="Cerita dari Pengguna"
        description="Testimoni berikut berasal dari pelanggan yang telah memberikan izin publikasi."
      />

      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.id}
            className="flex h-full flex-col rounded-2xl border border-line bg-white p-5"
          >
            <Quote className="size-5 text-brand/40" aria-hidden="true" />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-5 border-t border-line pt-4">
              <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
              <p className="text-xs text-ink-muted">{testimonial.business}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
