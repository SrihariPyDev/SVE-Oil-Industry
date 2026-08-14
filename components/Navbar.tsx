"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { NAV_LINKS, COMPANY } from "@/data/config";

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef              = useRef<HTMLDivElement>(null);
  // Ref to freeze scroll-based active tracking during programmatic smooth scroll
  const isProgrammaticScroll = useRef(false);
  const scrollFreezeTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Skip section detection while we are smooth-scrolling to a clicked link
      if (isProgrammaticScroll.current) return;
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) { setActiveSection(sections[i]); break; }
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);
      const id = href.replace("#", "");

      // ── Jump the indicator IMMEDIATELY to the target section ──
      setActiveSection(id);

      // Freeze scroll-based tracking for long enough for smooth scroll to land
      isProgrammaticScroll.current = true;
      if (scrollFreezeTimer.current) clearTimeout(scrollFreezeTimer.current);
      scrollFreezeTimer.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 1000);

      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-[0_2px_32px_rgba(15,23,42,0.1)] border-b border-[#0f172a]/8"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-[72px] sm:h-[80px]" : "h-[96px] sm:h-[120px]"
            }`}
          >

            {/* Logo + Brand — moves to left corner when scrolled */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className={`flex items-center group flex-shrink-0 min-h-[44px] transition-all duration-500 ${
                scrolled ? "-ml-2 sm:-ml-3 gap-2 sm:gap-3" : "gap-3 sm:gap-4"
              }`}
            >
              {/* Logo Container — stays large & prominent */}
              <div
                id="navbar-logo-container"
                className={`relative flex-shrink-0 transition-all duration-500 group-hover:scale-105 ${
                  scrolled
                    ? "w-[72px] h-[72px] sm:w-[88px] sm:h-[88px]"
                    : "w-[92px] h-[92px] sm:w-[116px] sm:h-[116px]"
                }`}
              >
                <Image
                  src="/images/sve-brand-logo-pure.png"
                  alt="SVE Logo"
                  fill
                  sizes="(max-width: 640px) 92px, 116px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Brand Text */}
              <div className="leading-tight">
                <div
                  className={`font-black uppercase leading-none transition-all duration-300 ${
                    scrolled
                      ? "text-[14px] sm:text-[17px] text-[#0f172a]"
                      : "text-[15px] sm:text-[18px] text-white"
                  }`}
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.035em" }}
                >
                  Sri Venkateswara
                </div>
                <div
                  className={`text-[#d4a435] tracking-[0.22em] uppercase font-bold transition-all duration-300 ${
                    scrolled ? "text-[9.5px] sm:text-[11.5px] mt-[2px]" : "text-[10px] sm:text-[12px] mt-[3px]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Enterprises
                </div>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`relative px-3 py-2 text-[12.5px] font-semibold transition-all duration-200 rounded-lg group min-h-[44px] flex items-center ${
                      isActive
                        ? scrolled ? "text-[#0f172a]" : "text-[#d4a435]"
                        : scrolled ? "text-[#374151] hover:text-[#0f172a]" : "text-white/90 hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute top-[6px] right-[5px] w-[5px] h-[5px] rounded-full bg-[#10b981] animate-emerald-pulse" />
                    )}
                    <span
                      className={`absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100 bg-gradient-to-r from-[#10b981] to-[#34d399]" : "scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-[#d4a435] to-[#f0c84a]"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Right side — CTA + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Get In Touch CTA — unique split-icon design, tablet+ */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden sm:inline-flex items-center overflow-hidden rounded-xl min-h-[44px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#10b981]/20 group/cta"
                style={{ border: "1px solid rgba(16,185,129,0.35)", boxShadow: "0 2px 12px rgba(15,23,42,0.18)" }}
              >
                {/* Left icon block */}
                <span
                  className="flex items-center justify-center w-10 h-[44px] flex-shrink-0 transition-colors duration-300 group-hover/cta:bg-[#10b981]"
                  style={{ background: "rgba(16,185,129,0.15)" }}
                >
                  <svg className="w-4 h-4 text-[#10b981] group-hover/cta:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                {/* Text + arrow block */}
                <span
                  className="flex items-center gap-2 px-3.5 pr-3 h-[44px]"
                  style={{ background: "linear-gradient(135deg, #0f172a, #1a2744)", fontFamily: "var(--font-display)" }}
                >
                  <span className="text-white text-[12px] font-bold tracking-wide whitespace-nowrap">Get in Touch</span>
                  <svg
                    className="w-3.5 h-3.5 text-[#10b981] transition-transform duration-300 group-hover/cta:translate-x-0.5"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              {/* Hamburger */}
              <button
                className={`lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded-xl transition-colors ${scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""} ${scrolled ? "bg-[#0f172a]" : "bg-white"}`} />
                <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""} ${scrolled ? "bg-[#0f172a]" : "bg-white"}`} />
                <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""} ${scrolled ? "bg-[#0f172a]" : "bg-white"}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#0f172a]/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

        {/* Drawer */}
        <div
          ref={menuRef}
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl transition-transform duration-400 ease-out flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#0f172a]/8">
            <div className="flex items-center gap-2.5">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image src="/images/sve-brand-logo-pure.png" alt="SVE" fill sizes="56px" className="object-contain" />
              </div>
              <div>
                <div className="text-[#0f172a] font-black text-[13px] tracking-wider uppercase">Sri Venkateswara</div>
                <div className="text-[#d4a435] text-[10px] tracking-[0.2em] uppercase font-bold mt-[2px]">Enterprises</div>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            {NAV_LINKS.map(({ label, href }, i) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`flex items-center gap-3 py-3.5 px-4 rounded-xl mb-1 transition-all duration-200 min-h-[52px] ${
                    isActive
                      ? "bg-[#10b981]/8 text-[#0f172a] border border-[#10b981]/20"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#0f172a] border border-transparent"
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${isActive ? "bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-gray-300"}`} />
                  <span className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>{label}</span>
                  {isActive && <span className="ml-auto text-[#10b981]"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg></span>}
                </a>
              );
            })}
          </div>

          {/* Footer CTAs */}
          <div className="px-4 pb-6 pt-3 border-t border-gray-100 space-y-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white"
              style={{ background: "linear-gradient(135deg, #0f172a, #1a2744)", border: "1px solid rgba(212,164,53,0.3)" }}
            >
              Get in Touch
            </a>
            <a
              href={COMPANY.contact.phoneTel}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#d4a435]/30 text-[#b8860b] font-semibold text-sm hover:bg-amber-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {COMPANY.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
