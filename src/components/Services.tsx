"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, TrendingDown, Dumbbell, Zap, Star, ArrowRight } from "lucide-react";
import SpotlightCard from "./reactbits/SpotlightCard";
import GradientText from "./reactbits/GradientText";
import CountUp from "./reactbits/CountUp";

const packages = [
  {
    name: "Starter",
    tagline: "Begin Your Journey",
    price: 10000,
    period: "/month",
    icon: Zap,
    color: "#00f0ff",
    spotlightColor: "rgba(0, 240, 255, 0.15)",
    features: [
      "4 sessions per week",
      "Basic workout plan",
      "Form correction & guidance",
      "WhatsApp support",
      "Progress tracking",
    ],
    popular: false,
  },
  {
    name: "Transformation",
    tagline: "Most Popular",
    price: 15000,
    period: "/month",
    icon: Flame,
    color: "#39ff14",
    spotlightColor: "rgba(57, 255, 20, 0.2)",
    features: [
      "5 sessions per week",
      "Custom workout plan",
      "Personalized diet plan",
      "24/7 WhatsApp support",
      "Weekly body measurements",
      "Supplement guidance",
    ],
    popular: true,
  },
  {
    name: "Weight Loss Pro",
    tagline: "Guaranteed Results",
    price: 13000,
    period: "/month",
    icon: TrendingDown,
    color: "#f59e0b",
    spotlightColor: "rgba(245, 158, 11, 0.15)",
    features: [
      "5 sessions per week",
      "Fat-loss focused training",
      "Calorie-deficit diet plan",
      "Cardio programming",
      "Weekly progress photos",
      "Accountability check-ins",
    ],
    popular: false,
  },
  {
    name: "Muscle Gain",
    tagline: "Build Your Physique",
    price: 15000,
    period: "/month",
    icon: Dumbbell,
    color: "#ff3131",
    spotlightColor: "rgba(255, 49, 49, 0.15)",
    features: [
      "6 sessions per week",
      "Hypertrophy-focused plan",
      "High-protein diet plan",
      "Supplement stack advice",
      "Body composition tracking",
      "Posing & physique tips",
    ],
    popular: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-20 md:py-28 bg-[#050505]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39ff14]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#39ff14] text-sm font-bold tracking-widest uppercase">
            Pricing & Packages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3">
            Choose Your{" "}
            <GradientText colors={["#39ff14", "#00f0ff", "#39ff14"]} animationSpeed={6}>
              Program
            </GradientText>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Transparent pricing. No hidden fees. Every package includes personal attention
            and a commitment to your transformation.
          </p>
        </motion.div>

        {/* Pricing Cards with SpotlightCard */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <SpotlightCard
                spotlightColor={pkg.spotlightColor}
                className={`h-full rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular
                    ? "bg-gradient-to-b from-[#39ff14]/10 to-transparent border-[#39ff14]/40 shadow-[0_0_30px_rgba(57,255,20,0.1)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                <div className="relative p-6">
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#39ff14] text-black text-xs font-bold rounded-full flex items-center gap-1 z-20">
                      <Star className="w-3 h-3" /> MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${pkg.color}15` }}
                    >
                      <pkg.icon className="w-5 h-5" style={{ color: pkg.color }} />
                    </div>
                    <div>
                      <div className="font-bold text-white">{pkg.name}</div>
                      <div className="text-xs" style={{ color: pkg.color }}>{pkg.tagline}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-sm text-gray-500">&#8377;</span>
                    <span className="text-4xl font-black text-white">
                      <CountUp to={pkg.price} duration={2} separator="," />
                    </span>
                    <span className="text-gray-500 text-sm">{pkg.period}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: pkg.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/919700780595?text=Hi%20Nikhil!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
                      pkg.popular
                        ? "bg-[#39ff14] text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Free Trial Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl border border-[#39ff14]/20 bg-gradient-to-r from-[#39ff14]/5 to-[#00f0ff]/5 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold">
            Not sure which plan?{" "}
            <GradientText colors={["#39ff14", "#00f0ff"]} animationSpeed={3}>
              Try your first class FREE!
            </GradientText>
          </h3>
          <p className="text-gray-400 mt-2">
            Experience the training firsthand. No commitment, no payment. Just results.
          </p>
          <a
            href="https://wa.me/919700780595?text=Hi%20Nikhil!%20I%20want%20to%20book%20a%20FREE%20trial%20class!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-[#39ff14] text-black font-bold rounded-full hover:scale-105 transition-transform"
          >
            Claim Free Trial <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
