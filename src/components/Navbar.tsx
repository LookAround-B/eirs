"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Programs", href: "/programs" },
  { label: "Experiences", href: "/experiences" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const isRoute = (href: string) => href.startsWith("/") && !href.includes("#");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-subtle py-4"
          : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex flex-col">
        <span className="heading-display text-3xl md:text-4xl text-foreground tracking-widest">EIRS</span>
        <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-[0.15em] text-muted-foreground leading-none mt-0.5">Embassy International Riding School</span>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: [0.2, 0, 0, 1] }}
          >
            {isRoute(link.href) ? (
              <Link
                href={link.href}
                className={`label-mono transition-all duration-300 hover:opacity-100 hover:text-primary ${
                  pathname === link.href ? "opacity-100 text-primary" : "opacity-60"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                className="label-mono transition-all duration-300 hover:opacity-100 hover:text-primary opacity-60"
              >
                {link.label}
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.2, 0, 0, 1] }}
      >
        <Link href="/book">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block relative overflow-hidden group border-subtle px-8 py-3 transition-all duration-500 hover:shadow-[0_0_20px_hsl(355_83%_40%/0.4)] hover:border-primary"
          >
            <span className="relative z-10 label-mono text-foreground group-hover:text-primary-foreground transition-colors duration-500">Book Session</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.button>
        </Link>
      </motion.div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-px bg-foreground"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-px bg-foreground"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-px bg-foreground"
          />
        </div>
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-sm px-6 overflow-hidden md:hidden border-subtle"
          >
            <div className="py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  {isRoute(link.href) ? (
                    <Link
                      href={link.href}
                      className="label-mono text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="label-mono text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
              <Link href="/book" onClick={() => setIsOpen(false)}>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="w-full py-4 bg-primary text-primary-foreground font-mono uppercase tracking-[0.1em] text-xs mt-4"
                >
                  Book Session
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
