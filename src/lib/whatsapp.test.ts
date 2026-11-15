import { describe, expect, it } from "vitest";
import { bookingUrl, generalUrl } from "./whatsapp";

describe("WhatsApp booking links", () => {
  it("opens a chat with the salon number +351 935 719 728", () => {
    const url = new URL(bookingUrl("fr", "Manucure traditionnelle", 25));
    expect(url.origin + url.pathname).toBe("https://api.whatsapp.com/send");
    expect(url.searchParams.get("phone")).toBe("351935719728");
  });

  it("asks to book the tapped service and says the visitor came from the site (French)", () => {
    const text = new URL(bookingUrl("fr", "Brow lamination", 40)).searchParams.get("text");
    expect(text).toContain("Brow lamination");
    expect(text).toContain("rendez-vous");
    expect(text).toContain("site");
  });

  it("writes the message in Brazilian Portuguese when the site is in Portuguese", () => {
    const text = new URL(bookingUrl("pt", "Design de sobrancelhas", 15)).searchParams.get("text");
    expect(text).toContain("Gostaria de agendar: Design de sobrancelhas");
    expect(text).toContain("Vim pelo seu site");
  });

  it("general contact link keeps the original French greeting", () => {
    const text = new URL(generalUrl("fr")).searchParams.get("text");
    expect(text).toContain("Bonjour, je souhaiterais obtenir plus d'informations");
  });
});
