export type BusinessType = {
  id: string;
  label: string;
  icon: string;
  description: string;
};

export const businessTypes: BusinessType[] = [
  {
    id: "retail",
    label: "Retail",
    icon: "store",
    description: "Toko dengan katalog produk dan transaksi harian.",
  },
  {
    id: "minimarket",
    label: "Minimarket",
    icon: "shopping-basket",
    description: "Belanja cepat dengan banyak item per transaksi.",
  },
  {
    id: "cafe",
    label: "Kafe",
    icon: "coffee",
    description: "Pesanan minuman dan makanan dengan alur cepat.",
  },
  {
    id: "restoran",
    label: "Restoran",
    icon: "utensils",
    description: "Transaksi meja, pesanan, dan laporan harian.",
  },
  {
    id: "bakery",
    label: "Bakery",
    icon: "croissant",
    description: "Produk harian dengan stok yang perlu dipantau.",
  },
  {
    id: "fashion",
    label: "Fashion",
    icon: "shirt",
    description: "Katalog produk dengan varian ukuran dan warna.",
  },
  {
    id: "barbershop",
    label: "Barbershop",
    icon: "scissors",
    description: "Layanan jasa dengan pencatatan transaksi sederhana.",
  },
  {
    id: "laundry",
    label: "Laundry",
    icon: "washing-machine",
    description: "Pesanan layanan dan status pengerjaan pelanggan.",
  },
  {
    id: "elektronik",
    label: "Toko Elektronik",
    icon: "plug",
    description: "Produk bernilai tinggi dengan stok terbatas.",
  },
  {
    id: "kelontong",
    label: "Toko Kelontong",
    icon: "shopping-bag",
    description: "Kebutuhan harian dengan transaksi berulang.",
  },
  {
    id: "jasa",
    label: "Usaha Jasa",
    icon: "briefcase",
    description: "Pencatatan pemasukan dan pengeluaran layanan.",
  },
  {
    id: "umkm",
    label: "UMKM",
    icon: "sparkles",
    description: "Bisnis kecil yang ingin mulai tertata.",
  },
];

export const businessTypeOptions = [
  ...businessTypes.map((type) => ({ value: type.label, label: type.label })),
  { value: "Lainnya", label: "Lainnya" },
];
