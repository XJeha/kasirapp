const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("id-ID", {
  maximumFractionDigits: 0,
});

/**
 * Format angka menjadi Rupiah dengan spasi: "Rp 149.000".
 * Tidak pernah menghasilkan "Rp149000" tanpa spasi.
 */
export function formatRupiah(amount: number): string {
  const safeAmount = Number.isFinite(amount) ? Math.round(amount) : 0;
  return rupiahFormatter.format(safeAmount).replace(/\u00A0/g, " ");
}

/** Format angka ribuan gaya Indonesia: 3.842 */
export function formatNumber(value: number): string {
  return numberFormatter.format(Number.isFinite(value) ? value : 0);
}

function compact(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  return String(rounded).replace(".", ",");
}

/**
 * Ringkasan nominal untuk sumbu chart: "Rp 12 jt", "Rp 500 rb".
 * Tooltip tetap memakai formatRupiah agar nominal lengkap.
 */
export function formatCompactRupiah(amount: number): string {
  if (!Number.isFinite(amount)) return "Rp 0";
  const absolute = Math.abs(amount);
  if (absolute >= 1_000_000_000) return `Rp ${compact(amount / 1_000_000_000)} M`;
  if (absolute >= 1_000_000) return `Rp ${compact(amount / 1_000_000)} jt`;
  if (absolute >= 1_000) return `Rp ${compact(amount / 1_000)} rb`;
  return formatRupiah(amount);
}

/** Format persentase tanpa desimal yang tidak perlu: 20% */
export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}
