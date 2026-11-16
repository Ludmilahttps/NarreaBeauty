import { useMemo, useState } from "react";
import { Instagram } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { contact, gallery } from "@/content/site";
import { images } from "@/content/images";
import { cn } from "@/lib/utils";
import { Reveal, SectionLabel } from "./Reveal";
import { Lightbox } from "./Lightbox";
import { BeforeAfter } from "./BeforeAfter";

type Filter = "all" | "ongles" | "sourcils";

export function Gallery() {
  const { t, lang } = useLang();
  const g = t.gallery;
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(() => (filter === "all" ? gallery : gallery.filter((x) => x.kind === filter)), [filter]);
  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: g.all },
    { id: "ongles", label: g.nails },
    { id: "sourcils", label: g.brows },
  ];

  return (
    <section id="galerie" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel number={g.number} label={g.eyebrow} />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-headline mt-8">
                {g.title1}
                <br />
                <em className="text-primary">{g.title2}</em>
              </h2>
            </Reveal>
          </div>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "h-11 rounded-full border px-5 text-sm transition-all duration-500 ease-atelier active:scale-[0.97]",
                  filter === f.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/20 text-foreground/70 hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 columns-2 gap-3 md:columns-3 md:gap-5">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`${g.open} — ${item.alt[lang]}`}
              className={cn(
                "group animate-in fade-in zoom-in-95 mb-3 block w-full break-inside-avoid overflow-hidden duration-700 md:mb-5",
                i % 3 === 0 ? "rounded-[2rem_0.5rem_2rem_0.5rem]" : i % 3 === 1 ? "rounded-t-full rounded-b-2xl" : "rounded-2xl",
              )}
              style={{ aspectRatio: item.ratio }}
            >
              <img
                src={item.src}
                alt={item.alt[lang]}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 ease-atelier group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {/* Before / after */}
        <div className="mt-24 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-eyebrow text-primary">{g.beforeAfter}</p>
            <h3 className="mt-4 font-serif text-4xl font-light md:text-5xl">{g.beforeAfterTitle}</h3>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-medium"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.25} />
              {g.instagram} — @{contact.instagram}
            </a>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
            <Reveal>
              <BeforeAfter
                src={images.brows1}
                ratio="1086 / 683"
                beforeLabel={g.before}
                afterLabel={g.after}
                hint={g.beforeAfterHint}
                alt={gallery[1]?.alt[lang] ?? g.beforeAfterTitle}
              />
            </Reveal>
            <Reveal delay={150}>
              <BeforeAfter
                src={images.brows2}
                ratio="1440 / 720"
                beforeLabel={g.before}
                afterLabel={g.after}
                hint={g.beforeAfterHint}
                alt={gallery[4]?.alt[lang] ?? g.beforeAfterTitle}
              />
            </Reveal>
          </div>
        </div>
      </div>

      <Lightbox
        items={items.map((x) => ({ src: x.src, alt: x.alt[lang] }))}
        index={open}
        onChange={setOpen}
        labels={{ prev: g.prev, next: g.next, close: g.close }}
      />
    </section>
  );
}
