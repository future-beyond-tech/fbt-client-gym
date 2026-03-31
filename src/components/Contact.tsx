"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Send, ArrowRight } from "lucide-react";
import GradientText from "./reactbits/GradientText";
import SpotlightCard from "./reactbits/SpotlightCard";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", phone: "", goal: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Nikhil! I'm ${formData.name}. My fitness goal is: ${formData.goal}. Please contact me at ${formData.phone}.`;
    window.open(`https://wa.me/919700780595?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#050505]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39ff14]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#39ff14] text-sm font-bold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3">
            Start Your{" "}
            <GradientText colors={["#39ff14", "#00f0ff", "#39ff14"]} animationSpeed={5}>
              Journey Today
            </GradientText>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Take the first step towards your transformation.
            Reach out and let&apos;s build the best version of you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#39ff14]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#39ff14]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Fitness Goal</label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#39ff14]/50 transition-colors appearance-none"
                >
                  <option value="" className="bg-black">Select your goal</option>
                  <option value="Weight Loss" className="bg-black">Weight Loss</option>
                  <option value="Muscle Gain" className="bg-black">Muscle Gain</option>
                  <option value="Lean Body Transformation" className="bg-black">Lean Body Transformation</option>
                  <option value="Bulk to Lean" className="bg-black">Bulk to Lean</option>
                  <option value="General Fitness" className="bg-black">General Fitness</option>
                  <option value="Inch Loss" className="bg-black">Inch Loss</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#39ff14] text-black font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" /> Send via WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <SpotlightCard spotlightColor="rgba(57, 255, 20, 0.12)" className="rounded-2xl">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#39ff14]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#39ff14]" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-gray-400 text-sm mt-1">Near HCL Campus, Hyderabad, Telangana</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone / WhatsApp</div>
                  <div className="text-gray-400 text-sm mt-1">+91 97007 80595</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <div className="font-semibold text-white">Availability</div>
                  <div className="text-gray-400 text-sm mt-1">Open by Appointment &mdash; Morning & Evening Batches</div>
                </div>
              </div>
            </div>
            </SpotlightCard>

            {/* Quick WhatsApp Button */}
            <a
              href="https://wa.me/919700780595?text=Hi%20Nikhil!%20I'm%20interested%20in%20training."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors group"
            >
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
              <div className="flex-1">
                <div className="font-semibold text-white">Chat on WhatsApp</div>
                <div className="text-sm text-gray-400">Typically replies within 1 hour</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#25D366] transition-colors" />
            </a>

            {/* Social */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Follow:</span>
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:border-[#E1306C]/50 hover:text-[#E1306C] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
