"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Preloader() {
  const [mounted, setMounted]           = useState<boolean>(true);
  const [phase, setPhase]               = useState<"slide" | "zoom" | "hold" | "flight" | "done">("slide");
  const [flightStyles, setFlightStyles] = useState<React.CSSProperties>({});
  const [bgOpacity, setBgOpacity]       = useState<number>(1);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setMounted(false); return; }

    // ── Timeline ──────────────────────────────────────────────────
    // 0 → 400ms   : Blue background slides in from RIGHT → LEFT
    // 400 → 1000ms: Logo zooms in at center
    // 1000 → 3000ms: Hold at center for EXACTLY 2 seconds (2000ms)
    // 3000 → 3650ms: Flight transition to navbar logo (650ms)
    // 3650ms+     : Unmount
    // ──────────────────────────────────────────────────────────────

    const tZoom = setTimeout(() => setPhase("zoom"), 350);
    const tHold = setTimeout(() => setPhase("hold"), 1000);

    const tFlight = setTimeout(() => {
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
    }, 3000);

    const tDone = setTimeout(() => { setPhase("done"); setMounted(false); }, 3650);

    return () => {
      clearTimeout(tZoom);
      clearTimeout(tHold);
      clearTimeout(tFlight);
      clearTimeout(tDone);
    };
  }, []);

  if (!mounted) return null;

  // ── Per-phase logo container styles ──────────────────────────────
  const logoContainerStyle: React.CSSProperties =
    phase === "flight"
      ? flightStyles
      : phase === "zoom" || phase === "slide"
      ? { animation: "sveLogoZoomIn 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards", willChange: "transform, opacity" }
      : { transform: "translate3d(0,0,0) scale(1)", opacity: 1 };

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center overflow-hidden"
      style={{
        opacity: bgOpacity,
        transition: "opacity 0.65s ease-out",
        willChange: "opacity, transform",
        animation: phase === "flight" ? "none" : "sveBgSlideFromRight 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        background: "radial-gradient(ellipse 80% 70% at 50% 50%, #0d2a45 0%, #071929 45%, #04111e 100%)",
      }}
    >
      {/* ── Ambient glowing orb behind logo ───────────── */}
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
        /* Background slideshow: slides in from RIGHT to LEFT */
        @keyframes sveBgSlideFromRight {
          0%   { transform: translate3d(100%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        /* Logo Zoom-In at Center */
        @keyframes sveLogoZoomIn {
          0%   { transform: translate3d(0, 0, 0) scale(0); opacity: 0; }
          70%  { transform: translate3d(0, 0, 0) scale(1.08); opacity: 1; }
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

