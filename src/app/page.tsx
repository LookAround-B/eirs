"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsShowcase from "@/components/ProductsShowcase";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CinematicIntro from "@/components/CinematicIntro";

const QuoteDivider = ({ quote, author }: { quote: string; author: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
    className="py-16 md:py-24 px-6 md:px-16 lg:px-24 text-center relative"
  >
    <div className="absolute left-1/2 top-0 w-px h-8 bg-primary/20 -translate-x-1/2" />
    <p className="heading-display text-foreground/40 text-lg md:text-2xl italic max-w-2xl mx-auto">
      "{quote}"
    </p>
    <cite className="label-mono text-[10px] opacity-30 mt-4 block not-italic">— {author}</cite>
    <div className="absolute left-1/2 bottom-0 w-px h-8 bg-primary/20 -translate-x-1/2" />
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CinematicIntro />
      <div className="noise-overlay" />

      <Navbar />
      <Hero />
      <ProductsShowcase />
      <QuoteDivider
        quote="No hour of life is wasted that is spent in the saddle"
        author="Winston Churchill"
      />
      <Stats />
      <Programs />
      <QuoteDivider
        quote="In riding a horse, we borrow freedom"
        author="Helen Thomson"
      />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;
