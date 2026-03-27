"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import type { Project } from "@/lib/site-data";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
              Case explorer
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1f2a1f] dark:text-white">
              Experience projects as connected product narratives
            </h2>
            <p className="mt-4 text-[#3d4a3d] dark:text-zinc-400">
              Hover or tap any case to transition the main stage and inspect outcomes, tags,
              and category context.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <AnimatedSection animation="fade-right" delay={100}>
            <article className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-xl px-4 py-2 shadow-lg">
                  <span className="block text-[11px] font-medium uppercase text-[#4d6b2f] dark:text-indigo-400">
                    Outcome
                  </span>
                  <strong className="text-sm font-semibold text-[#1f2a1f] dark:text-zinc-200">
                    {activeProject.outcome}
                  </strong>
                </div>
              </div>

              <div className="p-8">
                <span className="text-xs font-medium text-[#4d6b2f] dark:text-indigo-400">
                  {activeProject.year} &bull; {activeProject.category}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-[#1f2a1f] dark:text-white">
                  {activeProject.title}
                </h3>
                <p className="mt-3 text-[#3d4a3d] dark:text-zinc-400">
                  {activeProject.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full bg-[#f0f0f0] dark:bg-zinc-800 text-[#3d4a3d] dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-[#1f2a1f]/15 dark:border-zinc-700 text-[#3d4a3d] dark:text-zinc-300 hover:bg-[#f0f0f0] dark:hover:bg-zinc-800 transition-colors"
                  href={activeProject.href}
                >
                  View case study
                </a>
              </div>
            </article>
          </AnimatedSection>

          <aside className="flex flex-col gap-3" aria-label="Project list">
            {projects.map((project, index) => (
              <AnimatedItem key={project.title} index={index} baseDelay={80} animation="fade-left">
                <button
                  type="button"
                  className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border transition-all ${
                    index === activeIndex
                      ? "bg-[#ffffff] dark:bg-zinc-900/80 border-[#1f2a1f]/10 dark:border-zinc-800/50 shadow-lg"
                      : "border-transparent hover:bg-[#f0f0f0] dark:hover:bg-zinc-800/40"
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="text-xs font-mono text-[#5f695d]">0{index + 1}</span>
                  <div className="min-w-0">
                    <strong className="block text-sm font-semibold text-[#1f2a1f] dark:text-zinc-200 truncate">
                      {project.title}
                    </strong>
                    <span className="block text-xs text-[#4d6b2f] dark:text-indigo-400 truncate">
                      {project.shortLabel}
                    </span>
                  </div>
                </button>
              </AnimatedItem>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
