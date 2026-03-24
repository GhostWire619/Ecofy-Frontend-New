"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TestimonialsSection({ testimonials }) {
  const [spotlight, ...stories] = testimonials;

  return (
    <section className="section testimonial-redesign">
      <div className="shell">
        <AnimatedSection animation="fade-up">
          <div className="testimonial-redesign-head">
            <p className="eyebrow">Client voices</p>
            <h2>Stories from institutions and entrepreneurs using our platforms</h2>
          </div>
        </AnimatedSection>

        <div className="testimonial-redesign-grid">
          <AnimatedSection animation="fade-right" delay={100}>
            <article className="testimonial-spotlight glass-card hover-lift">
              <p>&ldquo;{spotlight.quote}&rdquo;</p>
              <div className="testimonial-person">
                <img src={spotlight.image} alt={spotlight.name} />
                <div>
                  <strong>{spotlight.name}</strong>
                  <span>{spotlight.location}</span>
                </div>
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection animation="stagger" stagger className="testimonial-stack">
            {stories.map((item) => (
              <article key={item.name} className="testimonial-story glass-card hover-lift">
                <p>&ldquo;{item.quote}&rdquo;</p>
                <div className="testimonial-person">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
