"use client";

import { useState } from "react";
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
            <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              Case explorer
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent">
              Experience projects as connected product narratives
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">
              Hover or tap any case to transition the main stage and inspect outcomes, tags,
              and category context.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <AnimatedSection animation="fade-right" delay={100}>
            <article className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-xl px-4 py-2 shadow-lg">
                  <span className="block text-[11px] font-medium uppercase text-zinc-400 dark:text-zinc-500">
                    Outcome
                  </span>
                  <strong className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {activeProject.outcome}
                  </strong>
                </div>
              </div>

              <div className="p-8">
                <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                  {activeProject.year} &bull; {activeProject.category}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
                  {activeProject.title}
                </h3>
                <p className="mt-3 text-zinc-500 dark:text-zinc-400">
                  {activeProject.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
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
                      ? "backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border-zinc-200/10 dark:border-zinc-800/50 shadow-lg"
                      : "border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800/40"
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="text-xs font-mono text-zinc-400">0{index + 1}</span>
                  <div className="min-w-0">
                    <strong className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                      {project.title}
                    </strong>
                    <span className="block text-xs text-zinc-400 dark:text-zinc-500 truncate">
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
