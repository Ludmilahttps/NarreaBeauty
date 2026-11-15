import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { images } from "@/content/images";

function Seal({ text }: { text: string }) {
  return (
    <div className="relative h-28 w-28 md:h-36 md:w-36">
      <svg viewBox="0 0 200 200" className="animate-spin-slow h-full w-full" aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="98" className="fill-background" />
        <text className="fill-foreground font-sans text-[13px] font-semibold">
          <textPath href="#seal-circle" textLength="486" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-serif text-3xl italic text-primary">N</span>
    </div>
  );
}

export function Hero() {
  const { t } = useLang();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const onScroll = () => setOffset(mq.matches ? window.scrollY : 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="accueil" className="grain relative overflow-hidden pt-24 md:pt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-16 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="text-eyebrow animate-fade-up text-muted-foreground" style={{ animationDelay: "100ms" }}>
            {t.hero.eyebrow}
          </p>

          <h1 className="text-display mt-6 md:mt-8">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="animate-rise block" style={{ animationDelay: "150ms" }}>
                {t.hero.line1}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="animate-rise block" style={{ animationDelay: "270ms" }}>
                {t.hero.line2} <em className="text-primary">{t.hero.accent}</em>
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="animate-rise block pl-[12%]" style={{ animationDelay: "390ms" }}>
                {t.hero.line3}
              </span>
            </span>
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "600ms" }}
          >
            {t.hero.sub}
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-6" style={{ animationDelay: "750ms" }}>
            <a
              href="#prestations"
              className="inline-flex h-14 items-center rounded-full bg-primary px-8 text-sm font-medium tracking-wide text-primary-foreground shadow-float transition-all duration-500 ease-atelier hover:-translate-y-0.5 hover:bg-primary-deep active:scale-[0.97]"
            >
              {t.hero.cta}
            </a>
            <a href="#galerie" className="link-underline text-sm font-medium">
              {t.hero.secondary}
            </a>
          </div>
        </div>

        {/* Image composition */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="animate-unveil shape-arch relative ml-auto aspect-[4/5] w-[82%] shadow-soft" style={{ animationDelay: "200ms" }}>
            <img
              src={images.nailsFrench}
              alt="French manucure délicate avec marguerites peintes"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div
            className="animate-unveil shape-pill absolute -bottom-6 left-0 aspect-[3/5] w-[38%] border-[6px] border-background shadow-soft"
            style={{ animationDelay: "500ms", transform: `translateY(${-offset * 0.08}px)` }}
          >
            <img src={images.nailsBurgundy} alt="Ongles courts vernis bordeaux" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -top-4 left-[6%] md:-top-6">
            <Seal text={t.hero.seal} />
          </div>
          <span className="text-eyebrow absolute -right-1 bottom-10 hidden origin-bottom-right -rotate-90 text-muted-foreground lg:block">
            Grenoble — 38000
          </span>
        </div>
      </div>

      <a
        href="#atelier"
        className="text-eyebrow mx-auto mb-6 hidden w-fit items-center gap-3 text-muted-foreground md:flex"
        aria-label={t.hero.scroll}
      >
        <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.25} />
        {t.hero.scroll}
      </a>

      {/* Marquee */}
      <div className="border-y border-border bg-card/60 py-5" aria-hidden="true">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10">
            {[...t.marquee, ...t.marquee, ...t.marquee, ...t.marquee].map((w, i) => (
              <span key={i} className="flex items-center gap-10 font-serif text-2xl italic md:text-3xl">
                {w}
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
