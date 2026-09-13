"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}