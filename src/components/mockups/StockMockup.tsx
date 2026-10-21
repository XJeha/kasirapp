import { CircleAlert, Package, Search } from "lucide-react";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";

const stockRows = [
  { name: "Biji Kopi Arabika", sku: "BJI-001", stock: 8, status: "Menipis", tone: "danger" },
  { name: "Susu UHT", sku: "SUS-014", stock: 12, status: "Menipis", tone: "warning" },
  { name: "Croissant", sku: "CRS-003", stock: 6, status: "Menipis", tone: "danger" },
  { name: "Matcha Powder", sku: "MTC-009", stock: 24, status: "Aman", tone: "success" },
];

const toneStyles = {
  danger: "bg-danger-soft text-danger",
  warning: "bg-warning-soft text-warning",
  success: "bg-success-soft text-success",
} as const;

export function StockMockup() {
  return (
    <BrowserFrame label="app.kasira.id/stok" className="shadow-float">
      <div className="p-3" aria-hidden="true">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold text-ink">Manajemen Stok</p>
            <p className="text-[7.5px] text-ink-muted">Pantau persediaan di semua outlet</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-danger/20 bg-danger-soft px-2 py-1 text-[6.5px] font-semibold text-danger">
            <CircleAlert className="size-2.5" />3 peringatan
          </span>
        </div>

        <div className="mt-2 flex items-center gap-1.5 rounded-md border border-line bg-surface-muted px-2 py-1.5">
          <Search className="size-3 text-ink-muted" />
          <span className="text-[7.5px] text-ink-muted">Cari nama produk atau SKU…</span>
        </div>

        <div className="mt-2 overflow-hidden rounded-lg border border-line">
          <div className="grid grid-cols-[minmax(0,1fr)_48px_58px] gap-2 border-b border-line bg-surface-muted px-2 py-1.5 text-[6.5px] font-semibold tracking-wide text-ink-muted uppercase">
            <span>Produk</span>
            <span className="text-right">Stok</span>
            <span className="text-right">Status</span>
          </div>
          {stockRows.map((row) => (
            <div
              key={row.sku}
              className="grid grid-cols-[minmax(0,1fr)_48px_58px] items-center gap-2 border-b border-line/70 px-2 py-2 last:border-b-0"
            >
              <div className="flex min-w-0 items-center gap-1.5">
                <span className="grid size-5 shrink-0 place-items-center rounded bg-brand-soft text-brand">
                  <Package className="size-2.5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[7.5px] font-semibold text-ink">{row.name}</p>
                  <p className="text-[6px] text-ink-muted">{row.sku}</p>
                </div>
              </div>
              <p className="text-right text-[7.5px] font-semibold text-ink">{row.stock}</p>
              <span
                className={`justify-self-end rounded-full px-1.5 py-0.5 text-[6px] font-semibold ${toneStyles[row.tone as keyof typeof toneStyles]}`}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2 rounded-lg border border-brand-line bg-brand-soft/70 p-2">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[7.5px] font-semibold text-brand-strong">Stok menipis otomatis</p>
              <p className="text-[6.5px] text-ink-soft">Batas minimum dapat diatur per produk.</p>
            </div>
            <span className="rounded bg-white px-1.5 py-1 text-[6.5px] font-semibold text-brand">
              Atur batas
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
