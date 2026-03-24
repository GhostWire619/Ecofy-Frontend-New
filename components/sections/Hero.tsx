"use client";

import { useEffect, useState } from "react";
import type { HeroSlide } from "@/lib/site-data";

interface HeroProps {
  slides: HeroSlide[];
}

export default function Hero({ slides }: HeroProps) {
  const [first, second] = slides;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div
          className={`flex flex-col gap-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            {first.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent">
              {first.title.split(" ").slice(0, 2).join(" ")}
            </span>{" "}
            {first.title.split(" ").slice(2).join(" ")}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
            {first.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-medium hover:opacity-90 transition no-underline"
              href={first.primary.href}
            >
              {first.primary.label}
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
            <a
              className="inline-flex px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-xl font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition no-underline"
              href={first.secondary.href}
            >
              {first.secondary.label}
            </a>
          </div>
        </div>

        {/* Visuals */}
        <div
          className={`relative hidden lg:flex items-center justify-center gap-6 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Main card */}
          <article className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-1">
            <img
              src={first.image}
              alt={first.title}
              className="w-full h-auto object-cover"
            />
          </article>

          {/* Accent glass card */}
          <article className="absolute -bottom-6 -left-6 w-56 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-4 transition-transform hover:-translate-y-1">
            <img
              src={second.image}
              alt={second.title}
              className="w-full h-28 object-cover rounded-xl mb-3"
            />
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                {second.eyebrow}
              </p>
              <h2 className="text-sm font-semibold mt-1">{second.title}</h2>
            </div>
          </article>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-500 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-[11px] font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          Scroll to explore
        </span>
        <div className="relative w-px h-8 bg-zinc-300 dark:bg-zinc-700 overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-zinc-900 dark:bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
