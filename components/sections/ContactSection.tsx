"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Service, ContactDetails } from "@/lib/site-data";

interface ContactSectionProps {
  services: Service[];
  contactDetails: ContactDetails;
}

export default function ContactSection({ services, contactDetails }: ContactSectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <AnimatedSection animation="fade-right">
          <div className="lg:col-span-3 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-8 sm:p-10">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              Start a conversation
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent">
              Tell us where you need support and we will shape the right stack
            </h2>
            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              />
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              />
              <select
                defaultValue={services[0].title}
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400"
              >
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Organization"
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              />
              <textarea
                placeholder="Briefly describe your challenge"
                rows={5}
                className="sm:col-span-2 w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 resize-none"
              />
              <label className="sm:col-span-2 flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-zinc-300 dark:border-zinc-600"
                />
                <span>I agree to receive project and product updates.</span>
              </label>
              <button
                type="button"
                className="sm:col-span-2 inline-flex justify-center px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-medium hover:opacity-90 transition"
              >
                Send inquiry
              </button>
            </form>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-left" delay={150}>
          <aside className="lg:col-span-2 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-8 sm:p-10 flex flex-col gap-4 h-fit">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              Direct support line
            </p>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Need urgent assistance?
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {contactDetails.description}
            </p>
            <a
              href={`tel:${contactDetails.phoneRaw}`}
              className="text-lg font-semibold text-zinc-900 dark:text-white hover:opacity-80 transition no-underline"
            >
              {contactDetails.phone}
            </a>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                24/7 response
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                Regional coordination
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                Rapid escalation
              </span>
            </div>
          </aside>
        </AnimatedSection>
      </div>
    </section>
  );
}
