"use client";

import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import type { Post } from "@/lib/site-data";

interface NewsSectionProps {
  posts: Post[];
}

export default function NewsSection({ posts }: NewsSectionProps) {
  const [featured, left, right] = posts;

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6">
      <AnimatedSection animation="fade-up">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              Journal
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent">
              Field intelligence, platform notes, and transformation updates
            </h2>
          </div>
          <a
            className="inline-flex px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-medium hover:opacity-90 transition no-underline shrink-0"
            href="/blog-left-sidebar"
          >
            View all posts
          </a>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <AnimatedSection animation="fade-right" delay={100}>
          <article className="lg:col-span-3 relative group overflow-hidden rounded-2xl aspect-[4/3]">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-xs text-zinc-300">{featured.date}</span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                {featured.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-300 line-clamp-2">
                {featured.excerpt}
              </p>
              <a
                href={featured.href}
                className="mt-4 inline-flex px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-medium hover:opacity-90 transition no-underline self-start"
              >
                Read article
              </a>
            </div>
          </article>
        </AnimatedSection>

        <div className="lg:col-span-2 flex flex-col gap-6">
          {[left, right].map((post, index) => (
            <AnimatedItem
              key={post.title}
              index={index}
              baseDelay={200}
              animation="fade-left"
            >
              <article className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg overflow-hidden flex flex-row h-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-28 sm:w-36 object-cover flex-shrink-0"
                />
                <div className="flex flex-col justify-center p-4 gap-1">
                  <span className="text-xs text-zinc-400">{post.date}</span>
                  <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white line-clamp-2">
                    {post.title}
                  </h3>
                  <a
                    href={post.href}
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition no-underline"
                  >
                    Explore
                  </a>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
