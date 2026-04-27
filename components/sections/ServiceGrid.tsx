"use client";

import { useEffect, useRef, useState } from "react";
import type { Service } from "@/lib/site-data";
import { useSiteContent } from "@/components/providers/site-language-provider";

interface ServiceGridProps {
  services: Service[];
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  const [highlight, ...rest] = services;
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const { ui } = useSiteContent();
  const sectionCopy = ui.serviceGrid;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsInView(true);
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const progress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - sectionTop) / (windowHeight + sectionHeight)
          )
        );
        setScrollProgress(progress);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className="max-w-2xl mb-16 space-y-4"
          style={{
            opacity: isInView ? 1 : 0,
            transform: `translateY(${isInView ? 0 : 40}px)`,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
            {sectionCopy.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1f2a1f] dark:text-white break-words">
            {sectionCopy.title}
          </h2>
          <p className="text-[#3d4a3d] dark:text-zinc-400 leading-relaxed">
            {sectionCopy.description}
          </p>
        </div>

        {/* Layout: feature card + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
          {/* Feature Card with parallax effect */}
          <article
            className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-8 flex flex-col justify-between gap-6"
            style={{
              opacity: isInView ? 1 : 0,
              transform: `translateX(${isInView ? 0 : -60}px) translateY(${scrollProgress * -20}px)`,
              transition:
                "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease-out",
            }}
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
              {sectionCopy.spotlightLabel}
            </span>
            <h3 className="text-2xl font-bold text-[#1f2a1f] dark:text-white">{highlight.title}</h3>
            <p className="text-[#3d4a3d] dark:text-zinc-400 leading-relaxed">
              {highlight.description}
            </p>
            <a
              href={highlight.href}
              className="text-sm font-medium text-[#1f2a1f] dark:text-white hover:underline"
            >
              {sectionCopy.openModuleLabel}
            </a>
          </article>

          {/* Grid cards with staggered scroll animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((service, index) => (
              <article
                key={service.title}
                className="rounded-2xl border border-[#1f2a1f]/10 dark:border-zinc-800 p-6 flex flex-col gap-3 transition-transform hover:-translate-y-1"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: `
                    translateY(${isInView ? 0 : 50}px)
                    translateY(${scrollProgress * (index % 2 === 0 ? -15 : 15)}px)
                    scale(${0.95 + scrollProgress * 0.05})
                  `,
                  transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms, transform 0.3s ease-out`,
                }}
              >
                <span className="text-xs font-bold text-[#c48738]/50 dark:text-zinc-600">
                  0{index + 2}
                </span>
                <h3 className="text-lg font-semibold text-[#1f2a1f] dark:text-white">{service.title}</h3>
                <p className="text-sm text-[#3d4a3d] dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="text-sm font-medium text-[#1f2a1f] dark:text-white hover:underline mt-auto"
                >
                  {sectionCopy.detailsLabel}
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Ticker with scroll-based movement */}
        <div
          className="flex gap-8 mt-16 overflow-hidden text-2xl font-bold text-[#c48738]/20 dark:text-zinc-800 whitespace-nowrap select-none"
          aria-label={sectionCopy.tickerAriaLabel}
          style={{
            opacity: isInView ? 1 : 0,
            transform: `translateX(${scrollProgress * -100}px)`,
            transition: "opacity 0.8s ease, transform 0.1s linear",
          }}
        >
          {services.concat(services).map((service, i) => (
            <span key={`${service.title}-ticker-${i}`} className="shrink-0">
              {service.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
