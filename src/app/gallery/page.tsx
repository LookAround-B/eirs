"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import all gallery images
import heroHorse from "@/assets/hero-horse.jpg";
import dressage from "@/assets/dressage.jpg";
import showjumping from "@/assets/showjumping.jpg";
import stable from "@/assets/stable.jpg";
import horsePortrait from "@/assets/horse-portrait.jpg";
import estate from "@/assets/estate.jpg";
import gallerySaddle from "@/assets/gallery-saddle.jpg";
import galleryRider from "@/assets/gallery-rider.jpg";
import galleryGallop from "@/assets/gallery-gallop.jpg";
import galleryArena from "@/assets/gallery-arena.jpg";
import galleryWhiteHorse from "@/assets/gallery-white-horse.jpg";
import galleryAerial from "@/assets/gallery-aerial.jpg";
import galleryBridle from "@/assets/gallery-bridle.jpg";
import galleryHerd from "@/assets/gallery-herd.jpg";

interface GalleryImage {
  src: string;
  title: string;
  category: string;
  hotspot?: string;
  aspect: "landscape" | "portrait" | "square";
}

const images: GalleryImage[] = [
  { src: heroHorse, title: "Black Stallion", category: "Horses", hotspot: "Friesian Stallion — 17.2 hands", aspect: "landscape" },
  { src: galleryWhiteHorse, title: "Andalusian Grace", category: "Horses", hotspot: "Andalusian Mare — Pure Spanish", aspect: "portrait" },
  { src: dressage, title: "Piaffe", category: "Dressage", hotspot: "Grand Prix Dressage — Score 78.4%", aspect: "portrait" },
  { src: galleryArena, title: "The Arena", category: "Facility", hotspot: "Indoor Arena — 80m × 40m, FEI Standard", aspect: "landscape" },
  { src: gallerySaddle, title: "Precision Tack", category: "Equipment", hotspot: "Custom Hermès Saddle — Hand-stitched", aspect: "landscape" },
  { src: showjumping, title: "Airborne", category: "Show Jumping", hotspot: "1.60m Grand Prix — Clear Round", aspect: "portrait" },
  { src: galleryGallop, title: "Water Cross", category: "Training", hotspot: "Cross-Country Water Complex — Phase 3", aspect: "landscape" },
  { src: galleryRider, title: "Golden Hour", category: "Life", hotspot: "Evening Hack — Rajasthan Countryside", aspect: "portrait" },
  { src: stable, title: "The Stables", category: "Facility", hotspot: "74 Stalls — Climate-controlled, Oak finish", aspect: "portrait" },
  { src: galleryBridle, title: "Chrome & Leather", category: "Equipment", hotspot: "Loose Ring Snaffle — German Silver", aspect: "square" },
  { src: estate, title: "Estate Aerial", category: "Facility", hotspot: "200+ Acres — 4 Competition Arenas", aspect: "landscape" },
  { src: galleryHerd, title: "Morning Run", category: "Horses", hotspot: "Turnout — 3 Thoroughbred Geldings", aspect: "landscape" },
  { src: horsePortrait, title: "Silent Power", category: "Horses", hotspot: "Marwari Stallion — Breed Heritage", aspect: "landscape" },
  { src: galleryAerial, title: "The Ring", category: "Facility", hotspot: "Outdoor Menage — 60m × 20m, Sand & Fibre", aspect: "landscape" },
];

const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="label-mono mb-4"
        >
          Gallery
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0, 0, 1] }}
          className="heading-display text-foreground text-4xl md:text-5xl lg:text-7xl"
        >
          Visual Archive
        </motion.h1>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0, 0, 1] }}
          className="flex flex-wrap gap-3 mt-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`label-mono text-xs px-5 py-2.5 transition-all duration-400 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border-subtle text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Masonry grid */}
      <section className="px-6 md:px-16 lg:px-24 pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
                className="relative mb-4 break-inside-avoid group cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedImage(img)}
              >
                <div
                  className={`overflow-hidden ${
                    img.aspect === "portrait" ? "aspect-[3/4]" : img.aspect === "square" ? "aspect-square" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
                  />
                </div>

                {/* Hotspot overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Red accent line at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                  <span className="label-mono text-[10px] opacity-60 mb-1">{img.category}</span>
                  <h3 className="heading-display text-foreground text-xl md:text-2xl mb-2">{img.title}</h3>
                  {img.hotspot && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={hoveredIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
                      className="font-mono text-xs text-primary tracking-wide"
                    >
                      {img.hotspot}
                    </motion.p>
                  )}
                </div>

                {/* Subtle red glow on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_-40px_40px_-20px_hsl(355_83%_40%/0.15)]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-md flex items-center justify-center p-6 md:p-16 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="mt-6 text-center">
                <span className="label-mono text-xs opacity-60 mb-1 block">{selectedImage.category}</span>
                <h3 className="heading-display text-foreground text-2xl md:text-3xl">{selectedImage.title}</h3>
                {selectedImage.hotspot && (
                  <p className="font-mono text-xs text-primary tracking-wide mt-2">{selectedImage.hotspot}</p>
                )}
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 label-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
