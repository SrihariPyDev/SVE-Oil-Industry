"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────
// PREMIUM CORPORATE PRELOADER — Sri Venkateswara Enterprises
//
// Phase timeline:
//  "enter"  0ms      Logo sweeps in from right → settles at center (700ms)
//  "hold"   700ms    Orbital rings, glow, shimmer — hold 2 000ms
//  "flight" 2 700ms  Logo travels to navbar logo (dynamic position, 650ms)
//  "done"   3 350ms  Unmount
// ─────────────────────────────────────────────────────────────────

type Phase = "enter" | "hold" | "flight" | "done";

export default function Preloader() {
  const [mounted, setMounted]          = useState(true);
  const [phase, setPhase]              = useState<Phase>("enter");
  const [flightStyle, setFlightStyle]  = useState<React.CSSProperties>({});
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMounted(false);
      return;
    }

    // 700ms → logo has settled at center; begin premium hold
    const t1 = setTimeout(() => setPhase("hold"), 700);

    // 2 700ms → calculate real navbar logo position and fly there
    const t2 = setTimeout(() => {
      const navEl  = document.getElementById("navbar-logo-container");
      const logoEl = logoRef.current;

      if (navEl && logoEl) {
        const nr = navEl.getBoundingClientRect();
        const lr = logoEl.getBoundingClientRect();
        // Dynamically computed — works on mobile, tablet & desktop
        const dx = (nr.left + nr.width  / 2) - (lr.left + lr.width  / 2);
        const dy = (nr.top  + nr.height / 2) - (lr.top  + lr.height / 2);
        const sc = nr.width / lr.width;
        setFlightStyle({
          transform : `translate3d(${dx}px, ${dy}px, 0) scale(${sc})`,
          opacity   : 0.95,
          transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s ease-in-out",
        });
      } else {
        setFlightStyle({
          transform : "translate3d(0, -50vh, 0) scale(0.3)",
          opacity   : 0,
          transition: "transform 0.65s ease-in-out, opacity 0.65s ease-in-out",
        });
      }
      setPhase("flight");
    }, 2700);

    const t3 = setTimeout(() => { setPhase("done"); setMounted(false); }, 3400);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!mounted) return null;

  const isHold   = phase === "hold"   || phase === "flight";
  const isFlight = phase === "flight" || phase === "done";

  // ── Logo container transform per phase ──────────────────────────
  const logoStyle: React.CSSProperties =
    phase === "flight" ? flightStyle
    : phase === "enter"
      ? {
          animation : "sveLogoEnter 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
          willChange: "transform, opacity",
        }
      : { transform: "translate3d(0, 0, 0) scale(1)", opacity: 1 };

  return (
    <>
      {/* ── Full-screen dark panel ─────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position     : "fixed",
          inset        : 0,
          zIndex       : 99999,
          overflow     : "hidden",
          pointerEvents: "none",
          background   : "radial-gradient(ellipse 90% 90% at 50% 50%, #0c2040 0%, #071929 55%, #040d18 100%)",
          opacity      : isFlight ? 0 : 1,
          transition   : isFlight ? "opacity 0.55s ease-out 0.15s" : "none",
        }}
      >
        {/* ── Very subtle rotating conic light rays ─────────────── */}
        <div
          style={{
            position     : "absolute",
            inset        : 0,
            background   : "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(212,164,53,0.025) 60deg, transparent 120deg, rgba(212,164,53,0.03) 200deg, transparent 260deg, rgba(212,164,53,0.025) 310deg, transparent 360deg)",
            animation    : "sveRays 18s linear infinite",
            willChange   : "transform",
            pointerEvents: "none",
          }}
        />

        {/* ── Centre stage ──────────────────────────────────────── */}
        <div
          style={{
            position       : "absolute",
            inset          : 0,
            display        : "flex",
            flexDirection  : "column",
            alignItems     : "center",
            justifyContent : "center",
            padding        : "1rem",
          }}
        >
          {/* ── Orbital composition ─────────────────────────────── */}
          <div
            style={{
              position       : "relative",
              display        : "flex",
              alignItems     : "center",
              justifyContent : "center",
              // Scales on every breakpoint without overflow
              width          : "min(65vmin, 440px)",
              height         : "min(65vmin, 440px)",
              flexShrink     : 0,
            }}
          >
            {/* ── OUTER ORBIT RING — slow clockwise ─────────────── */}
            <div
              style={{
                position     : "absolute",
                inset        : 0,
                borderRadius : "50%",
                border       : "1px solid rgba(212,164,53,0.12)",
                animation    : isHold ? "sveOrbit1 22s linear infinite" : "none",
                willChange   : "transform",
              }}
            >
              {/* travelling dot on outer ring */}
              <span
                style={{
                  position     : "absolute",
                  top          : "-4px",
                  left         : "50%",
                  transform    : "translateX(-50%)",
                  width        : "8px",
                  height       : "8px",
                  borderRadius : "50%",
                  background   : "radial-gradient(circle, #f0c84a 0%, #d4a435 60%, transparent 100%)",
                  boxShadow    : "0 0 10px 2px rgba(212,164,53,0.6)",
                  opacity      : isHold ? 1 : 0,
                  transition   : "opacity 0.5s ease",
                }}
              />
            </div>

            {/* ── MIDDLE ORBIT RING — counter-clockwise dashed ──── */}
            <div
              style={{
                position     : "absolute",
                inset        : "min(5vmin, 34px)",
                borderRadius : "50%",
                border       : "1px dashed rgba(212,164,53,0.18)",
                animation    : isHold ? "sveOrbit2 14s linear infinite reverse" : "none",
                willChange   : "transform",
                opacity      : isHold ? 1 : 0,
                transition   : "opacity 0.6s ease 0.2s",
              }}
            />

            {/* ── INNER SOLID RING with glow ────────────────────── */}
            <div
              style={{
                position     : "absolute",
                inset        : "min(10vmin, 68px)",
                borderRadius : "50%",
                border       : "1.5px solid rgba(212,164,53,0.28)",
                boxShadow    : "0 0 20px rgba(212,164,53,0.07), inset 0 0 20px rgba(212,164,53,0.05)",
                animation    : isHold ? "sveOrbit3 10s linear infinite" : "none",
                willChange   : "transform",
                opacity      : isHold ? 1 : 0,
                transition   : "opacity 0.6s ease 0.35s",
              }}
            >
              {/* travelling dot on inner ring */}
              <span
                style={{
                  position     : "absolute",
                  bottom       : "-3px",
                  left         : "50%",
                  transform    : "translateX(-50%)",
                  width        : "6px",
                  height       : "6px",
                  borderRadius : "50%",
                  background   : "radial-gradient(circle, #ffffff 0%, #d4a435 60%, transparent 100%)",
                  boxShadow    : "0 0 8px 2px rgba(212,164,53,0.7)",
                  opacity      : isHold ? 1 : 0,
                  transition   : "opacity 0.5s ease 0.35s",
                }}
              />
            </div>

            {/* ── Soft radial halo behind logo ──────────────────── */}
            <div
              style={{
                position     : "absolute",
                inset        : "min(14vmin, 95px)",
                borderRadius : "50%",
                background   : "radial-gradient(circle, rgba(212,164,53,0.09) 0%, rgba(30,64,175,0.07) 55%, transparent 80%)",
                opacity      : isHold ? 1 : 0,
                transition   : "opacity 0.8s ease",
              }}
            />

            {/* ── SVE LOGO ────────────────────────────────────────── */}
            <div
              ref={logoRef}
              style={{
                position  : "relative",
                // Proportional on all screen sizes
                width     : "min(26vmin, 190px)",
                height    : "min(26vmin, 190px)",
                minWidth  : "100px",
                minHeight : "100px",
                zIndex    : 10,
                willChange: "transform, opacity",
                flexShrink: 0,
                ...logoStyle,
              }}
            >
              {/* Logo image */}
              <Image
                src="/images/logo-new.png"
                alt="Sri Venkateswara Enterprises"
                fill
                priority
                sizes="(max-width: 480px) 100px, (max-width: 768px) 150px, 190px"
                style={{
                  objectFit : "contain",
                  filter    : isHold
                    ? "drop-shadow(0 0 28px rgba(212,164,53,0.45)) drop-shadow(0 4px 18px rgba(30,64,175,0.35))"
                    : "drop-shadow(0 0 10px rgba(212,164,53,0.2))",
                  transition: "filter 0.6s ease",
                }}
              />

              {/* ── Gold shimmer mask over logo (hold only) ─────── */}
              {isHold && (
                <div
                  style={{
                    position            : "absolute",
                    inset               : 0,
                    overflow            : "hidden",
                    maskImage           : "url(/images/logo-new.png)",
                    WebkitMaskImage     : "url(/images/logo-new.png)",
                    maskSize            : "contain",
                    WebkitMaskSize      : "contain",
                    maskRepeat          : "no-repeat",
                    WebkitMaskRepeat    : "no-repeat",
                    maskPosition        : "center",
                    WebkitMaskPosition  : "center",
                    pointerEvents       : "none",
                  }}
                >
                  <div
                    style={{
                      position  : "absolute",
                      inset     : 0,
                      background: "linear-gradient(110deg, transparent 20%, rgba(255,248,200,0.75) 50%, transparent 80%)",
                      animation : "sveShimmer 2.8s ease-in-out infinite",
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ── Company name ────────────────────────────────────── */}
          <div
            style={{
              marginTop : "clamp(1.2rem, 3.5vmin, 2rem)",
              textAlign : "center",
              // Constrain width to prevent overflow on tiny phones
              maxWidth  : "min(320px, 88vw)",
              width     : "100%",
              opacity   : isHold && !isFlight ? 1 : 0,
              transform : isHold && !isFlight ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
            }}
          >
            <p
              style={{
                color         : "#d4a435",
                fontSize      : "clamp(7.5px, 2vmin, 10.5px)",
                fontWeight    : 700,
                letterSpacing : "clamp(0.15em, 0.4vw, 0.3em)",
                textTransform : "uppercase",
                fontFamily    : "var(--font-display, sans-serif)",
                marginBottom  : "0.45rem",
                lineHeight    : 1.4,
              }}
            >
              Sri Venkateswara Enterprises
            </p>
            {/* Gold separator */}
            <div
              style={{
                width     : "36px",
                height    : "1px",
                background: "linear-gradient(90deg, transparent, #d4a435, transparent)",
                margin    : "0 auto 0.45rem",
              }}
            />
            <p
              style={{
                color         : "rgba(255,255,255,0.28)",
                fontSize      : "clamp(6.5px, 1.6vmin, 9px)",
                fontWeight    : 500,
                letterSpacing : "0.18em",
                textTransform : "uppercase",
                fontFamily    : "var(--font-sans, sans-serif)",
              }}
            >
              Industrial Lubricants · Est. 2001
            </p>
          </div>
        </div>

        {/* ── Bottom gold accent line ─────────────────────────── */}
        <div
          style={{
            position  : "absolute",
            bottom    : 0,
            left      : 0,
            right     : 0,
            height    : "2px",
            background: "linear-gradient(90deg, transparent, rgba(212,164,53,0.5) 25%, rgba(240,200,74,0.85) 50%, rgba(212,164,53,0.5) 75%, transparent)",
            opacity   : isHold && !isFlight ? 1 : 0,
            transition: "opacity 0.6s ease 0.3s",
          }}
        />

        {/* ── Top gold accent line ────────────────────────────── */}
        <div
          style={{
            position  : "absolute",
            top       : 0,
            left      : 0,
            right     : 0,
            height    : "2px",
            background: "linear-gradient(90deg, transparent, rgba(212,164,53,0.3) 30%, rgba(212,164,53,0.5) 50%, rgba(212,164,53,0.3) 70%, transparent)",
            opacity   : isHold && !isFlight ? 1 : 0,
            transition: "opacity 0.6s ease 0.3s",
          }}
        />
      </div>

      {/* ── Keyframes ─────────────────────────────────────────────── */}
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>{`

        /* Logo sweeps in from the right side → settles at centre */
        @keyframes sveLogoEnter {
          0% {
            transform : translate3d(55vw, 0, 0) scale(0.82);
            opacity   : 0;
          }
          30% { opacity: 1; }
          78% {
            transform : translate3d(-4px, 0, 0) scale(1.03);
          }
          100% {
            transform : translate3d(0, 0, 0) scale(1);
            opacity   : 1;
          }
        }

        /* Orbital ring rotations */
        @keyframes sveOrbit1 {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes sveOrbit2 {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes sveOrbit3 {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }

        /* Subtle ambient light conic rotation */
        @keyframes sveRays {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }

        /* Gold shimmer sweep across logo pixels */
        @keyframes sveShimmer {
          0%   { transform: translateX(-130%); }
          100% { transform: translateX(130%);  }
        }
      `}</style>
    </>
  );
}
