import Link from "next/link";
import type { ReactNode } from "react";
import { Mail, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Section";
import { Logo } from "@/components/layout/Logo";
import { getWhatsAppLink, siteConfig, supportMessage } from "@/data/site";

const productLinks = [
  { label: "Fitur", href: "/features/" },
  { label: "Harga", href: "/pricing/" },
  { label: "Demo", href: "/#demo" },
];

const legalLinks = [
  { label: "Kebijakan Privasi", href: "/privacy-policy/" },
  { label: "Syarat & Ketentuan", href: "/terms/" },
];

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappHref = getWhatsAppLink(supportMessage);
  const helpLinks: FooterLink[] = [
    { label: "FAQ", href: "/#faq" },
    { label: "Kontak", href: "/#kontak" },
    ...(whatsappHref ? [{ label: "WhatsApp", href: whatsappHref, external: true }] : []),
  ];

  return (
    <footer className="bg-[#202020] text-white">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10 lg:py-16">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/65">{siteConfig.description}</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/60">
              <ShieldCheck className="size-3.5 text-white/70" aria-hidden="true" />
              Pembayaran manual dan diverifikasi oleh tim
            </p>
          </div>

          <FooterColumn title="Produk" links={productLinks} />
          <FooterColumn title="Bantuan" links={helpLinks}>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Mail className="size-4" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
          </FooterColumn>

          <div>
            <h2 className="text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase">
              Legal
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[11px] tracking-[0.08em] text-white/60 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>Dibuat untuk UMKM Indonesia</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  children,
}: {
  title: string;
  links: FooterLink[];
  children?: ReactNode;
}) {
  const linkClassName = "text-sm text-white/60 transition-colors hover:text-white";

  return (
    <div>
      <h2 className="text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase">
        {title}
      </h2>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
        {children ? <li>{children}</li> : null}
      </ul>
    </div>
  );
}
