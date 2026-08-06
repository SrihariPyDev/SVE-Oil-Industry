"use client";

import React, { useState } from "react";
import { COMPANY } from "@/data/config";

const STATS = [
  { label: "Est. Year", value: "2001" },
  { label: "Years Experience", value: "25+" },
  { label: "Products", value: "25+" },
  { label: "Support", value: "24/7" },
];

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.04 12.97c.024.61.056 1.214.098 1.813a4.998 4.998 0 015.06 5.06c.6.042 1.201.074 1.812.098A11.955 11.955 0 0112 23.96c2.484.054 4.837-.576 6.854-1.626A11.968 11.968 0 0020.402 18a11.955 11.955 0 013.558-5.97 11.96 11.96 0 00-.098-1.812 4.998 4.998 0 00-5.06-5.06 47.255 47.255 0 00-1.812-.098A11.955 11.955 0 0112 .04" />
      </svg>
    ),
    title: "Quality First",
    desc: "Only trusted, industry-grade products from established manufacturers.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Timely Supply",
    desc: "Prompt delivery ensuring your operations never face shortages.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Technical Expertise",
    desc: "25+ years of collective lubrication expertise for informed guidance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Customer Focus",
    desc: "Long-term relationships built on trust, transparency and care.",
  },
];

export default function About() {
  const [openValue, setOpenValue] = useState<string | null>(null);

  const toggleValue = (title: string) => {
    setOpenValue((prev) => (prev === title ? null : title));
  };

  return (
    <section id="about" className="relative bg-white overflow-hidden py-20 lg:py-28">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, #d4a435, transparent)" }}
      />

      {/* Background ornament */}
      <div className="absolute -right-24 top-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(15,23,42,0.03) 0%, transparent 70%)" }}
      />
      <div className="absolute -left-16 bottom-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,164,53,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="section-label mb-5">Who We Are</div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* Left — Story */}
          <div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] leading-tight mb-7"
            >
              Trusted Lubricant{" "}
              <span className="gold-shimmer">Partner</span>{" "}
              Since 2001
            </h2>

            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
              <p>
                Sri Venkateswara Enterprises was founded in 2001 with a clear purpose: to be a dependable,
                customer-focused distributor of industrial oils and lubricants serving Tamil Nadu's manufacturing sector.
              </p>
              <p>
                Our experienced team — with approximately 25 years of collective expertise — has built relationships
                rooted in trust, technical understanding, and consistent supply. The right lubricant, delivered on time,
                is critical to keeping your operations running without interruption.
              </p>
              <p>
                Our portfolio spans hydraulic oils, gear oils, specialty greases, and transformer oils from leading
                brands including APAR, SERVO, Bharat Petroleum, Klüber, Castrol, Mobil, and Mosil.
              </p>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="btn-gold mt-8 inline-flex"
            >
              Work With Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — Stats + Vision/Mission */}
          <div className="space-y-6">

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="relative rounded-2xl p-5 sm:p-6 overflow-hidden group hover:-translate-y-1 transition-transform duration-300 border border-[#0f172a]/8"
                  style={{ background: "linear-gradient(135deg, #0f172a 0%, #1a2744 100%)" }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-30 pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(212,164,53,0.4) 0%, transparent 70%)" }}
                  />
                  <div className="text-2xl sm:text-3xl font-black text-[#d4a435] font-mono leading-none">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs mt-1.5 tracking-wide uppercase font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Vision & Mission */}
            <div className="space-y-3">
              <div className="rounded-2xl p-5 border border-[#10b981]/28" style={{ background: "linear-gradient(135deg, #f0fdf4, #e6fef4, #ffffff)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-[2px] bg-[#10b981]" />
                  <h3 className="text-[#059669] font-bold text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-display)" }}>Vision</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To be Tamil Nadu's most trusted industrial lubricant distributor — recognised for reliability, technical knowledge, and dependable supply.
                </p>
              </div>

              <div className="rounded-2xl p-5 border border-[#1a2744]/50 bg-[#0f172a]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-[2px] bg-[#d4a435]" />
                  <h3 className="text-[#d4a435] font-bold text-[11px] tracking-[0.2em] uppercase">Mission</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  To supply quality lubricants with dependable delivery and expert guidance — keeping your operations running efficiently, every day.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values — Accordion */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-10">
            <div className="section-label justify-center mb-3">Core Values</div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a]">
              What Guides Everything We Do
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {VALUES.map((val) => {
              const isOpen = openValue === val.title;
              return (
                <div
                  key={val.title}
                  className={`relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#0f172a]/20 shadow-xl shadow-[#0f172a]/8"
                      : "border-gray-100 hover:border-[#0f172a]/15 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Gold accent top line — visible when open or hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{ background: "linear-gradient(90deg, #d4a435, #f0c84a)" }}
                  />

                  {/* Accordion trigger */}
                  <button
                    onClick={() => toggleValue(val.title)}
                    className="w-full flex items-center gap-4 p-5 sm:p-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: isOpen
                          ? "linear-gradient(135deg, #0f172a, #1a2744)"
                          : "linear-gradient(135deg, #d4a435, #f0c84a)",
                        color: isOpen ? "#d4a435" : "#0f172a",
                      }}
                    >
                      {val.icon}
                    </div>

                    {/* Title */}
                    <h4 className={`font-bold text-sm flex-1 leading-snug transition-colors duration-200 ${isOpen ? "text-[#0f172a]" : "text-[#0f172a] group-hover:text-[#1a2744]"}`}>
                      {val.title}
                    </h4>

                    {/* Chevron */}
                    <svg
                      className={`w-4 h-4 text-[#d4a435] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Accordion content */}
                  <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                    <div className="accordion-inner">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                        {/* Divider */}
                        <div className="w-full h-[1px] bg-gradient-to-r from-[#d4a435]/30 to-transparent mb-3" />
                        <p className={`text-gray-500 text-[13px] leading-relaxed ${isOpen ? "animate-accordion-open" : ""}`}>
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
