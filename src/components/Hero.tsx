"use client";

import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/2k.mp4" type="video/mp4" />
      </video>



      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-20 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0, 0, 1] }}
          className="label-mono mb-6"
        >
          India's Premier Equestrian School
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0, 0, 1] }}
          className="heading-display text-foreground"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.95 }}
        >
          Precision<br />in Motion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.2, 0, 0, 1] }}
          className="prose-luxury mt-6 max-w-lg text-base md:text-lg"
        >
          Where heritage meets high-performance engineering. The sovereign standard of equestrian excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.2, 0, 0, 1] }}
          className="flex gap-4 mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden group bg-primary px-8 py-4 transition-all duration-500 hover:shadow-[0_0_30px_hsl(355_83%_40%/0.4)]"
          >
            <span className="relative z-10 font-mono uppercase tracking-[0.1em] text-xs text-primary-foreground">Explore Programs</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden group border-subtle px-8 py-4 transition-all duration-500 hover:shadow-[0_0_20px_hsl(355_83%_40%/0.4)]"
          >
            <span className="relative z-10 label-mono text-foreground">View Stables</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
