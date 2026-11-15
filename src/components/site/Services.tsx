import { useMemo, useState } from "react";
import { ArrowUpRight, Gift } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { bookingUrl } from "@/lib/whatsapp";
import { categories, services, type CategoryId } from "@/content/site";
import { cn } from "@/lib/utils";
import { Reveal, SectionLabel } from "./Reveal";

type Filter = CategoryId | "all";

export function Services() {
  const { t, lang } = useLang();
  const s = t.services;
  const [filter, setFilter] = useState<Filter>("all");
  const [hovered, setHovered] = useState<CategoryId | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? services : services.filter((x) => x.category === filter)),
    [filter],
  );

  const activeCat = hovered ?? (filter === "all" ? "offres" : filter);
  const catById = Object.fromEntries(categories.map((c) => [c.id, c]));

  return (
    <section id="prestations" className="grain relative bg-card/50 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel number={s.number} label={s.eyebrow} />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-headline mt-8">
                {s.title1} <em className="text-primary">{s.title2}</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="self-end lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-muted-foreground">{s.intro}</p>
          </Reveal>
        </div>

        {/* Category tabs */}
        <div className="-mx-5 mt-14 overflow-x-auto px-5 md:mx-0 md:px-0" role="tablist" aria-label={s.eyebrow}>
          <div className="flex w-max gap-2">
            {[{ id: "all" as const, label: s.all }, ...categories.map((c) => ({ id: c.id, label: c.label[lang] }))].map(
              (c) => (
                <button
                  key={c.id}
                  role="tab"
                  type="button"
                  aria-selected={filter === c.id}
                  onClick={() => setFilter(c.id)}
                  className={cn(
                    "h-11 rounded-full border px-5 text-sm transition-all duration-500 ease-atelier active:scale-[0.97]",
                    filter === c.id
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/20 text-foreground/70 hover:border-foreground/50 hover:text-foreground",
                  )}
                >
                  {c.label}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sticky image that follows the hovered category */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28">
              <div className="shape-leaf relative aspect-[4/5] shadow-soft">
                {categories.map((c) => (
                  <img
                    key={c.id}
                    src={c.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-atelier",
                      activeCat === c.id ? "scale-100 opacity-100" : "scale-105 opacity-0",
                    )}
                  />
                ))}
              </div>
              <p className="mt-5 font-serif text-3xl italic">{catById[activeCat].label[lang]}</p>
            </div>
          </div>

          <ul className="lg:col-span-8">
            {visible.map((item, i) => (
              <li key={item.id} className="border-t border-foreground/15 last:border-b">
                <a
                  href={bookingUrl(lang, item.name[lang], item.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHovered(item.category)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(item.category)}
                  className="group grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-6 transition-colors duration-500 hover:bg-background/60 md:grid-cols-[3rem_1fr_auto_auto] md:gap-6 md:px-4 md:py-8"
                  aria-label={`${s.book} — ${item.name[lang]} — ${item.price} €`}
                >
                  <span className="shape-pill h-16 w-14 md:hidden">
                    <img src={catById[item.category].image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </span>
                  <span className="hidden font-serif text-xl italic text-primary md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0">
                    <span className="block font-serif text-2xl leading-tight transition-transform duration-500 ease-atelier group-hover:translate-x-1 md:text-[2rem]">
                      {item.name[lang]}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">{item.desc[lang]}</span>
                    {item.gift && (
                      <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                        <Gift className="h-3.5 w-3.5" strokeWidth={1.25} />
                        {s.gift}
                      </span>
                    )}
                    <span className="mt-2 flex items-baseline gap-2 md:hidden">
                      <span className="font-serif text-2xl">{item.price} €</span>
                      {item.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">{item.oldPrice} €</span>
                      )}
                    </span>
                  </span>

                  <span className="hidden text-right md:block">
                    <span className="block font-serif text-3xl">{item.price} €</span>
                    {item.oldPrice && (
                      <span className="block text-sm text-muted-foreground line-through">{item.oldPrice} €</span>
                    )}
                  </span>

                  <span className="flex flex-col items-center gap-1">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/25 transition-all duration-500 ease-atelier group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-5 w-5" strokeWidth={1.25} />
                    </span>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground group-hover:text-primary">
                      {s.book}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
