# Deploy Awal — Cloudflare Workers

Target deploy: **Cloudflare Workers Static Assets** (assets-only, tanpa Worker script). Situs tetap statis; tidak ada server runtime, database, atau API.

## Pengaturan di dashboard Cloudflare

Saat membuat aplikasi dari repository `XJeha/kasirapp`:

| Setting         | Nilai                    |
| --------------- | ------------------------ |
| Repository      | `XJeha/kasirapp`         |
| Branch produksi | `main`                   |
| Project name    | `kasirapp`               |
| Build command   | `npm run build`          |
| Deploy command  | `npx wrangler deploy`    |
| Root directory  | kosong (root repository) |

Nilai tersebut sudah cocok dengan konfigurasi di repository:

- `wrangler.jsonc` — nama Worker `kasirapp`, aset dari `./out`, trailing slash otomatis, halaman 404 kustom.
- `package.json` — `wrangler@4.151.3` sebagai devDependency; Workers Builds memakai versi Wrangler dari package.json.
- `.node-version` — `24.18.0`; build image Cloudflare menyediakan Node 24.18.0 secara default.
- `public/_headers` — CSP dan header keamanan; Workers Static Assets mendukung `_headers` secara native.

## Konfigurasi

`wrangler.jsonc`:

```jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "kasirapp",
  "compatibility_date": "2026-10-21",
  "assets": {
    "directory": "./out",
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "404-page",
  },
}
```

- **`html_handling: auto-trailing-slash`** cocok dengan `trailingSlash: true` di Next.js: `/pricing/` dilayani dari `out/pricing/index.html`, sedangkan `/pricing` dialihkan ke `/pricing/`.
- **`not_found_handling: 404-page`** memakai `out/404.html` dengan status 404.
- Tidak ada `main` atau binding karena hanya aset statis. Request aset tidak memicu Worker dan tidak dikenai biaya invocation.

## Build variable wajib setelah URL diketahui

Canonical, Open Graph, sitemap, dan robots memakai `NEXT_PUBLIC_SITE_URL`.

Di Cloudflare dashboard:

**Workers & Pages → kasirapp → Settings → Build → Build Variables and Secrets**

```text
NEXT_PUBLIC_SITE_URL = https://kasirapp.<subdomain-akun>.workers.dev
```

atau domain kustom:

```text
NEXT_PUBLIC_SITE_URL = https://domainanda.com
```

Nilai ini adalah URL build-time (bukan rahasia; akan tersedia publik). Jangan memakai trailing slash — jika ada, aplikasi menghapusnya otomatis.

Jika belum diisi, situs tetap terdeploy, tetapi canonical/OG/sitemap memakai fallback `https://example.com`. Setelah deploy pertama dan URL `workers.dev` diketahui, isi variable lalu redeploy agar SEO benar.

Untuk pengembangan lokal, salin `.env.example` menjadi `.env.local` dan isi nilainya.

## Langkah deploy pertama

1. Pastikan perubahan sudah di-push ke branch `main` di `XJeha/kasirapp`.
2. Di dashboard Cloudflare, klik **Deploy** pada halaman setup.
3. Tunggu build: `npm ci` → `npm run build` → `npx wrangler deploy`.
4. Buka URL `https://kasirapp.<subdomain>.workers.dev`.
5. Tambahkan build variable `NEXT_PUBLIC_SITE_URL` dengan URL tersebut (atau domain kustom), lalu **Retry deployment**/push commit baru.
6. Opsional: pasang custom domain di **Settings → Domains & Routes → Add custom domain**.

## Verifikasi setelah deploy

- [ ] `/` tampil dan hero termuat.
- [ ] `/pricing/` dapat diakses langsung (bukan 404).
- [ ] `/pricing` dialihkan ke `/pricing/`.
- [ ] `/order/?plan=pro` menampilkan form.
- [ ] `/payment/` tanpa sesi menampilkan empty state yang aman.
- [ ] `/payment-success/` tidak menyatakan pembayaran terverifikasi.
- [ ] Halaman tidak dikenal menampilkan `404.html` dengan status 404.
- [ ] CTA WhatsApp membuka `wa.me/62895336399300`.
- [ ] Dialog konfirmasi email membuka Gmail/`mailto:` dan `.eml` dapat diunduh.
- [ ] Header keamanan aktif (lihat perintah di bawah).
- [ ] Canonical sudah memakai domain produksi.

Cek header:

```bash
curl -I https://kasirapp.<subdomain>.workers.dev/
curl -I https://kasirapp.<subdomain>.workers.dev/pricing/
curl -I https://kasirapp.<subdomain>.workers.dev/_next/static/<file>.js
```

Cek 404 dan redirect:

```bash
curl -I https://kasirapp.<subdomain>.workers.dev/tidak-ada
curl -I https://kasirapp.<subdomain>.workers.dev/pricing
```

## Preview dan validasi lokal

```bash
npm run build
npm run deploy:check   # wrangler deploy --dry-run, tanpa upload
npm run preview        # static server lokal di :4173
```

`npm run deploy:check` membaca direktori `out/` dan memvalidasi konfigurasi Wrangler. Perintah ini tidak memerlukan login Cloudflare.

`wrangler dev` juga dapat dipakai untuk menguji routing Workers secara lokal:

```bash
npm run build
npx wrangler dev
```

## Preview builds

Workers Builds dapat membuat preview untuk branch non-produksi. Preview command default adalah `npx wrangler preview`. Preview URL dibuat terpisah dari produksi. Aktifkan hanya jika diperlukan; konfigurasi produksi tidak terpengaruh.

## Rollback

Gunakan **Workers & Pages → kasirapp → Deployments** untuk memilih versi sebelumnya, atau:

```bash
npx wrangler deployments list
npx wrangler rollback
```

## Troubleshooting

| Gejala                       | Penyebab umum                        | Solusi                                                               |
| ---------------------------- | ------------------------------------ | -------------------------------------------------------------------- |
| Build gagal di dependency    | Node terlalu lama                    | Pastikan `.node-version` = `24.18.0` atau set `NODE_VERSION=24.18.0` |
| `Could not find wrangler`    | Wrangler tidak terpasang             | Jalankan `npm install`; versi sudah dipin di package.json            |
| Deploy membuat Worker lain   | Nama di dashboard ≠ `wrangler.jsonc` | Samakan project name `kasirapp` atau ubah `name`                     |
| Route 404                    | `out` tidak ada / salah direktori    | Pastikan build sukses dan `assets.directory` = `./out`               |
| `/pricing` tidak redirect    | `html_handling` salah                | Gunakan `auto-trailing-slash`                                        |
| Header keamanan tidak muncul | `_headers` tidak ikut terupload      | Pastikan ada di `out/_headers` setelah build                         |
| Canonical masih example.com  | Build variable belum diisi           | Set `NEXT_PUBLIC_SITE_URL` lalu redeploy                             |
| Aset lama masih tampil       | Cache browser/CDN                    | Hard refresh; aset Next memakai hash baru                            |

## Catatan

- Folder `out/` tidak di-commit; dibuat ulang oleh build Cloudflare.
- `scripts/fix-static-export.mjs` tetap berjalan; pada Linux tidak menemukan segment bersarang dan tidak mengubah apa pun.
- `serve` hanya untuk preview lokal, bukan bagian runtime produksi.
- Static asset requests pada Workers gratis; tidak ada Worker script yang dijalankan.
