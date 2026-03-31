"use client";
import type { ReactNode, CSSProperties } from "react";

export default function StarBorder({
  children,
  className = "",
  color = "#39ff14",
  speed = "6s",
  as: Tag = "button",
  style,
  ...props
}: {
  children: ReactNode;
  className?: string;
  color?: string;
  speed?: string;
  as?: "button" | "a" | "div";
  style?: CSSProperties;
  [key: string]: unknown;
}) {
  return (
    <Tag
      className={`relative inline-block overflow-hidden rounded-full ${className}`}
      style={{
        padding: "1px",
        ...style,
      }}
      {...(props as Record<string, unknown>)}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, ${color} 60deg, transparent 120deg)`,
          animation: `starBorderSpin ${speed} linear infinite`,
        }}
      />
      <div className="absolute inset-[1px] z-[1] rounded-full bg-[#0a0a0a]" />
      <div className="relative z-[2]">{children}</div>
    </Tag>
  );
}
