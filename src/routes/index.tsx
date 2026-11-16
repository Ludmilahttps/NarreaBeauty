import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { contact } from "@/content/site";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Experience } from "@/components/site/Experience";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";

const TITLE = "Nárrea Rezende Beauty — Ongles, sourcils & épilation à Grenoble";
const DESCRIPTION =
  "Manucure, gel, pédicure, brow lamination et épilation dans un atelier intimiste au 9 Rue Étienne Marcel, Grenoble. Sur rendez-vous via WhatsApp.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Nárrea Rezende Beauty",
  telephone: "+351935719728",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address,
    postalCode: "38000",
    addressLocality: "Grenoble",
    addressCountry: "FR",
  },
  sameAs: [contact.instagramUrl],
  priceRange: "15 € – 60 €",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:locale:alternate", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Experience />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </LanguageProvider>
  );
}
