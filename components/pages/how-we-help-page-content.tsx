"use client";

import { APP_LOGIN_URL, APP_REGISTER_URL } from "@/lib/site-data";
import { useSiteContent } from "@/components/providers/site-language-provider";
import PageBanner from "@/components/layout/PageBanner";
import CapabilitySection from "@/components/sections/CapabilitySection";
import ProductHighlights from "@/components/sections/ProductHighlights";

export default function HowWeHelpPageContent() {
  const { capabilities, productHighlights, ui } = useSiteContent();
  const pageCopy = ui.pages.howWeHelp;

  return (
    <main>
      <PageBanner
        eyebrow={pageCopy.banner.eyebrow}
        title={pageCopy.banner.title}
        subtitle={pageCopy.banner.subtitle}
        breadcrumbs={pageCopy.banner.breadcrumbs}
        backgroundImage={pageCopy.banner.backgroundImage}
      />

      <CapabilitySection capability={capabilities[0]} />
      <CapabilitySection capability={capabilities[1]} reversed />
      <CapabilitySection capability={capabilities[2]} />

      <ProductHighlights highlights={productHighlights} />

      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2a1f] dark:text-zinc-100 break-words">
            {pageCopy.ctaTitle}
          </h2>
          <p className="mt-3 text-[#3d4a3d] dark:text-zinc-400 max-w-xl mx-auto">
            {pageCopy.ctaDescription}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={APP_LOGIN_URL}
              className="inline-flex min-w-[150px] items-center justify-center rounded-full bg-[#1f2a1f] px-6 py-3 text-center text-sm font-semibold text-[#ffffff] transition-opacity hover:opacity-90 dark:bg-white dark:text-zinc-900"
            >
              {pageCopy.signInLabel}
            </a>
            <a
              href={APP_REGISTER_URL}
              className="inline-flex min-w-[150px] items-center justify-center rounded-full border border-[#1f2a1f]/20 px-6 py-3 text-center text-sm font-semibold text-[#1f2a1f] transition-colors hover:bg-[#f0f0f0] dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
            >
              {pageCopy.getStartedLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

