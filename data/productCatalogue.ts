// ============================================================
// PRODUCT CATALOGUE — 3-Level Drill-Down Data
// Sri Venkateswara Enterprises
//
// Structure:
//   ProductCategory  (Level 1)
//     └── ProductType  (Level 2)
//           ├── gradeGroups  (Level 3 — flat or grouped grades)
//           └── subItems     (Level 3 — Textile units: sub-product-types + grades)
//
// IMPORTANT: Only grades/names explicitly provided in project spec
// are listed here. Do NOT add invented grades or technical claims.
// ============================================================

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────

export interface GradeGroup {
  /** Optional header for a group of grades (e.g. "Manual Transmission Oil (MTF)") */
  groupName?: string;
  grades: string[];
}

/** Used inside Textile units — a product type with its own grades */
export interface TextileSubItem {
  id: string;
  name: string;
  icon: string;
  gradeGroups: GradeGroup[];
}

export interface ProductType {
  id: string;
  name: string;
  shortDesc: string;
  icon: string;
  /**
   * For regular product types: flat or grouped grade lists.
   * If all groups are empty, Level 3 shows only an enquiry CTA.
   */
  gradeGroups?: GradeGroup[];
  /**
   * For Textile unit product types: sub-items are product types
   * within that unit, each with their own grades.
   */
  subItems?: TextileSubItem[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  productTypes: ProductType[];
}

// ─────────────────────────────────────────
// Catalogue Data
// ─────────────────────────────────────────

export const PRODUCT_CATALOGUE: ProductCategory[] = [
  // ══════════════════════════════════════
  // 1. AUTOMOTIVE LUBRICANTS
  // ══════════════════════════════════════
  {
    id: "automotive",
    name: "Automotive Lubricants",
    description:
      "Engine oils, gear oils, hydraulic fluids, transmission fluids and compressor oils for automotive and fleet applications.",
    icon: "🚗",
    productTypes: [
      {
        id: "engine-oil",
        name: "Engine Oil",
        shortDesc:
          "Premium engine lubricants for petrol and diesel engines across commercial and passenger vehicles.",
        icon: "🏎️",
        gradeGroups: [
          {
            grades: ["5W-30", "15W-40", "CF-4", "CH-4", "CI-4", "CI-4+", "CJ-4", "CK-4"],
          },
        ],
      },
      {
        id: "gear-oil",
        name: "Gear Oil",
        shortDesc:
          "Heavy-duty gear lubricants for automotive gearboxes, axles, and differentials.",
        icon: "⚙️",
        gradeGroups: [
          {
            grades: ["80W-90", "85W-140", "Mono Grade 90", "Mono Grade 140"],
          },
        ],
      },
      {
        id: "hydraulic-oil",
        name: "Hydraulic Oil",
        shortDesc:
          "High-performance hydraulic fluids for automotive power-steering and hydraulic brake systems.",
        icon: "💧",
        gradeGroups: [
          {
            grades: ["ISO VG 32", "ISO VG 46", "ISO VG 68"],
          },
        ],
      },
      {
        id: "hlp-hydraulic-oil",
        name: "HLP Hydraulic Oil",
        shortDesc:
          "Anti-wear hydraulic oils meeting DIN 51524 Part 2 HLP specification for demanding hydraulic systems.",
        icon: "🔵",
        gradeGroups: [
          {
            grades: ["HLP 32", "HLP 46", "HLP 68"],
          },
        ],
      },
      {
        id: "brake-oil",
        name: "Brake Oil",
        shortDesc:
          "High-performance brake fluids ensuring reliable and safe braking performance.",
        icon: "🛑",
        gradeGroups: [],
      },
      {
        id: "transmission-oil",
        name: "Transmission Oil",
        shortDesc:
          "Manual and automatic transmission fluids formulated for smooth, reliable gear operation.",
        icon: "🔄",
        gradeGroups: [
          {
            groupName: "Manual Transmission Oil (MTF)",
            grades: ["SAE 75W-80", "SAE 75W-90", "SAE 80W-90", "SAE 85W-140"],
          },
          {
            groupName: "Automatic Transmission Fluid (ATF)",
            grades: [
              "ATF Dexron II",
              "ATF Dexron III",
              "ATF Dexron VI",
              "ATF Mercon V",
              "ATF Mercon LV",
              "ATF Type A",
            ],
          },
        ],
      },
      {
        id: "screw-compressor-oil",
        name: "Screw Compressor Oil",
        shortDesc:
          "Specialised lubricants for rotary screw compressors in automotive service and industrial use.",
        icon: "💨",
        gradeGroups: [],
      },
    ],
  },

  // ══════════════════════════════════════
  // 2. INDUSTRIAL LUBRICANTS
  // ══════════════════════════════════════
  {
    id: "industrial",
    name: "Industrial Lubricants",
    description:
      "Hydraulic oils, gear oils, turbine oils, transformer oils, and process fluids for industrial machinery and power equipment.",
    icon: "🏭",
    productTypes: [
      {
        id: "hydraulic-oil",
        name: "Hydraulic Oil",
        shortDesc:
          "Industrial-grade hydraulic fluids for high-pressure systems, CNC machines, presses, and mobile equipment.",
        icon: "⚙️",
        gradeGroups: [
          {
            grades: ["ISO VG 32", "ISO VG 46", "ISO VG 68"],
          },
        ],
      },
      {
        id: "gear-oil",
        name: "Gear Oil",
        shortDesc:
          "Heavy-duty industrial gear lubricants with extreme pressure additives for gearboxes and mill drives.",
        icon: "⚡",
        gradeGroups: [
          {
            grades: ["ISO VG 150", "ISO VG 220", "ISO VG 320"],
          },
        ],
      },
      {
        id: "turbine-oil",
        name: "Turbine Oil",
        shortDesc:
          "High-purity turbine lubricants for steam turbines, gas turbines, and large electric motor bearings.",
        icon: "🌀",
        gradeGroups: [],
      },
      {
        id: "compressor-oil",
        name: "Compressor Oil",
        shortDesc:
          "Purpose-formulated lubricants for rotary screw, reciprocating, and centrifugal compressors.",
        icon: "💨",
        gradeGroups: [],
      },
      {
        id: "transformer-oil",
        name: "Transformer Oil",
        shortDesc:
          "Insulating and cooling oils for power distribution transformers, switchgear, and electrical equipment.",
        icon: "🔌",
        gradeGroups: [],
      },
      {
        id: "heat-transfer-oil",
        name: "Heat Transfer Oil",
        shortDesc:
          "Thermal fluids for closed-loop indirect heating systems and high-temperature industrial processes.",
        icon: "🌡️",
        gradeGroups: [],
      },
      {
        id: "rust-preventive-oil",
        name: "Rust Preventive Oil",
        shortDesc:
          "Protective coatings to guard machined metal surfaces and components against corrosion during storage.",
        icon: "🛡️",
        gradeGroups: [],
      },
      {
        id: "spindle-oil",
        name: "Spindle Oil",
        shortDesc:
          "Ultra-low viscosity oils for high-speed precision grinding and machine tool spindles.",
        icon: "🔩",
        gradeGroups: [],
      },
    ],
  },

  // ══════════════════════════════════════
  // 3. TEXTILE LUBRICANTS
  // ══════════════════════════════════════
  {
    id: "textile",
    name: "Textile Lubricants",
    description:
      "Specialised lubricants for all stages of textile manufacturing — spinning, sizing, weaving, dyeing, and knitting.",
    icon: "🧵",
    productTypes: [
      // ── Spinning Unit ──────────────────
      {
        id: "spinning-unit",
        name: "Spinning Unit",
        shortDesc:
          "Lubricants for ring frames, open-end spinning, draw frames, and spinning preparatory machinery.",
        icon: "🌀",
        subItems: [
          {
            id: "hydraulic-oil",
            name: "Hydraulic Oil",
            icon: "💧",
            gradeGroups: [
              { grades: ["ISO VG 32", "ISO VG 46", "ISO VG 68"] },
            ],
          },
          {
            id: "gear-oil",
            name: "Gear Oil",
            icon: "⚙️",
            gradeGroups: [
              { grades: ["ISO VG 150", "ISO VG 220", "ISO VG 320"] },
            ],
          },
          {
            id: "general-purpose-oil",
            name: "General Purpose Oil",
            icon: "🛢️",
            gradeGroups: [
              { grades: ["ISO VG 220", "ISO VG 320"] },
            ],
          },
          {
            id: "greases",
            name: "Greases",
            icon: "🔧",
            gradeGroups: [
              {
                grades: [
                  "MP3 Grease",
                  "EP2 Grease",
                  "High Temperature Grease",
                  "Calcium Grease",
                ],
              },
            ],
          },
          {
            id: "specialty-lubricants",
            name: "Specialty Lubricants",
            icon: "✨",
            gradeGroups: [
              {
                grades: [
                  "Chain Spray",
                  "Open Gear Spray",
                  "Penetrating Spray",
                  "Rust Preventive Spray",
                ],
              },
            ],
          },
        ],
      },

      // ── Sizing Unit ────────────────────
      {
        id: "sizing-unit",
        name: "Sizing Unit",
        shortDesc:
          "Lubricants for sizing machines, steam cylinders, and warp preparation equipment.",
        icon: "📐",
        subItems: [
          {
            id: "gear-oil",
            name: "Gear Oil",
            icon: "⚙️",
            gradeGroups: [],
          },
          {
            id: "hydraulic-oil",
            name: "Hydraulic Oil",
            icon: "💧",
            gradeGroups: [],
          },
          {
            id: "engine-oil",
            name: "Engine Oil",
            icon: "🏎️",
            gradeGroups: [],
          },
          {
            id: "greases",
            name: "Greases",
            icon: "🔧",
            gradeGroups: [],
          },
        ],
      },

      // ── Weaving Unit ───────────────────
      {
        id: "weaving-unit",
        name: "Weaving Unit",
        shortDesc:
          "Lubricants for sulzer, rapier, and air jet weaving machines.",
        icon: "🕸️",
        subItems: [
          {
            id: "sulzer",
            name: "Sulzer Weaving Machines",
            icon: "🔩",
            gradeGroups: [],
          },
          {
            id: "rapier",
            name: "Rapier Weaving Machines",
            icon: "⚙️",
            gradeGroups: [],
          },
          {
            id: "air-jet",
            name: "Air Jet Weaving Machines",
            icon: "💨",
            gradeGroups: [],
          },
        ],
      },

      // ── Dyeing Unit ────────────────────
      {
        id: "dyeing-unit",
        name: "Dyeing Unit",
        shortDesc:
          "Lubricants for dyeing jets, jiggers, winches, and textile processing equipment.",
        icon: "🎨",
        subItems: [
          {
            id: "engine-oil",
            name: "Engine Oil",
            icon: "🏎️",
            gradeGroups: [],
          },
          {
            id: "hydraulic-oil",
            name: "Hydraulic Oil",
            icon: "💧",
            gradeGroups: [],
          },
          {
            id: "gear-oil",
            name: "Gear Oil",
            icon: "⚙️",
            gradeGroups: [],
          },
          {
            id: "industrial-gear-oil",
            name: "Industrial Gear Oil",
            icon: "⚡",
            gradeGroups: [],
          },
          {
            id: "greases",
            name: "Greases",
            icon: "🔧",
            gradeGroups: [],
          },
          {
            id: "chain-lubricants",
            name: "Chain Lubricants",
            icon: "🔗",
            gradeGroups: [],
          },
          {
            id: "special-oils",
            name: "Special Oils",
            icon: "✨",
            gradeGroups: [],
          },
        ],
      },

      // ── Knitting Unit ──────────────────
      {
        id: "knitting-unit",
        name: "Knitting Unit",
        shortDesc:
          "Light oils and specialty lubricants for flat-bed and circular knitting machinery.",
        icon: "🧶",
        subItems: [
          {
            id: "knitting-oil",
            name: "Knitting Oil",
            icon: "🧵",
            gradeGroups: [],
          },
          {
            id: "needle-oil",
            name: "Needle Oil",
            icon: "🪡",
            gradeGroups: [],
          },
          {
            id: "sewing-machine-oil",
            name: "Sewing Machine Oil",
            icon: "🔩",
            gradeGroups: [],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════
  // 4. METAL WORKING FLUIDS
  // ══════════════════════════════════════
  {
    id: "metalworking",
    name: "Metal Working Fluids",
    description:
      "Cutting oils, neat cutting oils, and quenching oils for precision metalworking, machining, and heat treatment operations.",
    icon: "🔨",
    productTypes: [
      {
        id: "cutting-oil",
        name: "Cutting Oil",
        shortDesc:
          "Precision metalworking fluids for superior surface finish and extended tool life in turning, milling, and drilling.",
        icon: "🔧",
        gradeGroups: [],
      },
      {
        id: "neat-cutting-oil",
        name: "Neat Cutting Oil",
        shortDesc:
          "Undiluted cutting fluids for demanding machining of difficult-to-cut materials requiring maximum lubrication.",
        icon: "💧",
        gradeGroups: [],
      },
      {
        id: "quenching-oil",
        name: "Quenching Oil",
        shortDesc:
          "Controlled heat treatment oils for hardening of steel and metal components with minimal distortion.",
        icon: "🔥",
        gradeGroups: [],
      },
    ],
  },

  // ══════════════════════════════════════
  // 5. SPECIALTY LUBRICANTS
  // ══════════════════════════════════════
  {
    id: "specialty",
    name: "Specialty Lubricants",
    description:
      "Industrial greases, specialty greases, and purpose-engineered lubricant solutions for extreme conditions and unique applications.",
    icon: "⭐",
    productTypes: [
      {
        id: "grease",
        name: "Grease",
        shortDesc:
          "Multi-purpose and industrial greases for rolling element bearings, plain bearings, chassis, and joints.",
        icon: "🔧",
        gradeGroups: [
          {
            grades: [
              "MP3 Grease",
              "EP2 Grease",
              "High Temperature Grease",
              "Calcium Grease",
            ],
          },
        ],
      },
      {
        id: "specialty-greases",
        name: "Specialty Greases",
        shortDesc:
          "High-performance greases formulated for extreme temperature, extreme pressure, and unique industrial environments.",
        icon: "⭐",
        gradeGroups: [],
      },
      {
        id: "specialty-oils",
        name: "Specialty Oils",
        shortDesc:
          "Purpose-formulated specialty lubricants for unique industrial processes including textile, food-grade, and chain applications.",
        icon: "✨",
        gradeGroups: [
          {
            grades: [
              "Chain Spray",
              "Open Gear Spray",
              "Penetrating Spray",
              "Rust Preventive Spray",
            ],
          },
        ],
      },
    ],
  },
];
