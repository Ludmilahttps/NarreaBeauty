import { Clock, Instagram, MapPin, MessageCircle, Navigation } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { generalUrl } from "@/lib/whatsapp";
import { contact } from "@/content/site";
import { Reveal, SectionLabel } from "./Reveal";

export function Contact() {
  const { t, lang } = useLang();
  const c = t.contact;
  const rows = [
    { icon: MapPin, label: c.addressLabel, value: `${contact.address}, ${contact.city}` },
    { icon: Clock, label: c.hoursLabel, value: c.hours },
    { icon: MessageCircle, label: c.phoneLabel, value: contact.phoneDisplay },
  ];
  return (
    <section id="contact" className="grain relative bg-card/50 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel number={c.number} label={c.eyebrow} />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-headline mt-8">
              {c.title1}
              <br />
              <em className="text-primary">{c.title2}</em>
            </h2>
          </Reveal>

          <dl className="mt-12">
            {rows.map((r, i) => (
              <Reveal key={r.label} delay={i * 100} className="flex gap-5 border-t border-champagne/50 py-5">
                <r.icon className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.25} />
                <div>
                  <dt className="text-eyebrow text-muted-foreground">{r.label}</dt>
                  <dd className="mt-1.5 font-serif text-2xl">{r.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={300} className="mt-10 flex flex-wrap gap-3">
            <a
              href={generalUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-3 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-float transition-all duration-500 ease-atelier hover:bg-primary-deep active:scale-[0.97]"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.25} />
              {c.whatsapp}
            </a>
            <a
              href={contact.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-3 rounded-full border border-foreground/25 px-7 text-sm font-medium transition-colors duration-500 hover:border-foreground active:scale-[0.97]"
            >
              <Navigation className="h-4 w-4" strokeWidth={1.25} />
              {c.directions}
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram @${contact.instagram}`}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-foreground/25 transition-colors duration-500 hover:border-foreground active:scale-[0.97]"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.25} />
            </a>
          </Reveal>
        </div>

        <Reveal mask className="shape-arch min-h-[420px] shadow-soft lg:col-span-6 lg:col-start-7">
          <iframe
            title={c.mapTitle}
            src={contact.mapEmbed}
            className="map-warm h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
