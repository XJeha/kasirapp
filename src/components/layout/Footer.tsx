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
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms/" },
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
    <footer className="border-t border-line bg-[linear-gradient(180deg,#ffffff_0%,#f8fafd_100%)]">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{siteConfig.description}</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-line bg-surface-muted px-3 py-2 text-xs font-medium text-ink-soft">
              <ShieldCheck className="size-4 text-success" aria-hidden="true" />
              Pembayaran manual dan diverifikasi oleh tim.
            </p>
          </div>

          <FooterColumn title="Produk" links={productLinks} />
          <FooterColumn title="Bantuan" links={helpLinks}>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-brand"
            >
              <Mail className="size-4" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
          </FooterColumn>

          <div>
            <h2 className="text-xs font-bold tracking-[0.14em] text-ink uppercase">Legal</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>
            Harga dan data pembayaran pada situs ini adalah konfigurasi contoh yang dapat
            disesuaikan.
          </p>
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
  const linkClassName = "text-sm text-ink-soft transition-colors hover:text-brand";

  return (
    <div>
      <h2 className="text-xs font-bold tracking-[0.14em] text-ink uppercase">{title}</h2>
      <ul className="mt-4 flex flex-col gap-3">
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
