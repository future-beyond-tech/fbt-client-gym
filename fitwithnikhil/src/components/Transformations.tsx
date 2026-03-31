"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, TrendingDown } from "lucide-react";
import TiltedCard from "./reactbits/TiltedCard";
import GradientText from "./reactbits/GradientText";
import CountUp from "./reactbits/CountUp";

const transformations = [
  { name: "Client A", before: "102", after: "76.5", unit: "kgs", duration: "4 months", type: "Weight Loss" },
  { name: "Client B", before: "87.1", after: "71.6", unit: "kgs", duration: "3 months", type: "Lean Body" },
  { name: "Client C", before: "95", after: "75", unit: "kgs", duration: "3 months", type: "Bulk to Lean" },
  { name: "Client D", before: "82", after: "72", unit: "kgs", duration: "2 months", type: "Fat Loss" },
  { name: "Client E", before: "90", after: "70", unit: "kgs", duration: "4 months", type: "Transformation" },
  { name: "Client F", before: "78", after: "68", unit: "kgs", duration: "2 months", type: "Inch Loss" },
];

export default function Transformations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((i) => (i + 1) % transformations.length);
  const prev = () => setActiveIndex((i) => (i - 1 + transformations.length) % transformations.length);

  return (
    <section id="transformations" className="relative py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#39ff14] text-sm font-bold tracking-widest uppercase">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3">
            Client{" "}
            <GradientText colors={["#39ff14", "#00f0ff", "#39ff14"]} animationSpeed={5}>
              Transformations
            </GradientText>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Real people. Real results. Every transformation is backed by dedication,
            hard work, and the right guidance.
          </p>
        </motion.div>

        {/* Featured Transformation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <TiltedCard maxTilt={5} glareColor="#39ff14" className="rounded-2xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="relative p-8 md:p-12 bg-gradient-to-br from-[#ff3131]/5 to-transparent text-center border-b md:border-b-0 md:border-r border-white/5">
                <span className="inline-block px-3 py-1 bg-[#ff3131]/20 text-[#ff3131] text-xs font-bold rounded-full mb-4">
                  BEFORE
                </span>
                <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-[#ff3131]/10 to-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-5xl font-black text-[#ff3131]">
                    <CountUp to={parseFloat(transformations[activeIndex].before)} duration={1.5} />
                  </span>
                </div>
                <div className="text-gray-400 mt-3 text-sm">{transformations[activeIndex].unit}</div>
              </div>

              {/* After */}
              <div className="relative p-8 md:p-12 bg-gradient-to-br from-[#39ff14]/5 to-transparent text-center">
                <span className="inline-block px-3 py-1 bg-[#39ff14]/20 text-[#39ff14] text-xs font-bold rounded-full mb-4">
                  AFTER
                </span>
                <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-[#39ff14]/10 to-white/5 border border-[#39ff14]/20 flex items-center justify-center">
                  <span className="text-5xl font-black text-[#39ff14]">
                    <CountUp to={parseFloat(transformations[activeIndex].after)} duration={1.5} />
                  </span>
                </div>
                <div className="text-gray-400 mt-3 text-sm">{transformations[activeIndex].unit}</div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="p-4 sm:p-6 bg-black/40 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <TrendingDown className="w-5 h-5 text-[#39ff14]" />
                <span className="text-white font-bold">
                  {(parseFloat(transformations[activeIndex].before) - parseFloat(transformations[activeIndex].after)).toFixed(1)} kgs lost
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Duration: <span className="text-white">{transformations[activeIndex].duration}</span></span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-[#00f0ff] text-xs font-medium">
                  {transformations[activeIndex].type}
                </span>
              </div>
            </div>
          </div>
          </TiltedCard>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-white/10 hover:border-[#39ff14]/50 hover:text-[#39ff14] transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {transformations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeIndex ? "bg-[#39ff14] w-6" : "bg-white/20"
                  }`}
                  aria-label={`Transformation ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-white/10 hover:border-[#39ff14]/50 hover:text-[#39ff14] transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {transformations.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              className={`p-4 rounded-xl border text-center transition-all ${
                i === activeIndex
                  ? "border-[#39ff14]/50 bg-[#39ff14]/5"
                  : "border-white/5 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <div className="text-xs text-gray-500">{t.type}</div>
              <div className="text-lg font-bold text-[#39ff14] mt-1">
                -{(parseFloat(t.before) - parseFloat(t.after)).toFixed(0)} kg
              </div>
              <div className="text-xs text-gray-500 mt-1">{t.duration}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
