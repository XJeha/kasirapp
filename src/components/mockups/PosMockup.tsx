import {
  ArrowRight,
  CakeSlice,
  Coffee,
  Croissant,
  CupSoda,
  Minus,
  Plus,
  Search,
} from "lucide-react";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";

const products = [
  { name: "Kopi Susu", price: "Rp 28.000", icon: Coffee, className: "bg-brand-soft text-brand" },
  {
    name: "Croissant",
    price: "Rp 22.000",
    icon: Croissant,
    className: "bg-warning-soft text-warning",
  },
  {
    name: "Matcha Latte",
    price: "Rp 32.000",
    icon: CupSoda,
    className: "bg-accent-soft text-accent-strong",
  },
  {
    name: "Chocolate Cake",
    price: "Rp 35.000",
    icon: CakeSlice,
    className: "bg-surface-sunken text-ink-soft",
  },
];

const cartItems = [
  { name: "Kopi Susu", quantity: 2, price: "Rp 56.000" },
  { name: "Croissant", quantity: 1, price: "Rp 22.000" },
];

export function PosMockup() {
  return (
    <BrowserFrame label="app.kasira.id/transaksi" className="shadow-float">
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_190px]" aria-hidden="true">
        <div className="min-w-0 p-3">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-bold text-ink">Transaksi Baru</p>
              <p className="text-[7.5px] text-ink-muted">Kasir · Kopi Senja</p>
            </div>
            <span className="rounded-md border border-line px-1.5 py-1 text-[7px] font-medium text-ink-soft">
              Meja 04
            </span>
          </div>

          <div className="mt-2 flex items-center gap-1.5 rounded-md border border-line bg-surface-muted px-2 py-1.5">
            <Search className="size-3 text-ink-muted" />
            <span className="text-[7.5px] text-ink-muted">Cari produk atau scan barcode…</span>
          </div>

          <div className="mt-2 flex gap-1">
            {["Semua", "Kopi", "Makanan", "Non-Kopi"].map((category, index) => (
              <span
                key={category}
                className={
                  index === 0
                    ? "rounded-full bg-brand px-2 py-1 text-[7px] font-semibold text-white"
                    : "rounded-full border border-line px-2 py-1 text-[7px] font-medium text-ink-soft"
                }
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-2">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.name} className="rounded-lg border border-line bg-white p-2">
                  <div className={`grid h-12 place-items-center rounded-md ${product.className}`}>
                    <Icon className="size-5" strokeWidth={1.7} />
                  </div>
                  <p className="mt-1.5 truncate text-[8px] font-semibold text-ink">
                    {product.name}
                  </p>
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-[7.5px] text-ink-muted">{product.price}</p>
                    <span className="grid size-4 place-items-center rounded bg-brand-soft text-brand">
                      <Plus className="size-2.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="border-t border-line bg-surface-muted/70 p-3 sm:border-t-0 sm:border-l">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold text-ink">Pesanan</p>
            <span className="rounded border border-line bg-white px-1.5 py-0.5 text-[6.5px] font-medium text-ink-soft">
              #INV-1042
            </span>
          </div>

          <ul className="mt-2 space-y-1.5">
            {cartItems.map((item) => (
              <li key={item.name} className="rounded-md border border-line bg-white p-1.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-[7.5px] font-semibold text-ink">{item.name}</p>
                  <p className="shrink-0 text-[7.5px] font-semibold text-ink">{item.price}</p>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="grid size-3.5 place-items-center rounded border border-line text-ink-soft">
                      <Minus className="size-2" />
                    </span>
                    <span className="text-[7px] font-semibold text-ink">{item.quantity}</span>
                    <span className="grid size-3.5 place-items-center rounded border border-line text-ink-soft">
                      <Plus className="size-2" />
                    </span>
                  </div>
                  <span className="text-[6px] text-ink-muted">Rp 28.000 / item</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-2 space-y-1 border-t border-line pt-2 text-[7px]">
            <div className="flex justify-between text-ink-soft">
              <span>Subtotal</span>
              <span>Rp 78.000</span>
            </div>
            <div className="flex justify-between text-ink-soft">
              <span>Diskon</span>
              <span>—</span>
            </div>
            <div className="flex justify-between text-[8.5px] font-bold text-ink">
              <span>Total</span>
              <span>Rp 78.000</span>
            </div>
          </div>

          <p className="mt-2 text-[6.5px] font-medium text-ink-muted">Metode pembayaran</p>
          <div className="mt-1 flex gap-1">
            <span className="flex-1 rounded border border-brand bg-brand-soft px-1 py-1 text-center text-[6.5px] font-semibold text-brand">
              Tunai
            </span>
            <span className="flex-1 rounded border border-line bg-white px-1 py-1 text-center text-[6.5px] font-medium text-ink-soft">
              QRIS
            </span>
          </div>

          <div className="mt-2 flex items-center justify-center gap-1 rounded-md bg-brand px-2 py-2 text-[7.5px] font-semibold text-white">
            Bayar Rp 78.000
            <ArrowRight className="size-2.5" />
          </div>
        </aside>
      </div>
    </BrowserFrame>
  );
}
