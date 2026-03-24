"use client";

import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";

export default function StatsSection({ stats }) {
  return (
    <section className="section shell stats-redesign">
      <AnimatedSection animation="fade-up">
        <div className="stats-redesign-head">
          <p className="eyebrow">Impact metrics</p>
          <h2>Field outcomes across enrollment, distribution, and partner operations</h2>
        </div>
      </AnimatedSection>

      <div className="stats-redesign-grid">
        {stats.map((stat, index) => (
          <AnimatedItem key={stat.label} index={index} baseDelay={100} animation="scale">
            <article className="stats-redesign-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
}
