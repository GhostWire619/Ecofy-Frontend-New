"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function PartnersSection({ partners }) {
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="logo-marquee-section">
      <div className="shell">
        <AnimatedSection animation="fade-up">
          <div className="section-heading logo-marquee-heading">
            <p className="eyebrow">Trusted by institutions across finance, government, and development</p>
          </div>
        </AnimatedSection>
      </div>
      <div className="logo-marquee-shell">
        <div className="logo-marquee-track">
          {marqueePartners.map((partner, index) => (
            <article
              key={`${partner.name}-${index}`}
              className="logo-marquee-item"
              title={partner.name}
            >
              <img src={partner.logo} alt={partner.name} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
