"use client";

import { useEffect, useState } from "react";
import type { Partner } from "@/lib/site-data";

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const marqueePartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-10 overflow-hidden">
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className={`flex w-max gap-12 ${
            isVisible ? "animate-marquee" : ""
          }`}
        >
          {marqueePartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
