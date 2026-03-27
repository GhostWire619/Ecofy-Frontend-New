"use client";

import Image from "next/image";
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
            <article className="bg-[#ffffff] dark:bg-zinc-900/80 border border-[#1f2a1f]/10 dark:border-zinc-800/50 rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="aspect-square object-cover w-full"
              />
              <div className="p-5">
                <h3 className="font-semibold text-[#1f2a1f] dark:text-zinc-100">
                  {member.name}
                </h3>
                <p className="text-sm text-[#4d6b2f] dark:text-indigo-400">{member.role}</p>
                <p className="text-sm text-[#3d4a3d] dark:text-zinc-400 mt-2">
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
