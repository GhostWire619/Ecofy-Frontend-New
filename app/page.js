import {
  advisoryAreas,
  contactDetails,
  cta,
  footer,
  heroSlides,
  navigation,
  partners,
  pillars,
  posts,
  projects,
  services,
  stats,
  testimonials,
} from "@/lib/site-data";
import Header from "@/components/layout/Header";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import PillarsSection from "@/components/sections/PillarsSection";
import AdvisoryTabs from "@/components/sections/AdvisoryTabs";
import StatsSection from "@/components/sections/StatsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
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
        <PartnersSection partners={partners} />
        <ServiceGrid services={services} />
        <PillarsSection pillars={pillars} cta={cta} />
        <AdvisoryTabs areas={advisoryAreas} />
        <ProjectsSection projects={projects} />
        <StatsSection stats={stats} />
        <TestimonialsSection testimonials={testimonials} />
        <NewsSection posts={posts} />
        <ContactSection services={services} contactDetails={contactDetails} />
      </main>
      <Footer footer={footer} />
    </>
  );
}
