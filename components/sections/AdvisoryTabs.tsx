"use client";

import { useState } from "react";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import type { AdvisoryArea } from "@/lib/site-data";

interface AdvisoryTabsProps {
  areas: AdvisoryArea[];
}

export default function AdvisoryTabs({ areas }: AdvisoryTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = areas[activeIndex];

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6">
      <AnimatedSection animation="fade-up">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            Advisory studio
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent">
            Navigate advisory capabilities like a product console
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Switch between domains to preview the outcomes and delivery focus for each advisory
            stream.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        <div className="flex flex-col gap-3" role="tablist" aria-label="Advisory areas">
          {areas.map((area, index) => (
            <AnimatedItem key={area.title} index={index} baseDelay={100} animation="fade-right">
              <button
                className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border transition-all ${
                  index === activeIndex
                    ? "backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border-zinc-200/10 dark:border-zinc-800/50 shadow-lg"
                    : "border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800/40"
                }`}
                onClick={() => setActiveIndex(index)}
                role="tab"
                aria-selected={index === activeIndex}
                type="button"
              >
                <span className="text-xs font-mono text-zinc-400">0{index + 1}</span>
                <strong className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {area.title}
                </strong>
              </button>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedSection animation="fade-left" delay={200}>
          <article
            className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2"
            role="tabpanel"
          >
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                Current focus
              </p>
              <h3 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-white">
                {activeArea.title}
              </h3>
              <p className="mt-3 text-zinc-500 dark:text-zinc-400">{activeArea.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Sector intelligence", "Execution frameworks", "Delivery partnership"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative aspect-[4/3] md:aspect-auto">
              <img
                src={activeArea.image}
                alt={activeArea.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </article>
        </AnimatedSection>
      </div>
    </section>
  );
}
