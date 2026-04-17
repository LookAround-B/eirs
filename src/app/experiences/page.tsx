"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import expTrail from "@/assets/exp-trail.jpg";
import expPolo from "@/assets/exp-polo.jpg";
import expPrivate from "@/assets/exp-private.jpg";
import expRetreat from "@/assets/exp-retreat.jpg";

const luxuryEase = [0.2, 0, 0, 1] as const;

const experiences = [
  {
    title: "Trail Rides",
    subtitle: "Into the Wild",
    description:
      "Urban Forest, Bengaluru and open plains of the Bengaluru countryside. Dawn and dusk rides available, with experienced guides leading routes through private estate trails and surrounding wilderness.",
    image: expTrail,
    duration: "2–4 Hours",
    level: "All Levels",
    tag: "01",
  },
  {
    title: "Private / semi private / group lessons",
    subtitle: "Skills mastery",
    description:
      "Personalized instruction from National and International level. Whether you're a beginner finding your seat or an advanced rider perfecting your half-pass, every session is tailored to your exact progression.",
    image: expPrivate,
    duration: "45–60 Min",
    level: "All Levels",
    tag: "03",
  },
  {
    title: "Equestrian Retreats",
    subtitle: "Live the Estate",
    description:
      "Multi-day immersive stays at the estate. Morning rides, afternoon training, evening dining under the stars. A complete luxury equestrian experience blending sport, wellness, and countryside living.",
    image: expRetreat,
    duration: "3–7 Days",
    level: "All Levels",
    tag: "04",
  },
];

const Experiences = () => {
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
          Experiences
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: luxuryEase }}
          className="heading-display text-foreground text-4xl md:text-5xl lg:text-7xl max-w-3xl"
        >
          Beyond the<br />Arena
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: luxuryEase }}
          className="prose-luxury mt-6 max-w-xl text-base md:text-lg"
        >
          Curated encounters designed for those who seek more than observation. Every experience at EIRS is a story written between rider and horse.
        </motion.p>
      </section>

      {/* Experience cards — alternating full-width cinematic */}
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="group relative overflow-hidden"
          >
            {/* Full-width image card */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img
                src={exp.image.src}
                alt={exp.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.4]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />

              {/* Red accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16">
                <span className="label-mono text-[10px] opacity-50 mb-3">{exp.tag}</span>
                <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl mb-1">
                  {exp.title}
                </h2>
                <p className="label-mono text-sm text-primary mb-4">{exp.subtitle}</p>
                <p className="prose-luxury text-sm max-w-lg mb-6 hidden md:block">{exp.description}</p>

                {/* Meta pills */}
                <div className="flex gap-4 items-center">
                  <span className="border-subtle px-4 py-2 label-mono text-[10px] text-muted-foreground">
                    {exp.duration}
                  </span>
                  <span className="border-subtle px-4 py-2 label-mono text-[10px] text-muted-foreground">
                    {exp.level}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="ml-auto relative overflow-hidden group/btn bg-primary px-6 py-3 transition-all duration-500 hover:shadow-[0_0_20px_hsl(355_83%_40%/0.4)] hidden md:block"
                  >
                    <span className="relative z-10 label-mono text-primary-foreground text-[10px]">Book Now</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Experiences;
