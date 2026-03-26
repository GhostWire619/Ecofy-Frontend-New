import {
  navigation,
  footer,
  capabilities,
  stats,
} from "@/lib/site-data";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import CapabilitySection from "@/components/sections/CapabilitySection";
import StatsSection from "@/components/sections/StatsSection";

export default function HowWeHelpClientsPage() {
  return (
    <>
      <TopBar />
      <Header navigation={navigation} />
      <main>
        <PageBanner
          eyebrow="How We Help"
          title="Predict. Guide. Reward."
          subtitle="Three core capabilities that work together to eliminate uncertainty and empower smallholder farmers from planting through harvest."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "How We Help" },
          ]}
          backgroundImage="/uploads/2021/03/hm-2-counter-bg.jpg"
        />

        <CapabilitySection capability={capabilities[0]} />
        <CapabilitySection capability={capabilities[1]} reversed />
        <CapabilitySection capability={capabilities[2]} />

        <StatsSection stats={stats} />

        {/* CTA */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2a1f] dark:text-zinc-100">
              Ready to get started?
            </h2>
            <p className="mt-3 text-[#3d4a3d] dark:text-zinc-400 max-w-xl mx-auto">
              See how Ecofy can help you make confident farming decisions backed
              by real data.
            </p>
            <a
              href="/contact"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-[#1f2a1f] dark:bg-white text-[#ffffff] dark:text-zinc-900 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Contact us
            </a>
          </div>
        </section>
      </main>
      <Footer footer={footer} />
    </>
  );
}
