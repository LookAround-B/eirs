"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dressageImg from "@/assets/dressage.jpg";
import showjumpingImg from "@/assets/showjumping.jpg";
import stableImg from "@/assets/stable.jpg";
import { EFM_APP_URL } from "@/lib/app-links";

const programs = [
  {
    title: "Dressage",
    description: "The art of trained movements. Classical and competitive programs guided by Olympic-level coaches.",
    image: dressageImg,
    tag: "01",
  },
  {
    title: "Show Jumping",
    description: "Precision over fences. Build confidence and technique across progressive courses.",
    image: showjumpingImg,
    tag: "02",
  },
  {
    title: "Stable Management",
    description: "World-class care and facility operations. 74 stalls designed for peak equine wellness.",
    image: stableImg,
    tag: "03",
    href: EFM_APP_URL,
  },
];

const luxuryEase = [0.2, 0, 0, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: luxuryEase } },
};

const Programs = () => {
  return (
    <section id="programs" className="section-luxury relative">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: luxuryEase }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-4"
      >
        <div>
          <p className="label-mono mb-4">Programs</p>
          <h2 className="heading-display text-foreground text-4xl md:text-5xl lg:text-6xl max-w-2xl">
            The Calculus of Power
          </h2>
        </div>
        <Link href="/programs" className="group inline-flex items-center gap-2 label-mono text-primary hover:text-primary/80 transition-colors">
          View All Programs {"->"}
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {programs.map((program) => {
          const cardContent = (
            <>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={program.image.src}
                  alt={program.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="label-mono opacity-60 mb-2 block">{program.tag}</span>
                <h3 className="heading-display text-foreground text-2xl md:text-3xl mb-3 transition-transform duration-500 group-hover:translate-x-2">{program.title}</h3>
                <p className="prose-luxury text-sm transition-opacity duration-500">{program.description}</p>

                <div className="mt-6 overflow-hidden h-0 group-hover:h-10 transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)]">
                  <span className="label-mono text-primary">{program.href ? "Open EFM App ->" : "View Program ->"}</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </>
          );

          return (
            <motion.div
              key={program.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            >
              {program.href ? (
                <Link
                  href={program.href}
                  className="group relative block overflow-hidden bg-card cursor-pointer transition-shadow duration-500 hover:shadow-[0_0_0_1px_hsl(355_83%_40%),0_0_20px_hsl(355_83%_40%/0.4)]"
                >
                  {cardContent}
                </Link>
              ) : (
                <div className="group relative overflow-hidden bg-card cursor-pointer transition-shadow duration-500 hover:shadow-[0_0_0_1px_hsl(355_83%_40%),0_0_20px_hsl(355_83%_40%/0.4)]">
                  {cardContent}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Programs;
