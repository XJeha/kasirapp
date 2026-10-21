import { Smartphone } from "lucide-react";
import { CopyButton } from "@/components/payment/CopyButton";
import type { EWalletAccount } from "@/data/payments";
import { formatRupiah } from "@/lib/format";
import { cn } from "@/lib/cn";

export function EwalletPayment({
  wallets,
  selectedId,
  onSelect,
  total,
  onCopied,
}: {
  wallets: readonly EWalletAccount[];
  selectedId: string;
  onSelect: (id: string) => void;
  total: number;
  onCopied?: (success: boolean) => void;
}) {
  const selectedWallet = wallets.find((wallet) => wallet.id === selectedId) ?? wallets[0];

  if (!selectedWallet) {
    return (
      <div className="rounded-xl border border-line bg-surface-muted p-5 text-sm text-ink-soft">
        Belum ada akun e-wallet yang dikonfigurasi. Silakan gunakan transfer bank atau hubungi
        support.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-line bg-surface-muted/50 p-4 sm:p-5">
      <div className="flex items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-lg border border-line bg-white text-brand">
          <Smartphone className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">E-Wallet</p>
          <p className="text-xs text-ink-muted">Pilih penyedia dan salin nomor tujuan</p>
        </div>
      </div>

      <div
        className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4"
        role="group"
        aria-label="Penyedia e-wallet"
      >
        {wallets.map((wallet) => {
          const isSelected = wallet.id === selectedWallet.id;
          return (
            <label
              key={wallet.id}
              className={cn(
                "cursor-pointer rounded-lg border px-2.5 py-2 text-center text-xs font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/40",
                isSelected
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-white text-ink-soft hover:border-brand/30",
              )}
            >
              <input
                type="radio"
                name="ewallet-provider"
                value={wallet.id}
                checked={isSelected}
                onChange={() => onSelect(wallet.id)}
                className="sr-only"
              />
              {wallet.provider}
            </label>
          );
        })}
      </div>

      <dl className="mt-4 space-y-3">
        <div>
          <dt className="text-[11px] font-medium text-ink-muted">Provider</dt>
          <dd className="mt-0.5 text-sm font-semibold text-ink">{selectedWallet.provider}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-medium text-ink-muted">Nomor E-Wallet</dt>
          <dd className="mt-0.5 font-mono text-lg font-bold tracking-wide break-all text-ink">
            {selectedWallet.accountNumber}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-medium text-ink-muted">Atas Nama</dt>
          <dd className="mt-0.5 text-sm text-ink">{selectedWallet.accountHolder}</dd>
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
          value={selectedWallet.accountNumber}
          label="Salin Nomor E-Wallet"
          successMessage="Nomor e-wallet disalin"
          onCopied={onCopied}
        />
      </div>

      {selectedWallet.isPlaceholder ? (
        <p className="mt-3 text-[11px] leading-relaxed text-warning">
          Nomor pada tampilan ini masih berupa data contoh dan belum dapat digunakan untuk
          pembayaran.
        </p>
      ) : null}
    </div>
  );
}
