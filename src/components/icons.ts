import type { LucideIcon } from "lucide-react";
import {
  BadgePercent,
  Boxes,
  Briefcase,
  Building2,
  ChartColumn,
  ChartLine,
  Coffee,
  CreditCard,
  Croissant,
  Package,
  Plug,
  QrCode,
  ReceiptText,
  Scissors,
  Shirt,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Users,
  UtensilsCrossed,
  Wallet,
  WashingMachine,
} from "lucide-react";

export const featureIconMap: Record<string, LucideIcon> = {
  "shopping-cart": ShoppingCart,
  package: Package,
  boxes: Boxes,
  "chart-column": ChartColumn,
  wallet: Wallet,
  users: Users,
  "badge-percent": BadgePercent,
  "receipt-text": ReceiptText,
  "credit-card": CreditCard,
  "chart-line": ChartLine,
};

export const businessIconMap: Record<string, LucideIcon> = {
  store: Store,
  "shopping-basket": ShoppingBasket,
  coffee: Coffee,
  utensils: UtensilsCrossed,
  croissant: Croissant,
  shirt: Shirt,
  scissors: Scissors,
  "washing-machine": WashingMachine,
  plug: Plug,
  "shopping-bag": ShoppingBag,
  briefcase: Briefcase,
  sparkles: Sparkles,
};

export const paymentIconMap: Record<string, LucideIcon> = {
  "building-2": Building2,
  smartphone: Smartphone,
  "qr-code": QrCode,
};
