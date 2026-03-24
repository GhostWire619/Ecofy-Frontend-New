"use client";

import { useState, useEffect } from "react";

const translations: Record<string, { tagline: string }> = {
  en: { tagline: "Actionable intelligence for smallholder farmers" },
  sw: { tagline: "Akili halisi kwa wakulima wadogo" },
};

export default function TopBar() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsLangOpen(false);
    localStorage.setItem("language", lang);
    window.dispatchEvent(new CustomEvent("languageChange", { detail: lang }));
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 dark:bg-black text-zinc-300 h-9">
      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <span className="text-[11px] tracking-wide opacity-70 hidden sm:inline">
          {translations[language].tagline}
        </span>

        <div className="flex items-center gap-3 ml-auto">
          {/* Language Selector */}
          <div className="relative">
            <button
              className="flex items-center gap-1.5 px-2 py-1 text-[11px] rounded-md hover:bg-zinc-800 transition-colors"
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-expanded={isLangOpen}
              aria-label="Select language"
            >
              <span className="w-4 h-3 rounded-sm overflow-hidden inline-flex">
                {language === "en" ? (
                  <svg viewBox="0 0 640 480" className="w-full h-full">
                    <path fill="#012169" d="M0 0h640v480H0z" />
                    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
                    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" />
                    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
                    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 640 480" className="w-full h-full">
                    <defs>
                      <clipPath id="tz-a">
                        <path fillOpacity=".7" d="M-85.3 0h682.6v512H-85.3z" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#tz-a)" transform="translate(80) scale(.9375)">
                      <g fillRule="evenodd" strokeWidth="1pt">
                        <path fill="#09f" d="M-128 0H640v512H-128z" />
                        <path fill="#090" d="M-128 512h768L-128 0v512z" />
                        <path d="M-128 512 640 0v512H-128z" />
                        <path fill="#ff0" d="M640 0H514.8L-128 340.5v85l127 86.5L640 171.8V0z" />
                      </g>
                    </g>
                  </svg>
                )}
              </span>
              <span>{language === "en" ? "EN" : "SW"}</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-1 w-36 rounded-lg border border-zinc-700 bg-zinc-900 shadow-xl overflow-hidden">
                <button
                  className={`flex items-center gap-2 w-full px-3 py-2 text-xs hover:bg-zinc-800 transition-colors ${
                    language === "en" ? "text-white bg-zinc-800" : "text-zinc-400"
                  }`}
                  onClick={() => changeLanguage("en")}
                >
                  <svg viewBox="0 0 640 480" className="w-4 h-3 rounded-sm">
                    <path fill="#012169" d="M0 0h640v480H0z" />
                    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
                    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" />
                    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
                    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
                  </svg>
                  <span>English</span>
                </button>
                <button
                  className={`flex items-center gap-2 w-full px-3 py-2 text-xs hover:bg-zinc-800 transition-colors ${
                    language === "sw" ? "text-white bg-zinc-800" : "text-zinc-400"
                  }`}
                  onClick={() => changeLanguage("sw")}
                >
                  <svg viewBox="0 0 640 480" className="w-4 h-3 rounded-sm">
                    <defs>
                      <clipPath id="tz-b">
                        <path fillOpacity=".7" d="M-85.3 0h682.6v512H-85.3z" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#tz-b)" transform="translate(80) scale(.9375)">
                      <g fillRule="evenodd" strokeWidth="1pt">
                        <path fill="#09f" d="M-128 0H640v512H-128z" />
                        <path fill="#090" d="M-128 512h768L-128 0v512z" />
                        <path d="M-128 512 640 0v512H-128z" />
                        <path fill="#ff0" d="M640 0H514.8L-128 340.5v85l127 86.5L640 171.8V0z" />
                      </g>
                    </g>
                  </svg>
                  <span>Kiswahili</span>
                </button>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            className="relative w-10 h-5 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            onClick={toggleDarkMode}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span
              className={`absolute top-0.5 w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-400 flex items-center justify-center transition-all duration-300 ${
                isDark ? "left-[22px]" : "left-0.5"
              }`}
            >
              {isDark ? (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 text-zinc-800">
                  <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 text-zinc-800">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
