"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <section className="pt-40 pb-16 lg:pt-48 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection animation="fade-up">
          {breadcrumbs && (
            <nav className="flex items-center gap-2 text-sm text-[#4d6b2f] dark:text-indigo-400 mb-4">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="hover:text-[#1f2a1f] dark:hover:text-white transition-colors no-underline"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-[#3d4a3d] dark:text-zinc-300">
                      {crumb.label}
                    </span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className="text-[#1f2a1f]/20 dark:text-zinc-600">/</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && (
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400 mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f2a1f] dark:text-zinc-100 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-[#3d4a3d] dark:text-zinc-400 max-w-2xl">
              {subtitle}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
