# Test & Quality Report

Tanggal: 21 Oktober 2026

## Scope

Landing page statis Kasira: seluruh route, alur pesanan, pembayaran manual, konfirmasi email, chart, navigasi mobile, aksesibilitas, SEO, dan static export.

## Environment

| Item           | Nilai                                                                   |
| -------------- | ----------------------------------------------------------------------- |
| OS             | Windows (win32)                                                         |
| Node.js        | 24.19.0                                                                 |
| npm            | 11.17.0                                                                 |
| Next.js        | 16.4.2                                                                  |
| React          | 19.3.1                                                                  |
| Browser E2E    | Chromium (Playwright 1.64.1)                                            |
| Lighthouse     | Lighthouse CLI terbaru via `npx`, Chrome headless (Playwright Chromium) |
| Preview server | `serve out -l 4173`                                                     |
| Deploy target  | Cloudflare Workers Static Assets, Wrangler 4.151.3                      |

## Format

Status: **PASS**

```bash
npm run format:check
```

Prettier memeriksa TypeScript, TSX, CSS, JSON, dan Markdown dengan plugin Tailwind.

## Lint

Status: **PASS**

```bash
npm run lint
```

ESLint flat config `eslint-config-next/core-web-vitals` + TypeScript. React Compiler rules (`react-hooks/set-state-in-effect`, `react-hooks/immutability`) diperbaiki pada kode, bukan dimatikan.

## Typecheck

Status: **PASS**

```bash
npx tsc --noEmit
```

TypeScript strict, tanpa error.

## Unit test

Status: **PASS** - 35 test / 6 file.

```bash
npm test
```

Mencakup:

- format Rupiah/compact dan angka Indonesia;
- perhitungan paket + diskon 5/10/20%;
- fallback durasi tidak valid;
- pembuatan referensi `ORD-YYYYMMDD-XXXX`;
- validasi form, email, dan WhatsApp;
- pembuatan isi konfirmasi, URL `mailto:`, Gmail compose, dan file `.eml`;
- normalisasi nomor WhatsApp `0895-...` menjadi `62895...` dan pembuatan URL `wa.me`.

## Integration test

Status: **NOT APPLICABLE** — tidak ada backend/API/database. Integrasi diuji melalui E2E browser.

## MariaDB test

Status: **NOT APPLICABLE** — proyek tidak menggunakan database.

## Build

Status: **PASS**

```bash
npm run build
```

13 halaman statis dihasilkan ke `out/`, termasuk `404.html`, `robots.txt`, `sitemap.xml`, `icon.svg`. `postbuild` memetakan 8 file RSC segment untuk workaround Windows.

## Deployment configuration

Status: **PASS**

```bash
npm run build
npm run deploy:check
```

- Wrangler 4.151.3, config `wrangler.jsonc` (assets-only, `out/`).
- `wrangler deploy --dry-run` berhasil membaca 103 file aset.
- Uji runtime lokal dengan `wrangler dev`:
  - `/` → 200 dengan CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`.
  - `/pricing` → 307 ke `/pricing/`.
  - `/pricing/` → 200 `text/html`.
  - `/tidak-ada` → 404 memakai `404.html`.
  - `/_headers` → 404 (tidak disajikan sebagai aset).
- `NEXT_PUBLIC_SITE_URL` diuji: canonical, robots, dan sitemap mengikuti URL build; trailing slash dinormalisasi.
- Tanpa env, canonical kembali ke fallback `https://example.com`.

## E2E

Status: **PASS** - 33 test.

```bash
npx playwright test
```

Cakupan:

- hero dan hierarchy landing page;
- menu mobile, Escape, tanpa overflow;
- FAQ keyboard dan `aria-expanded`;
- chart termuat dan filter 7/30/6 bulan mengubah total;
- CTA paket membawa `?plan=`;
- validasi form dan pesan error;
- perhitungan 12 bulan: Rp 1.188.000 − Rp 237.600 = **Rp 950.400**;
- copy rekening bank dan e-wallet;
- QRIS placeholder tampil;
- dialog email konfirmasi tampil dan dapat digunakan (Gmail compose, `mailto:`, salin isi, unduh `.eml`);
- isi email konfirmasi benar (referensi, paket, durasi, total, metode);
- CTA WhatsApp tersedia di kartu kontak, FAQ, footer, tombol support, dan halaman pembayaran;
- rincian fitur paket dan tabel perbandingan menjadi disclosure di mobile, tetap terbuka di desktop;
- navigasi dari dialog ke halaman sukses berfungsi;
- halaman sukses tidak memakai klaim “Pembayaran Berhasil”;
- empty state pesanan hilang dan plan parameter tidak valid;
- tidak ada console error/page error;
- metadata/canonical/OG per halaman;
- `/login` dan `/register` → 404;
- robots, sitemap, JSON-LD tanpa rating fiktif;
- axe pada landing, fitur, harga, order, legal, payment, dan success.

## Responsive

Status: **PASS** (verifikasi otomatis + pengukuran)

- 320, 375, 390, 768, 1024, 1280, 1440 px.
- `documentElement.scrollWidth === clientWidth` pada semua lebar.
- Kartu harga stacking, chart mengikuti container, form full width, tabel perbandingan memakai scroll container berlabel.
- Rincian fitur paket dan tabel perbandingan menjadi disclosure di bawah 1024px; tinggi halaman `/pricing` di 390px turun dari **7.989px menjadi 6.983px** (±1.006px).
- Visual diperiksa melalui screenshot viewport desktop/mobile.

## Accessibility

Status: **PASS**

- axe-core (WCAG 2.0/2.1 A/AA): **0 pelanggaran serious/critical** pada 8 pemindaian.
- Mockup produk dekoratif (`aria-hidden`) dikecualikan; konten setara tersedia sebagai teks.
- Lighthouse Accessibility: **100** (desktop dan mobile).
- Skip link, fokus terlihat, label form, `aria-describedby` error, `aria-expanded` FAQ, `aria-pressed` filter chart, tabel teks untuk chart, dan `role="status"` pada skeleton.
- Kontras teks utama diperbaiki (`ink-muted`, badge solid, panel gelap).

## Security

Status: **PASS (dengan catatan dev-only)**

- Review kode: tidak ada secret, autentikasi, database, atau input HTML berbahaya.
- `npm audit --omit=dev`: 0 vulnerabilities.
- `npm audit` penuh: 5 high dari `braces` (dev-only, transitive lint), tanpa rilis perbaikan. Bukan bagian bundle produksi.
- `compression` `serve` di-override ke 1.8.2.
- CSP tersedia dengan `unsafe-inline` (keterbatasan static export), didokumentasikan.
- Tidak ada kredensial pembayaran yang diminta/disimpan.

Detail: `docs/SECURITY.md`.

## Lighthouse / SEO

Status: **PASS untuk SEO/BP/A11y; PARTIAL untuk Performance mobile**

Dijalankan terhadap build produksi di `http://127.0.0.1:4173/`.

| Preset                                        | Performance | Accessibility | Best Practices | SEO     | LCP       | TBT        |
| --------------------------------------------- | ----------- | ------------- | -------------- | ------- | --------- | ---------- |
| Desktop                                       | **100**     | **100**       | **100**        | **100** | 0,8 s     | 30 ms      |
| Mobile (run terakhir, setelah refresh visual) | **87**      | 100           | 100            | 100     | 2,7 s     | 310 ms     |
| Mobile (variasi)                              | 87–93       | 100           | 100            | 100     | 2,5–2,8 s | 250–380 ms |

Skor mobile bervariasi karena simulasi CPU/network dan beban mesin. Beberapa run mencapai ≥90 (93), run terakhir 87; hasil ini belum dianggap konsisten. Penyebab utama: TBT hidrasi React dan ukuran DOM mockup. Sudah dioptimalkan dengan lazy chart, font lokal, `content-visibility`, dan pengurangan client component kartu harga.

SEO: metadata unik, canonical, OG/Twitter, sitemap, robots, JSON-LD, `noindex` untuk halaman pembayaran.

## Regression

Status: **PASS**

- Seluruh 35 unit test dan 33 E2E test lulus setelah perubahan terakhir.
- Prefetch RSC 404 (Windows) dieliminasi oleh `scripts/fix-static-export.mjs`.
- Hydration mismatch pada `/order?plan=` diatasi dengan client-only mount.
- Setelah perubahan header, copy, a11y, dan performa, alur checkout diuji ulang end-to-end.

## Failure yang ditemukan dan diperbaiki

1. **RSC segment 404 di Windows** — workaround flatten path.
2. **React Compiler lint errors** — inisialisasi checkout dipindah ke client-only lazy state; mutasi render pada donut dihilangkan; effect menu dihapus.
3. **Hydration mismatch** pada state paket dari query string — komponen checkout di-mount client-only.
4. **Tombol CTA header tetap terlihat di mobile** — `hidden` kalah oleh `inline-flex`; dibungkus elemen `hidden md:block`.
5. **Tombol support menutupi ringkasan checkout** — disembunyikan pada `/order`, `/payment`, `/payment-success`; versi mobile menjadi ikon bulat.
6. **Kontras & definition list** — token warna digelapkan, badge solid, markup `dl` diperbaiki.
7. **Skeleton `aria-label` tanpa role** — ditambahkan `role="status"`; Lighthouse Accessibility naik ke 100.
8. **Duplikasi label langkah & stepper terpotong** — label pendek di mobile, badge header dihapus.
9. **Klik konfirmasi email tidak memberi respons tanpa mail client** — CTA kini membuka dialog email dengan Gmail compose, `mailto:`, salin isi, dan unduh `.eml`; scroll region dibuat focusable agar lolos axe.
10. **Halaman pricing terlalu panjang di Android** — rincian fitur tiap paket dan tabel perbandingan dilipat menjadi disclosure dengan chevron di mobile; desktop tetap terbuka.
11. **Permukaan visual terlalu datar** — kanvas off-white, aurora hero, tekstur titik, gradient pricing, CTA gelap berlapis, serta badge trust faktual ditambahkan tanpa klaim palsu.

## Belum diverifikasi

- Header keamanan pada hosting produksi (belum deploy).
- Lighthouse pada domain/CDN produksi dan perangkat fisik.
- Safari, Firefox, dan browser mobile nyata (E2E hanya Chromium).
- Validitas rekening/QRIS/email karena masih placeholder.
- Efektivitas email konfirmasi pada berbagai klien email.
- Audit dependensi di masa mendatang.

## Kesimpulan

**READY WITH KNOWN RISKS**

Fitur, build statis, SEO, aksesibilitas, dan alur utama lulus. Risiko yang tersisa adalah sebagian data bisnis placeholder dan skor Performance mobile yang bervariasi (87–93; run terakhir 93). Keduanya terdokumentasi dan tidak menghalangi penggunaan sebagai template; wajib diselesaikan sebelum publikasi komersial.
