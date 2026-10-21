/**
 * TESTIMONIALS
 * ---------------------------------------------------------------------------
 * Jangan mengarang testimoni pelanggan. Selama data nyata belum tersedia,
 * section testimoni disembunyikan (siteConfig.testimonialsEnabled = false).
 *
 * Saat testimoni asli sudah dikumpulkan:
 * 1. isi array di bawah dengan data yang benar;
 * 2. ubah `siteConfig.testimonialsEnabled` menjadi true di src/data/site.ts.
 */
export type Testimonial = {
  id: string;
  name: string;
  business: string;
  quote: string;
  /** Opsional — hanya isi jika pelanggan memberikan izin publikasi. */
  avatar?: string;
};

export const testimonials: Testimonial[] = [];

export const testimonialsEnabled = false;
