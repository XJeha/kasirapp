export type OrderField = "fullName" | "businessName" | "whatsapp" | "email" | "businessType";

export type OrderFormValues = Record<OrderField, string>;

export type OrderFormErrors = Partial<Record<OrderField, string>>;

export const emptyOrderForm: OrderFormValues = {
  fullName: "",
  businessName: "",
  whatsapp: "",
  email: "",
  businessType: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const WHATSAPP_PATTERN = /^(?:\+62|62|0)8[1-9][0-9]{6,11}$/;

export function normalizeWhatsApp(value: string): string {
  return value.replace(/[\s().-]/g, "");
}

export function isValidWhatsApp(value: string): boolean {
  return WHATSAPP_PATTERN.test(normalizeWhatsApp(value));
}

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

/**
 * Validasi form pesanan. Pesan error ditampilkan inline di dekat field terkait.
 */
export function validateOrderForm(values: OrderFormValues): OrderFormErrors {
  const errors: OrderFormErrors = {};

  const fullName = values.fullName.trim();
  if (!fullName) {
    errors.fullName = "Nama lengkap wajib diisi.";
  } else if (fullName.length < 2) {
    errors.fullName = "Nama lengkap minimal 2 karakter.";
  } else if (fullName.length > 80) {
    errors.fullName = "Nama lengkap maksimal 80 karakter.";
  }

  const businessName = values.businessName.trim();
  if (!businessName) {
    errors.businessName = "Nama bisnis wajib diisi.";
  } else if (businessName.length < 2) {
    errors.businessName = "Nama bisnis minimal 2 karakter.";
  } else if (businessName.length > 100) {
    errors.businessName = "Nama bisnis maksimal 100 karakter.";
  }

  const whatsapp = normalizeWhatsApp(values.whatsapp);
  if (!whatsapp) {
    errors.whatsapp = "Nomor WhatsApp wajib diisi.";
  } else if (!WHATSAPP_PATTERN.test(whatsapp)) {
    errors.whatsapp = "Masukkan nomor Indonesia yang valid, contoh 0812 3456 7890.";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Email wajib diisi.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Masukkan alamat email yang valid.";
  } else if (email.length > 120) {
    errors.email = "Email maksimal 120 karakter.";
  }

  if (!values.businessType) {
    errors.businessType = "Pilih jenis usaha Anda.";
  }

  return errors;
}
