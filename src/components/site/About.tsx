import { useLang } from "@/lib/i18n";
import { images } from "@/content/images";
import { Reveal, SectionLabel } from "./Reveal";

export function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section id="atelier" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-5">
          <Reveal mask className="shape-arch aspect-[3/4] w-[85%] shadow-soft">
            <img
              src={images.nailsLavender}
              alt="Ongles amande lavande ornés de fleurs séchées"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal
            delay={250}
            className="absolute -bottom-10 right-0 w-[62%] rounded-2xl border border-champagne/60 bg-background p-6 shadow-soft md:p-8"
          >
            <p className="font-serif text-xl italic leading-snug md:text-2xl">« {a.quote} »</p>
            <p className="text-eyebrow mt-4 text-primary">— Nárrea</p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
          <Reveal>
            <SectionLabel number={a.number} label={a.eyebrow} />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-headline mt-8">
              {a.title1}
              <br />
              <em className="text-primary">{a.title2}</em>
            </h2>
          </Reveal>
          <Reveal delay={200} className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>{a.p1}</p>
            <p>{a.p2}</p>
          </Reveal>

          <ol className="mt-14 space-y-0">
            {a.pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 120} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-champagne/50 py-6">
                <span className="font-serif text-2xl italic text-primary">0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
