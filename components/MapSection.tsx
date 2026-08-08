"use client";

import React from "react";
import { COMPANY } from "@/data/config";

export default function MapSection() {
  return (
    <section id="map" className="relative bg-white overflow-hidden">
      <div className="h-[2px]" style={{ background: "linear-gradient(90deg, transparent, rgba(212,164,53,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="text-center mb-8">
          <div className="section-label justify-center mb-3">Find Us</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1510]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Our <span className="gold-shimmer">Location</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">{COMPANY.address.full}</p>
        </div>

        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-100 shadow-xl">
          <iframe
            title="Sri Venkateswara Enterprises Location"
            src={COMPANY.mapEmbedUrl}
            width="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] sm:h-[380px] lg:h-[450px]"
          />

          {/* Overlay info card */}
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-5 sm:left-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 max-w-full sm:max-w-xs shadow-xl border border-amber-100">
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <div className="w-2 h-2 rounded-full bg-[#d4a435] animate-pulse" />
              <span className="text-[#b8860b] text-[10px] font-bold tracking-widest uppercase">Sri Venkateswara Enterprises</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-2.5">{COMPANY.address.full}</p>
            <a
              href={COMPANY.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#b8860b] text-xs font-bold hover:underline"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
