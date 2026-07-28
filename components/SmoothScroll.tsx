"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";

/**
 * Wraps the page in Lenis smooth scrolling + a MotionConfig that honors
 * prefers-reduced-motion (transform animations are skipped, opacity kept).
 * Under reduced motion, Lenis is not mounted at all — native scrolling.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      {reducedMotion ? (
        children
      ) : (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  );
}
