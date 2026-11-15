import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal, SectionLabel } from "./Reveal";

export function Faq() {
  const { t } = useLang();
  const f = t.faq;
  return (
    <section id="faq" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel number={f.number} label={f.eyebrow} />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-headline mt-8">
              {f.title1} <em className="text-primary">{f.title2}</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
          <Accordion.Root type="single" collapsible className="border-t border-foreground/15">
            {f.items.map((item, i) => (
              <Accordion.Item key={item.q} value={`q${i}`} className="border-b border-foreground/15">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left">
                    <span className="font-serif text-2xl leading-snug md:text-[1.75rem]">{item.q}</span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/20 transition-all duration-500 ease-atelier group-data-[state=open]:rotate-45 group-data-[state=open]:border-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                      <Plus className="h-4 w-4" strokeWidth={1.25} />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="max-w-xl pb-7 leading-relaxed text-muted-foreground">{item.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
