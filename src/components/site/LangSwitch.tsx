import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/whatsapp";

const options: { id: Lang; label: string; title: string }[] = [
  { id: "fr", label: "FR", title: "Français" },
  { id: "pt", label: "PT", title: "Português (Brasil)" },
];

export function LangSwitch({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  return (
    <div
      role="group"
      aria-label={t.langLabel}
      className={cn("flex items-center rounded-full border border-foreground/15 p-1 text-xs font-semibold tracking-[0.18em]", className)}
    >
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          title={o.title}
          aria-pressed={lang === o.id}
          onClick={() => setLang(o.id)}
          className={cn(
            "h-9 min-w-11 rounded-full px-3 transition-colors duration-500",
            lang === o.id ? "bg-foreground text-background" : "text-foreground/60 hover:text-foreground",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
