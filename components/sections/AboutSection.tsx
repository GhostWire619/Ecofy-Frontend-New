"use client";

import type { About } from "@/lib/site-data";

interface AboutSectionProps {
  about: About;
}

export default function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={about.image}
          alt="Ecofy Solutions leadership"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          About our company
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent">
          {about.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {about.description}
        </p>
        <div className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-6 mt-2 flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {about.platformTitle}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {about.platformDescription}
          </p>
          <a
            className="inline-flex px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-medium hover:opacity-90 transition no-underline self-start"
            href={about.href}
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
