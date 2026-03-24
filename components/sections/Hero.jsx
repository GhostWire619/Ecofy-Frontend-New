"use client";

import { useEffect, useState } from "react";

export default function Hero({ slides }) {
  const [first, second] = slides;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div className={`hero-copy ${isLoaded ? "anim-fade-right is-visible" : "anim-fade-right"}`}>
          <p className="eyebrow">{first.eyebrow}</p>
          <h1>{first.title}</h1>
          <p className="hero-text">{first.description}</p>
          <div 
            className="hero-actions"
            style={{ 
              opacity: isLoaded ? 1 : 0, 
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s" 
            }}
          >
            <a className="button button-primary" href={first.primary.href}>
              {first.primary.label}
            </a>
            <a className="button button-secondary" href={first.secondary.href}>
              {first.secondary.label}
            </a>
          </div>
        </div>
        <div 
          className="hero-visuals"
          style={{ 
            opacity: isLoaded ? 1 : 0, 
            transform: isLoaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s" 
          }}
        >
          <article className="hero-card hero-card-main">
            <img src={first.image} alt={first.title} />
          </article>
          <article 
            className="hero-card hero-card-accent"
            style={{ 
              opacity: isLoaded ? 1 : 0, 
              transform: isLoaded ? "translate(0, 0)" : "translate(20px, 20px)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s" 
            }}
          >
            <img src={second.image} alt={second.title} />
            <div>
              <p className="eyebrow">{second.eyebrow}</p>
              <h2>{second.title}</h2>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
