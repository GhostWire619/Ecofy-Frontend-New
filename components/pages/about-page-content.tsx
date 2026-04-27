"use client";

import Image from "next/image";
import { useSiteContent } from "@/components/providers/site-language-provider";
import PageBanner from "@/components/layout/PageBanner";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import ProductHighlights from "@/components/sections/ProductHighlights";
import PartnersSection from "@/components/sections/PartnersSection";

export default function AboutPageContent() {
  const { aboutPage, productHighlights, partners, ui } = useSiteContent();
  const pageCopy = ui.pages.about;

  return (
    <main>
      <PageBanner
        eyebrow={pageCopy.banner.eyebrow}
        title={pageCopy.banner.title}
        subtitle={pageCopy.banner.subtitle}
        breadcrumbs={pageCopy.banner.breadcrumbs}
        backgroundImage={pageCopy.banner.backgroundImage}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection animation="fade-right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/uploads/2023/03/gerolds.png"
                  alt={pageCopy.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400 mb-3">
                {pageCopy.missionEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2a1f] dark:text-zinc-100 leading-tight mb-6 break-words">
                {aboutPage.mission}
              </h2>
              <div className="space-y-4">
                {aboutPage.story.map((paragraph, i) => (
                  <p
                    key={`${paragraph.slice(0, 24)}-${i}`}
                    className="text-[#3d4a3d] dark:text-zinc-400 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400 mb-6">
                {pageCopy.visionEyebrow}
              </p>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#4d6b2f] to-[#c48738] break-words">
                {aboutPage.vision}
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400 mb-3">
                {pageCopy.valuesEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2a1f] dark:text-zinc-100 break-words">
                {pageCopy.valuesTitle}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutPage.values.map((value, i) => (
              <AnimatedItem key={value.title} index={i} baseDelay={120}>
                <div className="h-full rounded-2xl border border-[#1f2a1f]/10 dark:border-zinc-800/60 bg-[#ffffff] dark:bg-zinc-900/50 p-8 transition-transform hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-[#1f2a1f] dark:text-zinc-100 mb-3 break-words">
                    {value.title}
                  </h3>
                  <p className="text-[#3d4a3d] dark:text-zinc-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      <ProductHighlights highlights={productHighlights} />
      <PartnersSection partners={partners} />
    </main>
  );
}

