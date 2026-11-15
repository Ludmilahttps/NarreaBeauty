import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { generalUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function FloatingCta() {
  const { t, lang } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={generalUrl(lang)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex h-14 items-center gap-3 rounded-full bg-primary pl-5 pr-6 text-sm font-medium text-primary-foreground shadow-float transition-all duration-700 ease-atelier hover:bg-primary-deep active:scale-[0.97] md:right-8 md:bottom-8",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
      tabIndex={show ? 0 : -1}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.25} />
      {t.floating}
    </a>
  );
}
