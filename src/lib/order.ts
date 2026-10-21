import type { PaymentMethodId } from "@/data/payments";
import type { PlanId } from "@/data/pricing";
import { isDurationMonths, isPlanId } from "@/lib/pricing";

export const ORDER_STORAGE_KEY = "kasira:order:v1";
const SCHEMA_VERSION = 1;

export type OrderCustomer = {
  fullName: string;
  businessName: string;
  whatsapp: string;
  email: string;
  businessType: string;
};

export type OrderPayment = {
  method: PaymentMethodId;
  label: string;
};

export type StoredOrder = {
  schemaVersion: typeof SCHEMA_VERSION;
  reference: string;
  createdAt: string;
  planId: PlanId;
  durationMonths: number;
  customer: OrderCustomer;
  payment?: OrderPayment;
};

const REFERENCE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const REFERENCE_PATTERN = /^ORD-\d{8}-[A-Z0-9]{4}$/;

function secureRandomBytes(length: number): Uint8Array {
  const bytes = new Uint8Array(length);
  const cryptoApi = typeof globalThis !== "undefined" ? globalThis.crypto : undefined;

  if (cryptoApi && typeof cryptoApi.getRandomValues === "function") {
    cryptoApi.getRandomValues(bytes);
    return bytes;
  }

  // Fallback sangat jarang terjadi (browser tanpa Web Crypto). Referensi tetap
  // berfungsi sebagai nomor pesanan, tetapi bukan pengenal kriptografis.
  for (let index = 0; index < length; index += 1) {
    bytes[index] = Math.floor(Math.random() * 256);
  }
  return bytes;
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

/**
 * Nomor referensi pesanan sisi klien: ORD-YYYYMMDD-XXXX.
 * Ini BUKAN ID transaksi yang dijamin unik oleh server.
 */
export function generateOrderReference(
  date: Date = new Date(),
  randomBytes: (length: number) => Uint8Array = secureRandomBytes,
): string {
  const datePart = `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
  const bytes = randomBytes(4);
  const suffix = Array.from(bytes)
    .map((byte) => REFERENCE_ALPHABET[byte % REFERENCE_ALPHABET.length])
    .join("");

  return `ORD-${datePart}-${suffix}`;
}

function isOrderCustomer(value: unknown): value is OrderCustomer {
  if (!value || typeof value !== "object") return false;
  const customer = value as Record<string, unknown>;
  const fields: Array<keyof OrderCustomer> = [
    "fullName",
    "businessName",
    "whatsapp",
    "email",
    "businessType",
  ];

  return fields.every(
    (field) => typeof customer[field] === "string" && (customer[field] as string).length > 0,
  );
}

function isStoredOrder(value: unknown): value is StoredOrder {
  if (!value || typeof value !== "object") return false;
  const order = value as Record<string, unknown>;

  return (
    order.schemaVersion === SCHEMA_VERSION &&
    typeof order.reference === "string" &&
    REFERENCE_PATTERN.test(order.reference) &&
    typeof order.createdAt === "string" &&
    !Number.isNaN(Date.parse(order.createdAt)) &&
    isPlanId(typeof order.planId === "string" ? order.planId : null) &&
    typeof order.durationMonths === "number" &&
    isDurationMonths(order.durationMonths) &&
    isOrderCustomer(order.customer)
  );
}

export function saveOrder(order: StoredOrder): boolean {
  if (typeof window === "undefined") return false;
  try {
    window.sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
    return true;
  } catch {
    return false;
  }
}

export function loadOrder(): StoredOrder | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(ORDER_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isStoredOrder(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function updateOrderPayment(payment: OrderPayment): StoredOrder | null {
  const order = loadOrder();
  if (!order) return null;
  const updated: StoredOrder = { ...order, payment };
  return saveOrder(updated) ? updated : order;
}

export function clearOrder(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(ORDER_STORAGE_KEY);
  } catch {
    // Tidak ada yang perlu dilakukan jika storage tidak dapat diakses.
  }
}
