import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Container } from "@/components/layout/Section";
import { buttonStyles } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  description: "Halaman yang Anda cari tidak tersedia.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[11px] font-bold tracking-[0.16em] text-brand uppercase">404</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Halaman tidak ditemukan
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Tautan yang Anda buka mungkin sudah berubah atau tidak tersedia. Anda dapat kembali ke
            beranda atau melihat paket yang tersedia.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className={buttonStyles({})}>
              <Home className="size-4" aria-hidden="true" />
              Kembali ke Beranda
            </Link>
            <Link href="/pricing/" className={buttonStyles({ variant: "secondary" })}>
              Lihat Paket
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
