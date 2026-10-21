import {
  ArrowUpRight,
  Bell,
  Boxes,
  ChartColumn,
  LayoutDashboard,
  Package,
  ReceiptText,
  Users,
} from "lucide-react";
import { AreaSparkline } from "@/components/mockups/Sparkline";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { dashboardDemo, heroSalesSeries, topProducts } from "@/data/analytics";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Transaksi", icon: ReceiptText, active: false },
  { label: "Produk", icon: Package, active: false },
  { label: "Stok", icon: Boxes, active: false },
  { label: "Pelanggan", icon: Users, active: false },
  { label: "Laporan", icon: ChartColumn, active: false },
];

export function DashboardMockup() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-6 rounded-[40px] bg-brand/10 blur-3xl" />
      <div aria-hidden="true" className="relative">
        <BrowserFrame label="app.kasira.id/dashboard">
          <div className="grid grid-cols-1 sm:grid-cols-[142px_minmax(0,1fr)]">
            <aside className="hidden flex-col border-r border-line bg-surface-muted/80 px-2.5 py-3 sm:flex">
              <div className="flex items-center gap-2 px-1">
                <span className="grid size-6 place-items-center rounded-md bg-brand text-[9px] font-bold text-white">
                  K
                </span>
                <div className="leading-tight">
                  <p className="text-[9px] font-bold text-ink">Kasira</p>
                  <p className="text-[7px] text-ink-muted">Panel Bisnis</p>
                </div>
              </div>

              <nav className="mt-4 flex flex-col gap-0.5">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className={
                        item.active
                          ? "flex items-center gap-1.5 rounded-md bg-brand-soft px-2 py-1.5 text-[8px] font-semibold text-brand-strong"
                          : "flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[8px] font-medium text-ink-soft"
                      }
                    >
                      <Icon className="size-3" strokeWidth={1.9} />
                      {item.label}
                    </span>
                  );
                })}
              </nav>

              <div className="mt-auto rounded-lg border border-line bg-white p-2">
                <p className="text-[8px] font-semibold text-ink">Paket Pro</p>
                <p className="mt-0.5 text-[6.5px] text-ink-muted">Aktif hingga 21 Nov 2026</p>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-surface-sunken">
                  <div className="h-full w-3/4 rounded-full bg-brand" />
                </div>
              </div>
            </aside>

            <div className="min-w-0 bg-white">
              <div className="flex items-center justify-between gap-2 border-b border-line px-3 py-2.5">
                <div>
                  <p className="text-[10px] font-bold text-ink">Kopi Senja</p>
                  <p className="text-[7.5px] text-ink-muted">Outlet Utama · Dashboard</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative grid size-6 place-items-center rounded-md border border-line bg-white">
                    <Bell className="size-3 text-ink-soft" strokeWidth={1.9} />
                    <span className="absolute top-1 right-1 size-1 rounded-full bg-danger" />
                  </span>
                  <span className="grid size-6 place-items-center rounded-full bg-brand-soft text-[7px] font-bold text-brand">
                    RS
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 p-3">
                <div className="grid grid-cols-2 gap-2">
                  {dashboardDemo.summary.map((item) => (
                    <div key={item.label} className="rounded-lg border border-line bg-white p-2">
                      <p className="text-[7.5px] font-medium text-ink-muted">{item.label}</p>
                      <p className="mt-0.5 truncate text-[11px] font-bold tracking-tight text-ink">
                        {item.value}
                      </p>
                      <p className="mt-0.5 flex items-center gap-0.5 text-[6.5px] font-semibold text-success">
                        <ArrowUpRight className="size-2" aria-hidden="true" />
                        {item.trend}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-line bg-white p-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[9px] font-semibold text-ink">Sales Overview</p>
                      <p className="text-[7px] text-ink-muted">Enam bulan terakhir</p>
                    </div>
                    <span className="rounded border border-line px-1.5 py-0.5 text-[6.5px] font-medium text-ink-soft">
                      Bulanan
                    </span>
                  </div>
                  <div className="mt-2 h-[86px]">
                    <AreaSparkline
                      values={dashboardDemo.revenueSeries.map((point) => point.value)}
                      gradientId="hero-sales-gradient"
                      showGrid
                    />
                  </div>
                  <div className="mt-1 flex justify-between text-[6.5px] font-medium text-ink-muted">
                    {dashboardDemo.revenueSeries.map((point) => (
                      <span key={point.label}>{point.label}</span>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-line bg-white p-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-semibold text-ink">Top Products</p>
                    <p className="text-[7px] text-ink-muted">Bulan ini</p>
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {topProducts.slice(0, 3).map((product, index) => (
                      <li key={product.name} className="flex items-center gap-2">
                        <span className="grid size-4 shrink-0 place-items-center rounded bg-brand-soft text-[7px] font-bold text-brand">
                          {index + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="truncate text-[7.5px] font-medium text-ink">
                              {product.name}
                            </p>
                            <p className="shrink-0 text-[7px] text-ink-muted">
                              {product.units} terjual
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
            </div>
          </div>
        </BrowserFrame>

        <div
          aria-hidden="true"
          className="absolute -bottom-6 -left-4 hidden w-52 rounded-xl border border-line bg-white p-3 shadow-float lg:block"
        >
          <div className="flex items-center justify-between gap-2">
            <p className="text-[9px] font-medium text-ink-muted">Transaksi hari ini</p>
            <span className="rounded-full bg-success-soft px-1.5 py-0.5 text-[7px] font-bold text-success">
              +18,2%
            </span>
          </div>
          <div className="mt-1 flex items-end justify-between gap-2">
            <p className="text-lg font-bold tracking-tight text-ink">1.284</p>
            <div className="h-8 w-20">
              <AreaSparkline
                values={heroSalesSeries}
                gradientId="hero-float-gradient"
                stroke="var(--color-accent)"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[11px] leading-relaxed text-ink-muted lg:mt-10 lg:text-left">
        Ilustrasi dashboard aplikasi. Seluruh angka pada tampilan ini adalah data contoh.
      </p>
    </div>
  );
}
