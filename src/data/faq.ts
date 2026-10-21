import { siteConfig } from "@/data/site";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "apa-itu",
    question: "Apa itu aplikasi kasir ini?",
    answer:
      "Aplikasi kasir (POS) ini membantu bisnis mencatat transaksi penjualan, mengelola produk dan stok, menyimpan data pelanggan, serta melihat laporan penjualan dalam satu sistem. Website ini adalah halaman informasi dan pemesanan paket; akses aplikasi diberikan setelah layanan diaktifkan.",
  },
  {
    id: "jenis-bisnis",
    question: "Bisnis apa saja yang cocok menggunakan aplikasi?",
    answer:
      "Aplikasi dapat digunakan oleh retail, minimarket, kafe, restoran, bakery, toko fashion, barbershop, laundry, toko elektronik, toko kelontong, usaha jasa, dan UMKM lain yang mencatat transaksi penjualan.",
  },
  {
    id: "hp",
    question: "Apakah aplikasi dapat digunakan di HP?",
    answer:
      "Ya. Aplikasi dapat diakses melalui browser di HP, tablet, maupun komputer, sehingga Anda tidak perlu memasang perangkat tambahan untuk mulai mencatat transaksi.",
  },
  {
    id: "internet",
    question: "Apakah aplikasi membutuhkan internet?",
    answer:
      "Ya. Koneksi internet diperlukan untuk mengakses aplikasi dan menyimpan transaksi ke sistem. Pastikan jaringan di lokasi usaha stabil, terutama pada jam sibuk.",
  },
  {
    id: "printer",
    question: "Apakah mendukung printer thermal?",
    answer:
      "Aplikasi menyediakan fitur cetak struk. Dukungan printer thermal bergantung pada model dan perangkat yang digunakan, jadi silakan konfirmasi kompatibilitas perangkat Anda ke tim support sebelum membeli.",
  },
  {
    id: "pembayaran",
    question: "Bagaimana sistem pembayaran paket?",
    answer:
      "Pembayaran dilakukan secara manual melalui transfer bank, e-wallet, atau QRIS. Anda memilih paket dan durasi, mengisi data pemesanan, lalu mengikuti instruksi pembayaran pada halaman pembayaran.",
  },
  {
    id: "verifikasi",
    question: "Apakah pembayaran otomatis diverifikasi?",
    answer:
      "Tidak. Website ini tidak menggunakan payment gateway dan tidak memiliki verifikasi otomatis. Pembayaran diverifikasi secara manual oleh tim setelah Anda mengirim konfirmasi melalui email beserta bukti pembayaran.",
  },
  {
    id: "konfirmasi",
    question: "Bagaimana cara konfirmasi pembayaran?",
    answer:
      "Buka halaman pembayaran, lakukan transfer sesuai total pesanan, lalu tekan tombol “Konfirmasi via Email”. Aplikasi email akan terbuka dengan nomor referensi dan rincian pesanan. Lampirkan bukti pembayaran sebelum mengirim email.",
  },
  {
    id: "aktivasi",
    question: "Berapa lama proses aktivasi?",
    answer: `Aktivasi dilakukan setelah pembayaran diverifikasi secara manual. Estimasi proses saat ini ${siteConfig.operations.activationEstimate} pada jam operasional ${siteConfig.operations.supportHours}. Jika membutuhkan kepastian, hubungi support dengan menyertakan nomor referensi pesanan.`,
  },
  {
    id: "upgrade",
    question: "Apakah paket dapat di-upgrade?",
    answer:
      "Paket dapat di-upgrade dengan menghubungi support. Penyesuaian biaya mengikuti kebijakan layanan yang berlaku dan akan diinformasikan sebelum perubahan dilakukan.",
  },
];

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
