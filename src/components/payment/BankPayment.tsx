import { Building2 } from "lucide-react";
import { CopyButton } from "@/components/payment/CopyButton";
import type { BankAccount } from "@/data/payments";
import { formatRupiah } from "@/lib/format";

export function BankPayment({
  bank,
  total,
  onCopied,
}: {
  bank: BankAccount;
  total: number;
  onCopied?: (success: boolean) => void;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface-muted/50 p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg border border-line bg-white text-brand">
            <Building2 className="size-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">Transfer Bank</p>
            <p className="text-xs text-ink-muted">Rekening tujuan</p>
          </div>
        </div>
        {bank.isPlaceholder ? (
          <span className="rounded-full border border-warning/20 bg-warning-soft px-2 py-0.5 text-[10px] font-medium text-warning">
            Data contoh
          </span>
        ) : null}
      </div>

      <dl className="mt-4 space-y-3">
        <div>
          <dt className="text-[11px] font-medium text-ink-muted">Bank</dt>
          <dd className="mt-0.5 text-sm font-semibold text-ink">{bank.bankName}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-medium text-ink-muted">Nomor Rekening</dt>
          <dd className="mt-0.5 font-mono text-lg font-bold tracking-wide break-all text-ink">
            {bank.accountNumber}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-medium text-ink-muted">Atas Nama</dt>
          <dd className="mt-0.5 text-sm text-ink">{bank.accountHolder}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-medium text-ink-muted">Total Pembayaran</dt>
          <dd className="mt-0.5 text-xl font-bold tracking-tight text-brand">
            {formatRupiah(total)}
          </dd>
        </div>
      </dl>

      <div className="mt-4">
        <CopyButton
          value={bank.accountNumber}
          label="Salin Nomor Rekening"
          successMessage="Nomor rekening disalin"
          onCopied={onCopied}
        />
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-ink-muted">
        Transfer sesuai total persis, lalu simpan bukti pembayaran. Cantumkan nomor referensi
        pesanan pada berita transfer jika tersedia.
      </p>
    </div>
  );
}
