"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aiCavalliImg from "@/assets/product-ai-cavalli.jpg";
import efmImg from "@/assets/product-efm.jpg";
import eventsImg from "@/assets/product-events.jpg";
import { AI_CAVALLI_APP_URL, EFM_APP_URL, EVENTS_APP_URL } from "@/lib/app-links";

const products = [
  {
    name: "Ai-Cavalli",
    tagline: " Indo-Italian Restaurant",
    description:
      "An Indo-Italian cafe at EIRS where tradition, taste, and equestrian elegance come together in a refined culinary experience. From rich Italian flavors to soulful Indian classics, Ai-Cavalli blends cultures seamlessly for riders, guests, and enthusiasts alike.",
    image: aiCavalliImg,
    features: ["Indo-Italian Fusion", "Equestrian Cafe Experience", "Gourmet Dining", "Heritage Meets Modern Taste"],
    status: "Now Live",
    accent: "from-primary/20 to-transparent",
    href: AI_CAVALLI_APP_URL,
  },
  {
    name: "EFM",
    tagline: "Equestrian Facility Management",
    description:
      "End-to-end stable and facility management software. From feed scheduling and veterinary records to staff coordination and financial reporting - run your operation with precision.",
    image: efmImg,
    features: ["Stable Operations", "Vet Records", "Staff Management", "Financial Dashboard"],
    status: "Now Live",
    accent: "from-primary/15 to-transparent",
    href: EFM_APP_URL,
  },
  {
    name: "Events",
    tagline: "Estate Event Planning & Curation",
    description:
      "From elegant weddings and private celebrations to brand launches and corporate gatherings, EIRS curates memorable estate events with tailored planning, hospitality, and on-ground coordination.",
    image: eventsImg,
    features: ["Weddings & Galas", "Corporate Retreats", "Brand Launches", "Private Celebrations"],
    status: "Now Booking",
    accent: "from-primary/10 to-transparent",
    href: EVENTS_APP_URL,
  },
];

const luxuryEase = [0.2, 0, 0, 1] as const;

const Products = () => {
  const navigateTo = (href: string) => {
    window.location.assign(href);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar />

      <section className="pt-32 pb-8 px-6 md:px-16 lg:px-24">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
          className="label-mono mb-4"
        >
          Ecosystem
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: luxuryEase }}
          className="heading-display text-foreground text-4xl md:text-5xl lg:text-7xl max-w-4xl"
        >
          The EIRS
          <br />
          Product Suite
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: luxuryEase }}
          className="prose-luxury mt-6 max-w-xl text-base md:text-lg"
        >
          Three platforms. One mission. Transforming equestrian living through technology, hospitality, and community.
        </motion.p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 space-y-8">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: i * 0.05, ease: luxuryEase }}
            className="group relative overflow-hidden border-subtle cursor-pointer"
            role="link"
            tabIndex={0}
            onClick={() => navigateTo(product.href)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                navigateTo(product.href);
              }
            }}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[500px] ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={`relative overflow-hidden aspect-[4/3] lg:aspect-auto ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={product.image.src}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${product.accent}`} />
                <div className="absolute bottom-0 left-0 right-0 h-px lg:h-full lg:w-px lg:right-0 lg:left-auto lg:top-0 bg-primary scale-x-0 lg:scale-y-0 group-hover:scale-x-100 lg:group-hover:scale-y-100 transition-transform duration-700 origin-left lg:origin-top" />
              </div>

              <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-card ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="label-mono text-[10px] mb-4 block"
                >
                  0{i + 1} / Product
                </motion.span>

                <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl mb-2">
                  {product.name}
                </h2>
                <p className="label-mono text-sm opacity-70 mb-6">{product.tagline}</p>
                <p className="prose-luxury text-sm md:text-base mb-8 max-w-md">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="border-subtle px-4 py-2 label-mono text-[10px] text-muted-foreground transition-all duration-300 hover:text-primary hover:shadow-[0_0_0_1px_hsl(355_83%_40%/0.3)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={product.href}
                      className="relative inline-flex overflow-hidden group/btn bg-primary px-8 py-4 transition-all duration-500 hover:shadow-[0_0_30px_hsl(355_83%_40%/0.4)]"
                    >
                      <span className="relative z-10 label-mono text-primary-foreground">Open App</span>
                    </Link>
                  </motion.div>
                  <span className={`label-mono text-xs ${product.status === "Now Booking" ? "text-primary" : "text-muted-foreground"}`}>
                    {product.status}
                  </span>
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

export default Products;
