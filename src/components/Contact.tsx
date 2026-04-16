"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const luxuryEase = [0.2, 0, 0, 1] as const;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || name.length > 100) {
      toast.error("Please enter a valid name (max 100 characters).");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!message || message.length > 2000) {
      toast.error("Please enter a message (max 2000 characters).");
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your inquiry has been received. We'll be in touch shortly.");
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="section-luxury">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: luxuryEase }}
        >
          <p className="label-mono mb-4">Contact</p>
          <h2 className="heading-display text-foreground text-4xl md:text-5xl mb-6">
            Begin Your<br />Journey
          </h2>
          <p className="prose-luxury text-sm md:text-base max-w-md mb-10">
            Whether you're seeking training, stable management, or a private experience — our team will craft a bespoke program for you.
          </p>

          <div className="space-y-6">
            <div>
              <p className="label-mono text-[10px] opacity-50 mb-1">Location</p>
              <p className="text-foreground text-sm">Bangalore, India</p>
            </div>
            <div>
              <p className="label-mono text-[10px] opacity-50 mb-1">Email</p>
              <p className="text-foreground text-sm">info@eirs.in</p>
            </div>
            {/* <div>
              <p className="label-mono text-[10px] opacity-50 mb-1">Phone</p>
              <p className="text-foreground text-sm">+91 98765 43210</p>
            </div> */}
          </div>

          {/* Embedded map placeholder */}
          <div className="mt-10 relative overflow-hidden border-subtle aspect-[16/9]">
            <iframe
              title="EIRS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4754.856830200963!2d77.5952568!3d13.1737971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173bb0000001%3A0x4df4add27d009e2b!2sEmbassy%20International%20Riding%20School!5e1!3m2!1sen!2sin!4v1776339531545!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="label-mono text-[10px] opacity-50 mb-2 block">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                required
                className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/40"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="label-mono text-[10px] opacity-50 mb-2 block">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                maxLength={255}
                required
                className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/40"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="label-mono text-[10px] opacity-50 mb-2 block">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                maxLength={20}
                className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/40"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label htmlFor="interest" className="label-mono text-[10px] opacity-50 mb-2 block">
                I'm interested in
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="" className="bg-background">Select an option</option>
                <option value="dressage" className="bg-background">Dressage Training</option>
                <option value="jumping" className="bg-background">Show Jumping</option>
                <option value="stable" className="bg-background">Stable Management</option>
                <option value="trail" className="bg-background">Trail Rides</option>
                <option value="polo" className="bg-background">Polo</option>
                <option value="private" className="bg-background">Private Lessons</option>
                <option value="retreat" className="bg-background">Equestrian Retreat</option>
                <option value="products" className="bg-background">EIRS Products (Ai-Cavalli / EFM / Eclat Events)</option>
                <option value="other" className="bg-background">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="label-mono text-[10px] opacity-50 mb-2 block">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={2000}
                required
                rows={5}
                className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/40 resize-none"
                placeholder="Tell us about your goals..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative overflow-hidden group bg-primary px-8 py-4 transition-all duration-500 hover:shadow-[0_0_30px_hsl(355_83%_40%/0.4)] disabled:opacity-50"
            >
              <span className="relative z-10 label-mono text-primary-foreground">
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
