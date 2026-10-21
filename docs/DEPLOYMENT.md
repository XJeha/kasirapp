# Deployment

Situs adalah static export. Build menghasilkan folder `out/` yang dapat dilayani host statis apa pun tanpa Node.js.

## Build

```bash
npm ci
npm run build
```

`npm run build` menjalankan `next build` lalu `postbuild` (`scripts/fix-static-export.mjs`). Folder yang dipublikasikan: `out/`.

Pratinjau lokal:

```bash
npm run preview   # http://127.0.0.1:4173
```

`serve` hanya untuk pratinjau lokal dan test, bukan runtime produksi.

## Kebutuhan host

- HTTPS wajib.
- Melayani `index.html` untuk path berakhiran `/` (contoh `/pricing/` → `out/pricing/index.html`).
- 404 diarahkan ke `out/404.html`.
- Mendukung header kustom (CSP, HSTS, dll.) atau konfigurasi ekuivalen.
- Cache aset ber-hash di `/_next/static/*` dan `/fonts/*` selama 1 tahun, HTML dengan revalidasi.

Karena `trailingSlash: true`, tidak diperlukan rewrite `/pricing` → `/pricing.html`. Jika host mengarahkan `/pricing` ke `/pricing/`, biarkan perilaku tersebut aktif.

## Netlify / Cloudflare Pages

Pengaturan:

- Build command: `npm run build`
- Publish directory: `out`
- Node version: >= 20.9 (disarankan 24 LTS)
- `public/_headers` otomatis disalin ke root output.

Netlify dan Cloudflare Pages membaca `_headers` untuk menerapkan CSP dan header lainnya.

## Nginx

```nginx
server {
    listen 443 ssl http2;
    server_name example.com;
    root /var/www/kasira/out;
    index index.html;

    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=()" always;

    location /_next/static/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files $uri =404;
    }

    location /fonts/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files $uri =404;
    }

    location / {
        try_files $uri $uri/ =404;
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
}
```

Catatan: `add_header` di lokasi `_next/static` dapat menggantikan header keamanan level server pada beberapa konfigurasi Nginx. Gunakan `always` dan/atau `include` header bersama bila diperlukan.

CSP perlu `'unsafe-inline'` untuk bootstrap RSC Next.js, JSON-LD, dan atribut `style` inline. Lihat `docs/SECURITY.md`.

## GitHub Pages / S3 / CDN

- Pastikan `out/404.html` dipakai sebagai halaman 404.
- Atur `index.html` sebagai dokumen default untuk direktori.
- Jika memakai base path (mis. `/kasira/`), set `basePath` dan `assetPrefix` di `next.config.ts` sebelum build, lalu sesuaikan `siteConfig.url`.
- Header keamanan harus dikonfigurasi di CDN/host karena file `_headers` tidak dibaca oleh semua penyedia.

## Workaround RSC Windows

Pada Next.js 16 + Windows, segment RSC ditulis ke folder `__next.<segmen>/__PAGE__.txt` tetapi browser meminta `__next.<segmen>.__PAGE__.txt`, menyebabkan 404 prefetch. `scripts/fix-static-export.mjs` menyalin file ke nama datar yang diminta setelah build. Build di Linux/macOS tidak membutuhkan perbaikan ini (script tidak melakukan apa pun jika tidak ada folder bersarang).

Referensi: <https://github.com/vercel/next.js/issues/85374>

## Checklist sebelum publikasi

1. Ganti `siteConfig.url` dengan domain produksi.
2. Ganti nama merek, logo (`src/components/layout/Logo.tsx`, `src/app/icon.svg`), dan OG image.
3. Periksa email support dan nomor WhatsApp (`0895-3363-99300`); ganti bila diperlukan.
4. Ganti harga, fitur paket, dan diskon durasi.
5. Ganti rekening bank, e-wallet, dan QRIS merchant; ganti `public/payment/qris.png`.
6. Perbarui estimasi aktivasi dan jam operasional.
7. Isi identitas legal dan tanggal pembaruan; tinjau dokumen legal.
8. Tambahkan testimoni asli atau biarkan section nonaktif.
9. Jalankan `npm run verify` dan `npm run test:e2e`.
10. Uji Lighthouse pada URL produksi (mobile dan desktop).
11. Verifikasi header keamanan dengan `curl -I` atau securityheaders.com.
12. Uji alur order → payment → email konfirmasi di perangkat nyata.
