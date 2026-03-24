"use client";

import { type ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Animation = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "stagger";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number;
  stagger?: boolean;
  [key: string]: unknown;
}

const animationClasses: Record<string, string> = {
  "fade-up": "scroll-reveal",
  "fade-down": "scroll-reveal",
  "fade-left": "scroll-reveal-left",
  "fade-right": "scroll-reveal-right",
  scale: "scroll-reveal-scale",
  stagger: "stagger-children",
};

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  stagger = false,
  ...props
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animClass = stagger
    ? "stagger-children"
    : animationClasses[animation] || "scroll-reveal";

  return (
    <div
      ref={ref}
      className={`${animClass} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      {...props}
    >
      {children}
    </div>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  index?: number;
  baseDelay?: number;
  className?: string;
  animation?: Animation;
  [key: string]: unknown;
}

export function AnimatedItem({
  children,
  index = 0,
  baseDelay = 100,
  className = "",
  animation = "fade-up",
  ...props
}: AnimatedItemProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const animClass = animationClasses[animation] || "scroll-reveal";

  return (
    <div
      ref={ref}
      className={`${animClass} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${index * baseDelay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  [key: string]: unknown;
}

export function AnimatedCard({
  children,
  className = "",
  hover = true,
  ...props
}: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`scroll-reveal-scale ${isVisible ? "is-visible" : ""} ${hover ? "transition-transform hover:-translate-y-1" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
