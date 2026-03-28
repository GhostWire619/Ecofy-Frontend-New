import {
  appScreens,
  betaCta,
  contactDetails,
  cta,
  footer,
  heroSlides,
  navigation,
  partners,
  pillars,
  posts,
  productHighlights,
  services,
} from "@/lib/site-data";
import Header from "@/components/layout/Header";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PillarsSection from "@/components/sections/PillarsSection";
import AppWalkthrough from "@/components/sections/AppWalkthrough";
import ProductHighlights from "@/components/sections/ProductHighlights";
import JoinBetaSection from "@/components/sections/JoinBetaSection";
import PartnersSection from "@/components/sections/PartnersSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header navigation={navigation} />
      <main>
        <Hero slides={heroSlides} />
        {/* Gradient transition from hero cream to white */}
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
      <Footer footer={footer} />
    </>
  );
}
