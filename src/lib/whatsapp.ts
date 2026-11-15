export const WHATSAPP_PHONE = "351935719728";

export type Lang = "fr" | "pt";

export function whatsappUrl(text: string): string {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
}

/** Message sent when a visitor taps a specific service on the site. */
export function bookingMessage(lang: Lang, serviceName: string, price: number): string {
  return lang === "pt"
    ? `Olá, Nárrea! Gostaria de agendar: ${serviceName} (${price} €). Vim pelo seu site 🤗`
    : `Bonjour Nárrea ! Je souhaiterais prendre rendez-vous pour : ${serviceName} (${price} €). Je vous contacte depuis votre site 🤗`;
}

/** Generic message for "contact" buttons that are not tied to a service. */
export function generalMessage(lang: Lang): string {
  return lang === "pt"
    ? "Olá! Gostaria de mais informações 🤗 Vim pelo seu site."
    : "Bonjour, je souhaiterais obtenir plus d'informations 🤗 Je viens de votre site.";
}

export const bookingUrl = (lang: Lang, serviceName: string, price: number) =>
  whatsappUrl(bookingMessage(lang, serviceName, price));

export const generalUrl = (lang: Lang) => whatsappUrl(generalMessage(lang));
