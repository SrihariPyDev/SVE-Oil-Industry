"use client";

import React, { useState } from "react";

// SAMPLE/PLACEHOLDER testimonials — Replace with real customer reviews
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Sri Venkateswara Enterprises has been our go-to lubricant supplier for several years. Their team always helps us identify the right product for our hydraulic systems, and supply has been consistently reliable.",
    name: "R. Subramanian",
    role: "Maintenance Manager",
    company: "Industrial Plant, Coimbatore Region",
    initials: "RS",
  },
  {
    id: 2,
    quote:
      "We shifted to Sri Venkateswara Enterprises for our cutting oil and gear oil requirements. The product quality and the technical guidance they provide have genuinely helped reduce our machine downtime.",
    name: "K. Muthukrishnan",
    role: "Production Engineer",
    company: "Precision Engineering Workshop, Tamil Nadu",
    initials: "KM",
  },
  {
    id: 3,
    quote:
      "What I appreciate most is their 24-hour availability. When we had an urgent lubricant requirement during a weekend breakdown, they responded promptly and arranged supply quickly.",
    name: "T. Venkatesh",
    role: "Plant Operations Head",
    company: "Manufacturing Facility, Somanur Area",
    initials: "TV",
  },
  {
    id: 4,
    quote:
      "Reliable supplier with a good range of products. Their knowledge of specialty greases for our high-temperature applications has been particularly valuable. Highly recommended.",
    name: "P. Arumugam",
    role: "Technical Supervisor",
    company: "Textile Mill, Tamil Nadu",
    initials: "PA",
  },
  {
    id: 5,
    quote:
      "We've been sourcing transformer oil and compressor oil from Sri Venkateswara Enterprises. The products are always genuine and the service is prompt. Good people to work with.",
    name: "S. Chandramouli",
    role: "Electrical Maintenance Supervisor",
    company: "Power Infrastructure Facility",
    initials: "SC",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goTo = (i: number) => setCurrent(i);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="relative bg-white overflow-hidden py-24 lg:py-32">
      {/* Decorative circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#d4a435]/5 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#0a1f0d]/5 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#d4a435]/60" />
            <span className="text-[#d4a435] text-xs font-bold tracking-[0.25em] uppercase">
              Customer Testimonials
            </span>
            <span className="w-8 h-[1px] bg-[#d4a435]/60" />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0a1f0d] mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-[#9ca3af] text-sm italic">
            Sample testimonials — to be replaced with verified customer reviews
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Large quote mark */}
          <div
            className="absolute -top-8 -left-4 text-[#d4a435]/15 select-none pointer-events-none"
            style={{ fontSize: "12rem", lineHeight: 1, fontFamily: "'Playfair Display', Georgia, serif" }}
            aria-hidden="true"
          >
            "
          </div>

          <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#e5e7eb] min-h-[260px] flex flex-col justify-between">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-5 h-5 text-[#d4a435] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote text */}
            <p className="text-[#374151] text-lg sm:text-xl leading-relaxed font-medium italic mb-8">
              "{TESTIMONIALS[current].quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0a1f0d] flex items-center justify-center text-[#d4a435] font-bold text-sm shrink-0">
                {TESTIMONIALS[current].initials}
              </div>
              <div>
                <div className="font-bold text-[#0a1f0d]">{TESTIMONIALS[current].name}</div>
                <div className="text-[#6b7280] text-sm">{TESTIMONIALS[current].role}</div>
                <div className="text-[#9ca3af] text-xs">{TESTIMONIALS[current].company}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#0a1f0d] hover:border-[#d4a435] hover:text-[#d4a435] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2.5 bg-[#d4a435]"
                    : "w-2.5 h-2.5 bg-[#e5e7eb] hover:bg-[#d4a435]/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border border-[#e5e7eb] flex items-center justify-center text-[#0a1f0d] hover:border-[#d4a435] hover:text-[#d4a435] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
