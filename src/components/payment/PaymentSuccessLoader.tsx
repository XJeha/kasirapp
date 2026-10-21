"use client";

import dynamic from "next/dynamic";
import { CheckoutLoading } from "@/components/payment/CheckoutLoading";

const PaymentSuccessClient = dynamic(
  () => import("@/components/payment/PaymentSuccessClient").then((mod) => mod.PaymentSuccessClient),
  {
    ssr: false,
    loading: () => <CheckoutLoading />,
  },
);

export function PaymentSuccessLoader() {
  return <PaymentSuccessClient />;
}
