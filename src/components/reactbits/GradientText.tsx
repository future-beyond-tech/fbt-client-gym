"use client";
import type { ReactNode } from "react";

export default function GradientText({
  children,
  className = "",
  colors = ["#39ff14", "#00f0ff", "#39ff14"],
  animationSpeed = 8,
  showBorder = false,
}: {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span className={`relative inline-block ${className}`}>
      {showBorder && (
        <span
          className="absolute inset-0 rounded-lg z-0 blur-sm opacity-60"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
            animation: `gradientShift ${animationSpeed}s linear infinite`,
          }}
        />
      )}
      <span
        className="relative z-10 bg-clip-text text-transparent"
        style={{
          ...gradientStyle,
          backgroundSize: "300% 100%",
          animation: `gradientShift ${animationSpeed}s linear infinite`,
        }}
      >
        {children}
      </span>
    </span>
  );
}
