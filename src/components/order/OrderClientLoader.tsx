"use client";

import dynamic from "next/dynamic";
import { OrderLoading } from "@/components/order/OrderLoading";

const OrderForm = dynamic(
  () => import("@/components/order/OrderClient").then((mod) => mod.OrderClient),
  {
    ssr: false,
    loading: () => <OrderLoading />,
  },
);

/**
 * Formulir membutuhkan sessionStorage dan query string; dimuat hanya di browser
 * agar inisialisasi state tidak menyebabkan hydration mismatch.
 */
export function OrderClientLoader() {
  return <OrderForm />;
}
