"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calculator, ArrowRight, MessageCircle } from "lucide-react";

type BMICategory = {
  label: string;
  color: string;
  message: string;
  recommendation: string;
};

function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return {
    label: "Underweight",
    color: "#00f0ff",
    message: "You're below the healthy weight range.",
    recommendation: "Muscle Gain program with high-protein diet plan",
  };
  if (bmi < 25) return {
    label: "Normal",
    color: "#39ff14",
    message: "You're in a healthy weight range!",
    recommendation: "Lean Body / Toning program to build definition",
  };
  if (bmi < 30) return {
    label: "Overweight",
    color: "#f59e0b",
    message: "You're above the healthy weight range.",
    recommendation: "Weight Loss Pro or Transformation package",
  };
  return {
    label: "Obese",
    color: "#ff3131",
    message: "Your BMI indicates a higher health risk.",
    recommendation: "Dedicated Fat Loss program with diet & cardio focus",
  };
}

export default function BMICalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<BMICategory | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const result = w / (h * h);
      setBmi(result);
      setCategory(getBMICategory(result));
    }
  };

  const getWhatsAppLink = () => {
    const msg = bmi
      ? `Hi Nikhil! I just calculated my BMI (${bmi.toFixed(1)} - ${category?.label}). I'm interested in your ${category?.recommendation}. Can we discuss?`
      : "Hi Nikhil! I'd like to discuss my fitness goals with you.";
    return `https://wa.me/919700780595?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="bmi" className="relative py-20 md:py-28 bg-[#050505]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#00f0ff] text-sm font-bold tracking-widest uppercase">
            Know Your Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3">
            BMI <span className="neon-text-cyan">Calculator</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Check your Body Mass Index and get a personalized recommendation
            from Nikhil on the best program for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
            {/* Input Section */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <h3 className="text-lg font-bold">Enter Your Details</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g., 170"
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g., 75"
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={calculateBMI}
                disabled={!height || !weight}
                className="w-full mt-4 py-3 bg-gradient-to-r from-[#00f0ff] to-[#39ff14] text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Calculate BMI
              </button>
            </div>

            {/* Results Section */}
            {bmi !== null && category && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="border-t border-white/10 p-6 sm:p-8"
              >
                {/* BMI Display */}
                <div className="text-center mb-6">
                  <div className="text-6xl font-black" style={{ color: category.color }}>
                    {bmi.toFixed(1)}
                  </div>
                  <div className="mt-2 text-lg font-bold" style={{ color: category.color }}>
                    {category.label}
                  </div>
                  <p className="text-gray-400 mt-1 text-sm">{category.message}</p>
                </div>

                {/* BMI Scale */}
                <div className="relative h-3 rounded-full overflow-hidden bg-black/40 mb-2">
                  <div className="absolute inset-0 flex">
                    <div className="h-full bg-[#00f0ff] flex-1" />
                    <div className="h-full bg-[#39ff14] flex-1" />
                    <div className="h-full bg-[#f59e0b] flex-1" />
                    <div className="h-full bg-[#ff3131] flex-1" />
                  </div>
                  {/* Marker */}
                  <div
                    className="absolute top-0 w-1 h-full bg-white rounded-full shadow-[0_0_6px_white]"
                    style={{
                      left: `${Math.min(Math.max(((bmi - 15) / 25) * 100, 0), 100)}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Underweight</span>
                  <span>Normal</span>
                  <span>Overweight</span>
                  <span>Obese</span>
                </div>

                {/* Recommendation */}
                <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-sm text-gray-400">Recommended Program:</div>
                  <div className="text-white font-bold mt-1">{category.recommendation}</div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuss with Nikhil on WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
