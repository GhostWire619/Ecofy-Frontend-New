"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Stat } from "@/lib/site-data";

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6">
      <AnimatedSection animation="fade-up">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            Impact metrics
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent">
            Field outcomes across enrollment, distribution, and partner operations
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="stagger" stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-8 text-center transition-transform hover:-translate-y-1"
          >
            <strong className="block text-4xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent">
              {stat.value}
            </strong>
            <span className="mt-2 block text-sm text-zinc-500 dark:text-zinc-400">
              {stat.label}
            </span>
          </article>
        ))}
      </AnimatedSection>
    </section>
  );
}
