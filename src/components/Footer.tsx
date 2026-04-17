"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const luxuryEase = [0.2, 0, 0, 1] as const;

const footerLinks = [
  { label: "Products", href: "/products" },
  { label: "Programs", href: "/programs" },
  { label: "Experiences", href: "/experiences" },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: luxuryEase }}
      className="relative overflow-hidden"
    >
      <div className="section-luxury border-t border-subtle">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="label-mono mb-3 opacity-60">Ready to Begin?</p>
            <h3 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl max-w-lg">
              Your journey starts with a single stride
            </h3>
          </div>
          <Link href="/book">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden group bg-primary px-10 py-4 transition-all duration-500 hover:shadow-[0_0_30px_hsl(355_83%_40%/0.4)] flex items-center gap-3"
            >
              <span className="relative z-10 label-mono text-primary-foreground">Book a Session</span>
              <ArrowUpRight size={16} className="relative z-10 text-primary-foreground" />
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 py-16 md:py-20 border-t border-subtle">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <h3 className="heading-display text-foreground text-5xl md:text-6xl mb-1 tracking-widest">EIRS</h3>
            <p className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-5">
              Embassy International Riding School
            </p>
            <p className="prose-luxury text-sm max-w-sm mb-8">
              India's premier equestrian school. Where heritage meets high-performance engineering across 200+ acres of sovereign grounds.
            </p>

            <div className="flex gap-8">
              {[
                { val: "100+", label: "Stables" },
                { val: "12", label: "Trainers" },
                { val: "200+", label: "Acres" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="heading-display text-foreground text-2xl">{stat.val}</p>
                  <p className="label-mono text-[9px] opacity-40 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="label-mono mb-6 opacity-60">Navigate</p>
            <div className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 prose-luxury text-sm hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 -translate-y-0.5 group-hover:opacity-60 group-hover:translate-y-0 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="label-mono mb-6 opacity-60">Get in Touch</p>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@eirs.app" className="flex items-center gap-3 prose-luxury text-sm hover:text-primary transition-colors duration-300">
                <Mail size={14} className="text-primary shrink-0" />
                info@eirs.app
              </a>
              <a href="https://wa.me/917353779533" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 prose-luxury text-sm hover:text-primary transition-colors duration-300">
                <Phone size={14} className="text-primary shrink-0" />
                +91 73537 79533 (Preferably WhatsApp)
              </a>
              <a href="tel:+919844065013" className="flex items-center gap-3 prose-luxury text-sm hover:text-primary transition-colors duration-300">
                <Phone size={14} className="text-primary shrink-0" />
                +91 98440 65013 (Office)
              </a>
              <div className="flex items-start gap-3 prose-luxury text-sm">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>
                  Embassy International Riding School,
                  <br />
                  Bangalore, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 py-6 border-t border-subtle flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="prose-luxury text-xs">(c) 2026 EIRS. All rights reserved.</p>
        <p className="label-mono text-[10px] opacity-30">Precision in Every Stride</p>
        <p className="prose-luxury text-xs opacity-40">
          Powered by{" "}
          <a
            href="https://lookaround.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-80 transition-opacity"
          >
            LookAround
          </a>
        </p>
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <span className="heading-display text-[20rem] md:text-[28rem] leading-none text-foreground block -mb-20 -mr-10">
          EIRS
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;
