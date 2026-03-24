"use client";

import { useEffect, useState } from "react";

export default function Hero({ slides }) {
  const [first, second] = slides;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div className={`hero-copy ${isLoaded ? "is-loaded" : ""}`}>
          <p className="eyebrow hero-eyebrow">{first.eyebrow}</p>
          <h1 className="hero-title">
            <span className="text-gradient">{first.title.split(" ").slice(0, 2).join(" ")}</span>{" "}
            {first.title.split(" ").slice(2).join(" ")}
          </h1>
          <p className="hero-text">{first.description}</p>
          <div className="hero-actions">
            <a className="button button-primary magnetic-btn" href={first.primary.href}>
              {first.primary.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a className="button button-secondary" href={first.secondary.href}>
              {first.secondary.label}
            </a>
          </div>
        </div>
        <div className={`hero-visuals ${isLoaded ? "is-loaded" : ""}`}>
          <article className="hero-card hero-card-main hover-lift">
            <img src={first.image} alt={first.title} />
          </article>
          <article className="hero-card hero-card-accent glass-card hover-lift">
            <img src={second.image} alt={second.title} />
            <div>
              <p className="eyebrow">{second.eyebrow}</p>
              <h2>{second.title}</h2>
            </div>
          </article>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`hero-scroll-indicator ${isLoaded ? "is-loaded" : ""}`}>
        <span>Scroll to explore</span>
        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}
