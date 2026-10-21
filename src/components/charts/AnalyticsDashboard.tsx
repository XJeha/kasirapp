"use client";

import { useState } from "react";
import { CalendarRange, Info } from "lucide-react";
import { PaymentChart } from "@/components/charts/PaymentChart";
import { ProductChart } from "@/components/charts/ProductChart";
import { SalesChart } from "@/components/charts/SalesChart";
import { Badge } from "@/components/ui/Badge";
import { type SalesRangeKey, salesRangeOrder, salesRanges } from "@/data/analytics";
import { formatNumber, formatRupiah } from "@/lib/format";
import { cn } from "@/lib/cn";

export function AnalyticsDashboard() {
  const [range, setRange] = useState<SalesRangeKey>("6m");
  const rangeData = salesRanges[range];
  const total = rangeData.points.reduce((sum, point) => sum + point.value, 0);
  const transactions = Math.max(1, Math.round(total / 126000));
  const average = Math.round(total / transactions);

  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-card sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-ink">Analitik Penjualan</h3>
            <Badge variant="neutral">Contoh Data Dashboard</Badge>
          </div>
          <p className="mt-1 text-sm text-ink-muted">
            Data statis untuk memperlihatkan tampilan laporan dan grafik aplikasi.
          </p>
        </div>

        <div
          role="group"
          aria-label="Pilih rentang data penjualan"
          className="inline-flex w-full shrink-0 rounded-[10px] border border-line bg-surface-muted p-1 sm:w-auto"
        >
          {salesRangeOrder.map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={range === key}
              onClick={() => setRange(key)}
              className={cn(
                "flex-1 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-150 sm:flex-none",
                range === key ? "bg-white text-brand shadow-sm" : "text-ink-soft hover:text-ink",
              )}
            >
              {salesRanges[key].label}
            </button>
          ))}
        </div>
      </div>

      <dl className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-line bg-surface-muted/50 p-4">
          <dt className="text-xs font-medium text-ink-muted">Total Penjualan</dt>
          <dd className="mt-1 text-xl font-bold tracking-tight text-ink">
            {formatRupiah(total)}
            <span className="mt-1 block text-[11px] font-normal text-ink-muted">
              {rangeData.label}
            </span>
          </dd>
        </div>
        <div className="rounded-xl border border-line bg-surface-muted/50 p-4">
          <dt className="text-xs font-medium text-ink-muted">Transaksi</dt>
          <dd className="mt-1 text-xl font-bold tracking-tight text-ink">
            {formatNumber(transactions)}
            <span className="mt-1 block text-[11px] font-normal text-ink-muted">
              Estimasi dari data contoh
            </span>
          </dd>
        </div>
        <div className="rounded-xl border border-line bg-surface-muted/50 p-4">
          <dt className="text-xs font-medium text-ink-muted">Rata-rata Transaksi</dt>
          <dd className="mt-1 text-xl font-bold tracking-tight text-ink">
            {formatRupiah(average)}
            <span className="mt-1 block text-[11px] font-normal text-ink-muted">
              Nilai rata-rata contoh
            </span>
          </dd>
        </div>
      </dl>

      <div className="mt-4 rounded-xl border border-line p-3 sm:p-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h4 className="text-sm font-semibold text-ink">Sales Overview</h4>
            <p className="mt-0.5 text-xs text-ink-muted">{rangeData.description}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-muted px-2.5 py-1 text-[10px] font-medium text-ink-soft">
            <CalendarRange className="size-3" aria-hidden="true" />
            {rangeData.label}
          </span>
        </div>
        <div className="mt-3">
          <SalesChart range={range} />
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-line p-4">
          <h4 className="text-sm font-semibold text-ink">Payment Distribution</h4>
          <p className="mt-0.5 text-xs text-ink-muted">Persentase metode pembayaran</p>
          <div className="mt-4">
            <PaymentChart />
          </div>
        </div>

        <div className="rounded-xl border border-line p-4">
          <h4 className="text-sm font-semibold text-ink">Top Products</h4>
          <p className="mt-0.5 text-xs text-ink-muted">Pendapatan dari produk terlaris</p>
          <div className="mt-3">
            <ProductChart />
          </div>
        </div>
      </div>

      <p className="mt-4 flex items-start gap-1.5 text-[11px] leading-relaxed text-ink-muted">
        <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
        Seluruh angka pada bagian ini adalah data demo statis, bukan data pengunjung atau data
        bisnis nyata. Filter hanya mengubah tampilan contoh di browser Anda.
      </p>
    </div>
  );
}
