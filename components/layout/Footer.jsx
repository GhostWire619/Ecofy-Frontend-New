"use client";

import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";

export default function Footer({ footer }) {
  return (
    <footer className="footer-redesign">
      <div className="shell footer-redesign-grid">
        <AnimatedSection animation="fade-up">
          <section className="footer-redesign-intro">
            <p className="eyebrow">{footer.kicker}</p>
            <h2>{footer.statement}</h2>
          </section>
        </AnimatedSection>

        <AnimatedItem index={1} baseDelay={100} animation="fade-up">
          <section className="footer-redesign-column">
            <h3>Navigate</h3>
            <div className="footer-redesign-links">
              {footer.navigateLinks.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </section>
        </AnimatedItem>

        <AnimatedItem index={2} baseDelay={100} animation="fade-up">
          <section className="footer-redesign-column">
            <h3>Resources</h3>
            <div className="footer-redesign-links">
              {footer.resourceLinks.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </section>
        </AnimatedItem>

        <AnimatedItem index={3} baseDelay={100} animation="fade-up">
          <section className="footer-redesign-column">
            <h3>Connect</h3>
            <div className="footer-redesign-links">
              {footer.connectLinks.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </section>
        </AnimatedItem>
      </div>
      <AnimatedSection animation="fade-up" delay={400}>
        <div className="shell footer-redesign-bottom">
          <p>{footer.copyright}</p>
        </div>
      </AnimatedSection>
    </footer>
  );
}
