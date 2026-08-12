"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

// ─── Phase machine ────────────────────────────────────────────
// "bg"     0 ms       : dark blue panel sweeps RIGHT → LEFT (550 ms)
// "zoom"   1 000 ms   : logo slow-zooms in at centre (800 ms)
// "hold"   1 800 ms   : frozen at centre for exactly 2 000 ms
// "flight" 3 800 ms   : logo flies to navbar logo position (650 ms)
// unmount  4 450 ms
// ─────────────────────────────────────────────────────────────

type Phase = "bg" | "zoom" | "hold" | "flight" | "done";

export default function Preloader() {
  const [phase, setPhase]               = useState<Phase>("bg");
  const [mounted, setMounted]           = useState(true);
  const [flightStyle, setFlightStyle]   = useState<React.CSSProperties>({});
  const [bgFade, setBgFade]             = useState(false);
  const logoRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMounted(false);
      return;
    }

    // 1 s  → start logo zoom-in
    const t1 = setTimeout(() => setPhase("zoom"), 1000);

    // 1.8 s → logo is fully visible, hold it
    const t2 = setTimeout(() => setPhase("hold"), 1800);

    // 3.8 s → fly to navbar
    const t3 = setTimeout(() => {
      const navLogo  = document.getElementById("navbar-logo-container");
      const logoEl   = logoRef.current;

      if (navLogo && logoEl) {
        const nr = navLogo.getBoundingClientRect();
        const lr = logoEl.getBoundingClientRect();
        const dx = (nr.left + nr.width  / 2) - (lr.left + lr.width  / 2);
        const dy = (nr.top  + nr.height / 2) - (lr.top  + lr.height / 2);
        const sc = nr.width / lr.width;

        setFlightStyle({
          transform : `translate3d(${dx}px,${dy}px,0) scale(${sc})`,
          opacity   : 0.9,
          transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.65s ease-in-out",
        });
      } else {
        setFlightStyle({
          transform : "translate3d(0,-50vh,0) scale(0.3)",
          opacity   : 0,
          transition: "transform 0.65s ease-in-out, opacity 0.65s ease-in-out",
        });
      }

      setBgFade(true);
      setPhase("flight");
    }, 3800);

    // 4.45 s → unmount
    const t4 = setTimeout(() => { setPhase("done"); setMounted(false); }, 4450);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  if (!mounted) return null;

  // ── Logo animation style per phase ───────────────────────────
  const logoStyle: React.CSSProperties =
    phase === "flight" ? flightStyle
    : phase === "zoom"
      ? {
          animation : "sveZoomIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
          willChange: "transform,opacity",
        }
      : phase === "hold"
      ? { transform: "scale(1)", opacity: 1 }
      : /* bg phase — logo hidden */ { opacity: 0, transform: "scale(0)" };

  return (
    <>
      {/* ── Full-screen dark-blue panel ───────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position  : "fixed",
          inset     : 0,
          zIndex    : 99999,
          background: "radial-gradient(ellipse 90% 80% at 50% 50%, #0d2a45 0%, #071929 50%, #040f1a 100%)",
          // Sweep in from RIGHT → LEFT
          animation : "sveBgSweep 0.55s cubic-bezier(0.16,1,0.3,1) both",
          // When flight phase starts, fade the whole panel out
          opacity   : bgFade ? 0 : 1,
          transition: bgFade ? "opacity 0.65s ease-out" : "none",
          willChange: "transform,opacity",
          pointerEvents: "none",
        }}
      >
        {/* ── Soft radial glow behind logo ──────────────── */}
        <div
          style={{
            position    : "absolute",
            inset       : 0,
            display     : "flex",
            alignItems  : "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width       : 480,
              height      : 480,
              borderRadius: "50%",
              background  : "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(30,64,175,0.18) 45%, transparent 70%)",
              animation   : "sveGlow 4s ease-in-out infinite",
              willChange  : "opacity,transform",
            }}
          />
        </div>

        {/* ── Logo centred ──────────────────────────────── */}
        <div
          style={{
            position      : "absolute",
            inset         : 0,
            display       : "flex",
            alignItems    : "center",
            justifyContent: "center",
          }}
        >
          <div
            ref={logoRef}
            style={{
              width     : "clamp(160px,22vw,260px)",
              height    : "clamp(160px,22vw,260px)",
              willChange: "transform,opacity",
              ...logoStyle,
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>

              {/* SVE Logo */}
              <Image
                src="/images/logo-new.png"
                alt="Sri Venkateswara Enterprises"
                fill
                priority
                sizes="260px"
                style={{
                  objectFit: "contain",
                  filter   : "drop-shadow(0 0 32px rgba(16,185,129,0.5)) drop-shadow(0 8px 24px rgba(30,64,175,0.4))",
                }}
              />

              {/* Golden shimmer sweep — masked to logo shape */}
              {(phase === "hold" || phase === "zoom") && (
                <div
                  style={{
                    position        : "absolute",
                    inset           : 0,
                    maskImage       : "url(/images/logo-new.png)",
                    WebkitMaskImage : "url(/images/logo-new.png)",
                    maskSize        : "contain",
                    WebkitMaskSize  : "contain",
                    maskRepeat      : "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition    : "center",
                    WebkitMaskPosition: "center",
                    overflow        : "hidden",
                  }}
                >
                  <div
                    style={{
                      position  : "absolute",
                      top       : 0,
                      left      : "-100%",
                      width     : "200%",
                      height    : "100%",
                      background: "linear-gradient(115deg,transparent 20%,rgba(212,164,53,0.3) 40%,rgba(255,245,200,0.9) 50%,rgba(212,164,53,0.3) 60%,transparent 80%)",
                      animation : "sveShimmer 1.5s ease-in-out infinite",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Keyframes ─────────────────────────────────────── */}
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>{`
        /* Background panel: slides in from right to left */
        @keyframes sveBgSweep {
          from { transform: translate3d(100%,0,0); }
          to   { transform: translate3d(0,0,0); }
        }

        /* Logo: slow premium zoom-in from nothing */
        @keyframes sveZoomIn {
          0%   { transform: scale(0.05); opacity: 0; }
          40%  { opacity: 1; }
          75%  { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(1.0);  opacity: 1; }
        }

        /* Ambient glow pulse */
        @keyframes sveGlow {
          0%,100% { opacity: 0.45; transform: scale(1);    }
          50%      { opacity: 0.9;  transform: scale(1.1); }
        }

        /* Gold shimmer sweep across logo */
        @keyframes sveShimmer {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(55%);  }
        }
      `}</style>
    </>
  );
}
