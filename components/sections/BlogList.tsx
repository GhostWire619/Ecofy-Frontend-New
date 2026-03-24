"use client";

import { useState } from "react";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import type { Post } from "@/lib/site-data";

interface BlogListProps {
  posts: Post[];
  categories: string[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-12">
      {/* Sidebar */}
      <aside className="sticky top-32 self-start">
        <AnimatedSection animation="fade-right">
          <nav className="flex flex-col gap-1">
            {["All", ...categories].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
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
              className="glass-card group block overflow-hidden rounded-2xl no-underline"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400 mb-2">
                  {post.category}
                </p>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-2">{post.date}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
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
