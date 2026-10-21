"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Clock, ShieldCheck, TriangleAlert } from "lucide-react";
import { WhatsAppCta } from "@/components/contact/WhatsAppCta";
import { CheckoutSteps } from "@/components/order/CheckoutSteps";
import { MissingOrderState } from "@/components/order/MissingOrderState";
import { OrderSummary } from "@/components/order/OrderSummary";
import { CopyButton } from "@/components/payment/CopyButton";
import { EmailConfirmationAction } from "@/components/payment/EmailConfirmationAction";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/site";
import { buildEmailConfirmation } from "@/lib/email";
import { loadOrder, type StoredOrder } from "@/lib/order";
import { calculateOrderPricing } from "@/lib/pricing";

export function PaymentSuccessClient() {
  // Hanya di-mount di browser (dynamic import, ssr: false).
  const [order] = useState<StoredOrder | null>(() => loadOrder());
  const pricing = order ? calculateOrderPricing(order.planId, order.durationMonths) : null;

  if (!order || !pricing) {
    return (
      <MissingOrderState description="Data pesanan tidak ditemukan pada sesi browser ini. Jika Anda sudah melakukan pembayaran, hubungi support dengan menyertakan bukti pembayaran dan nomor referensi pesanan." />
    );
  }

  const paymentLabel = order.payment?.label ?? "Belum dipilih";
  const confirmation = buildEmailConfirmation(order, pricing, paymentLabel);
  const subject = confirmation.subject;

  return (
    <div>
      <div className="mb-6 rounded-xl border border-line bg-white px-4 py-3 sm:px-5">
        <CheckoutSteps current={3} />
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
            <Badge variant="warning" className="py-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              Menunggu Konfirmasi
            </Badge>
            <h2 className="mt-3 text-xl font-bold tracking-tight text-ink">
              Pembayaran akan diverifikasi secara manual
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Halaman ini tidak menandakan pembayaran telah berhasil diverifikasi. Tim akan
              memeriksa bukti pembayaran yang Anda kirim melalui email sebelum mengaktifkan layanan.
            </p>
            <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-ink-muted">
              <TriangleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              Estimasi aktivasi {siteConfig.operations.activationEstimate} setelah pembayaran
              terverifikasi, pada jam operasional {siteConfig.operations.supportHours}.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
            <h2 className="text-base font-bold text-ink">Langkah selanjutnya</h2>
            <ol className="mt-4 space-y-4">
              <li className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-soft text-[11px] font-bold text-brand">
                  1
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Kirim email konfirmasi</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    Tekan tombol konfirmasi untuk membuka aplikasi email dengan rincian pesanan yang
                    sudah terisi. Lampirkan bukti pembayaran sebelum mengirim.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-soft text-[11px] font-bold text-brand">
                  2
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Tunggu verifikasi manual</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    Tim memeriksa pembayaran dan mencocokkannya dengan nomor referensi pesanan.
                    Tidak ada verifikasi otomatis pada situs ini.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-soft text-[11px] font-bold text-brand">
                  3
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Layanan diaktifkan</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    Setelah pembayaran terverifikasi, tim akan menghubungi Anda melalui email atau
                    WhatsApp yang terdaftar untuk proses aktivasi.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-line bg-surface-muted p-5">
            <h2 className="text-base font-bold text-ink">Rincian email konfirmasi</h2>
            <dl className="mt-3 space-y-2 text-xs">
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-ink-muted">Email tujuan</dt>
                <dd className="font-mono break-all text-ink">{siteConfig.contact.email}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-ink-muted">Subjek</dt>
                <dd className="break-all text-ink">{subject}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-ink-muted">Metode pembayaran</dt>
                <dd className="text-ink">{paymentLabel}</dd>
              </div>
            </dl>
            <div className="mt-3">
              <CopyButton
                value={siteConfig.contact.email}
                label="Salin Email Support"
                successMessage="Email support disalin"
              />
            </div>
            <p className="mt-3 flex items-start gap-2 text-[11px] leading-relaxed text-ink-muted">
              <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden="true" />
              Jangan pernah mengirim PIN, password, OTP, CVV, atau data rahasia rekening melalui
              email.
            </p>
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <OrderSummary pricing={pricing} reference={order.reference}>
            <dl className="mb-3 flex items-center justify-between gap-3 text-xs">
              <dt className="text-ink-muted">Metode</dt>
              <dd className="text-right font-medium text-ink">{paymentLabel}</dd>
            </dl>
            <EmailConfirmationAction
              confirmation={confirmation}
              reference={order.reference}
              method={order.payment?.method ?? null}
              showNextStep={false}
              className="w-full"
            />
            <p className="mt-2 text-[11px] leading-relaxed text-ink-soft">
              Pilih Gmail, aplikasi email, salin isi, atau unduh file .eml. Lampirkan bukti
              pembayaran sebelum mengirim.
            </p>
            <Link
              href="/pricing/"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-colors hover:text-brand-strong"
            >
              Kembali ke halaman paket
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </OrderSummary>

          <div className="rounded-xl border border-line bg-surface-muted p-4 text-[11px] leading-relaxed text-ink-soft">
            <p>
              Simpan nomor referensi <span className="font-mono text-ink">{order.reference}</span>{" "}
              sampai layanan aktif. Nomor ini membantu tim menemukan pesanan Anda.
            </p>
            <WhatsAppCta
              label="Chat WhatsApp"
              size="sm"
              className="mt-3 w-full"
              message={`Halo, saya ingin menanyakan status pesanan ${order.reference}.`}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
