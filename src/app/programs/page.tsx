"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dressageImg from "@/assets/dressage.jpg";
import showjumpingImg from "@/assets/showjumping.jpg";
import stableImg from "@/assets/stable.jpg";
import galleryArena from "@/assets/gallery-arena.jpg";
import galleryGallop from "@/assets/gallery-gallop.jpg";

const luxuryEase = [0.2, 0, 0, 1] as const;

const allPrograms = [
  {
    title: "Dressage",
    subtitle: "The Art of Movement",
    description: "Classical and competitive dressage programs guided by Olympic-level coaches. From introductory movements to Grand Prix test preparation, every detail of your progression is mapped.",
    image: dressageImg,
    duration: "12–48 Weeks",
    level: "Beginner to Advanced",
    tag: "01",
    features: ["Half-pass & Piaffe", "Musical Freestyle", "Competition Prep", "Horse & Rider Assessment"],
  },
  {
    title: "Show Jumping",
    subtitle: "Precision Over Fences",
    description: "Build confidence, technique, and competition readiness across progressively challenging courses. Our trainers develop your eye for distance and seat security over every fence height.",
    image: showjumpingImg,
    duration: "8–36 Weeks",
    level: "Novice to Grand Prix",
    tag: "02",
    features: ["Grid Work", "Course Design", "Speed Rounds", "International Circuits"],
  },
  {
    title: "Stable Management",
    subtitle: "The Science of Care",
    description: "Comprehensive equine care and facility operations training. Understand nutrition science, injury prevention, breeding programs, and the operational backbone of a world-class stable.",
    image: stableImg,
    duration: "4–16 Weeks",
    level: "All Levels",
    tag: "03",
    features: ["Equine Nutrition", "Veterinary Basics", "Breeding Programs", "Facility Operations"],
  },
  {
    title: "Arena Mastery",
    subtitle: "Foundation & Flatwork",
    description: "Foundational riding skills in our FEI-standard indoor and outdoor arenas. Develop a secure seat, soft hands, and effective aids that form the basis of every discipline.",
    image: galleryArena,
    duration: "Ongoing",
    level: "All Levels",
    tag: "05",
    features: ["Seat Development", "Lateral Work", "Transitions", "Rider Fitness"],
  },
];

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-8 px-6 md:px-16 lg:px-24">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
          className="label-mono mb-4"
        >
          Training Programs
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: luxuryEase }}
          className="heading-display text-foreground text-4xl md:text-5xl lg:text-7xl max-w-4xl"
        >
          Engineered<br />for Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: luxuryEase }}
          className="prose-luxury mt-6 max-w-xl text-base md:text-lg"
        >
          Five disciplines. Twelve Olympic trainers. A structured pathway from first ride to international competition.
        </motion.p>
      </section>

      {/* Programs — alternating layout */}
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 space-y-24 md:space-y-32">
        {allPrograms.map((program, i) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            {/* Image */}
            <div className={`relative overflow-hidden group ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="overflow-hidden">
                <img
                  src={program.image.src}
                  alt={program.title}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              {/* Red line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>

            {/* Content */}
            <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <span className="label-mono text-[10px] opacity-40 mb-4 block">{program.tag}</span>
              <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl mb-2">
                {program.title}
              </h2>
              <p className="label-mono text-sm text-primary mb-6">{program.subtitle}</p>
              <p className="prose-luxury text-sm md:text-base mb-8 max-w-md">{program.description}</p>

              {/* Feature list */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {program.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary flex-shrink-0" />
                    <span className="text-foreground text-xs font-mono">{f}</span>
                  </div>
                ))}
              </div>

              {/* Meta + CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <span className="border-subtle px-4 py-2 label-mono text-[10px] text-muted-foreground">
                  {program.duration}
                </span>
                <span className="border-subtle px-4 py-2 label-mono text-[10px] text-muted-foreground">
                  {program.level}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="section-luxury text-center border-t border-subtle">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: luxuryEase }}
        >
          <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Begin?
          </h2>
          <p className="prose-luxury max-w-lg mx-auto mb-10">
            Every journey starts with a single stride. Book your assessment session and let our trainers design your path.
          </p>
          <Link href="/book" className="inline-flex items-center justify-center border-subtle px-8 py-4 transition-all duration-500 hover:border-primary group relative overflow-hidden">
            <span className="relative z-10 label-mono group-hover:text-primary transition-colors">Book a Program</span>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
