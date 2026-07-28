"use client";

import { motion } from "motion/react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-16 text-center"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 left-1/4 h-[24rem] w-[24rem] rounded-full bg-sunset/10 blur-3xl"
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 text-sm uppercase tracking-[0.3em] text-steel"
      >
        Derek Beatty · Barber · Arizona
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-6xl leading-none tracking-wide text-cream sm:text-8xl md:text-9xl"
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
        className="mt-6 max-w-md text-base text-steel sm:text-lg"
      >
        Zero bad fades. Fresh cuts and sharp beards — ride in, walk out clean.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href={site.bookingUrl}
          className="rounded-full bg-sunset px-8 py-4 text-lg font-bold text-ink shadow-lg shadow-sunset/25 transition-transform hover:scale-105"
        >
          Book Now
        </a>
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-cream/20 px-6 py-4 text-sm font-semibold text-cream transition-colors hover:border-violet hover:text-violet"
        >
          Instagram
        </a>
        <a
          href={site.youtube}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-cream/20 px-6 py-4 text-sm font-semibold text-cream transition-colors hover:border-violet hover:text-violet"
        >
          YouTube
        </a>
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
