"use client";

import React from "react";

const REASONS = [
  { num: "01", title: "25+ Years Experience", desc: "Decades of expertise for faster, accurate lubrication recommendations." },
  { num: "02", title: "Comprehensive Range", desc: "25-product portfolio — hydraulic, gear, cutting, specialty greases & more." },
  { num: "03", title: "Trusted Brands", desc: "Distributor for APAR; dealer for SERVO, BPCL, Klüber, Castrol, Mobil, Mosil." },
  { num: "04", title: "24-Hour Availability", desc: "Round-the-clock support for urgent supply needs — no business hours." },
  { num: "05", title: "Expert Guidance", desc: "We assess your machinery and conditions before recommending the right product." },
  { num: "06", title: "Reliable Supply", desc: "Consistent, on-time delivery to keep your production lines running." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-16 sm:py-20"
      style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)" }}
    >
      {/* Top/bottom decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(15,23,42,0.1), transparent)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(15,23,42,0.1), transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <div className="section-label mb-3">Why Choose Us</div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight"
            >
              The Right Partner for{" "}
              <span className="gold-shimmer">Industrial Lubrication</span>
            </h2>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 border border-[#10b981]/22 shrink-0"
            style={{ background: "linear-gradient(135deg, #f0fdf4, #ffffff)" }}
          >
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-[#047857] text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>Available 24 × 7</span>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {REASONS.map((reason) => (
            <div
              key={reason.num}
              className="group flex items-start gap-4 bg-white rounded-xl p-4 sm:p-5 border border-[#0f172a]/6 hover:border-[#10b981]/30 shadow-sm hover:shadow-md hover:shadow-[#10b981]/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Number badge */}
              <div
                className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                style={{ background: "linear-gradient(135deg, #0f172a, #1a2744)" }}
              >
                <span className="text-[#10b981] text-xs font-black" style={{ fontFamily: "var(--font-display)" }}>{reason.num}</span>
              </div>
              <div>
                <h3 className="text-[#0f172a] font-bold text-sm mb-1 group-hover:text-[#047857] transition-colors duration-200" style={{ fontFamily: "var(--font-display)" }}>
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-[12px] leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
