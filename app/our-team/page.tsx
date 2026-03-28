import { navigation, footer, teamMembers } from "@/lib/site-data";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import TeamGrid from "@/components/sections/TeamGrid";

export default function OurTeamPage() {
  return (
    <>
      <TopBar />
      <Header navigation={navigation} />
      <main>
        <PageBanner
          eyebrow="Our Team"
          title="The people building Ecofy"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Our Team" },
          ]}
          backgroundImage="/images/banners/team-banner.png"
        />

        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <TeamGrid members={teamMembers} />
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg p-10 sm:p-14 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2a1f] dark:text-zinc-100">
                Join us
              </h2>
              <p className="mt-3 text-[#3d4a3d] dark:text-zinc-400 max-w-xl mx-auto">
                We are always looking for talented people who share our mission
                of empowering smallholder farmers with actionable intelligence.
              </p>
              <a
                href="/contact"
                className="inline-block mt-6 px-6 py-3 rounded-full bg-[#1f2a1f] dark:bg-white text-[#ffffff] dark:text-zinc-900 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer footer={footer} />
    </>
  );
}
