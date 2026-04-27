import SiteShell from "@/components/layout/SiteShell";
import ContactPageContent from "@/components/pages/contact-page-content";

export const metadata = { title: "Contact — Ecofy Africa" };

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactPageContent />
    </SiteShell>
  );
}
