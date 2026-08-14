"use client";

import React from "react";
import Image from "next/image";

export default function Distributors() {
  return (
    <section id="distributors" className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1a2e 100%)" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #d4a435 0, #d4a435 1px, transparent 1px, transparent 80px),
                            repeating-linear-gradient(90deg, #d4a435 0, #d4a435 1px, transparent 1px, transparent 80px)`,
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-96 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,164,53,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#d4a435]/60" />
            <span className="text-[#d4a435] text-[11px] font-bold tracking-[0.28em] uppercase">Distribution Partnership</span>
            <span className="w-6 h-[1.5px] bg-[#d4a435]/60" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Distribution{" "}
            <span className="gold-shimmer">Partner</span>
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4a435]/30 bg-[#d4a435]/8">
            <svg className="w-3.5 h-3.5 text-[#d4a435]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[#d4a435] text-xs font-bold tracking-wide">Authorized Distributor</span>
          </div>
        </div>

        {/* APAR Feature Card */}
        <div className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto border border-[#d4a435]/12"
          style={{ background: "linear-gradient(135deg, #0d1a2e 0%, #0a1525 100%)" }}
        >
          {/* Corner ornaments */}
          {["top-0 left-0 border-t-2 border-l-2 rounded-tl-3xl", "top-0 right-0 border-t-2 border-r-2 rounded-tr-3xl", "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-3xl", "bottom-0 right-0 border-b-2 border-r-2 rounded-br-3xl"].map((cls, i) => (
            <div key={i} className={`absolute w-10 h-10 ${cls} border-[#d4a435]/30`} />
          ))}

          {/* Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(212,164,53,0.06) 0%, transparent 70%)" }}
          />

          <div className="relative grid lg:grid-cols-2 gap-8 sm:gap-10 items-center p-8 sm:p-12">

            {/* Left — APAR Brand Card with HD Logo */}
            <div className="flex flex-col items-center gap-5">
              <div className="relative">
                {/* Outer gold glow */}
                <div
                  className="absolute -inset-4 rounded-3xl -z-10 blur-2xl opacity-40"
                  style={{ background: "radial-gradient(circle, rgba(212,164,53,0.3), transparent)" }}
                />
                {/* Pure white card — logo renders sharp and clean */}
                <div
                  className="rounded-2xl flex items-center justify-center px-10 py-8 sm:px-14 sm:py-10 shadow-2xl transition-all duration-300 hover:shadow-[0_20px_60px_rgba(212,164,53,0.3)] group"
                  style={{
                    background: "#ffffff",
                    border: "2px solid rgba(212,164,53,0.35)",
                    minWidth: "280px",
                    minHeight: "180px",
                  }}
                >
                  <Image
                    src="/images/brands/Apar.jpg"
                    alt="APAR Industries — Tomorrow's solutions today"
                    width={280}
                    height={140}
                    loading="eager"
                    priority
                    sizes="(max-width: 640px) 220px, 280px"
                    className="w-52 sm:w-64 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{ display: "block" }}
                  />
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-[#10b981] text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "var(--font-display)" }}>Authorized Distributor</div>
                <div className="text-white text-xl font-black" style={{ fontFamily: "var(--font-display)" }}>APAR Industries Ltd.</div>
                <div className="text-white/50 text-sm mt-0.5">Industrial Lubricants & Oils Division</div>
              </div>
            </div>

            {/* Right — Content */}
            <div>
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Quality Lubricants,{" "}
                <span className="text-[#d4a435]">Dependable Supply</span>
              </h3>

              <p className="text-white/60 text-[14px] leading-relaxed mb-3">
                APAR Industries is one of India's leading manufacturers of specialty industrial lubricants,
                including their trusted{" "}
                <span className="text-[#d4a435] font-semibold">POWER OIL</span>{" "}
                range — serving manufacturing, power, automotive, and engineering sectors nationwide.
              </p>
              <p className="text-white/60 text-[14px] leading-relaxed mb-7">
                As an Authorized Distributor, Sri Venkateswara Enterprises brings genuine APAR products
                directly to industries across Tamil Nadu with reliable local supply and professional support.
              </p>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold border border-[#d4a435]/40 text-[#d4a435] hover:bg-[#d4a435] hover:text-[#0f172a] transition-all duration-300"
              >
                Enquire About APAR Products
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
