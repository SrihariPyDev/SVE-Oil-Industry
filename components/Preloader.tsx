"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [loadingState, setLoadingState] = useState<"centered" | "travelling" | "locking" | "done">("centered");
  const [logoTransformStyle, setLogoTransformStyle] = useState<React.CSSProperties>({
    transformOrigin: "0 0",
  });

  useEffect(() => {
    // Prevent scrolling while intro animation is active
    document.body.style.overflow = "hidden";

    // Step 1: At 1.5 seconds, start continuous 1.7s cinematic travel from center -> navbar logo
    const travelTimer = setTimeout(() => {
      const navTarget = document.getElementById("nav-logo-target");
      const preloaderLogo = document.getElementById("preloader-logo-wrapper");

      if (navTarget && preloaderLogo) {
        const navRect = navTarget.getBoundingClientRect();
        const logoRect = preloaderLogo.getBoundingClientRect();

        // Exact pixel delta for top-left alignment with transformOrigin: "0 0"
        const deltaX = navRect.left - logoRect.left;
        const deltaY = navRect.top - logoRect.top;
        const scale = navRect.width / logoRect.width;

        setLogoTransformStyle({
          transformOrigin: "0 0",
          transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scale})`,
          transition: "transform 1700ms cubic-bezier(0.45, 0, 0.15, 1)",
        });
      }

      setLoadingState("travelling");
    }, 1500);

    // Step 2: At 2.8 seconds (last 400ms of travel), begin fading the dark background overlay
    const revealTimer = setTimeout(() => {
      setLoadingState("locking");
    }, 2800);

    // Step 3: At 3.3 seconds (after logo locks perfectly into navbar), unmount & restore scroll
    const doneTimer = setTimeout(() => {
      setLoadingState("done");
      document.body.style.overflow = "";
    }, 3300);

    return () => {
      clearTimeout(travelTimer);
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (loadingState === "done") return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-auto">
      {/* Full-screen Dark Navy + Golden Premium Background — Fades out ONLY as logo reaches navbar */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-out ${
          loadingState === "locking" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{
          background: "radial-gradient(circle at center, #0f1e36 0%, #060d1a 70%, #040812 100%)",
        }}
      >
        {/* Pulsing Golden Glow behind centered logo */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full transition-opacity duration-300 ${
            loadingState === "centered" ? "opacity-100 animate-pulse" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(212,164,53,0.35) 0%, rgba(212,164,53,0.08) 45%, transparent 70%)",
            animationDuration: "1.8s",
          }}
        />

        {/* Elegant Golden Circular Orbit Ring around Logo */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-[#d4a435]/35 animate-spin-slow transition-opacity duration-400 ${
            loadingState === "centered" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            borderDasharray: "18 10",
            boxShadow: "0 0 25px rgba(212,164,53,0.15)",
          }}
        />

        {/* Subtle background dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Center & Travelling Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full pointer-events-none">
        
        {/* SVE Logo — Continuous physical travel from center -> navbar logo position */}
        <div
          id="preloader-logo-wrapper"
          className={`relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center z-20 ${
            loadingState === "centered" ? "animate-preloader-glow mb-4" : "mb-4"
          }`}
          style={loadingState !== "centered" ? logoTransformStyle : undefined}
        >
          {/* Logo Ambient Glow */}
          <div
            className={`absolute inset-0 rounded-full blur-2xl transition-opacity duration-500 ${
              loadingState === "centered" ? "opacity-80" : "opacity-0"
            }`}
            style={{
              background: "radial-gradient(circle, #d4a435 0%, transparent 70%)",
            }}
          />

          {/* SVE Logo Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-new.png"
            alt="Sri Venkateswara Enterprises Logo"
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(212,164,53,0.85)]"
          />
        </div>

        {/* Company Name Typography — Clean, premium & readable below logo */}
        <div
          className={`transition-all duration-300 transform ${
            loadingState !== "centered"
              ? "opacity-0 translate-y-3"
              : "opacity-100 translate-y-0"
          }`}
        >
          <h1
            className="text-white font-black text-2xl sm:text-3xl tracking-[0.06em] uppercase mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sri Venkateswara
          </h1>

          <div
            className="text-[#d4a435] text-sm sm:text-base font-bold tracking-[0.28em] uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Enterprises
          </div>
        </div>

      </div>
    </div>
  );
}
