"use client";

import React, { useState } from "react";
import Image from "next/image";

const BRANDS = [
  { id: "Castrol",      name: "Castrol" },
  { id: "Mobil",        name: "Mobil" },
  { id: "Shell",        name: "Shell" },
  { id: "Valvoline",    name: "Valvoline" },
  { id: "bharat-petroleum",    name: "bharat-petroleum" },
  { id: "Total-Energies",  name: "Total-Energies" },
  { id: "Eni",          name: "Eni" },
  { id: "Kluber",       name: "Kluber" },
  { id: "Mosil",        name: "Mosil" },
  { id: "Selco",       name: "Selco" },
  { id: "Servo",        name: "Servo" },
  { id: "HP",           name: "HP" },
  { id: "Mak",          name: "Mak" },
  { id: "Balmerol",     name: "Balmerol" },
  { id: "Motorol",      name: "Motorol" },
  { id: "SKF",          name: "SKF" },
  { id: "torq",         name: "Torq" },
];

export default function Dealers() {
  return (
    <section id="dealers" className="relative bg-white overflow-hidden py-20 lg:py-28">
      {/* Subtle diagonal texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.012]"
        style={{ backgroundImage: `repeating-linear-gradient(45deg, #0f172a 0, #0f172a 1px, transparent 1px, transparent 22px)` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label justify-center mb-4">Brands We Carry</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Dealer{" "}
            <span className="gold-shimmer">Brands</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-[15px]">
            We deal in products from leading lubricant brands trusted by industries worldwide —
            connecting you with the right brand for every application.
          </p>
        </div>

        {/* Dealer badge */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[1px] flex-1" style={{ background: "linear-gradient(to right, transparent, #e5e7eb)" }} />
          <div className="px-4 py-1.5 rounded-full text-[#0f172a] text-[11px] font-bold tracking-widest uppercase whitespace-nowrap border border-[#0f172a]/15"
            style={{ background: "linear-gradient(135deg, #f8fafc, #f1f5f9)" }}
          >
            Dealer — Multiple Brands
          </div>
          <div className="h-[1px] flex-1" style={{ background: "linear-gradient(to left, transparent, #e5e7eb)" }} />
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {BRANDS.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>

        <p className="mt-8 text-center text-gray-400 text-xs">
          Product availability varies. Contact us to check current stock and pricing.
        </p>
      </div>
    </section>
  );
}

function BrandCard({ brand, index }: { brand: typeof BRANDS[0]; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-[#0f172a]/15 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
      {/* Navy top line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, #0f172a, #1a2744)" }}
      />
      <div
        className="h-24 sm:h-28 lg:h-32 flex items-center justify-center p-2 transition-colors duration-300"
        style={{ background: "white" }}
      >
        <div
          className="w-full h-[85%] flex items-center justify-center animate-float relative"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          {!imgError && (
            <Image
              src={`/images/brands/${brand.id}.png`}
              alt={`${brand.name} logo`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
              onError={() => setImgError(true)}
            />
          )}
          {imgError && (
            <span
              className="text-xs font-black text-gray-400 group-hover:text-[#0f172a] transition-colors duration-300 text-center leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {brand.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
