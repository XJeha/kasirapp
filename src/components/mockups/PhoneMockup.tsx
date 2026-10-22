import type { ReactNode } from "react";
import {
  Bell,
  BatteryFull,
  CakeSlice,
  Coffee,
  Croissant,
  CupSoda,
  Package,
  Search,
  Signal,
  Wifi,
} from "lucide-react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/* Frame                                                                      */
/* -------------------------------------------------------------------------- */

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative aspect-[9/19] w-full overflow-hidden rounded-[2.6rem] border-[9px] border-[#17191f] bg-[#17191f] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.65),0_8px_20px_-12px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      <div className="phone-screen relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
        {children}
        <div className="pointer-events-none absolute top-2 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-[#17191f]" />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[7.5px] font-semibold text-ink">
      <span>09.41</span>
      <span className="flex items-center gap-1">
        <Signal className="size-2.5" strokeWidth={2.4} />
        <Wifi className="size-2.5" strokeWidth={2.4} />
        <BatteryFull className="size-3" strokeWidth={2.2} />
      </span>
    </div>
  );
}

function AppBar({ title, caption }: { title: string; caption: string }) {
  return (
    <div className="flex items-center justify-between gap-2 px-3 py-2">
      <div className="flex items-center gap-1.5">
        <span className="grid size-5 place-items-center rounded-md bg-brand text-[8px] font-bold text-white">
          K
        </span>
        <div className="leading-none">
          <p className="text-[8px] font-bold text-ink">{title}</p>
          <p className="mt-0.5 text-[6px] text-ink-muted">{caption}</p>
        </div>
      </div>
      <span className="relative grid size-5 place-items-center rounded-full border border-line bg-white">
        <Bell className="size-2.5 text-ink-soft" strokeWidth={2} />
        <span className="absolute top-1 right-1 size-1 rounded-full bg-brand" />
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* POS                                                                        */
/* -------------------------------------------------------------------------- */

const products = [
  { name: "Kopi Susu", price: "28.000", icon: Coffee, tone: "bg-brand-soft text-brand" },
  { name: "Croissant", price: "22.000", icon: Croissant, tone: "bg-warning-soft text-warning" },
  { name: "Matcha", price: "32.000", icon: CupSoda, tone: "bg-accent-soft text-accent" },
  { name: "Choco Cake", price: "35.000", icon: CakeSlice, tone: "bg-success-soft text-success" },
  { name: "Roti Bakar", price: "26.000", icon: Package, tone: "bg-brand-soft text-brand" },
  { name: "Americano", price: "24.000", icon: Coffee, tone: "bg-warning-soft text-warning" },
];

export function PosPhone() {
  return (
    <div className="flex h-full flex-col bg-[#f7f7f9]">
      <StatusBar />
      <AppBar title="Kasira" caption="Kopi Senja · Outlet Utama" />

      <div className="px-3 pb-2">
        <div className="flex items-center gap-1 rounded-lg border border-line bg-white px-2 py-1.5">
          <Search className="size-2.5 text-ink-muted" strokeWidth={2.2} />
          <span className="text-[6.5px] text-ink-muted">Cari produk atau scan barcode</span>
        </div>
        <div className="mt-2 flex gap-1">
          {["Semua", "Kopi", "Makanan"].map((chip, index) => (
            <span
              key={chip}
              className={cn(
                "rounded-full px-2 py-0.5 text-[6px] font-semibold",
                index === 0 ? "bg-brand text-white" : "border border-line bg-white text-ink-soft",
              )}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 px-3">
        <div className="grid grid-cols-2 content-start gap-2">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className={cn(
                  "rounded-lg border border-line bg-white p-1",
                  index >= 4 && "phone-compact-hide",
                )}
              >
                <div className={cn("grid h-7 place-items-center rounded-md", product.tone)}>
                  <Icon className="size-3.5" strokeWidth={1.6} />
                </div>
                <p className="mt-0.5 truncate text-[6px] font-semibold text-ink">{product.name}</p>
                <div className="flex items-center justify-between">
                  <p className="text-[5.5px] text-ink-muted">Rp {product.price}</p>
                  <span className="grid size-3 place-items-center rounded bg-brand-soft text-[7px] font-bold text-brand-strong">
                    +
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="phone-compact-hide mt-2 rounded-lg border border-line bg-white p-2">
          <div className="flex items-center justify-between">
            <p className="text-[6.5px] font-semibold text-ink">Pesanan</p>
            <span className="text-[5px] text-ink-muted">2 item</span>
          </div>
          <ul className="mt-1 space-y-0.5">
            <li className="flex items-center justify-between text-[5.5px] text-ink-soft">
              <span>Kopi Susu × 2</span>
              <span>Rp 56.000</span>
            </li>
            <li className="flex items-center justify-between text-[5.5px] text-ink-soft">
              <span>Croissant × 1</span>
              <span>Rp 22.000</span>
            </li>
          </ul>
          <div className="mt-1 flex items-center justify-between border-t border-line pt-1 text-[6px] font-semibold text-ink">
            <span>Total</span>
            <span>Rp 78.000</span>
          </div>
          <div className="mt-1 flex gap-1">
            <span className="flex-1 rounded border border-brand bg-brand-soft py-0.5 text-center text-[5px] font-semibold text-brand-strong">
              Tunai
            </span>
            <span className="flex-1 rounded border border-line py-0.5 text-center text-[5px] text-ink-soft">
              QRIS
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-line bg-white px-3 py-2">
        <div className="flex items-center justify-between text-[6.5px] text-ink-soft">
          <span>2 item · Meja 04</span>
          <span className="font-bold text-ink">Rp 78.000</span>
        </div>
        <div className="mt-1.5 rounded-md bg-brand px-2 py-1.5 text-center text-[7px] font-semibold text-white">
          Bayar Sekarang
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Reports                                                                    */
/* -------------------------------------------------------------------------- */

const paymentMix = [
  { label: "Tunai", value: 46, tone: "bg-brand" },
  { label: "QRIS", value: 34, tone: "bg-accent" },
  { label: "Transfer", value: 20, tone: "bg-warning" },
];

export function ReportPhone() {
  return (
    <div className="flex h-full flex-col bg-[#f7f7f9]">
      <StatusBar />
      <AppBar title="Laporan" caption="Ringkasan hari ini" />

      <div className="px-3">
        <div className="rounded-xl bg-[linear-gradient(135deg,#20242f_0%,#2c2233_58%,#4a1f28_100%)] p-3 text-white">
          <p className="text-[6px] tracking-[0.14em] text-white/60 uppercase">Omzet hari ini</p>
          <p className="mt-1 text-[15px] leading-none font-light tracking-tight">Rp 4.820.000</p>
          <div className="mt-2 flex items-end justify-between">
            <span className="rounded-full bg-white/15 px-1.5 py-0.5 text-[5.5px] font-semibold text-white">
              +12,4% dari kemarin
            </span>
            <span className="text-[5.5px] text-white/55">128 transaksi</span>
          </div>
          <div className="mt-2.5 flex h-8 items-end gap-1">
            {[38, 55, 44, 68, 58, 82, 72, 90, 76, 96, 84, 100].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-sm bg-white/25"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="rounded-lg border border-line bg-white p-2">
            <p className="text-[5.5px] text-ink-muted">Transaksi</p>
            <p className="text-[9px] font-bold text-ink">128</p>
            <p className="text-[5px] font-semibold text-success">+8,2%</p>
          </div>
          <div className="rounded-lg border border-line bg-white p-2">
            <p className="text-[5.5px] text-ink-muted">Rata-rata</p>
            <p className="text-[9px] font-bold text-ink">Rp 37.6rb</p>
            <p className="text-[5px] font-semibold text-success">+3,1%</p>
          </div>
        </div>
      </div>

      <div className="mt-2 flex-1 px-3">
        <div className="rounded-lg border border-line bg-white p-2">
          <div className="flex items-center justify-between">
            <p className="text-[6.5px] font-semibold text-ink">Metode pembayaran</p>
            <span className="text-[5px] text-ink-muted">Hari ini</span>
          </div>
          <ul className="mt-1.5 space-y-1.5">
            {paymentMix.map((item) => (
              <li key={item.label}>
                <div className="flex items-center justify-between text-[5.5px]">
                  <span className="text-ink-soft">{item.label}</span>
                  <span className="font-semibold text-ink">{item.value}%</span>
                </div>
                <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-surface-sunken">
                  <div
                    className={cn("h-full rounded-full", item.tone)}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-1.5 rounded-lg border border-line bg-white p-2">
          <p className="text-[6.5px] font-semibold text-ink">Produk terlaris</p>
          <ul className="mt-1 space-y-1">
            {[
              ["Kopi Susu", "48"],
              ["Matcha Latte", "31"],
              ["Croissant", "26"],
            ].map(([name, qty], index) => (
              <li key={name} className="flex items-center gap-1.5">
                <span className="grid size-3.5 place-items-center rounded bg-brand-soft text-[5.5px] font-bold text-brand-strong">
                  {index + 1}
                </span>
                <span className="flex-1 text-[5.5px] text-ink-soft">{name}</span>
                <span className="text-[5.5px] font-semibold text-ink">{qty} pcs</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-2" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Stock                                                                      */
/* -------------------------------------------------------------------------- */

const stockRows = [
  { name: "Biji Kopi Arabika", sku: "BJI-001", qty: 8, status: "Menipis", danger: true },
  { name: "Susu UHT", sku: "SUS-014", qty: 12, status: "Menipis", danger: false },
  { name: "Matcha Powder", sku: "MTC-009", qty: 24, status: "Aman", danger: false },
  { name: "Croissant", sku: "CRS-003", qty: 6, status: "Menipis", danger: true },
];

export function StockPhone() {
  return (
    <div className="flex h-full flex-col bg-[#f7f7f9]">
      <StatusBar />
      <AppBar title="Stok" caption="Semua outlet" />

      <div className="px-3">
        <div className="flex items-center gap-1 rounded-lg border border-line bg-white px-2 py-1.5">
          <Search className="size-2.5 text-ink-muted" strokeWidth={2.2} />
          <span className="text-[6.5px] text-ink-muted">Cari produk atau SKU</span>
        </div>
      </div>

      <div className="mt-2 flex-1 px-3">
        <div className="overflow-hidden rounded-lg border border-line bg-white">
          {stockRows.map((row) => (
            <div
              key={row.sku}
              className="flex items-center gap-1.5 border-b border-line/70 px-2 py-2 last:border-b-0"
            >
              <span className="grid size-5 shrink-0 place-items-center rounded bg-brand-soft text-brand">
                <Package className="size-2.5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[6.5px] font-semibold text-ink">{row.name}</p>
                <p className="text-[5px] text-ink-muted">{row.sku}</p>
              </div>
              <span className="text-[6px] font-semibold text-ink">{row.qty}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[5px] font-semibold",
                  row.danger
                    ? "bg-danger-soft text-danger"
                    : row.status === "Aman"
                      ? "bg-success-soft text-success"
                      : "bg-warning-soft text-warning",
                )}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2 rounded-lg border border-brand-line bg-brand-soft p-2">
          <p className="text-[6px] font-semibold text-brand-strong">3 produk perlu ditambah</p>
          <p className="mt-0.5 text-[5px] leading-relaxed text-ink-soft">
            Peringatan otomatis saat stok menyentuh batas minimum.
          </p>
          <div className="mt-1.5 inline-flex rounded bg-white px-1.5 py-0.5 text-[5px] font-semibold text-brand">
            Atur batas stok
          </div>
        </div>
      </div>
      <div className="h-2" />
    </div>
  );
}
