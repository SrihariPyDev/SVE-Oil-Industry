"use client";

import React, { useState, useCallback, memo } from "react";
import Image from "next/image";
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from "@/data/products";
import ProductModal from "./ProductModal";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const usedCategories = [
    "All",
    ...Array.from(new Set(PRODUCTS.map((p) => p.category))),
  ];

  return (
    <section id="products" className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(160deg, #060d1a 0%, #0a1428 40%, #0f172a 70%, #071020 100%)" }}
    >
      {/* Animated floating glow orb — top left */}
      <div className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full pointer-events-none animate-float"
        style={{ background: "radial-gradient(circle, rgba(212,164,53,0.07) 0%, rgba(212,164,53,0.02) 40%, transparent 70%)", animationDuration: "9s" }}
      />
      {/* Animated floating glow orb — bottom right */}
      <div className="absolute -bottom-24 -right-16 w-[400px] h-[400px] rounded-full pointer-events-none animate-float"
        style={{ background: "radial-gradient(circle, rgba(99,130,190,0.07) 0%, rgba(99,130,190,0.02) 40%, transparent 70%)", animationDuration: "12s", animationDelay: "3s" }}
      />
      {/* Centered radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,164,53,0.04) 0%, transparent 65%)" }}
      />
      {/* Diagonal accent streak */}
      <div className="absolute top-0 right-0 w-px h-full pointer-events-none opacity-20"
        style={{ background: "linear-gradient(180deg, transparent, rgba(212,164,53,0.6) 40%, rgba(212,164,53,0.6) 60%, transparent)", transform: "translateX(-120px) skewX(-15deg)", width: "1px" }}
      />
      {/* Fine dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{ backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#d4a435]/60" />
            <span className="text-[#d4a435] text-[11px] font-bold tracking-[0.28em] uppercase">Our Products</span>
            <span className="w-6 h-[1.5px] bg-[#d4a435]/60" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Complete Lubricant{" "}
            <span className="gold-shimmer">Portfolio</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-[15px] leading-relaxed">
            A comprehensive range of industrial oils, lubricants, and specialty products
            to meet every lubrication requirement across diverse industries.
          </p>
        </div>

        {/* Category filter — horizontally scrollable on mobile */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide justify-start sm:justify-center">
          {usedCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-200 border whitespace-nowrap ${
                activeCategory === cat
                  ? "text-white border-transparent shadow-lg shadow-[#0f172a]/30"
                  : "border-white/15 text-white/60 hover:border-[#d4a435]/50 hover:text-white"
              }`}
              style={activeCategory === cat
                ? { background: "linear-gradient(135deg, #0f172a, #1a2744)", border: "1px solid rgba(212,164,53,0.35)" }
                : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onClick={handleProductClick}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-white/40 text-sm mb-4">Can't find what you're looking for?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline-gold inline-flex"
            style={{ borderColor: "rgba(212,164,53,0.5)", color: "#d4a435" }}
          >
            Contact Us for Custom Requirements
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}

const ProductCard = memo(function ProductCard({
  product,
  index,
  onClick,
}: {
  product: Product;
  index: number;
  onClick: (product: Product) => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      onClick={() => onClick(product)}
      className="group relative bg-[#0f1d35] hover:bg-[#162040] border border-white/5 hover:border-[#d4a435]/25 rounded-2xl overflow-hidden transition-all duration-300 text-left hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#080f1e]/60 focus:outline-none focus:ring-2 focus:ring-[#d4a435]/40"
      aria-label={`View ${product.name}`}
    >
      {/* Image area */}
      <div className="img-placeholder h-36 sm:h-40 relative overflow-hidden bg-[#0a1525]">
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none z-10" />
        {!imgError && (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
            onError={() => setImgError(true)}
          />
        )}
        {/* Fallback icon */}
        <div className={`${imgError ? "flex" : "hidden"} absolute inset-0 flex-col items-center justify-center z-10`}>
          <span className="text-4xl sm:text-5xl mb-1 group-hover:scale-110 transition-transform duration-500">{product.icon}</span>
          <span className="text-[#d4a435]/60 text-[9px] tracking-[0.3em] uppercase font-semibold">{product.category}</span>
        </div>
        {/* Hover gold shimmer overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(212,164,53,0.12), transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4">
        <h3 className="text-white font-bold text-[13px] sm:text-sm mb-1.5 group-hover:text-[#d4a435] transition-colors duration-200 leading-snug">
          {product.name}
        </h3>
        <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed line-clamp-2">{product.shortDesc}</p>

        {/* View details */}
        <div className="mt-3 flex items-center gap-1 text-[#d4a435] text-[11px] font-bold tracking-wide">
          View Details
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Bottom gold line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, transparent, #d4a435, transparent)" }}
      />
    </button>
  );
});
