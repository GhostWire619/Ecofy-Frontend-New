"use client";

import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import type { FooterData } from "@/lib/site-data";

interface FooterProps {
  footer: FooterData;
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="border-t border-[#1f2a1f]/8 dark:border-zinc-800/60 bg-[#f0f0f0] dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <AnimatedSection animation="fade-up">
          <section>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400 mb-3">
              {footer.kicker}
            </p>
            <h2 className="text-xl font-semibold text-[#1f2a1f] dark:text-zinc-100 leading-snug">
              {footer.statement}
            </h2>
          </section>
        </AnimatedSection>

        <AnimatedItem index={1} baseDelay={100} animation="fade-up">
          <section>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400 mb-4">
              Navigate
            </h3>
            <div className="flex flex-col gap-2.5">
              {footer.navigateLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#5f695d] dark:text-zinc-400 hover:text-[#1f2a1f] dark:hover:text-white transition-colors no-underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>
        </AnimatedItem>

        <AnimatedItem index={2} baseDelay={100} animation="fade-up">
          <section>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400 mb-4">
              Resources
            </h3>
            <div className="flex flex-col gap-2.5">
              {footer.resourceLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#5f695d] dark:text-zinc-400 hover:text-[#1f2a1f] dark:hover:text-white transition-colors no-underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>
        </AnimatedItem>

        <AnimatedItem index={3} baseDelay={100} animation="fade-up">
          <section>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400 mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-2.5">
              {footer.connectLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#5f695d] dark:text-zinc-400 hover:text-[#1f2a1f] dark:hover:text-white transition-colors no-underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>
        </AnimatedItem>
      </div>

      <AnimatedSection animation="fade-up" delay={400}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 border-t border-[#1f2a1f]/8 dark:border-zinc-800/60">
          <p className="text-xs text-[#4d6b2f] dark:text-indigo-400">
            {footer.copyright}
          </p>
        </div>
      </AnimatedSection>
    </footer>
  );
}
