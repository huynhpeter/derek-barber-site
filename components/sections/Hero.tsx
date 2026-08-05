"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { site } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  // Scroll-linked parallax: content drifts down + fades as you scroll past,
  // glows drift the other way. Style transforms (not animations), so we guard
  // them manually for reduced motion.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const parallax = reducedMotion
    ? {}
    : { y: contentY, opacity: contentOpacity, scale: contentScale };

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-16 text-center"
    >
      {/* ambient glow */}
      <motion.div
        aria-hidden
        style={reducedMotion ? {} : { y: glowY }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={reducedMotion ? {} : { y: glowY }}
        className="pointer-events-none absolute -bottom-52 left-1/4 h-[24rem] w-[24rem] rounded-full bg-sunset/10 blur-3xl"
      />

      <motion.div style={parallax} className="flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-stone"
        >
          Derek Beatty · Barber · Arizona
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl leading-none tracking-wide text-charcoal sm:text-8xl md:text-9xl"
        >
          Two Wheels.
          <br />
          <span className="text-violet">One</span>{" "}
          <span className="text-sunset">Beard.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-md text-base text-stone sm:text-lg"
        >
          Fades, tapers, and beard work in Arizona. Book online, or walk in
          when the chair is open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href={site.bookingUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-sunset px-8 py-4 text-lg font-bold text-paper shadow-lg shadow-sunset/25"
          >
            Book Now
          </motion.a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-charcoal/20 px-6 py-4 text-sm font-semibold text-charcoal transition-colors hover:border-violet hover:text-violet"
          >
            Instagram
          </a>
          <a
            href={site.youtube}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-charcoal/20 px-6 py-4 text-sm font-semibold text-charcoal transition-colors hover:border-violet hover:text-violet"
          >
            YouTube
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-stone"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-6 w-px bg-gradient-to-b from-stone to-transparent"
        />
      </motion.div>

      {/* barber-pole micro-accent */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="pole-stripe absolute bottom-0 h-1.5 w-full"
      />
    </section>
  );
}
