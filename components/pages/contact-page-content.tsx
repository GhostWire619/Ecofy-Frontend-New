"use client";

import { useSiteContent } from "@/components/providers/site-language-provider";
import PageBanner from "@/components/layout/PageBanner";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPageContent() {
  const { services, contactDetails, ui } = useSiteContent();
  const pageCopy = ui.pages.contact;

  return (
    <main>
      <PageBanner
        eyebrow={pageCopy.banner.eyebrow}
        title={pageCopy.banner.title}
        subtitle={pageCopy.banner.subtitle}
        breadcrumbs={pageCopy.banner.breadcrumbs}
        backgroundImage={pageCopy.banner.backgroundImage}
      />
      <ContactSection services={services} contactDetails={contactDetails} />
    </main>
  );
}

