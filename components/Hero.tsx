"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { HERO_SLIDES, COMPANY } from "@/data/config";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const DURATION = 6000;

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === current) video.play().catch(() => {});
      else video.pause();
    });
  }, [current]);

  const goTo = useCallback((index: number) => {
    setPrev(current);
    setCurrent(index);
  }, [current]);

  const goNext = useCallback(() => goTo((current + 1) % HERO_SLIDES.length), [current, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), [current, goTo]);

  useEffect(() => {
    intervalRef.current = setInterval(goNext, DURATION);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [goNext]);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goNext, DURATION);
  }, [goNext]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#0f0c07]">
      {/* Slides */}
      {HERO_SLIDES.map((slide, i) => {
        const isActive = i === current;
        const isPrev = i === prev;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : isPrev ? "opacity-0 z-0" : "opacity-0 z-0"
            }`}
          >
            <div className={`absolute inset-0 transition-transform duration-[8000ms] ease-out ${isActive ? "scale-110" : "scale-100"}`}>
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={(slide as any).videoUrl ? `${(slide as any).videoUrl}?v=2` : ""}
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.72) contrast(1.1) saturate(1.05)" }}
                muted loop playsInline
                preload={i === 0 ? "auto" : "metadata"}
              />
            </div>
            {/* Overlay — darker left, transparent right for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/12 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
          </div>
        );
      })}

      {/* Top gold + emerald accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-30"
        style={{ background: "linear-gradient(90deg, transparent, #10b981 0%, #d4a435 40%, #f0c84a 60%, #10b981 100%, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center pt-28 sm:pt-32 lg:pt-36 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl xl:max-w-3xl">

            {/* Eyebrow — with emerald live badge */}
            <div key={`eyebrow-${current}`} className="flex flex-wrap items-center gap-3 mb-3.5 sm:mb-4 animate-fade-in-up">
              <span className="w-6 sm:w-8 h-[2px] bg-[#d4a435]" />
              <span className="text-[#d4a435] text-[10px] sm:text-[11px] font-bold tracking-[0.26em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
                {COMPANY.tagline}
              </span>
            </div>

            {/* Headline — adjusted size so it never merges with navbar */}
            <h1
              key={`h1-${current}`}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.08] mb-3.5 sm:mb-4 whitespace-pre-line animate-fade-in-up-delay-1"
              style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              {HERO_SLIDES[current].headline}
            </h1>

            {/* Subheadline */}
            <p
              key={`sub-${current}`}
              className="text-white/78 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-7 max-w-lg animate-fade-in-up-delay-2"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {HERO_SLIDES[current].subheadline}
            </p>

            {/* CTAs */}
            <div key={`cta-${current}`} className="flex flex-wrap gap-3 animate-fade-in-up-delay-3">
              <a
                href={HERO_SLIDES[current].cta.href}
                onClick={(e) => handleNavClick(e, HERO_SLIDES[current].cta.href)}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-[12px] sm:text-[13px] tracking-wide transition-all duration-300 hover:-translate-y-0.5 min-h-[44px]"
                style={{
                  background: "rgba(212,164,53,0.18)",
                  border: "1.5px solid rgba(212,164,53,0.55)",
                  color: "#f5d87a",
                  backdropFilter: "blur(6px)",
                  boxShadow: "0 0 18px rgba(212,164,53,0.12)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {HERO_SLIDES[current].cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={HERO_SLIDES[current].cta2.href}
                onClick={(e) => handleNavClick(e, HERO_SLIDES[current].cta2.href)}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 border border-white/25 hover:border-[#10b981]/60 text-white/80 hover:text-white font-semibold text-[12px] sm:text-[13px] tracking-wide rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-[#10b981]/10 min-h-[44px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {HERO_SLIDES[current].cta2.label}
              </a>
            </div>

            {/* Stats strip — mobile hidden, visible on sm+ */}
            <div className="hidden sm:flex items-center gap-4 md:gap-6 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10">
              {[
                { value: "2001", label: "Est. Year" },
                { value: "25+", label: "Years Experience" },
                { value: "25+", label: "Products" },
                { value: "24/7", label: "Support" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[#d4a435] text-lg sm:text-xl font-black leading-none" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
                  <div className="text-white/50 text-[9px] sm:text-[10px] tracking-widest uppercase mt-1" style={{ fontFamily: "var(--font-display)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide counter + dots — bottom right */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-20 flex items-end gap-4 sm:gap-5">
        <div className="text-right">
          <div className="text-[#d4a435] text-2xl sm:text-3xl font-black leading-none" style={{ fontFamily: "var(--font-display)" }}>
            {String(current + 1).padStart(2, "0")}
          </div>
          <div className="text-white/30 text-xs tracking-widest mt-0.5" style={{ fontFamily: "var(--font-display)" }}>
            / {String(HERO_SLIDES.length).padStart(2, "0")}
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-center pb-1">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetTimer(); }}
              aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-500 rounded-full ${
                i === current ? "w-1.5 h-8 bg-[#10b981]" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrows — bottom left */}
      <div className="absolute bottom-6 left-4 sm:left-8 z-20 flex gap-2">
        <button
          onClick={() => { goPrev(); resetTimer(); }}
          aria-label="Previous"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#10b981]/70 hover:text-[#10b981] transition-all duration-200 backdrop-blur-sm hover:bg-[#10b981]/10 min-h-[44px] min-w-[44px]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => { goNext(); resetTimer(); }}
          aria-label="Next"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#10b981]/70 hover:text-[#10b981] transition-all duration-200 backdrop-blur-sm hover:bg-[#10b981]/10 min-h-[44px] min-w-[44px]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress bar — emerald green */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-white/10">
        <div
          key={current}
          className="h-full"
          style={{
            background: "linear-gradient(90deg, #059669, #10b981, #34d399)",
            animation: `progress-bar ${DURATION}ms linear forwards`,
          }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 opacity-50">
        <span className="text-white/60 text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)" }}>Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
