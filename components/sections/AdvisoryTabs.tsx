"use client";

import { useState } from "react";
import Image from "next/image";
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
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
            Advisory studio
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1f2a1f] dark:text-white">
            Navigate advisory capabilities like a product console
          </h2>
          <p className="mt-4 text-[#3d4a3d] dark:text-zinc-400">
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
                    ? "bg-[#ffffff] dark:bg-zinc-900/80 border-[#1f2a1f]/10 dark:border-zinc-800/50 shadow-lg"
                    : "border-transparent hover:bg-[#f0f0f0] dark:hover:bg-zinc-800/40"
                }`}
                onClick={() => setActiveIndex(index)}
                role="tab"
                aria-selected={index === activeIndex}
                type="button"
              >
                <span className="text-xs font-mono text-[#5f695d]">0{index + 1}</span>
                <strong className="text-sm font-semibold text-[#1f2a1f] dark:text-zinc-200">
                  {area.title}
                </strong>
              </button>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedSection animation="fade-left" delay={200}>
          <article
            className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2"
            role="tabpanel"
          >
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
                Current focus
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#1f2a1f] dark:text-white">
                {activeArea.title}
              </h3>
              <p className="mt-3 text-[#3d4a3d] dark:text-zinc-400">{activeArea.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Sector intelligence", "Execution frameworks", "Delivery partnership"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full bg-[#f0f0f0] dark:bg-zinc-800 text-[#3d4a3d] dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src={activeArea.image}
                alt={activeArea.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </article>
        </AnimatedSection>
      </div>
    </section>
  );
}
