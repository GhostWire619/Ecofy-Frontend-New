"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultSiteLocale,
  getSiteContent,
  isSiteLocale,
  type SiteContent,
  type SiteLocale,
} from "@/lib/site-data";

const STORAGE_KEY = "site-language";

interface SiteLanguageContextValue {
  locale: SiteLocale;
  setLocale: (locale: SiteLocale) => void;
  content: SiteContent;
}

const SiteLanguageContext = createContext<SiteLanguageContextValue | null>(null);

export function SiteLanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SiteLocale>(defaultSiteLocale);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isSiteLocale(stored)) {
        setLocaleState(stored);
        return;
      }

      const documentLang = document.documentElement.lang;
      if (isSiteLocale(documentLang)) {
        setLocaleState(documentLang);
        return;
      }

      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("sw")) {
        setLocaleState("sw");
      }
    } catch {
      // Ignore storage and browser-language access issues in restricted environments.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.language = locale;

    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Ignore write failures in restricted environments.
    }
  }, [locale]);

  const setLocale = useCallback((nextLocale: SiteLocale) => {
    setLocaleState(nextLocale);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      content: getSiteContent(locale),
    }),
    [locale, setLocale],
  );

  return <SiteLanguageContext.Provider value={value}>{children}</SiteLanguageContext.Provider>;
}

export function useSiteLanguage() {
  const context = useContext(SiteLanguageContext);

  if (!context) {
    throw new Error("useSiteLanguage must be used within SiteLanguageProvider.");
  }

  return context;
}

export function useSiteContent() {
  return useSiteLanguage().content;
}

