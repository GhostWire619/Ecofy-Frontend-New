"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import type { Post } from "@/lib/site-data";
import { useSiteContent } from "@/components/providers/site-language-provider";

interface BlogListProps {
  posts: Post[];
  categories: string[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const { ui } = useSiteContent();
  const allCategoryLabel = ui.blogList.allCategoryLabel;
  const [activeCategory, setActiveCategory] = useState(allCategoryLabel);

  const filteredPosts =
    activeCategory === allCategoryLabel
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-12">
      {/* Sidebar */}
      <aside className="sticky top-32 self-start">
        <AnimatedSection animation="fade-right">
          <nav className="flex flex-col gap-1">
            {[allCategoryLabel, ...categories].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[#1f2a1f] dark:bg-white text-[#ffffff] dark:text-zinc-900"
                    : "text-[#3d4a3d] dark:text-zinc-400 hover:bg-[#f0f0f0] dark:hover:bg-zinc-800"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </AnimatedSection>
      </aside>

      {/* Main area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredPosts.map((post, index) => (
          <AnimatedItem key={post.href} index={index} baseDelay={100}>
            <a
              href={post.href}
              className="group block overflow-hidden rounded-2xl bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 shadow-lg no-underline"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-[#4d6b2f] dark:text-indigo-400 mb-2">
                  {post.category}
                </p>
                <h3 className="font-semibold text-[#1f2a1f] dark:text-zinc-100 mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-[#5f695d] mb-2">{post.date}</p>
                <p className="text-sm text-[#3d4a3d] dark:text-zinc-400">
                  {post.excerpt}
                </p>
              </div>
            </a>
          </AnimatedItem>
        ))}
      </div>
    </div>
  );
}
