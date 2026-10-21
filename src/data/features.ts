export type FeatureCategory = "Penjualan" | "Produk & Stok" | "Pelanggan & Promosi" | "Laporan";

export type Feature = {
  id: string;
  name: string;
  icon: string;
  category: FeatureCategory;
  description: string;
  /** Penjelasan lebih panjang untuk halaman /features. */
  detail: string;
};

export const features: Feature[] = [
  {
    id: "pos",
    name: "Point of Sale",
    icon: "shopping-cart",
    category: "Penjualan",
    description: "Proses transaksi cepat dengan tampilan kasir yang sederhana.",
    detail:
      "Pilih produk, atur jumlah, terapkan diskon, lalu selesaikan pembayaran tanpa langkah yang berbelit. Alur kasir dibuat agar tetap nyaman digunakan saat antrean ramai.",
  },
  {
    id: "produk",
    name: "Manajemen Produk",
    icon: "package",
    category: "Produk & Stok",
    description: "Kelola produk, kategori, harga, dan varian dalam satu katalog.",
    detail:
      "Simpan informasi produk secara terpusat sehingga perubahan harga atau kategori cukup dilakukan sekali dan langsung dipakai di seluruh transaksi.",
  },
  {
    id: "stok",
    name: "Manajemen Stok",
    icon: "boxes",
    category: "Produk & Stok",
    description: "Pantau jumlah stok dan ketahui kapan barang perlu ditambah.",
    detail:
      "Catat pergerakan stok masuk dan keluar, lihat sisa persediaan, serta dapatkan peringatan ketika jumlah barang menipis.",
  },
  {
    id: "laporan",
    name: "Laporan Penjualan",
    icon: "chart-column",
    category: "Laporan",
    description: "Tinjau transaksi, omzet, dan performa penjualan per periode.",
    detail:
      "Filter laporan berdasarkan periode, lalu bandingkan jumlah transaksi dan nilai penjualan untuk memahami kondisi bisnis secara objektif.",
  },
  {
    id: "pengeluaran",
    name: "Pencatatan Pengeluaran",
    icon: "wallet",
    category: "Laporan",
    description: "Catat biaya operasional agar perhitungan laba lebih jelas.",
    detail:
      "Masukkan pengeluaran seperti bahan baku, sewa, atau operasional lain agar pemasukan dan pengeluaran dapat ditinjau dalam satu tempat.",
  },
  {
    id: "pelanggan",
    name: "Manajemen Pelanggan",
    icon: "users",
    category: "Pelanggan & Promosi",
    description: "Simpan data pelanggan dan riwayat transaksinya.",
    detail:
      "Bangun hubungan yang lebih personal dengan menyimpan kontak pelanggan dan melihat riwayat pembelian mereka saat dibutuhkan.",
  },
  {
    id: "diskon",
    name: "Manajemen Diskon",
    icon: "badge-percent",
    category: "Pelanggan & Promosi",
    description: "Atur diskon, promo, dan potongan harga dengan jelas.",
    detail:
      "Tentukan diskon nominal atau persentase untuk produk tertentu maupun transaksi, sehingga promosi tetap tercatat rapi di laporan.",
  },
  {
    id: "struk",
    name: "Struk Digital",
    icon: "receipt-text",
    category: "Penjualan",
    description: "Berikan bukti transaksi yang rapi untuk pelanggan.",
    detail:
      "Setiap transaksi menghasilkan bukti pembayaran yang dapat dicetak atau dibagikan, lengkap dengan rincian item dan total.",
  },
  {
    id: "pembayaran",
    name: "Berbagai Metode Pembayaran",
    icon: "credit-card",
    category: "Penjualan",
    description: "Catat pembayaran tunai, QRIS, transfer, dan e-wallet.",
    detail:
      "Satu transaksi dapat dicatat dengan metode pembayaran yang berbeda, memudahkan rekonsiliasi kas harian dan laporan pembayaran.",
  },
  {
    id: "analitik",
    name: "Analitik Bisnis",
    icon: "chart-line",
    category: "Laporan",
    description: "Pahami tren penjualan dan produk yang paling diminati.",
    detail:
      "Lihat ringkasan penjualan, produk terlaris, dan distribusi metode pembayaran untuk mengambil keputusan berbasis data.",
  },
];

export const featureCategories: FeatureCategory[] = [
  "Penjualan",
  "Produk & Stok",
  "Pelanggan & Promosi",
  "Laporan",
];
