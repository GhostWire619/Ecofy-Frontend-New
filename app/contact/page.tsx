import { navigation, footer, services, contactDetails } from "@/lib/site-data";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = { title: "Contact — Ecofy Africa" };

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Header navigation={navigation} />
      <main>
        <PageBanner
          eyebrow="Contact"
          title="Get in touch with the Ecofy team"
          subtitle="Whether you are a farmer, field agent, or partner organization, we are here to help."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          backgroundImage="/uploads/2021/03/get-a-quote-home-1-bg.jpg"
        />
        <ContactSection services={services} contactDetails={contactDetails} />
      </main>
      <Footer footer={footer} />
    </>
  );
}
