import {
  ArrowUpRight,
  Bell,
  Boxes,
  Calculator,
  ChartColumn,
  LayoutDashboard,
  Package,
  ReceiptText,
  Search,
  ShoppingCart,
  TriangleAlert,
  Users,
  Wallet,
} from "lucide-react";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { DonutMini } from "@/components/mockups/DonutMini";
import { AreaSparkline } from "@/components/mockups/Sparkline";
import { chartColors, dashboardDemo, paymentDistribution, topProducts } from "@/data/analytics";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Transaksi", icon: ReceiptText, active: false },
  { label: "Produk", icon: Package, active: false },
  { label: "Stok", icon: Boxes, active: false },
  { label: "Pelanggan", icon: Users, active: false },
  { label: "Laporan", icon: ChartColumn, active: false },
];

const summaryIcons = [Wallet, ReceiptText, ShoppingCart, Calculator];

export function DashboardShowcase() {
  return (
    <div>
      <div aria-hidden="true">
        <BrowserFrame label="app.kasira.id/dashboard">
          <div className="grid grid-cols-1 md:grid-cols-[168px_minmax(0,1fr)]">
            <aside className="hidden flex-col border-r border-line bg-surface-muted/80 px-3 py-4 md:flex">
              <div className="flex items-center gap-2 px-1">
                <span className="grid size-7 place-items-center rounded-lg bg-brand text-[10px] font-bold text-white">
                  K
                </span>
                <div className="leading-tight">
                  <p className="text-[10px] font-bold text-ink">Kasira</p>
                  <p className="text-[8px] text-ink-muted">Panel Bisnis</p>
                </div>
              </div>

              <p className="mt-5 px-1 text-[7px] font-semibold tracking-[0.14em] text-ink-muted uppercase">
                Menu
              </p>
              <nav className="mt-1.5 flex flex-col gap-0.5">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className={
                        item.active
                          ? "flex items-center gap-2 rounded-md bg-brand-soft px-2 py-1.5 text-[9px] font-semibold text-brand-strong"
                          : "flex items-center gap-2 rounded-md px-2 py-1.5 text-[9px] font-medium text-ink-soft"
                      }
                    >
                      <Icon className="size-3.5" strokeWidth={1.9} />
                      {item.label}
                    </span>
                  );
                })}
              </nav>

              <div className="mt-auto rounded-lg border border-line bg-white p-2.5">
                <p className="text-[8.5px] font-semibold text-ink">Paket Pro</p>
                <p className="mt-0.5 text-[7px] leading-relaxed text-ink-muted">
                  Aktif hingga 21 Nov 2026
                </p>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-surface-sunken">
                  <div className="h-full w-3/4 rounded-full bg-brand" />
                </div>
                <p className="mt-1.5 text-[6.5px] text-ink-muted">75% masa aktif</p>
              </div>
            </aside>

            <div className="min-w-0 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-3 py-2.5 sm:px-4">
                <div>
                  <p className="text-[11px] font-bold text-ink">Dashboard</p>
                  <p className="text-[8px] text-ink-muted">Kopi Senja · Outlet Utama</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden items-center gap-1.5 rounded-md border border-line bg-surface-muted px-2 py-1 text-[7.5px] text-ink-muted sm:flex">
                    <Search className="size-3" />
                    Cari transaksi…
                  </span>
                  <span className="relative grid size-6 place-items-center rounded-md border border-line bg-white">
                    <Bell className="size-3 text-ink-soft" />
                    <span className="absolute top-1 right-1 size-1 rounded-full bg-danger" />
                  </span>
                  <span className="grid size-6 place-items-center rounded-full bg-brand-soft text-[7px] font-bold text-brand">
                    RS
                  </span>
                </div>
              </div>

              <div className="space-y-3 p-3 sm:p-4">
                <div className="grid grid-cols-2 gap-2.5 xl:grid-cols-4">
                  {dashboardDemo.summary.map((item, index) => {
                    const Icon = summaryIcons[index] ?? Wallet;
                    return (
                      <div
                        key={item.label}
                        className="rounded-lg border border-line bg-white p-2.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-[7.5px] font-medium text-ink-muted">{item.label}</p>
                          <span className="grid size-5 place-items-center rounded bg-brand-soft text-brand">
                            <Icon className="size-2.5" />
                          </span>
                        </div>
                        <p className="mt-1 truncate text-[12px] font-bold tracking-tight text-ink">
                          {item.value}
                        </p>
                        <p className="mt-0.5 flex items-center gap-0.5 text-[6.5px] font-semibold text-success">
                          <ArrowUpRight className="size-2" />
                          {item.trend}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="grid gap-3 lg:grid-cols-12">
                  <div className="rounded-lg border border-line bg-white p-3 lg:col-span-8">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="text-[9.5px] font-semibold text-ink">Sales Overview</p>
                        <p className="text-[7px] text-ink-muted">Rp 127.000.000 · 6 bulan</p>
                      </div>
                      <div className="flex items-center gap-1 rounded-md border border-line p-0.5">
                        <span className="rounded bg-surface-muted px-1.5 py-0.5 text-[6.5px] font-medium text-ink-soft">
                          Mingguan
                        </span>
                        <span className="rounded bg-brand px-1.5 py-0.5 text-[6.5px] font-semibold text-white">
                          Bulanan
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 h-[128px]">
                      <AreaSparkline
                        values={dashboardDemo.revenueSeries.map((point) => point.value)}
                        gradientId="showcase-sales-gradient"
                        showGrid
                      />
                    </div>
                    <div className="mt-1.5 flex justify-between border-t border-line/70 pt-1.5 text-[6.5px] font-medium text-ink-muted">
                      {dashboardDemo.revenueSeries.map((point) => (
                        <span key={point.label}>{point.label}</span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-line bg-white p-3 lg:col-span-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[9.5px] font-semibold text-ink">Payment Distribution</p>
                      <span className="text-[6.5px] text-ink-muted">Bulan ini</span>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="relative">
                        <DonutMini data={paymentDistribution} size={104} thickness={13} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-[11px] font-bold text-ink">100%</span>
                          <span className="text-[6px] text-ink-muted">pembayaran</span>
                        </div>
                      </div>
                      <ul className="min-w-0 flex-1 space-y-1.5">
                        {paymentDistribution.map((item, index) => (
                          <li
                            key={item.name}
                            className="flex items-center justify-between gap-2 text-[7px]"
                          >
                            <span className="flex min-w-0 items-center gap-1 text-ink-soft">
                              <span
                                className="size-1.5 shrink-0 rounded-full"
                                style={{ background: chartColors[index] }}
                              />
                              <span className="truncate">{item.name}</span>
                            </span>
                            <span className="font-semibold text-ink">{item.value}%</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 lg:grid-cols-12">
                  <div className="rounded-lg border border-line bg-white lg:col-span-7">
                    <div className="flex items-center justify-between border-b border-line px-3 py-2">
                      <p className="text-[9.5px] font-semibold text-ink">Transaksi Terbaru</p>
                      <span className="text-[6.5px] font-medium text-brand">Lihat semua</span>
                    </div>
                    <div className="overflow-hidden">
                      <div className="hidden grid-cols-[62px_minmax(0,1fr)_62px_60px] gap-2 border-b border-line bg-surface-muted/70 px-3 py-1.5 text-[6.5px] font-semibold tracking-wide text-ink-muted uppercase sm:grid">
                        <span>Invoice</span>
                        <span>Item</span>
                        <span>Metode</span>
                        <span className="text-right">Total</span>
                      </div>
                      {dashboardDemo.recentTransactions.map((transaction) => (
                        <div
                          key={transaction.id}
                          className="grid grid-cols-[minmax(0,1fr)_60px] gap-2 border-b border-line/70 px-3 py-2 last:border-b-0 sm:grid-cols-[62px_minmax(0,1fr)_62px_60px]"
                        >
                          <div className="hidden sm:block">
                            <p className="text-[7px] font-semibold text-ink">{transaction.id}</p>
                            <p className="text-[6px] text-ink-muted">{transaction.time}</p>
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-[7.5px] font-medium text-ink">
                              {transaction.items}
                            </p>
                            <p className="text-[6px] text-ink-muted sm:hidden">
                              {transaction.id} · {transaction.time}
                            </p>
                          </div>
                          <div className="hidden sm:block">
                            <span className="rounded bg-surface-muted px-1.5 py-0.5 text-[6px] font-medium text-ink-soft">
                              {transaction.method}
                            </span>
                          </div>
                          <p className="text-right text-[7.5px] font-semibold text-ink">
                            {transaction.total}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-line bg-white p-3 lg:col-span-5">
                    <div className="flex items-center justify-between">
                      <p className="text-[9.5px] font-semibold text-ink">Top Products</p>
                      <span className="text-[6.5px] text-ink-muted">Bulan ini</span>
                    </div>
                    <ul className="mt-2.5 space-y-2">
                      {topProducts.map((product, index) => (
                        <li key={product.name} className="flex items-center gap-2">
                          <span className="grid size-4.5 shrink-0 place-items-center rounded bg-brand-soft text-[7px] font-bold text-brand">
                            {index + 1}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <p className="truncate text-[7.5px] font-medium text-ink">
                                {product.name}
                              </p>
                              <p className="shrink-0 text-[7px] font-semibold text-ink">
                                Rp {(product.revenue / 1_000_000).toFixed(1).replace(".", ",")} jt
                              </p>
                            </div>
                            <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-surface-sunken">
                              <div
                                className="h-full rounded-full bg-brand"
                                style={{
                                  width: `${Math.round((product.revenue / topProducts[0].revenue) * 100)}%`,
                                }}
                              />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-line bg-white p-3">
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-1.5 text-[9.5px] font-semibold text-ink">
                      <TriangleAlert className="size-3 text-warning" />
                      Peringatan Stok
                    </p>
                    <span className="text-[6.5px] text-ink-muted">3 produk perlu ditambah</span>
                  </div>
                  <div className="mt-2 grid gap-2 sm:grid-cols-3">
                    {dashboardDemo.stockAlerts.map((alert) => (
                      <div
                        key={alert.name}
                        className="rounded-md border border-line bg-surface-muted/50 p-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="truncate text-[7.5px] font-semibold text-ink">
                            {alert.name}
                          </p>
                          <span className="rounded-full bg-warning-soft px-1.5 py-0.5 text-[6px] font-semibold text-warning">
                            Menipis
                          </span>
                        </div>
                        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-surface-sunken">
                          <div
                            className="h-full rounded-full bg-warning"
                            style={{
                              width: `${Math.round((alert.remaining / alert.threshold) * 100)}%`,
                            }}
                          />
                        </div>
                        <p className="mt-1 text-[6px] text-ink-muted">
                          Sisa {alert.remaining} {alert.unit} · minimum {alert.threshold}{" "}
                          {alert.unit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>

      <p className="mt-4 text-center text-xs text-ink-muted">
        Contoh tampilan dashboard. Data pada gambar adalah data demo, bukan data bisnis nyata.
      </p>
    </div>
  );
}
