"use client";

import Image from "next/image";
import { useState } from "react";
import { QrCode, TriangleAlert } from "lucide-react";
import type { QrisConfig } from "@/data/payments";
import { formatRupiah } from "@/lib/format";

const instructions = [
  "Buka aplikasi bank atau e-wallet Anda.",
  "Pilih menu Scan QRIS.",
  "Scan kode QR pada halaman ini.",
  "Masukkan nominal sesuai total pesanan.",
  "Selesaikan pembayaran.",
  "Simpan bukti pembayaran untuk dikirim melalui email.",
];

export function QRISPayment({ qris, total }: { qris: QrisConfig; total: number }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="rounded-xl border border-line bg-surface-muted/50 p-4 sm:p-5">
      <div className="flex items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-lg border border-line bg-white text-brand">
          <QrCode className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">QRIS</p>
          <p className="text-xs text-ink-muted">Scan menggunakan aplikasi bank atau e-wallet</p>
        </div>
      </div>

      {qris.isPlaceholder ? (
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-warning/20 bg-warning-soft px-3 py-2.5 text-[11px] leading-relaxed text-warning">
          <TriangleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          Gambar QRIS ini adalah placeholder dan bukan kode pembayaran aktif. Ganti dengan QRIS
          merchant resmi sebelum situs digunakan.
        </div>
      ) : null}

      <div className="mt-4 flex flex-col items-center rounded-lg border border-line bg-white p-4">
        {imageFailed ? (
          <div className="flex min-h-[220px] w-full max-w-[240px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line-strong bg-surface-muted p-6 text-center">
            <QrCode className="size-8 text-ink-muted" aria-hidden="true" />
            <p className="text-xs font-medium text-ink-soft">Gambar QRIS belum tersedia</p>
            <p className="text-[11px] text-ink-muted">
              Gunakan transfer bank atau e-wallet, atau hubungi support.
            </p>
          </div>
        ) : (
          <Image
            src={qris.image}
            alt="Gambar QRIS merchant contoh — bukan kode pembayaran aktif"
            width={640}
            height={760}
            className="h-auto w-full max-w-[240px] rounded-lg"
            onError={() => setImageFailed(true)}
          />
        )}

        <p className="mt-3 text-center text-xs text-ink-muted">
          Merchant: <span className="font-medium text-ink-soft">{qris.merchantName}</span>
        </p>
        <p className="mt-1 text-center text-xl font-bold tracking-tight text-brand">
          {formatRupiah(total)}
        </p>
      </div>

      <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-xs leading-relaxed text-ink-soft">
        {instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}
