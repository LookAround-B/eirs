"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import aiCavalliImg from "@/assets/product-ai-cavalli.jpg";
import efmImg from "@/assets/product-efm.jpg";

import eventsImg from "@/assets/product-events.jpg";
import { EFM_APP_URL, EVENTS_APP_URL, AI_CAVALLI_APP_URL } from "@/lib/app-links";

const products = [
  {
    name: "Ai-Cavalli",
    tagline: "Ai-Cavalli, Reimagined",
    image: aiCavalliImg,
    href: AI_CAVALLI_APP_URL,
  },
  {
    name: "EFM",
    tagline: "Equestrian Facility Management",
    image: efmImg,
    href: EFM_APP_URL,
  },

  {
    name: "Events",
    tagline: "Bespoke Event Booking & Curation",
    image: eventsImg,
    href: EVENTS_APP_URL,
  },
];

const luxuryEase = [0.2, 0, 0, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: luxuryEase } },
};

const ProductsShowcase = () => {
  return (
    <section className="section-luxury">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: luxuryEase }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4"
      >
        <div>
          <p className="label-mono mb-4">Ecosystem</p>
          <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl">
            The EIRS Suite
          </h2>
        </div>
        <Link href="/products" className="group inline-flex items-center gap-2 label-mono text-primary hover:text-primary/80 transition-colors">
          View All Products →
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {products.map((product) => (
          <motion.div key={product.name} variants={itemVariants}>
            <Link
              href={product.href ?? "/products"}
              className="group relative block overflow-hidden border-subtle cursor-pointer transition-all duration-500 hover:shadow-[0_0_0_1px_hsl(355_83%_40%),0_0_20px_hsl(355_83%_40%/0.4)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={product.image.src}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="heading-display text-foreground text-xl md:text-2xl mb-1 transition-transform duration-500 group-hover:translate-x-2">{product.name}</h3>
                <p className="label-mono text-[10px] text-primary opacity-0 group-hover:opacity-80 transition-all duration-500 translate-y-2 group-hover:translate-y-0">{product.tagline}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductsShowcase;
