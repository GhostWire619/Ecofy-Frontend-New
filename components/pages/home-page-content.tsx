"use client";

import { useSiteContent } from "@/components/providers/site-language-provider";
import Hero from "@/components/sections/Hero";
import PillarsSection from "@/components/sections/PillarsSection";
import AppWalkthrough from "@/components/sections/AppWalkthrough";
import ProductHighlights from "@/components/sections/ProductHighlights";
import JoinBetaSection from "@/components/sections/JoinBetaSection";
import PartnersSection from "@/components/sections/PartnersSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePageContent() {
  const {
    heroSlides,
    partners,
    pillars,
    cta,
    appScreens,
    productHighlights,
    betaCta,
    posts,
    services,
    contactDetails,
  } = useSiteContent();

  return (
    <main>
      <Hero slides={heroSlides} />
      <div className="bg-gradient-to-b from-[#eae8e5] to-white dark:from-[#09090b] dark:to-[#09090b]">
        <PartnersSection partners={partners} />
      </div>
      <PillarsSection pillars={pillars} cta={cta} />
      <AppWalkthrough screens={appScreens} />
      <ProductHighlights highlights={productHighlights} />
      <JoinBetaSection cta={betaCta} />
      <NewsSection posts={posts} />
      <ContactSection services={services} contactDetails={contactDetails} />
    </main>
  );
}

