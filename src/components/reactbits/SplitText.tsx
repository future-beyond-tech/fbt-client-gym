"use client";
import { useMemo } from "react";
import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";

export default function SplitText({
  text,
  className = "",
  delay = 0.05,
  duration = 0.5,
  ease = "easeOut",
  splitBy = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  tag: Tag = "p",
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: Easing;
  splitBy?: "chars" | "words";
  from?: Record<string, number>;
  to?: Record<string, number>;
  threshold?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const elements = useMemo(() => {
    if (splitBy === "words") {
      return text.split(" ").map((word, i) => ({
        content: word,
        key: `word-${i}`,
      }));
    }
    return text.split("").map((char, i) => ({
      content: char === " " ? "\u00A0" : char,
      key: `char-${i}`,
    }));
  }, [text, splitBy]);

  return (
    <Tag ref={ref} className={className} style={{ display: "flex", flexWrap: "wrap", justifyContent: "inherit" }}>
      {elements.map((el, i) => (
        <motion.span
          key={el.key}
          initial={from}
          animate={isInView ? to : from}
          transition={{
            duration,
            ease,
            delay: i * delay,
          }}
          style={{ display: "inline-block", willChange: "transform, opacity" }}
        >
          {el.content}
          {splitBy === "words" && i < elements.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
