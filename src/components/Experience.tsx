"use client";

import { motion } from "framer-motion";
import horsePortrait from "@/assets/horse-portrait.jpg";
import estateImg from "@/assets/estate.jpg";

const luxuryEase = [0.2, 0, 0, 1] as const;

const Experience = () => {
  return (
    <section id="experience" className="section-luxury relative">
      {/* Decorative pattern */}
      <div className="absolute inset-0 pattern-horseshoe pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: luxuryEase }}
        className="mb-16 md:mb-24 relative"
      >
        <p className="label-mono mb-4">The Estate</p>
        <h2 className="heading-display text-foreground text-4xl md:text-5xl lg:text-6xl max-w-3xl">
          A Sovereign<br />Standard
        </h2>
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: luxuryEase }}
        className="relative mb-16 md:mb-20 pl-6 border-l-2 border-primary/30 max-w-xl"
      >
        <p className="heading-display text-foreground/70 text-lg md:text-xl italic">
          "A horse is the projection of peoples' dreams about themselves — strong, powerful, beautiful."
        </p>
        <cite className="label-mono text-[10px] opacity-40 mt-3 block not-italic">— Pam Brown</cite>
      </motion.blockquote>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="relative overflow-hidden group"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img src={estateImg.src} alt="The Estate" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span className="label-mono mb-2 block">200+ Acres</span>
            <h3 className="heading-display text-foreground text-2xl md:text-3xl">Expansive Grounds</h3>
            <p className="prose-luxury text-sm mt-2 max-w-sm">Multiple arenas, cross-country courses, and pristine pastures stretching across the Indian countryside.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
          className="relative overflow-hidden group"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img src={horsePortrait.src} alt="Horse portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span className="label-mono mb-2 block">Heritage Breeds</span>
            <h3 className="heading-display text-foreground text-2xl md:text-3xl">Bloodline Excellence</h3>
            <p className="prose-luxury text-sm mt-2 max-w-sm">Curated collection of thoroughbreds, warmbloods, and Marwari horses — each bred for peak performance.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
