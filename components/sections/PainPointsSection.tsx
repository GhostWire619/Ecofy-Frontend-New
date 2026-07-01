"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { useSiteContent } from "@/components/providers/site-language-provider";

export default function PainPointsSection() {
  const { painPoints, ui } = useSiteContent();
  const copy = ui.painPointsSection;

  return (
    <section className="bg-[#f4f1ea] py-16 dark:bg-zinc-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection animation="fade-up">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#4d6b2f] dark:text-indigo-400">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2a1f] dark:text-white sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d4a3d] dark:text-zinc-400">
              {copy.description}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          animation="stagger"
          stagger
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {painPoints.map((point, index) => (
            <article
              key={point.title}
              className="rounded-2xl border border-[#1f2a1f]/10 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c48738]/15 text-sm font-bold text-[#7a4d18] dark:text-amber-300">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-[#1f2a1f] dark:text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3d4a3d] dark:text-zinc-400">
                {point.description}
              </p>
            </article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
