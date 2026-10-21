/**
 * PAYMENT CONFIGURATION — satu sumber kebenaran untuk data pembayaran manual.
 * ---------------------------------------------------------------------------
 * Isi rekening/e-wallet/QRIS yang sebenarnya sebelum situs dipublikasikan.
 * Data di bawah sengaja berupa placeholder yang mudah dicari dan diganti.
 * Jangan pernah menaruh PIN, OTP, CVV, password, atau kredensial pembayaran
 * apa pun di file ini — semuanya akan terkirim ke browser pengunjung.
 */

export type BankAccount = {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  isPlaceholder: boolean;
};

export type EWalletAccount = {
  id: string;
  provider: string;
  accountNumber: string;
  accountHolder: string;
  isPlaceholder: boolean;
};

export type QrisConfig = {
  merchantName: string;
  image: string;
  isPlaceholder: boolean;
};

export const paymentConfig = {
  banks: [
    {
      id: "bank-utama",
      bankName: "[BANK_NAME]",
      accountNumber: "0000000000",
      accountHolder: "[ACCOUNT_HOLDER]",
      isPlaceholder: true,
    },
  ] satisfies BankAccount[],

  ewallets: [
    {
      id: "dana",
      provider: "DANA",
      accountNumber: "[EWALLET_NUMBER]",
      accountHolder: "[ACCOUNT_HOLDER]",
      isPlaceholder: true,
    },
    {
      id: "gopay",
      provider: "GoPay",
      accountNumber: "[EWALLET_NUMBER]",
      accountHolder: "[ACCOUNT_HOLDER]",
      isPlaceholder: true,
    },
    {
      id: "ovo",
      provider: "OVO",
      accountNumber: "[EWALLET_NUMBER]",
      accountHolder: "[ACCOUNT_HOLDER]",
      isPlaceholder: true,
    },
    {
      id: "shopeepay",
      provider: "ShopeePay",
      accountNumber: "[EWALLET_NUMBER]",
      accountHolder: "[ACCOUNT_HOLDER]",
      isPlaceholder: true,
    },
  ] satisfies EWalletAccount[],

  qris: {
    merchantName: "[MERCHANT_NAME]",
    image: "/payment/qris.png",
    isPlaceholder: true,
  } satisfies QrisConfig,
} as const;

export const paymentMethods = [
  {
    id: "bank",
    name: "Transfer Bank",
    description: "Transfer ke rekening bank yang tertera.",
    icon: "building-2",
  },
  {
    id: "ewallet",
    name: "E-Wallet",
    description: "Bayar melalui DANA, GoPay, OVO, atau ShopeePay.",
    icon: "smartphone",
  },
  {
    id: "qris",
    name: "QRIS",
    description: "Scan kode QRIS dari aplikasi bank atau e-wallet.",
    icon: "qr-code",
  },
] as const;

export type PaymentMethodId = (typeof paymentMethods)[number]["id"];

export const hasPlaceholderPaymentConfig =
  paymentConfig.banks.some((bank) => bank.isPlaceholder) ||
  paymentConfig.ewallets.some((wallet) => wallet.isPlaceholder) ||
  paymentConfig.qris.isPlaceholder;

export const paymentSecurityNotice =
  "Kami tidak pernah meminta PIN, password, OTP, CVV, atau informasi rahasia rekening Anda.";
