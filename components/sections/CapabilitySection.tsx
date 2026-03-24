"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Capability } from "@/lib/site-data";

interface CapabilitySectionProps {
  capability: Capability;
  reversed?: boolean;
}

export default function CapabilitySection({
  capability,
  reversed = false,
}: CapabilitySectionProps) {
  return (
    <section id={capability.id} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <AnimatedSection
            animation={reversed ? "fade-right" : "fade-left"}
            className={reversed ? "lg:order-2" : ""}
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {capability.title}
            </h2>
            <p className="mt-3 text-zinc-500">{capability.tagline}</p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {capability.description}
            </p>
            <ul className="mt-6 space-y-3">
              {capability.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                >
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Image side */}
          <AnimatedSection
            animation={reversed ? "fade-left" : "fade-right"}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={capability.image}
                alt={capability.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
