# Kasira — Landing Page Aplikasi Kasir (Static)

Situs marketing dan penjualan statis untuk aplikasi kasir/POS. Dibangun dengan Next.js App Router, TypeScript, Tailwind CSS, Recharts, dan Lucide, lalu diekspor menjadi file statis tanpa server produksi.

> **Status:** siap sebagai template produksi dengan data contoh. Seluruh identitas bisnis, rekening, QRIS, harga, dan dokumen legal **wajib diganti** sebelum publikasi. Lihat [Konfigurasi wajib](#konfigurasi-wajib-sebelum-publikasi).

---

## Ruang lingkup

Yang **ada**:

- Landing page lengkap: hero gelap sinematik + dua mockup HP, showcase "Upgrade Bisnismu", kategori bisnis, fitur tiga kolom dengan mockup HP di tengah, demo dashboard gelap, tantangan operasional, analitik interaktif, harga, CTA kontak, dan FAQ.
- Bahasa visual mengikuti struktur referensi: aksen merah, tipografi ringan dengan aksen serif italic, hero/CTA gelap berlapis, mockup HP CSS-orisinal, serta footer gelap.
- Animasi: parallax latar hero/CTA, partikel bergerak, mockup HP mengambang, reveal on scroll (fade/zoom/left/right) dengan stagger, header transparan yang berubah putih saat scroll, dan hover arrow/CTA.
- Halaman `/features`, `/pricing`, `/order`, `/payment`, `/payment-success`, `/privacy-policy`, `/terms`.
- Pemilihan paket dan durasi dengan perhitungan harga + diskon di browser.
- Rincian fitur tiap paket dan tabel perbandingan dilipat menjadi dropdown pada mobile; desktop tetap menampilkan semuanya.
- State pesanan sementara di `sessionStorage` dan nomor referensi `ORD-YYYYMMDD-XXXX`.
- Pembayaran manual: transfer bank, e-wallet, QRIS (placeholder), tombol salin dengan fallback.
- Konfirmasi pembayaran via dialog email: Gmail compose, `mailto:`, salin isi, dan unduh `.eml` — tanpa email otomatis dan tanpa klaim pembayaran terverifikasi.
- CTA WhatsApp ke nomor support pada kartu kontak, FAQ, footer, halaman pembayaran/sukses, dan tombol support mengambang.
- Chart client-side dengan filter 7 hari / 30 hari / 6 bulan.
- SEO metadata per halaman, canonical, Open Graph, JSON-LD, sitemap, robots.
- Aksesibilitas: navigasi keyboard, skip link, accordion ARIA, chart dengan ringkasan teks, fokus terlihat.
- Header keamanan statis di `public/_headers`.

Yang **tidak ada** (sesuai requirement):

- Backend, database, CMS, akun pengguna, login/register, dashboard pelanggan.
- Payment gateway atau verifikasi pembayaran otomatis.
- Penyimpanan kredensial pembayaran.
- Alat analitik pihak ketiga.

---

## Stack

| Komponen                                 | Versi           |
| ---------------------------------------- | --------------- |
| Next.js (App Router, `output: "export"`) | 16.4.2          |
| React / React DOM                        | 19.3.1          |
| TypeScript (strict)                      | 5.9.3           |
| Tailwind CSS                             | 4.3.3           |
| Recharts                                 | 3.10.1          |
| Lucide React                             | 1.60.0          |
| Wrangler (Cloudflare deploy)             | 4.151.3         |
| Vitest                                   | 5.0.5           |
| Playwright + axe-core                    | 1.64.1 / 4.14.0 |

Node.js yang dibutuhkan: **>= 22.0.0** (Wrangler 4.151.3; Next.js sendiri minimal 20.9.0). Dikembangkan dan diverifikasi dengan Node 24.19.0 di Windows. Build Cloudflare memakai `.node-version` = `24.18.0`.

---

## Design & animasi

- **Palet:** merah `#cf3a4a` sebagai aksen utama, ungu `#5a32c6` sebagai aksen pendukung, permukaan putih/`#fafafa`, teks `#202020`.
- **Tipografi:** Plus Jakarta Sans (lokal) untuk teks, Playfair Display italic (lokal) sebagai aksen editorial; fallback aman ke Georgia.
- **Hero:** latar gelap berlapis (radial glow merah/ungu + garis + partikel), parallax saat scroll, dua mockup HP CSS dengan animasi masuk dan float.
- **Section:** alternasi putih/`#fafafa`, mockup besar, fitur tiga kolom, band gelap untuk demo dashboard dan CTA.
- **Animasi:** `IntersectionObserver` untuk reveal; transform/opacity dinonaktifkan otomatis pada `prefers-reduced-motion`.
- **Tanpa aset dari situs referensi:** seluruh mockup, logo, dan ilustrasi tetap dibuat khusus untuk proyek ini.

---

## Menjalankan

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export ke out/ + perbaikan RSC Windows
npm run deploy:check # validasi konfigurasi Cloudflare (wrangler --dry-run)
npm run preview      # http://127.0.0.1:4173 (serve out/)
```

Quality gate:

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm run deploy:check
npx playwright install chromium   # sekali saja
npm run test:e2e
```

`npm run verify` menjalankan format check, lint, typecheck, unit test, build, dan validasi konfigurasi deploy Cloudflare.

---

## Halaman dan route

| Route               | Isi                                    | Indeks            |
| ------------------- | -------------------------------------- | ----------------- |
| `/`                 | Landing page lengkap                   | Ya                |
| `/features/`        | Detail 10 fitur per kategori           | Ya                |
| `/pricing/`         | Kartu paket + tabel perbandingan       | Ya                |
| `/order/`           | Form pesanan + ringkasan sticky        | Ya                |
| `/payment/`         | Instruksi pembayaran manual            | Tidak (`noindex`) |
| `/payment-success/` | Langkah selanjutnya, verifikasi manual | Tidak (`noindex`) |
| `/privacy-policy/`  | Template kebijakan privasi             | Ya                |
| `/terms/`           | Template syarat & ketentuan            | Ya                |

Tidak ada `/login`, `/register`, `/admin`, atau `/dashboard` (rute tersebut menghasilkan 404).

Semua URL memakai trailing slash karena `trailingSlash: true`, sehingga output berupa `out/<route>/index.html` dan dapat dilayani host statis tanpa rewrite khusus.

---

## Struktur proyek

```text
src/
├── app/                    # route, layout, metadata, robots, sitemap, icon
├── components/
│   ├── analytics/          # ViewTracker
│   ├── charts/             # Recharts (client, lazy) + skeleton
│   ├── home/               # section landing page
│   ├── layout/             # Header, Footer, Section, PageHeader, SupportButton
│   ├── legal/              # layout dokumen legal
│   ├── mockups/            # mockup dashboard, POS, stok, donut, sparkline
│   ├── order/              # form, ringkasan, stepper, loading, empty state
│   ├── payment/            # pemilih metode, bank/e-wallet/QRIS, copy, keamanan
│   ├── pricing/            # kartu harga, perbandingan, tracked link
│   ├── seo/                # JsonLd
│   └── ui/                 # Button, Badge, Input, Select, FormField, Accordion
├── data/                   # site, features, pricing, payments, FAQ, analytics
├── fonts/                  # Plus Jakarta Sans variable (lokal)
└── lib/                    # format, pricing, order, validation, email, analytics
```

---

## Konfigurasi wajib sebelum publikasi

| File                                                        | Yang harus diganti                                                     | Nilai sekarang                                                     |
| ----------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `src/data/site.ts`                                          | `name`, `tagline`, `description`                                       | `Kasira`                                                           |
| Build env `NEXT_PUBLIC_SITE_URL`                            | URL produksi (workers.dev/custom domain)                               | belum diisi → fallback `https://example.com`                       |
| `src/data/site.ts`                                          | `contact.email`                                                        | `heen.chii19@gmail.com` (sudah diisi)                              |
| `src/data/site.ts`                                          | `contact.whatsapp`, `whatsappDisplay`                                  | `62895336399300` / `0895-3363-99300` (sudah diisi)                 |
| `src/data/site.ts`                                          | `operations.activationEstimate`, `supportHours`                        | contoh `1×24 jam kerja`, `Senin–Sabtu, 09.00–17.00 WIB`            |
| `src/data/site.ts`                                          | `legal.entityName`, `address`, `phone`                                 | placeholder dalam kurung siku                                      |
| `src/data/pricing.ts`                                       | `plans[].monthlyPrice`, fitur, diskon durasi                           | 49.000 / 99.000 / 199.000                                          |
| `src/data/payments.ts`                                      | `banks[]`, `ewallets[]`, `qris`                                        | `[BANK_NAME]`, `0000000000`, `[EWALLET_NUMBER]`, `[MERCHANT_NAME]` |
| `public/payment/qris.png`                                   | Ganti dengan QRIS merchant resmi                                       | gambar placeholder                                                 |
| `src/data/testimonials.ts`                                  | Isi testimoni asli, lalu set `testimonialsEnabled = true`              | kosong / nonaktif                                                  |
| `src/data/site.ts`                                          | `testimonialsEnabled`                                                  | `false`                                                            |
| `public/og-image.png`, `src/app/icon.svg`                   | Ganti dengan brand final jika perlu                                    | aset contoh                                                        |
| `src/app/privacy-policy/page.tsx`, `src/app/terms/page.tsx` | `[TANGGAL PEMBARUAN]`, `[KEBIJAKAN PENGEMBALIAN DANA]`, `[YURISDIKSI]` | placeholder                                                        |
| `public/_headers`                                           | Domain/CSP sesuai hosting                                              | contoh Netlify/Pages/Workers                                       |

Cari placeholder secara global:

```bash
# PowerShell
Select-String -Path (Get-ChildItem src -Recurse -File) -Pattern "\[[A-Z_]+\]|example\.com"

# bash
grep -rnE "\[[A-Z_]+\]|example\.com" src public
```

Nama **Kasira** adalah merek kerja untuk template. Ganti juga teks logo pada `src/components/layout/Logo.tsx` dan metadata pada `src/app/layout.tsx` bila diperlukan.

---

## Alur pesanan dan pembayaran

1. Pengunjung memilih paket di `/pricing` → `/order/?plan=pro`.
2. Form memvalidasi nama, bisnis, WhatsApp (format Indonesia), email, jenis usaha, paket, dan durasi.
3. Total dihitung dari `src/data/pricing.ts` (`calculateOrderPricing`) termasuk diskon durasi 5% / 10% / 20%.
4. Saat submit, dibuat `StoredOrder` dengan referensi `ORD-YYYYMMDD-XXXX` (Web Crypto) dan disimpan di `sessionStorage` dengan key `kasira:order:v1`.
5. `/payment` membaca state tersebut, menampilkan rekening/e-wallet/QRIS, dan menyimpan metode yang dipilih.
6. Tombol **Konfirmasi via Email** membuka dialog berisi email siap kirim: penerima, subjek, isi pesanan, dan nomor referensi. Dari dialog pengguna dapat membuka **Gmail compose** (bekerja di browser tanpa aplikasi email), membuka aplikasi email (`mailto:`), menyalin isi email, atau mengunduh file `.eml`. Situs tidak mengirim email secara otomatis.
7. `/payment-success` menampilkan “Menunggu Konfirmasi”, bukan klaim pembayaran berhasil. Verifikasi dilakukan manual.

Catatan:

- Data tidak dikirim ke server mana pun sampai pengguna mengirim email dari aplikasi emailnya.
- Jika tab ditutup, `sessionStorage` hilang. Halaman payment/success menampilkan empty state yang aman.
- Nomor referensi adalah nomor rujukan klien, **bukan** ID transaksi yang dijamin unik oleh server.
- `mailto:` tidak dapat melampirkan bukti pembayaran otomatis; UI mengingatkan pengguna untuk melampirkannya.

---

## Analytics hooks

Tidak ada analytics pihak ketiga. `src/lib/analytics.ts` mengirim `CustomEvent("kasira:analytics")` dan mendorong ke `window.dataLayer` bila tersedia.

Event yang tersedia: `hero_cta_click`, `feature_view`, `pricing_view`, `plan_select`, `checkout_start`, `payment_method_select`, `copy_bank_account`, `copy_ewallet_account`, `qris_view`, `email_confirmation_click`, `support_click`.

Integrasi GTM/GA nantinya cukup menambahkan listener atau mengisi `window.dataLayer`. Tidak ada data pribadi yang dikirim otomatis oleh helper.

---

## SEO

- Metadata unik per halaman (title, description, canonical, Open Graph, Twitter card) melalui `src/lib/metadata.ts`.
- JSON-LD `Organization`, `SoftwareApplication`, dan `FAQPage`; tanpa rating/review fiktif.
- `app/robots.ts` dan `app/sitemap.ts` menghasilkan `robots.txt` dan `sitemap.xml` saat build.
- `/payment` dan `/payment-success` memakai `noindex, follow`.
- OG image 1200×630 di `public/og-image.png`.
- Domain canonical masih `https://example.com`; ganti `siteConfig.url` sebelum deploy agar canonical, sitemap, dan OG URL benar.

---

## Keamanan

- Tidak ada autentikasi, database, API, atau rahasia di frontend.
- Form memvalidasi input di klien; data hanya disimpan sementara di `sessionStorage`; tidak ada data pembayaran sensitif yang diminta.
- Rekening/e-wallet/QRIS adalah data publik merchant, bukan kredensial.
- `public/_headers` menyediakan CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, dan `Permissions-Policy`. Cloudflare Workers Static Assets membacanya secara native.
- CSP memakai `script-src 'unsafe-inline'` karena Next.js menempelkan bootstrap RSC dan JSON-LD inline pada HTML statis. Ini batasan yang didokumentasikan; lihat `docs/SECURITY.md` untuk rencana pengetatan.
- Audit produksi: `npm audit --omit=dev` → **0 vulnerabilities**.
- Audit penuh masih melaporkan advisory `braces` (dev-only, transitive dari `eslint-config-next`; belum ada rilis perbaikan). Tidak masuk bundle produksi.

Detail: [docs/SECURITY.md](docs/SECURITY.md).

---

## Performa

- Font lokal: Plus Jakarta Sans variable (27 KB) + Playfair Display italic (21 KB), preload, `font-display: optional`.
- Chart Recharts dimuat lazy saat section mendekati viewport; tidak ada library chart di bundle awal.
- Tidak ada analytics, gambar eksternal, atau iframe.
- Mockup produk adalah HTML/CSS asli, bukan gambar eksternal.
- Chart dan mockup didekorasi dengan `aria-hidden`; konten setara tersedia sebagai teks.
- Animasi memakai transform/opacity (compositor-friendly), `will-change` dilepas setelah reveal, dan controller parallax/reveal digabung agar hanya ada satu scroll listener.

Hasil Lighthouse 23 Oktober 2026 (build produksi, Chrome headless, `serve out`):

| Preset            | Performance | Accessibility | Best Practices | SEO |
| ----------------- | ----------- | ------------- | -------------- | --- |
| Desktop           | **97**      | **100**       | **100**        | 100 |
| Mobile (simulasi) | 68–81       | **100**       | **100**        | 100 |

Run mobile terakhir: Performance 77, LCP 3,1 s, TBT 480 ms, CLS 0. Skor mobile bervariasi karena TBT hidrasi React pada simulasi CPU 4×; angka ini dicatat sebagai risiko, bukan PASS untuk target ≥ 90. Aksesibilitas, Best Practices, dan SEO stabil 100.

---

## Deployment

Output ada di `out/`. Tidak perlu Node.js di produksi.

Target deploy awal: **Cloudflare Workers Static Assets** (assets-only). Konfigurasi sudah disiapkan di `wrangler.jsonc`.

- **Cloudflare Workers:**
  - Build command: `npm run build`
  - Deploy command: `npx wrangler deploy`
  - Build variable: `NEXT_PUBLIC_SITE_URL` = URL `workers.dev`/domain final
  - `_headers` dan `_redirects` didukung native; `404.html` dipakai via `not_found_handling`.
- **Netlify / Cloudflare Pages:** publish `out`; `_headers` disalin ke root output.
- **Nginx:** arahkan root ke `out`, gunakan `try_files $uri $uri/ =404;` (karena trailing slash), dan terapkan header dari `_headers` di konfigurasi server.
- **GitHub Pages / S3 / CDN:** pastikan host melayani `index.html` untuk path berakhiran `/` dan memetakan 404 ke `404.html`.

Panduan deploy Cloudflare langkah demi langkah: [docs/CLOUDFLARE_DEPLOY.md](docs/CLOUDFLARE_DEPLOY.md). Panduan host lain: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

### Catatan Windows

Next.js 16 di Windows menulis file RSC segment sebagai `__next.<segmen>/__PAGE__.txt`, sementara browser meminta `__next.<segmen>.__PAGE__.txt` ([next.js#85374](https://github.com/vercel/next.js/issues/85374)). `scripts/fix-static-export.mjs` (dijalankan otomatis oleh `postbuild`) memetakan file ke nama yang diminta. Tanpa ini, prefetch `next/link` menghasilkan 404 di console. Build di Linux/macOS tidak terpengaruh.

---

## Testing

- **Unit (Vitest):** format Rupiah, perhitungan harga/diskon, pembuatan nomor referensi, validasi form/WhatsApp/email, normalisasi nomor WhatsApp dan URL `wa.me`.
- **E2E (Playwright):** navigasi, mobile menu + Escape, FAQ keyboard, filter chart, pemilihan paket, validasi form, perhitungan durasi, state pesanan, bank/e-wallet copy, QRIS render, dialog email (Gmail, `mailto:`, salin isi, unduh `.eml`), halaman sukses manual, empty state, tidak ada console error, metadata/SEO, robots/sitemap, dan axe pada halaman utama + checkout + dialog.
- **Responsif:** 320, 375, 390, 768, 1024, 1280, 1440 px; tidak ada overflow horizontal.

Detail hasil: [docs/TEST_REPORT.md](docs/TEST_REPORT.md).

---

## Batasan yang diketahui

- Pembayaran tidak diverifikasi otomatis; sukses page hanya instruksi.
- Data pesanan hilang saat tab ditutup (memang disengaja, tanpa backend).
- Pengiriman email bergantung pada aplikasi email atau Gmail pengguna; tersedia fallback salin isi, unduh `.eml`, dan alamat support.
- QRIS masih placeholder dan ditandai jelas, bukan kode aktif.
- Testimoni disembunyikan sampai data asli tersedia.
- Harga, rekening, email, domain, dan identitas legal adalah placeholder.
- Dokumen legal adalah template dan bukan nasihat hukum.
- CSP belum memakai nonce/hash karena keterbatasan static export.
- Skor Lighthouse mobile bervariasi (68-81; run terakhir 77) pada lingkungan pengujian; TBT hidrasi React masih menjadi penyebab utama. Desktop berada di 97.

---

## Lisensi aset

- Font **Plus Jakarta Sans** — SIL Open Font License 1.1.
- Font **Playfair Display** (italic) — SIL Open Font License 1.1.
- Ikon **Lucide** — ISC License.
- Mockup, logo, dan ilustrasi UI dibuat khusus untuk proyek ini; tidak menyalin aset situs referensi.
