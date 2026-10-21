"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, ExternalLink, Mail, X } from "lucide-react";
import { CopyButton } from "@/components/payment/CopyButton";
import { Button, type ButtonSize, type ButtonVariant, buttonStyles } from "@/components/ui/Button";
import type { PaymentMethodId } from "@/data/payments";
import { trackEvent } from "@/lib/analytics";
import type { EmailConfirmation } from "@/lib/email";

export function EmailConfirmationAction({
  confirmation,
  reference,
  method,
  showNextStep = true,
  label = "Konfirmasi via Email",
  size = "lg",
  variant = "primary",
  className,
}: {
  confirmation: EmailConfirmation;
  reference: string;
  method: PaymentMethodId | null;
  showNextStep?: boolean;
  label?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
      document.body.style.overflow = "hidden";
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openDialog = () => {
    setIsOpen(true);
    trackEvent("email_confirmation_click", { reference, method });
  };

  const closeDialog = () => setIsOpen(false);

  const downloadEml = () => {
    const blob = new Blob([confirmation.eml], { type: "message/rfc822;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `konfirmasi-${reference}.eml`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Button
        type="button"
        size={size}
        variant={variant}
        className={className}
        onClick={openDialog}
        aria-haspopup="dialog"
      >
        <Mail className="size-4" aria-hidden="true" />
        {label}
      </Button>

      <dialog
        ref={dialogRef}
        aria-labelledby="email-confirmation-title"
        onClose={closeDialog}
        onCancel={closeDialog}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
        className="m-auto w-[calc(100vw-2rem)] max-w-xl overflow-hidden rounded-2xl border border-line bg-white p-0 text-ink shadow-float [&::backdrop]:bg-ink/50"
      >
        <div className="flex max-h-[88vh] flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
            <div>
              <h2 id="email-confirmation-title" className="text-base font-bold text-ink">
                Konfirmasi Pembayaran via Email
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                Pilih cara mengirim. Pembayaran tetap diverifikasi manual oleh tim.
              </p>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Tutup dialog"
              className="grid size-9 shrink-0 place-items-center rounded-lg border border-line text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div
            role="region"
            aria-label="Detail email konfirmasi"
            tabIndex={0}
            className="min-h-0 flex-1 overflow-y-auto px-5 py-4"
          >
            <dl className="grid gap-x-3 gap-y-2 text-xs sm:grid-cols-[92px_1fr]">
              <dt className="font-medium text-ink-muted">Penerima</dt>
              <dd className="break-all text-ink">{confirmation.recipient}</dd>
              <dt className="font-medium text-ink-muted">Subjek</dt>
              <dd className="break-all text-ink">{confirmation.subject}</dd>
              <dt className="font-medium text-ink-muted">Nomor referensi</dt>
              <dd className="font-mono text-ink">{reference}</dd>
            </dl>

            <div className="mt-4 rounded-xl border border-line bg-surface-muted/60 p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold text-ink">Isi email</p>
                <span className="rounded-full border border-line bg-white px-2 py-0.5 text-[10px] font-medium text-ink-muted">
                  Otomatis terisi
                </span>
              </div>
              <div
                role="region"
                aria-label="Isi email konfirmasi"
                tabIndex={0}
                className="mt-2 max-h-48 overflow-y-auto rounded-md focus-visible:ring-2 focus-visible:ring-brand/40"
              >
                <pre className="font-sans text-[11px] leading-relaxed whitespace-pre-wrap text-ink-soft">
                  {confirmation.body}
                </pre>
              </div>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <a
                href={confirmation.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({ className: "w-full" })}
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                Buka Gmail
              </a>
              <a
                href={confirmation.mailtoUrl}
                className={buttonStyles({ variant: "secondary", className: "w-full" })}
              >
                <Mail className="size-4" aria-hidden="true" />
                Buka Aplikasi Email
              </a>
            </div>

            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-start">
              <CopyButton
                value={`${confirmation.subject}\n\n${confirmation.body}`}
                label="Salin Isi Email"
                successMessage="Isi email disalin"
              />
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={downloadEml}
                className="w-full sm:w-auto"
              >
                <Download className="size-4" aria-hidden="true" />
                Unduh .eml
              </Button>
            </div>

            <p className="mt-4 rounded-lg border border-warning/20 bg-warning-soft px-3 py-2 text-[11px] leading-relaxed text-warning">
              Setelah Gmail atau aplikasi email terbuka, lampirkan bukti pembayaran sebelum mengirim
              email. Situs ini tidak mengirim email secara otomatis.
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-ink-muted">
              Jika aplikasi email tidak terbuka, gunakan Gmail, salin isi email, atau unduh file
              .eml lalu buka di aplikasi email Anda.
            </p>
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-end">
            <Button type="button" variant="secondary" onClick={closeDialog}>
              Tutup
            </Button>
            {showNextStep ? (
              <Link href="/payment-success/" onClick={closeDialog} className={buttonStyles({})}>
                Lanjut ke Langkah Selanjutnya
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </div>
      </dialog>
    </>
  );
}
