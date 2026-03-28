import { navigation, footer, posts, blogCategories } from "@/lib/site-data";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import BlogList from "@/components/sections/BlogList";

export default function BlogLeftSidebarPage() {
  return (
    <>
      <TopBar />
      <Header navigation={navigation} />
      <main>
        <PageBanner
          eyebrow="Blog"
          title="Field intelligence and platform updates"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
          backgroundImage="/images/banners/blog-banner.jpg"
        />
        <section className="py-0 pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <BlogList posts={posts} categories={blogCategories} />
          </div>
        </section>
      </main>
      <Footer footer={footer} />
    </>
  );
}
