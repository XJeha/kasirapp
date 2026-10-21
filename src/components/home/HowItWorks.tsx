import type { LucideIcon } from "lucide-react";
import { Banknote, Mail, ShoppingBag, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps: Array<{
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    number: "01",
    title: "Pilih Paket",
    description: "Tentukan paket dan durasi langganan yang sesuai dengan kebutuhan bisnis Anda.",
    icon: ShoppingBag,
  },
  {
    number: "02",
    title: "Lakukan Pembayaran",
    description:
      "Transfer melalui bank, e-wallet, atau scan QRIS sesuai total pesanan yang tertera.",
    icon: Banknote,
  },
  {
    number: "03",
    title: "Konfirmasi Pembayaran",
    description:
      "Kirim email konfirmasi beserta bukti pembayaran. Tim akan memverifikasi secara manual.",
    icon: Mail,
  },
  {
    number: "04",
    title: "Mulai Gunakan Aplikasi",
    description:
      "Setelah pembayaran terverifikasi, layanan diaktifkan dan Anda dapat mulai mencatat transaksi.",
    icon: Sparkles,
  },
];

export function HowItWorks() {
  return (
    <Section labelledBy="how-it-works-title" defer>
      <SectionHeading
        eyebrow="Cara kerja"
        id="how-it-works-title"
        title="Dari Pilih Paket hingga Siap Digunakan"
        description="Empat langkah sederhana tanpa proses pendaftaran akun di website. Aktivasi dilakukan manual setelah pembayaran dikonfirmasi."
      />

      <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div
          aria-hidden="true"
          className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-line-strong lg:block"
        />
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <li key={step.number} className="relative">
              <div className="relative z-10 grid size-12 place-items-center rounded-full border border-brand-line bg-white text-brand shadow-[0_1px_2px_rgba(12,26,51,0.05)]">
                <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
              </div>
              <p className="mt-4 text-[11px] font-bold tracking-[0.16em] text-brand">
                LANGKAH {step.number}
              </p>
              <h3 className="mt-1.5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>

      <p className="mt-10 rounded-xl border border-line bg-surface-muted px-4 py-3 text-center text-sm text-ink-soft">
        Belum yakin paket mana yang cocok?{" "}
        <a
          href="#kontak"
          className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:text-brand-strong"
        >
          Hubungi tim kami
        </a>{" "}
        untuk diskusi singkat sebelum memesan.
      </p>
    </Section>
  );
}
