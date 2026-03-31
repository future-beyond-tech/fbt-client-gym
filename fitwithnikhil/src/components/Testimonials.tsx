"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rahul K.",
    role: "IT Professional, HCL",
    text: "Lost 25 kgs in just 4 months! Nikhil's training approach is completely different. He doesn't just train your body, he transforms your mindset. The diet plan was easy to follow and the results speak for themselves.",
    rating: 5,
    result: "-25 kgs",
  },
  {
    name: "Priya S.",
    role: "Software Engineer",
    text: "I was skeptical about personal training but Nikhil proved me wrong. His group classes are high-energy and the 1-on-1 sessions are incredibly detailed. Down 15 kgs and feeling stronger than ever!",
    rating: 5,
    result: "-15 kgs",
  },
  {
    name: "Vikram M.",
    role: "Business Analyst",
    text: "The bulk-to-lean program was exactly what I needed. Nikhil designed a program that helped me cut fat while building muscle. My colleagues barely recognize me now. Best investment in myself!",
    rating: 5,
    result: "Lean Body",
  },
  {
    name: "Ananya R.",
    role: "Marketing Manager",
    text: "After pregnancy, I thought getting back in shape was impossible. Nikhil's customized program and constant motivation made the journey enjoyable. Lost all the extra weight in 3 months!",
    rating: 5,
    result: "-12 kgs",
  },
  {
    name: "Deepak J.",
    role: "Team Lead, Tech",
    text: "Being in IT meant long hours sitting. Nikhil's early morning sessions and flexible timing fit perfectly with my schedule. The inch loss was incredible and my energy levels skyrocketed!",
    rating: 5,
    result: "Inch Loss",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="relative py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#39ff14] text-sm font-bold tracking-widest uppercase">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3">
            What They <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative rounded-2xl p-8 sm:p-10 border border-white/10 bg-white/[0.02]">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-[#39ff14]/10" />
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed italic">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
              <div>
                <div className="font-bold text-white">{testimonials[current].name}</div>
                <div className="text-sm text-gray-500">{testimonials[current].role}</div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#39ff14]/10 text-[#39ff14] text-sm font-bold">
                {testimonials[current].result}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border border-white/10 hover:border-[#39ff14]/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-[#39ff14] w-6" : "bg-white/20"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="p-2 rounded-full border border-white/10 hover:border-[#39ff14]/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Mini Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              className={`p-3 rounded-xl border text-left transition-all ${
                i === current
                  ? "border-[#39ff14]/50 bg-[#39ff14]/5"
                  : "border-white/5 bg-white/[0.02] hover:border-white/15"
              }`}
            >
              <div className="text-sm font-semibold text-white truncate">{t.name}</div>
              <div className="text-xs text-gray-500 truncate">{t.role}</div>
              <div className="text-xs text-[#39ff14] font-bold mt-1">{t.result}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
