"use client";

import { useEffect, useState } from "react";

export default function PartnersSection({ partners }) {
  const [isVisible, setIsVisible] = useState(false);
  const marqueePartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="partners-strip">
      <div className="partners-track-wrapper">
        <div className={`partners-track ${isVisible ? "is-scrolling" : ""}`}>
          {marqueePartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="partner-logo"
              title={partner.name}
            >
              <img src={partner.logo} alt={partner.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
