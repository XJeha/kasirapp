import Link from "next/link";
import { ArrowRight, ReceiptText } from "lucide-react";
import { buttonStyles } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function MissingOrderState({
  description = "Kami tidak menemukan data pesanan pada sesi browser ini. Data pesanan hanya disimpan sementara per tab, sehingga membuka halaman ini di tab baru akan memulai sesi kosong.",
}: {
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-line bg-white p-6 text-center shadow-card sm:p-8">
      <span className="mx-auto grid size-12 place-items-center rounded-full bg-warning-soft text-warning">
        <ReceiptText className="size-5" aria-hidden="true" />
      </span>
      <h2 className="mt-4 text-xl font-bold text-ink">Pesanan belum tersedia</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/pricing/" className={buttonStyles({})}>
          Pilih Paket
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <Link href="/order/" className={buttonStyles({ variant: "secondary" })}>
          Isi Data Pesanan
        </Link>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-ink-muted">
        Butuh bantuan? Hubungi{" "}
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="font-medium text-brand underline decoration-brand/30 underline-offset-4"
        >
          {siteConfig.contact.email}
        </a>
        .
      </p>
    </div>
  );
}
