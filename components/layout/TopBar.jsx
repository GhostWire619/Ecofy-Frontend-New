"use client";

import { useState, useEffect } from "react";

const translations = {
  en: {
    tagline: "Digital growth tools for modern farmers",
  },
  sw: {
    tagline: "Zana za kidijitali kwa wakulima wa kisasa",
  },
};

export default function TopBar() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    }

    // Scroll progress handler
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
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

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLangOpen(false);
    localStorage.setItem("language", lang);
    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent("languageChange", { detail: lang }));
  };

  return (
    <div className="top-bar">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="top-bar-content shell">
        <span className="top-bar-tagline">{translations[language].tagline}</span>
        
        <div className="top-bar-actions">
          {/* Language Selector */}
          <div className="lang-selector">
            <button 
              className="lang-trigger"
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-expanded={isLangOpen}
              aria-label="Select language"
            >
              <span className="lang-flag">
                {language === "en" ? (
                  <svg viewBox="0 0 640 480" className="flag-icon">
                    <path fill="#012169" d="M0 0h640v480H0z"/>
                    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 640 480" className="flag-icon">
                    <defs>
                      <clipPath id="tz-a">
                        <path fillOpacity=".7" d="M-85.3 0h682.6v512H-85.3z"/>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#tz-a)" transform="translate(80) scale(.9375)">
                      <g fillRule="evenodd" strokeWidth="1pt">
                        <path fill="#09f" d="M-128 0H640v512H-128z"/>
                        <path fill="#090" d="M-128 512h768L-128 0v512z"/>
                        <path d="M-128 512 640 0v512H-128z"/>
                        <path fill="#ff0" d="M640 0H514.8L-128 340.5v85l127 86.5L640 171.8V0z"/>
                      </g>
                    </g>
                  </svg>
                )}
              </span>
              <span className="lang-code">{language === "en" ? "EN" : "SW"}</span>
              <svg className={`lang-caret ${isLangOpen ? "open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            
            {isLangOpen && (
              <div className="lang-dropdown">
                <button 
                  className={`lang-option ${language === "en" ? "active" : ""}`}
                  onClick={() => changeLanguage("en")}
                >
                  <svg viewBox="0 0 640 480" className="flag-icon">
                    <path fill="#012169" d="M0 0h640v480H0z"/>
                    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                  </svg>
                  <span>English</span>
                </button>
                <button 
                  className={`lang-option ${language === "sw" ? "active" : ""}`}
                  onClick={() => changeLanguage("sw")}
                >
                  <svg viewBox="0 0 640 480" className="flag-icon">
                    <defs>
                      <clipPath id="tz-b">
                        <path fillOpacity=".7" d="M-85.3 0h682.6v512H-85.3z"/>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#tz-b)" transform="translate(80) scale(.9375)">
                      <g fillRule="evenodd" strokeWidth="1pt">
                        <path fill="#09f" d="M-128 0H640v512H-128z"/>
                        <path fill="#090" d="M-128 512h768L-128 0v512z"/>
                        <path d="M-128 512 640 0v512H-128z"/>
                        <path fill="#ff0" d="M640 0H514.8L-128 340.5v85l127 86.5L640 171.8V0z"/>
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
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="toggle-track">
              <span className={`toggle-thumb ${isDark ? "dark" : ""}`}>
                {isDark ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="toggle-icon">
                    <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="toggle-icon">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                  </svg>
                )}
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
