"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
    <section
      className="hero-gradient relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div
          className={`flex flex-col gap-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[11px] font-semibold tracking-widest uppercase text-white/70">
            {first.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            {first.title}
          </h1>
          <p className="text-lg text-white/80 max-w-xl leading-relaxed">
            {first.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/95 text-[#141a29] rounded-xl font-medium hover:bg-white transition no-underline"
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
              className="inline-flex px-6 py-3 border border-white/30 rounded-xl font-medium text-white hover:bg-white/10 transition no-underline"
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
          <article className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-1 border border-white/10">
            <Image
              src={first.image}
              alt={first.title}
              width={582}
              height={310}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-cover"
              priority
            />
          </article>

          {/* Accent glass card */}
          <article className="absolute -bottom-6 -left-6 w-56 bg-white/90 dark:bg-zinc-900/80 border border-white/20 dark:border-zinc-800/50 rounded-2xl shadow-lg p-4 backdrop-blur-sm transition-transform hover:-translate-y-1">
            <Image
              src={second.image}
              alt={second.title}
              width={210}
              height={112}
              sizes="210px"
              className="w-full h-28 object-cover rounded-xl mb-3"
            />
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-indigo-600">
                {second.eyebrow}
              </p>
              <h2 className="text-sm font-semibold mt-1 text-[#1f2a1f]">{second.title}</h2>
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
        <span className="text-[11px] font-medium tracking-widest uppercase text-white/60">
          Scroll to explore
        </span>
        <div className="relative w-px h-8 bg-white/30 overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
