"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

// ─── TRENDING PREMIUM: Cinematic Split-Panel Reveal ──────────────
//
// Timeline:
//  0 ms       : Full dark screen visible instantly
//  150 ms     : Gold loading line sweeps left → right (900ms)
//  800 ms     : Logo fades + scales in (500ms)
//  1 300 ms   : Company name slides up (400ms)
//  1 700 ms   : Hold — shimmer loops on logo
//  3 000 ms   : SPLIT EXIT — top panel flies up, bottom flies down
//               Logo simultaneously flies to navbar
//  3 700 ms   : Unmount
// ──────────────────────────────────────────────────────────────────

type Phase = "idle" | "bar" | "logo" | "text" | "hold" | "exit" | "done";

export default function Preloader() {
  const [mounted, setMounted]             = useState(true);
  const [phase, setPhase]                 = useState<Phase>("idle");
  const [flightStyle, setFlightStyle]     = useState<React.CSSProperties>({});
  const logoRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMounted(false);
      return;
    }

    const t1 = setTimeout(() => setPhase("bar"),  150);
    const t2 = setTimeout(() => setPhase("logo"), 800);
    const t3 = setTimeout(() => setPhase("text"), 1300);
    const t4 = setTimeout(() => setPhase("hold"), 1700);

    const t5 = setTimeout(() => {
      const nav   = document.getElementById("navbar-logo-container");
      const logo  = logoRef.current;

      if (nav && logo) {
        const nr = nav.getBoundingClientRect();
        const lr = logo.getBoundingClientRect();
        const dx = (nr.left + nr.width  / 2) - (lr.left + lr.width  / 2);
        const dy = (nr.top  + nr.height / 2) - (lr.top  + lr.height / 2);
        const sc = nr.width / lr.width;
        setFlightStyle({
          transform : `translate3d(${dx}px,${dy}px,0) scale(${sc})`,
          opacity   : 0.95,
          transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.65s ease-in-out",
        });
      } else {
        setFlightStyle({
          transform : "translate3d(0,-50vh,0) scale(0.3)",
          opacity   : 0,
          transition: "transform 0.65s ease-in-out, opacity 0.65s ease-in-out",
        });
      }
      setPhase("exit");
    }, 3000);

    const t6 = setTimeout(() => { setPhase("done"); setMounted(false); }, 3750);

    return () => {
      [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
    };
  }, []);

  if (!mounted) return null;

  const showLogo  = phase === "logo" || phase === "text" || phase === "hold" || phase === "exit";
  const showText  = phase === "text" || phase === "hold" || phase === "exit";
  const isExit    = phase === "exit" || phase === "done";

  return (
    <>
      {/* ── TOP PANEL ───────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position  : "fixed",
          top: 0, left: 0, right: 0,
          height    : "50vh",
          zIndex    : 99998,
          background: "linear-gradient(to bottom, #040f1a 0%, #071929 100%)",
          transform : isExit ? "translateY(-101%)" : "translateY(0)",
          transition: isExit ? "transform 0.72s cubic-bezier(0.76,0,0.24,1)" : "none",
          willChange: "transform",
          pointerEvents: "none",
        }}
      >
        {/* subtle horizontal scan line */}
        <div style={{
          position  : "absolute",
          bottom    : 0, left: 0, right: 0,
          height    : "1px",
          background: "linear-gradient(90deg, transparent, rgba(212,164,53,0.4) 50%, transparent)",
        }} />
      </div>

      {/* ── BOTTOM PANEL ────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position  : "fixed",
          bottom: 0, left: 0, right: 0,
          height    : "50vh",
          zIndex    : 99998,
          background: "linear-gradient(to top, #040f1a 0%, #071929 100%)",
          transform : isExit ? "translateY(101%)" : "translateY(0)",
          transition: isExit ? "transform 0.72s cubic-bezier(0.76,0,0.24,1)" : "none",
          willChange: "transform",
          pointerEvents: "none",
        }}
      >
        {/* subtle horizontal scan line */}
        <div style={{
          position  : "absolute",
          top       : 0, left: 0, right: 0,
          height    : "1px",
          background: "linear-gradient(90deg, transparent, rgba(212,164,53,0.4) 50%, transparent)",
        }} />
      </div>

      {/* ── CENTER STAGE (always above panels) ──────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position      : "fixed",
          inset         : 0,
          zIndex        : 99999,
          display       : "flex",
          flexDirection : "column",
          alignItems    : "center",
          justifyContent: "center",
          pointerEvents : "none",
        }}
      >
        {/* ── GOLD LOADING LINE ───────────────────────────────── */}
        <div style={{
          width   : "clamp(200px,30vw,360px)",
          height  : "2px",
          background: "#0d1e30",
          borderRadius: "2px",
          overflow: "hidden",
          marginBottom: "2.5rem",
          opacity : isExit ? 0 : 1,
          transition: isExit ? "opacity 0.2s ease" : "none",
        }}>
          <div style={{
            height    : "100%",
            background: "linear-gradient(90deg, transparent, #d4a435, #f5dc80, #d4a435, transparent)",
            animation : phase !== "idle" ? "sveLine 0.9s cubic-bezier(0.22,1,0.36,1) forwards" : "none",
            transform : phase === "idle" ? "translateX(-100%)" : undefined,
          }} />
        </div>

        {/* ── SVE LOGO ────────────────────────────────────────── */}
        <div
          ref={logoRef}
          style={{
            position : "relative",
            width    : "clamp(140px,18vw,220px)",
            height   : "clamp(140px,18vw,220px)",
            opacity  : showLogo ? 1 : 0,
            transform: showLogo ? "scale(1) translateY(0)" : "scale(0.6) translateY(20px)",
            transition: showLogo
              ? "opacity 0.55s ease, transform 0.55s cubic-bezier(0.34,1.56,0.64,1)"
              : "none",
            willChange: "transform,opacity",
            ...(isExit ? flightStyle : {}),
          }}
        >
          <Image
            src="/images/logo-new.png"
            alt="Sri Venkateswara Enterprises"
            fill
            priority
            sizes="220px"
            style={{
              objectFit: "contain",
              filter   : "drop-shadow(0 0 40px rgba(212,164,53,0.35)) drop-shadow(0 0 80px rgba(30,64,175,0.25))",
            }}
          />

          {/* Gold shimmer over logo */}
          {(phase === "hold" || phase === "text") && (
            <div style={{
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
            }}>
              <div style={{
                position  : "absolute",
                inset     : 0,
                background: "linear-gradient(105deg,transparent 25%,rgba(255,245,180,0.8) 50%,transparent 75%)",
                animation : "sveShimmer 2s ease-in-out infinite",
              }} />
            </div>
          )}
        </div>

        {/* ── COMPANY NAME + TAGLINE ──────────────────────────── */}
        <div style={{
          marginTop : "1.8rem",
          textAlign : "center",
          opacity   : showText && !isExit ? 1 : 0,
          transform : showText && !isExit ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}>
          <p style={{
            color       : "#d4a435",
            fontSize    : "10.5px",
            fontWeight  : 700,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            fontFamily  : "var(--font-display), sans-serif",
            marginBottom: "0.4rem",
          }}>
            Sri Venkateswara Enterprises
          </p>
          <div style={{
            width     : "40px",
            height    : "1px",
            background: "linear-gradient(90deg,transparent,#d4a435,transparent)",
            margin    : "0 auto",
          }} />
          <p style={{
            color       : "rgba(255,255,255,0.35)",
            fontSize    : "9px",
            fontWeight  : 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontFamily  : "var(--font-sans), sans-serif",
            marginTop   : "0.4rem",
          }}>
            Industrial Lubricants
          </p>
        </div>

        {/* ── BOTTOM PROGRESS DOTS ────────────────────────────── */}
        <div style={{
          position  : "absolute",
          bottom    : "2.5rem",
          display   : "flex",
          gap       : "6px",
          opacity   : showLogo && !isExit ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              width     : "5px",
              height    : "5px",
              borderRadius: "50%",
              background: "#d4a435",
              animation : `sveDot 1.2s ease-in-out ${i * 0.2}s infinite`,
            }} />
          ))}
        </div>
      </div>

      {/* ── KEYFRAMES ───────────────────────────────────────────── */}
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>{`
        /* Gold bar sweeps left to right */
        @keyframes sveLine {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%);  }
        }

        /* Gold shimmer across logo */
        @keyframes sveShimmer {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(120%);  }
        }

        /* Pulsing dots */
        @keyframes sveDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.35; }
          40%            { transform: scale(1.2); opacity: 1;    }
        }
      `}</style>
    </>
  );
}
