"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Navigation } from "@/lib/site-data";

interface HeaderProps {
  navigation: Navigation;
}

export default function Header({ navigation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-[36px] left-0 right-0 z-40 transition-all duration-300 rounded-2xl ${
          isScrolled
            ? "!left-2 !right-2 sm:!left-8 sm:!right-8 backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70 shadow-lg border border-white/30 dark:border-white/10"
            : "border border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-14" : "h-20"
            }`}
          >
            {/* Brand — left on mobile, left on desktop */}
            <a className="flex items-center gap-3 no-underline" href="/">
              <Image
                src={navigation.logo}
                alt={navigation.name}
                width={700}
                height={200}
                className="h-40 w-auto sm:h-45"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
              {navigation.links.slice(0, 3).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-[13px] font-medium text-[#5f695d] dark:text-zinc-300 hover:text-[#1f2a1f] dark:hover:text-white rounded-lg hover:bg-[#f0f0f0] dark:hover:bg-zinc-800 transition-colors no-underline"
                >
                  {item.label}
                </a>
              ))}

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-[#5f695d] dark:text-zinc-300 hover:text-[#1f2a1f] dark:hover:text-white rounded-lg hover:bg-[#f0f0f0] dark:hover:bg-zinc-800 transition-colors"
                  type="button"
                  aria-expanded={isSolutionsOpen}
                  onClick={() => setIsSolutionsOpen((o) => !o)}
                >
                  Solutions
                  <span
                    className={`text-[10px] transition-transform duration-200 ${
                      isSolutionsOpen ? "rotate-180" : ""
                    }`}
                  >
                    &#9662;
                  </span>
                </button>

                <div
                  className={`absolute top-full right-0 mt-2 w-56 rounded-xl border border-[#1f2a1f]/10 dark:border-zinc-700/60 bg-[#ffffff] dark:bg-zinc-900 shadow-xl transition-all duration-200 ${
                    isSolutionsOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    {navigation.solutions.map((item) => (
                      <a
                        key={item.title}
                        className="block px-4 py-2.5 text-[13px] font-medium text-[#3d4a3d] dark:text-zinc-300 hover:bg-[#f0f0f0] dark:hover:bg-zinc-800/50 transition-colors no-underline"
                        href={item.href}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {navigation.links.slice(3).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-[13px] font-medium text-[#5f695d] dark:text-zinc-300 hover:text-[#1f2a1f] dark:hover:text-white rounded-lg hover:bg-[#f0f0f0] dark:hover:bg-zinc-800 transition-colors no-underline"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              className={`hidden md:inline-flex px-5 py-2.5 text-[13px] font-medium rounded-xl transition-all no-underline ${
                isScrolled
                  ? "bg-[#1f2a1f] dark:bg-white text-[#ffffff] dark:text-zinc-900 hover:opacity-90"
                  : "bg-white/90 dark:bg-zinc-800 text-[#1f2a1f] dark:text-zinc-100 hover:bg-white dark:hover:bg-zinc-700"
              }`}
              href={navigation.cta.href}
            >
              {navigation.cta.label}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="flex md:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`block w-5 h-[1.5px] bg-[#1f2a1f] dark:bg-zinc-200 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[4.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-[#1f2a1f] dark:bg-zinc-200 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-[#1f2a1f] dark:bg-zinc-200 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav
        className={`fixed inset-0 z-30 bg-[#ffffff] dark:bg-zinc-950 transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "96px" }}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navigation.links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleMobileNavClick}
              className="px-4 py-3 text-lg font-medium text-[#3d4a3d] dark:text-zinc-200 hover:bg-[#f0f0f0] dark:hover:bg-zinc-800 rounded-xl transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
          <div className="h-px bg-[#1f2a1f]/10 dark:bg-zinc-800 my-2" />
          {navigation.solutions.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={handleMobileNavClick}
              className="px-4 py-2 text-sm text-[#5f695d] dark:text-zinc-400 hover:text-[#1f2a1f] dark:hover:text-white hover:bg-[#f0f0f0] dark:hover:bg-zinc-800 rounded-xl transition-colors no-underline"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="px-6 mt-4">
          <a
            className="block w-full text-center px-6 py-3 bg-[#1f2a1f] dark:bg-white text-[#ffffff] dark:text-zinc-900 font-medium rounded-xl hover:opacity-90 transition-opacity no-underline"
            href={navigation.cta.href}
            onClick={handleMobileNavClick}
          >
            {navigation.cta.label}
          </a>
        </div>
      </nav>
    </>
  );
}
