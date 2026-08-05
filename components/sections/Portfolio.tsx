"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { Reveal } from "@/components/Reveal";
import { portfolio } from "@/lib/site";

export function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="font-display text-5xl tracking-wide text-charcoal sm:text-6xl">
          The <span className="text-violet">Work</span>
        </h2>
        <p className="mt-3 max-w-lg text-stone">
          Cuts and beard work from the chair.
          {/* TODO: replace placeholder tiles with real photos from Derek;
              later: YouTube Data API feed, then Instagram. */}
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {portfolio.map((tile, i) => (
          <Reveal key={tile.label} delay={i * 0.06}>
            <motion.button
              type="button"
              onClick={() => setActive(i)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`View: ${tile.label}`}
              className="group relative flex aspect-square w-full items-end justify-start overflow-hidden rounded-xl border border-charcoal/10 p-4 text-left transition-colors hover:border-violet/40"
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/70 to-transparent"
              />
              <span className="relative text-sm text-paper">{tile.label}</span>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <Lightbox active={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </section>
  );
}

function Lightbox({
  active,
  onClose,
  onNavigate,
}: {
  active: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const lenis = useLenis();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const open = active !== null;

  const step = useCallback(
    (dir: 1 | -1) => {
      if (active === null) return;
      onNavigate((active + dir + portfolio.length) % portfolio.length);
    },
    [active, onNavigate],
  );

  // Scroll lock + focus management while open
  useEffect(() => {
    if (!open) return;
    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      restoreFocusRef.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Keyboard: ESC closes, arrows navigate, Tab cycles within the dialog
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button, [href]",
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, step]);

  const tile = active !== null ? portfolio[active] : null;

  return (
    <AnimatePresence>
      {tile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-paper/90 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={tile.label}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl"
          >
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative aspect-square w-full overflow-hidden rounded-2xl border border-charcoal/15"
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(min-width: 672px) 672px, 100vw"
                className="object-cover"
              />
            </motion.div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-stone">
                {(active ?? 0) + 1} / {portfolio.length} · {tile.label}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="rounded-full border border-charcoal/20 px-4 py-2 text-sm text-charcoal transition-colors hover:border-violet hover:text-violet"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="rounded-full border border-charcoal/20 px-4 py-2 text-sm text-charcoal transition-colors hover:border-violet hover:text-violet"
                >
                  →
                </button>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close viewer"
                  className="rounded-full bg-sunset px-4 py-2 text-sm font-semibold text-paper transition-transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
