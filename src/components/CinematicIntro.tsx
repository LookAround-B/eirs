"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "eirs_intro_seen";

export default function CinematicIntro() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setShow(true);
      sessionStorage.setItem(STORAGE_KEY, "1");

      // Phase timeline
      const holdTimer = setTimeout(() => setPhase("hold"), 600);
      const outTimer  = setTimeout(() => setPhase("out"),  2800);
      const hideTimer = setTimeout(() => setShow(false),   4200);

      return () => {
        clearTimeout(holdTimer);
        clearTimeout(outTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {/* ── Top panel ─────────────────────────────────── */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-[hsl(0,0%,4.3%)]"
            initial={{ y: 0 }}
            animate={phase === "out" ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />
          {/* ── Bottom panel ──────────────────────────────── */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[hsl(0,0%,4.3%)]"
            initial={{ y: 0 }}
            animate={phase === "out" ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />

          {/* ── Center content (fades out before panels split) ── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-6 select-none"
            initial={{ opacity: 0 }}
            animate={
              phase === "out"
                ? { opacity: 0 }
                : phase === "hold"
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Wordmark */}
            <motion.p
              className="font-mono uppercase tracking-[0.45em] text-xs text-[hsl(355,83%,40%)]"
              initial={{ opacity: 0, y: 8 }}
              animate={phase !== "in" ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            >
              Embassy International
            </motion.p>

            {/* Main title */}
            <motion.h1
              className="text-center leading-[0.92] text-foreground"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(3.5rem, 12vw, 9rem)",
                letterSpacing: "-0.04em",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={phase !== "in" ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.2, 0, 0, 1] }}
            >
              Riding School
            </motion.h1>

            {/* Divider line sweep */}
            <motion.div
              className="h-px bg-[hsl(355,83%,40%)] origin-left"
              style={{ width: "clamp(120px, 20vw, 200px)" }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={phase !== "in" ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.2, 0, 0, 1] }}
            />

            {/* Tagline */}
            <motion.p
              className="font-mono uppercase tracking-[0.2em] text-[10px] text-foreground/40"
              initial={{ opacity: 0 }}
              animate={phase !== "in" ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
            >
              Precision · Heritage · Excellence
            </motion.p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
