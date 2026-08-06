"use client";

import React from "react";
import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/data/config";
import { PRODUCTS } from "@/data/products";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Show first 8 products
  const footerProducts = PRODUCTS.slice(0, 8);

  return (
    <footer className="relative bg-[#080f1e] overflow-hidden">
      {/* Top gold line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#d4a435] to-transparent" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #d4a435 0, #d4a435 1px, transparent 1px, transparent 80px),
                            repeating-linear-gradient(90deg, #d4a435 0, #d4a435 1px, transparent 1px, transparent 80px)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                <Image
                  src="/images/logo-new.png"
                  alt="SVE Logo"
                  fill
                  sizes="64px"
                  className="object-contain drop-shadow-md"
                />
              </div>
              <div>
                <div className="text-white font-black text-sm sm:text-base tracking-[0.04em] leading-tight uppercase">Sri Venkateswara</div>
                <div className="text-[#d4a435] text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold mt-[2px]">Enterprises</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Established 2001. Trusted industrial oil and lubricant distributor serving
              Tamil Nadu's manufacturing sector with quality products and 24-hour support.
            </p>
            <div className="text-[#d4a435]/60 text-xs italic">
              &ldquo;{COMPANY.tagline}&rdquo;
            </div>

            {/* Social / contact quick links */}
            <div className="flex gap-3 mt-6">
              <a
                href={COMPANY.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href={`mailto:${COMPANY.contact.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-[#d4a435]/10 border border-[#d4a435]/20 flex items-center justify-center text-[#d4a435] hover:bg-[#d4a435] hover:text-[#0f172a] transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href={COMPANY.contact.phoneTel}
                aria-label="Call Us"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#d4a435]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="text-white/50 hover:text-[#d4a435] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#d4a435] transition-all duration-200 overflow-hidden" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Products */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#d4a435]" />
              Our Products
            </h4>
            <ul className="space-y-2.5">
              {footerProducts.map((p) => (
                <li key={p.id}>
                  <a
                    href="#products"
                    onClick={(e) => handleNavClick(e, "#products")}
                    className="text-white/50 hover:text-[#d4a435] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#d4a435] transition-all duration-200 overflow-hidden" />
                    {p.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, "#products")}
                  className="text-[#d4a435]/60 hover:text-[#d4a435] text-xs transition-colors duration-200 italic"
                >
                  + {PRODUCTS.length - footerProducts.length} more products →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#d4a435]" />
              Contact Info
            </h4>

            <div className="space-y-4 text-sm">
              <div className="text-white/50 leading-relaxed text-sm">
                {COMPANY.address.line1},<br />
                {COMPANY.address.line2},<br />
                {COMPANY.address.city} — {COMPANY.address.pincode}
              </div>

              <div>
                <div className="text-[#d4a435]/60 text-[10px] tracking-widest uppercase mb-1">Phone</div>
                <a href={COMPANY.contact.phoneTel} className="text-white/70 hover:text-[#d4a435] transition-colors text-sm">
                  {COMPANY.contact.phoneDisplay}
                </a>
              </div>

              <div>
                <div className="text-[#d4a435]/60 text-[10px] tracking-widest uppercase mb-1">Email</div>
                <a href={`mailto:${COMPANY.contact.email}`} className="text-white/70 hover:text-[#d4a435] transition-colors text-sm break-all">
                  {COMPANY.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-white/60 text-sm">Available {COMPANY.contact.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Sri Venkateswara Enterprises. All rights reserved.
            Somanur, Tamil Nadu — Est. 2001.
          </p>
          <p className="text-white/15 text-xs">
            Distributor: APAR · Dealers: SERVO, BPCL, Klüber, Castrol, Mobil, Mosil
          </p>
        </div>
      </div>
    </footer>
  );
}
