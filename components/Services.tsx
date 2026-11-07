"use client";

import React, { useState } from "react";

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Technical Guidance",
    desc: "Expert advice to identify the right lubricant for your machinery and operating conditions.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: "Lubricant Selection",
    desc: "Correct grades, viscosities, and formulations aligned with your equipment specifications.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Application Support",
    desc: "Targeted lubrication advice for CNC, hydraulic systems, and other critical applications.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Reliable Supply",
    desc: "Steady coordination ensuring timely delivery for regular and bulk requirements.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24-Hour Support",
    desc: "Around-the-clock availability for urgent supply needs and product queries.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Long-Term Partnership",
    desc: "We build lasting relationships, learning your operations for better, consistent service.",
  },
];

export default function Services() {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (title: string) => {
    setOpenService((prev) => (prev === title ? null : title));
  };

  return (
    <section id="services" className="relative bg-white overflow-hidden py-20 lg:py-28">
      {/* Subtle diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-20"
        style={{ background: "linear-gradient(135deg, transparent, rgba(15,23,42,0.03))" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <div className="section-label mb-4">Technical Support</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Expert Support,{" "}
              <span className="gold-shimmer">Always Available</span>
            </h2>
          </div>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Beyond distributing quality products, Sri Venkateswara Enterprises provides practical
            technical support through our experienced team — available 24 hours a day.
          </p>
        </div>

        {/* Services grid — Accordion */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service) => {
            const isOpen = openService === service.title;
            return (
              <div
                key={service.title}
                className={`relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#0f172a]/20 shadow-xl shadow-[#0f172a]/8"
                    : "border-gray-100 hover:border-[#0f172a]/12 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Top accent on open/hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ background: "linear-gradient(90deg, #0f172a, #1a2744)" }}
                />

                {/* Accordion trigger */}
                <button
                  onClick={() => toggleService(service.title)}
                  className="w-full flex items-center gap-4 p-6 text-left group"
                  aria-expanded={isOpen}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 shadow-sm"
                    style={{
                      background: isOpen
                        ? "linear-gradient(135deg, #0f172a, #1a2744)"
                        : "linear-gradient(135deg, #d4a435, #f0c84a)",
                      color: isOpen ? "#d4a435" : "#0f172a",
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-base flex-1 leading-snug transition-colors duration-200 ${
                    isOpen ? "text-[#0f172a]" : "text-[#0f172a] group-hover:text-[#1a2744]"
                  }`}>
                    {service.title}
                  </h3>

                  {/* Chevron */}
                  <svg
                    className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                      isOpen ? "text-[#0f172a] rotate-180" : "text-[#d4a435]"
                    }`}
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
                    <div className="px-6 pb-6 pt-0">
                      <div className="w-full h-[1px] bg-gradient-to-r from-[#0f172a]/15 to-transparent mb-3" />
                      <p className={`text-gray-500 text-[13px] leading-relaxed ${isOpen ? "animate-accordion-open" : ""}`}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <div
          className="mt-14 rounded-3xl p-7 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#0f172a]/10 overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1a2744 100%)" }}
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full pointer-events-none opacity-30"
            style={{ background: "radial-gradient(circle, rgba(212,164,53,0.3), transparent)" }}
          />
          <div className="absolute -left-6 -bottom-6 w-32 h-32 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, rgba(212,164,53,0.2), transparent)" }}
          />
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Experienced Professionals, Ready to Help
            </h3>
            <p className="text-white/60 text-sm">
              ~25 years of combined experience. We understand what your machinery needs.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-gold shrink-0 text-[13px]"
          >
            Talk to Our Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
