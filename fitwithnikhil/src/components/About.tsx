"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Clock, Flame, HeartPulse } from "lucide-react";

const highlights = [
  { icon: Award, label: "Certified Trainer", desc: "Professionally certified fitness personal trainer" },
  { icon: Users, label: "1-on-1 & Group", desc: "Personalized coaching and energizing group sessions" },
  { icon: Target, label: "Goal Focused", desc: "Custom plans for your specific body goals" },
  { icon: Clock, label: "Flexible Timing", desc: "Appointment-based schedule that fits your life" },
  { icon: Flame, label: "Proven Results", desc: "Real transformations with measurable outcomes" },
  { icon: HeartPulse, label: "Holistic Approach", desc: "Training + diet plans + continuous motivation" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#39ff14]/10 to-[#00f0ff]/10 border border-white/5">
              {/* Placeholder for trainer image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#39ff14] to-[#00f0ff] flex items-center justify-center mb-6">
                  <span className="text-5xl font-black text-black">N</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Nikhil</h3>
                <p className="text-[#39ff14] font-medium mt-1">Transformation Specialist</p>
                <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-xs">
                  <div className="bg-black/40 rounded-xl p-3 text-center border border-[#39ff14]/20">
                    <div className="text-2xl font-bold text-[#39ff14]">500+</div>
                    <div className="text-xs text-gray-400">Clients Trained</div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-3 text-center border border-[#00f0ff]/20">
                    <div className="text-2xl font-bold text-[#00f0ff]">5+</div>
                    <div className="text-xs text-gray-400">Years Exp</div>
                  </div>
                </div>
              </div>
              {/* Decorative corner borders */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#39ff14]" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#39ff14]" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-[#39ff14] text-sm font-bold tracking-widest uppercase">
              About Your Trainer
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 leading-tight">
              Meet <span className="gradient-text">Nikhil</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              A certified fitness personal trainer and motivator based in Hyderabad,
              specializing in complete body transformations. With years of experience
              training clients from all fitness levels, Nikhil combines science-backed
              training with personalized nutrition plans to deliver results that last.
            </p>
            <p className="text-gray-400 mt-4 text-lg leading-relaxed">
              Whether your goal is weight loss, muscle gain, lean body transformation,
              or overall fitness &mdash; every program is crafted specifically for
              <span className="text-white font-semibold"> your body, your goals, your timeline</span>.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#39ff14]/30 transition-colors group"
                >
                  <item.icon className="w-6 h-6 text-[#39ff14] group-hover:scale-110 transition-transform" />
                  <div className="mt-2 text-sm font-semibold text-white">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
