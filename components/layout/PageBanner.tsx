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
  backgroundImage?: string;
}

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
}: PageBannerProps) {
  return (
    <section
      className="relative pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(to bottom, rgba(31,42,31,0.7), rgba(31,42,31,0.85)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection animation="fade-up">
          {breadcrumbs && (
            <nav className={`flex items-center gap-2 text-sm mb-4 ${backgroundImage ? 'text-white/70' : 'text-[#4d6b2f] dark:text-indigo-400'}`}>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className={`transition-colors no-underline ${backgroundImage ? 'hover:text-white' : 'hover:text-[#1f2a1f] dark:hover:text-white'}`}
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className={backgroundImage ? 'text-white/90' : 'text-[#3d4a3d] dark:text-zinc-300'}>
                      {crumb.label}
                    </span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className={backgroundImage ? 'text-white/30' : 'text-[#1f2a1f]/20 dark:text-zinc-600'}>/</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && (
            <p className={`text-[11px] font-semibold tracking-widest uppercase mb-3 ${backgroundImage ? 'text-[#c48738]' : 'text-[#4d6b2f] dark:text-indigo-400'}`}>
              {eyebrow}
            </p>
          )}
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${backgroundImage ? 'text-white' : 'text-[#1f2a1f] dark:text-zinc-100'}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-4 text-lg max-w-2xl ${backgroundImage ? 'text-white/80' : 'text-[#3d4a3d] dark:text-zinc-400'}`}>
              {subtitle}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
