import { CreditCard, LockKeyhole, ShieldCheck, UserRoundCheck } from "lucide-react";
import { Container } from "@/components/layout/Section";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { Badge } from "@/components/ui/Badge";
import { HeroCta } from "@/components/home/HeroCta";

const trustPoints = [
  { label: "Verifikasi manual", icon: ShieldCheck },
  { label: "Tanpa akun", icon: UserRoundCheck },
  { label: "Data di browser", icon: LockKeyhole },
  { label: "Tanpa PIN/OTP", icon: CreditCard },
];

export function Hero() {
  return (
    <section className="bg-aurora relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="bg-grid-soft mask-fade-bottom absolute inset-0 opacity-55"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 size-72 rounded-full bg-accent/10 blur-3xl"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:py-24">
          <div className="max-w-xl">
            <Badge variant="brand" className="py-1.5 text-[11px]">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              Solusi Kasir Modern untuk Bisnis Indonesia
            </Badge>

            <h1 className="mt-5 text-[2.55rem] leading-[1.06] font-bold tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.5rem]">
              Kelola Penjualan dan Bisnis <span className="text-brand">Lebih Mudah</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-[17px]">
              Catat transaksi, kelola produk dan stok, simpan data pelanggan, serta pantau laporan
              penjualan dalam satu aplikasi kasir yang praktis untuk operasional harian.
            </p>

            <HeroCta />

            <p className="mt-5 flex items-start gap-2 text-[13px] leading-relaxed text-ink-muted">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              Untuk retail, kafe, restoran, minimarket, dan UMKM. Dibuat untuk operasional harian
              yang lebih tertata.
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-5 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6">
              {trustPoints.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-1.5 text-[12px] font-medium text-ink-soft"
                >
                  <Icon className="size-3.5 text-brand" strokeWidth={2} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
