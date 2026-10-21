# Security Review

## Scope

Situs statis Next.js (`output: "export"`) untuk marketing dan pemesanan manual paket aplikasi kasir. Tidak ada server aplikasi, database, autentikasi, atau payment gateway.

## Assets

- Kode sumber dan konfigurasi situs.
- Data pesanan sementara di `sessionStorage` pengguna (nama, bisnis, WhatsApp, email, jenis usaha, paket, durasi).
- Informasi merchant publik: rekening bank, nomor e-wallet, QRIS.
- Alamat email support.
- Aset statis (font, ikon, gambar OG/QRIS).

## Attack surface

- Form pemesanan (input pengguna, client-side).
- `mailto:` dengan isi pesanan yang di-encode.
- Clipboard API untuk menyalin nomor rekening/e-wallet/email.
- `sessionStorage` (per tab, same-origin).
- Static host dan header respons.
- Dependency build/dev.

## Authentication

Status: **NOT APPLICABLE**. Tidak ada akun, login, atau sesi pengguna. Tidak ada endpoint terproteksi.

## Authorization

Status: **NOT APPLICABLE**. Tidak ada data lintas pengguna di server. Data pesanan hanya berada di browser pengguna sendiri.

## Input validation

Status: **IMPLEMENTED (client-side)**.

- Nama 2–80 karakter, nama bisnis 2–100 karakter.
- WhatsApp dinormalisasi dan dicocokkan dengan format Indonesia (`+62`/`62`/`0` + `8…`).
- Email divalidasi dengan pola dan batas panjang.
- Jenis usaha, paket, dan durasi dibatasi pada opsi yang dikenal.
- Data yang dibaca dari `sessionStorage` divalidasi ulang (termasuk format referensi, paket, durasi, dan field pelanggan).
- Tidak ada rendering HTML dari input pengguna; React meng-escape teks.

Catatan: karena tidak ada backend, validasi ini bukan kontrol keamanan server. Tidak ada data yang dikirim ke server.

## Database security

Status: **NOT APPLICABLE**. Tidak ada database.

## XSS / CSRF / SSRF

- **XSS:** Tidak ada `dangerouslySetInnerHTML` kecuali JSON-LD, yang memakai `JSON.stringify` dan meng-escape `<` menjadi `\u003c`. Input pengguna dirender sebagai teks.
- **CSRF:** Tidak ada operasi state-changing di server.
- **SSRF:** Tidak ada request server-side.
- **Open redirect:** Tidak ada redirect berdasarkan input pengguna; navigasi hanya ke route internal.
- **mailto injection:** Subjek/body di-encode dengan `encodeURIComponent`; newline hanya dari template internal.
- **Clipboard:** Fallback `execCommand` membersihkan elemen textarea sementara.

## File upload

Status: **NOT APPLICABLE**. Tidak ada upload. Bukti pembayaran dikirim melalui aplikasi email pengguna.

## Rate limiting

Status: **NOT APPLICABLE**. Tidak ada endpoint. Form hanya berjalan di browser.

## Secrets

Status: **PASS**.

- Tidak ada API key, token, password, atau `.env` yang dikirim ke klien.
- Data rekening/e-wallet adalah informasi merchant publik, bukan kredensial.
- Tidak ada kredensial pembayaran yang diminta atau disimpan.
- Semua konfigurasi bisnis berada di source dan memang publik.

## Dependency security

- `npm audit --omit=dev`: **0 vulnerabilities**.
- `npm audit` penuh: **5 high** dari `braces` (transitive `eslint-config-next` → `fast-glob` → `micromatch` → `braces`). Tidak ada versi `braces` yang lebih baru (3.0.3 adalah rilis terakhir saat review); advisory hanya berdampak pada tooling lint dev, bukan bundle produksi. **Accepted risk (dev-only)**.
- `compression` pada `serve` dinaikkan ke 1.8.2 melalui `overrides`.

## Headers (production)

`public/_headers` menyediakan:

- `Content-Security-Policy` (default-src self; object-src none; frame-ancestors none; form-action self; upgrade-insecure-requests)
- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (camera/mic/geolocation/payment/usb dimatikan)
- Cache imutabel untuk aset ber-hash `/_next/static/*` dan `/fonts/*`

### Batasan CSP

`script-src` dan `style-src` memakai `'unsafe-inline'` karena:

1. Next.js static export menyisipkan bootstrap RSC inline pada HTML.
2. JSON-LD ditulis sebagai script inline.
3. Beberapa komponen memakai atribut `style` untuk lebar bar chart dan tinggi grafik.

CSP tetap membatasi asal script/gaya ke origin sendiri, memblokir object/iframe, dan mengunci form-action/base-uri. Pengetatan dengan hash/nonce memerlukan pipeline build khusus atau server; di luar scope static export ini.

## Temuan

### Critical

Tidak ada.

### High

Tidak ada pada runtime produksi. Satu advisory dev-only (`braces`) diterima dengan alasan di atas.

### Medium

- **Placeholder data**: rekening, QRIS, email, domain, dan identitas legal masih contoh. Jika dipublikasikan tanpa diganti, pengguna dapat diarahkan ke informasi palsu. Mitigasi: dokumentasi, label “data contoh” pada UI pembayaran, checklist deployment.
- **Persepsi pembayaran**: halaman sukses tidak boleh menyiratkan verifikasi. Sudah dimitigasi dengan copy “Menunggu Konfirmasi” dan penjelasan verifikasi manual.

### Low

- `mailto:` / Gmail compose tidak dapat memverifikasi bahwa email benar-benar terkirim; pengguna bisa menutup aplikasi email. Ini keterbatasan alur tanpa backend dan dijelaskan di UI.
- File `.eml` diunduh sepenuhnya di perangkat pengguna dan berisi data pesanan yang mereka masukkan sendiri. Tidak ada unggahan ke server.
- Data pesanan hilang saat tab ditutup (by design).
- CSP inline (lihat batasan).

## Risiko yang belum diverifikasi

- Header keamanan aktual pada hosting produksi (belum deploy).
- Perilaku CSP pada browser selain Chromium.
- Validitas QRIS/rekening merchant asli (masih placeholder).
- Audit dependensi pada masa mendatang (perlu `npm audit` berkala).

## Kesimpulan

**READY WITH KNOWN RISKS** untuk tahap template. Tidak ada kerentanan kritis/tinggi pada runtime produksi berdasarkan review kode dan audit dependensi. Sebelum publikasi, ganti seluruh placeholder dan terapkan header pada host produksi.
