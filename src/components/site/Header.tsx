import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { generalUrl } from "@/lib/whatsapp";
import { contact } from "@/content/site";
import { cn } from "@/lib/utils";
import { LangSwitch } from "./LangSwitch";

export function Header() {
  const { t, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > 240 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#atelier", label: t.nav.about },
    { href: "#prestations", label: t.nav.services },
    { href: "#galerie", label: t.nav.gallery },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-700 ease-atelier",
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/60" : "bg-transparent",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
          <a href="#accueil" className="group flex items-baseline gap-2" aria-label={contact.brand}>
            <span className="font-serif text-2xl italic leading-none md:text-[1.7rem]">{contact.brand}</span>
            <span className="text-eyebrow hidden text-primary sm:inline">{contact.brandSuffix}</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="link-underline text-sm text-foreground/80 hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LangSwitch className="hidden sm:flex" />
            <a
              href="#prestations"
              className="hidden h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform duration-500 ease-atelier hover:-translate-y-0.5 active:scale-[0.97] md:inline-flex"
            >
              {t.nav.book}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 lg:hidden"
              aria-label={t.nav.menu}
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "grain fixed inset-0 z-50 flex flex-col bg-background transition-[clip-path] duration-700 ease-atelier lg:hidden",
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="font-serif text-2xl italic">{contact.brand}</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20"
            aria-label={t.nav.close}
            tabIndex={open ? 0 : -1}
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Menu mobile">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className={cn(
                "flex items-baseline gap-4 border-b border-border/70 py-4 font-serif text-[2.6rem] font-light leading-none transition-all duration-700 ease-atelier",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
              style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
            >
              <span className="font-sans text-xs text-primary">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <LangSwitch className="mt-8 self-start" />
        </nav>
        <div className="px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <a
            href={generalUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground active:scale-[0.97]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.25} />
            {t.contact.whatsapp}
          </a>
        </div>
      </div>
    </>
  );
}
