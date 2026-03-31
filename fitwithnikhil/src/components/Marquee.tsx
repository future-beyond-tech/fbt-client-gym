"use client";
import ScrollVelocity from "./reactbits/ScrollVelocity";

const marqueeItems = [
  "WEIGHT LOSS",
  "MUSCLE GAIN",
  "TRANSFORMATION",
  "LEAN BODY",
  "BULK TO LEAN",
  "INCH LOSS",
  "PERSONAL TRAINING",
  "GROUP CLASSES",
  "DIET PLANS",
  "FIT WITH NIKHIL",
];

export default function Marquee() {
  return (
    <section className="py-6 bg-[#050505] border-y border-white/5 overflow-hidden">
      <ScrollVelocity
        baseVelocity={-3}
        className="flex items-center gap-8 mx-4"
        numCopies={4}
      >
        <div className="flex items-center gap-8 shrink-0">
          {marqueeItems.map((item) => (
            <span
              key={item}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-white/[0.07] hover:text-[#39ff14]/30 transition-colors whitespace-nowrap"
            >
              {item}
              <span className="text-[#39ff14]/20 mx-4">&bull;</span>
            </span>
          ))}
        </div>
      </ScrollVelocity>
    </section>
  );
}
