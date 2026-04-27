"use client";

import { useSiteContent } from "@/components/providers/site-language-provider";
import PageBanner from "@/components/layout/PageBanner";
import TeamGrid from "@/components/sections/TeamGrid";

export default function TeamPageContent() {
  const { teamMembers, ui } = useSiteContent();
  const pageCopy = ui.pages.team;

  return (
    <main>
      <PageBanner
        eyebrow={pageCopy.banner.eyebrow}
        title={pageCopy.banner.title}
        breadcrumbs={pageCopy.banner.breadcrumbs}
        backgroundImage={pageCopy.banner.backgroundImage}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <TeamGrid members={teamMembers} />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2a1f] dark:text-zinc-100 break-words">
              {pageCopy.ctaTitle}
            </h2>
            <p className="mt-3 text-[#3d4a3d] dark:text-zinc-400 max-w-xl mx-auto">
              {pageCopy.ctaDescription}
            </p>
            <a
              href="/contact"
              className="inline-flex mt-6 items-center justify-center px-6 py-3 rounded-full bg-[#1f2a1f] dark:bg-white text-[#ffffff] dark:text-zinc-900 text-center text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {pageCopy.ctaLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

