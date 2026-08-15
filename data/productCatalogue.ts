// ============================================================
// PRODUCT CATALOGUE — 3-Level Drill-Down Data
// Sri Venkateswara Enterprises
//
// Structure:
//   ProductCategory  (Level 1 — Industry)
//     └── ProductType  (Level 2 — Product)
//           ├── gradeGroups  (Level 3 — flat or grouped grades)
//           └── subItems     (Level 3 — Textile units: sub-product-types + grades)
//
// Industry Order (exact):
//   1. Textile Industries
//   2. Metal Working Fluids
//   3. Automotive Industries
//   4. Paper & Sugar Mills
//   5. Quarries & Blue Metals
//   6. Injection Mouldings
//   7. Pump & Compressor Manufacturers
//   8. Agricultural Machinery Manufacturers
//   9. Rubber Industries
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
  // 1. TEXTILE INDUSTRIES
  // ══════════════════════════════════════
  {
    id: "textile",
    name: "Textile Industries",
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
                  "EP2",
                  "MP3",
                  "Calcium Grease",
                  "High Temperature Grease",
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
  // 2. METAL WORKING FLUIDS
  // ══════════════════════════════════════
  {
    id: "metalworking",
    name: "Metal Working Fluids",
    description:
      "Cutting fluids, coolants, way lubes, and protective oils for precision metalworking, machining, and CNC operations.",
    icon: "🔨",
    productTypes: [
      {
        id: "coolants",
        name: "Coolants",
        shortDesc:
          "Water-miscible metalworking coolants for turning, milling, drilling, and grinding operations — providing superior cooling and corrosion protection.",
        icon: "🌊",
        gradeGroups: [],
      },
      {
        id: "way-lube",
        name: "Way Lube",
        shortDesc:
          "Precision slideway lubricants for CNC machine tool guide ways, tables, and saddles — reducing stick-slip and ensuring accurate machine movement.",
        icon: "🛤️",
        gradeGroups: [],
      },
      {
        id: "hydraulic-oil",
        name: "Hydraulic Oil",
        shortDesc:
          "Anti-wear hydraulic fluids for CNC machine tool hydraulic systems, clamping units, and tooling circuits.",
        icon: "💧",
        gradeGroups: [
          { grades: ["ISO VG 32", "ISO VG 46", "ISO VG 68"] },
        ],
      },
      {
        id: "neat-cutting-oil",
        name: "Neat Cutting Oil",
        shortDesc:
          "Undiluted neat cutting oils for demanding machining of difficult-to-cut materials — gear hobbing, thread grinding, broaching, and deep hole drilling.",
        icon: "🔧",
        gradeGroups: [],
      },
      {
        id: "rust-preventive",
        name: "Rust Preventive",
        shortDesc:
          "Protective rust preventive oils forming a thin durable film on machined surfaces and components during storage, transit, and inter-process periods.",
        icon: "🛡️",
        gradeGroups: [],
      },
    ],
  },

  // ══════════════════════════════════════
  // 3. AUTOMOTIVE INDUSTRIES
  // ══════════════════════════════════════
  {
    id: "automotive",
    name: "Automotive Industries",
    description:
      "Engine oils, gear oils, hydraulic fluids, transmission fluids, and brake oils for automotive and commercial fleet applications.",
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
            grades: [
              "SAE 5W-30",
              "SAE 15W-40",
              "SAE 15W-40 CF-4",
              "SAE 15W-40 CH-4",
              "SAE 15W-40 CI-4",
              "SAE 15W-40 CI-4+",
              "SAE 15W-40 CJ-4",
              "SAE 15W-40 CK-4",
              "SAE 20W-40",
            ],
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
            groupName: "Multi-Grade",
            grades: ["SAE 80W-90", "SAE 85W-140"],
          },
          {
            groupName: "Mono Grade",
            grades: ["SAE 90", "SAE 140"],
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
          "High-performance brake fluids ensuring reliable and safe braking performance in disc, drum, and ABS systems.",
        icon: "🛑",
        gradeGroups: [
          { grades: ["DOT 3", "DOT 4"] },
        ],
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
              "ATF Type A",
              "ATF Dexron II",
              "ATF Dexron III",
              "ATF Dexron VI",
              "ATF Mercon V",
              "ATF Mercon LV",
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
  // 4. PAPER & SUGAR MILLS
  // ══════════════════════════════════════
  {
    id: "paper-sugar-mills",
    name: "Paper & Sugar Mills",
    description:
      "Hydraulic oils, industrial gear oils, and specialty greases for paper mills, sugar cane processing equipment, and mill drives.",
    icon: "🏭",
    productTypes: [
      {
        id: "hydraulic-oil",
        name: "Hydraulic Oil",
        shortDesc:
          "Anti-wear hydraulic fluids for paper mill and sugar mill hydraulic systems, press sections, and control circuits.",
        icon: "💧",
        gradeGroups: [
          { grades: ["ISO VG 68"] },
        ],
      },
      {
        id: "gear-oil",
        name: "Gear Oil",
        shortDesc:
          "Heavy-duty extreme-pressure gear lubricants for mill drives, roller press gearboxes, and conveyor gearboxes in paper and sugar mills.",
        icon: "⚙️",
        gradeGroups: [
          { grades: ["ISO VG 100", "ISO VG 150", "ISO VG 220", "ISO VG 320"] },
        ],
      },
      {
        id: "grease",
        name: "Grease",
        shortDesc:
          "Specialty greases for rolling element bearings, plain bearings, and high-load lubrication points in paper and sugar mill equipment.",
        icon: "🔧",
        gradeGroups: [
          {
            grades: [
              "EP2",
              "MP3",
              "Bearing Grease",
              "Bell Load Grease",
              "High Temperature Grease",
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════
  // 5. QUARRIES & BLUE METALS
  // ══════════════════════════════════════
  {
    id: "quarries-blue-metals",
    name: "Quarries & Blue Metals",
    description:
      "Hydraulic oils, heavy-duty gear oils, and multi-purpose greases for quarrying equipment, crushers, excavators, and earthmoving machinery.",
    icon: "⛏️",
    productTypes: [
      {
        id: "hydraulic-oil",
        name: "Hydraulic Oil",
        shortDesc:
          "Anti-wear hydraulic fluids for excavators, loaders, drilling rigs, and quarry machinery hydraulic systems.",
        icon: "💧",
        gradeGroups: [
          { grades: ["ISO VG 32", "ISO VG 68"] },
        ],
      },
      {
        id: "gear-oil",
        name: "Gear Oil",
        shortDesc:
          "Heavy-duty extreme-pressure gear oils for crusher gearboxes, conveyor drives, and final drives in quarrying and blue metal processing equipment.",
        icon: "⚙️",
        gradeGroups: [
          {
            groupName: "Industrial EP Gear Oil (ISO VG)",
            grades: ["ISO VG 150", "ISO VG 320", "ISO VG 460"],
          },
          {
            groupName: "Automotive Gear Oil (SAE)",
            grades: ["SAE 5W-30", "SAE 10W-30", "SAE 15W-40", "SAE 20W-40", "SAE 80W-90", "SAE 85W-140"],
          },
        ],
      },
      {
        id: "grease",
        name: "Grease",
        shortDesc:
          "Multi-purpose and extreme-pressure greases for chassis points, bearings, and heavily loaded pivots on quarrying and earthmoving equipment.",
        icon: "🔧",
        gradeGroups: [
          { grades: ["EP000", "EP00", "EP2", "MP3"] },
        ],
      },
    ],
  },

  // ══════════════════════════════════════
  // 6. INJECTION MOULDINGS
  // ══════════════════════════════════════
  {
    id: "injection-mouldings",
    name: "Injection Mouldings",
    description:
      "Hydraulic oils and greases for injection moulding machines, clamping systems, and plasticising units.",
    icon: "🔩",
    productTypes: [
      {
        id: "hydraulic-oil",
        name: "Hydraulic Oil",
        shortDesc:
          "High-performance anti-wear hydraulic fluids for injection moulding machine clamping circuits, injection units, and servo-hydraulic systems.",
        icon: "💧",
        gradeGroups: [
          { grades: ["ISO VG 32", "ISO VG 46", "ISO VG 68", "ISO VG 100"] },
        ],
      },
      {
        id: "grease",
        name: "Grease",
        shortDesc:
          "Fluid greases for automatic centralised lubrication systems, toggle mechanisms, and sliding guides on injection moulding machines.",
        icon: "🔧",
        gradeGroups: [
          { grades: ["EP000", "EP00"] },
        ],
      },
    ],
  },

  // ══════════════════════════════════════
  // 7. PUMP & COMPRESSOR MANUFACTURERS
  // ══════════════════════════════════════
  {
    id: "pump-compressor",
    name: "Pump & Compressor Manufacturers",
    description:
      "Hydraulic oils and engine oils for centrifugal pumps, reciprocating compressors, rotary screw compressors, and pump-set assemblies.",
    icon: "💨",
    productTypes: [
      {
        id: "hydraulic-oil",
        name: "Hydraulic Oil",
        shortDesc:
          "Anti-wear hydraulic fluids for hydraulic pump test rigs, pump-driven hydraulic systems, and compressor control circuits.",
        icon: "💧",
        gradeGroups: [
          { grades: ["ISO VG 32", "ISO VG 46", "ISO VG 68", "ISO VG 100", "ISO VG 150", "ISO VG 220"] },
        ],
      },
      {
        id: "engine-oil",
        name: "Engine Oil",
        shortDesc:
          "Diesel engine lubricant for engine-driven pump sets and engine-driven compressor units used in field and industrial applications.",
        icon: "🏎️",
        gradeGroups: [
          { grades: ["SAE 20W-40"] },
        ],
      },
    ],
  },

  // ══════════════════════════════════════
  // 8. AGRICULTURE
  // ══════════════════════════════════════
  {
    id: "agriculture",
    name: "Agricultural Machinery Manufacturers",
    description:
      "Engine oils, gear oils, and greases for tractors, combine harvesters, tillers, and agricultural machinery.",
    icon: "🌾",
    productTypes: [
      {
        id: "engine-oil",
        name: "Engine Oil",
        shortDesc:
          "Heavy-duty diesel engine lubricants for agricultural tractors, tillers, and farm machinery engines operating under varying load conditions.",
        icon: "🏎️",
        gradeGroups: [
          { grades: ["SAE 15W-40", "SAE 20W-40"] },
        ],
      },
      {
        id: "gear-oil",
        name: "Gear Oil",
        shortDesc:
          "Monograde gear lubricants for tractor gearboxes, rear axles, and power take-off (PTO) units.",
        icon: "⚙️",
        gradeGroups: [
          { grades: ["SAE 90", "SAE 140"] },
        ],
      },
      {
        id: "grease",
        name: "Grease",
        shortDesc:
          "Multi-purpose lithium grease for tractor chassis lubrication points, bearings, and joints.",
        icon: "🔧",
        gradeGroups: [
          { grades: ["MP3"] },
        ],
      },
    ],
  },

  // ══════════════════════════════════════
  // 9. RUBBER INDUSTRIES
  // ══════════════════════════════════════
  {
    id: "rubber-industries",
    name: "Rubber Industries",
    description:
      "Rubber process oils, hydraulic fluids, gear oils, and greases for rubber mixing mills, calenders, extruders, and vulcanising equipment.",
    icon: "⭕",
    productTypes: [
      {
        id: "rubber-oil",
        name: "Rubber Oil",
        shortDesc:
          "Aromatic, naphthenic, or paraffinic process oils used as extenders and plasticisers in rubber compounding for tyres, belts, hoses, and moulded goods.",
        icon: "🛢️",
        gradeGroups: [],
      },
      {
        id: "hydraulic-oil",
        name: "Hydraulic Oil",
        shortDesc:
          "Anti-wear hydraulic fluid for rubber injection moulding, compression moulding, and vulcanising press hydraulic circuits.",
        icon: "💧",
        gradeGroups: [
          { grades: ["ISO VG 68"] },
        ],
      },
      {
        id: "gear-oil",
        name: "Gear Oil",
        shortDesc:
          "Extreme-pressure gear lubricant for heavy gearboxes on rubber mixing mills, open mills, and calender drives.",
        icon: "⚙️",
        gradeGroups: [
          { grades: ["ISO VG 460"] },
        ],
      },
      {
        id: "grease",
        name: "Grease",
        shortDesc:
          "Multi-purpose grease for bearings, calender roll bearings, and general lubrication points in rubber processing equipment.",
        icon: "🔧",
        gradeGroups: [
          { grades: ["MP3"] },
        ],
      },
    ],
  },
];
