"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

interface ProductHighlightsProps {
  highlights: string[];
}

export default function ProductHighlights({ highlights }: ProductHighlightsProps) {
  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6">
      <AnimatedSection animation="fade-up">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
            What&apos;s inside
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1f2a1f] dark:text-white">
            Everything a farmer needs in one app
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection
        animation="stagger"
        stagger
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {highlights.map((highlight) => (
          <article
            key={highlight}
            className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-6 text-center transition-transform hover:-translate-y-1"
          >
            <span className="block text-sm font-semibold text-[#1f2a1f] dark:text-white">
              {highlight}
            </span>
          </article>
        ))}
      </AnimatedSection>
    </section>
  );
}
