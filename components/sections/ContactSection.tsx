"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Service, ContactDetails } from "@/lib/site-data";
import { useSiteContent } from "@/components/providers/site-language-provider";

interface ContactSectionProps {
  services: Service[];
  contactDetails: ContactDetails;
}

export default function ContactSection({ services, contactDetails }: ContactSectionProps) {
  const { ui } = useSiteContent();
  const sectionCopy = ui.contactSection;

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <AnimatedSection animation="fade-right" className="lg:col-span-3">
          <div className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-8 sm:p-10 h-full">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
              {sectionCopy.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#1f2a1f] dark:text-white break-words">
              {sectionCopy.title}
            </h2>
            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={sectionCopy.fullNamePlaceholder}
                className="w-full rounded-xl border border-[#1f2a1f]/10 dark:border-zinc-700 bg-[#f5f5f5] dark:bg-zinc-800 px-4 py-3 text-sm text-[#1f2a1f] dark:text-white placeholder:text-[#5f695d] focus:outline-none focus:ring-2 focus:ring-[#4d6b2f]/40"
              />
              <input
                type="email"
                placeholder={sectionCopy.workEmailPlaceholder}
                className="w-full rounded-xl border border-[#1f2a1f]/10 dark:border-zinc-700 bg-[#f5f5f5] dark:bg-zinc-800 px-4 py-3 text-sm text-[#1f2a1f] dark:text-white placeholder:text-[#5f695d] focus:outline-none focus:ring-2 focus:ring-[#4d6b2f]/40"
              />
              <input
                type="tel"
                placeholder={sectionCopy.phonePlaceholder}
                className="w-full rounded-xl border border-[#1f2a1f]/10 dark:border-zinc-700 bg-[#f5f5f5] dark:bg-zinc-800 px-4 py-3 text-sm text-[#1f2a1f] dark:text-white placeholder:text-[#5f695d] focus:outline-none focus:ring-2 focus:ring-[#4d6b2f]/40"
              />
              <select
                defaultValue={services[0].title}
                className="w-full rounded-xl border border-[#1f2a1f]/10 dark:border-zinc-700 bg-[#f5f5f5] dark:bg-zinc-800 px-4 py-3 text-sm text-[#1f2a1f] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4d6b2f]/40"
              >
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder={sectionCopy.organizationPlaceholder}
                className="w-full rounded-xl border border-[#1f2a1f]/10 dark:border-zinc-700 bg-[#f5f5f5] dark:bg-zinc-800 px-4 py-3 text-sm text-[#1f2a1f] dark:text-white placeholder:text-[#5f695d] focus:outline-none focus:ring-2 focus:ring-[#4d6b2f]/40"
              />
              <input
                type="text"
                placeholder={sectionCopy.countryPlaceholder}
                className="w-full rounded-xl border border-[#1f2a1f]/10 dark:border-zinc-700 bg-[#f5f5f5] dark:bg-zinc-800 px-4 py-3 text-sm text-[#1f2a1f] dark:text-white placeholder:text-[#5f695d] focus:outline-none focus:ring-2 focus:ring-[#4d6b2f]/40"
              />
              <textarea
                placeholder={sectionCopy.messagePlaceholder}
                rows={5}
                className="sm:col-span-2 w-full rounded-xl border border-[#1f2a1f]/10 dark:border-zinc-700 bg-[#f5f5f5] dark:bg-zinc-800 px-4 py-3 text-sm text-[#1f2a1f] dark:text-white placeholder:text-[#5f695d] focus:outline-none focus:ring-2 focus:ring-[#4d6b2f]/40 resize-none"
              />
            <label className="sm:col-span-2 flex items-start gap-3 text-sm text-[#3d4a3d] dark:text-zinc-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-[#1f2a1f]/20 dark:border-zinc-600"
                />
                <span>{sectionCopy.checkboxLabel}</span>
              </label>
              <button
                type="button"
                className="sm:col-span-2 inline-flex justify-center px-6 py-3 bg-[#1f2a1f] dark:bg-white text-[#ffffff] dark:text-zinc-900 rounded-xl font-medium hover:opacity-90 transition"
              >
                {sectionCopy.submitLabel}
              </button>
            </form>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-left" delay={150} className="lg:col-span-2">
          <aside className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-8 sm:p-10 flex flex-col gap-4 h-fit">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4d6b2f] dark:text-indigo-400">
              {sectionCopy.supportEyebrow}
            </p>
            <h3 className="text-xl font-bold text-[#1f2a1f] dark:text-white break-words">
              {sectionCopy.supportTitle}
            </h3>
            <p className="text-sm text-[#3d4a3d] dark:text-zinc-400">
              {contactDetails.description}
            </p>
            <a
              href={`tel:${contactDetails.phoneRaw}`}
              className="text-lg font-semibold text-[#1f2a1f] dark:text-white hover:opacity-80 transition no-underline"
            >
              {contactDetails.phone}
            </a>
            <a
              href="mailto:info@ecofy.co.tz"
              className="text-sm font-medium text-[#4d6b2f] dark:text-indigo-400 hover:opacity-80 transition no-underline"
            >
              info@ecofy.co.tz
            </a>
            <div className="flex flex-wrap gap-2 mt-2">
              {sectionCopy.supportTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[#f0f0f0] dark:bg-zinc-800 text-[#3d4a3d] dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </AnimatedSection>
      </div>
    </section>
  );
}
