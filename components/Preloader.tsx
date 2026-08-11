"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Preloader() {
  const [mounted, setMounted]           = useState<boolean>(true);
  const [phase, setPhase]               = useState<"reveal" | "hold" | "flight" | "done">("reveal");
  const [flightStyles, setFlightStyles] = useState<React.CSSProperties>({});
  const [bgOpacity, setBgOpacity]       = useState<number>(1);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setMounted(false); return; }

    // ── Timeline ──────────────────────────────────────────────────
    // 0 → 900ms   : SKF-inspired Corporate Slide (LEFT → CENTER, 0.9s)
    // 900 → 2900ms: Hold at center for EXACTLY 2 seconds (2000ms)
    // 2900 → 3550ms: UNCHANGED closing flight → navbar logo (650ms)
    // 3550ms+     : Unmount
    // ──────────────────────────────────────────────────────────────

    const t1 = setTimeout(() => setPhase("hold"), 900);

    const t2 = setTimeout(() => {
      const targetEl = document.getElementById("navbar-logo-container");
      const centerEl = containerRef.current;

      if (targetEl && centerEl) {
        const tr = targetEl.getBoundingClientRect();
        const cr = centerEl.getBoundingClientRect();
        const deltaX = (tr.left + tr.width  / 2) - (cr.left + cr.width  / 2);
        const deltaY = (tr.top  + tr.height / 2) - (cr.top  + cr.height / 2);
        const scale  = tr.width / cr.width;
        setFlightStyles({
          transform: `translate3d(${deltaX}px,${deltaY}px,0) scale(${scale})`,
          opacity:   0.95,
          transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s ease-in-out",
        });
      } else {
        setFlightStyles({
          transform:  "translate3d(0, -50vh, 0) scale(0.4)",
          opacity:    0,
          transition: "transform 0.65s ease-in-out, opacity 0.65s ease-in-out",
        });
      }
      setBgOpacity(0);
      setPhase("flight");
    }, 2900);

    const t3 = setTimeout(() => { setPhase("done"); setMounted(false); }, 3550);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!mounted) return null;

  // ── Per-phase logo container styles ──────────────────────────────
  const logoContainerStyle: React.CSSProperties =
    phase === "flight"
      ? flightStyles
      : phase === "reveal"
      ? { animation: "sveCornerToCenter 1.0s cubic-bezier(0.16, 1, 0.3, 1) forwards", willChange: "transform, opacity" }
      : { transform: "translate3d(0,0,0) scale(1)", opacity: 1 };

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center overflow-hidden"
      style={{
        opacity:    bgOpacity,
        transition: "opacity 0.65s ease-out",
        willChange: "opacity",
        background: "radial-gradient(ellipse 80% 70% at 50% 50%, #0d2a45 0%, #071929 45%, #04111e 100%)",
      }}
    >
      {/* ── Ambient green-blue glowing orb behind logo ───────────── */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: "520px", height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(30,64,175,0.22) 45%, transparent 72%)",
          animation: "ambientPulse 3s ease-in-out infinite",
          willChange: "opacity",
        }}
      />

      {/* ── Logo Container ──────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative z-10 flex items-center justify-center w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] transform-gpu"
        style={logoContainerStyle}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* SVE Logo */}
          <Image
            src="/images/logo-new.png"
            alt="Sri Venkateswara Enterprises Logo"
            width={260}
            height={260}
            priority
            className="w-full h-full object-contain"
            style={{ filter: "drop-shadow(0 0 28px rgba(16,185,129,0.45)) drop-shadow(0 8px 20px rgba(30,64,175,0.35))" }}
          />

          {/* Premium Golden Shimmer — masked to logo pixels only */}
          <div
            className={`absolute inset-0 pointer-events-none ${phase === "flight" ? "opacity-0" : "opacity-100"}`}
            style={{
              transition:          "opacity 0.3s ease",
              maskImage:           "url(/images/logo-new.png)",
              WebkitMaskImage:     "url(/images/logo-new.png)",
              maskSize:            "contain",
              WebkitMaskSize:      "contain",
              maskRepeat:          "no-repeat",
              WebkitMaskRepeat:    "no-repeat",
              maskPosition:        "center",
              WebkitMaskPosition:  "center",
            }}
          >
            <div
              className="absolute top-0 left-[-100%] w-[200%] h-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(115deg, transparent 20%, rgba(212,164,53,0.35) 40%, rgba(255,245,200,0.95) 50%, rgba(212,164,53,0.35) 60%, transparent 80%)",
                animation: "goldenShimmer 1.3s cubic-bezier(0.25,1,0.5,1) infinite",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Keyframes ───────────────────────────────────────────── */}
      <style jsx global>{`

        /* Corner-to-Center: logo flies in diagonally from top-right corner */
        @keyframes sveCornerToCenter {
          0%   { transform: translate3d(60vw, -50vh, 0) scale(0.5); opacity: 0; }
          20%  { opacity: 1; }
          75%  { transform: translate3d(-6px, 6px, 0) scale(1.03); opacity: 1; }
          100% { transform: translate3d(0, 0, 0) scale(1.0); opacity: 1; }
        }

        /* Slow ambient glow pulse */
        @keyframes ambientPulse {
          0%, 100% { opacity: 0.5; transform: scale(1);    }
          50%       { opacity: 1;   transform: scale(1.08); }
        }

        /* Gold shimmer across logo pixels */
        @keyframes goldenShimmer {
          0%   { transform: translateX(-60%); }
          100% { transform: translateX(60%);  }
        }
      `}</style>
    </div>
  );
}

