"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Info, Mail, TriangleAlert } from "lucide-react";
import { WhatsAppCta } from "@/components/contact/WhatsAppCta";
import { CheckoutSteps } from "@/components/order/CheckoutSteps";
import { MissingOrderState } from "@/components/order/MissingOrderState";
import { OrderSummary } from "@/components/order/OrderSummary";
import { CopyButton } from "@/components/payment/CopyButton";
import { BankPayment } from "@/components/payment/BankPayment";
import { EmailConfirmationAction } from "@/components/payment/EmailConfirmationAction";
import { EwalletPayment } from "@/components/payment/EwalletPayment";
import { PaymentSecurity } from "@/components/payment/PaymentSecurity";
import { PaymentSelector } from "@/components/payment/PaymentSelector";
import { QRISPayment } from "@/components/payment/QRISPayment";
import { hasPlaceholderPaymentConfig, paymentConfig, type PaymentMethodId } from "@/data/payments";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { buildEmailConfirmation } from "@/lib/email";
import { loadOrder, updateOrderPayment, type StoredOrder } from "@/lib/order";
import { calculateOrderPricing } from "@/lib/pricing";

export function PaymentClient() {
  // Hanya di-mount di browser (dynamic import, ssr: false).
  const [order] = useState<StoredOrder | null>(() => loadOrder());
  const [method, setMethod] = useState<PaymentMethodId>(() => order?.payment?.method ?? "bank");
  const [walletId, setWalletId] = useState(paymentConfig.ewallets[0]?.id ?? "");

  const pricing = order ? calculateOrderPricing(order.planId, order.durationMonths) : null;

  const bank = paymentConfig.banks[0];
  const wallet =
    paymentConfig.ewallets.find((item) => item.id === walletId) ?? paymentConfig.ewallets[0];

  const paymentLabel =
    method === "bank"
      ? `Transfer Bank (${bank?.bankName ?? "belum dikonfigurasi"})`
      : method === "ewallet"
        ? `E-Wallet (${wallet?.provider ?? "belum dikonfigurasi"})`
        : "QRIS";

  useEffect(() => {
    if (!order) return;
    updateOrderPayment({ method, label: paymentLabel });
  }, [order, method, paymentLabel]);

  useEffect(() => {
    if (!order || method !== "qris") return;
    trackEvent("qris_view", { reference: order.reference });
  }, [order, method]);

  const handleMethodChange = (nextMethod: PaymentMethodId) => {
    setMethod(nextMethod);
    trackEvent("payment_method_select", { method: nextMethod });
  };

  if (!order || !pricing) {
    return <MissingOrderState />;
  }

  const confirmation = buildEmailConfirmation(order, pricing, paymentLabel);

  return (
    <div>
      <div className="mb-6 rounded-xl border border-line bg-white px-4 py-3 sm:px-5">
        <CheckoutSteps current={2} />
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
            <PaymentSelector value={method} onChange={handleMethodChange} />
          </div>

          <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
            <h2 className="text-sm font-semibold text-ink">
              {method === "bank"
                ? "Instruksi Transfer Bank"
                : method === "ewallet"
                  ? "Instruksi Pembayaran E-Wallet"
                  : "Instruksi Pembayaran QRIS"}
            </h2>

            {hasPlaceholderPaymentConfig ? (
              <div
                role="note"
                className="mt-3 flex items-start gap-2 rounded-lg border border-warning/20 bg-warning-soft px-3 py-2.5 text-[11px] leading-relaxed text-warning"
              >
                <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                Konfigurasi pembayaran pada situs ini masih berupa placeholder. Ganti data rekening,
                e-wallet, dan QRIS di file konfigurasi sebelum situs dipublikasikan.
              </div>
            ) : null}

            <div className="mt-4">
              {method === "bank" ? (
                bank ? (
                  <BankPayment
                    bank={bank}
                    total={pricing.total}
                    onCopied={(success) => {
                      if (success) {
                        trackEvent("copy_bank_account", { bank: bank.bankName });
                      }
                    }}
                  />
                ) : (
                  <div className="rounded-xl border border-line bg-surface-muted p-5 text-sm text-ink-soft">
                    Belum ada rekening bank yang dikonfigurasi. Gunakan metode lain atau hubungi
                    support.
                  </div>
                )
              ) : null}

              {method === "ewallet" ? (
                <EwalletPayment
                  wallets={paymentConfig.ewallets}
                  selectedId={walletId}
                  onSelect={setWalletId}
                  total={pricing.total}
                  onCopied={(success) => {
                    if (success) {
                      trackEvent("copy_ewallet_account", {
                        provider: wallet?.provider ?? "unknown",
                      });
                    }
                  }}
                />
              ) : null}

              {method === "qris" ? (
                <QRISPayment qris={paymentConfig.qris} total={pricing.total} />
              ) : null}
            </div>

            <div className="mt-4">
              <PaymentSecurity />
            </div>

            <p className="mt-3 flex items-start gap-1.5 text-[11px] leading-relaxed text-ink-muted">
              <TriangleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              Pembayaran tidak diverifikasi otomatis. Setelah membayar, kirim email konfirmasi
              beserta bukti pembayaran agar pesanan dapat diproses.
            </p>
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <OrderSummary pricing={pricing} reference={order.reference}>
            <EmailConfirmationAction
              confirmation={confirmation}
              reference={order.reference}
              method={method}
              className="w-full"
            />
            <p className="mt-2 rounded-lg bg-surface-muted px-3 py-2 text-[11px] leading-relaxed text-ink-soft">
              Pilih Gmail, aplikasi email, salin isi, atau unduh file .eml. Lampirkan bukti
              pembayaran sebelum mengirim.
            </p>

            <div className="mt-4 border-t border-line pt-3">
              <p className="text-[11px] leading-relaxed text-ink-muted">
                Aplikasi email tidak terbuka? Salin alamat support berikut dan kirim konfirmasi
                secara manual.
              </p>
              <p className="mt-1 font-mono text-xs break-all text-ink">
                {siteConfig.contact.email}
              </p>
              <div className="mt-2">
                <CopyButton
                  value={siteConfig.contact.email}
                  label="Salin Email Support"
                  successMessage="Email support disalin"
                />
              </div>
            </div>

            <Link
              href="/payment-success/"
              onClick={() => updateOrderPayment({ method, label: paymentLabel })}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-colors hover:text-brand-strong"
            >
              Lihat langkah selanjutnya
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </OrderSummary>

          <div className="rounded-xl border border-line bg-surface-muted p-4">
            <p className="text-xs font-semibold text-ink">Butuh bantuan?</p>
            <p className="mt-1 text-[11px] leading-relaxed text-ink-soft">
              Hubungi support pada {siteConfig.operations.supportHours} dengan menyertakan nomor
              referensi pesanan.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Konfirmasi%20Pembayaran%20-%20${encodeURIComponent(order.reference)}`}
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-strong"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              Email support
            </a>
            <div className="mt-3">
              <WhatsAppCta
                label="Chat WhatsApp"
                size="sm"
                message={`Halo, saya ingin bertanya tentang pesanan ${order.reference} (${paymentLabel}).`}
              />
            </div>
            <p className="mt-1.5 text-[11px] text-ink-muted">
              {siteConfig.contact.whatsappDisplay}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
