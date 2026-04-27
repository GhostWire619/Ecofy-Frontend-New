"use client";

import Image from "next/image";
import type { About } from "@/lib/site-data";
import { useSiteContent } from "@/components/providers/site-language-provider";

interface AboutSectionProps {
  about: About;
}

export default function AboutSection({ about }: AboutSectionProps) {
  const { ui } = useSiteContent();
  const sectionCopy = ui.aboutSection;

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="overflow-hidden rounded-2xl relative aspect-[4/3]">
        <Image
          src={about.image}
          alt={sectionCopy.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
          {sectionCopy.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2a1f] dark:text-white break-words">
          {about.title}
        </h2>
        <p className="text-[#3d4a3d] dark:text-zinc-400 leading-relaxed">
          {about.description}
        </p>
        <div className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-6 mt-2 flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-[#1f2a1f] dark:text-white break-words">
            {about.platformTitle}
          </h3>
          <p className="text-sm text-[#3d4a3d] dark:text-zinc-400">
            {about.platformDescription}
          </p>
          <a
            className="inline-flex px-6 py-3 bg-[#1f2a1f] dark:bg-white text-[#ffffff] dark:text-zinc-900 rounded-xl font-medium hover:opacity-90 transition no-underline self-start"
            href={about.href}
          >
            {sectionCopy.readMoreLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
