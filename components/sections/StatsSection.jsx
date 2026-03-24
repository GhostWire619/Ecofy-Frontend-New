"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function StatsSection({ stats }) {
  return (
    <section className="section shell stats-redesign">
      <AnimatedSection animation="fade-up">
        <div className="stats-redesign-head">
          <p className="eyebrow">Impact metrics</p>
          <h2>Field outcomes across enrollment, distribution, and partner operations</h2>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="stagger" stagger className="stats-redesign-grid">
        {stats.map((stat) => (
          <article key={stat.label} className="stats-redesign-card hover-lift glass-card">
            <strong className="text-gradient">{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </AnimatedSection>
    </section>
  );
}
