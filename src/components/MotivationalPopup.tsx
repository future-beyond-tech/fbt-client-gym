"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, Sun, Sunset, Moon, Dumbbell, Zap, Trophy, ArrowRight } from "lucide-react";
import GradientText from "./reactbits/GradientText";

type TimePhase = "morning" | "afternoon" | "evening" | "night";

interface GreetingData {
  phase: TimePhase;
  greeting: string;
  icon: React.ReactNode;
  quote: string;
  subtext: string;
  gradient: string[];
  accentColor: string;
  bgGlow: string;
  emoji: string;
}

function getTimePhase(): TimePhase {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
}

function getGreetingData(): GreetingData {
  const phase = getTimePhase();

  const morningQuotes = [
    "The body achieves what the mind believes.",
    "Wake up. Work out. Look hot. Kick ass.",
    "Morning sweat is the best alarm clock.",
    "Your only limit is you. Rise and grind!",
    "Champions train in the morning. You're next.",
  ];

  const afternoonQuotes = [
    "Halfway through the day — don't stop now!",
    "Fuel your fire. The grind doesn't pause.",
    "Afternoon energy hit? Channel it into gains!",
    "The best project you'll ever work on is YOU.",
    "Push through. Results are built in the struggle.",
  ];

  const eveningQuotes = [
    "End the day stronger than you started.",
    "Evening sessions hit different. Let's go!",
    "While they rest, you're getting ahead.",
    "Sunset reps build sunrise confidence.",
    "One more workout closer to your dream body.",
  ];

  const nightQuotes = [
    "Rest is part of the journey. You earned it.",
    "Muscles grow while you sleep — recover well.",
    "Tonight you rest. Tomorrow you conquer.",
    "Plan tomorrow's workout. Sleep like a champion.",
    "Great things are coming. Your body is transforming.",
  ];

  const quoteSets: Record<TimePhase, string[]> = {
    morning: morningQuotes,
    afternoon: afternoonQuotes,
    evening: eveningQuotes,
    night: nightQuotes,
  };

  const quotes = quoteSets[phase];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const data: Record<TimePhase, Omit<GreetingData, "quote">> = {
    morning: {
      phase: "morning",
      greeting: "Good Morning, Champ!",
      icon: <Sun className="w-8 h-8" />,
      subtext: "Early bird catches the gains. Start your transformation today!",
      gradient: ["#f59e0b", "#ff6b35", "#f59e0b"],
      accentColor: "#f59e0b",
      bgGlow: "radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.15) 0%, transparent 60%)",
      emoji: "sunrise",
    },
    afternoon: {
      phase: "afternoon",
      greeting: "Hey there, Warrior!",
      icon: <Flame className="w-8 h-8" />,
      subtext: "Keep the momentum going. Your future self will thank you!",
      gradient: ["#39ff14", "#00f0ff", "#39ff14"],
      accentColor: "#39ff14",
      bgGlow: "radial-gradient(ellipse at 50% 0%, rgba(57,255,20,0.15) 0%, transparent 60%)",
      emoji: "fire",
    },
    evening: {
      phase: "evening",
      greeting: "Good Evening, Beast!",
      icon: <Sunset className="w-8 h-8" />,
      subtext: "The evening grind separates good from great. Let's go!",
      gradient: ["#a855f7", "#ec4899", "#a855f7"],
      accentColor: "#a855f7",
      bgGlow: "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.15) 0%, transparent 60%)",
      emoji: "sunset",
    },
    night: {
      phase: "night",
      greeting: "Hey Night Owl!",
      icon: <Moon className="w-8 h-8" />,
      subtext: "Recovery is key. Rest well and come back stronger!",
      gradient: ["#00f0ff", "#3b82f6", "#00f0ff"],
      accentColor: "#00f0ff",
      bgGlow: "radial-gradient(ellipse at 50% 0%, rgba(0,240,255,0.15) 0%, transparent 60%)",
      emoji: "moon",
    },
  };

  return { ...data[phase], quote: randomQuote };
}

const floatingIcons = [Dumbbell, Zap, Trophy, Flame];

export default function MotivationalPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<GreetingData | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const greetingData = getGreetingData();
    setData(greetingData);

    // Show popup after a short delay for dramatic entrance
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 400);
  }, []);

  // Auto-dismiss after 12 seconds
  useEffect(() => {
    if (isVisible && !isClosing) {
      const timer = setTimeout(handleClose, 12000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isClosing, handleClose]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 350,
              duration: 0.5,
            }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-md rounded-3xl border border-white/10 overflow-hidden pointer-events-auto"
              style={{
                background: `linear-gradient(180deg, #111 0%, #0a0a0a 100%)`,
              }}
            >
              {/* Top Glow */}
              <div
                className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
                style={{ background: data.bgGlow }}
              />

              {/* Floating Fitness Icons (decorative) */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {floatingIcons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${15 + i * 20}%`,
                      left: i % 2 === 0 ? "8%" : "85%",
                      color: data.accentColor,
                      opacity: 0.08,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, i % 2 === 0 ? 10 : -10, 0],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  >
                    <Icon className="w-10 h-10" />
                  </motion.div>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Close popup"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>

              {/* Content */}
              <div className="relative z-[1] p-8 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2, damping: 12 }}
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: `${data.accentColor}15`,
                    border: `1px solid ${data.accentColor}30`,
                    color: data.accentColor,
                  }}
                >
                  {data.icon}
                </motion.div>

                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-black">
                    <GradientText
                      colors={data.gradient}
                      animationSpeed={4}
                    >
                      {data.greeting}
                    </GradientText>
                  </h2>
                </motion.div>

                {/* Quote */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="text-xl sm:text-2xl font-bold text-white mt-4 leading-snug"
                >
                  &ldquo;{data.quote}&rdquo;
                </motion.p>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-400 mt-3 text-sm"
                >
                  {data.subtext}
                </motion.p>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="h-px my-6 mx-auto max-w-[200px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${data.accentColor}50, transparent)`,
                  }}
                />

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <a
                    href="https://wa.me/919700780595?text=Hi%20Nikhil!%20I%20just%20visited%20your%20website%20and%20I%27m%20feeling%20motivated!%20Let%27s%20start%20my%20transformation!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-black transition-all hover:scale-[1.03]"
                    style={{
                      background: `linear-gradient(135deg, ${data.gradient[0]}, ${data.gradient[1]})`,
                      boxShadow: `0 0 20px ${data.accentColor}30`,
                    }}
                    onClick={handleClose}
                  >
                    <Zap className="w-4 h-4" />
                    Start My Journey
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleClose}
                    className="flex-1 py-3 px-5 rounded-xl font-semibold text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                  >
                    Explore First
                  </button>
                </motion.div>

                {/* Trainer Tag */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500"
                >
                  <Dumbbell className="w-3 h-3" />
                  <span>Certified Trainer &bull; 500+ Transformations &bull; Hyderabad</span>
                </motion.div>
              </div>

              {/* Bottom Animated Bar */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 12, ease: "linear" }}
                className="h-1 origin-left"
                style={{
                  background: `linear-gradient(90deg, ${data.gradient[0]}, ${data.gradient[1]}, ${data.gradient[2]})`,
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
