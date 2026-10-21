/**
 * PRICING CONFIGURATION
 * ---------------------------------------------------------------------------
 * Semua harga, fitur, dan diskon durasi berada di file ini.
 * Harga di bawah adalah nilai placeholder yang wajar untuk template — ganti
 * dengan harga final sebelum publikasi.
 */
export const plans = [
  {
    id: "basic",
    name: "Basic",
    monthlyPrice: 49000,
    description: "Untuk usaha kecil yang mulai merapikan transaksi dan laporan.",
    features: [
      "POS & transaksi penjualan",
      "Manajemen produk",
      "Laporan penjualan dasar",
      "1 perangkat",
      "Dukungan melalui email",
    ],
    highlighted: false,
    badge: null,
    ctaLabel: "Pilih Basic",
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 99000,
    description: "Untuk bisnis berkembang yang perlu kontrol stok dan analitik.",
    features: [
      "Semua fitur Basic",
      "Manajemen stok",
      "Laporan penjualan lengkap",
      "Manajemen pelanggan",
      "Analitik bisnis",
      "Multi perangkat",
    ],
    highlighted: true,
    badge: "Paling Populer",
    ctaLabel: "Pilih Pro",
  },
  {
    id: "business",
    name: "Business",
    monthlyPrice: 199000,
    description: "Untuk bisnis dengan beberapa outlet dan kebutuhan laporan lanjutan.",
    features: [
      "Semua fitur Pro",
      "Multi outlet",
      "Laporan lanjutan",
      "Analitik lanjutan",
      "Priority support",
    ],
    highlighted: false,
    badge: null,
    ctaLabel: "Pilih Business",
  },
] as const;

export type Plan = (typeof plans)[number];
export type PlanId = Plan["id"];

export const durationOptions = [
  { months: 1, label: "1 Bulan", discountRate: 0, note: null },
  { months: 3, label: "3 Bulan", discountRate: 0.05, note: "Hemat 5%" },
  { months: 6, label: "6 Bulan", discountRate: 0.1, note: "Hemat 10%" },
  { months: 12, label: "12 Bulan", discountRate: 0.2, note: "Hemat 20%" },
] as const;

export type DurationOption = (typeof durationOptions)[number];
export type DurationMonths = DurationOption["months"];

export const DEFAULT_PLAN_ID: PlanId = "pro";
export const DEFAULT_DURATION_MONTHS: DurationMonths = 1;

/** Label satuan biaya yang ditampilkan pada kartu harga. */
export const billingUnit = "per bulan";

/** Catatan kecil di bawah kartu harga. */
export const pricingNote =
  "Harga di atas adalah contoh konfigurasi dan belum termasuk ketentuan pajak yang berlaku. Pembayaran diproses secara manual.";

export type ComparisonValue = boolean | string;

export const pricingComparison: Array<{
  label: string;
  basic: ComparisonValue;
  pro: ComparisonValue;
  business: ComparisonValue;
}> = [
  { label: "POS & transaksi penjualan", basic: true, pro: true, business: true },
  { label: "Manajemen produk & kategori", basic: true, pro: true, business: true },
  { label: "Struk transaksi", basic: true, pro: true, business: true },
  { label: "Manajemen stok", basic: false, pro: true, business: true },
  { label: "Laporan penjualan", basic: "Dasar", pro: "Lengkap", business: "Lanjutan" },
  { label: "Manajemen pelanggan", basic: false, pro: true, business: true },
  { label: "Pencatatan pengeluaran", basic: false, pro: true, business: true },
  { label: "Analitik bisnis", basic: false, pro: "Termasuk", business: "Lanjutan" },
  {
    label: "Jumlah perangkat",
    basic: "1 perangkat",
    pro: "Multi perangkat",
    business: "Multi perangkat",
  },
  { label: "Multi outlet", basic: false, pro: false, business: true },
  { label: "Priority support", basic: false, pro: false, business: true },
  { label: "Dukungan melalui email", basic: true, pro: true, business: true },
];
