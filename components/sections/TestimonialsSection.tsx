"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Testimonial } from "@/lib/site-data";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [spotlight, ...stories] = testimonials;

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              Client voices
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent">
              Stories from institutions and entrepreneurs using our platforms
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedSection animation="fade-right" delay={100}>
            <article className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-8 lg:p-10 h-full transition-transform hover:-translate-y-1">
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                &ldquo;{spotlight.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={spotlight.image}
                  alt={spotlight.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <strong className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {spotlight.name}
                  </strong>
                  <span className="block text-xs text-zinc-400 dark:text-zinc-500">
                    {spotlight.location}
                  </span>
                </div>
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection animation="stagger" stagger className="flex flex-col gap-6">
            {stories.map((item) => (
              <article
                key={item.name}
                className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1"
              >
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <strong className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {item.name}
                    </strong>
                    <span className="block text-xs text-zinc-400 dark:text-zinc-500">
                      {item.location}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
