"use client";

import { useEffect, useState } from "react";

export default function Header({ navigation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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
                  <span className={isSolutionsOpen ? "caret open" : "caret"}>&#9662;</span>
                </button>

                <div className={isSolutionsOpen ? "solutions-panel is-open" : "solutions-panel"}>
                  <div className="solutions-panel-header">
                    <p className="eyebrow">Platform solutions</p>
                    <h3>Tools built for the field</h3>
                    <span>Explore the core products powering Ecofy&apos;s digital ecosystem.</span>
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

            {/* Mobile Menu Toggle */}
            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? "is-open" : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
        <div className="mobile-nav-links">
          {navigation.links.map((item) => (
            <a key={item.label} href={item.href} onClick={handleMobileNavClick}>
              {item.label}
            </a>
          ))}
          {navigation.solutions.map((item) => (
            <a key={item.title} href={item.href} onClick={handleMobileNavClick}>
              {item.title}
            </a>
          ))}
        </div>
        <div className="mobile-nav-cta">
          <a className="button button-primary" href={navigation.cta.href} onClick={handleMobileNavClick}>
            {navigation.cta.label}
          </a>
        </div>
      </nav>
    </>
  );
}
