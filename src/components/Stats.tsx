"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Stables" },
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Acres" },
  { value: 1, suffix: "st", label: "Indian Olympian" },
];

const CountUp = ({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) => {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;
            setDisplay(decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString());
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, decimals]);

  return (
    <p ref={ref} className="heading-display text-foreground text-4xl md:text-5xl lg:text-6xl">
      {display}{suffix}
    </p>
  );
};

const Stats = () => {
  return (
    <section className="section-luxury border-y border-subtle relative">
      {/* Quote above stats */}
      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        className="text-center mb-16"
      >
        <p className="heading-display text-foreground/50 text-base md:text-lg italic max-w-2xl mx-auto">
          "The horse, with beauty unsurpassed, strength immeasurable, and grace unlike any other, still remains humble enough to carry a man upon his back."
        </p>
        <cite className="label-mono text-[10px] opacity-30 mt-3 block not-italic">— Amber Senti</cite>
      </motion.blockquote>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.2, 0, 0, 1] }}
            className="text-center md:text-left"
          >
            <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
            <p className="label-mono mt-3 opacity-80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
