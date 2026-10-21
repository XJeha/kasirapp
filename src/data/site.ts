/**
 * SITE CONFIGURATION
 * ---------------------------------------------------------------------------
 * Semua informasi bisnis yang sering berubah ada di file ini.
 *
 * Nilai bertanda "PLACEHOLDER" WAJIB diganti dengan data bisnis yang sebenarnya
 * sebelum situs digunakan di produksi. Jangan mengarang data pelanggan,
 * rekening, atau identitas badan usaha.
 */
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const siteConfig = {
  /**
   * Nama merek kerja untuk template ini. Ganti dengan merek final Anda.
   * PLACEHOLDER — merek komersial belum disediakan.
   */
  name: "Kasira",
  shortName: "Kasira",
  tagline: "Aplikasi kasir untuk bisnis yang ingin lebih rapi.",
  description:
    "Aplikasi kasir (POS) untuk mencatat transaksi, mengelola produk dan stok, serta memantau laporan penjualan bisnis Anda dalam satu sistem.",
  /** PLACEHOLDER — ganti dengan domain produksi sebelum deploy. */
  url: "https://example.com",
  locale: "id_ID",
  language: "id",

  contact: {
    /** Email support resmi. */
    email: "heen.chii19@gmail.com",
    /** Nomor WhatsApp resmi (format internasional tanpa "+"). */
    whatsapp: "62895336399300",
    /** Nomor WhatsApp untuk tampilan teks. */
    whatsappDisplay: "0895-3363-99300",
  },

  operations: {
    /**
     * PLACEHOLDER — sesuaikan dengan SLA bisnis Anda.
     * Dipakai pada halaman sukses pembayaran dan FAQ.
     */
    activationEstimate: "1×24 jam kerja",
    supportHours: "Senin–Sabtu, 09.00–17.00 WIB",
  },

  legal: {
    /** PLACEHOLDER — identitas badan usaha untuk halaman legal. */
    entityName: "[NAMA BADAN USAHA]",
    address: "[ALAMAT BADAN USAHA]",
    phone: "[NOMOR TELEPON]",
  },

  /**
   * Section testimoni disembunyikan selama belum ada testimoni pelanggan nyata.
   * Isi `src/data/testimonials.ts` lalu ubah flag di sana untuk menampilkannya.
   */
  testimonialsEnabled: false,
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Fitur", href: "/features/" },
  { label: "Demo", href: "/#demo" },
  { label: "Harga", href: "/pricing/" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontak", href: "/#kontak" },
];

export const primaryCta = {
  label: "Pilih Paket",
  href: "/pricing/",
} as const;

export const supportEmailHref = `mailto:${siteConfig.contact.email}`;

export function getWhatsAppLink(message: string): string | null {
  return buildWhatsAppUrl(siteConfig.contact.whatsapp, message);
}

export const supportMessage =
  "Halo, saya ingin bertanya tentang aplikasi kasir dan paket layanan yang tersedia.";
