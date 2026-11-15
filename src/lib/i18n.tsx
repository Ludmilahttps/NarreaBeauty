import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./whatsapp";
import { dictionary, type Dictionary } from "@/content/site";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dictionary };

const LangContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "nr-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // French is the primary language; the stored choice is applied after hydration.
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "fr") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "fr";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t: dictionary[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
