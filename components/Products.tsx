"use client";

import React, { useState, useCallback, useRef, memo } from "react";
import Image from "next/image";
import {
  PRODUCT_CATALOGUE,
  ProductCategory,
  ProductType,
  GradeGroup,
  TextileSubItem,
} from "@/data/productCatalogue";
import { COMPANY } from "@/data/config";

// ─────────────────────────────────────────
// Types for internal navigation
// ─────────────────────────────────────────
type Level = 1 | 2 | 3;

// ─────────────────────────────────────────
// Icons (SVG, no external deps)
// ─────────────────────────────────────────
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// ─────────────────────────────────────────
// Breadcrumb
// ─────────────────────────────────────────
interface BreadcrumbProps {
  level: Level;
  selectedCategory: ProductCategory | null;
  selectedType: ProductType | null;
  goToLevel1: () => void;
  goToLevel2: () => void;
}

const Breadcrumb = memo(function Breadcrumb({
  level,
  selectedCategory,
  selectedType,
  goToLevel1,
  goToLevel2,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Product catalogue navigation"
      className="flex items-center gap-1.5 flex-wrap mb-8"
    >
      {/* Products */}
      <button
        onClick={goToLevel1}
        className="text-[#d4a435] text-sm font-semibold hover:text-white transition-colors duration-200 underline-offset-2 hover:underline"
        aria-label="Back to all product categories"
      >
        Products
      </button>

      {/* Category */}
      {level >= 2 && selectedCategory && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-white/25 shrink-0" />
          <button
            onClick={level === 3 ? goToLevel2 : undefined}
            disabled={level === 2}
            className={`text-sm font-semibold transition-colors duration-200 ${
              level === 3
                ? "text-[#d4a435] hover:text-white underline-offset-2 hover:underline cursor-pointer"
                : "text-white/60 cursor-default"
            }`}
          >
            {selectedCategory.name}
          </button>
        </>
      )}

      {/* Product Type */}
      {level === 3 && selectedType && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-white/25 shrink-0" />
          <span className="text-sm text-white/60 font-medium">{selectedType.name}</span>
        </>
      )}
    </nav>
  );
});

// ─────────────────────────────────────────
// Back Button
// ─────────────────────────────────────────
interface BackButtonProps {
  label: string;
  onClick: () => void;
}

const BackButton = memo(function BackButton({ label, onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 mb-8 px-4 py-2 rounded-full border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.07]"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
      {label}
    </button>
  );
});

// ─────────────────────────────────────────
// Grade Chip (plain pill — used inside SubItemCard only)
// ─────────────────────────────────────────
const GradeChip = memo(function GradeChip({
  grade,
  compact = false,
  onClick,
}: {
  grade: string;
  compact?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 font-semibold rounded-lg border border-[#d4a435]/25 bg-[#d4a435]/[0.07] text-[#d4a435] transition-all duration-200 hover:bg-[#d4a435]/[0.18] hover:border-[#d4a435]/50 select-none cursor-pointer text-left ${
        compact
          ? "px-2.5 py-1 text-[11px] tracking-wide"
          : "px-3.5 py-1.5 text-[12.5px] tracking-wide"
      }`}
      aria-label={`View specification for grade ${grade}`}
    >
      <span>{grade}</span>
      <svg className="w-2.5 h-2.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
  );
});

// ─────────────────────────────────────────
// Level 2 — Product Type Images Map
// ─────────────────────────────────────────
/** Map product-type id → public image path (user-uploaded PNG files). */
const PRODUCT_TYPE_IMAGES: Record<string, string> = {
  // ── Automotive ─────────────────────────────────────────────────
  "engine-oil":              "/images/products/engine_oil.png",
  "gear-oil":                "/images/products/gear_oil.png",
  "hydraulic-oil":           "/images/products/hydraulic_oil.png",
  "hlp-hydraulic-oil":       "/images/products/hlp_hydraulic_oil.png",
  "brake-oil":               "/images/products/brake_oil.png",
  "transmission-oil":        "/images/products/transmission_oil.png",
  "screw-compressor-oil":    "/images/products/screw_compressor_oil.png",
  // ── Industrial / general ────────────────────────────────────────
  "turbine-oil":             "/images/products/turbine_oil.png",
  "compressor-oil":          "/images/products/compressor_oil.png",
  "transformer-oil":         "/images/products/transformer_oil.png",
  "heat-transfer-oil":       "/images/products/heat_transfer_oil.png",
  "rust-preventive-oil":     "/images/products/rust_preventive_oil.png",
  "rust-preventive":         "/images/products/rust_preventive_oil.png",
  "spindle-oil":             "/images/products/spindle_oil.png",
  // ── Textile units ───────────────────────────────────────────────
  "spinning-unit":           "/images/products/spinning_unit.png",
  "sizing-unit":             "/images/products/sizing_unit.png",
  "weaving-unit":            "/images/products/weaving_unit.png",
  "dyeing-unit":             "/images/products/dyeing_unit.png",
  "knitting-unit":           "/images/products/knitting_unit.png",
  // ── Metal Working Fluids ────────────────────────────────────────
  "coolants":                "/images/products/coolants.png",
  "way-lube":                "/images/products/way_lube.png",
  "cutting-oil":             "/images/products/cutting_oil.png",
  "neat-cutting-oil":        "/images/products/neat_cutting_oil.png",
  "quenching-oil":           "/images/products/quenching_oil.png",
  // ── Greases & Specialty ─────────────────────────────────────────
  "grease":                  "/images/products/grease_oil.png",
  "specialty-greases":       "/images/products/specialty_greases_oil.png",
  "specialty-oils":          "/images/products/specialty_oil.png",
  // ── Rubber Industries ───────────────────────────────────────────
  "rubber-oil":              "/images/products/rubber_oil.png",
};

// ─────────────────────────────────────────
// Grade Card — mini image + grade name
// ─────────────────────────────────────────
// ─────────────────────────────────────────
// Grade Short Description Helper
// ─────────────────────────────────────────
function getGradeDescription(grade: string, productName?: string): string {
  const g = grade.trim();

  // Engine oils
  if (g === "5W-30") return "Fully synthetic multi-grade engine oil designed for high fuel efficiency, rapid low-temperature cold start protection, and engine cleanliness in modern petrol & diesel vehicles.";
  if (g === "15W-40") return "Heavy-duty multi-grade diesel engine lubricant providing outstanding wear protection, thermal stability, and soot control for commercial vehicles and generator sets.";
  if (g === "CF-4") return "API CF-4 heavy-duty engine oil formulated for turbocharged and naturally aspirated diesel engines operating under severe duty conditions.";
  if (g === "CH-4") return "API CH-4 multi-grade diesel lubricant optimized for high-speed four-stroke diesel engines meeting strict emission standards.";
  if (g === "CI-4") return "API CI-4 heavy-duty diesel engine lubricant engineered for engines equipped with Exhaust Gas Recirculation (EGR) systems.";
  if (g === "CI-4+") return "Enhanced API CI-4 Plus diesel lubricant offering superior shear stability, piston deposit control, and soot-induced viscosity control.";
  if (g === "CJ-4") return "API CJ-4 low-SAPS heavy-duty diesel engine oil designed for advanced engines equipped with DPF and diesel particulate filters.";
  if (g === "CK-4") return "API CK-4 next-generation diesel engine lubricant delivering enhanced oxidation stability, shear control, and wear protection.";

  // Gear oils
  if (g === "80W-90") return "Extreme-pressure (EP) automotive gear lubricant grade for manual transmissions, transaxles, and rear axle differentials.";
  if (g === "85W-140") return "Heavy-duty extreme pressure gear oil formulated for commercial vehicle axles, differentials, and final drives under heavy load.";
  if (g === "Mono Grade 90") return "Classic single-grade EP gear lubricant designed for manual gearboxes and steering boxes requiring API GL-4/GL-5 protection.";
  if (g === "Mono Grade 140") return "High-viscosity heavy-duty gear lubricant for heavy commercial vehicle axles and industrial gearboxes under high load.";

  // Hydraulics
  if (g.includes("32")) return "ISO VG 32 anti-wear hydraulic oil grade designed for industrial hydraulic systems, high-pressure vane and piston pumps operating at low-to-medium ambient temperatures.";
  if (g.includes("46")) return "ISO VG 46 premium anti-wear hydraulic fluid — standard viscosity choice for industrial manufacturing machinery, hydraulic presses, and injection molding.";
  if (g.includes("68")) return "ISO VG 68 heavy-duty anti-wear hydraulic fluid for industrial machinery operating under high ambient temperatures and heavy continuous duty.";
  if (g.includes("100")) return "ISO VG 100 industrial circulation & hydraulic oil grade for heavy machinery, enclosed gear units, and high-load hydraulic systems.";
  if (g.includes("150")) return "ISO VG 150 industrial gear and circulating lubricant grade providing heavy film strength for spur, helical, and bevel gear sets.";
  if (g.includes("220")) return "ISO VG 220 heavy-duty industrial gear oil grade for heavily loaded industrial drive gearboxes, mill drives, and conveyors.";
  if (g.includes("320")) return "ISO VG 320 high-viscosity extreme-pressure gear lubricant for industrial gear drives subjected to extreme shock loads.";
  if (g.includes("460")) return "ISO VG 460 extra heavy-duty industrial gear oil grade engineered for severe load conditions, slow-moving gears, and high temperature drives.";

  // Brake oils & Transmissions
  if (g.toUpperCase().includes("DOT 3")) return "Heavy-duty hydraulic brake fluid grade formulated for disc, drum, and ABS braking systems requiring DOT 3 performance.";
  if (g.toUpperCase().includes("DOT 4")) return "High-boiling point synthetic brake fluid offering superior vapor-lock resistance for modern passenger & commercial vehicles.";
  if (g.toUpperCase().includes("DEXRON II")) return "Automatic transmission fluid grade for passenger car & commercial automatic gearboxes and power steering systems.";
  if (g.toUpperCase().includes("DEXRON III")) return "Premium multi-vehicle automatic transmission fluid providing smooth shifting performance and anti-shudder protection.";
  if (g.toUpperCase().includes("UTTO")) return "Universal Tractor Transmission Oil grade for combined hydraulic, transmission, wet-brake, and final-drive tractor systems.";

  // Default clean fallback
  return `${g} is a high-performance industrial grade formulated for ${productName ?? "industrial"} applications. Available for bulk and barrel supply with guaranteed quality.`;
}

// ─────────────────────────────────────────
// Enquiry Section — full size (no-grade products)
// ─────────────────────────────────────────
interface EnquirySectionProps {
  productName: string;
  showContactMessage?: boolean;
}

const EnquirySection = memo(function EnquirySection({
  productName,
  showContactMessage = false,
}: EnquirySectionProps) {
  const whatsappUrl = `https://wa.me/${COMPANY.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hello Sri Venkateswara Enterprises, I would like to enquire about ${productName}. Please share available grades and specifications.`
  )}`;
  const mailUrl = `mailto:${COMPANY.contact.email}?subject=Enquiry%3A%20${encodeURIComponent(productName)}&body=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(productName)}%20and%20would%20like%20to%20know%20the%20available%20grades%20and%20specifications.`;

  return (
    <div className="mt-8 rounded-2xl border border-white/8 bg-[#0b1525] p-6">
      {showContactMessage && (
        <p className="text-white/45 text-sm leading-relaxed mb-5">
          Contact us for available grades and specifications for{" "}
          <span className="text-white/70 font-semibold">{productName}</span>.
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <WhatsAppIcon />
          Enquire on WhatsApp
        </a>
        <a
          href={mailUrl}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#0f172a] hover:bg-[#1a2744] text-white font-semibold text-sm transition-all duration-300 border border-[#d4a435]/20 hover:border-[#d4a435]/40 hover:-translate-y-0.5"
        >
          <MailIcon />
          Send Email Enquiry
        </a>
      </div>
    </div>
  );
});

// ─────────────────────────────────────────
// Enquiry Bar — compact, used below grades
// ─────────────────────────────────────────
const EnquiryBar = memo(function EnquiryBar({ productName }: { productName: string }) {
  const whatsappUrl = `https://wa.me/${COMPANY.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hello SVE, I would like to enquire about ${productName}.`
  )}`;
  const mailUrl = `mailto:${COMPANY.contact.email}?subject=Enquiry%3A%20${encodeURIComponent(productName)}`;

  return (
    <div className="mt-6 flex items-center gap-2.5 flex-wrap">
      <span className="text-white/35 text-[11px] font-medium uppercase tracking-wider mr-1">Enquire:</span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366]/90 hover:bg-[#22c55e] text-white text-[11.5px] font-semibold transition-all duration-200 hover:-translate-y-px shadow-sm"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a
        href={mailUrl}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0f172a] hover:bg-[#1a2744] text-white text-[11.5px] font-semibold border border-[#d4a435]/20 hover:border-[#d4a435]/40 transition-all duration-200 hover:-translate-y-px"
      >
        <MailIcon />
        Email
      </a>
    </div>
  );
});

// ─────────────────────────────────────────
// Level 1 — Category Card
// ─────────────────────────────────────────

/** Map category id → public image path */
const CATEGORY_IMAGES: Record<string, string> = {
  // Original industries (.jpg)
  automotive:                    "/images/products/cat_automotive.jpg",
  textile:                       "/images/products/cat_textile.jpg",
  metalworking:                  "/images/products/cat_metalworking.jpg",
  // New industries (.png)
  "paper-sugar-mills":           "/images/products/cat_paper-sugar-mills.png",
  "quarries-blue-metals":        "/images/products/cat_quarries-blue-metals.png",
  "injection-mouldings":         "/images/products/cat_injection-mouldings.png",
  "pump-compressor":             "/images/products/cat_pump-compressor.png",
  agriculture:                   "/images/products/cat_agriculture.png",
  "rubber-industries":           "/images/products/cat_rubber-industries.png",
  "lubricants-gear-hydraulic":   "/images/products/cat_lubricants-gear-hydraulic.png",
};

interface CategoryCardProps {
  category: ProductCategory;
  index: number;
  onClick: () => void;
}

const CategoryCard = memo(function CategoryCard({
  category,
  index,
  onClick,
}: CategoryCardProps) {
  const typeCount = category.productTypes.length;
  const imageSrc = CATEGORY_IMAGES[category.id] ?? null;

  return (
    <button
      onClick={onClick}
      className="group relative text-left rounded-2xl overflow-hidden border border-white/[0.07] hover:border-[#d4a435]/50 bg-[#0b1525] transition-all duration-350 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60 focus:outline-none focus:ring-2 focus:ring-[#d4a435]/30"
      aria-label={`Explore ${category.name}`}
    >
      {/* ── Premium photo banner ──────────────────────────────── */}
      <div className="relative w-full h-[160px] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={index < 6}
          />
        ) : (
          <div className="w-full h-full bg-[#0f1e36] flex items-center justify-center text-5xl">
            {category.icon}
          </div>
        )}
        {/* Dark gradient fade into card body */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,21,37,0.05) 0%, rgba(11,21,37,0.55) 70%, rgba(11,21,37,1) 100%)",
          }}
        />
        {/* Hover gold tint */}
        <div className="absolute inset-0 bg-[#d4a435]/0 group-hover:bg-[#d4a435]/10 transition-all duration-350 pointer-events-none" />
      </div>

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4a435]/25 rounded-tl-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4a435]/25 rounded-br-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* ── Card text body ───────────────────────────────────── */}
      <div className="relative px-6 pt-4 pb-6 flex flex-col">
        {/* Name */}
        <h3
          className="text-white font-black text-[17px] leading-snug mb-2 group-hover:text-[#d4a435] transition-colors duration-200"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {category.name}
        </h3>

        {/* Description */}
        <p className="text-white/45 text-[13px] leading-relaxed mb-5 line-clamp-2">
          {category.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.07]">
          <span className="text-white/30 text-[11px] font-medium tracking-wider uppercase">
            {typeCount} product {typeCount === 1 ? "type" : "types"}
          </span>
          <span className="flex items-center gap-1.5 text-[#d4a435] text-[12px] font-bold tracking-wide group-hover:gap-2.5 transition-all duration-200">
            View Products
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Bottom gold line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, transparent, #d4a435, transparent)" }}
      />
    </button>
  );
});

// ─────────────────────────────────────────
// Level 1 — Categories View
// ─────────────────────────────────────────
interface CategoriesViewProps {
  onSelect: (cat: ProductCategory) => void;
}

function CategoriesView({ onSelect }: CategoriesViewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {PRODUCT_CATALOGUE.map((cat, i) => (
        <CategoryCard
          key={cat.id}
          category={cat}
          index={i}
          onClick={() => onSelect(cat)}
        />
      ))}
    </div>
  );
}



// ─────────────────────────────────────────
// Level 2 — Product Type Card
// ─────────────────────────────────────────
interface TypeCardProps {
  type: ProductType;
  index: number;
  onClick: () => void;
}

const TypeCard = memo(function TypeCard({ type, index, onClick }: TypeCardProps) {
  const isTextileUnit = Boolean(type.subItems && type.subItems.length > 0);
  const gradeCount = type.gradeGroups
    ? type.gradeGroups.reduce((sum, g) => sum + g.grades.length, 0)
    : 0;
  const subItemCount = type.subItems?.length ?? 0;
  const countLabel = isTextileUnit
    ? `${subItemCount} product ${subItemCount === 1 ? "type" : "types"}`
    : gradeCount > 0
    ? `${gradeCount} ${gradeCount === 1 ? "grade" : "grades"}`
    : "Contact for grades";

  const imageSrc = PRODUCT_TYPE_IMAGES[type.id] ?? null;

  /** For no-grade products clicking "Enquire" scrolls to #contact */
  const handleClick = () => {
    const noGrades = !isTextileUnit && gradeCount === 0;
    if (noGrades) {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="group relative text-left rounded-2xl overflow-hidden border border-white/[0.07] hover:border-[#d4a435]/40 bg-[#0b1525] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/50 focus:outline-none focus:ring-2 focus:ring-[#d4a435]/30"
      aria-label={`View ${type.name}`}
    >
      {/* ── Product image banner ─────────────────────────────── */}
      <div className="relative w-full h-[110px] overflow-hidden">
        {imageSrc ? (
          imageSrc.endsWith(".svg") ? (
            // SVG placeholders: plain img (next/image skips SVG optimization)
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={type.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <Image
              src={imageSrc}
              alt={type.name}
              fill
              priority={index < 6}
              loading={index < 6 ? undefined : "lazy"}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )
        ) : (
          <div className="w-full h-full bg-[#0f1e36] flex items-center justify-center text-3xl">
            {type.icon}
          </div>
        )}
        {/* Dark gradient fade into card body */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,21,37,0.0) 0%, rgba(11,21,37,0.5) 60%, rgba(11,21,37,1) 100%)",
          }}
        />
        {/* Hover gold tint */}
        <div className="absolute inset-0 bg-[#d4a435]/0 group-hover:bg-[#d4a435]/8 transition-all duration-300 pointer-events-none" />
      </div>

      {/* ── Card text body ───────────────────────────────────── */}
      <div className="px-4 pt-3 pb-4 flex flex-col">
        {/* Name */}
        <h3
          className="text-white font-bold text-[14px] leading-snug mb-1.5 group-hover:text-[#d4a435] transition-colors duration-200"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {type.name}
        </h3>

        {/* Short desc */}
        <p className="text-white/40 text-[11.5px] leading-relaxed mb-3.5 line-clamp-2">
          {type.shortDesc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
          <span className="text-white/25 text-[10px] tracking-wider uppercase font-medium">
            {countLabel}
          </span>
          <span className="flex items-center gap-1 text-[#d4a435] text-[11px] font-bold group-hover:gap-2 transition-all duration-200">
            {isTextileUnit ? "View Types" : gradeCount > 0 ? "View Grades" : "Enquire"}
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Bottom gold line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, transparent, #d4a435, transparent)" }}
      />
    </button>
  );
});

// ─────────────────────────────────────────
// Level 2 — Types View
// ─────────────────────────────────────────
interface TypesViewProps {
  category: ProductCategory;
  onSelect: (type: ProductType) => void;
  onBack: () => void;
}

function TypesView({ category, onSelect, onBack }: TypesViewProps) {
  return (
    <div>
      <BackButton label="Back to Categories" onClick={onBack} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.productTypes.map((type, i) => (
          <TypeCard key={type.id} type={type} index={i} onClick={() => onSelect(type)} />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Grade Short Description Modal
// ─────────────────────────────────────────
const GradeModal = memo(function GradeModal({
  grade,
  productName,
  onClose,
}: {
  grade: string;
  productName: string;
  onClose: () => void;
}) {
  const description = getGradeDescription(grade, productName);
  const whatsappUrl = `https://wa.me/${COMPANY.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hello Sri Venkateswara Enterprises, I am interested in ${productName} (Grade: ${grade}). Please share pricing and availability.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="relative bg-[#061120] border border-[#d4a435]/40 rounded-t-2xl sm:rounded-2xl max-w-md w-full p-6 shadow-2xl overflow-hidden max-h-[90dvh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gold line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a435] to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-[#d4a435]/15 border border-[#d4a435]/30 text-[#d4a435] font-bold text-xs uppercase tracking-wider">
              Grade Spec
            </span>
            <span className="text-white/40 text-xs font-medium">{productName}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/15 text-white/60 hover:text-white flex items-center justify-center transition-colors font-bold text-sm"
            aria-label="Close specification"
          >
            ✕
          </button>
        </div>

        {/* Grade Title */}
        <h3
          className="text-2xl font-black text-white mb-3 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {grade}
        </h3>

        {/* Short Description — Deep dark executive box */}
        <div className="bg-[#030914] border border-[#d4a435]/20 rounded-xl p-4 mb-6 shadow-inner">
          <p className="text-white/85 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white font-bold text-xs transition-all shadow-md"
          >
            <WhatsAppIcon />
            Enquire Grade
          </a>
          <button
            onClick={onClose}
            className="py-2.5 px-4 rounded-xl border border-white/15 hover:bg-white/10 text-white font-semibold text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
});

// ─────────────────────────────────────────
// Clean, Compact Grade Card (No images)
// ─────────────────────────────────────────
const GradeCard = memo(function GradeCard({
  grade,
  onClick,
}: {
  grade: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-between px-3.5 py-3 rounded-xl border border-white/[0.08] hover:border-[#d4a435]/60 bg-[#0b1525] hover:bg-[#0f1f35] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 text-left w-full select-none"
      aria-label={`View specification for grade ${grade}`}
    >
      <span className="text-[#d4a435] text-[13px] font-bold tracking-wide group-hover:text-[#f5dc80] transition-colors">
        {grade}
      </span>
      <div className="w-5 h-5 rounded-full bg-white/[0.04] group-hover:bg-[#d4a435]/15 flex items-center justify-center transition-colors shrink-0 ml-1.5">
        <svg className="w-3 h-3 text-white/30 group-hover:text-[#d4a435] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </button>
  );
});

// ─────────────────────────────────────────
// Level 3 — Sub-Item Card (Textile units, No Icons)
// ─────────────────────────────────────────
interface SubItemCardProps {
  item: TextileSubItem;
  onGradeClick?: (grade: string, productName: string) => void;
}

const SubItemCard = memo(function SubItemCard({ item, onGradeClick }: SubItemCardProps) {
  const hasGrades = item.gradeGroups.some((g) => g.grades.length > 0);

  return (
    <div className="rounded-xl border border-white/[0.07] bg-[#0b1525] p-5">
      {/* Header — Icon removed */}
      <div className="mb-4">
        <h4
          className="text-white font-bold text-[14px] leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {item.name}
        </h4>
      </div>

      {hasGrades ? (
        <div className="space-y-4">
          {item.gradeGroups.map((group, gi) => (
            <div key={gi}>
              {group.groupName && (
                <p className="text-[#d4a435] text-[10.5px] font-bold tracking-[0.18em] uppercase mb-2.5">
                  {group.groupName}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {group.grades.map((grade) => (
                  <GradeChip
                    key={grade}
                    grade={grade}
                    compact
                    onClick={() => onGradeClick?.(grade, item.name)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white/35 text-[12px] leading-relaxed">
          Contact us for available grades and specifications.
        </p>
      )}
    </div>
  );
});

// ─────────────────────────────────────────
// Level 3 — Grades / Specifications View (No Icons)
// ─────────────────────────────────────────
interface GradesViewProps {
  category: ProductCategory;
  type: ProductType;
  onBack: () => void;
}

function GradesView({ category, type, onBack }: GradesViewProps) {
  const isTextileUnit = Boolean(type.subItems && type.subItems.length > 0);
  const hasGrades =
    !isTextileUnit &&
    type.gradeGroups &&
    type.gradeGroups.some((g) => g.grades.length > 0);

  const [activeGrade, setActiveGrade] = React.useState<{
    grade: string;
    productName: string;
  } | null>(null);

  return (
    <div>
      <BackButton label={`Back to ${category.name}`} onClick={onBack} />

      {/* Grade Short Description Modal */}
      {activeGrade && (
        <GradeModal
          grade={activeGrade.grade}
          productName={activeGrade.productName}
          onClose={() => setActiveGrade(null)}
        />
      )}

      {/* Product type header — Clean corporate design (No icons) */}
      <div className="mb-8 rounded-r-2xl rounded-l-md border-l-4 border-[#d4a435] bg-gradient-to-r from-[#0b1525] via-[#0d1a2e] to-[#0b1525]/60 p-6 border-y border-r border-white/[0.07] shadow-2xl relative overflow-hidden">
        {/* Background ambient glow */}
        <div
          className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #d4a435 0%, transparent 70%)" }}
        />

        <div className="relative">
          {/* Category label badge */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a435]" />
              <span className="text-[#d4a435] text-[11px] font-bold tracking-[0.2em] uppercase">
                {category.name}
              </span>
            </div>

            {/* Premium title */}
            <h3
              className="text-white font-black text-2xl sm:text-3xl tracking-tight mb-1.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {type.name}
            </h3>

            {/* Description */}
            <p className="text-white/50 text-[13.5px] leading-relaxed max-w-2xl">
              {type.shortDesc}
            </p>
          </div>
        </div>

      {/* ── Textile Unit: Sub-items grid ── */}
      {isTextileUnit && type.subItems && (
        <>
          <div className="grid sm:grid-cols-2 gap-4 mb-2">
            {type.subItems.map((item) => (
              <SubItemCard
                key={item.id}
                item={item}
                onGradeClick={(g, name) => setActiveGrade({ grade: g, productName: name })}
              />
            ))}
          </div>
          <EnquirySection productName={type.name} />
        </>
      )}

      {/* ── Regular: Grade groups with clean compact GradeCards ── */}
      {hasGrades && type.gradeGroups && (
        <>
          <div className="space-y-8">
            {type.gradeGroups.map((group, gi) => (
              <div key={gi}>
                {group.groupName && (
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-5 h-[1.5px] bg-[#d4a435]/60" />
                    <h4 className="text-[#d4a435] text-[11px] font-bold tracking-[0.22em] uppercase">
                      {group.groupName}
                    </h4>
                    <span className="flex-1 h-px bg-[#d4a435]/10" />
                  </div>
                )}
                {/* Clean compact grade cards grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {group.grades.map((grade) => (
                    <GradeCard
                      key={grade}
                      grade={grade}
                      onClick={() => setActiveGrade({ grade, productName: type.name })}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Compact enquiry bar below grades */}
          <EnquiryBar productName={type.name} />
        </>
      )}

      {/* ── No grades: scroll to contact CTA ── */}
      {!isTextileUnit && !hasGrades && (
        <div className="mt-6 rounded-2xl border border-white/8 bg-[#0b1525] p-6">
          <p className="text-white/45 text-sm leading-relaxed mb-5">
            Grades and specifications for{" "}
            <span className="text-white/70 font-semibold">{type.name}</span>{" "}
            are available on request. Get in touch with our team.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4a435] hover:bg-[#c49328] text-[#0f172a] font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────
// Main Products Component
// ─────────────────────────────────────────
export default function Products() {
  const [level, setLevel] = useState<Level>(1);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);
  const [selectedType, setSelectedType] = useState<ProductType | null>(null);
  const [viewKey, setViewKey] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);

  /** Scroll to the top of the #products section on each navigation */
  const scrollToSection = useCallback(() => {
    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const goToLevel1 = useCallback(() => {
    setLevel(1);
    setSelectedCategory(null);
    setSelectedType(null);
    setViewKey((k) => k + 1);
    scrollToSection();
  }, [scrollToSection]);

  const goToLevel2 = useCallback(
    (cat?: ProductCategory) => {
      const target = cat ?? selectedCategory;
      if (!target) return;
      setSelectedCategory(target);
      setSelectedType(null);
      setLevel(2);
      setViewKey((k) => k + 1);
      scrollToSection();
    },
    [selectedCategory, scrollToSection]
  );

  const goToLevel3 = useCallback(
    (type: ProductType) => {
      setSelectedType(type);
      setLevel(3);
      setViewKey((k) => k + 1);
      scrollToSection();
    },
    [scrollToSection]
  );

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(160deg, #060d1a 0%, #0a1428 40%, #0f172a 70%, #071020 100%)",
      }}
    >
      {/* ── Background decorations (unchanged from original) ── */}
      <div
        className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full pointer-events-none animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(212,164,53,0.07) 0%, rgba(212,164,53,0.02) 40%, transparent 70%)",
          animationDuration: "9s",
        }}
      />
      <div
        className="absolute -bottom-24 -right-16 w-[400px] h-[400px] rounded-full pointer-events-none animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(99,130,190,0.07) 0%, rgba(99,130,190,0.02) 40%, transparent 70%)",
          animationDuration: "12s",
          animationDelay: "3s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,164,53,0.04) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-px h-full pointer-events-none opacity-20"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(212,164,53,0.6) 40%, rgba(212,164,53,0.6) 60%, transparent)",
          transform: "translateX(-120px) skewX(-15deg)",
          width: "1px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (unchanged from original) ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#d4a435]/60" />
            <span className="text-[#d4a435] text-[11px] font-bold tracking-[0.28em] uppercase">
              Our Products
            </span>
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
            A comprehensive range of industrial oils, lubricants, and specialty
            products to meet every lubrication requirement across diverse
            industries.
          </p>
        </div>

        {/* ── Breadcrumb (Level 2 and 3 only) ── */}
        {level > 1 && (
          <Breadcrumb
            level={level}
            selectedCategory={selectedCategory}
            selectedType={selectedType}
            goToLevel1={goToLevel1}
            goToLevel2={() => goToLevel2()}
          />
        )}

        {/* ── Animated view container ── */}
        <div key={viewKey} className="animate-fade-in-up" style={{ animationDuration: "0.45s" }}>
          {level === 1 && <CategoriesView onSelect={goToLevel2} />}

          {level === 2 && selectedCategory && (
            <TypesView
              category={selectedCategory}
              onSelect={goToLevel3}
              onBack={goToLevel1}
            />
          )}

          {level === 3 && selectedType && selectedCategory && (
            <GradesView
              category={selectedCategory}
              type={selectedType}
              onBack={() => goToLevel2()}
            />
          )}
        </div>

        {/* ── Bottom CTA (Level 1 only, unchanged from original) ── */}
        {level === 1 && (
          <div className="mt-14 text-center">
            <p className="text-white/40 text-sm mb-4">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-gold inline-flex"
              style={{ borderColor: "rgba(212,164,53,0.5)", color: "#d4a435" }}
            >
              Contact Us for Custom Requirements
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
