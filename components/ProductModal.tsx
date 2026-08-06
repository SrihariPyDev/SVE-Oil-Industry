"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { COMPANY } from "@/data/config";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  const [imgError, setImgError] = useState(false);
  useEffect(() => {
    if (!product) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const whatsappUrl = `https://wa.me/${COMPANY.contact.whatsapp}?text=${encodeURIComponent(
    `Hello Sri Venkateswara Enterprises, I am interested in your ${product.name} product. Could you please share more details?`
  )}`;

  return (
    <div
      className="modal-backdrop animate-fade-in-up"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} details`}
    >
      <div className="modal-content">
        {/* Header image area */}
        <div className="relative h-52 sm:h-64 rounded-t-3xl overflow-hidden img-placeholder bg-[#0f172a]">
          {!imgError && (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover opacity-90"
              onError={() => setImgError(true)}
            />
          )}
          <div className={`${imgError ? 'flex' : 'hidden'} absolute inset-0 flex-col items-center justify-center z-10`}>
            <span className="text-6xl mb-2">{product.icon}</span>
            <span className="text-[#d4a435] text-xs tracking-[0.3em] uppercase font-semibold">
              {product.category}
            </span>
          </div>
          {/* Gold accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a435] to-transparent z-10" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0f172a]/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#d4a435] hover:text-[#0f172a] transition-all duration-200 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {product.name}
              </h2>
              <span className="inline-block mt-2 px-3 py-1 bg-[#0f172a]/5 text-[#0f172a] text-xs font-semibold rounded-full border border-[#0f172a]/10">
                {product.category}
              </span>
            </div>
          </div>

          <p className="text-[#374151] leading-relaxed mb-8">{product.description}</p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Applications */}
            <div>
              <h3 className="flex items-center gap-2 text-[#0f172a] font-bold text-sm tracking-wider uppercase mb-4">
                <span className="w-4 h-[2px] bg-[#d4a435]" />
                Typical Applications
              </h3>
              <ul className="space-y-2">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-start gap-2 text-[#4b5563] text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#d4a435] shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="flex items-center gap-2 text-[#0f172a] font-bold text-sm tracking-wider uppercase mb-4">
                <span className="w-4 h-[2px] bg-[#0f172a]" />
                Key Benefits
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[#4b5563] text-sm">
                    <svg className="w-4 h-4 text-[#0f172a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Performance Characteristics */}
          <div className="bg-[#f8fafc] rounded-2xl p-5 mb-8">
            <h3 className="flex items-center gap-2 text-[#0f172a] font-bold text-sm tracking-wider uppercase mb-4">
              <span className="w-4 h-[2px] bg-[#d4a435]" />
              General Characteristics
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {product.characteristics.map((c) => (
                <div key={c} className="flex items-center gap-2 text-[#4b5563] text-sm bg-white rounded-lg px-3 py-2 border border-[#e5e7eb]">
                  <span className="text-[#d4a435]">◆</span>
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Enquire on WhatsApp
            </a>
            <a
              href={`mailto:${COMPANY.contact.email}?subject=Enquiry: ${product.name}&body=Hello, I am interested in ${product.name}. Please share more details.`}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0f172a] hover:bg-[#1a2744] text-white font-semibold text-sm transition-all duration-300 border border-[#d4a435]/20 hover:border-[#d4a435]/40"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
