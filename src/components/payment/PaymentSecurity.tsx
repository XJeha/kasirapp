import { Lock, ShieldCheck } from "lucide-react";
import { paymentSecurityNotice } from "@/data/payments";

export function PaymentSecurity() {
  return (
    <div className="rounded-xl border border-success/15 bg-success-soft p-4">
      <div className="flex items-start gap-3">
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-success">
          <ShieldCheck className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-success">Keamanan pembayaran</p>
          <p className="mt-1 text-xs leading-relaxed text-ink-soft">{paymentSecurityNotice}</p>
          <p className="mt-2 flex items-start gap-1.5 text-[11px] leading-relaxed text-ink-soft">
            <Lock className="mt-0.5 size-3 shrink-0" aria-hidden="true" />
            Website ini tidak memproses pembayaran otomatis dan tidak menyimpan data pembayaran
            Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
