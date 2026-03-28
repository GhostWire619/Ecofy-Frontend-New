"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import type { BetaCTA } from "@/lib/site-data";

interface JoinBetaSectionProps {
  cta: BetaCTA;
}

export default function JoinBetaSection({ cta }: JoinBetaSectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection animation="scale">
          <div className="relative rounded-2xl border border-[#1f2a1f]/10 dark:border-zinc-800 bg-gradient-to-br from-[#4d6b2f]/10 to-[#c48738]/10 dark:from-zinc-900/80 dark:to-zinc-900/80 p-12 lg:p-16 text-center">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
              Early access
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#1f2a1f] dark:text-white">
              {cta.title}
            </h2>
            <p className="mt-4 text-lg text-[#3d4a3d] dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {cta.description}
            </p>
            <div className="mt-8">
              <a
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#4d6b2f] text-white rounded-xl font-semibold text-lg hover:bg-[#3d5a22] transition no-underline"
                href={cta.href}
              >
                {cta.buttonLabel}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
