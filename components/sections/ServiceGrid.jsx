"use client";

import { useEffect, useRef, useState } from "react";

export default function ServiceGrid({ services }) {
  const [highlight, ...rest] = services;
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsInView(true);
        
        // Calculate scroll progress within the section
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setScrollProgress(progress);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`section service-redesign ${isInView ? "is-in-view" : ""}`} 
      id="services"
    >
      <div className="shell">
        <div 
          className="service-redesign-head"
          style={{
            opacity: isInView ? 1 : 0,
            transform: `translateY(${isInView ? 0 : 40}px)`,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <p className="eyebrow">Platform suite</p>
          <h2>A modern operating stack for agriculture and rural commerce</h2>
          <p>
            Each module can run standalone or as part of one coordinated product ecosystem.
            The redesign emphasizes system thinking instead of isolated service tiles.
          </p>
        </div>

        <div className="service-redesign-layout">
          {/* Feature Card with parallax effect */}
          <article 
            className="service-feature-card glass-card"
            style={{
              opacity: isInView ? 1 : 0,
              transform: `translateX(${isInView ? 0 : -60}px) translateY(${scrollProgress * -20}px)`,
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease-out"
            }}
          >
            <span className="service-feature-kicker">Spotlight module</span>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
            <a href={highlight.href} className="magnetic-btn">Open module &rarr;</a>
          </article>

          {/* Grid cards with staggered scroll animations */}
          <div className="service-stream-grid">
            {rest.map((service, index) => (
              <article 
                key={service.title} 
                className="service-stream-card hover-lift"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: `
                    translateY(${isInView ? 0 : 50}px) 
                    translateY(${scrollProgress * (index % 2 === 0 ? -15 : 15)}px)
                    scale(${0.95 + scrollProgress * 0.05})
                  `,
                  transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms, transform 0.3s ease-out`
                }}
              >
                <span className="service-stream-index">0{index + 2}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.href}>Details &rarr;</a>
              </article>
            ))}
          </div>
        </div>

        {/* Ticker with scroll-based movement */}
        <div 
          className="service-ticker" 
          aria-label="Service highlights"
          style={{
            opacity: isInView ? 1 : 0,
            transform: `translateX(${scrollProgress * -100}px)`,
            transition: "opacity 0.8s ease, transform 0.1s linear"
          }}
        >
          {services.concat(services).map((service, i) => (
            <span key={`${service.title}-ticker-${i}`}>{service.title}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
