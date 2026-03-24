"use client";

import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";

export default function PillarsSection({ pillars, cta }) {
  return (
    <section className="section pillars-redesign">
      <div className="shell">
        <AnimatedSection animation="fade-up">
          <div className="pillars-redesign-head">
            <p className="eyebrow">Operating principles</p>
            <h2>Three pillars shaping every deployment decision</h2>
            <p>{cta.supportingText}</p>
          </div>
        </AnimatedSection>

        <div className="pillar-track">
          {pillars.map((pillar, index) => (
            <AnimatedItem key={pillar.title} index={index} baseDelay={150} animation="fade-up">
              <article className="pillar-track-card">
                <span className="pillar-track-step">0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="pillars-redesign-cta">
            <div>
              <p className="eyebrow">Strategic support</p>
              <h3>{cta.title}</h3>
            </div>
            <a className="button button-light" href={cta.href}>
              Talk to specialists
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
