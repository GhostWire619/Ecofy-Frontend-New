"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Pillar, CTA } from "@/lib/site-data";

interface PillarsSectionProps {
  pillars: Pillar[];
  cta: CTA;
}

export default function PillarsSection({ pillars, cta }: PillarsSectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection animation="fade-up">
          <div className="max-w-2xl mb-16 space-y-4">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1f2a1f] dark:text-white">
              Three pillars powering every farming decision
            </h2>
            <p className="text-[#3d4a3d] dark:text-zinc-400 leading-relaxed">
              {cta.supportingText}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          animation="stagger"
          stagger
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-8 flex flex-col gap-4 transition-transform hover:-translate-y-1"
            >
              <span className="text-5xl font-black text-[#c48738]/30 dark:text-zinc-800">
                0{index + 1}
              </span>
              <h3 className="text-xl font-bold text-[#1f2a1f] dark:text-white">{pillar.title}</h3>
              <p className="text-sm text-[#3d4a3d] dark:text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </article>
          ))}
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={400}>
          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-[#1f2a1f]/10 dark:border-zinc-800 p-8">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
                Get started
              </p>
              <h3 className="text-xl font-bold text-[#1f2a1f] dark:text-white">{cta.title}</h3>
            </div>
            <a
              className="inline-flex px-6 py-3 border border-[#1f2a1f]/20 dark:border-zinc-700 rounded-xl font-medium text-[#1f2a1f] dark:text-white hover:bg-[#f0f0f0] dark:hover:bg-zinc-800 transition no-underline shrink-0"
              href={cta.href}
            >
              Learn more &rarr;
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
