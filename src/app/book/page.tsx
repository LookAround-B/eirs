"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const luxuryEase = [0.2, 0, 0, 1] as const;

const sessionTypes = [
  { value: "dressage", label: "Dressage Training" },
  { value: "jumping", label: "Show Jumping" },
  { value: "trail", label: "Trail Ride" },
  { value: "private", label: "Private Lesson" },
  { value: "stable-tour", label: "Stable Tour" },
  { value: "retreat", label: "Equestrian Retreat" },
  { value: "event", label: "Event Booking" },
];

const quickInfo = [
  { icon: MapPin, label: "Location", value: "Bangalore, India" },
  { icon: Clock, label: "Riding Days", value: "Tuesday to Sunday" },
  { icon: Clock, label: "Riding Slots", value: "7 AM, 8 AM, 9 AM, 3 PM, 4 PM, 5 PM" },
  { icon: Clock, label: "Office Hours", value: "9 AM - 6:30 PM" },
  { icon: Phone, label: "Office", value: "+91 98440 65013" },
  { icon: Phone, label: "WhatsApp", value: "+91 73537 79533" },
  { icon: Mail, label: "Email", value: "info@eirs.app" },
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
      toast.success("Session request received! We will contact you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        sessionType: "",
        preferredDate: "",
        riders: "1",
        experience: "",
        message: "",
      });
    }, 1500);
  };

  const inputClass =
    "w-full bg-transparent border-b border-foreground/10 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/40";

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
        >
          <p className="label-mono mb-4">Book a Session</p>
          <h1 className="heading-display text-foreground text-4xl md:text-5xl lg:text-7xl max-w-3xl">
            Begin Your
            <br />
            Equestrian Journey
          </h1>
          <p className="prose-luxury text-base md:text-lg mt-6 max-w-2xl mb-10">
            Schedule a private session, arrange a stable tour, or plan an unforgettable experience at EIRS.
            Riding sessions are available Tuesday to Sunday at 7 AM, 8 AM, 9 AM, 3 PM, 4 PM, and 5 PM.
            Office hours are 9 AM to 6:30 PM.
          </p>
          <Link href="/book">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden group bg-primary px-10 py-4 transition-all duration-500 hover:shadow-[0_0_30px_hsl(355_83%_40%/0.4)] inline-flex items-center gap-3"
            >
              <span className="relative z-10 label-mono text-primary-foreground">Book a Session</span>
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
        className="px-6 md:px-16 lg:px-24 pb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {quickInfo.map((item) => (
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

      <section className="px-6 md:px-16 lg:px-24 pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-10 border-subtle bg-card/30 p-6 md:p-8">
            <p className="label-mono mb-3 opacity-60">Session Availability</p>
            <p className="prose-luxury text-sm md:text-base">
              Riding sessions are available Tuesday to Sunday in the following slots: 7 AM, 8 AM, 9 AM,
              3 PM, 4 PM, and 5 PM. Our office is open from 9 AM to 6:30 PM for bookings and general enquiries.
            </p>
          </div>

          <h2 className="heading-display text-foreground text-2xl md:text-3xl mb-8">Request a Session</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="label-mono text-[10px] opacity-50 mb-2 block">Full Name *</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="label-mono text-[10px] opacity-50 mb-2 block">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={255}
                  required
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="label-mono text-[10px] opacity-50 mb-2 block">Session Type *</label>
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                  required
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-background">
                    Select a session
                  </option>
                  {sessionTypes.map((sessionType) => (
                    <option key={sessionType.value} value={sessionType.value} className="bg-background">
                      {sessionType.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="label-mono text-[10px] opacity-50 mb-2 block">Preferred Date</label>
                <input
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                />
              </div>
              <div>
                <label className="label-mono text-[10px] opacity-50 mb-2 block">Number of Riders</label>
                <select
                  name="riders"
                  value={formData.riders}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  {[1, 2, 3, 4, "5+"].map((riderCount) => (
                    <option key={riderCount} value={riderCount} className="bg-background">
                      {riderCount}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label-mono text-[10px] opacity-50 mb-2 block">Riding Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-background">
                    Select level
                  </option>
                  <option value="beginner" className="bg-background">
                    Beginner
                  </option>
                  <option value="intermediate" className="bg-background">
                    Intermediate
                  </option>
                  <option value="advanced" className="bg-background">
                    Advanced
                  </option>
                  <option value="professional" className="bg-background">
                    Professional
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="label-mono text-[10px] opacity-50 mb-2 block">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={2000}
                required
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your goals and any special requirements..."
              />
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
      </section>

      <Footer />
    </div>
  );
};

export default BookSession;
