# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Landing Page Penjualan Layanan Aplikasi Kasir

**Tipe Produk:** Static Marketing & Sales Website\
**Platform:** Web Responsive\
**Target:** UMKM, retail, toko, minimarket, cafe, restoran, dan usaha jasa\
**CMS:** Tidak ada\
**Login/Register:** Tidak ada\
**Payment Gateway:** Tidak ada\
**Pembayaran:** Manual — Bank Transfer, E-Wallet, QRIS\
**Fokus Utama:** Conversion / penjualan paket aplikasi kasir

---

# 1. Product Overview

Website merupakan landing page resmi untuk memasarkan dan menjual layanan aplikasi kasir/POS.

Website berfungsi sebagai:

- media pemasaran produk;
- penjelasan fitur aplikasi kasir;
- demonstrasi tampilan dashboard;
- penyampaian manfaat aplikasi;
- informasi harga/paket;
- media edukasi calon pelanggan;
- pengumpulan order;
- instruksi pembayaran manual;
- pengarah pelanggan ke WhatsApp/customer service.

Website **bukan aplikasi dashboard** dan tidak membutuhkan sistem akun pengguna.

Semua halaman pemasaran bersifat statis.

---

# 2. Product Goals

Tujuan utama website adalah mengubah visitor menjadi calon pelanggan dan kemudian melakukan pembelian paket aplikasi kasir.

Alur utama:

**Visitor → Memahami Produk → Melihat Fitur → Melihat Demo/Chart → Membandingkan Paket → Pilih Paket → Isi Data Pemesanan → Pilih Pembayaran → Transfer Manual → Konfirmasi Pembayaran**

Tujuan sekunder:

- meningkatkan kredibilitas produk;
- menjelaskan manfaat aplikasi dengan cepat;
- memperlihatkan kemampuan reporting melalui visual chart;
- mengurangi pertanyaan berulang melalui FAQ;
- mengarahkan calon pelanggan ke WhatsApp apabila membutuhkan bantuan.

---

# 3. Non-Goals

Website tidak akan memiliki:

- CMS;
- halaman admin;
- login;
- register;
- user dashboard;
- database akun pengguna;
- payment gateway;
- auto payment verification;
- customer portal;
- sistem subscription otomatis;
- checkout dengan kartu kredit;
- penyimpanan data kartu/debit pelanggan.

Aktivasi layanan dilakukan secara manual setelah pembayaran dikonfirmasi.

---

# 4. Target Users

### Pemilik UMKM

Membutuhkan sistem sederhana untuk mencatat transaksi dan melihat perkembangan bisnis.

### Retail / Toko

Membutuhkan pencatatan transaksi, produk, stok, dan laporan penjualan.

### Cafe / Restoran

Membutuhkan proses transaksi yang cepat dan pencatatan penjualan.

### Minimarket

Membutuhkan sistem POS dengan katalog produk dan laporan.

### Usaha Jasa

Membutuhkan pencatatan transaksi dan monitoring pemasukan.

---

# 5. Information Architecture

Struktur utama website:

**Home**

- Header
- Hero
- Trust/Business Categories
- Problem & Solution
- Product Preview
- Features
- Analytics/Chart Showcase
- How It Works
- Benefits
- Pricing
- Payment Methods
- Testimonials
- FAQ
- Final CTA
- Footer

Tambahan halaman:

**/features**\
Penjelasan fitur lebih lengkap.

**/pricing**\
Detail paket dan perbandingan fitur.

**/order**\
Form pemesanan.

**/payment**\
Instruksi pembayaran manual.

**/payment-success**\
Instruksi setelah melakukan pembayaran.

**/privacy-policy**\
Kebijakan privasi.

**/terms**\
Syarat dan ketentuan.

Tidak terdapat halaman `/login`, `/register`, `/dashboard`, atau `/admin`.

---

# 6. Header / Navigation

Header menggunakan sticky navigation.

Isi:

**Logo**

Navigation:

Home | Fitur | Demo | Harga | FAQ | Kontak

Primary CTA:

**Coba Sekarang**

atau

**Pilih Paket**

Pada mobile menggunakan hamburger menu.

---

# 7. Hero Section

Hero harus langsung menjelaskan fungsi utama produk.

Struktur:

### Headline

Contoh:

**Kelola Bisnis Lebih Mudah dengan Aplikasi Kasir Modern**

### Supporting Text

Menjelaskan secara singkat bahwa aplikasi membantu transaksi, pencatatan penjualan, stok, serta laporan bisnis.

### CTA Primary

**Coba Aplikasi**

### CTA Secondary

**Lihat Fitur**

Hero visual menggunakan mockup aplikasi.

Contoh:

Desktop Dashboard + Mobile POS UI

Elemen visual dapat memperlihatkan:

- total penjualan;
- jumlah transaksi;
- produk terlaris;
- revenue;
- grafik penjualan.

---

# 8. Business Categories

Section untuk menunjukkan bahwa aplikasi dapat digunakan oleh berbagai jenis bisnis.

Contoh kategori:

- Retail
- Minimarket
- Cafe
- Restaurant
- Bakery
- Fashion Store
- Barbershop
- Laundry
- Toko Elektronik
- Toko Kelontong
- Usaha Jasa
- UMKM lainnya

Gunakan icon sederhana untuk setiap kategori.

---

# 9. Problem & Solution Section

Section menggunakan format problem → solution.

### Problem

Pemilik bisnis sering mengalami:

- transaksi masih dicatat manual;
- sulit mengetahui omzet;
- stok tidak terkontrol;
- laporan membutuhkan waktu lama;
- kesalahan pencatatan;
- sulit mengetahui produk terlaris.

### Solution

Aplikasi kasir membantu mengintegrasikan aktivitas tersebut dalam satu sistem.

Visual dapat menggunakan comparison:

**Sebelum Menggunakan Aplikasi**

vs.

**Setelah Menggunakan Aplikasi**

---

# 10. Feature Section

Feature menggunakan card/grid.

Fitur yang dapat ditampilkan:

### Point of Sale

Proses transaksi penjualan dengan cepat.

### Product Management

Mengelola produk dan kategori.

### Stock Management

Monitoring jumlah stok barang.

### Sales Report

Melihat laporan transaksi.

### Expense Tracking

Mencatat pengeluaran bisnis.

### Customer Management

Mencatat data pelanggan.

### Discount Management

Membuat diskon/promosi.

### Receipt

Mencetak atau memberikan nota transaksi.

### Multiple Payment Methods

Mencatat metode pembayaran pelanggan.

### Analytics

Melihat performa bisnis melalui statistik dan chart.

---

# 11. Product Dashboard Showcase

Section memperlihatkan mockup dashboard aplikasi.

Komponen visual:

**Summary Cards**

Total Revenue\
Total Transactions\
Average Transaction\
Products Sold

Kemudian chart dan tabel.

Tujuan section ini adalah membuat visitor dapat memahami manfaat aplikasi tanpa harus login ke demo dashboard.

---

# 12. Analytics & Chart Section

Landing page harus memiliki chart sebagai bagian dari product demonstration.

Chart **bukan data real-time website**.

Data merupakan static/demo data untuk memperlihatkan kemampuan aplikasi.

### Chart 1 — Sales Overview

Line Chart.

Contoh:

Jan — Rp12 juta\
Feb — Rp17 juta\
Mar — Rp15 juta\
Apr — Rp23 juta\
May — Rp28 juta\
Jun — Rp32 juta

Filter visual:

7 Hari | 30 Hari | 6 Bulan

Filter dapat bekerja secara client-side menggunakan dataset statis.

---

### Chart 2 — Payment Distribution

Donut Chart.

Contoh:

Cash — 35%

QRIS — 30%

Bank Transfer — 20%

E-Wallet — 15%

---

### Chart 3 — Top Selling Products

Bar Chart.

Menampilkan contoh produk dengan penjualan tertinggi.

---

### Recommended Chart Library

Gunakan salah satu:

**Chart.js**

atau

**Recharts**

jika menggunakan React/Next.js.

Tidak diperlukan backend untuk chart.

---

# 13. How It Works

Section menjelaskan penggunaan produk.

### Step 1

Daftar/Pesan Paket

### Step 2

Lakukan Pembayaran

### Step 3

Tim Mengaktifkan Layanan

### Step 4

Mulai Gunakan Aplikasi Kasir

Gunakan visual stepper horizontal pada desktop dan vertical pada mobile.

---

# 14. Pricing Section

Gunakan 3 pricing cards agar mudah dibandingkan.

Contoh:

### BASIC

Rp XX.XXX / bulan

Untuk usaha kecil.

Fitur:

- POS
- Produk
- Transaksi
- Laporan dasar
- 1 perangkat

CTA:

**Pilih Basic**

---

### PRO

Rp XX.XXX / bulan

Label:

**Paling Populer**

Fitur:

- Semua Basic
- Manajemen stok
- Laporan lengkap
- Customer management
- Analytics
- Multi-device

CTA:

**Pilih Pro**

---

### BUSINESS

Rp XXX.XXX / bulan

Fitur:

- Semua Pro
- Multi outlet
- Advanced report
- Priority support
- Advanced analytics

CTA:

**Pilih Business**

Harga dan fitur harus diletakkan dalam configuration/data file agar mudah diubah developer tanpa CMS.

---

# 15. Order Flow

Ketika pengguna menekan:

**Pilih Paket**

user diarahkan ke:

`/order?plan=pro`

Form menampilkan paket yang dipilih.

Data yang diminta:

- Nama
- Nama bisnis
- Nomor WhatsApp
- Email
- Jenis usaha
- Paket
- Durasi berlangganan

Durasi:

1 Bulan\
3 Bulan\
6 Bulan\
12 Bulan

Jika tersedia diskon tahunan, total harga berubah secara client-side.

---

# 16. Order Summary

Sebelum pembayaran tampilkan:

**Paket Pro**

Durasi: 12 bulan

Harga:\
Rp XXX.XXX

Diskon:\
Rp XX.XXX

**Total**\
Rp XXX.XXX

CTA:

**Lanjut Pembayaran**

---

# 17. Manual Payment System

Website tidak menggunakan payment gateway.

User memilih metode pembayaran:

### Bank Transfer

Contoh UI:

Bank BCA

Nomor Rekening:

`1234567890`

Atas Nama:

`PT / Nama Pemilik`

Button:

**Salin Nomor Rekening**

---

### E-Wallet

Pilihan dapat berupa:

DANA\
GoPay\
OVO\
ShopeePay

Tampilkan:

Nomor E-Wallet

Nama Pemilik

Button:

**Salin Nomor**

---

### QRIS

Tampilkan QR Code pembayaran.

Instruksi:

1. Buka aplikasi bank/e-wallet.
2. Pilih Scan QRIS.
3. Scan QR.
4. Masukkan nominal sesuai pesanan.
5. Selesaikan pembayaran.
6. Simpan bukti pembayaran.

Karena sistem pembayaran manual, QRIS dapat berupa **static merchant QRIS** apabila memang sesuai dengan sistem pembayaran merchant yang digunakan.

---

# 18. Payment Confirmation

Setelah pembayaran, user diarahkan melakukan konfirmasi.

Primary flow yang disarankan:

**Konfirmasi via WhatsApp**

CTA:

**Konfirmasi Pembayaran**

Pesan WhatsApp otomatis:

Halo, saya ingin melakukan konfirmasi pembayaran.

Nama:\
Nama Bisnis:\
Paket:\
Durasi:\
Total Pembayaran:\
Metode Pembayaran:

Saya akan mengirimkan bukti pembayaran melalui chat ini.

Dengan pendekatan ini website tidak perlu membuat sistem upload bukti pembayaran atau backend order yang kompleks.

---

# 19. Order ID

Karena website static, Order ID dapat dibuat client-side.

Format:

`ORD-YYYYMMDD-XXXX`

Contoh:

`ORD-20261020-A7K2`

Order ID ditampilkan pada:

- Order Summary
- Payment Page
- WhatsApp Confirmation

Catatan teknis:

Order ID client-side berfungsi sebagai **reference ID**, bukan ID transaksi yang dijamin unik oleh server.

---

# 20. Payment Security

Website wajib menjelaskan:

**Kami tidak pernah meminta PIN, password, OTP, CVV, atau informasi rahasia rekening Anda.**

Website hanya menampilkan informasi rekening/QRIS merchant.

Tidak boleh meminta:

- PIN ATM;
- PIN E-Wallet;
- password mobile banking;
- OTP;
- CVV;
- nomor kartu lengkap.

---

# 21. Trust Section

Tambahkan section untuk meningkatkan kepercayaan.

Contoh:

**Dipercaya untuk Membantu Operasional Bisnis**

Dapat berisi:

- jumlah bisnis pengguna;
- jumlah transaksi;
- uptime;
- jumlah outlet;
- rating.

Gunakan angka nyata apabila sudah tersedia.

Jangan menggunakan statistik palsu hanya untuk kebutuhan marketing.

---

# 22. Testimonials

Card testimonial:

Foto/avatar opsional

Nama

Jenis usaha

Testimonial

Rating

Contoh kategori:

Cafe Owner\
Retail Owner\
UMKM Owner

Semua testimonial harus berasal dari pelanggan nyata apabila dipublikasikan sebagai testimoni pelanggan.

---

# 23. FAQ

Pertanyaan minimal:

**Apa itu aplikasi kasir ini?**

**Bisnis apa saja yang cocok?**

**Apakah aplikasi membutuhkan internet?**

**Apakah bisa digunakan di HP?**

**Apakah mendukung printer thermal?**

**Bagaimana sistem pembayaran paket?**

**Apakah pembayaran otomatis terverifikasi?**

Tidak. Pembayaran diverifikasi secara manual.

**Berapa lama proses aktivasi?**

Isi berdasarkan SLA bisnis.

**Bagaimana cara konfirmasi pembayaran?**

Melalui WhatsApp/customer support.

**Apakah bisa upgrade paket?**

Sesuaikan dengan kebijakan layanan.

---

# 24. Final CTA

Section sebelum footer.

Headline:

**Siap Membuat Operasional Bisnis Lebih Mudah?**

Supporting text singkat.

Primary CTA:

**Pilih Paket Sekarang**

Secondary CTA:

**Hubungi Kami**

---

# 25. Floating WhatsApp

Floating WhatsApp button berada di kanan bawah.

Desktop dan mobile.

Klik membuka WhatsApp dengan pre-filled message.

Contoh:

Halo, saya tertarik dengan aplikasi kasir dan ingin mengetahui informasi lebih lanjut.

---

# 26. Footer

Footer berisi:

### Product

Fitur\
Harga\
Demo

### Company

Tentang Kami\
Kontak

### Support

WhatsApp\
FAQ

### Legal

Privacy Policy\
Terms & Conditions

Tambahkan:

Copyright © [Year] [Brand]

---

# 27. UI/UX Direction

Gaya visual:

**Modern SaaS + POS Dashboard**

Karakter desain:

- clean;
- profesional;
- trustworthy;
- whitespace cukup;
- rounded card;
- subtle shadow;
- dashboard-oriented visual;
- tidak terlalu banyak dekorasi;
- CTA kontras dan jelas.

Landing page harus memberikan kesan bahwa produk adalah software bisnis profesional, bukan sekadar website penjualan.

---

# 28. Responsive Design

Target breakpoint:

### Mobile

320px – 767px

### Tablet

768px – 1023px

### Desktop

1024px – 1439px

### Large Desktop

1440px+

Semua section wajib responsive.

Pricing card berubah menjadi vertical stack pada mobile.

Chart harus responsive mengikuti container.

Navigation berubah menjadi hamburger menu.

---

# 29. Recommended Technology

Untuk website yang benar-benar sederhana:

**HTML5 + CSS/Tailwind CSS + JavaScript + Chart.js**

Alternatif jika menginginkan struktur development yang lebih scalable:

**Next.js Static Export + TypeScript + Tailwind CSS + Recharts**

Website harus dapat di-build menjadi static files.

Tidak diperlukan:

Node.js server runtime\
PHP\
database\
CMS\
authentication server

---

# 30. Static Data Architecture

Data yang sering berubah disimpan terpisah dari component.

Contoh:

`/data/pricing`

`/data/features`

`/data/faq`

`/data/testimonials`

`/data/payment-methods`

`/data/chart-demo`

Tujuannya agar developer dapat mengubah konten tanpa mengubah struktur UI.

---

# 31. Payment Configuration

Informasi pembayaran jangan tersebar di banyak component.

Gunakan satu configuration source.

Struktur data:

Bank:

- Bank Name
- Account Number
- Account Holder

E-Wallet:

- Provider
- Number
- Account Holder

QRIS:

- QR Image
- Merchant Name

Dengan begitu perubahan rekening hanya dilakukan pada satu lokasi.

---

# 32. SEO Requirements

Setiap halaman memiliki:

- unique title;
- meta description;
- canonical URL;
- Open Graph;
- Twitter/X Card;
- favicon;
- semantic heading;
- descriptive image alt text.

Tambahkan structured data jika relevan:

- Organization
- SoftwareApplication
- FAQPage

Gunakan hanya informasi yang benar-benar sesuai dengan produk.

---

# 33. Performance Requirements

Target:

**Lighthouse Performance ≥ 90**

**SEO ≥ 90**

**Accessibility ≥ 90**

**Best Practices ≥ 90**

Optimasi:

- WebP/AVIF;
- lazy loading;
- minified JS/CSS;
- optimized font;
- limited third-party scripts;
- responsive images;
- preload asset penting;
- defer script non-critical.

---

# 34. Security Requirements

Walaupun static website, keamanan tetap diperlukan.

Minimum:

- HTTPS;
- Content Security Policy;
- HSTS;
- X-Content-Type-Options;
- Referrer-Policy;
- Permissions-Policy;
- external link protection;
- dependency security updates.

Website tidak boleh menyimpan credential pembayaran pengguna.

---

# 35. Analytics

Recommended event tracking:

`hero_cta_click`

`feature_view`

`pricing_view`

`plan_select`

`checkout_start`

`payment_method_select`

`copy_bank_account`

`qris_view`

`whatsapp_confirmation_click`

`whatsapp_support_click`

Tujuan analytics adalah mengetahui funnel:

**Visitor → Pricing → Select Plan → Payment → Confirmation**

---

# 36. Conversion Tracking

Conversion utama:

**Klik Konfirmasi Pembayaran**

Secondary conversion:

- Pilih Paket
- Klik WhatsApp
- Klik CTA Hero
- Melihat pricing
- Memilih metode pembayaran

---

# 37. Accessibility

Minimum WCAG-oriented implementation:

- semantic HTML;
- keyboard navigation;
- visible focus state;
- sufficient contrast;
- alt text;
- form labels;
- ARIA hanya jika diperlukan;
- button memiliki accessible name;
- chart memiliki textual summary.

Informasi pada chart tidak boleh hanya bergantung pada warna.

---

# 38. Suggested Homepage Order

Urutan final homepage:

**01 — Header**

↓

**02 — Hero**

Headline + CTA + POS Dashboard Mockup

↓

**03 — Trust / Business Categories**

Retail • Cafe • Restaurant • UMKM • Minimarket

↓

**04 — Problems & Solutions**

↓

**05 — Main Features**

↓

**06 — Dashboard Preview**

↓

**07 — Analytics**

Revenue Cards\
Sales Line Chart\
Payment Donut Chart\
Top Products Bar Chart

↓

**08 — How It Works**

Pesan → Bayar → Aktivasi → Gunakan

↓

**09 — Benefits**

↓

**10 — Pricing**

Basic | Pro | Business

↓

**11 — Payment Methods**

Bank | E-Wallet | QRIS

↓

**12 — Testimonials**

↓

**13 — FAQ**

↓

**14 — Final CTA**

↓

**15 — Footer**

---

# 39. Purchase Flow

```text
LANDING PAGE
     │
     ▼
PRICING
     │
     ▼
SELECT PACKAGE
     │
     ▼
ORDER FORM
     │
     ▼
ORDER SUMMARY
     │
     ▼
SELECT PAYMENT
     │
 ┌───┼──────────┐
 ▼   ▼          ▼
BANK E-WALLET   QRIS
 │    │          │
 └────┴────┬─────┘
           ▼
   MANUAL PAYMENT
           │
           ▼
WHATSAPP CONFIRMATION
           │
           ▼
 MANUAL VERIFICATION
           │
           ▼
 SERVICE ACTIVATION
```

---

# 40. Suggested Project Structure

```text
/
├── index.html
├── features/
│   └── index.html
├── pricing/
│   └── index.html
├── order/
│   └── index.html
├── payment/
│   └── index.html
├── payment-success/
│   └── index.html
├── privacy-policy/
│   └── index.html
├── terms/
│   └── index.html
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── qris/
│   └── logo/
│
├── css/
│   └── main.css
│
├── js/
│   ├── main.js
│   ├── chart.js
│   ├── order.js
│   └── payment.js
│
└── data/
    ├── pricing.js
    ├── features.js
    ├── faq.js
    ├── chart.js
    └── payment.js
```

Jika menggunakan Next.js, struktur dapat disesuaikan ke App Router dan static export.

---

# 41. Acceptance Criteria

Website dianggap selesai apabila:

- landing page dapat diakses tanpa login;
- seluruh halaman utama responsive;
- tidak terdapat CMS;
- tidak terdapat authentication;
- pricing dapat ditampilkan dengan benar;
- user dapat memilih paket;
- user dapat mengisi data pemesanan;
- total harga dihitung dengan benar di browser;
- user dapat memilih Bank/E-Wallet/QRIS;
- rekening dapat disalin;
- QRIS dapat ditampilkan;
- user dapat melakukan konfirmasi melalui WhatsApp;
- chart tampil responsive;
- chart menggunakan demo/static data;
- FAQ berfungsi;
- mobile navigation berfungsi;
- semua CTA memiliki destination yang benar;
- HTTPS digunakan pada production;
- SEO metadata tersedia;
- tidak ada informasi pembayaran sensitif pelanggan yang disimpan.

---

# 42. MVP Scope

Untuk versi pertama, prioritaskan:

**Landing Page + Features + Dashboard Preview + Chart + Pricing + Order Form + Manual Payment + Gmail Confirmation + FAQ + Legal Pages**

Tidak perlu membangun backend hanya untuk membuat sistem terlihat lebih kompleks.

Arsitektur MVP:

**Static Frontend → Manual Payment → Gmail → Manual Activation**

Pendekatan ini sesuai untuk tahap awal karena murah, sederhana, mudah di-deploy, dan tidak membutuhkan sistem authentication maupun payment gateway.
