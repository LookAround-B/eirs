"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const luxuryEase = [0.2, 0, 0, 1] as const;

const team = [
  {
    name: "Rajveer Singh Rathore",
    role: "Founder & Head Trainer",
    specialty: "Dressage & Show Jumping",
    email: "rajveer@eirs.in",
    phone: "+91 98765 43210",
  },
  {
    name: "Ananya Kapoor",
    role: "Programs Director",
    specialty: "Equestrian Programs & Youth Development",
    email: "ananya@eirs.in",
    phone: "+91 98765 43211",
  },
  {
    name: "Col. Vikram Mehta (Retd.)",
    role: "Stable Manager",
    specialty: "Stable Operations & Equine Welfare",
    email: "vikram@eirs.in",
    phone: "+91 98765 43212",
  },
  {
    name: "Priya Sharma",
    role: "Guest Relations & Events",
    specialty: "Experiences, Retreats & Éclat Events",
    email: "priya@eirs.in",
    phone: "+91 98765 43213",
  },
];

const sessionTypes = [
  { value: "dressage", label: "Dressage Training" },
  { value: "jumping", label: "Show Jumping" },
  { value: "trail", label: "Trail Ride" },
  { value: "polo", label: "Polo Introduction" },
  { value: "private", label: "Private Lesson" },
  { value: "stable-tour", label: "Stable Tour" },
  { value: "retreat", label: "Equestrian Retreat" },
  { value: "event", label: "Event Booking" },
  { value: "product-demo", label: "Product Demo (Ai-Cavalli / EFM)" },
  { value: "other", label: "Other" },
];

const BookSession = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    preferredDate: "",
    riders: "1",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, sessionType, message } = formData;
    if (!name.trim() || !email.trim() || !sessionType || !message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Session request received! Our team will contact you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", sessionType: "", preferredDate: "", riders: "1", experience: "", message: "" });
    }, 1500);
  };

  const inputClass = "w-full bg-transparent border-b border-foreground/10 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/40";

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
        >
          <p className="label-mono mb-4">Book a Session</p>
          <h1 className="heading-display text-foreground text-4xl md:text-5xl lg:text-7xl max-w-3xl">
            Begin Your<br />Equestrian Journey
          </h1>
          <p className="prose-luxury text-base md:text-lg mt-6 max-w-xl">
            Schedule a private session, arrange a stable tour, or plan an unforgettable experience at EIRS.
          </p>
        </motion.div>
      </section>

      {/* Quick info bar */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
        className="px-6 md:px-16 lg:px-24 pb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: MapPin, label: "Location", value: "Rajasthan, India" },
            { icon: Clock, label: "Sessions", value: "6:00 AM – 6:00 PM" },
            { icon: Phone, label: "Helpline", value: "+91 98765 43210" },
            { icon: Mail, label: "Email", value: "bookings@eirs.in" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-start gap-3 p-5 border-subtle bg-card/50">
              <item.icon size={16} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="label-mono text-[10px] opacity-50 mb-1">{item.label}</p>
                <p className="text-foreground text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Main content: Form + Team */}
      <section className="px-6 md:px-16 lg:px-24 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="lg:col-span-3"
          >
            <h2 className="heading-display text-foreground text-2xl md:text-3xl mb-8">Request a Session</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-mono text-[10px] opacity-50 mb-2 block">Full Name *</label>
                  <input name="name" type="text" value={formData.name} onChange={handleChange} maxLength={100} required className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="label-mono text-[10px] opacity-50 mb-2 block">Email *</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} maxLength={255} required className={inputClass} placeholder="your@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-mono text-[10px] opacity-50 mb-2 block">Phone</label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} maxLength={20} className={inputClass} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="label-mono text-[10px] opacity-50 mb-2 block">Session Type *</label>
                  <select name="sessionType" value={formData.sessionType} onChange={handleChange} required className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" className="bg-background">Select a session</option>
                    {sessionTypes.map((t) => (
                      <option key={t.value} value={t.value} className="bg-background">{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="label-mono text-[10px] opacity-50 mb-2 block">Preferred Date</label>
                  <input name="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} className={`${inputClass} cursor-pointer`} />
                </div>
                <div>
                  <label className="label-mono text-[10px] opacity-50 mb-2 block">Number of Riders</label>
                  <select name="riders" value={formData.riders} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    {[1, 2, 3, 4, "5+"].map((n) => (
                      <option key={n} value={n} className="bg-background">{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label-mono text-[10px] opacity-50 mb-2 block">Riding Experience</label>
                  <select name="experience" value={formData.experience} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" className="bg-background">Select level</option>
                    <option value="beginner" className="bg-background">Beginner</option>
                    <option value="intermediate" className="bg-background">Intermediate</option>
                    <option value="advanced" className="bg-background">Advanced</option>
                    <option value="professional" className="bg-background">Professional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="label-mono text-[10px] opacity-50 mb-2 block">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} maxLength={2000} required rows={4} className={`${inputClass} resize-none`} placeholder="Tell us about your goals and any special requirements..." />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto relative overflow-hidden group bg-primary px-12 py-4 transition-all duration-500 hover:shadow-[0_0_30px_hsl(355_83%_40%/0.4)] disabled:opacity-50"
              >
                <span className="relative z-10 font-mono uppercase tracking-[0.1em] text-xs text-primary-foreground">
                  {isSubmitting ? "Sending..." : "Request Session"}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Team — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
            className="lg:col-span-2"
          >
            <h2 className="heading-display text-foreground text-2xl md:text-3xl mb-8">Our Team</h2>
            <div className="space-y-6">
              {team.map((person, i) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: luxuryEase }}
                  className="p-5 border-subtle bg-card/30 hover:bg-card/60 transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 shrink-0 bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Users size={16} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-foreground text-sm font-medium">{person.name}</h3>
                      <p className="label-mono text-[10px] opacity-60 mt-0.5">{person.role}</p>
                      <p className="prose-luxury text-xs mt-2">{person.specialty}</p>
                      <div className="mt-3 flex flex-col gap-1.5">
                        <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-xs prose-luxury hover:text-primary transition-colors duration-300">
                          <Mail size={11} className="text-primary shrink-0" />
                          {person.email}
                        </a>
                        <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-xs prose-luxury hover:text-primary transition-colors duration-300">
                          <Phone size={11} className="text-primary shrink-0" />
                          {person.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 relative overflow-hidden border-subtle aspect-[16/10]">
              <iframe
                title="EIRS Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDcnMTQuMyJF!5e0!3m2!1sen!2sin!4v1"
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookSession;
