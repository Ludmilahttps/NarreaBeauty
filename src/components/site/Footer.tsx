import { Instagram, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { generalUrl } from "@/lib/whatsapp";
import { contact } from "@/content/site";

export function Footer() {
  const { t, lang } = useLang();
  const links = [
    { href: "#atelier", label: t.nav.about },
    { href: "#prestations", label: t.nav.services },
    { href: "#galerie", label: t.nav.gallery },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <footer className="bg-night pt-20 pb-[max(2rem,env(safe-area-inset-bottom))] text-night-foreground">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="text-eyebrow text-champagne">{t.footer.tagline}</p>
            <p className="mt-4 max-w-xs text-night-muted">
              {contact.address}
              <br />
              {contact.city}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="link-underline text-sm text-night-muted hover:text-night-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <a
              href={generalUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/40 text-champagne transition-colors hover:bg-champagne hover:text-night"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.25} />
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/40 text-champagne transition-colors hover:bg-champagne hover:text-night"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.25} />
            </a>
          </div>
        </div>

        <p className="mt-16 font-serif text-[clamp(3.2rem,13vw,11rem)] font-light italic leading-[0.9] tracking-tight">
          {contact.brand}
        </p>

        <div className="hairline mt-10 opacity-40" />
        <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-night-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {contact.brand} {contact.brandSuffix}. {t.footer.rights}
          </p>
          <p>{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
