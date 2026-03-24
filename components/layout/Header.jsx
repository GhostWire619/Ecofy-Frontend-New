"use client";

import { useEffect, useState } from "react";

export default function Header({ navigation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={isScrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="site-header-shell shell">
        <div className={isScrolled ? "navbar navbar-floating" : "navbar navbar-hero"}>
          <a className="brand" href="/">
            <span className="brand-mark">E</span>
            <div>
              <strong>{navigation.name}</strong>
              <span>{navigation.subtitle}</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navigation.links.slice(0, 3).map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}

            <div
              className="nav-dropdown"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                className="nav-dropdown-trigger"
                type="button"
                aria-expanded={isSolutionsOpen}
                onClick={() => setIsSolutionsOpen((open) => !open)}
              >
                Solutions
                <span className={isSolutionsOpen ? "caret open" : "caret"}>▾</span>
              </button>

              <div className={isSolutionsOpen ? "solutions-panel is-open" : "solutions-panel"}>
                <div className="solutions-panel-header">
                  <p className="eyebrow">Platform solutions</p>
                  <h3>Tools built for the field</h3>
                  <span>Explore the core products powering Ecofy's digital ecosystem.</span>
                </div>
                <div className="solutions-grid">
                  {navigation.solutions.map((item) => (
                    <a key={item.title} className="solution-card" href={item.href}>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </a>
                  ))}
                </div>
                <a className="solutions-footer-link" href="#services">
                  View all solutions
                </a>
              </div>
            </div>

            {navigation.links.slice(3).map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className={isScrolled ? "button button-dark" : "button button-light"} href={navigation.cta.href}>
            {navigation.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
