"use client";
import { useRef, useState, type ReactNode, type CSSProperties } from "react";

export default function TiltedCard({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.03,
  perspective = 1000,
  glareEnable = true,
  glareMaxOpacity = 0.2,
  glareColor = "#39ff14",
  style,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
  glareEnable?: boolean;
  glareMaxOpacity?: number;
  glareColor?: string;
  style?: CSSProperties;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glareStyle, setGlareStyle] = useState<CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (maxTilt * 2 * (0.5 - y)).toFixed(2);
    const tiltY = (maxTilt * 2 * (x - 0.5)).toFixed(2);

    setTransform(
      `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glareEnable) {
      const angle = Math.atan2(e.clientY - (rect.top + rect.height / 2), e.clientX - (rect.left + rect.width / 2)) * (180 / Math.PI);
      setGlareStyle({
        opacity: glareMaxOpacity * Math.max(Math.abs(x - 0.5), Math.abs(y - 0.5)) * 2,
        background: `linear-gradient(${angle + 180}deg, ${glareColor} 0%, transparent 80%)`,
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform("");
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        transform,
        transition: transform ? "none" : "transform 0.5s ease-out",
        transformStyle: "preserve-3d",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
      {glareEnable && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
          style={{
            ...glareStyle,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </div>
  );
}
