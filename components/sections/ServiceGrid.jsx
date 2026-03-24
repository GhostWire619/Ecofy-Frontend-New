"use client";

import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";

export default function ServiceGrid({ services }) {
  const [highlight, ...rest] = services;

  return (
    <section className="section shell service-redesign" id="services">
      <AnimatedSection animation="fade-up">
        <div className="service-redesign-head">
          <p className="eyebrow">Platform suite</p>
          <h2>A modern operating stack for agriculture and rural commerce</h2>
          <p>
            Each module can run standalone or as part of one coordinated product ecosystem.
            The redesign emphasizes system thinking instead of isolated service tiles.
          </p>
        </div>
      </AnimatedSection>

      <div className="service-redesign-layout">
        <AnimatedSection animation="fade-right" delay={100}>
          <article className="service-feature-card">
            <span className="service-feature-kicker">Spotlight module</span>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
            <a href={highlight.href}>Open module</a>
          </article>
        </AnimatedSection>

        <div className="service-stream-grid">
          {rest.map((service, index) => (
            <AnimatedItem key={service.title} index={index} baseDelay={150} animation="fade-up">
              <article className="service-stream-card">
                <span className="service-stream-index">0{index + 2}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.href}>Details</a>
              </article>
            </AnimatedItem>
          ))}
        </div>
      </div>

      <AnimatedSection animation="fade-up" delay={300}>
        <div className="service-ticker" aria-label="Service highlights">
          {services.map((service) => (
            <span key={`${service.title}-ticker`}>{service.title}</span>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
