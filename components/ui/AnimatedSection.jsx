"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AnimatedSection({ 
  children, 
  className = "", 
  animation = "fade-up",
  delay = 0,
  ...props 
}) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    "fade-up": "anim-fade-up",
    "fade-down": "anim-fade-down",
    "fade-left": "anim-fade-left",
    "fade-right": "anim-fade-right",
    "scale": "anim-scale",
    "blur": "anim-blur",
  };

  const animClass = animationClasses[animation] || animationClasses["fade-up"];

  return (
    <div
      ref={ref}
      className={`${animClass} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
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
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    "fade-up": "anim-fade-up",
    "fade-down": "anim-fade-down",
    "fade-left": "anim-fade-left",
    "fade-right": "anim-fade-right",
    "scale": "anim-scale",
    "blur": "anim-blur",
  };

  const animClass = animationClasses[animation] || animationClasses["fade-up"];

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
