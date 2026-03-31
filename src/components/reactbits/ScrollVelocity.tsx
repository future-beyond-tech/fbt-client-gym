"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring, useAnimationFrame } from "framer-motion";

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export default function ScrollVelocity({
  children,
  baseVelocity = 5,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = "",
  scrollerClassName = "",
}: {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: { input: number[]; output: number[] };
  parallaxClassName?: string;
  scrollerClassName?: string;
}) {
  const baseX = useRef(0);
  const [repetitions, setRepetitions] = useState(numCopies);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping.input,
    velocityMapping.output
  );

  const [motionX, setMotionX] = useState(0);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const scrollerWidth = scrollerRef.current.offsetWidth / repetitions;
      const needed = Math.ceil(containerWidth / scrollerWidth) + 2;
      if (needed > repetitions) setRepetitions(needed);
    }
  }, [repetitions]);

  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.current += moveBy;
    setMotionX(wrap(-100 / repetitions, 0, baseX.current));
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap ${parallaxClassName}`} ref={containerRef}>
      <motion.div
        className={`inline-flex whitespace-nowrap ${scrollerClassName}`}
        style={{ x: `${motionX}%` }}
        ref={scrollerRef}
      >
        {Array.from({ length: repetitions }).map((_, i) => (
          <div key={i} className={className}>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
