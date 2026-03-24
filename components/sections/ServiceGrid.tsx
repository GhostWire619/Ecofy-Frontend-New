"use client";

import { useEffect, useRef, useState } from "react";
import type { Service } from "@/lib/site-data";

interface ServiceGridProps {
  services: Service[];
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  const [highlight, ...rest] = services;
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsInView(true);

        // Calculate scroll progress within the section
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
    handleScroll(); // Initial check

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
          <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            Platform suite
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A modern operating stack for agriculture and rural commerce
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Each module can run standalone or as part of one coordinated product
            ecosystem. The redesign emphasizes system thinking instead of
            isolated service tiles.
          </p>
        </div>

        {/* Layout: feature card + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
          {/* Feature Card with parallax effect */}
          <article
            className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-8 flex flex-col justify-between gap-6"
            style={{
              opacity: isInView ? 1 : 0,
              transform: `translateX(${isInView ? 0 : -60}px) translateY(${scrollProgress * -20}px)`,
              transition:
                "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease-out",
            }}
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              Spotlight module
            </span>
            <h3 className="text-2xl font-bold">{highlight.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {highlight.description}
            </p>
            <a
              href={highlight.href}
              className="text-sm font-medium hover:underline"
            >
              Open module &rarr;
            </a>
          </article>

          {/* Grid cards with staggered scroll animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((service, index) => (
              <article
                key={service.title}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-3 transition-transform hover:-translate-y-1"
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
                <span className="text-xs font-bold text-zinc-300 dark:text-zinc-600">
                  0{index + 2}
                </span>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="text-sm font-medium hover:underline mt-auto"
                >
                  Details &rarr;
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Ticker with scroll-based movement */}
        <div
          className="flex gap-8 mt-16 overflow-hidden text-2xl font-bold text-zinc-200 dark:text-zinc-800 whitespace-nowrap select-none"
          aria-label="Service highlights"
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
