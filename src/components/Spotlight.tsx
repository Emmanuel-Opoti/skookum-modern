"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export default function Spotlight({
  children,
  className = "",
  tilt = false,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);

    if (tilt) {
      const px = x / rect.width - 0.5;
      const py = y / rect.height - 0.5;
      el.style.setProperty("--tilt-x", `${(-py * 8).toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${(px * 8).toFixed(2)}deg`);
    }
  }

  function handleLeave() {
    const el = ref.current;
    if (!el || !tilt) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group/spot relative ${className}`}
      style={
        tilt
          ? {
              transform:
                "perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
              transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
              transformStyle: "preserve-3d",
            }
          : undefined
      }
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(208,173,85,0.14), transparent 65%)",
        }}
      />
      {children}
    </div>
  );
}
