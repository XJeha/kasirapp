/**
 * DEMO ANALYTICS DATA
 * ---------------------------------------------------------------------------
 * Seluruh angka di file ini adalah data contoh untuk memperagakan tampilan
 * dashboard. Bukan data pengunjung, bukan data bisnis nyata, dan tidak pernah
 * dikirim ke mana pun.
 */

export type SalesPoint = {
  label: string;
  value: number;
};

export type SalesRangeKey = "7d" | "30d" | "6m";

export type SalesRange = {
  label: string;
  description: string;
  tooltipPrefix: string;
  points: SalesPoint[];
};

export const salesRanges: Record<SalesRangeKey, SalesRange> = {
  "7d": {
    label: "7 Hari",
    description: "Total penjualan tujuh hari terakhir.",
    tooltipPrefix: "",
    points: [
      { label: "Sen", value: 2650000 },
      { label: "Sel", value: 3120000 },
      { label: "Rab", value: 2840000 },
      { label: "Kam", value: 3580000 },
      { label: "Jum", value: 4210000 },
      { label: "Sab", value: 5120000 },
      { label: "Min", value: 4680000 },
    ],
  },
  "30d": {
    label: "30 Hari",
    description: "Total penjualan 30 hari terakhir.",
    tooltipPrefix: "Hari ",
    points: [
      24, 27, 22, 31, 29, 33, 36, 25, 28, 34, 38, 32, 26, 37, 41, 35, 30, 39, 44, 42, 33, 36, 45,
      48, 40, 37, 43, 51, 47, 49,
    ].map((value, index) => ({ label: String(index + 1), value: value * 100000 })),
  },
  "6m": {
    label: "6 Bulan",
    description: "Total penjualan enam bulan terakhir.",
    tooltipPrefix: "",
    points: [
      { label: "Jan", value: 12000000 },
      { label: "Feb", value: 17000000 },
      { label: "Mar", value: 15000000 },
      { label: "Apr", value: 23000000 },
      { label: "Mei", value: 28000000 },
      { label: "Jun", value: 32000000 },
    ],
  },
};

export const salesRangeOrder: SalesRangeKey[] = ["7d", "30d", "6m"];

export const paymentDistribution = [
  { name: "Tunai", value: 35 },
  { name: "QRIS", value: 30 },
  { name: "Transfer Bank", value: 20 },
  { name: "E-Wallet", value: 15 },
];

export type TopProduct = {
  name: string;
  units: number;
  revenue: number;
};

export const topProducts: TopProduct[] = [
  { name: "Kopi Susu", units: 420, revenue: 8400000 },
  { name: "Americano", units: 369, revenue: 6150000 },
  { name: "Croissant", units: 312, revenue: 4800000 },
  { name: "Matcha Latte", units: 264, revenue: 3950000 },
  { name: "Chocolate Cake", units: 196, revenue: 2700000 },
];

export const chartColors = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];

/* -------------------------------------------------------------------------- */
/* Data contoh untuk mockup dashboard (bukan chart interaktif)                 */
/* -------------------------------------------------------------------------- */

export const dashboardDemo = {
  summary: [
    { label: "Total Penjualan", value: "Rp 32.450.000", trend: "+12,4% vs bulan lalu" },
    { label: "Transaksi", value: "1.284", trend: "+8,1% vs bulan lalu" },
    { label: "Produk Terjual", value: "3.842", trend: "+5,7% vs bulan lalu" },
    { label: "Rata-rata Transaksi", value: "Rp 126.000", trend: "+3,9% vs bulan lalu" },
  ],
  revenueSeries: [
    { label: "Jan", value: 12 },
    { label: "Feb", value: 17 },
    { label: "Mar", value: 15 },
    { label: "Apr", value: 23 },
    { label: "Mei", value: 28 },
    { label: "Jun", value: 32 },
  ],
  recentTransactions: [
    {
      id: "INV-1042",
      time: "14:32",
      items: "Kopi Susu ×2, Croissant",
      method: "Tunai",
      total: "Rp 78.000",
    },
    {
      id: "INV-1041",
      time: "14:18",
      items: "Americano, Chocolate Cake",
      method: "QRIS",
      total: "Rp 66.000",
    },
    {
      id: "INV-1040",
      time: "13:55",
      items: "Matcha Latte ×2",
      method: "E-Wallet",
      total: "Rp 76.000",
    },
    {
      id: "INV-1039",
      time: "13:21",
      items: "Paket Sarapan ×3",
      method: "Transfer",
      total: "Rp 165.000",
    },
    {
      id: "INV-1038",
      time: "12:47",
      items: "Kopi Susu, Roti Bakar",
      method: "Tunai",
      total: "Rp 54.000",
    },
  ],
  stockAlerts: [
    { name: "Biji Kopi Arabika", remaining: 8, unit: "kg", threshold: 10 },
    { name: "Susu UHT", remaining: 12, unit: "liter", threshold: 15 },
    { name: "Croissant", remaining: 6, unit: "pcs", threshold: 12 },
  ],
};

/** Total nilai transaksi contoh pada mockup hero. */
export const heroSalesSeries = [4.1, 5.2, 4.8, 6.3, 7.1, 6.4, 8.2, 7.6, 9.1, 8.4, 9.8, 11.2];
