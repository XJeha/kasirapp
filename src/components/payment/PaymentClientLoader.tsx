"use client";

import dynamic from "next/dynamic";
import { CheckoutLoading } from "@/components/payment/CheckoutLoading";

const PaymentClient = dynamic(
  () => import("@/components/payment/PaymentClient").then((mod) => mod.PaymentClient),
  {
    ssr: false,
    loading: () => <CheckoutLoading />,
  },
);

export function PaymentClientLoader() {
  return <PaymentClient />;
}
