"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Testimonial } from "@/lib/site-data";
import { useSiteContent } from "@/components/providers/site-language-provider";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [spotlight, ...stories] = testimonials;
  const { ui } = useSiteContent();
  const sectionCopy = ui.testimonialsSection;

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
              {sectionCopy.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1f2a1f] dark:text-white break-words">
              {sectionCopy.title}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedSection animation="fade-right" delay={100}>
            <article className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-8 lg:p-10 h-full transition-transform hover:-translate-y-1">
              <p className="text-lg leading-relaxed text-[#3d4a3d] dark:text-zinc-300">
                &ldquo;{spotlight.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={spotlight.image}
                  alt={spotlight.name}
                  width={48}
                  height={48}
                  sizes="48px"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <strong className="block text-sm font-semibold text-[#1f2a1f] dark:text-zinc-200">
                    {spotlight.name}
                  </strong>
                  <span className="block text-xs text-[#4d6b2f] dark:text-indigo-400">
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
                className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1"
              >
                <p className="text-sm leading-relaxed text-[#3d4a3d] dark:text-zinc-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    sizes="40px"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <strong className="block text-sm font-semibold text-[#1f2a1f] dark:text-zinc-200">
                      {item.name}
                    </strong>
                    <span className="block text-xs text-[#4d6b2f] dark:text-indigo-400">
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
