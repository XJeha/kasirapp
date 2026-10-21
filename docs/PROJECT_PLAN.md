# Rencana Project — Landing Page Kasira

## Tujuan

Membangun situs marketing dan penjualan statis untuk layanan aplikasi kasir/POS yang:

- menjelaskan produk dan fitur secara jelas;
- memperlihatkan dashboard/analitik melalui mockup dan chart demo;
- memungkinkan pengunjung memilih paket, menghitung harga, dan mengirim pesanan;
- mengarahkan pembayaran manual (bank, e-wallet, QRIS) dan konfirmasi melalui email;
- tidak membutuhkan backend, autentikasi, database, CMS, atau payment gateway.

## Scope

### Termasuk

- Landing page lengkap sesuai hierarchy pada prompt.
- `/features`, `/pricing`, `/order`, `/payment`, `/payment-success`, `/privacy-policy`, `/terms`.
- Data bisnis terpusat di `src/data/`.
- Perhitungan harga/diskon client-side, state pesanan sementara, nomor referensi klien.
- Chart Recharts dengan filter nyata dan data demo.
- Email konfirmasi `mailto:` dengan isi pesanan.
- SEO metadata, JSON-LD, sitemap, robots.
- Aksesibilitas WCAG-oriented, responsive 320–1440+ px.
- Unit test, E2E, axe, build static.

### Tidak termasuk

- Login/register, dashboard pengguna, CMS, admin panel.
- Database, API, server runtime.
- Payment gateway, verifikasi otomatis, subscription billing.
- Analitik pihak ketiga.
- Testimoni atau metrik bisnis fiktif.

## Requirement utama

1. Static export (`output: "export"`) tanpa Node.js di produksi.
2. Visual original, bukan clone situs referensi.
3. Alur: pilih paket → isi data → bayar manual → konfirmasi email → verifikasi manual.
4. Tidak pernah menampilkan klaim “pembayaran berhasil” tanpa verifikasi.
5. Semua data bisnis yang belum tersedia memakai placeholder yang jelas.
6. Responsive, accessible, SEO-ready, performance-aware.

## Kondisi existing

Repository awal hanya berisi `AGENTS.md`, PRD, prompt implementasi, dan folder `.agent/`. Tidak ada `package.json`, source code, atau konfigurasi tooling. Karena itu proyek dibangun dari nol mengikuti stack yang direkomendasikan prompt.

## Asumsi

- Brand “Kasira” adalah merek kerja; pemilik bisnis akan mengganti nama/logo.
- Harga 49.000 / 99.000 / 199.000 adalah contoh konfigurasi.
- Email support, rekening, e-wallet, QRIS, domain, dan identitas legal belum tersedia.
- Konfirmasi pembayaran menggunakan email (prompt), bukan WhatsApp (PRD lama).
- WhatsApp digunakan hanya untuk support: `0895-3363-99300` (sudah dikonfigurasi).

## Research

### Fakta terverifikasi

- Next.js 16 mendukung static export melalui `output: "export"` (dokumentasi resmi Next.js, diakses 21 Oktober 2026).
- `next lint` dihapus di Next.js 16; lint memakai ESLint CLI dengan flat config `eslint-config-next/core-web-vitals`.
- `robots.ts` dan `sitemap.ts` memerlukan `dynamic = "force-static"` pada static export.
- Next.js 16 di Windows memiliki bug path RSC segment (issue #85374): file ditulis `__next.<segmen>/__PAGE__.txt` tetapi browser meminta `__next.<segmen>.__PAGE__.txt`.
- Node.js minimum Next.js 16 adalah 20.9.0.
- `npm audit --omit=dev` bersih; advisory `braces` tersisa hanya pada tooling lint dev.

### Belum terverifikasi

- Perilaku header keamanan pada hosting produksi (Netlify/Cloudflare/Nginx) — belum dideploy.
- Lighthouse pada CDN produksi dan perangkat nyata.
- Kompatibilitas penuh Safari/Firefox (E2E hanya Chromium).
- Validitas QRIS/merchant dan rekening karena masih placeholder.

## Arsitektur

```text
Route (App Router, server component)
  → Section / UI components
  → Data statis (src/data)
  → Client component hanya untuk interaksi:
      Header, HeroCta, SupportButton, TrackedPlanLink,
      Accordion, Pricing analytics, checkout clients,
      AnalyticsLazy + Recharts
```

- Tidak ada lapisan backend/database.
- State checkout murni client-side (`sessionStorage`).
- Perhitungan harga adalah fungsi murni di `src/lib/pricing.ts`.
- Konfigurasi bisnis terpusat di `src/data/`.
- Static export menghasilkan HTML per route.

## Frontend

- Design token Tailwind 4 di `src/app/globals.css`.
- Font Plus Jakarta Sans variable, self-hosted.
- Layout max-width 1280 px, spacing konsisten, radius dan shadow terbatas.
- Mockup produk dibuat dari HTML/CSS sendiri; chart demo menggunakan Recharts.
- Loading/empty/error states untuk checkout, copy, QRIS, dan form.
- `content-visibility` untuk section non-anchor demi mengurangi biaya layout awal.
- Animasi minimal; menghormati `prefers-reduced-motion`.

## Backend

Tidak ada. Tidak ada API, server action, atau database.

## Database

Tidak ada. Tidak ada data pengguna yang disimpan di server.

## Security

- Tidak ada autentikasi/otorisasi.
- Validasi input klien untuk UX; tidak ada server yang menerima data.
- Tidak meminta/menyimpan PIN, OTP, CVV, password, atau nomor kartu.
- `mailto:` di-encode; JSON-LD di-escape.
- Header keamanan disediakan untuk host statis; CSP memiliki keterbatasan inline.
- Dependency produksi bersih dari advisory yang diketahui.

## SEO

- Metadata unik, canonical, OG/Twitter per halaman.
- Structured data Organization, SoftwareApplication, FAQPage tanpa rating fiktif.
- Sitemap + robots.
- Payment/success `noindex`.
- Konten Bahasa Indonesia, heading hierarchy, alt text.

## Testing & Automation

- Vitest: 35 unit test.
- Playwright: 31 E2E test (termasuk axe) — lihat `docs/TEST_REPORT.md`.
- ESLint, Prettier, TypeScript strict.
- Build static diverifikasi.
- Lighthouse desktop dan mobile dijalankan secara manual.

## Risiko

| Risiko                                 | Dampak                        | Mitigasi                                                         |
| -------------------------------------- | ----------------------------- | ---------------------------------------------------------------- |
| Placeholder data terpublikasi          | Salah rekening/QRIS/identitas | Checklist konfigurasi + dokumentasi                              |
| Persepsi “pembayaran berhasil”         | Kepercayaan/keuangan          | Copy “Menunggu Konfirmasi”, verifikasi manual                    |
| `mailto:` tidak mendukung lampiran     | Bukti tidak terkirim          | Instruksi eksplisit + email support dapat disalin                |
| Data pesanan hilang saat tab ditutup   | Pengguna harus mengulang      | Empty state aman + penjelasan                                    |
| CSP `unsafe-inline`                    | Perlindungan XSS lebih lemah  | Tidak ada input yang dirender sebagai HTML; rencana hash/nonce   |
| Bug static export Windows              | 404 prefetch RSC              | `scripts/fix-static-export.mjs`                                  |
| Mobile Lighthouse < 90 tidak konsisten | Target performa               | Lazy chart, font lokal, content-visibility; catat sebagai risiko |
| Testimoni kosong                       | Kurang social proof           | Section disembunyikan sampai data nyata tersedia                 |

## Acceptance criteria

- [x] Semua route wajib tersedia dan tidak ada login/register.
- [x] Static export berhasil.
- [x] Chart tampil dan filter mengubah data.
- [x] Harga, diskon, dan durasi dihitung benar.
- [x] Form tervalidasi dan state bertahan ke halaman pembayaran.
- [x] Bank/e-wallet copy, QRIS placeholder, email konfirmasi benar.
- [x] Verifikasi manual dikomunikasikan jelas.
- [x] Mobile navigation dan FAQ berfungsi.
- [x] Metadata SEO dan sitemap tersedia.
- [x] Tidak ada console error pada alur utama.
- [x] Accessibility scan tidak menemukan pelanggaran serius.
- [x] Responsive tanpa overflow horizontal 320–1440 px.
- [ ] Data bisnis nyata (menunggu pemilik bisnis).
- [ ] Lighthouse mobile ≥ 90 secara konsisten (87–93).

## Tahapan implementasi

1. Inspeksi repo dan requirement.
2. Setup Next.js, TypeScript, Tailwind, lint, test.
3. Design token dan komponen UI dasar.
4. Header/footer/layout.
5. Section landing page + mockup.
6. Chart analitik.
7. Halaman fitur dan harga.
8. Alur order, payment, success.
9. Halaman legal dan SEO.
10. Aset placeholder (OG/QRIS).
11. Perbaikan aksesibilitas dan performa.
12. Unit/E2E/Lighthouse/build.
13. Dokumentasi dan laporan.

## Definition of Done

Terpenuhi dengan status **READY WITH KNOWN RISKS**: seluruh fitur dan quality gate inti lulus; risiko utama adalah data placeholder dan variasi skor Lighthouse mobile. Detail pada `docs/TEST_REPORT.md`.
