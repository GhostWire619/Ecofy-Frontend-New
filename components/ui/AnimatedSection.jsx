"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AnimatedSection({ 
  children, 
  className = "", 
  animation = "fade-up",
  delay = 0,
  stagger = false,
  ...props 
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClasses = {
    "fade-up": "scroll-reveal",
    "fade-down": "scroll-reveal",
    "fade-left": "scroll-reveal-left",
    "fade-right": "scroll-reveal-right",
    "scale": "scroll-reveal-scale",
    "stagger": "stagger-children",
  };

  const animClass = stagger ? "stagger-children" : (animationClasses[animation] || "scroll-reveal");

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

export function AnimatedItem({ 
  children, 
  index = 0, 
  baseDelay = 100,
  className = "",
  animation = "fade-up",
  ...props 
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClasses = {
    "fade-up": "scroll-reveal",
    "fade-left": "scroll-reveal-left",
    "fade-right": "scroll-reveal-right",
    "scale": "scroll-reveal-scale",
  };

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

export function AnimatedCard({ 
  children, 
  className = "",
  hover = true,
  ...props 
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`scroll-reveal-scale ${isVisible ? "is-visible" : ""} ${hover ? "hover-lift" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
