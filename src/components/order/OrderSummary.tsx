import type { ReactNode } from "react";
import { ReceiptText } from "lucide-react";
import type { OrderPricing } from "@/lib/pricing";
import { formatRupiah } from "@/lib/format";
import { cn } from "@/lib/cn";

export function OrderSummary({
  pricing,
  reference,
  children,
  className,
}: {
  pricing: OrderPricing;
  reference?: string;
  children?: ReactNode;
  className?: string;
}) {
  const discountPercent = Math.round(pricing.discountRate * 100);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-white shadow-card",
        className,
      )}
    >
      <div className="border-b border-line bg-surface-muted/60 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 text-sm font-bold text-ink">
            <ReceiptText className="size-4 text-brand" aria-hidden="true" />
            Ringkasan Pesanan
          </h2>
          <span className="rounded-full border border-line bg-white px-2 py-0.5 text-[10px] font-semibold text-ink-soft">
            Manual
          </span>
        </div>
        {reference ? (
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-2 py-1 font-mono text-[11px] text-ink-soft">
            <span className="text-ink-muted">No. Referensi:</span>
            {reference}
          </p>
        ) : null}
      </div>

      <div className="px-5 py-4">
        <dl className="space-y-3 text-sm">
          <div className="flex items-start justify-between gap-4">
            <dt className="text-ink-muted">Paket</dt>
            <dd className="text-right font-semibold text-ink">{pricing.plan.name}</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-ink-muted">Durasi</dt>
            <dd className="text-right text-ink">{pricing.duration.label}</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-ink-muted">Harga</dt>
            <dd className="text-right text-ink">
              {formatRupiah(pricing.plan.monthlyPrice)}{" "}
              <span className="text-xs text-ink-muted">/ bulan</span>
            </dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-ink-muted">Subtotal</dt>
            <dd className="text-right text-ink">{formatRupiah(pricing.subtotal)}</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-ink-muted">
              Diskon
              {discountPercent > 0 ? (
                <span className="ml-1 text-xs text-success">({discountPercent}%)</span>
              ) : null}
            </dt>
            <dd
              className={cn(
                "text-right",
                pricing.discount > 0 ? "font-medium text-success" : "text-ink-muted",
              )}
            >
              {pricing.discount > 0 ? `− ${formatRupiah(pricing.discount)}` : "—"}
            </dd>
          </div>
        </dl>

        <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-4">
          <p className="text-sm font-semibold text-ink">TOTAL</p>
          <p className="text-[22px] leading-none font-bold tracking-tight text-ink">
            {formatRupiah(pricing.total)}
          </p>
        </div>

        {children ? <div className="mt-4">{children}</div> : null}

        <p className="mt-3 text-[11px] leading-relaxed text-ink-muted">
          Pembayaran diproses secara manual. Tidak ada tagihan otomatis atau penyimpanan data
          pembayaran.
        </p>
      </div>
    </div>
  );
}
