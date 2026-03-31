"use client";
import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import SplitText from "./reactbits/SplitText";
import CountUp from "./reactbits/CountUp";
import GradientText from "./reactbits/GradientText";
import StarBorder from "./reactbits/StarBorder";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#39ff14]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39ff14]/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/5 mb-6"
          >
            <span className="w-2 h-2 bg-[#39ff14] rounded-full animate-pulse" />
            <span className="text-[#39ff14] text-sm font-medium tracking-wide">
              CERTIFIED FITNESS TRAINER &bull; HYDERABAD
            </span>
          </motion.div>

          {/* Main Heading — SplitText animation */}
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
            <SplitText
              text="TRANSFORM"
              tag="div"
              className="text-white justify-center"
              delay={0.04}
              duration={0.6}
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              splitBy="chars"
            />
            <div className="mt-1 flex justify-center">
              <GradientText
                colors={["#39ff14", "#00f0ff", "#39ff14", "#00f0ff"]}
                animationSpeed={4}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black"
              >
                YOUR BODY
              </GradientText>
            </div>
            <SplitText
              text="YOUR LIFE"
              tag="div"
              className="text-white mt-1 justify-center"
              delay={0.04}
              duration={0.6}
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              splitBy="chars"
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Personal Trainer & Motivator specializing in real body transformations.
            1-on-1 coaching & group classes that deliver{" "}
            <span className="text-[#39ff14] font-semibold">proven results</span>.
          </motion.p>

          {/* Stats Row with CountUp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#39ff14]">
                <CountUp to={500} duration={2.5} separator="," />+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 uppercase tracking-wider">
                Transformations
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#39ff14]">
                <CountUp to={5} duration={2} />+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#39ff14]">
                <CountUp to={98} duration={2.5} />%
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 uppercase tracking-wider">
                Client Satisfaction
              </div>
            </div>
          </motion.div>

          {/* CTAs with StarBorder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <a
              href="https://wa.me/919700780595?text=Hi%20Nikhil!%20I%20want%20to%20book%20a%20FREE%20trial%20class!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#39ff14] text-black font-bold text-lg rounded-full pulse-neon hover:scale-105 transition-transform text-center"
            >
              Start Free Trial
            </a>
            <StarBorder as="div" color="#00f0ff" speed="4s" className="w-full sm:w-auto cursor-pointer" style={{ cursor: "pointer" }}>
              <a
                href="#transformations"
                className="flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold text-lg"
              >
                <Play className="w-5 h-5" /> See Transformations
              </a>
            </StarBorder>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#39ff14] transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
