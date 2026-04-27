"use client";

import { useSiteContent } from "@/components/providers/site-language-provider";
import PageBanner from "@/components/layout/PageBanner";
import BlogList from "@/components/sections/BlogList";

export default function BlogPageContent() {
  const { posts, blogCategories, ui } = useSiteContent();
  const pageCopy = ui.pages.blog;

  return (
    <main>
      <PageBanner
        eyebrow={pageCopy.banner.eyebrow}
        title={pageCopy.banner.title}
        breadcrumbs={pageCopy.banner.breadcrumbs}
        backgroundImage={pageCopy.banner.backgroundImage}
      />
      <section className="py-0 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <BlogList posts={posts} categories={blogCategories} />
        </div>
      </section>
    </main>
  );
}

