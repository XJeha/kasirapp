import { Suspense } from "react";
import { OrderClientLoader } from "@/components/order/OrderClientLoader";
import { OrderLoading } from "@/components/order/OrderLoading";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pesan Paket Aplikasi Kasir",
  description:
    "Lengkapi data pemesanan paket aplikasi kasir Kasira. Pilih paket dan durasi langganan, lalu lanjutkan ke pembayaran manual.",
  path: "/order/",
});

export default function OrderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pemesanan"
        title="Lengkapi Data Pesanan Anda"
        description="Isi data berikut untuk melanjutkan pembelian paket. Tidak perlu membuat akun — data pesanan disimpan sementara di browser Anda sampai proses konfirmasi selesai."
      />

      <Section>
        <Suspense fallback={<OrderLoading />}>
          <OrderClientLoader />
        </Suspense>
      </Section>
    </>
  );
}
