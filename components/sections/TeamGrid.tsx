"use client";

import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import type { TeamMember } from "@/lib/site-data";

interface TeamGridProps {
  members: TeamMember[];
}

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <AnimatedSection animation="fade-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, i) => (
          <AnimatedItem key={member.name} index={i} baseDelay={120}>
            <article className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/10 dark:border-zinc-800/50 rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
              <img
                src={member.image}
                alt={member.name}
                className="aspect-square object-cover w-full"
              />
              <div className="p-5">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {member.name}
                </h3>
                <p className="text-sm text-zinc-500">{member.role}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                  {member.bio}
                </p>
              </div>
            </article>
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>
  );
}
