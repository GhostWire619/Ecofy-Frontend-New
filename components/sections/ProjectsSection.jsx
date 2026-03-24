"use client";

import { useState } from "react";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";

export default function ProjectsSection({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="section projects-redesign">
      <div className="shell">
        <AnimatedSection animation="fade-up">
          <div className="projects-redesign-head">
            <p className="eyebrow">Case explorer</p>
            <h2>Experience projects as connected product narratives</h2>
            <p>
              Hover or tap any case to transition the main stage and inspect outcomes, tags,
              and category context.
            </p>
          </div>
        </AnimatedSection>

        <div className="projects-redesign-shell">
          <AnimatedSection animation="fade-right" delay={100}>
            <article className="projects-redesign-stage">
              <div className="projects-redesign-visual">
                <img src={activeProject.image} alt={activeProject.title} />
                <div className="projects-redesign-float">
                  <span>Outcome</span>
                  <strong>{activeProject.outcome}</strong>
                </div>
              </div>

              <div className="projects-redesign-copy">
                <span className="projects-redesign-meta">
                  {activeProject.year} &bull; {activeProject.category}
                </span>
                <h3>{activeProject.title}</h3>
                <p>{activeProject.description}</p>
                <div className="projects-redesign-tags">
                  {activeProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="button button-light" href={activeProject.href}>
                  View case study
                </a>
              </div>
            </article>
          </AnimatedSection>

          <aside className="projects-redesign-rail" aria-label="Project list">
            {projects.map((project, index) => (
              <AnimatedItem key={project.title} index={index} baseDelay={80} animation="fade-left">
                <button
                  type="button"
                  className={
                    index === activeIndex
                      ? "projects-redesign-rail-item is-active"
                      : "projects-redesign-rail-item"
                  }
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="projects-redesign-index">0{index + 1}</span>
                  <div className="projects-redesign-rail-copy">
                    <strong>{project.title}</strong>
                    <span>{project.shortLabel}</span>
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
