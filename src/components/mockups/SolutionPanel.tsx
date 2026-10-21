import { Boxes, ChartColumn, CircleCheck, Package, ReceiptText, Users, Wallet } from "lucide-react";

const rows = [
  { label: "Transaksi tercatat", value: "128 transaksi", icon: ReceiptText },
  { label: "Stok diperbarui", value: "12 produk", icon: Boxes },
  { label: "Pelanggan baru", value: "9 pelanggan", icon: Users },
  { label: "Pengeluaran dicatat", value: "4 entri", icon: Wallet },
  { label: "Produk aktif", value: "86 produk", icon: Package },
  { label: "Laporan tersedia", value: "6 laporan", icon: ChartColumn },
];

export function SolutionPanel() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -inset-4 rounded-[28px] bg-brand/5" />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
          <div>
            <p className="text-sm font-bold text-ink">Ringkasan Operasional</p>
            <p className="mt-0.5 text-xs text-ink-muted">Rabu, 21 Oktober 2026 · Outlet Utama</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-success/15 bg-success-soft px-2.5 py-1 text-[10px] font-semibold text-success">
            <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
            Tersinkron
          </span>
        </div>

        <div className="space-y-4 p-5" aria-hidden="true">
          <div className="rounded-xl border border-line bg-surface-muted/70 p-4">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-ink-muted">Omzet hari ini</p>
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-success">
                +12,4%
              </span>
            </div>
            <p className="mt-1 text-2xl font-bold tracking-tight text-ink">Rp 4.820.000</p>
            <div className="mt-3 flex items-end gap-1" aria-hidden="true">
              {[42, 58, 46, 72, 64, 86, 76, 94, 82, 100, 88, 96].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-sm bg-brand/20"
                  style={{ height: `${Math.round(height * 0.4)}px` }}
                />
              ))}
            </div>
          </div>

          <ul className="space-y-2.5">
            {rows.map((row) => {
              const Icon = row.icon;
              return (
                <li key={row.label} className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-white text-brand">
                    <Icon className="size-4" strokeWidth={1.9} />
                  </span>
                  <p className="min-w-0 flex-1 truncate text-xs font-medium text-ink">
                    {row.label}
                  </p>
                  <p className="shrink-0 text-[11px] text-ink-muted">{row.value}</p>
                  <CircleCheck className="size-4 shrink-0 text-success" aria-hidden="true" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
