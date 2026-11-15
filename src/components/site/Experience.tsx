import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { Reveal, SectionLabel } from "./Reveal";

export function Experience() {
  const { t } = useLang();
  const e = t.experience;
  const listRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = listRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.6 - r.top) / r.height;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experience" className="relative bg-night py-24 text-night-foreground md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionLabel number={e.number} label={e.eyebrow} tone="dark" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-headline mt-8">
                {e.title1}
                <br />
                <em className="text-champagne">{e.title2}</em>
              </h2>
            </Reveal>

            <Reveal delay={200} className="mt-14 rounded-2xl border border-champagne/30 p-7">
              <p className="text-eyebrow text-champagne">{e.howTitle}</p>
              <ol className="mt-6 space-y-4">
                {e.how.map((h, i) => (
                  <li key={h} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-champagne/50 font-serif text-sm italic text-champagne">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-night-muted">{h}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-6 lg:col-start-7">
          <span className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-champagne/20" aria-hidden="true" />
          <span
            className="absolute left-[1.15rem] top-2 w-px origin-top bg-champagne"
            style={{ height: `calc((100% - 1rem) * ${progress})` }}
            aria-hidden="true"
          />
          {e.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className="relative grid grid-cols-[2.5rem_1fr] gap-6 pb-14 last:pb-0">
              <span className="relative z-10 flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-full border border-champagne/60 bg-night font-serif text-sm italic text-champagne">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-serif text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-night-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
